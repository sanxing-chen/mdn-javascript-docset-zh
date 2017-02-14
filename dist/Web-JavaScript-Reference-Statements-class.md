关键字创建一个基于原型继承的新类(译者注：ES6新加入的class关键字是语法糖，本质还是函数)

<div class="noinclude">

可以使用class表达式定义类[class expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/class "类表达式是用来定义类的一种语法。和函数表达式相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。").

</div>

## Syntax 语法

<pre class="brush: js">class _name_ [extends] {
  // class body
}
</pre>

## Description 描述

和class表达式一样，class声明体在[严格模式(strict mode)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)下运行。构造函数（constructor）是可选的。

Class声明不可以提升(这点和[函数声明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)不一样)。

## Examples 例子

### 一个类声明的例子

在下面的例子，定义了一个名为Polygon的类，然后定义了一个继承于Polygon的类 Square。注意到在构造器使用的 super()，supper()只能在构造器中使用，super函数一定要在this可以使用之前调用。

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}</pre>

<div class="warning">

### 重复定义类

重复定义类会引起类型错误.

    class Foo {};
    class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared

由于类声明不会被提升，所以，在定义之前引用类会出错.

    var Foo = class {};
    class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared

</div>

## Specifications 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Class definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Class definitions</small>](https://tc39.github.io/ecma262/#sec-class-definitions)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility 浏览器兼容性

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

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Array subclassing</td>

<td>43.0</td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>42.0</td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

</tr>

<tr>

<td>Array subclassing</td>

<td><span style="color: #f00;">未实现</span></td>

<td>43.0</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>43.0</td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
*   [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
*   [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)