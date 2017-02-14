
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>toLocaleString()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x5B57;&#x5728;&#x7279;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x4E0B;&#x7684;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<p><font><font>&#x65B0;&#xA0;&#xA0;</font></font><code>locales</code><font><font>&#xA0;&#x548C;&#xA0;&#xA0;</font></font><code>options</code><font><font>&#xA0;&#x8BBA;&#x636E;&#x8BA9;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x6307;&#x5B9A;&#x7684;&#x683C;&#x5F0F;&#x7EA6;&#x5B9A;&#xFF0C;&#x5E94;&#x4F7F;&#x7528;&#x548C;&#x81EA;&#x5B9A;&#x4E49;&#x51FD;&#x6570;&#x7684;&#x884C;&#x4E3A;&#x8BED;&#x8A00;&#x3002;</font><font>&#x5728;&#x65E7;&#x7684;&#x5B9E;&#x73B0;&#xFF0C;&#x8FD9;&#x5FFD;&#x7565;</font></font><code>locales</code><font><font>&#x548C;</font></font><code>options</code><font><font>&#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F62;&#x5F0F;&#x5B8C;&#x5168;&#x53D6;&#x51B3;&#x4E8E;&#x5B9E;&#x73B0;&#x65B9;&#x5F0F;&#x3002;</font></font></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>numObj</em>.toLocaleString(</code><code>[locales [, options]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p><font><font>&#x68C0;&#x67E5;</font></font>&#xA0;<a href="#Browser_Compatibility" title="#Browser_Compatibility">Browser compatibility</a> <font><font>&#x90E8;&#x5206;</font></font>&#x90E8;&#x5206;&#xFF0C;&#x770B;&#x770B;&#x54EA;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x652F;&#x6301;locales&#x548C;options&#x53C2;&#x6570;&#xFF0C;&#x5E76;&#x4E3E;&#x4F8B; <a href="#Example:_Checking_for_support_for_locales_and_options_arguments">Example: Checking for support for <code>locales</code> and <code>options</code> arguments</a>&#xA0;&#x7279;&#x5F81;&#x68C0;&#x6D4B;&#x3002;</p>

<div class="note">
<p><font><font>ECMAScript&#x7684;&#x56FD;&#x9645;&#x5316;API&#xFF0C;&#x4E0E;Firefox 29&#x5B9E;&#x65BD;&#xFF0C;&#x589E;&#x52A0;&#x4E86;</font></font><code>locales</code><font><font>&#x53C2;&#x6570;&#x7684;</font></font> <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"><code>Number.toLocaleString</code></a> <font><font>&#x65B9;&#x6CD5;&#x3002;</font><font>&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E3A;</font></font><code>undefined</code><font><font>&#xFF0C;&#x6B64;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x672C;&#x5730;&#x5316;&#x7684;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x6307;&#x5B9A;&#x7684;&#x4F4D;&#x6570;&#xFF0C;&#x800C;Firefox&#x7684;&#x65E9;&#x671F;&#x7248;&#x672C;&#x4E2D;&#x8FD4;&#x56DE;&#x7684;&#x82F1;&#x6587;&#x6570;&#x5B57;&#x3002;</font><font>&#x8FD9;&#x4E00;&#x53D8;&#x5316;&#x5DF2;&#x88AB;&#x62A5;&#x544A;&#x4E3A;&#x5F71;&#x54CD;&#x5411;&#x540E;&#x517C;&#x5BB9;&#x6027;&#x53EF;&#x80FD;&#x5C3D;&#x5FEB;&#x4FEE;&#x590D;&#x56DE;&#x5F52;&#x3002;</font></font> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=999003" class="external" title="Number.toLocaleString() without locale returns localized digits specified by the OS">bug&#xA0;999003</a>)</p>
</div>

