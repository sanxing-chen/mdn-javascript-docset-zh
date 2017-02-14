**`unshift()`** 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。

<pre class="brush:js">let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);
// [4, 5, 1, 2, 3]

</pre>

## 语法

<pre class="syntaxbox">arr.unshift(element1, ..., elementN)
</pre>

### 参数列表

<dl>

<dt><font face="Courier New, Andale Mono, monospace">element1, ..., elementN</font></dt>

<dd>要添加到数组开头的元素。</dd>

</dl>

### 返回值

当一个对象调用该方法时，返回其 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性值。

## 描述

`unshift` 方法会在调用它的类数组（array-like）对象的开始位置插入给定的参数。

`unshift` 特意被设计成具有通用性；这个方法能够通过 [`call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") 或 [`apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 方法作用于类似数组的对象上。<span style="line-height: inherit;">不过对于没有 length 属性（代表从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。</span>

## 例子

<pre class="brush:js">var arr = [1, 2];

arr.unshift(0); //result of call is 3, the new array length
//arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
//arr is [-2, -1, 0, 1, 2]

arr.unshift( [-3] );
//arr is [[-3], -2, -1, 0, 1, 2]</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 3rd Edition</td>

<td>Standard</td>

<td>Initial definition.  
Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.unshift</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.unshift</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.unshift)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>1.0</td>

<td>1.0 (1.7 or earlier)</td>

<td>5.5</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。")
*   [`Array.prototype.pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。")
*   [`Array.prototype.shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法从数组中删除第一个元素，并返回该元素。此方法更改数组的长度。")
*   [`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。")