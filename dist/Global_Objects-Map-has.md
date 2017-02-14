
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p>&#x65B9;&#x6CD5;<code><strong>has()</strong></code>&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;bool&#x503C;&#xFF0C;&#x7528;&#x6765;&#x8868;&#x660E;map &#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x6307;&#x5B9A;&#x5143;&#x7D20;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>myMap</em>.has(key);</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>key</dt>
 <dd>&#x5FC5;&#x586B;. &#x7528;&#x6765;&#x68C0;&#x6D4B;&#x662F;&#x5426;&#x5B58;&#x5728;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x952E;&#x503C;.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<dl>
 <dt>Boolean</dt>
 <dd>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x5B58;&#x5728;&#x4E8E;Map&#x4E2D;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;true&#x3002;&#x5176;&#x4ED6;&#x60C5;&#x51B5;&#x8FD4;&#x56DE;false</dd>
</dl>

<h2 id="&#x6848;&#x4F8B;">&#x6848;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;has&#x65B9;&#x6CD5;">&#x4F7F;&#x7528;has&#x65B9;&#x6CD5;</h3>

<pre class="brush: js">var myMap = new Map();
myMap.set(&quot;bar&quot;, &quot;foo&quot;);

myMap.has(&quot;bar&quot;);  // returns true
myMap.has(&quot;baz&quot;);  // returns false
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype.has" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.has</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <th>&#x6D4F;&#x89C8;&#x5668;</th>
   <th>Chrome&#x8C37;&#x6B4C;</th>
   <th>Firefox (Gecko)&#x706B;&#x72D0;</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;</td>
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/13" title="Released on 2012-06-05.">13.0</a> (13.0)</td>
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
   <th>&#x6D4F;&#x89C8;&#x5668;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x517C;&#x5BB9;&#x7248;&#x672C;</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>38</td>
   <td>13.0 (13.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Map" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/set" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Map.prototype.set()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/get" title="get()&#xA0;&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#xA0;Map &#x5BF9;&#x8C61;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;"><code>Map.prototype.get()</code></a></li>
</ul>
                  
                
              