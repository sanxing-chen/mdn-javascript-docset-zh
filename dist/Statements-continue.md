
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id=".E6.A6.82.E8.BF.B0">&#x6982;&#x8FF0;</h2>

<p><strong>continue &#x8BED;&#x53E5;</strong>&#x7ED3;&#x675F;&#x5F53;&#x524D;&#xFF08;&#x6216;&#x6807;&#x7B7E;&#xFF09;&#x7684;&#x5FAA;&#x73AF;&#x8BED;&#x53E5;&#x7684;&#x672C;&#x6B21;&#x8FED;&#x4EE3;&#xFF0C;&#x5E76;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x5FAA;&#x73AF;&#x7684;&#x4E0B;&#x4E00;&#x6B21;&#x8FED;&#x4EE3;&#x3002;</p>

<h2 id=".E8.AF.AD.E6.B3.95">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">continue [ label ];</pre>

<dl>
</dl>

<dl>
 <dt><code>label</code></dt>
 <dd>&#x6807;&#x8BC6;&#x6807;&#x53F7;&#x5173;&#x8054;&#x7684;&#x8BED;&#x53E5;</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x4E0E; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/break" title="break &#x8BED;&#x53E5;&#xA0;&#x4E2D;&#x6B62;&#x5F53;&#x524D;&#x5FAA;&#x73AF;&#xFF0C;switch &#x8BED;&#x53E5;&#x6216; label &#x8BED;&#x53E5;&#xFF0C;&#x5E76;&#x628A;&#x7A0B;&#x5E8F;&#x63A7;&#x5236;&#x6D41;&#x8F6C;&#x5230;&#x7D27;&#x63A5;&#x7740;&#x88AB;&#x4E2D;&#x6B62;&#x8BED;&#x53E5;&#x540E;&#x9762;&#x7684;&#x8BED;&#x53E5;&#x3002;"><code>break</code></a> &#x8BED;&#x53E5;&#x7684;&#x533A;&#x522B;&#x5728;&#x4E8E;&#xFF0C; continue &#x5E76;&#x4E0D;&#x4F1A;&#x7EC8;&#x6B62;&#x5FAA;&#x73AF;&#x7684;&#x8FED;&#x4EE3;&#xFF0C;&#x800C;&#x662F;&#xFF1A;</p>

<ul>
 <li>&#x5728; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/while" title="while &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;"><code>while</code></a> &#x5FAA;&#x73AF;&#x4E2D;&#xFF0C;&#x63A7;&#x5236;&#x6D41;&#x8DF3;&#x8F6C;&#x56DE;&#x6761;&#x4EF6;&#x5224;&#x65AD;&#xFF1B;</li>
</ul>

<ul>
 <li>&#x5728; <a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>for</code></a> &#x5FAA;&#x73AF;&#x4E2D;&#xFF0C;&#x63A7;&#x5236;&#x6D41;&#x8DF3;&#x8F6C;&#x5230;&#x66F4;&#x65B0;&#x8BED;&#x53E5;&#x3002;</li>
</ul>

<p><code>continue</code> &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x53EF;&#x9009;&#x7684;&#x6807;&#x53F7;&#x4EE5;&#x63A7;&#x5236;&#x7A0B;&#x5E8F;&#x8DF3;&#x8F6C;&#x5230;&#x6307;&#x5B9A;&#x5FAA;&#x73AF;&#x7684;&#x4E0B;&#x4E00;&#x6B21;&#x8FED;&#x4EE3;&#xFF0C;&#x800C;&#x975E;&#x5F53;&#x524D;&#x5FAA;&#x73AF;&#x3002;&#x6B64;&#x65F6;&#x8981;&#x6C42; <code>continue</code> &#x8BED;&#x53E5;&#x5728;&#x5BF9;&#x5E94;&#x7684;&#x5FAA;&#x73AF;&#x5185;&#x90E8;&#x3002;</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Using_continue_with_while" name="Example:_Using_continue_with_while">&#x4F8B;&#x5B50;&#xFF1A;&#x5728; <code>while</code> &#x8BED;&#x53E5;&#x4E2D;&#x4F7F;&#x7528; <code>continue</code></h3>

<p>&#x4E0B;&#x8FF0;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/while" title="while &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;"><code>while</code></a> &#x5FAA;&#x73AF;&#x4E2D; <code>continue</code> &#x8BED;&#x53E5;&#x7684;&#x4F7F;&#x7528;&#x3002;&#x5F53;&#x5FAA;&#x73AF;&#x5230; <code>i</code> &#x7684;&#x503C;&#x4E3A; 3 &#x65F6;&#xFF0C;&#x6267;&#x884C; continue &#x3002; n &#x7684;&#x503C;&#x5728;&#x51E0;&#x6B21;&#x8FED;&#x4EE3;&#x540E;&#x5206;&#x522B;&#x4E3A; 1, 3, 7 &#x548C; 12 &#xFF0E;</p>

<pre class="brush: js  language-js"><code class="language-js">i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   i<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   n <span class="token operator">+</span><span class="token operator">=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<h3 id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E4.BD.BF.E7.94.A8.E5.B8.A6.E6.A0.87.E5.8F.B7.E7.9A.84_continue">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#x5E26;&#x6807;&#x53F7;&#x7684; <code>continue</code></h3>

