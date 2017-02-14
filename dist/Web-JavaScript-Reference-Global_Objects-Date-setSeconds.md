## 概述

`**setSeconds()**` 方法根据本地时间设置一个日期对象的秒数。

## 语法

<pre class="syntaxbox"><var>dateObj</var>.setSeconds(_secondsValue_[, _msValue_])</pre>

### JavaScript 1.3之前版本

<pre class="syntaxbox"><var>dateObj</var>.setSeconds(_secondsValue_)</pre>

### 参数

<dl>

<dt>`secondsValue`</dt>

<dd>一个 0 到 59 的整数。</dd>

<dt>`msValue`</dt>

<dd>一个 0 到 999 的数字，表示微秒数。</dd>

</dl>

## 描述

如果没有指定 `msValue` 参数，就会使用 [`getMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。") 方法的返回值。

如果一个参数超出了合理范围， `setSeconds` 方法会相应地更新日期对象的时间信息。例如，为 `secondsValue` 指定 100，则日期对象的分钟数会相应地加 1，秒数将会使用 40。

## 例子

### 例子：使用`setSeconds方法`

<pre class="brush:js">var theBigDay = new Date();
theBigDay.setSeconds(30)
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
<small lang="zh-CN">Date.prototype.setSeconds</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.30)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setSeconds</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date.prototype.setseconds)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

*   [`Date.prototype.getSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds "getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。")
*   [`Date.prototype.setUTCSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds "此页面仍未被本地化, 期待您的翻译!")