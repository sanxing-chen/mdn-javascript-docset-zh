<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

## 概述

在生成器中，`yield*` 可以把需要 `yield` 的值委托给另外一个[`生成器`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")或者其他任意的可迭代对象。

## 语法

<pre class="syntaxbox language-html"> yield* [[expression]];</pre>

<dl>

<dt>`expression`</dt>

<dd>任意的可迭代对象</dd>

</dl>

## 描述

`yield*` 一个可迭代对象，就相当于把这个可迭代对象的所有迭代值分次 `yield` 出去。

`yield*` 表达式本身的值就是当前可迭代对象迭代完毕（当done为true时）时的返回值。

## 示例

### 例子：委托给其他生成器

以下代码中，`g1()` `yield` 出去的每个值都会在 `g2()` 的 `next()` 方法中返回，就像那些 `yield` 语句是写在 `g2()` 里一样。

<pre class="brush: js">function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

### 例子：委托给其他类型的可迭代对象

除了生成器对象这一种可迭代对象，`yield* 还`可以 `yield` 其它任意的可迭代对象，比如说数组、字符串、`arguments` 对象等等。

<pre class="brush: js">function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* arguments;
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

### 例子：`yield*` 表达式的值

`yield*` 是一个表达式，不是语句，所以它会有自己的值。

<pre class="brush: js">function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }, 
                              // 此时 g4() 返回了 { value: "foo", done: true }

console.log(result);          // "foo"
</pre>

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Yield</small>](http://www.ecma-international.org/ecma-262/6.0/#)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[27.0](/en-US/Firefox/Releases/27 "Released on 2014-02-04.") (27.0)</td>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>27.0 (27.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

### Firefox 备注

*   从 Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) 开始，在 `yield` 和 `*` 之间不允许有换行符，否则会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.") 异常（[bug 981599](https://bugzilla.mozilla.org/show_bug.cgi?id=981599 "FIXED: Update parsing of 'yield' to match latest spec")）：

    <pre class="brush: js">function* foo() {
      yield
      *[];
    } // SyntaxError！</pre>

## 相关链接

*   [迭代器协议](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
*   [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")