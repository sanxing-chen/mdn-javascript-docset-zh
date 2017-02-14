
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Intl.NumberFormat.prototype.resolvedOptions()</code></strong> method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>NumberFormat</code></a> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>numberFormat</var>.resolvedOptions()</code></pre>

<h3 id="Return_value">Return value</h3>

<p>A new object with properties reflecting the locale and number formatting options computed during the initialization of the given <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>NumberFormat</code></a> object.</p>

<h2 id="Description">Description</h2>

<p>The resulting object has the following properties:</p>

<dl>
 <dt><code>locale</code></dt>
 <dd>The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in <code>locale</code>.</dd>
 <dt><code>numberingSystem</code></dt>
 <dd>The value requested using the Unicode extension key <code>&quot;nu&quot;</code> or filled in as a default.</dd>
 <dt><code>style</code></dt>
 <dt><code>useGrouping</code></dt>
 <dd>The values provided for these properties in the <code>options</code> argument or filled in as defaults.</dd>
 <dt><code>currency</code></dt>
 <dt><code>currencyDisplay</code></dt>
 <dd>The values provided for these properties in the <code>options</code> argument or filled in as defaults. These properties are only present if <code>style</code> is <code>&quot;currency&quot;</code>.</dd>
</dl>

<p>Only one of the following two groups of properties is included:</p>

<dl>
 <dt><code>minimumIntegerDigits</code></dt>
 <dt><code>minimumFractionDigits</code></dt>
 <dt><code>maximumFractionDigits</code></dt>
 <dd>The values provided for these properties in the <code>options</code> argument or filled in as defaults. These properties are present only if neither <code>minimumSignificantDigits</code> nor <code>maximumSignificantDigits</code> was provided in the <code>options</code> argument.</dd>
 <dt><code>minimumSignificantDigits</code></dt>
 <dt><code>maximumSignificantDigits</code></dt>
 <dd>The values provided for these properties in the <code>options</code> argument or filled in as defaults. These properties are present only if at least one of them was provided in the <code>options</code> argument.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_resolvedOptions_method">Using the <code>resolvedOptions</code> method</h3>

<pre class="brush: js">var de = new Intl.NumberFormat(&apos;de-DE&apos;);
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // &quot;de-DE&quot;
usedOptions.numberingSystem;       // &quot;latn&quot;
usedOption.style;                  // &quot;decimal&quot;
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true
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
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-11.3.3" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/2.0/#sec-11.3.3" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecma402/#sec-Intl.NumberFormat.prototype.resolvedOptions" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.resolvedOptions&apos; in that specification.</small></a></td>
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
   <td>4.4</td>
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
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>Intl.NumberFormat</code></a></li>
</ul>
                
              