---
title: TimeLine
pageClass: "xly-class"
---

# 示例

<br/>

### 基础用法

```vue
<h4>默认</h4>
<xly-time-line
  :data="list"
  :propsValue="propsType"
  @click="change"
></xly-time-line>
<h4>可折叠</h4>
<xly-time-line cuttle :data="list" :propsValue="propsType"></xly-time-line>
<script>
export default {
  data() {
    return {
      list: [
        {
          text: "第一季度",
          strTime: "2020-05-20",
          des: "你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了你的钱被马云掏空了",
        },
        {
          text: "第二季度",
          strTime: "2020-07-20",
          des: "你的钱还是被马云掏空了sss",
        },
      ],
      propsType: {
        label: "text",
        time: "strTime",
        content: "des",
      },
    };
  },
  methods: {
    change(value, index) {},
  },
};
</script>
```

# API

# props

| 属性名     | 说明           | 可选值                                                    | 类型    | 默认值             |
| ---------- | -------------- | --------------------------------------------------------- | ------- | ------------------ |
| data       | 数据           | 无                                                        | Array   | 无                 |
| propsValue | 数据字段自定义 | label,time,content,imgSrc(带图片的时间轴),icon,iconStyle: | Object  | label,time,content |
| cuttle     | 可折叠         | true/false                                                | Boolean | false              |

# event

| 事件名   | 说明                     | 返回值                        |
| -------- | ------------------------ | ----------------------------- |
| click    | 点击 timeLine 时触发     | value,index 点击元素对象,索引 |
| imgClick | 点击 timeLine 图片时触发 | value,index 点击元素对象,索引 |
