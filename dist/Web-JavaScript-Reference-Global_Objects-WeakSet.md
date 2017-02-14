<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

## 概述

一个 **`WeakSet`** 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.

## 语法

<pre class="syntaxbox"> new WeakSet([iterable]);</pre>

### 参数

<dl>

<dt>iterable</dt>

<dd>如果传入一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)作为参数, 则该对象的所有迭代值都会被自动添加进生成的 `WeakSet` 对象中.</dd>

</dl>

## 描述

`WeakSet` 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次.

它和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "此页面仍未被本地化, 期待您的翻译!") 对象的区别有两点:

*   `WeakSet` 对象中只能存放对象值, 不能存放原始值, 而 `Set` 对象都可以.
*   `WeakSet` 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, `WeakSet` 对象是无法被枚举的, 没有办法拿到它包含的所有元素.

## 属性

<dl>

<dt>`WeakSet.length`</dt>

<dd>`length` 属性的值为 0.</dd>

<dt>[`WeakSet.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype "The WeakSet.prototype property represents the prototype for the WeakSet constructor.")</dt>

<dd><span>`WeakSet` 实例的所有继承属性和继承方法都在该对象上.</span></dd>

</dl>

## `WeakSet` 实例

所有 `WeakSet` 实例都继承自 [`WeakSet.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype "The WeakSet.prototype property represents the prototype for the WeakSet constructor.").

### 属性

<dl>

<dt>`WeakSet.prototype.constructor`</dt>

<dd>返回构造函数即 [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.") 本身.</dd>

</dl>

### 方法

<dl>

<dt>[`WeakSet.prototype.add(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd> 在<span style="line-height: 1.5;">该 </span>`WeakSet`<span style="line-height: 1.5;"> 对象中添加一个新元素 `value`.</span></dd>

<dt>[`WeakSet.prototype.clear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/clear "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>清空该 `WeakSet` 对象中的所有元素.</dd>

<dt>[`WeakSet.prototype.delete(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从<span style="line-height: 1.5;">该 </span>`WeakSet`<span style="line-height: 1.5;"> 对象中删除</span><span style="line-height: 1.5;"> </span>`value `<span style="line-height: 1.5;">这个元素, 之后 </span>`WeakSet.prototype.has(value)`<span style="line-height: 1.5;">方法便会返回</span> `false`<span style="line-height: 1.5;">.</span></dd>

<dt>[`WeakSet.prototype.has(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个布尔值,  表示给定的值 `value` 是否存在于这个 `WeakSet` 中.</dd>

</dl>

## 示例

### 例1: 使用 `WeakSet`

<pre class="brush: js">var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, 对象 foo 并没有被添加进 ws 中 

ws.delete(window); // 从集合中删除 window 对象
ws.has(window);    // false, window 对象已经被删除了

ws.clear(); // 清空整个 WeakSet 对象
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范链接</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">WeakSet</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>无</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span> [bug 792439](https://bugzilla.mozilla.org/show_bug.cgi?id=792439 "FIXED: Implement ES6 WeakSet")</td>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span> [bug 792439](https://bugzilla.mozilla.org/show_bug.cgi?id=792439 "FIXED: Implement ES6 WeakSet")</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

### Chrome 备注

*   需在 `chrome://flags 中开启` “启用实验性 JavaScript” 才能使用该特性.

## 相关链接

*   [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "此页面仍未被本地化, 期待您的翻译!")
*   [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!")