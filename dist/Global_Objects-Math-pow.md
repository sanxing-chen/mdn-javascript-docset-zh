
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>Math.pow()</strong></code> &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x57FA;&#x6570;&#xFF08;<code>base</code>&#xFF09;&#x7684;&#x6307;&#x6570;&#xFF08;<code>exponent</code>&#xFF09;&#x6B21;&#x5E42;<code>&#xFF0C;&#x5373;</code><span style="line-height: 1.572;">&#xA0;</span><code style="font-size: 14px;">base<sup>exponent</sup></code><span style="line-height: 1.572;">&#x3002;</span></p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code>Math.pow(<em>base</em>, <em>exponent</em>) </code></pre>
<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>base</code></dt>
 <dd>
  &#x57FA;&#x6570;</dd>
 <dt>
  <code>exponent</code></dt>
 <dd>
  &#x6307;&#x6570;</dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x7531;&#x4E8E;&#xA0;<code>pow</code>&#xA0;&#x662F;&#xA0;<code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.pow()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_Math.pow" name="Example:_Using_Math.pow">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>Math.pow</code></h3>
<pre class="brush:js">function raisePower(x,y) {
   return Math.pow(x,y)
}</pre>
<p>&#x5982;&#x679C;&#xA0;<code>x</code>&#xA0;&#x662F; 7 &#xFF0C;&#x4E14;&#xA0;<code>y</code>&#xA0;&#x662F; 2&#xFF0C;&#x5219; raisePower &#x51FD;&#x6570;&#x8FD4;&#x56DE; 49 &#xFF08;7 &#x7684; 2 &#x6B21;&#x5E42;&#xFF09;&#x3002;</p>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.13" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.pow</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.pow" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.pow</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li>The <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math&#xA0;&#x4E3A;&#x65B9;&#x4FBF;&#x6570;&#x5B66;&#x8BA1;&#x7B97;&#x6240;&#x9700;&#x7684;&#x5E38;&#x91CF;&#x548C;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.&#x8BE5;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#x5BF9;&#x8C61;."><code>Math</code></a> object it belongs to.</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp" title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;"><code>Math.exp()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log" title="Math.log()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.log()</code></a></li>
</ul>
                  
                
              