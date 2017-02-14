`**valueOf()**` 方法返回一个 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 对象的原始值。

## 语法

    dateObj.valueOf()

### 返回值

从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。

## 描述

`valueOf` 方法返回以数值格式表示的一个 `Date` 对象的原始值，从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期对象所代表时间的毫秒数。

该方法的功能和 [`Date.prototype.getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime "getTime() 方法返回一个时间的格林威治时间数值。") 方法一样。

该方法通常在 JavaScript 内部被调用，而不是在代码中显式调用。

## 例子

### 使用 `valueOf()`

<pre class="brush:js">var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // assigns -424713600000 to myVar
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

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.valueOf</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.8)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.valueOf</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.valueof)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Date.prototype.valueOf</small>](https://tc39.github.io/ecma262/#sec-date.prototype.valueof)</td>

<td><span class="spec-Draft">Draft</span></td>

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

*   [`Object.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "valueOf() 方法返回指定原始值.")
*   [`Date.prototype.getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime "getTime() 方法返回一个时间的格林威治时间数值。")