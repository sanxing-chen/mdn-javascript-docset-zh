
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>reverse()</strong></code>&#x65B9;&#x6CD5;&#x539F;&#x5730;&#x7FFB;&#x8F6C;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x53D8;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x53D8;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;"><code>Array.prototype.reverse()</code></a><em>&#x76F8;&#x540C;&#x3002;</em> <em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.reverse();</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x7FFB;&#x8F6C;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.reverse" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.reverse</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.reverse</small></a></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45</td>
   <td>12</td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>32</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" title="reverse()&#xA0;&#x65B9;&#x6CD5;&#x98A0;&#x5012;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4F1A;&#x6210;&#x4E3A;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x4F1A;&#x6210;&#x4E3A;&#x7B2C;&#x4E00;&#x4E2A;&#x3002;"><code>Array.prototype.reverse()</code></a></li>
</ul>
                  
                
              