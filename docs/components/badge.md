---
title: Badge
---

# 示例

### 基础用法

<template>
    <div class='dome-wrap-badge'>
        <p>基本用法<p>
        <xly-badge value='new'>
            <xly-button>详情</xly-button>
        </xly-badge>
        <p>数字用法</p>
        <xly-badge :value='100' :max='99' type='warning'>
            <xly-button>详情</xly-button>
        </xly-badge>
        <p>圆点用法</p>
        <xly-badge isDot>
            <xly-button>详情</xly-button>
        </xly-badge>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
<style>
</style>

### 使用

```vue
<template>
    <div class="dome-wrap-badge">
        <p>基本用法</p>
        <xly-badge value="new">
            <xly-button>详情</xly-button>
        </xly-badge>
        <p>数字用法</p>
        <xly-badge :value="100" :max="99" type="warning">
            <xly-button>详情</xly-button>
        </xly-badge>
        <p>圆点用法</p>
        <xly-badge isDot>
            <xly-button>详情</xly-button>
        </xly-badge>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
```

# API

# props

| 属性名 | 说明                                          | 可选值                                      | 类型          | 默认值 |
| ------ | --------------------------------------------- | ------------------------------------------- | ------------- | ------ |
| value  | 显示的值                                      | -                                           | String/Number | -      |
| type   | 类型                                          | primary / success / warning / danger / info | String        | -      |
| max    | 大于最大值时用 `{max}+`显示， value 为 Number | Number                                      | Boolean       | -      |
| hidden | 隐藏 badge                                    | true/false                                  | Boolean       | false  |
| is-dot | 显示小圆点                                    | true/false                                  | Boolean       | false  |
