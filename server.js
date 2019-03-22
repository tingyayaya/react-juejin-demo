const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
let hotMiddleWare = require('webpack-hot-middleware');

const bodyParser = require('body-parser');
const session = require('express-session');
const Geetest = require('gt3-sdk')


const options = {
  mode: 'development',
 
}

const app = express(), DIST_DIR = path.join(__dirname, "dist/"), PORT = 9000;
const baseConfig = require('./webpack.base.js');
const config = Object.assign({}, baseConfig, options)

const compiler = webpack(config);

app.use(express.static(DIST_DIR))
app.use(webpackDevMiddleware(compiler,{
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
}))
app.use(hotMiddleWare(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true
}));


var click = require('./static/click');
app.get("/gt/register-click", function (req, res) {

    // 向极验申请每次验证所需的challenge
    click.register(null, function (err, data) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send(err);
            return;
        }

        if (!data.success) {
            // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
            // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址

            // 为以防万一，你可以选择以下两种方式之一：

            // 1. 继续使用极验提供的failback备用方案
            req.session.fallback = true;
            res.send(data);

            // 2. 使用自己提供的备用方案
            // todo

        } else {
            // 正常模式
            req.session.fallback = false;
            res.send(data);
        }
    });
});
app.post("/gt/validate-click", function (req, res) {
    click.validate(req.session.fallback, {
        geetest_challenge: req.body.geetest_challenge,
        geetest_validate: req.body.geetest_validate,
        geetest_seccode: req.body.geetest_seccode
    }, function (err, success) {

        if (err) {
            // 网络错误
            res.send({
                status: "error",
                info: err
            });

        } else if (!success) {

            // 二次验证失败
            res.send({
                status: "fail",
                info: '验证失败'
            });
        } else {

            res.send({
                status: "success",
                info: '发送成功'
            });
        }
    });
});

app.listen(PORT, () => {
  console.log('dev server listening at http:localhost:'+PORT);
});

