## 概述

`**setTime()**` 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 `Date` 对象设置时间。

## 语法

<pre class="syntaxbox"><var>dateObj</var>.setTime(_timeValue_)</pre>

### 参数

<dl>

<dt>`timeValue`</dt>

<dd>一个整数，表示从1970-1-1 00:00:00 UTC开始计时的毫秒数。</dd>

</dl>

## 描述

使用 `setTime` 方法用来把一个日期时间赋值给另一个 `Date` 对象。

## 例子

### 例子：使用`setTime`

<pre>theBigDay = new Date("July 1, 1999");
sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
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
<small lang="zh-CN">Date.prototype.setTime</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.27)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setTime</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.settime)</td>

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

*   [`Date.prototype.getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime "getTime() 方法返回一个时间的格林威治时间数值。")
*   [`Date.prototype.setUTCHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours "此页面仍未被本地化, 期待您的翻译!")