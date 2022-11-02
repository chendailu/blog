import{_ as c,c as i,e as n,a,b as t,w as p,d as C,r as A,o as d}from"./app.f313fdc2.js";const y={methods:{third(o){this.$messageAlert({type:o,msg:"\u6210\u529F\u7684\u6D88\u606F",icon:"xly_icon_zhengque",top:"30px",timeOut:2,align:"left"}).then(()=>{console.log("ok")}).catch(()=>{console.log("no"+o)})}}},k=JSON.parse('{"title":"messageAlert","description":"","frontmatter":{"title":"messageAlert","pageClass":"xly-class"},"headers":[],"relativePath":"components/messageAlert.md"}'),g=a("h1",{id:"\u793A\u4F8B",tabindex:"-1"},[n("\u793A\u4F8B "),a("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),_=a("br",null,null,-1),u={style:{overflow:"hidden"}},m=a("h4",null,"\u63D0\u793A\u7C7B",-1),D=C(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># API</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># props</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">| \u5C5E\u6027\u540D             | \u8BF4\u660E         | \u53EF\u9009\u503C                                      | \u7C7B\u578B    | \u9ED8\u8BA4\u503C  |</span></span>
<span class="line"><span style="color:#A6ACCD;">| ----------------- | ------------ | ------------------------------------------- | ------- | ------- |</span></span>
<span class="line"><span style="color:#A6ACCD;">| type       | \u5F39\u6846\u79CD\u7C7B         | success,error,warning,enquire | string  | \u65E0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| icon            | \u63D0\u793A\u56FE\u6807        | \u81EA\u5B9A\u4E49                        | string  | \u81EA\u5B9A\u4E49   |</span></span>
<span class="line"><span style="color:#A6ACCD;">| msg            |\u63D0\u793A\u5185\u5BB9   | \u81EA\u5B9A\u4E49                        | string  | \u81EA\u5B9A\u4E49   |</span></span>
<span class="line"><span style="color:#A6ACCD;">| top            |\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB   | \u81EA\u5B9A\u4E49                        | string  | \u81EA\u5B9A\u4E49   |</span></span>
<span class="line"><span style="color:#A6ACCD;">| align            |\u63D0\u793A\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F   | left/right/center            | string  | center   |</span></span>
<span class="line"><span style="color:#A6ACCD;">| timeOut            | \u5EF6\u65F6\u5173\u95ED\u65F6\u95F4         | \u81EA\u5B9A\u4E49\u6570\u5B57               | number  | 5   |</span></span>
<span class="line"><span style="color:#A6ACCD;">| outside            | \u70B9\u51FB\u5F39\u6846\u4EE5\u5916\u5730\u65B9\u662F\u5426\u5173\u95ED         | true/false               | boolean  | false   |</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># event</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">| \u4E8B\u4EF6\u540D | \u8BF4\u660E            | \u8FD4\u56DE\u503C |</span></span>
<span class="line"><span style="color:#A6ACCD;">| ------ | --------------- | ------ |</span></span>
<span class="line"><span style="color:#A6ACCD;">| .then(() =&gt; {})  | \u5F39\u51FA\u65F6\u89E6\u53D1 | \u65E0     |</span></span>
<span class="line"><span style="color:#A6ACCD;">| .catch(() =&gt; {})  | \u6D88\u5931\u65F6\u89E6\u53D1 | \u65E0     |</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1);function h(o,s,f,x,v,e){const l=A("xly-button");return d(),i("div",null,[g,_,n(" ```vue "),a("template",null,[a("div",u,[m,t(l,{style:{"margin-right":"30px"},onClick:s[0]||(s[0]=r=>e.third("pramiry"))},{default:p(()=>[n("\u666E\u901A")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"success",onClick:s[1]||(s[1]=r=>e.third("success"))},{default:p(()=>[n("\u6210\u529F")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"warning",onClick:s[2]||(s[2]=r=>e.third("warning"))},{default:p(()=>[n("\u8B66\u544A")]),_:1}),t(l,{style:{"margin-right":"30px"},type:"danger",onClick:s[3]||(s[3]=r=>e.third("error"))},{default:p(()=>[n("\u9519\u8BEF")]),_:1})])]),D])}const T=c(y,[["render",h]]);export{k as __pageData,T as default};
