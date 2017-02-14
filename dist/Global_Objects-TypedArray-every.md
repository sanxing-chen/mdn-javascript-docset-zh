
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>every()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x80FD;&#x591F;&#x901A;&#x8FC7;&#x7531;&#x63D0;&#x4F9B;&#x51FD;&#x6570;&#x5B9E;&#x73B0;&#x7684;&#x6D4B;&#x8BD5;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x4E0E;&#xA0;<a title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><code>Array.prototype.every()</code></a>&#x76F8;&#x540C;&#x3002;&#xA0;<em>TypedArray</em>&#xA0;&#x662F;&#x8FD9;&#x91CC;&#x7684;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a>&#xA0;&#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.<code>every(<var>callback</var>[, <var>thisArg</var>])</code></code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x7528;&#x4E8E;&#x6D4B;&#x8BD5;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x53D7;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>&#x8981;&#x5904;&#x7406;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x3002;</dd>
  <dt><code>index</code></dt>
  <dd>&#x8981;&#x5904;&#x7406;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E0B;&#x6807;</dd>
  <dt><code>array</code></dt>
  <dd>every &#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x6267;&#x884C;&#xA0;<code>callback&#xA0;</code>&#x65F6;&#x7684; <code>this</code> &#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C;&#x51FD;&#x6570;&#x5BF9;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8FD4;&#x56DE; <a title="truthy: In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, &quot;&quot;, null, undefined, and NaN)." href="/en-US/docs/Glossary/truthy" class="glossaryLink">truthy</a> &#xFF0C;&#x5219;&#x4E3A;<code><strong>true</strong></code>&#xFF0C;&#x5426;&#x5219;&#x4E3A; <code><strong>false</strong></code>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>every</code> &#x65B9;&#x6CD5;&#x4E3A;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#xA0;<code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x76F4;&#x5230;&#x5B83;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x4F7F;&#xA0;<code>callback</code> &#x8FD4;&#x56DE;&#xA0;<em>false</em>&#xFF08;&#x8868;&#x793A;&#x53EF;&#x8F6C;&#x6362;&#x4E3A;&#x5E03;&#x5C14;&#x503C; false &#x7684;&#x503C;&#xFF09;&#x7684;&#x5143;&#x7D20;&#x3002;&#x5982;&#x679C;&#x53D1;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C;<code>every</code> &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x7ACB;&#x5373;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002;&#x5426;&#x5219;&#xFF0C;<code>callback</code> &#x4E3A;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;<code>every</code>&#xA0;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#xA0;<code>true</code>&#x3002;<code>callback</code> &#x53EA;&#x4F1A;&#x4E3A;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;&#x4E0D;&#x4F1A;&#x4E3A;&#x90A3;&#x4E9B;&#x88AB;&#x5220;&#x9664;&#x6216;&#x4ECE;&#x6765;&#x6CA1;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;</p>

<p><code>callback</code> &#x4EE5;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#x8C03;&#x7528;&#xFF1A;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5143;&#x7D20;&#x7D22;&#x5F15;&#xFF0C;&#x4EE5;&#x53CA;&#x8981;&#x904D;&#x5386;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x5982;&#x679C;&#x5C06;<code>thisArg</code>&#x53C2;&#x6570;&#x63D0;&#x4F9B;&#x7ED9;<code>every</code>&#xFF0C;&#x5B83;&#x4F1A;&#x5728;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x9012;&#x7ED9;<code>callback</code>&#xFF0C;&#x4F5C;&#x4E3A;&#x5B83;&#x7684; <code>this</code>&#x503C;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x4F1A;&#x4F20;&#x9012;<code>undefined</code> &#x4F5C;&#x4E3A;&#x5B83;&#x7684;<code>this</code> &#x503C;&#x3002;&#xA0; <code>callback</code>&#x6700;&#x7EC8;&#x89C2;&#x6D4B;&#x5230;&#x7684;<code>this</code>&#x503C;&#x7531; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">&#x7528;&#x4E8E;&#x51B3;&#x5B9A;&#x51FD;&#x6570;&#x53EF;&#x89C1;&#x7684;<code>this</code>&#x503C;&#x7684;&#x4E00;&#x822C;&#x89C4;&#x5219;</a>&#x6765;&#x51B3;&#x5B9A;&#x3002;</p>

<p><code>every</code>&#xA0;&#x4E0D;&#x4FEE;&#x6539;&#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x6D4B;&#x8BD5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x5927;&#x5C0F;">&#x6D4B;&#x8BD5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6240;&#x6709;&#x5143;&#x7D20;&#x7684;&#x5927;&#x5C0F;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x6D4B;&#x8BD5;&#x4E86;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x5927;&#x4E8E; 10&#x3002;</p>

<pre class="brush: js  language-js">function isBigEnough(element, index, array) {
  return element &gt;= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough);   // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true</pre>

<h3 id="&#x4F7F;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;">&#x4F7F;&#x7528;&#x7BAD;&#x5934;&#x51FD;&#x6570;&#x6D4B;&#x8BD5;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">&#x7BAD;&#x5934;&#x51FD;&#x6570;</a>&#x4E3A;&#x76F8;&#x540C;&#x6D4B;&#x8BD5;&#x63D0;&#x4F9B;&#x4E86;&#x66F4;&#x77ED;&#x7684;&#x8BED;&#x6CD5;&#x3002;</p>

<pre class="brush: js">new Uint8Array([12, 5, 8, 130, 44]).every(elem =&gt; elem &gt;= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every(elem =&gt; elem &gt;= 10); // true</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.every" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.every</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.every</small></a></td>
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
   <td>Basic support</td>
   <td>45.0</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>36.0</td>
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
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some" class="new"><code>TypedArray.prototype.some()</code></a></li>
 <li><a title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><code>Array.prototype.every()</code></a></li>
</ul>
                  
                
              