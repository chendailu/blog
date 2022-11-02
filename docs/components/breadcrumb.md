---
title: breadcrumb
pageClass: 'xly-class'
---

# 示例

<br/>

### 基础用法

<template>
<div>
    <br/>
    <h4>默认</h4>
    <br/>
    <xly-breadcrumb>
        <xly-breadcrumb-item content='首页' to='/home' replace></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户中心'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户列表'></xly-breadcrumb-item>
    </xly-breadcrumb>
    <br/>
    <h4>带图标</h4>
    <br/>
    <xly-breadcrumb separator='>'>
        <xly-breadcrumb-item content='首页' to='/home' icon='xly_icon_alert_line'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户中心' icon='xly_icon_mail_line'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户列表' icon='xly_icon_bill_line'></xly-breadcrumb-item>
    </xly-breadcrumb>
</div>
</template>

```vue
<div>
    <br/>
    <h4>默认</h4>
    <br/>
    <xly-breadcrumb>
        <xly-breadcrumb-item content='首页' to='/home' replace></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户中心'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户列表'></xly-breadcrumb-item>
    </xly-breadcrumb>
    <br/>
    <h4>带图标</h4>
    <br/>
    <xly-breadcrumb separator='>'>
        <xly-breadcrumb-item content='首页' to='/home' icon='xly_icon_jinggao'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户中心' icon='xly_icon_chenggong'></xly-breadcrumb-item>
        <xly-breadcrumb-item content='用户列表' icon='xly_icon_chenggong'></xly-breadcrumb-item>
    </xly-breadcrumb>
</div>
```

# API

# props

| 属性名    | 说明                              | 可选值            | 类型   | 默认值 |
| --------- | --------------------------------- | ----------------- | ------ | ------ |
| separator | 分隔符                            | 自定义            | string | 自定义 |
| content   | 标题                              | 自定义            | string | 自定义 |
| to        | 路由跳转                          | 跳转地址 (自定义) | string | 自定义 |
| replace   | 路由跳转(不在 history 中添加记录) | true/false        | string | false  |
| icon      | 图标                              | 内置图标类        | string | 自定义 |
