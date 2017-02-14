
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>toLocaleString()</strong></code>&#xA0;<span style="line-height: 1.5;">&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;</span><code style="font-style: normal; line-height: 1.5;">locales</code><span style="line-height: 1.5;">&#xA0;&#x548C;&#xA0;</span><code style="font-style: normal; line-height: 1.5;">options</code><span style="line-height: 1.5;">&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;</span><code style="font-style: normal; line-height: 1.5;">locales</code><span style="line-height: 1.5;">&#xA0;&#x548C;&#xA0;</span><code style="font-style: normal; line-height: 1.5;">options</code><span style="line-height: 1.5;">&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;</span></p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>dateObj.toLocaleString([locales [, options]])</var></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<p>&#x67E5;&#x770B;<a title="#Browser_Compatibility" href="#Browser_Compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</a>&#x5C0F;&#x8282;&#xFF0C;&#x770B;&#x4E0B;&#x54EA;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#xA0;<code style="font-style: normal;">locales</code>&#xA0;&#x548C;&#xA0;<code style="font-style: normal;">options</code>&#xA0;&#x53C2;&#x6570;&#xFF0C;&#x8FD8;&#x53EF;&#x4EE5;&#x53C2;&#x770B;<a href="#Example:_Checking_for_support_for_locales_and_options_arguments">&#x4F8B;&#x5B50;&#xFF1A;&#x68C0;&#x6D4B;&#xA0;<code>locales</code> &#x548C; <code>options</code> &#x53C2;&#x6570;&#x652F;&#x6301;&#x60C5;&#x51B5;</a>&#x3002;</p>

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

<p>&#x6BCF;&#x4E2A;&#x65E5;&#x671F;&#x65F6;&#x95F4;&#x7EC4;&#x4EF6;&#x7684;&#x9ED8;&#x8BA4;&#x503C;&#x90FD;&#x662F;undefined, &#x4F46;&#x662F;&#x5982;&#x679C;&#xA0;<code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>&#xA0;&#x5C5E;&#x6027;&#x90FD;&#x662F;&#xA0;<code>undefined</code>, &#x90A3;&#x4E48;&#xA0;<code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute<font face="Open Sans, Arial, sans-serif">&#xA0;&#x548C;&#xA0;</font></code><code>second</code>&#xA0;&#x7684;&#x503C;&#x90FD;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#xA0;&quot;numeric&quot;.</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_toLocaleString" id="Example:_Using_toLocaleString">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>toLocaleString</code></h3>

<p>&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#xFF08;locale&#xFF09;&#x65F6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x9ED8;&#x8BA4;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x683C;&#x5F0F;&#x8BBE;&#x7F6E;&#xFF08;options&#xFF09;&#x7684;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString &#x4E0D;&#x5305;&#x542B;&#x53C2;&#x6570;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x53D6;&#x51B3;&#x4E8E;&#x5B9E;&#x73B0;,
// &#x9ED8;&#x8BA4;&#x7684;&#x533A;&#x57DF;(locale),&#x548C;&#x9ED8;&#x8BA4;&#x7684;&#x65F6;&#x533A;(time zone)
date.toLocaleString();
// &#x2192; &#x5982;&#x679C;&#x662F;&#x5728;en-US&#x533A;&#x57DF;&#x548C;America/Los_Angeles&#x65F6;&#x533A;&#x8FD0;&#x884C;&#x8FD4;&#x56DE;&#x503C;&#x4E3A;&quot;12/11/2012, 7:00:00 PM&quot;</pre>

<h3 name="Example:_Checking_for_support_for_locales_and_options_arguments" id="Example:_Checking_for_support_for_locales_and_options_arguments">&#x4F8B;&#x5B50;&#xFF1A;&#x68C0;&#x6D4B;&#xA0;<code>locales</code> &#x548C;&#xA0;<code>options</code> &#x53C2;&#x6570;&#x652F;&#x6301;&#x60C5;&#x51B5;</h3>

