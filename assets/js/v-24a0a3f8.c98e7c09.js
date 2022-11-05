"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[4983],{6741:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-24a0a3f8",path:"/courses/webpack/multi-page.html",title:"构建多页应用",lang:"zh-CN",frontmatter:{title:"构建多页应用",description:"介绍 Webpack 中如何构建多页应用",keywords:["Webpack"],date:"2021-01-27T00:00:00.000Z",key:25},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"生成多个页面",slug:"生成多个页面",children:[]},{level:2,title:"测试构建结果",slug:"测试构建结果",children:[]},{level:2,title:"渐进式 web 应用（PWA）",slug:"渐进式-web-应用-pwa",children:[]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"courses/webpack/multi-page.md"}},3993:(n,s,a)=>{a.r(s),a.d(s,{default:()=>E});var p=a(6252);const t=(0,p.Uk)("尽管我们通常都会用 Webpack 来构建单页应用，其实 Webpack 也可以构建多页面应用。方法与前面"),e=(0,p.Uk)("设置构建输出目标"),o=(0,p.Uk)("一章中输出多个文件类似，我们通过配置 "),c=(0,p.Wm)("code",null,"MiniHtmlWebpackPlugin",-1),l=(0,p.Uk)(" 这个插件来完成。"),r=(0,p.uE)('<h2 id="生成多个页面" tabindex="-1"><a class="header-anchor" href="#生成多个页面" aria-hidden="true">#</a> 生成多个页面</h2><p>我们通过 mini-html-webpack-plugin 这个插件来生成多个页面。html-webpack-plugin 也可以实现功能，并且我们还可以实现更细粒度的控制。本文只做演示说明，mini-html-webpack-plugin 足够使用了。</p><p>通常一个页面中需要指定标题、文件地址和要加载的构建模块（chunk）。配置如下：</p><p><strong>webpack.parts.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> MiniHtmlWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> url <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> chunks <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniHtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      publicPath<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n      chunks<span class="token punctuation">,</span>\n      filename<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url <span class="token operator">&amp;&amp;</span> url <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">index.html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      context<span class="token operator">:</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>我们使用新的配置文件</p><p><strong>webpack.multi.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> parts <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.parts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span> mode<span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span> entry<span class="token operator">:</span> <span class="token punctuation">{</span> app<span class="token operator">:</span> <span class="token string">&#39;./src/multi.js&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  parts<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  parts<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;Another&#39;</span><span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token string">&#39;another&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>编写一个小模块来渲染页面：</p><p><strong>src/multi.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nelement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;hello multi&#39;</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>package.json</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;build:multi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wp --config webpack.multi.js&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="测试构建结果" tabindex="-1"><a class="header-anchor" href="#测试构建结果" aria-hidden="true">#</a> 测试构建结果</h2><p>执行完构建脚本以后，执行 <code>npx serve dist</code>，我们可以看到 <code>/</code> 和 <code>/another</code> 这两个页面。</p>',15),i=(0,p.Uk)("我们可以通过 "),u=(0,p.Wm)("code",null,"parts.page",-1),k=(0,p.Uk)(" 的 "),b=(0,p.Wm)("code",null,"chunks",-1),d=(0,p.Uk)(" 参数来控制页面可以加载哪些模块。如果传 "),m=(0,p.Wm)("code",null,"[]",-1),g=(0,p.Uk)("，则页面不会加载任何 模块。该参数同时还支持使用前面 "),h={href:"https://mp.weixin.qq.com/s?__biz=MzI1OTg5MTQ5NQ==&mid=2247483741&idx=1&sn=39fcd310b1da96efa81f374b3df2ca1a&chksm=ea734915dd04c003f46e7eb3a79b74488113fd5581f8bc11f82927b10be52c7d106ab66c35d1&token=1782930901&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Uk)("Bundle Spliting"),f=(0,p.Uk)(" 一章中分割出来的 bundle，方便我们复用像 vendor 这样的 bundle。"),v=(0,p.Wm)("h2",{id:"渐进式-web-应用-pwa",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#渐进式-web-应用-pwa","aria-hidden":"true"},"#"),(0,p.Uk)(" 渐进式 web 应用（PWA）")],-1),x=(0,p.Uk)("如果我们在构建多页应用的时候，考虑一些代码复用和路由的问题，最终我们的应用会慢慢靠近 PWA。"),W={href:"https://github.com/webpack/webpack-pwa",target:"_blank",rel:"noopener noreferrer"},y=(0,p.Uk)("webpack-pwd"),j=(0,p.Uk)(" 这个官方例子展示了如何使用 Webpack 来构建 PWA 应用。"),U=(0,p.Uk)("使用 "),q={href:"https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"},P=(0,p.Uk)("Service Worker"),_=(0,p.Uk)(" 可以提升应用离线使用体验，"),A={href:"https://developers.google.com/web/tools/workbox/",target:"_blank",rel:"noopener noreferrer"},M=(0,p.Uk)("Workbox"),H=(0,p.Uk)(" 及相关的 "),z={href:"https://www.npmjs.com/package/workbox-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},C=(0,p.Uk)("webpack-workbox-plugin"),S=(0,p.Uk)(" 可以帮助我们方便使用 Service Worker."),T=(0,p.uE)('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>我们可以通过使用多个进行并行编译的形式来生成多个页面，但是这么做可能无法复用公共代码。</p><p>我们可以将构建多个页面的配置放到一个配置文件中。通过 MiniHtmlWebpackPlugin 这个插件来构建多个页面。</p><p>我们可以通过各种 Webpack 技术来构建 PWA 应用，帮助我们提升应用的性能和使用体验。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',5),E={render:function(n,s){const a=(0,p.up)("RouterLink"),E=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("p",null,[t,(0,p.Wm)(a,{to:"/courses/webpack/output-target.html"},{default:(0,p.w5)((()=>[e])),_:1}),o,c,l]),r,(0,p.Wm)("p",null,[i,u,k,b,d,m,g,(0,p.Wm)("a",h,[w,(0,p.Wm)(E)]),f]),v,(0,p.Wm)("p",null,[x,(0,p.Wm)("a",W,[y,(0,p.Wm)(E)]),j]),(0,p.Wm)("p",null,[U,(0,p.Wm)("a",q,[P,(0,p.Wm)(E)]),_,(0,p.Wm)("a",A,[M,(0,p.Wm)(E)]),H,(0,p.Wm)("a",z,[C,(0,p.Wm)(E)]),S]),T],64)}}}}]);