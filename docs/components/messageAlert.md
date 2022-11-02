---
title: messageAlert
pageClass: "xly-class"
---

# 示例

<br/>
```vue
<template>
<div style='overflow:hidden'>
<h4>提示类</h4>
    <xly-button style='margin-right:30px' @click='third("pramiry")'>普通</xly-button>
    <xly-button style='margin-right:30px' type='success' @click='third("success")'>成功</xly-button>
    <xly-button style='margin-right:30px' type='warning' @click='third("warning")'>警告</xly-button>
    <xly-button style='margin-right:30px' type='danger' @click='third("error")'>错误</xly-button>
</div>
</template>

<script>
export default {
    methods:{
        third(val){
            this.$messageAlert({
                type:val,
                msg:'成功的消息',
                icon:'xly_icon_zhengque',
                top:'30px',
                timeOut:2,
                align:'left'
            }).then(() => {
                console.log('ok')
            })
            .catch(() => {
                console.log('no'+val)
            })
        }
    }
}
</script>

```

# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| type       | 弹框种类         | success,error,warning,enquire | string  | 无 |
| icon            | 提示图标        | 自定义                        | string  | 自定义   |
| msg            |提示内容   | 自定义                        | string  | 自定义   |
| top            |距离顶部距离   | 自定义                        | string  | 自定义   |
| align            |提示内容对齐方式   | left/right/center            | string  | center   |
| timeOut            | 延时关闭时间         | 自定义数字               | number  | 5   |
| outside            | 点击弹框以外地方是否关闭         | true/false               | boolean  | false   |



# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| .then(() => {})  | 弹出时触发 | 无     |
| .catch(() => {})  | 消失时触发 | 无     |
```
