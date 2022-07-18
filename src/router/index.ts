/*
 * @Description: router index
 * @Author: Xi Youwei
 * @Date: 2022-05-11 16:44:38
 * @LastEditTime: 2022-06-13 15:52:40
 * @LastEditors: Xi Youwei
 */
 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录'
		},
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/',
		component: layout,
		// children: [
		// 	{
		// 		path: '/profile',
		// 		name: 'profile',

		// 	}
		// ],
		// meta: {
		//     title: '首页',
		//     keepAlive: true,
		//     requireAuth: true
		// },
		// component: () => import('@/components/HelloWorld.vue')
	}
]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
