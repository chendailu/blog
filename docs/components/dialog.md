---
title: dialog
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法
<template>
<div>
    <h4>普通dialog</h4>
    <xly-button  @click='pramiry'>普通对话框</xly-button>
    <xly-dialog fullScreen :visible='visibleFlag1' width='400px' title='请确认信息' @close='visibleFlag1=!visibleFlag1'>
        <span>我们把表中的每一行叫做一个“记录”
        每一个记录包含这行中的所有信息
        就像在通讯录数据库中某个人全部的信息</span>
        <xly-button @click='first'>确定</xly-button>
    </xly-dialog>
    <h4>自定义内容</h4>
    <xly-button type='success' @click='visibleFlag=!visibleFlag'>自定义内容</xly-button>
    <xly-dialog :visible='visibleFlag' title='请确认信息' @close='visibleFlag=!visibleFlag' width='600px' >
        <xly-dropdown  trigger="click">
        <span slot="dropdown">下拉菜单</span>
        <xly-dropdown-menu>
            <xly-dropdown-item command="1">选项1</xly-dropdown-item>
            <xly-dropdown-item command="2" disabled>选项2</xly-dropdown-item>
            <xly-dropdown-item command="3">选项3</xly-dropdown-item>
            <xly-dropdown-item command="4">选项4</xly-dropdown-item>
        </xly-dropdown-menu>
    </xly-dropdown>
        <!-- <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input> -->
        <div slot='footer' style='text-align:right'>
            <xly-button @click='visibleFlag=!visibleFlag'>确定</xly-button>
            <xly-button @click='visibleFlag=!visibleFlag'>取消</xly-button>
        </div>
    </xly-dialog>
    <h4>居中布局</h4>
    <xly-button type='warning' @click='asynics'>自定义内容</xly-button>
    <xly-table size="medium"  :columns="columns" :data="datas">
                <template slot="handle" slot-scope="{ row }">
                    <button>{{row.job}}</button>
                </template>
            </xly-table>
    <xly-dialog :visible='visibleFlagC' title='请确认信息' @close='visibleFlagC=!visibleFlagC' width='600px'  center>
        <transition name='fade-in'>
            <xly-table v-if='visibleFlagC'  size="medium"  :columns="columns" :data="datas">
                <template slot="handle" slot-scope="{ row }">
                    <button>{{row.job}}</button>
                </template>
            </xly-table>
            </transition>
        <!-- <div slot='footer' style='text-align:right'>
            <xly-button @click='visibleFlagC=!visibleFlagC'>确定</xly-button>
            <xly-button @click='visibleFlagC=!visibleFlagC'>取消</xly-button>
        </div> -->
    </xly-dialog>
    <h4>嵌套对话框</h4>
    <xly-button type='danger' @click='visibleFlagM=!visibleFlagM'>嵌套对话框</xly-button>
    <xly-dialog :visible='visibleFlagM' title='请确认信息' @close='visibleFlagM=!visibleFlagM' width='600px' top='10%' center>
        <xly-button @click='visibleFlag2=true'>确定</xly-button>
        <xly-button @click='visibleFlagM=false'>取消</xly-button>
        <xly-dialog appendToBody :visible='visibleFlag2' title='请确认信息' @close='visibleFlag2=!visibleFlag2' width='500px' top='200px' center>
            <xly-button @click='visibleFlag3=true'>确定</xly-button>
             <xly-button @click='visibleFlag2=false'>取消</xly-button>
                <xly-dialog appendToBody :visible='visibleFlag3' title='请确认信息' @close='visibleFlag3=!visibleFlag3' width='400px' top='300px' center>
                <span>第二个</span>
            </xly-dialog>
        </xly-dialog>
    </xly-dialog>
</div>
</template> 

