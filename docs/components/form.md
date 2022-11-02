---
title: form
pageClass: "xly-class"
---
# 示例

<br/>

### 基础用法
<template>
    <h4>典型表单</h4>
    <xly-form ref='form' v-model='form' labelWidth='200px' labelAlign='right'  size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='日期：' prop='dateTime'>
            <xly-date-picker
                v-model="form.dateRange"
                type="daterange"
                range-separator="至"
                value-format="YYYY-MM-DD"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></xly-date-picker>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' @change='getDept'>
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <xly-button plain >确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
    </xly-form>
</template>

```vue
<xly-form ref='form' v-model='form' labelWidth='70px' labelAlign='right' size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <xly-button plain @click='submit'>确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
    </xly-form>
```


<template>
    <h4>不同尺寸</h4>
     <xly-form ref='form' v-model='form'  labelWidth='100px' labelAlign='right' size='large' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain >确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
</template>

```vue
<xly-form ref='form' v-model='form'  labelWidth='100px' labelAlign='right' size='large' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain @click='submit'>确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
```
<template>
<h4>行内表单</h4>
    <xly-form ref='form' inline v-model='form' labelWidth='70px' labelAlign='right' size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain >确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
</template>

```vue
<xly-form ref='form' inline v-model='form' :rules='rules' labelWidth='70px' labelAlign='right' size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain @click='submit'>确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
```

<template>
    <h4>表单验证</h4>
     <xly-form ref='form' v-model='form' :rules='ruless' labelWidth='70px' labelAlign='justify' size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' style='width:90px'>
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='时间：' prop='date'>
            <xly-date-picker
                v-model="form.date"
                type="datetime"
                placeholder="选择日期时间">
            </xly-date-picker>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <xly-form-item label='搜索输入：' prop='search'>
            <xly-autocomplete
                v-model="form.search"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
            ></xly-autocomplete>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain @click='submits'>确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
</template>

<script>
let validates = (rule,value,callback)=>{
    console.log(rule,value,callback)
    return new Error(789)
    if(!value){
        
       //return callback(new Error('打撒大撒'))
    }
}
export default {
    data(){
        return {
            
            form:{
                dateRange:[],
                name:'',
                num:0,
                switch:false,
                dept:'',
                sex:'',
                group:[],
                text:'',
                date:'',
                search:''
            },
            ruless:{
                name:[
                    {required:true,type:'string',trigger:'blur',message:'请填写名称'},
                ],
                dept:[{required:true,trigger:'blur',message:'请选择部门'}],
                num:[{type:'string',trigger:'blur',message:'请填写数字'}],
                switch:[{required:true,type:'boolean',trigger:'change',message:'请选择开关'}],
                sex:[{required:true,trigger:'change',message:'请选择性别'}],
                group:[{required:true,trigger:'change',type:'array',message:'请选择种类'}],
                text:[{required:true,trigger:'blur',message:'请填文本'}],
                ceshi:[{required:true,trigger:'blur',message:'请填文本'}],
                date:[{required:true,trigger:'blur',message:'请填时间'}],
                search:[{required:true,trigger:'blur',message:'请填搜索'}]
            }
        }
    },
    watch:{
        form:{
            deep:true,
            handler(val){
                //console.log(val)
            }
        }
    },
    methods:{
        getDept(val){
            console.log(val)
        },
        querySearchAsync(){

        },
        handleSelect(){

        },
        submits(){
            this.$refs.form.validate((valid)=>{
                console.log(valid)
                if(valid){
                    console.log('通过')
                }else{
                    console.log('不通过')
                }
            })
        },
        reset(){
            this.$refs.form.resetFields()
        }
    }
}
</script>


```vue
<xly-form ref='form' v-model='form' :rules='rules' labelWidth='70px' labelAlign='right' size='small' style='border:1px solid #ebebeb;border-radius: 3px;padding:40px 20px;margin-top:20px'>
        <xly-form-item label='姓名：' prop='name'>
            <xly-input v-model.number='form.name' placeholder="large" ></xly-input>
        </xly-form-item>
        <xly-form-item label='部门：' prop='dept'>
            <xly-select  v-model='form.dept'  placeholder='请选择' >
                <xly-option  label='yi' value='2'>
                </xly-option>
            </xly-select>
        </xly-form-item>
        <xly-form-item label='数量：' prop='num'>
            <xly-input-number :step="1" v-model='form.num'></xly-input-number>
        </xly-form-item>
        <xly-form-item label='开关：' prop='switch'>
            <xly-switch v-model='form.switch'></xly-switch>
        </xly-form-item>
        <xly-form-item label='标签：'>
            <xly-tag type="primary">主题</xly-tag>
        </xly-form-item>
        <xly-form-item label='表单域：' prop='text'>
            <xly-input type="textarea"  placeholder="large"  v-model='form.text'></xly-input>
        </xly-form-item>
        <xly-form-item label='性别：' prop='sex'>
            <xly-radioGroup v-model="form.sex">
                <xly-radio label="1">test1</xly-radio>
                <xly-radio label="2">test2</xly-radio>
                <xly-radio label="3">test3</xly-radio>
            </xly-radioGroup>
        </xly-form-item>
        <xly-form-item label='种类：' prop='group'>
            <xly-checkboxGroup v-model="form.group">
                <xly-checkbox label="test1">test1</xly-checkbox>
                <xly-checkbox label="test2">test2</xly-checkbox>
                <xly-checkbox label="test3">test3</xly-checkbox>
            </xly-checkboxGroup>
        </xly-form-item>
        <div style='width:100%'>
        <xly-button plain @click='submit'>确定</xly-button>
        <xly-button line="line" plain @click='reset'>取消</xly-button>
        </div>
    </xly-form>
```





# API

# formprops

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| inline            | 行内表单         | true/false |  Boolean | false |
| size        | 表单大小  | large/medium/small/mini  | string  |自定义  |
| labelWidth            | 表单域标签宽度         | 自定义                            | string  | 自定义   |
| labelAlign            | 表单域标签对齐方式      | left/center/right      | string  | 自定义   |
| value            | 表单绑定值      | 自定义                            | object  | 自定义   |
| rules            | 表单验证规则   | 自定义                            | object  | 自定义   |

# formItemprops

| 属性名             | 说明         | 可选值                                      | 类型    | 默认值  |
| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |
| label            | 标签名称         | 自定义 |  string | 自定义 |
| labelWidth            | 表单域标签宽度         | 自定义                            | string  | 自定义   |
| labelAlign            | 表单域标签对齐方式      | left/center/right      | string  | 自定义   |
| prop            | 表单域id字段，在使用 validate、resetFields和验证的情况下，该属性是必填的   | 自定义                            | string  | 自定义   |

# event

| 事件名 | 说明            | 返回值 |
| ------ | --------------- | ------ |
| validate  | 验证表单 |   true/false   |
| resetFields  | 清除表单 |      |