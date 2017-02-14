## 信息

<pre class="syntaxbox">ReferenceError: reference to undefined property "x" (Firefox)
</pre>

## 错误类型

仅在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 下出现 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。") 警告。

## 哪里出错了?

脚本尝试去访问一个不存在的对象属性。[property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 页面描述了两种访问属性的方法。

引用未定义属性的错误仅出现在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 代码中。在非严格代码中，对不存在的属性的访问将被忽略。

## 示例

### 无效的

本例中，`bar` 属性是未定义的，隐藏 `ReferenceError` 会出现。

<pre class="brush: js example-bad">"use strict"; 

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
</pre>

### 无效的

为了避免错误，您需要向对象添加 `bar` 的定义或在尝试访问 `bar` 属性之前检查 `bar` 属性的存在；一种检查的方式是使用 [`Object.prototype.hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "hasOwnProperty() 方法会返回一个布尔值，其用来判断某个对象是否含有指定的属性。") 方法。如下所示：

<pre class="brush: js example-good">"use strict";

var foo = {};

// Define the bar property

foo.bar = "moon";
console.log(foo.bar); // "moon"

// Test to be sure bar exists before accessing it

if (foo.hasOwnProperty("bar") {
  console.log(foo.bar);
}</pre>

## 相关

*   [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)