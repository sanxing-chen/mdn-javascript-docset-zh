## 概述

`**setMilliseconds()**` 方法会根据本地时间设置一个日期对象的豪秒数。

## 语法

<pre class="syntaxbox"><var>dateObj</var>.setMilliseconds(_millisecondsValue_)</pre>

### 参数

<dl>

<dt>`millisecondsValue`</dt>

<dd>一个 0 到 999 的数字，表示豪秒数。</dd>

</dl>

## 描述

如果指定的数字超出了合理范围，则日期对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，豪秒数为 5。

## 例子

### 例子：使用`setMilliseconds`

<pre class="brush:js">var theBigDay = new Date();
theBigDay.setMilliseconds(100);
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

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.3</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setMilliseconds</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.28)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setMilliseconds</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setmilliseconds)</td>

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

*   [`Date.prototype.getMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。")
*   [`Date.prototype.setUTCMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds "此页面仍未被本地化, 期待您的翻译!")