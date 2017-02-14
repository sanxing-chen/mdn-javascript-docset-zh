**Promise **对象用于异步计算. 一个Promise对象代表一个值, 该值可以在当前或未来可用, 或永远不可用.

## 语法

<pre class="syntaxbox">new Promise(/* _executor */ function(resolve, reject){...}_);
</pre>

### 参数

<dl>

<dt>executor</dt>

<dd>一个函数, 该函数有2个参数:`resolve`和`reject<font face="Open Sans, Arial, sans-serif">。</font>``executor `函数在实现Promise对象时立即被调用, `resolve`和`reject`会被传入(executor函数甚至在Promise的构造函数返回之前就被执行). `resolve`和`reject`都是函数, 当被调用时, 分别"清理"和"拒绝"promise. executor通常初始化一些异步工作, 之后, 一旦完成, 会调用`resolve函数`清理promise, 或者在发生错误时调用reject拒绝promise.</dd>

</dl>

## 描述

`**Promise**` 对象是一个"值"的代理，该"值"在promise对象创建时可能是未知的。它允许你为异步操作的事件结果"成功返回的值"或"失败"绑定一个处理方法。 这使得异步方法可以像同步方法那样返回值：不同于立即返回最终结果, 异步方法返回一个promise对象, 可以在未来提供一个值.

`Promise`有以下几种状态:

*   _pending_: 初始状态, 既不是 fulfilled 也不是 rejected.
*   _fulfilled_: 表示操作被成功完成.
*   _rejected_: 表示该操作失败.

pending状态的promise对象可通过一个值转换为_fulfilled_ 状态，也可转换为 _rejected_ 状态。当状态发生转换时，promise.then绑定的<span style="line-height: 1.5;">方法（函数句柄）就会被调用。(当绑定方法时，如果 promise对象已经处于 fulfilled 或 rejected 状态，那么相应的方法将会被立刻调用， 所以在异步操作的完成情况和它的绑定方法之间不存在竞争条件。)</span>

因为<span style="font-family: consolas,monaco,andale mono,monospace;">[`Promise.prototype.then`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then "then()方法返回一个 Promise。它有两个参数：分别为 Promise 在成功和失败情况下的回调函数。")</span>和 `[`Promise.prototype.catch`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch "catch() 方法只处理 Promise 失败时的情况，它返回一个 Promise。该方法的行为与调用 Promise.prototype.then(undefined, onRejected) 相同。")`方法返回 promises对象, 所以它们可以被链式调用—— 一种被称为 _composition _的操作。

