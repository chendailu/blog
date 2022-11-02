---
title: Tabs
---

# API

## tabs props

| 属性名   | 类型    | 说明                                                            | 默认值              |
| -------- | ------- | --------------------------------------------------------------- | ------------------- |
| value    | String  | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据         | 默认为第一项的 name |
| type     | String  | 页签的基本样式，可选值为 line 和 card                           | line                |
| closable | Boolean | 是否可以关闭页签，仅在 type="card" 时有效                       | false               |
| animated | Boolean | 是否使用 CSS3 动画                                              | true                |
| name     | String  | 当嵌套使用 Tabs，指定 name 区分层级                             | -                   |
| route    | Boolean | 是否启用route模式，此模式下点击标签内容区域会填充指定路由的内容 | false               |

## tabs events

| 事件名        | 说明             | 返回值 |
| ------------- | ---------------- | ------ |
| on-click      | tab 被点击时触发 | name   |
| on-tab-remove | tab 被关闭时触发 | name   |

## tabPane props

| 属性名   | 说明                                                  | 类型             | 默认值 |
| -------- | ----------------------------------------------------- | ---------------- | ------ |
| name     | 用于标识当前面板，对应 value，默认为其索引值          | String           | -      |
| label    | 选项卡头显示文字，支持 Render 函数。                  | String、Function | 空     |
| icon     | 选项卡图标                                            | String           | -      |
| disabled | 是否禁用该选项卡                                      | Boolean          | false  |
| closable | 是否可以关闭页签，仅在 type="card" 时有效             | Boolean          | null   |
| tab      | 当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段 | String           | -      |
| to       | 路由地址,route为true时有效                            | Number           | -      |
| oddOrEven| 添加分割元素                                          | String           | -      |
| color    | icon图标颜色                                          | String           | #676767|

# 示例

## 基础用法
## 代码
```vue
<script>
export default {
    name: 'tree-doc',
    data() {
        return {
            label: (h) => {
                return h('span', [
                    '标签3',
                    h('i', {
                        style: {
                            width: '14px',
                            height: '14px',
                            display: 'inline-block'
                        },
                        class: 'iconfont xly_icon_Contacts_line'
                    })
                ])
            }
        };
    }
}
</script>

<template>
    <div>
        <div class="tab-box">
            <xly-tabs>
                <xly-tabPane label="标签1">标签1</xly-tabPane>
                <xly-tabPane label="标签2">标签2</xly-tabPane>
                <xly-tabPane label="标签3">标签3</xly-tabPane>
                <xly-tabPane label="标签4">标签4</xly-tabPane>
                <xly-tabPane label="标签5">标签5</xly-tabPane>
                <xly-tabPane label="标签6">标签6</xly-tabPane>
                <xly-tabPane label="标签7">标签7</xly-tabPane>
                <xly-tabPane label="标签8">标签8</xly-tabPane>
                <xly-tabPane label="标签9">标签9</xly-tabPane>
            </xly-tabs>
        </div>
        <div class="tab-box">
            <xly-tabs type="card" :closable="true">
                <xly-tabPane label="标签1">标签1</xly-tabPane>
                <xly-tabPane disabled label="标签2">标签2</xly-tabPane>
                <xly-tabPane :label="label">标签3</xly-tabPane>
                <xly-tabPane label="标签4">标签4</xly-tabPane>
                <xly-tabPane label="标签5">标签5</xly-tabPane>
                <xly-tabPane label="标签6">标签6</xly-tabPane>
                <xly-tabPane label="标签7">标签7</xly-tabPane>
                <xly-tabPane label="标签8">标签8</xly-tabPane>
                <xly-tabPane label="标签9">标签9</xly-tabPane>
            </xly-tabs>
        </div>
    </div>
</template>
```