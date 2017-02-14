
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>size</strong></code>&#xA0;&#x53EF;&#x8BBF;&#x95EE;&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a> &#x5BF9;&#x8C61;&#x7684;&#x5143;&#x7D20;&#x6570;&#x91CF;.</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>size &#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x4E00;&#x4E2A;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A; Map &#x5BF9;&#x8C61;&#x6709;&#x591A;&#x5C11;&#x4E2A;&#x952E;&#x503C;&#x5BF9;&#x3002;size &#x662F;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#xFF0C;&#x5B83;&#x5BF9;&#x5E94;&#x7684; set &#x65B9;&#x6CD5;&#x662F; undefined&#xFF0C;&#x5373;&#x4E0D;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#x7684;&#x503C;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush:js">var myMap = new Map();
myMap.set(&quot;a&quot;, &quot;alpha&quot;);
myMap.set(&quot;b&quot;, &quot;beta&quot;);
myMap.set(&quot;g&quot;, &quot;gamma&quot;);

myMap.size // 3
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-map.prototype.size" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.size</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-map.prototype.size" class="external" lang="en" hreflang="en">ECMAScript 2016 Draft (7th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.size</small></a></td>
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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/19" title="Released on 2013-02-19.">19</a> (19)</td>
   <td>11</td>
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
   <td>38</td>
   <td>19.0 (19)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Gecko-specific_&#x63D0;&#x9192;">Gecko-specific &#x63D0;&#x9192;</h2>

<ul>
 <li>&#x4ECE; Gecko 13 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10) &#x5230;&#xA0;Gecko 18 (Firefox 18 / Thunderbird 18 / SeaMonkey 2.15 / Firefox OS 1.0.1 / Firefox OS 1.1) &#xFF0C;size &#x5C5E;&#x6027;&#x4F7F;&#x7528;&#xA0;<strong><code>Map.prototype.size()</code></strong> &#x65B9;&#x6CD5;&#x5B9E;&#x73B0;&#xFF0C;&#x5728; 18 &#x4EE5;&#x540E;&#x7684;&#x7248;&#x672C;&#x4E2D;&#x5DF2;&#x7ECF;&#x6539;&#x4E3A;&#x5C5E;&#x6027;&#x3002;&#xA0;&#x9075;&#x5FAA;&#x4E86;ECMAScript 6 &#x89C4;&#x8303;&#xA0;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=807001" class="external" title="FIXED: Map.prototype.size and Set.prototype.size should be accessor properties">bug&#xA0;807001</a>).</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x9605;&#x8BFB;">&#x76F8;&#x5173;&#x9605;&#x8BFB;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a></li>
</ul>
                  
                
              