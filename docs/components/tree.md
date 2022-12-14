---
title: Tree
---

# API

## tree props

| 属性名         | 类型     | 默认值                                                       | 说明                        |
| -------------- | -------- | ------------------------------------------------------------ | --------------------------- |
| data           | Array    | 可嵌套的节点属性的数组，生成 tree 的数据                     | []                          |
| multiple       | Boolean  | 是否支持多选                                                 | false                       |
| ellipsis       | Boolean  | 是否显示隐藏                                                 | false                       |
| show-checkbox  | Boolean  | 是否显示多选框                                               | false                       |
| empty-text     | String   | 没有数据时的提示                                             | 暂无数据                    |
| load-data      | Function | 异步加载数据的方法，见示例                                   | -                           |
| render         | Function | 自定义渲染内容，见示例                                       | -                           |
| children-key   | String   | 定义子节点键                                                 | children                    |
| label-key      | String   | 定义节点标题键                                               | title                       |
| check-strictly | Boolean  | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法     | false                       |
| check-directly | Boolean  | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | false                       |
| endElementList | Object   | {parentText:[],childrenText:[]}                              | 鼠标 hover 上显示传入的文字 |

## tree events

| 事件名           | 返回值                       | 说明                           |
| ---------------- | ---------------------------- | ------------------------------ |
| on-select-change | 点击树节点时触发             | 当前已选中的节点数组、当前项   |
| on-check-change  | 点击复选框时触发             | 当前已勾选节点的数组、当前项   |
| on-toggle-expand | 展开和收起子列表时触发       | 当前节点的数据                 |
| on-click-redact  | 必须添加 isRedact 点击是触发 | 返回当前节点的数据             |
| on-click-popover | 点击弹出的气泡时触发         | 返回当前节点的数据、点击的文字 |

## children

| 属性名          | 类型                   | 默认值                                 | 说明  |
| --------------- | ---------------------- | -------------------------------------- | ----- |
| title           | String、Element String | 标题                                   | -     |
| expand          | Boolean                | 是否展开直子节点                       | false |
| disabled        | Boolean                | 禁掉响应                               | false |
| disableCheckbox | Boolean                | 禁掉 checkbox                          | false |
| selected        | Boolean                | 是否选中子节点                         | false |
| checked         | Boolean                | 是否勾选(如果勾选，子节点也会全部勾选) | false |
| children        | Array                  | 子节点属性数组                         | -     |
| render          | Function               | 自定义当前节点渲染内容，见示例         | -     |
| isRedact        | Boolean                | 节点开启编辑 icon                      | false |

# 示例

## 基础用法

## 代码

```vue
<>
export default {
    name: 'tree-doc',
    data() {
        return {
            data1: [{
                title: '节点1',
                expand: true,
                children: [
                    {
                        title: '节点1-1',
                        expand: true,
                        children: [
                            {
                                title: '节点1-1-1'
                            }
                        ]
                    },
                    {
                        title: '节点1-2',
                        children: []
                    }
                ]
            },{
                title: '节点2',
                expand: true,
                children: [
                    {
                        title: '节点2-1',
                    }
                ]
            }],
            data2: [{
                title: 'parent',
                loading: false,
                children: []
            }],
            data3: [{
                title: 'parent 1',
                expand: true,
                render: (h, { root, node, data }) => {
                    return h('span', {
                        style: {
                            display: 'inline-block'
                        }
                    }, [
                        data.title,
                        h('span',{
                            style: {
                                display: 'inline-block',
                                width: '14px',
                                height: '14px',
                                backgroundColor: 'blue'
                            }
                        })
                    ])
                }
            }]
        };
    },
    methods: {
        loadData (item, callback) {
            setTimeout(() => {
                const data = [
                    {
                        title: 'children',
                        loading: false,
                        children: []
                    },
                    {
                        title: 'children',
                        loading: false,
                        children: []
                    }
                ];
                callback(data);
            }, 1000);
        },

        handlClickRedact(val){
            console.log(val);
            debugger
        },
    }
}
</>

<template>
    <div>
        <div>
            <h4>基础用法</h4>
            <xly-tree :data="data1" show-checkbox></xly-tree>
        </div>
        <div>
            <h4>异步加载</h4>
            <xly-tree :data="data2" :load-data="loadData"></xly-tree>
        </div>
        <div>
            <h4>render</h4>
            <xly-tree :data="data3"></xly-tree>
        </div>
    </div>
</template>
```
