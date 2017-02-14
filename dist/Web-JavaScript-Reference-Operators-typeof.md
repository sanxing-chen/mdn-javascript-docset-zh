## 概述

`typeof操作符返回一个**字符串**,`指示未`经`计算的操作数的类型`。`

## `语法`

    typeof operand

### 参数

`_operand_` 是一个表达式，表示对象或原始值，其类型将被返回。

## 描述

下表总结了 `typeof` 可能的返回值。有关类型和原语的更多信息，可查看 [JavaScript数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures) 页面。

<table class="standard-table">

<thead>

<tr>

<th scope="col">类型</th>

<th scope="col">结果</th>

</tr>

</thead>

<tbody>

<tr>

<td>Undefined</td>

<td>`"undefined"`</td>

</tr>

<tr>

<td>Null</td>

<td>`"object" `(见下方)</td>

</tr>

<tr>

<td>Boolean</td>

<td>`"boolean"`</td>

</tr>

<tr>

<td>Number</td>

<td>`"number"`</td>

</tr>

<tr>

<td>String</td>

<td>`"string"`</td>

</tr>

<tr>

<td>Symbol (ECMAScript 6 新增)</td>

<td>`"symbol"`</td>

</tr>

<tr>

<td>宿主对象(由JS环境提供)</td>

<td>_Implementation-dependent_</td>

</tr>

<tr>

<td>函数对象 ( [[Call]] 在ECMA-262条款中实现了)</td>

<td>`"function"`</td>

</tr>

<tr>

<td>任何其他对象</td>

<td>`"object"`</td>

</tr>

</tbody>

</table>

**例子**

### 常规用法

<pre class="brush: js">// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
`typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';` 

// Objects
typeof {a:1} === 'object';

// 使用Array.isArray 或者 Object.prototype.toString.call
// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) ==== 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof Math.sin === 'function';
</pre>

### `null`

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);" class="brush:js  language-js">// 从一开始出现JavaScript就是这样的

typeof null === 'object';</pre>

在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是0。由于 `null` 代表的是空指针(大多数平台下值为0x00)，因此，`null`的类型标签也成为了0，`typeof null`就错误的返回了"`object".(`[referenc](http://www.2ality.com/2013/10/typeof-null.html)`)`

该现象有待于在[ECMAScript 6中被修复](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null) (该提议已被<span lang="zh-CN" class="short_text" id="result_box"><span class="alt-edited">否决</span></span>). 正确的返回值将成为 `typeof null === 'null'`.

### 正则表达式

对正则表达式字面量的类型判断在某些浏览器中不符合标准：

<pre class="brush: js">typeof /s/ === 'function'; // Chrome 1-12 , 不符合 ECMAScript 5.1
typeof /s/ === 'object'; // Firefox 5+ , 符合 ECMAScript 5.1
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

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">The typeof Operator</small>](https://tc39.github.io/ecma262/#sec-typeof-operator)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">The typeof Operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The typeof Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">The typeof Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.4.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">The typeof Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.1.</td>

</tr>

</tbody>

</table>

##   
浏览器兼容性

<div id="compat-desktop">

<table style="border-color: transparent;" class="compat-table">

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

<table style="border-color: transparent;" class="compat-table">

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

### IE 宿主对象是对象而不是函数

在 IE 6, 7 和 8 中，大多数的宿主对象是对象，而不是函数，例如：

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);" class="brush: js  language-js">typeof alert === 'object'
</pre>

## 相关链接

*   `[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "/en-US/docs/JavaScript/Reference/Operators/instanceof")`