<p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x88AB;&#x6807;&#x8BB0;&#x4E3A; <code>checkiandj</code> &#x7684;&#x8BED;&#x53E5;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x88AB;&#x6807;&#x8BB0;&#x4E3A; <code>checkj</code> &#x7684;&#x8BED;&#x53E5;&#x3002;&#x5F53;&#x9047;&#x5230;<code>continue</code> &#x8BED;&#x53E5;&#x65F6;&#xFF0C;&#x7A0B;&#x5E8F;&#x56DE;&#x5230; <code>checkj</code> &#x8BED;&#x53E5;&#x7684;&#x5F00;&#x59CB;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x3002;&#x6BCF;&#x6B21;&#x9047;&#x5230; <code>continue</code> &#x65F6;&#xFF0C;&#x518D;&#x6B21;&#x6267;&#x884C; <code>checkj</code> &#xFF0C;&#x76F4;&#x5230;&#x6761;&#x4EF6;&#x5224;&#x65AD;&#x8FD4;&#x56DE; false &#x3002;&#x4E4B;&#x540E;&#x5B8C;&#x6210; <code>checkiandj</code> &#x8BED;&#x53E5;&#x5269;&#x4E0B;&#x7684;&#x90E8;&#x5206;&#x3002;</p>

<p>&#x4F46;&#x5982;&#x679C; <code>continue</code> &#x7684;&#x6807;&#x53F7;&#x88AB;&#x6539;&#x4E3A; <code>checkiandj</code> &#xFF0C;&#x90A3;&#x7A0B;&#x5E8F;&#x5C06;&#x4F1A;&#x4ECE; <code>checkiandj</code> &#x8BED;&#x53E5;&#x7684;&#x5F00;&#x59CB;&#x7EE7;&#x7EED;&#x8FD0;&#x884C;&#x3002;</p>

<p>&#x53C2;&#x8003; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/label" title="&#x6807;&#x8BB0;&#x8BED;&#x53E5;&#xFF08;labeled statement&#xFF09;&#x53EF;&#x4EE5;&#x548C; break &#x6216; continue &#x8BED;&#x53E5;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x3002;&#x6807;&#x8BB0;&#x5C31;&#x662F;&#x5728;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x524D;&#x9762;&#x52A0;&#x4E2A;&#x53EF;&#x4EE5;&#x5F15;&#x7528;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#xFF08;identifier&#xFF09;&#x3002;"><code>label</code></a> &#x3002;</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    j <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>

checkiandj<span class="token punctuation">:</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">&quot;i: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
   i <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

   checkj<span class="token punctuation">:</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">&quot;j: &quot;</span><span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
      j <span class="token operator">-</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>j <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
         <span class="token keyword">continue</span> checkj<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span>j <span class="token operator">+</span> <span class="token string">&quot; is odd.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">&quot;j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

<p>&#x8F93;&#x51FA;&#xFF1A;</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="token string">&quot;i: 0&quot;</span>
<span class="token comment">
// start checkj
</span><span class="token string">&quot;j: 8&quot;</span>
<span class="token string">&quot;7 is odd.&quot;</span>
<span class="token string">&quot;j: 7&quot;</span>
<span class="token string">&quot;j: 6&quot;</span>
<span class="token string">&quot;5 is odd.&quot;</span>
<span class="token string">&quot;j: 5&quot;</span><span class="token comment">
// end checkj
</span>
<span class="token string">&quot;i = 1&quot;</span> 
<span class="token string">&quot;j = 4&quot;</span> 

<span class="token string">&quot;i: 1&quot;</span>
<span class="token string">&quot;i = 2&quot;</span> 
<span class="token string">&quot;j = 4&quot;</span>

<span class="token string">&quot;i: 2&quot;</span>
<span class="token string">&quot;i = 3&quot;</span>
<span class="token string">&quot;j = 4&quot;</span>

<span class="token string">&quot;i: 3&quot;</span>
<span class="token string">&quot;i = 4&quot;</span>
<span class="token string">&quot;j = 4&quot;</span></code></pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition</td>
   <td>Standard</td>
   <td>Initial definition. Unlabeled version.</td>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition</td>
   <td>Standard</td>
   <td>Labeled version added.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.7" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Continue statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-continue-statement" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Continue statement</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/break" title="break &#x8BED;&#x53E5;&#xA0;&#x4E2D;&#x6B62;&#x5F53;&#x524D;&#x5FAA;&#x73AF;&#xFF0C;switch &#x8BED;&#x53E5;&#x6216; label &#x8BED;&#x53E5;&#xFF0C;&#x5E76;&#x628A;&#x7A0B;&#x5E8F;&#x63A7;&#x5236;&#x6D41;&#x8F6C;&#x5230;&#x7D27;&#x63A5;&#x7740;&#x88AB;&#x4E2D;&#x6B62;&#x8BED;&#x53E5;&#x540E;&#x9762;&#x7684;&#x8BED;&#x53E5;&#x3002;"><code>break</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/label" title="&#x6807;&#x8BB0;&#x8BED;&#x53E5;&#xFF08;labeled statement&#xFF09;&#x53EF;&#x4EE5;&#x548C; break &#x6216; continue &#x8BED;&#x53E5;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x3002;&#x6807;&#x8BB0;&#x5C31;&#x662F;&#x5728;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x524D;&#x9762;&#x52A0;&#x4E2A;&#x53EF;&#x4EE5;&#x5F15;&#x7528;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#xFF08;identifier&#xFF09;&#x3002;"><code>label</code></a></li>
</ul>
                  
                
              