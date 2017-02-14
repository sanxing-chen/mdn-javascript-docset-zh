
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Intl.NumberFormat&#x662F;&#x5BF9;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x5B57;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x5668;&#x7C7B;</code></strong></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new Intl.NumberFormat([<var>locales</var>[, <var>options</var>]])
Intl.NumberFormat.call(<var>this</var>[, <var>locales</var>[, <var>options</var>]])
</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>
 <p>&#x53EF;&#x9009;.&#x7F29;&#x5199;&#x8BED;&#x8A00;&#x4EE3;&#x7801;(BCP 47 language tag,&#x4F8B;&#x5982;:cmn-Hans-CN)&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;.&#xA0;&#x5173;&#x4E8E;&#x53C2;&#x6570;locales&#x7684;&#x4E00;&#x822C;&#x5F62;&#x5F0F;&#x548C;&#x89E3;&#x91CA;&#x8BF7;&#x53C2;&#x89C1;<a title="&#x56FD;&#x9645;&#x5316;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x51E0;&#x4E2A;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x53EF;&#x89C1;See also&#xFF09;&#x4E00;&#x6837;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x6837;&#x7684;&#x6A21;&#x5F0F;&#x6765;&#x8BC6;&#x522B;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x548C;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF1A;&#x4ED6;&#x4EEC;&#x90FD;&#x63A5;&#x6536; locales &#x548C; options &#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528; options.localeMatcher &#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x6765;&#x5BF9;&#x6BD4;&#x5E94;&#x7528;&#x8BF7;&#x6C42;&#x7684;&#x548C;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#xFF0C;&#x6765;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x3002;" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation">Intl page</a>. &#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E9B;Unicode&#x6269;&#x5C55;&#x952E;&#x4E5F;&#x662F;&#x88AB;&#x5141;&#x8BB8;&#x7684;:</p>

 <p>&#x8BD1;&#x8005;&#x6CE8;:&#x4E0B;&#x9762;&#x6269;&#x5C55;&#x7684;&#x4F7F;&#x7528;&#x65B9;&#x5F0F;&#x662F;language[-scripts][-region]-u-nu-*,&#x4F8B;&#x5982;:zh-u-nu-hanidec(&#x8868;&#x793A;&#x4E2D;&#x6587;&#x5341;&#x8FDB;&#x5236;&#x6570;&#x5B57;)&#xA0;</p>

 <dl>
  <dt><code>nu</code></dt>
  <dd>&#x8981;&#x4F7F;&#x7528;&#x7684;&#x7F16;&#x53F7;&#x7CFB;&#x7EDF;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709;: <code>&quot;arab&quot;</code>, <code>&quot;arabext&quot;</code>, <code>&quot;bali&quot;</code>, <code>&quot;beng&quot;</code>, <code>&quot;deva&quot;</code>, <code>&quot;fullwide&quot;</code>, <code>&quot;gujr&quot;</code>, <code>&quot;guru&quot;</code>, <code>&quot;hanidec&quot;(&#x4E2D;&#x6587;&#x5341;&#x8FDB;&#x5236;&#x6570;&#x5B57;)</code>, <code>&quot;khmr&quot;</code>, <code>&quot;knda&quot;</code>, <code>&quot;laoo&quot;</code>, <code>&quot;latn&quot;</code>, <code>&quot;limb&quot;</code>, <code>&quot;mlym&quot;</code>, <code>&quot;mong&quot;</code>, <code>&quot;mymr&quot;</code>, <code>&quot;orya&quot;</code>, <code>&quot;tamldec&quot;</code>, <code>&quot;telu&quot;</code>, <code>&quot;thai&quot;</code>, <code>&quot;tibt&quot;</code>.</dd>
 </dl>
 </dd>
 <dt><code>options</code></dt>
 <dd>
 <p>&#x53EF;&#x9009;. &#x5305;&#x542B;&#x4E00;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x4E0B;&#x9762;&#x5C5E;&#x6027;&#x7684;&#x7C7B;:</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;local&#x7684;&#x5339;&#x914D;&#x7B97;&#x6CD5;. &#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709;&quot;lookup&quot;&#x548C;&quot;best fit&quot;; &#x9ED8;&#x8BA4;&#x503C;&#x662F;&#xA0;<code>&quot;best fit&quot;</code>. &#x6709;&#x5173;&#x6B64;&#x9009;&#x9879;&#x7684;&#x4FE1;&#x606F;, &#x8BF7;&#x53C2;&#x89C1;<a title="&#x56FD;&#x9645;&#x5316;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x51E0;&#x4E2A;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x53EF;&#x89C1;See also&#xFF09;&#x4E00;&#x6837;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x6837;&#x7684;&#x6A21;&#x5F0F;&#x6765;&#x8BC6;&#x522B;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x548C;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF1A;&#x4ED6;&#x4EEC;&#x90FD;&#x63A5;&#x6536; locales &#x548C; options &#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528; options.localeMatcher &#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x6765;&#x5BF9;&#x6BD4;&#x5E94;&#x7528;&#x8BF7;&#x6C42;&#x7684;&#x548C;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#xFF0C;&#x6765;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Intl page</a>.</dd>
  <dt><code>style</code></dt>
  <dd>&#x683C;&#x5F0F;&#x5316;&#x65F6;&#x4F7F;&#x7528;&#x7684;&#x6837;&#x5F0F;.&#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709;&#x201C;decimal&#x201D;&#x8868;&#x793A;&#x7EAF;&#x6570;&#x5B57;&#x683C;&#x5F0F; , &#x201C;currency&#x201D;&#x8868;&#x793A;&#x8D27;&#x5E01;&#x683C;&#x5F0F;, &#x548C;<code>&quot;percent&quot;&#x8868;&#x793A;&#x767E;&#x5206;&#x6BD4;&#x683C;&#x5F0F;</code>; &#x9ED8;&#x8BA4;&#x503C;&#x662F;&#xA0;<code>&quot;decimal&quot;</code>.</dd>
  <dt><code>currency</code></dt>
  <dd>&#x5728;&#x8D27;&#x5E01;&#x683C;&#x5F0F;&#x5316;&#x4E2D;&#x4F7F;&#x7528;&#x7684;&#x8D27;&#x5E01;&#x7B26;&#x53F7;.&#xA0;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;<em>ISO</em>&#x7684;&#x8D27;&#x5E01;&#x4EE3;&#x7801;&#xA0;(the ISO 4217 currency codes,) &#x4F8B;&#x5982;<code>&quot;USD&quot;</code>&#xA0;&#x8868;&#x793A;&#x7F8E;&#x5143;, <code>&quot;EUR&quot;</code>&#xA0;&#x8868;&#x793A;&#x6B27;&#x5143;, or <code>&quot;CNY&quot;&#x662F;&#x4EBA;&#x6C11;&#x5E01;</code>&#xA0;&#x2014; &#x66F4;&#x591A;&#x8BF7;&#x53C2;&#x8003;&#xA0;<a href="http://www.currency-iso.org/en/home/tables/table-a1.html" class="external">Current currency &amp; funds code list</a>. &#x6CA1;&#x6709;&#x9ED8;&#x8BA4;&#x503C;,&#x5982;&#x679C;&#x6837;&#x5F0F;&#x662F;&#x201C;currency&#x201D;,&#x5FC5;&#x987B;&#x63D0;&#x4F9B;&#x8D27;&#x5E01;&#x5C5E;&#x6027;.</dd>
  <dt><code>currencyDisplay</code></dt>
  <dd>&#x5982;&#x4F55;&#x5728;&#x8D27;&#x5E01;&#x683C;&#x5F0F;&#x5316;&#x4E2D;&#x663E;&#x793A;&#x8D27;&#x5E01;. &#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709;<code>&quot;symbol&quot;&#x8868;&#x793A;</code>&#x4F7F;&#x7528;&#x672C;&#x5730;&#x5316;&#x7684;&#x8D27;&#x5E01;&#x7B26;&#x53F7;&#x4F8B;&#x5982;&#x20AC;, <code>&quot;code&quot;&#x8868;&#x793A;</code>&#x4F7F;&#x7528;&#x56FD;&#x9645;&#x6807;&#x51C6;&#x7EC4;&#x7EC7;&#x8D27;&#x5E01;&#x4EE3;&#x7801;, <code>&quot;name&quot;</code>&#xA0;&#x8868;&#x793A;&#x4F7F;&#x7528;&#x672C;&#x5730;&#x5316;&#x7684;&#x8D27;&#x5E01;&#x540D;&#x79F0;&#xFF0C;&#x5982; <code>&quot;dollar&quot;</code>; &#x9ED8;&#x8BA4;&#x503C;&#x662F;&#xA0;<code>&quot;symbol&quot;</code>.</dd>
  <dt><code>useGrouping</code></dt>
  <dd>&#x662F;&#x5426;&#x4F7F;&#x7528;&#x5206;&#x7EC4;&#x5206;&#x9694;&#x7B26;&#xFF0C;&#x5982;&#x5343;&#x4F4D;&#x5206;&#x9694;&#x7B26;&#x6216;&#x5343;/&#x4E07;/&#x4EBF;&#x5206;&#x9694;&#x7B26;.&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;true&#x548C;false,&#x9ED8;&#x8BA4;&#x503C;&#x662F;true.</dd>
 </dl>

 <p>&#x4E0B;&#x9762;&#x7684;&#x5C5E;&#x6027;&#x5206;&#x4E3A;&#x4E24;&#x7EC4;&#xFF1A;minimumintegerdigits,minimumfractiondigits,maximumfractiondigits&#x4F5C;&#x4E3A;&#x4E00;&#x7EC4;,minimumsignificantdigits&#x548C;maximumsignificantdigits&#x4F5C;&#x4E3A;&#x4E00;&#x7EC4;.&#x5982;&#x679C;&#x5B9A;&#x4E49;&#x4E86;&#x7B2C;&#x4E8C;&#x7EC4;&#x4E2D;&#x7684;&#x4EFB;&#x610F;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;,&#x5219;&#x5FFD;&#x7565;&#x7B2C;&#x4E00;&#x7EC4;&#x7684;&#x8BBE;&#x7F6E;.</p>

 <dl>
  <dt><code>minimumIntegerDigits</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;&#x6574;&#x6570;&#x6570;&#x5B57;&#x7684;&#x6700;&#x5C0F;&#x6570;&#x76EE;.&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;&#x4ECE;1&#x5230;21,&#x9ED8;&#x8BA4;&#x503C;&#x662F;1.</dd>
  <dt><code>minimumFractionDigits</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;&#x5C0F;&#x6570;&#x4F4D;&#x6570;&#x7684;&#x6700;&#x5C0F;&#x6570;&#x76EE;.&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;&#x4ECE;0&#x5230;20;&#x9ED8;&#x8BA4;&#x4E3A;&#x666E;&#x901A;&#x7684;&#x6570;&#x5B57;&#x548C;&#x767E;&#x5206;&#x6BD4;&#x683C;&#x5F0F;&#x4E3A;0;&#x9ED8;&#x8BA4;&#x4E3A;&#x8D27;&#x5E01;&#x683C;&#x5F0F;&#x662F;&#x7531;&#x56FD;&#x9645;&#x6807;&#x51C6;&#x5316;&#x7EC4;&#x7EC7;&#x5217;&#x8868;( <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" class="external">ISO 4217 currency code list</a> )&#x63D0;&#x4F9B;(&#x5982;&#x679C;&#x5217;&#x8868;&#x4E2D;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#x5219;&#x503C;&#x4E3A;2).</dd>
  <dt><code>maximumFractionDigits</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;&#x5C0F;&#x6570;&#x4F4D;&#x6570;&#x7684;&#x6700;&#x5927;&#x6570;&#x76EE;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;&#x4ECE;0&#x5230;20&#xFF1B;&#x7EAF;&#x6570;&#x5B57;&#x683C;&#x5F0F;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x662F;minimumfractiondigits&#x548C;3&#x4E2D;&#x5927;&#x7684;&#x90A3;&#x4E00;&#x4E2A;&#xFF1B;&#x8D27;&#x5E01;&#x683C;&#x5F0F;&#x9ED8;&#x8BA4;&#x503C;&#x662F;minimumfractiondigits&#x548C;&#x56FD;&#x9645;&#x6807;&#x51C6;&#x5316;&#x7EC4;&#x7EC7;&#x5217;&#x8868;(&#x5982;&#x679C;&#x5217;&#x8868;&#x4E2D;&#x6CA1;&#x6709;&#x63D0;&#x4F9B;&#x5219;&#x503C;&#x4E3A;2)&#x4E2D;&#x5927;&#x7684;&#x90A3;&#x4E00;&#x4E2A;;&#x767E;&#x5206;&#x6BD4;&#x683C;&#x5F0F;&#x9ED8;&#x8BA4;&#x503C;&#x662F;minimumfractiondigits&#x548C;0&#x4E2D;&#x5927;&#x7684;&#x90A3;&#x4E00;&#x4E2A;&#x3002;</dd>
  <dt><code>minimumSignificantDigits</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;&#x6709;&#x6548;&#x6570;&#x5B57;&#x7684;&#x6700;&#x5C0F;&#x6570;&#x76EE;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;&#x4ECE;1&#x5230;21&#xFF1B;&#x9ED8;&#x8BA4;&#x503C;&#x662F;1&#x3002;</dd>
  <dt><code>maximumSignificantDigits</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684;&#x6709;&#x6548;&#x6570;&#x5B57;&#x7684;&#x6700;&#x5927;&#x6570;&#x91CF;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x662F;&#x4ECE;1&#x5230;21&#xFF1B;&#x9ED8;&#x8BA4;&#x662F;minimumsignificantdigits.</dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<dl>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype" class="new"><code>Intl.NumberFormat.prototype</code></a></dt>
 <dd>&#x5141;&#x8BB8;&#x5C06;&#x5C5E;&#x6027;&#x6DFB;&#x52A0;&#x5230;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x4E0A;&#x3002;</dd>
