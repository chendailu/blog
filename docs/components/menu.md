---
title: Menu
---

# API

## menu props

| 属性名     | 类型           | 默认值   | 说明                                                  |
| ---------- | -------------- | -------- | ----------------------------------------------------- |
| mode       | String         | vertical | 菜单类型，可选值：horizontal（水平）/vertical（垂直） |
| activeName | String, Number | 无       | 当前激活的menuItem的name                              |
| openName   | Array          | []       | 展开的subMenu的name合集                               |
| accordion  | Boolean        | false    | 手风琴模式，只能同时展开一个子菜单                    |
| indent     | Boolean        | false    | 控制SubMenu控件是否开启子缩进                         |

# menu events

| 事件名         | 说明                       | 返回值                  |
| -------------- | -------------------------- | ----------------------- |
| on-select      | 选择菜单（menuItem）时触发 | name,itemObj (需设置)                   |
| on-open-change | 当 展开/收起 子菜单时触发  | 当前操作的subMenu的name |

## menuItem props

| 属性名  | 类型           | 默认值 | 说明                                                 |
| ------- | -------------- | ------ | ---------------------------------------------------- |
| name    | String         | 无     | 菜单项的唯一标识，必填                               |
| to      | String, Object | 无     | 跳转的链接，支持 vue-router 对象                     |
| replace | Boolean        | false  | 路由跳转时，开启 replace 将不会向 history 添加新记录 |
| target  | String         | _self  | 相当于 a 链接的 target 属性                          |
| append  | Boolean        | false  | 同 vue-router append                                 |
|itemObj| String, Object        |   | 如果需要获取选中菜单的数据则需设置 例  :itemObj='item'             |

## subMenu props

| 属性名 | 类型   | 默认值 | 说明                   |
| ------ | ------ | ------ | ---------------------- |
| name   | String | 无     | 子菜单的唯一标识，必填 |
|itemObj| String, Object        |   | 如果需要获取选中菜单的数据则需设置 例  :itemObj='item'             |

# subMenu slot

| 名称  | 说明       |
| ----- | ---------- |
| 无    | 菜单项     |
| title | 子菜单标题 |

## menuGroup props

| 属性名 | 类型   | 默认值 | 说明     |
| ------ | ------ | ------ | -------- |
| title  | String | 无     | 分组标题 |


# 示例


**基础用法--vertical（垂直）**

<template>
  <div style="width: 240px;border: 1px solid #eee;">
        <xly-menu :indent="true" @on-select='seleclt' @on-open-change='seleclts'>
            <xly-menuItem :itemObj='item' :name="item.id" v-for='item in list' :key='item.id'>{{item.name}}</xly-menuItem>
            <xly-menuGroup title="菜单组1">
                <xly-menuItem name="menu2">menu2</xly-menuItem>
                <xly-menuItem name="menu3">menu3</xly-menuItem>
            </xly-menuGroup>
            <xly-subMenu name="展开菜单1" itemObj='items'>
                <template slot="title">展开菜单1</template>
                <xly-menuItem name="menu4">menu4</xly-menuItem>
                <xly-menuItem name="menu5">menu5</xly-menuItem>
                <xly-subMenu name="展开菜单2">
                    <template slot="title">展开菜单2</template>
                    <xly-menuGroup title="菜单组2">
                        <xly-menuItem name="menu6">menu6</xly-menuItem>
                        <xly-menuItem name="menu7">menu7</xly-menuItem>
                    </xly-menuGroup>
                </xly-subMenu>
            </xly-subMenu>
        </xly-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {name:1,id:1},
                {name:2,id:2}
            ]
        }
    },
    methods:{
        seleclt(val,info){
            console.log(val,info)
        } ,
        seleclts (val,info){
            console.log(val,info)
        } 
    }
}
</script>
***使用***

```html
<div style="width: 240px;">
    <xly-menu :indent="true">
        <xly-menuItem name="menu1">menu1</xly-menuItem>
        <xly-menuGroup title="菜单组1">
            <xly-menuItem name="menu2">menu2</xly-menuItem>
            <xly-menuItem name="menu3">menu3</xly-menuItem>
        </xly-menuGroup>
        <xly-subMenu name="展开菜单1">
            <template slot="title">展开菜单1</template>
            <xly-menuItem name="menu4">menu4</xly-menuItem>
            <xly-menuItem name="menu5">menu5</xly-menuItem>
            <xly-subMenu name="展开菜单2">
                <template slot="title">展开菜单2</template>
                <xly-menuGroup title="菜单组2">
                    <xly-menuItem name="menu6">menu6</xly-menuItem>
                    <xly-menuItem name="menu7">menu7</xly-menuItem>
                </xly-menuGroup>
            </xly-subMenu>
        </xly-subMenu>
    </xly-menu>
</div>
```

**基础用法--horizontal（水平）**

<template>
  <div style="border: 1px solid #eee;">
        <xly-menu :indent="true" mode="horizontal">
            <xly-menuItem name="menu1">menu1</xly-menuItem>
            <xly-menuItem name="menu2">menu2</xly-menuItem>
            <xly-menuItem name="menu3">menu3</xly-menuItem>
            <xly-subMenu name="展开菜单1">
                <template slot="title">展开菜单1</template>
                <xly-menuItem name="menu4">menu4</xly-menuItem>
                <xly-menuItem name="menu5">menu5</xly-menuItem>
                <xly-subMenu name="展开菜单2">
                    <template slot="title">展开菜单2</template>
                    <xly-menuGroup title="菜单组2">
                        <xly-menuItem name="menu6">menu6</xly-menuItem>
                        <xly-menuItem name="menu7">menu7</xly-menuItem>
                    </xly-menuGroup>
                </xly-subMenu>
            </xly-subMenu>
        </xly-menu>
    </div>
</template>

```html
<template>
  <div style="border: 1px solid #eee;">
        <xly-menu :indent="true" mode="horizontal">
            <xly-menuItem name="menu1">menu1</xly-menuItem>
            <xly-menuItem name="menu2">menu2</xly-menuItem>
            <xly-menuItem name="menu3">menu3</xly-menuItem>
            <xly-subMenu name="展开菜单1">
                <template slot="title">展开菜单1</template>
                <xly-menuItem name="menu4">menu4</xly-menuItem>
                <xly-menuItem name="menu5">menu5</xly-menuItem>
                <xly-subMenu name="展开菜单2">
                    <template slot="title">展开菜单2</template>
                    <xly-menuGroup title="菜单组2">
                        <xly-menuItem name="menu6">menu6</xly-menuItem>
                        <xly-menuItem name="menu7">menu7</xly-menuItem>
                    </xly-menuGroup>
                </xly-subMenu>
            </xly-subMenu>
        </xly-menu>
    </div>
</template>
```