**`handler.get()`** 方法用于拦截对象的读取属性操作。

## 语法

<pre class="brush: js">var p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
});
</pre>

### 参数

以下是传递给get方法的参数，`this上下文绑定在`handler对象上.

<dl>

<dt>`target`</dt>

<dd>目标对象。</dd>

<dt>`prop`erty</dt>

<dd>被获取的属性名。</dd>

<dt>`receiver`</dt>

<dd>Proxy或者继承Proxy的对象</dd>

</dl>

### 返回值

get方法可以返回任何值。

## 描述

**`handler.get`** 方法用于拦截对象的读取属性操作。

### 拦截

该方法会拦截目标对象的以下操作:

*   访问属性: `proxy[foo]和` `proxy.bar`
*   访问原型链上的属性: `Object.create(proxy)[foo]`
*   [`Reflect.get()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get "此页面仍未被本地化, 期待您的翻译!")

### 不变量

如果违背了以下的不变量，proxy会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。"):

*   如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
*   如果要访问的目标属性没有配置访问方法，即get方法是undefined的，则返回值必须为undefined。

## 示例

以下代码演示如何拦截属性值的读取操作。

<pre class="brush: js">var p = new Proxy({}, {
  get: function(target, prop, receiver) {
    console.log("called: " + prop);
    return 10;
  }
});

console.log(p.a); // "called: a"
                  // 10
</pre>

以下代码演示违反不变量的情况。

<pre class="brush: js">var obj = {};
Object.defineProperty(obj, "a", { 
  configurable: false, 
  enumerable: false, 
  value: 10, 
  writable: false 
});

var p = new Proxy(obj, {
  get: function(target, prop) {
    return 20;
  }
});

p.a; //会抛出TypeError
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
<small lang="zh-CN">[[Get]]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">[[Get]]</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver)</td>

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
*   [`Reflect.get()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get "此页面仍未被本地化, 期待您的翻译!")