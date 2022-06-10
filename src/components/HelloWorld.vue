<!--
 * @Description: 
 * @Author: Xi Youwei
 * @Date: 2022-05-11 15:18:24
 * @LastEditTime: 2022-05-12 17:04:05
 * @LastEditors: Xi Youwei
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useMouse } from '@vueuse/core'

defineProps<{ msg: string }>()

const count = ref(0)

const userStore  = useUserStore()

const updateUserName = () => {
  userStore.updateName('李四')
}

const { x, y } = useMouse()
const color = ref('red')

</script>

<template>
  <h1>{{ msg }} {{ count }}</h1>
  <h1>{{userStore.name}}</h1>
  <h1>{{ x }} {{ y }}</h1>
  <button @click="updateUserName">修改store</button>
  <div class="root">
    <h3>欢迎使用 scss</h3>
   </div>
   <el-button>aaaa</el-button>
   <el-button type="primary">aaaa</el-button>
   <el-icon :color="color">
      <edit />
    </el-icon>
</template>

<style scoped lang="scss">
.root {
  h3 {
    background-color: pink;
  }
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
