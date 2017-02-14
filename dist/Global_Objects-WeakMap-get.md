
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>get()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE; &#xA0;<code>WeakMap</code>&#xA0;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>wm</em>.get(key);</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>key</dt>
 <dd>&#x5FC5;&#x987B;&#x3002;&#xA0;&#x60F3;&#x8981;&#x4ECE;&#xA0;<code>WeakMap&#xA0;</code>&#x83B7;&#x53D6;&#x7684;&#x5143;&#x7D20;&#x7684;&#x952E;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<h3 id="&#x8FD4;&#x56DE;&#x4E0E;&#x6307;&#x5B9A;&#x952E;&#x76F8;&#x5173;&#x8054;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;_WeakMap_&#x5BF9;&#x8C61;&#x627E;&#x4E0D;&#x5230;&#x8FD9;&#x4E2A;&#x952E;&#x5219;&#x8FD4;&#x56DE;_undefined&#x3002;"><span style="font-size: 14px; line-height: 1.5;">&#x8FD4;&#x56DE;&#x4E0E;&#x6307;&#x5B9A;&#x952E;&#x76F8;&#x5173;&#x8054;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#xA0;</span><code style="font-size: 14px; font-style: normal; font-weight: normal; line-height: 1.5;">WeakMap</code><span style="font-size: 14px; line-height: 1.5;"> &#x5BF9;&#x8C61;&#x627E;&#x4E0D;&#x5230;&#x8FD9;&#x4E2A;&#x952E;&#x5219;&#x8FD4;&#x56DE;&#xA0;</span><code style="font-size: 14px; font-style: normal; font-weight: normal; line-height: 1.5;">undefined</code><span style="font-size: 14px; line-height: 1.5;">&#x3002;</span></h3>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_get_&#x65B9;&#x6CD5;">&#x4F7F;&#x7528;&#xA0;<code>get&#xA0;</code>&#x65B9;&#x6CD5;<code>&#xA0;</code></h3>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, &quot;foo&quot;);

wm.get(window); // &#x8FD4;&#x56DE; &quot;foo&quot;.
wm.get(&quot;baz&quot;);  // &#x8FD4;&#x56DE; undefined.
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap.prototype.get" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">WeakMap.prototype.get</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-weakmap.prototype.get" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">WeakMap.prototype.get</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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

<h2 id="Firefox_&#x4E2D;&#x7684;&#x6CE8;&#x610F;&#x4E8B;&#x9879;">Firefox &#x4E2D;&#x7684;&#x6CE8;&#x610F;&#x4E8B;&#x9879;</h2>

<ul>
 <li>Prior to SpiderMonkey 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35), this method threw a <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> when the key parameter was not an object. However, the latest ES6 standard specifies to return <code>undefined</code> instead. Furthermore, <code>WeakMap.prototype.get</code> accepted an optional second argument as a fallback value, which is not part of the standard. Both non-standard behaviors are removed in version 38 and higher (<a title="FIXED: WeakMap.get, has and delete should not throw when key param is not an object" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1127827" class="external">bug&#xA0;1127827</a>).</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a></li>
 <li><a title="set() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x6307;&#x5B9A;&#x7684;key&#x548C;value&#x5728; WeakMap&#x5BF9;&#x8C61;&#x4E2D;&#x6DFB;&#x52A0;&#x65B0;/&#x66F4;&#x65B0;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set"><code>WeakMap.set()</code></a></li>
 <li><a title="has() &#x65B9;&#x6CD5;&#x6839;&#x636E;WeakMap&#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;key&#x952E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;boolean&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"><code>WeakMap.has()</code></a></li>
</ul>
                  
                
              