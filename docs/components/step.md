---
title: step
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法

```vue
<div>
<br/>
    <h4>横向</h4>
    <br/>
    <xly-step alignCenter='center' :active='active1' @click='change'  :space='30' >
        <xly-step-item :index='1' title='第一步第一步第yi步' content='提交描述有点多有点多不得不换行不换行提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='2' title='第二步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='3' title='第三步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
    </xly-step>
    <br/>
    <xly-button @click='next1'>下一步</xly-button>  
    <br/>
    <br/>
    <h4>竖形</h4>
    <br/>
    <xly-step direction='vertical' alignCenter='center' :active='active2' @click='change'  :space='30' >
        <xly-step-item :index='1' title='第一步第一步第yi步' content='提交描述有点多有点多不得不换行不换行提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='2' title='第二步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='3' title='第三步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
    </xly-step>
    <xly-button @click='next2'>下一步</xly-button>  
    <br/>
    <br/>
    <h4>可点击</h4>
    <br/>
    <xly-step alignCenter='center' :active='active3' @click='change' onclick  :space='30' >
        <xly-step-item :index='1' title='第一步第一步第yi步' content='提交描述有点多有点多不得不换行不换行提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='2' title='第二步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
        <xly-step-item :index='3' title='第三步' content='提交描述有点多有点多不得不换行不换行'></xly-step-item>
    </xly-step>
    <xly-button @click='next3'>下一步</xly-button>  
</div>
<script>
export default {
    data(){
        return{
            active1:1,
            active2:1,
            active3:1
        }
    },
    methods:{
        next1(){
            this.active1++
            if(this.active1==4)this.active1=1
        },
        next2(){
            this.active2++
            if(this.active2==4)this.active2=1
        },
        next3(){
            this.active3++
            if(this.active3==4)this.active3=1
        },
        change(val){
            this.active3=val
        }
    }
}
</script>
```

# API

# props

#### xly-step
| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| direction         | 排列方向         | horizontal/vertical | string  | horizontal |
| active        | 当前步骤索引  | 自定义  | number  |1  |
| alignCenter            | 文字对齐方式         | left/center/right   | string  | left   |
| onclick            | 是否可点击(绑定点击事件返回点击步骤的索引)         | true/false   | boolean  | false   |
| space            | 步骤间间距         | 自定义   | number  | 无   |

#### xly-step-item
| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| index         | 当前步骤索引绑定值(必传)         | 自定义 | number  | 1/2/3 |
| title         | 步骤标题         | 自定义 | string  | 无 |
| content         | 步骤描述         | 自定义 | string  | 无 |


# event
| 事件名             | 说明         |
| ----------------- | ------------ |
| click         | 点击事件(返回点击步骤索引)     