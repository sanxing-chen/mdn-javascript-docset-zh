**`function*`**`关键字``可以在表达式内部定义一个生成器函数。`

## 语法

<pre class="syntaxbox">function* [_name_]([_param1_[, _param2[_, ..., _paramN_]]]) {
   _statements_
}</pre>

### 参数

<dl>

<dt>`name`</dt>

<dd>函数名。在声明_匿名函数_时可以省略。函数名称只是函数体中的一个本地变量。</dd>

<dt>`paramN`</dt>

<dd>传入函数的一个参数名。一个函数最多有255个参数。</dd>

<dt>`statements`</dt>

<dd>函数体。</dd>

</dl>

## 描述

`function*表达式和`[`function* 声明`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")比较相似，并具有几乎相同的语法。`function*表达式和function*声明之间主要区别就是_函数名_，即在创建_匿名_函数时，`function*表达式可以省略函数名。阅读[`函数`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")章节了解更多信息。

## 示例

下面的示例定义了一个未命名的生成器函数并把它赋值给`x。函数产出(yield)它的传入参数的平方：`

<pre class="brush: js">var x = function*(y) {
   yield y * y;
};
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">function*</small>](http://www.ecma-international.org/ecma-262/6.0/#)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

</tbody>

</table>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[26.0](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`yield*`</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[27.0](/en-US/Firefox/Releases/27 "Released on 2014-02-04.") (27.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>26.0 (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`yield*`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>27.0 (27.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!") 对象
*   [The Iterator protocol](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol)
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")
*   [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield* "在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!") 对象
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")