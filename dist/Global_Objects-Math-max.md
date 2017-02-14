
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>Math.max()</strong></code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x7EC4;&#x6570;&#x4E2D;&#x7684;&#x6700;&#x5927;&#x503C;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.max([<em>value1</em>[,<em>value2</em>, ...]]) </code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>value1, value2, ...</code></dt>
 <dd>&#x4E00;&#x7EC4;&#x6570;&#x503C;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x7684;&#x4E00;&#x7EC4;&#x6570;&#x5B57;&#x4E2D;&#x7684;&#x6700;&#x5927;&#x503C;&#x3002;&#x5982;&#x679C;&#x7ED9;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x4E2D;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x65E0;&#x6CD5;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x5B57;&#xFF0C;&#x5219;&#x4F1A;&#x8FD4;&#x56DE; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x7531;&#x4E8E; <code>max</code> &#x662F; <code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.max()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5B9E;&#x4F8B;&#x7684;&#x65B9;&#x6CD5;(Math&#x5E76;&#x975E;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x4F53;)&#x3002;</p>

<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x7ED3;&#x679C;&#x4E3A; - <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xA0;Infinity &#x662F;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x65E0;&#x7A77;&#x5927;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity"><code>Infinity</code></a>&#x3002;</p>

<p>&#x5982;&#x679C;&#x6709;&#x4EFB;&#x4E00;&#x53C2;&#x6570;&#x4E0D;&#x80FD;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x503C;&#xFF0C;&#x5219;&#x7ED3;&#x679C;&#x4E3A; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Using_Math.max" name="Example:_Using_Math.max">&#x4F7F;&#x7528;&#xA0;<code>Math.max()</code></h3>

<pre class="brush: js">Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
</pre>

<p>&#x4E0B;&#x9762;&#x7684;&#x65B9;&#x6CD5;&#x4F7F;&#x7528; <a title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>apply</code></a> &#x65B9;&#x6CD5;&#x5BFB;&#x627E;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x5927;&#x5143;&#x7D20;&#x3002;<code>getMaxOfArray([1,2,3])</code>&#xA0;&#x7B49;&#x4EF7;&#x4E8E;&#xA0;<code>Math.max(1, 2, 3)</code>&#xFF0C;&#x4F46;&#x662F;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code>getMaxOfArray</code>&#xA0;()&#x4F5C;&#x7528;&#x4E8E;&#x4EFB;&#x610F;&#x957F;&#x5EA6;&#x7684;&#x6570;&#x7EC4;&#x4E0A;&#x3002;</p>

<pre class="brush:js">function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
</pre>

<p>&#x6216;&#x8005;&#x901A;&#x8FC7;&#x4F7F;&#x7528;&#x6700;&#x65B0;&#x7684;&#x6269;&#x5C55;&#x8BED;&#x53E5;<a title="&#x6269;&#x5C55;&#x8BED;&#x6CD5;&#x5141;&#x8BB8;&#x5728;&#x9700;&#x8981;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#xFF08;&#x7528;&#x4E8E;&#x51FD;&#x6570;&#x8C03;&#x7528;&#xFF09;&#x6216;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#xFF08;&#x7528;&#x4E8E;&#x6570;&#x7EC4;&#x6587;&#x672C;&#xFF09;&#x6216;&#x591A;&#x4E2A;&#x53D8;&#x91CF;&#xFF08;&#x7528;&#x4E8E;&#x89E3;&#x6784;&#x5206;&#x914D;&#xFF09;&#x7684;&#x4F4D;&#x7F6E;&#x6269;&#x5C55;&#x8868;&#x8FBE;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator"><code>spread operator</code></a>&#xFF0C;&#x83B7;&#x5F97;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x5927;&#x503C;&#x53D8;&#x5F97;&#x66F4;&#x5BB9;&#x6613;&#x3002;</p>

<pre class="brush: js">var arr = [1, 2, 3];
var max = Math.max(...arr);
</pre>

<p>&#xA0;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a title="ECMAScript 1st Edition (ECMA-262)" hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.11">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.max</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.max">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.max</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-math.max">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Math.max</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
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

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Math.min() &#x8FD4;&#x56DE;&#x96F6;&#x4E2A;&#x6216;&#x66F4;&#x591A;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x6700;&#x5C0F;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min"><code>Math.min()</code></a></li>
</ul>
                  
                
              