<p><code style="font-style: normal;">locales</code>&#xA0;&#x548C;&#xA0;<code style="font-style: normal;">options</code>&#xA0;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x652F;&#x6301;&#x3002;&#x4E3A;&#x4E86;&#x68C0;&#x6D4B;&#x4E00;&#x79CD;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#xFF08;implementation&#xFF09;&#x662F;&#x5426;&#x652F;&#x6301;&#x5B83;&#x4EEC;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x8BED;&#x8A00;&#x6807;&#x7B7E;&#xFF0C;&#x5982;&#x679C;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x652F;&#x6301;&#x8BE5;&#x53C2;&#x6570;&#xFF0C;&#x5219;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A;&#xA0;<code style="font-style: normal;">RangeError</code>&#xA0;&#x5F02;&#x5E38;&#xFF0C;&#x53CD;&#x4E4B;&#x4F1A;&#x5FFD;&#x7565;&#x53C2;&#x6570;&#x3002;</p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
    try {
        new Date().toLocaleString(&quot;i&quot;);
    } catch (e) {
        return e&#x200B;.name === &quot;RangeError&quot;;
    }
    return false;
}
</pre>

<h3 name="Example:_Using_locales" id="Example:_Using_locales">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>locales</code> &#x53C2;&#x6570;</h3>

<p>&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#x672C;&#x5730;&#x5316;&#x65E5;&#x671F;&#x683C;&#x5F0F;&#x7684;&#x4E00;&#x4E9B;&#x53D8;&#x5316;&#x3002;&#x4E3A;&#x4E86;&#x5728;&#x5E94;&#x7528;&#x7684;&#x7528;&#x6237;&#x754C;&#x9762;&#x5F97;&#x5230;&#x67D0;&#x79CD;&#x8BED;&#x8A00;&#x7684;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x683C;&#x5F0F;&#xFF0C;&#x5FC5;&#x987B;&#x786E;&#x4FDD;&#x4F7F;&#x7528;&#xA0;<code style="font-style: normal;">locales</code>&#xA0;&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x4E86;&#x8BE5;&#x8BED;&#x8A00;&#xFF08;&#x53EF;&#x80FD;&#x8FD8;&#x9700;&#x8981;&#x8BBE;&#x7F6E;&#x67D0;&#x4E9B;&#x56DE;&#x9000;&#x8BED;&#x8A00;&#xFF09;&#x3002;</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//&#x5047;&#x5B9A;&#x672C;&#x5730;&#x65F6;&#x533A;&#x662F; America/Los_Angeles(&#x7F8E;&#x56FD;&#x65F6;&#x533A;)
//en-US(&#x7F8E;&#x5229;&#x575A;&#x82F1;&#x8BED;)&#x4F7F;&#x7528; month-day-year &#x7684;&#x987A;&#x5E8F;&#x5C55;&#x793A;&#x5E74;&#x6708;&#x65E5;
alert(date.toLocaleString(&quot;en-US&quot;));
// &#x2192; &quot;12/19/2012, 7:00:00 PM&quot;

// en-GB(&#x4E0D;&#x5217;&#x98A0;&#x82F1;&#x8BED;)&#x4F7F;&#x7528; day-month-year &#x987A;&#x5E8F;&#x5C55;&#x793A;&#x5E74;&#x6708;&#x65E5;
alert(date.toLocaleString(&quot;en-GB&quot;));
// &#x2192; &quot;20/12/2012 03:00:00&quot;

// &#x97E9;&#x8BED;&#x4F7F;&#x7528; year-month-day &#x987A;&#x5E8F;&#x5C55;&#x793A;&#x5E74;&#x6708;&#x65E5;
alert(date.toLocaleString(&quot;ko-KR&quot;));
// &#x2192; &quot;2012. 12. 20. &#xC624;&#xD6C4; 12:00:00&quot;

// &#x5927;&#x591A;&#x6570;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x56FD;&#x5BB6;&#x7684;&#x963F;&#x62C9;&#x4F2F;&#x8BED;&#x4F7F;&#x7528;&#x963F;&#x62C9;&#x4F2F;&#x6570;&#x5B57;
alert(date.toLocaleString(&quot;ar-EG&quot;));
// &#x2192; &quot;<span dir="rtl">&#x662;&#x660;&#x200F;/&#x661;&#x662;&#x200F;/&#x662;&#x660;&#x661;&#x662; &#x665;:&#x660;&#x660;:&#x660;&#x660; &#x635;</span>&quot;

//&#x5728;&#x65E5;&#x672C;&#xFF0C;&#x5E94;&#x7528;&#x53EF;&#x80FD;&#x60F3;&#x8981;&#x4F7F;&#x7528;&#x65E5;&#x672C;&#x65E5;&#x5386;,
//2012 &#x662F;&#x5E73;&#x6210;24&#x5E74;&#xFF08;&#x5E73;&#x6210;&#x662F;&#x662F;&#x65E5;&#x672C;&#x5929;&#x7687;&#x660E;&#x4EC1;&#x7684;&#x5E74;&#x53F7;,&#x7531;1989&#x5E74;1&#x6708;8&#x65E5;&#x8D77;&#x5F00;&#x59CB;&#x8BA1;&#x7B97;&#x76F4;&#x81F3;&#x73B0;&#x5728;&#xFF09;
alert(date.toLocaleString(&quot;ja-JP-u-ca-japanese&quot;));
// &#x2192; &quot;24/12/20 12:00:00&quot;

