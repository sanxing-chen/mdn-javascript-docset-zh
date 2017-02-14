## 报错消息

<pre class="syntaxbox">TypeError: "x" is read-only (Firefox) //格式错误:"x"只读。(x可以代表任意值)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
//格式错误:对象的x属性是只读的不能设置 （chrome）
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
</pre>

## 错误格式

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")

## 哪里出错了?

全局变量或对象属性被设置为只读 (专业点讲，就是这条数据属性禁止写入.)

这条错误值发生在[strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode)(俗称严格模式). 正常情况下，是没有报错的。

## 例如

### 无效例子（也就是下面这么做会导致报这种错）

只读属性不能直接创建, 但我们可以通过[`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 或 [`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。")设置.

<pre class="brush: js example-bad">"use strict";
var obj = Object.freeze({name: "Elsa", score: 157});
obj.score = 0;  // TypeError

"use strict";
Object.defineProperty(this, "LUNG_COUNT", {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

"use strict";
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError

还有几个JavaScript内置属性. 如果你尝试修改一个常量.

"use strict";
Math.PI = 4;  // TypeError</pre>

傻了吧，报错了

`全局变量undefined也是只读的`, 所以你不能忽视臭名昭著的"undefined is not a function"错误:

<pre class="brush: js example-bad">"use strict";
undefined = function () {};  // TypeError: "undefined" is read-only
</pre>

### 下面这样都是有效，不报错的

<pre class="brush: js example-good">"use strict";
var obj = Object.freeze({name: "Score", points: 157});
obj = {name: obj.name, points: 0};   // 用一个新对象替换原来的对象(其实就是更改了对象的指针)

"use strict";
var LUNG_COUNT = 2;  // 
LUNG_COUNT = 3;  // 
</pre>

## 参见

*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。")
*   ["Which animals have three lungs?" on answers.com](https://www.answers.com/Q/Which_animals_have_three_lungs)
*   [Klingons](https://aliens.wikia.com/wiki/Klingon) (another answer to that query)