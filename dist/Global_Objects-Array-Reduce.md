
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code><strong>reduce()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x5BF9;&#x7D2F;&#x52A0;&#x5668;&#x548C;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x503C;&#x5E94;&#x7528;&#x4E00;&#x4E2A;&#x51FD;&#x6570; (&#x4ECE;&#x5DE6;&#x5230;&#x53F3;)&#xFF0C;&#x4EE5;&#x5C06;&#x5176;&#x51CF;&#x5C11;&#x4E3A;&#x5355;&#x4E2A;&#x503C;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> sum <span class="operator token">=</span> <span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span><span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> a <span class="operator token">+</span> b<span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="number token">0</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// sum is 6</span>

<span class="keyword token">var</span> flattened <span class="operator token">=</span> <span class="punctuation token">[</span><span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="number token">4</span><span class="punctuation token">,</span> <span class="number token">5</span><span class="punctuation token">]</span><span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">)</span> <span class="punctuation token">{</span> 
  <span class="keyword token">return</span> a<span class="punctuation token">.</span><span class="function token">concat</span><span class="punctuation token">(</span>b<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="punctuation token">]</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// flattened is [0, 1, 2, 3, 4, 5]  </span></code></pre>

<pre><code>/*
const flatten = arr =&gt; arr.reduce(
  function (a, b){
    a.concat(Array.isArray(b) ? flatten(b) : b),[]
  }
);
*/

var list1 = [[0, 1], [2, 3], [4, 5]];
var list2 = [0, [1, [2, [3, [4, [5]]]]]];

const flatten = arr =&gt; arr.reduce(
(a, b) =&gt; a.concat(Array.isArray(b) ? flatten(b) : b), []
);
flatten(list1); // returns [0, 1, 2, 3, 4, 5]
flatten(list2); // returns [0, 1, 2, 3, 4, 5]</code></pre>

<p><strong style="color: #4d4e53; font-size: 2.143rem; font-weight: 700; letter-spacing: -1px;">&#x8BED;&#x6CD5;</strong></p>

