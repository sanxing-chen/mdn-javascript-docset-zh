
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong>has() </strong>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#x6765;&#x6307;&#x793A;&#x5BF9;&#x5E94;&#x7684;&#x503C;value&#x662F;&#x5426;&#x5B58;&#x5728;Set&#x5BF9;&#x8C61;&#x4E2D;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>mySet</em>.has(value);</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>value</dt>
 <dd>&#x9700;&#x8981;. &#x9700;&#x8981;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;Set&#x7684;&#x503C;.</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<dl>
 <dt>Boolean</dt>
 <dd>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF08;value&#xFF09;&#x5B58;&#x5728;&#x4E8E;Set&#x5BF9;&#x8C61;&#x5F53;&#x4E2D;&#xFF0C;&#x8FD4;&#x56DE;<code>true</code>; &#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;<code>false</code>.</dd>
</dl>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Testing_size_of_all_array_elements" id="Example:_Testing_size_of_all_array_elements">Example: Using the <code>has</code> method</h3>

<pre class="brush: js">var mySet = new Set();
mySet.add(&quot;foo&quot;);

mySet.has(&quot;foo&quot;);  // returns true
mySet.has(&quot;bar&quot;);  // returns false
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
   <td><a href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-set.prototype.has" class="external" lang="en" hreflang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Set.prototype.has</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
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
   <td>iOS 8</td>
  </tr>
 </tbody>
</table>
</div>

<h3 id="&#x76F8;&#x5173;&#x8FDE;&#x63A5;"><span style="font-size: 30px; letter-spacing: -1px; line-height: 30px;"><strong>&#x76F8;&#x5173;&#x8FDE;&#x63A5;</strong></span></h3>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Set</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add" title="add() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x7ED9;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.add()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete" title="delete() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;"><code>Set.prototype.delete()</code></a></li>
</ul>
                  
                
              