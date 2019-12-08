## messi-miniprogram
这是一套基于微信小程序的扩展组件库，为原生小程序开发者提供开箱即用的微信小程序组件库。

## 文档
正在马不停蹄开发中。。。

## 使用

1. 安装依赖

```
  git clone git@github.com:tobyDing/messi-miniprogram.git
  
  cd messi-miniprogram

  npm install
```

2. 开发

```
  npm run dev
```
* 默认会在包根目录下生成miniprogram_dev目录  
* src目录下的组件源文件会打包编译至miniprogram_dev/components目录下  

```
  npm run watch
```
* 该命令会自动监听示例demo和组件源文件的变化，动态构建目标文件至miniprogram_dev目录下 


3. 构建

```
 npm run build
```
* 默认会在包根目录下生成miniprogram_dist目录  
* 拷贝miniprogram_dist/components目录下的组件，至自己项目下使用即可
* **注意** 目前构建命令和开发时的动态构建结果一致，后续会考虑增加相应构建处理  

## 扫码查看示例
正在马不停蹄开发中。。。

## Todo
* **fix** 删除文件时不会动态构建
* **update** 更新组件类型
* **update** 更新打包机制，比如根据文件类型进行打包，提高打包效率
* **add** 发布小程序NPM包
* **add** 增加组件库使用文档
* **add** 增加组件库示例小程序
* **add** 增加测试
* **add** 增加Ts