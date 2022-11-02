---
title: TimeLine
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法

<template>
<div>
    <h4>默认</h4>
    <xly-time-line :data='list' :propsValue='propsType' @click='change' style='width:600px'></xly-time-line>
    <h4>可折叠</h4>
    <xly-time-line cuttle :data='list' :propsValue='propsType' ></xly-time-line>
</div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            propsType:{
                label:'text',
                time:'strTime',
                content:'des',
                imgSrc:'imgSrc',
                icon:'icons',
                iconStyle:'iconStyle'
            }
        }
    },
    methods:{
        change(item,index){
        }
    },
    created(){
        setTimeout(()=>{
            this.list=[{
                text:'电子',
                strTime:'2020',
                des:'auto',
                icons:'xly_icon_takephotos',
                iconStyle:'color:#ff7743;'
            },
            {
                text:'第二季度第二季度第二季度第二季度第二季度第二季度第二季度第二季度第二季度第二季度第二季度',
                strTime:'2020-07-20 ',
                des:'你的钱还是被马云掏空了sss掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱云掏空了你掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏了你的钱被马云掏空了你的钱被马云掏空了你',
                imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
                icons:'xly_icon_takephotos'
            },
            {
                text:'第二',
                strTime:'2020-07-20 ',
                des:'你的钱还是被马云掏空了sss掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱云掏空了你掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏了你的钱被马云掏空了你的钱被马云掏空了你',
                imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
                icons:'xly_icon_takephotos'
            },
            {
                text:'第二季fasf度',
                strTime:'2020-07-20 ',
                des:'你的钱还是被马云掏空了sss掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱云掏空了你掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏了你的钱被马云掏空了你的钱被马云掏空了你',
                imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
                icons:'xly_icon_takephotos'
            }
            ]
        },1000)
    }
}
</script>

<style>
    h4{
        margin: 10px;
    }
</style>
```vue
    <h4>默认</h4>
    <xly-time-line :data='list' :propsValue='propsType' @click='change'></xly-time-line>
    <h4>可折叠</h4>
    <xly-time-line cuttle :data='list' :propsValue='propsType' ></xly-time-line>
    <script>
    export default {
        data(){
            return {
                list:[{
                    text:'第一季度',
                    strTime:'2020-05-20',
                    des:'你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了'
                },
                {
                    text:'第二季度',
                    strTime:'2020-07-20',
                    des:'你的钱还是被马云掏空了sss'
                }],
                propsType:{
                    label:'text',
                    time:'strTime',
                    content:'des'
                }
            }
        },
        methods:{
            change(value,index){
            }
        }
    }
    </script>
    
```
# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| data              | 数据         | 无 | Array  | 无 |
| propsValue        | 数据字段自定义  | label,time,content,imgSrc(带图片的时间轴),icon,iconStyle:  | Object  |label,time,content  |
| cuttle            | 可折叠         | true/false                            | Boolean  | false   |

# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| click  | 点击 timeLine 时触发 | value,index点击元素对象,索引     |
| imgClick  | 点击 timeLine图片时触发 | value,index点击元素对象,索引     |
