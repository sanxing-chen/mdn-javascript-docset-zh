
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>getUTCMonth()</code></strong> &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x5B83;&#x662F;&#x4ECE; 0 &#x5F00;&#x59CB;&#x8BA1;&#x6570;&#x7684;&#xFF08;0 &#x4EE3;&#x8868;&#x4E00;&#x5E74;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x6708;&#xFF09;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.getUTCMonth()</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x65E0;&#x3002;</p>

<h3 id="Returns" name="Returns">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>getUTCMonth()</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A; 0 &#x5230; 11 &#x7684;&#x6574;&#x6570;&#xFF0C;&#x5206;&#x522B;&#x5BF9;&#x5E94;&#x4EE5;&#x4E0B;&#x6708;&#x4EFD;&#xFF1A;0 &#x4EE3;&#x8868;&#x4E00;&#x6708;&#xFF0C;1 &#x4EE3;&#x8868;&#x4E8C;&#x6708;&#xFF0C;2 &#x4EE3;&#x8868;&#x4E09;&#x6708;&#xFF0C;&#x4F9D;&#x6B21;&#x7C7B;&#x63A8;&#x3002;</p>

<h2 id="Examples" name="Examples">&#x4F8B;&#x5B50;</h2>

<h3 id="Example:_Using_getUTCMonth" name="Example:_Using_getUTCMonth">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>getUTCMonth()</code> &#x65B9;&#x6CD5;</h3>

<p>&#x4E0B;&#x4F8B;&#x5C06;&#x5F53;&#x524D;&#x65F6;&#x95F4;&#x7684;&#x6708;&#x4EFD;&#x8D4B;&#x503C;&#x7ED9;&#x53D8;&#x91CF; <code>month</code>&#x3002;</p>

<pre class="brush: js">var today = new Date();
var month = today.getUTCMonth();
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
   <td>Initial definition. Implemented in JavaScript 1.3.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.13" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getUTCMonth</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.getutcmonth" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getUTCMonth</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x4E3A;&#x57FA;&#x4E8E;0&#x7684;&#x503C;&#xFF08;0&#x8868;&#x793A;&#x4E00;&#x5E74;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x6708;&#xFF09;&#x3002;"><code>Date.prototype.getMonth()</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCMonth()</code></a></li>
</ul>
                  
                
              