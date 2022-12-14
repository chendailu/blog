---
title: Radio
---

# API

## radio props

| 属性名     | 类型                    | 默认值 | 说明                                                     |
| ---------- | ----------------------- | ------ | -------------------------------------------------------- |
| label      | String, Number          | false  | 当前项的值，只在组合使用时有效，组件会判断当前项选中状态 |
| value      | Boolean                 | false  | 当前项的值，只在单独使用时有效                           |
| trueValue  | String, Number, Boolean | true   | 选中时的值                                               |
| falseValue | String, Number, Boolean | false  | 未选中时的值                                             |
| disabled   | Boolean                 | false  | 是否禁用                                                 |
| name       | String                  | 无     | 原生 name 属性                                           |

## radio events

| 事件名    | 返回值               | 说明                                                                     |
| --------- | -------------------- | ------------------------------------------------------------------------ |
| on-change | trueValue/falseValue | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 |

## radioGroup props

| 属性名   | 类型           | 默认值 | 说明         |
| -------- | -------------- | ------ | ------------ |
| value    | String, Number | 无     | 默认选中值   |
| vertical | Boolean        | false  | 是否垂直排列 |

## radioGroup events

| 事件名    | 返回值 | 说明                                                                         |
| --------- | ------ | ---------------------------------------------------------------------------- |
| on-change | ...    | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 |

# 示例

## 基础用法
