---
title: Checkbox
---

# API

## checkbox props

| 属性名        | 类型                    | 默认值 | 说明                                                     |
| ------------- | ----------------------- | ------ | -------------------------------------------------------- |
| label         | String, Number, Boolean | false  | 当前项的值，只在组合使用时有效，组件会判断当前项选中状态 |
| value         | Boolean                 | false  | 当前项的值，只在单独使用时有效                           |
| trueValue     | String, Number, Boolean | true   | 选中时的值                                               |
| falseValue    | String, Number, Boolean | false  | 未选中时的值                                             |
| disabled      | Boolean                 | false  | 是否禁用                                                 |
| indeterminate | Boolean                 | false  | 半选状态                                                 |
| name          | String                  | 无     | 原生name属性                                             |

## checkbox events

| 事件名    | 返回值               | 说明           |
| --------- | -------------------- | -------------- |
| on-change | trueValue/falseValue | 单独使用时有效 |

## checkboxGroup props

| 属性名     | 类型    | 默认值 | 说明             |
| ---------- | ------- | ------ | ---------------- |
| value      | Array   | []     | 选中项值的合集   |
| dragSelect | Boolean | false  | 是否启用框选功能 |
| name       | String  | 无     | 选项组的唯一标识 |
| disabled   | Boolean | false  | 选项组是否禁用   |

## checkboxGroup events

| 事件名    | 返回值 | 说明                                                                         |
| --------- | ------ | ---------------------------------------------------------------------------- |
| on-change | [...]  | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 |


# 示例

## 基础用法

<script>
export default {
    name: 'checkbox-single',
    data() {
        return {
            value: false,
            group: []
        };
    }
}
</script>

<template>
    <div>
        <div>
            <p></p>
            <xly-checkbox v-model="value" indeterminate>single</xly-checkbox>
            <p>value: {{value}}</p>
        </div>
        <div>
            <xly-checkboxGroup v-model="group">
                <xly-checkbox label="test1" indeterminate>test1</xly-checkbox>
                <xly-checkbox label="test2" indeterminate>test2</xly-checkbox>
                <xly-checkbox label="test3" disabled>test3</xly-checkbox>
            </xly-checkboxGroup>
            <p>checked: {{group}}</p>
        </div>
    </div>
</template>
