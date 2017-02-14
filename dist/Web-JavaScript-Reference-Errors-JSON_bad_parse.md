## 信息

<pre class="syntaxbox">SyntaxError: JSON.parse: unterminated string literal
SyntaxError: JSON.parse: bad control character in string literal
SyntaxError: JSON.parse: bad character in string literal
SyntaxError: JSON.parse: bad Unicode escape
SyntaxError: JSON.parse: bad escape character
SyntaxError: JSON.parse: unterminated string
SyntaxError: JSON.parse: no number after minus sign
SyntaxError: JSON.parse: unexpected non-digit
SyntaxError: JSON.parse: missing digits after decimal point
SyntaxError: JSON.parse: unterminated fractional number
SyntaxError: JSON.parse: missing digits after exponent indicator
SyntaxError: JSON.parse: missing digits after exponent sign
SyntaxError: JSON.parse: exponent part is missing a number
SyntaxError: JSON.parse: unexpected end of data
SyntaxError: JSON.parse: unexpected keyword
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: end of data while reading object contents
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: end of data when ',' or ']' was expected
SyntaxError: JSON.parse: expected ',' or ']' after array element
SyntaxError: JSON.parse: end of data when property name was expected
SyntaxError: JSON.parse: expected double-quoted property name
SyntaxError: JSON.parse: end of data after property name when ':' was expected
SyntaxError: JSON.parse: expected ':' after property name in object
SyntaxError: JSON.parse: end of data after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property-value pair in object literal
SyntaxError: JSON.parse: property names must be double-quoted strings
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.")

## 哪里出错了?

[`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法将一个符合JSON语法的字符串解析成一个对应类型的值或对象。在解析过程中，还可以选择性的修改某些属性的原始解析值。") 会把一个字符串解析成 JSON 对象。如果字符串书写正确，那么其将会被解析成一个有效的 JSON，但是这个字符串被检测出错误语法的时候将会抛出错误。

## 示例

### `JSON.parse()` 不允许在末尾添加多余的逗号

下面两行代码都会抛出错误:

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character 
// at line 1 column 14 of the JSON data
</pre>

省略末尾多余的逗号解析 JSON 就是正确:

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');</pre>

### JSON 的属性名必须使用双引号

属性名上不能使用单引号，例如： 'foo'。

<pre class="brush: js example-bad">JSON.parse("{'foo' : 1 }");
// SyntaxError: JSON.parse: expected property name or '}' 
// at line 1 column 2 of the JSON data</pre>

取而代之，写成 "foo"：

<pre class="brush: js example-good">JSON.parse('{"foo" : 1 }');</pre>

### 前导 0 和小数点

数字不能用 0 开头，比如01，并且你的小数点后面必须跟着至少一个数字。

<pre class="brush: js example-bad">JSON.parse('{"foo" : 01 }');
// SyntaxError: JSON.parse: expected ',' or '}' after property value 
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo" : 1\. }'); 
// SyntaxError: JSON.parse: unterminated fractional number 
// at line 1 column 2 of the JSON data
</pre>

正确的写法应该是只写一个1，不书写前面的0。在小数点的后面至少要跟上一个数字:

<pre class="brush: js example-good">JSON.parse('{"foo" : 1 }');
JSON.parse('{"foo" : 1.0 }');
</pre>

## 相关链接

*   [`JSON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON 对象包含了两个方法，一是解析 JavaScript Object Notation (JSON)，二是将值转换为 JSON。这个对象本身不能被调用或者作为构造函数，除了它的这两个方法属性外 JSON 对象本身并没有什么有用的功能。")
*   [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法将一个符合JSON语法的字符串解析成一个对应类型的值或对象。在解析过程中，还可以选择性的修改某些属性的原始解析值。")
*   [`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 符合JSON语法的 字符串。若转换的函数被指定，则被序列化的值的每个属性都会经过该函数的转换和处理；若转换的数组被指定，只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。")