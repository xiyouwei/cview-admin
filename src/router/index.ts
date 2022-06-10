/*
 * @Description: router index
 * @Author: Xi Youwei
 * @Date: 2022-05-11 16:44:38
 * @LastEditTime: 2022-06-09 17:47:01
 * @LastEditors: Xi Youwei
 */
 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		meta: {
		    title: '首页',
		    keepAlive: true,
		    requireAuth: true
		},
		component: () => import('@/components/HelloWorld.vue')
	}, {
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',

		},
		component: () => import('@/views/login/index.vue')
	}
]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
