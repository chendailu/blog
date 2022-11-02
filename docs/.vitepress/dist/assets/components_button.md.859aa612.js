import{_ as s,c as n,o as t,d as a}from"./app.f313fdc2.js";const i=JSON.parse('{"title":"Button","description":"","frontmatter":{"title":"Button"},"headers":[{"level":2,"title":"button props","slug":"button-props","link":"#button-props","children":[]},{"level":2,"title":"button events","slug":"button-events","link":"#button-events","children":[{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]}]}],"relativePath":"components/button.md"}'),l={name:"components/button.md"},o=a(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h2 id="button-props" tabindex="-1">button props <a class="header-anchor" href="#button-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>default</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C \u53EF\u9009\u503C\u4E3A\uFF1Adefault\u3001primary\u3001danger</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>\u6309\u94AE\u7981\u7528\u72B6\u6001</td></tr><tr><td>icon</td><td>String</td><td>\u65E0</td><td>\u6309\u94AE\u7684\u56FE\u6807</td></tr><tr><td>customIcon</td><td>String</td><td>\u65E0</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u56FE\u6807</td></tr><tr><td>htmlType</td><td>String</td><td>button</td><td>button \u539F\u751F\u7684 type\uFF0C\u53EF\u9009\u503C\u4E3A button\u3001submit\u3001reset</td></tr><tr><td>plain</td><td>Boolean</td><td>false</td><td>\u7EBF\u6846\u6A21\u5F0F\u6309\u94AE</td></tr><tr><td>to</td><td>String, Object</td><td>\u65E0</td><td>\u8DF3\u8F6C\u7684\u94FE\u63A5\uFF0C\u652F\u6301 vue-router \u5BF9\u8C61</td></tr><tr><td>replace</td><td>Boolean</td><td>false</td><td>\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u5F00\u542F replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td></tr><tr><td>target</td><td>String</td><td>_self</td><td>\u76F8\u5F53\u4E8E a \u94FE\u63A5\u7684 target \u5C5E\u6027</td></tr><tr><td>append</td><td>Boolean</td><td>false</td><td>\u540C vue-router append</td></tr><tr><td>line</td><td>String</td><td>\u65E0</td><td>\u7EBF\u6846\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A line\u3001dashed,\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E3A\u6B63\u5E38\u6309\u94AE</td></tr></tbody></table><h2 id="button-events" tabindex="-1">button events <a class="header-anchor" href="#button-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>on-click</td><td>\u70B9\u51FB\u4E8B\u4EF6</td><td>event</td></tr></tbody></table><h1 id="\u6309\u94AE" tabindex="-1">\u6309\u94AE <a class="header-anchor" href="#\u6309\u94AE" aria-hidden="true">#</a></h1><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mini</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">danger</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">router button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">danger</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">router button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">line</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">line</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dashed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,8),p=[o];function e(r,D,F,c,y,d){return t(),n("div",null,p)}const C=s(l,[["render",e]]);export{i as __pageData,C as default};
