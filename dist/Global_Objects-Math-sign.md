
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Math.sign()</strong></code>&#xA0;&#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x7684;&#x7B26;&#x53F7;, &#x662F;&#x6B63;&#x6570;, &#x8D1F;&#x6570;, &#x8FD8;&#x662F;&#x96F6;.</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.sign(<em>x</em>)</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4EFB;&#x610F;&#x6570;&#x5B57;.</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x56E0;&#x4E3A; <code>sign </code>&#x662F; <code>Math </code>&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x4F60;&#x5E94;&#x8BE5;&#x4F7F;&#x7528; Math.sign() &#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5728; <code>Math </code>&#x7684;&#x5BF9;&#x8C61;&#x4E0A;&#x8C03;&#x7528;&#xFF08;<code>Math </code>&#x4E0D;&#x662F;&#x6784;&#x9020;&#x5668;&#xFF09;&#x3002;</p>

<p>&#x6B64;&#x51FD;&#x6570;&#x5171;&#x6709;5&#x79CD;&#x8FD4;&#x56DE;&#x503C;, &#x5206;&#x522B;&#x662F; 1, -1, 0, -0, NaN. &#x4EE3;&#x8868;&#x7684;&#x5404;&#x662F;&#x6B63;&#x6570;, &#x8D1F;&#x6570;, &#x6B63;&#x96F6;, &#x8D1F;&#x96F6;, NaN.</p>

<p>&#x4F20;&#x5165;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x4F1A;&#x88AB;&#x9690;&#x5F0F;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x5B57;&#x7C7B;&#x578B;.</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush:js">Math.sign(3)     //  1
Math.sign(-3)    // -1
Math.sign(&quot;-3&quot;)  // -1
Math.sign(0)     //  0
Math.sign(-0)    // -0
Math.sign(NaN)   // NaN
Math.sign(&quot;foo&quot;) // NaN
Math.sign()      // NaN
</pre>

<h2 id="Compatibility" name="Compatibility">Polyfill</h2>

<pre class="brush: js  language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">sign<span class="token punctuation">(</span></span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token operator">+</span>x<span class="token comment"> // convert to a number
</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">isNaN<span class="token punctuation">(</span></span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">return</span> x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span></code></pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sign" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.sign</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial definition.</td>
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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25</a> (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math&#xA0;&#x4E3A;&#x65B9;&#x4FBF;&#x6570;&#x5B66;&#x8BA1;&#x7B97;&#x6240;&#x9700;&#x7684;&#x5E38;&#x91CF;&#x548C;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.&#x8BE5;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x5BF9;&#x8C61;."><code>Math</code></a> &#x5BF9;&#x8C61;</li>
</ul>
                  
                
              