## 信息

<pre class="syntaxbox">ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
</pre>

## 错误类型

  仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中出现 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。") 警告。

## 发生了什么?

在代码里赋值了一个未声明的变量。换句话说，有处没有带着 `[var](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)` 关键字的赋值。<span id="result_box" lang="zh-CN"><span>事实上已声明的和未声明的变量之间有一些差异，这可能会导致意想不到的结果，这就是为什么 JavaScript 在严格模式打印出这种错误。</span></span>

<span class="short_text" id="result_box" lang="zh-CN"><span>关于已声明和未声明的变量，其有三个注意事项：</span></span>

*   <span class="short_text" id="result_box" lang="zh-CN"><span>已声明的变量被约束在其执行上下文中</span></span><span class="short_text" lang="zh-CN"><span>。</span><span>未声明的变量总是全局的。</span></span>
*   <span class="short_text" id="result_box" lang="zh-CN"><span>已声明的变量在执行任何代码之前就创建了</span></span><span class="short_text" lang="zh-CN"><span>。未声明的变量则不存在，直到执行相关的代码。</span></span>
*   <span class="short_text" id="result_box" lang="zh-CN"><span>已声明的变量是其执行上下文（函数或全局）的不可配置属性。</span><span>而未声明的变量是可配置的（例如可以删除）。</span></span>

更多信息及例子，请参考 `[var](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)` 页面。

关于未声明变量的赋值的错误仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)里出现。在非严格模式中，这些将被忽略。

## 示例

### 无效的

在本例中，"bar" 是未声明的变量。

<pre class="brush: js example-bad">function foo() { 
  "use strict"; 
  bar = true; 
} 
foo(); // ReferenceError: assignment to undeclared variable bar
</pre>

### 有效的

为了使 "bar" 是一个已声明变量，你需要在其前面加一个 var 关键字。

<pre class="brush: js example-good">function foo() {
  "use strict";
  var bar = true;
}
foo();</pre>

## 相关

*   [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)