## 概述

`**toString()**` 返回一个表示该正则表达式的字符串。

## 语法

<pre class="syntaxbox"><var>regexObj</var>.toString()</pre>

### 参数

无

## 描述

[`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp 构造函数可创建一个正则表达式对象，用特定的模式匹配文本。") 对象覆盖了 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 对象的 `toString()` 方法，并没有继承 [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。")。对于 `RegExp` 对象，`toString` 方法返回一个该正则表达式的字符串形式。

## 示例

### 例子：使用 `toString`

下例输出 `RegExp` 对象的字符串值：

<pre>myExp = new RegExp("a+b+c");
alert(myExp.toString());       // 显示 "/a+b+c/"

foo = new RegExp("bar", "g");
alert(foo.toString());         // 显示 "/bar/g"
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

<td>ECMAScript 3rd Edition. Implemented in JavaScript 1.1</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">RegExp.prototype.toString</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">RegExp.prototype.toString</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.tostring)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

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

*   [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。")