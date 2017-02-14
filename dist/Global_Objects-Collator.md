
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>Intl.Collator<font face="Open Sans, Arial, sans-serif">&#xA0;</font></code></strong><code>&#x662F;&#x7528;&#x4E8E;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x5B57;&#x7B26;&#x4E32;&#x6BD4;&#x8F83;&#x7684; collators&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</code></p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>new Intl.Collator([<var>locales</var>[, <var>options</var>]])
Intl.Collator.call(<var>this</var>[, <var>locales</var>[, <var>options</var>]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>
 <p>&#x53EF;&#x9009;. &#x7F29;&#x5199;&#x8BED;&#x8A00;&#x4EE3;&#x7801; (BCP 47 language tag, &#x4F8B;&#x5982;: cmn-Hans-CN) &#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x7EC4;&#x6210;&#x7684;&#x6570;&#x7EC4;.&#xA0;&#x5173;&#x4E8E;&#x53C2;&#x6570; locales &#x7684;&#x4E00;&#x822C;&#x5F62;&#x5F0F;&#x548C;&#x89E3;&#x91CA;&#x8BF7;&#x53C2;&#x89C1;<a title="&#x56FD;&#x9645;&#x5316;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x51E0;&#x4E2A;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x53EF;&#x89C1;See also&#xFF09;&#x4E00;&#x6837;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x6837;&#x7684;&#x6A21;&#x5F0F;&#x6765;&#x8BC6;&#x522B;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x548C;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF1A;&#x4ED6;&#x4EEC;&#x90FD;&#x63A5;&#x6536; locales &#x548C; options &#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528; options.localeMatcher &#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x6765;&#x5BF9;&#x6BD4;&#x5E94;&#x7528;&#x8BF7;&#x6C42;&#x7684;&#x548C;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#xFF0C;&#x6765;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation">Intl page</a>. &#x4E0B;&#x9762;&#x7684;&#x8FD9;&#x4E9B; Unicode &#x6269;&#x5C55;&#x952E;&#x4E5F;&#x662F;&#x88AB;&#x5141;&#x8BB8;&#x7684;:</p>

 <dl>
  <dt><code>co</code></dt>
  <dd>&#x67D0;&#x4E9B;&#x533A;&#x57DF;&#x8BBE;&#x7F6E;&#x7684;&#x53D8;&#x4F53;&#x5F52;&#x7C7B;&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x5305;&#x62EC;&#xFF1A;&#x201C;big5han&#x201D;&#xFF0C;&#x201C;dict&#x201D;&#xFF0C;&#x201C;direct&#x201D;&#xFF0C;&#x201C;ducet&#x201D;&#xFF0C;&#x201C;gb2312&#x201D;&#xFF0C;&#x201C;phonebk&#x201D;&#xFF0C;&#x201C;phonetic&#x201D;&#xFF0C;&#x201C;pinyin&#x201D;&#xFF0C;&#x201C;reformed&#x201D;&#xFF0C;&#x201C;searchjl&#x201D;&#xFF0C;&#x201C;stroke&#x201D; &#x201C;&#xFF0C;&#x201D;unihan&#x201C;&#x3002;&#x503C;&#x201C;<code>standard</code>&#x201D; &#x548C; &#x201C;<code>search</code>&#x201D; &#x88AB;&#x5FFD;&#x7565;; &#x5B83;&#x4EEC;&#x88AB; options &#x5C5E;&#x6027;&#x7528;&#x6CD5;&#x66FF;&#x6362;&#xFF08;&#x8BE6;&#x89C1;&#x4E0B;&#x6587;&#xFF09;&#x3002;</dd>
  <dt><code>kn</code></dt>
  <dd>&#x662F;&#x5426;&#x5E94;&#x4F7F;&#x7528;&#x6570;&#x5B57;&#x5BF9;&#x7167;&#xFF0C;&#x4F7F;&#x5F97; &#x201C;1&#x201D;&lt;&#x201C;2&#x201D;&lt;&#x201C;10&#x201D;&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; &#x201C;true&#x201D; &#x548C; &#x201C;false&#x201D;&#x3002; &#x6B64;&#x9009;&#x9879;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; options &#x5C5E;&#x6027;&#x6216;&#x901A;&#x8FC7; Unicode &#x6269;&#x5C55; key &#x8BBE;&#x7F6E;; &#x5982;&#x679C;&#x4E24;&#x8005;&#x90FD;&#x63D0;&#x4F9B;&#xFF0C;options &#x5C5E;&#x6027;&#x4F18;&#x5148;&#x3002;</dd>
  <dt><code>kf</code></dt>
  <dd><code>&#x9996;&#x5148;&#x6392;&#x5E8F;&#x5927;&#x5199;&#x6216;&#x8005;&#x5C0F;&#x5199;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; &#x201C;upper&#x201D;&#xFF0C;&#x201C;lower&#x201D; &#x6216; &#x201C;false&#x201D;&#xFF08;&#x4F7F;&#x7528;&#x533A;&#x57DF;&#x8BBE;&#x7F6E;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#x3002; </code> &#x6B64;&#x9009;&#x9879;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; options &#x5C5E;&#x6027;&#x6216;&#x901A;&#x8FC7; Unicode &#x6269;&#x5C55; key &#x8BBE;&#x7F6E;; &#x5982;&#x679C;&#x4E24;&#x8005;&#x90FD;&#x63D0;&#x4F9B;&#xFF0C;options &#x5C5E;&#x6027;&#x4F18;&#x5148;&#x3002;</dd>
 </dl>
 </dd>
 <dt><code>options</code></dt>
 <dd>
 <p>&#x53EF;&#x9009;. &#x5305;&#x542B;&#x4E00;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x4E0B;&#x9762;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;:</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>&#x4F7F;&#x7528;&#x7684; local &#x7684;&#x5339;&#x914D;&#x7B97;&#x6CD5;. &#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709; &quot;lookup&quot; &#x548C; &quot;best fit&quot;; &#x9ED8;&#x8BA4;&#x503C;&#x662F;&#xA0;<code>&quot;best fit&quot;</code>. &#x6709;&#x5173;&#x6B64;&#x9009;&#x9879;&#x7684;&#x4FE1;&#x606F;, &#x8BF7;&#x53C2;&#x89C1;<a title="&#x56FD;&#x9645;&#x5316;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x51E0;&#x4E2A;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x53EF;&#x89C1;See also&#xFF09;&#x4E00;&#x6837;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x6837;&#x7684;&#x6A21;&#x5F0F;&#x6765;&#x8BC6;&#x522B;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x548C;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF1A;&#x4ED6;&#x4EEC;&#x90FD;&#x63A5;&#x6536; locales &#x548C; options &#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528; options.localeMatcher &#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x6765;&#x5BF9;&#x6BD4;&#x5E94;&#x7528;&#x8BF7;&#x6C42;&#x7684;&#x548C;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#xFF0C;&#x6765;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Intl page</a>.</dd>
  <dt><code>usage</code></dt>
  <dd>&#x6BD4;&#x8F83;&#x662F;&#x7528;&#x4E8E;&#x6392;&#x5E8F;&#x8FD8;&#x662F;&#x7528;&#x4E8E;&#x641C;&#x7D22;&#x5339;&#x914D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; &#x201C;sort&#x201D; &#x548C; &#x201C;search&#x201D;; &#x9ED8;&#x8BA4;&#x4E3A; &#x201C;sort&#x201D;&#x3002;</dd>
  <dt><code>sensitivity</code></dt>
  <dd>
  <p>&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x54EA;&#x4E9B;&#x5DEE;&#x5F02;&#x5E94;&#x5BFC;&#x81F4;&#x7ED3;&#x679C;&#x503C;&#x4E3A;&#x975E;&#x96F6;(non-zero)&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x6709;&#xFF1A;</p>

  <ul>
   <li><code>&quot;base&quot;</code>: &#x53EA;&#x6709;&#x5B57;&#x6BCD;&#x4E0D;&#x540C;&#x7684;&#x5B57;&#x6BCD;&#x6BD4;&#x8F83;&#x4E0D;&#x76F8;&#x7B49;&#x3002;&#x4F8B;&#x5B50;: <code>a &#x2260; b</code>, <code>a = &#xE1;</code>, <code>a = A&#x3002;</code></li>
   <li><code>&quot;accent&quot;</code>: &#x53EA;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x57FA;&#x672C;&#x5B57;&#x6BCD;&#x6216;&#x91CD;&#x97F3;&#x7B26;&#x53F7;&#x548C;&#x5176;&#x4ED6;&#x53D8;&#x97F3;&#x7B26;&#x53F7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6BD4;&#x8F83;&#x4E3A;&#x4E0D;&#x76F8;&#x7B49;&#x3002;&#xA0;&#x4F8B;&#x5982;: <code>a &#x2260; b</code>, <code>a &#x2260; &#xE1;</code>, <code>a = A&#x3002;</code></li>
   <li><code>&quot;case&quot;</code>: &#x53EA;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x57FA;&#x672C;&#x5B57;&#x6BCD;&#x6216;&#x5927;&#x5C0F;&#x5199;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x6BD4;&#x8F83;&#x4E0D;&#x76F8;&#x7B49;&#x3002;&#xA0;Examples: <code>a &#x2260; b</code>, <code>a = &#xE1;</code>, <code>a &#x2260; A&#x3002;</code></li>
   <li><code>&quot;variant&quot;</code>: &#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5B57;&#x6BCD;&#xFF0C;&#x53E3;&#x97F3;&#x548C;&#x5176;&#x4ED6;&#x53D8;&#x97F3;&#x7B26;&#x53F7;&#x3001;&#x6216;&#x4E0D;&#x540C;&#x5927;&#x5C0F;&#x5199;&#x6BD4;&#x8F83;&#x4E0D;&#x76F8;&#x7B49;&#x3002; &#x4E5F;&#x53EF;&#x4EE5;&#x8003;&#x8651;&#x5176;&#x4ED6;&#x5DEE;&#x5F02;&#x3002;&#x4F8B;&#x5982;&#xFF1A;&#xA0;<code>a &#x2260; b</code>, <code>a &#x2260; &#xE1;</code>, <code>a &#x2260; A</code>.</li>
  </ul>

  <p><code>&quot;variant&quot; &#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x4F7F;&#x7528;<font face="Open Sans, Arial, sans-serif">&#xA0;</font></code><code>&quot;sort&quot;</code>; &#x5B83;&#x7684; locale &#x4F9D;&#x8D56;&#x4E8E;&#x4F7F;&#x7528; <code>&quot;search&quot;</code>.</p>
  </dd>
  <dt><code>ignore&#xAD;Punctua&#xAD;tion</code></dt>
  <dd>&#x662F;&#x5426;&#x5E94;&#x5FFD;&#x7565;&#x6807;&#x70B9;&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; true &#x548C; false; &#x9ED8;&#x8BA4;&#x503C;&#x4E3A; false&#x3002;</dd>
  <dt><code>numeric</code></dt>
  <dd>&#x662F;&#x5426;&#x5E94;&#x4F7F;&#x7528;&#x6570;&#x5B57;&#x5BF9;&#x7167;&#xFF0C;&#x4F7F;&#x5F97; &#x201C;1&#x201D;&lt;&#x201C;2&#x201D;&lt;&#x201C;10&#x201D;&#x3002; &#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; &#x201C;true&#x201D; &#x548C; &#x201C;false&#x201D;&#x3002;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A; &#x201C;false&#x201D;&#xA0;&#x3002; &#x6B64;&#x9009;&#x9879;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; options &#x5C5E;&#x6027;&#x6216;&#x901A;&#x8FC7; Unicode &#x6269;&#x5C55; key &#x8BBE;&#x7F6E;; &#x5982;&#x679C;&#x4E24;&#x8005;&#x90FD;&#x63D0;&#x4F9B;&#xFF0C;options &#x5C5E;&#x6027;&#x4F18;&#x5148;&#x3002;&#x5B9E;&#x73B0;&#x4E0D;&#x9700;&#x8981;&#x652F;&#x6301;&#x6B64;&#x5C5E;&#x6027;&#x3002;</dd>
  <dt><code>caseFirst</code></dt>
  <dd><code>&#x9996;&#x5148;&#x6392;&#x5E8F;&#x5927;&#x5199;&#x6216;&#x8005;&#x5C0F;&#x5199;&#x3002;&#x53EF;&#x80FD;&#x7684;&#x503C;&#x4E3A; &#x201C;upper&#x201D;&#xFF0C;&#x201C;lower&#x201D; &#x6216; &#x201C;false&#x201D;&#xFF08;&#x4F7F;&#x7528;&#x533A;&#x57DF;&#x8BBE;&#x7F6E;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#xFF09;&#x3002; </code> &#x6B64;&#x9009;&#x9879;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; options &#x5C5E;&#x6027;&#x6216;&#x901A;&#x8FC7; Unicode &#x6269;&#x5C55; key &#x8BBE;&#x7F6E;; &#x5982;&#x679C;&#x4E24;&#x8005;&#x90FD;&#x63D0;&#x4F9B;&#xFF0C;options &#x5C5E;&#x6027;&#x4F18;&#x5148;&#x3002;&#x5B9E;&#x73B0;&#x4E0D;&#x9700;&#x8981;&#x652F;&#x6301;&#x6B64;&#x5C5E;&#x6027;&#x3002;</dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>Intl.Collator</code> &#x7C7B;&#x6709;&#x4E00;&#x4E0B;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;</p>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<dl>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype" class="new"><code>Intl.Collator.prototype</code></a></dt>
 <dd>&#x5141;&#x8BB8;&#x5411;&#x6240;&#x6709;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<dl>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf" class="new"><code>Intl.Collator.supportedLocalesOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x5305;&#x542B;&#x6240;&#x652F;&#x6301;&#x7684;&#x6240;&#x63D0;&#x4F9B;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x6570;&#x7EC4;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x800C;&#x4E0D;&#x5FC5;&#x56DE;&#x9000;&#x5230;&#x8FD0;&#x884C;&#x65F6;&#x7684;&#x9ED8;&#x8BA4;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x3002;</dd>
</dl>

<h2 id="Collator_&#x5B9E;&#x4F8B;"><code>Collator &#x5B9E;&#x4F8B;</code></h2>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<p><code>Collator &#x5B9E;&#x4F8B;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x4EE5;&#x4E0B;&#x5C5E;&#x6027;&#xFF1A;</code></p>

<div><dl><dt><a title="The Intl.Collator.prototype.compare property returns a getter function that compares two strings according to the sort order of this Collator object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare"><code>Intl.Collator.prototype.compare</code></a></dt>
 <dd>Getter; returns a function that compares two strings according to the sort order of this <a title="The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator"><code>Intl.Collator</code></a> object.</dd>
 <dt><code>Intl.Collator.prototype.constructor</code></dt>
 <dd>A reference to <a title="The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator"><code>Intl.Collator</code></a>.</dd>
</dl></div>

<h3 id="&#x65B9;&#x6CD5;_2">&#x65B9;&#x6CD5;</h3>

<h3 id="Collator_&#x5B9E;&#x4F8B;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x4EE5;&#x4E0B;&#x65B9;&#x6CD5;&#xFF1A;">Collator &#x5B9E;&#x4F8B;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x7EE7;&#x627F;&#x4EE5;&#x4E0B;&#x65B9;&#x6CD5;&#xFF1A;</h3>

<div><dl><dt><a title="The Intl.Collator.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and collation options computed during initialization of this Collator object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions"><code>Intl.Collator.prototype.resolvedOptions()</code></a></dt>
 <dd>Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.</dd>
</dl></div>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x57FA;&#x672C;&#x7528;&#x6CD5;">&#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

<p>&#x4EE5;&#x4E0B;&#x793A;&#x4F8B;&#x6F14;&#x793A;&#x5728;&#x53E6;&#x4E00;&#x4E2A;&#x4E4B;&#x524D;&#xFF0C;&#x4E4B;&#x540E;&#x6216;&#x540C;&#x7EA7;&#x522B;&#x53D1;&#x751F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x4E0D;&#x540C;&#x6F5C;&#x5728;&#x7ED3;&#x679C;&#xFF1A;</p>

<pre class="brush: js">console.log(new Intl.Collator().compare(&apos;a&apos;, &apos;c&apos;)); // &#x2192; a negative value
console.log(new Intl.Collator().compare(&apos;c&apos;, &apos;a&apos;)); // &#x2192; a positive value
console.log(new Intl.Collator().compare(&apos;a&apos;, &apos;a&apos;)); // &#x2192; 0
</pre>

<p>&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;&#x4E0A;&#x8FF0;&#x4EE3;&#x7801;&#x4E2D;&#x663E;&#x793A;&#x7684;&#x7ED3;&#x679C;&#x53EF;&#x80FD;&#x4F1A;&#x56E0;&#x6D4F;&#x89C8;&#x5668;&#x548C;&#x6D4F;&#x89C8;&#x5668;&#x7248;&#x672C;&#x800C;&#x5F02;&#x3002; &#x8FD9;&#x662F;&#x56E0;&#x4E3A;&#x503C;&#x662F;&#x5B9E;&#x73B0;&#x7279;&#x5B9A;&#x7684;&#x3002; &#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x89C4;&#x8303;&#x4EC5;&#x9700;&#x8981;&#x524D;&#x540E;&#x503C;&#x4E3A;&#x8D1F;&#x548C;&#x6B63;&#x3002;</p>

<h3 id="&#x4F7F;&#x7528;_locales">&#x4F7F;&#x7528;&#xA0;<code>locales</code></h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare" class="new"><code>Collator.prototype.compare()</code></a> &#x63D0;&#x4F9B;&#x7684;&#x7ED3;&#x679C;&#x5728;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x4E4B;&#x95F4;&#x6709;&#x6240;&#x4E0D;&#x540C;&#x3002;&#x4E3A;&#x4E86;&#x83B7;&#x5F97;&#x7528;&#x4E8E;&#x60A8;&#x7684;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x7684;&#x7528;&#x6237;&#x754C;&#x9762;&#x7684;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF0C;&#x8BF7;&#x786E;&#x4FDD;&#x8BBE;&#x5B9A;&#x4E86;&#x8BED;&#x8A00;&#xFF08;&#x53EF;&#x80FD;&#x8FD8;&#x6709;&#x4E00;&#x4E9B;&#x56DE;&#x9000;&#x8BED;&#x8A00;&#xFF09;&#x53C2;&#x6570;&#xFF1A;</p>

<pre class="brush: js">// &#x5FB7;&#x8BED;&#x4E2D;, &#xE4; &#x4F7F;&#x7528; a &#x7684;&#x6392;&#x5E8F;
console.log(new Intl.Collator(&apos;de&apos;).compare(&apos;&#xE4;&apos;, &apos;z&apos;));
// &#x2192; &#x4E00;&#x4E2A;&#x8D1F;&#x503C;

// &#x745E;&#x5178;&#x8BED;&#x4E2D;, &#xE4; &#x5728; z &#x7684;&#x540E;&#x9762;
console.log(new Intl.Collator(&apos;sv&apos;).compare(&apos;&#xE4;&apos;, &apos;z&apos;));
// &#x2192; &#x4E00;&#x4E2A;&#x6B63;&#x503C;
</pre>

<h3 id="&#x4F7F;&#x7528;_options">&#x4F7F;&#x7528;&#xA0;<code>options</code></h3>

<p><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare" class="new"><code>Collator.prototype.compare()</code></a> &#x63D0;&#x4F9B;&#x7684;&#x7ED3;&#x679C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; options &#x53C2;&#x6570;&#x81EA;&#x5B9A;&#x4E49;&#xFF1A;</p>

<pre class="brush: js">// &#x5FB7;&#x8BED;&#x4E2D;, &#xE4; &#x4F7F;&#x7528; a &#x4F5C;&#x4E3A;&#x57FA;&#x672C;&#x5B57;&#x6BCD;
console.log(new Intl.Collator(&apos;de&apos;, { sensitivity: &apos;base&apos; }).compare(&apos;&#xE4;&apos;, &apos;a&apos;));
// &#x2192; 0

// &#x745E;&#x5178;&#x8BED;&#x4E2D;, &#xE4; &#x548C; a &#x662F;&#x5355;&#x72EC;&#x7684;&#x57FA;&#x672C;&#x5B57;&#x6BCD;
console.log(new Intl.Collator(&apos;sv&apos;, { sensitivity: &apos;base&apos; }).compare(&apos;&#xE4;&apos;, &apos;a&apos;));
// &#x2192; &#x4E00;&#x4E2A;&#x6B63;&#x503C;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/1.0/#sec-10.1" class="external">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="zh-CN">Intl.Collator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/2.0/#sec-10.1" class="external">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="zh-CN">Intl.Collator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://tc39.github.io/ecma402/#collator-objects" class="external">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="zh-CN">Intl.Collator</small></a></td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>24</td>
   <td>12</td>
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
   <td>54.0 (54)</td>
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
                  
                
              