<!--
 * @Description: SvgIcon
 * @Author: Xi Youwei
 * @Date: 2022-06-09 21:10:19
 * @LastEditTime: 2022-06-10 16:17:23
 * @LastEditors: Xi Youwei
-->
<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!-- 展示内部图标 -->
  <svg
    v-else
    class="svg-icon"
    :class="className"
    :width="size"
    :height="size"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { isExternal as external } from '@/utils/validate'
import { computed, reactive } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  // icon 图标
  name: {
    type: String,
    required: true,
  },
  // icon 类名，用于自定义样式
  className: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '1em',
  },
})

// 判断当前图标是否为外部图标
const isExternal = computed(() => external(props.name))
// 外部图标
const styleExternalIcon = computed(() => ({
  mask: `url(${props.name}) on-repeat 50% 50%`,
  '-webkit-mask': `url(${props.name}) on-repeat 50% 50%`,
}))
// 内部图标
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style scoped lang="scss">
.svg-icon {
  // // 将icon大小设置和字体大小一致，后续在通过svg-icon 使用icon的时候，可直接设置图标的font-size即可控制图标大小
  // width: 1em;
  // height: 1em;
  vertical-align: -0.15em; // 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果
  fill: currentColor; // 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
