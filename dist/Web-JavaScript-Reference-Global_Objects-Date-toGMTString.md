<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

## Summary

The `**toGMTString()**` method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by `toGMTString` varies according to the platform and browser, in general it should represent a human readable date string.

**Note**: `toGMTString` is deprecated and should no longer be used, it's only there for backwards compatibility, use [`toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。") instead.

## Syntax

<pre class="syntaxbox"><var>dateObj</var>.toGMTString()</pre>

## Examples

### Example: Using `toGMTString`

In this example, the `toGMTString` method converts the date to GMT (UTC) using the operating system's time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.

<pre class="brush: js">var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
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

<td>Initial definition, but already declared as deprecated.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.toGMTString</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (informative) compatibility annex.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.toGMTString</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.togmtstring)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (normative) annex for additional features for web browsers.</td>

</tr>

</tbody>

</table>

## Browser compatibility

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

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

*   [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
*   [`Date.prototype.toTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString "toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。")
*   [`Date.prototype.toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。")