<div>`**async function 声明了一个异步函数，并返回了一个 **`[`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") 对象。</div>

<div class="noinclude">

也可以通过用 [`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") 构造器或者一个[`async function`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!") 表达式去定义一个异步的函数。

</div>

## 语法

<pre class="syntaxbox">async function _name_([_param_[, _param_[, ... _param_]]]) {
   _statements_
}
</pre>

<dl>

<dt>`name`</dt>

<dd>方法的名字。</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>`传递给方法的参数名。`</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>方法体的语句。</dd>

</dl>

## 描述

调用异步函数时会返回一个 promise 对象。当这个异步函数返回一个值时，promise 的 resolve 方法将会处理这个返回值；当异步函数抛出的是异常或者非法值时，promise 的 reject 方法将处理这个异常值。

异步函数可能会包括  [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await "await 操作符被用来等待 async function 返回的 promise。") 表达式，这将会使异步函数暂停执行并等待 promise 解析传值后，继续执行异步函数并返回解析值。

## 例如

### 简单例子

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});
</pre>

### 通过异步方法重写 promise 链

返回 promise 的 API 将会被用于 promise 链，它会将方法分成若干部分。例如下面代码：

<pre class="brush: js">function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url) // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
</pre>

可以通过一个异步函数改写为：

<pre class="brush: js">async function getProcessedData(url) {
  let v:
  try {
    v = await downloadData(url); 
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
</pre>

注意，在上面的例子中返回语句中没有 await ，因为 `Promise.resolve 会`隐式包裹异步方法的返回值。

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

## 参见

*   [`async function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function "此页面仍未被本地化, 期待您的翻译!")
*   [`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") object
*   [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await "await 操作符被用来等待 async function 返回的 promise。")