<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

## 概述

将一个指定的对象的原型(即对象的`[[Prototype]]`内部属性)设置为另一个对象或者[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")。

<div class="warning">

**警告:** 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]`在_**各个**_浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 `obj.__proto__ = ...` 语句上的时间花费，而且可能会延伸到_**任何**_代码，那些可以访问_**任何**_`[[Prototype]]`已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 `[[Prototype]]`。相反，你应该使用 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create "Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。")来创建带有你想要的`[[Prototype]]`的新对象。

</div>

## 语法

    Object.setPrototypeOf(obj, prototype)

### 参数

<dl>

<dt>obj</dt>

<dd>将被设置原型的对象.</dd>

<dt>prototype</dt>

<dd>该对象新的原型(可以是一个对象或者[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")).</dd>

</dl>

## 描述

如果对象的[[Prototype]]被修改成不可扩展(通过 [`Object.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。")查看)，就会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")异常。如果`prototype`参数不是一个对象或者[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")(例如，数字，字符串，boolean，或者 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined"."))，则什么都不做。否则，该方法将`obj`的`[[Prototype]]`修改为新的值。

`Object.setPrototypeOf()是`ECMAScript 6最新草案中的方法，相对于 [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "此页面仍未被本地化, 期待您的翻译!") ，它被认为是修改对象原型更合适的方法

## 示例

    var dict = Object.setPrototypeOf({}, null);

## Polyfill

<span lang="en" class="short_text" id="result_box"><span>我们必须借助非标准的</span></span>  [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "此页面仍未被本地化, 期待您的翻译!")才能实现这个方法.

<pre class="brush: js">//chrome和火狐中有效，IE无效
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto;
  return obj; 
}</pre>

## 添加原型链

通过`Object.getPrototypeOf()和` [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto "Object.prototype的__proto__属性是一个访问器属性（一个getter函数和一个setter函数），它公开访问它的对象的内部[[Prototype]]（对象或null）。")的组合，可以给一个新的原型对象添加完整的原型链

<pre class="brush: js">/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function(["@arg"(s)], "@function_body") to that chain.
* Returns the function.
*
**/

Object.appendChain = function(oChain, oProto) {
  if (arguments.length < 2) { 
    throw new TypeError('Object.appendChain - Not enough arguments');
  }
  if (typeof oProto === 'number' || typeof oProto === 'boolean') {
    throw new TypeError('second argument to Object.appendChain must be an object or a string');
  }

  var oNewProto = oProto,
      oReturn, 
      o2nd, 
      oLast;

  oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}</pre>

## 使用

例子一：给一个原型添加链

<pre class="brush: js">function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'</pre>

例子二：将一个基本类型转化为对应的对象类型并添加到原型链上

<pre class="brush: js">function Symbol() {
  this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new Symbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'</pre>

例子三：给函数类型的对象添加一个链，并添加一个新的方法到那个链上

<pre class="brush: js">function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(new Person('George'), 'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'</pre>

## 说明书

<table class="standard-table">

<thead>

<tr>

<th scope="col">说明</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object.setProtoypeOf</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object.setprototypeof)</td>

<td>

<table>

<tbody>

<tr>

<td><span class="spec-Standard">Standard</span></td>

</tr>

</tbody>

</table>

</td>

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

<td>34</td>

<td>[31](/en-US/Firefox/Releases/31 "Released on 2014-07-22.") (31)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td>31.0 (31)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Reflect.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一致的。它将指定对象的原型 （即，内部的[[Prototype]] 属性）设置为另一个对象或为 null。")
*   [`Object.prototype.isPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf "isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。")
*   [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "此页面仍未被本地化, 期待您的翻译!")