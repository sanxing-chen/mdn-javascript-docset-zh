
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>keys()</strong></code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#xA0;<code><strong>Iterator</strong></code> &#x5BF9;&#x8C61;&#x3002;&#x5B83;&#x5305;&#x542B;&#x6309;&#x7167;&#x987A;&#x5E8F;&#x63D2;&#x5165;Map&#x5BF9;&#x8C61;&#x4E2D;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x7684;key&#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>myMap</em>.keys()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x4E00;&#x4E2A;&#x65B0;&#x7684; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a> iterator &#x5BF9;&#x8C61;.</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;_keys()">&#x4F7F;&#x7528;&#xA0;<code>keys()</code></h3>

<pre class="brush:js">var myMap = new Map();
myMap.set(&quot;0&quot;, &quot;foo&quot;);
myMap.set(1, &quot;bar&quot;);
myMap.set({}, &quot;baz&quot;);

var mapIter = myMap.keys();

console.log(mapIter.next().value); // &quot;0&quot;
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype.keys" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Map.prototype.keys</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-map.prototype.keys" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Map.prototype.keys</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<h2 id="Desktop_Mobile"><span style="font-size: 14px; font-weight: normal; line-height: 1.5;"><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></span></h2>

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
   <td><a title="Released on 2013-04-02." href="/en-US/Firefox/Releases/20">20</a> (20)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td>20.0 (20)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x67E5;&#x770B;">&#x67E5;&#x770B;</h2>

<ul>
 <li><a title="entries() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5305;&#x542B;&#xA0;[key, value] &#x5BF9;&#x7684;&#xA0;Iterator &#x5BF9;&#x8C61;&#xFF0C;&#x8FD4;&#x56DE;&#x7684;&#x8FED;&#x4EE3;&#x5668;&#x7684;&#x8FED;&#x4EE3;&#x987A;&#x5E8F;&#x4E0E;&#xA0;Map &#x5BF9;&#x8C61;&#x7684;&#x63D2;&#x5165;&#x987A;&#x5E8F;&#x76F8;&#x540C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/entries"><code>Map.prototype.entries()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/values" class="new"><code>Map.prototype.values()</code></a></li>
</ul>
                  
                
              