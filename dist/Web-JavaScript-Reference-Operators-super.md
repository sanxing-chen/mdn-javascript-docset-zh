**super** 关键字用于访问父对象上的函数。

super 属性和 super[expr] 表达式在 任何 [类](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 与  [对象字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) 的 [方法定义](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) 上都可以使用。

## 语法

<pre class="syntaxbox">super([arguments]); // 访问父对象上的构造函数
super.functionOnParent([arguments]); // 访问对象上的方法
</pre>

## 描述

`当被用在`在构造函数中时，`super` 关键字被单独使用，且必须用于 `this` 关键字之前。它也可以被用来访问父对象上的方法。

## 例子

以下代码片段来自于 [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([演示](https://googlechrome.github.io/samples/classes-es6/index.html)).

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // 引用错误, 必须要先调用 super!

    // 这里我们调用父类的构造方法并传入 length
    // 作为 Polygon's 的 width 和 height
    super(length, length);

    // Note: 在派生的类中, super() 必须在 'this' 之前调用
    // 如果漏掉，则会造成引用错误。
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}</pre>

### 调用父类上的静态方法

你也可以用 super 调用父类的 [静态方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)。

<pre class="brush: js">class Human {
  constructor() {}
  static ping() {
    return 'ping';
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + ' pong';
  }
}
Computer.pingpong(); // 'ping pong'</pre>

### 删除 super 上的属性将抛出异常

你不能使用 [delete 操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) 加 `super.prop` 或者 `super[expr]` 去删除父类的属性, 这样做会抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。").

<pre class="brush: js">class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.</pre>

### `Super.prop` 不能重写 不可写（non-writable）的属性

当使用 [`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 定义一个属性为不可写时, <font face="Consolas, Liberation Mono, Courier, monospace">super 将不能重写这个属性的值</font>.

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false, 
      value: 1
    });
  } 
  f() { 
    super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1</pre>

### `在对象字面量中使用 super.prop`

`Super 也可以用在使用字面量进行对象初始化（ [object initializer / literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) ）。 在下面的例子中，两个对象各定义了一个方法。在第二个对象中, <font face="Consolas, Liberation Mono, Courier, monospace">我们使用 super 调用了第一个对象中的方法。</font> 当然，这需要我们先利用 [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型设置为另一个对象或者null(既对象的[[Prototype]]内部属性).") 将第二个对象的原型设为第一个对象, 然后才能够使用 super  调用到对象1上的method1.`

<pre class="brush: js">var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
</pre>

## `规范`

<table class="standard-table">

<tbody>

<tr>

<th scope="col">`规范版本`</th>

<th scope="col">`规范状态`</th>

<th scope="col">`注解`</th>

</tr>

<tr>

<td>`[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">super</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-super-keyword)`</td>

<td>`<span class="spec-Standard">Standard</span>`</td>

<td>`Initial definition.`</td>

</tr>

</tbody>

</table>

## `浏览器兼容性`

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

<td>42.0</td>

<td>[45](/en-US/Firefox/Releases/45 "Released on 2016-03-08.") (45)</td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

<td>45.0 (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

</tr>

</tbody>

</table>

</div>

## Gecko 规范说明

*   `super()` 在内建原型上不能按照预期表现.

## `相关链接`

*   `[Classes](/en-US/docs/Web/JavaScript/Reference/Classes)`