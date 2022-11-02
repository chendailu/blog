---
title: colorPicker
---
# 示例
## 代码
```vue
<script>
export default {
    data() {
        return {
            color: '#409EFF',
            color2: 'rgba(255, 69, 0, 0.68)',
            color3: null,
            color4: null,
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsv(51, 100, 98)',
                'hsva(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ]
        };
    },
    methods: {
        changeColor() {
            console.log(this.color)
        },
        activeChange(val) {
            console.log(val)
        }
    }
}
</script>

<template>
    <div>
        <h4>不同尺寸</h4>
        <xly-color-picker v-model="color"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium"></xly-color-picker>
        <xly-color-picker v-model="color" size="small"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini"></xly-color-picker>
        <br>
        <h4>透明度</h4>
        <xly-color-picker v-model="color2" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="medium" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="small" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="mini" show-alpha></xly-color-picker>
        <br>
        <h4>无默认值+透明度</h4>
        <xly-color-picker v-model="color3"></xly-color-picker>
        <xly-color-picker v-model="color3" size="medium"></xly-color-picker>
        <xly-color-picker v-model="color3" size="small"></xly-color-picker>
        <xly-color-picker v-model="color3" size="mini"></xly-color-picker>
        <br>
        <h4>无默认值+透明度</h4>
        <xly-color-picker v-model="color4" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="medium" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="small" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="mini" show-alpha></xly-color-picker>
        <br>
        <h4>禁用</h4>
        <xly-color-picker v-model="color" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="small" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" disabled></xly-color-picker>
        <br>
        <h4>ColorPicker 下拉框的类名</h4>
        <xly-color-picker v-model="color" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" popper-class="heihei"></xly-color-picker>
        <br>
        <h4>change事件</h4>
        <xly-color-picker v-model="color" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" @change="changeColor"></xly-color-picker>
        <br>
        <h4>预设颜色</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors"></xly-color-picker>
        <br>
        <h4>active-change事件</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <br>
        <h4>设置值的格式</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
    </div>
</template>


```
## 基础用法

<script>
export default {
    data() {
        return {
            color: '#409EFF',
            color2: 'rgba(255, 69, 0, 0.68)',
            color3: null,
            color4: null,
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsv(51, 100, 98)',
                'hsva(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ]
        };
    },
    methods: {
        changeColor() {
            console.log(this.color)
        },
        activeChange(val) {
            console.log(val)
        }
    }
}
</script>

<template>
    <div>
        <h4>不同尺寸</h4>
        <xly-color-picker v-model="color"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium"></xly-color-picker>
        <xly-color-picker v-model="color" size="small"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini"></xly-color-picker>
        <br>
        <h4>透明度</h4>
        <xly-color-picker v-model="color2" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="medium" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="small" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color2" size="mini" show-alpha></xly-color-picker>
        <br>
        <h4>无默认值+透明度</h4>
        <xly-color-picker v-model="color3"></xly-color-picker>
        <xly-color-picker v-model="color3" size="medium"></xly-color-picker>
        <xly-color-picker v-model="color3" size="small"></xly-color-picker>
        <xly-color-picker v-model="color3" size="mini"></xly-color-picker>
        <br>
        <h4>无默认值+透明度</h4>
        <xly-color-picker v-model="color4" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="medium" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="small" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color4" size="mini" show-alpha></xly-color-picker>
        <br>
        <h4>禁用</h4>
        <xly-color-picker v-model="color" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="small" disabled></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" disabled></xly-color-picker>
        <br>
        <h4>ColorPicker 下拉框的类名</h4>
        <xly-color-picker v-model="color" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" popper-class="heihei"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" popper-class="heihei"></xly-color-picker>
        <br>
        <h4>change事件</h4>
        <xly-color-picker v-model="color" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" @change="changeColor"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" @change="changeColor"></xly-color-picker>
        <br>
        <h4>预设颜色</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors"></xly-color-picker>
        <br>
        <h4>active-change事件</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors" @active-change="activeChange"></xly-color-picker>
        <br>
        <h4>设置值的格式</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors" color-format="rgb"></xly-color-picker>
        <br>
        <h4>show-alpha+带预设</h4>
        <xly-color-picker v-model="color" :predefine="predefineColors" color-format="rgb" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color" size="medium" :predefine="predefineColors" color-format="rgb" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color" size="small" :predefine="predefineColors" color-format="rgb" show-alpha></xly-color-picker>
        <xly-color-picker v-model="color" size="mini" :predefine="predefineColors" color-format="rgb" show-alpha></xly-color-picker>
    </div>
</template>

# API

## options
|参数	             |说明	                  |类型	        |可选值	      |默认值                |
|-------             |-------                 |------       |--------     |------                |
|value / v-model     |	绑定值	              |string	    |—	          |—                     |
|disabled            |	是否禁用              |	boolean     |	—	      |false                 |
|size	             |尺寸	                  |string       |	—	      |medium / small / mini |
|show-alpha	         |是否支持透明度选择      | boolean      |	—	       |false                |
|popper-class	     |ColorPicker下拉框的类名 |	string       |	—         |	—                    |
|predefine           |	预定义颜色            |	array       |	—         |	    —                |
|color-format|写入 v-model 的颜色的格式|string|	hsl / hsv / hex / rgb|	hex（show-alpha 为 false）/ rgb（show-alpha 为 true）|

## Events
|事件名称|	说明|	回调参数|
|-------|------|-----------|
|change	|当绑定值变化时触发|	当前值|
|activeChange	|面板中当前显示的颜色发生改变时触发|	当前显示的颜色值|