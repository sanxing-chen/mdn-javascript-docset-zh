
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x8BE5;&#x5168;&#x5C40; isFinite() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x88AB;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x4E00;&#x4E2A;&#x6709;&#x9650;&#x6570;&#x503C;&#xFF08;finite number&#xFF09;&#x3002;&#x5728;&#x5FC5;&#x8981;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53C2;&#x6570;&#x4F1A;&#x9996;&#x5148;&#x8F6C;&#x4E3A;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox language-html">isFinite(<em>testValue</em>)</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>testValue</code></dt>
 <dd>&#x7528;&#x4E8E;&#x68C0;&#x6D4B;&#x6709;&#x9650;&#x6027;&#xFF08;finiteness&#xFF09;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 name="Description" id="Description">&#x63CF;&#x8FF0;</h3>

<dl>
 <dd>isFinite &#x662F;&#x5168;&#x5C40;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4E0D;&#x4E0E;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x6709;&#x5173;&#x7CFB;&#x3002;</dd>
</dl>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x7528;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x6765;&#x5224;&#x5B9A;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x662F;&#x5426;&#x662F;&#x6709;&#x9650;&#x6570;&#x5B57;&#x3002;<code>isFinite</code> &#x65B9;&#x6CD5;&#x68C0;&#x6D4B;&#x5B83;&#x53C2;&#x6570;&#x7684;&#x6570;&#x503C;&#x3002;&#x5982;&#x679C;&#x53C2;&#x6570;&#x662F; <code>NaN</code>&#xFF0C;&#x6B63;&#x65E0;&#x7A77;&#x5927;&#x6216;&#x8005;&#x8D1F;&#x65E0;&#x7A77;&#x5927;&#xFF0C;&#x4F1A;&#x8FD4;&#x56DE;<code>false</code>&#xFF0C;&#x5176;&#x4ED6;&#x8FD4;&#x56DE; <code>true</code>&#x3002;</p>

<h2 style="margin-bottom: 20px; line-height: 30px;" name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre style="padding: 1em 0px 1em 30px; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(234, 239, 242, 0.247059);" class="brush: js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; white-space: pre; color: inherit; text-shadow: none;" class="language-js"><span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(153, 0, 85);" class="number token">Infinity</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span> <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // false
</span><span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(153, 0, 85);" class="number token">NaN</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>      <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // false
</span><span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="background: rgba(255, 255, 255, 0.498039); color: rgb(166, 127, 89);" class="operator token">-</span><span style="color: rgb(153, 0, 85);" class="number token">Infinity</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span><span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // false
</span>
<span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(153, 0, 85);" class="number token">0</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>        <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // true
</span><span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(153, 0, 85);" class="number token">2e64</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>     <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // true
</span>

<span class="function token">isFinite<span style="color: rgb(153, 153, 153);" class="punctuation token">(</span></span><span style="color: rgb(102, 153, 0);" class="string token">&quot;0&quot;</span><span style="color: rgb(153, 153, 153);" class="punctuation token">)</span><span style="color: rgb(153, 153, 153);" class="punctuation token">;</span>      <span style="color: rgb(112, 128, 144); display: inherit;" class="comment token"> // true, would&apos;ve been false with the more robust Number.isFinite(&quot;0&quot;)</span></code></pre>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 114px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 133px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 152px; background: 0px 0px;" class="line-number">&#xA0;</div>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 2nd Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">isFinite</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">isFinite</small></a></td>
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

<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Number.isFinite() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x6709;&#x7A77;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite"><code>Number.isFinite()</code></a></li>
 <li><a title="Number.NaN&#xA0;&#x8868;&#x793A;&#x201C;&#x975E;&#x6570;&#x5B57;&#x201D;&#xFF08;Not-A-Number&#xFF09;&#x3002;&#x548C; NaN &#x76F8;&#x540C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN"><code>Number.NaN()</code></a></li>
 <li><a title="Number.POSITIVE_INFINITY &#x5C5E;&#x6027;&#x8868;&#x793A;&#x6B63;&#x65E0;&#x7A77;&#x5927;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY"><code>Number.POSITIVE_INFINITY</code></a></li>
 <li><a title="Number.NEGATIVE_INFINITY &#x5C5E;&#x6027;&#x8868;&#x793A;&#x8D1F;&#x65E0;&#x7A77;&#x5927;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY"><code>Number.NEGATIVE_INFINITY</code></a></li>
</ul>
                  
                
              