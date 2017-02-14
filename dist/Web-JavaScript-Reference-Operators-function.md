`function` 关键字可用来在一个表达式中定义一个函数。

## 语法

<pre class="syntaxbox">function [_name_]([_param1_[, _param2[_, ..., _paramN_]]]) {
   _statements_
}</pre>

### 参数

<dl>

<dt>`name`</dt>

<dd>函数名称。可被忽略，此种情况下的函数是匿名函数（_anonymous_）。 函数名称只是函数体中的一个本地变量。</dd>

<dt>`paramN`</dt>

<dd>被传递给函数的一个参数名称。一个函数至多拥有 255 个参数。</dd>

<dt>`statements`</dt>

<dd>构成函数体的语句。</dd>

</dl>

## 描述

函数表达式（function expression）非常类似于函数声明（function statement）<span style="line-height: 1.5;">（详情查看</span>[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)<span style="line-height: 1.5;">）</span><span style="line-height: 1.5;">，并且拥有几乎相同的语法。</span><span style="line-height: 1.5;">函数表达式与函数声明的最主要区别是函数名称（</span>_function name_<span style="line-height: 1.5;">），在函数表达式中可忽略它，从而创建匿名函数（</span>_anonymous_ <span style="line-height: 1.5;">functions）。更多信息请查看</span>[函数和函数作用域](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope)<span style="line-height: 1.5;">。</span>

## 示例

下例定义了一个未命名的函数，并把它赋值给 `x`。该函数返回它的参数的平方：

<pre class="brush: js">var x = function(y) {
   return y * y;
};
</pre>

### 命名函数表达式（Named function expression）

如果你想在函数体内部引用当前函数，则需要创建一个命名函数表达式。然后函数名称将会（且只会）作为函数体（作用域内）的本地变量。这样也可以避免使用非标准的 [arguments.callee](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/callee) 属性。

<pre class="brush: js">var math = {
  'factorial': function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
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

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">Function definition</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-13)</td>

<td>Standard</td>

<td>初始定义。JavaScript 1.5 实现。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function definition</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function defintions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")