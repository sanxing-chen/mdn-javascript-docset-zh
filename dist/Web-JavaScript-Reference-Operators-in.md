## 概述

如果指定的属性存在于指定的对象中，则 `in` `运算符会返回` `true`。

## 语法

    prop in objectName 

### 参数

<dl>

<dt>`prop`</dt>

<dd>一个字符串类型或者symbol类型的属性名，或者数组索引。</dd>

</dl>

<dl>

<dt>`objectName`</dt>

<dd>需要检测的对象。</dd>

</dl>

## 描述

下面的例子演示了一些 `in` 运算符的用法。

<pre class="brush:js">// 数组
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // 返回true
3 in trees        // 返回true
6 in trees        // 返回false
"bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)
"length" in trees // 返回true (length是一个数组属性)

// 内置对象
"PI" in Math          // 返回true

// 自定义对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // 返回true
"model" in mycar // 返回true
</pre>

in右操作数必须是一个对象值。比如，可以是一个`String`包装对象，但不能是一个字符串原始值。

<pre class="brush:js">var color1 = new String("green");
"length" in color1 // 返回true
var color2 = "coral";
"length" in color2 // 报错(color2不是对象)
</pre>

### 使用delete运算符和将属性赋值为undefined

如果你使用 `[delete](/zh-CN/docs/JavaScript/Reference/Operators/delete "zh-CN/docs/JavaScript/Reference/Operators/Special/delete")` 运算符删除了一个属性，则 `in` 运算符对所删除属性返回 `false`。

<pre class="brush:js">var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false
</pre>

如果你只是将一个属性的值赋值为 `undefined`，而没有用 `delete` 删除它，则 `in` 运算仍然会返回`true`。

<pre class="brush:js">var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true
</pre>

<pre class="brush:js">var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true
</pre>

### 继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `true`。

<pre class="brush:js">"toString" in {}; // 返回true
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<td>规范</td>

<td>状态</td>

<td>备注</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Relational Operators</small>](https://tc39.github.io/ecma262/#s<br>
    ec-relational-operators)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Relational Operators</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-relational-operators)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The in Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">The in Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.8.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.4.</td>

</tr>

</tbody>

</table>

##   
浏览器兼容性

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

*   [delete](/zh-CN/docs/JavaScript/Reference/Operators/delete "zh-CN/docs/JavaScript/Reference/Operators/Special/delete")
*   [Object.prototype.hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "zh-CN/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty")
*   [`Reflect.has()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has "静态方法 Reflect.has() 作用与 in 操作符 相同。")
*   [属性的可枚举性和所有权](/zh-CN/docs/Enumerability_and_ownership_of_properties "/zh-CN/docs/Enumerability_and_ownership_of_properties")