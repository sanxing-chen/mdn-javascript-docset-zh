## 消息

<pre class="syntaxbox">TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #<Object> (Chrome)
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 只出现在严格模式下。

## 哪里有问题？

尝试删除某个属性，但是这个属性是 [不可配置的](/en-US/docs/Web/JavaScript/Data_structures#Properties)。`configurable`属性控制是否该属性能从对象上删除，以及它的属性（除了`writable`）能否被修改。

这个错误仅仅在[严格模式](/en-US/docs/Web/JavaScript/Reference/Strict_mode)下出现。在非严格模式下，这个操作返回 `false`。

## 示例

不可配置的属性并不特别常见，但是它们可以使用 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 或 [`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。") 创建。

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
delete obj.score;  // TypeError

'use strict';
var obj = {};
Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
delete obj.foo;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
</pre>

也有一些内建于 JavaScript 的不可配置属性。你可能会尝试删除一个数学常量。

<pre class="brush: js example-bad">'use strict';
delete Math.PI;  // TypeError</pre>

## 另见

*   [delete operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。")