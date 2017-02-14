`**push()**` 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。

<pre>var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); 
// [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); 
// [1, 2, 3, 4, 5, 6, 7]</pre>

## 语法

<pre class="syntaxbox">arr.push(element1, ..., elementN)
</pre>

### 参数

<dl>

<dt>`element_N_`</dt>

<dd>被添加到数组末尾的元素。</dd>

</dl>

### 返回值

当调用该方法时，新的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性值将被返回。

## 描述

push方法将值附加到数组中。

`push` 方法有意具有通用性。该方法和 [`call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") 或 [`apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 一起使用时，可应用在类似数组的对象上。`push` 方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 0，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

唯一的原生类数组（array-like）对象是 [`Strings`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "String 全局对象是用来构造字符串对象或字符序列的构造函数。")，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

## 示例

### 添加元素到数组

下面的代码创建了 `sports` 数组，包含两个元素，然后又把两个元素添加给它。`total` 变量为数组的新长度值。

<pre class="brush: js">var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports); 
// ["soccer", "baseball", "football", "swimming"]

console.log(total);  
// 4</pre>

### 合并两个数组

该示例使用 [`apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 添加第二个数组的所有元素。

<pre class="brush: js">var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); 
// ['parsnip', 'potato', 'celery', 'beetroot']</pre>

### 像数组一样使用对象

如上所述，push 是特意设计为通用的，我们可以使用它来获得便利。正如下面的例子所示，Array.prototype.push 可以在一个对象上工作。 注意，我们没有创建一个数组来存储对象的集合。 相反，我们将该集合存储在对象本身上，并使用在 Array.prototype.push 上使用的 `call` 来调用该方法，使其认为我们正在处理数组，而它只是像平常一样运作，这要感谢 JavaScript 允许我们建立任意的执行上下文。

<pre class="brush: js">var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2</pre>

注意，尽管 obj 不是数组，但是 push 方法成功地使 obj 的 length 属性增长了，就像我们处理一个实际的数组一样。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.2.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.push</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.push</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.push</small>](https://tc39.github.io/ecma262/#sec-array.prototype.push)</td>

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

<th>Safari</th>

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

*   [`Array.prototype.pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。")
*   [`Array.prototype.shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法从数组中删除第一个元素，并返回该元素。此方法更改数组的长度。")
*   [`Array.prototype.unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "unshift() 方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值。")
*   [`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。")