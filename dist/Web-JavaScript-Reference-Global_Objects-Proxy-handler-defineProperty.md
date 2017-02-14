**`handler.defineProperty()`** 用于拦截对对象的 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 操作。

## 语法

<pre class="brush: js">var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
</pre>

### 参数

下列参数将会被传递给 `defineProperty` 方法。 `this` 绑定在 handler 对象上。

<dl>

<dt>`target`</dt>

<dd>目标对象。</dd>

<dt>`property`</dt>

<dd>待检索其描述的属性名。</dd>

<dt>`descriptor`</dt>

<dd>待定义或修改的属性的描述符。</dd>

</dl>

### 返回值

`defineProperty` 方法必须以一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!") 返回，表示定义该属性的操作成功与否。

## 描述

`**handler.defineProperty()**` 用于拦截对对象的 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 操作。

### 拦截

该方法会拦截目标对象的以下操作 :

*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Reflect.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty "静态方法 Reflect.defineProperty() 有很像 Object.defineProperty() 方法，但返回的是 Boolean 值。")

### 不变量

如果违背了以下的不变量，proxy会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。"):

*   如果目标对象不可扩展， 将不能添加属性。
*   不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话。
*   如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的。
*   如果一个属性在目标对象中存在对应的属性，那么 `Object.defineProperty(target, prop, descriptor)` 将不会抛出异常。
*   在严格模式下， `false` 作为 `handler.defineProperty` 方法的返回值的话将会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 异常.

## 示例

以下代码演示如何拦截对目标对象的 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 操作。

<pre class="brush: js">var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
</pre>

当调用 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 或者 [`Reflect.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty "静态方法 Reflect.defineProperty() 有很像 Object.defineProperty() 方法，但返回的是 Boolean 值。")，传递给 `defineProperty` 的 `descriptor`   有一个限制 - 只有以下属性才有用，非标准的属性将会被无视 :

*   `enumerable`
*   `configurable`
*   `writable`
*   `value`
*   `get`
*   `set`

<pre class="brush: js">var p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
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
<small lang="zh-CN">[[DefineOwnProperty]]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">[[DefineOwnProperty]]</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc)</td>

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
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Reflect.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty "静态方法 Reflect.defineProperty() 有很像 Object.defineProperty() 方法，但返回的是 Boolean 值。")