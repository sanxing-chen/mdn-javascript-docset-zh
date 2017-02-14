
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A;&#x5F62;&#x53C2;&#x6CA1;&#x6709;&#x88AB;&#x4F20;&#x5165;&#x5BF9;&#x5E94;&#x7684;&#x5B9E;&#x53C2;&#x6216;&#x8005;&#x4F20;&#x5165;&#x4E86;<code>undefined</code>,&#x5219;&#x8BE5;&#x5F62;&#x53C2;&#x4F1A;&#x88AB;&#x8D4B;&#x4E00;&#x4E2A;&#x9ED8;&#x8BA4;&#x503C;.</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">function [<em>name</em>]([<em>param1</em>[ = defaultValue1 ][, ..., <em>paramN</em>[ = defaultValueN ]]]) { <em>statements</em> }
</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5728;JavaScript&#x91CC;&#xFF0C;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x9ED8;&#x8BA4;&#x662F;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x3002;&#xA0;&#x7136;&#x800C;&#xFF0C;&#x5728;&#x67D0;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x53EF;&#x80FD;&#x662F;&#x6709;&#x9700;&#x8981;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x53EF;&#x4EE5;&#x5E2E;&#x52A9;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x3002;</p>

<p>&#x8FC7;&#x53BB;&#xFF0C;&#x4E00;&#x822C;&#x7684;&#x8BBE;&#x7F6E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x7684;&#x65B9;&#x6CD5;&#x662F;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x6D4B;&#x8BD5;&#x53C2;&#x6570;&#x662F;&#x5426;&#x4E3A;undefined&#xFF0C;&#x5982;&#x679C;&#x662F;&#x7684;&#x8BDD;&#x5C31;&#x8BBE;&#x7F6E;&#x4E3A;&#x9ED8;&#x8BA4;&#x7684;&#x503C;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5982;&#x679C;&#x5728;&#x8C03;&#x7528;multiply&#x65F6;&#xFF0C;&#x53C2;&#x6570;b&#x7684;&#x503C;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#xFF0C;&#x90A3;&#x4E48;b&#x5728;&#x51FD;&#x6570;&#x4F53;&#x7684;&#x503C;&#x5C31;&#x4E3A;undefined&#x3002;&#x5982;&#x679C;&#x76F4;&#x63A5;&#x6267;&#x884C;a*b&#xFF0C;&#x51FD;&#x6570;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>NaN&#x3002;</code>&#x4F46;&#x662F;&#x7B2C;&#x4E8C;&#x884C;&#x4EE3;&#x7801;&#x89E3;&#x51B3;&#x4E86;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x5B83;&#x628A;b&#x7684;&#x503C;&#x8D4B;&#x4E3A;1&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">multiply</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  b <span class="operator token">=</span> <span class="keyword token">typeof</span> b <span class="operator token">!==</span> <span class="string token">&apos;undefined&apos;</span> <span class="operator token">?</span>  b <span class="punctuation token">:</span> <span class="number token">1</span><span class="punctuation token">;</span>

  <span class="keyword token">return</span> a<span class="operator token">*</span>b<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="function token">multiply</span><span class="punctuation token">(</span><span class="number token">5</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 5</span></code>
</pre>

<p>&#x6709;&#x4E86;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#xFF0C;&#x6211;&#x4EEC;&#x4E0D;&#x9700;&#x8981;&#x518D;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x5185;&#x505A;&#x4E0D;&#x5FC5;&#x8981;&#x7684;&#x68C0;&#x67E5;&#x3002;&#x73B0;&#x5728;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x51FD;&#x6570;&#x5934;&#x5C06;b&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x7F6E;&#x4E3A;1&#xFF1A;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">multiply</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> a<span class="operator token">*</span>b<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="function token">multiply</span><span class="punctuation token">(</span><span class="number token">5</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 5</span></code></pre>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F20;&#x5165;_undefined">&#x4F20;&#x5165;&#xA0;<code>undefined</code></h3>

<p>&#x7B2C;&#x4E8C;&#x6B21;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x4E2D;&#xFF0C;&#x5373;&#x4F7F;&#x663E;&#x5F0F;&#x5730;&#x4F20;&#x5165;&#x4E86;<code>undefined&#xFF0C;</code><code>color&#x53C2;&#x6570;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x53D6;&#x9ED8;&#x8BA4;&#x503C;&#x3002;</code></p>

<pre class="brush: js">function setBackgroundColor(element, color = &apos;rosybrown&apos;) {
  element.style.backgroundColor = color;
}

setBackgroundColor(someDiv);            // color&#x7684;&#x503C;&#x4E3A;&apos;rosybrown&apos;
setBackgroundColor(someDiv, undefined); // color&#x7684;&#x503C;&#x4E3A;&apos;rosybrown&apos;
setBackgroundColor(someDiv, &apos;blue&apos;);    // color&#x7684;&#x503C;&#x4E3A;&apos;blue&apos; 
</pre>

<h3 id="&#x8C03;&#x7528;&#x65F6;&#x89E3;&#x6790;">&#x8C03;&#x7528;&#x65F6;&#x89E3;&#x6790;</h3>

<p>&#x5728;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x53C2;&#x6570;&#x9ED8;&#x8BA4;&#x503C;&#x4F1A;&#x88AB;&#x89E3;&#x6790;&#xFF0C;&#x6240;&#x4EE5;&#x4E0D;&#x50CF;Python&#x4E2D;&#x7684;&#x4F8B;&#x5B50;&#xFF0C;&#x6BCF;&#x6B21;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x90FD;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x53C2;&#x6570;&#x5BF9;&#x8C61;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">append</span><span class="punctuation token">(</span>value<span class="punctuation token">,</span> array <span class="operator token">=</span> <span class="punctuation token">[</span><span class="punctuation token">]</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  array<span class="punctuation token">.</span><span class="function token">push</span><span class="punctuation token">(</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="keyword token">return</span> array<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="function token">append</span><span class="punctuation token">(</span><span class="number token">1</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">//[1]</span>
<span class="function token">append</span><span class="punctuation token">(</span><span class="number token">2</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">//[2], not [1, 2]</span></code></pre>

<p>&#x8FD9;&#x4E2A;&#x89C4;&#x5219;&#x5BF9;&#x4E8E;&#x51FD;&#x6570;&#x548C;&#x53D8;&#x91CF;&#x4E5F;&#x662F;&#x9002;&#x7528;&#x7684;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">callSomething</span><span class="punctuation token">(</span>thing <span class="operator token">=</span> <span class="function token">something</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span> <span class="keyword token">return</span> thing <span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">something</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="string token">&quot;sth&quot;</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="function token">callSomething</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>  <span class="comment token">//sth</span></code></pre>

<h3 id="&#x524D;&#x7F6E;&#x53C2;&#x6570;&#x5BF9;&#x4E8E;&#x540E;&#x9762;&#x7684;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x662F;&#x53EF;&#x89C1;&#x7684;">&#x524D;&#x7F6E;&#x53C2;&#x6570;&#x5BF9;&#x4E8E;&#x540E;&#x9762;&#x7684;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x662F;&#x53EF;&#x89C1;&#x7684;</h3>

<p>&#x5DF2;&#x7ECF;&#x88AB;&#x58F0;&#x660E;&#x7684;&#x53C2;&#x6570;&#x5BF9;&#x4E8E;&#x540E;&#x9762;&#x7684;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x662F;&#x53EF;&#x89C1;&#x7684;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">singularAutoPlural</span><span class="punctuation token">(</span>singular<span class="punctuation token">,</span> plural <span class="operator token">=</span> singular<span class="operator token">+</span><span class="string token">&quot;s&quot;</span><span class="punctuation token">,</span> 
                            rallyingCry <span class="operator token">=</span> plural <span class="operator token">+</span> <span class="string token">&quot; ATTACK!!!&quot;</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="punctuation token">[</span>singular<span class="punctuation token">,</span> plural<span class="punctuation token">,</span> rallyingCry <span class="punctuation token">]</span><span class="punctuation token">;</span> 
<span class="punctuation token">}</span>

<span class="comment token">//[&quot;Gecko&quot;,&quot;Geckos&quot;, &quot;Geckos ATTACK!!!&quot;]</span>
<span class="function token">singularAutoPlural</span><span class="punctuation token">(</span><span class="string token">&quot;Gecko&quot;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="comment token">//[&quot;Fox&quot;,&quot;Foxes&quot;, &quot;Foxes ATTACK!!!&quot;]</span>
<span class="function token">singularAutoPlural</span><span class="punctuation token">(</span><span class="string token">&quot;Fox&quot;</span><span class="punctuation token">,</span><span class="string token">&quot;Foxes&quot;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="comment token">//[&quot;Deer&quot;, &quot;Deer&quot;, &quot;Deer ... change.&quot;]</span>
<span class="function token">singularAutoPlural</span><span class="punctuation token">(</span><span class="string token">&quot;Deer&quot;</span><span class="punctuation token">,</span> <span class="string token">&quot;Deer&quot;</span><span class="punctuation token">,</span> &quot;Deer peaceably and respectfully
   petition the government <span class="keyword token">for</span> positive change<span class="punctuation token">.</span>&quot;<span class="punctuation token">)</span></code>
</pre>

<p>&#x4EE5;&#x4E0B;&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x8FD1;&#x4F3C;&#x6A21;&#x62DF;&#x4E86;&#x4E00;&#x4E9B;&#x6BD4;&#x8F83;&#x7B80;&#x660E;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5E76;&#x8BF4;&#x660E;&#x4E86;&#x7279;&#x6B8A;&#x60C5;&#x51B5;&#x662F;&#x600E;&#x4E48;&#x88AB;&#x5904;&#x7406;&#x7684;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">go</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="string token">&quot;:P&quot;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">withDefaults</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b <span class="operator token">=</span> <span class="number token">5</span><span class="punctuation token">,</span> c <span class="operator token">=</span> b<span class="punctuation token">,</span> d <span class="operator token">=</span> <span class="function token">go</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">,</span> e <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">,</span> 
                      f <span class="operator token">=</span> arguments<span class="punctuation token">,</span> g <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="punctuation token">[</span>a<span class="punctuation token">,</span>b<span class="punctuation token">,</span>c<span class="punctuation token">,</span>d<span class="punctuation token">,</span>e<span class="punctuation token">,</span>f<span class="punctuation token">,</span>g<span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>
<span class="keyword token">function</span> <span class="function token">withoutDefaults</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">,</span> c<span class="punctuation token">,</span> d<span class="punctuation token">,</span> e<span class="punctuation token">,</span> f<span class="punctuation token">,</span> g<span class="punctuation token">)</span><span class="punctuation token">{</span>
  <span class="keyword token">switch</span><span class="punctuation token">(</span>arguments<span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">{</span>
    <span class="keyword token">case</span> <span class="number token">0</span><span class="punctuation token">:</span>
      a
    <span class="keyword token">case</span> <span class="number token">1</span><span class="punctuation token">:</span>
      b <span class="operator token">=</span> <span class="number token">5</span>
    <span class="keyword token">case</span> <span class="number token">2</span><span class="punctuation token">:</span>
      c <span class="operator token">=</span> b
    <span class="keyword token">case</span> <span class="number token">3</span><span class="punctuation token">:</span>
      d <span class="operator token">=</span> <span class="function token">go</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="keyword token">case</span> <span class="number token">4</span><span class="punctuation token">:</span>
      e <span class="operator token">=</span> <span class="keyword token">this</span>
    <span class="keyword token">case</span> <span class="number token">5</span><span class="punctuation token">:</span>
      f <span class="operator token">=</span> arguments
    <span class="keyword token">case</span> <span class="number token">6</span><span class="punctuation token">:</span>
      g <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">.</span>value<span class="punctuation token">;</span>
    <span class="keyword token">default</span><span class="punctuation token">:</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">return</span> <span class="punctuation token">[</span>a<span class="punctuation token">,</span>b<span class="punctuation token">,</span>c<span class="punctuation token">,</span>d<span class="punctuation token">,</span>e<span class="punctuation token">,</span>f<span class="punctuation token">,</span>g<span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

withDefaults<span class="punctuation token">.</span><span class="function token">call</span><span class="punctuation token">(</span><span class="punctuation token">{</span>value<span class="punctuation token">:</span><span class="string token">&quot;=^_^=&quot;</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// [undefined, 5, 5, &quot;:P&quot;, {value:&quot;=^_^=&quot;}, arguments, &quot;=^_^=&quot;]</span>


withoutDefaults<span class="punctuation token">.</span><span class="function token">call</span><span class="punctuation token">(</span><span class="punctuation token">{</span>value<span class="punctuation token">:</span><span class="string token">&quot;=^_^=&quot;</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// [undefined, 5, 5, &quot;:P&quot;, {value:&quot;=^_^=&quot;}, arguments, &quot;=^_^=&quot;]</span></code></pre>

<h3 id="&#x51FD;&#x6570;&#x5D4C;&#x5957;&#x5B9A;&#x4E49;">&#x51FD;&#x6570;&#x5D4C;&#x5957;&#x5B9A;&#x4E49;</h3>

<p>&#x5728; Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) &#x4E2D;&#x5F15;&#x5165;&#x3002;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x5185;&#x7684;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x4E0D;&#x80FD;&#x5F15;&#x7528;&#x5185;&#x90E8;&#x7684;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x4E14;&#x4F1A;&#x5728; SpiderMonkey&#xA0;&#x629B;&#x51FA;&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;"><code>ReferenceError</code></a> &#x9519;&#x8BEF;(&#x73B0;&#x5728;&#x662F;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#x9519;&#x8BEF;&#xFF0C;&#x8BF7;&#x67E5;&#x770B;&#xA0;<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1022967" class="external" title="FIXED: Separate environment for default parameter and function body if default parameter contains expression">bug&#xA0;1022967</a>)&#x3002;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x603B;&#x662F;&#x4F1A;&#x88AB;&#x9996;&#x5148;&#x6267;&#x884C;&#xFF0C;&#x800C;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x5185;&#x90E8;&#x7684;&#x51FD;&#x6570;&#x58F0;&#x660E;&#x4F1A;&#x5728;&#x4E4B;&#x540E;&#x751F;&#x6548;&#x3002;</p>

<p>&#x51FD;&#x6570;&#x5185;&#x5B9A;&#x4E49;&#x7684;&#x95ED;&#x5305;&#x5BF9;&#x4E8E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x662F;&#x4E0D;&#x80FD;&#x5F15;&#x7528;&#x7684;&#xFF0C;&#x5982;&#x679C;&#x5F15;&#x7528;&#x4F1A;&#x62A5;&#x9519;&#xFF08;&quot;ReferenceError&quot;&#xFF09;&#x3002;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x603B;&#x662F;&#x88AB;&#x6700;&#x5148;&#x89E3;&#x6790;&#xFF0C;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x7684;&#x58F0;&#x660E;&#x4F1A;&#x5728;&#x8FD9;&#x4E4B;&#x540E;&#x88AB;&#x89E3;&#x6790;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="comment token">// Doesn&apos;t work! Throws ReferenceError.</span>
<span class="keyword token">function</span> <span class="function token">f</span><span class="punctuation token">(</span>a <span class="operator token">=</span> <span class="function token">go</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">function</span> <span class="function token">go</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">{</span><span class="keyword token">return</span> <span class="string token">&quot;:P&quot;</span><span class="punctuation token">}</span>
<span class="punctuation token">}</span></code></pre>

<h3 id="&#x4F4D;&#x4E8E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x4E4B;&#x540E;&#x975E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;">&#x4F4D;&#x4E8E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x4E4B;&#x540E;&#x975E;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;</h3>

<p>&#x5728;Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2)&#x4E4B;&#x524D;, &#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x4F1A;&#x9020;&#x6210;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a>&#x9519;&#x8BEF;. &#x8FD9;&#x4E00;&#x73B0;&#x8C61;&#x5DF2;&#x88AB;&#x4E4B;&#x540E;&#x7684;&#x7248;&#x672C;&#x4FEE;&#x590D;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">f</span><span class="punctuation token">(</span>x<span class="operator token">=</span><span class="number token">1</span><span class="punctuation token">,</span> y<span class="punctuation token">)</span> <span class="punctuation token">{</span> 
  <span class="keyword token">return</span> <span class="punctuation token">[</span>x<span class="punctuation token">,</span> y<span class="punctuation token">]</span><span class="punctuation token">;</span> 
<span class="punctuation token">}</span>

<span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// [1, undefined]</span></code></pre>

<h3 id="&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x7684;&#x89E3;&#x6784;&#x53C2;&#x6570;">&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x7684;&#x89E3;&#x6784;&#x53C2;&#x6570;</h3>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">&#x89E3;&#x6784;&#x8D4B;&#x503C;</a>&#x4E3A;&#x53C2;&#x6570;&#x8D4B;&#x503C;:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">[</span>x<span class="punctuation token">,</span> y<span class="punctuation token">]</span> <span class="operator token">=</span> <span class="punctuation token">[</span><span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="punctuation token">{</span>z<span class="punctuation token">:</span> z<span class="punctuation token">}</span> <span class="operator token">=</span> <span class="punctuation token">{</span>z<span class="punctuation token">:</span> <span class="number token">3</span><span class="punctuation token">}</span><span class="punctuation token">)</span> <span class="punctuation token">{</span> 
  <span class="keyword token">return</span> x <span class="operator token">+</span> y <span class="operator token">+</span> z<span class="punctuation token">;</span> 
<span class="punctuation token">}</span>

<span class="function token">f</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 6</span></code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function Definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-function-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Function Definitions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>49</td>
   <td><a href="/en-US/Firefox/Releases/15" title="Released on 2012-08-28.">15.0</a> (15.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>&#x5728;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x4E4B;&#x540E;&#x6709;&#x4E0D;&#x5E26;&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x7684;&#x53C2;&#x6570;</td>
   <td>49</td>
   <td><a href="/en-US/Firefox/Releases/26" title="Released on 2013-12-10.">26.0</a> (26.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>&#x5E26;&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x8D4B;&#x503C;&#x7684;&#x6790;&#x6784;&#x53C2;&#x6570;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a href="/en-US/Firefox/Releases/41" title="Released on 2015-09-22.">41.0</a> (41.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>15.0 (15.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
  <tr>
   <td>&#x5728;&#x9ED8;&#x8BA4;&#x53C2;&#x6570;&#x4E4B;&#x540E;&#x6709;&#x4E0D;&#x5E26;&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x7684;&#x53C2;&#x6570;</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>26.0 (26.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>&#x5E26;&#x6709;&#x9ED8;&#x8BA4;&#x503C;&#x8D4B;&#x503C;&#x7684;&#x6790;&#x6784;&#x53C2;&#x6570;</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>41.0 (41.0)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values" rel="external" class="external-icon external" title="http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values">Original proposal at ecmascript.org</a></li>
</ul>

<p>&#xA0;</p>
                  
                
              