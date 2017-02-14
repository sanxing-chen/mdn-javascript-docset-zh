
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div><p></p>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><strong>normalize()</strong>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x6309;&#x7167;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x79CD; Unicode &#x6B63;&#x89C4;&#x5F62;&#x5F0F;&#x5C06;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x6B63;&#x89C4;&#x5316;.</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><code class="brush:js;"><em>str</em>.normalize([form])</code>;</pre>
<h3 id=".E5.8F.82.E6.95.B0">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>form</code></dt>
 <dd>
  &#x56DB;&#x79CD; Unicode &#x6B63;&#x89C4;&#x5F62;&#x5F0F; &quot;NFC&quot;, &quot;NFD&quot;, &quot;NFKC&quot;, &#x4EE5;&#x53CA; &quot;NFKD&quot; &#x5176;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;, &#x9ED8;&#x8BA4;&#x503C;&#x4E3A;&#xA0;&quot;NFC&quot;.
  <ul>
   <li>NFC - Normalization Form Canonical Composition.</li>
   <li>NFD - Normalization Form Canonical Decomposition.</li>
   <li>NFKC - Normalization Form Compatibility Composition.</li>
   <li>NFKD - Normalization Form Compatibility Decomposition.</li>
  </ul>
 </dd>
</dl>
<h3 id=".E5.8F.AF.E8.83.BD.E5.87.BA.E7.8E.B0.E7.9A.84.E5.BC.82.E5.B8.B8">&#x53EF;&#x80FD;&#x51FA;&#x73B0;&#x7684;&#x5F02;&#x5E38;</h3>
<dl>
 <dt>
  <code><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RangeError</code></a></code></dt>
 <dd>
  &#x5982;&#x679C;&#x7ED9;&#xA0;<code>form</code>&#xA0;&#x4F20;&#x5165;&#x4E86;&#x975E;&#x6CD5;&#x7684;&#x53C2;&#x6570;&#x503C;, &#x5219;&#x4F1A;&#x629B;&#x51FA;&#xA0;<span><code>RangeError</code> &#x5F02;&#x5E38;.</span></dd>
</dl>
<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>
<pre class="brush:js;">// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = &quot;\u1E9B\u0323&quot;;


// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize(&quot;NFC&quot;); // &quot;\u1E9B\u0323&quot;
str.normalize(); // same as above


// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize(&quot;NFD&quot;); // &quot;\u017F\u0323\u0307&quot;


// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize(&quot;NFKC&quot;); // &quot;\u1E69&quot;


// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize(&quot;NFKD&quot;); // &quot;\u0073\u0323\u0307&quot;
</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.normalize" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">String.prototype.normalize</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial definition.</td>
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
    <td>34</td>
    <td><a href="/en-US/Firefox/Releases/31" title="Released on 2014-07-22.">31</a> (31)</td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
    <td>34</td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span><br>
     <a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=864843" title="Enable ECMAScript Internationalization API for Firefox on Android">bug&#xA0;864843</a></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a class="external" href="http://www.unicode.org/reports/tr15/">Unicode Standard Annex #15, Unicode Normalizatoin Forms</a></li>
 <li><a class="external" href="http://zh.wikipedia.org/zh-cn/Unicode%E7%AD%89%E5%83%B9%E6%80%A7">Unicode &#x7B49;&#x4EF7;&#x6027;</a></li>
</ul>
                  
                
              