这个**生成器**对象是由一个生成器函数 [generator function](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") 返回的。并且它是同时遵守 [The iterable protocol](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) 可遍历协议和[The iterator protocol ](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)迭代器模式协议 .

## 语法

<pre class="syntaxbox">function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"</pre>

## 方法

<dl>

<dt>[`Generator.prototype.next()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next "next() 方法返回一个包含属性 done 和 value 的对象. 该方法也可以通过接受一个参数用以向生成器传值.")</dt>

<dd>返回 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式产生的值.</dd>

<dt>[`Generator.prototype.return()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/return "return() 方法返回给定的值并结束生成器。")</dt>

<dd>返回给定的值并结束生成器.</dd>

<dt>[`Generator.prototype.throw()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw "throw() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象。")</dt>

<dd>向生成器抛出错误.</dd>

</dl>

## 示例

### 无穷迭代器

<pre class="brush: js">function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...</pre>

## 旧生成器对象

Firefox (SpiderMonkey) 在 [JavaScript 1.7](/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7) 中也实现了生成器的一个早期版本，该版本的生成器不需要在生成器函数声明时使用星号(*)，只需在函数体中使用`yield` 关键字即可，尽管如此，该生成器已被废弃，在将来会被移除，请勿使用 ([bug 1083482](https://bugzilla.mozilla.org/show_bug.cgi?id=1083482 "Remove SpiderMonkey support for JS1.7 legacy generators")).

### 旧生成器方法

<dl>

<dt>`Generator.prototype.next()`<span title="This API has not been standardized."></span></dt>

<dd>返回 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式产生的值. 与ES6 生成器对象的<span style="font-family: courier,andale mono,monospace;">next()方法对应</span>.</dd>

<dt>`Generator.prototype.close()`<span title="This API has not been standardized."></span></dt>

<dd>关闭生成器，因此执行该函数后调用`next()函数时将会抛出` [`StopIteration`](/zh-CN/docs/Web/JavaScript/Reference/StopIteration "此页面仍未被本地化, 期待您的翻译!") 错误. 与ES6 生成器对象的<span style="font-family: courier,andale mono,monospace;">return()方法对应</span>..</dd>

<dt>`Generator.prototype.send()`<span title="This API has not been standardized."></span></dt>

<dd>用于将值发送到生成器Used to send a value to a generator. 该值由 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式返回, 并且返回下一个 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式产生的值. `send(x)` 对应于ES6生成器对象中的 `next(x)`</dd>

<dt>**`Generator.`**`prototype.`**`throw()`**<span title="This API has not been standardized."></span></dt>

<dd>向生成器抛出错误. 与ES6 生成器对象的<span style="font-family: courier,andale mono,monospace;">throw()方法对应</span>.</dd>

</dl>

### 旧生成器对象示例

<pre class="brush: js">function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
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
<small lang="zh-CN">Generator objects</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Generator objects</small>](https://tc39.github.io/ecma262/#sec-generator-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

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

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>39.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>39.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

### Legacy generators

*   [The legacy generator function](/zh-CN/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function "legacy generator 函数语句 使用特殊参数声明legacy generator函数。")
*   [The legacy generator function expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function "function 关键字可以用于在表达式中定义旧式的生成器函数。为使定义的函数为一个旧式的生成器函数，该函数的函数体中需要至少包含一个 yield 表达式。")
*   [`StopIteration`](/zh-CN/docs/Web/JavaScript/Reference/StopIteration "此页面仍未被本地化, 期待您的翻译!")
*   [The legacy Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)

### ES6 generators

*   [Functions](/zh-CN/docs/Web/JavaScript/Reference/Functions "通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。")
*   [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")
*   [The Iterator protocol](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol)