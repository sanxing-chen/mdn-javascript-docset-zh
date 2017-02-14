 `**find()**` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。

    function isBigEnough(element) {
      return element >= 15;
    }

    [12, 5, 8, 130, 44].find(isBigEnough); // 130

另请参见  [`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。") 方法，它返回数组中找到的元素的索引，而不是其值。

如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用[`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。") 或 [`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。")。

## 语法

    arr.find(callback[, thisArg])

### 参数

<dl>

<dt>`callback`</dt>

<dd>在数组每一项上执行的函数，接收 3 个参数：

<dl>

<dt>`element`</dt>

<dd>当前遍历到的元素。</dd>

<dt>`index`</dt>

<dd>当前遍历到的索引。</dd>

<dt>`array`</dt>

<dd>数组本身。</dd>

</dl>

</dd>

<dt>`thisArg`</dt>

<dd>可选，指定 `callback 的 this 参数。`</dd>

</dl>

## 描述

find方法对数组中的每一项元素执行一次`callback` 函数，直至有一个`callback返回true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回undefined。注意callback函数只会在分配了值的数组索引上调用，而不会在已删除或未分配值的索引上调用。`

调用callback函数带有3个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了thisArg参数，那么它将作为每次callback函数执行时的上下文对象，否则上下文对象为undefined。

find方法不会改变数组。

在第一次调用callback函数时会确定元素的索引范围，因此在find方法开始执行之后添加到数组的新元素将不会被callback函数访问到。如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素不会被访问到。

## 示例

### 用对象的属性查找数组里的对象

<pre>var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }</pre>

### 寻找数组中的质数

下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回undefined）

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

## Polyfill

本方法在ECMAScript 6规范中被加入，可能不存在于某些实现中。你可以通过以下代码来补充 `Array.prototype`.find。

<pre class="brush: js">if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}</pre>

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
<small lang="zh-CN">Array.prototype.find</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.find</small>](https://tc39.github.io/ecma262/#sec-array.prototype.find)</td>

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

<th>Edge</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>45.0</td>

<td>[25.0](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25.0)</td>

<td>12</td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Edge</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>25.0 (25.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>12</td>

<td><span style="color: #f00;">未实现</span></td>

<td>8.0</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。")
*   [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")