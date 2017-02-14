
                
                  
                    <div>&#xA0;</div>

<p><strong><code>setUTCFullYear()</code></strong> &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setUTCFullYear(<var>yearValue</var>[, <var>monthValue</var>[, <var>dayValue</var>]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>yearValue</code></dt>
 <dd>&#x6307;&#x5B9A;&#x5E74;&#x4EFD;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x4F8B;&#x5982;&#xFF0C;1995</dd>
 <dt><code>monthValue</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;0-11&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x4EE3;&#x8868;&#x4ECE;&#x4E00;&#x6708;&#x5230;&#x5341;&#x4E8C;&#x6708;&#x3002;</dd>
 <dt><code>dayValue</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;1-31&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x4EE3;&#x8868;&#x6708;&#x4EFD;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;&#x5982;&#x679C;&#x4F60;&#x6307;&#x5B9A;&#x4E86;dayValue&#x53C2;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x4F60;&#x5FC5;&#x987B;&#x6307;&#x5B9A;monthValue&#x53C2;&#x6570;&#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4F60;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x5177;&#x4F53;&#x7684;<code>monthValue&#x548C;dayValue&#xFF0C;</code>&#x5C06;&#x4F1A;&#x4F7F;&#x7528;&#xA0;<code>getUTCMonth</code>&#xA0;&#x548C;<code>getUTCDate</code>&#xA0;&#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4F60;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x8D85;&#x51FA;&#x4E86;&#x671F;&#x5F85;&#x8303;&#x56F4;&#xFF0C;<code>setUTCFullYear()&#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x6839;&#x636E;Date&#x5BF9;&#x8C61;&#xFF0C;&#x66F4;&#x65B0;&#x5176;&#x4ED6;&#x53C2;&#x6570;&#x548C;&#x65E5;&#x671F;&#x4FE1;&#x606F;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x5C06;monthValue&#x8BBE;&#x5B9A;&#x4E3A;15&#xFF0C;&#x5E74;&#x4EFD;&#x4F1A;&#x589E;&#x52A0;1&#xFF0C;&#x6708;&#x4EFD;&#x503C;&#x5219;&#x4E3A;&#x4E3A;3&#x3002;</code></p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_setUTCFullYear()">&#x4F7F;&#x7528; <code>setUTCFullYear()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
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
   <td><a lang="en" title="ECMAScript 1st Edition (ECMA-262)" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" hreflang="en">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002; &#x5728; JavaScript 1.3&#x5B9E;&#x65BD;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.41" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCFullYear</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcfullyear" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCFullYear</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-date.prototype.setutcfullyear" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCFullYear</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div>&#xA0;</div>

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

<p>&#xA0;</p>

<p><span style="font-size: 30.002px; letter-spacing: -1px; line-height: 30.002px;"><strong>&#x76F8;&#x5173;&#x8FDE;&#x63A5;</strong></span></p>

<ul>
 <li><a title="getUTCFullYear() &#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear"><code>Date.prototype.getUTCFullYear()</code></a></li>
 <li><a title="setFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear"><code>Date.prototype.setFullYear()</code></a></li>
</ul>
                  
                
              