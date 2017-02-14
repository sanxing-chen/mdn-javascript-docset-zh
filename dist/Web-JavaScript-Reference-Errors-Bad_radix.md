## 消息

<pre class="syntaxbox">RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
RangeError: toString() radix argument must be between 2 and 36 (Chrome)
</pre>

## 错误类型

[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")

## 发生了什么错误？

在使用[`Number.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "toString() 方法返回指定 Number 对象的字符串表示形式。")方法时使用了可选的基数参数，参数应该为一个2到36之间的整型(数字)，返回对应数字的转换为字符串时表示的该进制对应的数字量。

为什么小于36呢？因为一个大于(包含等于)10的基数在使用时需要用一个字母表字符来代替。不能超过36是因为拉丁字母表中只有26个字符。

你可能会用到以下的常见基数：

*   2 for [二进制](https://en.wikipedia.org/wiki/Binary_number),
*   8 for [八进制](https://en.wikipedia.org/wiki/Octal),
*   10 for [十进制](https://en.wikipedia.org/wiki/Decimal),
*   16 for [十六进制](https://en.wikipedia.org/wiki/Hexadecimal).

## 示例

### 错误示例

<pre class="brush: js example-bad">(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString("MM-dd-yyyy");
</pre>

### 正确示例

<pre class="brush: js example-good">(42).toString(2);     // "101010" (binary)
(13).toString(8);     // "15"     (octal)
(0x42).toString(10);  // "66"     (decimal)
(100000).toString(16) // "186a0"  (hexadecimal)
</pre>

## 参考

*   [`Number.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "toString() 方法返回指定 Number 对象的字符串表示形式。")