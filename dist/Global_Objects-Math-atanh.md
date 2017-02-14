
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Math.atanh()</code></strong>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x53CD;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x503C;, &#x5373;&#xFF1A;</p>

<p><math display="block"><semantics><mrow><mo>&#x2200;</mo><mi>x</mi><mo>&#x220A;</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.atanh(<var>x</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6570;&#x503C;</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x7531;&#x4E8E;&#xA0;<code>atanh()</code>&#xA0;&#x662F;&#xA0;<code>Math &#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;</code>,&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.atanh()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code>&#xA0;&#x5B9E;&#x4F8B;&#x7684;&#x65B9;&#x6CD5;&#xFF08;<code>Math &#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;</code>&#xFF09;&#x3002;&#xA0;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Math.atanh()"><code>&#x4F7F;&#x7528; Math.atanh()</code></h3>

<pre class="brush: js">Math.atanh(-2);  // NaN
Math.atanh(-1);  // -Infinity
Math.atanh(0);   // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1);   // Infinity
Math.atanh(2);   // NaN
</pre>

<p>&#x5BF9;&#x4E8E;&#x5927;&#x4E8E;1&#x6216;&#x662F;&#x5C0F;&#x4E8E;&#xFF0D;1&#x7684;&#x503C;&#xFF0C;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a> &#x3002;</p>

<h2 id="Polyfill">Polyfill</h2>

<p>For&#xA0;\left|x\right| &lt; 1, we have \operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)&#xA0;so this can be emulated by the following function:</p>

<pre class="brush: js">Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.atanh" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.atanh</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-math.atanh" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Math.atanh</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
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
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh" class="new"><code>Math.acosh()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" class="new"><code>Math.asinh()</code></a></li>
 <li><a title="Math.cosh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x7684;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x51FD;&#x6570;, &#x53EF;&#x7528; constant e &#x8868;&#x793A;:" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh"><code>Math.cosh()</code></a></li>
 <li><a title="Math.sinh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;(&#x5355;&#x4F4D;&#x4E3A;&#x89D2;&#x5EA6;)&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"><code>Math.sinh()</code></a></li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh" class="new"><code>Math.tanh()</code></a></li>
</ul>
                  
                
              