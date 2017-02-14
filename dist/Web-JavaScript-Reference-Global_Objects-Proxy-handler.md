<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该特性目前仍处于 ECMAScript 6 规范草案中**  
目前的实现在未来可能会发生改变，甚至被完全删除，请谨慎使用。

</div>

</div>

## 概述

处理器对象用来自定义[代理对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")的各种可代理操作。

## 方法

一共有 14 种可代理操作，每种操作的代号（属性名/方法名）和触发这种操作的方式列举如下。注意，如果没有定义某种操作，那么这种操作会被转发到目标对象身上。

<dl>

<dt>[`handler.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在读取代理对象的原型时触发该操作，比如在执行 `[`Object.getPrototypeOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")(proxy)` 时。</dd>

<dt>[`handler.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在设置代理对象的原型时触发该操作，比如在执行 `[`Object.setPrototypeOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "设置一个对象的原型(既对象的[[Prototype]]内部属性).")(proxy, null)` 时。</dd>

<dt>[`handler.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在判断一个代理对象是否是可扩展时触发该操作，比如在执行 `[`Object.isExtensible`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。")(proxy)` 时。</dd>

<dt>[`handler.preventExtensions()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在让一个代理对象不可扩展时触发该操作，比如在执行 `[`Object.preventExtensions`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。")(proxy)` 时。</dd>

<dt>[`handler.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在获取代理对象某个属性的属性描述时触发该操作，比如在执行 `[`Object.getOwnPropertyDescriptor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）")(proxy, "foo")` 时。</dd>

<dt>[`handler.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 `[`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")(proxy, "foo", {})` 时。</dd>

<dt>[`handler.has()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在判断代理对象是否拥有某个属性时触发该操作，比如在执行 `"foo" [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in "如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。") proxy` 时。</dd>

<dt>[`handler.get()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在读取代理对象的某个属性时触发该操作，比如在执行 `proxy.foo` 时。</dd>

<dt>[`handler.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在给代理对象的某个属性赋值时触发该操作，比如在执行 `proxy.foo = 1` 时。</dd>

<dt>[`handler.deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在删除代理对象的某个属性时触发该操作，比如在执行 `delete proxy.foo` 时。</dd>

<dt>[`handler.enumerate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在遍历代理对象的属性时触发该操作，比如在执行 `[`for(i in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.") proxy){}` 时。</dd>

<dt>[`handler.ownKeys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在获取代理对象的所有属性键时触发该操作，比如在执行 `[`Object.getOwnPropertyNames`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。")(proxy)` 时。</dd>

<dt>[`handler.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 `proxy()` 时。</dd>

<dt>[`handler.construct()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行`new proxy()` 时。</dd>

</dl>

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
<small lang="zh-CN">Proxy Object Internal Methods and Internal Slots</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy-object-internal-methods-and-internal-slots)</td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

<td>12</td>

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

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")