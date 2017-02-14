
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>SyntaxError</strong></code>&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5F53;Javascript&#x8BED;&#x8A00;&#x89E3;&#x6790;&#x4EE3;&#x7801;&#x65F6;,Javascript&#x5F15;&#x64CE;&#x53D1;&#x73B0;&#x4E86;&#x4E0D;&#x7B26;&#x5408;&#x8BED;&#x6CD5;&#x89C4;&#x8303;&#x7684;tokens&#x6216;token&#x987A;&#x5E8F;&#x65F6;&#x629B;&#x51FA;<code>SyntaxError</code>.</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new SyntaxError([<var>message</var>[, <var>fileName</var>[, <var>lineNumber</var>]]])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>message</code></dt>
 <dd>&#x53EF;&#x9009;&#x7684;. &#x53EF;&#x9605;&#x8BFB;&#x7684;&#x9519;&#x8BEF;&#x63CF;&#x8FF0;&#x4FE1;&#x606F;</dd>
 <dt><code>fileName</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x53EF;&#x9009;&#x7684;. &#x5305;&#x542B;&#x5F15;&#x53D1;&#x5F02;&#x5E38;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x6587;&#x4EF6;&#x540D;</dd>
 <dt><code>lineNumber</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x53EF;&#x9009;&#x7684;</span>. <span style="line-height: 19.0909080505371px;">&#x5305;&#x542B;&#x5F15;&#x53D1;&#x5F02;&#x5E38;&#x7684;&#x4EE3;&#x7801;</span><span style="line-height: 19.0909080505371px;">&#x7684;&#x884C;&#x53F7;</span></dd>
</dl>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype" title="SyntaxError.prototype&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;SyntaxError &#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;."><code>SyntaxError.prototype</code></a></dt>
 <dd><code><font face="Open Sans, sans-serif">&#x5141;&#x8BB8;</font>SyntaxError</code>&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;.</dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<p>&#x5168;&#x5C40; <code>SyntaxError</code>&#xA0;&#x81EA;&#x8EAB;&#x4E0D;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x65B9;&#x6CD5;, &#x4F46;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7EE7;&#x627F;&#x4E86;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;.</p>

<h2 name="SyntaxError_instances" id="SyntaxError_instances"><code>SyntaxError</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<h3 name="Properties_of_SyntaxError_instances" id="Properties_of_SyntaxError_instances">&#x5C5E;&#x6027;</h3>

<div><dl><dt><code>SyntaxError.prototype.constructor</code></dt>
 <dd>&#x521B;&#x5EFA;&#x5B9E;&#x4F8B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>SyntaxError.prototype.message</code></a></dt>
 <dd>&#x9519;&#x8BEF;&#x4FE1;&#x606F;. &#x5C3D;&#x7BA1;&#xA0;ECMA-262 &#x6307;&#x51FA;, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a> &#x5E94;&#x8BE5;&#x63D0;&#x4F9B;&#x5176;&#x5B50;&#x4EC0;&#x4E48;&#x7684;&#x4FE1;&#x606F;&#x5C5E;&#x6027;,&#x4F46;&#x5728;&#xA0;<a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>&#xA0;&#x4E2D;, &#x4ECD;&#x662F;&#x7EE7;&#x627F;&#x81EA;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>Error.prototype.message</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name" title="name&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;."><code>SyntaxError.prototype.name</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x9519;&#x8BEF;&#x7684;&#x540D;&#x79F0;.&#x7EE7;&#x627F;&#x81EA;</span>&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>SyntaxError.prototype.fileName</code></a></dt>
 <dd>&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x8DEF;&#x5F84;.&#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>SyntaxError.prototype.lineNumber</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x7684;&#x884C;&#x53F7;</span>. &#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>SyntaxError.prototype.columnNumber</code></a></dt>
 <dd><span style="line-height: 19.0909080505371px;">&#x629B;&#x51FA;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x6587;&#x4EF6;&#x7684;&#x5217;&#x6570;</span>. <span style="line-height: 19.0909080505371px;">&#x7EE7;&#x627F;&#x81EA;</span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>SyntaxError.prototype.stack</code></a></dt>
 <dd>&#x6808;&#x8FFD;&#x8E2A;&#x4FE1;&#x606F;. <span style="line-height: 19.0909080505371px;">&#x7EE7;&#x627F;&#x81EA;</span> <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
</dl></div>

<h3 name="Methods_of_SyntaxError_instances" id="Methods_of_SyntaxError_instances">&#x65B9;&#x6CD5;</h3>

<div></div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Catch_an_SyntaxError" id="Example:_Catch_an_SyntaxError">&#x6355;&#x83B7; <code>SyntaxError</code></h3>

<pre class="brush: js">try {
  eval(&apos;hoo bar&apos;);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // &quot;missing ; before statement&quot;
  console.log(e.name);                   // &quot;SyntaxError&quot;
  console.log(e.fileName);               // &quot;Scratchpad/1&quot;
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // &quot;@Scratchpad/1:2:3\n&quot;
}
</pre>

<h3 name="Example:_Create_an_SyntaxError" id="Example:_Create_an_SyntaxError">&#x521B;&#x5EFA; <code>SyntaxError</code></h3>

<pre class="brush: js">try {
  throw new SyntaxError(&apos;Hello&apos;, &apos;someFile.js&apos;, 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // &quot;Hello&quot;
  console.log(e.name);                   // &quot;SyntaxError&quot;
  console.log(e.fileName);               // &quot;someFile.js&quot;
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // &quot;@Scratchpad/2:11:9\n&quot;
}
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
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.4" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">SyntaxError</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-syntaxerror" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">SyntaxError</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x901A;&#x8FC7;Error&#x7684;&#x6784;&#x9020;&#x5668;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x8FD0;&#x884C;&#x65F6;&#x9519;&#x8BEF;&#x4EA7;&#x751F;&#x65F6;&#xFF0C;Error&#x7684;&#x5B9E;&#x4F8B;&#x5BF9;&#x8C61;&#x4F1A;&#x88AB;&#x629B;&#x51FA;&#x3002;Error&#x5BF9;&#x8C61;&#x53EF;&#x7528;&#x4E8E;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x7840;&#x5BF9;&#x8C61;&#x3002;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x4E86;&#x5404;&#x79CD;&#x5185;&#x5EFA;&#x7684;&#x6807;&#x51C6;&#x9519;&#x8BEF;&#x7C7B;&#x578B;&#x3002;"><code>Error</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype" title="SyntaxError.prototype&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;SyntaxError &#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;."><code>SyntaxError.prototype</code></a></li>
</ul>
                  
                
              