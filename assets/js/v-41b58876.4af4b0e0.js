"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[3576],{9233:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-41b58876",path:"/posts/2021/09/24/nodejs-garbage-collection.html",title:"NodeJS 的垃圾回收",lang:"zh-CN",frontmatter:{title:"NodeJS 的垃圾回收",description:"什么是垃圾回收？NodeJS 中的垃圾回收是如何实现的？",keywords:["垃圾回收","garbage collection"],date:"2021-09-24T00:00:00.000Z",permalinkPattern:"posts/:year/:month/:day/:slug.html",tags:["通用知识"]},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"垃圾回收",slug:"垃圾回收",children:[{level:3,title:"垃圾回收之前的内存",slug:"垃圾回收之前的内存",children:[]},{level:3,title:"垃圾回收之后的内存",slug:"垃圾回收之后的内存",children:[]}]},{level:2,title:"垃圾回收是如何工作的",slug:"垃圾回收是如何工作的",children:[{level:3,title:"基本概念",slug:"基本概念",children:[]},{level:3,title:"垃圾回收器是如何工作的",slug:"垃圾回收器是如何工作的",children:[]}]}],filePathRelative:"posts/nodejs-garbage-collection.md"}},7228:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<p>通常来说，内存管理有两种方式，一种是手动管理，一种是自动管理。</p><p>手动管理需要开发者自己管理内存，什么时候申请内存空间，什么时候释放都需要小心处理，否则容易形成内存泄漏和指针乱飞的局面。C 语言开发是典型的需要手动管理内存的例子。</p><p>自动管理通常通过垃圾回收的机制来实现内存管理。NodeJS 中的内存管理是自动管理的。</p><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2><p>垃圾回收器（garbage collector，GC）通过判断对象是否还在被其他对象引用来决定是否回收该对象的内存空间。</p><h3 id="垃圾回收之前的内存" tabindex="-1"><a class="header-anchor" href="#垃圾回收之前的内存" aria-hidden="true">#</a> 垃圾回收之前的内存</h3><p>在下面的图中，有一些对象还在被其他对象使用，而有一些对象已经是完全孤立状态，没有其他对象使用它了。这些已经完全孤立状态的对象是可以被垃圾回收器回收的。</p><p><img src="/posts/images/nodejs-garbage-collection/memory-state-before-node-js-garbage-collection-c.png" alt="垃圾回收之前的内存"></p><h3 id="垃圾回收之后的内存" tabindex="-1"><a class="header-anchor" href="#垃圾回收之后的内存" aria-hidden="true">#</a> 垃圾回收之后的内存</h3><p>垃圾回收一旦开始运行，内存中的那些完全孤立（不可到达）的对象会被删除，内存空间会被释放。</p><p><img src="/posts/images/nodejs-garbage-collection/memory-state-after-node-js-garbage-collection-c.png" alt="垃圾回收之后的内存"></p><h2 id="垃圾回收是如何工作的" tabindex="-1"><a class="header-anchor" href="#垃圾回收是如何工作的" aria-hidden="true">#</a> 垃圾回收是如何工作的</h2><p>要搞清楚垃圾回收是如何工作的，需要先了解一些基本概念。</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><ul><li><p><strong>常驻集大小（resident set size）</strong>：NodeJS 进程运行时占据的内存大小，通常包含：代码、栈和堆。</p></li><li><p><strong>栈（stack）</strong>：包含原始类型数据和指向对象的引用数据。</p><p>栈中保存着局部变量和指向堆上对象的指针或定义应用程序控制流的指针（比如函数调用等）。</p><p>下面代码中，<code>a</code> 和 <code>b</code> 都保存在栈中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b\n<span class="token punctuation">}</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><strong>堆（heap）</strong>：存放引用类型数据，比如对象、字符串、闭包等。</p><p>下面代码中，创建的 <code>Car</code> 对象会被保存在堆中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span> <span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> opts<span class="token punctuation">.</span>name\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> LightningMcQueen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Lightning McQueen&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>对象创建后，堆内存状态如下：</p><p><img src="/posts/images/nodejs-garbage-collection/node-js-garbage-collection-first-step-object-placed-in-memory-heap-c.png" alt="堆内存"></p><p>现在我们添加更多的对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> SallyCarrera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Sally Carrera&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> Mater <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Mater&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>堆内存状态如下：</p><p><img src="/posts/images/nodejs-garbage-collection/node-js-garbage-collection-second-step-more-elements-added-to-the-heap-c.png" alt="堆内存"></p><p>如果现在执行垃圾回收，没有任何内存会被释放，因为每个对象都在被使用（可到达）。</p><p>现在我们修改代码，如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Engine</span> <span class="token punctuation">(</span><span class="token parameter">power</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>power <span class="token operator">=</span> power\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Car</span> <span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> opts<span class="token punctuation">.</span>name\n<span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>power<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> LightningMcQueen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Lightning McQueen&#39;</span><span class="token punctuation">,</span> power<span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> SallyCarrera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Sally Carrera&#39;</span><span class="token punctuation">,</span> power<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> Mater <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;Mater&#39;</span><span class="token punctuation">,</span> power<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>堆内存状态变成：</p><p><img src="/posts/images/nodejs-garbage-collection/node-js-garbage-collection-assigning-values-to-the-objects-in-heap-c.png" alt="堆内存"></p><p>如果我们不在使用 <code>Mater</code> 的话，通过 <code>Mater = undefined</code> 删除了对内存中对象的引用，则内存状态变化为：</p><p><img src="/posts/images/nodejs-garbage-collection/node-js-garbage-collection-redefining-values-c.png" alt="堆内存"></p><p>此时内存中的 <code>Mater</code> 不再被其他对象使用了（不可达），当垃圾回收运行的时候，<code>Mater</code> 对象会被回收，其占据的内存会被释放。</p><p><img src="/posts/images/nodejs-garbage-collection/node-js-garbage-collection-freeing-up-unreachable-object-c.png" alt="堆内存"></p></li><li><p><strong>对象的浅层大小（shallow size of an object）</strong>：对象本身占据的内存大小。</p></li><li><p><strong>对象的保留大小（retained size of an object）</strong>：删除对象及其依赖对象后释放的内存大小</p></li></ul><h3 id="垃圾回收器是如何工作的" tabindex="-1"><a class="header-anchor" href="#垃圾回收器是如何工作的" aria-hidden="true">#</a> 垃圾回收器是如何工作的</h3><p>NodeJS 的垃圾回收通过 V8 实现。大多数对象的生命周期都很短，而少数对象的寿命往往更长。为了利用这种行为，V8 将堆分成两个部分，<strong>年轻代（Young Generation）<strong>和</strong>老年代（Old Generation）</strong>。</p><h4 id="年轻代" tabindex="-1"><a class="header-anchor" href="#年轻代" aria-hidden="true">#</a> 年轻代</h4><p>新的内存需求都在年轻代中分配。年轻代的大小很小，在 1 到 8 MB 之间。在年轻代中内存分配非常便宜，V8 在内存中会逐个为对象分配空间，当到达年轻代的边界时，会触发一次垃圾回收。</p><p>V8 在年轻代会采用 Scavenge 回收策略。Scavenge 采用复制的方式进行垃圾回收。它将内存一分为二，每一部分空间称为 semispace。这两个空间，只有一个空间处于使用中，另一个则处于闲置。使用中的 semispace 称为 「From 空间」，闲置的 semispace 称为 「To 空间」。</p><p>年轻代的内存分配过程如下：</p><ol><li>从 From 空间分配对象，若 semispace 被分配满，则执行 Scavenge 算法进行垃圾回收。</li><li>检查 From 空间中的对象，若对象可到达，则检查对象是否符合提升条件，若符合条件则提升到老生代，否则将对象从 From 空间复制到 To 空间。</li><li>若对象不可到达，则释放不可到达对象的空间。</li><li>完成复制后，将 From 空间与 To 空间进行角色翻转（flip）。</li></ol><p>在年轻代中幸存的对象会被提升到老年代。</p><h4 id="老年代" tabindex="-1"><a class="header-anchor" href="#老年代" aria-hidden="true">#</a> 老年代</h4><p>老年代中的对象有两个特点，第一是存活对象多，第二个存活时间长。若在老年代中使用 Scavenge 算法进行垃圾回收，将会导致复制存活对象的效率不高，且还会浪费一半的空间。因此在老年代中，V8 通常采用 Mark-Sweep 和 Mark-Compact 策略回收。</p><p>Mark-Sweep 就是标记清除，它主要分为标记和清除两个阶段。</p><ul><li>标记阶段，将遍历堆中所有对象，并对存活的对象进行标记；</li><li>清除阶段，对未标记对象的空间进行回收。</li></ul><p>与 Scavenge 策略不同，Mark-Sweep 不会对内存一分为二，因此不会浪费空间。但是，经历过一次 Mark-Sweep 之后，内存的空间将会变得不连续，这样会对后续内存分配造成问题。比如，当需要分配一个比较大的对象时，没有任何一个碎片内支持分配，这将提前触发一次垃圾回收，尽管这次垃圾回收是没有必要的。</p><p><img src="/posts/images/nodejs-garbage-collection/mark-sweep-c.png" alt="标记清除"></p><p>为了解决内存碎片的问题，提高对内存的利用，引入了 Mark-Compact （标记整理）策略。Mark-Compact 是在 Mark-Sweep 算法上进行了改进，标记阶段与 Mark-Sweep 相同，但是对未标记的对象处理方式不同。与Mark-Sweep是对未标记的对象立即进行回收，Mark-Compact则是将存活的对象移动到一边，然后再清理端边界外的内存。</p><p><img src="/posts/images/nodejs-garbage-collection/mark-compact-c.png" alt="标记整理"></p><p>由于 Mark-Compact 需要移动对象，所以执行速度上，比 Mark-Sweep 要慢。所以，V8 主要使用 Mark-Sweep 算法，然后在当空间内存分配不足时，采用 Mark-Compact 算法。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',33),p={render:function(n,a){return e}}}}]);