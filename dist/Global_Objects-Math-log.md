
                
                  
                    <p id="Summary"></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Math.log()</strong></code>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#xFF0C;&#x5373;&#xFF1A;</p>

<p><math><semantics><mrow><mo>&#x2200;</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.log(<em>x</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6570;&#x5B57;.</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#x7684;&#xA0;<code>number</code>&#xA0;&#x4E3A;&#x8D1F;&#x6570;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x503C;&#x4E3A;&#xA0;<code>NaN</code>&#x3002;</p>

<p>&#x7531;&#x4E8E;&#xA0;<code style="font-style: normal;">log</code>&#xA0;&#x662F;&#xA0;<code style="font-style: normal;">Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code style="font-style: normal;">Math.log()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code style="font-style: normal;">Math</code>&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_Math.log" id="Example:_Using_Math.log">&#x4F8B;&#x5B50;1:&#x4F7F;&#x7528;<code>Math.log</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x53D8;&#x91CF;&#x7684;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#xFF1A;</p>

<pre class="brush:js">Math.log(-1); // NaN, out of range
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046</pre>

<h3 id="&#x4F8B;&#x5B50;2_&#x4F7F;&#x7528;Math.log&#x65F6;&#x57FA;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x5E95;&#x6570;">&#x4F8B;&#x5B50;2: &#x4F7F;&#x7528;<code>Math.log</code>&#x65F6;&#x57FA;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x5E95;&#x6570;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4EE5;&#xA0;<code>x</code>&#xA0;&#x4E3A;&#x5E95;&#xA0;<code>y</code>&#xA0;&#x7684;&#x5BF9;&#x6570;&#xFF08;&#x65E2;log<sub>x</sub> y&#xFF09;&#xFF1A;</p>

<pre class="brush:js">function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x8FD0;&#x884C;&#xA0;<code>getBaseLog(10, 1000)&#xFF0C;&#x5219;&#x4F1A;&#x8FD4;&#x56DE;</code><code>2.9999999999999996&#xFF0C;&#x975E;&#x5E38;&#x63A5;&#x8FD1;&#x5B9E;&#x9645;&#x7B54;&#x6848;&#xFF1A;3&#xFF0C;&#x539F;&#x56E0;&#x662F;&#x6D6E;&#x70B9;&#x6570;&#x7CBE;&#x5EA6;&#x95EE;&#x9898;&#x3002;</code></p>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.10" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.log</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.log" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.log</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<p></p>

<ul>
 <li>The <a title="Math&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#xFF0C; &#x4E3A;&#x6570;&#x5B66;&#x5E38;&#x91CF;&#x548C;&#x6570;&#x5B66;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math"><code>Math</code></a> object it belongs to.</li>
 <li><a title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp"><code>Math.exp()</code></a></li>
 <li><a title="Math.pow() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x57FA;&#x6570;&#xFF08;base&#xFF09;&#x7684;&#x6307;&#x6570;&#xFF08;exponent&#xFF09;&#x6B21;&#x5E42;&#xFF0C;&#x5373;&#xA0;baseexponent&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow"><code>Math.pow()</code></a></li>
</ul>
                  
                
              