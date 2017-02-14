## 概述

`**setFullYear()**` 方法根据本地时间为一个日期对象设置年份。

## 语法

    dateObj.setFullYear(yearValue[, monthValue[, dayValue]])

### 参数

<dl>

<dt>`yearValue`</dt>

<dd>指定年份的整数值，例如1995。</dd>

<dt>`monthValue`</dt>

<dd>一个0到11之间的整数值，表示从一月到十二月。</dd>

<dt>`dayValue`</dt>

<dd>一个1到31之间的整数值，表示月份中的第几天。如果你指定了 `dayValue` 参数，就必须同时指定 `monthValue`。</dd>

</dl>

## 描述

如果没有指定 `monthValue` 和`dayValue` 参数，将会使用 `getMonth` 和`getDate` 方法的返回值。

如果有一个参数超出了合理的范围，`setFullYear` 方法会更新其他参数值，日期对象的日期值也会被相应更新。 例如，为 `monthValue` 指定 15， 则年份会加1，月份值会为3。

## 例子

### 例子：使用`setFullYear`方法

    var theBigDay = new Date();
    theBigDay.setFullYear(1997);

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.3</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setFullYear</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.40)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setFullYear</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setfullyear)</td>

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

*   [`Date.prototype.getUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。")
*   [`Date.prototype.setUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear "setUTCFullYear() 方法根据世界标准时间为一个具体日期设置年份。")
*   [`Date.prototype.setYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear "The setYear() method sets the year for a specified date according to local time. Because setYear does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the setFullYear method.")