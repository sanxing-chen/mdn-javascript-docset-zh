## 错误信息

<pre class="syntaxbox">TypeError: null has no properties
TypeError: undefined has no properties
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。").

## 哪里出错了?

 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") 和 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")中，没有你需要的属性。

## 例子

<pre class="brush: js example-bad">null.foo;
// 错误类型: null没有这个属性

undefined.bar;
// 错误类型: undefined没有这个属性
</pre>

## 参考

*   [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")
*   [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")