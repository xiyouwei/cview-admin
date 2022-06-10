/*
 * @Description: rules
 * @Author: Xi Youwei
 * @Date: 2022-06-10 16:51:37
 * @LastEditTime: 2022-06-10 16:59:06
 * @LastEditors: Xi Youwei
 */
export const validatePassword = () => {
  return (rule: any, value: any, callback: any) => {
    if (!value.trim()) {
      callback(new Error('请输入密码'))
    } else if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    }
    callback()
  }
}
