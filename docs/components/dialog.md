---
title: dialog
pageClass: "xly-class"
---

# 示例

<br/>

### 基础用法

### 普通 dialog

```vue
<xly-dialog
  :visible="visibleFlag1"
  title="请确认信息"
  @close="visibleFlag1 = !visibleFlag1"
>
    <span>我们把表中的每一行叫做一个“记录”
    每一个记录包含这行中的所有信息
    就像在通讯录数据库中某个人全部的信息</span>
</xly-dialog>
```

### 自定义内容

```vue
<xly-dialog
  :visible="visibleFlag"
  title="请确认信息"
  @close="visibleFlag = !visibleFlag"
  width="600px"
>
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
<xly-dialog
  :visible="visibleFlagC"
  title="请确认信息"
  @close="visibleFlagC = !visibleFlagC"
  width="600px"
  top="10%"
  center
>
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

| 属性名       | 说明                 | 可选值     | 类型    | 默认值 |
| ------------ | -------------------- | ---------- | ------- | ------ |
| visible      | 显示标识             | true/false | boolean | false  |
| title        | 标题内容             | 自定义     | string  | 自定义 |
| width        | 对话框宽度           | 自定义     | string  | 自定义 |
| top          | 距离顶部距离         | 自定义     | string  | 自定义 |
| center       | 居中布局             | true/false | boolean | false  |
| appendToBody | 嵌套对话框提升至顶层 | true/false | boolean | false  |
| fullScreen   | 全屏                 | true/false | boolean | false  |

# event

| 事件名 | 说明       | 返回值 |
| ------ | ---------- | ------ |
| close  | 关闭时触发 | 无     |
