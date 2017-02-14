**概述**

**parseInt()** 函数将给定的字符串以指定基数（radix/base）解析成为整数。

## 语法

<pre class="syntaxbox">parseInt(_string_, _radix_);</pre>

### 参数

<dl>

<dt>`string`</dt>

<dd>要被解析的值。如果参数不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。</dd>

</dl>

<dl>

<dt>`radix`</dt>

<dd>一个2到36之间的整数值，用于指定转换中采用的基数。比如参数"10"表示使用我们通常使用的十进制数值系统。**总是指定该参数**可以消除阅读该代码时的困惑并且保证转换结果可预测。当忽略该参数时，不同的实现环境可能产生不同的结果。</dd>

</dl>

### 返回值

返回解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")。

## 描述

`parseInt` 顶级函数，没有与任何对象关联。

`parseInt` 函数将第一个参数（字符串）解析并试图返回一个整数或者`NaN`（Not a Number）。如果结果不是`NaN`，那么返回值是把第一个参数看作是radix参数指定的进制下的数，然后把它转换成十进制的整数。例如：`radix`参数为10 将会把第一个参数看作是一个数的十进制表示，8 对应八进制，16 对应十六进制，等等。基数大于 10 时，用字母表中的字母来表示大于 9 的数字。例如十六进制中，使用 A 到 F。

如果 `parseInt` 遇到了不属于`radix`参数所指定的基数中的字符那么该字符和其后的字符都将被忽略。接着返回已经解析的整数部分。`parseInt` 将截取整数部分。开头和结尾的空白符允许存在，会被忽略。

在没有指定基数，或者基数为 0 的情况下，JavaScript 作如下处理：

*   如果字符串 `string` 以"0x"或者"0X"开头, 则基数是16 (16进制).
*   如果字符串 `string` 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决定。<span style="background-color: #ffffff; color: #4d4e53; font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 19.0909080505371px;">ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，**永远都要明确给出radix参数的值**。</span>
*   如果字符串 `string` 以其它任何值开头，则基数是10 (十进制)。

如果第一个字符不能被转换成数字，`parseInt`返回`NaN`。

算术上， `NaN` 不是任何一个进制下的数。 你可以调用[`isNaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。") 来判断 `parseInt` 是否返回 `NaN`。`NaN` 参与的数学运算其结果总是 `NaN`。

将整型数值以特定基数转换成它的字符串值可以使用 `intValue.toString(radix)`.

## 示例

### 例子：使用 `parseInt`

以下例子均返回15:

<pre class="brush: js">parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
</pre>

以下例子均返回 `NaN`:

<pre class="brush: js">parseInt("Hello", 8); // Not a number at all
parseInt("546", 2);   // Digits are not valid for binary representations
</pre>

以下例子均返回 -15：

<pre class="brush: js">parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10);
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);</pre>

下例中也全部返回 17，因为输入的 `string` 参数以 "`0x`" 开头时作为十六进制数字解释，而第二个参数假如经过 Number 函数转换后为 0 或 `NaN`，则将会忽略。

<pre class="brush: js">parseInt("0x11", 16);
parseInt("0x11", 0);
parseInt("0x11");
</pre>

下面的例子返回 `224`

<pre class="brush: js">parseInt("0e0",16);</pre>

## 没有指定 `radix` 参数时的八进制解析

尽管 ECMAScript 3 已经不赞成这种做法，且 ECMAScript 5 已经禁止了这种做法，但是仍然有很多实现环境仍然把以 0 开头的数值字符串（numeric string）解释为一个八进制数。下面的例子可能返回八进制的结果，也可能返回十进制的结果。**总是指定一个基数（radix）可以避免这种不可靠的行为。**

<pre class="brush: js">parseInt("0e0"); // 0
parseInt("08"); // 0, '8' is not an octal digit.
</pre>

### ECMAScript 5 移除了八进制解析

ECMAScript 5 规范不再允许`parseInt`函数的<span style="line-height: 19.0909080505371px;">实现环境把以`0`字符开始的字符串作为八进制数值</span>。ECMAScript 5 陈述如下：

The `parseInt` function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or `0`, it is assumed to be `10` except when the number begins with the character pairs `0x` or `0X`, in which case a radix of 16 is assumed. If radix is `16`, number may also optionally begin with the character pairs `0x` or `0X`.

这与<span style="line-height: 19.0909080505371px;">ECMAScript 3有所不同，ECMAScript 3仅仅是不提倡这种做法但并没有禁止这种做法。</span>

直至2013年，很多实现环境并没有采取新的规范所规定的做法, 而且由于必须兼容旧版的浏览器，所以**永远都要明确给出radix参数的值.**

## 一个更严格的解析函数

有时采用一个更严格的方法来解析整型值很有用。此时可以使用正则表达式：

<pre class="brush: js">filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th>规范版本</th>

<th>规范状态</th>

<th>注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">parseInt</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">parseInt</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-parseint-string-radix)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

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

*   [`parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat "parseFloat()方法将参数中指定的字符串解析成为一个浮点数字并返回.")
*   [`Number.parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat "Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。")
*   [`Number.parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt "Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。")
*   [`isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。")
*   [`Number.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "toString() 方法返回指定 Number 对象的字符串表示形式。")
*   [`Object.valueOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "valueOf() 方法返回指定对象的原始值。")