## 描述

<pre class="syntaxbox">RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
</pre>

## 错误类型

[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")

## 什么地方出错了？

以下的某个方法传入了一个超出精度范围的参数：

*   [`Number.prototype.toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "toExponential() 方法以指数表示法返回该数值字符串表示形式。")
*   [`Number.prototype.toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "toFixed() 方法使用定点表示法来格式化一个数。")
*   [`Number.prototype.toPrecision()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。")

通常这些方法允许的参数范围介于0和20（或21）之间。需要注意的是，ECMAScript标准是允许扩展这个范围的。

<table class="standard-table">

<thead>

<tr>

<th scope="col">Method</th>

<th scope="col">Firefox (SpiderMonkey)</th>

<th scope="col">Chrome, Opera (V8)</th>

</tr>

</thead>

<tbody>

<tr>

<td>[`Number.prototype.toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "toExponential() 方法以指数表示法返回该数值字符串表示形式。")</td>

<td>0 to 100</td>

<td>0 to 20</td>

</tr>

<tr>

<td>[`Number.prototype.toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "toFixed() 方法使用定点表示法来格式化一个数。")</td>

<td>-20 to 100</td>

<td>0 to 20</td>

</tr>

<tr>

<td>[`Number.prototype.toPrecision()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。")</td>

<td>1 to 100</td>

<td>1 to 21</td>

</tr>

</tbody>

</table>

## 示例

### 错误的示例

<pre class="brush: js example-bad">77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError 
2.34.toFixed(1001);         // RangeError 

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
</pre>

### 正确的示例

<pre class="brush: js example-good">77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
</pre>

## 相关页面

*   [`Number.prototype.toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "toExponential() 方法以指数表示法返回该数值字符串表示形式。")
*   [`Number.prototype.toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "toFixed() 方法使用定点表示法来格式化一个数。")
*   [`Number.prototype.toPrecision()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。")