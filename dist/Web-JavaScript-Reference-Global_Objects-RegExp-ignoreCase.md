## 概述

`**ignoreCase**` 属性表明正则表达式是否使用了 "`i`" 标志。`ignoreCase` 是正则表达式实例的只读属性。

<div>

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`RegExp.prototype.ignoreCase` 属性的属性特性：</th>

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

</div>

## 描述

`ignoreCase` 的值是布尔对象，如果使用了"`i`" 标志，则返回 `true`；否则，返回 `false`。"`i`" 标志意味着在字符串进行匹配时，应该忽略大小写。

你无法直接更改此属性。

## 示例

### 例子：使用 `ignoreCase`

<pre class="brush:js">var regex = new RegExp("foo", "i")

console.log(regex.ignoreCase) // true
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

<td>ECMAScript 3rd Edition. Implemented in JavaScript 1.2.</td>

<td>Standard</td>

<td>Initial definition.  
JavaScript 1.5: `ignoreCase` is a property of a `RegExp` instance, not the `RegExp` object.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">RegExp.prototype.ignoreCase</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.7.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">RegExp.prototype.ignoreCase</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.ignorecase)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td>`ignoreCase` is now a prototype accessor property rather than an instance's own data property.</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`RegExp.prototype.global`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global "global 属性表明正则表达式是否使用了 "g" 标志。global 是一个正则表达式实例的只读属性。")
*   [`RegExp.prototype.lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。")
*   [`RegExp.prototype.multiline`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline "multiline 属性表明正则表达式是否使用了 "m" 标志。multiline 是正则表达式实例的一个只读属性。")
*   [`RegExp.prototype.source`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source "source 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。")
*   [`RegExp.prototype.sticky`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky "此页面仍未被本地化, 期待您的翻译!")