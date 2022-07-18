<!--
 * @Description: 布局index
 * @Author: Xi Youwei
 * @Date: 2022-06-13 14:24:14
 * @LastEditTime: 2022-06-13 16:35:59
 * @LastEditors: Xi Youwei
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar class="sidebar-container" :style="{backgroundColor: variables.menuBg}" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <navbar  />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
import variables from '@/styles/variables.module.scss'
console.log('variables', variables.menuBg)
// console.log(menuText)
</script>
<style scoped lang='scss'>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';

.app.wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>