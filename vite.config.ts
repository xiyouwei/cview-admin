/*
 * @Description: vite.config.ts
 * @Author: Xi Youwei
 * @Date: 2022-05-11 15:18:24
 * @LastEditTime: 2022-06-10 15:12:50
 * @LastEditors: Xi Youwei
 */
import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils")
    }
  },
  // css:{
  //   preprocessorOptions: {
  //     scss: {
  //         /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
  //         additionalData: `@import "./src/styles/index.scss";`,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    // Icons({ /* options */ }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图片文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    // 设置 https 代理
    proxy: {
      '/avatar': {
        target: 'http://172.16.15.180',
        changeOrigin: true,
        secure: false, // 如果是 https 接口需要配置这个参数
        rewrite: (path: string) => path.replace(/^\/avatar/, '/')
      },
      '/websocket': {
        target: 'ws://172.16.15.136:38888/',
        changeOrigin: true,
        ws: true,
        secure: false, // 如果是 https 接口需要配置这个参数
        rewrite: (path: string) => path.replace(/^\/websocket/, '/')
      }
    }
  }
});
