
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>setUTCMonth()&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x901A;&#x7528;&#x7684;&#x65F6;&#x95F4;&#x6765;&#x8BBE;&#x7F6E;&#x4E00;&#x4E2A;&#x51C6;&#x786E;&#x7684;&#x6708;&#x4EFD;</code></strong></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setUTCMonth(<var>monthValue</var>[, <var>dayValue</var>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>monthValue</code></dt>
 <dd>&#x4E00;&#x4E2A;0-11&#x7684;&#x6574;&#x6570;&#xFF0C;&#x4EE3;&#x8868;1&#x6708;&#x5230;12&#x6708;&#x3002;</dd>
 <dt><code>dayValue</code></dt>
 <dd>&#x53EF;&#x9009;&#x53C2;&#x6570;&#xFF1A;&#x4E00;&#x4E2A;1-31&#x7684;&#x6574;&#x6570;&#xFF0C;&#x4EE3;&#x8868;&#x4E00;&#x4E2A;&#x6708;&#x7684;&#x5929;&#x6570;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD9;&#x4E2A;&#x6570;&#x503C;&#x662F;&#x4ECE;1970&#x5E74;1&#x6708;1&#x53F7; 00:00:00&#x5230;&#x5F53;&#x524D;&#x65F6;&#x95F4;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#xFF08;&#x56FD;&#x9645;&#x901A;&#x7528;&#x65F6;&#x95F4;&#xFF09;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4F60;&#x6CA1;&#x6709;&#x660E;&#x786E;&#x4E66;&#x5199;<code>dayValue</code>&#xA0;&#x8FD9;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x5C31;&#x4F1A;&#x4ECE;<a title="getUTCDate() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x4E3A;&#x4E00;&#x4E2A;&#x6708;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate"><code>getUTCDate()</code></a> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5BF9;&#x5E94;&#x7684;&#x6570;&#x503C;.</p>

<p>&#x5982;&#x679C;&#x4F60;&#x5199;&#x4E86;&#x4E00;&#x4E2A;&#x8D85;&#x8FC7;&#x5728;&#x89C4;&#x5B9A;&#x7684;&#x8303;&#x56F4;&#x5185;&#x7684;&#x53C2;&#x6570;.&#xA0;<code>setUTCMonth()&#x5C31;&#x4F1A;&#x8BD5;&#x56FE;&#x76F8;&#x5E94;&#x7684;&#x66F4;&#x65B0;&#x65F6;&#x95F4;&#x4FE1;&#x606F;&#x5728;Data&#x5BF9;&#x8C61;&#x4E2D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x7528;15&#x4F5C;&#x4E3A;</code>monthValue&#x7684;&#x503C;&#xFF0C;&#x90A3;&#x4E48;&#x5E74;&#x4EFD;&#x5C31;&#x4F1A;&#x52A0;1&#xFF0C;&#x5E76;&#x4E14;&#x6708;&#x4EFD;&#x4F1A;&#x53D8;&#x6210;3.&#xFF08;15=12+3&#xFF09;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_setUTCMonth()">&#x4F7F;&#x7528;&#xA0;<code>setUTCMonth()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCMonth(11);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x6700;&#x521D;&#x5B9A;&#x4E49;&#x5E76;&#x4F7F;&#x7528;&#x5728;javascript 1.3&#x7248;&#x672C;&#x4E2D;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.39" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCMonth</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcmonth" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCMonth</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-date.prototype.setutcmonth" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Date.prototype.setUTCMonth</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div>&#x517C;&#x5BB9;&#x6027;&#x8868;</div>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">&#x7279;&#x6027;
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#xA0;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x672C;&#x652F;&#x6301;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;&#x672A;&#x77E5;</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x66F4;&#x591A;">&#x66F4;&#x591A;</h2>

<ul>
 <li><a title="getUTCMonth() &#x65B9;&#x6CD5;&#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x6708;&#x4EFD;&#xFF0C;&#x5B83;&#x662F;&#x4ECE; 0 &#x5F00;&#x59CB;&#x8BA1;&#x6570;&#x7684;&#xFF08;0 &#x4EE3;&#x8868;&#x4E00;&#x5E74;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x6708;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth"><code>Date.prototype.getUTCMonth()</code></a></li>
 <li><a title="setMonth() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x6708;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth"><code>Date.prototype.setMonth()</code></a></li>
</ul>
                  
                
              