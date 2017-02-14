
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><strong><code>localeCompare()</code></strong> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x6765;&#x8868;&#x660E;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;<code>reference string</code>&#xFF09;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x662F;&#x5426;&#x5728;&#x67D0;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x524D;&#x9762;&#x6216;&#x8005;&#x540E;&#x9762;&#xFF0C;&#x6216;&#x8005;&#x662F;&#x4E00;&#x6837;&#x7684;&#xFF08;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF09;&#x3002;</p>

<p><code>&#x65B0;&#x7684; locales &#x3001;</code>&#xA0;<code>options</code>&#xA0;&#x53C2;&#x6570;&#x80FD;&#x8BA9;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x5B9A;&#x5236;&#x51FD;&#x6570;&#x7684;&#x884C;&#x4E3A;&#x5373;&#x6307;&#x5B9A;&#x7528;&#x6765;&#x6392;&#x5E8F;&#x7684;&#x8BED;&#x8A00;&#x3002;&#xA0;&#xA0;<code>locales</code> &#x548C; <code>options</code>&#xA0;&#x53C2;&#x6570;&#x662F;&#x4F9D;&#x8D56;&#x4E8E;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x7684;&#xFF0C;&#x5728;&#x65E7;&#x7684;&#x5B9E;&#x73B0;&#x4E2D;&#x8FD9;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x662F;&#x5B8C;&#x5168;&#x88AB;&#x5FFD;&#x7565;&#x7684;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>referenceStr</var>.localeCompare(<var>compareString</var>[, <var>locales</var>[, <var>options</var>]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p>&#x67E5;&#x9605;<a href="#&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</a>&#x90E8;&#x5206;&#x6765;&#x786E;&#x5B9A;&#x54EA;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#xA0;<code>locales</code>&#xA0;&#x53C2;&#x6570;&#x548C;&#xA0;<code>options</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#xA0;<a href="&#x68C0;&#x67E5;&#x6D4F;&#x89C8;&#x5668;&#x5BF9;&#x6269;&#x5C55;&#x53C2;&#x6570;&#x7684;&#x652F;&#x6301;">&#x5728;&#x529F;&#x80FD;&#x68C0;&#x6D4B;&#x4E2D;&#x68C0;&#x67E5;&#x5BF9;&#xA0;<code>locales</code> &#x3001;<code>options&#xA0;</code>&#x53C2;&#x6570;&#x7684;&#x652F;&#x6301;</a>&#x3002;</p>

<dl>
 <dt><code>compareString</code></dt>
 <dd>&#x7528;&#x6765;&#x6BD4;&#x8F83;&#x7684;&#x5B57;&#x7B26;&#x4E32;</dd>
</dl>

