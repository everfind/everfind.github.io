"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[4453],{4481:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-4652d0d8",path:"/solutions/low-code/low-code.html",title:"页面搭建系统的那些事儿",lang:"zh-CN",frontmatter:{title:"页面搭建系统的那些事儿",description:"从概念出发，介绍页面搭建系统出现的背景，适合解决什么问题，以及相关的技术要点。",keywords:["low code","no code","页面搭建"],date:"2022-04-26T00:00:00.000Z",key:1,tags:["概念"]},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"页面搭建系统是什么",slug:"页面搭建系统是什么",children:[]},{level:2,title:"页面搭建系统组成",slug:"页面搭建系统组成",children:[{level:3,title:"组件和模板",slug:"组件和模板",children:[]},{level:3,title:"可视化编辑器",slug:"可视化编辑器",children:[]}]},{level:2,title:"页面发布",slug:"页面发布",children:[{level:3,title:"静态页面",slug:"静态页面",children:[]},{level:3,title:"动态渲染",slug:"动态渲染",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"solutions/low-code/low-code.md"}},6045:(n,a,e)=>{e.r(a),e.d(a,{default:()=>j});var s=e(6252);const p=(0,s.uE)('<p>在降本增效的大背景下，Low Code 这两年被大家讨论的比较多，社区里也有很多不错的解决方案涌现出来。对于前端来说，页面搭建是一种具体的 Low Code 实践形式，是一种已经被证明有效的技术和业务提效手段。</p><p>通观社区里的主流实践，页面搭建目前还只能解决一些垂直领域的问题，比如电商营销、中后台管理页面等。换句话说，适合使用页面搭建来解决的问题，通常具备如下两个特点：</p><ul><li>页面比较标准化，或者说页面布局和业务逻辑较为固定。</li><li>开发任务比较重复，各方沟通耗时比较多</li></ul><p>除了以上两个特点以外，还有一个常见特点，就是资源瓶颈的问题。人力资源紧缺，又很难在短时间内招到满意的人。</p><p>当然，在一些特定领域内，比如电商营销，还会有需求比较高频，开发时间短，上线时间紧等特点。比如一周好几个活动，时间要求又很高，需要即刻上线的情况。</p><h2 id="页面搭建系统是什么" tabindex="-1"><a class="header-anchor" href="#页面搭建系统是什么" aria-hidden="true">#</a> 页面搭建系统是什么</h2><p>页面搭建系统，简单来说，就是通过可视化加自动化的形式来完成交付页面的生产过程。这个生产过程会屏蔽很多专业领域的知识（比如编码、技术概念等），同时可以极大的复用已有的工作成果，最终实现成本降低和效率提升。</p><p>从技术角度来说，页面搭建系统是将 HTML、CSS、JS 组装成页面。对于现代前端开发来说，都是开发组件，然后通过框架来完成页面渲染。因此，页面搭建系统实际上是完成组件到页面的拼装工作。</p><h2 id="页面搭建系统组成" tabindex="-1"><a class="header-anchor" href="#页面搭建系统组成" aria-hidden="true">#</a> 页面搭建系统组成</h2><h3 id="组件和模板" tabindex="-1"><a class="header-anchor" href="#组件和模板" aria-hidden="true">#</a> 组件和模板</h3><p>组件是页面搭建系统中最小的组成单元。不管是基于 React 还是 Vue 开发的，亦或是基于 Web Component 开发的，组件都需要对外提供一定的接口，使得外界可以使用组件。这些接口，我们可以通俗的理解为 props。</p><p>当页面搭建系统成长到一定规模，系统内的组件会越来越多，会慢慢衍生出组件库乃至组件市场。这时候，我们就需要有一些辅助系统来对组件进行管理。</p><p>模板是组件的固定集合。当某些页面结构重复出现，变化的只是内容时，比如一些活动页面，我们可以将这些页面抽取成模板。与组件一样，模板也会逐步演变出模板库和模板市场。</p><p>我们以组件为例，来看看组件的管理方法。通常，有两种组件管理方法。</p><ul><li>一种是直接将组件放到代码仓库中</li><li>一种是将组件发布成独立的包，托管在包管理库中，比如 npm。</li></ul><p>第一种方法通常在项目初期被采用。在项目初期，整个系统还在验证和打磨阶段，组件相对较少。与页面搭建系统放在同一个代码仓库中，管理复杂度低，使用方便，可以实现快速迭代。但是当系统逐渐成熟，接入的业务越来越多，组件数量呈指数型增长。通过统一的代码仓库来管理不管是从代码复杂度还是从管理沟通复杂度来说，都已经不太现实。这时候就需要使用第二种方法了。</p>',16),t=(0,s.Uk)("第二种方法，将组件发布成独立的 npm 包，页面搭建系统通过一定的方式识别和加载组件包，实现组件包的接入。这种方式可以解决组件数量指数增长的问题，但是实现成本也比较高。通常来说需要约定一个组件接口规范，组件需要实现这个接口规范才能被系统识别并使用。但是也有做的比较好的，比如阿里的"),l={href:"https://zhuanlan.zhihu.com/p/101665976",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("云凤蝶"),c=(0,s.Uk)("，会通过云端服务的形式，借助于一些工具对 npm 包进行分析，推导出组件有哪些能力。这样对组件开发约束更小，可以直接复用已有的组件，但是技术挑战也更大。"),i=(0,s.uE)('<h3 id="可视化编辑器" tabindex="-1"><a class="header-anchor" href="#可视化编辑器" aria-hidden="true">#</a> 可视化编辑器</h3><p>页面搭建系统的核心应该就是可视化编辑器了。通常长下面这个样子。</p><p><img src="/solutions/low-code/low-code-c.png" alt="可视化编辑器"></p><p>可视化编辑器主要有两个问题需要解决。</p><h4 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h4><p>这里说的页面布局指的不是最终交付的页面布局，而是在生产页面的时候，编辑器内的布局方式。</p><p>为了能让不懂技术的人完成页面的搭建，因此页面搭建系统需要屏蔽一些技术细节。所以可视化编辑，通常都是通过拖拽等形式来实现页面结构的布局。</p><p>一般来说，可视化编辑器有多种布局方式可供选择。不同的业务场景对布局灵活性要求不一样。</p><ul><li>Flex 或者 Grid 布局</li></ul><p>在画布上会先确定布局方式，然后在里面填充组件。这种布局方式多用在 H5 页面中。比如在营销场景中，这种布局方式用的比较多。</p><ul><li>自由布局</li></ul><p>自由布局就是可以在画布上随意拖拽放置组件。页面搭建系统会通过一系列的方法最终将画布中的组件的相对位置处理成页面中的位置，并能自适应屏幕尺寸的变化。</p><blockquote><p>阿里的云凤蝶，因为主要解决的是中后台的页面搭建问题，页面结构相对比较复杂，采用的就是自由布局的方式。这里面技术复杂度要比采用 Flex 或者 Grid 布局的系统要高很多。</p><p>首先要能正确识别出组件的父子关系，换句话说，就是能够在用户拖拽的画布上正确识别组件树。这里面会用到一些位置计算的算法。</p><p>其次要将画布中组件的位置关系正确的反应到页面中，并能处理好自适应问题。因为画布中组件的位置都是绝对定位的，实际页面中不太可能是绝对定位，要做转化。通常需要借助于行列栅格化等算法来做。</p></blockquote><h4 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h4><p>在可视化编辑器中编辑页面的时候，用户通常需要增加和删除组件，同时还需要对组件数据进行编辑。因此，一般情况下，可视化编辑器都需要一个状态管理器来管理整个应用的状态。</p><blockquote><p>当然基于事件来同步组件数据实现起来比较简单，但是当页面规模比较大的时候，对事件的跟踪和管理将会变得非常复杂，成本指数上升。因此，我们这里选用外置的全局状态管理方案。</p></blockquote><p>适用于不同业务场景的可视化编辑器状态设计可能不同，我们简单探讨一下。</p><p>通常来说，全局状态主要处理组件的增删改，即画布中拖拽和删除组件以及在组件属性编辑区域修改组件属性。因此，我们可以简单设计如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  state<span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token comment">// 所有添加到画布中的组件数据</span>\n    componentData<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  reducers<span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token comment">// 添加组件到 componentData</span>\n    <span class="token function">addComponentData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 编辑组件，更新 componentData</span>\n    <span class="token function">editComponentData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 从 componentData 中删除组件</span>\n    <span class="token function">delComponentData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>整个应用的数据都保存在 <code>componentData</code> 中。 当在画布区域添加和删除组件的时候，编辑器通过 <code>addComponentData</code> 和 <code>delComponentData</code> 来更新全局的组件数据。当右侧组件属性编辑区域修改组件属性的时候，通过 <code>editComponentData</code> 来更新全局的组件数据。</p><p>有了基本的全局状态设计，剩余的就是做一些粘合工作，比如组件属性编辑区域，会有一个 Form 表单来编辑属性，我们需要将表单的数据变更与全局状态做粘合。常见的例子是字段 <code>onChange</code> 到 <code>editComponentData</code> 的粘合。</p><p>如果是自由画布，则需要处理一些拖拽动作，然后咋对应事件中粘合 <code>addComponentData</code> 和 <code>delComponentData</code>。</p>',22),r=(0,s.Uk)("可视化编辑器内有很多技术细节问题需要解决，在"),u={href:"https://github.com/CntChen/cntchen.github.io/issues/17",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("页面可视化搭建工具技术要点"),h=(0,s.Uk)("这篇文章中，讨论的比较多，可以看看。"),m=(0,s.Wm)("p",null,[(0,s.Uk)("一般情况下，如果页面比较简单，比如营销业务中的活动页面，上面的设计足够解决问题。但是如果是在中后台业务场景下，页面会有一定的复杂度，上面的设计就显得单薄了。在中后台业务场景下，组件之间经常存在关联关系，同时页面结构也更加复杂，单纯的 "),(0,s.Wm)("code",null,"editComponentData"),(0,s.Uk)(" 难以满足业务需求。")],-1),k=(0,s.Wm)("p",null,"比如，组件 A 会依赖组件 B 的变化，组件 B 又依赖组件 C 的变化，这在 Form 表单场景中非常常见。",-1),b=(0,s.Uk)("因此，我们需要借助其他的方案来解决。比如使用一些响应式的方案。"),g={href:"https://github.com/nx-js/observer-util",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("nx-js/observer-util"),f=(0,s.Uk)(" 是一个不错的响应式方案。"),y=(0,s.uE)('<h2 id="页面发布" tabindex="-1"><a class="header-anchor" href="#页面发布" aria-hidden="true">#</a> 页面发布</h2><p>编辑好页面，后面就是发布页面了。其实在编辑的时候，通常会有一个预览功能，因为与页面发布的原理是一样，我们统一放到页面发布里面来说。</p><p>通常页面发布有两种方式，一种是直接发布成静态页面，一种是借助于渲染 SDK 动态的获取页面数据完成渲染。</p><h3 id="静态页面" tabindex="-1"><a class="header-anchor" href="#静态页面" aria-hidden="true">#</a> 静态页面</h3><p>直接发布成静态页面，对于业务来说使用最为简单，只要控制好页面的缓存策略即可实现页面更新。缺点是适用性比较差，在一些需要内嵌页面的场景下，可能只有 iframe 等比较有限的选择。</p><p>发布成静态页面，实际上有多种技术方案可供选择。</p><p>可以直接在发布页面的时候，在服务端通过 webpack 等构建工具，根据每个页面组件的不同，构建页面专属的静态资源，避免全量引入所有的组件。</p><p>也可以将页面需要的组件信息导入到 HTML 文档中，然后在浏览器解析文档的时候，通过渲染 SDK 来加载组件，渲染页面。这与动态渲染的工作机制就非常类似了。</p><h3 id="动态渲染" tabindex="-1"><a class="header-anchor" href="#动态渲染" aria-hidden="true">#</a> 动态渲染</h3><p>通过 SDK 渲染，适用性广、灵活性高，缺点也比较明显，系统需要额外提供一个页面数据获取接口，对系统的可用性要求一下提高了很多。同时，SDK 版本的升级管理也是一个需要考虑的问题。</p><p>动态渲染，需要 SDK 根据接口返回的信息加载每个组件的代码。换句话说就是加载每个组件的 js 模块。</p>',11),v=(0,s.Uk)("模块加载方案有很多，比如可以直接将组件构建成 umd 模块，然后浏览器中直接使用。也可以通过 "),C={href:"https://github.com/systemjs/systemjs",target:"_blank",rel:"noopener noreferrer"},D=(0,s.Uk)("SystemJS"),w=(0,s.Uk)(" 等模块加载方案来实现。"),W=(0,s.uE)('<p>加载完组件模块以后，SDK 就可以完成页面渲染了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>上面概念性的讨论了很多页面搭建系统的内容，总体来说，页面搭建系统流程不是很长，核心就在可视化编辑器方面。</p><p>考虑到会有非开发同学参与页面的生产过程，因此整个系统是否能够支持业务需求同时真正的做到降本增效，很大程度上由可视化编辑器是否足够易用决定。</p><p>对于可视化编辑器来说，要想易用性好，很多细节需要打磨，技术投入会非常大。比如做一个媲美 Sketch 的自由画布的投入成本绝对比只能简单添加和删除组件的画布的投入大。</p><p>因此，在考虑做页面搭建系统之前，需要明确的问题是，当前业务需求是否真的适合做页面搭建。在做页面搭建系统的时候，也需要高度结合业务需求，有针对性的选择技术方案，才能获得一个比较满意的投入和产出。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',7),j={render:function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[p,(0,s.Wm)("p",null,[t,(0,s.Wm)("a",l,[o,(0,s.Wm)(e)]),c]),i,(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[r,(0,s.Wm)("a",u,[d,(0,s.Wm)(e)]),h])]),m,k,(0,s.Wm)("p",null,[b,(0,s.Wm)("a",g,[x,(0,s.Wm)(e)]),f]),y,(0,s.Wm)("p",null,[v,(0,s.Wm)("a",C,[D,(0,s.Wm)(e)]),w]),W],64)}}}}]);