![](https://mdn.mozillademos.org/files/8633/promises.png)

<div class="note">

<span style="font-size: 14px; line-height: 21px;">**注意：**</span> 有一些语言中有惰性求值和延时计算的特性, 它们也被成为"promises" --例如Scheme. Javascript中的promise代表一种已经发生的状态, 而且可以通过回调函数链在一起. 如果你想要的是表达式的延时计算, 考虑无参数的"[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)": f = () => _表达式_ 创建惰性求值的表达式_,_ 使用 **f()** 求值.

<span style="font-size: 14px; line-height: 21px;">**注意：**</span> 如果一个promise对象处在fulfilled或rejected状态而不是pending状态，那么它也可以被称为_settled_状态。你可能也会听到一个术语_resolved_ ，它表示promise对象处于settled状态，或者promise对象被锁定在了调用链中。关于promise的状态， Domenic Denicola 的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 有更多详情可供参考。

</div>

## 属性

<dl>

<dt>`Promise.length`</dt>

<dd>长度属性，其值为 1 (构造器参数的数目).</dd>

<dt>[`Promise.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype "Promise.prototype 属性表示 Promise 构造器的原型.")</dt>

<dd>表示 `Promise` 构造器的原型.</dd>

</dl>

## 方法

<dl>

<dt>[`Promise.all(iterable)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all "Promise.all(iterable) 方法指当所有在可迭代参数中的 promises 已完成，或者第一个传递的 promise（指 reject）失败时，返回 promise。")</dt>

<dd>这个方法返回一个新的promise对象，该promise对象在iterable里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）</dd>

<dt>[`Promise.race(iterable)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race "Promise.race(iterable) 方法返回一个 promise，在可迭代的 resolves 或 rejects 中 promises 有一个完成或失败，将显示其值或原因。")</dt>

<dd>当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。</dd>

</dl>

<dl>

<dt>[`Promise.reject(reason)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject "Promise.reject(reason)方法返回一个用reason拒绝的Promise。")</dt>

<dd>调用Promise的rejected句柄，并返回这个Promise对象。</dd>

</dl>

<dl>

<dt>[`Promise.resolve(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve "Promise.resolve(value)方法返回一个以给定值解析后的Promise对象。但如果这个值是个thenable（即带有then方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态（指resolved/rejected/pending/settled）；否则以该值为成功状态返回promise对象。")</dt>

<dd>用成功值value完成一个`Promise对象。如果该value为可继续的（thenable，即带有then方法），返回的Promise对象会“跟随”这个value，采用这个value的最终状态；否则的话返回值会用这个value满足（fullfil）返回的Promise对象。`</dd>

</dl>

## `Promise`原型

### 属性

<dl>

<dt>`Promise.prototype.constructor`</dt>

<dd>返回创建了实例原型的函数.  默认为 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise "所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。（这里的翻译源自ECMAScript 2015关于Promise的解释，没有原文翻译MDN的原话，如果您有疑问，可以参看英文的说明文档：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise---译者注）") 函数.</dd>

</dl>

### 方法

<dl>

<dt>[`Promise.prototype.catch(onRejected)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch "catch() 方法只处理Promise被拒绝的情况，并返回一个Promise。该方法的行为和调用Promise.prototype.then(undefined, onRejected)相同。")</dt>

<dd>添加一个否定(rejection) 回调到当前 promise, 返回一个新的promise。如果这个回调被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的肯定结果作为新promise的肯定结果.</dd>

<dt>[`Promise.prototype.then(onFulfilled, onRejected)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then "then()方法返回一个Promise。它有两个参数，分别为Promise在 success 和 failure 情况下的回调函数。")</dt>

<dd>添加肯定和否定回调到当前 promise, 返回一个新的 promise, 将以回调的返回值 来resolve.</dd>

</dl>

## 示例

### 创建Promise

<pre class="brush: html hidden"><button id="btn">Make a promise!</button> 
<div id="log"></div></pre>

这个小例子展示了`Promise的机制。每当`[`<button>`](/zh-CN/docs/Web/HTML/Element/button "HTML <button>元素 表示一个可点击的按钮。")被按下时，`testPromise()` 函数就会被执行。该函数会创建一个用<span style="font-family: consolas,monaco,andale mono,monospace;">window.setTimeout在1到3秒（随机）后用‘result’字符串完成的</span>promise。

这里通过`p1.then方法`的满足回调，简单的输出了promise的满足过程，这些输出显示了该方法的同步部分是如何和promise的异步完成解耦的。

<pre><!--标注：下面略微修改了英文版的示例，主要是执行3次testPromise()的效果，如果您有疑问，可以参看英文的说明文档：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise-->
<div id="log"></div>
<script>
    'use strict';
    var promiseCount = 0;
    function testPromise() {
        var thisPromiseCount = ++promiseCount;

        var log = document.getElementById('log');
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 开始(同步代码开始)<br/>');

        // 我们创建一个新的promise: 然后用'result'字符串完成这个promise (3秒后)
        var p1 = new Promise(function (resolve, reject) {
            // 完成函数带着完成（resolve）或拒绝（reject）promise的能力被执行
            log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise开始(异步代码开始)<br/>');

            // 这只是个创建异步完成的示例
            window.setTimeout(function () {
                // 我们满足（fullfil）了这个promise!
                resolve(thisPromiseCount)
            }, Math.random() * 2000 + 1000);
        });

        // 定义当promise被满足时应做什么
        p1.then(function (val) {
            // 输出一段信息和一个值
            log.insertAdjacentHTML('beforeend', val + ') Promise被满足了(异步代码结束)<br/>');
        });

        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 建立了Promise(同步代码结束)<br/><br/>');
    }
</script>
</pre>

<pre class="brush: js hidden">if ("Promise" in window) { var btn = document.getElementById("btn"); btn.addEventListener("click",testPromise); } else { log = document.getElementById('log'); log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface."; }
</pre>

这个例子在按钮被按下后执行。你需要一个支持Promise的浏览器。你能通过短时间内按多次按钮看到不同的promise一个接一个的被完成。

<iframe id="frame_Creating_a_Promise" height="200" src="https://mdn.mozillademos.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise$samples/Creating_a_Promise?revision=1184589" frameborder="0" width="500" class="live-sample-frame sample-code-frame"></iframe>

## 使用XMLHttpRequest()的例子

### 创建一个Promise

这个例子展示了如何用promise报告一个[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest "XMLHttpRequest 是一个API, 它为客户端提供了在客户端和服务器之间传输数据的功能。它提供了一个通过 URL 来获取数据的简单方式，并且不会使整个页面刷新。这使得网页只更新一部分页面而不会打扰到用户。XMLHttpRequest 在 AJAX 中被大量使用。")的成功或失败。

<pre class="brush: js">'use strict';

// A-> $http function is implemented in order to follow the standard Adapter pattern
function $http(url){

  // A small example of object
  var core = {

    // Method that performs the ajax request
    ajax : function (method, url, args) {

      // Creating a promise
      var promise = new Promise( function (resolve, reject) {

        // Instantiates the XMLHttpRequest
        var client = new XMLHttpRequest();
        var uri = url;

        if (args && (method === 'POST' || method === 'PUT')) {
          uri += '?';
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                uri += '&';
              }
              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }

        client.open(method, uri);
        client.send();

        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            // Performs the function "resolve" when this.status is equal to 2xx
            resolve(this.response);
          } else {
            // Performs the function "reject" when this.status is different than 2xx
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });

      // Return the promise
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};
// End A

// B-> Here you define its functions and its payload
var mdnAPI = 'https://developer.mozilla.org/en-US/search.json';
var payload = {
  'topic' : 'js',
  'q'     : 'Promise'
};

var callback = {
  success : function(data){
     console.log(1, 'success', JSON.parse(data));
  },
  error : function(data){
     console.log(2, 'error', JSON.parse(data));
  }
};
// End B

// Executes the method call 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success) 
  .catch(callback.error);

// Executes the method call but an alternative way (1) to handle Promise Reject case 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success, callback.error);

// Executes the method call but an alternative way (2) to handle Promise Reject case 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success)
  .then(undefined, callback.error);
</pre>

### 使用XHR加载图像

`<font face="Open Sans, sans-serif">另一个用了</font>Promise<font face="Open Sans, sans-serif">和</font>``[XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest)加载一个图像的例子可在`MDN GitHub [promise-test](https://github.com/mdn/promises-test/blob/gh-pages/index.html) 中找到。 你也可以 [see it in action](http://mdn.github.io/promises-test/)。每一步都有注释可以让你详细的跟随了解Promise和XHR架构。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[domenic/promises-unwrapping](https://github.com/domenic/promises-unwrapping)</td>

<td>草稿</td>

<td>标准化工作正在这里进行</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Promise</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>ECMA标准中的首次定义</td>

</tr>

</tbody>

</table>

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>32.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[29.0](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>19</td>

<td>7.1</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>29.0 (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

<td>32.0</td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [Promises/A+ specification](http://promisesaplus.com/)
*   [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
*   [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
*   [Jake Archibald: JavaScript Promises: There and Back Again](http://www.html5rocks.com/en/tutorials/es6/promises/)
*   [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patter in JavaScript](http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
*   [Matt Greer: JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
*   [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
*   [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
*   [Promise polyfill](https://github.com/jakearchibald/es6-promise/)
*   [Udacity: JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)