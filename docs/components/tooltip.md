---
title: tooltip
---

# API

## tooltip props

| 属性名    | 类型   | 默认值 | 说明                                                                                                                     |
| --------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| content   | String | 无     | 显示的内容                                                                                                               |
| disabled  | String | top    | 禁用状态                                                                                                                 |
| placement | String | 无     | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end |
| delay     | Number | 100    | 延迟显示，单位毫秒                                                                                                       |
| maxWidth  | Number | 无     | 最大宽度，超出自动换行                                                                                                   |

# 示例

<template>
    <div style="padding-top: 40px;">
        <xly-tooltip placement='right' content="展示完整内容">
            tooltip
        </xly-tooltip>
    </div>
</template>

# 代码
```html
<template>
    <xly-tooltip content="展示完整内容">
        tooltip
    </xly-tooltip>
</template>
```