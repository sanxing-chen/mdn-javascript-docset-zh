
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<div class="warning"><strong>&#x975E;&#x6807;&#x51C6;&#x3002;</strong> <code><strong>Iterator</strong></code> &#x51FD;&#x6570;&#x662F;&#x4E00;&#x4E2A; SpiderMonkey &#x4E13;&#x6709;&#x7279;&#x6027;&#xFF0C;&#x5E76;&#x4E14;&#x4F1A;&#x5728;&#x67D0;&#x4E00;&#x65F6;&#x523B;&#x88AB;&#x5220;&#x9664;&#x3002;&#x4E3A;&#x5C06;&#x6765;&#x4F7F;&#x7528;&#x7684;&#x8BDD;&#xFF0C;&#x8BF7;&#x8003;&#x8651;&#x4F7F;&#x7528; <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of" title="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for..of</a> &#x5FAA;&#x73AF;&#x548C;&#xA0; <a href="/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol">&#x8FED;&#x4EE3;&#x534F;&#x8BAE;</a>&#x3002;</div>

<p><code><strong>Iterator</strong></code> &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5B83;&#x5B9E;&#x73B0;&#x4E86;&#x9057;&#x7559;&#x7684;&#x8FED;&#x4EE3;&#x534F;&#x8BAE;&#xFF0C;&#x5E76;&#x4E14;&#x8FED;&#x4EE3;&#x4E86;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">Iterator(<var>object</var>, [keyOnly])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>object</code></dt>
 <dd>&#x8981;&#x8FED;&#x4EE3;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>keyOnly</code></dt>
 <dd>&#xA0;&#x5982;&#x679C;<code>keyOnly</code>&#x662F;&#x771F;&#x503C;&#xFF0C;<code>Iterator.prototype.next</code> <code>&#x53EA;&#x8FD4;&#x56DE;property_name</code> &#x3002;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>&#x8FD4;&#x56DE;&#x8FED;&#x4EE3;&#x4E86;object&#x7684;Iterator</code> &#x5B9E;&#x4F8B;&#x3002;&#x5982;&#x679C;<code>keyOnly</code>&#x4E3A;&#x5047;&#x503C;&#xFF0C;&#x5219;<code>Iterator</code> &#x5B9E;&#x4F8B;&#x8FD4;&#x56DE;&#x6BCF;&#x6B21;&#x8FED;&#x4EE3;&#x800C;&#x751F;&#x6210;&#x7684; <code>[property_name, property_value]</code> &#x6570;&#x7EC4;&#xFF0C;&#x5426;&#x5219;&#xFF0C;&#x5982;&#x679C;<code>keyOnly</code>&#x662F;&#x771F;&#x503C;&#xFF0C;&#x5219;&#x5B83;&#x8FD4;&#x56DE;&#x6BCF;&#x6B21;&#x8FED;&#x4EE3;&#x7684; <code>property_name</code>&#x3002;&#x5982;&#x679C;<code>object</code> &#x662F; <code>Iterator</code> &#x5B9E;&#x4F8B;&#x6216; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator" title="&#x8FD9;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x5BF9;&#x8C61;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570; generator function&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x3002;&#x5E76;&#x4E14;&#x5B83;&#x662F;&#x540C;&#x65F6;&#x9075;&#x5B88;&#xA0;The iterable protocol&#xA0;&#x53EF;&#x904D;&#x5386;&#x534F;&#x8BAE;&#x548C;The&#xA0;iterator protocol&#xA0;&#x8FED;&#x4EE3;&#x5668;&#x6A21;&#x5F0F;&#x534F;&#x8BAE; ."><code>Generator</code></a> &#x5B9E;&#x4F8B; &#xFF0C;&#x5219;&#x5B83;&#x8FD4;&#x56DE; <code>object</code> &#x81EA;&#x8EAB;&#x3002;</p>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code><strong>Iterator.prototype[@@iterator]</strong></code></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x7B26;&#x5408;<a href="/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols" title="&#x51E0;&#x4E2A;&#x65B0;&#x589E;&#x52A0;&#x7684;&#x5230;ECMAScript 2015 (ES6)&#xFF0C;&#x5B83;&#x4E0D;&#x5E76;&#x662F;&#x65B0;&#x7684;&#x5185;&#x7F6E;&#x63D2;&#x4EF6;&#x6216;&#x8BED;&#x6CD5;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x79CD;&#x534F;&#x8BAE;&#x3002;&#x8FD9;&#x79CD;&#x534F;&#x8BAE;&#x80FD;&#x88AB;&#x4EFB;&#x4F55;&#x9075;&#x5FAA;&#x67D0;&#x4E9B;&#x7EA6;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x5B9E;&#x73B0;&#x3002;">&#x8FED;&#x4EE3;&#x534F;&#x8BAE;</a>&#x7684;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x3002;</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><code><strong>Iterator.prototype.next</strong></code></dt>
 <dd>&#x8FD4;&#x56DE;<code>[property_name, property_value]</code> &#x683C;&#x5F0F;&#x6216;<code>property_name</code> &#x7684;&#x4E0B;&#x4E00;&#x9879;&#x3002; &#x5982;&#x679C;&#x6CA1;&#x6709;&#x66F4;&#x591A;&#x9879;&#xFF0C;&#x629B;&#x51FA; <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/StopIteration">StopIteration</a></code> &#x3002;</dd>
