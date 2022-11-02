---
title: RightMenu
---

**右键菜单组件是对menu组件的二次封装**

# API

## rightMenu event

| 事件名    | 说明                       | 返回值 |
| --------- | -------------------------- | ------ |
| on-select | 选择菜单（menuItem）时触发 | name   |


# 示例

<script>
export default {
    data() {
        return {
            selectMenu: ''
        }
    },
    methods: {
        selectHndler(name){
            this.selectMenu = name;
        }
    }
}
</script>

<template>
    <div style="width: 100%;height: 320px; border: 1px solid #eee;">
        <p>在此区域右键，选中项Name： {{selectMenu}}</p>
        <xly-rightMenu @on-select="selectHndler">
            <xly-menu>
                <xly-menuItem name="1">选项1</xly-menuItem>
                <xly-menuItem name="2">选项2</xly-menuItem>
                <xly-menuGroup title="分组1">
                    <xly-menuItem name="3">选项3</xly-menuItem>
                    <xly-menuItem name="4">选项4</xly-menuItem>
                </xly-menuGroup>
                <xly-subMenu name="erji">
                    <div slot="title">二级</div>
                    <xly-menuItem name="5">选项5</xly-menuItem>
                    <xly-menuItem name="6">选项6</xly-menuItem>
                </xly-subMenu>
            </xly-menu>
        </xly-rightMenu>
    </div>
</template>

```vue
<template>
    <div style="width: 100%;,height: 320px; border: 1px solid #eee;">
        <p>选中项Name： {{selectMenu}}</p>
        <xly-rightMenu @on-select="selectHndler">
            <xly-menu>
                <xly-menuItem name="1">选项1</xly-menuItem>
                <xly-menuItem name="2">选项2</xly-menuItem>
                <xly-menuGroup title="分组1">
                    <xly-menuItem name="3">选项3</xly-menuItem>
                    <xly-menuItem name="4">选项4</xly-menuItem>
                </xly-menuGroup>
                <xly-subMenu name="erji">
                    <div slot="title">二级</div>
                    <xly-menuItem name="5">选项5</xly-menuItem>
                    <xly-menuItem name="6">选项6</xly-menuItem>
                </xly-subMenu>
            </xly-menu>
        </xly-rightMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectMenu: ''
        }
    },
    methods: {
        selectHndler(name){
            this.selectMenu = name;
        }
    }
}
</script>
```