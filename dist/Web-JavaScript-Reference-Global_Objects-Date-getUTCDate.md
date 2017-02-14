## 概述

**`getUTCDate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

## 语法

    dateObj.getUTCDate()

### 参数

无

### 返回值

`getUTCDate()` 返回一个 1 到 31 的整数值

## 例子

### 例子: 使用 `getUTCDate()` 方法

下面的例子是把当前日期的天数部分赋值给变量 `day`.

<pre class="brush: js">var today = new Date();
var day = today.getUTCDate();
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

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition. Implemented in JavaScript 1.3.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.getUTCDate</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.15)</td>

<td><span class="spec-Standard">Standard</span></td>

<td></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.getUTCDate</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.getutcdate)</td>

<td><span class="spec-Standard">Standard</span></td>

<td></td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

## 相关链接

*   [`Date.prototype.getDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate "根据本地时间，返回一个指定的日期对象为一个月中的第几天。")
*   [`Date.prototype.getUTCDay()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay "getUTCDay() 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。")
*   [`Date.prototype.setUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate "setUTCDate() 方法就是根据全球时间设置特定date对象的日期。")