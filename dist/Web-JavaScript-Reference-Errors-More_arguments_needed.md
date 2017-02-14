## 信息

<pre class="syntaxbox">TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。").

## 哪里出错了?

调用函数的时候出现了错误。需要提供更多的参数。

## 示例

[`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create "Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。") 方法要求至少有一个参数，而 [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型设置为另一个对象或者null(既对象的[[Prototype]]内部属性).") 方法要求至少有两个参数：

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
</pre>

你可以将 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") 设置为原型：

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

## 相关

*   [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)