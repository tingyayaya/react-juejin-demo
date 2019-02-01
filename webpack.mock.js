const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');


module.exports = merge(base, {
  mode: "development",
  devtool: 'eval-source-map', 
  devServer:{
    contentBase: path.join(__dirname, 'dist/'),
    port: 9000,
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"mock"'
        }
    })
  ],
})