</dl>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;">&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</h3>

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};
var iter = Iterator(a);
console.log(iter.next()); // [&quot;x&quot;, 10]
console.log(iter.next()); // [&quot;y&quot;, 20]
console.log(iter.next()); // throws StopIteration
</pre>

<h3 id="&#x4F7F;&#x7528;&#x9057;&#x7559;&#x7684;&#x89E3;&#x6784;for-in&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;">&#x4F7F;&#x7528;&#x9057;&#x7559;&#x7684;<code>&#x89E3;&#x6784;for-in&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;</code></h3>

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var [name, value] in Iterator(a)) {
  console.log(name, value);   // x 10
                              // y 20
}
</pre>

<h3 id="&#x4F7F;&#x7528;for-of&#x8FED;&#x4EE3;">&#x4F7F;&#x7528;<code>for-of&#x8FED;&#x4EE3;</code></h3>

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var [name, value] of Iterator(a)) {  // @@iterator is used
  console.log(name, value);   // x 10
                              // y 20
}
</pre>

<h3 id="&#x8FED;&#x4EE3;&#x5C5E;&#x6027;&#x540D;">&#x8FED;&#x4EE3;&#x5C5E;&#x6027;&#x540D;</h3>

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var name in Iterator(a, true)) {
  console.log(name);   // x
                       // y
}
</pre>

<h3 id="&#x4F20;&#x5165;_Generator_&#x5B9E;&#x4F8B;">&#x4F20;&#x5165; Generator &#x5B9E;&#x4F8B;</h3>

<pre class="brush: js">function* f() {
  yield &apos;a&apos;;
  yield &apos;b&apos;;
}
var g = f();

console.log(g == Iterator(g)); // true

for (var v in Iterator(g)) {
  console.log(v);   // a
                    // b
}
</pre>

<h3 id="&#x4F20;&#x5165;_Iterator_&#x5B9E;&#x4F8B;">&#x4F20;&#x5165; Iterator &#x5B9E;&#x4F8B;</h3>

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

var i = Iterator(a);

console.log(i == Iterator(i)); // true
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p>&#x975E;&#x6807;&#x51C6;&#x3002;&#x4E0D;&#x662F;&#x76EE;&#x524D;&#x4EFB;&#x4F55;&#x6807;&#x51C6;&#x6587;&#x6863;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;</p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators" title="/en-US/docs/JavaScript/Guide/Iterators_and_Generators">Iterators and Generators</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/StopIteration">StopIteration</a></code><br>
  &#xA0;</li>
</ul>
                  
                
              