
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>entries()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;<strong>Array Iterator</strong>&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;/&#x503C;&#x5BF9;&#x3002;</p>

<pre class="brush:js">var arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value); 
// [0, &quot;a&quot;]
console.log(iterator.next().value); 
// [1, &quot;b&quot;]
console.log(iterator.next().value); 
// [2, &quot;c&quot;]
</pre>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.entries()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;for&#x2026;of_&#x5FAA;&#x73AF;">&#x4F7F;&#x7528;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for&#x2026;of</a>&#xA0;&#x5FAA;&#x73AF;</h3>

<pre class="brush:js">var arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
&#xA0; &#xA0; console.log(e);
}

// [0, &quot;a&quot;] 
// [1, &quot;b&quot;] 
// [2, &quot;c&quot;]
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.entries" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.entries</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x9996;&#x6B21;&#x5B9A;&#x4E49;</td>
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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/28" title="Released on 2014-03-18.">28</a> (28)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25</td>
   <td>7.1</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>28.0 (28)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" title="keys()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Array&#x8FED;&#x4EE3;&#x5668;&#xFF0C;&#x5B83;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x3002;"><code>Array.prototype.keys()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="forEach() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;(&#x56DE;&#x8C03;&#x51FD;&#x6570;)&#x3002;"><code>Array.prototype.forEach()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.every()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="some()&#xA0;&#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5143;&#x7D20;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;"><code>Array.prototype.some()</code></a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a></li>
</ul>
                  
                
              