
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>getFloat32()</code></strong><code>&#x65B9;&#x6CD5;</code><code>&#x4ECE;</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;"><code>DataView</code></a>&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x4EE5;byte&#x4E3A;&#x8BA1;&#x6570;&#x7684;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x91CF;(byteOffset)&#x5904;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;32-bit&#x6570;(&#x6D6E;&#x70B9;&#x578B;).</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>dataview</var>.getFloat32(byteOffset [, littleEndian])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>byteOffset</dt>
 <dd>&#x504F;&#x79FB;&#x91CF;, &#x5355;&#x4F4D;&#x4E3A;&#x5B57;&#x8282;, &#x4ECE;&#x5934;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;.</dd>
 <dt>littleEndian</dt>
 <dd><span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span> Indicates whether the 32-bit float is stored in <a href="/en-US/docs/Glossary/Endianness" class="glossaryLink" title="little- or big-endian: &quot;Endian&quot; and &quot;endianness&quot; (or &quot;byte-order&quot;) describe how computers organize the bytes that make up numbers.">little- or big-endian</a> format. If false or undefined, a big-endian value is read.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;">&#x8FD4;&#x56DE;</h3>

<dl>
 <dd>&#x4E00;&#x4E2A;&#x6D6E;&#x70B9;&#x578B;32&#x4F4D;&#x6570;.</dd>
</dl>

<h3 id="&#x629B;&#x51FA;&#x9519;&#x8BEF;">&#x629B;&#x51FA;&#x9519;&#x8BEF;</h3>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;"><code>RangeError</code></a></dt>
 <dd>&#x5982;&#x679C;byteOffset&#x8D85;&#x51FA;&#x4E86;&#x89C6;&#x56FE;&#x80FD;&#x50A8;&#x5B58;&#x7684;&#x503C;&#xFF0C;&#x5C31;&#x4F1A;&#x629B;&#x51FA;&#x9519;&#x8BEF;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<dl>
 <dd>&#x6CA1;&#x6709;&#x5BF9;&#x9F50;&#x7EA6;&#x675F;; &#x591A;&#x5B57;&#x8282;&#x503C;&#x53EF;&#x4EE5;&#x4ECE;&#x4EFB;&#x4F55;&#x504F;&#x79FB;&#x91CF;&#x83B7;&#x53D6;.</dd>
</dl>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat32(1); // 0
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
   <td><a href="https://www.khronos.org/registry/typedarray/specs/latest/" class="external" lang="en" title="Typed Array Specification" hreflang="en">Typed Array Specification</a></td>
   <td><span class="spec-Obsolete">Obsolete</span></td>
   <td>Superseded by ECMAScript 6.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-dataview.prototype.getfloat32" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">DataView.prototype.getFloat32</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-dataview.prototype.getfloat32" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">DataView.prototype.getFloat32</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td>9.0</td>
   <td><a href="/en-US/Firefox/Releases/15" title="Released on 2012-08-28.">15.0</a> (15.0)</td>
   <td>10</td>
   <td>12.1</td>
   <td>5.1</td>
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
   <td>4.0</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>15.0 (15)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>12.0</td>
   <td>4.2</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView" title="DataView&#xA0;&#x89C6;&#x56FE;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5411; ArrayBuffer &#x8BFB;&#x5199;&#x6570;&#x636E;&#x7684;&#x5E95;&#x5C42;&#x63A5;&#x53E3;&#x3002;"><code>DataView</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>ArrayBuffer</code></a></li>
</ul>
                  
                
              