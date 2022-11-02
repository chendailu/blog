---
title: Select
---

# 示例

## 基础用法
## 使用

```vue
<template>
  <div class="demo-wrap-select">
    <p>单选</p>
    <xly-select
      class="my-select"
      v-model="value"
      @change="handleChange"
      placeholder="请选择"
      size="mini"
      style="width: 80px"
    >
      <xly-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </xly-option>
    </xly-select>
    <p>多选</p>
    <xly-select
      class="my-select"
      v-model="value1"
      @change="handleChange"
      placeholder="请选择"
      size="large"
      multiple
    >
      <xly-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </xly-option>
    </xly-select>
    <p>禁用</p>
    <xly-select
      class="my-select"
      v-model="value"
      @change="handleChange"
      placeholder="请选择"
      size="large"
      disabled
    >
      <xly-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </xly-option>
    </xly-select>
  </div>
</template>

<script>
export default {
  name: "radio-doc",
  data() {
    return {
      list: [
        {
          label: "水果",
          value: "111",
        },
        {
          label: "蔬菜",
          value: "222",
        },
        {
          label: "谷物",
          value: "333",
        },
        {
          label: "食品",
          value: "444",
        },
        {
          label: "调料",
          value: "666",
        },
      ],
      value: "",
      value1: ["222", "111", "333"],
    };
  },
  methods: {
    handleChange(e, val) {},
  },
};
</script>
```

# API

## select props

| 属性名         | 类型                | 默认值 | 可选值                  | 说明             |
| -------------- | ------------------- | ------ | ----------------------- | ---------------- |
| v-model/values | String/number/array | -      | -                       | 绑定值           |
| name           | String              | -      | -                       | 原生 name 属性   |
| placeholder    | String              | 请选择 | -                       | placeholder 提示 |
| size           | String              | medium | large/medium/small/mini | placeholder 提示 |
| disabled       | Boolean             | false  | true/false              | 是否禁用         |
| multiple       | Boolean             | false  | true/false              | 是否多选         |

## select events

| 事件名 | 返回值 | 说明                         |
| ------ | ------ | ---------------------------- |
| change | value  | 值发生改变时触发，返回最新值 |
| blur   | value  | 失去焦点时触发，返回最新值   |

## option props

| 属性名 | 类型           | 默认值 | 说明     |
| ------ | -------------- | ------ | -------- |
| value  | String, Number | -      | 绑定值   |
| label  | String, Number | -      | label 值 |
