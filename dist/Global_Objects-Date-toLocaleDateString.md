
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>toLocaleDateString()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;<code>locales</code>&#xA0;&#x548C;&#xA0;<code>options</code> &#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;<code>locales</code> &#x548C; <code>options</code> &#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>dateObj</var>.toLocaleDateString([locales [, options]])</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<p>&#xA0;&#x67E5;&#x770B;<a title="#Browser_Compatibility" href="#Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</a>&#x5C0F;&#x8282;&#xFF0C;&#x770B;&#x4E0B;&#x54EA;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#xA0;<code>locales</code>&#xA0;&#x548C;&#xA0;<code>options</code> &#x53C2;&#x6570;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x53C2;&#x770B;<a href="#Example:_Checking_for_support_for_locales_and_options_arguments">&#x4F8B;&#x5B50;&#xFF1A; &#x68C0;&#x6D4B;&#xA0;<code>locales</code> &#x548C; <code>options</code> &#x53C2;&#x6570;&#x652F;&#x6301;&#x60C5;&#x51B5;</a>&#x3002;</p>

<p></p><dl><dt><code>locales</code></dt>
 <dd>
 <p>Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the <code>locales</code> argument, see the <a title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation">Intl page</a>. The following Unicode extension keys are allowed:</p>

 <dl><dt><code>nu</code></dt>
  <dd>Numbering system. Possible values include: <code>&quot;arab&quot;</code>, <code>&quot;arabext&quot;</code>, <code>&quot;bali&quot;</code>, <code>&quot;beng&quot;</code>, <code>&quot;deva&quot;</code>, <code>&quot;fullwide&quot;</code>, <code>&quot;gujr&quot;</code>, <code>&quot;guru&quot;</code>, <code>&quot;hanidec&quot;</code>, <code>&quot;khmr&quot;</code>, <code>&quot;knda&quot;</code>, <code>&quot;laoo&quot;</code>, <code>&quot;latn&quot;</code>, <code>&quot;limb&quot;</code>, <code>&quot;mlym&quot;</code>, <code>&quot;mong&quot;</code>, <code>&quot;mymr&quot;</code>, <code>&quot;orya&quot;</code>, <code>&quot;tamldec&quot;</code>, <code>&quot;telu&quot;</code>, <code>&quot;thai&quot;</code>, <code>&quot;tibt&quot;</code>.</dd>
  <dt><code>ca</code></dt>
  <dd>Calendar. Possible values include: <code>&quot;buddhist&quot;</code>, <code>&quot;chinese&quot;</code>, <code>&quot;coptic&quot;</code>, <code>&quot;ethioaa&quot;</code>, <code>&quot;ethiopic&quot;</code>, <code>&quot;gregory&quot;</code>, <code>&quot;hebrew&quot;</code>, <code>&quot;indian&quot;</code>, <code>&quot;islamic&quot;</code>, <code>&quot;islamicc&quot;</code>, <code>&quot;iso8601&quot;</code>, <code>&quot;japanese&quot;</code>, <code>&quot;persian&quot;</code>, <code>&quot;roc&quot;</code>.</dd>
 </dl></dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Optional. An object with some or all of the following properties:</p>

 <dl><dt><code>localeMatcher</code></dt>
  <dd>The locale matching algorithm to use. Possible values are <code>&quot;lookup&quot;</code> and <code>&quot;best fit&quot;</code>; the default is <code>&quot;best fit&quot;</code>. For information about this option, see the <a title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Intl page</a>.</dd>
  <dt><code>timeZone</code></dt>
  <dd>The time zone to use. The only value implementations must recognize is <code>&quot;UTC&quot;</code>; the default is the runtime&apos;s default time zone. Implementations may also recognize the time zone names of the <a href="https://www.iana.org/time-zones" class="external">IANA time zone database</a>, such as <code>&quot;Asia/Shanghai&quot;</code>, <code>&quot;Asia/Kolkata&quot;</code>, <code>&quot;America/New_York&quot;</code>.</dd>
  <dt><code>hour12</code></dt>
  <dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible values are <code>true</code> and <code>false</code>; the default is locale dependent.</dd>
  <dt><code>formatMatcher</code></dt>
  <dd>The format matching algorithm to use. Possible values are <code>&quot;basic&quot;</code> and <code>&quot;best fit&quot;</code>; the default is <code>&quot;best fit&quot;</code>. See the following paragraphs for information about the use of this property.</dd>
 </dl><p>The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:</p>

 <ul><li><code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code></li>
  <li><code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code></li>
  <li><code>year</code>, <code>month</code>, <code>day</code></li>
  <li><code>year</code>, <code>month</code></li>
  <li><code>month</code>, <code>day</code></li>
  <li><code>hour</code>, <code>minute</code>, <code>second</code></li>
  <li><code>hour</code>, <code>minute</code></li>
 </ul><p>Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the <code>formatMatcher</code> property: A <a href="http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher" class="external">fully specified <code>&quot;basic&quot;</code> algorithm</a> and an implementation dependent <code>&quot;best fit&quot;</code> algorithm.</p>

 <dl><dt><code>weekday</code></dt>
  <dd>The representation of the weekday. Possible values are <code>&quot;narrow&quot;</code>, <code>&quot;short&quot;</code>, <code>&quot;long&quot;</code>.</dd>
  <dt><code>era</code></dt>
  <dd>The representation of the era. Possible values are <code>&quot;narrow&quot;</code>, <code>&quot;short&quot;</code>, <code>&quot;long&quot;</code>.</dd>
  <dt><code>year</code></dt>
  <dd>The representation of the year. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>.</dd>
  <dt><code>month</code></dt>
  <dd>The representation of the month. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>, <code>&quot;narrow&quot;</code>, <code>&quot;short&quot;</code>, <code>&quot;long&quot;</code>.</dd>
  <dt><code>day</code></dt>
  <dd>The representation of the day. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>.</dd>
  <dt><code>hour</code></dt>
  <dd>The representation of the hour. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>.</dd>
  <dt><code>minute</code></dt>
  <dd>The representation of the minute. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>.</dd>
  <dt><code>second</code></dt>
  <dd>The representation of the second. Possible values are <code>&quot;numeric&quot;</code>, <code>&quot;2-digit&quot;</code>.</dd>
  <dt><code>timeZoneName</code></dt>
  <dd>The representation of the time zone name. Possible values are <code>&quot;short&quot;</code>, <code>&quot;long&quot;</code>.</dd>
 </dl> 
 </dd>
