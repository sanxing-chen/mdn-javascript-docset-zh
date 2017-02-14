## 消息

<pre class="syntaxbox">TypeError: variable "x" redeclares argument (Firefox)
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 警告仅仅在 [严格模式下](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 出现。

## 哪里有问题？

函数参数中出现了名称相同的变量，之后在函数体中使用 `[var](/en-US/docs/Web/JavaScript/Reference/Statements/var)` 赋值语句重新声明。 这可能是一个命名冲突，所以 JavaScript 警告了它。

这个错误只在 [严格模式的代码](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 中作为警告出现。在非严格模式的代码中，重新声明会被忽略。

## 示例

### 无效情况

这个例子中，变量 `arg` 重新声明了参数。

<pre class="brush: js example-bad">"use strict";

function f(arg) { 
  var arg = "foo"; 
}
</pre>

### 无效情况

为了修复警告，`[var](/en-US/docs/Web/JavaScript/Reference/Statements/var)` 语句应该被移除，因为变量已经存在。或者，你可以重命名函数参数或者变量名称。

<pre class="brush: js example-good">"use strict";

function f(arg) {
  arg = "foo";
}
</pre>

## 另见

*   [严格模式](/en-US/docs/Web/JavaScript/Reference/Strict_mode)