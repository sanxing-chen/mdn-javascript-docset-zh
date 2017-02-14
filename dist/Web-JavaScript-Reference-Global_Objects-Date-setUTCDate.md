## 概要

**`setUTCDate()`** 方法就是根据全球时间设置特定date对象的日期。

## 语法

    dateObj.setUTCDate(dayValue)

### 参数

<dl>

<dt>`dayValue`</dt>

<dd>一个1-31的整形数字，用来指定日期。</dd>

</dl>

## 描述

如果你指定的参数超出了范围，setUTCDate()会尝试更新对应的[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 中的日期信息。例如，如果你使用了40来作为参数，但是[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 中存储的月份为6月，那么日期将被改写为10且月份被增到7月。

## 示例

### 使用Using `setUTCDate()`

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCDate(20);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition. Implemented in JavaScript 1.3.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCDate</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.37)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.setUTCDate</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setutcdate)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容

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

## 相关内容

*   [`Date.prototype.getUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate "getUTCDate() 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天")
*   [`Date.prototype.setDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate "setDate() 方法根据本地时间来指定一个日期对象的天数。")