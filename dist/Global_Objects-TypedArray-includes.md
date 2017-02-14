
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>includes()</strong></code>&#x65B9;&#x6CD5;&#x5224;&#x65AD;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x662F;&#x5426;&#x542B;&#x6709;&#x7279;&#x5B9A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x76F8;&#x5E94;&#x8FD4;&#x56DE;<code>true</code> &#x6216;&#x8005;<code>false</code> &#xFF0C;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C;<a title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"><code>Array.prototype.includes()</code></a><em>&#x76F8;&#x540C;&#x3002;</em> <em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>typedarray</var>.includes(<var>searchElement</var>[, <var>fromIndex</var>]);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>&#x8981;&#x641C;&#x7D22;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><code>fromIndex</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5728;&#x8FD9;&#x91CC;&#x5F00;&#x59CB;&#x641C;&#x7D22; <code>searchElement</code>&#xFF1B;&#x9ED8;&#x8BA4;&#x4E3A; 0&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1,2,3]);
uint8.includes(2);     // true
uint8.includes(4);     // false
uint8.includes(3, 3);  // false

// NaN &#x7684;&#x5904;&#x7406; &#xFF08;&#x4EC5;&#x4EC5;&#x5BF9; Float32 &#x548C; Float64 &#x4E3A; true&#xFF09;
new Uint8Array([NaN]).includes(NaN); // false, &#x56E0;&#x4E3A; NaN &#x4F20;&#x9012;&#x7ED9;&#x6784;&#x9020;&#x5668;&#x65F6;&#x8F6C;&#x6362;&#x4E3A; 0
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/2016/#sec-%typedarray%.prototype.includes" class="external">ECMAScript 2016 (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.includes</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.includes</small></a></td>
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
   <th>Edge</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>47</td>
   <td>43</td>
   <td>14</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34</td>
   <td>10</td>
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
   <td>47</td>
   <td>43</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>34</td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"><code>Array.prototype.includes()</code></a></li>
 <li><a title="includes() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5305;&#x542B;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF0C;&#x6839;&#x636E;&#x60C5;&#x51B5;&#x8FD4;&#x56DE;true&#x6216;false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes"><code>String.prototype.includes()</code></a></li>
 <li><a title="indexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002; &#x65B9;&#x6CD5;&#x5177;&#x6709;&#x4E0E; Array.prototype.indexOf() &#x76F8;&#x540C;&#x7684;&#x7B97;&#x6CD5;&#x3002; TypedArray&#x662F;&#x8FD9;&#x91CC;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf"><code>TypedArray.prototype.indexOf()</code></a></li>
</ul>
                  
                
              