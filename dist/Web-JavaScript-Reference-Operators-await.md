await 操作符被用来等待 [`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。") 返回的 promise。

## 语法

<pre class="syntaxbox">[_rv_] = await _expression_;</pre>

<dl>

<dt><font face="Consolas, Liberation Mono, Courier, monospace">表达式</font></dt>

<dd>一个 promise 或者 任何值来等待解决方案</dd>

<dt><font face="Consolas, Liberation Mono, Courier, monospace">返回值</font></dt>

<dd>

返回 promise resolved 后的值，如果不是 promise，则返回其自身。

</dd>

</dl>

## 描述

await 表达式会造成异步函数停止执行并且等待 promise 的解决，当值被 resolved，异步函数会恢复执行以及返回 resolved 值。如果该值不是一个 promise，它将会被转换成一个 resolved 后的 promise。

如果 promise 被 rejected，await 表达式会抛出异常值。

## 例子

如果一个 promise 传给 await 表达式，它将会等待 promise 的解决和返回的 resolved 值。

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
</pre>

如果这个值不是一个 promise，那么会把它转换成一个已经 resolved 的 promise，并且等待它。

<pre class="brush: js">async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
</pre>

如果 promise 被 rejected，异常值会被抛出。

<pre class="brush: js">async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();</pre>

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

<td>[ECMAScript Async Functions  
<small lang="zh-CN">async function</small>](https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>提案</td>

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

<th>Edge</th>

<th>Opera</th>

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>基本支持</td>

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

<td> 基本支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>52.0 (52.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>55</td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。")
*   [`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!")
*   [`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") object