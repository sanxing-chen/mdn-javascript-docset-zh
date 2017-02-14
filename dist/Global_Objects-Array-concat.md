
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<code><strong>concat()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x5408;&#x5E76;&#x4E24;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x66F4;&#x6539;&#x73B0;&#x6709;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;</p>

<pre class="brush: js">let arr1 = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
let arr2 = [&quot;d&quot;, &quot;e&quot;, &quot;f&quot;];

let arr3 = arr1.concat(arr2);

console.log(arr3);
// results in a new array 
// [ &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot; ]

console.log(arr1);
// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]

console.log(arr2);
// [&quot;d&quot;, &quot;e&quot;, &quot;f&quot;]
</pre>

<p>&#xA0;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">var <var>new_array</var> = <var>old_array</var>.concat(<var>value1</var>[, <var>value2</var>[, ...[, <var>valueN</var>]]])</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>value<em>N</em></code></dt>
 <dd>&#x9700;&#x8981;&#x4E0E;&#x539F;&#x6570;&#x7EC4;&#x5408;&#x5E76;&#x7684;&#x6570;&#x7EC4;&#x6216;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x3002;&#x8BE6;&#x89C1;&#x4E0B;&#x6587;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x65B0;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x5B9E;&#x4F8B;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>concat &#x65B9;&#x6CD5;&#x5C06;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x7136;&#x540E;&#x5C06;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x5BF9;&#x8C61;(this &#x6307;&#x5411;&#x7684;&#x5BF9;&#x8C61;)&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4EE5;&#x53CA;&#x6240;&#x6709;&#x53C2;&#x6570;&#x4E2D;&#x7684;&#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x7684;&#x53C2;&#x6570;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4EE5;&#x53CA;&#x975E;&#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x7684;&#x53C2;&#x6570;&#x672C;&#x8EAB;&#x6309;&#x7167;&#x987A;&#x5E8F;&#x653E;&#x5165;&#x8FD9;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;,&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x6570;&#x7EC4;.</p>

<p><code>concat</code> &#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x4FEE;&#x6539;&#x8C03;&#x7528;&#x5B83;&#x7684;&#x5BF9;&#x8C61;(<code>this</code> &#x6307;&#x5411;&#x7684;&#x5BF9;&#x8C61;) &#x548C;&#x53C2;&#x6570;&#x4E2D;&#x7684;&#x5404;&#x4E2A;&#x6570;&#x7EC4;&#x672C;&#x8EAB;&#x7684;&#x503C;,&#x800C;&#x662F;&#x5C06;&#x4ED6;&#x4EEC;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x62F7;&#x8D1D;&#x4E00;&#x4EFD;&#x653E;&#x5728;&#x7EC4;&#x5408;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x4E2D;.&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x6709;&#x4E24;&#x79CD;&#x88AB;&#x62F7;&#x8D1D;&#x7684;&#x65B9;&#x5F0F;:</p>

<ul>
 <li>&#x5BF9;&#x8C61;&#x5F15;&#x7528;(&#x975E;&#x5BF9;&#x8C61;&#x76F4;&#x63A5;&#x91CF;):<code>concat</code>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x590D;&#x5236;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x653E;&#x5230;&#x7EC4;&#x5408;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x91CC;,&#x539F;&#x6570;&#x7EC4;&#x548C;&#x65B0;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x90FD;&#x6307;&#x5411;&#x540C;&#x4E00;&#x4E2A;&#x5B9E;&#x9645;&#x7684;&#x5BF9;&#x8C61;,&#x6240;&#x4EE5;,&#x5F53;&#x5B9E;&#x9645;&#x7684;&#x5BF9;&#x8C61;&#x88AB;&#x4FEE;&#x6539;&#x65F6;,&#x4E24;&#x4E2A;&#x6570;&#x7EC4;&#x4E5F;&#x540C;&#x65F6;&#x4F1A;&#x88AB;&#x4FEE;&#x6539;.</li>
</ul>

<ul>
 <li>&#x5B57;&#x7B26;&#x4E32;&#x548C;&#x6570;&#x5B57;(&#x662F;&#x539F;&#x59CB;&#x503C;,&#x800C;&#x4E0D;&#x662F;&#x5305;&#x88C5;&#x539F;&#x59CB;&#x503C;&#x7684; <a href="../../../../../En/Core_JavaScript_1.5_Reference/Global_Objects/String" rel="internal" title="en/Core_JavaScript_1.5_Reference/Global_Objects/String">String</a>&#xA0;&#x548C;&#xA0;<a href="../../../../../En/Core_JavaScript_1.5_Reference/Global_Objects/Number" rel="internal" title="en/Core_JavaScript_1.5_Reference/Global_Objects/Number">Number</a> &#x5BF9;&#x8C61;): <code>concat</code>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x590D;&#x5236;&#x5B57;&#x7B26;&#x4E32;&#x548C;&#x6570;&#x5B57;&#x7684;&#x503C;&#x653E;&#x5230;&#x65B0;&#x6570;&#x7EC4;&#x91CC;.</li>
</ul>

