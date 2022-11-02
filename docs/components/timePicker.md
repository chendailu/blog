---
title: TimePicker
---

# 示例

<br/>

### 基础用法

<template>
    <div class='dome-wrap-time-picker'>
        <p>基础用法</p>
        <xly-time-picker
            v-model="value"
            :picker-options="{
            selectableRange: '08:30:00 - 20:30:00'
            }"
            placeholder="任意时间点">
        </xly-time-picker>
        <p>选择时间范围</p>
        <xly-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
        </xly-time-picker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            value1: ''
        }
    },
    watch:{
        value(val){
        }
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
    <div>
        <p>基础用法</p>
        <xly-time-picker
            v-model="value"
            :picker-options="{
                selectableRange: '08:30:00 - 20:30:00'
            }"
            placeholder="任意时间点"
        >
        </xly-time-picker>

        <p>选择时间范围</p>
        <xly-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
        >
        </xly-time-picker>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            value1: ''
        };
    },
    methods: {}
};
</script>
```

# API

## props

| 属性名            | 说明                      | 可选值                  | 类型        | 默认值  |
| ----------------- | ------------------------- | ----------------------- | ----------- | ------- |
| v-model           | 绑定值                    | -                       | Date/String | default |
| readonly          | 是否只读                  | true/false              | Boolean     | false   |
| disabled          | 是否禁用                  | true/false              | Boolean     | false   |
| clearable         | 是否显示清除按钮图标      | true/false              | Boolean     | true    |
| size              | 输入框尺寸                | large/medium/small/mini | String      | medium  |
| placeholder       | 输入框占位内容            | -                       | String      | -       |
| is-range          | 是否开启范围选择          | true/false              | Boolean     | false   |
| start-placeholder | 范围选开始时间的占位内容  | -                       | String      | -       |
| end-placeholder   | 范围选结束时间的占位内容  | -                       | String      | -       |
| range-separator   | 范围选择时的中间分隔符    | -                       | String      | '-'     |
| value-format      | 绑定值的返回格式          | -                       | String/Date | -       |
| default-value     | 默认时间                  | -                       | String      | -       |
| name              | 原生属性                  | -                       | String      | -       |
| picker-options    | 时间配置项 (详情查看下边) | -                       | Object      | -       |

## Time Picker Options

| 属性名          | 说明                                | 可选值               | 类型   | 默认值  |
| --------------- | ----------------------------------- | -------------------- | ------ | ------- |
| selectableRange | 可选时段，多个用数组 ，单个用字符串 | string / array       | -      | default |
| format          | 时间格式化(TimePicker)              | 'HH:mm:ss','HH:mm'等 | String | false   |

## events

| 事件名 | 说明                 | 返回值       |
| ------ | -------------------- | ------------ |
| change | 确认选定值时触发     | 组件绑定的值 |
| blur   | input 失去焦点时触发 | -            |
| focus  | input 获得焦点时触发 | -            |
