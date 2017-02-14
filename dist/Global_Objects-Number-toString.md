
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<p><strong><code>toString()</code></strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A; <a title="JavaScript &#x7684; Number&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;Number &#x5BF9;&#x8C61;&#x7531;&#xA0;Number() &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><code><var>numObj</var>.toString([<var>radix</var>])</code></pre>

<h3 name="Parameter" id="Parameter">&#x53C2;&#x6570;</h3>

<dl>
 <dt>radix</dt>
 <dd>&#x6307;&#x5B9A;&#x8981;&#x7528;&#x4E8E;&#x6570;&#x5B57;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x8F6C;&#x6362;&#x7684;&#x57FA;&#x6570;(&#x4ECE;2&#x5230;36)&#x3002;&#x5982;&#x679C;&#x672A;&#x6307;&#x5B9A; <samp>radix</samp> &#x53C2;&#x6570;&#xFF0C;&#x5219;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A; 10&#x3002;</dd>
</dl>

<h3 id="&#x5F02;&#x5E38;&#x4FE1;&#x606F;">&#x5F02;&#x5E38;&#x4FE1;&#x606F;</h3>

<dl>
 <dt><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></dt>
 <dd>
 <p>&#x5982;&#x679C;&#xA0;<code>toString()</code>&#xA0;&#x7684; radix &#x53C2;&#x6570;&#x4E0D;&#x5728; 2 &#x5230; 36 &#x4E4B;&#x95F4;&#xFF0C;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a>&#x3002;</p>
 </dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><a title="JavaScript &#x7684; Number&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;Number &#x5BF9;&#x8C61;&#x7531;&#xA0;Number() &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>&#xA0;&#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x4E86;&#xA0;<a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#xA0;&#x5BF9;&#x8C61;&#x4E0A;&#x7684;&#xA0;<code>toString()</code>&#xA0;&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x4E0D;&#x662F;&#x7EE7;&#x627F;&#x7684;&#xA0;<a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString()</code></a>&#x3002;&#x5BF9;&#x4E8E; <a title="JavaScript &#x7684; Number&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;Number &#x5BF9;&#x8C61;&#x7531;&#xA0;Number() &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;<code>toString()</code> &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x5B9A;&#x7684;&#x57FA;&#x6570;&#x8FD4;&#x56DE;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;</p>

<p>&#x5982;&#x679C;&#x8F6C;&#x6362;&#x7684;&#x57FA;&#x6570;&#x5927;&#x4E8E;10&#xFF0C;&#x5219;&#x4F1A;&#x4F7F;&#x7528;&#x5B57;&#x6BCD;&#x6765;&#x8868;&#x793A;&#x5927;&#x4E8E;9&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x6BD4;&#x5982;&#x57FA;&#x6570;&#x4E3A;16&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x5219;&#x4F7F;&#x7528;a&#x5230;f&#x7684;&#x5B57;&#x6BCD;&#x6765;&#x8868;&#x793A;10&#x5230;15&#x3002;</p>

<p>&#x5982;&#x679C;&#x57FA;&#x6570;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#xFF0C;&#x5219;&#x4F7F;&#x7528; 10&#x3002;</p>

<p>&#x5982;&#x679C;&#x5BF9;&#x8C61;&#x662F;&#x8D1F;&#x6570;&#xFF0C;&#x5219;&#x4F1A;&#x4FDD;&#x7559;&#x8D1F;&#x53F7;&#x3002;&#x5373;&#x4F7F;radix&#x662F;2&#x65F6;&#x4E5F;&#x662F;&#x5982;&#x6B64;&#xFF1A;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x8D1F;&#x53F7;&#xFF08;-&#xFF09;&#x524D;&#x7F00;&#x548C;&#x6B63;&#x6570;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#xFF0C;<strong>&#x4E0D;&#x662F;</strong>&#xA0;&#x6570;&#x503C;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8865;&#x7801;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<pre class="brush:js">var count = 10;

print( count.toString() );   // &#x8F93;&#x51FA; &quot;10&quot;
print( (17).toString() );    // &#x8F93;&#x51FA; &quot;17&quot;

var x = 6;

print( x.toString(2) );      // &#x8F93;&#x51FA; &quot;110&quot;
print( (254).toString(16) ); // &#x8F93;&#x51FA; &quot;fe&quot;


print( (-10).toString(2) ); // &#x8F93;&#x51FA; &quot;-1010&quot;
print( (-0xff).toString() ); // &#x8F93;&#x51FA; &quot;-11111111&quot;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a title="ECMAScript 1st Edition (ECMA-262)" hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.7.4.2">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Number.prototype.tostring</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-number.prototype.tostring">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Number.prototype.tostring</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="toFixed() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x5B9A;&#x70B9;&#x8868;&#x793A;&#x6CD5;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x4E00;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"><code>Number.prototype.toFixed()</code></a></li>
 <li><a title="toExponential() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x6570;&#x8868;&#x793A;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential"><code>Number.prototype.toExponential()</code></a></li>
 <li><a title="toPrecision() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x5B9A;&#x7684;&#x7CBE;&#x5EA6;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"><code>Number.prototype.toPrecision()</code></a></li>
</ul>
                  
                
              