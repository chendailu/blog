---
title: scroll
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法

<template>
<div style='height:600px;width:100%'>
    <h4>自定义滚动条</h4>
    <div id='gg' style='width:900px;'>
        <!-- <xly-scroll @scrollTopW='top("w")' @scrollTopH='top("h")' @scrollBottomH='bottom("h")' @scrollBottomW='bottom("w")' isShow  barColor='#2675FF' barWidth='16px' barRadius='14px' barLineColor='#fff'>
        </xly-scroll> -->
    </div>
    <h4>默认滚动条</h4> <xly-button @click='flah=!flah'>das</xly-button>
    <div id='gg' style='width:900px;height:200px;'>
        <xly-scroll @scrollTopW='top("w")' @scrollTopH='top("h")' @scrollBottomH='bottom("h")' @scrollBottomW='bottom("w")'  barWidth='16px'  barRadius='14px' barLineColor='#fff'>
            <p v-if='flah' style='margin:0;width:1900px'>
                很长很长的话很长很长的话很长很长的话很长很长的话
            </p>
            <p v-if='flah' style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
            <p v-if='flah' style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
        </xly-scroll>
        <xly-scroll v-show='flag' @scrollTopW='top("w")' @scrollTopH='top("h")' @scrollBottomH='bottom("h")' @scrollBottomW='bottom("w")' isShow   barRadius='14px' barLineColor='#fff'>
            <p v-for='item in list' v-if='flags' style='margin:0;width:1900px'>
               {{item}}
            </p>
             <!-- <p v-if='flah' style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
            <p v-if='flah' style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p> -->
        </xly-scroll>
        <xly-button @click='open'>das</xly-button>
    </div>
   
</div>
</template>

<script>
export default {
    data(){
        return {
            flah:true,
            flag:false,
            flags:false,
            list:[
                '很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很',
                '很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很','很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很',
                '很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很',
                '很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很'
            ]
        }
    },
    methods:{
        top(val){
            console.log('滚动到顶'+val)
            setTimeout(()=>{
                this.list.push('xing增加的')
            },2000)
        },
        bottom(val){
            console.log('滚动到底'+val)
        },
        open(){
            this.flag=true
            
            setTimeout(()=>{
                this.flags=true
            },1000)
        }
    }
}
</script>
<style>
</style>

```vue
<template>
<div style='height:600px;width:100%'>
    <h4>自定义滚动条</h4>
    <div id='gg' style='width:900px;height:200px;'>
        <xly-scroll @scrollTopW='top("w")' @scrollTopH='top("h")' @scrollBottomH='bottom("h")' @scrollBottomW='bottom("w")' isShow  barColor='#2675FF' barWidth='16px' barRadius='14px' barLineColor='#fff'>
            <p style='margin:0;width:1900px'>
                很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话
            </p>
            <p style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
            <p style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
        </xly-scroll>
    </div>
    <h4>默认滚动条</h4>
    <div id='gg' style='width:900px;height:200px;'>
        <xly-scroll @scrollTopW='top("w")' @scrollTopH='top("h")' @scrollBottomH='bottom("h")' @scrollBottomW='bottom("w")' isShow   barRadius='14px' barLineColor='#fff'>
            <p style='margin:0;width:1900px'>
                很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话
            </p>
            <p style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
            <p style='margin:50px'>很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很长的话很长很</p>
        </xly-scroll>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods:{
        top(val){
            console.log('滚动到顶'+val)
        },
        bottom(val){
            console.log('滚动到底'+val)
        }
    }
}
</script>
```

# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| isShow              | 鼠标移除是否显示滚动条         | true/false | boolean  | false |
| barColor        | 滚动条颜色  | 自定义  | string  |#bcbdbe  |
| barWidth            | 滚动条宽度         | 自定义                            | string  | 8px   |
| barRadius            | 滚动条圆角        | 自定义                            | string  | 4px   |
| barLineColor            | 滚动栏背景色         | 自定义                            | string  | #fff   |
# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| scrollTopH  | 纵向滚动至顶部 | 无     |
| scrollBottomH  | 纵向滚动至底部  |无    |
| scrollTopW  | 横向滚动至顶部 |无    |
| scrollBottomW  | 横向滚动至底部  |无    |
