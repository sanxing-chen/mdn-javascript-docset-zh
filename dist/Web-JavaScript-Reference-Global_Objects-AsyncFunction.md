`**Async**`**`Function` 构造函数** 实例化一个 [`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。") 对象. 在 JavaScript 中每个异步函数实例上都是 `AsyncFunction`对象.

注意 `AsyncFunction` 不是全局对象.它只能通过运行下面这段代码获得.

(译者注;2016/11/25。这个知识点有点绕其实，其实就是目前还没有提供全局，只能通过[`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!")原型的构造函数获取。这样它所实例化出来的自然都是[`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!")对象。

)

<pre class="brush: js">Object.getPrototypeOf(async function(){}).constructor
</pre>

## 语法

    new AsyncFunction ([arg1[, arg2[, ...argN]],] functionBody)

### 参数

<dl>

<dt>`arg1, arg2, ... arg_N_`</dt>

<dd>这些名字用于函数的参数名. 每个必须是一个字符串，且符合JavaScript有效标示符或者用逗号隔开的一组字符串。例如"x","theValue"，或者"a,b".  
 </dd>

<dt>`functionBody`</dt>

<dd>一段包含函数定义的javascript函数声明</dd>

</dl>

## 详解

[`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。") 对象，在`AsyncFunction`构造函数 实例化的时候创建. 这要比用 [`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。")声明和调用一个异步函数效率低, 因为这些函数剩下的代码会被解析。

所有参数在函数创建时被当做标示名，按照它们传递时的顺序传递。

<div class="note">

**注意:** 通过`AsyncFunction构造函数创建的`[`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。") 在当前上下文不创建闭包; 而是在全局作用于创建. 当运行它们的时候很可能更改全局或者本地的变量，不再是当初创建的那个了. 这是使用 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。") 与 async function expression不同的地方.

</div>

把`AsyncFunction` 构造函数 当成函数调用 (也就是不适用new操作符) 和把它当做构造函数调用效果一样

## 属性

<dl>

<dt>`**AsyncFunction.length**`</dt>

<dd>`AsyncFunction` 构造函数的length属性的长度是1</dd>

<dt>[`AsyncFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>允许所有的异步函数对象添加属性</dd>

</dl>

## `AsyncFunction`原型对象

### 性能

###  <span style="color: #3b3c40; font-size: 14px;"><dl>

<dt>`**AsyncFunction.constructor**`</dt>

<dd>The initial value is [`AsyncFunction`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "The AsyncFunction constructor creates a new async function object. In JavaScript every async function is actually a AsyncFunction object.").</dd>

<dt>`**AsyncFunction.prototype[@@toStringTag]**`</dt>

<dd>Returns "AsyncFunction"</dd>

</dl></span> 

## `AsyncFunction` 实例

`AsyncFunction` 实例集成[`AsyncFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype "此页面仍未被本地化, 期待您的翻译!")方法和属性. 和所有的构造函数一样, 你可以通过更改构造函数的属性对象，使得所有示例话出的AsyncFunction对象也变化。

## 实例

### 通过`AsyncFunction`构造器创建一个异步函数

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
var a = new AsyncFunction("a", "b", "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);");
a(10, 20).then(v => {
  console.log(v); // prints 30 after 4 seconds
});
</pre>

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript Async Function  
<small lang="zh-CN">async function</small>](https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Proposal</td>

</tr>

</tbody>

</table>

## 兼容性

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

<th> Edge</th>

<th>Opera</th>

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>55</td>

<td>[52.0](/en-US/Firefox/Releases/52 "Released on 2017-03-07.") (52.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42</td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>52.0 (52.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>55</td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [`async function function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。")
*   [`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function "Function 构造器会创建一个新的 Function 对象。 在 JavaScript 中每个函数都是一个Function对象。")
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [Functions and function scope](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")