## 概述

`**length**` 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`Array.length` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>true</td>

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

## 语法

<pre class="syntaxbox"><var>array</var>.length</pre>

## 描述

`length` 属性的值是一个 0 到 2<sup>32</sup>-1 的整数。

你可以通过减小 `length` 属性的值来截短一个数组，但不能通过增大 `length` 属性的值来延长这个数组，也就是说，如果你将一个拥有两个元素的数组的 `length` 属性设置为 3，那么这个数组仍然只包含两个元素，最后一个元素不存在。因此， length属性不能真正表示数组中定义的值的数目。详见[Relationship between `length` and numerical properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties "Relationship between length and numerical properties")。

## 示例

### 例子:返回数组的长度

    var items = ["shoes", "shirts", "socks", "sweaters"];

    items.length; 

    // 返回 4

### 例子:遍历数组

下面的例子中，遍历数组 `numbers`，并把每个元素的值修改为原值的2倍。

<pre class="brush:js">var numbers = [1,2,3,4,5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers现在为[2,4,6,8,10];
</pre>

### 例子: 截短数组

下面的例子中，如果数组 `statesUS` 的长度大于 50，则把该数组的长度截短为 50。

<pre class="brush:js">if (statesUS.length > 50) {
   statesUS.length=50
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

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.length</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.5.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.length</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-array-instances-length)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.length</small>](https://tc39.github.io/ecma262/#sec-properties-of-array-instances-length)</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")