---
title: Table
---

# API

## table props

| 属性名         | 类型     | 默认值 | 说明                                      |
| -------------- | -------- | ------ | ----------------------------------------- |
| data           | Array    | []     | 显示的结构化数据,具体见示例               |
| columns        | Array    | []     | 表头数据，具体见 表头配置                 |
| border         | Boolean  | false  | 是否显示纵向边框                          |
| stripe         | Boolean  | false  | 是否显示间隔斑马纹                        |
| selection      | Boolean  | false  | 是否开启选择框                            |
| selectionFixed | String   | 无     | selection为true时有效，选择框的浮动位置   |
| loading        | Boolean  | false  | 是否开启加载动画                          |
| size           | String   | medium | 表格尺寸，可选 'small', 'large', 'medium' |
| showSummary    | Boolean  | false  | 是否开启合计行                            |
| summaryMethod  | Function | 无     | 相当于 a 链接的 target 属性               |
| resizable      | Boolean  | false  | 是否可拖动改变列宽                        |
| dragSort       | Boolean  | false  | 是否可拖动改变列的顺序                    |

## table slot

| 名称    | 说明             |
| ------- | ---------------- |
| loading | 自定义loading    |
| empty   | 内容为空时的展示 |

## table events

| 事件名           | 说明           | 返回值                                  |
| ---------------- | -------------- | --------------------------------------- |
| on-select-all    | 点击全选框事件 | 全选状态，true/false                    |
| on-toggle-select | 点击单选事件   | 返回操作的行与行选中状态 [data, status] |

## table methods toggleAllSelection

| 方法名             | 说明                               | 参数       |
| ------------------ | ---------------------------------- | ---------- |
| toggleSelection | 默认选中对象(需给表格增加ref属性,如:this.$refs.xlyTable.clearToggle(arr,flag))arr是选中的对象数组,flag是选中对象唯一标识字段(必传) | array |
|clearToggle|清空选择对象(需给表格增加ref属性,同上)|Boolean|
## columns config

| 属性名         | 类型     | 默认值 | 说明                                                                                                                                               |
| -------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | String   | 无     | 列头显示文字                                                                                                                                       |
| key            | String   | 无     | 对应列内容的字段名                                                                                                                                 |
| fixed          | String   | 无     | 列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧                                                                                          |
| sortable       | Boolean  | 无     | 对应列是否可以排序                                                                                                                                 |
| sortMethod     | Function | 无     | 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 sortable: true 时有效。type 值为 asc 和 desc                                             |
| sortRemote     | Function | 无     | 是否开启远程排序， 接收两个参数，排序方式 type，type 值为 asc 和 desc ，normal , 列对象                                                            |
| filters        | Array    | 无     | 过滤数据的选项，数组中每项包含 label、value和checked(filterMultiple为true时有效) 属性，使用过滤，必须同时配置 filterMethod                         |
| filterMultiple | Boolean  | 无     | 数据过滤的选项是否多选                                                                                                                             |
| filterMethod   | Function | 无     | 过滤方法，返回过滤项完整表头                                                                                                                       |
| filterRemote   | Function | 无     | 使用远程过滤，返回该项完整表头                                                                                                                     |
| children       | Array    | 无     | 表头分组，详细请看示例                                                                                                                             |
| slot           | String   | 无     | 插槽名，使用指定插槽渲染列，详情请看示例                                                                                                           |
| render         | Function | 无     | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引 |
| ellipsis       | Boolean  | 无     | 是否启用超出隐藏功能，启用时，单元格内容将不在换行，并使用tooltip展示完整内容                                                                      |
| ellipsisWidth  | String   | 无     | tooltip最大宽度                                                                                                                                    |


# 示例

### 使用

```vue
<script>
export default {
    data() {
        return {
            columns1: [
                {
                    title: '姓名',
                    key: 'name',
                    width: 90
                },{
                    title: 'persion',
                    fixed: 'left',
                    children: [{
                        title: '性别',
                        key: 'sex',
                        width: 90,
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
                        width: 90,
                        sortable: true,
                        sortMethod: null,
                        sortRemote: null
                    }]
                },{
                    title: '爱好',
                    key: 'hobby',
                    children: [{
                        title: 'reality',
                        children:[{title:'ball',key:'ball', width: 90},{title:'swiming',key:'swiming', width: 90}]
                    },{
                        title: 'game',
                        key: 'game',
                        width: 90
                    }]
                },{
                    title: '职业',
                    key: 'job',
                    fixed: 'right',
                    width: 90
                }
            ],
            columns: [
                {
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
                }
            ],
            data: [
                {
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
                }
            ]
        }
    }
}
</script>
```
