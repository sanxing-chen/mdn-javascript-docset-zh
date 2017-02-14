
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="notice experimental">
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p>
</div></div>

<p>The <strong><code>Intl.DateTimeFormat.prototype.formatToParts()</code></strong> method allows locale-aware formatting of strings produced by <code>DateTimeFormat</code> formatters.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Intl.DateTimeFormat.prototype.formatToParts(date)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>date</code> <span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>The date to format.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An <a title="The JavaScript Array&#xA0;object is a global object that&#xA0;is used in the&#xA0;construction&#xA0;of&#xA0;arrays; which are high-level, list-like objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> of objects containing the formatted date in parts.</p>

<h2 id="Description">Description</h2>

<p>The <code>formatToParts()</code> method is useful for custom formatting of date strings. It returns an <a title="The JavaScript Array&#xA0;object is a global object that&#xA0;is used in the&#xA0;construction&#xA0;of&#xA0;arrays; which are high-level, list-like objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> of objects containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts. The structure the <code>formatToParts()</code> method returns, looks like this:</p>

<pre class="brush: js">[
  { type: &apos;day&apos;, value: &apos;17&apos; },
  { type: &apos;weekday&apos;, value &apos;Monday&apos; }
]</pre>

<p>Possible types are the following:</p>

<dl>
 <dt>day</dt>
 <dd>The string used for the day, for example &quot;17&quot;.</dd>
 <dt>dayPeriod</dt>
 <dd>The string used for the day period, for example, &quot;AM&quot; or &quot;PM&quot;.</dd>
 <dt>era</dt>
 <dd>The string used for the era, for example &quot;BC&quot; or &quot;AD&quot;.</dd>
 <dt>hour</dt>
 <dd>The string used for the hour, for example &quot;3&quot; or &quot;03&quot;.</dd>
 <dt>literal</dt>
 <dd>The string used for separating date and time values, for example&#xA0;&quot;/&quot;, <code>&quot;,&quot;</code>, <code>&quot;o&apos;clock&quot;</code>, <code>&quot;de&quot;</code>, etc.</dd>
 <dt>minute</dt>
 <dd>The string used for the minute, for example &quot;00&quot;.</dd>
 <dt>month</dt>
 <dd>The string used for the month, for example &quot;12&quot;.</dd>
 <dt>second</dt>
 <dd>The string used for the second, for example &quot;07&quot; or &quot;42&quot;.</dd>
 <dt>timeZoneName</dt>
 <dd>The string used for the name of the time zone, for example &quot;UTC&quot;.</dd>
 <dt>weekday</dt>
 <dd>The string used for the weekday, for example &quot;M&quot;, &quot;Monday&quot;, or &quot;Montag&quot;.</dd>
 <dt>year</dt>
 <dd>The string used for the year, for example &quot;2012&quot; or &quot;96&quot;.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p><code>DateTimeFormat</code> outputs localized, opaque strings that cannot be manipulated directly:</p>

<pre class="brush: js">var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat(&apos;en-us&apos;, {
  weekday: &apos;long&apos;,
  year: &apos;numeric&apos;,
  month: &apos;numeric&apos;,
  day: &apos;numeric&apos;,
  hour: &apos;numeric&apos;,
  minute: &apos;numeric&apos;,
  second: &apos;numeric&apos;,
  hour12: true,
  timeZone: &apos;UTC&apos;
});

formatter.format(date);
// &quot;Monday, 12/17/2012, 3:00:42 AM&quot;
</pre>

<p>However, in many User Interfaces there is a desire to customize the formatting of this string. The <code>formatToParts</code> method enables locale-aware formatting of strings produced by <code>DateTimeFormat</code> formatters by providing you the string in parts:</p>

<pre class="brush: js">formatter.formatToParts(date);

