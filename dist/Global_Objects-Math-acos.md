
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>Math.acos()</strong></code>&#xA0;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x53CD;&#x4F59;&#x5F26;&#x503C;&#xFF08;&#x5355;&#x4F4D;&#x4E3A;&#x5F27;&#x5EA6;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;</p>
<p><math display="block"><semantics><mrow><mo>&#x2200;</mo><mi>x</mi><mo>&#x220A;</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>&#x220A;</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>&#x3C0;</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math></p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">
Math.acos(<em>x</em>) </pre>
<h2 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h2>
<dl>
 <dt>
  <code>x</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x6570;&#x503C;</dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><code>acos</code>&#xA0;&#x65B9;&#x6CD5;&#x4EE5; -1 &#x5230; 1 &#x7684;&#x4E00;&#x4E2A;&#x6570;&#x4E3A;&#x53C2;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; 0 &#x5230; pi &#xFF08;&#x5F27;&#x5EA6;&#xFF09;&#x7684;&#x6570;&#x503C;&#x3002;&#x5982;&#x679C;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x503C;&#x8D85;&#x51FA;&#x4E86;&#x9650;&#x5B9A;&#x7684;&#x8303;&#x56F4;&#xFF0C;&#x5C06;&#x8FD4;&#x56DE;&#xA0;<code>NaN</code>&#x3002;</p>
<p>&#x7531;&#x4E8E;&#xA0;<code>acos</code> &#x662F; <code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.acos()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5B9E;&#x4F8B;&#x7684;&#x5C5E;&#x6027;&#xFF08;<code>Math</code> &#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF09;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_Math.acos" name="Example:_Using_Math.acos">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>Math.acos</code></h3>
<pre class="brush:js">
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
</pre>
<p>&#x5BF9;&#x4E8E;&#x5C0F;&#x4E8E; -1 &#x6216;&#x5927;&#x4E8E; 1 &#x7684;&#x503C;&#xFF0C;<code>Math.acos</code> &#x8FD4;&#x56DE;&#xA0;<code>NaN</code>&#x3002;</p>
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
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.2" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.acos</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.acos" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.acos</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" title="Math.asin()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5F26;&#xFF08;&#x5355;&#x4F4D;&#x4E3A;&#x5F27;&#x5EA6;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.asin()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan" title="Math.atan()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5207;&#xFF08;&#x4EE5;&#x5F27;&#x5EA6;&#x4E3A;&#x5355;&#x4F4D;&#xFF09;&#xFF0C;&#x5373;&#xFF1A;"><code>Math.atan()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2" title="Math.atan2() &#x8FD4;&#x56DE;&#x5176;&#x53C2;&#x6570;&#x6BD4;&#x503C;&#x7684;&#x53CD;&#x6B63;&#x5207;&#x503C;&#x3002;"><code>Math.atan2()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" title="Math.cos() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x4F59;&#x5F26;&#x503C;&#x3002;"><code>Math.cos()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" title="Math.sin() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x6B63;&#x5F26;&#x503C;&#x3002;"><code>Math.sin()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan" title="Math.tan() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7684;&#x6B63;&#x5207;&#x503C;&#x3002;"><code>Math.tan()</code></a></li>
</ul>
                  
                
              