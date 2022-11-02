import{_ as y,c as i,a as d,b as a,w as p,d as r,r as F,o as u,e as o}from"./app.f313fdc2.js";const C={data(){return{visibleFlag:!1,videoOptions:{},titleText:"",currentPlay:null}},methods:{audio(t){this.visibleFlag=!0,this.videoOptions=[{titleText:"\u89C6\u9891",url:"https://chimee.org/vod/1.mp4",pic:""},{titleText:"\u6B4C\u66F21",url:"https://webfs.yun.kugou.com/202009240935/e71d0d335bcb003dfa754d894842a7e3/G175/M00/16/05/j5QEAF3wp-mASd1xAD2Z9zj-WCQ624.mp3",pic:""},{titleText:"\u6B4C\u66F22",url:"https://webfs.yun.kugou.com/202009170914/b23531276d04abc336be5f81fc27b4c2/G229/M09/13/0F/xZQEAF79mTeAKaQYAEhIqW4SCKE706.mp3",pic:""},{titleText:"\u6B4C\u66F23",url:"https://webfs.yun.kugou.com/202009162035/f23cff3cc2b719f256728e023141c7f7/G246/M09/05/17/Ng4DAF9fJpqACzd6AC4eXxfAqJM257.mp3",pic:""}],this.currentPlay=this.videoOptions[t]},video(){this.visibleFlag=!0,this.currentPlay={},this.videoOptions=[{titleText:"\u89C6\u9891",url:"https://chimee.org/vod/1.mp4",pic:""},{titleText:"\u97F3\u9891",url:"https://webfs.yun.kugou.com/202009082253/dcda38e15304372a22c6f5a612d4e491/G223/M07/13/09/Hw4DAF9OILuAP2efAC18t4U8iXo561.mp3",pic:""}]},cloesPlayer(t){this.visibleFlag=!1,console.log(t)}}},x=JSON.parse('{"title":"audioVideo","description":"","frontmatter":{"title":"audioVideo"},"headers":[{"level":2,"title":"audioVideo props","slug":"audiovideo-props","link":"#audiovideo-props","children":[]}],"relativePath":"components/audioVideo.md"}'),A=r('<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h2 id="audiovideo-props" tabindex="-1">audioVideo props <a class="header-anchor" href="#audiovideo-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>visibleFlag</td><td>boolean</td><td>false</td><td>\u662F\u5426\u5173\u95ED\u64AD\u653E\u5668</td></tr><tr><td>titleText</td><td>string</td><td></td><td>\u64AD\u653E\u5668\u6807\u9898</td></tr><tr><td>videoOptions</td><td>Array</td><td>[{url:&#39;&#39;,pic:&#39;&#39;,titleText:&#39;&#39;}]</td><td>\u89C6\u9891\u64AD\u653E\u94FE\u63A5url \u89C6\u9891\u5C01\u9762\u56FE\u7247\u94FE\u63A5pic\u9ED8\u8BA4\u7CFB\u7EDF\u56FE\u7247 \u89C6\u9891\u6807\u9898titleText</td></tr><tr><td>currentPlay</td><td>Object</td><td>\u9ED8\u8BA4videoOptions\u4E2D\u7684\u7B2C\u4E00\u6761</td><td>\u64AD\u653E\u5F53\u524D\u70B9\u51FB\u7684\u97F3\u89C6\u9891</td></tr><tr><td>autoplay</td><td>boolean</td><td>false</td><td>\u89C6\u9891\u81EA\u52A8\u64AD\u653E</td></tr><tr><td>loop</td><td>boolean</td><td>false</td><td>\u89C6\u9891\u5FAA\u73AF\u64AD\u653E</td></tr></tbody></table><h1 id="audiovideo-events" tabindex="-1">audioVideo events <a class="header-anchor" href="#audiovideo-events" aria-hidden="true">#</a></h1><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>on-cloes-player</td><td>\u5173\u95ED\u64AD\u653E\u5668\u4E8B\u5047</td><td>\u5F53\u524D\u64AD\u653E\u5BF9\u8C61\u6570\u636E</td></tr></tbody></table><h1 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h1><p><strong>\u57FA\u7840\u7528\u6CD5</strong></p>',7),h=r(`<p><strong><em>\u4F7F\u7528</em></strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            visibleFlag</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            videoOptions</span><span style="color:#89DDFF;">:{},</span></span>
<span class="line"><span style="color:#F07178;">            titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            currentPlay</span><span style="color:#89DDFF;">:null,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">visibleFlag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">videoOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u89C6\u9891</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://chimee.org/vod/1.mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// </span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6B4C\u66F21</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://webfs.yun.kugou.com/202009240935/e71d0d335bcb003dfa754d894842a7e3/G175/M00/16/05/j5QEAF3wp-mASd1xAD2Z9zj-WCQ624.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6B4C\u66F22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://webfs.yun.kugou.com/202009170914/b23531276d04abc336be5f81fc27b4c2/G229/M09/13/0F/xZQEAF79mTeAKaQYAEhIqW4SCKE706.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6B4C\u66F23</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://webfs.yun.kugou.com/202009162035/f23cff3cc2b719f256728e023141c7f7/G246/M09/05/17/Ng4DAF9fJpqACzd6AC4eXxfAqJM257.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            ]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">currentPlay</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">videoOptions</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">visibleFlag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">currentPlay</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">videoOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u89C6\u9891</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://chimee.org/vod/1.mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    titleText</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u97F3\u9891</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://webfs.yun.kugou.com/202009082253/dcda38e15304372a22c6f5a612d4e491/G223/M07/13/09/Hw4DAF9OILuAP2efAC18t4U8iXo561.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    pic</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            ]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">cloesPlayer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">playerResource</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">visibleFlag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">playerResource</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">audio</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u89C6\u9891</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">audio</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6B4C\u66F21</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">audio</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6B4C\u66F22</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">audio</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6B4C\u66F23</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">video</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u97F3\u9891</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">xly-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xly-audio-video</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">visibleFlag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">visibleFlag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">titleText</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">titleText</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">videoOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">videoOptions</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">autoplay</span></span>
<span class="line"><span style="color:#89DDFF;">        @</span><span style="color:#C792EA;">on-cloes-player</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">cloesPlayer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">currentPlay</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">currentPlay</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#F07178;">xly-audio-video</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2);function b(t,s,f,v,e,n){const l=F("xly-button"),D=F("xly-audio-video");return u(),i("div",null,[A,d("template",null,[a(l,{type:"info",onClick:s[0]||(s[0]=c=>n.audio(0))},{default:p(()=>[o("\u89C6\u9891")]),_:1}),a(l,{type:"info",onClick:s[1]||(s[1]=c=>n.audio(1))},{default:p(()=>[o("\u6B4C\u66F21")]),_:1}),a(l,{type:"info",onClick:s[2]||(s[2]=c=>n.audio(2))},{default:p(()=>[o("\u6B4C\u66F22")]),_:1}),a(l,{type:"info",onClick:s[3]||(s[3]=c=>n.audio(3))},{default:p(()=>[o("\u6B4C\u66F23")]),_:1}),a(l,{onClick:n.video},{default:p(()=>[o("\u97F3\u9891")]),_:1},8,["onClick"]),a(D,{visibleFlag:e.visibleFlag,titleText:e.titleText,videoOptions:e.videoOptions,autoplay:"",onOnCloesPlayer:n.cloesPlayer,currentPlay:e.currentPlay},null,8,["visibleFlag","titleText","videoOptions","onOnCloesPlayer","currentPlay"])]),h])}const _=y(C,[["render",b]]);export{x as __pageData,_ as default};
