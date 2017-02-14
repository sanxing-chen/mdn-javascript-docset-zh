
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>Math.sqrt()</strong></code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x5E73;&#x65B9;&#x6839;&#xFF0C;&#x5373;&#xFF1A;</p>
<p><math display="block"><semantics><mrow><mo>&#x2200;</mo><mi>x</mi><mo>&#x2265;</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>&#x2265;</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math></p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">
<code>Math.sqrt(<em>x</em>) </code></pre>
<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>x</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x6570;&#x503C;</dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5982;&#x679C;&#x53C2;&#x6570;&#xA0;<code>number</code> &#x4E3A;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#xA0;<code>sqrt</code> &#x8FD4;&#x56DE; <code>NaN</code>&#x3002;</p>
<p>&#x7531;&#x4E8E; <code>sqrt</code>&#xA0;&#x662F;&#xA0;<code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.sqrt()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code>&#xA0;&#x5B9E;&#x4F8B;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_Math.sqrt" name="Example:_Using_Math.sqrt">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>Math.sqrt</code></h3>
<pre class="brush:js">
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN</pre>
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
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.17" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.sqrt</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sqrt" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Math.sqrt</small></a></td>
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
<p>&#xA0;</p>
                  
                
              