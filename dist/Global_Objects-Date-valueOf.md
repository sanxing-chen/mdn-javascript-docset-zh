
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>valueOf()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Date"><code>Date</code></a> &#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.valueOf()</code></pre>

<h3 name="Parameters" id="Parameters">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4ECE;1970&#x5E74;1&#x6708;1&#x65E5;0&#x65F6;0&#x5206;0&#x79D2;&#xFF08;UTC&#xFF0C;&#x5373;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#x5230;&#x8BE5;&#x65E5;&#x671F;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>valueOf</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4EE5;&#x6570;&#x503C;&#x683C;&#x5F0F;&#x8868;&#x793A;&#x7684;&#x4E00;&#x4E2A;&#xA0;<code>Date</code> &#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF0C;&#x4ECE;1970&#x5E74;1&#x6708;1&#x65E5;0&#x65F6;0&#x5206;0&#x79D2;&#xFF08;UTC&#xFF0C;&#x5373;&#x534F;&#x8C03;&#x4E16;&#x754C;&#x65F6;&#xFF09;&#x5230;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x6240;&#x4EE3;&#x8868;&#x65F6;&#x95F4;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;</p>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x529F;&#x80FD;&#x548C; <a title="getTime() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x7684;&#x683C;&#x6797;&#x5A01;&#x6CBB;&#x65F6;&#x95F4;&#x6570;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"><code>Date.prototype.getTime()</code></a> &#x65B9;&#x6CD5;&#x4E00;&#x6837;&#x3002;</p>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x901A;&#x5E38;&#x5728; JavaScript &#x5185;&#x90E8;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5728;&#x4EE3;&#x7801;&#x4E2D;&#x663E;&#x5F0F;&#x8C03;&#x7528;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_valueOf" id="Example:_Using_valueOf">&#x4F7F;&#x7528;&#xA0;<code>valueOf()</code></h3>

<pre class="brush:js">var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // assigns -424713600000 to myVar
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.8" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.valueOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.valueof" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.valueOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-date.prototype.valueof" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Date.prototype.valueOf</small></a></td>
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

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x539F;&#x59CB;&#x503C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>Object.prototype.valueOf()</code></a></li>
 <li><a title="getTime() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65F6;&#x95F4;&#x7684;&#x683C;&#x6797;&#x5A01;&#x6CBB;&#x65F6;&#x95F4;&#x6570;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"><code>Date.prototype.getTime()</code></a></li>
</ul>
                  
                
              