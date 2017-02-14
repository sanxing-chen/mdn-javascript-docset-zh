**`handler.deleteProperty()`** 方法用于拦截对对象属性的 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。") 操作。

## 语法

<pre class="brush: js">var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
</pre>

### 参数

`deleteProperty` 方法将会接受以下参数。 `this` 被绑定在 handler上。

<dl>

<dt>`target`</dt>

<dd>目标对象。</dd>

<dt>`property`</dt>

<dd>待删除的属性名。</dd>

</dl>

### 返回值

`deleteProperty` 必须返回一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!") 类型的值，表示了该属性是否被成功删除。

## 描述

`**handler.deleteProperty()**` 方法可以拦截 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。") 操作。

### 拦截

该方法会拦截以下操作:

*   删除属性: `delete proxy[foo]` 和 `delete proxy.foo`
*   [`Reflect.deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty "静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。")

### 不变量

如果违背了以下不变量，proxy 将会抛出一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。"):

*   如果目标对象的属性是不可配置的，那么该属性不能被删除。

## 示例

以下代码演示了对 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。") 操作的拦截。

<pre class="brush: js">var p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    console.log('called: ' + prop);
    return true;
  }
});

delete p.a; // "called: a"
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
<small lang="zh-CN">[[Delete]]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-delete-p)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">[[Delete]]</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-delete-p)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[18](/en-US/Firefox/Releases/18 "Released on 2013-01-08.") (18)</td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>18.0 (18)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 另见

*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "Proxy 对象用来为基础操作（例如：属性查找、赋值、枚举、方法调用等）定义用户自定义行为。")
*   [`handler`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "处理器对象用来自定义代理对象的各种可代理操作。")
*   [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。") 操作符
*   [`Reflect.deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty "静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。")