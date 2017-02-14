
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>concat()</code></strong> &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x5408;&#x5E76;&#xFF0C;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><code><var>str</var>.concat(<var>string2</var>,&#xA0;<var>string3</var>[, ...,&#xA0;<var>stringN</var>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>string2...string<em>N</em></code></dt>
 <dd>&#x548C;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x7684;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>concat</code> &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x5408;&#x5E76;&#xFF0C;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5E76;&#x8FD4;&#x56DE;&#x3002;&#xA0;<code>concat</code> &#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x5F71;&#x54CD;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Examples" id="Examples">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528; <code>concat</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x5C06;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x5408;&#x5E76;&#x4E3A;&#x4E00;&#x4E2A;&#x65B0;&#x5B57;&#x7B26;&#x4E32;</p>

<pre class="brush: js">var hello = &quot;Hello, &quot;;
console.log(hello.concat(&quot;Kevin&quot;, &quot; have a nice day.&quot;)); /* Hello, Kevin have a nice day. */
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6027;&#x80FD;">&#x6027;&#x80FD;</h2>

<p>&#x5F3A;&#x70C8;&#x5EFA;&#x8BAE;&#x4F7F;&#x7528;&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">&#x8D4B;&#x503C;&#x64CD;&#x4F5C;&#x7B26;</a>&#xFF08;+, +=&#xFF09;&#x4EE3;&#x66FF;&#xA0;<code>concat</code>&#xA0;&#x65B9;&#x6CD5;&#x3002;&#x53C2;&#x770B;&#xA0;<a href="http://jsperf.com/concat-vs-plus-vs-join" class="external">&#x6027;&#x80FD;&#x6D4B;&#x8BD5;&#xFF08;perfomance test&#xFF09;</a>&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 3rd Edition (ECMA-262)" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" hreflang="en">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.concat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.concat" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.concat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4F20;&#x5165;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;,&#x7EC4;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x5E76;&#x8FD4;&#x56DE;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><code>Array.prototype.concat()</code></a></li>
 <li><a title="&#x8D4B;&#x503C;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;assignment operator&#xFF09;&#x57FA;&#x4E8E;&#x53F3;&#x503C;&#xFF08;right operand&#xFF09;&#x7684;&#x503C;&#xFF0C;&#x7ED9;&#x5DE6;&#x503C;&#xFF08;left operand&#xFF09;&#x8D4B;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Assignment operators</a></li>
</ul>
                  
                
              