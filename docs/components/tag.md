---
title: Tag
---

# 示例

<br/>

### 基础用法
### 使用

```vue
<template>
    <div>
        <div>
            <p>
                基础用法
                type：primary(主题)、success(成功)、warning(警告)、danger(危险)、info(信息)
            </p>
            <xly-tag>默认</xly-tag>
            <xly-tag type="primary">主题</xly-tag>
            <xly-tag type="success">成功</xly-tag>
            <xly-tag type="warning">警告</xly-tag>
            <xly-tag type="danger">危险</xly-tag>
            <xly-tag type="info">信息</xly-tag>
        </div>
        <div>
            <p>主题effect: light、dark、plain</p>
            <xly-tag type="primary">主题</xly-tag>
            <xly-tag type="success">成功</xly-tag>
            <xly-tag type="warning">警告</xly-tag>
            <xly-tag type="danger">危险</xly-tag>
            <xly-tag type="info">信息</xly-tag>
            <br />
            <br />
            <xly-tag effect="dark" type="primary">主题</xly-tag>
            <xly-tag effect="dark" type="success">成功</xly-tag>
            <xly-tag effect="dark" type="warning">警告</xly-tag>
            <xly-tag effect="dark" type="danger">危险</xly-tag>
            <xly-tag effect="dark" type="info">信息</xly-tag>
            <br />
            <br />
            <xly-tag effect="plain" type="primary">主题</xly-tag>
            <xly-tag effect="plain" type="success">成功</xly-tag>
            <xly-tag effect="plain" type="warning">警告</xly-tag>
            <xly-tag effect="plain" type="danger">危险</xly-tag>
            <xly-tag effect="plain" type="info">信息</xly-tag>
        </div>
        <div>
            <p>不同尺寸的</p>
            <xly-tag type="primary" size="large">大标签</xly-tag>
            <xly-tag type="primary" size="medium">中等标签</xly-tag>
            <xly-tag type="primary" size="small">小标签</xly-tag>
            <xly-tag type="primary" size="mini">超小标签</xly-tag>
        </div>
        <div>
            <p>可关闭的</p>
            <xly-tag
                v-for="(item, index) in list"
                :key="item.id"
                closable
                :type="item.type"
                @close="handleClose(index)"
                effect="plain"
                >{{ item.name }}</xly-tag
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '默认',
                    id: 't-1',
                    type: ''
                },
                {
                    name: '主题',
                    id: 't-2',
                    type: 'primary'
                },
                {
                    name: '成功',
                    id: 't-3',
                    type: 'success'
                },
                {
                    name: '警告',
                    id: 't-4',
                    type: 'warning'
                },
                {
                    name: '危险',
                    id: 't-5',
                    type: 'danger'
                },
                {
                    name: '信息',
                    id: 't-6',
                    type: 'info'
                }
            ]
        };
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

| 属性名            | 说明           | 可选值                                        | 类型    | 默认值  |
| ----------------- | -------------- | --------------------------------------------- | ------- | ------- |
| type              | 类型           | default/primary /success/info /warning/danger | String  | default |
| size              | 尺寸           | large/medium/small/mini                       | String  | meduim  |
| effect            | 主题           | dark/light/plain                              | String  | light   |
| disableTransition | 是否禁用动画   | true/false                                    | Boolean | false   |
| color             | 自定义字体颜色 | -                                             | String  | -       |
| bgColor           | 自定义背景颜色 | -                                             | String  | -       |
| borderColor       | 自定义边框颜色 | -                                             | String  | -       |

# events

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| click  | 点击 tag 时触发 | -      |
| close  | 点击关闭时触发  | -      |