<div><dl><dt><code>locales</code></dt>
 <dd>
 <p>Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the <code>locales</code> argument, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>. The following Unicode extension keys are allowed:</p>

 <dl><dt><code>co</code></dt>
  <dd>Variant collations for certain locales. Possible values include: <code>&quot;big5han&quot;</code>, <code>&quot;dict&quot;</code>, <code>&quot;direct&quot;</code>, <code>&quot;ducet&quot;</code>, <code>&quot;gb2312&quot;</code>, <code>&quot;phonebk&quot;</code>, <code>&quot;phonetic&quot;</code>, <code>&quot;pinyin&quot;</code>, <code>&quot;reformed&quot;</code>, <code>&quot;searchjl&quot;</code>, <code>&quot;stroke&quot;</code>, <code>&quot;trad&quot;</code>, <code>&quot;unihan&quot;</code>. The <code>&quot;standard&quot;</code> and <code>&quot;search&quot;</code> values are ignored; they are replaced by the <code>options</code> property <code>usage</code> (see below).</dd>
  <dt><code>kn</code></dt>
  <dd>Whether numeric collation should be used, such that &quot;1&quot; &lt; &quot;2&quot; &lt; &quot;10&quot;. Possible values are <code>&quot;true&quot;</code> and <code>&quot;false&quot;</code>. This option can be set through an <code>options</code> property or through a Unicode extension key; if both are provided, the <code>options</code> property takes precedence.</dd>
  <dt><code>kf</code></dt>
  <dd>Whether upper case or lower case should sort first. Possible values are <code>&quot;upper&quot;</code>, <code>&quot;lower&quot;</code>, or <code>&quot;false&quot;</code> (use the locale&apos;s default). This option can be set through an <code>options</code> property or through a Unicode extension key; if both are provided, the <code>options</code> property takes precedence.</dd>
 </dl></dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Optional. An object with some or all of the following properties:</p>

 <dl><dt><code>localeMatcher</code></dt>
  <dd>The locale matching algorithm to use. Possible values are <code>&quot;lookup&quot;</code> and <code>&quot;best fit&quot;</code>; the default is <code>&quot;best fit&quot;</code>. For information about this option, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>.</dd>
  <dt><code>usage</code></dt>
  <dd>Whether the comparison is for sorting or for searching for matching strings. Possible values are <code>&quot;sort&quot;</code> and <code>&quot;search&quot;</code>; the default is <code>&quot;sort&quot;</code>.</dd>
  <dt><code>sensitivity</code></dt>
  <dd>
  <p>Which differences in the strings should lead to non-zero result values. Possible values are:</p>

  <ul><li><code>&quot;base&quot;</code>: Only strings that differ in base letters compare as unequal. Examples: <code>a &#x2260; b</code>, <code>a = &#xE1;</code>, <code>a = A</code>.</li>
   <li><code>&quot;accent&quot;</code>: Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: <code>a &#x2260; b</code>, <code>a &#x2260; &#xE1;</code>, <code>a = A</code>.</li>
   <li><code>&quot;case&quot;</code>: Only strings that differ in base letters or case compare as unequal. Examples: <code>a &#x2260; b</code>, <code>a = &#xE1;</code>, <code>a &#x2260; A</code>.</li>
   <li><code>&quot;variant&quot;</code>: Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: <code>a &#x2260; b</code>, <code>a &#x2260; &#xE1;</code>, <code>a &#x2260; A</code>.</li>
  </ul><p>The default is <code>&quot;variant&quot;</code> for usage <code>&quot;sort&quot;</code>; it&apos;s locale dependent for usage <code>&quot;search&quot;</code>.</p>
  </dd>
  <dt><code>ignore&#xAD;Punctua&#xAD;tion</code></dt>
  <dd>Whether punctuation should be ignored. Possible values are <code>true</code> and <code>false</code>; the default is <code>false</code>.</dd>
  <dt><code>numeric</code></dt>
  <dd>Whether numeric collation should be used, such that &quot;1&quot; &lt; &quot;2&quot; &lt; &quot;10&quot;. Possible values are <code>true</code> and <code>false</code>; the default is <code>false</code>. This option can be set through an <code>options</code> property or through a Unicode extension key; if both are provided, the <code>options</code> property takes precedence. Implementations are not required to support this property.</dd>
  <dt><code>caseFirst</code></dt>
  <dd>Whether upper case or lower case should sort first. Possible values are <code>&quot;upper&quot;</code>, <code>&quot;lower&quot;</code>, or <code>&quot;false&quot;</code> (use the locale&apos;s default); the default is <code>&quot;false&quot;</code>. This option can be set through an <code>options</code> property or through a Unicode extension key; if both are provided, the <code>options</code> property takes precedence. Implementations are not required to support this property.</dd>
 </dl></dd>
</dl></div>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x6765;&#x8868;&#x660E;&#xA0;<strong>referenceStr&#xA0;</strong>&#x662F;&#x5426;&#x51FA;&#x73B0;&#x5728; <strong>compareStr&#xA0;</strong>&#x7684;&#x524D;&#x9762;&#x6216;&#x8005;&#x540E;&#x9762;&#xFF0C;&#x6216;&#x8005;&#x662F;&#x76F8;&#x540C;&#x4F4D;&#x7F6E;&#x7684;&#x3002;</p>

