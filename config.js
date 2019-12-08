/**
 * 配置
 */
const path = require('path');

const isDev = process.argv.indexOf('--build') > 0;

module.exports = {
  demoSrc: path.resolve(__dirname, './demo'),//demo小程序源目录
  demoDist: path.resolve(__dirname, './miniprogram_dev'),//demo小程序目标目录
  componentsSrc: path.resolve(__dirname, './src'),//组件源目录
  componentsDist: path.relative(__dirname, `./miniprogram_${isDev ? 'dist' : 'dev'}/components`),//组件目标目录
}