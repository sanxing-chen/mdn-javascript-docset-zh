
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>delete()</strong></code> &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x4ECE;&#x4E00;&#x4E2A; <code>Set</code> &#x5BF9;&#x8C61;&#x4E2D;&#x5220;&#x9664;&#x6307;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>mySet</em>.delete(value);</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt>value</dt>
 <dd>&#x5C06;&#x8981;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6210;&#x529F;&#x5220;&#x9664;&#x8FD4;&#x56DE; <code>true</code>&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; <code>false&#x3002;</code></p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var mySet = new Set();
mySet.add(&quot;foo&quot;);

mySet.delete(&quot;bar&quot;); // &#x8FD4;&#x56DE; false&#xFF0C;&#x4E0D;&#x5305;&#x542B; &quot;bar&quot; &#x8FD9;&#x4E2A;&#x5143;&#x7D20;
mySet.delete(&quot;foo&quot;); // &#x8FD4;&#x56DE; true&#xFF0C;&#x5220;&#x9664;&#x6210;&#x529F;

mySet.has(&quot;foo&quot;);    // &#x8FD4;&#x56DE; false&#xFF0C;&quot;bar&quot; &#x5DF2;&#x7ECF;&#x6210;&#x529F;&#x5220;&#x9664;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.delete" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Set.prototype.delete</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-set.prototype.delete" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Set.prototype.delete</small></a></td>
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
   <td><a title="Released on 2012-06-05." href="/en-US/Firefox/Releases/13">13.0</a> (13.0)</td>
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

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a></li>
 <li><a title="clear() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x6E05;&#x7A7A;&#x4E00;&#x4E2A; Set &#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear"><code>Set.prototype.clear()</code></a></li>
</ul>
                  
                
              