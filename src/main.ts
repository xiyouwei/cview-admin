/*
 * @Description: main
 * @Author: Xi Youwei
 * @Date: 2022-05-11 15:18:24
 * @LastEditTime: 2022-06-10 14:35:06
 * @LastEditors: Xi Youwei
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 初始化样式表
import '@/styles/index.scss'

// 引入svg-icons
import svgIcon from "@/components/SvgIcon/index.vue";
import 'virtual:svg-icons-register'

// 创建vue实例
const app = createApp(App)

// 需要按需自动导入，还没弄
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).use(ElementPlus).component('svg-icon', svgIcon).mount('#app');
