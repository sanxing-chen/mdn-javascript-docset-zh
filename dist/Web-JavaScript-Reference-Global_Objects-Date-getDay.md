## 概述

**`getDay()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。

## 语法

    dateObj.getDay()

### 参数

无

### 返回值

`getDay() `返回一个整数值： 0 代表星期日， 1 代表星期一，2 代表星期二， 依次类推。

## 例子

### 例子：使用`getDay`方法

下面第二条语句，基于日期对象 `Xmas95` 的值，把 1 赋值给 `weekday`。也就是说1995年12月25日是星期一。

    var Xmas95 = new Date("December 25, 1995 23:15:00");
    var weekday = Xmas95.getDay();

    alert(weekday); // 1

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
<small lang="zh-CN">Date.prototype.getDay</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.16)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.getDay</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.getday)</td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

*   [`Date.prototype.getUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate "getUTCDate() 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天")
*   [`Date.prototype.getUTCDay()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay "getUTCDay() 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。")
*   [`Date.prototype.setDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate "setDate() 方法根据本地时间来指定一个日期对象的天数。")