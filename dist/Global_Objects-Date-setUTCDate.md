
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8981;</h2>

<p><strong><code>setUTCDate()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x662F;&#x6839;&#x636E;&#x5168;&#x7403;&#x65F6;&#x95F4;&#x8BBE;&#x7F6E;&#x7279;&#x5B9A;date&#x5BF9;&#x8C61;&#x7684;&#x65E5;&#x671F;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setUTCDate(<var>dayValue</var>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>dayValue</code></dt>
 <dd>&#x4E00;&#x4E2A;1-31&#x7684;&#x6574;&#x5F62;&#x6570;&#x5B57;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4F60;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x8D85;&#x51FA;&#x4E86;&#x8303;&#x56F4;&#xFF0C;setUTCDate()&#x4F1A;&#x5C1D;&#x8BD5;&#x66F4;&#x65B0;&#x5BF9;&#x5E94;&#x7684;<a title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> &#x4E2D;&#x7684;&#x65E5;&#x671F;&#x4FE1;&#x606F;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x4F7F;&#x7528;&#x4E86;40&#x6765;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x4F46;&#x662F;<a title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> &#x4E2D;&#x5B58;&#x50A8;&#x7684;&#x6708;&#x4EFD;&#x4E3A;6&#x6708;&#xFF0C;&#x90A3;&#x4E48;&#x65E5;&#x671F;&#x5C06;&#x88AB;&#x6539;&#x5199;&#x4E3A;10&#x4E14;&#x6708;&#x4EFD;&#x88AB;&#x589E;&#x5230;7&#x6708;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_setUTCDate" id="Example:_Using_setUTCDate">&#x4F7F;&#x7528;Using <code>setUTCDate()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCDate(20);
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
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition. Implemented in JavaScript 1.3.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.37">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCDate</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcdate">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCDate</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x5185;&#x5BB9;</h2>

<ul>
 <li><a title="getUTCDate() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate"><code>Date.prototype.getUTCDate()</code></a></li>
 <li><a title="setDate() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x6765;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5929;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate"><code>Date.prototype.setDate()</code></a></li>
</ul>
                  
                
              