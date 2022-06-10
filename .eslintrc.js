/*
 * @Description: eslint配置文件
 * @Author: Xi Youwei
 * @Date: 2022-05-11 16:21:34
 * @LastEditTime: 2022-06-10 15:53:41
 * @LastEditors: Xi Youwei
 */
// ESLint 配置文件遵循 commonJS 的导出规则，所导出的对象就是 ESLint 的配置对象
module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  // env 表示启用 ESLint 检测的环境
  env: {
    // 在 node 环境下启动 ESLint 检测
    node: true
  },
  parser: 'vue-eslint-parser',
  // 解析器
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // ESLint 中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  // 启用的规则及其各自的错误级别
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    '@typescript-eslint/no-explicit-any': 0, //可以用any类型
  }
};
