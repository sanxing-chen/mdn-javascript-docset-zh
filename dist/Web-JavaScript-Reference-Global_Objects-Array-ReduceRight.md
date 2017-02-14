## 概述

`**reduceRight()**` 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 `reduce()` 的执行方向相反）

## 语法

    arr.reduceRight(callback[, initialValue])

### 参数

<dl>

<dt>`callback`</dt>

<dd>一个回调函数，用来操作数组中的每个元素，可接受四个参数：

<dl>

<dt>`previousValue`</dt>

<dd>上一次调用回调的返回值，或提供的 `initialValue`</dd>

<dt>`currentValue`</dt>

<dd>当前被处理的元素</dd>

<dt>`index`</dt>

<dd>当前处理元素的索引</dd>

<dt>`array`</dt>

<dd>调用 `reduce` 的数组</dd>

</dl>

</dd>

<dt>`initialValue`</dt>

<dd>可作为第一次调用回调 `callback` 的第一个参数</dd>

<dt>

### 返回值

</dt>

<dd>

执行之后的返回值

</dd>

</dl>

## 描述

`reduceRight` 为数组中每个元素调用一次 `callback` 回调函数，但是数组中被删除的索引或从未被赋值的索引会跳过。回调函数接受四个参数：初始值（或上次调用回调的返回值）、当前元素值、当前索引，以及调用 `reduce` 的数组。

可以像下面这样调用 `reduceRight` 的回调函数 `callback`：

<pre class="brush: js">array.reduceRight(function(previousValue, currentValue, index, array) {
    // ...
});
</pre>

首次调用回调函数时，`previousValue` 和 `currentValue` 可以是两个值之一。如果调用 `reduceRight` 时提供了 `initialValue` 参数，则 `previousValue` 等于 `initialValue`，`currentValue` 等于数组中的最后一个值。如果没有提供 `initialValue` 参数，则 `previousValue` 等于数组最后一个值， `currentValue` 等于数组中倒数第二个值。

如果数组为空，且没有提供 `initialValue` 参数，将会抛出一个 `TypeError 错误。如果数组只有一个元素且没有提供` `initialValue` 参数，或者提供了 `initialValue` 参数，但是数组为空将会直接返回数组中的那一个元素或 `initialValue` 参数，而不会调用 `callback`。

该函数的完整执行过程见下例：

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});
</pre>

回调将会被调用四次，每次调用的参数及返回值如下：

<table style="width: 100%;">

<thead>

<tr>

<th scope="col"> </th>

<th scope="col">`previousValue`</th>

<th scope="col">`currentValue`</th>

<th scope="col">`index`</th>

<th scope="col">`array`</th>

<th scope="col">return value</th>

</tr>

</thead>

<tbody>

<tr>

<th scope="row">first call</th>

<td>4</td>

<td>3</td>

<td>3</td>

<td>`[0,1,2,3,4]`</td>

<td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">7</span></font></td>

</tr>

<tr>

<th scope="row">second call</th>

<td>7</td>

<td>`2`</td>

<td>`2`</td>

<td>`[0,1,2,3,4]`</td>

<td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">9</span></font></td>

</tr>

<tr>

<th scope="row">third call</th>

<td>9</td>

<td>1</td>

<td>1</td>

<td>`[0,1,2,3,4]`</td>

<td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">10</span></font></td>

</tr>

<tr>

<th scope="row">fourth call</th>

<td>10</td>

<td>0</td>

<td>0</td>

<td>`[0,1,2,3,4]`</td>

<td>`10`</td>

</tr>

</tbody>

</table>

`reduceRight` 返回值是最后一次调用回调的返回值（`10）。`

如果提供了一个 `initialValue` 参数，则结果如下：

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}, 10);
</pre>

<table style="width: 100%;">

<thead>

<tr>

<th scope="col"> </th>

<th scope="col">`previousValue`</th>

<th scope="col">`currentValue`</th>

<th scope="col">`index`</th>

<th scope="col">`array`</th>

<th scope="col">return value</th>

</tr>

</thead>

<tbody>

<tr>

<th scope="row">first call</th>

<td>`10`</td>

<td>4</td>

<td>4</td>

<td>`[0,1,2,3,4]`</td>

<td>`14`</td>

</tr>

<tr>

<th scope="row">second call</th>

<td>14</td>

<td>3</td>

<td>3</td>

<td>`[0,1,2,3,4]`</td>

<td>`17`</td>

</tr>

<tr>

<th scope="row">third call</th>

<td>17</td>

<td>`2`</td>

<td>`2`</td>

<td>`[0,1,2,3,4]`</td>

<td>`19`</td>

</tr>

<tr>

<th scope="row">fourth call</th>

<td>19</td>

<td>1</td>

<td>1</td>

<td>`[0,1,2,3,4]`</td>

<td><font face="Courier New, Andale Mono, monospace"><span style="line-height: normal;">20</span></font></td>

</tr>

<tr>

<th scope="row">fifth call</th>

<td>20</td>

<td>0</td>

<td>0</td>

<td>`[0,1,2,3,4]`</td>

<td>`20`</td>

</tr>

</tbody>

</table>

`reduceRight` 返回值为 20。

## 示例

### 例子：求一个数组中所有值的和

<pre class="brush: js">var total = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
});
// total == 6
</pre>

### 例子：扁平化（flatten）一个元素为数组的数组

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
</pre>

### 例子：reduce 与 reduceRight 之间的区别

    var a = ["1", "2", "3", "4", "5"]; 
    var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
    var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

    console.log(left);  // "12345"
    console.log(right); // "54321"

## 兼容性旧环境（Polyfill）

`reduceRight` 被添加到 ECMA-262 标准第 5 版，因此它在某些实现环境中可能不被支持。把下面的代码添加到脚本开头可以解决此问题，从而允许在那些没有原生支持 `reduceRight` 的实现环境中使用它。

    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: http://es5.github.io/#x15.4.4.22
    if ('function' !== typeof Array.prototype.reduceRight) {
      Array.prototype.reduceRight = function(callback /*, initialValue*/) {
        'use strict';
        if (null === this || 'undefined' === typeof this) {
          throw new TypeError('Array.prototype.reduce called on null or undefined' );
        }
        if ('function' !== typeof callback) {
          throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = len - 1, value;
        if (arguments.length >= 2) {
          value = arguments[1];
        } else {
          while (k >= 0 && !(k in t)) {
            k--;
          }
          if (k < 0) {
            throw new TypeError('Reduce of empty array with no initial value');
          }
          value = t[k--];
        }
        for (; k >= 0; k--) {
          if (k in t) {
            value = callback(value, t[k], k, t);
          }
        }
        return value;
      };
    }

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
<small lang="zh-CN">Array.prototype.reduceRight</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.22)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.8</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.reduceRight</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceright)</td>

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

<td>[3.0](/en-US/Firefox/Releases/3 "Released on 2008-06-17.") (1.9)</td>

<td>9</td>

<td>10.5</td>

<td>4.0</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。")