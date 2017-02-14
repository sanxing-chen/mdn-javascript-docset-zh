
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>setUTCMinutes()</code></strong> method sets the minutes for a specified date according to universal time.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setUTCMinutes(<var>minutesValue</var>[, <var>secondsValue</var>[, <var>msValue</var>]])</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>minutesValue</code></dt>
 <dd>An integer between 0 and 59, representing the minutes.</dd>
 <dt><code>secondsValue</code></dt>
 <dd>Optional. An integer between 0 and 59, representing the seconds. If you specify the <code>secondsValue</code> parameter, you must also specify the <code>minutesValue</code>.</dd>
 <dt><code>msValue</code></dt>
 <dd>Optional. A number between 0 and 999, representing the milliseconds. If you specify the <code>msValue</code> parameter, you must also specify the <code>minutesValue</code> and <code>secondsValue</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.</p>

<h2 id="Description">Description</h2>

<p>If you do not specify the <code>secondsValue</code> and <code>msValue</code> parameters, the values returned from <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds" title="The getUTCSeconds() method returns the seconds in the specified date according to universal time."><code>getUTCSeconds()</code></a> and <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds" title="The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time."><code>getUTCMilliseconds()</code></a> methods are used.</p>

<p>If a parameter you specify is outside of the expected range, <code>setUTCMinutes()</code> attempts to update the date information in the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" title="Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC."><code>Date</code></a> object accordingly. For example, if you use 100 for <code>secondsValue</code>, the minutes will be incremented by 1 (<code>minutesValue + 1</code>), and 40 will be used for seconds.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_setUTCMinutes()">Using <code>setUTCMinutes()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
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
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" hreflang="en" title="The &apos;ECMAScript 1st Edition (ECMA-262)&apos; specification">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.3.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.33" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="en-US">The definition of &apos;Date.prototype.setUTCMinutes&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcminutes" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Date.prototype.setUTCMinutes&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-date.prototype.setutcminutes" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Date.prototype.setUTCMinutes&apos; in that specification.</small></a></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes" title="The getUTCMinutes() method returns the minutes in the specified date according to universal time."><code>Date.prototype.getUTCMinutes()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes" title="The setMinutes() method sets the minutes for a specified date according to local time."><code>Date.prototype.setMinutes()</code></a></li>
</ul>
                
              