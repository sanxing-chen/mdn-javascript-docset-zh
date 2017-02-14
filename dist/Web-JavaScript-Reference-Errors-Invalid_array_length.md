## 错误信息

<pre class="syntaxbox">RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
</pre>

## 错误类型

[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")

## 什么地方出错了?

无效的数组错误长度通常会在以下情形中出现：

*   当创建一个长度为负数或者长度大于等于2<sup>32</sup> 的[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 或者 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。") 时。
*   当设置 [`Array.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性为负数或者长度大于等于2<sup>32</sup> 时。

为什么 Array（数组） 和 ArrayBuffer（数组缓冲区） 的长度会受到限制？因为 Array 和 ArrayBuffer 的 length（长度） 属性被定义为一个32位无符号整形（unsigned 32-bit integer）的值，所以它只能存储 0 - 2<sup>32</sup>-1 之间的数。

当你使用构造函数来创建一个数组的时候，你可能想使用字面值的形式，第一个参数会被解释为数组的长度。

或者说，你想要在设置数组之前确定它的长度，或把它作为一个构造函数的参数。

## 示例

### 错误的示例

<pre class="brush: js example-bad">new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // 将 length 属性的值设置为 -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // 将 length 属性的值设置为 2^32
</pre>

### 正确的示例

<pre class="brush: js example-good">[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);   

// 0xffffffff 是 2^32 - 1 的 十六进制 表示方式
// 它也可以被写作 (-1 >>> 0)
</pre>

## 相关页面

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Array.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")