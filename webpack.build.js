const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress:{  //https://github.com/mishoo/UglifyJS2
            drop_console: true  //console.log 去除
          }
        },
        sourceMap: true,
        parallel: true    //并行构建加速
      })
    ],
  }
})