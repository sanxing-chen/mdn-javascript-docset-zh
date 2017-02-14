## 概述

赋值运算符（**assignment operator**）基于右值（right operand）的值，给左值（left operand）赋值。

## 描述

基本的赋值运算符是等号（`=`），该运算符把它右边的运算值赋给左边。即，`x = y` 把 `y` 的值赋给 `x`。 其他的赋值运算符通常是标准运算符的简写形式，如下面的定义与示例。 

<table class="standard-table">

<tbody>

<tr>

<th>名称</th>

<th>简写形式</th>

<th>含义</th>

</tr>

<tr>

<td>[赋值（Assignment）](#Assignment)</td>

<td>`x = y`</td>

<td>`x = y`</td>

</tr>

<tr>

<td>[加赋值（Addition assignment）](#Addition_assignment)</td>

<td>`x += y`</td>

<td>`x = x + y`</td>

</tr>

<tr>

<td>[减赋值（Subtraction assignment）](#Subtraction_assignment)</td>

<td>`x -= y`</td>

<td>`x = x - y`</td>

</tr>

<tr>

<td>[乘赋值（Multiplication assigment）](#Multiplication_assignment)</td>

<td>`x *= y`</td>

<td>`x = x * y`</td>

</tr>

<tr>

<td>[除赋值（Division assignment）](#Division_assignment)</td>

<td>`x /= y`</td>

<td>`x = x / y`</td>

</tr>

<tr>

<td>[模赋值（Remainder assignment）](#Remainder_assignment)</td>

<td>`x %= y`</td>

<td>`x = x % y`</td>

</tr>

<tr>

<td>[左移赋值（Left shift assignment）](#Left_shift_assignment)</td>

<td>`x <<= y`</td>

<td>`x = x << y`</td>

</tr>

<tr>

<td>[右移赋值（Right shift assignment）](#Right_shift_assignment)</td>

<td>`x >>= y`</td>

<td>`x = x >> y`</td>

</tr>

<tr>

<td>[无符号右移赋值（Unsigned right shift assignment）](#Unsigned_right_shift_assignment)</td>

<td>`x >>>= y`</td>

<td>`x = x >>> y`</td>

</tr>

<tr>

<td>[按位与赋值（Bitwise AND assignment）](#Bitwise_AND_assignment)</td>

<td>`x &= y`</td>

<td>`x = x & y`</td>

</tr>

<tr>

<td>[按位异或赋值（Bitwise XOR assignment）](#Bitwise_XOR_assignment)</td>

<td>`x ^= y`</td>

<td>`x = x ^ y`</td>

</tr>

<tr>

<td>[按位或赋值（Bitwise OR assignment）](#Bitwise_OR_assignment)</td>

<td>`x |= y`</td>

<td>`x = x | y`</td>

</tr>

</tbody>

</table>

### <a name="Assignment">赋值</a>

简单的赋值运算符，把一个值赋给一个变量。为了把一个值赋给多个变量，可以以链式使用赋值运算符。参考下例：

#### 语法

<pre class="syntaxbox">**Operator:** x = y
</pre>

#### 示例

<pre class="brush: js">// Assuming the following variables
//  x = 5
//  y = 10
//  z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25
</pre>

### <a name="Addition_assignment">加赋值（Addition assignment）</a>

加赋值运算符把一个右值与一个变量相加，然后把相加的结果赋给该变量。两个操作数的类型决定了加赋值运算符的行为。算术相加或字符串连接都有可能。更多细节参考 [addition operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")。

#### 语法

<pre class="syntaxbox">**Operator:** x += y 
**Meaning:**  x  = x + y
</pre>

#### 示例

<pre class="brush: js">// 假定定义了下列变量
//  foo = "foo"
//  bar = 5
//  baz = true

// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 0

// Number + String -> concatenation
bar += "foo" // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += "bar" // "foobar"
</pre>

### <a name="Subtraction_assignment">减赋值（Subtraction assignment）</a>

减赋值运算符使一个变量减去右值，然后把结果赋给该变量。更多细节查看 [subtraction operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。") 。

#### 语法

<pre class="syntaxbox">**Operator:** x -= y 
**Meaning:**  x  = x - y
</pre>

#### 示例

<pre class="brush: js">// 假定已定义了下面的变量
//  bar = 5

bar -= 2     // 3
bar -= "foo" // NaN
</pre>

### <a name="Multiplication_assignment">乘赋值（Multiplication assignment）</a>

乘赋值运算符使一个变量乘以右值，然后把相成的结果赋给该变量。更多细节查看 [multiplication operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")。

#### 语法

<pre class="syntaxbox">**Operator:** x *= y 
**Meaning:**  x  = x * y
</pre>

#### 示例

<pre class="brush: js">// 假定已定义了下面的变量
//  bar = 5

bar *= 2     // 10
bar *= "foo" // NaN
</pre>

### <a name="Division_assignment">除赋值（Division assignment）</a>

除赋值运算符使一个变量除以右值，然后把结果赋给该变量。更多细节查看 [division operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")。

#### 语法

<pre class="syntaxbox">**Operator:** x /= y 
**Meaning:**  x  = x / y
</pre>

#### 示例

<pre class="brush: js">// 假定已定义了下面的变量
//  bar = 5

bar /= 2     // 2.5
bar /= "foo" // NaN
bar /= 0     // Infinity
</pre>

### <a name="Remainder_assignment">模赋值（Remainder assignment）</a>

模赋值运算符使一个变量除以右值，然后把余数赋给该变量。更多细节查看 [remainder operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")。

#### 语法

<pre class="syntaxbox">**Operator:** x %= y 
**Meaning:**  x  = x % y
</pre>

#### 示例

<pre class="brush: js">// Assuming the following variable
//  bar = 5

bar %= 2     // 1
bar %= "foo" // NaN
bar %= 0     // NaN
</pre>

### <a name="Left_shift_assignment">左移赋值（Left shift assignment）</a>

左移赋值运算符使变量向左移动指定位数的比特位，然后把结果赋给该变量。更多细节查看 [left shift operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x <<= y 
**Meaning:**  x   = x << y
</pre>

#### 示例

<pre class="brush: js">var bar = 5; //  (00000000000000000000000000000101)
bar <<= 2; // 20 (00000000000000000000000000010100)
</pre>

### <a name="Right_shift_assignment">右移赋值（Right shift assignment）</a>

右移赋值运算符使变量向右移指定位数的比特位，然后把结果赋给该变量。更多细节查看 [right shift operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x >>= y 
**Meaning:**  x   = x >> y
</pre>

#### 示例

<pre class="brush: js">var bar = 5; //   (00000000000000000000000000000101)
bar >>= 2;   // 1 (00000000000000000000000000000001)

var bar -5; //    (-00000000000000000000000000000101)
bar >>= 2;  // -2 (-00000000000000000000000000000010)
</pre>

### <a name="Unsigned_right_shift_assignment">无符号右移赋值（Unsigned right shift assignment）</a>

无符号右移赋值运算符向右移动指定数量的比特位，然后把结果赋给变量。更多细节查看 [unsigned right shift operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x >>>= y 
**Meaning:**  x    = x >>> y
</pre>

#### 示例

<pre class="brush: js">var bar = 5; //   (00000000000000000000000000000101)
bar >>>= 2;  // 1 (00000000000000000000000000000001)

var bar = -5; // (-00000000000000000000000000000101)
bar >>>= 2; // 1073741822 (00111111111111111111111111111110)</pre>

### <a name="Bitwise_AND_assignment">按位与赋值（Bitwise AND assignment）</a>

按位与赋值运算符使用两个操作值的二进制表示，执行按位与运算，并把结果赋给变量。更多细节查看 [bitwise AND operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x &= y 
**Meaning:**  x  = x & y
</pre>

#### 示例

<pre class="brush: js">var bar = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
bar &= 2; // 0
</pre>

### <a name="Bitwise_XOR_assignment">按位异或赋值（Bitwise XOR assignment）</a>

按位异或赋值运算符使用两个操作值的二进制表示，执行二进制异或运算，并把结果赋给变量。更多细节查看 [bitwise XOR operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x ^= y 
**Meaning:**  x  = x ^ y
</pre>

#### 示例

<pre class="brush: js">var bar = 5;
bar ^= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
</pre>

### <a name="Bitwise_OR_assignment">按位或赋值（Bitwise OR assignment）</a>

按位或赋值运算符使用两个操作值的二进制表示，执行按位或运算，并把结果赋给变量。更多细节查看 [bitwise OR operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")。

#### 语法

<pre class="syntaxbox">**Operator:** x |= y 
**Meaning:**  x  = x | y
</pre>

#### 示例

<pre class="brush: js">var bar = 5;
bar |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
</pre>

## 示例

### 带有赋值运算符的左值（Left operand）

在某些不常见的情况下，赋值运算符（如` x += y`）并不等同于表达式（这是是 `x = x + y`）。当一个赋值运算符的左值包含有一个赋值运算符时，左值只会被求值一次。例如：

<pre class="brush: js">a[i++] += 5         // i 执行一次求值
a[i++] = a[i++] + 5 // i 执行两次求值
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

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Assignment operators</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Assignment operators</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-assignment-operators)</td>

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

*   [算术运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)