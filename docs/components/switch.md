---
title: Switch
---

# API

## switck props

| 属性名        | 类型                    | 默认值                                                                                           | 说明  |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------ | ----- |
| value         | Boolean                 | 指定当前是否选中，可以使用 v-model 双向绑定数据                                                  | false |
| size          | String                  | 开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | -     |
| disabled      | Boolean                 | 禁用开关                                                                                         | false |
| true-value    | String, Number, Boolean | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用                                           | true  |
| false-value   | String, Number, Boolean | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用                                       | false |
| true-color    | String                  | 自定义打开时的背景色                                                                             | -     |
| false-color   | String                  | 自定义关闭时的背景色                                                                             | -     |
| before-change | Function                | 返回 Promise 可以阻止切换                                                                        | -     |
| loading       | Boolean                 | 加载中的开关                                                                                     | false |

# switck events

| 事件名    | 说明                           | 返回值     |
| --------- | ------------------------------ | ---------- |
| on-change | 开关变化时触发，返回当前的状态 | true/false |

# switck slot

| 名称  | 说明                   |
| ----- | ---------------------- |
| open  | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |


# 示例


**基础用法**

***使用***

```vue
<template>
    <div>
        <xly-switch size="small" v-model="value1"></xly-switch>
        <p>value: {{value1}}</p>
        <xly-switch v-model="value2" :trueValue="trueValue" :falseValue="falseValue"></xly-switch>
        <p>value: {{value2}}</p>
        <xly-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </xly-switch>
        <xly-switch size="large">
            <span slot="open">启动</span>
            <span slot="close">停止</span>
        </xly-switch>
    </div>
</template>

<script>
export default {
  data() {
    return {
        value1: false,
        value2: 123,
        trueValue: 123,
        falseValue: 456
    }
  }
}
</script>
```
