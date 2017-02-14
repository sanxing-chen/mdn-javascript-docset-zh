
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Math.hypot()</strong></code> &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x5B83;&#x7684;&#x6240;&#x6709;&#x53C2;&#x6570;&#x7684;&#x5E73;&#x65B9;&#x548C;&#x7684;&#x5E73;&#x65B9;&#x6839;&#xFF0C;&#x5373;&#xFF1A;</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>&#x2026;</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>&#x2211;</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>&#x2026;</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math></p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">
<code>Math.hypot([<em>value1</em>[,<em>value2</em>, ...]]) </code></pre>

<h2 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>value1, value2, ...</code></dt>
 <dd>&#x4EFB;&#x610F;&#x591A;&#x4E2A;&#x6570;&#x5B57;</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x7531;&#x4E8E; <code>hypot</code> &#x662F; <code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.hypot()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5B9E;&#x4F8B;&#x7684;&#x5C5E;&#x6027;&#xFF08;<code>Math</code> &#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF09;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4E0D;&#x4F20;&#x5165;&#x4EFB;&#x4F55;&#x53C2;&#x6570;, &#x5219;&#x8FD4;&#x56DE; +0 .</p>

<p>&#x5982;&#x679C;&#x53C2;&#x6570;&#x5217;&#x8868;&#x4E2D;&#x6709;&#x81F3;&#x5C11;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4E0D;&#x80FD;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x5B57;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;"><code>NaN</code></a>.</p>

<p>&#x5982;&#x679C;&#x53EA;&#x4F20;&#x5165;&#x4E00;&#x4E2A;&#x53C2;&#x6570;, &#x5219; <code>Math.hypot(x)</code> &#x7684;&#x6548;&#x679C;&#x7B49;&#x540C;&#x4E8E; <code>Math.abs(x)</code>.</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush:js">
Math.hypot(3, 4)        // 5
Math.hypot(3, 4, 5)     // 7.0710678118654755
Math.hypot()            // 0
Math.hypot(NaN)         // NaN
Math.hypot(3, 4, &quot;foo&quot;) // NaN, +&quot;foo&quot; =&gt; NaN
Math.hypot(3, 4, &quot;5&quot;)   // 7.0710678118654755, +&quot;5&quot; =&gt; 5
Math.hypot(-3)          // 3, the same as Math.abs(-3)
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>&#x6B64;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#x4EE3;&#x7801;&#x6A21;&#x62DF;&#xFF1A;</p>

<pre class="brush: js  language-js">
<code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Math<span class="token punctuation">.</span>hypot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Math<span class="token punctuation">.</span>hypot <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">hypot<span class="token punctuation">(</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token operator">||</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      y <span class="token operator">+</span><span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">sqrt<span class="token punctuation">(</span></span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x94FE;&#x63A5;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.hypot</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/27" title="Released on 2014-02-04.">27</a> (27)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Phone</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>27.0 (27)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math&#xA0;&#x4E3A;&#x65B9;&#x4FBF;&#x6570;&#x5B66;&#x8BA1;&#x7B97;&#x6240;&#x9700;&#x7684;&#x5E38;&#x91CF;&#x548C;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.&#x8BE5;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x5BF9;&#x8C61;."><code>Math</code></a> &#x5BF9;&#x8C61;.</li>
</ul>
                  
                
              