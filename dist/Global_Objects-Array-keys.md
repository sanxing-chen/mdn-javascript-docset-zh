
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<code><strong>keys()&#xA0;</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Array&#x8FED;&#x4EE3;&#x5668;&#xFF0C;&#x5B83;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x3002;</p>

<pre class="brush: js">let arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];

let iterator = arr.keys();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next()); 
// Object {value: 0, done: false}

console.log(iterator.next()); 
// Object {value: 1, done: false}

console.log(iterator.next()); 
// Object {value: 2, done: false}

console.log(iterator.next()); 
// Object {value: undefined, done: true}

</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>arr</var>.keys()</code>
</pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;&#xA0;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Array" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Array</code></a> &#x8FED;&#x4EE3;&#x5668;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x6F14;&#x793A;&#x4E00;&#x4E0B;&#x8FED;&#x4EE3;&#x5668;&#x7684;&#x6267;&#x884C;&#x539F;&#x7406;">&#x4F8B;&#x5B50;&#xFF1A;&#x6F14;&#x793A;&#x4E00;&#x4E0B;&#x8FED;&#x4EE3;&#x5668;&#x7684;&#x6267;&#x884C;&#x539F;&#x7406;</h3>

<pre class="brush: js">var arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x7D22;&#x5F15;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x5BF9;&#x5E94;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;">&#x4F8B;&#x5B50;&#xFF1A;&#x7D22;&#x5F15;&#x8FED;&#x4EE3;&#x5668;&#x4F1A;&#x5305;&#x542B;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x5BF9;&#x5E94;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;</h3>

<pre class="brush: js">var arr = [&quot;a&quot;, , &quot;c&quot;];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // [0, 2]
console.log(denseKeys);  // [0, 1, 2]
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.keys" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.keys</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>iOS 8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values" title="values() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;Array Iterator&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x6BCF;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x503C;&#x3002;"><code>Array.prototype.values()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#xA0;Array Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x6570;&#x7EC4;&#x4E2D;&#x6BCF;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x7684;&#x952E;&#x503C;&#x5BF9;&#x3002;"><code>Array.prototype.entries()</code></a></li>
</ul>
                  
                
              