<ul>
 <li>&#x5F53;&#xA0;<strong>referenceStr</strong>&#xA0;&#x5728;&#xA0;<strong>compareStr </strong>&#x524D;&#x9762;&#x65F6;&#x8FD4;&#x56DE;&#x8D1F;&#x6570;</li>
 <li>&#x5F53; <strong>referenceStr</strong> &#x4F5C; <strong>compareStr </strong>&#x540E;&#x9762;&#x65F6;&#x8FD4;&#x56DE;&#x6B63;&#x6570;</li>
 <li>&#x76F8;&#x540C;&#x4F4D;&#x7F6E;&#x65F6;&#x8FD4;&#x56DE;0</li>
</ul>

<p><strong>&#x5207;&#x52FF;&#x4F9D;&#x8D56;&#x4E8E;-1&#x6216;1&#x8FD9;&#x6837;&#x7279;&#x5B9A;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</strong>&#x4E0D;&#x540C;&#x6D4F;&#x89C8;&#x5668;&#x4E4B;&#x95F4;&#xFF08;&#x4EE5;&#x53CA;&#x4E0D;&#x540C;&#x6D4F;&#x89C8;&#x5668;&#x7248;&#x672C;&#x4E4B;&#x95F4;&#xFF09;<strong>&#xA0;</strong>&#x8FD4;&#x56DE;&#x7684;&#x6B63;&#x8D1F;&#x6570;&#x7684;&#x503C;&#x5404;&#x6709;&#x4E0D;&#x540C;&#xFF0C;&#x56E0;&#x4E3A;W3C&#x89C4;&#x8303;&#x4E2D;&#x53EA;&#x8981;&#x6C42;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x6B63;&#x503C;&#x548C;&#x8D1F;&#x503C;&#xFF0C;&#x800C;&#x6CA1;&#x6709;&#x89C4;&#x5B9A;&#x5177;&#x4F53;&#x7684;&#x503C;&#x3002;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x53EF;&#x80FD;&#x8FD4;&#x56DE;-2&#x6216;2&#x6216;&#x5176;&#x4ED6;&#x4E00;&#x4E9B;&#x8D1F;&#x7684;&#x3001;&#x6B63;&#x7684;&#x503C;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;_localeCompare()">&#x4F7F;&#x7528; <code>localeCompare()</code></h3>

<pre class="brush: js">// The letter &quot;a&quot; is before &quot;c&quot; yielding a negative value
&apos;a&apos;.localeCompare(&apos;c&apos;); // -2 or -1 (or some other negative value)

// Alphabetically the word &quot;check&quot; comes after &quot;against&quot; yielding a positive value
&apos;check&apos;.localeCompare(&apos;against&apos;); // 2 or 1 (or some other positive value)

// &quot;a&quot; and &quot;a&quot; are equivalent yielding a neutral value of zero
&apos;a&apos;.localeCompare(&apos;a&apos;); // 0
</pre>

<h3 id="&#x68C0;&#x67E5;&#x6D4F;&#x89C8;&#x5668;&#x5BF9;&#x6269;&#x5C55;&#x53C2;&#x6570;&#x7684;&#x652F;&#x6301;">&#x68C0;&#x67E5;&#x6D4F;&#x89C8;&#x5668;&#x5BF9;&#x6269;&#x5C55;&#x53C2;&#x6570;&#x7684;&#x652F;&#x6301;</h3>

<p><code>locales</code>&#xA0;&#x548C;&#xA0;<code>options</code>&#xA0;&#x53C2;&#x6570;&#x8FD8;&#x6CA1;&#x6709;&#x88AB;&#x6240;&#x6709;&#x9605;&#x89C8;&#x5668;&#x6240;&#x652F;&#x6301;&#x3002;&#x68C0;&#x67E5;&#x662F;&#x5426;&#x88AB;&#x652F;&#x6301;&#xFF0C;&#xA0;&#x4F7F;&#x7528; &quot;i&quot; &#x53C2;&#x6570; (a requirement that illegal language tags are rejected) &#x5224;&#x65AD;&#x662F;&#x5426;&#x6709;&#x5F02;&#x5E38; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;"><code>RangeError</code></a>&#x629B;&#x51FA;:</p>

