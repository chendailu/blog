---
title: messageNotice
pageClass: "xly-class"
---
# 示例

<br/>

```vue
<template>
<div>
<h4>通知类</h4>
    <xly-button style='float:left;margin-right:30px' @click='notice("enquire")'>通知</xly-button>
    <xly-button type='success' style='float:left;margin-right:30px' @click='notice("success")'>通知</xly-button>
    <xly-button type='warning' style='float:left;margin-right:30px' @click='notice("warning")'>通知</xly-button>
    <xly-button type='danger' style='float:left;margin-right:30px' @click='notice("error")'>通知</xly-button>
</div>
</template> 

<script>
    export default {
        methods:{
            notice(val){
                this.$messageNotice({
                    align:'left',
                    type:val,
                    title:'接入设备',
                    content:'【希捷】WDC6589ASD898ADC658DC658DC658',
                    controlMsg:'<span style="color:#2675ff;margin-right:10px">新建案例</span><span>对该设备进行操作</span>',
                    controlClick:this.polic,
                    //timeOut:2
                }).then(()=>{
                    console.log(456)
                })
                .catch(() => {
                    console.log('no')
                })
            },
            polic(){
                alert('你要干哈')
            }
        }
    }
</script>
```

# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| type       | 通知框种类         | success,error,warning,enquire | string  | 无 |
| align            | 弹出位置        | left/right                        | string  | right   |
| title            |通知标题   | 自定义                        | string  | 自定义   |
| content            |通知内容   | 自定义                        | string  | 自定义   |
| controlMsg         |操作html字符串   | 自定义            | string  | 自定义   |
| controlClick        | 操作回调函数         | 自定义函数               | function  | 自定义函数   |
| timeOut            | 延时关闭时间         | 自定义数字               | number  | 5   |


# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| .then(() => {})  | 弹出时触发 | 无     |
| .catch(() => {})  | 消失时触发 | 无     |