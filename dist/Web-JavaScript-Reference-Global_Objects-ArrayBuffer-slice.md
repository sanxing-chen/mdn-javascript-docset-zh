`**slice()**`方法返回一个新的 `ArrayBuffer` ，它的内容是这个`ArrayBuffer的`字节副本，从begin（包括），到end（不包括）。

## 语法

<pre class="syntaxbox">arraybuffer.slice(begin[, end])</pre>

### 参数

<dl>

<dt>`begin`</dt>

<dd>从零开始的字节索引，切片从这开始。</dd>

</dl>

<dl>

<dt>`end`</dt>

<dd>结束切片的字节索引。如果没指定end，新的 `ArrayBuffer` 将包含这个 `ArrayBuffer` 从头到尾的所有字节。由begin和end指定的这个范围夹在当前数组的有效索引范围内。如果新`ArrayBuffer`的长度在计算后为负，它将强制为0 。</dd>

</dl>

### 返回值

 一个新的 `ArrayBuffer` 对象。

## 描述

`slice` 方法复制到但不包括由end参数指示的字节。如果begin或end是负数，则指的是从数组末尾开始的索引，而不是从头开始。

## 示例

### 复制一个 `ArrayBuffer`

<pre class="brush: js">var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
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

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>Superseded by EMCAScript 6.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ArrayBuffer.prototype.slice</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer.prototype.slice)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">ArrayBuffer.prototype.slice</small>](https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[12](/en-US/Firefox/Releases/12 "Released on 2012-04-24.") (12)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>6</td>

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

<td>12.0 (12)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>6.0</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。")