## 概述

`**setMonth()**` 方法根据本地时间为一个日期对象设置月份。

## 语法

<pre class="syntaxbox"><var>dateObj</var>.setMonth(_monthValue_[, _dayValue_])</pre>

### JavaScript 1.3版本之前

<pre class="syntaxbox"><var>dateObj</var>.setMonth(_monthValue_)</pre>

### 参数

<dl>

<dt>`monthValue`</dt>

<dd>介于 0 到 11 之间的整数（表示一月到十二月）。</dd>

</dl>

<dl>

<dt>`dayValue`</dt>

<dd>从 1 到 31 之间的整数，表示月份中的第几天。</dd>

</dl>

## 描述

如果不指定 `dayValue` 参数，就会使用 [`getDate`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate "根据本地时间，返回一个指定的日期对象为一个月中的第几天。") 方法的返回值。

如果有一个指定的参数超出了合理范围，`setMonth` 会相应地更新日期对象中的日期信息。<font face="Courier New, Andale Mono, monospace">例如，为</font> `monthValue` 指定 15，则年份会加 1，月份将会使用 3。

## 例子

### 例子：使用`setMonth方法`

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setMonth(6);
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
<small lang="zh-CN">Date.prototype.setMonth</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.38)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setMonth</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setmonth)</td>

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

*   [`Date.prototype.getMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth "根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。")
*   [`Date.prototype.setUTCMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth "此页面仍未被本地化, 期待您的翻译!")