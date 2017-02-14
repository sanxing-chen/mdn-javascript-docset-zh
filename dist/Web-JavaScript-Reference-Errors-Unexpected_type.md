## 消息

<pre class="syntaxbox">TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。").

## 什么地方出错了?

出现了与期望不符的类型。 这个错误常常由 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") 值引起。

此外，某些方法，例如 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create "Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。") 或 [`Symbol.keyFor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor "Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键。")， 要求必须提供特定类型的参数。

## 示例

### 错误情形

<pre class="brush: js example-bad">// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar"
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

### 解决方法

要解决空指针以及 `undefined` 或 `null` 值的问题， 你可以使用 [typeof](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) 操作符， 例如：

<pre class="brush: js">if (typeof foo !== 'undefined') {
  // Now we know that foo is defined, we are good to go.
}</pre>

## 相关页面

*   [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")
*   [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")