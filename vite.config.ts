import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import viteCompression from 'vite-plugin-compression' 		// 打包压缩

// 因2.0.0版本中consola问题，暂时你关闭，等待作者更新新版本
// import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'			// 自动按需引入css样式


export default defineConfig({
	css: {
		// css预处理器
		preprocessorOptions: {
			scss: {
				// additionalData: '@import "@/assets/styles/global.scss";'
				javascriptEnabled: true,
			}
		}
	},
	plugins: [
		vue(),
		viteCompression(),
		// createStyleImportPlugin({
		// 	resolves: [ElementPlusResolve()]
		// }),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			// 解决vue-i18n警告You are running the esm-bundler build of vue-i18n.
			'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
		},
	},

	build: {
		outDir: 'webapp',
		chunkSizeWarningLimit: 1500, // 分块打包，分解块，将大块分解成更小的块
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			}
		}
	},

	server: {
		host: 'localhost',
		https: false,
		port: 4001,
		open: true,
		proxy: {},
		hmr: {
			overlay: false // 屏蔽服务器报错
		}
	}



})