<p></p><dl><dt><code>locales</code></dt>
 <dd>
 <p>Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the <code>locales</code> argument, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>. The following Unicode extension key is allowed:</p>

 <dl><dt><code>nu</code></dt>
  <dd>The numbering system to be used. Possible values include: <code>&quot;arab&quot;</code>, <code>&quot;arabext&quot;</code>, <code>&quot;bali&quot;</code>, <code>&quot;beng&quot;</code>, <code>&quot;deva&quot;</code>, <code>&quot;fullwide&quot;</code>, <code>&quot;gujr&quot;</code>, <code>&quot;guru&quot;</code>, <code>&quot;hanidec&quot;</code>, <code>&quot;khmr&quot;</code>, <code>&quot;knda&quot;</code>, <code>&quot;laoo&quot;</code>, <code>&quot;latn&quot;</code>, <code>&quot;limb&quot;</code>, <code>&quot;mlym&quot;</code>, <code>&quot;mong&quot;</code>, <code>&quot;mymr&quot;</code>, <code>&quot;orya&quot;</code>, <code>&quot;tamldec&quot;</code>, <code>&quot;telu&quot;</code>, <code>&quot;thai&quot;</code>, <code>&quot;tibt&quot;</code>.</dd>
 </dl></dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Optional. An object with some or all of the following properties:</p>

 <dl><dt><code>localeMatcher</code></dt>
  <dd>The locale matching algorithm to use. Possible values are <code>&quot;lookup&quot;</code> and <code>&quot;best fit&quot;</code>; the default is <code>&quot;best fit&quot;</code>. For information about this option, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>.</dd>
  <dt><code>style</code></dt>
  <dd>The formatting style to use. Possible values are <code>&quot;decimal&quot;</code> for plain number formatting, <code>&quot;currency&quot;</code> for currency formatting, and <code>&quot;percent&quot;</code> for percent formatting; the default is <code>&quot;decimal&quot;</code>.</dd>
  <dt><code>currency</code></dt>
  <dd>The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as <code>&quot;USD&quot;</code> for the US dollar, <code>&quot;EUR&quot;</code> for the euro, or <code>&quot;CNY&quot;</code> for the Chinese RMB&#xA0;&#x2014; see the <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" class="external">Current currency &amp; funds code list</a>. There is no default value; if the <code>style</code> is <code>&quot;currency&quot;</code>, the <code>currency</code> property must be provided.</dd>
  <dt><code>currencyDisplay</code></dt>
  <dd>How to display the currency in currency formatting. Possible values are <code>&quot;symbol&quot;</code> to use a localized currency symbol such as &#x20AC;, <code>&quot;code&quot;</code> to use the ISO currency code, <code>&quot;name&quot;</code> to use a localized currency name such as <code>&quot;dollar&quot;</code>; the default is <code>&quot;symbol&quot;</code>.</dd>
  <dt><code>useGrouping</code></dt>
  <dd>Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. Possible values are <code>true</code> and <code>false</code>; the default is <code>true</code>.</dd>
 </dl><p>The following properties fall into two groups: <code>minimumIntegerDigits</code>, <code>minimumFractionDigits</code>, and <code>maximumFractionDigits</code> in one group, <code>minimumSignificantDigits</code> and <code>maximumSignificantDigits</code> in the other. If at least one property from the second group is defined, then the first group is ignored.</p>

 <dl><dt><code>minimumIntegerDigits</code></dt>
  <dd>The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.</dd>
  <dt><code>minimumFractionDigits</code></dt>
  <dd>The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" class="external">ISO 4217 currency code list</a> (2 if the list doesn&apos;t provide that information).</dd>
  <dt><code>maximumFractionDigits</code></dt>
  <dd>The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of <code>minimumFractionDigits</code> and 3; the default for currency formatting is the larger of <code>minimumFractionDigits</code> and the number of minor unit digits provided by the <a href="http://www.currency-iso.org/en/home/tables/table-a1.html" class="external">ISO 4217 currency code list</a> (2 if the list doesn&apos;t provide that information); the default for percent formatting is the larger of <code>minimumFractionDigits</code> and 0.</dd>
  <dt><code>minimumSignificantDigits</code></dt>
  <dd>The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.</dd>
  <dt><code>maximumSignificantDigits</code></dt>
  <dd>The maximum number of significant digits to use. Possible values are from 1 to 21; the default is <code>minimumSignificantDigits</code>.</dd>
 </dl></dd>
