/**
 * 配置
 */
const path = require('path');

const isDev = process.argv.indexOf('--build') > 0;

//demo小程序源目录
const demoSrc = path.resolve(__dirname, './demo');
//demo小程序目标目录
const demoDist = path.resolve(__dirname, './miniprogram_dev')
//demo小程序忽略文件
const demoIgnore = [`!${demoSrc}/project.config.json`];
//组件源目录
const componentsSrc = path.resolve(__dirname, './src');
//组件目标目录
const componentsDist = path.resolve(__dirname, `./miniprogram_${isDev ? 'dist' : 'dev'}/components`)
//组件模板目录
const componentTmp = path.resolve(__dirname,`./tools/compTmp`)

module.exports = {
  demoSrc,
  demoDist,
  demoIgnore,
  componentsSrc,
  componentsDist,
  componentTmp,
}