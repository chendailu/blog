---
title: audioVideo
---

# API

## audioVideo props

| 属性名      | 类型            | 默认值 | 说明                                                                         |
| ----------- | --------------- | ------ | ---------------------------------------------------------------------------- |
| visibleFlag | boolean         | false | 是否关闭播放器 |
| titleText   | string         |       | 播放器标题 |
| videoOptions | Array         | [{url:'',pic:'',titleText:''}] | 视频播放链接url 视频封面图片链接pic默认系统图片 视频标题titleText |
| currentPlay   | Object       | 默认videoOptions中的第一条 | 播放当前点击的音视频 |
| autoplay   | boolean         | false | 视频自动播放 |
| loop   | boolean            | false | 视频循环播放 |

# audioVideo events

| 事件名      | 说明                                           | 返回值 |
| ----------- | ---------------------------------------------- | ------ |
| on-cloes-player | 关闭播放器事假                             | 当前播放对象数据     |


# 示例

**基础用法**

<script>
export default {
    data(){
        return {
            visibleFlag:false,
            videoOptions:{},
            titleText:'',
            currentPlay:null,
        }
    },
    methods:{
        audio(num){
            this.visibleFlag = true;
            this.videoOptions = [
                {
                    titleText:'视频',
                    url:'https://chimee.org/vod/1.mp4',
                    pic:'',
                },
                // 
                {
                    titleText:'歌曲1',
                    url:'https://webfs.yun.kugou.com/202009240935/e71d0d335bcb003dfa754d894842a7e3/G175/M00/16/05/j5QEAF3wp-mASd1xAD2Z9zj-WCQ624.mp3',
                    pic:'',
                },
                {
                    titleText:'歌曲2',
                    url:'https://webfs.yun.kugou.com/202009170914/b23531276d04abc336be5f81fc27b4c2/G229/M09/13/0F/xZQEAF79mTeAKaQYAEhIqW4SCKE706.mp3',
                    pic:'',
                },
                {
                    titleText:'歌曲3',
                    url:'https://webfs.yun.kugou.com/202009162035/f23cff3cc2b719f256728e023141c7f7/G246/M09/05/17/Ng4DAF9fJpqACzd6AC4eXxfAqJM257.mp3',
                    pic:'',
                }
            ]
            this.currentPlay = this.videoOptions[num]
        },
        video(){
            this.visibleFlag = true;
            this.currentPlay = {};
            this.videoOptions = [
                {
                    titleText:'视频',
                    url:'https://chimee.org/vod/1.mp4',
                    pic:'',
                },
                {
                    titleText:'音频',
                    url:'https://webfs.yun.kugou.com/202009082253/dcda38e15304372a22c6f5a612d4e491/G223/M07/13/09/Hw4DAF9OILuAP2efAC18t4U8iXo561.mp3',
                    pic:'',
                },
            ]
        },
        cloesPlayer(playerResource){
            this.visibleFlag = false;
            console.log(playerResource);
        }
    },
}
</script>

<template>
    <xly-button  type="info" @click="audio(0)">视频</xly-button>
    <xly-button  type="info" @click="audio(1)">歌曲1</xly-button>
    <xly-button  type="info" @click="audio(2)">歌曲2</xly-button>
    <xly-button  type="info" @click="audio(3)">歌曲3</xly-button>
    <xly-button  @click="video">音频</xly-button>
    <xly-audio-video 
        :visibleFlag="visibleFlag" 
        :titleText="titleText"
        :videoOptions="videoOptions"
        autoplay
        @on-cloes-player="cloesPlayer"
        :currentPlay="currentPlay"
    ></xly-audio-video>
</template>


<style>
.input-demo {
    width: 100%;
}
.input-demo .title {
    margin-bottom: 15px;
}
.input-demo section {
    margin: 20px 0;
}
.input-demo section .xly-input-wrapper, .input-demo section .xly-textarea-wrapper {
    width: 20%;
    margin-right: 2%;
}
</style>

**_使用_**

```vue
<script>
export default {
    data(){
        return {
            visibleFlag:false,
            videoOptions:{},
            titleText:'',
            currentPlay:null,
        }
    },
    methods:{
        audio(num){
            this.visibleFlag = true;
            this.videoOptions = [
                {
                    titleText:'视频',
                    url:'https://chimee.org/vod/1.mp4',
                    pic:'',
                },
                // 
                {
                    titleText:'歌曲1',
                    url:'https://webfs.yun.kugou.com/202009240935/e71d0d335bcb003dfa754d894842a7e3/G175/M00/16/05/j5QEAF3wp-mASd1xAD2Z9zj-WCQ624.mp3',
                    pic:'',
                },
                {
                    titleText:'歌曲2',
                    url:'https://webfs.yun.kugou.com/202009170914/b23531276d04abc336be5f81fc27b4c2/G229/M09/13/0F/xZQEAF79mTeAKaQYAEhIqW4SCKE706.mp3',
                    pic:'',
                },
                {
                    titleText:'歌曲3',
                    url:'https://webfs.yun.kugou.com/202009162035/f23cff3cc2b719f256728e023141c7f7/G246/M09/05/17/Ng4DAF9fJpqACzd6AC4eXxfAqJM257.mp3',
                    pic:'',
                }
            ]
            this.currentPlay = this.videoOptions[num]
        },
        video(){
            this.visibleFlag = true;
            this.currentPlay = {};
            this.videoOptions = [
                {
                    titleText:'视频',
                    url:'https://chimee.org/vod/1.mp4',
                    pic:'',
                },
                {
                    titleText:'音频',
                    url:'https://webfs.yun.kugou.com/202009082253/dcda38e15304372a22c6f5a612d4e491/G223/M07/13/09/Hw4DAF9OILuAP2efAC18t4U8iXo561.mp3',
                    pic:'',
                },
            ]
        },
        cloesPlayer(playerResource){
            this.visibleFlag = false;
            console.log(playerResource);
        }
    },
}
</script>

<template>
    <xly-button  type="info" @click="audio(0)">视频</xly-button>
    <xly-button  type="info" @click="audio(1)">歌曲1</xly-button>
    <xly-button  type="info" @click="audio(2)">歌曲2</xly-button>
    <xly-button  type="info" @click="audio(3)">歌曲3</xly-button>
    <xly-button  @click="video">音频</xly-button>
    <xly-audio-video 
        :visibleFlag="visibleFlag" 
        :titleText="titleText"
        :videoOptions="videoOptions"
        autoplay
        @on-cloes-player="cloesPlayer"
        :currentPlay="currentPlay"
    ></xly-audio-video>
</template>

```
