
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>toTimeString()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x683C;&#x5F0F;&#x5316;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>dateObj</var>.toTimeString()</pre>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><a title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> &#x5BF9;&#x8C61;&#x7684;&#x5B9E;&#x4F8B;&#x5F15;&#x7528;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x7684;&#x65F6;&#x95F4;&#x70B9;&#x3002; &#x8C03;&#x7528; <a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x8BE5;Date&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString"><code>toString</code></a> &#x65B9;&#x6CD5;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x548C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#x5F62;&#x5F0F;&#xFF0C;&#x8FD4;&#x56DE;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5728;&#xA0;<a title="SpiderMonkey" href="/en-US/docs/SpiderMonkey">SpiderMonkey</a>&#xA0;&#x91CC;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7531;&#x65E5;&#x671F;&#x90E8;&#x5206;&#xFF08;&#x5E74;&#x6708;&#x65E5;&#xFF09;&#x548C;&#x5176;&#x540E;&#x7684;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#xFF08;&#x65F6;&#x5206;&#x79D2;&#x548C;&#x65F6;&#x533A;&#xFF09;&#x7EC4;&#x6210;&#x3002;&#x6709;&#x65F6;&#x4F1A;&#x9700;&#x8981;&#x83B7;&#x53D6;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD9;&#x53EF;&#x4EE5;&#x7531;&#xA0;<code>toTimeString</code> &#x65B9;&#x6CD5;&#x5B8C;&#x6210;&#x3002;</p>

<p>The&#xA0;<code style="font-style: normal;">toTimeString</code>&#xA0;method is especially useful because compliant engines implementing&#xA0;<a title="ECMAScript" href="https://developer.mozilla.org/en-US/docs/ECMAScript">ECMA-262</a>&#xA0;may differ in the string obtained from&#xA0;<code style="font-style: normal;">toString</code>&#xA0;for&#xA0;<code style="font-style: normal;">Date</code>&#xA0;objects, as the format is implementation-dependent; simple string slicing approaches may not produce consistent results across multiple engines.</p>

<h2 name="Example" id="Example">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_A_basic_usage_of_toTimeString" id="Example:_A_basic_usage_of_toTimeString">&#x4F8B;&#x5B50;&#xFF1A;<code>toTimeString</code> &#x65B9;&#x6CD5;&#x7684;&#x7B80;&#x5355;&#x4F7F;&#x7528;</h3>

<pre class="brush:js">var d = new Date(1993, 6, 28, 14, 39, 7);

println(d.toString());     // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
println(d.toTimeString()); // prints 14:39:07 GMT-0600 (PDT)
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
   <td>ECMAScript 3rd Edition</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.4" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.toTimeString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.totimestring" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.toTimeString</small></a></td>
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
 <li><a title="The toLocaleTimeString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
 <li><a title="toDateString()&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x548C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString"><code>Date.prototype.toDateString()</code></a></li>
 <li><a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x8BE5;Date&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString"><code>Date.prototype.toString()</code></a></li>
</ul>
                  
                
              