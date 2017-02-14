<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

<div>`**__lookupSetter__**` 方法是用来返回一个对象的某个属性上绑定了 setter （设置器）的钩子函数的引用。</div>

## 语法

    obj.__lookupSetter__(sprop)

### 参数说明

<dl>

<dt>`sprop`</dt>

<dd>一个字符串类型，表示要返回的 setter 钩子的函数名。</dd>

</dl>

### 返回值

一个绑定了setter的特殊属性的函数引用。

## 详细描述

如果一个 setter 被定义在了一个对象的属性上，则不能直接通过该属性来获取引用 setter 所设置的钩子的函数，因为该属性是该函数的返回值，但，__lookupSetter__ 可以被用来获取对 setter 函数的引用。

不过现在可以使用标准的方法：

[`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）").

## 举个栗子

<pre class="brush: js">var obj = {
  set foo(value) {
    this.bar = value;
  }
};

// 非标准，并且不推荐使用。
obj.__lookupSetter__('foo')
// (function(value) { this.bar = value; })

// 标准且推荐使用的方式。
Object.getOwnPropertyDescriptor(obj, "foo").set;
// (function(value) { this.bar = value; })
</pre>

## 规范说明

<table class="spectable standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.__lookupSetter__()</small>](https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>包含在（规范性）附件中，用于Web浏览器的附加ECMAScript遗留功能（请注意，这份规范编撰的内容已经是准备实现的了）。</td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 更多请参考

*   [`Object.prototype.__lookupGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__ "__lookupGetter__ 方法会返回当前对象上指定属性的属性读取访问器函数（getter）。")
*   [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set "set 语法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。") operator
*   [`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）") and [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__ "__defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用。")
*   [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__ "__defineSetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。")
*   [JS Guide: Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)