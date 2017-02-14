<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

## 概述

`**__lookupGetter__**` 方法会返回当前对象上指定属性的**属性读取访问器函数（getter）。**

## 语法

    obj.__lookupGetter__(sprop)

### 参数

<dl>

<dt>`sprop`</dt>

<dd>属性名</dd>

</dl>

## 示例

<pre class="brush: js">var obj = {
    get foo() {
        return Math.random() > 0.5 ? "foo" : "bar";
    }
};

obj.__lookupGetter__("foo") 
// (function (){return Math.random() > 0.5 ? "foo" : "bar"}) </pre>

## 附注

`**__lookupGetter__**` 方法是非标准的，我们应该使用标准中定义的方法来完成同样的事情，那就是 [`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）") 方法：

<pre class="brush: js">var obj = {
    get foo() {
        return Math.random() > 0.5 ? "foo" : "bar";
    }
};

Object.getOwnPropertyDescriptor(obj, "foo").get
// (function (){return Math.random() > 0.5 ? "foo" : "bar"})
</pre>

如果那个访问器属性是继承来的，你还需要使用 [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")：

<pre class="brush: js">var obj = {};
var prototype = Object.getPrototypeOf(obj);
Object.getOwnPropertyDescriptor(prototype, "foo").get 
// function __proto__() {[native code]}
</pre>

## 规范

不属于任何规范。

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

## 相关链接

*   [`Object.prototype.__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__ "此页面仍未被本地化, 期待您的翻译!")
*   [`get`](/zh-CN/docs/Web/JavaScript/Reference/Operators/get "此页面仍未被本地化, 期待您的翻译!") 运算符
*   [`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）") 和 [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__ "__defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用。")
*   [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__ "__defineSetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。")
*   [JS 指南：定义访问器属性](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters "JavaScript/Guide/Creating_New_Objects/Defining_Getters_and_Setters")