</dl><p></p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<p>&#x5728;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x533A;&#x57DF;&#x57FA;&#x672C;&#x4F7F;&#x7528;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x9ED8;&#x8BA4;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x9ED8;&#x8BA4;&#x9009;&#x9879;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">var number = 3500;

console.log(number.toLocaleString()); // Displays &quot;3,500&quot; if in U.S. English locale
</pre>

<h3 name="Example:_Checking_for_support_for_locales_and_options_arguments" id="Example:_Checking_for_support_for_locales_and_options_arguments"><font><font>&#x4F8B;&#x5982;&#xFF1A;&#x68C0;&#x67E5;&#x652F;&#x6301;</font></font><code>locales</code><font><font>&#x548C;</font></font><code>options&#x53C2;&#x6570;</code></h3>

<p><font><font>&#x8BE5;</font></font><code>locales</code><font><font>&#x548C;</font></font><code>options</code><font><font>&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x5728;&#x6240;&#x6709;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x652F;&#x6301;&#x7684;&#x3002;</font><font>&#x8981;&#x68C0;&#x67E5;&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x5B9E;&#x73B0;&#x662F;&#x5426;&#x652F;&#x6301;&#x5B83;&#x4EEC;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x652F;&#x6301;&#x5C31;&#x76F4;&#x63A5;&#x629B;&#x5F02;&#x5E38;&#x4E86;&#xA0;</font></font><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;"><code>RangeError</code></a>&#xA0;<font><font>&#xFF1A;</font></font></p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
    var number = 0;
    try {
        number.toLocaleString(&quot;i&quot;);
    } catch (e) {
        return e&#x200B;.name === &quot;RangeError&quot;;
    }
    return false;
}
</pre>

<h3 name="Example:_Using_locales" id="Example:_Using_locales"><font><font>&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#xA0;</font></font><code>locales</code></h3>

<p><font><font>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x663E;&#x793A;&#x4E86;&#x4E00;&#x4E9B;&#x672C;&#x5730;&#x5316;&#x7684;&#x6570;&#x5B57;&#x683C;&#x5F0F;&#x7684;&#x53D8;&#x5316;&#x3002;</font><font>&#x4E3A;&#x4E86;&#x8BA9;&#x60A8;&#x7684;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x7684;&#x7528;&#x6237;&#x754C;&#x9762;&#x4E2D;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF0C;&#x8BF7;&#x786E;&#x4FDD;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#xFF08;&#x53EF;&#x80FD;&#x8FD8;&#x6709;&#x4E00;&#x4E9B;&#x5907;&#x7528;&#x8BED;&#x8A00;&#xFF09;</font></font><code>locales</code><font><font>&#x7684;&#x8BF4;&#x6CD5;&#xFF1A;</font></font></p>

<pre class="brush: js">var number = 123456.789;

// &#x5FB7;&#x8BED;&#x4F7F;&#x7528;&#x9017;&#x53F7;&#x4F5C;&#x4E3A;&#x5C0F;&#x6570;&#x5206;&#x9694;&#x7B26;&#xFF0C;&#x5468;&#x671F;&#x4E3A;&#x5343;&#x4F4D;
alert(number.toLocaleString(&quot;de-DE&quot;));
// &#x2192; 123.456,789

// &#x5728;&#x5927;&#x591A;&#x6570;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x56FD;&#x5BB6;&#x7684;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x4F7F;&#x7528;&#x771F;&#x5B9E;&#x7684;&#x963F;&#x62C9;&#x4F2F;&#x6570;&#x5B57;
alert(number.toLocaleString(&quot;ar-EG&quot;));
// &#x2192; &#x661;&#x662;&#x663;&#x664;&#x665;&#x666;&#x66B;&#x667;&#x668;&#x669;

// &#x5370;&#x5EA6;&#x4F7F;&#x7528; &#x5343;/&#x5341;&#x4E07;/&#x5343;&#x4E07; &#x4F5C;&#x4E3A;&#x5206;&#x9694;&#x4F4D;&#x7F6E;
alert(number.toLocaleString(&quot;en-IN&quot;));
// &#x2192; 1,23,456.789

