import{_ as y,c as i,a as d,b as a,w as p,d as r,r as F,o as u,e as o}from"./app.f313fdc2.js";const C={data(){return{visibleFlag:!1,videoOptions:{},titleText:"",currentPlay:null}},methods:{audio(t){this.visibleFlag=!0,this.videoOptions=[{titleText:"\u89C6\u9891",url:"https://chimee.org/vod/1.mp4",pic:""},{titleText:"\u6B4C\u66F21",url:"https://webfs.yun.kugou.com/202009240935/e71d0d335bcb003dfa754d894842a7e3/G175/M00/16/05/j5QEAF3wp-mASd1xAD2Z9zj-WCQ624.mp3",pic:""},{titleText:"\u6B4C\u66F22",url:"https://webfs.yun.kugou.com/202009170914/b23531276d04abc336be5f81fc27b4c2/G229/M09/13/0F/xZQEAF79mTeAKaQYAEhIqW4SCKE706.mp3",pic:""},{titleText:"\u6B4C\u66F23",url:"https://webfs.yun.kugou.com/202009162035/f23cff3cc2b719f256728e023141c7f7/G246/M09/05/17/Ng4DAF9fJpqACzd6AC4eXxfAqJM257.mp3",pic:""}],this.currentPlay=this.videoOptions[t]},video(){this.visibleFlag=!0,this.currentPlay={},this.videoOptions=[{titleText:"\u89C6\u9891",url:"https://chimee.org/vod/1.mp4",pic:""},{titleText:"\u97F3\u9891",url:"https://webfs.yun.kugou.com/202009082253/dcda38e15304372a22c6f5a612d4e491/G223/M07/13/09/Hw4DAF9OILuAP2efAC18t4U8iXo561.mp3",pic:""}]},cloesPlayer(t){this.visibleFlag=!1,console.log(t)}}},x=JSON.parse('{"title":"audioVideo","description":"","frontmatter":{"title":"audioVideo"},"headers":[{"level":2,"title":"audioVideo props","slug":"audiovideo-props","link":"#audiovideo-props","children":[]}],"relativePath":"components/audioVideo.md"}'),A=r("",7),h=r("",2);function b(t,s,f,v,e,n){const l=F("xly-button"),D=F("xly-audio-video");return u(),i("div",null,[A,d("template",null,[a(l,{type:"info",onClick:s[0]||(s[0]=c=>n.audio(0))},{default:p(()=>[o("\u89C6\u9891")]),_:1}),a(l,{type:"info",onClick:s[1]||(s[1]=c=>n.audio(1))},{default:p(()=>[o("\u6B4C\u66F21")]),_:1}),a(l,{type:"info",onClick:s[2]||(s[2]=c=>n.audio(2))},{default:p(()=>[o("\u6B4C\u66F22")]),_:1}),a(l,{type:"info",onClick:s[3]||(s[3]=c=>n.audio(3))},{default:p(()=>[o("\u6B4C\u66F23")]),_:1}),a(l,{onClick:n.video},{default:p(()=>[o("\u97F3\u9891")]),_:1},8,["onClick"]),a(D,{visibleFlag:e.visibleFlag,titleText:e.titleText,videoOptions:e.videoOptions,autoplay:"",onOnCloesPlayer:n.cloesPlayer,currentPlay:e.currentPlay},null,8,["visibleFlag","titleText","videoOptions","onOnCloesPlayer","currentPlay"])]),h])}const _=y(C,[["render",b]]);export{x as __pageData,_ as default};
