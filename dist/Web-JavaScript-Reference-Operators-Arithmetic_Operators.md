## 概述

**算术运算符（Arithmetic operators）**把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。

## <a name="Addition">加法 (+)</a>

加法运算符（addition operator）的结果是数值求和，或者字符串拼接。

### 语法

<pre class="syntaxbox">**运算符:** x + y
</pre>

### 示例

<pre class="brush: js">// Number + Number -> 数字相加
1 + 2 // 3

// Boolean + Number -> 数字相加
true + 1 // 2

// Boolean + Boolean -> 数字相加
false + false // 0

// Number + String -> 字符串连接
5 + "foo" // "5foo"

// String + Boolean -> 字符串连接
"foo" + false // "foofalse"

// String + String -> 字符串连接
"foo" + "bar" // "foobar"
</pre>

## <a name="Subtraction">减法 (-)</a>

减法运算符（subtraction operator）使两个操作数相减，结果是它们的差值。

### 语法

<pre class="syntaxbox">**运算符:** x - y
</pre>

### 示例

<pre class="brush: js">5 - 3 // 2
3 - 5 // -2
"foo" - 3 // NaN</pre>

## <a name="Division">除法 (/)</a>

除法运算符（division operator）的结果是操作数的商 ，左操作数是被除数（dividend），右操作数是除数（divisor）。

### 语法

<pre class="syntaxbox">**运算符:** x / y
</pre>

### 示例

<pre class="brush: js">1 / 2      // 在 JavaScript 中返回 0.5
1 / 2      // 在 Java 中返回 0
// （不需要数字是明确的浮点数）

1.0 / 2.0  // 在 JavaScript 或 Java 中都返回 0.5

2.0 / 0    // 在 JavaScript 中返回 Infinity
2.0 / 0.0  // 同样返回 Infinity 
2.0 / -0.0 // 在 JavaScript 中返回 -Infinity</pre>

## <a name="Multiplication">乘法 (*)</a>

乘法运算符（multiplication operator）的结果是操作数的乘积。

### 语法

<pre class="syntaxbox">**运算符:** x * y
</pre>

### 示例

<pre class="brush: js">2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
"foo" * 2 // NaN
</pre>

## <a name="Remainder">求余 (%)</a>

求余运算符（remainder operator）返回第一个操作数对第二个操作数的模，即 `var1` 对 `var2` 取模，其中 `var1` 和 `var2` 是变量。取模功能就是 `var1` 除以 `var2` 的整型余数。 [以前有个提议，在ECMAScript未来的版本中，可能会有一个获取实际模的运算符。](http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator "http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator")

### 语法

<pre class="syntaxbox">**运算符:** var1 % var2
</pre>

### 示例

<pre class="brush: js">12 % 5 // 2
-1 % 2 // -1
NaN % 2 // NaN
</pre>

## <a name="Exponentiation">幂 (**)</a>

幂运算符（exponentiation operator）返回第一个操作数做底数，第二个操作数做指数的乘方。即， `var1`<sup>`var2`</sup> ，其中 `var1` 和 `var2` 是其两个操作数。幂运算符是右结合的。`a ** b ** c` 等同于 `a ** (b ** c)`  ．

### 语法

<pre class="syntaxbox">**运算符:** var1 ** var2
</pre>

### 注解

包括 PHP 或 Python 等的大多数语言中，都包含幂运算符（一般来说符号是 ^ 或者 **）。这些语言中的幂运算符有着比其他的单目运算符（如一元 + 或一元 - ）更高的优先级。但是作为例外，在 Bash 或当前的 ES7 幂运算符的草案中，**  运算符被设计为比单目运算符优先级更低。

    -2 ** 2 // 在 ES7 和 Bash 中等于 4 ，而在其他语言中一般等于 -4

