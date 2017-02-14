
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Math.tanh()</code></strong>&#xA0;&#x51FD;&#x6570;&#x5C06;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x51FD;&#x6570;&#x503C;&#xFF0C;&#x8BA1;&#x7B97;&#x5982;&#x4E0B;:</p>

<p><math display="block"><semantics><mrow><mo rspace="0em" lspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mo rspace="0em" lspace="0em">sinh</mo><mi>x</mi></mrow><mrow><mo rspace="0em" lspace="0em">cosh</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>-</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}} {e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.tanh(<var>x</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x5F85;&#x8BA1;&#x7B97;&#x7684;&#x6570;&#x5B57;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6240;&#x7ED9;&#x6570;&#x5B57;&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x503C;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>&#x56E0;&#x4E3A;tanh()&#x662F;Math&#x7684;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;, &#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x76F4;&#x63A5;&#x901A;&#x8FC7;Math.tanh()&#x6765;&#x4F7F;&#x7528;,&#x800C;&#x4E0D;&#x662F;&#x7531;&#x7528;&#x6237;&#x5148;&#x521B;&#x5EFA;&#x51FA;Math&#x5BF9;&#x8C61;&#x518D;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;(Math&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x5668;)&#x3002;</code></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Math.tanh()">&#x4F7F;&#x7528;&#xA0;<code>Math.tanh()</code></h3>

<pre class="brush: js">Math.tanh(0);        // 0
Math.tanh(Infinity); // 1
Math.tanh(1);        // 0.7615941559557649
</pre>

<h2 id="&#x591A;&#x79CD;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;">&#x591A;&#x79CD;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;</h2>

<p>tanh()&#x53EF;&#x4EE5;&#x901A;&#x8FC7;<a title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp"><code>Math.exp()</code></a>&#x51FD;&#x6570;&#x6765;&#x6784;&#x62DF;:</p>

<pre class="brush: js">Math.tanh = Math.tanh || function(x) {
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
  }
}
</pre>

<p>&#x6216;&#x8005;&#x53EA;&#x8C03;&#x7528;&#x4E00;&#x6B21;<a title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp"><code>Math.exp()</code></a>:</p>

<pre class="brush: js">Math.tanh = Math.tanh || function(x) {
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    var y = Math.exp(2 * x);
    return (y - 1) / (y + 1);
  }
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.tanh">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.tanh</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-math.tanh">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Math.tanh</small></a></td>
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
   <th>&#x7279;&#x5F81;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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
   <th>&#x7279;&#x5F81;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh"><code>Math.acosh()</code></a></li>
 <li><a title="Math.asinh() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x6570;&#x5B57;&#x7684;&#x53CD;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;, &#x5373;&#xFF1A;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh"><code>Math.asinh()</code></a></li>
 <li><a title="Math.atanh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x53CD;&#x53CC;&#x66F2;&#x6B63;&#x5207;&#x503C;, &#x5373;&#xFF1A;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh"><code>Math.atanh()</code></a></li>
 <li><a title="Math.cosh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x7684;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x51FD;&#x6570;, &#x53EF;&#x7528; constant e &#x8868;&#x793A;:" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh"><code>Math.cosh()</code></a></li>
 <li><a title="Math.sinh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;(&#x5355;&#x4F4D;&#x4E3A;&#x89D2;&#x5EA6;)&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"><code>Math.sinh()</code></a></li>
</ul>
                  
                
              