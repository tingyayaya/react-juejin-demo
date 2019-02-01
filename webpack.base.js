const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: '[name].bundle.[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          // 编译后使用什么loader来提取css文件，如下使用 style-loader 来提取
          fallback: 'style-loader',
          // 需要什么样的loader去编译文件，比如如下使用css-loader 去编译文件
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif|)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(ico)$/,
        loader: 'file-loader',
        options: {
          limit: 50,
          name: 'images/[name].[ext]'//相对于path的路径
        }
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader',
          options: {
            attrs: ['link:href', 'img:src', 'img:data-src'],
            minimize: true
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              ["@babel/plugin-transform-react-jsx"]
            ]
          }
        },
        exclude: /node_modeles/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html', //指定模板路径
        filename: 'index.html' //指定文件名
    }),
    new CleanWebpackPlugin('dist/'),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:5].css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      Mock: 'mockjs'
    }),
    new SpritesmithPlugin({
      spritesmithOptions: {
        padding: 4,
      },
      src: {
        cwd: path.resolve(__dirname, 'src/images/icons/'), // 图标根路径
        glob: '*.png' // 匹配任意 png 图标
      },
      target: {
        image: path.resolve(__dirname, 'src/images/sprite.png'), // 生成雪碧图目标路径与名称
        // 设置生成CSS背景及其定位的文件或方式
        css: [
          [path.resolve(__dirname, 'src/css/sprite.css'), {
            format: 'function_based_template'
          }]
        ]
      },
      customTemplates: {
        'function_based_template': function (data) {
          // console.log(data.sprites);
          const shared = [`.w-icon { background-image: url(${data.sprites[0].image}) }`]
          // 注意：此处默认图标使用的是二倍图
          const perSprite = data.sprites.map(function (sprite) {
            // background-size: SWpx SHpx;
            return `.w-icon-${sprite.name} { display: inline-block; 
              width: ${sprite.width}px;
              height: ${sprite.width}px;
              background-position: ${sprite.offset_x}px ${sprite.offset_y}px;
              vertical-align: middle;
            }`
          })
        
          return shared.concat(perSprite).join('\r\n');
        }
      },
      apiOptions: {
        cssImageRef: "../images/sprite.png", // css文件中引用雪碧图的相对位置路径配置
      },
    })
  ]
}
module.exports = config