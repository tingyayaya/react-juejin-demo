# react-juejin-demo
Practice build react project, following page-style of 'juejin.com' , use 'react-router-dom' and 'mobx'. Take your advice~

### webpack配置
为什么没有使用create-react-app？那是因为我不会在这个基础上拓展配置啊啊
后来看到有一篇分享 [如果拓展Creat reaact app 的webpack配置](https://zhaozhiming.github.io/blog/2018/01/08/create-react-app-override-webpack-config/) 写的很详细；当我看到这篇文章时我已经选择尝试自己配环境，也幸好，虽然磕磕绊绊的，最后也算是成功了~

1、html 和 css中图片路径不一致时 可以使用`extract-text-webpack-plugin`单独设置`publishPath` 更改css中图片的样式
  ```webpack
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../'
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif|)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
  ```
2、使用react-router-dom刷新出现404错误, 然后各种百度发现，如果使用了BowserRouter需要这么配置
  [参考连接](http://blog.codingplayboy.com/2017/12/26/react-router-browserhistory-404/)
  ```webpack
    devServer:{
      historyApiFallback: true  
    }    
  ```
  这样配置之后，开发环境没有问题， 但是打包后还是路由报错了，因为BowserRouter是需要有服务器支持的。
  公司用的是apche服务器，因为不知道是否有配置，所以干脆改了HashRouter
  
  ### 连接分享
  
  [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) 
  
  [webpack](https://www.webpackjs.com/guides/getting-started/)
  
  [mobx](https://mobx.js.org/)
  
  [react 中文网](https://reactnative.cn/docs/getting-started/) 
  
  [react 小书](http://huziketang.mangojuice.top/books/react/) 强烈推荐 
  
 


