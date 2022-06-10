<!--
 * @Description: 登录页面
 * @Author: Xi Youwei
 * @Date: 2022-06-09 17:27:57
 * @LastEditTime: 2022-06-10 17:07:33
 * @LastEditors: Xi Youwei
-->
<template>
  <wavesVue :top="250" style="position: absolute" />
  <div class="login-container">
    <el-form
      ref="loginFromRef"
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <!-- <lang-select class="lang-select" effect="light"></lang-select> -->
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon><Avatar /></el-icon>
        </span>
        <el-input v-model="loginForm.username" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon><Lock /></el-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="password"
        />
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon :name="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button
        type="primary"
        size="large"
        style="width: 100%; margin-bottom: 10px"
        @click="submitForm(loginFromRef)"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Avatar } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import wavesVue from '@/components/waves.vue'
import { validatePassword } from './rules'
import type { FormInstance, FormRules } from 'element-plus'

const loginFromRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: ''
})
const passwordType = ref('password')

const loginRules = reactive<FormRules>({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;

      .el-input__wrapper,
      input {
        box-shadow: none;
        width: 100%;
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 10px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    // ::v-deep(.lang-select) {
    //   position: absolute;
    //   top: 4px;
    //   right: 0;
    //   background-color: white;
    //   font-size: 22px;
    //   padding: 4px;
    //   border-radius: 4px;
    //   cursor: pointer;
    // }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 15px;
    // font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
