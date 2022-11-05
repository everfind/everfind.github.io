"use strict";(self.webpackChunkeverfind_website=self.webpackChunkeverfind_website||[]).push([[909],{7678:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5d65d204",path:"/courses/python/class.html",title:"类",lang:"zh-CN",frontmatter:{title:"类",description:"Python 中的作用域、命名空间和类",keywords:["Python"],date:"2021-09-10T00:00:00.000Z",key:5},excerpt:'<div style="display:flex;align-items:center;justify-content:center;"><p style="text-align: center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />关注微信公众号，获取最新推送~</p><p style="text-align: center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;" />加微信，深入交流~</p></div>',headers:[{level:2,title:"作用域和命名空间",slug:"作用域和命名空间",children:[]},{level:2,title:"类的定义",slug:"类的定义",children:[]},{level:2,title:"类对象",slug:"类对象",children:[]},{level:2,title:"实例对象",slug:"实例对象",children:[{level:3,title:"实例对象上的变量",slug:"实例对象上的变量",children:[]},{level:3,title:"实例对象上的方法",slug:"实例对象上的方法",children:[]}]},{level:2,title:"继承",slug:"继承",children:[]},{level:2,title:"私有变量",slug:"私有变量",children:[]}],filePathRelative:"courses/python/class.md"}},7391:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="作用域和命名空间" tabindex="-1"><a class="header-anchor" href="#作用域和命名空间" aria-hidden="true">#</a> 作用域和命名空间</h2><p>命名空间是一个名称和对象的映射关系。在现在的 Python 实现中，命名空间大都是通过字典实现的。常见的命名空间例子有模块的顶层命名空间，函数内的命名空间等。不同命名空间内拥有相同名字的对象之间没有任何关联关系。</p><p>不同的命名空间，创建时机不同，生命周期也不同。保存内置函数、变量的命名空间在 Python 解析器启动的时候创建，并且在解析器退出之前一直有效。模块的顶层命名空间在模块首次导入的时候被创建。函数内部的命名空间在函数被调用的时候创建，并且多次调用函数会创建不同的命名空间，在函数返回时，命名空间被销毁。</p><p>一般有三种命名空间：</p><ul><li>内置名称（built-in names）， Python 语言内置的名称，比如函数名 <code>abs</code>、<code>char</code> 和异常名称 <code>BaseException</code>、<code>Exception</code> 等等。</li><li>全局名称（global names），模块中定义的名称，记录了模块的变量，包括函数、类、其它导入的模块、模块级的变量和常量。</li><li>局部名称（local names），函数中定义的名称，记录了函数的变量，包括函数的参数和局部定义的变量。（类中定义的也是）</li></ul><p>作用域是一个 Python 程序可以直接访问命名空间的正文区域。在一个 python 程序中，直接访问一个变量，会从内到外依次访问所有的作用域直到找到。变量的作用域决定了在哪一部分程序可以访问哪个特定的变量名称。作用域物理上指的是一段程序区域，在这个区域里的所有命名构成一个命名空间，在这个区域里，这个命名空间包含的所有命名都可以直接访问。</p><p>一般有四种作用域：</p><ul><li>L（Local）：最内层，包含局部变量，比如一个函数/方法内部。</li><li>E（Enclosing）：包含了非局部（non-local）也非全局（non-global）的变量。比如两个嵌套函数，一个函数（或类） A 里面又包含了一个函数 B ，那么对于 B 中的名称来说 A 中的作用域就为 nonlocal。</li><li>G（Global）：当前脚本的最外层，比如当前模块的全局变量。</li><li>B（Built-in）：包含了内建的变量/关键字等，最后被搜索。</li></ul><p>一般来说，在没有 <code>global</code> 和 <code>nonlocal</code> 关键字的情况下，为一个名称赋值都会在最内层的命名空间中创建对象。赋值并不拷贝具体的值，而是在命名空间中做绑定关系。</p><p>如果在内部作用域使用 <code>global</code> 关键字，则会将名称重新绑定到模块顶层的全局命名空间（Global）中。使用 <code>nonlocal</code> 关键字，则标明这个名称在中间层次（Enclosing）的命名空间中。</p><p>下面的例子可以说明这两个关键字的作用。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">scope_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">do_local</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        spam <span class="token operator">=</span> <span class="token string">&quot;local spam&quot;</span>\n\n    <span class="token keyword">def</span> <span class="token function">do_nonlocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">nonlocal</span> spam\n        spam <span class="token operator">=</span> <span class="token string">&quot;nonlocal spam&quot;</span>\n\n    <span class="token keyword">def</span> <span class="token function">do_global</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">global</span> spam\n        spam <span class="token operator">=</span> <span class="token string">&quot;global spam&quot;</span>\n\n    spam <span class="token operator">=</span> <span class="token string">&quot;test spam&quot;</span>\n    do_local<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;After local assignment:&quot;</span><span class="token punctuation">,</span> spam<span class="token punctuation">)</span>\n    do_nonlocal<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;After nonlocal assignment:&quot;</span><span class="token punctuation">,</span> spam<span class="token punctuation">)</span>\n    do_global<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;After global assignment:&quot;</span><span class="token punctuation">,</span> spam<span class="token punctuation">)</span>\n\nscope_test<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;In global scope:&quot;</span><span class="token punctuation">,</span> spam<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>输出为</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>After local assignment: test spam\nAfter nonlocal assignment: nonlocal spam\nAfter global assignment: nonlocal spam\nIn global scope: global spam\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义</h2><p>类定义的语法形式如下：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>statement<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&gt;</span>\n    <span class="token punctuation">.</span>\n    <span class="token punctuation">.</span>\n    <span class="token punctuation">.</span>\n    <span class="token operator">&lt;</span>statement<span class="token operator">-</span>N<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在定义类的时候，会创建一个新的命名空间，同时 Python 的 Local 作用域变成了这个类。类中定义的变量、函数都绑定在新的命名空间中。当完成类定义之后，会生成一个类对象，这个类对象中保存者类中命名空间的内容。同时，在进入类定义之前的作用域被恢复为 Local 作用域，类对象被绑定在这个作用域的命名空间中。</p><h2 id="类对象" tabindex="-1"><a class="header-anchor" href="#类对象" aria-hidden="true">#</a> 类对象</h2><p>类对象支持两种类型的操作，属性访问和实例化。</p><p>比如下面定义的类：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">&quot;&quot;&quot;A simple example class&quot;&quot;&quot;</span>\n    i <span class="token operator">=</span> <span class="token number">12345</span>\n\n    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们可以通过 <code>MyClass.i</code> 和 <code>MyClass.f</code> 来访问类对象上的属性，我们设置可以修改类对象上的属性。</p><p>通过如下方式可以实现类的实例化。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>实例化后，会创建一个新的对象，实例对象，对象中保存一些初始状态。比如上面的代码会创建一个空对象。我们可以在类定义中通过 <code>__init__()</code> 函数来指定在实例化时需要的参数，在实例化时会自动调用这个函数。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> class Complex:\n<span class="token punctuation">..</span>.     def __init__<span class="token punctuation">(</span>self, realpart, imagpart<span class="token punctuation">)</span>:\n<span class="token punctuation">..</span>.         self.r <span class="token operator">=</span> realpart\n<span class="token punctuation">..</span>.         self.i <span class="token operator">=</span> imagpart\n<span class="token punctuation">..</span>.\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> Complex<span class="token punctuation">(</span><span class="token number">3.0</span>, -4.5<span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x.r, x.i\n<span class="token punctuation">(</span><span class="token number">3.0</span>, -4.5<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="实例对象" tabindex="-1"><a class="header-anchor" href="#实例对象" aria-hidden="true">#</a> 实例对象</h2><p>实例对象，顾名思义是有类实例化而来。实例对象上通常又两种属性，一种是变量，一种是方法。我们可以给实例对象添加任意属性，即使这个属性没有在类定义中定义。</p><h3 id="实例对象上的变量" tabindex="-1"><a class="header-anchor" href="#实例对象上的变量" aria-hidden="true">#</a> 实例对象上的变量</h3><p>实例对象上的变量为实例单独所有，类对象上的变量为所有实例对象共有。如果类对象上的变量是一个可变对象，比如列表，那么变更后的值为所有实例对象共有。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>\n    a <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment"># 所有实例共有</span>\n    <span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;class a &#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> m <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> n <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> m.a\n<span class="token number">3</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> m.a <span class="token operator">=</span> <span class="token number">6</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> m.a\n<span class="token number">6</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> n.a\n<span class="token number">3</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> m.list.append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> n.list\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>注意上面的 <code>m.a = 6</code>，如果实例对象上的属性名称与类对象上的属性名称相同，则 Python 会优先使用实例对象上的名称。（别忘了，在给一个变量赋值的时候，会在对应命名空间中创建绑定关系。）</p><h3 id="实例对象上的方法" tabindex="-1"><a class="header-anchor" href="#实例对象上的方法" aria-hidden="true">#</a> 实例对象上的方法</h3><p>在前面的例子中，<code>MyClass.f</code> 和 <code>x.f</code> 是否是一样的呢？答案是否。<code>MyClass.f</code> 是一个函数对象，而 <code>x.f</code> 是一个方法对象。方法对象中包装了类的函数对象和实例对象。当调用这个方法对象的时候，方法对象会在参数列表前面加上实例对象，然后使用新的参数列表调用函数对象。</p><p>也就是说 <code>x.f()</code> 与 <code>MyClass.f(MyClass)</code> 意义相同。</p><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>继承的语法形式为：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">DerivedClassName</span><span class="token punctuation">(</span>Base1<span class="token punctuation">,</span> Base2<span class="token punctuation">,</span> Base3<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>statement<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&gt;</span>\n    <span class="token punctuation">.</span>\n    <span class="token punctuation">.</span>\n    <span class="token punctuation">.</span>\n    <span class="token operator">&lt;</span>statement<span class="token operator">-</span>N<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>继承场景下的类对象与单一类对象类似，子类对象中会保存一个基类对象。在查找属性的时候，会优先查找子类上的属性，必要情况下会查找基类对象上的属性。</p><p>子类可以复写基类的方法。如果子类复写了基类的方法，那么当基类上的其他方法在调用这个方法的时候，实际上是调用的子类上的方法。我们可以通过 <code>BaseClassName.methodname(self, arguments)</code> 来调用基类的方法。</p><p>在 Python 中，我们可以通过 <code>isinstance()</code> 和 <code>issubclass()</code> 来判断继承关系。</p><p>在多继承场景下，属性搜索遵循深度优先，从左到右的原则。即先查找 <code>DerivedClassName</code>，之后查找 <code>Base1</code> 以及 <code>Base1</code> 的基类，如果还未找到，再从 <code>Base2</code> 及 <code>Base2</code> 的基类中找，以此类推。</p><h2 id="私有变量" tabindex="-1"><a class="header-anchor" href="#私有变量" aria-hidden="true">#</a> 私有变量</h2><p>在 Python 中有个约定，以下划线开头的变量会被认为是私有变量。为了防止在类继承的时候私有变量被修改，Python 会对以至少两个下划线 <code>__</code> 开头、至多一个下划线结尾的变量名做内部处理，比如 <code>__spam</code> 会被处理为 <code>_classname__spam</code>，这样就可以有效避免不必要的修改了。这种处理对所有定义在类定义范围内的名称有效，不考虑名称出现的具体位置。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Mapping</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>items_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        self<span class="token punctuation">.</span>__update<span class="token punctuation">(</span>iterable<span class="token punctuation">)</span>\n\n    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">for</span> item <span class="token keyword">in</span> iterable<span class="token punctuation">:</span>\n            self<span class="token punctuation">.</span>items_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n\n    __update <span class="token operator">=</span> update   <span class="token comment"># 对 update() 的私有拷贝</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MappingSubclass</span><span class="token punctuation">(</span>Mapping<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            self<span class="token punctuation">.</span>items_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>即使我们在 <code>MappingSubclass</code> 中定义一个 <code>__update</code> 变量，也不会影响 <code>Mapping</code> 类中的 <code>__update</code> 工作。</p><div style="display:flex;align-items:center;justify-content:center;"><p style="text-align:center;margin-top:10px;color:#999;"><img src="/qrcode-c.jpg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">关注微信公众号，获取最新推送~</p><p style="text-align:center;margin-top:10px;color:#999;"><img src="/card-c.jpeg" style="width:200px;height:200px;display:block;margin:10px auto;opacity:0.8;">加微信，深入交流~</p></div>',49),e={render:function(n,s){return p}}}}]);