"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[1572],{9688:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-206db3ae",path:"/courses/webpack/code-compress.html",title:"代码压缩",lang:"zh-CN",frontmatter:{title:"代码压缩",description:"介绍 Webpack 中如何进行代码压缩",keywords:["Webpack"],date:"2021-01-19T00:00:00.000Z",key:17},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"压缩（minify）JavaScript",slug:"压缩-minify-javascript",children:[]},{level:2,title:"提高代码执行性能",slug:"提高代码执行性能",children:[]},{level:2,title:"压缩 HTML",slug:"压缩-html",children:[]},{level:2,title:"压缩 CSS",slug:"压缩-css",children:[]},{level:2,title:"压缩输出的 Bundle",slug:"压缩输出的-bundle",children:[]},{level:2,title:"混淆（Obfuscating）输出",slug:"混淆-obfuscating-输出",children:[]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"courses/webpack/code-compress.md"}},4457:(n,s,a)=>{a.r(s),a.d(s,{default:()=>X});var e=a(6252);const p=(0,e.Uk)("自从 Webpack 4 开始，生产环境构建默认使用 "),t={href:"https://www.npmjs.com/package/terser",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("terser"),c=(0,e.Uk)(" 来压缩（minify）代码。本章来介绍下 Webpack 压缩代码的工作机制。"),o=(0,e.Wm)("h2",{id:"压缩-minify-javascript",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#压缩-minify-javascript","aria-hidden":"true"},"#"),(0,e.Uk)(" 压缩（minify）JavaScript")],-1),l=(0,e.Wm)("p",null,[(0,e.Uk)("这里说的压缩指的是缩小代码量，在不改变代码语义的情况下，重写代码。举个例子，比如将长的变量名重命名为短的变量名，将永远不可能到达的分支（"),(0,e.Wm)("code",null,"if(false)"),(0,e.Uk)("）删除。")],-1),r=(0,e.Wm)("p",null,[(0,e.Uk)("在 Webpack 中，我们可以通过 "),(0,e.Wm)("code",null,"optimization.minimize"),(0,e.Uk)(" 和 "),(0,e.Wm)("code",null,"optimization.minimizer"),(0,e.Uk)(" 这两个配置项来定制代码压缩过程。")],-1),u=(0,e.Uk)("Webpack 默认使用 "),m={href:"https://www.npmjs.com/package/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("terser-webpack-plugin"),k=(0,e.Uk)(" 这个插件来压缩代码，我们来尝试修改压缩逻辑。"),b=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">add</span> terser-webpack-plugin --develop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>webpack.parts.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span><span class="token function-variable function">minifyJavaScript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span> minimizer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> productionConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\n  parts<span class="token punctuation">.</span><span class="token function">minifyJavaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token operator">...</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>现在执行 <code>npm run build</code> 可以看到构建输出与之前相同。</p><blockquote><p>可以通过 <code>terserOptions</code> 参数来自定义压缩过程，具体可以参考插件文档。</p></blockquote><h2 id="提高代码执行性能" tabindex="-1"><a class="header-anchor" href="#提高代码执行性能" aria-hidden="true">#</a> 提高代码执行性能</h2><p>作为代码压缩的补充，我们可以借助一些技术手段来提高代码执行性能。比如 scope hoisting。</p><p>从 Webpack 4 开始，在生产模式中默认启用 scope hoisting. 在构建过程中，Webpack 会将所有模块都放在一个作用域中，避免了为每一个模块都生成一个闭包。scope hoisting 会降低编译速度，但是换来的是代码执行性能的提升。</p><h2 id="压缩-html" tabindex="-1"><a class="header-anchor" href="#压缩-html" aria-hidden="true">#</a> 压缩 HTML</h2>',11),g=(0,e.Uk)("如果我们通过 "),h={href:"https://www.npmjs.com/package/html-loader",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("html-loader"),v=(0,e.Uk)(" 来处理 HTML 模板的话，可以使用 "),w={href:"https://www.npmjs.com/package/posthtml",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("posthtml"),j=(0,e.Uk)(" 和 "),x={href:"https://www.npmjs.com/package/posthtml-loader",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("posthtml-loader"),U=(0,e.Uk)(" 来对 HTML 进行预处理，然后通过 "),z={href:"https://www.npmjs.com/package/posthtml-minifier",target:"_blank",rel:"noopener noreferrer"},B=(0,e.Uk)("posthtml-minifier"),_=(0,e.Uk)(" 来压缩 HTML，同时 "),S={href:"https://www.npmjs.com/package/posthtml-minify-classnames",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("posthtml-minify-classnames"),C=(0,e.Uk)(" 可以缩小 HTML 中样式类名称的长度。"),M=(0,e.Wm)("h2",{id:"压缩-css",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#压缩-css","aria-hidden":"true"},"#"),(0,e.Uk)(" 压缩 CSS")],-1),T=(0,e.Uk)("可以使用 "),q={href:"https://www.npmjs.com/package/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("css-minimizer-webpack-plugin"),L=(0,e.Uk)(" 这个插件来压缩 CSS。"),J=(0,e.Wm)("code",null,"MiniCssExtractPlugin",-1),P=(0,e.Uk)(" 插件只会简单的合并文本，当项目中有相同样式类的时候，会产生重复代码，css-minimizer-webpack-plugin 可以解决这个问题。css-minimizer-webpack-plugin 这个插件的底层基于 "),E={href:"http://cssnano.co/",target:"_blank",rel:"noopener noreferrer"},O=(0,e.Uk)("cssnano"),F=(0,e.Uk)(" 实现。"),N=(0,e.uE)('<p>首先安装依赖包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">add</span> css-minimizer-webpack-plugin --develop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>webpack.parts.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;css-minimizer-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span><span class="token function-variable function">minifyCSS</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> options <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> minimizerOptions<span class="token operator">:</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> productionConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  parts<span class="token punctuation">.</span><span class="token function">minifyJavaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  parts<span class="token punctuation">.</span><span class="token function">minifyCSS</span><span class="token punctuation">(</span><span class="token punctuation">{</span> options<span class="token operator">:</span> <span class="token punctuation">{</span> preset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>此时执行 <code>npm run build</code>, 可以看到输出的 css 文件变小了。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>⬡ webpack: Build Finished\n⬡ webpack: assets by path *.js 129 KiB\n    asset 935.js 126 KiB [emitted] [minimized] (id hint: vendors) 2 related assets\n    asset main.js 3.28 KiB [emitted] [minimized] (name: main) 1 related asset\n    asset 958.js 183 bytes [emitted] [minimized] 1 related asset\n  asset main.css 1.37 KiB [emitted] [minimized] (name: main)\n  asset index.html 259 bytes [emitted]\n  Entrypoint main 131 KiB (182 KiB) = 935.js 126 KiB main.css 1.37 KiB main.js 3.28 KiB 2 auxiliary assets\n  runtime modules 7.81 KiB 10 modules\n  orphan modules 465 bytes [orphan] 2 modules\n  code generated modules 133 KiB (javascript) 4.18 MiB (css/mini-extract) [code generated]\n    modules by path ./node_modules/ 133 KiB\n      modules by path ./node_modules/react/ 6.48 KiB 2 modules\n      modules by path ./node_modules/react-dom/ 119 KiB 2 modules\n      modules by path ./node_modules/scheduler/ 4.91 KiB\n        ./node_modules/scheduler/index.js 198 bytes [built] [code generated]\n        ./node_modules/scheduler/cjs/scheduler.production.min.js 4.72 KiB [built] [code generated]\n      ./node_modules/object-assign/index.js 2.06 KiB [built] [code generated]\n    modules by path ./src/ 633 bytes (javascript) 4.18 MiB (css/mini-extract)\n      ./src/index.js + 2 modules 600 bytes [built] [code generated]\n      css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/main.css 4.18 MiB [code generated]\n      ./src/lazy.js 33 bytes [built] [code generated]\n  webpack 5.11.1 compiled successfully in 18304 ms\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="压缩输出的-bundle" tabindex="-1"><a class="header-anchor" href="#压缩输出的-bundle" aria-hidden="true">#</a> 压缩输出的 Bundle</h2><p>可以通过 gzip 或者 brotli 等压缩结束进一步压缩输出的文件大小。压缩后的代码会增加在浏览器端的解析时间，但是可以大大减少网络带宽占用。</p>',10),R=(0,e.Uk)("在 Webpack 可以使用 "),Y={href:"https://www.npmjs.com/package/compression-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},Z=(0,e.Uk)("compression-webpack-plugin"),A=(0,e.Uk)(" 这个插件来压缩代码。"),D=(0,e.Wm)("h2",{id:"混淆-obfuscating-输出",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#混淆-obfuscating-输出","aria-hidden":"true"},"#"),(0,e.Uk)(" 混淆（Obfuscating）输出")],-1),G={href:"https://github.com/javascript-obfuscator/obfuscator-loader",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Uk)("obfuscator-loader"),Q=(0,e.Uk)(" 可以用来对代码进行混淆，是的代码在浏览器端不可读。"),V=(0,e.uE)('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>代码压缩（minify） 可以用一种安全的转换方法来缩小代码量。</p><p>Webpack 在生产模式中，默认使用 Terser 来压缩代码。</p><p>除了压缩 JavaScript，我们还可以通过一些插件和 loader 来压缩 CSS 和 HTML。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',5),X={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("p",null,[p,(0,e.Wm)("a",t,[i,(0,e.Wm)(a)]),c]),o,l,r,(0,e.Wm)("p",null,[u,(0,e.Wm)("a",m,[d,(0,e.Wm)(a)]),k]),b,(0,e.Wm)("p",null,[g,(0,e.Wm)("a",h,[f,(0,e.Wm)(a)]),v,(0,e.Wm)("a",w,[y,(0,e.Wm)(a)]),j,(0,e.Wm)("a",x,[W,(0,e.Wm)(a)]),U,(0,e.Wm)("a",z,[B,(0,e.Wm)(a)]),_,(0,e.Wm)("a",S,[K,(0,e.Wm)(a)]),C]),M,(0,e.Wm)("p",null,[T,(0,e.Wm)("a",q,[H,(0,e.Wm)(a)]),L,J,P,(0,e.Wm)("a",E,[O,(0,e.Wm)(a)]),F]),N,(0,e.Wm)("p",null,[R,(0,e.Wm)("a",Y,[Z,(0,e.Wm)(a)]),A]),D,(0,e.Wm)("p",null,[(0,e.Wm)("a",G,[I,(0,e.Wm)(a)]),Q]),V],64)}}}}]);