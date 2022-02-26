# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


### vite
有两部分组成
一个开发服务器，基于原生es模块，更快的模块热更新（esm的hmr的api）
一套构建指令，使用rollup打包代码，因为是预配置，可输出用于生产环境的高度优化过的静态资源

npm create vite@latest
npm create vite@latest my-vue-app -- --template vue

查看 create-vite 以获取每个模板的更多细节

vite 天然支持ts，且仅执行ts转js的操作，使用esbuild将ts转成js

### 安装vite的vue项目
cnpm create vite@latest my-vue-app -- --template vue

### vue-router
cnpm i vue-router@4 -S

### vuex
cnpm i vuex@next -S

### axios
cnpm i axios -S

### normalize.css 更好的 reset.css 方案
cnpm i normalize.css -S


### element-plus
cnpm install element-plus --save
全局引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

### 按需引入
自动安装
cnpm install -D unplugin-vue-components unplugin-auto-import


### 国际化
npm i vue-i18n@next -S


### cookie
cnpm i js-cookie -S
cnpm i @types/js-cookie -D


### scss
cnpm i sass --save-dev
cnpm i sass-loader --save-dev
cnpm i node-sass --save-dev







### xlsx			前端导入导出
cnpm install --save xlsx file-saver
http://www.manongjc.com/detail/18-ixxcylbjilegnxr.html



### vite-plugin-compression			打包压缩，需要nginx做一些配置
cnpm i vite-plugin-compression
https://blog.csdn.net/ZhaoQM_script/article/details/120363386
https://blog.csdn.net/qq_41499782/article/details/118650279


### 移动端css
cnpm i postcss-viewport-units postcss-px-to-viewport postcss-write-svg autoprefixer -D



### 使用 http-server 开启一个本地服务器 预览效果

cnpm install http-server -g
cd dist
http-server -c-1（只输入 http-server 的话，更新了代码后，页面不会同步更新）ctrl + c 即可关闭


### 调试工具（移动端调试工具，网页端也可以）
performance的数据信息
cnpm i vconsole -S
在 main.ts 引入
import Vconsole from 'vconsole';
new Vconsole();

### PWA
cnpm i vite-plugin-pwa -D
配置 vite.config.ts 文件
import { VitePWA } from 'vite-plugin-pwa'
plugins:[
VitePWA({
manifest: {},
workbox: {
skipWaiting: true,
clientsClaim: true
}
})
]



### 组件样式按需加载配置

参考文档：https://github.com/anncwb/vite-plugin-style-import
配置 vite.config.ts 文件
cnpm i vite-plugin-style-import -D
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'	


