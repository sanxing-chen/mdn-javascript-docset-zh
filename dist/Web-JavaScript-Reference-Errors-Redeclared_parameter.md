## 信息

<pre class="syntaxbox">SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
SyntaxError: Cannot declare a let variable twice: 'x' (WebKit)
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。")

## 哪里出错了?

某个变量名称已经作为函数参数出现了，但是又使用了 `[let](/en-US/docs/Web/JavaScript/Reference/Statements/let)` 在函数体里重声明了。在JavaScript 中不允许使用let在相同的函数或块范围内重新声明相同的变量。

## 示例

在本例中，参数 "arg" 又重新声明了：

<pre class="brush: js example-bad">function f(arg) { 
  let arg = "foo"; 
}

// SyntaxError: redeclaration of formal parameter "arg"
</pre>

如果要更改函数体中的“arg”的值，可以像下面一样，但不需要再次声明同一个变量。 换句话说：你可以省略 let 关键字。 如果要创建一个新变量，则需要将其重命名，因为其与函数参数有冲突。

<pre class="brush: js example-good">function f(arg) {
  arg = "foo";
}

function f(arg) { 
  let bar = "foo"; 
}
</pre>

## 兼容性提醒

*   在 Firefox 49 (Firefox 49 / Thunderbird 49 / SeaMonkey 2.46) 之前，会抛出的是 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") ([bug 1275240](https://bugzilla.mozilla.org/show_bug.cgi?id=1275240 "FIXED: Redeclaration of formal parameter with lexical binding should be SyntaxError"))。

## 相关

*   `[let](/en-US/docs/Web/JavaScript/Reference/Statements/let)`
*   `[const](/en-US/docs/Web/JavaScript/Reference/Statements/const)`
*   `[var](/en-US/docs/Web/JavaScript/Reference/Statements/var)`
*   [Declaring variables](/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations) in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)