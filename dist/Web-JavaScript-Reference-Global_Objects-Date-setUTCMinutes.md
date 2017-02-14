The **`setUTCMinutes()`** method sets the minutes for a specified date according to universal time.

## Syntax

    dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])

### Parameters

<dl>

<dt>`minutesValue`</dt>

<dd>An integer between 0 and 59, representing the minutes.</dd>

<dt>`secondsValue`</dt>

<dd>Optional. An integer between 0 and 59, representing the seconds. If you specify the `secondsValue` parameter, you must also specify the `minutesValue`.</dd>

<dt>`msValue`</dt>

<dd>Optional. A number between 0 and 999, representing the milliseconds. If you specify the `msValue` parameter, you must also specify the `minutesValue` and `secondsValue`.</dd>

</dl>

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `secondsValue` and `msValue` parameters, the values returned from [`getUTCSeconds()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds "The getUTCSeconds() method returns the seconds in the specified date according to universal time.") and [`getUTCMilliseconds()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds "The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time.") methods are used.

If a parameter you specify is outside of the expected range, `setUTCMinutes()` attempts to update the date information in the [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.") object accordingly. For example, if you use 100 for `secondsValue`, the minutes will be incremented by 1 (`minutesValue + 1`), and 40 will be used for seconds.

## Examples

### Using `setUTCMinutes()`

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
</pre>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "The 'ECMAScript 1st Edition (ECMA-262)' specification")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.3.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="en-US">The definition of 'Date.prototype.setUTCMinutes' in that specification.</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.33)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="en-US">The definition of 'Date.prototype.setUTCMinutes' in that specification.</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcminutes)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="en-US">The definition of 'Date.prototype.setUTCMinutes' in that specification.</small>](https://tc39.github.io/ecma262/#sec-date.prototype.setutcminutes)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

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

## See also

*   [`Date.prototype.getUTCMinutes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes "The getUTCMinutes() method returns the minutes in the specified date according to universal time.")
*   [`Date.prototype.setMinutes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes "The setMinutes() method sets the minutes for a specified date according to local time.")