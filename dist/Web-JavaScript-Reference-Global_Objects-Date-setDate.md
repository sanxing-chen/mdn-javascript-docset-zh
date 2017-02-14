## 概述

`**setDate()**` 方法根据本地时间来指定一个日期对象的天数。

## 语法

    dateObj.setDate(dayValue)

### 参数

<dl>

<dt>`dayValue`</dt>

<dd>一个整数，表示该月的第几天。</dd>

</dl>

## 描述

如果 `dayValue` 超出了月份的合理范围，`setDate` 将会相应地更新 `Date` 对象。例如，如果为 `dayValue` 指定0，那么日期就会被设置为上个月的最后一天。

## 例子

### 例子：使用`setDate`方法

<pre class="brush:js">var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);  // 1962-08-01</pre>

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
<small lang="zh-CN">Date.prototype.setDate</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.36)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setDate</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setdate)</td>

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

*   [`Date.prototype.getDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate "根据本地时间，返回一个指定的日期对象为一个月中的第几天。")
*   [`Date.prototype.setUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate "setUTCDate() 方法就是根据全球时间设置特定date对象的日期。")