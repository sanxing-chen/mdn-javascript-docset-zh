## 错误信息

<pre class="syntaxbox">RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
</pre>

## 错误类型

[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")

## 什么地方出错了？

 [`String.fromCodePoint()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "String.fromCodePoint()是String的静态方法，该方法使用指定的unicode参数返回一个primitive的字符串。与fromCharCode功能类似，但是支持的Unicode字符更全，但是浏览器支持情况不是太好，目前ie以及safari还不支持。另外，性能并没有fromCharCode快。因为是ES6当中的新定义的特性，所以目前还不适合放到正式产品环境中去使用。") 这个方法只能接受有效的码位（code point） 。

码位（ [code point](https://en.wikipedia.org/wiki/Code_point)）是组成码空间（或代码页）的数值，范围是 0 到 0x10FFFF。

 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")，负整数（-1），非整数（3.14），或编号大于0x10FFFF (1114111) 的字符，无法使用该方法。

## 范例

### 无效的例子

<pre class="brush: js example-bad">String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError</pre>

### 有效的例子

<pre class="brush: js example-good">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
</pre>

## 相关链接

*   [`String.fromCodePoint()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "String.fromCodePoint()是String的静态方法，该方法使用指定的unicode参数返回一个primitive的字符串。与fromCharCode功能类似，但是支持的Unicode字符更全，但是浏览器支持情况不是太好，目前ie以及safari还不支持。另外，性能并没有fromCharCode快。因为是ES6当中的新定义的特性，所以目前还不适合放到正式产品环境中去使用。")