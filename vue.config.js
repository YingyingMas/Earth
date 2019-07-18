const webpack = require('webpack')
const resolve = require('path').resolve
let httpBaseUrl = ""//接口请求地址
let publicPath = ""//打包部署路径

switch (process.env.NODE_ENV) {
  case 'serve':
    httpBaseUrl = "/"
    publicPath = "/"
    break;
  case 'dev':
    httpBaseUrl = "/"
    publicPath = "/"
    break;
  case 'preProduct':
    httpBaseUrl = "/"
    publicPath = "/"
    break;
  case 'product':
    httpBaseUrl = "/"
    publicPath = "/"
    break;
}

module.exports = {
  baseUrl: publicPath,
  assetsDir: 'static',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088
  },
  configureWebpack: {
    output: {
      path: resolve(__dirname, 'dist'),
      filename: `js/[name]${new Date().getTime()}.js`,
    },
    plugins: [
      new webpack.DefinePlugin({
        HTTP_BASE_URL: JSON.stringify(httpBaseUrl),
      }),
    ]
  },
}
