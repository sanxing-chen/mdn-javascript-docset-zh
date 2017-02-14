<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

## Summary

The `**setYear()**` method sets the year for a specified date according to local time. Because `setYear` does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the [`setFullYear`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。") method.

## Syntax

<pre class="syntaxbox"><var>dateObj</var>.setYear(_yearValue_)</pre>

### Parameters

<dl>

<dt>`yearValue`</dt>

<dd>An integer.</dd>

</dl>

### Returns

If `yearValue` is a number between 0 and 99 (inclusive), then the year for `dateObj` is set to 1900 + `yearValue`. Otherwise, the year for `dateObj` is set to `yearValue`.

## Examples

### Example: Using `setYear`

The first two lines set the year to 1996\. The third sets the year to 2000.

<pre>var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
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

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.getYear</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (informative) compatibility annex.</td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Date.prototype.getYear</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.setyear)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td>Defined in the (normative) annex for additional features for web browsers.</td>

</tr>

</tbody>

</table>

## Browser compatibility

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`Date.prototype.getFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "根据本地时间，返回一个指定日期对象的年份。")
*   [`Date.prototype.getUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。")
*   [`Date.prototype.setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。")
*   [`Date.prototype.setUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear "此页面仍未被本地化, 期待您的翻译!")