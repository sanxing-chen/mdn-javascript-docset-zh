## 信息

<pre class="syntaxbox">SyntaxError: missing ; before statement
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.").

## 哪里出错了?

某个地方丢失了一个(;)。 [JavaScript 语句](/en-US/docs/Web/JavaScript/Reference/Statements)必须以分号结束。 有一些是由 [自动分号插入(ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) 的使用所影响到的， 但在这种情况下，你需要提供一个分号，以便于JavaScript可以将源代码解析正确。然而，通常情况下，这个错误只是另一个错误一个导致的，如不正确转义字符串，使用var的错误。你也可能有太多的括号的地方。当出现此错误时，仔细检查语法。

## 例子

转义字符串

这个错误可能发生不正确时容易转义字符串JavaScript引擎是希望你的字符串的末尾已经。例如:

<pre class="brush: js example-bad">var foo = 'Tom's bar';
// SyntaxError: missing ; before statement</pre>

你可以用双引号，或者用\转义：

<pre class="brush: js example-good">var foo = "Tom's bar";
var foo = 'Tom\'s bar';
</pre>

### 用var声明属性

你不能将带有变量声明的对象或数组的属性用var来声明。

<pre class="brush: js example-bad">var obj = {};
var obj.foo = "hi"; // SyntaxError missing ; before statement

var array = [];
var array[0] = "there"; // SyntaxError missing ; before statement
</pre>

而是省略掉var关键词：

<pre class="brush: js example-good">var obj = {};
obj.foo = "hi";

var array = [];
array[0] = "there";
</pre>

## 参考

*   [自动分号插入(ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) 
*   [JavaScript 语句](/en-US/docs/Web/JavaScript/Reference/Statements)