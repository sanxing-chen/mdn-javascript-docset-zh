
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>lastIndexOf()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; <code>fromIndex</code> &#x5904;&#x5F00;&#x59CB;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.lastIndexOf(<em>searchElement</em>[, <em>fromIndex = arr.length - 1</em>])</code></pre>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>&#x88AB;&#x67E5;&#x627E;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
 <dt><code>fromIndex</code></dt>
 <dd>&#x4ECE;&#x6B64;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x9006;&#x5411;&#x67E5;&#x627E;&#x3002;&#x9ED8;&#x8BA4;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x51CF; 1&#xFF0C;&#x5373;&#x6574;&#x4E2A;&#x6570;&#x7EC4;&#x90FD;&#x88AB;&#x67E5;&#x627E;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x503C;&#x5927;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#x6574;&#x4E2A;&#x6570;&#x7EC4;&#x4F1A;&#x88AB;&#x67E5;&#x627E;&#x3002;&#x5982;&#x679C;&#x4E3A;&#x8D1F;&#x503C;&#xFF0C;&#x5C06;&#x5176;&#x89C6;&#x4E3A;&#x4ECE;&#x6570;&#x7EC4;&#x672B;&#x5C3E;&#x5411;&#x524D;&#x7684;&#x504F;&#x79FB;&#x3002;&#x5373;&#x4F7F;&#x8BE5;&#x503C;&#x4E3A;&#x8D1F;&#xFF0C;&#x6570;&#x7EC4;&#x4ECD;&#x7136;&#x4F1A;&#x88AB;&#x4ECE;&#x540E;&#x5411;&#x524D;&#x67E5;&#x627E;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x503C;&#x4E3A;&#x8D1F;&#x65F6;&#xFF0C;&#x5176;&#x7EDD;&#x5BF9;&#x503C;&#x5927;&#x4E8E;&#x6570;&#x7EC4;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE; -1&#xFF0C;&#x5373;&#x6570;&#x7EC4;&#x4E0D;&#x4F1A;&#x88AB;&#x67E5;&#x627E;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>lastIndexOf</code> &#x4F7F;&#x7528;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">&#x4E25;&#x683C;&#x76F8;&#x7B49;</a>&#xFF08;strict equality&#xFF0C;&#x5373; ===&#xFF09;&#x6BD4;&#x8F83;&#xA0;<code>searchElement</code>&#xA0;&#x548C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_lastIndexOf" id="Example:_Using_lastIndexOf">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528; lastIndexOf</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>lastIndexOf</code> &#x5B9A;&#x4F4D;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x503C;&#x3002;</p>

<pre class="brush: js">var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
</pre>

<h3 name="Example:_Finding_all_the_occurrences_of_an_element" id="Example:_Finding_all_the_occurrences_of_an_element">&#x4F8B;&#x5B50;&#xFF1A;&#x67E5;&#x627E;&#x6240;&#x6709;&#x5143;&#x7D20;</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>lastIndexOf</code> &#x67E5;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x7684;&#x7D22;&#x5F15;&#xFF08;&#x4E0B;&#x6807;&#xFF09;&#xFF0C;&#x5E76;&#x4F7F;&#x7528; <a title="push()&#xA0;&#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x65B0;&#x7684;&#x957F;&#x5EA6;&#xFF08;length &#x5C5E;&#x6027;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a> &#x5C06;&#x6240;&#x6709;&#x6DFB;&#x52A0;&#x5230;&#x53E6;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x3002;</p>

<pre class="brush: js">var indices = [];
var array = [&apos;a&apos;, &apos;b&apos;, &apos;a&apos;, &apos;c&apos;, &apos;a&apos;, &apos;d&apos;];
var element = &apos;a&apos;;
var idx = array.lastIndexOf(element);

