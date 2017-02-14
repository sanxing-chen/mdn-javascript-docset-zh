**`async function`** 关键字可以用来定义一个异步函数表达式。

## 语法

<pre class="syntaxbox">async function [_name_]([_param1_[, _param2[_, ..., _paramN_]]]) {
   _statements_
}</pre>

### 参数

<dl>

<dt>`name`</dt>

<dd>函数名称。可以省略，以此来声明一个匿名的函数。也是用于本地调用函数体的一个名称。</dd>

<dt>`paramN`</dt>

<dd>传入函数的参数名。</dd>

<dt>`statements`</dt>

<dd>函数体内的语句声明。</dd>

</dl>

## 描述

`async function` 表达式非常类似于 [`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。") 声明语句，并且几乎拥有等同的语法。他们之间主要的区别在于函数名称，async function表达式可以省略函数名称来创建一个匿名的函数。另见 [functions](/en-US/docs/Web/JavaScript/Reference/Functions) 章节获取更多信息。

## 示例

### 简单例子

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

var add1 = async function(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

var add2 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
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

<th> Edge</th>

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

<td>基本支持</td>

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

## 相关链接

*   [`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function "调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。")
*   [`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") 对象
*   [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await "await 操作符被用来等待 async function 返回的 promise。")