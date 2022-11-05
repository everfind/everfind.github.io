"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[1367],{7215:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-26262891",path:"/courses/architecture-of-react-app/performance.html",title:"性能",lang:"zh-CN",frontmatter:{title:"性能",description:"应用要有好的用户体验，性能是首先需要考虑的问题。本篇介绍几个优化性能的方法。",keywords:["React","架构","性能"],date:"2021-08-12T00:00:00.000Z",key:11},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"分割代码",slug:"分割代码",children:[]},{level:2,title:"组件和状态优化",slug:"组件和状态优化",children:[]},{level:2,title:"图片优化",slug:"图片优化",children:[]},{level:2,title:"Web vitals",slug:"web-vitals",children:[]},{level:2,title:"部署",slug:"部署",children:[]}],filePathRelative:"courses/architecture-of-react-app/performance.md"}},9267:(e,n,a)=>{a.r(n),a.d(n,{default:()=>he});var t=a(6252);const s=(0,t.Wm)("h2",{id:"分割代码",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#分割代码","aria-hidden":"true"},"#"),(0,t.Uk)(" 分割代码")],-1),r=(0,t.Wm)("p",null,"我们将应用代码分割成多个部分，应用在运行的时候按需加载使用到的代码。这样可以减少用户打开页面时资源加载的时间。",-1),l=(0,t.Wm)("p",null,"通常情况下，我们都是按照页面路由来分割代码。",-1),o={href:"https://github.com/everfind/bulletproof-react/blob/master/src/routes/index.tsx",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("这里是分割代码的样例"),c=(0,t.Wm)("h2",{id:"组件和状态优化",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#组件和状态优化","aria-hidden":"true"},"#"),(0,t.Uk)(" 组件和状态优化")],-1),i=(0,t.Uk)("不要将所有状态都放到一个 "),u={href:"https://reactjs.org/docs/context.html#gatsby-focus-wrapper",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("Context"),k=(0,t.Uk)(" 中，这样会导致不必要的重新渲染。我们应该将状态进行分割，然后放到多个状态中去。"),h=(0,t.Wm)("li",null,"保持状态与使用状态的组件越近越好。这样可以避免未使用状态的组件的重新渲染。",-1),d=(0,t.Wm)("li",null,"如果一个初始状态需要通过复杂的计算来过的，那么应用使用状态初始化函数。",-1),W=(0,t.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 每次组件重新渲染的时候都会计算</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token function">myExpensiveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 只会计算一次</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">myExpensiveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),g=(0,t.Uk)("如果状态会被很多组件使用，我们应该使用状态管理库，比如 "),f={href:"https://recoiljs.org/",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("recoil"),U=(0,t.Uk)(" 和 "),x={href:"https://jotai.pmnd.rs/",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("jotai"),y=(0,t.Uk)("如果碰到组件渲染的性能问题，可以考虑将 "),w={href:"https://chakra-ui.com/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("Chakra UI"),j=(0,t.Uk)("、"),C={href:"https://emotion.sh/docs/introduction",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("emotion"),E=(0,t.Uk)("、"),q={href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer"},N=(0,t.Uk)("styled-components"),R=(0,t.Uk)(" 等运行时样式方案改成 "),D={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,t.Uk)("tailwind"),P=(0,t.Uk)("、"),z={href:"https://github.com/callstack/linaria",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("linaria"),I=(0,t.Uk)("、"),L={href:"https://github.com/seek-oss/vanilla-extract",target:"_blank",rel:"noopener noreferrer"},B=(0,t.Uk)("vanilla-extract"),G=(0,t.Uk)(" 或 "),H={href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("CSS modules"),Q=(0,t.Uk)(" 等编译时样式方案。"),T=(0,t.Wm)("h2",{id:"图片优化",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#图片优化","aria-hidden":"true"},"#"),(0,t.Uk)(" 图片优化")],-1),Y=(0,t.Wm)("p",null,"不在当前窗口可视范围内的图片都应该通过懒加载的方式加载。",-1),Z=(0,t.Wm)("p",null,"同时，应该劲量使用更现代的图片格式（比如 WEBP）来让图片加载更快。",-1),J=(0,t.Wm)("h2",{id:"web-vitals",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#web-vitals","aria-hidden":"true"},"#"),(0,t.Uk)(" Web vitals")],-1),K=(0,t.Uk)("自从 Google 在收录网页的时候会考虑 Web vitals，我们应该留心我们的页面在 "),M={href:"https://web.dev/measure/",target:"_blank",rel:"noopener noreferrer"},V=(0,t.Uk)("Lighthouse"),X=(0,t.Uk)(" 和 "),$={href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank",rel:"noopener noreferrer"},ee=(0,t.Uk)("Pagespeed Insights"),ne=(0,t.Uk)(" 中 Web vitals 分数。"),ae=(0,t.Wm)("h2",{id:"部署",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),(0,t.Uk)(" 部署")],-1),te=(0,t.Wm)("p",null,"将静态资源都部署到 CDN 上去。",-1),se=(0,t.Wm)("p",null,"常见的 CDN 有：",-1),re={href:"https://help.aliyun.com/product/27099.html",target:"_blank",rel:"noopener noreferrer"},le=(0,t.Uk)("Aliyun"),oe={href:"https://aws.amazon.com/cloudfront/",target:"_blank",rel:"noopener noreferrer"},pe=(0,t.Uk)("AWS"),ce={href:"https://www.cloudflare.com/en-gb/cdn/",target:"_blank",rel:"noopener noreferrer"},ie=(0,t.Uk)("CloudFlare"),ue={href:"https://www.qiniu.com/products/qcdn",target:"_blank",rel:"noopener noreferrer"},me=(0,t.Uk)("Qiniu CDN"),ke=(0,t.uE)('<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',1),he={render:function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,r,l,(0,t.Wm)("p",null,[(0,t.Wm)("a",o,[p,(0,t.Wm)(a)])]),c,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[i,(0,t.Wm)("a",u,[m,(0,t.Wm)(a)]),k]),h,d]),W,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[g,(0,t.Wm)("a",f,[b,(0,t.Wm)(a)]),U,(0,t.Wm)("a",x,[v,(0,t.Wm)(a)])])]),(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[y,(0,t.Wm)("a",w,[_,(0,t.Wm)(a)]),j,(0,t.Wm)("a",C,[S,(0,t.Wm)(a)]),E,(0,t.Wm)("a",q,[N,(0,t.Wm)(a)]),R,(0,t.Wm)("a",D,[F,(0,t.Wm)(a)]),P,(0,t.Wm)("a",z,[A,(0,t.Wm)(a)]),I,(0,t.Wm)("a",L,[B,(0,t.Wm)(a)]),G,(0,t.Wm)("a",H,[O,(0,t.Wm)(a)]),Q])])]),T,Y,Z,J,(0,t.Wm)("p",null,[K,(0,t.Wm)("a",M,[V,(0,t.Wm)(a)]),X,(0,t.Wm)("a",$,[ee,(0,t.Wm)(a)]),ne]),ae,te,se,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",re,[le,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",oe,[pe,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",ce,[ie,(0,t.Wm)(a)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",ue,[me,(0,t.Wm)(a)])])]),ke],64)}}}}]);