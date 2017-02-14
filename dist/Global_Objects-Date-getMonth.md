
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x4E3A;&#x57FA;&#x4E8E;0&#x7684;&#x503C;&#xFF08;0&#x8868;&#x793A;&#x4E00;&#x5E74;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x6708;&#xFF09;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox  language-html">dateObj.getMonth()</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x65E0;</p>

<h3 name="Description" id="Description">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><code>getMonth</code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;0 &#x5230; 11&#x7684;&#x6574;&#x6570;&#x503C;&#xFF1A; 0 &#x4EE3;&#x8868;&#x4E00;&#x6708;&#x4EFD;&#xFF0C;1 &#x4EE3;&#x8868;&#x4E8C;&#x6708;&#x5206;&#xFF0C; 2 &#x4EE3;&#x8868;&#x4E09;&#x6708;&#x4EFD;&#xFF0C;&#x4F9D;&#x6B21;&#x7C7B;&#x63A8;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_getMonth" id="Example:_Using_getMonth">&#x4F7F;&#x7528;&#xA0;<code>getMonth()</code></h3>

<p>&#x4E0B;&#x9762;&#x7B2C;&#x4E8C;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x57FA;&#x4E8E;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a>&#xA0;&#x5BF9;&#x8C61; Xmas95 &#x7684;&#x503C;&#xFF0C;&#x628A;11&#x8D4B;&#x503C;&#x7ED9;&#x53D8;&#x91CF; <code>month&#x3002;</code></p>

<pre class="brush:js  language-js">var Xmas95 = new Date(&apos;December 25, 1995 23:15:30&apos;);
var month = Xmas95.getMonth();

console.log(month); // 11</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 1st Edition (ECMA-262)" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" hreflang="en">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.12" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.getMonth</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.getmonth" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.getMonth</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-date.prototype.getmonth" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Date.prototype.getMonth</small></a></td>
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

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="getUTCMonth() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x5B83;&#x662F;&#x4ECE; 0 &#x5F00;&#x59CB;&#x8BA1;&#x6570;&#x7684;&#xFF08;0 &#x4EE3;&#x8868;&#x4E00;&#x5E74;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x6708;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth"><code>Date.prototype.getUTCMonth()</code></a></li>
 <li><a title="setMonth() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6708;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth"><code>Date.prototype.setMonth()</code></a></li>
</ul>
                  
                
              