---
title: loading
---

# 示例

<br/>

### 基础用法

### 使用

```vue
<template>
  <div class='dome-wrap'>
      <div class='box1'>
          <div class='box' v-loading='loading'></div>
          <xly-button @click='handleLoading'>局部加载</xly-button>
          <xly-button @click='handleServiceLoading'>全屏加载</xly-button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    methods: {
        handleLoading(){
          this.loading = true
          setTimeout(()=>{
            this.loading = false
          }, 2000)
        },
        handleServiceLoading(){
          let load = this.$loading()
          setTimeout(()=>{
            load.close()
          }, 2000)
        }
    }
}
```

# API

# options

| 属性名      | 说明                                                     | 可选值 | 类型          | 默认值        |
| ----------- | -------------------------------------------------------- | ------ | ------------- | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串 | —      | object/string | document.body |
| body        | 同 v-loading 指令中的 body 修饰符                        | —      | boolean       | false         |
| fullscreen  | 同 v-loading 指令中的 fullscreen 修饰符                  | —      | boolean       | true          |
| lock        | 同 v-loading 指令中的 lock 修饰符                        | —      | boolean       | false         |
| text        | 显示在加载图标下方的加载文案                             | —      | string        | —             |
| spinner     | 自定义加载图标类名                                       | —      | string        | —             |
| background  | 遮罩背景色                                               | —      | string        | —             |
| customClass | Loading 的自定义类名                                     | —      | string        | —             |
