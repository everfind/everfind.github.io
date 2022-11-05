"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[5982],{7795:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2665f526",path:"/posts/2022/11/05/eval.html",title:"正确使用 eval 从这篇开始",lang:"zh-CN",frontmatter:{title:"正确使用 eval 从这篇开始",description:"eval 直接调用和间接调用的区别",keywords:["eval","direct call","indirect call"],date:"2022-11-05T00:00:00.000Z",permalinkPattern:"posts/:year/:month/:day/:slug.html",tags:["通用知识"]},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"直接调用",slug:"直接调用",children:[]},{level:2,title:"间接调用",slug:"间接调用",children:[]},{level:2,title:"微前端中的使用",slug:"微前端中的使用",children:[]}],filePathRelative:"posts/eval.md"}},1882:(n,s,a)=>{a.r(s),a.d(s,{default:()=>C});var p=a(6252);const t=(0,p.uE)('<p><code>eval</code> 这个函数前端同学应该都见过，却很少使用过，甚至因为其存在一定的安全隐患而在很多编码规范中被禁止使用。笔者最近在看一些开源框架源码的时候，发现 <code>eval</code> 因其一个特点在一些场景中起到了非常关键的作用。因此，本文对 <code>eval</code> 的这一特点进行介绍。</p><p>首先我们来 <code>eval</code> 函数的定义：</p><blockquote><p>The <code>eval()</code> function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.</p></blockquote><p>意思是说，<code>eval</code> 函数会将传给它的字符串作为 JavaScript 代码来执行，并将执行完成时的值作为返回值返回。比如 <code>eval(&#39;1 + 1&#39;)</code> 返回 <code>2</code>。</p><p>根据规范中的定义，<code>eval</code> 函数在执行代码的时候，代码的作用域与调用 <code>eval</code> 的作用域有关。比如在下面的代码，最终获取的结果是内部的 <code>x</code> 的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">&#39;outer&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">;</span>\n    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;inner&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>那么，这个看着平平无奇，而且使用不当还有一丝安全风险的 <code>eval</code> 到底有什么特点呢？</p><h2 id="直接调用" tabindex="-1"><a class="header-anchor" href="#直接调用" aria-hidden="true">#</a> 直接调用</h2><p>所谓直接调用，规范中是这么定义的：</p><blockquote><p>A direct call to the eval function is one that is expressed as a CallExpression that meets the following two conditions: The Reference that is the result of evaluating the MemberExpression in the CallExpression has an environment record as its base value and its reference name is &quot;eval&quot;. The result of calling the abstract operation GetValue with that Reference as the argument is the standard builtin function defined in 15.1.2.1.</p></blockquote>',10),e=(0,p.Uk)("这里有两个名词需要先解释下，"),o=(0,p.Wm)("code",null,"CallExpression",-1),c=(0,p.Uk)(" 和 "),l=(0,p.Wm)("code",null,"MemberExpression",-1),i=(0,p.Uk)("，这是 JavaScript 语法中的两种表达式类型。这里为了简便起见，我们可以这么理解，"),u=(0,p.Wm)("code",null,"CallExpression",-1),r=(0,p.Uk)(" 可以理解成函数调用表达式，而 "),k=(0,p.Wm)("code",null,"MemberExpression",-1),d=(0,p.Uk)(" 就是括号左边的表达式。详细说明可以参考"),m={href:"https://262.ecma-international.org/5.1/#sec-11.2",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("规范"),v=(0,p.Uk)("中的定义。"),g=(0,p.uE)('<p>现在我们来看直接调用的定义。所谓直接调用，就是同时满足如下两个条件的函数调用表达式：</p><ul><li>括号左边的表达式的结果是一个<strong>引用</strong>，同时这个引用的值是内置原生的 &quot;eval&quot; 函数</li><li>这个应用的名称是 &quot;eval&quot;</li></ul><p>注意，这里“引用”两个字被加粗了，这是判断是否是直接调用的关键，后面在间接调用的说明中我们会详细说明。</p><p>下面这些都是直接调用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span>eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>eval<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;eval(&quot;...&quot;)&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>eval<span class="token punctuation">)</span>\n<span class="token keyword">with</span><span class="token punctuation">(</span><span class="token punctuation">{</span> eval<span class="token operator">:</span> eval <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">with</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>直接调用的时候，代码的作用域与调用所在的作用域有关。这是符合规范定义的。</p><h2 id="间接调用" tabindex="-1"><a class="header-anchor" href="#间接调用" aria-hidden="true">#</a> 间接调用</h2><p>简单来说，不是直接调用的都是间接调用。</p><p>如下的例子就都是间接调用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> func <span class="token operator">=</span> eval<span class="token punctuation">;</span>\n<span class="token function">func</span><span class="token punctuation">(</span><span class="token string">&#39;1 + 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>\n\neval <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">expr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">eval</span><span class="token punctuation">(</span>expr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>eval<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;1+1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>眼尖的同学可能会问，为什么 <code>(0, eval)(...)</code> 是间接引用，而<code>(eval)(...)</code> 是直接调用呢？这就要回到被加粗的“引用”二字上来。</p><p>规范中定义，左侧表达式的结果必须是引用，不能是值。<code>(0, eval)(...)</code> 左边是逗号表达式，最终要返回一个值，即 <code>eval</code> 的值。<code>(eval)(...)</code> 左侧是括号（分组）表达式，不求值，因此结果还是引用。同理，<code>(((eval)))(...)</code> 依然是直接引用。</p><p><strong>间接调用，执行代码的作用域是全局作用域。</strong></p><h2 id="微前端中的使用" tabindex="-1"><a class="header-anchor" href="#微前端中的使用" aria-hidden="true">#</a> 微前端中的使用</h2><p>讨论了直接调用和间接调用，我们知道，间接调用的时候，执行代码的作用域是全局作用域。这在微前端场景下就起到了非常关键的作用。</p><p>微前端的主应用需要将子应用运行起来，就需要执行子应用的代码。为了避免主应用代码的作用域影响到子应用的运行，需要保证子应用的代码是在全局作用域运行的。这就需要使用到 <code>eval</code> 的间接调用的特性。</p><p>同时为了做好沙箱隔离，通常在微前端中会借助各种方式来对 <code>window</code> 等全局变量做一个保护，比如通过 <code>proxy</code> 来处理。</p><p>下面是一段运行子应用的伪代码，简单示意一下处理流程。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> scriptText <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://path/to/subapp/code.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 子应用代码</span>\n\n<span class="token keyword">const</span> globalWindow <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;window&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取全局的 window 对象</span>\nglobalWindow<span class="token punctuation">.</span>proxy <span class="token operator">=</span> proxy<span class="token punctuation">;</span> <span class="token comment">// 此处的 proxy 是经过处理后的沙箱。</span>\n\n<span class="token comment">// 将沙箱作为子应用的 window 来使用</span>\n<span class="token keyword">const</span> wrappedCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">;(function(window, self, globalThis){;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scriptText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> eval<span class="token punctuation">)</span><span class="token punctuation">(</span>wrappedCode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行代码</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',19),h=(0,p.Uk)("笔者查看了目前主流的几个微前端框架，不管是 "),w={href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("qiankun"),x=(0,p.Uk)(" 还是 "),y={href:"https://github.com/modern-js-dev/garfish",target:"_blank",rel:"noopener noreferrer"},j=(0,p.Uk)("garfish"),q=(0,p.Uk)("，运行子应用代码都是通过 "),W=(0,p.Wm)("code",null,"eval",-1),U=(0,p.Uk)(" 的间接调用来完成的。"),E=(0,p.uE)('<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',1),C={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,o,c,l,i,u,r,k,d,(0,p.Wm)("a",m,[b,(0,p.Wm)(a)]),v]),g,(0,p.Wm)("p",null,[h,(0,p.Wm)("a",w,[f,(0,p.Wm)(a)]),x,(0,p.Wm)("a",y,[j,(0,p.Wm)(a)]),q,W,U]),E],64)}}}}]);