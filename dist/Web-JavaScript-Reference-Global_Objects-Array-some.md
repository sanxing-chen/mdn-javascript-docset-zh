## 概述

`**some()**` 方法测试数组中的某些元素是否通过了指定函数的测试。

## 语法

    arr.some(callback[, thisArg])

### 参数

<dl>

<dt>`callback`</dt>

<dd>用来测试每个元素的函数。</dd>

<dt>`thisArg`</dt>

<dd>执行 callback 时使用的 `this` 值。</dd>

</dl>

## 描述

`some` 为数组中的每一个元素执行一次 `callback` 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，`some` 将会立即返回 `true`。否则，`some` 返回 `false`。`callback` 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

`callback`<span style="line-height: 1.5;"> 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。</span>

如果为 `some` 提供了一个 `thisArg` 参数，将会把它传给被调用的 `callback`，作为 `this` 值。否则，在非严格模式下将会是全局对象，严格模式下是 `undefined`。

`some` 被调用时不会改变数组。

`some` 遍历的元素的范围在第一次调用 `callback`. 时就已经确定了。在调用 `some` 后被添加到数组中的值不会被 `callback` 访问到。如果数组中存在且还未被访问到的元素被 `callback` 改变了，则其传递给 `callback` 的值是 `some` 访问到它那一刻的值。

## 示例

### 例子：测试数组元素的值

下面的例子检测在数组中是否有元素大于 10。

<pre class="brush: js">function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
</pre>

## 兼容旧环境（Polyfill）

在第 5 版时，`some` 被添加进 ECMA-262 标准；这样导致某些实现环境可能不支持它。你可以把下面的代码插入到脚本的开头来解决此问题，从而允许在那些没有原生支持它的实现环境中使用它。该算法是 ECMA-262 第 5 版中指定的算法，假定 `Object `和 `TypeError` 拥有他们的初始值，且 `fun.call` 等价于 `[`Function.prototype.call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")。`

<pre class="brush: js">if (!Array.prototype.some)
{
  Array.prototype.some = function(fun /*, thisArg */)
  {
    'use strict';

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && fun.call(thisArg, t[i], i, t))
        return true;
    }

    return false;
  };
}
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

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.some</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.17)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.6</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.some</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.some)</td>

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

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[1.5](/en-US/Firefox/Releases/1.5 "Released on 2005-11-25.") (1.8)</td>

<td>9</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>1.0 (1.8)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。")
*   [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")