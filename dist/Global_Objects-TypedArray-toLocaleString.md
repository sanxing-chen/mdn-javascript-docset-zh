
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>toLocaleString()</strong></code> method returns a string representing the elements of the typed array. The elements are converted to strings and are separated by a locale-specific string (such as a comma &#x201C;,&#x201D;). This method has the same algorithm as <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma &#x201C;,&#x201D;)."><code>Array.prototype.toLocaleString()</code></a> and, as the typed array elements are numbers, the same algorithm as&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" title="The toLocaleString() method returns a string with a language sensitive representation of this number."><code>Number.prototype.toLocaleString()</code></a> applies for each element. <em>TypedArray</em> is one of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array types</a> here.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>typedarr</var>ay.toLocaleString([locales [, options]]);</pre>

<h3 id="Parameters">Parameters</h3>

<div><dl><dt><code>locales</code></dt>
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
</dl></div>

<h3 id="Return_value">Return value</h3>

<p>A string representing the elements of the typed array.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toLocaleString">Using <code>toLocaleString</code></h3>

<pre class="brush: js">var uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString(); 
// if run in a de-DE locale
// &quot;2.000,500,8.123,12,4.212&quot;

uint.toLocaleString(&apos;en-US&apos;);
// &quot;2,000,500,8,123,12,4,212&quot;

uint.toLocaleString(&apos;ja-JP&apos;, { style: &apos;currency&apos;, currency: &apos;JPY&apos; });
// &quot;&#xFFE5;2,000,&#xFFE5;500,&#xFFE5;8,123,&#xFFE5;12,&#xFFE5;4,212&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.tolocalestring" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.toLocaleString&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.toLocaleString&apos; in that specification.</small></a></td>
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
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/51" title="Released on 2017-01-24.">51</a> (51)</td>
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
   <td>51.0 (51)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title="The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma &#x201C;,&#x201D;)."><code>Array.prototype.toLocaleString()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" title="The toLocaleString() method returns a string with a language sensitive representation of this number."><code>Number.prototype.toLocaleString()</code></a></li>
</ul>
                
              