---
title: DateTimePicker
---

# 示例

<br/>

### 基础用法

<template>
    <div class='dome-wrap-datetimepicker'>
        <p>基本用法</p>
        <xly-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
        </xly-date-picker>
        <p>时间日期范围选择</p>
        <xly-date-picker
        v-model="value2"
        value-format='YYYY-MM-DD HH:mm:ss'
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </xly-date-picker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: ''
        }
    },
    watch:{
        value2(val){
        }
    },
    methods: {
    }
}
</script>
<style>
    .dome-wrap-datetimepicker{
        
    }
</style>

### 使用

```vue
<template>
    <div>
        <p>基本用法</p>
        <xly-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间"
        >
        </xly-date-picker>

        <p>时间日期范围选择</p>
        <xly-date-picker
            v-model="value2"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
        >
        </xly-date-picker>
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

## props (和日期选择器的文档一样)

| 属性名        | 说明                   | 可选值                | 类型 | 默认值 |
| ------------- | ---------------------- | --------------------- | ---- | ------ |
| default-value | 选择器打开时的默认时间 | 可被 new Date()解析的 | Date | -      |

## events

| 事件名 | 说明                    | 返回值                                               |
| ------ | ----------------------- | ---------------------------------------------------- |
| change | 用户确认选定的值时触发  | 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur   | 当 input 失去焦点时触发 |                                                      |
| focus  | 当 input 获得焦点时触发 |                                                      |