// return value: 
[ 
  { type: &apos;weekday&apos;,   value: &apos;Monday&apos; }, 
  { type: &apos;literal&apos;,   value: &apos;, &apos;     }, 
  { type: &apos;month&apos;,     value: &apos;12&apos;     }, 
  { type: &apos;literal&apos;,   value: &apos;/&apos;      }, 
  { type: &apos;day&apos;,       value: &apos;17&apos;     }, 
  { type: &apos;literal&apos;,   value: &apos;/&apos;      }, 
  { type: &apos;year&apos;,      value: &apos;2012&apos;   }, 
  { type: &apos;literal&apos;,   value: &apos;, &apos;     }, 
  { type: &apos;hour&apos;,      value: &apos;3&apos;      }, 
  { type: &apos;literal&apos;,   value: &apos;:&apos;      }, 
  { type: &apos;minute&apos;,    value: &apos;00&apos;     }, 
  { type: &apos;literal&apos;,   value: &apos;:&apos;      }, 
  { type: &apos;second&apos;,    value: &apos;42&apos;     }, 
  { type: &apos;literal&apos;,   value: &apos; &apos;      }, 
  { type: &apos;dayPeriod&apos;, value: &apos;AM&apos;     } 
]
</pre>

<p>Now the information is available separately and it can be formatted and concatenated again in a customized way. For example by using <a title="The map() method creates a new array with the results of calling a provided function on every element in this array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a>, a <a href="/en-US/docs/Web/JavaScript/Reference/Statements/switch">switch statement</a>, <a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a>, and <a title="The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"><code>Array.prototype.reduce()</code></a>.</p>

<pre class="brush: js">var dateString = formatter.formatToParts(date).map(({type, value}) =&gt; { 
  switch (type) {
    case &apos;dayPeriod&apos;: return `&lt;strong&gt;${value}&lt;/strong&gt;`; 
    default : return value; 
  } 
}).reduce((string, part) =&gt; string + part);
</pre>

<p>This will make the day period bold, when using the <code>formatToParts()</code> method.</p>

<pre class="brush: js">console.log(formatter.format(date));
// &quot;Monday, 12/17/2012, 3:00:42 AM&quot;

console.log(dateString);
// &quot;Monday, 12/17/2012, 3:00:42 &lt;strong&gt;AM&lt;/strong&gt;&quot;</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>A polyfill for this feature is available in the <a href="https://github.com/zbraniecki/proposal-intl-formatToParts" class="external">proposal repository</a>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://tc39.github.io/ecma402/#sec-Intl.DateTimeFormat.prototype.formatToParts" class="external">ECMAScript Internationalization API 4.0 (ECMA-402)<br><small lang="en-US">The definition of &apos;Intl.DateTimeFormat.prototype.formatToParts&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Initial definition</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[1]</sup></td>
   <td><a title="Released on 2017-01-24." href="/en-US/Firefox/Releases/51">51.0</a> (51.0)<sup>[2]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>54.0 (54.0)<sup>[3]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] This method is implemented since Chrome 55 behind the <code>--datetime-format-to-part</code>s command line parameter (see <a href="https://bugs.chromium.org/p/v8/issues/detail?id=5244" class="external">V8 issue 5244</a>).</p>

<p>[2] This method was implemented in Gecko 51 (Firefox 51.0 / Thunderbird 51.0 / SeaMonkey 2.48) (see <a title="FIXED: Expose Intl.DateTimeFormat.prototype.formatToParts" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1289340" class="external">bug&#xA0;1289340</a>).</p>

<p>[3] This method was initially only exposed to B2G system apps starting from Gecko 46 (Firefox 46.0 / Thunderbird 46.0 / SeaMonkey 2.43) (see <a title="FIXED: Implement ECMA 402 DateTimeFormat formatToParts behind a compartment option (enabled only for b2g certified apps)" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1216150" class="external">bug&#xA0;1216150</a>).</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"><code>Intl.DateTimeFormat</code></a></li>
 <li><a title="The Intl.DateTimeFormat.prototype.format property returns a getter function that formats a date according to the locale and formatting options of this Intl.DateTimeFormat object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format"><code>Intl.DateTimeFormat.prototype.format</code></a></li>
 <li><a title="The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.prototype.toLocaleString()</code></a></li>
 <li><a title="The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
 <li><a title="The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"><code>Date.prototype.toLocaleTimeString()</code></a></li>
</ul>
                
              