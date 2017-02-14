
                
                  
                    <div>
 <section id="Quick_Links" class="Quick_links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>setMinutes()</strong></code> &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5206;&#x949F;&#x6570;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><var>dateObj</var>.setMinutes(<em>minutesValue</em>[, <em>secondsValue</em>[, <em>msValue</em>]])</pre>
<h3 name="Versions_prior_to_JavaScript_1.3" id="Versions_prior_to_JavaScript_1.3">&#xA0;JavaScript 1.3&#x4E4B;&#x524D;&#x7248;&#x672C;</h3>
<pre class="syntaxbox"><var>dateObj</var>.setMinutes(<em>minutesValue</em>)</pre>
<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>minutesValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A; 0 &#x5230; 59 &#x7684;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x5206;&#x949F;&#x6570;&#x3002;</dd>
</dl>
<dl>
 <dt>
  <code>secondsValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A; 0 &#x5230; 59 &#x7684;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x79D2;&#x6570;&#x3002;&#x5982;&#x679C;&#x6307;&#x5B9A;&#x4E86;&#xA0;<code>secondsValue</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x5FC5;&#x987B;&#x540C;&#x65F6;&#x6307;&#x5B9A;&#xA0;<code>minutesValue</code>&#xA0;&#x53C2;&#x6570;&#x3002;</dd>
</dl>
<dl>
 <dt>
  <code>msValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A; 0 &#x5230; 999 &#x7684;&#x6570;&#x5B57;&#xFF0C;&#x8868;&#x793A;&#x5FAE;&#x79D2;&#x6570;&#xFF0C;&#x5982;&#x679C;&#x6307;&#x5B9A;&#x4E86;&#xA0;<code>msValue</code> &#x53C2;&#x6570;&#xFF0C;&#x5219;&#x5FC5;&#x987B;&#x540C;&#x65F6;&#x6307;&#x5B9A;&#xA0;<code>minutesValue</code> &#x548C;<code>secondsValue</code>&#xA0;&#x53C2;&#x6570;&#x3002;</dd>
</dl>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#xA0;<code>secondsValue</code> &#x548C; <code>msValue</code> &#x53C2;&#x6570;&#xFF0C;&#x5C31;&#x4F1A;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds" title="getSeconds() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x79D2;&#x6570;&#x3002;"><code>getSeconds()</code></a> &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds" title="getMilliseconds() &#x65B9;&#x6CD5;&#xFF0C;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;"><code>getmilliseconds()</code></a> &#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x8D85;&#x51FA;&#x4E86;&#x5408;&#x7406;&#x8303;&#x56F4;&#xFF0C;<code>setMinutes</code>&#xA0;&#x4F1A;&#x76F8;&#x5E94;&#x5730;&#x66F4;&#x65B0;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x65F6;&#x95F4;&#x4FE1;&#x606F;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E3A;&#xA0;<code>secondsValue</code>&#xA0;&#x6307;&#x5B9A; 100&#xFF0C;&#x5206;&#x949F;&#x6570;&#x5C06;&#x4F1A;&#x52A0; 1&#xFF0C;&#x800C;&#x79D2;&#x6570;&#x4F1A;&#x4E3A; 40&#x3002;</p>
<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>
<h3 name="Example:_Using_setMinutes" id="Example:_Using_setMinutes">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>setMinutes&#x65B9;&#x6CD5;</code></h3>
<pre class="brush: js">var theBigDay = new Date();
theBigDay.setMinutes(45);
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
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.32" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setMinutes</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setminutes" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setMinutes</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes" title="getMinutes() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5206;&#x949F;&#x6570;&#x3002;"><code>Date.prototype.getMinutes()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Date.prototype.setUTCMinutes()</code></a></li>
</ul>
                  
                
              