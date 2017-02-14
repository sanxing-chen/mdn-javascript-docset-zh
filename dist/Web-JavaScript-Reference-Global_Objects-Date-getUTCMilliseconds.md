## 概述

**`getUTCMilliseconds()`** 方法以世界时为标准，返回一个指定的日期对象的毫秒数。

## 语法

    dateObj.getUTCMilliseconds()

### 参数

无。

### 返回值

`getUTCMilliseconds()` 返回一个 0 到 999 的整数。

## 例子

### 例子: 使用 `getUTCMilliseconds()` 方法

下例将当前时间的毫秒部分赋值给变量 `milliseconds`。

<pre class="brush: js">var today = new Date();
var milliseconds = today.getUTCMilliseconds();
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
<small lang="zh-CN">Date.prototype.getUTCMilliseconds</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.25)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Date.prototype.getUTCMilliseconds</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.getutcmilliseconds)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

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

*   [`Date.prototype.getMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。")
*   [`Date.prototype.setUTCMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds "此页面仍未被本地化, 期待您的翻译!")