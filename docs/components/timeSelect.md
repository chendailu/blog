---
title: TimeSelect
---

# 示例

<br/>

### 基础用法

<template>
    <div class='dome-wrap-time-picker'>
        <p>默认用法</p>
        <xly-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
        </xly-time-select>
        <p>时间范围内选择</p>
        <xly-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
            }">
        </xly-time-select>
        <xly-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
            }">
        </xly-time-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            startTime:'',
            endTime: ''
        }
    },
    methods: {
    }
}
</script>
<style>
    .dome-wrap-time-picker{
        
    }
</style>

### 使用

```vue
<template>
    <div class="dome-wrap-time-picker">
        <p>默认用法</p>
        <xly-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间"
        >
        </xly-time-select>

        <p>时间范围内选择</p>
        <xly-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
        >
        </xly-time-select>
        <xly-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
            }"
        >
        </xly-time-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            startTime: '',
            endTime: ''
        };
    },
    methods: {}
};
</script>
```

# API

# props

| 属性名      | 说明                 | 可选值                  | 类型        | 默认值  |
| ----------- | -------------------- | ----------------------- | ----------- | ------- |
| v-model     | 绑定值               | -                       | Date/String | default |
| readonly    | 是否只读             | true/false              | Boolean     | false   |
| disabled    | 是否禁用             | true/false              | Boolean     | false   |
| clearable   | 是否显示清除按钮图标 | true/false              | Boolean     | true    |
| size        | 输入框尺寸           | large/medium/small/mini | String      | medium  |
| placeholder | 输入框占位内容       | -                       | String      | -       |

# events

| 事件名 | 说明                 | 返回值       |
| ------ | -------------------- | ------------ |
| change | 确认选定值时触发     | 组件绑定的值 |
| blur   | input 失去焦点时触发 | -            |
| focus  | input 获得焦点时触发 | -            |
