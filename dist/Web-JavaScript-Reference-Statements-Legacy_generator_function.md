<div class="warning">legacy generator 函数实验性质的特性，在某些点上会被修改。为了未来面世的使用 ， 考略使用 [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。").</div>

**legacy generator 函数语句** 使用特殊参数声明legacy generator函数。

你也可以使用 构造[`函数`](/zh-CN/docs/Web/JavaScript/Reference/函数 "此页面仍未被本地化, 期待您的翻译!")定义函数 ，使用`functionBody` 和至少一个 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/运算符/yield "此页面仍未被本地化, 期待您的翻译!") 表达式，和[legacy generator 函数表达式](/zh-CN/docs/Web/JavaScript/Reference/运算符/Legacy_generator_function "此页面仍未被本地化, 期待您的翻译!").

## Syntax语法

<pre class="syntaxbox">function _name_([_param_,[, _param_,[..., _param_]]]) {
   [_statements_]
}
</pre>

<dl>

<dt>`name`</dt>

<dd>函数名。</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>传入函数的参数名，一个函数最多有255个参数。</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>The statements which comprise the body of the function. This should contain at least one [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") expression.</dd>

</dl>

## Description描述

An overview of the usage is available on the [Iterators and Generators](/en-US/docs/JavaScript/Guide/Iterators_and_Generators) page.

## Browser compatibility浏览器兼容性

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

## See also参考

*   [`Generator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator "这个生成器对象是由一个生成器函数 generator function 返回的。并且它是同时遵守 The iterable protocol 可遍历协议和The iterator protocol 迭代器模式协议 .")
*   [The legacy generator function expression](/en-US/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function)
*   [The legacy Iterator protocol](/en-US/docs/Web/JavaScript/Guide/The_legacy_Iterator_protocol)
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")
*   [Functions and function scope](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope)
*   [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")
*   [The Iterator protocol](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol)