
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>
</div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Math.log2()</strong></code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x4EE5; 2 &#x4E3A;&#x5E95;&#x7684;&#x5BF9;&#x6570;.</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.log2(<em>x</em>)</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4EFB;&#x610F;&#x6570;&#x5B57;.</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x5C0F;&#x4E8E;&#xA0;0, &#x5219;&#x8FD4;&#x56DE;&#xA0;<code>NaN</code>.</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush:js">Math.log2(2)     // 1
Math.log2(1024)  // 10
Math.log2(1)     // 0
Math.log2(0)     // -Infinity
Math.log2(-2)    // NaN
Math.log2(&quot;1024&quot;)// 10
Math.log2(&quot;foo&quot;) // NaN
</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log2" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.log2</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25</a> (25)</td>
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
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math&#xA0;&#x4E3A;&#x65B9;&#x4FBF;&#x6570;&#x5B66;&#x8BA1;&#x7B97;&#x6240;&#x9700;&#x7684;&#x5E38;&#x91CF;&#x548C;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.&#x8BE5;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x5BF9;&#x8C61;."><code>Math</code></a> &#x5BF9;&#x8C61;.</li>
</ul>
                  
                
              