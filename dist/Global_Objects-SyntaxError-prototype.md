
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>SyntaxError.prototype</strong></code>&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;<a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;.</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6240;&#x6709; <a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x81EA;&#xA0;<code>SyntaxError.prototype</code>. &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x8BE5;&#x539F;&#x578B;&#x7ED9;&#x6240;&#x6709;&#x5B9E;&#x4F8B;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>SyntaxError.prototype.constructor</code></dt>
 <dd>&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;.</dd>
 <dt><a title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message"><code>SyntaxError.prototype.message</code></a></dt>
 <dd>&#x9519;&#x8BEF;&#x4FE1;&#x606F;. &#x5C3D;&#x7BA1;&#xA0;ECMA-262 &#x6307;&#x51FA;, <a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x5E94;&#x8BE5;&#x63D0;&#x4F9B;&#x5176;&#x5B50;&#x4EC0;&#x4E48;&#x7684;&#x4FE1;&#x606F;&#x5C5E;&#x6027;,&#x4F46;&#x5728;&#xA0;<a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>&#xA0;&#x4E2D;, &#x4ECD;&#x662F;&#x7EE7;&#x627F;&#x81EA;<a title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message"><code>Error.prototype.message</code></a>.</dd>
 <dt><a title="name&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name"><code>SyntaxError.prototype.name</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x9519;&#x8BEF;&#x7684;&#x540D;&#x79F0;.&#x7EE7;&#x627F;&#x81EA;</span>&#xA0;<a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName" class="new"><code>SyntaxError.prototype.fileName</code></a></dt>
 <dd>&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x8DEF;&#x5F84;.&#x7EE7;&#x627F;&#x81EA; <a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber" class="new"><code>SyntaxError.prototype.lineNumber</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x7684;&#x884C;&#x53F7;</span>. &#x7EE7;&#x627F;&#x81EA; <a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber" class="new"><code>SyntaxError.prototype.columnNumber</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x7684;&#x5217;&#x6570;</span>. <span style="line-height: 19.0909080505371px;">&#x7EE7;&#x627F;&#x81EA;</span> <a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a>.</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack" class="new"><code>SyntaxError.prototype.stack</code></a></dt>
 <dd>&#x6808;&#x8FFD;&#x8E2A;&#x4FE1;&#x606F;. <span style="line-height: 19.0909080505371px;">&#x7EE7;&#x627F;&#x81EA;</span> <a title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"><code>Error</code></a>.</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<p>&#x5C3D;&#x7BA1; <a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x539F;&#x578B;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x4E0D;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x65B9;&#x6CD5;,&#x4F46;&#xA0;<a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a> &#x5B9E;&#x4F8B;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7EE7;&#x627F;&#x4E86;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;.</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.7.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined as <code><em>NativeError</em>.prototype</code>.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-nativeerror.prototype" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined as <code><em>NativeError</em>.prototype</code>.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-nativeerror.prototype" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Defined as&#xA0;<code><em>NativeError</em>.prototype</code>.</td>
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

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6240;&#x6709; Error &#x4E0E;&#xA0;&#x975E;&#x6807;&#x51C6;Error &#x7684;&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x81EA;&#xA0;Error.prototype&#x3002;&#x540C;&#x6240;&#x6709;&#x6784;&#x9020;&#x5668;&#x51FD;&#x6570;&#x4E00;&#x6837;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x6784;&#x9020;&#x5668;&#x7684;&#xA0;prototype &#x4E0A;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x6216;&#x8005;&#x65B9;&#x6CD5;&#xFF0C;&#x4F7F;&#x5176;&#x5728;&#x6240;&#x6709;&#x8BE5;&#x6784;&#x9020;&#x5668;&#x7684;&#x5B9E;&#x4F8B;&#x4E0A;&#x751F;&#x6548;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype"><code>Error.prototype</code></a></li>
 <li><a title="Function.prototype &#x5C5E;&#x6027;&#x5B58;&#x50A8;&#x4E86; Function &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype"><code>Function.prototype</code></a></li>
</ul>
                  
                
              