</dl>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<dl>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/supportedLocalesOf" class="new"><code>Intl.NumberFormat.supportedLocalesOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x5305;&#x542B;&#x7684;&#x90A3;&#x4E9B;&#x88AB;&#x63D0;&#x4F9B;&#x7684;&#x53EF;&#x4EE5;&#x88AB;&#x652F;&#x6301;&#x7684;locales,&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x9ED8;&#x8BA4;&#x7684;locale&#x4E0D;&#x4F1A;&#x51FA;&#x73B0;&#x5728;&#x8BE5;&#x6570;&#x7EC4;&#x4E2D;.</dd>
</dl>

<h2 id="NumberFormat_&#x5B9E;&#x4F8B;"><code>NumberFormat</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<p><code>NumberFormat</code>&#xA0;&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x4E00;&#x4E0B;&#x539F;&#x578B;&#x7684;&#x5C5E;&#x6027;:</p>

<div><dl><dt><code>Intl.NumberFormat.prototype.constructor</code></dt>
 <dd>A reference to <code>Intl.NumberFormat</code>.</dd>
 <dt><a title="The Intl.NumberFormat.prototype.format property returns a getter function that formats a number according to the locale and formatting options of this NumberFormat object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format"><code>Intl.NumberFormat.prototype.format</code></a></dt>
 <dd>Getter; returns a function that formats a number according to the locale and formatting options of this <a title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"><code>NumberFormat</code></a> object.</dd>
