
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>isPrototypeOf()</code></strong> &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;</p>

<div class="note">&#x6CE8;<em>:</em> <code>isPrototypeOf &#x548C; <a title="instanceof &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;prototype&#xA0;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof operator</code></a> </code>&#x662F;&#x4E0D;&#x4E00;&#x6837;&#x7684;&#x3002;&#x5728;&#x8868;&#x8FBE;&#x5F0F; <code>object instanceof AFunction &#x4E2D;</code>&#xFF0C;&#x68C0;&#x6D4B;&#x7684;&#x662F;<code> AFunction.prototype </code>&#x662F;&#x5426;&#x5728;<code>object </code>&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x68C0;&#x6D4B; <code>AFunction &#x81EA;&#x8EAB;&#x3002;</code></div>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>prototypeObj</em>.isPrototypeOf(<em>object</em>)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt>object</dt>
 <dd>&#x5728;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x641C;&#x5BFB;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Boolean"><code>Boolean</code></a>&#xFF0C;&#x8868;&#x793A;&#x8C03;&#x7528;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;</p>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>isPrototypeOf&#xA0;</code>&#x65B9;&#x6CD5;&#x5141;&#x8BB8;&#x4F60;&#x68C0;&#x67E5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C;&#x8003;&#x8651;&#x4E0B;&#x9762;&#x7684;&#x539F;&#x578B;&#x94FE;&#xFF1A;</p>

<pre class="brush: js">function Fee() {
  // . . .
}

function Fi() {
  // . . .
}
Fi.prototype = new Fee();

function Fo() {
  // . . .
}
Fo.prototype = new Fi();

function Fum() {
  // . . .
}
Fum.prototype = new Fo();</pre>

<p>&#x4E0B;&#x9762;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;<code>Fum&#xA0;</code>&#x5B9E;&#x4F8B;&#xFF0C;&#x68C0;&#x6D4B;&#xA0;<code>Fi.prototype&#xA0;</code>&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x8BE5;&#x5B9E;&#x4F8B;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;</p>

<pre class="brush: js">var fum = new Fum();
. . .

if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}</pre>

<p><span lang="zh-CN" class="short_text" id="result_box"><span>&#x5F53;&#x9700;&#x8981;&#x5224;&#x65AD;&#x5BF9;&#x8C61;&#x7684;&#x540E;&#x4EE3;&#x662F;&#x5426;&#x5728;&#x7279;&#x5B9A;</span><span>&#x539F;&#x578B;&#x94FE;</span><span>&#x4E0A;</span></span><span lang="zh-CN" class="short_text"><span>&#xFF0C;</span><span>&#x4F8B;&#x5982;</span><span>&#xFF0C;</span><span>&#x4EE5;&#x4FDD;&#x8BC1;</span><span>&#x4E00;&#x5B9A;&#x7684;</span><span>&#x65B9;&#x6CD5;&#x6216;&#x5C5E;&#x6027;</span><span>&#x5C06;&#x5B58;&#x5728;</span><span>&#x8BE5;&#x5BF9;&#x8C61;&#x4E0A;</span><span>&#xFF0C;&#x8FD9;&#x65F6;&#x5019;&#x5C31;&#x9700;&#x8981;&#x7528;&#x5230; </span></span><a title="instanceof &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;prototype&#xA0;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a><span lang="zh-CN" class="short_text"><span>&#x3002;</span></span></p>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.hasownproperty" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-object.prototype.hasownproperty" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Object.prototype.hasOwnProperty</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="instanceof &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;prototype&#xA0;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a></li>
 <li><a title="Object.getPrototypeOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#xFF08;&#x4E5F;&#x5C31;&#x662F;&#x8BE5;&#x5BF9;&#x8C61;&#x5185;&#x90E8;&#x5C5E;&#x6027;[[Prototype]]&#x7684;&#x503C;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf"><code>Object.getPrototypeOf()</code></a></li>
 <li>
  <div><a title="&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;null(&#x65E2;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x5185;&#x90E8;&#x5C5E;&#x6027;)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a></div>
 </li>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__" class="new"><code>Object.prototype.__proto__</code></a>&#xA0;</li>
</ul>
                  
                
              