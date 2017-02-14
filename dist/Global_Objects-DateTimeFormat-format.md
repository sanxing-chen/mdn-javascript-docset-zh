
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>Intl.DateTimeFormat.prototype.format</code></strong> property returns a getter function that formats a date according to the locale and formatting options of this <a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateTimeFormat</var>.format(<var>date</var>)</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>date</code></dt>
 <dd>The date to format.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The function returned by the <code>format</code> getter formats a date into a string according to the locale and formatting options of this <a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a> object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_format">Using <code>format</code></h3>

<p>Use the function returned by the <code>format</code> getter for formatting a single date, here for Serbia:</p>

<pre class="brush: js">var options = { weekday: &apos;long&apos;, year: &apos;numeric&apos;, month: &apos;long&apos;, day: &apos;numeric&apos; };
var dateTimeFormat = new Intl.DateTimeFormat(&apos;sr-RS&apos;, options);
console.log(dateTimeFormat.format(new Date()));
// &#x2192; &quot;&#x43D;&#x435;&#x434;&#x435;&#x459;&#x430;, 7. &#x430;&#x43F;&#x440;&#x438;&#x43B; 2013.&quot;
</pre>

<h3 id="Using_format_with_map">Using <code>format</code> with <code>map</code></h3>

<p>Use the function returned by the <code>format</code> getter for formatting all dates in an array. Note that the function is bound to the <a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a> from which it was obtained, so it can be passed directly to <a title="The map() method creates a new array with the results of calling a provided function on every element in this array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a>.</p>

<pre class="brush: js">var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = { year: &apos;numeric&apos;, month: &apos;long&apos; };
var dateTimeFormat = new Intl.DateTimeFormat(&apos;pt-BR&apos;, options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join(&apos;; &apos;));
// &#x2192; &quot;setembro de 2012; dezembro de 2012; abril de 2012&quot;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/1.0/#sec-12.3.2" class="external">ECMAScript Internationalization API 1.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.format&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-402/2.0/#sec-12.3.2" class="external">ECMAScript Internationalization API 2.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.format&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://tc39.github.io/ecma402/#sec-Intl.DateTimeFormat.prototype.format" class="external">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.format&apos; in that specification.</small></a></td>
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
   <th>Safari</th>
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
 <li><a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a></li>
 <li><a title="The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.prototype.toLocaleString()</code></a></li>
 <li><a title="The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
 <li><a title="The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
</ul>
                
              