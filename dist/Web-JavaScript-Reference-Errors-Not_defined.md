## 错误信息

<pre class="syntaxbox">ReferenceError: "x" is not defined
</pre>

## 错误类型

[`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。").

## 什么地方出错了?

在某些地方引用一个不存的的变量的时候。当你使用变量的时候，这个变量必须是已经被声明的，或者你可以确保它在你当前的脚本或作用域 ([scope](/en-US/docs/Glossary/scope "scope: The current context of execution. The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.")) 中可用。

<div class="note">

**注意:** 当你加载一个库的时候（例如 jQuery），请确保你在这个库加载完毕后再使用这个库中的变量，如“$”。将你想加载的库的 [`<script>`](/zh-CN/docs/Web/HTML/Element/script "HTML <script> 元素的作用是在HTML或XHTML文档中嵌入或引用可执行的脚本。没有async或defer属性的脚本和内联脚本会在浏览器继续解析剩余文档前被获取并立刻执行。") 标签放置在你的代码前面。

</div>

## 示例

### 变量没有被声明

<pre class="brush: js example-bad">foo.substring(1); // ReferenceError: foo is not defined
</pre>

“foo” 变量没有在任何地方呗声明。它需要是某种字符串，这样 [`String.prototype.substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring "substring() 返回字符串两个索引之间（或到字符串末尾）的子串。") 方法才可以正常工作。

<pre class="brush: js example-good">var foo = "bar";
foo.substring(1); // "ar"</pre>

### 错误的作用域

变量必须是在它当前的执行环境中可用的。在一个函数（[function](/en-US/docs/Web/JavaScript/Reference/Functions)）中定义的变量不能从这个函数外部的任何地方访问，因为这个变量的作用域仅在这个函数的内部。

<pre class="brush: js example-bad">function numbers () { 
  var num1 = 2, 
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.</pre>

然而，一个函数可用使用在它所被定义的作用域中的所有变量。换句话说，当一个函数被定义在全局作用域的时候，它可以访问所有在全局作用域中定义的变量。

<pre class="brush: js example-good">var num1 = 2,
    num2 = 3;

function numbers () {
  return num1 + num2; 
}

console.log(num1); // 2</pre>

## 相关页面

*   [Scope](/en-US/docs/Glossary/Scope "Scope: The current context of execution. The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.")
*   [Declaring variables in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
*   [Function scope in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope/en-US/docs/)