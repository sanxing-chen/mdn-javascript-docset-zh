<div class="warning">

**警告:** 通过现代浏览器的操作属性的便利性，可以改变一个对象的 `[[Prototype]]` 属性, 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 `obj.__proto__ = ...` 语句上, 它还会影响到所有继承来自该 `[[Prototype]]` 的对象，如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]].。相反, 创建一个新的且可以继承 `[[Prototype]]` 的对象，推荐使用 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create "Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。")。

</div>

<div class="warning">

**警告:** 当对象的原型 __proto__ 属性已被大多数浏览器厂商所支持的今天，它的存在和使用行为，只是为了ECMAScript 6标准规范作为遗产特征而确保Web浏览器的兼容性。为了更好的支持，仅建议使用 [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。") 来代替。

</div>

Object.prototype的__proto__属性是一个访问器属性（一个getter函数和一个setter函数），它公开访问它的对象的内部[[Prototype]]（对象或null）。

__proto__的使用是有争议的，尽量不要使用。 它从来没有被包括在EcmaScript语言规范中，但是现代浏览器实现了它。__proto__属性已在ECMAScript 6语言规范中标准化，用于确保Web浏览器的兼容性，因此它未来将被支持。它不赞成使用Object.getPrototypeOf / Reflect.getPrototypeOf和Object.setPrototypeOf / Reflect.setPrototypeOf（如果关注性能的话，应该避免设置对象的[[Prototype]]这样缓慢的操作）。

__proto__属性也可以用于创建对象的字面定义中，用于在时设置对象[[Prototype]]，作为Object.create（）的替代。 See: [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## 语法

<pre class="brush: js">var shape = {};
var circle = new Circle();

// 设置该对象的原型链引用
// 过时且不推荐使用的。这里只是举个栗子， 尽量不要在生产环境中这样做。
shape.__proto__ = circle;

// 判断该对象的原型链引用是否属于circle
console.log(shape.__proto__ === circle); // true
</pre>

<pre class="brush: js">var shape = function () {
};
var p = {
    a: function () {
        console.log('aaa');
    }
};
shape.prototype.__proto__ = p;

var circle = new shape();

circle.a();//aaa

console.log(shape.prototype === circle.__proto__);//true

//或者

var shape = function () {
};
var p = {
    a: function () {
        console.log('a');
    }
};

var circle = new shape();
circle.__proto__ = p;

circle.a(); //  a

console.log(shape.prototype === circle.__proto__);//false

//或者

function test() {
}
test.prototype.myname = function () {
    console.log('myname');

}
var a = new test()

console.log(a.__proto__ === test.prototype);//true

a.myname();//myname

//或者

var fn = function () {
};
fn.prototype.myname = function () {
    console.log('myname');
}

var obj = {
    __proto__: fn.prototype
};

obj.myname();//myname
</pre>

注意：这是两个下划线，后面是五个字符的 “proto” ，后面再跟两个下划线。

## 描述

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。"). For objects created using array literals, this value is [`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype "所有的数组实例都继承于 Array.prototype。"). For functions, this value is [`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。"). For objects created using `new fun`, where `fun` is one of the built-in constructor functions provided by JavaScript ([`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!"), [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!"), [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!"), [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。"), [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。"), [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!"), and so on — including new constructors added as JavaScript evolves), this value is always `fun.prototype`. For objects created using `new fun`, where `fun` is a function defined in a script, this value is the value of `fun.prototype`. (That is, if the constructor didn't return an other object explicitly, or the `fun.prototype` has been reassigned since the instance was created).

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The object must be extensible according to [`Object.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。"): if it is not, a [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") is thrown. The value provided must be an object or [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。"). Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

The `__proto__` property is a simple accessor property on [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。") consisting of a getter and setter function. A property access for `__proto__` that eventually consults [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。") will find this property, but an access that does not consult [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。") will not find it. If some other `__proto__` property is found before [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。") is consulted, that property will hide the one found on [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。").

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
<small lang="zh-CN">Object.prototype.__proto__</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-object.prototype-object)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Included in the (normative) annex for additional ECMAScript legacy features for Web browsers (note that the specification codifies what is already in implementations).</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.__proto__</small>](https://tc39.github.io/ecma262/#sec-additional-properties-of-the-object.prototype-object)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容情况

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 兼容性注意事项

在 ECMAScript 2015（ES6）的规范要求中，支持__proto__ 是各大Web浏览器厂商的要求（虽然符合规范），但其他环境下因为历史遗留的问题，也有可能被使用和支持。 

## 更多请参考

*   [`Object.prototype.isPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf "isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。")
*   [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型设置为另一个对象或者null(既对象的[[Prototype]]内部属性).")