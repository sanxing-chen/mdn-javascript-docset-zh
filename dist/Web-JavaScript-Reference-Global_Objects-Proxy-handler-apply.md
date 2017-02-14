**`handler.apply()`** 方法用于拦截函数的调用。

## 语法

<pre class="brush: js">var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
</pre>

### 参数

以下是传递给apply方法的参数，`this上下文绑定在`handler对象上.

<dl>

<dt>`target`</dt>

<dd>目标对象（函数）。</dd>

<dt>`thisArg`</dt>

<dd>被调用时的上下文对象。</dd>

<dt>`argumentsList`</dt>

<dd>被调用时的参数数组。</dd>

</dl>

### 返回值

`apply方法可以返回任何值。`

## 描述

**`handler.apply`** 方法用于拦截函数的调用。

### 拦截

该方法会拦截目标对象的以下操作:

*   `proxy(...args)`
*   [`Function.prototype.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 和 [`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")
*   [`Reflect.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply "静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。")

### 约束

无。

## 示例

以下代码演示如何捕获函数的调用。

<pre class="brush: js">var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
                         // 6
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
<small lang="zh-CN">[[Call]]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">[[Call]]</small>](https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist)</td>

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
*   [`Function.prototype.apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。")
*   [`Function.prototype.call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")
*   [`Reflect.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply "静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。")