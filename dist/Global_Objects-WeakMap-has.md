
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<code><strong>has()</strong></code> &#x65B9;&#x6CD5;&#x6839;&#x636E;WeakMap&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;key&#x952E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;boolean&#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>wm</em>.has(key);</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt>key</dt>
 <dd>&#x5FC5;&#x987B;&#x7684;&#x3002;&#x7528;&#x6765;&#x68C0;&#x6D4B;WeakMap&#x5BF9;&#x8C61;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x5143;&#x7D20;&#x7684;&#x952E;&#x4E3A;key&#x3002;</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<dl>
 <dt>Boolean</dt>
 <dd>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;key&#x5B58;&#x5728;&#x4E8E;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x4E2D;&#x5219;&#x8FD4;&#x56DE;true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;flase&#x3002;</dd>
</dl>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_has&#x65B9;&#x6CD5;">&#x4F7F;&#x7528; <code>has&#x65B9;&#x6CD5;</code></h3>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, &quot;foo&quot;);

wm.has(window); // returns true
wm.has(&quot;baz&quot;);  // returns false
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap.prototype.has" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">WeakMap.prototype.has</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-weakmap.prototype.has" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">WeakMap.prototype.has</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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
   <td>36</td>
   <td><a title="Released on 2011-08-16." href="/en-US/Firefox/Releases/6">6.0</a> (6.0)</td>
   <td>11</td>
   <td>23</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>6.0 (6.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Firefox-&#x7279;&#x6709;&#x8BF4;&#x660E;">Firefox-&#x7279;&#x6709;&#x8BF4;&#x660E;</h2>

<ul>
 <li>&#x76F4;&#x5230;SpiderMonkey 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35), &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x5728;key&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x65F6;&#x4F1A;&#x629B;&#x51FA; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>&#x3002;&#x5B83;&#x5DF2;&#x7ECF;&#x4ECE;&#x7248;&#x672C;38&#x540E;&#x6309;&#x7167;&#x6700;&#x65B0;&#x7248;&#x672C;&#x7684;ES6&#x6807;&#x51C6;&#x4FEE;&#x590D; (<a title="FIXED: WeakMap.get, has and delete should not throw when key param is not an object" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1127827" class="external">bug&#xA0;1127827</a>).</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set" class="new"><code>WeakMap.prototype.set()</code></a></li>
 <li><a title="get()&#xA0;&#x8FD4;&#x56DE; &#xA0;WeakMap&#xA0;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"><code>WeakMap.prototype.get()</code></a></li>
</ul>
                  
                
              