
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p> 
</div></div>

<p><strong><code>Math.cosh()</code></strong>&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x7684;&#x53CC;&#x66F2;&#x4F59;&#x5F26;&#x51FD;&#x6570;, &#x53EF;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/E" title="Math.E &#x5C5E;&#x6027;&#x8868;&#x793A;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#xFF08;&#x6216;&#x79F0;&#x4E3A;&#x57FA;&#x6570;&#xFF09;&#xFF0C;e&#xFF0C;&#x7EA6;&#x7B49;&#x4E8E; 2.718&#x3002;">constant e</a> &#x8868;&#x793A;:</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo rspace="thinmathspace" lspace="0em">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math></p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code>Math.cosh(<var>x</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x6570;&#x503C;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x7531;&#x4E8E;<code>cosh()</code>&#xA0;&#x662F;Math&#x7684;&#x9759;&#x6001;&#x51FD;&#x6570;, &#x53EA;&#x9700;&#x901A;&#x8FC7;<code>Math.cosh()&#xA0;</code>&#x8C03;&#x7528;,&#x800C;&#x4E0D;&#x7528;&#x901A;&#x8FC7;&#x521B;&#x5EFA;Math&#x5BF9;&#x8C61;&#x6765;&#x8C03;&#x7528;.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_Math.cosh()">&#x4F7F;&#x7528; <code>Math.cosh()</code></h3>

<pre class="brush: js">Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>&#x53EF;&#x901A;&#x8FC7;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp" title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;"><code>Math.exp()</code></a>&#xA0;&#x51FD;&#x6570;&#x6A21;&#x62DF;&#x5B9E;&#x73B0;:</p>

<pre class="brush: js">Math.cosh = Math.cosh || function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
}
</pre>

<p>&#x6216;&#x53EA;&#x8C03;&#x7528;&#x4E00;&#x6B21;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp" title="Math.exp() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#xA0;ex&#xFF0C;x &#x8868;&#x793A;&#x53C2;&#x6570;&#xFF0C;e &#x662F;&#x6B27;&#x62C9;&#x5E38;&#x6570;&#xFF08;Euler&apos;s constant&#xFF09;&#xFF0C;&#x81EA;&#x7136;&#x5BF9;&#x6570;&#x7684;&#x5E95;&#x6570;&#x3002;"><code>Math.exp()</code></a> &#x51FD;&#x6570;:</p>

<pre class="brush: js">Math.cosh = Math.cosh || function(x) {
  var y = Math.exp(x);
  return (y + 1 / y) / 2;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.cosh" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.cosh</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25</a> (25)</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Math.acosh()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Math.asinh()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Math.atanh()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh" title="Math.sinh()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;(&#x5355;&#x4F4D;&#x4E3A;&#x89D2;&#x5EA6;)&#x7684;&#x53CC;&#x66F2;&#x6B63;&#x5F26;&#x503C;."><code>Math.sinh()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Math.tanh()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
</ul>
                  
                
              