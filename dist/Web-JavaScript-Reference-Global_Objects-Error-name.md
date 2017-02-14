## 概述

`**name**`<span style="line-height: 19.0909080505371px;"> </span>属性表示error类型的名称.初始值为"Error".

## 描述

默认情况下,<span style="line-height: 19.0909080505371px;">[`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.")</span>对象的`name`属性值为"Error".`name属性和`<span style="line-height: 19.0909080505371px;">[`message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。")</span>属性一起,通过调用<span style="line-height: 19.0909080505371px;">[`Error.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。")</span>方法,会作为最后异常信息的字符串表示.

## 示例

### 例子: 抛出一个自定义错误

<pre class="brush:js">var e = new Error("Malformed input"); // e.name默认是"Error"

e.name = "ParseError";                // 修改之后,e.toString()会成为下面这样的字符串
throw e;                              // "ParseError: Malformed input"
</pre>

## 规范

<table class="standard-table" style="line-height: 19.0909080505371px;">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Error.prototype.name</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Error.prototype.name</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-error.prototype.name)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div style="line-height: 19.0909080505371px;">

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

<div id="compat-desktop" style="line-height: 19.0909080505371px;">

<table class="compat-table" style="border-color: transparent;">

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

<div id="compat-mobile" style="line-height: 19.0909080505371px;">

<table class="compat-table" style="border-color: transparent;">

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Error.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。")
*   [`Error.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。")