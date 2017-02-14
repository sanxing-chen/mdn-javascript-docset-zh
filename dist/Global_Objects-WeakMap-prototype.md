
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>WeakMap</strong></code><strong><code>.prototype</code></strong>&#x5C5E;&#x6027;&#x8868;&#x73B0;&#x4E3A; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a>&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;</p>

<div><table class="standard-table"> 
  <thead> 
    <tr> 
      <th colspan="2" class="header"><code>WeakMap.prototype</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a> &#x5B9E;&#x4F8B;&#x4ECE; <a title="WeakMap.prototype&#x5C5E;&#x6027;&#x8868;&#x73B0;&#x4E3A; {{jsxref(&quot;WeakMap&quot;)}}&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype"><code>WeakMap.prototype</code></a>&#x7EE7;&#x627F;&#x4E86;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x5728;<code>WeakMap&#x6784;&#x9020;&#x5668;&#x4E2D;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;&#x4ECE;&#x800C;&#x4F7F;&#x5F97;&#x6240;&#x6709;</code>&#x5B9E;&#x4F8B;&#x4E2D;&#x90FD;&#x6709;&#x6548;&#x3002;</p>

<p><code>WeakMap.prototype</code> &#x672C;&#x8EAB;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x666E;&#x901A;&#x7684;&#x5BF9;&#x8C61;&#xFF1A;</p>

<pre class="brush: js">Object.prototype.toString.call(WeakMap.prototype); // &quot;[object Object]&quot;</pre>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>WeakMap.prototype.constructor</code></dt>
 <dd>&#x8FD4;&#x56DE;&#x521B;&#x5EFA;WeakMap&#x5B9E;&#x4F8B;&#x7684;&#x539F;&#x578B;&#x51FD;&#x6570;&#x3002; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a>&#x51FD;&#x6570;&#x662F;&#x9ED8;&#x8BA4;&#x7684;&#x3002;</dd>
</dl>

<h2 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a title="delete() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE;&#x4E00;&#x4E2A; WeakMap &#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete"><code>WeakMap.prototype.delete(key)</code></a></dt>
 <dd>&#x79FB;&#x9664;key&#x7684;&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x3002;&#x6267;&#x884C;&#x540E; <code>WeakMap.prototype.has(key)&#x8FD4;&#x56DE;</code><code>false&#x3002;</code></dd>
 <dt><a title="get()&#xA0;&#x8FD4;&#x56DE; &#xA0;WeakMap&#xA0;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"><code>WeakMap.prototype.get(key)</code></a></dt>
 <dd>&#x8FD4;&#x56DE;<code>key&#x5173;&#x8054;&#x5BF9;&#x8C61;</code>, &#x6216;&#x8005; <code>undefined</code>(&#x6CA1;&#x6709;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x65F6;)&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"><code>WeakMap.prototype.has(key)</code></a></dt>
 <dd>&#x6839;&#x636E;&#x662F;&#x5426;&#x6709;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Boolean&#x503C;&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set" class="new"><code>WeakMap.prototype.set(key, value)</code></a></dt>
 <dd>&#x5728;WeakMap&#x4E2D;&#x8BBE;&#x7F6E;&#x4E00;&#x7EC4;key&#x5173;&#x8054;&#x5BF9;&#x8C61;&#xFF0C;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A; <code>WeakMap</code>&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><s class="obsoleteElement"><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear"><code>WeakMap.prototype.clear()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></s></dt>
 <dd><s class="obsoleteElement">&#x4ECE;<code>WeakMap&#x4E2D;&#x79FB;&#x9664;&#x6240;&#x6709;&#x7684;</code> key/value &#x3002; &#x6CE8;&#x610F;&#xFF0C; &#x8FD9;&#x662F;&#x4E00;&#x4E2A;WeakMap&#x7C7B;&#x578B;&#x5BF9;&#x8C61;&#x9700;&#x8981;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x96BE;&#x9053;&#x4E0D;&#x662F;&#x5417;&#xFF1F; (&#x53C2;&#x770B; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/WeakMap"><code>WeakMap</code></a>)</s></dd>
</dl>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap.prototype" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">WeakMap.prototype</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-weakmap.prototype" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">WeakMap.prototype</small></a></td>
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
  <tr>
   <td>Ordinary object</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2015-08-11." href="/en-US/Firefox/Releases/40">40</a> (40)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td>6.0 (6.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
  <tr>
   <td>Ordinary object</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>40.0 (40)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="Map.prototype &#x8868;&#x793A;&#x6784;&#x9020;&#x5668; Map &#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype"><code>Map.prototype</code></a></li>
</ul>
                  
                
              