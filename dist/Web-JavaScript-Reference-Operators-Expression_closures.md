<div class="warning">**非标准，不要使用！**  
闭包表达式语法是废弃的 SpiderMonkey 特定的特性，并且[即将被移除](https://bugzilla.mozilla.org/show_bug.cgi?id=1083458)。为了长远使用，考虑使用[箭头函数](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。</div>

表达式闭包是定义简单函数的一种便捷方式。

## 语法

<pre class="syntaxbox">function [_name_]([_param1_[, _param2[_, ..., _paramN_]]])
   _expression_
</pre>

### 参数

<dl>

<dt>`name`</dt>

<dd>函数名。函数名可以省略不写，称为匿名函数。函数名仅在函数体有效。</dd>

<dt>`paramN`</dt>

<dd>形参名。一个函数最多可以有255个参数。</dd>

<dt>`expression`</dt>

<dd>构成函数体的表达式。</dd>

</dl>

## 描述

这一附加特性只是编写简单函数的快捷方式，让语言更类似通常的 [Lambda 标记](http://en.wikipedia.org/wiki/Lambda_calculus#Lambda_calculus_and_programming_languages)。

JavaScript 1.7 以上:

<pre class="brush: js">function(x) { return x * x; }</pre>

JavaScript 1.8:

<pre class="brush: js">function(x) x * x</pre>

该语法支持省略花括号和'return'语句。使用这种编码的目的只是为了在句法上使得代码更加简化，但除此之外没有其他好处。

## 示例

一种绑定事件监听器的便捷方式：

<pre class="brush: js"> document.addEventListener("click", function() false, true);
</pre>

在 JavaScript 1.6 中的一些数组函数中使用该标记：

<pre class="brush: js">elems.some(function(elem) elem.type == "text");
</pre>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## Gecko 特定注解

自 Gecko / SpiderMonkey 45 (Firefox 45 / Thunderbird 45 / SeaMonkey 2.42)起，使用表达式闭包时会添加控制台警告（[bug 995610](https://bugzilla.mozilla.org/show_bug.cgi?id=995610 "FIXED: Add console warnings for expression closures (shorthand function syntax)")）。

## 另见

*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")