<script>
export default {
    data(){
        return {
            visibleFlag1:false,
            visibleFlag:false,
            visibleFlagC:false,
            visibleFlag2:false,
            visibleFlag3:false,
            visibleFlagM:false,
            columns: [{
                    title: '姓名',
                    key: 'name',
                    fixed: 'left'
                },{
                    title: '性别',
                    key: 'sex',
                    filters: [{
                        label: '男',
                        value: '男',
                        checked: true
                    },{
                        label: '女',
                        value: '女',
                        checked: true
                    }],
                    filterMultiple: true,
                    filterMethod: null,
                    filterRemote: null
                },{
                    title: '年龄',
                    key: 'age',
                    sortable: true,
                    sortMethod: null,
                    sortRemote: null
                },{
                    title: '爱好',
                    key: 'hobby'
                },{
                    title: '职业',
                    key: 'job',
                    slot: 'handle'
                },{
                    title: '操作',
                    key: 'handle',
                    fixed: 'right',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', '编辑')
                        ]);
                    }
                }],
            datas: [{
                    name: '张三',
                    sex: '男',
                    hobby: 'lol',
                    age: 24,
                    job: '搬砖'
                },{
                    name: '张1',
                    sex: '女',
                    hobby: 'lol',
                    age: 27,
                    job: '搬砖'
                },{
                    name: '张2',
                    sex: '男',
                    hobby: 'cf',
                    age: 22,
                    job: '搬砖'
                }]
        }
    },
    mounted(){
    },
    methods:{
        asynics(){
            this.visibleFlagC=!this.visibleFlagC
            setTimeout(()=>{
                this.datas=[{
                    name: '张三',
                    sex: '男',
                    hobby: 'lol',
                    age: 24,
                    job: '搬砖'
                },{
                    name: '张1',
                    sex: '女',
                    hobby: 'lol',
                    age: 27,
                    job: '搬砖'
                },{
                    name: '张2',
                    sex: '男',
                    hobby: 'cf',
                    age: 22,
                    job: '搬砖'
                },{
                    name: '张3',
                    sex: '女',
                    hobby: 'lol',
                    age: 18,
                    job: '搬砖'
                },{
                    name: '张2',
                    sex: '女',
                    hobby: 'dnf',
                    age: 20,
                    job: '搬砖'
                },{
                    name: '张3',
                    sex: '男',
                    hobby: 'lol',
                    age: 19,
                    job: '搬砖'
                }]
            },1000)
            
        },
        pramiry(){
            this.visibleFlag1=!this.visibleFlag1
        },
        open(){
            this.visibleFlag2=true
            

            //  this.$messageAlert({
            //     type:'success',
            //     msg:'成功的消息',
            //     icon:'xly_icon_zhengque',
            //     top:'30px',
            //     timeOut:2,
            //     align:'left'
            // }).then(() => {
            //     console.log('ok')
            // })
            // .catch(() => {
            //     console.log('no'+val)
            // })
        },
        first(){
            this.$messageAlert({
                type:'warning',
                msg:`的消息`,
                top:'30px',
                timeOut:2,
                align:'left',
                icon:'xly_icon_loading_line',
                outside:true
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

### 普通dialog
```vue
<xly-dialog :visible='visibleFlag1' title='请确认信息' @close='visibleFlag1=!visibleFlag1'>
    <span>我们把表中的每一行叫做一个“记录”
    每一个记录包含这行中的所有信息
    就像在通讯录数据库中某个人全部的信息</span>
</xly-dialog>
```

### 自定义内容
```vue
<xly-dialog :visible='visibleFlag' title='请确认信息' @close='visibleFlag=!visibleFlag' width='600px' >
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <div slot='footer' style='text-align:right'>
            <xly-button @click='visibleFlag=!visibleFlag'>确定</xly-button>
            <xly-button @click='visibleFlag=!visibleFlag'>取消</xly-button>
        </div>
    </xly-dialog>
```

### 居中布局
```vue
<xly-dialog :visible='visibleFlagC' title='请确认信息' @close='visibleFlagC=!visibleFlagC' width='600px' top='10%' center>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <xly-input style='margin-bottom:15px' size="medium" placeholder="medium" readonly value="readonly"></xly-input>
        <div slot='footer' style='text-align:right'>
            <xly-button @click='visibleFlagC=!visibleFlagC'>确定</xly-button>
            <xly-button @click='visibleFlagC=!visibleFlagC'>取消</xly-button>
        </div>
    </xly-dialog>
```

### 嵌套对话框
```vue
<xly-dialog :visible='visibleFlagM' title='请确认信息' @close='visibleFlagM=!visibleFlagM' width='600px' top='10%' center>
        <xly-button @click='visibleFlag2=true'>确定</xly-button>
        <xly-button @click='visibleFlagM=false'>取消</xly-button>
        <xly-dialog appendToBody :visible='visibleFlag2' title='请确认信息' @close='visibleFlag2=!visibleFlag2' width='500px' top='5%' center>
            <xly-button @click='visibleFlag3=true'>确定</xly-button>
             <xly-button @click='visibleFlag2=false'>取消</xly-button>
                <xly-dialog appendToBody :visible='visibleFlag3' title='请确认信息' @close='visibleFlag3=!visibleFlag3' width='400px' top='5%' center>
                <span>第二个</span>
            </xly-dialog>
        </xly-dialog>
    </xly-dialog>
```

# API

# props

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| visible       | 显示标识         | true/false | boolean  | false |
| title            | 标题内容        | 自定义                        | string  | 自定义   |
| width            |对话框宽度   | 自定义                        | string  | 自定义   |
| top            |距离顶部距离   | 自定义                        | string  | 自定义   |
| center            |居中布局   | true/false          | boolean  | false   |
| appendToBody            | 嵌套对话框提升至顶层         | true/false               | boolean  | false   |
| fullScreen            | 全屏         | true/false               | boolean  | false   |



# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| close  | 关闭时触发 | 无     |