while (idx&#xA0;!= -1) {
  indices.push(idx);
  idx = (idx &gt; 0&#xA0;? array.lastIndexOf(element, idx - 1)&#xA0;: -1);
}

console.log(indices);
// [4, 2, 0];
</pre>

<p>Note that we have to handle the case&#xA0;<code style="font-style: normal;">idx == 0</code>&#xA0;separately here because the element will always be found regardless of the&#xA0;<code style="font-style: normal;">fromIndex</code>&#xA0;parameter if it is the first element of the array. This is different from the <a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>indexOf</code></a> method.</p>

<p>&#x6CE8;&#x610F;&#xFF0C;&#x5FC5;&#x987B;&#x5355;&#x72EC;&#x5904;&#x7406;&#xA0;<code>idx == 0</code> &#x65F6;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x56E0;&#x4E3A;&#x5982;&#x679C;&#x5143;&#x7D20;&#x662F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x603B;&#x4F1A;&#x88AB;&#x67E5;&#x627E;&#xFF0C;&#x5FFD;&#x7565;&#x4E86;&#xA0;<code>fromIndex</code>&#xA0;&#x53C2;&#x6570;&#x3002; &#x8FD9;&#x70B9;&#x548C; <a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>indexOf</code></a> &#x65B9;&#x6CD5;&#x4E0D;&#x540C;&#x3002;&#xFF08;&#x8BD1;&#x6CE8;&#xFF1A;&#x4E2A;&#x4EBA;&#x89C9;&#x5F97;&#x8FD9;&#x53E5;&#x8BDD;&#x89E3;&#x91CA;&#x6709;&#x95EE;&#x9898;&#xFF0C;<code>idx == 0</code> &#x65F6;&#xFF0C;<code><font face="Consolas, Monaco, Andale Mono, monospace">array.lastIndexOf(element, idx - 1)</font></code>&#xA0;&#x4F1A;&#x4ECE;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x8FD9;&#x6837;&#x5C31;&#x91CD;&#x590D;&#x67E5;&#x627E;&#xFF0C;&#x4E14;&#x6B7B;&#x5FAA;&#x73AF;&#x4E86;&#xFF0C;&#x6240;&#x4EE5;&#x8981;&#x505A;&#x4E00;&#x4E2A;&#x5224;&#x65AD;&#xFF0C;&#x800C;&#x4E14;&#x5DF2;&#x7ECF;&#x67E5;&#x627E;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x4E86;&#xFF0C;&#x5C31;&#x8BE5;&#x7ED3;&#x675F;&#x4E86;&#xFF09;&#x3002;</p>

<h2 name="Compatibility" id="Compatibility">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p><code>lastIndexOf</code> &#x5728; ECMA-262 &#x6807;&#x51C6;&#x7B2C; 5 &#x7248;&#x88AB;&#x6DFB;&#x52A0;&#x3002;&#x56E0;&#x6B64;&#x5B83;&#x5728;&#x4E0D;&#x517C;&#x5BB9;&#x8BE5;&#x6807;&#x51C6;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x53EF;&#x80FD;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x628A;&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#x6DFB;&#x52A0;&#x5230;&#x811A;&#x672C;&#x4E2D;&#x6765;&#x4F7F;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x5B9E;&#x73B0;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x652F;&#x6301;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;&#x8BE5;&#x7B97;&#x6CD5;&#x662F;&#x88AB; ECMA-262 &#x7B2C; 5 &#x7248;&#x6307;&#x5B9A;&#x7684;&#x3002;&#x5047;&#x5B9A;&#xA0;<a title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>&#x3001;<a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x3001;<a title="JavaScript &#x7684; Number&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;Number &#x5BF9;&#x8C61;&#x7531;&#xA0;Number() &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>&#x3001;<a title="Math.floor(x) &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x5C0F;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570; &quot;x&quot; &#x7684;&#x6700;&#x5927;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"><code>Math.floor</code></a>&#x3001;<a title="Math.abs(x)&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x6570;&#x5B57; &#x201C;x&#x201C; &#x7684;&#x7EDD;&#x5BF9;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs"><code>Math.abs</code></a>&#xFF0C;&#x4EE5;&#x53CA; <a title="Math.min() &#x8FD4;&#x56DE;&#x96F6;&#x4E2A;&#x6216;&#x66F4;&#x591A;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x6700;&#x5C0F;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min"><code>Math.min</code></a> &#x62E5;&#x6709;&#x5176;&#x521D;&#x59CB;&#x503C;&#x3002;</p>

<pre class="brush: js">if (!Array.prototype.lastIndexOf) {
&#xA0; Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
&#xA0;&#xA0;&#xA0; &apos;use strict&apos;;

&#xA0;&#xA0;&#xA0; if (this === void 0 || this === null) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; throw new TypeError();
&#xA0;&#xA0;&#xA0; }

&#xA0;&#xA0;&#xA0; var n, k,
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; t = Object(this),
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; len = t.length &gt;&gt;&gt; 0;
&#xA0;&#xA0;&#xA0; if (len === 0) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return -1;
&#xA0;&#xA0;&#xA0; }

&#xA0;&#xA0;&#xA0; n = len - 1;
&#xA0;&#xA0;&#xA0; if (arguments.length &gt; 1) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; n = Number(arguments[1]);
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; if (n != n) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; n = 0;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; else if (n != 0 &amp;&amp; n != (1 / 0) &amp;&amp; n != -(1 / 0)) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; n = (n &gt; 0 || -1) * Math.floor(Math.abs(n));
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; }

&#xA0;&#xA0;&#xA0; for (k = n &gt;= 0
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; ? Math.min(n, len - 1)
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; : len - Math.abs(n); k &gt;= 0; k--) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; if (k in t &amp;&amp; t[k] === searchElement) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return k;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; return -1;
&#xA0; };
}

</pre>

<p>&#x53E6;&#x5916;&#xFF0C;&#x8BE5;&#x5B9E;&#x73B0;&#x662F;&#x4E3A;&#x4E86;&#x7EDD;&#x5BF9;&#x517C;&#x5BB9;&#xA0;Firefox &#x548C; the SpiderMonkey JavaScript &#x5F15;&#x64CE;&#x4E2D;&#x7684; <code>lastIndexOf</code>&#xFF0C;&#x5305;&#x62EC;&#x4E86;&#x51E0;&#x79CD;&#x4E34;&#x754C;&#x60C5;&#x51B5;&#x3002;&#x5982;&#x679C;&#x4F60;&#x8981;&#x5728;&#x5B9E;&#x9645;&#x5E94;&#x7528;&#x4E2D;&#x4F7F;&#x7528;&#x8BE5;&#x5B9E;&#x73B0;&#xFF0C;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x8FD9;&#x4E9B;&#x4E34;&#x754C;&#x60C5;&#x51B5;&#xFF0C;&#x4ECE;&#x800C;&#x7B80;&#x5316;&#xA0;<code>fromIndex</code> &#x7684;&#x8BA1;&#x7B97;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.15">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.lastIndexOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>JavaScript 1.6 &#x4E2D;&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.lastindexof">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.lastIndexOf</small></a></td>
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
   <td>9</td>
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
 <li><a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>Array.prototype.indexOf()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf"><code>TypedArray.prototype.lastIndexOf()</code></a></li>
</ul>
                  
                
              