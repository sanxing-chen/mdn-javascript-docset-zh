
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;</strong></code>&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new TypeError([<var>message</var>[, <var>fileName</var>[, <var>lineNumber</var>]]])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>message &#x6D88;&#x606F;</code></dt>
 <dd>&#x53EF;&#x9009;. &#x63CF;&#x8FF0;&#x6B64;&#x9519;&#x8BEF;</dd>
 <dt><code>fileName &#x6587;&#x4EF6;&#x540D;</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x53EF;&#x9009;. &#x5F15;&#x8D77;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x4EE3;&#x7801;&#x6240;&#x5728;&#x7684;&#x6587;&#x4EF6;&#x7684;&#x540D;&#x5B57;&#x3002;</dd>
 <dt><code>lineNumber &#x884C;&#x53F7;</code> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x53EF;&#x9009;. &#x5F15;&#x8D77;&#x8BE5;&#x5F02;&#x5E38;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x884C;&#x53F7;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5F53;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;<strong>&#x64CD;&#x4F5C;&#x6570;</strong>&#x6216;<strong>&#x53C2;&#x6570;</strong>&#x7684;&#x7C7B;&#x578B;&#x5E76;&#x975E;&#x64CD;&#x4F5C;&#x7B26;&#x6216;&#x51FD;&#x6570;&#x6240;&#x9884;&#x671F;&#x7684;&#x7C7B;&#x578B;&#x65F6;&#xFF0C;&#x5C06;&#x629B;&#x51FA;&#x4E00;&#x4E2A; TypeError &#x7C7B;&#x578B;&#x9519;&#x8BEF;&#x3002;</p>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype" title="The TypeError.prototype property represents the prototype for the TypeError constructor."><code>TypeError.prototype</code></a></dt>
 <dd>&#x5141;&#x8BB8;&#x4E3A;&#x4E00;&#x4E2A; TypeError &#x7C7B;&#x578B;&#x9519;&#x8BEF;&#x9644;&#x52A0;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<p>&#x5168;&#x5C40; TypeError &#x4E0D;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x65B9;&#x6CD5;&#xFF0C;&#x4E0D;&#x8FC7;&#xFF0C;&#x5B83;&#x5C06;&#x4ECE;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x7EE7;&#x627F;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 name="TypeError_instances" id="TypeError_instances"><code>TypeError</code>&#xA0;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#x5B9E;&#x4F8B;</h2>

<h3 name="Properties_of_TypeError_instances" id="Properties_of_TypeError_instances">&#x5C5E;&#x6027;</h3>

<div><dl><dt><code>TypeError.prototype.constructor</code></dt>
 <dd>Specifies the function that created an instance&apos;s prototype.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>TypeError.prototype.message</code></a></dt>
 <dd>Error message. Although ECMA-262 specifies that <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> should provide its own <code>message</code> property, in <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, it inherits <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message" title="message &#x5C5E;&#x6027;&#x662F;&#x6709;&#x5173;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#xFF0C;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x7684;&#xFF08;human-readable&#xFF09;&#x63CF;&#x8FF0;&#x3002;"><code>Error.prototype.message</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name" title="name&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;error&#x7C7B;&#x578B;&#x7684;&#x540D;&#x79F0;.&#x521D;&#x59CB;&#x503C;&#x4E3A;&quot;Error&quot;."><code>TypeError.prototype.name</code></a></dt>
 <dd>Error name. Inherited from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError.prototype.fileName</code></a></dt>
 <dd>Path to file that raised this error. Inherited from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError.prototype.lineNumber</code></a></dt>
 <dd>Line number in file that raised this error. Inherited from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError.prototype.columnNumber</code></a></dt>
 <dd>Column number in line that raised this error. Inherited from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>TypeError.prototype.stack</code></a></dt>
 <dd>Stack trace. Inherited from <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a>.</dd>
</dl></div>

<h3 name="Methods_of_TypeError_instances" id="Methods_of_TypeError_instances">&#x65B9;&#x6CD5;</h3>

<div><p>Although the <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> prototype object does not contain any methods of its own, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> instances do inherit some methods through the prototype chain.</p></div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Catch_an_TypeError" id="Example:_Catch_an_TypeError">&#x793A;&#x4F8B;: &#x6355;&#x83B7;&#x7C7B;&#x578B;&#x9519;&#x8BEF;</h3>

<pre class="brush: js">try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // &quot;null has no properties&quot;
  console.log(e.name);                 // &quot;TypeError&quot;
  console.log(e.fileName);             // &quot;Scratchpad/1&quot;
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // &quot;@Scratchpad/2:2:3\n&quot;
}
</pre>

<h3 name="Example:_Create_an_TypeError" id="Example:_Create_an_TypeError">&#x793A;&#x4F8B;: &#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x9519;&#x8BEF;</h3>

<pre class="brush: js">try {
  throw new TypeError(&apos;Hello&apos;, &quot;someFile.js&quot;, 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // &quot;Hello&quot;
  console.log(e.name);                 // &quot;TypeError&quot;
  console.log(e.fileName);             // &quot;someFile.js&quot;
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // &quot;@Scratchpad/2:2:9\n&quot;
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-15.11.6.5" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">TypeError</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">TypeError</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-typeerror" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypeError</small></a></td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error" title="&#x521B;&#x5EFA;&#x4E00;&#x4E2A;error&#x5BF9;&#x8C61;&#x3002;&#x5F53;&#x53D1;&#x751F;&#x8FD0;&#x884C;&#x65F6;&#x5F02;&#x5E38;&#x65F6;,&#x5176;&#x5B9E;&#x4F8B;&#x4F1A;&#x88AB;&#x629B;&#x51FA;.Error&#x5BF9;&#x8C61;&#x53EF;&#x4F5C;&#x4E3A;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5F02;&#x5E38;&#x7684;&#x57FA;&#x5BF9;&#x8C61;.&#x4E0B;&#x9762;&#x662F;&#x5173;&#x4E8E;&#x6807;&#x51C6;&#x5185;&#x7F6E;error&#x7C7B;&#x578B;&#x7684;&#x8BF4;&#x660E;."><code>Error</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype" title="The TypeError.prototype property represents the prototype for the TypeError constructor."><code>TypeError.prototype</code></a></li>
</ul>
                  
                
              