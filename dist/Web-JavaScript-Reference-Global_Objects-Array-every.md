## 概述

`**every()**` 方法测试数组的所有元素是否都通过了指定函数的测试。

## 语法

    arr.every(callback[, thisArg])

### 参数

<dl>

<dt>`callback`</dt>

<dd>用来测试每个元素的函数。</dd>

<dt>`thisArg`</dt>

<dd>执行 `callback` 时使用的 `this` 值。</dd>

</dl>

## 描述

`every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个使 `callback` 返回 _false_（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

`callback` 被调用时传入三个参数：元素值，元素的索引，原数组。

如果为 `every` 提供一个 `thisArg` 参数，在该参数为调用 `callback` 时的 `this` 值。如果省略该参数，则 `callback` 被调用时的 `this` 值，在非严格模式下为全局对象，在严格模式下传入 `undefined`。

`every` 不会改变原数组。

`every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is [vacuously true](http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics) that all elements of the [empty set](http://en.wikipedia.org/wiki/Empty_set#Common_problems) satisfy any given condition.)

## 实例

### 例子：检测所有数组元素的大小

下例检测数组中的所有元素是否都大于 10。

<pre class="brush: js">function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
</pre>

## 兼容旧环境（Polyfill）

在第 5 版时，`every` 被添加进 ECMA-262 标准；因此在某些实现环境中不被支持。你可以把下面的代码放到脚本的开头来解决此问题，该代码允许在那些没有原生支持 `every` 的实现环境中使用它。该算法是 ECMA-262 第5版中指定的算法，假定 `Object` 和 `TypeError` 拥有它们的初始值，且 `fun.call` 等价于 [`Function.prototype.call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")。

<pre class="brush: js">if (!Array.prototype.every)
{
  Array.prototype.every = function(fun /*, thisArg */)
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
      if (i in t && !fun.call(<span style="line-height: normal;">thisArg</span><span style="line-height: normal;">, t[i], i, t))</span>
        return false;
    }

    return true;
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
<small lang="zh-CN">Array.prototype.every</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.6</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.every</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)</td>

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
*   [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")