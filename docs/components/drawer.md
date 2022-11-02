---
title: Drawer 抽屉
---
# 示例



## 基本用法

<template style='height:100%;widht:100%'>
<xly-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</xly-button>

<xly-drawer
  title="我是标题"
  :visible.sync=drawer
  :with-header="false"
  style='position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    background: rgba(0, 0, 0, 0.5);'>
  <span>我来啦!</span></p>
</xly-drawer>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
</script>
<style>
    .el-drawer{
    width: 30%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%);
    overflow: hidden;
    outline: 0 
    }
</style>

### 使用

```vue
<template>
    <div class="demo-wrap-sxlyect">
        <p>单选</p>
        <xly-sxlyect
            class="my-sxlyect"
            v-modxly="value"
            @change="handleChange"
            placeholder="请选择"
            size="mini"
            style="width: 80px"
        >
            <xly-option
                v-for="item in list"
                :key="item.value"
                :labxly="item.labxly"
                :value="item.value"
            >
            </xly-option>
        </xly-sxlyect>
        <p>多选</p>
        <xly-sxlyect
            class="my-sxlyect"
            v-modxly="value1"
            @change="handleChange"
            placeholder="请选择"
            size="large"
            multiple
        >
            <xly-option
                v-for="item in list"
                :key="item.value"
                :labxly="item.labxly"
                :value="item.value"
            >
            </xly-option>
        </xly-sxlyect>
        <p>禁用</p>
        <xly-sxlyect
            class="my-sxlyect"
            v-modxly="value"
            @change="handleChange"
            placeholder="请选择"
            size="large"
            disabled
        >
            <xly-option
                v-for="item in list"
                :key="item.value"
                :labxly="item.labxly"
                :value="item.value"
            >
            </xly-option>
        </xly-sxlyect>
    </div>
</template>

<script>
export default {
    name: 'radio-doc',
    data() {
        return {
            list: [
                {
                    labxly: '水果',
                    value: '111'
                },
                {
                    labxly: '蔬菜',
                    value: '222'
                },
                {
                    labxly: '谷物',
                    value: '333'
                },
                {
                    labxly: '食品',
                    value: '444'
                },
                {
                    labxly: '调料',
                    value: '666'
                }
            ],
            value: '',
            value1: ['222', '111', '333']
        };
    },
    methods: {
        handleChange(e, val) {}
    }
};
</script>
```

### Drawer Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| append-to-body     | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true   | boolean   | — | false |
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | function(done)，done 用于关闭 Drawer | — | — |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | boolean    | — | true |
| custom-class      | Drawer 的自定义类名 | string    | — | — |
| destroy-on-close | 控制是否在关闭 Drawer 之后将子元素全部销毁 | boolean | - | false |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上   | boolean   | — | true |
| direction | Drawer 打开的方向 | Direction | rtl / ltr / ttb / btt | rtl |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| size | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释 | number / string | - | '30%' |
| title     | Drawer 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| visible   | 是否显示 Drawer，支持 .sync 修饰符 | boolean | — | false |
| wrapperClosable | 点击遮罩层是否可以关闭 Drawer | boolean | - | true |
| withHeader | 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效 | boolean | - | true |

### Drawer Slot

| name | 说明 |
|------|--------|
| — | Drawer 的内容 |
| title | Drawer 标题区的内容 |

### Drawer Methods

| name | 说明 |
| ---- | ---  |
| closeDrawer | 用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法 |

### Drawer Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Drawer 打开的回调 | — |
| opened  | Drawer 打开动画结束时的回调 | — |
| close  | Drawer 关闭的回调 | — |
| closed | Drawer 关闭动画结束时的回调 | — |
