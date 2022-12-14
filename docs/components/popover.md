---
title: Popover
---

# 示例

<br/>

### 基础用法

### 使用

```vue
<template>
    <div>
        <xly-popover trigger="click" title="这是标题" content="这是内容....">
            <xly-button slot="reference">按钮</xly-button>
            <div>
                <p>这是一个段落</p>
                <p>这是一个段落</p>
                <p>这是一个段落</p>
                <p>这是一个段落</p>
            </div>
        </xly-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        handleClose(index) {
            this.list.splice(index, 1);
        }
    }
};
</script>
```

# API

# props

| 属性名   | 说明               | 可选值      | 类型    | 默认值  |
| -------- | ------------------ | ----------- | ------- | ------- |
| trigger  | 触发方式           | click/hover | String  | hover   |
| title    | 标题               | -           | String  | -       |
| content  | 内容               | -           | String  | -       |
| width    | popover 的宽度     | -           | String  | '200px' |
| disabled | 禁用               | true/false  | Boolean | false   |
| v-model  | popover 的显示状态 | -           | Boolean | false   |
