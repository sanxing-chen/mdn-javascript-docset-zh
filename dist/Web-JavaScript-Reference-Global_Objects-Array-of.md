`**Array.of()**` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

 `**Array.of()**` 和 `**Array**` 构造函数之间的区别在于处理整数参数：**Array.of(7) **创建一个具有单个元素 **7** 的数组，而 **Array(7) **创建一个包含 **7** 个 **undefined** 元素的数组。

<pre class="syntaxbox">Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]</pre>

## 语法

    Array.of(element0[, element1[, ...[, elementN]]])

### 参数

<dl>

<dt>element_N_</dt>

<dd>任意个参数，将按顺序成为返回数组中的元素。</dd>

</dl>

### 返回值

新的 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 实例。

## 描述

此函数是ECMAScript 2015标准的一部分。详见 [`Array.of 和` `Array.from` proposal](https://gist.github.com/rwaldron/1074126) 和 [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576)。

## 示例

<pre class="brush: js" style="font-size: 14px;"><span style="line-height: 22px;">Array.of(1);         // [1]</span> <span style="line-height: 22px;">Array.of(1, 2, 3);   // [1, 2, 3]</span>
Array.of(undefined); // [undefined]
</pre>

## Polyfill

如果原生不支持的话，在其他代码之前执行以下代码会创建 `Array.of()` 。

<pre class="brush: js" style="font-size: 14px;">if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}</pre>

## 规范

<table>

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.of</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.of)</td>

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

<td>45</td>

<td>[25](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>39</td>

<td>25.0 (25)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

## 相关链接

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。")
*   [`TypedArray.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "TypedArray.of() 方法创建一个具有可变数量参数的新类型数组 。此方法几乎与Array.of() 相同。")