</dl></div>

<h3 id="&#x65B9;&#x6CD5;_2">&#x65B9;&#x6CD5;</h3>

<p><code>NumberFormat</code>&#xA0;&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x4E00;&#x4E0B;&#x539F;&#x578B;&#x7684;&#x65B9;&#x6CD5;:</p>

<div><dl><dt><a title="The Intl.NumberFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this NumberFormat object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions"><code>Intl.NumberFormat.prototype.resolvedOptions()</code></a></dt>
 <dd>Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.</dd>
</dl></div>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x57FA;&#x672C;&#x7528;&#x6CD5;">&#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

<p>&#x5728;&#x4E0D;&#x6307;&#x5B9A;locale&#x7684;&#x57FA;&#x672C;&#x7528;&#x6CD5;&#x4E2D;, &#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x9ED8;&#x8BA4;locale&#x548C;&#x9ED8;&#x8BA4;options&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x8FD4;&#x56DE;.</p>

<pre class="brush: js">var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// &#x5982;&#x679C;&#x5728;&#x7F8E;&#x56FD;&#x82F1;&#x8BED;&#x5730;&#x533A; &#x2192; &apos;3,500&apos; 
</pre>

<h3 id="&#x4F7F;&#x7528;locales">&#x4F7F;&#x7528;<code>locales</code></h3>

