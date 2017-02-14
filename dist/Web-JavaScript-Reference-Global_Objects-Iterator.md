<div class="warning">**非标准。** `**Iterator**` 函数是一个 SpiderMonkey 专有特性，并且会在某一时刻被删除。为将来使用的话，请考虑使用 [for..of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of "/en-US/docs/Web/JavaScript/Reference/Statements/for...of") 循环和  [迭代协议](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)。</div>

`**Iterator**` 函数返回一个对象，它实现了遗留的迭代协议，并且迭代了一个对象的可枚举属性。

## 语法

<pre class="syntaxbox">Iterator(<var>object</var>, [keyOnly])</pre>

### 参数

<dl>

<dt>`object`</dt>

<dd>要迭代属性的对象。</dd>

<dt>`keyOnly`</dt>

<dd> 如果`keyOnly`是真值，`Iterator.prototype.next` `只返回property_name` 。</dd>

</dl>

## 描述

`返回迭代了object的Iterator` 实例。如果`keyOnly`为假值，则`Iterator` 实例返回每次迭代而生成的 `[property_name, property_value]` 数组，否则，如果`keyOnly`是真值，则它返回每次迭代的 `property_name`。如果`object` 是 `Iterator` 实例或 [`Generator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator "这个生成器对象是由一个生成器函数 generator function 返回的。并且它是同时遵守 The iterable protocol 可遍历协议和The iterator protocol 迭代器模式协议 .") 实例 ，则它返回 `object` 自身。

## 属性

<dl>

<dt>`**Iterator.prototype[@@iterator]**`</dt>

<dd>返回一个函数，它返回符合[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols "几个新增加的到ECMAScript 2015 (ES6)，它不并是新的内置插件或语法，而是一种协议。这种协议能被任何遵循某些约定的对象实现。")的迭代对象。</dd>

</dl>

## 方法

<dl>

<dt>`**Iterator.prototype.next**`</dt>

<dd>返回`[property_name, property_value]` 格式或`property_name` 的下一项。 如果没有更多项，抛出 `[StopIteration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/StopIteration)` 。</dd>

</dl>

## 示例

### 迭代一个对象的属性

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};
var iter = Iterator(a);
console.log(iter.next()); // ["x", 10]
console.log(iter.next()); // ["y", 20]
console.log(iter.next()); // throws StopIteration
</pre>

### 使用遗留的`解构for-in迭代对象的属性`

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var [name, value] in Iterator(a)) {
  console.log(name, value);   // x 10
                              // y 20
}
</pre>

### 使用`for-of迭代`

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var [name, value] of Iterator(a)) {  // @@iterator is used
  console.log(name, value);   // x 10
                              // y 20
}
</pre>

### 迭代属性名

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

for (var name in Iterator(a, true)) {
  console.log(name);   // x
                       // y
}
</pre>

### 传入 Generator 实例

<pre class="brush: js">function* f() {
  yield 'a';
  yield 'b';
}
var g = f();

console.log(g == Iterator(g)); // true

for (var v in Iterator(g)) {
  console.log(v);   // a
                    // b
}
</pre>

### 传入 Iterator 实例

<pre class="brush: js">var a = {
  x: 10,
  y: 20,
};

var i = Iterator(a);

console.log(i == Iterator(i)); // true
</pre>

## 规范

非标准。不是目前任何标准文档的一部分。

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

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Iterators and Generators](/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators "/en-US/docs/JavaScript/Guide/Iterators_and_Generators")
*   `[StopIteration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/StopIteration)`