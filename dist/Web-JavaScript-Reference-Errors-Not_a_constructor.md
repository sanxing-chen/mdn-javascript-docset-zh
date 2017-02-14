## 信息

<pre class="syntaxbox">TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")

## 哪里出错了?

是因为尝试将不是构造器的对象或者变量来作为构造器使用。参考 [constructor](/en-US/docs/Glossary/constructor "constructor: A constructor belongs to a particular class object that is instantiated. The constructor initializes this object and can provide access to its private information. The concept of a constructor can be applied to most object-oriented programming languages. Essentially, a constructor in JavaScript is usually declared at the instance of a class.") 或者 [`new` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来了解什么是构造器。

有很多的全局对象比如 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")、[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 等等都是可以使用 `new` 操作符的构造器。但是有一些全局对象并不是，且其属性和方法都是[静态](https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods)的。下面的 JavaScript 标准内置对象都不是构造器：[`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math "Math 是一个内置对象， 为数学常量和数学函数提供了属性和方法，而不是一个函数对象。")，[`JSON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON 对象包含了两个方法，一是解析 JavaScript Object Notation (JSON)，二是将值转换为 JSON。这个对象本身不能被调用或者作为构造函数，除了它的这两个方法属性外 JSON 对象本身并没有什么有用的功能。")，[`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。")，[`Reflect`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect "Reflect 对象提供了若干个能对任意对象进行某种特定的可拦截操作（interceptable operation）的方法。")，[`Intl`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。")，[`SIMD`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SIMD "SIMD (pronounced "sim-dee") is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.")，[`Atomics`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics "Atomics 对象以静态方法的形式提供原子操作。这些操作使用“ SharedArrayBuffer”对象。")。

[Generator functions](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) 也不能作为构造器来使用。

## 示例

### 无效的

<pre class="brush: js example-bad">var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

### 一个构造器

假设你想为汽车创建一个对象类型。 你希望此类型的对象被称为 `car`，并且您希望它具有make，model 和 year 属性。 为此，你编写以下函数：

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

现在你可以创建一个名为 `mycar` 的对象，如下所示:

<pre class="brush: js">var mycar = new Car("Eagle", "Talon TSi", 1993);</pre>

### 关于 Promises 

当返回了一个 immediately-resolved 或者 immediately-rejected Promise 的时候，你根本不需要去创建、操作一个新的 Promise 对象。

这是不合法的（[Promise constructor](/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor) 被错误的调用了）且会抛出一个 错误 `TypeError: this is not a constructor` exception:

<pre class="brush: js example-bad">return new Promise.resolve(true);
</pre>

使用[ Promise.resolve()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) 或者 [Promise.reject()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) 静态方法来代替：

<pre class="brush: js">// 这是合法的，但是没必要这么长：
return new Promise((resolve, reject) => { resolve(true); })

// 用静态方法来代替:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

## 相关链接

*   [constructor](/en-US/docs/Glossary/constructor "constructor: A constructor belongs to a particular class object that is instantiated. The constructor initializes this object and can provide access to its private information. The concept of a constructor can be applied to most object-oriented programming languages. Essentially, a constructor in JavaScript is usually declared at the instance of a class.")
*   [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new)