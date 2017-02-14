
                
                  
                    <div>
<div>
<div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>
</div>
</div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><strong>parseFloat()</strong>&#x65B9;&#x6CD5;&#x5C06;&#x53C2;&#x6570;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x5E76;&#x8FD4;&#x56DE;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">parseFloat(<em>string</em>)</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>&#x9700;&#x8981;&#x88AB;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x6D6E;&#x70B9;&#x6570;&#x7684;&#x5B57;&#x7B26;&#x4E32;.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>parseFloat&#x662F;&#x4E2A;&#x5168;&#x5C40;&#x51FD;&#x6570;,&#x4E0D;&#x5C5E;&#x4E8E;&#x4EFB;&#x4F55;</code>&#x5BF9;&#x8C61;.</p>

<p><code>parseFloat</code>&#x5C06;&#x5B83;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x53C2;&#x6570;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x6D6E;&#x70B9;&#x6570;&#x5E76;&#x8FD4;&#x56DE;.&#x5982;&#x679C;&#x5728;&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x4E2D;&#x9047;&#x5230;&#x4E86;&#x6B63;&#x8D1F;&#x53F7;(+&#x6216;-),&#x6570;&#x5B57;(0-9),&#x5C0F;&#x6570;&#x70B9;,&#x6216;&#x8005;&#x79D1;&#x5B66;&#x8BB0;&#x6570;&#x6CD5;&#x4E2D;&#x7684;&#x6307;&#x6570;(e&#x6216;E)&#x4EE5;&#x5916;&#x7684;&#x5B57;&#x7B26;,&#x5219;&#x5B83;&#x4F1A;&#x5FFD;&#x7565;&#x8BE5;&#x5B57;&#x7B26;&#x4EE5;&#x53CA;&#x4E4B;&#x540E;&#x7684;&#x6240;&#x6709;&#x5B57;&#x7B26;,&#x8FD4;&#x56DE;&#x5F53;&#x524D;&#x5DF2;&#x7ECF;&#x89E3;&#x6790;&#x5230;&#x7684;&#x6D6E;&#x70B9;&#x6570;.&#x540C;&#x65F6;&#x53C2;&#x6570;&#x5B57;&#x7B26;&#x4E32;&#x9996;&#x4F4D;&#x7684;&#x7A7A;&#x767D;&#x7B26;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;.</p>

<p>&#x5982;&#x679C;&#x53C2;&#x6570;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E0D;&#x80FD;&#x88AB;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x6570;&#x5B57;,<code>&#x5219;parseFloat</code>&#x8FD4;&#x56DE;<code>NaN</code>.</p>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8C03;&#x7528;<span style="line-height: 19.0909080505371px;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN" title="isNaN() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A; NaN&#x3002;&#x6CE8;&#xFF1A;isNaN&#x51FD;&#x6570;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x975E;&#x5E38;&#x6709;&#x610F;&#x601D;&#x7684;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;ECMAScript 6 &#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#xA0;Number.isNaN() &#x6216;&#x8005;&#xA0;typeof &#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x975E;&#x6570;&#x503C;&#x3002;"><code>isNaN</code></a></span>&#x51FD;&#x6570;&#x6765;&#x5224;&#x65AD;<code>parseFloat&#x7684;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x662F;</code><code>NaN</code>.&#x5982;&#x679C;<code>&#x8BA9;NaN</code>&#x4F5C;&#x4E3A;&#x4E86;&#x4EFB;&#x610F;&#x6570;&#x5B66;&#x8FD0;&#x7B97;&#x7684;&#x64CD;&#x4F5C;&#x6570;,&#x5219;&#x8FD0;&#x7B97;&#x7ED3;&#x679C;&#x5FC5;&#x5B9A;&#x4E5F;&#x662F;<code>NaN</code>.</p>

<p><code>parseFloat</code><span>&#xA0;&#x4E5F;&#x53EF;&#x8F6C;&#x6362;&#x548C;&#x8FD4;&#x56DE;</span><code>Infinity&#x503C;</code><span>. &#x53EF;&#x4EE5;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite" title="&#x8BE5;&#x5168;&#x5C40; isFinite() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x88AB;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x4E00;&#x4E2A;&#x6709;&#x9650;&#x6570;&#x503C;&#xFF08;finite number&#xFF09;&#x3002;&#x5728;&#x5FC5;&#x8981;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53C2;&#x6570;&#x4F1A;&#x9996;&#x5148;&#x8F6C;&#x4E3A;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002;"><code>isFinite</code></a> &#x51FD;&#x6570;&#x6765;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x6709;&#x9650;&#x7684;&#x6570;&#x503C; (&#x975E;</span><code>Infinity</code><span>,&#xA0;</span><code>-Infinity</code><span>, &#x6216;&#xA0;</span><code>NaN</code><span>).</span></p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F8B;&#x5B50;_parseFloat&#x8FD4;&#x56DE;&#x6B63;&#x5E38;&#x6570;&#x5B57;">&#x4F8B;&#x5B50;: <code>parseFloat</code>&#x8FD4;&#x56DE;&#x6B63;&#x5E38;&#x6570;&#x5B57;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x90FD;&#x8FD4;&#x56DE;<strong>3.14</strong></p>

