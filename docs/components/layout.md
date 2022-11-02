---
title: layout
---

# 示例

## 基础用法


```html
<xly-row :gutter="20" type="flex" justify="center" algin="center">
  <xly-col :span="2">
    <div class="inner"></div>
  </xly-col>
  <xly-col :span="10">
    <div class="inner"></div>
  </xly-col>
  <xly-col :span="2">
    <div class="inner"></div>
  </xly-col>
</xly-row>

<xly-row type="flex" justify="space-between" algin="bottom">
  <xly-col :xs="2" :sm="4" :md="6" :lg="{span:8, offset:2}" :xl="9">
    <div class="inner"></div>
  </xly-col>
  <xly-col :span="4">
    <div class="inner"></div>
  </xly-col>
  <xly-col :span="8">
    <div class="inner"></div>
  </xly-col>
</xly-row>
```

<style>
    .inner{
        background: #e5e9f2;
        border-radius: 6px;
        padding: 4px 10px;
        box-sizing: border-box;
        height: 60px;
    }
    .xly-row {
        background: #f9fafc;
        margin: 10px 0;
        border-radius: 4px;
    }
    .xly-col:nth-child(2) div{
        height: 80px;
    }
</style>

# API

## Row props

| 属性名  | 类型   | 默认值     | 可选值                                                | 说明                 |
| ------- | ------ | ---------- | ----------------------------------------------------- | -------------------- |
| type    | String | float      | flex                                                  | 布局方式：float/flex |
| gutter  | Number | 0          | -                                                     | col 之间的间距       |
| justify | String | flex-start | flex-start/center/flex-end/space-around/space-between | 横向对其方式         |
| algin   | String | top        | top/center/bottom                                     | 纵向对齐方式         |
| tag     | String | div        | -                                                     | 之定义元素标签       |

## Col props

| 属性名 | 类型          | 默认值 | 可选值 | 说明                                                      |
| ------ | ------------- | ------ | ------ | --------------------------------------------------------- |
| span   | Number        | 24     | 1-24   | 栅格占据的列数                                            |
| offset | Number        | -      | -      | 向左偏移的列数                                            |
| tag    | String        | div    | -      | 之定义元素标签                                            |
| xs     | Number/Object | -      | -      | 媒体查询 width < 768px 时 例如：(4 / {span:4,offset:2})   |
| sm     | Number/Object | -      | -      | 媒体查询 width >= 768px 时 例如：(4 / {span:4,offset:2})  |
| md     | Number/Object | -      | -      | 媒体查询 width >= 992px 时 例如：(4 / {span:4,offset:2})  |
| lg     | Number/Object | -      | -      | 媒体查询 width >= 1200px 时 例如：(4 / {span:4,offset:2}) |
| xl     | Number/Object | -      | -      | 媒体查询 width >= 1920px 时 例如：(4 / {span:4,offset:2}) |
