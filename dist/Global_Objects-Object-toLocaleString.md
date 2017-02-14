
                
                  
                    <div>
 <section id="Quick_Links" class="Quick_links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>toLocaleString()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#x88AB;&#x672C;&#x5730;&#x5316;&#x76F8;&#x5173;&#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><var>obj</var>.toLocaleString();</code></pre>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p><code>Object</code>&apos;s <code>toLocaleString</code> &#x8FD4;&#x56DE;&#x8C03;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>toString()</code></a> &#x65B9;&#x6CD5;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>
<p>&#x8BE5;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x7684;&#xA0;<code>toLocaleString</code> &#x65B9;&#x6CD5;&#xFF0C;&#x5373;&#x4F7F;&#x4E0D;&#x5927;&#x53EF;&#x80FD;&#x88AB;&#x7528;&#x5230;&#x3002;&#x89C1;&#x4E0B;&#x9762;&#x5217;&#x8868;&#xFF1A;</p>
<h3 id="&#x8986;&#x76D6;&#x4E86;_toLocaleString()_&#x65B9;&#x6CD5;&#x7684;&#x5BF9;&#x8C61;">&#x8986;&#x76D6;&#x4E86; toLocaleString() &#x65B9;&#x6CD5;&#x7684;&#x5BF9;&#x8C61;</h3>
<ul>
 <li><code>Array</code>: <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="toLocaleString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C06;&#x4F7F;&#x7528;&#x5404;&#x81EA;&#x7684;&#xA0;toLocaleString &#x65B9;&#x6CD5;&#x8F6C;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x9017;&#x53F7; &quot;,&quot;&#xFF09;&#x9694;&#x5F00;&#x3002;"><code>Array.prototype.toLocaleString()</code></a></li>
 <li><code>Number</code>: <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" title="The toLocaleString() method returns a string with a language sensitive representation of this number."><code>Number.prototype.toLocaleString()</code></a></li>
 <li><code>Date</code>: <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString" title="The toLocaleString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;"><code>Date.prototype.toLocaleString()</code></a></li>
</ul>
<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.3" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tolocalestring" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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
<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a></li>
</ul>
                  
                
              