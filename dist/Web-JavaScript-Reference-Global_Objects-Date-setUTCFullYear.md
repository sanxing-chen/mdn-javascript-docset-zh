**`setUTCFullYear()`** 方法根据世界标准时间为一个具体日期设置年份。

## 语法

    dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])

### 参数

<dl>

<dt>`yearValue`</dt>

<dd>指定年份整数值，例如，1995</dd>

<dt>`monthValue`</dt>

<dd>可选。指定一个0-11之间的整数值，代表从一月到十二月。</dd>

<dt>`dayValue`</dt>

<dd>可选。指定一个1-31之间的整数值，代表月份中的第几天。如果你指定了dayValue参数，那么你必须指定monthValue参数。</dd>

</dl>

## 描述

如果你没有指定具体的`monthValue和dayValue，`将会使用 `getUTCMonth` 和`getUTCDate` 方法的返回值。

如果你指定的参数超出了期待范围，`setUTCFullYear()方法将会根据Date对象，更新其他参数和日期信息。例如，如果你将monthValue设定为15，年份会增加1，月份值则为为3。`

## 例子

### 使用 `setUTCFullYear()`

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
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

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。 在 JavaScript 1.3实施。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCFullYear</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.41)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCFullYear</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcfullyear)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCFullYear</small>](https://tc39.github.io/ecma262/#sec-date.prototype.setutcfullyear)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

<span style="font-size: 30.002px; letter-spacing: -1px; line-height: 30.002px;">**相关连接**</span>

*   [`Date.prototype.getUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。")
*   [`Date.prototype.setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。")