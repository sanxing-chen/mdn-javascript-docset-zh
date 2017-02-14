
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>message</strong></code> &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;</p>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x8BE5;&#x5C5E;&#x6027;&#x5DF2;&#x7ECF;&#x88AB;&#x8BBE;&#x7F6E;&#xFF0C;&#x5219;&#x8BE5;&#x5C5E;&#x6027;&#x5305;&#x542B;&#x4E86;&#x9519;&#x8BEF;&#x7684;&#x4E00;&#x4E2A;&#x7B80;&#x77ED;&#x63CF;&#x8FF0;&#x3002;<a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> &#x5927;&#x91CF;&#x5E94;&#x7528;&#xA0;<code>message</code> &#x5C5E;&#x6027;&#x5728;&#x5F02;&#x5E38;&#x65B9;&#x9762;&#x3002; <code>message</code> &#x5C5E;&#x6027;&#x7ED3;&#x5408; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name" title="name&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;."><code>name</code></a> &#x5C5E;&#x6027;&#x4E00;&#x8D77;&#x88AB; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#xFF08;Error object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;"><code>Error.prototype.toString()</code></a> &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x9519;&#x8BEF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;</p>

<p>&#x9ED8;&#x8BA4;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;<code>message</code> &#x5C5E;&#x6027;&#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F46;&#x662F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x6307;&#x5B9A;&#x4E00;&#x6BB5;&#x4FE1;&#x606F;&#x4F5C;&#x4E3A; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error constructor</code></a> &#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5B9E;&#x4F8B;&#x6765;&#x6539;&#x53D8;&#x8BE5;&#x5C5E;&#x6027;&#x503C;&#x3002;</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Throwing_a_custom_error" name="Example:_Throwing_a_custom_error">&#x4F8B;&#x5B50;&#xFF1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x9519;&#x8BEF;</h3>

<pre class="brush: js">var e = new Error(&quot;Could not parse input&quot;); // e.message is &quot;Could not parse input&quot;
throw e;
</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.4.3" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Error.prototype.message</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-error.prototype.message" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Error.prototype.message</small></a></td>
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

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name" title="name&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;."><code>Error.prototype.name</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#xFF08;Error object&#xFF09;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;"><code>Error.prototype.toString()</code></a></li>
</ul>
                  
                
              