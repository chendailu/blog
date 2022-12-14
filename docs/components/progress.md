---
title: Progress
---

# 示例

### 基础用法

### 使用

```vue
<template>
    <div>
        <xly-progress
            :percentage="pro"
            @onSuccess="handleSuccess"
        ></xly-progress>
        <xly-progress :percentage="pro" :fail="isFail"></xly-progress>

        <p>加载失败</p>
        <xly-progress :percentage="50" fail></xly-progress>
        <xly-progress type="circle" :percentage="50" fail></xly-progress>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pro: 10,
            isFail: true
        };
    },
    methods: {
        // 完成的回调
        onSuccess() {}
    }
};
</script>
```

# API

# props

| 属性名     | 说明       | 可选值     | 类型    | 默认值 |
| ---------- | ---------- | ---------- | ------- | ------ |
| percentage | 进度百分比 | 0-100      | Number  | 0      |
| type       | 圆形进度   | circle     | String  | ''     |
| fail       | 加载失败   | true/false | Boolean | false  |

# events

| 事件名    | 说明              | 返回值 |
| --------- | ----------------- | ------ |
| onSuccess | 进度 100%时的回调 | -      |
