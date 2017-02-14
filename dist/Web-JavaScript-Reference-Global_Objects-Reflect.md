Reflect是一个内置的对象，提供可拦截的JavaScript操作的方法。方法与[代理处理程序](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)相同。反射不是一个函数对象，因此它不可构造。

## 描述

与大多数全局对象不同，Reflect不是构造函数。您不能将其与一个[(new operate)新运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)一起使用，或者将Reflect对象作为一个函数来调用。

## 方法

Reflect对象提供以下静态函数，它们具有与[代理处理程序方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)相同的名称。这些方法中的一些与 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 上的对应方法相同。

<dl>

<dt>[`Reflect.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply "静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。")</dt>

<dd>对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 [`Function.prototype.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 功能类似。</dd>

<dt>[`Reflect.construct()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct "Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args).")</dt>

<dd>对构造函数进行 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作，相当于执行 `new target(...args)。`</dd>

<dt>[`Reflect.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty "静态方法 Reflect.defineProperty() 有很像 Object.defineProperty() 方法，但返回的是 Boolean 值。")</dt>

<dd>和 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 类似。</dd>

<dt>[`Reflect.deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty "静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。")</dt>

<dd>删除对象的某个属性，相当于执行 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) `target[name]。`</dd>

<dt>[`Reflect.enumerate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>该方法会返回一个包含有目标对象身上所有可枚举的自身字符串属性以及继承字符串属性的迭代器，[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 操作遍历到的正是这些属性。</dd>

<dt>[`Reflect.get()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get "Reflect.get() 方法的工作方式，就像从 object (target[propertyKey]) 中获取属性，但它是作为一个函数执行的。")</dt>

<dd>获取对象身上某个属性的值，类似于 `target[name]。`</dd>

<dt>[`Reflect.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor "静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined。")</dt>

<dd>类似于 [`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）")。</dd>

<dt>[`Reflect.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf "静态方法 Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 方法是一样的。都是返回指定对象的原型（即，内部的 [[Prototype]] 属性的值）。")</dt>

<dd>类似于 [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")。</dd>

<dt>[`Reflect.has()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has "静态方法 Reflect.has() 作用与 in 操作符 相同。")</dt>

<dd>判断一个对象是否存在某个属性，和 [`in` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 的功能完全相同。</dd>

<dt>[`Reflect.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible "静态方法 Reflect.isExtensible() 决定一个对象是否可扩展 （即是否能够添加新的属性）。与它 Object.isExtensible() 方法相似，但有一些不同，详情可见 differences。")</dt>

<dd>类似于 [`Object.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。").</dd>

<dt>[`Reflect.ownKeys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys "静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。")</dt>

<dd>返回一个包含所有自身属性（不包含继承属性）的数组。</dd>

<dt>[`Reflect.preventExtensions()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions "静态方法 Reflect.preventExtensions() 方法阻止新属性添加到对象 例如：防止将来对对象的扩展被添加到对象中)。该方法与 Object.preventExtensions()相似，但有一些不同点。详情可见 differences。")</dt>

<dd>类似于 [`Object.preventExtensions()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。")。</dd>

<dt>[`Reflect.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set "静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性。")</dt>

<dd>设置对象身上某个属性的值，类似于 `target[name] = val。`</dd>

<dt>[`Reflect.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf "静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一致的。它将指定对象的原型 （即，内部的[[Prototype]] 属性）设置为另一个对象或为 null。")</dt>

<dd>类似于 [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型(即对象的[[Prototype]]内部属性)设置为另一个对象或者null。")。</dd>

</dl>

## 规范

<table>

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Reflect</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-reflect-object)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Reflect</small>](https://tc39.github.io/ecma262/#sec-reflect-object)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Reflect.enumerate has been removed.</td>

</tr>

</tbody>

</table>

##   
浏览器兼容性

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>49.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[42](/en-US/Firefox/Releases/42 "Released on 2015-11-03.") (42)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>10</td>

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

<td>49.0</td>

<td>49.0</td>

<td>42.0 (42)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>10</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`代理`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "此页面仍未被本地化, 期待您的翻译!") 全局对象。
*   [`代理处理器`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "处理器对象用来自定义代理对象的各种可代理操作。") 对象。