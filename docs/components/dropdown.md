---
title: Dropdown 下拉菜单
---

# 示例

### 基础用法

<template>
    <div class='dome-wrap'>
        <p>
            <span>普通点击下拉</span>
            <span>Hover按钮下拉</span>
            <span>禁用下拉</span>
        </p>
        <xly-dropdown @command='handleCommand' trigger='click'>
            <span slot='dropdown'>下拉菜单</span>
            <xly-dropdown-menu>
                <xly-dropdown-item command='1'>选项1</xly-dropdown-item>
                <xly-dropdown-item command='2' disabled>选项2</xly-dropdown-item>
                <xly-dropdown-item command='3'>选项3</xly-dropdown-item>
                <xly-dropdown-item command='4'>选项4</xly-dropdown-item>    
            </xly-dropdown-menu>
        </xly-dropdown>
        <xly-dropdown @command='handleCommand'>
            <xly-button slot='dropdown'>按钮下拉</xly-button>
            <xly-dropdown-menu>
                <xly-dropdown-item command='1'>选项1</xly-dropdown-item>
                <xly-dropdown-item command='2' disabled>选项2</xly-dropdown-item>
                <xly-dropdown-item command='3'>选项3</xly-dropdown-item>
                <xly-dropdown-item command='4'>选项4</xly-dropdown-item>    
            </xly-dropdown-menu>
        </xly-dropdown>
        <xly-dropdown @command='handleCommand' disabled>
            <span slot='dropdown'>下拉禁用</span>
            <xly-dropdown-menu>
                <xly-dropdown-item command='1'>选项1</xly-dropdown-item>
                <xly-dropdown-item command='2' disabled>选项2</xly-dropdown-item>
                <xly-dropdown-item command='3'>选项3</xly-dropdown-item>
                <xly-dropdown-item command='4'>选项4</xly-dropdown-item>    
            </xly-dropdown-menu>
        </xly-dropdown>
    </div>
</template>

<script>
export default {
    data() {
        return {
          timerId: null
        }
    },
    computed:{
       
    },
    created(){
       
    },
    methods: {
        handleCommand(e, val){
        }
    }
}
</script>
<style>
    .dome-wrap{
        margin-top: 20px;
    }
    .dome-wrap>p>span{
        margin-right: 40px;
    }
    .xly-dropdown{
        margin-right: 80px;
    }
    .xly-dropdown:nth-child(3){
        margin-right: 40px;
    }
</style>

### 使用

```vue
<template>
    <xly-dropdown @command="handleCommand" trigger="click">
        <span slot="dropdown">下拉菜单</span>
        <xly-dropdown-menu>
            <xly-dropdown-item command="1">选项1</xly-dropdown-item>
            <xly-dropdown-item command="2" disabled>选项2</xly-dropdown-item>
            <xly-dropdown-item command="3">选项3</xly-dropdown-item>
            <xly-dropdown-item command="4">选项4</xly-dropdown-item>
        </xly-dropdown-menu>
    </xly-dropdown>

    <xly-dropdown @command="handleCommand">
        <xly-button slot="dropdown">按钮下拉</xly-button>
        <xly-dropdown-menu>
            <xly-dropdown-item command="1">选项1</xly-dropdown-item>
            <xly-dropdown-item command="2" disabled>选项2</xly-dropdown-item>
            <xly-dropdown-item command="3">选项3</xly-dropdown-item>
            <xly-dropdown-item command="4">选项4</xly-dropdown-item>
        </xly-dropdown-menu>
    </xly-dropdown>

    <xly-dropdown @command="handleCommand" disabled>
        <span slot="dropdown">下拉菜单</span>
        <xly-dropdown-menu>
            <xly-dropdown-item command="1">选项1</xly-dropdown-item>
            <xly-dropdown-item command="2" disabled>选项2</xly-dropdown-item>
            <xly-dropdown-item command="3">选项3</xly-dropdown-item>
            <xly-dropdown-item command="4">选项4</xly-dropdown-item>
        </xly-dropdown-menu>
    </xly-dropdown>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        handleCommand(e, val) {}
    }
};
</script>
```

# API

# DropdownProps

| 属性名   | 说明               | 可选值      | 类型    | 默认值 |
| -------- | ------------------ | ----------- | ------- | ------ |
| disabled | 是否禁用           | true/false  | Boolean | false  |
| trigger  | 触发下拉菜单的事件 | hover/click | String  | hover  |

# DropdownEvents

| 事件名  | 说明                 | 返回值                        |
| ------- | -------------------- | ----------------------------- |
| command | 点击 item 的事件回调 | item 的 command 值，item 实例 |

# DropdownItemProps

| 属性名   | 说明                                       | 可选值     | 类型                   | 默认值 |
| -------- | ------------------------------------------ | ---------- | ---------------------- | ------ |
| disabled | 是否禁用                                   | true/false | Boolean                | false  |
| command  | 指令，绑定 item 值，用于点击 item 的回调值 | -          | String\|Number\|Object | -      |
