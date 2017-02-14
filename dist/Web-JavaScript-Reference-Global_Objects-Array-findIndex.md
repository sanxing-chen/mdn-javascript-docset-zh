`**findIndex()**`方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

    function isBigEnough(element) {
      return element >= 15;
    }

    [12, 5, 8, 130, 44].findIndex(isBigEnough); // 3

另请参见  [`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "如果数组中某个元素满足测试条件，find() 方法就会返回满足条件的第一个元素，如果没有满足条件的元素，则返回 undefined。") 方法，它返回数组中找到的元素的值，而不是其索引。

## 语法

    arr.findIndex(callback[, thisArg])

### 参数

<dl>

<dt>`callback`</dt>

<dd>针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:

<dl>

<dt>`element`</dt>

<dd>当前元素.</dd>

<dt>`index`</dt>

<dd>当前元素的索引.</dd>

<dt>`array`</dt>

<dd>调用`findIndex`的数组.</dd>

</dl>

</dd>

<dt>`thisArg`</dt>

<dd>可选的。执行 **`<span style="font-family: courier new,andale mono,monospace; line-height: inherit;">callback</span>`** 时作为 `this对象 `<span style="line-height: inherit;">的值.</span></dd>

</dl>

## 描述

`**findIndex()**` 方法对数组中的每一个元素执行一次回调函数直至有一个回调函数返回真值** 。**如果找到了一个这样的元素， 则 `findIndex` 将会立刻返回这个元素的索引。否则 `findIndex `将会返回 -1。回调函数只有在数组的索引被分配值的时候才会被调用，若是索引被删除或者没有被赋值将不会被调用。

回调函数调用时有三个参数：元素的值，元素的索引，以及被遍历的数组。

如果一个 `thisArg` 参数被提供给 `findIndex`, 它将会被当作 `this `使用在每次回调函数被调用的时候。如果没有被提供，将会使用[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。

`findIndex 不会修改所调用的数组。`

在第一次调用`callback`函数时会确定元素的索引范围，因此在`findIndex`方法开始执行之后添加到数组的新元素将不会被`callback`函数访问到。如果数组中一个尚未被`callback`函数访问到的元素的值被`callback`函数所改变，那么当`callback`函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素不会被访问到。

## 示例

### 示例1: 查找数组中首个质数元素的索引

<span style="line-height: inherit;">下面的示例演示了如何查找一个数组中首个质数元素的索引, 找不到则返回 -1</span>.

    function isPrime(element, index, array) {
        var start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) return false;
        }
        return (element > 1);
    }

## Polyfill

本方法在ECMAScript 6规范中被加入，可能不存在于某些实现中。你可以通过以下代码来补充 `Array.prototype.findIndex`。

<pre class="brush: js">if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
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
        return i;
      }
    }
    return -1;
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.findIndex</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findIndex)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

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

<td>45.0</td>

<td>[25.0](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25.0)</td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>25.0 (25.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "如果数组中某个元素满足测试条件，find() 方法就会返回满足条件的第一个元素，如果没有满足条件的元素，则返回 undefined。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。")