<pre class="brush: js">function localeCompareSupportsLocales() {
  try {
    &apos;foo&apos;.localeCompare&#x200B;(&apos;bar&apos;, &apos;i&apos;);
  } catch (e) {
    return e&#x200B;.name === &apos;RangeError&apos;;
  }
  return false;
}
</pre>

<h3 id="&#x4F7F;&#x7528;_locales_&#x53C2;&#x6570;">&#x4F7F;&#x7528; <code>locales &#x53C2;&#x6570;</code></h3>

<p>&#x5728;&#x4E0D;&#x540C;&#x7684;&#x8BED;&#x8A00;&#x4E0B;&#xA0;<code>localeCompare()</code>&#xA0;&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x4E0D;&#x4E00;&#x81F4;&#x7684;&#x3002;&#xA0;&#x4E3A;&#x4E86;&#x80FD;&#x8BA9;&#x7528;&#x6237;&#x5F97;&#x5230;&#x6B63;&#x786E;&#x7684;&#x6BD4;&#x8F83;&#x503C;&#xFF0C;&#xA0;&#x901A;&#x8FC7;&#x4F7F;&#x7528; <code>locales</code>&#xA0;&#x53C2;&#x6570;&#x6765;&#x63D0;&#x4F9B;&#x8981;&#x6BD4;&#x8F83;&#x7684;&#x8BED;&#x8A00;&#xA0;(and possibly some fallback languages) :</p>

<pre class="brush: js">console.log(&apos;&#xE4;&apos;.localeCompare(&apos;z&apos;, &apos;de&apos;)); // a negative value: in German, &#xE4; sorts with a
console.log(&apos;&#xE4;&apos;.localeCompare(&apos;z&apos;, &apos;sv&apos;)); // a positive value: in Swedish, &#xE4; sorts after z
</pre>

<h3 id="&#x4F7F;&#x7528;_options_&#x53C2;&#x6570;">&#x4F7F;&#x7528; <code>options &#x53C2;&#x6570;</code></h3>

<p><code>localeCompare()</code>&#xA0;&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;<code>options</code>&#xA0;&#x53C2;&#x6570;&#x6765;&#x5236;&#x5B9A;:</p>

<pre class="brush: js">// in German, &#xE4; has a as the base letter
console.log(&apos;&#xE4;&apos;.localeCompare(&apos;a&apos;, &apos;de&apos;, { sensitivity: &apos;base&apos; })); // 0

// in Swedish, &#xE4; and a are separate base letters
console.log(&apos;&#xE4;&apos;.localeCompare(&apos;a&apos;, &apos;sv&apos;, { sensitivity: &apos;base&apos; })); // a positive value
</pre>

<h2 id="&#x6027;&#x80FD;&#x76F8;&#x5173;">&#x6027;&#x80FD;&#x76F8;&#x5173;</h2>

<p>&#x5F53;&#x6BD4;&#x8F83;&#x5927;&#x91CF;&#x5B57;&#x7B26;&#x4E32;&#x65F6;&#xFF0C;&#xA0;&#x6BD4;&#x5982;&#x6BD4;&#x8F83;&#x5927;&#x91CF;&#x6570;&#x7EC4;&#x65F6;&#xFF0C;&#xA0;&#x6700;&#x597D;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Intl.Collator</code></a> &#x5BF9;&#x8C61;&#x5E76;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>compare</code></a> &#x5C5E;&#x6027;&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" title="ECMAScript 3rd Edition (ECMA-262)" hreflang="en">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.9" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.localeCompare</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.localecompare" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.localeCompare</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-13.1.1" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="zh-CN">String.prototype.localeCompare</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td><code>locale</code> and <code>option</code> parameter definitions.</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;">&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</h2>

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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td><code>locales</code> and <code>options</code> arguments</td>
   <td>24</td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</td>
   <td>11</td>
   <td>15</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td><code>locales</code> and <code>options</code> arguments</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Intl.Collator</code></a></li>
</ul>
                  
                
              