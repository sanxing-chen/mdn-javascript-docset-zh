
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p>&#x9759;&#x6001;&#xA0;<strong><code>String.fromCharCode()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;Unicode&#x503C;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>String.fromCharCode(<em>num1</em>, <em>...</em>, <em>numN</em>) </code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>&#x4E00;&#x7EC4;&#x5E8F;&#x5217;&#x6570;&#x5B57;&#xFF0C;&#x8868;&#x793A; Unicode &#x503C;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#xA0;<code>String</code> &#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x7531;&#x4E8E; <code>fromCharCode</code> &#x662F; <code>String</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>String.fromCharCode()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>String</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_fromCharCode" id="Example:_Using_fromCharCode">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>fromCharCode</code></h3>

<p>&#x4E0B;&#x4F8B;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32; &quot;ABC&quot;&#xFF1A;</p>

<pre class="brush:js">String.fromCharCode(65,66,67)
</pre>

<h2 name="Getting_it_to_work_with_higher_values" id="Getting_it_to_work_with_higher_values">&#x4F5C;&#x7528;&#x4E8E;&#x9AD8;&#x4F4D;&#x7F16;&#x7801;&#xFF08;higher values&#xFF09;</h2>

<p>&#x5C3D;&#x7BA1;&#x7EDD;&#x5927;&#x90E8;&#x5206;&#x5E38;&#x7528;&#x7684; Unicode &#x503C;&#x53EF;&#x4EE5;&#x7528;&#x4E00;&#x4E2A; 16-bit &#x6570;&#x5B57;&#x8868;&#x793A;&#xFF08;&#x6B63;&#x5982; JavaScript &#x6807;&#x51C6;&#x5316;&#x8FC7;&#x7A0B;&#x65E9;&#x671F;&#xFF09;&#xFF0C;&#x5E76;&#x4E14;&#x5BF9;&#x4E8E;&#x7EDD;&#x5927;&#x90E8;&#x5206;&#x503C;&#xA0;<code>fromCharCode()</code>&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#xFF08;&#x5373;&#x5BF9;&#x4E8E;&#x7EDD;&#x5927;&#x90E8;&#x5206;&#x5B57;&#x7B26; UCS-2 &#x503C;&#x662F; UTF-16 &#x7684;&#x5B50;&#x96C6;&#xFF09;&#xFF0C;&#x4F46;&#x662F;&#x4E3A;&#x4E86;&#x5904;&#x7406;&#x6240;&#x6709;&#x7684; Unicode &#x503C;&#xFF08;&#x81F3; 21 bits&#xFF09;&#xFF0C;&#x53EA;&#x7528;&#xA0;<code>fromCharCode()</code> &#x662F;&#x4E0D;&#x8DB3;&#x7684;&#x3002;&#x7531;&#x4E8E;&#x9AD8;&#x4F4D;&#x7F16;&#x7801;&#x5B57;&#x7B26;&#x662F;&#x7528;&#x4E24;&#x4E2A;&#x4F4E;&#x4F4D;&#x7F16;&#x7801;&#xFF08;lower value&#xFF09;&#x8868;&#x793A;&#x5F62;&#x6210;&#x7684;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#xFF0C;&#x56E0;&#x6B64;<a title="String.fromCodePoint()&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a> &#xFF08;ES6 &#x8349;&#x6848;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF09;&#x88AB;&#x7528;&#x6765;&#x8FD4;&#x56DE;&#x8FD9;&#x6837;&#x4E00;&#x5BF9;&#x4F4E;&#x4F4D;&#x7F16;&#x7801;&#xFF0C;&#x4ECE;&#x800C;&#x53EF;&#x4EE5;&#x5B8C;&#x5168;&#x8868;&#x793A;&#x8FD9;&#x4E9B;&#x9AD8;&#x4F4D;&#x7F16;&#x7801;&#x5B57;&#x7B26;&#x3002;</p>

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
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.3.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">StringfromCharCode</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.fromcharcodes" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.fromCharCode</small></a></td>
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
 <li><a title="charCodeAt()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;0&#x5230;65535&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x7D22;&#x5F15;&#x5904;&#x7684;UTF-16&#x4EE3;&#x7801;&#x5355;&#x5143; (&#x5728; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684; UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x5339;&#x914D; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;&#x4F46;&#x5728;&#x2014;&#x2014;&#x4F8B;&#x5982; Unicode &#x7F16;&#x7801;&#x5355;&#x5143; &gt; 0x10000 &#x7684;&#x8FD9;&#x79CD;&#x2014;&#x2014;&#x4E0D;&#x80FD;&#x88AB;&#x4E00;&#x4E2A;&#xA0;UTF-16&#xA0;&#x7F16;&#x7801;&#x5355;&#x5143;&#x5355;&#x72EC;&#x8868;&#x793A;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53EA;&#x80FD;&#x5339;&#x914D; Unicode &#x4EE3;&#x7406;&#x5BF9;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;) &#x3002;&#x5982;&#x679C;&#x4F60;&#x60F3;&#x8981;&#x6574;&#x4E2A;&#x4EE3;&#x7801;&#x70B9;&#x7684;&#x503C;&#xFF0C;&#x4F7F;&#x7528; codePointAt()&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"><code>String.prototype.charCodeAt()</code></a></li>
 <li><a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></li>
 <li><a title="String.fromCodePoint()&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a></li>
 <li><a title="codePointAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;&#x4E00;&#x4E2A;&#xA0;Unicode &#x7F16;&#x7801;&#x70B9;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"><code>String.prototype.codePointAt()</code></a></li>
</ul>
                  
                
              