
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Math.acosh()</code></strong><code>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x7684;&#x53CD;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x503C;&#xFF0C;&#x5373;&#xFF1A;</code></p>

<p><math display="block"><semantics><mrow><mo>&#x2200;</mo><mi>x</mi><mo>&#x2265;</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo rspace="thinmathspace" lspace="0em">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo rspace="thinmathspace" lspace="0em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>&#x2265;</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo rspace="0em" lspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.acosh(<var>x</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x53C2;&#x6570;&#x7684;&#x53CD;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x5C0F;&#x4E8E; 1 &#x5219;&#x8FD4;&#x56DE;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x56E0;&#x4E3A;<code>acosh()</code>&#x662F;Math&#x5BF9;&#x8C61;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x4F60;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#x5B83;&#xFF1A;<code>Math.acosh()</code>, &#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;Math&#x5B9E;&#x4F8B;&#x7684;&#x5C5E;&#x6027;&#xFF08;Math&#x4E0D;&#x662F;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF09;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Math.acosh()">&#x4F7F;&#x7528; <code>Math.acosh()</code></h3>

<pre class="brush: js">Math.acosh(-1);  // NaN
Math.acosh(0);   // NaN
Math.acosh(0.5); // NaN
Math.acosh(1);   // 0
Math.acosh(2);   // 1.3169578969248166
</pre>

<p>&#x5F53;&#x53C2;&#x6570;&#x5C0F;&#x4E8E;1&#x65F6;&#xFF0C;&#xA0;<code>Math.acosh()</code>&#x5C06;&#x8FD4;&#x56DE; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 id="&#x66FF;&#x4EE3;&#x65B9;&#x6848;">&#x66FF;&#x4EE3;&#x65B9;&#x6848;</h2>

<p>&#x5F53;&#xA0;<math><semantics><mrow><mi>x</mi><mo>&#x2265;</mo><mn>1</mn></mrow></semantics></math> &#x65F6;&#xFF0C;&#x90FD;&#x6709;&#xA0;<math><semantics><mrow><mo rspace="thinmathspace" lspace="0em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo rspace="0em" lspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math>&#xA0;&#xFF0C;&#x56E0;&#x6B64;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4EE5;&#x4E0B;&#x51FD;&#x6570;&#x6765;&#x6A21;&#x4EFF;Math.acosh()&#xFF1A;</p>

<pre class="brush: js">Math.acosh = Math.acosh || function(x) {
  return Math.log(x + Math.sqrt(x * x - 1));
};
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x7248;&#x672C;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.acosh">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.acosh</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-math.acosh">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Math.acosh</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

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
   <td><a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25</a> (25)</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25.0 (25)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Math.asinh() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x6570;&#x5B57;&#x7684;&#x53CD;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;, &#x5373;&#xFF1A;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh"><code>Math.asinh()</code></a></li>
 <li><a title="Math.atanh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x53CD;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x503C;, &#x5373;&#xFF1A;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh"><code>Math.atanh()</code></a></li>
 <li><a title="Math.cosh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x7684;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x51FD;&#x6570;, &#x53EF;&#x7528; constant e &#x8868;&#x793A;:" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh"><code>Math.cosh()</code></a></li>
 <li><a title="Math.sinh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;(&#x5355;&#x4F4D;&#x4E3A;&#x89D2;&#x5EA6;)&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"><code>Math.sinh()</code></a></li>
 <li><a title="Math.tanh()&#xA0;&#x51FD;&#x6570;&#x5C06;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x51FD;&#x6570;&#x503C;&#xFF0C;&#x8BA1;&#x7B97;&#x5982;&#x4E0B;:" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh"><code>Math.tanh()</code></a></li>
</ul>
                  
                
              