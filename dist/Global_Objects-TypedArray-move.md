
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03; Gecko 34 (Firefox 34 / Thunderbird 34 / SeaMonkey 2.31)</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p><strong><code>move()</code></strong>&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5E8F;&#x5217;&#x590D;&#x5236;&#x5230;&#x4EE5;<code>target</code>&#x8D77;&#x59CB;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x4F46;&#x662F;&#xFF0C;&#x8FD9;&#x4E2A;&#x975E;&#x6807;&#x51C6;&#x65B9;&#x6CD5;&#x5DF2;&#x7ECF;&#x88AB;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new"><code>TypedArray.prototype.copyWithin()</code></a> &#x6807;&#x51C6;&#x65B9;&#x6CD5;&#x53D6;&#x4EE3;&#x3002;<em>TypedArray</em> &#x662F;&#x8FD9;&#x91CC;&#x7684; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x7C7B;&#x578B;</a> &#x4E4B;&#x4E00;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>typedarr</var>ay.move(start, end, target)
</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>start</dt>
 <dd>&#x6E90;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x7684;&#x4E0B;&#x6807;&#xFF0C;&#x5728;&#x8FD9;&#x91CC;&#x5F00;&#x59CB;&#x590D;&#x5236;&#x5143;&#x7D20;&#x3002;</dd>
 <dt>end</dt>
 <dd>&#x6E90;&#x7EC8;&#x6B62;&#x4F4D;&#x7F6E;&#x7684;&#x4E0B;&#x6807;&#xFF0C;&#x5728;&#x8FD9;&#x91CC;&#x505C;&#x6B62;&#x590D;&#x5236;&#x5143;&#x7D20;&#x3002;</dd>
 <dt>target</dt>
 <dd>&#x76EE;&#x6807;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x7684;&#x4E0B;&#x6807;&#xFF0C;&#x590D;&#x5236;&#x5143;&#x7D20;&#x5230;&#x8FD9;&#x91CC;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4FEE;&#x6539;&#x540E;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_move_&#x65B9;&#x6CD5;">&#x4F7F;&#x7528; <code>move</code> &#x65B9;&#x6CD5;</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1,2,3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.move(0,3,3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p> &#x5E76;&#x4E0D;&#x662F;&#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x3002;&#x7531; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin" class="new"><code>TypedArray.prototype.copyWithin()</code></a>&#x53D6;&#x4EE3;&#x3002; </p>

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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span> [1]</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] &#x5047;&#x8BBE;&#x53EA;&#x5728; Firefox 16 &#x5230; 34 &#x7684; Aurora &#x548C; Nightly &#x7248;&#x672C;&#x4E2D;&#x3002;</p>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript &#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;</a></li>
 <li><a title="&#x4E00;&#x4E2A;TypedArray &#x5BF9;&#x8C61;&#x63CF;&#x8FF0;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;(array-like)&#x89C6;&#x56FE;&#x3002;&#x6CA1;&#x6709;&#x540D;&#x4E3A;TypedArray&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x6CA1;&#x6709;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684;TypedArray&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x8BB8;&#x591A;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x5176;&#x503C;&#x662F;&#x4E0B;&#x9762;&#x5217;&#x51FA;&#x7684;&#x7279;&#x5B9A;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#x7684;&#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x5728;&#x4E0B;&#x9762;&#x7684;&#x9875;&#x9762;&#x4E2D;&#xFF0C;&#x4F60;&#x4F1A;&#x627E;&#x5230;&#x53EF;&#x7528;&#x4E8E;&#x5305;&#x542B;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x7684;&#x5143;&#x7D20;&#x7684;&#x4EFB;&#x4F55;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x5E38;&#x89C1;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a></li>
 <li><a title="&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x5927;&#x5C0F;&#x7684;ArrayBuffer&#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x90FD;&#x88AB;&#x521D;&#x59CB;&#x5316;&#x4E3A;0&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
</ul>
                  
                
              