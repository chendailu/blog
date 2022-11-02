---
title: Input
---

# API

## input props

| 属性名      | 类型            | 默认值 | 说明                                                                         |
| ----------- | --------------- | ------ | ---------------------------------------------------------------------------- |
| type        | String          | text   | 输入框类型，可选值为 text、password、textarea、url、email、date、number、tel |
| value       | String, Number  | 无     | 绑定的值，可使用 v-model 双向绑定                                            |
| placeholder | String          | 无     | 占位文本                                                                     |
| maxlength   | Number          | 无     | 最大输入长度                                                                 |
| disabled    | Boolean         | false  | 输入框禁用状态                                                               |
| icon        | String          | 无     | 输入框尾部图标，仅在 text 类型下有效                                         |
| readonly    | Boolean         | false  | 是否为只读                                                                   |
| autofocus   | Boolean         | false  | 自动获取焦点                                                                 |
| name        | String          | 无     | 输入框的 name                                                                |
| elementId   | String          | 无     | 输入框的 id                                                                  |
| prefix      | String          | 无     | 输入框头部图标                                                               |
| suffix      | String          | 无     | 输入框头部图标                                                               |
| clearable   | Boolean         | false  | 是否显示清空按钮                                                             |
| wrap        | String          | soft   | 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效                |
| search      | Boolean         | false  | 是否显示为搜索型输入框                                                       |
| enterButton | Boolean, String | false  | 开启 search 时可用，是否有确认按钮，可设为按钮文字                           |

# Input events

| 事件名      | 说明                                           | 返回值 |
| ----------- | ---------------------------------------------- | ------ |
| on-enter    | 按下回车键时触发                               | 无     |
| on-click    | 设置 icon 属性后，点击图标时触发               | 无     |
| on-change   | 数据改变时触发                                 | enent  |
| on-focus    | 输入框聚焦时触发                               | 无     |
| on-blur     | 输入框失去焦点时触发                           | 无     |
| on-keyup    | 原生的 keyup 事件                              | enent  |
| on-keydown  | 原生的 keydown 事件                            | enent  |
| on-keypress | 原生的 keypress 事件                           | enent  |
| on-search   | 开启 search 时可用，点击搜索或按下回车键时触发 | value  |
| on-clear    | 开启 clearable 时可用，点击清空按钮时触发      | 无     |

# Input slot

| 名称    | 说明                           |
| ------- | ------------------------------ |
| prepend | 前置内容，仅在 text 类型下有效 |
| append  | 后置内容，仅在 text 类型下有效 |
| prefix  | 输入框头部图标                 |
| suffix  | 输入框尾部图标                 |

# 示例

**基础用法**



**_使用_**

```vue
<template>
    <div class="input-demo">
        <section>
            <p class="title">基础用法</p>
            <xly-input size="large" placeholder="large"></xly-input>
            <xly-input
                size="medium"
                placeholder="medium"
                readonly
                value="readonly"
            ></xly-input>
            <xly-input size="small" placeholder="small" disabled></xly-input>
            <xly-input size="mini" placeholder="mini"></xly-input>
            <p>当前内容：{{ value1 }}</p>
        </section>
        <section>
            <p class="title">开启头尾图标</p>
            <xly-input size="large" prefix="user" suffix="edit"></xly-input>
            <xly-input size="medium" prefix="user" suffix="edit"></xly-input>
            <xly-input size="small" prefix="user" suffix="edit"></xly-input>
            <xly-input size="mini" prefix="user" suffix="edit"></xly-input>
        </section>
        <section>
            <p class="title">开启头尾插件</p>
            <xly-input size="large"
                ><span slot="prepend">http://</span
                ><span slot="append">.com</span></xly-input
            >
            <xly-input size="medium"
                ><span slot="prepend">http://</span
                ><span slot="append">.com</span></xly-input
            >
            <xly-input size="small"
                ><span slot="prepend">http://</span
                ><span slot="append">.com</span></xly-input
            >
            <xly-input size="mini"
                ><span slot="prepend">http://</span
                ><span slot="append">.com</span></xly-input
            >
        </section>
        <section>
            <p class="title">启动清除功能；hover时显示</p>
            <xly-input size="large" clearable></xly-input>
            <xly-input size="medium" clearable></xly-input>
            <xly-input size="small" clearable></xly-input>
            <xly-input size="mini" clearable></xly-input>
        </section>
        <section>
            <p class="title">
                开启搜索框功能，不指定按钮内容时默认显示搜索图标
            </p>
            <xly-input size="large" search></xly-input>
            <xly-input size="medium" search enterButton="搜索"></xly-input>
            <xly-input size="small" search></xly-input>
            <xly-input size="mini" search></xly-input>
        </section>
        <section>
            <p class="title">textarea</p>
            <xly-input
                size="large"
                type="textarea"
                placeholder="large"
            ></xly-input>
            <xly-input
                size="medium"
                type="textarea"
                placeholder="medium"
            ></xly-input>
            <xly-input
                size="small"
                type="textarea"
                placeholder="small"
            ></xly-input>
            <xly-input
                size="mini"
                type="textarea"
                placeholder="mini"
            ></xly-input>
        </section>
    </div>
</template>
```
