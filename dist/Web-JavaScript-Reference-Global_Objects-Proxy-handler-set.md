`**handler.set()**` 方法用于拦截设置属性值的操作

## 语法

<pre class="brush: js">var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
</pre>

### 参数

以下是传递给set方法的参数，`this上下文绑定在`handler对象上.

<dl>

<dt>`target`</dt>

<dd>目标对象。</dd>

<dt>`property`</dt>

<dd>被设置的属性名。</dd>

<dt>`value`</dt>

<dd>被设置的新值。</dd>

<dt>`receiver`</dt>

<dd>最初被调用的对象。通常是proxy本身，但handler的set方法也有可能在原型链上或以其他方式被间接地调用（因此不一定是proxy本身）。</dd>

<dd>比如，假设有一段代码执行 `obj.name = "jen"，obj不是一个proxy且自身不含name属性，但它的原型链上有一个proxy，那么那个proxy的set拦截函数会被调用，此时obj会作为receiver参数传进来。`</dd>

</dl>

### 返回值

set方法应该返回一个布尔值，返回true代表此次设置属性成功了，如果返回false且设置属性操作发生在严格模式下，那么会抛出一个`TypeError`。

## 描述

`**handler.set**` 方法用于拦截设置属性值的操作。

### 拦截

该方法会拦截目标对象的以下操作:

*   指定属性值: `proxy[foo] = bar` 和 `proxy.foo = bar`
*   指定继承者的属性值: `Object.create(proxy)[foo] = bar`
*   [`Reflect.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set "此页面仍未被本地化, 期待您的翻译!")

### 约束

如果违背以下的约束条件，proxy会抛出一个[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。"):

*   若目标属性是不可写及不可配置的，则不能改变它的值。
*   如果目标属性没有配置存储方法，即set方法是undefined的，则不能设置它的值。
*   在严格模式下，若set方法返回false，则会抛出一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 异常。

## 示例

以下代码演示如何捕获属性的设置操作。

<pre class="brush: js">var p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    console.log("called: " + prop + " = " + value);
    return true;
  }
});

p.a = 10; // "called: a = 10"
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
<small lang="zh-CN">[[Set]]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">[[Set]]</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver)</td>

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

*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "Editorial review completed.")
*   [`handler`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler "处理器对象用来自定义代理对象的各种可代理操作。")
*   [`Reflect.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set "此页面仍未被本地化, 期待您的翻译!")