 JavaScript 的 **`Number`** 对象是经过封装的能让你处理数字值的对象。`Number` 对象由 `Number()` 构造器创建。

## 语法

<pre class="syntaxbox">new Number(value);</pre>

### 参数

<dl>

<dt>`value`</dt>

<dd>被创建对象的数字值。</dd>

</dl>

## 描述

`Number` 对象主要用于：

*   如果参数无法被转换为数字，则返回 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")。
*   在非构造器上下文中 (如：没有 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 操作符)，`Number` 能被用来执行类型转换。

## 属性

<dl>

<dt>[`Number.EPSILON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON "Number.EPSILON 属性表示 1 和大于 1 的最小值（可表示为 Number）的差值。")</dt>

<dd>两个可表示(representable)数之间的最小间隔。</dd>

<dt>[`Number.MAX_SAFE_INTEGER`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER "Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数（maxinum safe integer)（253 - 1）。")</dt>

<dd>在 JavaScript 中最大的安全整数 (`2<sup>53</sup> - 1`)。</dd>

</dl>

<dl>

<dt>[`Number.MAX_VALUE`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE "Number.MAX_VALUE 属性表示在 JavaScript 里所能表示的最大数值。")</dt>

<dd>能表示的最大正数。最大的负数是 `-MAX_VALUE`。</dd>

<dt>[`Number.MIN_VALUE`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE "Number.MIN_VALUE 属性表示在 JavaScript 中所能表示的最小的正值。")</dt>

<dd>能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最小的负数是 `-MIN_VALUE`。</dd>

<dt>[`Number.NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN "Number.NaN 表示“非数字”（Not-A-Number）。和 NaN 相同。")</dt>

<dd>特殊的“非数字”值。</dd>

<dt>[`Number.NEGATIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY "Number.NEGATIVE_INFINITY 属性表示负无穷大。")</dt>

<dd>特殊的负无穷大值，在溢出时返回该值。</dd>

<dt>[`Number.POSITIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY "Number.POSITIVE_INFINITY 属性表示正无穷大。")</dt>

<dd>特殊的正无穷大值，在溢出时返回改值。</dd>

<dt>[`Number.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype "Number.prototype 属性表示 Number 构造函数的原型。")</dt>

<dd>Number 对象上允许的额外属性。</dd>

</dl>

## 方法

<dl>

<dt>[`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。")</dt>

<dd>确定传递的值是否是 NaN。</dd>

<dt>[`Number.isFinite()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite "Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。")</dt>

<dd>确定传递的值类型及本身是否是有限数。</dd>

<dt>[`Number.isInteger()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger "Number.isInteger() 方法用来判断给定的参数是否为整数。")</dt>

<dd>确定传递的值类型是“number”，且是整数。</dd>

<dt>[`Number.isSafeInteger()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger "Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）。一个安全整数是一个符合下面条件的整数：")</dt>

<dd>Determine whether the passed value is a safe integer (number between `-(2<sup>53</sup> - 1)` and`2<sup>53</sup> - 1`).</dd>

<dt>[`Number.toInteger()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger "Number.toInteger() 用来将参数转换成整数,但该方法的实现已被移除.")<span title="This is an obsolete API and is no longer guaranteed to work."></span></dt>

<dd>计算传递的值并将其转换为整数 (或无穷大)。</dd>

</dl>

<div>

<dl>

<dt>[`Number.parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat "Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。")</dt>

<dd>和全局对象 [`parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat "parseFloat()方法将参数中指定的字符串解析成为一个浮点数字并返回.") 一样。</dd>

<dt>[`Number.parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt "Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。")</dt>

<dd>和全局对象 [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt "概述") 一样。</dd>

</dl>

</div>

## `Number` 实例

所有 `Number` 实例都继承自 [`Number.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype "Number.prototype 属性表示 Number 构造函数的原型。")。`被修改的 Number` 构造器的原型对象对全部 `Number` 实例都生效。

### 方法

<div>

<dl>

<dt>[`Number.prototype.toExponential()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "The toExponential() method returns a string representing the Number object in exponential notation.")</dt>

<dd>Returns a string representing the number in exponential notation.</dd>

<dt>[`Number.prototype.toFixed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "The toFixed() method formats a number using fixed-point notation.")</dt>

<dd>Returns a string representing the number in fixed-point notation.</dd>

<dt>[`Number.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this number.")</dt>

<dd>Returns a string with a language sensitive representation of this number. Overrides the [`Object.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.") method.</dd>

<dt>[`Number.prototype.toPrecision()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "The toPrecision() method returns a string representing the Number object to the specified precision.")</dt>

<dd>Returns a string representing the number to a specified precision in fixed-point or exponential notation.</dd>

<dt>[`Number.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource "The toSource() method returns a string representing the source code of the object.")<span title="This API has not been standardized."></span></dt>

<dd>Returns an object literal representing the specified [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.") object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.") method.</dd>

<dt>[`Number.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "The toString() method returns a string representing the specified Number object.")</dt>

<dd>Returns a string representing the specified object in the specified radix (base). Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object.") method.</dd>

<dt>[`Number.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf "The valueOf() method returns the wrapped primitive value of a Number object.")</dt>

<dd>Returns the primitive value of the specified object. Overrides the [`Object.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "Technical review completed.") method.</dd>

</dl>

</div>

## 示例

### 使用 Number 对象给数字变量赋值

下例使用 `Number` 对象的属性给几个数字变量赋值：

<pre class="brush: js">var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
</pre>

### 整数类型的范围

下例展示了`Number`对象所能表示的最大和最小整数 (详情请参阅 ECMAScript standard, chapter _8.5 The Number Type_):

    var biggestInt = 9007199254740992;
    var smallestInt = -9007199254740992;

在解析序列化的JSON时，如果JSON解析器将它们强制转换为Number类型，那么超出此范围的整数值可能会被破坏。在工作中使用[`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!") 类型代替，是一个可行的解决方案。

### 使用 `Number` 转换 `Date` 对象

下例使用 Number 作为函数来转换 `Date` 对象为数字值：

<pre class="brush: js">var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
</pre>

这将输出 "819199440000"。

### 转换数字字符串为数字

    Number("123")     // 123
    Number("")        // 0
    Number("0x11")    // 17
    Number("0b11")    // 3
    Number("0o11")    // 9
    Number("foo")     // NaN
    Number("100a")    // NaN

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。 实现于 JavaScript 1.1.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Number</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Number</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-number-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>新增了方法和属性: [`EPSILON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON "Number.EPSILON 属性表示 1 和大于 1 的最小值（可表示为 Number）的差值。"), [`isFinite`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite "Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。"), [`isInteger`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger "Number.isInteger() 方法用来判断给定的参数是否为整数。"), [`isNaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。"), [`parseFloat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat "Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。"), [`parseInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt "Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。")</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Number</small>](https://tc39.github.io/ecma262/#sec-number-objects)</td>

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

<th>Safari (WebKit)</th>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Phone</th>

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

</tr>

</tbody>

</table>

</div>

## 参阅

*   [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")
*   全局对象 [`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math "Math 是一个内置对象， 为数学常量和数学函数提供了属性和方法，而不是一个函数对象。")