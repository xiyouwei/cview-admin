<!--
 * @Description: 
 * @Author: Xi Youwei
 * @Date: 2022-05-11 15:18:24
 * @LastEditTime: 2022-05-12 16:56:55
 * @LastEditors: Xi Youwei
-->
<template>
  <el-config-provider size="small" :z-index="zIndex">
    <RouterView/>
  </el-config-provider>
</template>
<script setup lang="ts">
  import {ref} from 'vue'
  import { ElConfigProvider } from 'element-plus'
  const zIndex = ref(3000)
</script>
