---
title: Pagination
---

# 示例

<br/>

### 基础用法
### 使用

```vue
<template>
    <p>默认用法</p>
    <xly-pagination
        :currentPage="currentPage"
        :total="total"
        @current-change="handleCurrentPage"
        @size-change="handleSizeChange"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="pager, sizes, jumper, total"
    ></xly-pagination>
    <p>背景色填充</p>
    <xly-pagination
        :currentPage="currentPage"
        :total="total"
        @current-change="handleCurrentPage"
        @size-change="handleSizeChange"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="pager, sizes, jumper, total"
        background
    ></xly-pagination>
    <p>默认用法 迷你版</p>
    <xly-pagination
        :currentPage="currentPage"
        :total="total"
        @current-change="handleCurrentPage"
        @size-change="handleSizeChange"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="pager, sizes, jumper, total"
        small
    ></xly-pagination>
    <p>背景色填充 迷你版</p>
    <xly-pagination
        :currentPage="currentPage"
        :total="total"
        @current-change="handleCurrentPage"
        @size-change="handleSizeChange"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="pager, sizes, jumper, total"
        background
        small
    ></xly-pagination>
    <p>左右布局</p>
    <xly-pagination
        :currentPage="currentPage"
        :total="total"
        @current-change="handleCurrentPage"
        @size-change="handleSizeChange"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="pager, ->, total, jumper, sizes"
    ></xly-pagination>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            total: 330,
            pageSizes: [10, 20, 30],
            pageSize: 10
        };
    },
    methods: {
        handleCurrentPage(val) {
            console.log('当前页', val);
        },
        handleSizeChange(val) {
            console.log('当前每页：', val);
        }
    }
};
</script>
```

# API

# props

| 属性名      | 说明                                 | 可选值                          | 类型          | 默认值                      |
| ----------- | ------------------------------------ | ------------------------------- | ------------- | --------------------------- |
| page-size   | 每页显示条数                         | 基于 page-sizes 的选项          | Number        | -                           |
| page-sizes  | 每页显示条数选项                     | -                               | Array[Number] | [5, 10, 20]                 |
| currentPage | 当前页数                             | -                               | Number        | 1                           |
| total       | 数据总数量，用于计算总页数           | -                               | Number        | 0                           |
| pagerCount  | 最多显示多个页码数，奇数             | -                               | Number        | 7                           |
| background  | 设置为页码背景填充色                 | true/false                      | Boolean       | false                       |
| small       | 迷你布局                             | true/false                      | Boolean       | false                       |
| layout      | 布局，'->'右边的便是子组件布局到右边 | sizes, pager, jumper, ->, total | String        | pager, sizes, jumper, total |

# events

| 事件名         | 说明                         | 返回值       |
| -------------- | ---------------------------- | ------------ |
| current-change | 当前页发生改变时触发         | 最新的页数   |
| size-change    | 每页显示的条数发生改变时触发 | 每页显示条数 |
