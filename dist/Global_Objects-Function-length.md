
                
                  
                    <div class="boxed translate-rendered">
<div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>length</strong></code> &#x5C5E;&#x6027;&#x6307;&#x660E;&#x51FD;&#x6570;&#x7684;&#x5F62;&#x53C2;&#x4E2A;&#x6570;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>Function.length</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>true</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>length</code> &#x662F;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x6307;&#x8BE5;&#x51FD;&#x6570;&#x6709;&#x591A;&#x5C11;&#x4E2A;&#x5FC5;&#x987B;&#x8981;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#xFF0C;&#x90A3;&#x4E9B;&#x5DF2;&#x5B9A;&#x4E49;&#x4E86;&#x9ED8;&#x8BA4;&#x503C;&#x7684;&#x53C2;&#x6570;&#x4E0D;&#x7B97;&#x5728;&#x5185;&#xFF0C;&#x6BD4;&#x5982;function&#xFF08;xx = 0&#xFF09;&#x7684;length&#x662F;0&#x3002;&#x4E0E;&#x4E4B;&#x5BF9;&#x6BD4;&#x7684;&#x662F;&#xFF0C;&#xA0; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/length"><code>arguments.length</code></a> &#x662F;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#x5B9E;&#x9645;&#x4F20;&#x53C2;&#x7684;&#x4E2A;&#x6570;&#x3002;</p>

<h3 id="Function_&#x6784;&#x9020;&#x5668;&#x7684;&#x5C5E;&#x6027;"><code>Function</code> &#x6784;&#x9020;&#x5668;&#x7684;&#x5C5E;&#x6027;</h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a>&#xA0;&#x6784;&#x9020;&#x5668;&#x672C;&#x8EAB;&#x4E5F;&#x662F;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a>&#x3002;&#x4ED6;&#x7684; <code>length</code> &#x5C5E;&#x6027;&#x503C;&#x4E3A; 1 &#x3002;&#x8BE5;&#x5C5E;&#x6027; Writable: <code>false</code>, Enumerable: <code>false</code>, Configurable: <code>true</code>.</p>

<h3 id="Function_&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;"><code>Function</code> &#x539F;&#x578B;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</h3>

<p>&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a>&#xA0; &#x539F;&#x578B;&#x5BF9;&#x8C61;&#x7684; length &#x5C5E;&#x6027;&#x503C;&#x4E3A; 0 &#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush: js  language-js"><code class="language-js">console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span>Function<span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/* 1 */</span>

console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span><span class="punctuation token">)</span>        <span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/* 0 */</span>
console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>a<span class="punctuation token">)</span>       <span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/* 1 */</span>
console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>a<span class="punctuation token">,</span> b<span class="punctuation token">)</span>    <span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/* 2 etc. */</span>
console<span class="punctuation token">.</span><span class="function token">log<span class="punctuation token">(</span></span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span><span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>args<span class="punctuation token">)</span> <span class="punctuation token">{</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">.</span>length<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/* 0, rest parameter is not counted */</span></code></pre>

<div style="top: 95px;" class="line-number">&#xA0;</div>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a title="ECMAScript 1st Edition (ECMA-262)" hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.5.1">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function.length</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-function-instances-length">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function.length</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>The <code>configurable</code> attribute of this property is now <code>true</code>.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-function-instances-length">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Function.length</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

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
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td>Configurable: true</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
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
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td>Configurable: true</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>37.0 (37)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Function"><code>Function</code></a></li>
</ul>
</div>

<h2 id="sect1">&#xA0;</h2>
                  
                
              