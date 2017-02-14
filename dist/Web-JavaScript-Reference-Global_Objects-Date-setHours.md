## 概述

`**setHours()**` 方法根据本地时间为一个日期对象设置小时数，返回从1970-01-01 00:00:00 UTC 到更新后的 [`日期`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 对象实例所表示时间的毫秒数。

## 语法

<pre class="syntaxbox">dateObj.setHours(_hoursValue_[, _minutesValue_[, _secondsValue_<span style="line-height: normal;">[</span><span style="line-height: normal;">,</span> _msValue_<span style="line-height: normal;">]]])</span>
</pre>

### JavaScript 1.3版本之前

    dateObj.setHours(hoursValue) 

### 参数

<dl>

<dt>`hoursValue`</dt>

<dd>一个 0 到 23 的整数，表示小时。</dd>

<dt>`minutesValue`</dt>

<dd>一个 0 到 59 的整数，表示分钟。</dd>

<dt>`secondsValue`</dt>

<dd>一个 0 到 59 的整数，表示秒数。如果指定了 `secondsValue` 参数，则必须同时指定 `minutesValue `参数。</dd>

<dt>`msValue`</dt>

<dd>一个 0 到 999 的数字，表示微秒数，如果指定了 `msValue` 参数，则必须同时指定 `minutesValue` 和 `secondsValue` 参数。</dd>

</dl>

## 描述

如果不指定 `minutesValue`，`secondsValue` 和 `msValue` 参数，则会使用[`getMinutes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes "getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。")，[`getSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds "getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。") 和[`getMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。") 方法的返回值。

如果有一个参数超出了合理范围，`setHours` 会相应地更新日期对象中的日期信息。例如，如果为 `secondsValue` 指定了 100，则分钟会加 1，然后秒数使用 40。

## 例子

### 例子：使用`setHours方法`

<pre class="brush:js">var theBigDay = new Date();
theBigDay.setHours(7);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setHours</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.34)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setHours</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.sethours)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

## 相关链接

*   [`Date.prototype.getHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours "getHours() 方法根据本地时间，返回一个指定的日期对象的小时。")
*   [`Date.prototype.setUTCHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours "此页面仍未被本地化, 期待您的翻译!")