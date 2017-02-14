
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Intl.NumberFormat.supportedLocalesOf()</code></strong> method returns an array containing those of the provided locales that are supported in number formatting without having to fall back to the runtime&apos;s default locale.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code>Intl.NumberFormat.supportedLocalesOf(<var>locales</var>[, <var>options</var>])</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>locales</code></dt>
 <dd>A string with a BCP 47 language tag, or an array of such strings. For the general form of the <code>locales</code> argument, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>.</dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Optional. An object that may have the following property:</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>The locale matching algorithm to use. Possible values are <code>&quot;lookup&quot;</code> and <code>&quot;best fit&quot;</code>; the default is <code>&quot;best fit&quot;</code>. For information about this option, see the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation" title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.">Intl page</a>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array of strings representing a subset of the given locale tags that are supported in number formatting without having to fall back to the runtime&apos;s default locale.</p>

<h2 id="Description">Description</h2>

<p>Returns an array with a subset of the language tags provided in <code>locales</code>. The language tags returned are those for which the runtime supports a locale in number formatting that the locale matching algorithm used considers a match, so that it wouldn&apos;t have to fall back to the default locale.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_supportedLocalesOf">Using <code>supportedLocalesOf</code></h3>

<p>Assuming a runtime that supports Indonesian and German but not Balinese in number formatting, <code>supportedLocalesOf</code> returns the Indonesian and German language tags unchanged, even though <code>pinyin</code> collation is neither relevant to number formatting nor used with Indonesian, and a specialized German for Indonesia is unlikely to be supported. Note the specification of the <code>&quot;lookup&quot;</code> algorithm here&#xA0;&#x2014; a <code>&quot;best fit&quot;</code> matcher might decide that Indonesian is an adequate match for Balinese since most Balinese speakers also understand Indonesian, and therefore return the Balinese language tag as well.</p>

<pre class="brush: js">var locales = [&apos;ban&apos;, &apos;id-u-co-pinyin&apos;, &apos;de-ID&apos;];
var options = { localeMatcher: &apos;lookup&apos; };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options).join(&apos;, &apos;));
// &#x2192; &quot;id-u-co-pinyin, de-ID&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-11.2.2" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.supportedLocalesOf&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/2.0/#sec-11.2.2" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.supportedLocalesOf&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecma402/#sec-Intl.NumberFormat.supportedLocalesOf" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.supportedLocalesOf&apos; in that specification.</small></a></td>
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
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>24</td>
   <td><a href="/en-US/Firefox/Releases/29" title="Released on 2014-04-29.">29</a> (29)</td>
   <td>11</td>
   <td>15</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>Intl.NumberFormat</code></a></li>
</ul>
                
              