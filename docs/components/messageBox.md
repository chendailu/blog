---
title: messageBox
pageClass: "xly-class"
---
# 示例

<br/>

<template>
<div>
    <h4>模态类</h4>
    <p>确认弹框类</p>
    <div style='overflow:hidden'>
    <xly-button style='margin-right:30px' @click='first("enquire")'>询问</xly-button>
    <xly-button style='margin-right:30px' type='success' @click='first("success")'>成功</xly-button>
    <xly-button style='margin-right:30px' type='warning' @click='first("warning")'>警告</xly-button>
    <xly-button style='margin-right:30px' type='danger' @click='first("error")'>错误</xly-button>
    </div>
    <br/>
    <br/>
    <h4>非模态类</h4>
    <p>提示弹框类</p>
    <div style='overflow:hidden'>
    <xly-button style='margin-right:30px' @click='scend("enquire")'>询问</xly-button>
    <xly-button style='margin-right:30px' type='success' @click='scend("success")'>成功</xly-button>
    <xly-button style='margin-right:30px' type='warning' @click='scend("warning")'>警告</xly-button>
    <xly-button style='margin-right:30px' type='danger' @click='scend("error")'>错误</xly-button>
    </div>
    
</div>
</template>

<script>
export default {
    methods:{
        first(val){
            this.$messageAlert({
                type:val,
                msg:'成功的消息',
                icon:'xly_icon_shutdown_line',
                top:'30px',
                timeOut:20,
                align:'left',
                outside:true
            }).then(() => {
                console.log('ok')
            })
            .catch(() => {
                console.log('no'+val)
            })
            this.$messageBox({
                    messageType:'modal',
                    type:val,
                    title:'工作已完成',
                    msg:'一系列的信息描述，可能会很长。也可以是很短。同样也可以带标点',
            }).then(() => {
                
            })
            .catch(() => {
                console.log('no'+val)
            })
            
        },
        scend(val){
            this.$messageBox({
                messageType:'nonmodal',
                type:val,
                title:'是否删除这条信息？',
                msg:'删除之后不可恢复,请谨慎操作',
                buttonText:{
                    ok:'确认',
                    no:'取消'
                },
                timeOut:5
            }).then(() => {
                console.log('ok')
            })
            .catch(() => {
                console.log('no'+val)
            })
        },
        third(val){
            this.$messageAlert({

            })
        }
    }
}
</script>

```vue
<template>
<div>
    <h4>模态类</h4>
    <p>弹框类</p>
    <div style='overflow:hidden'>
    <xly-button style='float:left;margin-right:30px' @click='first("enquire")'>询问</xly-button>
    <xly-button style='float:left;margin-right:30px' type='success' @click='first("success")'>成功</xly-button>
    <xly-button style='float:left;margin-right:30px' type='warning' @click='first("warning")'>警告</xly-button>
    <xly-button style='float:left;margin-right:30px' type='danger' @click='first("error")'>错误</xly-button>
    </div>
    <br/>
    <br/>
    <h4>非模态类</h4>
    <p>弹框类</p>
    <div style='overflow:hidden'>
    <xly-button style='float:left;margin-right:30px' @click='scend("enquire")'>询问</xly-button>
    <xly-button style='float:left;margin-right:30px' type='success' @click='scend("success")'>成功</xly-button>
    <xly-button style='float:left;margin-right:30px' type='warning' @click='scend("warning")'>警告</xly-button>
    <xly-button style='float:left;margin-right:30px' type='danger' @click='scend("error")'>错误</xly-button>
    </div>
    
</div>
</template>

<script>
export default {
    methods:{
        first(val){
            this.$messageBox({
                    messageType:'modal',
                    type:val,
                    title:'工作已完成',
                    msg:'一系列的信息描述，可能会很长。也可以是很短。同样也可以带标点',
            }).then(() => {
                console.log('ok'+val)
            })
            .catch(() => {
                console.log('no'+val)
            })
            
        },
        scend(val){
            this.$messageBox({
                messageType:'nonmodal',
                type:val,
                title:'是否删除这条信息？',
                msg:'删除之后不可恢复,请谨慎操作',
                buttonText:{
                    ok:'确认',
                    no:'取消'
                },
                timeOut:5
            }).then(() => {
                console.log('ok')
            })
            .catch(() => {
                console.log('no'+val)
            })
        },
        third(val){
            this.$messageAlert({

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
| messageType       | 是否为确认弹框         | modal/nonmodal | string  | 无 |
| buttonText.ok/buttonText.no  | 确认弹框按钮文字  | 确定/取消 | string  |确定/取消  |
| type       | 弹框种类         | success,error,warning,enquire | string  | 无 |
| title            | 弹框标题         | 自定义                        | string  | 自定义   |
| msg            | 弹框内容   | 自定义                        | string  | 自定义   |
| timeOut            | 延时关闭时间         | 自定义数字                        | number  | 5   |


# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| .then(() => {})  | 确认时触发 | 无     |
| .catch(() => {})  | 取消时触发 | 无     |