// nu&#x6269;&#x5C55;&#x5BC6;&#x94A5;&#x8BF7;&#x6C42;&#x7F16;&#x53F7;&#x7CFB;&#x7EDF;, e.g. &#x4E2D;&#x6587;&#x5341;&#x8FDB;&#x5236;
alert(number.toLocaleString(&quot;zh-Hans-CN-u-nu-hanidec&quot;));
// &#x2192; &#x4E00;&#x4E8C;&#x4E09;,&#x56DB;&#x4E94;&#x516D;.&#x4E03;&#x516B;&#x4E5D;

// &#x5F53;&#x8BF7;&#x6C42;&#x53EF;&#x80FD;&#x4E0D;&#x88AB;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#xFF08;&#x4F8B;&#x5982;&#x5DF4;&#x5398;&#x8BED;&#xFF09;&#x65F6;&#xFF0C;
// &#x52A0;&#x5165;&#x540E;&#x5907;&#x8BED;&#x8A00;&#xFF08;&#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#x4E3A;&#x5370;&#x5C3C;&#x8BED;&#xFF09;
alert(number.toLocaleString([&quot;ban&quot;, &quot;id&quot;]));
// &#x2192; 123.456,789
</pre>

<h3 name="Example:_Using_options" id="Example:_Using_options"><font><font>&#x793A;&#x4F8B;&#xFF1A;&#x4F7F;&#x7528;&#xA0;</font></font><code>options</code></h3>

<p><font><font>&#x6240;&#x63D0;&#x4F9B;&#x7684;&#x7ED3;&#x679C;</font></font><code>toLocaleString</code><font><font>&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x81EA;&#x5B9A;&#x4E49;</font></font><code>options</code><font><font>&#x53C2;&#x6570;&#xFF1A;</font></font></p>

<pre class="brush: js">var number = 123456.789;

// &#x8BF7;&#x6C42;&#x8D27;&#x5E01;&#x683C;&#x5F0F;
alert(number.toLocaleString(&quot;de-DE&quot;, {style: &quot;currency&quot;, currency: &quot;EUR&quot;}));
// &#x2192; 123.456,79&#xA0;&#x20AC;

// &#x65E5;&#x5143;&#x4E0D;&#x4F7F;&#x7528;&#x5C0F;&#x5355;&#x4F4D;&#xFF08;&#x6CA1;&#x6709;&#x5C0F;&#x6570;&#x4F4D;&#xFF09;
alert(number.toLocaleString(&quot;ja-JP&quot;, {style: &quot;currency&quot;, currency: &quot;JPY&quot;}))
// &#x2192; &#xFFE5;123,457

// &#x9650;&#x5236;&#x4E3A;&#x4E09;&#x4E2A;&#x6709;&#x6548;&#x6570;&#x5B57;
alert(number.toLocaleString(&quot;en-IN&quot;, {maximumSignificantDigits: 3}));
// &#x2192; 1,23,000
</pre>

<h2 name="Performance" id="Performance">&#x6027;&#x80FD;</h2>

<p>&#x5F53;&#x683C;&#x5F0F;&#x5316;&#x6BD4;&#x8F83;&#x5927;&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x8FD9;&#x4E2A;&#x6BD4;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="Intl.NumberFormat&#x662F;&#x5BF9;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x6570;&#x5B57;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x5668;&#x7C7B;"><code>NumberFormat</code></a> &#x5BF9;&#x8C61;&#x548C;&#x4F7F;&#x7528;&#x7531; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>NumberFormat.format</code></a> &#x63D0;&#x4F9B;&#x7684;&#x65B9;&#x6CD5;&#x66F4;&#x4F18;&#x79C0;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition. Implemented in JavaScript 1.5</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.7.4.3" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Number.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-number.prototype.tolocalestring" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Number.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-13.2.1" class="external">ECMAScript Internationalization API Specification, 1<sup>st</sup> Edition (ECMA-402)</a></td>
   <td>Standard</td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_Compatibility" id="Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
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
   <td>
    <p><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</p>
   </td>
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
   <td>
    <p><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></p>

    <p><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=864843" class="external" title="FIXED: Enable ECMAScript Internationalization API for b2gdroid">bug&#xA0;864843</a></p>
   </td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A; Number&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;"><code>Number.prototype.toString()</code></a></li>
</ul>
                  
                
              