<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x663E;&#x793A;&#x4E86;&#x4E00;&#x4E9B;&#x672C;&#x5730;&#x5316;&#x7684;&#x6570;&#x5B57;&#x683C;&#x5F0F;&#x7684;&#x4E00;&#x4E9B;&#x53D8;&#x5316;&#x3002;&#x4E3A;&#x4E86;&#x83B7;&#x5F97;&#x7528;&#x4E8E;&#x60A8;&#x7684;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x7684;&#x7528;&#x6237;&#x754C;&#x9762;&#x7684;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF0C;&#x8BF7;&#x786E;&#x4FDD;&#x8BBE;&#x5B9A;&#x4E86;&#x8BED;&#x8A00;&#xFF08;&#x53EF;&#x80FD;&#x8FD8;&#x6709;&#x4E00;&#x4E9B;&#x56DE;&#x9000;&#x8BED;&#x8A00;&#xFF09;&#x53C2;&#x6570;&#xFF1A;</p>

<pre class="brush: js">var number = 123456.789;

// &#x5FB7;&#x8BED;&#x4F7F;&#x7528;&#x9017;&#x53F7;&#x4F5C;&#x4E3A;&#x5C0F;&#x6570;&#x70B9;,&#x4F7F;&#x7528;.&#x4F5C;&#x4E3A;&#x5343;&#x4F4D;&#x5206;&#x9694;&#x7B26;
console.log(new Intl.NumberFormat(&apos;de-DE&apos;).format(number));
// &#x2192; 123.456,789

