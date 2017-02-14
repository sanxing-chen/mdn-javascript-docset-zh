Symbol属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的且并未被更早的 ECMAScript 标准收纳的属性名。这些属性并不包含在 `[with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)` 语句绑定的环境中

<table class="standard-table">

<thead>

<tr>

<th colspan="2" class="header">`Array.prototype[@@unscopables]` 属性的属性特性：</th>

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

<td>true</td>

</tr>

</tbody>

</table>

## 语法

<pre class="syntaxbox"><var>arr</var>[Symbol.unscopables]</pre>

## 描述

`with 绑定中未包含的数组默认属性有：`copyWithin, entries, fill, find, findIndex, includes, keys, 和 values。

查看 [`Symbol.unscopables`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables "此页面仍未被本地化, 期待您的翻译!") 以了解如何给你定义的对象设置 unscopables。

## 示例

以下的代码在ES5或更早的版本中能正常工作。然而 ECMAScript 2015 (ES6) 或之后的版本中新添加了 [`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。") 这个方法。这意味着在 `with 语句的作用域，"keys"只能作为方法而不能作为某个变量。这正是内置的 @@unscopables 即 Array.prototype[@@unscopables] symbol属性所要解决的问题：防止某些数组方法被添加到 with 语句的作用域内。`

<pre class="brush: js">var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]); 
// ["copyWithin", "entries", "fill", "find", "findIndex", 
//  "includes", "keys", "values"]</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype[@@unscopables]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype-@@unscopables)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>首次定义</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype[@@unscopables]</small>](https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables)</td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>[48](/en-US/Firefox/Releases/48 "Released on 2016-08-02.") (48)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>48.0 (48)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Symbol.unscopables`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables "此页面仍未被本地化, 期待您的翻译!")