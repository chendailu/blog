---
title: Button
---

# API

## button props

| 属性名     | 类型           | 默认值  | 说明                                                      |
| ---------- | -------------- | ------- | --------------------------------------------------------- |
| type       | String         | default | 按钮类型， 可选值为：default、primary、danger             |
| disabled   | Boolean        | false   | 按钮禁用状态                                              |
| icon       | String         | 无      | 按钮的图标                                                |
| customIcon | String         | 无      | 自定义按钮的图标                                          |
| htmlType   | String         | button  | button 原生的 type，可选值为 button、submit、reset        |
| plain      | Boolean        | false   | 线框模式按钮                                              |
| to         | String, Object | 无      | 跳转的链接，支持 vue-router 对象                          |
| replace    | Boolean        | false   | 路由跳转时，开启 replace 将不会向 history 添加新记录      |
| target     | String         | \_self  | 相当于 a 链接的 target 属性                               |
| append     | Boolean        | false   | 同 vue-router append                                      |
| line       | String         | 无      | 线框按钮类型，可选值为line、dashed,不设置则默认为正常按钮 |

## button events

| 事件名   | 说明     | 返回值 |
| -------- | -------- | ------ |
| on-click | 点击事件 | event  |

# 按钮

<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <xly-button type="primary" disabled>primary</xly-button>
  <xly-button type="primary">primary</xly-button>
  <xly-button size="large" icon="user_line" after type="success">success</xly-button>
  <xly-button size="small" type="info">info</xly-button>
  <xly-button size="mini" type="warning">warning</xly-button>
  <xly-button type="danger">danger</xly-button>
  <xly-button to="./input">router button</xly-button>
  <br />
  <br />
  <xly-button type="primary" plain disabled>primary</xly-button>
  <xly-button type="primary" plain>primary</xly-button>
  <xly-button size="large" type="success" plain>success</xly-button>
  <xly-button size="small" type="info" plain>info</xly-button>
  <xly-button size="mini" type="warning" plain>warning</xly-button>
  <xly-button type="danger" plain>danger</xly-button>
  <xly-button to="./input" plain>router button</xly-button>
  <br />
  <br />
  <xly-button line="line" type="primary" plain disabled>primary</xly-button>
  <xly-button line="line" type="primary" plain>primary</xly-button>
  <xly-button line="dashed" type="success" plain disabled>success</xly-button>
  <xly-button line="dashed" type="success" plain>success</xly-button>
  <xly-button line="text" type="primary" plain>text</xly-button>
  <xly-button line="text" type="primary" disabled>text</xly-button>
</template>

### 使用

```html
<xly-button type="primary">primary</xly-button>
<xly-button size="large" icon="user_line" type="success">success</xly-button>
<xly-button size="small" type="info">info</xly-button>
<xly-button size="mini" type="warning">warning</xly-button>
<xly-button type="danger">danger</xly-button>
<xly-button to="./input">router button</xly-button>
<br />
<br />
<xly-button type="primary" plain>primary</xly-button>
<xly-button type="success" plain>success</xly-button>
<xly-button type="info" plain>info</xly-button>
<xly-button type="warning" plain>warning</xly-button>
<xly-button type="danger" plain>danger</xly-button>
<xly-button to="./input" plain>router button</xly-button>
<xly-button line="line" type="primary" plain>primary</xly-button>
<xly-button line="dashed" type="success" plain>success</xly-button>
```
