const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[hash:5].css',
  allChunks: true,
  disable: process.env.NODE_ENV === "development" //在用 HMR 的时候要先把它关闭一下 disable: true
})
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@' : APP_DIR
    }
  },
  entry: [
    'react-hot-loader/patch',
    "webpack-hot-middleware/client",
    APP_DIR + '/index.js'
  ],
  output: {
    filename: '[name].bundle.[hash:5].js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: `${APP_DIR}/css`,  //css modules 样式目录
        use: extractSass.extract({
          // 编译后使用什么loader来提取css文件，如下使用 style-loader 来提取
          fallback: 'style-loader',
          // 需要什么样的loader去编译文件，比如如下使用css-loader 去编译文件
          use: [ 
            {
              loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]?sourceMap=true',
            }, 
            {
              loader: 'postcss-loader',  //浏览器自动补全
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                }
              }
            }, 
            {
              loader: "sass-loader",
              options: {
                soureceMap: true
              }
            }
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.(css|scss)$/,
        include: `${APP_DIR}/css`, 
        use: extractSass.extract({
          // 编译后使用什么loader来提取css文件，如下使用 style-loader 来提取
          fallback: 'style-loader',
          // 需要什么样的loader去编译文件，比如如下使用css-loader 去编译文件
          use: [ 
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, 
            {
              loader: 'postcss-loader',  //浏览器自动补全
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                }
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
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
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        include: APP_DIR,
        exclude: /node_modeles/
      },
    ]
  },
  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html', //指定模板路径
        filename: 'index.html' //指定文件名
    }),
    new CleanWebpackPlugin('dist/'),
    
    new webpack.ProvidePlugin({
      Mock: 'mockjs'
    }),
    new SpritesmithPlugin({
      spritesmithOptions: {
        padding: 4,
      },
      src: {
        cwd: APP_DIR + '/images/icons/', // 图标根路径
        glob: '*.png' // 匹配任意 png 图标
      },
      target: {
        image:  APP_DIR + '/images/sprite.png', // 生成雪碧图目标路径与名称
        // 设置生成CSS背景及其定位的文件或方式
        css: [
          [`${APP_DIR}/css/sprite.css`, {
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