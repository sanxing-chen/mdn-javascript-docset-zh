<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该特性处于 ECMAScript 6 规范草案中，目前的实现在未来可能会发生微调，请谨慎使用。**

</div>

</div>

## 概述

**`handler.getPrototypeOf()`** 是一个代理方法，当读取代理对象的原型时，该方法就会被调用。

## 语法

<pre class="brush: js">var p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
});
</pre>

### 参数

当 `getPrototypeOf` 方法被调用时，`this` 指向的是它所属的处理器对象。

<dl>

<dt>`target`</dt>

<dd>被代理的目标对象。</dd>

</dl>

### 返回值

`getPrototypeOf` 方法必须返回一个对象值或者返回 `null，不能返回其它类型的原始值`。

## 描述

在 JavaScript 中，有下面这五种操作（方法/属性/运算符）可以触发 JS 引擎读取一个对象的原型，也就是可以触发 `getPrototypeOf()` 代理方法的运行：

*   [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Reflect.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf "此页面仍未被本地化, 期待您的翻译!")
*   [`__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto "一个对象的__proto__ 属性和自己的内部属性[[Prototype]]指向一个相同的值 (通常称这个值为原型),原型的值可以是一个对象值也可以是null(比如说Object.prototype.__proto__的值就是null).该属性可能会引发一些错误,因为用户可能会不知道该属性的特殊性,而给它赋值,从而改变了这个对象的原型. 如果需要访问一个对象的原型,应该使用方法Object.getPrototypeOf.")
*   [`Object.prototype.isPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf "isPrototypeOf() 方法测试一个对象是否存在于另一个对象的原型链上。")
*   [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符可以用来判断某个构造函数的prototype属性是否存在另外一个要检测对象的原型链上。")

如果遇到了下面两种情况，JS 引擎会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/TypeError "此页面仍未被本地化, 期待您的翻译!") 异常：

*   `getPrototypeOf()` 方法返回的不是对象也不是 `null。`
*   目标对象是不可扩展的，且 `getPrototypeOf()` 方法返回的原型不是目标对象本身的原型。

## 示例

### 例子：基本用法

<pre class="brush: js">var obj = {};
var proto = {};
var handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

### 例子：5 种触发 getPrototypeOf 代理方法的方式

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

### 例子：两种情况下的异常

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return "foo";
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">[[GetPrototypeOf]]</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span> ([bug 888969](https://bugzilla.mozilla.org/show_bug.cgi?id=888969 "Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf"))</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span> ([bug 888969](https://bugzilla.mozilla.org/show_bug.cgi?id=888969 "Implement ES6 Proxy traps for getPrototypeOf and setPrototypeOf"))</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")
*   [`handler`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "处理器对象用来自定义代理对象的各种可代理操作。")
*   [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Reflect.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf "此页面仍未被本地化, 期待您的翻译!")