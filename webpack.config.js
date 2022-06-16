/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:37:13
 * @LastEditTime: 2022-06-16 10:03:05
 * @LastEditors: nm
 * @FilePath: \nm-jstools\webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jsTools.js',
    library: 'package', // 导出变量名
    libraryTarget: 'umd', // 所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  }
}
