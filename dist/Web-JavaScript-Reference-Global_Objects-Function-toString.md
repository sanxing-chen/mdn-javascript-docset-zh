## 概述

该 `toString()` 方法返回一个表示当前函数源代码的字符串。

## 语法

<pre class="syntaxbox">function.toString(indentation)</pre>

### 参数

<dl>

<dt>indentation <span title="This API has not been standardized."></span><span class="inlineIndicator obsolete obsoleteInline" title="(Firefox 17 / Thunderbird 17 / SeaMonkey 2.14)">已废弃 Gecko 17</span></dt>

<dd>一个整数，表示反编译后的函数源代码应该增加几个空格作为额外的缩进。0为默认值，表示不增加任何额外缩进，`-1或者其他负整数会让整个函数的源代码无任何缩进。`</dd>

</dl>

## 描述

[`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function "Function 构造器创建一个新的Function 对象. 在JavaScript中每个函数(function)实际是一个Function对象.") 对象覆盖了从 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 继承来的 `Object.prototype.toString 方法。`函数的 `toString 方法`会返回一个表示函数源代码的字符串。具体来说，包括 `function`关键字，形参列表，大括号，以及函数体中的内容。

在函数需要转换为字符串时，通常会自动调用函数的 `toString` 方法。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.1.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function.prototype.toString</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Function.prototype.toString</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function.prototype.tostring)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<span style="line-height: 1.5;"></span>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span>  
 </td>

</tr>

</tbody>

</table>

</div>

<span style="font-size: 1.714285714285714rem; letter-spacing: -0.5px; line-height: 24px;">附注</span>

从Firefox 17开始，`Function.prototype.toString()`<span id="summary_alias_container"><span id="short_desc_nonedit_display">通过保存函数源码</span></span><span id="summary_alias_container"><span id="short_desc_nonedit_display">的方式来实现，</span></span>而之前是通过反编译器反编译函数字节码的方式来实现。反编译器已经被删除了，因此该函数返回的源码将会和定义时的源码完全相同(包括任何空白符)，所以我们不再需要`indentation参数来控制缩进了。`查看[https://bugzilla.mozilla.org/show_bug.cgi?id=761723](https://bugzilla.mozilla.org/show_bug.cgi?id=761723 "https://bugzilla.mozilla.org/show_bug.cgi?id=761723")

## 相关链接

*   [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。")