### 示例

    2 ** 3 // 8
    3 ** 2 // 9
    3 ** 2.5 // 15.588457268119896
    10 ** -1 // 0.1
    NaN ** 2 // NaN

    2 ** 3 ** 2 // 512
    2 ** (3 ** 2) // 512
    (2 ** 3) ** 2 // 64

## <a name="Increment">递增 (++)</a>

递增运算符（increment operator)为其操作数增加1，返回一个数值。

*   如果后置（postfix）使用，即运算符位于操作数的后面（如 x++），那么将会在递增前返回数值。
*   如果前置（prefix）使用，即运算符位于操作数的前面（如 ++x），那么将会在递增后返回数值。

### 语法

<pre class="syntaxbox">**运算符:** x++ 或者 ++x
</pre>

### 示例

<pre class="brush: js">// 后置 
var x = 3;
y = x++; // y = 3, x = 4

// 前置
var a = 2;
b = ++a; // a = 3, b = 3
</pre>

## <a name="Decrement">递减 (--)</a>

递减运算符将其操作数减去1，并返回一个数值。

*   如果后置使用（如 x--），则在递减前返回数值。
*   如果前置使用（如 --x），则在递减后返回数值。

### 语法

<pre class="syntaxbox">**运算符:** x-- or --x
</pre>

### 示例

<pre class="brush: js">// 后置 
var x = 3;
y = x--; // y = 3, x = 2

// 前置
var a = 2;
b = --a; // a = 1, b = 1
</pre>

## <a name="Unary_negation">一元负号 (-)</a>

一元负号运算符（unary negation operator）位于操作数前面，并转换操作数的符号。

### 语法

<pre class="syntaxbox">**运算符:** -x
</pre>

### 示例

<pre class="brush: js">var x = 3;
y = -x; // y = -3, x = 3
</pre>

## <a name="Unary_plus">一元正号</a> (+)

一元正号运算符（unary plus operator）位于其操作数前面，计算其操作数的数值，如果操作数不是一个数值，会尝试将其转换成一个数值。 尽管一元负号也能转换非数值类型，但是一元正号是转换其他对象到数值的最快方法，也是最推荐的做法，因为它不会对数值执行任何多余操作。它可以将字符串转换成整数和浮点数形式，也可以转换非字符串值 `true`，`false` `和` `null`。小数和十六进制格式字符串也可以转换成数值。负数形式字符串也可以转换成数值（对于十六进制不适用）。如果它不能解析一个值，则计算结果为 [NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN).

### 语法

<pre class="syntaxbox">**运算符:** +x
</pre>

### 示例

<pre class="brush: js">+3     // 3
+"3"   // 3
+true  // 1
+false // 0
+null  // 0
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

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)](http://www.ecma-international.org/ecma-262/5.1/#sec-11.3 "ECMAScript 5.1 (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in several sections of the specification: [Additive operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.6), [Multiplicative operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.5), [Postfix expressions](http://www.ecma-international.org/ecma-262/5.1/#sec-11.3), [Unary operators](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4).</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)](http://www.ecma-international.org/ecma-262/6.0/#sec-postfix-expressions "ECMAScript 2015 (6th Edition, ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in several sections of the specification: [Additive operators](http://www.ecma-international.org/ecma-262/6.0/#sec-additive-operators), [Multiplicative operators](http://www.ecma-international.org/ecma-262/6.0/#sec-multiplicative-operators), [Postfix expressions](http://www.ecma-international.org/ecma-262/6.0/#sec-postfix-expressions), [Unary operators](http://www.ecma-international.org/ecma-262/6.0/#sec-unary-operators).</td>

</tr>

<tr>

<td>ECMAScript 7</td>

<td>Draft</td>

<td>[Exponentiation operator](https://github.com/rwaldron/exponentiation-operator).</td>

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

<tr>

<td>Exponentiation operator</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[42](/en-US/Firefox/Releases/42 "Released on 2015-11-03.") (42)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<tr>

<td>Exponentiation operator</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0 (42)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Assignment operators](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)