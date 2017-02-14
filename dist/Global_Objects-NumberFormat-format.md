
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Intl.NumberFormat.prototype.format</code></strong> property returns a getter function that formats a number according to the locale and formatting options of this <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>NumberFormat</code></a> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>numberFormat</var>.format(<var>number</var>)</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>number</code></dt>
 <dd>The number to format.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The function returned by the <code>format</code> getter formats a number into a string according to the locale and formatting options of this <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>NumberFormat</code></a> object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_format">Using <code>format</code></h3>

<p>Use the function returned by the <code>format</code> getter for formatting a single currency value, here for Russia:</p>

<pre class="brush: js">var options = { style: &apos;currency&apos;, currency: &apos;RUB&apos; };
var numberFormat = new Intl.NumberFormat(&apos;ru-RU&apos;, options);
console.log(numberFormat.format(654321.987));
// &#x2192; &quot;654&#xA0;321,99&#xA0;&#x440;&#x443;&#x431;.&quot;
</pre>

<h3 id="Using_format_with_map">Using <code>format</code> with <code>map</code></h3>

<p>Use the function returned by the <code>format</code> getter for formatting all numbers in an array. Note that the function is bound to the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>NumberFormat</code></a> from which it was obtained, so it can be passed directly to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" title="The map() method creates a new array with the results of calling a provided function on every element in this array."><code>Array.prototype.map</code></a>.</p>

<pre class="brush: js">var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat(&apos;es-ES&apos;);
var formatted = a.map(numberFormat.format);
console.log(formatted.join(&apos;; &apos;));
// &#x2192; &quot;123.456,789; 987.654,321; 456.789,123&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-402/1.0/#sec-11.3.2" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.format&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-402/2.0/#sec-11.3.2" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.format&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecma402/#sec-Intl.NumberFormat.prototype.format" class="external" lang="en" hreflang="en">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.NumberFormat.prototype.format&apos; in that specification.</small></a></td>
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
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" title="The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting."><code>Intl.NumberFormat</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" title="The toLocaleString() method returns a string with a language sensitive representation of this number."><code>Number.prototype.toLocaleString()</code></a></li>
</ul>
                
              