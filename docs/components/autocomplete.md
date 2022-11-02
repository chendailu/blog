---
title: autoComplete
---

# 示例

# 使用
```vue
<template>
    <xly-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
    ></xly-autocomplete>
</template>

<script>
export default {
    data() {
        return {
            restaurants: [],
            state: '',
            timeout:  null
        }
    },
    methods: {
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" }
            ];
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
}
</script>
```

# API

# props

| 属性名             | 说明                                                                                     | 可选值                                                         | 类型    | 默认值       |
| ------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------- | ------------ |
| valueKey           | 输入建议对象中用于显示的键名                                                             | -                                                              | String  | value        |
| placeholder        | 输入框占位文本                                                                           | -                                                              | String  | -            |
| clearable          | 启用清除功能                                                                             | true/false                                                     | Boolean | false        |
| disabled           | 禁用状态                                                                                 | true/false                                                     | Boolean | false        |
| name               | 原生name属性                                                                             | -                                                              | String  |              |
| size               | 输入框尺寸                                                                               | large、medium、small、mini                                     | String  | medium       |
| value              | 输入绑定值                                                                               | -                                                              | String  |              |
| fetchSuggestions   | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 | Function(queryString, callback)                                | -       | -            |
| triggerOnFocus     | 是否在输入框 focus 时显示建议列表                                                        | true/false                                                     | string  |              |
| prefix             | 输入框头部图标                                                                           | -                                                              | Boolean | false        |
| suffix             | 输入框尾部图标                                                                           | -                                                              | String  |              |
| placement          | 菜单弹出位置                                                                             | top / top-start / top-end / bottom / bottom-start / bottom-end | String  | bottom-start |
| popperOptions      | propper配置                                                                              |                                                                | Object  | -            |
| hideLoading        | 是否隐藏远程加载时的加载图标                                                             | true/false                                                     | Boolean | false        |
| highlightFirstItem | 是否默认突出显示远程搜索建议中的第一项                                                   | true/false                                                     | Boolean | false        |


# Slots

| name    | 说明           |
| ------- | -------------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

# Event


| 事件名称 | 说明                  | 回调参数   |
| -------- | --------------------- | ---------- |
| select   | 点击选中建议项时触发  | 选中建议项 |
| change   | 在 Input 值改变时触发 | input值    |