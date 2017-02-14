## 概述

`**message**` 属性是有关错误信息，人类易读的（human-readable）描述。

## 描述

如果该属性已经被设置，则该属性包含了错误的一个简短描述。[SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey) 大量应用 `message` 属性在异常方面。 `message` 属性结合 [`name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name "name 属性表示error类型的名称.初始值为"Error".") 属性一起被  [`Error.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。") 方法用来创建错误的字符串形式。

默认情况下，`message` 属性是一个空字符串，但是可以通过指定一段信息作为 [`Error constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.") 的第一个参数创建一个实例来改变该属性值。

## 示例

### 例子：抛出一个自定义错误

<pre class="brush: js">var e = new Error("Could not parse input"); // e.message is "Could not parse input"
throw e;
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Error.prototype.message</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.4.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Error.prototype.message</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-error.prototype.message)</td>

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

*   [`Error.prototype.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name "name 属性表示error类型的名称.初始值为"Error".")
*   [`Error.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。")