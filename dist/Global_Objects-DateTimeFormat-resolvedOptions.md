
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Intl.DateTimeFormat.prototype.resolvedOptions()</code></strong> method returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat" title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting."><code>DateTimeFormat</code></a> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateTimeFormat</var>.resolvedOptions()</code></pre>

<h3 id="Return_value">Return value</h3>

<p>A new object with properties reflecting the locale and date and time formatting options computed during the initialization of the given <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat" title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting."><code>DateTimeFormat</code></a> object.</p>

<h2 id="Description">Description</h2>

<p>The resulting object has the following properties:</p>

<dl>
 <dt><code>locale</code></dt>
 <dd>The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in <code>locale</code>.</dd>
 <dt><code>calendar</code></dt>
 <dt><code>numberingSystem</code></dt>
 <dd>The values requested using the Unicode extension keys <code>&quot;ca&quot;</code> and <code>&quot;nu&quot;</code> or filled in as default values.</dd>
 <dt><code>timeZone</code></dt>
 <dd>The value provided for this property in the <code>options</code> argument; <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="The global undefined property represents the primitive value undefined. It is one of JavaScript&apos;s primitive types."><code>undefined</code></a> (representing the runtime&apos;s default time zone) if none was provided. Warning: Applications should not rely on <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="The global undefined property represents the primitive value undefined. It is one of JavaScript&apos;s primitive types."><code>undefined</code></a> being returned, as future versions may return a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" title="The String global object is a constructor for strings, or a sequence of characters."><code>String</code></a> value identifying the runtime&#x2019;s default time zone instead.</dd>
 <dt><code>hour12</code></dt>
 <dd>The value provided for this property in the <code>options</code> argument or filled in as a default.</dd>
 <dt><code>weekday</code></dt>
 <dt><code>era</code></dt>
 <dt><code>year</code></dt>
 <dt><code>month</code></dt>
 <dt><code>day</code></dt>
 <dt><code>hour</code></dt>
 <dt><code>minute</code></dt>
 <dt><code>second</code></dt>
 <dt><code>timeZoneName</code></dt>
 <dd>The values resulting from format matching between the corresponding properties in the <code>options</code> argument and the available combinations and representations for date-time formatting in the selected locale. Some of these properties may not be present, indicating that the corresponding components will not be represented in formatted output.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_resolvedOptions_method">Using the <code>resolvedOptions</code> method</h3>

<pre class="brush: js">var germanFakeRegion = new Intl.DateTimeFormat(&apos;de-XX&apos;, { timeZone: &apos;UTC&apos; });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale;         // &quot;de&quot;
usedOptions.calendar;       // &quot;gregory&quot;
usedOption.numberingSystem; // &quot;latn&quot;
usedOptions.timeZone;       // &quot;UTC&quot;
usedOptions.month;          // &quot;numeric&quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-12.3.3" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/2.0/#sec-Intl.DateTimeFormat.prototype.resolvedOptions" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecma402/#sec-Intl.DateTimeFormat.prototype.resolvedOptions" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</td>
   <td>11</td>
   <td>15</td>
   <td>10</td>
  </tr>
  <tr>
   <td>computed <code>timeZone</code></td>
   <td>35</td>
   <td>14</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>30</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>26</td>
   <td>54.0 (54)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat" title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting."><code>Intl.DateTimeFormat</code></a></li>
</ul>
                
              