<pre class="syntaxbox"><code><var>arr</var>.reduce(<var>callback,</var><em>[</em><var>initialValue</var><em>]</em>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd><code>&#x6267;&#x884C;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x503C;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x5305;&#x542B;&#x56DB;&#x4E2A;&#x53C2;&#x6570;</code></dd>
 <dd>
 <dl>
 </dl>
 <strong><code>accumulator</code></strong>

 <dl>
  <dd><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">&#x4E0A;&#x4E00;&#x6B21;&#x8C03;&#x7528;&#x56DE;&#x8C03;&#x8FD4;&#x56DE;&#x7684;&#x503C;&#xFF0C;&#x6216;&#x8005;&#x662F;&#x63D0;&#x4F9B;&#x7684;&#x521D;&#x59CB;&#x503C;&#xFF08;</span></font><span style="font-family: courier new,andale mono,monospace; line-height: normal;">initialValue</span><span style="font-family: courier new,andale mono,monospace; line-height: normal;">&#xFF09;</span></dd>
  <dt><code>currentValue</code></dt>
  <dd><font face="Courier New, Andale Mono, monospace">&#x6570;&#x7EC4;&#x4E2D;&#x6B63;&#x5728;&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;</font></dd>
  <dt><code>currentIndex</code></dt>
  <dd><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">&#x6570;&#x636E;&#x4E2D;&#x6B63;&#x5728;&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x63D0;&#x4F9B;&#x4E86;&#xA0;</span></font><span style="font-family: courier new,andale mono,monospace; line-height: normal;">initialValue&#xA0;</span><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">&#xFF0C;&#x4ECE;0&#x5F00;&#x59CB;&#xFF1B;&#x5426;&#x5219;&#x4ECE;1&#x5F00;&#x59CB;</span></font></dd>
  <dt><code>array</code></dt>
  <dd>&#x8C03;&#x7528; <code>reduce</code> &#x7684;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
 <dt><code>initialValue</code></dt>
 <dd><font face="Courier New, Andale Mono, monospace">&#x53EF;&#x9009;&#x9879;&#xFF0C;&#x5176;&#x503C;&#x7528;&#x4E8E;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528; callback &#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x3002;</font></dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>
 &#x51FD;&#x6570;&#x7D2F;&#x8BA1;&#x5904;&#x7406;&#x7684;&#x7ED3;&#x679C;</dt>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>reduce</code> &#x4E3A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F9D;&#x6B21;&#x6267;&#x884C;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF0C;&#x4E0D;&#x5305;&#x62EC;&#x6570;&#x7EC4;&#x4E2D;&#x88AB;&#x5220;&#x9664;&#x6216;&#x4ECE;&#x672A;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x63A5;&#x53D7;&#x56DB;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x521D;&#x59CB;&#x503C; <code>accumulator&#xA0;</code>&#xFF08;&#x6216;&#x8005;&#x4E0A;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF09;&#xFF0C;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x503C; <code>currentValue&#xA0;</code>&#xFF0C;&#x5F53;&#x524D;&#x7D22;&#x5F15; <code>currentIndex&#xA0;</code>&#xFF0C;&#x8C03;&#x7528; <code>reduce</code> &#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7B2C;&#x4E00;&#x6B21;&#x6267;&#x884C;&#x65F6;&#xFF0C;<code>accumulator</code><span style="line-height: 1.5;">&#xA0;&#x548C;&#xA0;</span><code style="font-size: 14px;">currentValue</code>&#xA0;&#x7684;&#x53D6;&#x503C;&#x6709;&#x4E24;&#x79CD;&#x60C5;&#x51B5;&#xFF1A;<span style="font-family: courier new,andale mono,monospace; line-height: normal;">&#x8C03;&#x7528; reduce &#x65F6;&#x63D0;&#x4F9B;initialValue&#xFF0C;</span><code>accumulator</code><span style="font-family: courier new,andale mono,monospace; line-height: normal;"> &#x53D6;&#x503C;&#x4E3A; initialValue &#xFF0C;currentValue &#x53D6;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x503C;&#xFF1B;&#x6CA1;&#x6709;&#x63D0;&#x4F9B; initialValue &#xFF0C;</span>accumulator<span style="font-family: courier new,andale mono,monospace; line-height: normal;"> &#x53D6;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;currentValue &#x53D6;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7B2C;&#x4E8C;&#x4E2A;&#x503C;&#x3002;</span></p>

<p>&#x6CE8;&#x610F;:&#xA0;<span style="font-family: courier new,andale mono,monospace; line-height: normal;">&#x4E0D;&#x63D0;&#x4F9B; initialValue &#xFF0C;reduce &#x4F1A;&#x4ECE;&#x7D22;&#x5F15;1&#x7684;&#x5730;&#x65B9;&#x5F00;&#x59CB;&#x6267;&#x884C; callback &#x65B9;&#x6CD5;&#xFF0C;</span>&#x8DF3;&#x8FC7;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x3002;<span style="font-family: courier new,andale mono,monospace; line-height: normal;">&#x63D0;&#x4F9B; initialValue &#xFF0C;&#x4ECE;&#x7D22;&#x5F15;0&#x5F00;&#x59CB;&#x3002;</span></p>

<p><span style="font-family: courier new,andale mono,monospace; line-height: normal;">&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#x5E76;&#x4E14;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;</span>initialValue&#xFF0C; &#x4F1A;&#x629B;&#x51FA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a>&#xA0;&#x3002;&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4EC5;&#x6709;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x65E0;&#x8BBA;&#x4F4D;&#x7F6E;&#x5982;&#x4F55;&#xFF09;&#x5E76;&#x4E14;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;initialValue&#xFF0C; &#x6216;&#x8005;&#x6709;&#x63D0;&#x4F9B;initialValue&#x4F46;&#x662F;&#x6570;&#x7EC4;&#x4E3A;&#x7A7A;&#xFF0C;&#x90A3;&#x4E48;&#x6B64;&#x552F;&#x4E00;&#x503C;&#x5C06;&#x88AB;&#x8FD4;&#x56DE;&#x5E76;&#x4E14;callback&#x4E0D;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x3002;</p>

<p>&#x63D0;&#x4F9B; initialValue &#x901A;&#x5E38;&#x66F4;&#x5B89;&#x5168;&#xFF0C;&#x6B63;&#x5982;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#xFF0C;&#x6CA1;&#x6709; initialValue &#x6709;&#x4E09;&#x79CD;&#x53EF;&#x80FD;&#x8F93;&#x51FA;&#xFF1A;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> maxCallback <span class="operator token">=</span> <span class="punctuation token">(</span> pre<span class="punctuation token">,</span> cur <span class="punctuation token">)</span> <span class="operator token">=</span><span class="operator token">&gt;</span> Math<span class="punctuation token">.</span><span class="function token">max</span><span class="punctuation token">(</span> pre<span class="punctuation token">.</span>x<span class="punctuation token">,</span> cur<span class="punctuation token">.</span>x <span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> maxCallback2 <span class="operator token">=</span> <span class="punctuation token">(</span> max<span class="punctuation token">,</span> cur <span class="punctuation token">)</span> <span class="operator token">=</span><span class="operator token">&gt;</span> Math<span class="punctuation token">.</span><span class="function token">max</span><span class="punctuation token">(</span> max<span class="punctuation token">,</span> cur <span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="comment token">// reduce() </span></code>&#x6CA1;&#x6709; initialValue<code class="language-js">
<span class="punctuation token">[</span> <span class="punctuation token">{</span> x<span class="punctuation token">:</span> <span class="number token">22</span> <span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="punctuation token">{</span> x<span class="punctuation token">:</span> <span class="number token">42</span> <span class="punctuation token">}</span> <span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> maxCallback <span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// 42</span>
<span class="punctuation token">[</span> <span class="punctuation token">{</span> x<span class="punctuation token">:</span> <span class="number token">22</span> <span class="punctuation token">}</span>            <span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> maxCallback <span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// { x: 22 }</span>
<span class="punctuation token">[</span>                      <span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> maxCallback <span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// TypeError</span>

<span class="comment token">// map/reduce; &#x66F4;&#x597D;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;, &#x5BF9;&#x7A7A;array&#x4E5F;&#x9002;&#x7528;</span>
<span class="punctuation token">[</span> <span class="punctuation token">{</span> x<span class="punctuation token">:</span> <span class="number token">22</span> <span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="punctuation token">{</span> x<span class="punctuation token">:</span> <span class="number token">42</span> <span class="punctuation token">}</span> <span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">map</span><span class="punctuation token">(</span> el <span class="operator token">=</span><span class="operator token">&gt;</span> el<span class="punctuation token">.</span>x <span class="punctuation token">)</span>
                        <span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> maxCallback2<span class="punctuation token">,</span> <span class="operator token">-</span><span class="number token">Infinity</span> <span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="reduce&#x5982;&#x4F55;&#x8FD0;&#x884C;">reduce&#x5982;&#x4F55;&#x8FD0;&#x884C;</h3>

<p>&#x4F8B;&#x5982;&#x6267;&#x884C;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;</p>

<pre class="brush:js">[0,1,2,3,4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
</pre>

<p>callback &#x88AB;&#x8C03;&#x7528;&#x56DB;&#x6B21;&#xFF0C;&#x6BCF;&#x6B21;&#x8C03;&#x7528;&#x7684;&#x53C2;&#x6570;&#x548C;&#x8FD4;&#x56DE;&#x503C;&#x5982;&#x4E0B;&#x8868;&#xFF1A;</p>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">&#xA0;</th>
   <th scope="col">accumulator</th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col">currentIndex</th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>0</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td><code>1</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>3</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>6</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td><code>6</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p><code>reduce</code> &#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x6700;&#x540E;&#x4E00;&#x6B21;&#x8C03;&#x7528; callback &#x7684;&#x8FD4;&#x56DE;&#x503C;&#xFF08;10&#xFF09;&#x3002;</p>

<p>&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions" title="&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E2A;&#x7B80;&#x5199;&#x5F62;&#x5F0F;&#x7684;&#x51FD;&#x6570;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5E76;&#x4E14;&#x5B83;&#x62E5;&#x6709;&#x8BCD;&#x6CD5;&#x4F5C;&#x7528;&#x57DF;&#x7684;this&#x503C;&#xFF08;&#x5373;&#x4E0D;&#x4F1A;&#x65B0;&#x4EA7;&#x751F;&#x81EA;&#x5DF1;&#x4F5C;&#x7528;&#x57DF;&#x4E0B;&#x7684;this,&#xA0;arguments,&#xA0;super &#x548C; new.target &#x7B49;&#x5BF9;&#x8C61;&#xFF09;&#x3002;&#x6B64;&#x5916;&#xFF0C;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x603B;&#x662F;&#x533F;&#x540D;&#x7684;&#x3002;">Arrow Function</a>&#xA0;&#x53EF;&#x4EE5;&#x4EE3;&#x66FF;&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x4EA7;&#x751F;&#x7684;&#x6548;&#x679C;&#x548C;&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#x76F8;&#x540C;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span><span class="punctuation token">,</span> <span class="number token">4</span><span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> <span class="punctuation token">(</span>prev<span class="punctuation token">,</span> curr<span class="punctuation token">)</span> <span class="operator token">=</span><span class="operator token">&gt;</span> prev <span class="operator token">+</span> curr <span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>&#x5982;&#x679C;&#x628A;&#x521D;&#x59CB;&#x503C;&#x4F5C;&#x4E3A;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x4F20;&#x5165; <code>reduce</code>&#xFF0C;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;&#x503C;&#x53D8;&#x4E3A;20&#xFF0C;&#x7ED3;&#x679C;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js">[0,1,2,3,4].reduce( (<code>accumulator</code>, currentValue, currentIndex, array) =&gt; {
  return <code>accumulator</code> + currentValue;
}, 10);
</pre>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">callback</th>
   <th scope="col">accumulator</th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>currentIndex</code></th>
   <th scope="col">array</th>
   <th scope="col">return</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528;</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">&#x7B2C;&#x4E8C;&#x6B21;&#x8C03;&#x7528;</th>
   <td><code>10</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>11</code></td>
  </tr>
  <tr>
   <th scope="row">&#x7B2C;&#x4E09;&#x6B21;&#x8C03;&#x7528;</th>
   <td><code>11</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>13</code></td>
  </tr>
  <tr>
   <th scope="row">&#x7B2C;&#x56DB;&#x6B21;&#x8C03;&#x7528;</th>
   <td><code>13</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>16</code></td>
  </tr>
  <tr>
   <th scope="row">&#x7B2C;&#x4E94;&#x6B21;&#x8C03;&#x7528;</th>
   <td><code>16</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>reduce&#x6267;&#x884C;&#x5B8C;&#xFF0C;&#x6700;&#x7EC8;&#x8FD4;&#x56DE;20</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x5C06;&#x6570;&#x7EC4;&#x6240;&#x6709;&#x9879;&#x76F8;&#x52A0;">&#x5C06;&#x6570;&#x7EC4;&#x6240;&#x6709;&#x9879;&#x76F8;&#x52A0;</h3>

<pre class="brush:js">var sum = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
}, 0);
// sum is 6
</pre>

<p>&#x6216;&#x8005;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x7F16;&#x5199;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> total <span class="operator token">=</span> <span class="punctuation token">[</span> <span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">,</span> <span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span> <span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> <span class="punctuation token">(</span> acc<span class="punctuation token">,</span> cur <span class="punctuation token">)</span> <span class="operator token">=</span><span class="operator token">&gt;</span> acc <span class="operator token">+</span> cur<span class="punctuation token">,</span> <span class="number token">0</span> <span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="&#x6570;&#x7EC4;&#x6241;&#x5E73;&#x5316;">&#x6570;&#x7EC4;&#x6241;&#x5E73;&#x5316;</h3>

<pre class="brush:js">var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
</pre>

<p>&#x6216;&#x8005;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x7F16;&#x5199;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> flattened <span class="operator token">=</span> <span class="punctuation token">[</span><span class="punctuation token">[</span><span class="number token">0</span><span class="punctuation token">,</span> <span class="number token">1</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="number token">2</span><span class="punctuation token">,</span> <span class="number token">3</span><span class="punctuation token">]</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="number token">4</span><span class="punctuation token">,</span> <span class="number token">5</span><span class="punctuation token">]</span><span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span> <span class="punctuation token">(</span> acc<span class="punctuation token">,</span> cur <span class="punctuation token">)</span> <span class="operator token">=</span><span class="operator token">&gt;</span> acc<span class="punctuation token">.</span><span class="function token">concat</span><span class="punctuation token">(</span>cur<span class="punctuation token">)</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="punctuation token">]</span> <span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="&#x8BA1;&#x7B97;&#x6570;&#x7EC4;&#x4E2D;&#x5404;&#x4E2A;&#x503C;&#x51FA;&#x73B0;&#x6B21;&#x6570;">&#x8BA1;&#x7B97;&#x6570;&#x7EC4;&#x4E2D;&#x5404;&#x4E2A;&#x503C;&#x51FA;&#x73B0;&#x6B21;&#x6570;</h3>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> names <span class="operator token">=</span> <span class="punctuation token">[</span><span class="string token">&apos;Alice&apos;</span><span class="punctuation token">,</span> <span class="string token">&apos;Bob&apos;</span><span class="punctuation token">,</span> <span class="string token">&apos;Tiff&apos;</span><span class="punctuation token">,</span> <span class="string token">&apos;Bruce&apos;</span><span class="punctuation token">,</span> <span class="string token">&apos;Alice&apos;</span><span class="punctuation token">]</span><span class="punctuation token">;</span>

<span class="keyword token">var</span> countedNames <span class="operator token">=</span> names<span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>allNames<span class="punctuation token">,</span> name<span class="punctuation token">)</span> <span class="punctuation token">{</span> 
  <span class="keyword token">if</span> <span class="punctuation token">(</span>name <span class="keyword token">in</span> allNames<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    allNames<span class="punctuation token">[</span>name<span class="punctuation token">]</span><span class="operator token">++</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">else</span> <span class="punctuation token">{</span>
    allNames<span class="punctuation token">[</span>name<span class="punctuation token">]</span> <span class="operator token">=</span> <span class="number token">1</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">return</span> allNames<span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// countedNames is { &apos;Alice&apos;: 2, &apos;Bob&apos;: 1, &apos;Tiff&apos;: 1, &apos;Bruce&apos;: 1 }</span></code></pre>

<h2 id="&#x5BF9;&#x8C61;&#x6570;&#x7EC4;&#x7684;&#x8FDE;&#x63A5;&#x8981;&#x4F7F;&#x7528;&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;&#x548C;&#x521D;&#x59CB;&#x503C;">&#x5BF9;&#x8C61;&#x6570;&#x7EC4;&#x7684;&#x8FDE;&#x63A5;&#x8981;&#x4F7F;&#x7528;&#x5C55;&#x5F00;&#x8FD0;&#x7B97;&#x7B26;&#x548C;&#x521D;&#x59CB;&#x503C;</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="comment token">// friends - an array of objects </span>
<span class="comment token">// where object field &quot;books&quot; - list of favorite books </span>
<span class="keyword token">var</span> friends <span class="operator token">=</span> <span class="punctuation token">[</span> 
<span class="punctuation token">{</span> name<span class="punctuation token">:</span> <span class="string token">&quot;Anna&quot;</span><span class="punctuation token">,</span> books<span class="punctuation token">:</span> <span class="punctuation token">[</span><span class="string token">&quot;Bible&quot;</span><span class="punctuation token">,</span> <span class="string token">&quot;Harry Potter&quot;</span><span class="punctuation token">]</span><span class="punctuation token">,</span> age<span class="punctuation token">:</span> <span class="number token">21</span> <span class="punctuation token">}</span><span class="punctuation token">,</span> 
<span class="punctuation token">{</span> name<span class="punctuation token">:</span> <span class="string token">&quot;Bob&quot;</span><span class="punctuation token">,</span> books<span class="punctuation token">:</span> <span class="punctuation token">[</span><span class="string token">&quot;War and peace&quot;</span><span class="punctuation token">,</span> <span class="string token">&quot;Romeo and Juliet&quot;</span><span class="punctuation token">]</span><span class="punctuation token">,</span> age<span class="punctuation token">:</span> <span class="number token">26</span> <span class="punctuation token">}</span><span class="punctuation token">,</span>
<span class="punctuation token">{</span> name<span class="punctuation token">:</span> <span class="string token">&quot;Alice&quot;</span><span class="punctuation token">,</span> books<span class="punctuation token">:</span> <span class="punctuation token">[</span><span class="string token">&quot;The Lord of the Rings&quot;</span><span class="punctuation token">,</span> <span class="string token">&quot;The Shining&quot;</span><span class="punctuation token">]</span><span class="punctuation token">,</span> age<span class="punctuation token">:</span> <span class="number token">18</span> <span class="punctuation token">}</span>
<span class="punctuation token">]</span>

<span class="comment token">// allbooks - list which will contain all friends books +  </span>
<span class="comment token">// additional list contained in initialValue</span>
<span class="keyword token">var</span> allbooks <span class="operator token">=</span> friends<span class="punctuation token">.</span><span class="function token">reduce</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>prev<span class="punctuation token">,</span> curr<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="punctuation token">[</span><span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>prev<span class="punctuation token">,</span> <span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>curr<span class="punctuation token">.</span>books<span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="punctuation token">[</span><span class="string token">&quot;Alphabet&quot;</span><span class="punctuation token">]</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="comment token">// allbooks = [&quot;Alphabet&quot;, &quot;Bible&quot;, &quot;Harry Potter&quot;, &quot;War and peace&quot;, </span>
<span class="comment token">// &quot;Romeo and Juliet&quot;, &quot;The Lord of the Rings&quot;, &quot;The Shining&quot;]</span></code></pre>

<h2 id="&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p><code>Array.prototype.reduce</code>&#xA0;&#x88AB;&#x6DFB;&#x52A0;&#x5230; ECMA-262 &#x6807;&#x51C6;&#x7B2C; 5 &#x7248;&#xFF1B;&#x56E0;&#x6B64;&#x53EF;&#x80FD;&#x5728;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x3002;&#x53EF;&#x4EE5;&#x5C06;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x63D2;&#x5165;&#x5230;&#x811A;&#x672C;&#x5F00;&#x5934;&#x6765;&#x5141;&#x8BB8;&#x5728;&#x90A3;&#x4E9B;&#x672A;&#x80FD;&#x539F;&#x751F;&#x652F;&#x6301; <code>reduce</code> &#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="comment token">// Production steps of ECMA-262, Edition 5, 15.4.4.21</span>
<span class="comment token">// Reference: http://es5.github.io/#x15.4.4.21</span>
<span class="keyword token">if</span> <span class="punctuation token">(</span><span class="operator token">!</span>Array<span class="punctuation token">.</span>prototype<span class="punctuation token">.</span>reduce<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  Array<span class="punctuation token">.</span>prototype<span class="punctuation token">.</span>reduce <span class="operator token">=</span> <span class="keyword token">function</span><span class="punctuation token">(</span>callback <span class="comment token">/*, initialValue*/</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="string token">&apos;use strict&apos;</span><span class="punctuation token">;</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="keyword token">this</span> <span class="operator token">===</span> <span class="keyword token">null</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">TypeError</span><span class="punctuation token">(</span><span class="string token">&apos;Array.prototype.reduce called on null or undefined&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="keyword token">typeof</span> callback <span class="operator token">!==</span> <span class="string token">&apos;function&apos;</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">TypeError</span><span class="punctuation token">(</span>callback <span class="operator token">+</span> <span class="string token">&apos; is not a function&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">var</span> t <span class="operator token">=</span> <span class="function token">Object</span><span class="punctuation token">(</span><span class="keyword token">this</span><span class="punctuation token">)</span><span class="punctuation token">,</span> len <span class="operator token">=</span> t<span class="punctuation token">.</span>length <span class="operator token">&gt;</span><span class="operator token">&gt;</span><span class="operator token">&gt;</span> <span class="number token">0</span><span class="punctuation token">,</span> k <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">,</span> value<span class="punctuation token">;</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>arguments<span class="punctuation token">.</span>length <span class="operator token">==</span> <span class="number token">2</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      value <span class="operator token">=</span> arguments<span class="punctuation token">[</span><span class="number token">1</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
      <span class="keyword token">while</span> <span class="punctuation token">(</span>k <span class="operator token">&lt;</span> len <span class="operator token">&amp;&amp;</span> <span class="operator token">!</span><span class="punctuation token">(</span>k <span class="keyword token">in</span> t<span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
        k<span class="operator token">++</span><span class="punctuation token">;</span> 
      <span class="punctuation token">}</span>
      <span class="keyword token">if</span> <span class="punctuation token">(</span>k <span class="operator token">&gt;=</span> len<span class="punctuation token">)</span> <span class="punctuation token">{</span>
        <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">TypeError</span><span class="punctuation token">(</span><span class="string token">&apos;Reduce of empty array with no initial value&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
      <span class="punctuation token">}</span>
      value <span class="operator token">=</span> t<span class="punctuation token">[</span>k<span class="operator token">++</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">for</span> <span class="punctuation token">(</span><span class="punctuation token">;</span> k <span class="operator token">&lt;</span> len<span class="punctuation token">;</span> k<span class="operator token">++</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">if</span> <span class="punctuation token">(</span>k <span class="keyword token">in</span> t<span class="punctuation token">)</span> <span class="punctuation token">{</span>
        value <span class="operator token">=</span> <span class="function token">callback</span><span class="punctuation token">(</span>value<span class="punctuation token">,</span> t<span class="punctuation token">[</span>k<span class="punctuation token">]</span><span class="punctuation token">,</span> k<span class="punctuation token">,</span> t<span class="punctuation token">)</span><span class="punctuation token">;</span>
      <span class="punctuation token">}</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">return</span> value<span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.21" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.reduce</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.8.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduce" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.reduce</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.reduce" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.reduce</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div><p></p>

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
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/3" title="Released on 2008-06-17.">3.0</a> (1.9)</td>
   <td>9</td>
   <td>10.5</td>
   <td>4.0</td>
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
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="reduceRight()&#xA0;&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x4F5C;&#x4E3A;&#x7D2F;&#x52A0;&#x5668;&#xFF08;accumulator&#xFF09;&#xFF0C;&#x8BA9;&#x6BCF;&#x4E2A;&#x503C;&#xFF08;&#x4ECE;&#x53F3;&#x5230;&#x5DE6;&#xFF0C;&#x4EA6;&#x5373;&#x4ECE;&#x5C3E;&#x5230;&#x5934;&#xFF09;&#x7F29;&#x51CF;&#x4E3A;&#x4E00;&#x4E2A;&#x503C;&#x3002;&#xFF08;&#x4E0E; reduce() &#x7684;&#x6267;&#x884C;&#x65B9;&#x5411;&#x76F8;&#x53CD;&#xFF09;"><code>Array.prototype.reduceRight()</code></a></li>
</ul>
                  
                
              