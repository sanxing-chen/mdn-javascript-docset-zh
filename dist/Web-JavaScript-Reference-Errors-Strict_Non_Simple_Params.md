## 信息

<pre class="syntaxbox">Firefox:
句法错误: "use strict" 不允许在带默认参数的函数中
句法错误: "use strict" 不允许在带rest参数的函数中
句法错误: "use strict" 不允许在带解构参数的函数中

Chrome:
句法错误: 非法的'use strict'指令,在带有非简单参数列表的函数中
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。").

## 哪里出错了?

`<font face="Open Sans, Arial, sans-serif">在函数顶部直接写了 </font>"use strict"` ，而该函数拥有以下的参数其中之一：

*   [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters "如果一个形参没有被传入对应的实参或者传入了undefined,则该形参会被赋一个默认值.")
*   [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters "剩余参数（rest parameter）允许长度不确定的实参表示为一个数组。")
*   [解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "解构赋值（destructuring assignment）语法是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。")

根据ECMAScript规范，不允许在这些函数的顶部使用“use strict”指令。

## 示例

### 函数语句

在这种情况下，函数sum具有默认参数a = 1和b = 2：

<pre class="brush: js example-bad">function sum(a=1, b=2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
</pre>

如果这个函数应该处于 [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)，并且整个脚本或封装函数也可以在严格模式下，可以移动 "use strict" 指令到函数之外:

<pre class="brush: js example-good">"use strict";
function sum(a=1, b=2) {
  return a + b;
}
</pre>

### 函数表达式

函数表达式可以使用另一种解决方法：

<pre class="brush: js example-bad">var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
</pre>

这可以转换为以下表达式：

<pre class="brush: js example-good">var sum = (function() {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
</pre>

### 箭头函数

如果箭头函数需要访问 `this`，则可以将箭头函数作为封闭函数来使用:

<pre class="brush: js example-bad">var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
</pre>

这可以转换为以下表达式：

<pre class="brush: js example-good">var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
</pre>

## 也可以看看

*   [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode "ECMAScript 5的严格模式是JavaScript中的一种限制性更强的变种方式。严格模式不是一个子集：它在语义上与正常代码有着明显的差异。不支持严格模式的浏览器与支持严格模式的浏览器行为上也不一样， 所以不要在未经严格模式特性测试情况下使用严格模式。严格模式可以与非严格模式共存，所以脚本可以逐渐的选择性加入严格模式。")
*   [函数语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters "如果一个形参没有被传入对应的实参或者传入了undefined,则该形参会被赋一个默认值.")
*   [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters "剩余参数（rest parameter）允许长度不确定的实参表示为一个数组。")
*   [解构参数](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "解构赋值（destructuring assignment）语法是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。")