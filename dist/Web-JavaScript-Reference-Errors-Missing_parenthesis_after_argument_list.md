## 消息

<pre class="syntaxbox">SyntaxError: missing ) after argument list
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.").

## 什么地方出错了?

有一个函数在调用时出现错误。这可能是一个错误，丢失运算符或者转义字符等。

## 示例

因为没有使用 ”+“ 操作符来连接字符串，JavaScript 认为 `log` 函数的参数的值只是 “`PI: ”，在这种情况下，它应该用一个右括号作为结束。`

<pre class="brush: js example-bad">console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
</pre>

你可以正确的调用 `log` 函数通过加上 ”+“ 操作符。

<pre class="brush: js example-good">console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"</pre>

## 相关页面

*   [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)