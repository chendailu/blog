---
title: DatePicker
---

# 示例

<br/>

### 基础用法

<template>
    <div class='dome-wrap-datepicker'>
        <p>默认:选择日期</p>
        <xly-date-picker
        v-model="value"
        format="YYYY-MM-DD"
        value-format='YYYY-MM-DD'
        type="date"
        placeholder="选择日期">
        </xly-date-picker>
        <p>多个日期</p>
        <xly-date-picker
        v-model="value1"
        type="dates"
        placeholder="选择日期">
        </xly-date-picker>
        <p>选择周</p>
        <xly-date-picker
        v-model="value2"
        format="YYYY 第 WW 周"
        type="week"
        placeholder="选择周">
        </xly-date-picker>
        <p>选择月</p>
        <xly-date-picker
        v-model="value3"
        type="month"
        placeholder="选择月份">
        </xly-date-picker>
        <p>选择年</p>
        <xly-date-picker
        v-model="value4"
        type="year"
        placeholder="选择年份">
        </xly-date-picker>
        <p>选择范围月份</p>
        <xly-date-picker
        v-model="value5"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </xly-date-picker>
        <p>选择范围日期</p>
        <xly-date-picker
        v-model="value6"
        type="daterange"
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
            value: new Date(),
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: ''
        }
    },
    methods: {
    }
}
</script>
<style>
    .dome-wrap-datepicker{
        margin: 20px 0;
    }
</style>

### 使用

```vue
<template>
    <div>
        <p>默认:选择日期</p>
        <xly-date-picker
            v-model="value"
            format="YYYY-MM-DD"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="选择日期"
        >
        </xly-date-picker>

        <p>多个日期</p>
        <xly-date-picker v-model="value1" type="dates" placeholder="选择日期">
        </xly-date-picker>

        <p>选择周</p>
        <xly-date-picker
            v-model="value2"
            format="YYYY 第 WW 周"
            type="week"
            placeholder="选择周"
        >
        </xly-date-picker>

        <p>选择月</p>
        <xly-date-picker v-model="value3" type="month" placeholder="选择月份">
        </xly-date-picker>

        <p>选择年</p>
        <xly-date-picker v-model="value4" type="year" placeholder="选择年份">
        </xly-date-picker>

        <p>选择范围月份</p>
        <xly-date-picker
            v-model="value5"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
        >
        </xly-date-picker>

        <p>选择范围日期</p>
        <xly-date-picker
            v-model="value6"
            type="daterange"
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
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: ''
        };
    },
    methods: {}
};
</script>
```

# API

## props

| 属性名            | 说明                                     | 可选值                                                                  | 类型                                     | 默认值     |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| v-model           | 绑定值                                   | -                                                                       | date(DatePicker)/ array(DateRangePicker) | -          |
| type              | 显示类型                                 | year/month/date/dates/week/datetime /datetimerange/daterange/monthrange | String                                   | date       |
| readonly          | 只读                                     | true/false                                                              | Boolean                                  | false      |
| disabled          | 禁用                                     | true/false                                                              | Boolean                                  | false      |
| editable          | 文本框输入                               | true/false                                                              | Boolean                                  | true       |
| clearable         | 显示清空按钮                             | true/false                                                              | Boolean                                  | true       |
| size              | 输入框尺寸大小                           | large/medium/small/mini                                                 | String                                   | medium     |
| placeholder       | 非范围选择时的占位内容                   | -                                                                       |                                          | String     |
| start-placeholder | 范围选择时开始日期的占位内容             | -                                                                       |                                          | String     |
| end-placeholder   | 范围选择时结束日期的占位内容             | -                                                                       |                                          | String     |
| format            | 显示在输入框的日期格式                   | 'YYYY-MM-DD HH:mm:ss'等详情见日期格式                                   | String                                   | YYYY-MM-DD |
| value-format      | 绑定值返回时的日期格式                   | 'YYYY-MM-DD HH:mm:ss'等详情见日期格式                                   | String                                   | -          |
| name              | 原生属性                                 |                                                                         | String                                   | -          |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动 | true/false                                                              | Boolean                                  | false      |

## 日期格式

| 格式 | 含义 | 备注                             | 举例 |
| ---- | ---- | -------------------------------- | ---- |
| YYYY | 年   |                                  | 2017 |
| M    | 月   | 不补 0                           | 1    |
| MM   | 月   |                                  | 01   |
| W    | 周   | 仅周选择器的 format 可用；不补 0 | 1    |
| WW   | 周   | 仅周选择器的 format 可用         | 01   |
| D    | 日   | 不补 0                           | 2    |
| DD   | 日   |                                  | 02   |
| H    | 小时 | 24 小时制；不补 0                | 3    |
| HH   | 小时 | 24 小时制                        | 03   |
| m    | 分钟 | 不补 0                           | 4    |
| mm   | 分钟 |                                  | 04   |
| s    | 秒   | 不补 0                           | 5    |
| ss   | 秒   |                                  | 05   |

## events

| 事件名 | 说明                    | 返回值                                               |
| ------ | ----------------------- | ---------------------------------------------------- |
| change | 用户确认选定的值时触发  | 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur   | 当 input 失去焦点时触发 |                                                      |
| focus  | 当 input 获得焦点时触发 |                                                      |
