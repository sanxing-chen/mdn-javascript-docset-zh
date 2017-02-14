`**function***` 声明 (`function`关键字后跟一个星号）定义了一个**_生成器函数_ (**_generator function_**)**，它返回一个  [`Generator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator "这个生成器对象是由一个生成器函数 generator function 返回的。并且它是同时遵守 The iterable protocol 可遍历协议和The iterator protocol 迭代器模式协议 .")  对象。

<div class="noinclude">

你也可以定义 **_生成器函数_  **使用构造函数  [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!") 和一个  [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。") 。

</div>

## 语法

<pre class="syntaxbox">function* _name_([_param_[, _param_[, ... _param_]]]) { _statements_ }
</pre>

<dl>

<dt>`name`</dt>

<dd>函数名</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>要传递给函数的一个参数的名称。一个函数最多可以有255个参数。</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>包含函数体的语句。</dd>

</dl>

## 描述

**生成器**是一种可以从中退出并在之后重新进入的函数。生成器的环境（绑定的变量）会在每次执行后被保存，下次进入时可继续使用。

调用一个**生成器函数**并不马上执行它的主体，而是返回一个这个生成器函数的**迭代器（iterator）对象**。当这个迭代器的`next()方法被调用时，**生成器函数**的主体会被执行直至第一个`[`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")表达式，该表达式定义了迭代器返回的值，或者，被 [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield* "在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。")委派至另一个生成器函数。`next()方法返回一个对象，该对象有一个`<span style="font-family: consolas,monaco,andale mono,monospace;">value属性，表示</span>`产出的值，和一个done属性，表示生成器是否已经产出了它最后的值。`

## 示例

### 简单示例

<pre class="brush: js">function* idMaker(){
  var index = 0;
  while(index<3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...</pre>

### yield*的示例

<pre class="brush: js">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">function*</small>](http://www.ecma-international.org/ecma-262/6.0/#)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">function*</small>](https://tc39.github.io/ecma262/#)</td>

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

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>39.0</td>

<td>[26.0](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>`yield*`</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[27.0](/en-US/Firefox/Releases/27 "Released on 2014-02-04.") (27.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>`IteratorResult` object instead of throwing</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[29.0](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td>26.0 (26.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>39.0</td>

</tr>

<tr>

<td>`yield*`</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>27.0 (27.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>`IteratorResult` object instead of throwing</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>29.0 (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## Firefox-specific notes

#### Firefox 26之前的生成器和迭代器

旧版本的Firefox实施了旧版本的生成器提案。旧版中用普通的`function关键字定义`（没有星号）.

#### `IteratorResult`不再抛出错误

从Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)开始，完成的生成器函数不再抛出[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") "generator has already finished". 而是返回一个`IteratorResult`对象：<span style="font-family: consolas,monaco,andale mono,monospace;">{ value: undefined, done: true }</span> ([bug 958951](https://bugzilla.mozilla.org/show_bug.cgi?id=958951 "FIXED: Return IteratorResult object for completed generators instead of throwing"))。

## 相关链接

*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!") object
*   [迭代器协议](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")
*   [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield* "在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!") object
*   [`function declaration`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")
*   其他网络资源:
    *   [Regenerator](http://facebook.github.io/regenerator/) an ES6 generator compiler to ES5
    *   [Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
    *   [Hemanth.HM: The New gen of *gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
    *   [Task.js](http://taskjs.org/)