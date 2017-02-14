`**shift()**` 方法从数组中**删除**第一个元素，并返回该元素的值。此方法更改数组的长度。

    let a = [1, 2, 3];
    let b = a.shift();

    console.log(a); 
    // [2, 3]

    console.log(b); 
    // 1

### 返回值 

从数组中删除的元素; [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 如果数组为空。 

## 语法

    arr.shift()

## 描述

`shift` 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性的值为 0 (长度为 0)，则返回 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。

`shift` 方法并不局限于数组：该方法亦可通过 [`call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") 或 [`apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。") 作用于对象上。对于不包含 length 属性的对象，将添加一个值为 0 的 length 属性。

## 示例

### 移除数组中的一个元素

以下代码显示了删除其第一个元素之前和之后的myFish数组。它还显示已删除的元素：

<pre class="brush: js">let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift(); 

console.log('调用 shift 之后: ' + myFish); 
// "调用 shift 之后: clown,mandarin,surgeon" 

console.log('被删除的元素: ' + shifted); 
// "被删除的元素: angel"</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.2.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.shift</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.9)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.shift</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.shift)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.shift</small>](https://tc39.github.io/ecma262/#sec-array.prototype.shift)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器支持

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

*   [`Array.prototype.push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。")
*   [`Array.prototype.pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。")
*   [`Array.prototype.unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "unshift() 方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值。")