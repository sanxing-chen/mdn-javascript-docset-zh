
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x5982;&#x679C;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;<code><strong>findIndex()</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684; <strong>&#x4E0B;&#x6807;</strong>&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE; -1&#x3002; <em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<p>&#x540C;&#x65F6;&#x8BF7;&#x53C2;&#x89C1;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex"><code>find()</code></a>&#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x4E86;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x53D1;&#x73B0;&#x5143;&#x7D20;&#x7684; <strong>&#x503C;</strong> &#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5B83;&#x7684;&#x4E0B;&#x6807;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.findIndex(<var>callback</var>[, <var>thisArg</var>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x7528;&#x4E8E;&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x4E0A;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x53D7;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;
 <dl>
  <dt><code>element</code></dt>
  <dd>&#x8981;&#x5904;&#x7406;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x3002;</dd>
  <dt><code>index</code></dt>
  <dd>&#x8981;&#x5904;&#x7406;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x4E0B;&#x6807;</dd>
  <dt><code>array</code></dt>
  <dd><code>find</code> &#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x6267;&#x884C;<code>callback</code>&#x65F6;&#x7684;<code>this</code>&#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C;&#x5143;&#x7D20;&#x901A;&#x8FC7;&#x4E86;&#x6D4B;&#x8BD5;&#xFF0C;&#x5219;&#x4E3A;&#x6570;&#x7EC4;&#x4E0B;&#x6807;&#xFF0C;&#x5426;&#x5219;&#x4E3A; -1&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>findIndex</code> &#x65B9;&#x6CD5;&#x5BF9;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#xA0;<code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x76F4;&#x5230;&#x5B83;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x4F7F;&#xA0;<code>callback</code> &#x8FD4;&#x56DE;&#xA0;<em>true</em>&#x7684;&#x5143;&#x7D20;&#x3002;&#x5982;&#x679C;&#x53D1;&#x73B0;&#x4E86;&#x4E00;&#x4E2A;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C;<code>find</code> &#x65B9;&#x6CD5;&#x5C06;&#x4F1A;&#x7ACB;&#x5373;&#x8FD4;&#x56DE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x4E0B;&#x6807;&#x3002;&#x5426;&#x5219;&#xFF0C;<code>findIndex</code> &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE; -1&#x3002;<code>callback</code> &#x53EA;&#x4F1A;&#x5BF9;&#x90A3;&#x4E9B;&#x5DF2;&#x7ECF;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;&#x4E0D;&#x4F1A;&#x5BF9;&#x90A3;&#x4E9B;&#x88AB;&#x5220;&#x9664;&#x6216;&#x4ECE;&#x6765;&#x6CA1;&#x88AB;&#x8D4B;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x8C03;&#x7528;&#x3002;</p>

<p><code>callback</code> &#x4EE5;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#x8C03;&#x7528;&#xFF1A;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5143;&#x7D20;&#x7D22;&#x5F15;&#xFF0C;&#x4EE5;&#x53CA;&#x8981;&#x904D;&#x5386;&#x7684;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x5982;&#x679C;&#x5C06;<code>thisArg</code>&#x53C2;&#x6570;&#x63D0;&#x4F9B;&#x7ED9;<code>findIndex</code>&#xFF0C;&#x5B83;&#x4F1A;&#x5728;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x9012;&#x7ED9;<code>callback</code>&#xFF0C;&#x4F5C;&#x4E3A;&#x5B83;&#x7684; <code>this</code>&#x503C;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#xFF0C;&#x4F1A;&#x4F7F;&#x7528;<code>undefined</code>&#x3002;</p>

<p><code>findIndex</code> &#x4E0D;&#x4FEE;&#x6539;&#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x7531; <code>findIndex</code>&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;&#x8303;&#x56F4;&#x5728;<code>callback</code>&#x8C03;&#x7528;&#x4E4B;&#x524D;&#x5C31;&#x786E;&#x5B9A;&#x4E86;&#x3002; &#x5728; <code>findIndex</code>&#x8C03;&#x7528;&#x4E4B;&#x540E;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x7531; <code>callback</code>&#x8BBF;&#x95EE;&#x3002; &#x5982;&#x679C;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x88AB;&#x6539;&#x53D8;&#xFF0C;&#x6216;&#x88AB;&#x5220;&#x9664;&#xFF0C;&#x5B83;&#x4EEC;&#x4F20;&#x7ED9;<code>callback</code>&#x7684;&#x503C;&#x662F;<code>findIndex</code> &#x8BBF;&#x95EE;&#x5B83;&#x4EEC;&#x65F6;&#x5019;&#x7684;&#x503C;&#x3002;&#x5DF2;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x5BFB;&#x627E;&#x8D28;&#x6570;&#x7684;&#x4E0B;&#x6807;">&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x5BFB;&#x627E;&#x8D28;&#x6570;&#x7684;&#x4E0B;&#x6807;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x5728;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x5BFB;&#x627E;&#x8D28;&#x6570;&#x5143;&#x7D20;&#x7684;&#x4E0B;&#x6807;&#xFF08;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x8D28;&#x6570;&#x5219;&#x8FD4;&#x56DE; -1&#xFF09;.</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, &#x672A;&#x53D1;&#x73B0;
console.log(uint16.findIndex(isPrime)); // 2
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">TypedArray.prototype.findIndex = Array.prototype.findIndex = Array.prototype.findIndex || function(evaluator, thisArg) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&apos;use strict&apos;;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (!this) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;throw new TypeError(&apos;Array.prototype.some called on null or undefined&apos;);
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (typeof(evaluator) !== &apos;function&apos;) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (typeof(evaluator) === &apos;string&apos;) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;// &#x5C1D;&#x8BD5;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x51FD;&#x6570;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if ( ! (evaluator = eval(evaluator)) ){
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;throw new TypeError();
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;} else {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;throw new TypeError();
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;var i;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (thisArg === undefined) { &#xA0;// &#x4E3A; thisArg &#x4F18;&#x5316;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;for (i in this) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (evaluator(this[i], i, this)) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;return i;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;return -1;
&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;for (i in this) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;&#xA0;if (evaluator.call(thisArg, this[i], i, this)) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;&#xA0;&#xA0; return i;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;return -1;
};</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.findindex" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">%TypedArray%.prototype.findIndex</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">%TypedArray%.prototype.findIndex</small></a></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37.0</a> (37.0)</td>
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
   <td>37.0 (37.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="&#x5982;&#x679C;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#xFF0C;find()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684; &#x503C;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;undefined &#x3002; TypedArray &#x662F;&#x8FD9;&#x91CC;&#x7684; &#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find"><code>TypedArray.prototype.find()</code></a></li>
 <li><a title="indexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5728;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x53EF;&#x4EE5;&#x627E;&#x5230;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002; &#x65B9;&#x6CD5;&#x5177;&#x6709;&#x4E0E; Array.prototype.indexOf() &#x76F8;&#x540C;&#x7684;&#x7B97;&#x6CD5;&#x3002; TypedArray&#x662F;&#x8FD9;&#x91CC;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;&#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf"><code>TypedArray.prototype.indexOf()</code></a></li>
</ul>
                  
                
              