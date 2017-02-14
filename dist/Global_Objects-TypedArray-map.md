
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>map()</strong></code>&#x65B9;&#x6CD5;&#x5BF9;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x7ED3;&#x679C;&#x6765;&#x521B;&#x5EFA;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002; &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C; <a title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a><em>&#x76F8;&#x540C;&#x3002;</em> <em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.map(<var>callback</var>[, <var>thisArg</var>])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x4EA7;&#x751F;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x53D7;&#x4E09;&#x4E2A;&#x51FD;&#x6570;&#xFF1A;
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x8981;&#x5904;&#x7406;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;</dd>
  <dt><code>index</code></dt>
  <dd>&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x8981;&#x5904;&#x7406;&#x7684;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x7684;&#x4E0B;&#x6807;</dd>
  <dt><code>array</code></dt>
  <dd><code>map</code>&#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x6267;&#x884C;<code>callback</code>&#x65F6;&#x4F5C;&#x4E3A;<code>this</code>&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>map</code>&#x65B9;&#x6CD5;&#x5BF9;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x63D0;&#x4F9B;&#x7684; <code>callback</code>&#x51FD;&#x6570;&#xFF0C;&#x6309;&#x7167;&#x987A;&#x5E8F;&#xFF0C;&#x5E76;&#x4E14;&#x4F1A;&#x4ECE;&#x7ED3;&#x679C;&#x6784;&#x9020;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002; <code>callback</code> &#x53EA;&#x5BF9;&#x62E5;&#x6709;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x4E0B;&#x6807;&#x8C03;&#x7528;&#x3002;&#x5B83;&#x4E0D;&#x4F1A;&#x5BF9;&#x672A;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x88AB;&#x5220;&#x9664;&#x7684;&#x6216;&#x8005;&#x6CA1;&#x6709;&#x8D4B;&#x503C;&#x7684;&#x4E0B;&#x6807;&#x8C03;&#x7528;&#x3002;</p>

<p><code>callback</code> &#x4EE5;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#x8C03;&#x7528;&#xFF1A; &#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5143;&#x7D20;&#x4E0B;&#x6807;&#xFF0C;&#x548C;&#x88AB;&#x904D;&#x5386;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5982;&#x679C;&#x5C06;<code>thisArg</code>&#x53C2;&#x6570;&#x63D0;&#x4F9B;&#x7ED9;<code>map</code>&#xFF0C;&#x5B83;&#x4F1A;&#x5728;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x9012;&#x7ED9;<code>callback</code>&#xFF0C;&#x4F5C;&#x4E3A;&#x5B83;&#x7684; <code>this</code>&#x503C;&#x3002;&#x5426;&#x5219;&#xFF0C;&#x4F1A;&#x4F20;&#x9012;<code>undefined</code> &#x4F5C;&#x4E3A;&#x5B83;&#x7684;<code>this</code> &#x503C;&#x3002;&#xA0; <code>callback</code>&#x6700;&#x7EC8;&#x89C2;&#x6D4B;&#x5230;&#x7684;<code>this</code>&#x503C;&#x7531; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">&#x7528;&#x4E8E;&#x51B3;&#x5B9A;&#x51FD;&#x6570;&#x53EF;&#x89C1;&#x7684;<code>this</code>&#x503C;&#x7684;&#x4E00;&#x822C;&#x89C4;&#x5219;</a>&#x6765;&#x51B3;&#x5B9A;&#x3002;</p>

<p><code>map</code> &#x4E0D;&#x6539;&#x53D8;&#x5728;&#x5176;&#x4E0A;&#x8C03;&#x7528;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#xFF08;&#x867D;&#x7136;&#x5982;&#x679C;&#x8C03;&#x7528;&#x4E86;<code>callback</code>&#x53EF;&#x80FD;&#x4F1A;&#x8FD9;&#x6837;&#x505A;&#xFF09;&#x3002;</p>

<p>&#x7531; <code>map</code>&#x5904;&#x7406;&#x7684;&#x5143;&#x7D20;&#x8303;&#x56F4;&#x5728;<code>callback</code>&#x8C03;&#x7528;&#x4E4B;&#x524D;&#x5C31;&#x786E;&#x5B9A;&#x4E86;&#x3002; &#x5728; <code>map</code>&#x8C03;&#x7528;&#x4E4B;&#x540E;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x7531; <code>callback</code>&#x8BBF;&#x95EE;&#x3002; &#x5982;&#x679C;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x73B0;&#x6709;&#x5143;&#x7D20;&#x88AB;&#x6539;&#x53D8;&#xFF0C;&#x6216;&#x88AB;&#x5220;&#x9664;&#xFF0C;&#x5B83;&#x4EEC;&#x4F20;&#x7ED9;<code>callback</code>&#x7684;&#x503C;&#x662F;<code>map</code> &#x8BBF;&#x95EE;&#x5B83;&#x4EEC;&#x65F6;&#x5019;&#x7684;&#x503C;&#x3002;&#x5DF2;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x5C06;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x6620;&#x5C04;&#x88AB;&#x5E73;&#x65B9;&#x6839;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;">&#x5C06;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x6620;&#x5C04;&#x88AB;&#x5E73;&#x65B9;&#x6839;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x5E76;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#xFF0C;&#x542B;&#x6709;&#x7B2C;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E2D;&#x5143;&#x7D20;&#x7684;&#x5E73;&#x65B9;&#x6839;&#x3002;</p>

<pre class="brush: js">var numbers = new Uint8Array([1, 4, 9]);
var roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3], 
// numbers is still Uint8Array [1, 4, 9]
</pre>

<h3 id="&#x4F7F;&#x7528;&#x542B;&#x6709;&#x53C2;&#x6570;&#x7684;&#x51FD;&#x6570;&#x6765;&#x6620;&#x5C04;&#x7C7B;&#x578B;&#x6570;&#x7EC4;">&#x4F7F;&#x7528;&#x542B;&#x6709;&#x53C2;&#x6570;&#x7684;&#x51FD;&#x6570;&#x6765;&#x6620;&#x5C04;&#x7C7B;&#x578B;&#x6570;&#x7EC4;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5C55;&#x793A;&#x4E86;&#xFF0C;&#x5F53;&#x4F7F;&#x7528;&#x9700;&#x8981;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x51FD;&#x6570;&#x65F6;&#xFF0C;<code>map</code>&#x7684;&#x5DE5;&#x4F5C;&#x65B9;&#x5F0F;&#x3002;&#x5728;<code>map</code>&#x904D;&#x5386;&#x539F;&#x59CB;&#x6570;&#x7EC4;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x53C2;&#x6570;&#x4F1A;&#x81EA;&#x52A8;&#x8D4B;&#x503C;&#x4E3A;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;</p>

<pre class="brush: js">var numbers = new Uint8Array([1, 4, 9]);
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.map" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.map</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x539F;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">TypedArray.prototype.map</small></a></td>
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
   <td><a title="Released on 2015-05-19." href="/en-US/Firefox/Releases/38">38</a> (38)</td>
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
   <td>38.0 (38)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter" class="new"><code>TypedArray.prototype.filter()</code></a></li>
 <li><a title="map() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7531;&#x539F;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x540E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x7EC4;&#x6210;&#x7684;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a></li>
</ul>
                  
                
              