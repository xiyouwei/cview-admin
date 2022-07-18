<!--
 * @Description: app-main
 * @Author: Xi Youwei
 * @Date: 2022-06-13 14:43:43
 * @LastEditTime: 2022-06-13 16:40:36
 * @LastEditors: Xi Youwei
-->
<template>
  <div class="app-main">
    app-main
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

</script>
<style scoped lang='scss'>
.app-main {
  // 浏览器可视区域高度 100vh
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>