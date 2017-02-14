
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>@@iterator &#x7684;&#x521D;&#x59CB;&#x503C;&#x662F;&#x548C; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"><code>values</code></a> &#x5C5E;&#x6027;&#x7684;&#x521D;&#x59CB;&#x503C;&#x76F8;&#x540C;&#x7684;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>arr</var>[Symbol.iterator]()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6570;&#x7EC4;&#x7684; <strong>&#x8FED;&#x4EE3;&#x5668;</strong> &#x51FD;&#x6570;&#xFF0C;&#x901A;&#x5E38;&#x662F; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"><code>values()</code></a>&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;for...of_&#x5FAA;&#x73AF;&#x7684;&#x8FED;&#x4EE3;">&#x4F7F;&#x7528;<code>for...of</code> &#x5FAA;&#x73AF;&#x7684;&#x8FED;&#x4EE3;</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
// &#x4F60;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x5FC5;&#x987B;&#x652F;&#x6301; for..of &#x5FAA;&#x73AF;
// &#x4EE5;&#x53CA; for &#x5FAA;&#x73AF;&#x4E2D;&#x7684; let &#x533A;&#x57DF;&#x53D8;&#x91CF;
for (let n of arr) {
  console.log(n);
}
</pre>

<h3 id="&#x5907;&#x9009;&#x8FED;&#x4EE3;">&#x5907;&#x9009;&#x8FED;&#x4EE3;</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype-@@iterator" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">%TypedArray%.prototype[@@iterator]()</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">%TypedArray%.prototype[@@iterator]()</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <td><a title="Released on 2015-02-24." href="/en-US/Firefox/Releases/36">36</a> (36) [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>36.0 (36) [1]</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] &#x4ECE; Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) &#x5230; Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) &#x4F7F;&#x7528; <code>iterator</code> &#x5C5E;&#x6027; (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077" class="external">bug 907077</a>)&#xFF0C;&#x4ECE; Gecko 27 &#x5230; Gecko 35 &#x4F7F;&#x7528;<code>&quot;@@iterator&quot;</code> &#x5360;&#x4F4D;&#x7B26;&#x3002; &#x5728; Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33)&#x4E2D;&#xFF0C;<code>@@iterator</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a> &#x4E88;&#x4EE5;&#x5B9E;&#x73B0;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828" class="external">bug 918828</a>)&#x3002;</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a title="&#x4E00;&#x4E2A;TypedArray &#x5BF9;&#x8C61;&#x63CF;&#x8FF0;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;(array-like)&#x89C6;&#x56FE;&#x3002;&#x6CA1;&#x6709;&#x540D;&#x4E3A;TypedArray&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684;TypedArray&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x8BB8;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x5176;&#x503C;&#x662F;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x7684;&#x7279;&#x5B9A;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x5728;&#x4E0B;&#x9762;&#x7684;&#x9875;&#x9762;&#x4E2D;&#xFF0C;&#x4F60;&#x4F1A;&#x627E;&#x5230;&#x53EF;&#x7528;&#x4E8E;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x7D20;&#x7684;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x5E38;&#x89C1;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries"><code>TypedArray.prototype.entries()</code></a></li>
 <li><a title="keys()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x65B0;&#x7684; Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x4E0B;&#x6807;&#x7684;&#x952E;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys"><code>TypedArray.prototype.keys()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"><code>TypedArray.prototype.values()</code></a></li>
</ul>
                  
                
              