</dl><p></p>

<p>The default value for each date-time component property is <code>undefined</code>, but if the <code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code> properties are all <code>undefined</code>, then <code>year</code>, <code>month</code>, and <code>day</code> are assumed to be &quot;numeric&quot;.</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_toLocaleDateString" id="Example:_Using_toLocaleDateString">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>toLocaleDateString</code></h3>

<p>&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#xFF08;locale&#xFF09;&#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x9ED8;&#x8BA4;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x683C;&#x5F0F;&#x8BBE;&#x7F6E;&#xFF08;options&#xFF09;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString without arguments depends on the implementation,
// the default locale, and the default time zone
date.toLocaleDateString();
// &#x2192; &quot;12/11/2012&quot; if run in en-US locale with time zone America/Los_Angeles</pre>

<h3 name="Example:_Checking_for_support_for_locales_and_options_arguments" id="Example:_Checking_for_support_for_locales_and_options_arguments">&#x4F8B;&#x5B50;&#xFF1A;&#x68C0;&#x6D4B;&#xA0;<code>locales</code> &#x548C; <code>options</code> &#x53C2;&#x6570;&#x652F;&#x6301;&#x60C5;&#x51B5;</h3>

<p><code>locales</code> &#x548C;&#xA0;<code>options</code> &#x53C2;&#x6570;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x652F;&#x6301;&#x3002;&#x4E3A;&#x4E86;&#x68C0;&#x6D4B;&#x4E00;&#x79CD;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#xFF08;implementation&#xFF09;&#x662F;&#x5426;&#x652F;&#x6301;&#x5B83;&#x4EEC;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x8BED;&#x8A00;&#x6807;&#x7B7E;&#xFF0C;&#x5982;&#x679C;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x652F;&#x6301;&#x8BE5;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<code>RangeError</code> &#x5F02;&#x5E38;&#xFF0C;&#x53CD;&#x4E4B;&#x4F1A;&#x5FFD;&#x7565;&#x53C2;&#x6570;&#x3002;</p>

<pre class="brush: js">function toLocaleDateStringSupportsLocales() {
    try {
        new Date().toLocaleDateString(&quot;i&quot;);
    } catch (e) {
        return e&#x200B;.name === &quot;RangeError&quot;;
    }
    return false;
}
</pre>

<h3 name="Example:_Using_locales" id="Example:_Using_locales">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>locales</code></h3>

