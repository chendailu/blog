---
title: Image
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法

<template>
<div>
<br/>
    <h4>默认</h4>
        <xly-button @click='visibleFlag=!visibleFlag'>查看图片</xly-button>
        <xly-dialog :visible='visibleFlag' title='请确认信息' @close='visibleFlag=!visibleFlag' width='1000px'>
            <xly-button @click='visibleFlag1=!visibleFlag1'>查看图片</xly-button>
            <xly-image appendToBody :imgList='imgLists' :imgType='imgTypes' :name='name' :id='0' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg' top='100px' :visible='visibleFlag1' @close='visibleFlag1=!visibleFlag1'></xly-image>
        </xly-dialog>
        <xly-button @click='visibleFlagM=!visibleFlagM'>查看图片</xly-button>
        <xly-image :imgList='imgLists' :imgType='imgTypes' :name='name' :id='0' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg' top='100px' :visible='visibleFlagM' @close='visibleFlagM=!visibleFlagM'></xly-image>
    <br/>
</div>
</template>

<script>
export default {
    data(){
        return {
            visibleFlagM:false,
            visibleFlag:false,
            visibleFlag1:false,
            name:"亚洲龙",
            imgLists:[
                {
                    title:'亚洲龙',
                    imgId:0,
                    imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590036270107&di=64db0941eb03b8bf24ab1bd7bb65176f&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
                },
                {
                    title:'君越',
                    imgId:1,
                    imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2997775919,1092668974&fm=26&gp=0.jpg'
                },
                {
                    title:'金牛座',
                    imgId:2,
                    imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2778495736,874145724&fm=26&gp=0.jpg'
                }
            ],
            imgTypes:{
                name:'title',
                id:'imgId',
                src:'imgSrc'
            }
        }
    },
    methods:{
    }
}    
</script>
```vue
<template>
<div>
<br/>
    <h4>默认</h4>
    <xly-image :imgList='imgLists' :imgType='imgTypes'  :name='name' :id='0' src='https://car3.autoimg.cn/cardfs/product/g2/M03/9B/CF/1024x0_1_q95_autohomecar__ChsEmlw62GyAMPHcAAi4tcT1YxI887.jpg' :top='7' :visible='visibleFlag' @close='visibleFlag=!visibleFlag'></xly-image>
    <br/>
    <xly-button @click='visibleFlag=!visibleFlag'>查看图片</xly-button>
</div>
</template>

<script>
export default {
    data(){
        return {
            visibleFlag:false,
            name:"亚洲龙",
            imgLists:[
                {
                    title:'亚洲龙',
                    imgId:0,
                    imgSrc:'https://car3.autoimg.cn/cardfs/product/g2/M03/9B/CF/1024x0_1_q95_autohomecar__ChsEmlw62GyAMPHcAAi4tcT1YxI887.jpg'
                },
                {
                    title:'君越',
                    imgId:1,
                    imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2997775919,1092668974&fm=26&gp=0.jpg'
                },
                {
                    title:'金牛座',
                    imgId:2,
                    imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2778495736,874145724&fm=26&gp=0.jpg'
                }
            ],
            imgTypes:{
                name:'title',
                id:'imgId',
                src:'imgSrc'
            }
        }
    },
    methods:{
    }
} 
```

# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| visible            | 显示标示         | true/false |  Boolean | false |
| src        | 图片地址  | 自定义  | string  |自定义  |
| name            | 图片名称         | 自定义                            | string  | 自定义   |
| id            | 图片id      | 自定义                            | Number  | 自定义   |
| top            | 距离顶部（百分比/像素）      | 自定义                            | string  | 自定义   |
| imgList            | 图片数组（左右切换必须传）   | 自定义                            | array  | 自定义   |
| imgType            | 图片数组对象参数自定义     | 自定义                            | object  | 自定义   |

# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| close  | 关闭时触发 |      |
| fullScreen  | 全屏时触发 |      |
| lessenScreen  | 缩小时触发 |      |
| next  | 下一个时触发 |      |
| previous  | 上一个时触发 |      |
| reduction  | 1:1时触发 |      |
| rotate  | 上一个时触发 |      |
| download  | 上一个时触发 |      |