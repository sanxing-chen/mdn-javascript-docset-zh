## 概述

**按位操作符（Bitwise operators）** 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制[数值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number")。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。

下面的表格总结了JavaScript中的按位操作符：

<table class="standard-table">

<tbody>

<tr>

<th>运算符</th>

<th>用法</th>

<th>描述</th>

</tr>

<tr>

<td>[按位与（ AND）](#Bitwise_AND)</td>

<td style="white-space: nowrap;">`a & b`</td>

<td>对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。</td>

</tr>

<tr>

<td>[按位或（OR）](#Bitwise_OR)</td>

<td style="white-space: nowrap;">`a | b`</td>

<td>对于每一个比特位，当两个操作数相应的比特位至少有一个1时，结果为1，否则为0。</td>

</tr>

<tr>

<td>[按位异或（XOR）](#Bitwise_XOR)</td>

<td style="white-space: nowrap;">`a ^ b`</td>

<td>对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0。</td>

</tr>

<tr>

<td>[按位非（NOT）](#Bitwise_NOT)</td>

<td style="white-space: nowrap;">`~ a`</td>

<td>反转操作数的比特位，即0变成1，1变成0。</td>

</tr>

<tr>

<td>[左移（L](#Left_shift)[eft shift）](#Left_shift)</td>

<td style="white-space: nowrap;">`a << b`</td>

<td>将 `a` 的二进制形式向左移 `b` (< 32) 比特位，右边用0填充。</td>

</tr>

<tr>

<td>[有符号右移](#Right_shift)</td>

<td style="white-space: nowrap;">`a >> b`</td>

<td>将 a 的二进制表示向右移 `b` (< 32) 位，丢弃被移出的位。</td>

</tr>

<tr>

<td>[无符号右移](#Unsigned_right_shift)</td>

<td style="white-space: nowrap;">`a >>> b`</td>

<td>将 a 的二进制表示向右移 `b` (< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。</td>

</tr>

</tbody>

</table>

## 有符号32位整数

所有的按位操作符的操作数都会被转成补码（two's complement）形式的有符号32位整数。补码形式是指一个数的负对应值（negative counterpart）（如 5和-5）为数值的所有比特位反转后，再加1。反转比特位即该数值进行’非‘位运算，也即该数值的反码。例如下面为整数314的二进制编码：

<pre>00000000000000000000000100111010
</pre>

下面编码 `~314`，即 `314` 的反码：

<pre>11111111111111111111111011000101
</pre>

最后，下面编码 `-314`，即 `314` 的补码：

<pre>11111111111111111111111011000110
</pre>

补码保证了当一个数是正数时，其最左的比特位是0，当一个数是负数时，其最左的比特位是1。因此，最左边的比特位被称为符号位（_sign bit_）。

`0` 是所有比特数字0组成的整数。

<pre>0 (base 10) = 00000000000000000000000000000000 (base 2)
</pre>

`-1` 是所有比特数字1组成的整数。

<pre>-1 (base 10) = 11111111111111111111111111111111 (base 2)
</pre>

`-2147483648`（十六进制形式：`-0x80000000`）是除了最左边为1外，其他比特位都为0的整数。

<pre>-2147483648 (base 10) = 10000000000000000000000000000000 (base 2)
</pre>

`2147483647`（十六进制形式：`0x7fffffff`）是除了最左边为0外，其他比特位都为1的整数。

<pre>2147483647 (base 10) = 01111111111111111111111111111111 (base 2)
</pre>

数字`-2147483648` 和 `2147483647` 是32位有符号数字所能表示的最小和最大整数。

## 按位逻辑操作符

从概念上讲，按位逻辑操作符按遵守下面规则：

*   操作数被转换成32位整数，用比特序列（0和1组成）表示。
*   第一个操作数的每个比特位与第二个操作数的相应比特位匹配：第一位对应第一位，第二位对应第二位，以此类推。
*   位运算符应用到每对比特位，结果是新的比特值。

### <a name="Bitwise_AND">& (按位与)</a>

对每对比特位执行**与（AND）操作**。只有 a 和 b 都是 1 时，a AND b 才是 1。**与操作**的真值表如下：

<table class="standard-table">

<tbody>

<tr>

<td class="header">a</td>

<td class="header">b</td>

<td class="header">a AND b</td>

</tr>

<tr>

<td>0</td>

<td>0</td>

<td>0</td>

</tr>

<tr>

<td>0</td>

<td>1</td>

<td>0</td>

</tr>

<tr>

<td>1</td>

<td>0</td>

<td>0</td>

</tr>

<tr>

<td>1</td>

<td>1</td>

<td>1</td>

</tr>

</tbody>

</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
</pre>

将任一数值 x 与 0 执行按位与操作，其结果都为 0。将任一数值 x 与 -1 执行按位与操作，其结果都为 x。

### <a name="Bitwise_OR">| (按位或)</a>

对每一对比特位执行**或（OR）操作**。如果 a 或 b 为 1，则 `a` OR `b` 结果为 1。**或操作**的真值表：

<table class="standard-table">

<tbody>

<tr>

<td class="header">a</td>

<td class="header">b</td>

<td class="header">a OR b</td>

</tr>

<tr>

<td>0</td>

<td>0</td>

<td>0</td>

</tr>

<tr>

<td>0</td>

<td>1</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>0</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>1</td>

<td>1</td>

</tr>

</tbody>

</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
</pre>

将任一数值 x 与 0 进行按位或操作，其结果都是 x。将任一数值 x 与 -1 进行按位或操作，其结果都为 -1。

### <a name="Bitwise_XOR">^ (按位异或)</a>

对每一对比特位执行**异或（XOR）操作**。当 a 和 b 不相同时，`a` XOR `b` 的结果为 1。**异或操作**真值表：

<table class="standard-table">

<tbody>

<tr>

<td class="header">a</td>

<td class="header">b</td>

<td class="header">a XOR b</td>

</tr>

<tr>

<td>0</td>

<td>0</td>

<td>0</td>

</tr>

<tr>

<td>0</td>

<td>1</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>0</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>1</td>

<td>0</td>

</tr>

</tbody>

</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
</pre>

将任一数值 x 与 0 进行异或操作，其结果为 x。将任一数值 x 与 -1 进行异或操作，其结果为 ~x。

### <a name="Bitwise_NOT">~ (按位非)</a>

对每一个比特位执行**非（NOT）操作**。NOT `a` 结果为 a 的反转（即反码）。**非操作**的真值表：

<table class="standard-table">

<tbody>

<tr>

<td class="header">a</td>

<td class="header">NOT a</td>

</tr>

<tr>

<td>0</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>0</td>

</tr>

</tbody>

</table>

<pre> 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
</pre>

对任一数值 x 进行按位非操作的结果为 -(x + 1)。例如，~5 结果为 -6。

与 indexOf 一起使用示例：

<pre class="brush: js">var str = 'rawr';
var searchFor = 'a';

// 这是 if (-1*str.indexOf('a') <= -1) 条件判断的另一种方法
if (~str.indexOf(searchFor)) {
  // searchFor 包含在字符串中
} else {
  // searchFor 不包含在字符串中
}

// (~str.indexOf(searchFor))的返回值
// r == -1
// a == -2
// w == -3
</pre>

## 按位移动操作符

按位移动操作符有两个操作数：第一个是要被移动的数字，而第二个是要移动的长度。移动的方向根据操作符的不同而不同。

按位移动会先将操作数转换为大端 (big-endian) 表示的 32位整数； and return a result of the same type as the left operand (?)。右操作数应当小于 32，否则只有最低 5 个字节会被使用。

### <a name="Left_shift"><< (左移)</a>

该操作符会将第一个操作数向左移动指定的位数。向左被移出的位被丢弃，右侧用 0 补充。

For example, `9 << 2` yields 36:

<pre>     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
</pre>

在数字 **x** 上左移 **y** 比特得到 **x * 2<sup>y</sup>**.

### <a name="Right_shift">>> (有符号右移)</a>

该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧。由于新的最左侧的位总是和以前相同，符号位没有被改变。所以被称作“符号传播”。

例如， `9 >> 2` 得到 2:

<pre>     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
</pre>

相比之下， `-9 >> 2` 得到 -3，因为符号被保留了。

<pre>     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
</pre>

### <a name="Unsigned_right_shift">>>> (无符号右移)</a>

该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，左侧用0填充。因为符号位变成了 0，所以结果总是非负的。（译注：即便右移 0 个比特，结果也是非负的。）

对于非负数，有符号右移和无符号右移总是返回相同的结果。例如， `9 >>> 2` 得到 2 和 `9 >> 2` 相同：

<pre>      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
</pre>

但是对于负数却不尽相同。 `-9 >>> 2` 产生 1073741821 这和 `-9 >> 2` 不同：

<pre>      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
</pre>

## 示例

### 例子：标志位与掩码

位运算经常被用来创建、处理以及读取标志位序列——一种类似二进制的变量。虽然可以使用变量代替标志位序列，但是这样可以节省内存（1/32）。

例如，有 4 个标志位：

*   标志位 A：我们有 ant
*   标志位 B：我们有 bat
*   标志位 C：我们有 cat
*   标志位 D：我们有 duck

标志位通过位序列 DCBA 来表示。当一个位被置位 (set) 时，它的值为 1 。当被清除 (clear) 时，它的值为 0 。例如一个变量 `flags` 的二进制值为 0101：

<pre class="brush: js">var flags = 5;   // 二进制 0101
</pre>

这个值表示：

*   标志位 A 是 true （我们有 ant）；
*   标志位 B 是 false （我们没有 bat）；
*   标志位 C 是 true （我们有 cat）；
*   标志位 D 是 false （我们没有 duck）；

因为位运算是 32 位的， 0101 实际上是 00000000000000000000000000000101。因为前面多余的 0 没有任何意义，所以他们可以被忽略。

掩码 (bitmask) 是一个通过与/或来读取标志位的位序列。典型的定义每个标志位的原语掩码如下：

<pre class="brush: js">var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
</pre>

新的掩码可以在以上掩码上使用逻辑运算创建。例如，掩码 1011 可以通过 FLAG_A、FLAG_B 和 FLAG_D 逻辑或得到：

<pre class="brush: js">var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011
</pre>

某个特定的位可以通过与掩码做逻辑与运算得到，通过与掩码的与运算可以去掉无关的位，得到特定的位。例如，掩码 0100 可以用来检查标志位 C 是否被置位：

<pre class="brush: js">// 如果我们有 cat
if (flags & FLAG_C) { // 0101 & 0100 => 0100 => true
   // do stuff
}
</pre>

一个有多个位被置位的掩码表达任一/或者的含义。例如，以下两个表达是等价的：

<pre class="brush: js">// 如果我们有 bat 或者 cat 至少一个
// (0101 & 0010) || (0101 & 0100) => 0000 || 0100 => true
if ((flags & FLAG_B) || (flags & FLAG_C)) {
   // do stuff
}
</pre>

<pre class="brush: js">// 如果我们有 bat 或者 cat 至少一个
var mask = FLAG_B | FLAG_C; // 0010 | 0100 => 0110
if (flags & mask) { // 0101 & 0110 => 0100 => true
   // do stuff
}
</pre>

可以通过与掩码做或运算设置标志位，掩码中为 1 的位可以设置对应的位。例如掩码 1100 可用来设置位 C 和 D：

<pre class="brush: js">// 我们有 cat 和 duck
var mask = FLAG_C | FLAG_D; // 0100 | 1000 => 1100
flags |= mask;   // 0101 | 1100 => 1101
</pre>

可以通过与掩码做与运算清除标志位，掩码中为 0 的位可以设置对应的位。掩码可以通过对原语掩码做非运算得到。例如，掩码 1010 可以用来清除标志位 A 和 C ：

<pre class="brush: js">// 我们没有 ant 也没有 cat
var mask = ~(FLAG_A | FLAG_C); // ~0101 => 1010
flags &= mask;   // 1101 & 1010 => 1000
</pre>

如上的掩码同样可以通过 `~FLAG_A & ~FLAG_C` 得到（德摩根定律）：

<pre class="brush: js">// 我们没有 ant 也没有 cat
var mask = ~FLAG_A & ~FLAG_C;
flags &= mask;   // 1101 & 1010 => 1000
</pre>

标志位可以使用异或运算切换。所有值为 1 的为可以切换对应的位。例如，掩码 0110 可以用来切换标志位 B 和 C：

<pre class="brush: js">// 如果我们以前没有 bat ，那么我们现在有 bat
// 但是如果我们已经有了一个，那么现在没有了
// 对 cat 也是相同的情况
var mask = FLAG_B | FLAG_C;
flags = flags ^ mask;   // 1100 ^ 0110 => 1010
</pre>

最后，所有标志位可以通过非运算翻转：

<pre class="brush: js">// entering parallel universe...
flags = ~flags;    // ~1010 => 0101
</pre>

### 转换片段

将一个二进制数的 `[String](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "/en-US/docs/JavaScript/Reference/Global_Objects/String")` 转换为十进制的 `[Number](/zh-CN/docs/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number")`:

<pre class="brush: js">var sBinString = "1011";
var nMyNumber = parseInt(sBinString, 2);
alert(nMyNumber); // 打印 11
</pre>

将一个十进制的 `[Number](/zh-CN/docs/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number")` 转换为二进制数的 `[String](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "/en-US/docs/JavaScript/Reference/Global_Objects/String")`:

<pre class="brush: js">var nMyNumber = 11;
var sBinString = nMyNumber.toString(2);
alert(sBinString); // 打印 1011
</pre>

### 自动化掩码创建

如果你需要从一系列的 `[Boolean](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean "/en-US/docs/JavaScript/Reference/Global_Objects/Boolean")` 值创建一个掩码，你可以：

<pre class="brush: js">function createMask () {
  var nMask = 0, nFlag = 0, nLen = arguments.length > 32 ? 32 : arguments.length;
  for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
  return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true); // 4, i.e.: 0100
var mask3 = createMask(true); // 1, i.e.: 0001
// etc.

alert(mask1); // 打印 11
</pre>

### 逆算法：从掩码得到布尔数组

如果你希望从掩码得到得到 `[Boolean](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean "/en-US/docs/JavaScript/Reference/Global_Objects/Boolean")` `[Array](/zh-CN/docs/Mozilla/Tech/XPCOM/Array "/en-US/docs/JavaScript/Reference/Global_Objects/Array")` ：

<pre class="brush: js">function arrayFromMask (nMask) {
  // nMask 必须介于 -2147483648 和 2147483647 之间
  if (nMask > 0x7fffffff || nMask < -0x80000000) { 
    throw new TypeError("arrayFromMask - out of range"); 
  }
  for (var nShifted = nMask, aFromMask = []; nShifted; 
       aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
  return aFromMask;
}

var array1 = arrayFromMask(11);
var array2 = arrayFromMask(4);
var array3 = arrayFromMask(1);

alert("[" + array1.join(", ") + "]");
// 打印 "[true, true, false, true]", i.e.: 11, i.e.: 1011
</pre>

你可以同时测试以上两个算法……

<pre class="brush: js">var nTest = 19; // our custom mask
var nResult = createMask.apply(this, arrayFromMask(nTest));

alert(nResult); // 19
</pre>

仅仅由于教学目的 （因为有 `[Number.toString(2)](/zh-CN/docs/JavaScript/Reference/Global_Objects/Number "/en-US/docs/JavaScript/Reference/Global_Objects/Number/toString")` 方法），我们展示如何修改 arrayFromMask 算法通过 Number 返回二进制的 String，而非 Boolean Array：

<pre class="brush: js">function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

var string1 = createBinaryString(11);
var string2 = createBinaryString(4);
var string3 = createBinaryString(1);

alert(string1);
// 打印 00000000000000000000000000001011, i.e. 11
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
<small lang="zh-CN">Bitwise NOT operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.8)  
[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Bitwise shift operators</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.7)  
[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Binary bitwise operators</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.10)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Bitwise NOT operator</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-bitwise-not-operator)  
[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Bitwise shift operators</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-bitwise-shift-operators)  
[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Binary bitwise operators</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-binary-bitwise-operators)</td>

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

<td>[Bitwise NOT (`~`)](#Bitwise_NOT)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise AND (`&`)](#Bitwise_AND)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise OR (`|`)](#Bitwise_OR)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise XOR (`^`)](#Bitwise_XOR)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Left shift (`<<`)](#Left_shift)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Right shift (`>>`)](#Right_shift)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Unsigned right shift (`>>>`)](#Unsigned_right_shift)</td>

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

<td>[Bitwise NOT (`~`)](#Bitwise_NOT)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise AND (`&`)](#Bitwise_AND)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise OR (`|`)](#Bitwise_OR)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Bitwise XOR (`^`)](#Bitwise_XOR)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Left shift (`<<`)](#Left_shift)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Right shift (`>>`)](#Right_shift)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>[Unsigned right shift (`>>>`)](#Unsigned_right_shift)</td>

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

*   [Logical operators](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)