<p>&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#x672C;&#x5730;&#x5316;&#x65E5;&#x671F;&#x683C;&#x5F0F;&#x7684;&#x4E00;&#x4E9B;&#x53D8;&#x5316;&#x3002;&#x4E3A;&#x4E86;&#x5728;&#x5E94;&#x7528;&#x7684;&#x7528;&#x6237;&#x754C;&#x9762;&#x5F97;&#x5230;&#x67D0;&#x79CD;&#x8BED;&#x8A00;&#x7684;&#x65E5;&#x671F;&#x683C;&#x5F0F;&#xFF0C;&#x5FC5;&#x987B;&#x786E;&#x4FDD;&#x4F7F;&#x7528; <code>locales</code> &#x53C2;&#x6570;&#x6307;&#x5B9A;&#x4E86;&#x8BE5;&#x8BED;&#x8A00;&#xFF08;&#x53EF;&#x80FD;&#x8FD8;&#x9700;&#x8981;&#x8BBE;&#x7F6E;&#x67D0;&#x4E9B;&#x56DE;&#x9000;&#x8BED;&#x8A00;&#xFF09;&#x3002;</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
alert(date.toLocaleDateString(&quot;en-US&quot;));
// &#x2192; &quot;12/19/2012&quot;

// British English uses day-month-year order
alert(date.toLocaleDateString(&quot;en-GB&quot;));
// &#x2192; &quot;20/12/2012&quot;

// Korean uses year-month-day order
alert(date.toLocaleDateString(&quot;ko-KR&quot;));
// &#x2192; &quot;2012. 12. 20.&quot;

// Arabic in most Arabic speaking countries uses real Arabic digits
alert(date.toLocaleDateString(&quot;ar-EG&quot;));
// &#x2192; &quot;<span dir="rtl">&#x662;&#x660;&#x200F;/&#x661;&#x662;&#x200F;/&#x662;&#x660;&#x661;&#x662;</span>&quot;

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
alert(date.toLocaleDateString(&quot;ja-JP-u-ca-japanese&quot;));
// &#x2192; &quot;24/12/20&quot;

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
alert(date.toLocaleDateString([&quot;ban&quot;, &quot;id&quot;]));
// &#x2192; &quot;20/12/2012&quot;
</pre>

<h3 name="Example:_Using_options" id="Example:_Using_options">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>options</code></h3>

<p>&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>options </code>&#x53C2;&#x6570;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#xA0;<code>toLocaleDateString</code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
var options = {weekday: &quot;long&quot;, year: &quot;numeric&quot;, month: &quot;long&quot;, day: &quot;numeric&quot;};
alert(date.toLocaleDateString(&quot;de-DE&quot;, options));
// &#x2192; &quot;Donnerstag, 20. Dezember 2012&quot;

// an application may want to use UTC and make that visible
options.timeZone = &quot;UTC&quot;;
options.timeZoneName = &quot;short&quot;;
alert(date.toLocaleDateString(&quot;en-US&quot;, options));
// &#x2192; &quot;Thursday, December 20, 2012, GMT&quot;
</pre>

<h2 name="Performance" id="Performance">&#x6027;&#x80FD;</h2>

<p>&#x5F53;&#x683C;&#x5F0F;&#x5316;&#x5927;&#x91CF;&#x65E5;&#x671F;&#x65F6;&#xFF0C;&#x6700;&#x597D;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;<a title="/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x7136;&#x540E;&#x4F7F;&#x7528;&#x8BE5;&#x5BF9;&#x8C61;&#xA0;<a title="/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat/format" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format"><code>format</code></a> &#x5C5E;&#x6027;&#x63D0;&#x4F9B;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/sec-15.9.5.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.toLocaleDateString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.tolocaledatestring" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.toLocaleDateString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-13.3.2" class="external">ECMAScript Internationalization API Specification, 1<sup>st</sup> Edition</a></td>
   <td>Standard</td>
   <td>Defines <code>locales</code> and <code>options</code> arguments.</td>
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
   <td><a title="Released on 2014-04-29." href="/en-US/Firefox/Releases/29">29</a> (29)</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span>
    <p><a title="FIXED: Enable ECMAScript Internationalization API for b2gdroid" href="https://bugzilla.mozilla.org/show_bug.cgi?id=864843" class="external">bug&#xA0;864843</a></p>
   </td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="DateTimeFormat&#x5B9E;&#x4F8B;&#x96C6;&#x6210;&#x4EE5;&#x4E0B;&#x539F;&#x578B;&#x7684;&#x5C5E;&#x6027;:" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>DateTimeFormat</code></a></li>
 <li><a title="toLocaleString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.prototype.toLocaleString()</code></a></li>
 <li><a title="The toLocaleTimeString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
</ul>
                  
                
              