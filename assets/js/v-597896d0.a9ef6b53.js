"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[5137],{3290:(e,r,t)=>{t.r(r),t.d(r,{data:()=>l});const l={key:"v-597896d0",path:"/courses/architecture-of-react-app/state.html",title:"状态管理",lang:"zh-CN",frontmatter:{title:"状态管理",description:"状态管理可以分几个层面来讨论，本篇来逐一进行说明，并介绍社区里的优秀实践方案",keywords:["React","架构","状态管理"],date:"2021-08-11T00:00:00.000Z",key:6},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"UI 状态",slug:"ui-状态",children:[]},{level:2,title:"服务器缓存状态",slug:"服务器缓存状态",children:[]},{level:2,title:"URL 状态",slug:"url-状态",children:[]}],filePathRelative:"courses/architecture-of-react-app/state.md"}},6750:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var l=t(6252);const n=(0,l.Wm)("p",null,"状态管理可以分成多个层面来讨论。",-1),o=(0,l.Wm)("h2",{id:"ui-状态",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#ui-状态","aria-hidden":"true"},"#"),(0,l.Uk)(" UI 状态")],-1),a=(0,l.Wm)("p",null,"UI 状态通常被用来控制页面的交互，比如打开弹框、通知消息、修改颜色等。出于性能和可维护性考虑，我们建议让状态与使用状态的组件离的越近越好。不要把所有状态都放到全局状态上去。",-1),i=(0,l.Wm)("p",null,"下面是一些比较好的 UI 状态库：",-1),s={href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Context"),c=(0,l.Uk)(" + "),m={href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("hooks"),u={href:"https://github.com/pmndrs/zustand",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("zustand"),g={href:"https://github.com/diegohaz/constate",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("constate"),W={href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("redux"),b={href:"https://mobx.js.org/",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("mobx"),U={href:"https://github.com/pmndrs/jotai",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("jotai"),v={href:"https://recoiljs.org/",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("recoil"),j={href:"https://github.com/everfind/bulletproof-react/blob/master/src/hooks/useNotificationStore.ts",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("这里有一个 UI 状态管理的样例"),L=(0,l.Wm)("h2",{id:"服务器缓存状态",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#服务器缓存状态","aria-hidden":"true"},"#"),(0,l.Uk)(" 服务器缓存状态")],-1),R=(0,l.Wm)("p",null,"这种类型的状态，通常都需要从服务端获取数据，然后缓存在客户端，方便后续时候。",-1),q=(0,l.Wm)("p",null,"虽然我们可以通过一些状态管理库比如 redux 来实现数据缓存，但是社区里有更好的解决方案。",-1),C=(0,l.Wm)("p",null,"这里有几个比较好的服务器缓存状态库：",-1),I={href:"https://react-query.tanstack.com/",target:"_blank",rel:"noopener noreferrer"},z=(0,l.Uk)("react-query"),G=(0,l.Uk)(" 支持 REST 和 GraphQL"),Q={href:"https://github.com/everfind/bulletproof-react/blob/master/docs",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("swr"),S=(0,l.Uk)(" 支持 REST 和 GraphQL"),T={href:"https://github.com/everfind/bulletproof-react/blob/master/docs",target:"_blank",rel:"noopener noreferrer"},N=(0,l.Uk)("Apollo Client"),A=(0,l.Uk)(" 仅支持 GraphQL"),D={href:"https://github.com/everfind/bulletproof-react/blob/master/docs",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("urql"),O=(0,l.Uk)(" 仅支持 GraphQL"),P={href:"https://github.com/everfind/bulletproof-react/blob/master/src/features/discussions/hooks/useDiscussions.ts",target:"_blank",rel:"noopener noreferrer"},Y=(0,l.Uk)("这里有一个服务器缓存状态的样例"),Z=(0,l.uE)('<h2 id="url-状态" tabindex="-1"><a class="header-anchor" href="#url-状态" aria-hidden="true">#</a> URL 状态</h2><p>在有些场景下，我们会将一些数据状态放到浏览器的地址栏中，来保存页面状态。比如在一个分页列表，我们可以在页面刷新的时候保证当前选中的页码不变。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',3),B={render:function(e,r){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[n,o,a,i,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",s,[p,(0,l.Wm)(t)]),c,(0,l.Wm)("a",m,[h,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",u,[d,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",g,[f,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",W,[k,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",b,[x,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",U,[y,(0,l.Wm)(t)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",v,[_,(0,l.Wm)(t)])])]),(0,l.Wm)("p",null,[(0,l.Wm)("a",j,[w,(0,l.Wm)(t)])]),L,R,q,C,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",I,[z,(0,l.Wm)(t)]),G]),(0,l.Wm)("li",null,[(0,l.Wm)("a",Q,[E,(0,l.Wm)(t)]),S]),(0,l.Wm)("li",null,[(0,l.Wm)("a",T,[N,(0,l.Wm)(t)]),A]),(0,l.Wm)("li",null,[(0,l.Wm)("a",D,[H,(0,l.Wm)(t)]),O])]),(0,l.Wm)("p",null,[(0,l.Wm)("a",P,[Y,(0,l.Wm)(t)])]),Z],64)}}}}]);