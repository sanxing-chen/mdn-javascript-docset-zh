<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

**static**关键字为一个类定义一个静态方法。

## 语法

<pre class="syntaxbox">static methodName() { ... }</pre>

## 描述

静态方法可以直接在类上调用，并且不能在类的实例上调用。静态方法经常被用来创建工具函数。

## 调用静态方法

### 从另一个静态方法

为了在同一个类的另一个静态方法中调用一个静态方法，你可以使用  `[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)` 关键字。

    class StaticMethodCall {
      static staticMethod() {
        return 'Static method has been called';
      }
      static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
      }
    }
    StaticMethodCall.staticMethod(); 
    // 'Static method has been called'

    StaticMethodCall.anotherStaticMethod(); 
    // 'Static method has been called from another static method'

### 从类的构造函数和其他方法

静态方法不能直接在非静态方法中使用 `[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)` 关键字来访问。你需要使用类名来调用它们：`CLASSNAME.STATIC_METHOD_NAME()` 或者将其作为构造函数的属性来调用该方法： `this.constructor.STATIC_METHOD_NAME()`.

    class StaticMethodCall {
      constructor() {
        console.log(StaticMethodCall.staticMethod()); 
        // 'static method has been called.' 

        console.log(this.constructor.staticMethod()); 
        // 'static method has been called.' 
      }

      static staticMethod() {
        return 'static method has been called.';
      }
    }

## 示例

下面的例子说明了这几点：

1.  静态方法是怎么在一个类中被实现的。
2.  拥有静态成员的类是可以被子类化的 。
3.  静态方法可以怎样被调用以及怎样不可以。

<pre class="brush: js">class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());          // 3
console.log(Tripple.tripple(6));         // 18
console.log(BiggerTripple.tripple(3));   // 81
var tp = new Tripple();
console.log(BiggerTripple.tripple(3));   // 81（不会受父类被实例化的影响）
console.log(tp.tripple());               // 'tp.tripple is not a function'.</pre>

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

</thead>

<tbody>

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

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>45.0 (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`class表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
*   [`class声明`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
*   [Classes](/zh-CN/docs/Web/JavaScript/Reference/Classes)