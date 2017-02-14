
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p>&#xA0;<code><strong>Math.sinh()</strong></code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;(&#x5355;&#x4F4D;&#x4E3A;&#x89D2;&#x5EA6;)&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;.</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">Math.sinh(<em>x</em>)</pre>
<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>x</code></dt>
 <dd>
  &#x4EFB;&#x610F;&#x6570;&#x5B57; (&#x5355;&#x4F4D;&#x4E3A;&#x5EA6;).</dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x7684;&#x56FE;&#x50CF;&#x5982;&#x4E0B;:</p>
<p><img alt="" src="http://upload.wikimedia.org/wikipedia/commons/1/17/Sinh.png" style="width: 300px; height: 300px;"></p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<pre class="brush:js">Math.sinh(0)      // 0
Math.sinh(1)      // 1.1752011936438014
Math.sinh(&quot;-1&quot;)   // -1.1752011936438014
Math.sinh(&quot;foo&quot;)  // NaN
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
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sinh" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.sinh</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial defintion</td>
  </tr>
 </tbody>
</table>
<h2 id="Polyfill">Polyfill</h2>
<p>&#x8BE5;&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp" title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;"><code>Math.exp()</code></a><code>&#xA0;&#x51FD;&#x6570;&#x6765;&#x5B9E;&#x73B0;</code>:</p>
<pre class="brush: js  language-js">function sinh(x){
    return  (Math.exp(x) - Math.exp(-x)) / 2);
}</pre>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" title="Math.acos()&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x53CD;&#x4F59;&#x5F26;&#x503C;&#xFF08;&#x5355;&#x4F4D;&#x4E3A;&#x5F27;&#x5EA6;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.acos()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" title="Math.asin()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5F26;&#xFF08;&#x5355;&#x4F4D;&#x4E3A;&#x5F27;&#x5EA6;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.asin()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan" title="Math.atan()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5207;&#xFF08;&#x4EE5;&#x5F27;&#x5EA6;&#x4E3A;&#x5355;&#x4F4D;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.atan()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2" title="Math.atan2() &#x8FD4;&#x56DE;&#x5176;&#x53C2;&#x6570;&#x6BD4;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5207;&#x503C;&#x3002;"><code>Math.atan2()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" title="Math.cos() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x4F59;&#x5F26;&#x503C;&#x3002;"><code>Math.cos()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan" title="Math.tan() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x6B63;&#x5207;&#x503C;&#x3002;"><code>Math.tan()</code></a></li>
</ul>
                  
                
              