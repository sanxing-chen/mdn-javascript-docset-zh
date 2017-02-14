## 概述

`**pop()**方法从数组中**删除**最后一个**元素**，并**返回**该元素的**值**。此方法**更改**数组的**长度**。`

<pre>let a = [1, 2, 3];
a.length; // 3

a.pop(); // 3

console.log(a); // [1, 2]
a.length; // 2</pre>

## 语法

    arr.pop()

### 返回值

从数组中删除的元素; [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 如果数组为空。

## 描述

`pop` 方法从一个数组中删除最后一个元素，并将该值返回给调用者。

`pop` 是故意通用的; 这个方法可以是 [called](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") 或[applied](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。")  到类似数组的对象。不包含反映一系列连续的最后一个的长度属性的对象，基于零的数值属性可能不会以任何有意义的方式表现。

如果你在一个空数组上调用 pop()，它返回  [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。

## 示例

### 例子: 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 myFish，然后删除掉它的最后一个元素。

<pre class="brush:js">let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish); 
// ["angel", "clown", "mandarin"]

console.log(popped); 
// surgeon
</pre>

## 规范

<table>

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
<small lang="zh-CN">Array.prototype.pop</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.pop</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.pop)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.pop</small>](https://tc39.github.io/ecma262/#sec-array.prototype.pop)</td>

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

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>1.0</td>

<td>1.0 (1.7 or earlier)</td>

<td>5.5</td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）。")
*   [`Array.prototype.shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法从数组中删除第一个元素，并返回该元素。此方法更改数组的长度。")
*   [`Array.prototype.unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "unshift() 方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值。")
*   [`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。")
*   [`Array.prototype.splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。")