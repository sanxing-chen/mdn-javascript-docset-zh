
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>setDate()</strong></code> &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x6765;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5929;&#x6570;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code><var>dateObj</var>.setDate(<em>dayValue</em>)</code></pre>
<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>dayValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x8BE5;&#x6708;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;</dd>
</dl>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5982;&#x679C; <code>dayValue</code>&#xA0;&#x8D85;&#x51FA;&#x4E86;&#x6708;&#x4EFD;&#x7684;&#x5408;&#x7406;&#x8303;&#x56F4;&#xFF0C;<code>setDate</code>&#xA0;&#x5C06;&#x4F1A;&#x76F8;&#x5E94;&#x5730;&#x66F4;&#x65B0;&#xA0;<code>Date</code> &#x5BF9;&#x8C61;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4E3A;&#xA0;<code>dayValue</code> &#x6307;&#x5B9A;0&#xFF0C;&#x90A3;&#x4E48;&#x65E5;&#x671F;&#x5C31;&#x4F1A;&#x88AB;&#x8BBE;&#x7F6E;&#x4E3A;&#x4E0A;&#x4E2A;&#x6708;&#x7684;&#x6700;&#x540E;&#x4E00;&#x5929;&#x3002;</p>
<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>
<h3 name="Example:_Using_setDate" id="Example:_Using_setDate">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>setDate</code>&#x65B9;&#x6CD5;</h3>
<pre class="brush:js">var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);&#xA0; // 1962-08-01</pre>
<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.36" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setDate</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setdate" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setDate</small></a></td>
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
<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a title="&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate"><code>Date.prototype.getDate()</code></a></li>
 <li><a title="setUTCDate()&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x662F;&#x6839;&#x636E;&#x5168;&#x7403;&#x65F6;&#x95F4;&#x8BBE;&#x7F6E;&#x7279;&#x5B9A;date&#x5BF9;&#x8C61;&#x7684;&#x65E5;&#x671F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate"><code>Date.prototype.setUTCDate()</code></a></li>
</ul>
                  
                
              