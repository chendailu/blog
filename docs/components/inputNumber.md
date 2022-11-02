---
title: InputNumber
---

# 示例

<br/>

### 基础用法
### 使用

```vue
<template>
    <div>
        <p>步数控制 step='1'</p>
        <xly-input-number v-model="count1" :step="1"></xly-input-number>

        <p>精度设置：precision='2'</p>
        <xly-input-number v-model="count2" :precision="2"></xly-input-number>

        <p>控制器位置：control-position='right'</p>
        <xly-input-number
            v-model="count3"
            control-position="right"
        ></xly-input-number>

        <p>最大值和最小值设置：max='10' min='1'</p>
        <xly-input-number
            v-model="count4"
            :min="1"
            :max="10"
        ></xly-input-number>

        <p>取消控制器: control='false'</p>
        <xly-input-number v-model="count5" :control="false"></xly-input-number>

        <p>禁用计数器: disabled</p>
        <xly-input-number v-model="count6" disabled></xly-input-number>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
```

# API

# props

| 属性名            | 说明           | 可选值                  | 类型    | 默认值 |
| ----------------- | -------------- | ----------------------- | ------- | ------ |
| v-model           | 绑定值         | -                       | Number  | 0      |
| size              | 尺寸           | large/medium/small/mini | String  | meduim |
| max               | 设置最大值     | -                       | Number  | -      |
| min               | 设置最小值     | -                       | Number  | -      |
| step              | 设置步数       | -                       | Number  | 1      |
| precision         | 设置小数精度   | -                       | Number  | -      |
| disabled          | 禁用计数器     | true/false              | Boolean | false  |
| controls          | 使用禁用控制器 | true/false              | Boolean | false  |
| controls-position | 控制器位置     | right                   | String  | -      |
| name              | 原生属性       | -                       | String  | -      |

# events

| 事件名 | 说明               | 返回值             |
| ------ | ------------------ | ------------------ |
| change | 绑定值被改变时触发 | oldValue, newValue |
