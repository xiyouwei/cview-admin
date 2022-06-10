/*
 * @Description: 验证工具
 * @Author: Xi Youwei
 * @Date: 2022-06-09 21:16:24
 * @LastEditTime: 2022-06-09 21:19:25
 * @LastEditors: Xi Youwei
 */
/**
 * 判断是否为外部资源
 * @param path 
 */
export function isExternal(path: string) {
  return /^(http?:|mailto:|tel:)/.test(path)
}