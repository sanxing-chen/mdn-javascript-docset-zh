
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>getUTCFullYear()</code></strong> &#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.getUTCFullYear()</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x65E0;&#x3002;</p>

<h3 id="Returns" name="Returns">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>getUTCFullYear()</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7EDD;&#x5BF9;&#x6570;&#x503C;&#xFF0C;&#x7B26;&#x5408; Year-2000 &#x6807;&#x51C6;&#xFF0C;&#x4F8B;&#x5982; 1995&#x3002;</p>

<h2 id="Examples" name="Examples">&#x4F8B;&#x5B50;</h2>

<h3 id="Example:_Using_getUTCFullYear" name="Example:_Using_getUTCFullYear">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>getUTCFullYear()</code> &#x65B9;&#x6CD5;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x662F;&#x628A;&#x5F53;&#x524D;&#x5E74;&#x4EFD;&#x7684;&#x56DB;&#x4F4D;&#x6570;&#x503C;&#x590D;&#x5236;&#x7ED9;&#x53D8;&#x91CF; <code>year</code>&#x3002;</p>

<pre class="brush: js">var today = new Date();
var year = today.getUTCFullYear();
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
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.11" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getUTCFullYear</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td> </td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.getutcfullyear" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getUTCFullYear</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td> </td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.getFullYear()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" title="setFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;"><code>Date.prototype.setFullYear()</code></a></li>
</ul>
                  
                
              