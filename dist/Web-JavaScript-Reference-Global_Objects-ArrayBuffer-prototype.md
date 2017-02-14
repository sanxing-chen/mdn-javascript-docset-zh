**`ArrayBuffer.prototype`**`属性表示`[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")对象的原型。

<div>

<table class="standard-table">

<thead>

<tr>

<th colspan="2" class="header">`ArrayBuffer.prototype` 属性的属性特性：</th>

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

ArrayBuffer 实例继承自`ArrayBuffer.prototype。对所有的构造函数来说，你可以通过改变构造函数的原型对象来改变所有的ArrayBuffer实例。`

## 属性

<dl>

<dt>ArrayBuffer.prototype.constructor</dt>

<dd>指定函数，它创建一个对象的原型。其初始值是标准ArrayBuffer内置构造函数。</dd>

<dt>[`ArrayBuffer.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength "The byteLength accessor property represents the length of an ArrayBuffer in bytes.") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>数组的字节大小。在数组创建时确定，并且不可变更。**只读**。</dd>

</dl>

## 方法

<dl>

<dt>[`ArrayBuffer.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个新的 `ArrayBuffer` ，它的内容是这个 `ArrayBuffer` 的字节副本，从begin（包括），到end（不包括）。如果begin或end是负数，则指的是从数组末尾开始的索引，而不是从头开始。</dd>

</dl>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ArrayBuffer.prototype</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer.prototype)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

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

<td>基本支持</td>

<td>7.0</td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2)</td>

<td>10</td>

<td>11.6</td>

<td>5.1</td>

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

<td>基本支持</td>

<td>4.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>4.0 (2)</td>

<td>10</td>

<td>11.6</td>

<td>4.2</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")