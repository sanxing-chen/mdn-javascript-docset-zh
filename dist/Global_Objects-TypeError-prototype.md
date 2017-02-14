
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p>The <code><strong>TypeError.prototype</strong></code> property represents the prototype for the <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> constructor.</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>All <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> instances inherit from <code>TypeError.prototype</code>. You can use the prototype to add properties or methods to all instances.</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>TypeError.prototype.constructor</code></dt>
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
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<p>Although the <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> prototype object does not contain any methods of its own, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> instances do inherit some methods through the prototype chain.</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-nativeerror.prototype" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined as <code><em>NativeError</em>.prototype</code>.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.7.6" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined as <code><em>NativeError</em>.prototype</code>.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-15.11.7.6" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">NativeError.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype" title="The Error.prototype property represents the prototype for the Error constructor."><code>Error.prototype</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype" title="Function.prototype &#x5C5E;&#x6027;&#x5B58;&#x50A8;&#x4E86; Function &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;"><code>Function.prototype</code></a></li>
</ul>
                  
                
              