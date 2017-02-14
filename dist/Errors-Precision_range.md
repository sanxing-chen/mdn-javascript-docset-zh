
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<pre class="syntaxbox">RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;</h2>

<p>&#x4EE5;&#x4E0B;&#x7684;&#x67D0;&#x4E2A;&#x65B9;&#x6CD5;&#x4F20;&#x5165;&#x4E86;&#x4E00;&#x4E2A;&#x8D85;&#x51FA;&#x7CBE;&#x5EA6;&#x8303;&#x56F4;&#x7684;&#x53C2;&#x6570;&#xFF1A;</p>

<ul>
 <li><a title="toExponential() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x6570;&#x8868;&#x793A;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential"><code>Number.prototype.toExponential()</code></a></li>
 <li><a title="toFixed() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x5B9A;&#x70B9;&#x8868;&#x793A;&#x6CD5;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x4E00;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"><code>Number.prototype.toFixed()</code></a></li>
 <li><a title="toPrecision() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x5B9A;&#x7684;&#x7CBE;&#x5EA6;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"><code>Number.prototype.toPrecision()</code></a></li>
</ul>

<p>&#x901A;&#x5E38;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x7684;&#x53C2;&#x6570;&#x8303;&#x56F4;&#x4ECB;&#x4E8E;0&#x548C;20&#xFF08;&#x6216;21&#xFF09;&#x4E4B;&#x95F4;&#x3002;&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;ECMAScript&#x6807;&#x51C6;&#x662F;&#x5141;&#x8BB8;&#x6269;&#x5C55;&#x8FD9;&#x4E2A;&#x8303;&#x56F4;&#x7684;&#x3002;</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">Firefox (SpiderMonkey)</th>
   <th scope="col">Chrome, Opera (V8)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a title="toExponential() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x6570;&#x8868;&#x793A;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential"><code>Number.prototype.toExponential()</code></a></td>
   <td>0 to 100</td>
   <td>0 to 20</td>
  </tr>
  <tr>
   <td><a title="toFixed() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x5B9A;&#x70B9;&#x8868;&#x793A;&#x6CD5;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x4E00;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"><code>Number.prototype.toFixed()</code></a></td>
   <td>-20 to 100</td>
   <td>0 to 20</td>
  </tr>
  <tr>
   <td><a title="toPrecision() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x5B9A;&#x7684;&#x7CBE;&#x5EA6;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"><code>Number.prototype.toPrecision()</code></a></td>
   <td>1 to 100</td>
   <td>1 to 21</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x9519;&#x8BEF;&#x7684;&#x793A;&#x4F8B;">&#x9519;&#x8BEF;&#x7684;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-bad">77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError 
2.34.toFixed(1001);         // RangeError 

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
</pre>

<h3 id="&#x6B63;&#x786E;&#x7684;&#x793A;&#x4F8B;">&#x6B63;&#x786E;&#x7684;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-good">77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a title="toExponential() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x6570;&#x8868;&#x793A;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential"><code>Number.prototype.toExponential()</code></a></li>
 <li><a title="toFixed() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x5B9A;&#x70B9;&#x8868;&#x793A;&#x6CD5;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x4E00;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"><code>Number.prototype.toFixed()</code></a></li>
 <li><a title="toPrecision() &#x65B9;&#x6CD5;&#x4EE5;&#x6307;&#x5B9A;&#x7684;&#x7CBE;&#x5EA6;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x503C;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"><code>Number.prototype.toPrecision()</code></a></li>
</ul>
                  
                
              