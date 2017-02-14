## 概述

**`getUTCHours()`** 方法以世界时为标准，返回一个指定的日期对象的小时数。

## 语法

    dateObj.getUTCHours()

### 参数

无。

### 返回值

`getUTCHours()` 返回一个 0 到 23 的整数。

## 例子

### 例子: 使用 `getUTCHours()` 方法

下例将当前时间的小时部分赋值给变量 `hours`。

<pre class="brush: js">var today = new Date();
var hours = today.getUTCHours();
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
<small lang="zh-CN">Date.prototype.getUTCHours</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.19)</td>

<td><span class="spec-Standard">Standard</span></td>

<td></td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Date.prototype.getUTCHours</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.getutchours)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td></td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

## 相关链接

*   [`Date.prototype.getHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours "getHours() 方法根据本地时间，返回一个指定的日期对象的小时。")
*   [`Date.prototype.setUTCHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours "此页面仍未被本地化, 期待您的翻译!")