// &#x5927;&#x591A;&#x6570;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x56FD;&#x5BB6;&#x4F7F;&#x7528;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x6570;&#x5B57;
console.log(new Intl.NumberFormat(&apos;ar-EG&apos;).format(number));
// &#x2192; &#x661;&#x662;&#x663;&#x664;&#x665;&#x666;&#x66B;&#x667;&#x668;&#x669;

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat(&apos;en-IN&apos;).format(number));
// &#x2192; 1,23,456.789

// &#x901A;&#x8FC7;&#x7F16;&#x53F7;&#x7CFB;&#x7EDF;&#x4E2D;&#x7684;nu&#x6269;&#x5C55;&#x952E;&#x8BF7;&#x6C42;, &#x4F8B;&#x5982;<code>&#x4E2D;&#x6587;&#x5341;&#x8FDB;&#x5236;&#x6570;&#x5B57;</code>
console.log(new Intl.NumberFormat(&apos;zh-Hans-CN-u-nu-hanidec&apos;).format(number));
// &#x2192; &#x4E00;&#x4E8C;&#x4E09;,&#x56DB;&#x4E94;&#x516D;.&#x4E03;&#x516B;&#x4E5D;

//&#x5F53;&#x8BF7;&#x6C42;&#x7684;&#x8BED;&#x8A00;&#x4E0D;&#x88AB;&#x652F;&#x6301;,&#x4F8B;&#x5982;&#x5DF4;&#x91CC;,&#x5305;&#x542B;&#x4E00;&#x4E2A;&#x56DE;&#x6EDA;&#x8BED;&#x8A00;&#x5370;&#x5C3C;,&#x8FD9;&#x65F6;&#x5019;&#x5C31;&#x4F1A;&#x4F7F;&#x7528;&#x5370;&#x5C3C;&#x8BED;
console.log(new Intl.NumberFormat([&apos;ban&apos;, &apos;id&apos;]).format(number));
// &#x2192; 123.456,789
</pre>