<div class="note">
<p><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x8FDE;&#x63A5;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#xFF08;&#x503C;&#xFF09;&#x5C06;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x539F;&#x672C;&#x7684;&#x6570;&#x7EC4;/&#x503C;&#x3002;&#x8FDB;&#x4E00;&#x6B65;&#x8BF4;&#xFF0C;&#x4EFB;&#x4F55;&#x5BF9;&#x65B0;&#x6570;&#x7EC4;&#x7684;&#x64CD;&#x4F5C;&#x90FD;&#x4E0D;&#x4F1A;&#x5BF9;&#x539F;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x9020;&#x6210;&#x5F71;&#x54CD;&#xFF08;&#x4EC5;&#x5F53;&#x8BE5;&#x5143;&#x7D20;&#x4E0D;&#x662F;&#x5BF9;&#x8C61;&#x7684;&#x5F15;&#x7528;&#x65F6;&#xFF09;&#xFF0C;&#x53CD;&#x4E4B;&#x4EA6;&#x7136;&#x3002;</p>
</div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Concatenating_two_arrays" id="Example:_Concatenating_two_arrays"><span class="short_text" id="result_box"><span title="Concatenating two arrays" style="background-color: #ffffff;">&#x8FDE;&#x63A5;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;</span></span></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x4E24;&#x4E2A;&#x6570;&#x7EC4;&#x5408;&#x5E76;&#x4E3A;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;:</p>

<pre class="brush: js">var alpha = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
var numeric = [1, 2, 3];

// &#x7EC4;&#x6210;&#x65B0;&#x6570;&#x7EC4; [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, 1, 2, 3]; &#x539F;&#x6570;&#x7EC4; alpha &#x548C; numeric &#x672A;&#x88AB;&#x4FEE;&#x6539;
var alphaNumeric = alpha.concat(numeric);
</pre>

<h3 name="Example:_Concatenating_three_arrays" id="Example:_Concatenating_three_arrays"><span class="short_text" id="result_box"><span title="Concatenating two arrays" style="background-color: #ffffff;">&#x8FDE;&#x63A5;&#x4E09;&#x4E2A;&#x6570;&#x7EC4;</span></span></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x4E09;&#x4E2A;&#x6570;&#x7EC4;&#x5408;&#x5E76;&#x4E3A;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;:</p>

<pre class="brush: js">var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// &#x7EC4;&#x6210;&#x65B0;&#x6570;&#x7EC4;[1, 2, 3, 4, 5, 6, 7, 8, 9]; &#x539F;&#x6570;&#x7EC4; num1, num2, num3 &#x672A;&#x88AB;&#x4FEE;&#x6539;
var nums = num1.concat(num2, num3);
</pre>

<h3 name="Example:_Concatenating_values_to_an_array" id="Example:_Concatenating_values_to_an_array">&#x5C06;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x5408;&#x5E76;&#x5230;&#x6570;&#x7EC4;&#x91CC;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x6F14;&#x793A;&#x5C06;&#x591A;&#x4E2A;&#x6570;&#x7EC4;&#x548C;&#x591A;&#x4E2A;&#x975E;&#x6570;&#x7EC4;&#x503C;&#x5408;&#x5E76;&#x4E3A;&#x4E00;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;:</p>

<pre class="brush: js">var alpha = [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;];

// &#x7EC4;&#x6210;&#x65B0;&#x6570;&#x7EC4; [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, 1, 2, 3], &#x539F;alpha&#x6570;&#x7EC4;&#x672A;&#x88AB;&#x4FEE;&#x6539;
var alphaNumeric = alpha.concat(1, [2, 3]);
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
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.4" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.concat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.concat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.concat" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.concat</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td>1.0</td>
   <td>1.0 (1.7 or earlier)</td>
   <td>5.5</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="push()&#xA0;&#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x957F;&#x5EA6;&#x3002;"><code>push</code></a> / <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" title="pop()&#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>pop</code></a>&#xA0;&#x2014; add/remove elements from the end of the array</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" title="unshift() &#x65B9;&#x6CD5;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x5F00;&#x5934;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x8005;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684; length &#x503C;&#x3002;"><code>unshift</code></a> / <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" title="shift() &#x65B9;&#x6CD5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x5220;&#x9664;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x3002;&#x6B64;&#x65B9;&#x6CD5;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;"><code>shift</code></a>&#xA0;&#x2014; add/remove elements from the beginning of the array</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" title="splice() &#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5220;&#x9664;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x548C;/&#x6216;&#x6DFB;&#x52A0;&#x65B0;&#x5143;&#x7D20;&#x6765;&#x66F4;&#x6539;&#x6570;&#x7EC4;&#x7684;&#x5185;&#x5BB9;&#x3002;"><code>splice</code></a>&#xA0;&#x2014; add/remove elements from the specified location of the array</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat" title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x5408;&#x5E76;&#xFF0C;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5E76;&#x8FD4;&#x56DE;&#x3002;"><code>String.prototype.concat()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable" title="&#x5185;&#x7F6E;&#x7684;Symbol.isConcatSpreadable&#x7B26;&#x53F7;&#x7528;&#x4E8E;&#x914D;&#x7F6E;&#x67D0;&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;Array.prototype.concat()&#x65B9;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x65F6;&#x662F;&#x5426;&#x5C55;&#x5F00;&#x5176;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x3002;"><code>Symbol.isConcatSpreadable</code></a> &#x2013; control flattening.</li>
</ul>
                  
                
              