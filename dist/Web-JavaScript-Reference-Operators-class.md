<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

**类表达式**是用来定义类的一种语法。和[函数表达式](/zh-CN /docs/Web/JavaScript/Reference/Operators/function)相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。

## 语法

<pre class="syntaxbox">var MyClass = class _[className]_ [extends] {
  // class body
};</pre>

## 描述

类表达式的语法和[类语句](/zh-CN /docs/Web/JavaScript/Reference/Statements/class)的语法很类似，只是在类表达式中，你可以省略掉类名，而类语句中不能。

和类语句一样，类表达式中的代码也是强制[严格模式](/zh-CN /docs/Web/JavaScript/Reference/Strict_mode)的。

## 示例

### 使用类表达式

下面的代码使用类表达式语法创建了一个匿名类，然后赋值给变量 Foo。

<pre class="brush: js">var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
</pre>

### 命名类表达式

如果你想在类体内部也能引用这个类本身，那么你就可以使用命名类表达式，并且这个类名只能在类体内部访问。

<pre class="brush: js">// TBD
var Foo = class NamedFoo {

}
</pre>

## 规范

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

<td>42.0</td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

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

</tbody>

</table>

</div>

## 相关链接

*   [`函数表达式`](/zh-CN /docs/Web/JavaScript/Reference/Operators/function)
*   [`类语句`](/zh-CN /docs/Web/JavaScript/Reference/Statements/class)
*   [类](/zh-CN /docs/Web/JavaScript/Reference/Classes)