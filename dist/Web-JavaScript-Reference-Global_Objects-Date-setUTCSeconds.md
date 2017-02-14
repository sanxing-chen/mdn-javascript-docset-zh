`<font face="Open Sans, Arial, sans-serif">此 </font>**setUTCSeconds()**` 方法为一个依据国际通用时间的特定日期设置秒数。

## 语法

    dateObj.setUTCSeconds(secondsValue[, msValue])

### 参数

<dl>

<dt>`secondsValue`</dt>

<dd>一个在0到59之间的整数，表示秒数。</dd>

<dt>`msValue`</dt>

<dd>可选参数。一个0到999之间的数字，代表毫秒数。</dd>

</dl>

### 返回值

一个毫秒数，表示从国际通用时间1970年00:00:00到设置的时间值之间的时间跨度。

## 描述

如果你没有设置msValue参数的值， 那么返回的值来自[`getUTCMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds "getUTCMilliseconds() 方法以世界时为标准，返回一个指定的日期对象的毫秒数。") 方法。

如果你指定的值超出了范围, `setUTCSeconds()` 因此会更新[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 对象中date的相关信息 . 举个例子, 如果你设置secondsValue为100, [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 对象中的分钟数会增加1， 并且秒数会变成40.

## 示例

### 使用 `setUTCSeconds()`

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">说明</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始化设定. 从 JavaScript 1.3继承.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCSeconds</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.31)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCSeconds</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcseconds)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCSeconds</small>](https://tc39.github.io/ecma262/#sec-date.prototype.setutcseconds)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>特点</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持 </td>

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

<th>特点</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持 </td>

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

## 另见

*   [`Date.prototype.getUTCSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds "getUTCSeconds() 方法以世界时为标准，返回一个指定的日期对象的秒数。")
*   [`Date.prototype.setSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds "setSeconds() 方法根据本地时间设置一个日期对象的秒数。")