
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong>&#xA0;</strong><code><strong><strong>delete()</strong> </strong>&#x65B9;&#x6CD5;</code>&#x79FB;&#x9664; Map &#x5BF9;&#x8C61;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">myMap.delete(key);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>key</dt>
 <dd>&#x5FC5;&#x987B;&#x3002;&#x952E;&#xFF08;key&#xFF09;&#x5C31;&#x662F;&#x8981;&#x4ECE; Map &#x5BF9;&#x8C61;&#x4E2D;&#x79FB;&#x9664;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5982;&#x679C; Map &#x5BF9;&#x8C61;&#x4E2D;&#x5B58;&#x5728;&#x8BE5;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;<em> true </em>&#x5E76;&#x79FB;&#x9664;&#x5B83;&#xFF1B;&#x5426;&#x5219;&#x5982;&#x679C;&#x8BE5;&#x5143;&#x7D20;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; <em>false</em>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_delete_&#x65B9;&#x6CD5;">&#x4F7F;&#x7528;&#xA0;<code>delete</code> &#x65B9;&#x6CD5;</h3>

<pre class="brush: js">var myMap = new Map();
myMap.set(&quot;bar&quot;, &quot;foo&quot;);

myMap.delete(&quot;bar&quot;); // &#x8FD4;&#x56DE; true&#x3002;&#x6210;&#x529F;&#x5730;&#x79FB;&#x9664;&#x5143;&#x7D20;
myMap.has(&quot;bar&quot;);    // &#x8FD4;&#x56DE; false&#x3002;&quot;bar&quot; &#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x518D;&#x5B58;&#x5728;&#x4E8E; Map &#x5B9E;&#x4F8B;&#x4E2D;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype.delete" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.delete</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-map.prototype.delete" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Map.prototype.delete</small></a></td>
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
</ul>
                  
                
              