
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>slice()</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684; <code>ArrayBuffer</code> &#xFF0C;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x662F;&#x8FD9;&#x4E2A;<code>ArrayBuffer&#x7684;</code>&#x5B57;&#x8282;&#x526F;&#x672C;&#xFF0C;&#x4ECE;begin&#xFF08;&#x5305;&#x62EC;&#xFF09;&#xFF0C;&#x5230;end&#xFF08;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">arraybuffer.slice(begin[, end])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>begin</code></dt>
 <dd>&#x4ECE;&#x96F6;&#x5F00;&#x59CB;&#x7684;&#x5B57;&#x8282;&#x7D22;&#x5F15;&#xFF0C;&#x5207;&#x7247;&#x4ECE;&#x8FD9;&#x5F00;&#x59CB;&#x3002;</dd>
</dl>

<dl>
 <dt><code>end</code></dt>
 <dd>&#x7ED3;&#x675F;&#x5207;&#x7247;&#x7684;&#x5B57;&#x8282;&#x7D22;&#x5F15;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6307;&#x5B9A;end&#xFF0C;&#x65B0;&#x7684; <code>ArrayBuffer</code> &#x5C06;&#x5305;&#x542B;&#x8FD9;&#x4E2A; <code>ArrayBuffer</code> &#x4ECE;&#x5934;&#x5230;&#x5C3E;&#x7684;&#x6240;&#x6709;&#x5B57;&#x8282;&#x3002;&#x7531;begin&#x548C;end&#x6307;&#x5B9A;&#x7684;&#x8FD9;&#x4E2A;&#x8303;&#x56F4;&#x5939;&#x5728;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x7684;&#x6709;&#x6548;&#x7D22;&#x5F15;&#x8303;&#x56F4;&#x5185;&#x3002;&#x5982;&#x679C;&#x65B0;<code>ArrayBuffer</code>&#x7684;&#x957F;&#x5EA6;&#x5728;&#x8BA1;&#x7B97;&#x540E;&#x4E3A;&#x8D1F;&#xFF0C;&#x5B83;&#x5C06;&#x5F3A;&#x5236;&#x4E3A;0 &#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#xA0;&#x4E00;&#x4E2A;&#x65B0;&#x7684; <code>ArrayBuffer</code> &#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>slice</code> &#x65B9;&#x6CD5;&#x590D;&#x5236;&#x5230;&#x4F46;&#x4E0D;&#x5305;&#x62EC;&#x7531;end&#x53C2;&#x6570;&#x6307;&#x793A;&#x7684;&#x5B57;&#x8282;&#x3002;&#x5982;&#x679C;begin&#x6216;end&#x662F;&#x8D1F;&#x6570;&#xFF0C;&#x5219;&#x6307;&#x7684;&#x662F;&#x4ECE;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4ECE;&#x5934;&#x5F00;&#x59CB;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x590D;&#x5236;&#x4E00;&#x4E2A;_ArrayBuffer">&#x590D;&#x5236;&#x4E00;&#x4E2A; <code>ArrayBuffer</code></h3>

<pre class="brush: js">var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
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
   <td><a lang="en" hreflang="en" class="external" href="https://www.khronos.org/registry/typedarray/specs/latest/" title="Typed Array Specification">Typed Array Specification</a></td>
   <td><span class="spec-Obsolete">Obsolete</span></td>
   <td>Superseded by EMCAScript 6.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer.prototype.slice" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">ArrayBuffer.prototype.slice</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">ArrayBuffer.prototype.slice</small></a></td>
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
   <td><a title="Released on 2012-04-24." href="/en-US/Firefox/Releases/12">12</a> (12)</td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>6</td>
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
   <td>12.0 (12)</td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>6.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
</ul>
                  
                
              