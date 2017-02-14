<div class="warning">.旧式生成器函数是一个SpiderMonkey专有特性，将在未来移除。从未来考虑，建议使用[`function* 表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")</div>

**`function`** 关键字可以用于在表达式中定义旧式的生成器函数。为使定义的函数为一个旧式的生成器函数，该函数的函数体中需要至少包含一个 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式。

## 语法

<pre class="syntaxbox">function [_name_]([_param1_[, _param2[_, ..., _paramN_]]]) {
   _statements_
}</pre>

### 参数

<dl>

<dt>`name`</dt>

<dd>函数名。 该参数可以被省略, 这种情况下将创建一个_匿名函数 (anonymous)_. 此名字仅可在函数体内部引用。</dd>

<dt>`paramN`</dt>

<dd>将被传入此函数的一个参数。一个函数可以最多拥有255个参数。</dd>

<dt>`statements`</dt>

<dd>构成函数体的表达式。在表达式中需要至少包含一个 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式。</dd>

</dl>

## 描述

关于此语法的用法说明，参见 [迭代器 (Iterators) 与生成器 (Generators)](/en-US/docs/JavaScript/Guide/Iterators_and_Generators) 页面。

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基本支持</td>

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

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基本支持</td>

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

## 相关链接

*   [`生成器 (Generator)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator "这个生成器对象是由一个生成器函数generator function 返回的。并且它是同时遵守The iterable protocol可遍历协议和The iterator protocol 迭代器模式协议 .")
*   [旧式生成器函数](/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)
*   [旧式迭代器协议](/en-US/docs/Web/JavaScript/Guide/The_legacy_Iterator_protocol)
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")
*   [函数与函数作用域](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope)
*   [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function 表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`函数`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* 表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`生成器 (Generator) 函数`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")
*   [迭代器 (Iterator) 协议 ](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol)