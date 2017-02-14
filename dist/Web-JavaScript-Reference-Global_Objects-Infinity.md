全局属性 `**Infinity**` 是一个数值，表示无穷大。

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`Infinity` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>false</td>

</tr>

<tr>

<td>enumerable</td>

<td>false</td>

</tr>

<tr>

<td>configurable</td>

<td>false</td>

</tr>

</tbody>

</table>

### 语法

    Infinity 

### 描述

`Infinity` 是全局对象（_global object_）的一个属性，即它是一个全局变量。

`Infinity` 的初始值是 [`Number.POSITIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY "Number.POSITIVE_INFINITY 属性表示正无穷大。")。`Infinity`（正无穷大）大于任何值。该值和数学意义上的无穷大很像，例如任何正值乘以 `Infinity` 为 `Infinity`, 任何数值（除了Infinity 和 -Infinity）除以 `Infinity` 为 0。

在 ECMAScript 5 的规范中， `Infinity` 是只读的（实现于 JavaScript 1.8.5 / Firefox 4）。

## 示例

    console.log(Infinity         ); /* Infinity */  
    console.log(Infinity + 1     ); /* Infinity */  
    console.log(Math.pow(10,1000)); /* Infinity */  
    console.log(Math.log(0)      ); /* -Infinity */  
    console.log(1 / Infinity     ); /* 0 */

## 规范

<table>

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.3</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Infinity</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.1.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Infinity</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-value-properties-of-the-global-object-infinity)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Infinity</small>](https://tc39.github.io/ecma262/#sec-value-properties-of-the-global-object-infinity)</td>

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

<table>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

<table>

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

## 相关链接

*   [`Number.NEGATIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY "Number.NEGATIVE_INFINITY 属性表示负无穷大。")
*   [`Number.POSITIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY "Number.POSITIVE_INFINITY 属性表示正无穷大。")