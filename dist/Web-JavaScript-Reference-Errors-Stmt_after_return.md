## 信息

<pre class="syntaxbox">Warning: unreachable code after return statement (Firefox)
</pre>

## 错误类型

警告

## 什么地方出错了?

在`return`语句之后的不可达的语句会在下列情形中产生：

*   在[`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return "return 语句终止函数的执行，并返回一个指定的值给函数调用者。") 语句之后出现其他表达式；
*   在省略分号的return语句之后直接接一个表达式。

当一个表达式出现在一个有效的 `return `表达式之后时，会出现这个警告，用以说明在 `return `语句之后的表达式不可达，即这条语句之后的表达式永远不会运行。

为什么我需要在 `return `语句之后添加分号？在省略分号的 `return` 语句之后，开发者想要终止当前函数的执行还是返回return之后表达式的结果的意图是不明确的。这个警告表明这种情况下 `return` 语句的表述具有二义性。

当在省略分号的return语句之后出现下列语句时，不会出现警告：

*   [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")
*   [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")
*   [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var "var声明了一个变量，并且可以同时初始化该变量。")
*   [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")

## 示例

### 无效的例子

<pre class="brush: js example-bad">function f() {
  var x = 3;
  x += 4;
  return x;   // `return` 语句立即退出当前方法
  x -= 3;     // 因而该语句从不会执行，即该语句为不可达语句
}

function f() {
  return     // 这条语句被视作 `return;`
    3 + 4;   // 因而此处该函数已经返回，该语句永不会执行
}
</pre>

### 合适的例子

<pre class="brush: js example-good">function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK: 执行完成所有语句之后返回
}

function f() {
  return 3 + 4  // OK: 省略分号的 `return` 语句与执行的表达式在同一行
}
</pre>

## 相关页面

*   [Automatic Semicolon Insertion](/zh-CN/docs/Web/JavaScript/Reference/Statements/return#Automatic_Semicolon_Insertion "return 语句终止函数的执行，并返回一个指定的值给函数调用者。")