<pre class="brush:js">parseFloat(&quot;3.14&quot;);
parseFloat(&quot;314e-2&quot;);
parseFloat(&quot;0.0314E+2&quot;);
parseFloat(&quot;3.14more non-digit characters&quot;);
</pre>

<h3 id="&#x4F8B;&#x5B50;_parseFloat&#x8FD4;&#x56DE;NaN">&#x4F8B;&#x5B50;: <code>parseFloat</code>&#x8FD4;&#x56DE;NaN</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C06;&#x8FD4;&#x56DE;<code>NaN</code></p>

<pre class="brush: js">parseFloat(&quot;FF2&quot;);
</pre>

<h3 id="&#x66F4;&#x4E25;&#x683C;&#x7684;&#x8F6C;&#x6362;&#x51FD;&#x6570;">&#x66F4;&#x4E25;&#x683C;&#x7684;&#x8F6C;&#x6362;&#x51FD;&#x6570;</h3>

<p>&#x8BE5;&#x51FD;&#x6570;&#x901A;&#x8FC7;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x65B9;&#x5F0F;,&#x5728;&#x9700;&#x8981;&#x66F4;&#x4E25;&#x683C;&#x5730;&#x8F6C;&#x6362;float&#x503C;&#x65F6;&#x53EF;&#x80FD;&#x4F1A;&#x6709;&#x7528;:</p>

<pre class="brush: js">var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat(&apos;421&apos;));               // 421
console.log(filterFloat(&apos;-421&apos;));              // -421
console.log(filterFloat(&apos;+421&apos;));              // 421
console.log(filterFloat(&apos;Infinity&apos;));          // Infinity
console.log(filterFloat(&apos;1.61803398875&apos;));     // 1.61803398875
console.log(filterFloat(&apos;421e+0&apos;));            // NaN
console.log(filterFloat(&apos;421hop&apos;));            // NaN
console.log(filterFloat(&apos;hop1.61803398875&apos;));  // NaN

</pre>

<p>&#x6CE8;&#x610F;&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x53EA;&#x662F;&#x793A;&#x4F8B;; &#x8BE5;&#x65B9;&#x6CD5;&#x4E0D;&#x63A5;&#x53D7;&#x5982; 1. &#x548C; .5 &#x8FD9;&#x79CD;&#x5408;&#x6CD5;&#x7684;&#x6570;&#x503C;.</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.3" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">parseFloat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-parsefloat-string" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">parseFloat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>

<div id="compat-desktop">
<table class="compat-table" style="border-color: transparent;">
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

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" title="&#x6982;&#x8FF0;"><code>parseInt()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat" title="Number.parseFloat() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6D6E;&#x70B9;&#x6570;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;&#x5168;&#x5C40;&#x7684; parseFloat() &#x51FD;&#x6570;&#x76F8;&#x540C;&#xFF0C;&#x5E76;&#x4E14;&#x5904;&#x4E8E;&#xA0;ECMAScript 6 &#x89C4;&#x8303;&#x4E2D;&#xFF08;&#x7528;&#x4E8E;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x7684;&#x6A21;&#x5757;&#x5316;&#xFF09;&#x3002;"><code>Number.parseFloat()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" title="Number.parseInt() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x7ED9;&#x5B9A;&#x7684;&#x8FDB;&#x5236;&#x6570;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6574;&#x6570;&#x3002;"><code>Number.parseInt()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN" title="isNaN() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A; NaN&#x3002;&#x6CE8;&#xFF1A;isNaN&#x51FD;&#x6570;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x975E;&#x5E38;&#x6709;&#x610F;&#x601D;&#x7684;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;ECMAScript 6 &#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#xA0;Number.isNaN() &#x6216;&#x8005;&#xA0;typeof &#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x975E;&#x6570;&#x503C;&#x3002;"><code>isNaN()</code></a></li>
</ul>
                  
                
              