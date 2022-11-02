import{_ as l,c as a,o as t,a as s,e as n,d as p}from"./app.f313fdc2.js";const b=JSON.parse('{"title":"Tree","description":"","frontmatter":{"title":"Tree"},"headers":[{"level":2,"title":"tree props","slug":"tree-props","link":"#tree-props","children":[]},{"level":2,"title":"tree events","slug":"tree-events","link":"#tree-events","children":[]},{"level":2,"title":"children","slug":"children","link":"#children","children":[]},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[]}],"relativePath":"components/tree.md"}'),e={name:"components/tree.md"},o=s("h1",{id:"api",tabindex:"-1"},[n("API "),s("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#")],-1),c=s("h2",{id:"tree-props",tabindex:"-1"},[n("tree props "),s("a",{class:"header-anchor",href:"#tree-props","aria-hidden":"true"},"#")],-1),r=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"\u5C5E\u6027\u540D"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u9ED8\u8BA4\u503C"),s("th",null,"\u8BF4\u660E")])]),s("tbody",null,[s("tr",null,[s("td",null,"data"),s("td",null,"Array"),s("td",null,"\u53EF\u5D4C\u5957\u7684\u8282\u70B9\u5C5E\u6027\u7684\u6570\u7EC4\uFF0C\u751F\u6210 tree \u7684\u6570\u636E"),s("td",null,"[]")]),s("tr",null,[s("td",null,"multiple"),s("td",null,"Boolean"),s("td",null,"\u662F\u5426\u652F\u6301\u591A\u9009"),s("td",null,"false")]),s("tr",null,[s("td",null,"ellipsis"),s("td",null,"Boolean"),s("td",null,"\u662F\u5426\u663E\u793A\u9690\u85CF"),s("td",null,"false")]),s("tr",null,[s("td",null,"show-checkbox"),s("td",null,"Boolean"),s("td",null,"\u662F\u5426\u663E\u793A\u591A\u9009\u6846"),s("td",null,"false")]),s("tr",null,[s("td",null,"empty-text"),s("td",null,"String"),s("td",null,"\u6CA1\u6709\u6570\u636E\u65F6\u7684\u63D0\u793A"),s("td",null,"\u6682\u65E0\u6570\u636E")]),s("tr",null,[s("td",null,"load-data"),s("td",null,"Function"),s("td",null,"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u89C1\u793A\u4F8B"),s("td",null,"-")]),s("tr",null,[s("td",null,"render"),s("td",null,"Function"),s("td",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9\uFF0C\u89C1\u793A\u4F8B"),s("td",null,"-")]),s("tr",null,[s("td",null,"children-key"),s("td",null,"String"),s("td",null,"\u5B9A\u4E49\u5B50\u8282\u70B9\u952E"),s("td",null,"children")]),s("tr",null,[s("td",null,"label-key"),s("td",null,"String"),s("td",null,"\u5B9A\u4E49\u8282\u70B9\u6807\u9898\u952E"),s("td",null,"title")]),s("tr",null,[s("td",null,"check-strictly"),s("td",null,"Boolean"),s("td",null,"\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5"),s("td",null,"false")]),s("tr",null,[s("td",null,"check-directly"),s("td",null,"Boolean"),s("td",null,"\u5F00\u542F\u540E\uFF0C\u5728 show-checkbox \u6A21\u5F0F\u4E0B\uFF0Cselect \u7684\u4EA4\u4E92\u4E5F\u5C06\u8F6C\u4E3A check"),s("td",null,"false")]),s("tr",null,[s("td",null,"endElementList"),s("td",null,"Object"),s("td",{"parentText:[],childrenText:[]":""}),s("td",null,"\u9F20\u6807 hover \u4E0A\u663E\u793A\u4F20\u5165\u7684\u6587\u5B57")])])],-1),d=p(`<h2 id="tree-events" tabindex="-1">tree events <a class="header-anchor" href="#tree-events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>on-select-change</td><td>\u70B9\u51FB\u6811\u8282\u70B9\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u5DF2\u9009\u4E2D\u7684\u8282\u70B9\u6570\u7EC4\u3001\u5F53\u524D\u9879</td></tr><tr><td>on-check-change</td><td>\u70B9\u51FB\u590D\u9009\u6846\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u5DF2\u52FE\u9009\u8282\u70B9\u7684\u6570\u7EC4\u3001\u5F53\u524D\u9879</td></tr><tr><td>on-toggle-expand</td><td>\u5C55\u5F00\u548C\u6536\u8D77\u5B50\u5217\u8868\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E</td></tr><tr><td>on-click-redact</td><td>\u5FC5\u987B\u6DFB\u52A0 isRedact \u70B9\u51FB\u662F\u89E6\u53D1</td><td>\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E</td></tr><tr><td>on-click-popover</td><td>\u70B9\u51FB\u5F39\u51FA\u7684\u6C14\u6CE1\u65F6\u89E6\u53D1</td><td>\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\u3001\u70B9\u51FB\u7684\u6587\u5B57</td></tr></tbody></table><h2 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>String\u3001Element String</td><td>\u6807\u9898</td><td>-</td></tr><tr><td>expand</td><td>Boolean</td><td>\u662F\u5426\u5C55\u5F00\u76F4\u5B50\u8282\u70B9</td><td>false</td></tr><tr><td>disabled</td><td>Boolean</td><td>\u7981\u6389\u54CD\u5E94</td><td>false</td></tr><tr><td>disableCheckbox</td><td>Boolean</td><td>\u7981\u6389 checkbox</td><td>false</td></tr><tr><td>selected</td><td>Boolean</td><td>\u662F\u5426\u9009\u4E2D\u5B50\u8282\u70B9</td><td>false</td></tr><tr><td>checked</td><td>Boolean</td><td>\u662F\u5426\u52FE\u9009(\u5982\u679C\u52FE\u9009\uFF0C\u5B50\u8282\u70B9\u4E5F\u4F1A\u5168\u90E8\u52FE\u9009)</td><td>false</td></tr><tr><td>children</td><td>Array</td><td>\u5B50\u8282\u70B9\u5C5E\u6027\u6570\u7EC4</td><td>-</td></tr><tr><td>render</td><td>Function</td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u8282\u70B9\u6E32\u67D3\u5185\u5BB9\uFF0C\u89C1\u793A\u4F8B</td><td>-</td></tr><tr><td>isRedact</td><td>Boolean</td><td>\u8282\u70B9\u5F00\u542F\u7F16\u8F91 icon</td><td>false</td></tr></tbody></table><h1 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;tree-doc&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            data1: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">                title: &#39;\u8282\u70B91&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: &#39;\u8282\u70B91-1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                                title: &#39;\u8282\u70B91-1-1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            }</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: &#39;\u8282\u70B91-2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },{</span></span>
<span class="line"><span style="color:#A6ACCD;">                title: &#39;\u8282\u70B92&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: &#39;\u8282\u70B92-1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }],</span></span>
<span class="line"><span style="color:#A6ACCD;">            data2: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">                title: &#39;parent&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                loading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">            }],</span></span>
<span class="line"><span style="color:#A6ACCD;">            data3: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">                title: &#39;parent 1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                expand: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                render: (h, { root, node, data }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    return h(&#39;span&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        style: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            display: &#39;inline-block&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }, [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        data.title,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        h(&#39;span&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            style: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                                display: &#39;inline-block&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                width: &#39;14px&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                height: &#39;14px&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                backgroundColor: &#39;blue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            }</span></span>
<span class="line"><span style="color:#A6ACCD;">                        })</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }]</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        loadData (item, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                const data = [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: &#39;children&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        loading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        title: &#39;children&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        loading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ];</span></span>
<span class="line"><span style="color:#A6ACCD;">                callback(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        handlClickRedact(val){</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(val);</span></span>
<span class="line"><span style="color:#A6ACCD;">            debugger</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u57FA\u7840\u7528\u6CD5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">show-checkbox</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5F02\u6B65\u52A0\u8F7D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">load-data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">loadData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">render</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xly-tree</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,8),i=[o,c,r,d];function D(C,A,y,F,h,u){return t(),a("div",null,i)}const x=l(e,[["render",D]]);export{b as __pageData,x as default};