//&#x5F53;&#x8BF7;&#x6C42;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x53EF;&#x80FD;&#x4E0D;&#x652F;&#x6301;&#xFF0C;&#x5982;&#x5DF4;&#x5398;(ban)&#xFF0C;&#x82E5;&#x6709;&#x5907;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x5370;&#x5C3C;&#x8BED;(id)&#xFF0C;
//&#x90A3;&#x4E48;&#x5C06;&#x4F7F;&#x7528;&#x5370;&#x5C3C;&#x8BED;(id)
alert(date.toLocaleString([&quot;ban&quot;, &quot;id&quot;]));
// &#x2192; &quot;20/12/2012 11.00.00&quot;
</pre>

<h3 name="Example:_Using_options" id="Example:_Using_options">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>options</code> &#x53C2;&#x6570;</h3>

<p>&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<code style="font-style: normal;">options&#xA0;</code>&#x53C2;&#x6570;&#x6765;&#x81EA;&#x5B9A;&#x4E49;&#xA0;<code style="font-style: normal;">toLocaleString</code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//&#x8BF7;&#x6C42;&#x53C2;&#x6570;(options)&#x4E2D;&#x5305;&#x542B;&#x53C2;&#x6570;&#x661F;&#x671F;(weekday)&#xFF0C;&#x5E76;&#x4E14;&#x8BE5;&#x53C2;&#x6570;&#x7684;&#x503C;&#x4E3A;&#x957F;&#x7C7B;&#x578B;(long)
var options = {weekday: &quot;long&quot;, year: &quot;numeric&quot;, month: &quot;long&quot;, day: &quot;numeric&quot;};
alert(date.toLocaleString(&quot;de-DE&quot;, options));
// &#x2192; &quot;Donnerstag, 20. Dezember 2012&quot;

//&#x4E00;&#x4E2A;&#x5E94;&#x7528;&#x4F7F;&#x7528; &#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;(UTC),&#x5E76;&#x4E14;UTC&#x4F7F;&#x7528;&#x77ED;&#x540D;&#x5B57;(short)&#x5C55;&#x793A;
options.timeZone = &quot;UTC&quot;;
options.timeZoneName = &quot;short&quot;;//&#x82E5;&#x4E0D;&#x5199;&#x8FD9;&#x4E00;&#x884C;&#x90A3;&#x4E48;&#x4ECD;&#x7136;&#x663E;&#x793A;&#x7684;&#x662F;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF1B;&#x4F46;&#x662F;GMT&#x4E09;&#x4E2A;&#x5B57;&#x6BCD;&#x4E0D;&#x4F1A;&#x663E;&#x793A;
alert(date.toLocaleString(&quot;en-US&quot;, options));
// &#x2192; &quot;Thursday, December 20, 2012, GMT&quot;

// &#x4F7F;&#x7528;24&#x5C0F;&#x65F6;&#x5236;
alert(date.toLocaleString(&quot;en-US&quot;, {hour12: false}));
// &#x2192; &quot;12/19/2012, 19:00:00&quot;
</pre>

<h2 name="Performance" id="Performance">&#x6027;&#x80FD;</h2>

<p>&#x5F53;&#x683C;&#x5F0F;&#x5316;&#x5927;&#x91CF;&#x65E5;&#x671F;&#x65F6;&#xFF0C;&#x6700;&#x597D;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;<a title="/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a>&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x7136;&#x540E;&#x4F7F;&#x7528;&#x8BE5;&#x5BF9;&#x8C61;&#xA0;<a title="/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat/format" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format"><code>format</code></a>&#xA0;&#x5C5E;&#x6027;&#x63D0;&#x4F9B;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/sec-15.9.5.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.tolocalestring" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.toLocaleString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-13.3.1" class="external">ECMAScript Internationalization API Specification, 1<sup>st</sup> Edition</a></td>
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
 <li><a title="toLocaleDateString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options &#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales &#x548C; options &#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
 <li><a title="The toLocaleTimeString()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales&#xA0;&#x548C;&#xA0;options&#xA0;&#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
</ul>
                  
                
              