<h3 id="&#x53EF;&#x7528;&#x7684;&#x9009;&#x9879;">&#x53EF;&#x7528;&#x7684;&#x9009;&#x9879;</h3>

<p>&#x53EF;&#x7528;&#x7684;&#x9009;&#x9879;&#x53C2;&#x6570;,&#x8FD4;&#x56DE;&#x7684;&#x503C;&#x53EF;&#x4EE5;&#x88AB;&#x8BBE;&#x7F6E;&#x6210;&#x60F3;&#x8981;&#x7684;&#x5F62;&#x5F0F;&#xFF1A;</p>

<pre class="brush: js">var number = 123456.789;

// &#x8BF7;&#x6C42;&#x4E00;&#x4E2A;&#x8D27;&#x5E01;&#x683C;&#x5F0F;
console.log(new Intl.NumberFormat(&apos;de-DE&apos;, { style: &apos;currency&apos;, currency: &apos;EUR&apos; }).format(number));
// &#x2192; 123.456,79&#xA0;&#x20AC;

// the Japanese yen doesn&apos;t use a minor unit
console.log(new Intl.NumberFormat(&apos;ja-JP&apos;, { style: &apos;currency&apos;, currency: &apos;JPY&apos; }).format(number));
// &#x2192; &#xFFE5;123,457

// &#x53EA;&#x663E;&#x793A;&#x4E09;&#x4E2A;&#x6709;&#x6548;&#x6570;&#x5B57;
console.log(new Intl.NumberFormat(&apos;en-IN&apos;, { maximumSignificantDigits: 3 }).format(number));
// &#x2192; 1,23,000
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/1.0/#sec-11.1" class="external">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="zh-CN">Intl.NumberFormat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/2.0/#sec-11.1" class="external">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="zh-CN">Intl.NumberFormat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://tc39.github.io/ecma402/#numberformat-objects" class="external">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="zh-CN">Intl.NumberFormat</small></a></td>
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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>24</td>
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29</a> (29)</td>
   <td>11</td>
   <td>15</td>
   <td>10</td>
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
   <th>IE Phone</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>26</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<div><ul><li>Introduction: <a href="http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html" class="external">The ECMAScript Internationalization API</a></li>
 <li>Constructors
  <ul><li><a title="The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator"><code>Intl.Collator</code></a></li>
   <li><a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a></li>
   <li><a title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"><code>Intl.NumberFormat</code></a></li>
  </ul></li>
 <li>Methods
  <ul><li><a title="The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>String.prototype.localeCompare()</code></a></li>
   <li><a title="The toLocaleString() method returns a string with a language sensitive representation of this number." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"><code>Number.prototype.toLocaleString()</code></a></li>
   <li><a title="The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.prototype.toLocaleString()</code></a></li>
   <li><a title="The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
   <li><a title="The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
  </ul></li>
</ul></div>
                  
                
              