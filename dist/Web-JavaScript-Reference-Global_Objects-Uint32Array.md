## 概要

**`Uint32Array`**表示一个由基于平台字节序的32位无符号字节组成的数组.如果需要对字节顺序进行控制(译者注:即 littleEndian 或 bigEndian),请使用[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")代替.数组中每个元素的初始值都是0.一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。

## 语法

<pre class="syntaxbox">Uint32Array(length);
Uint32Array(typedArray);
Uint32Array(object);
Uint32Array(buffer [, byteOffset [, length]]);</pre>

更多的构造器语法和属性请参照 _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)。_

## 属性

<dl>

<dt>[`Uint32Array.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>返回一个number类型的值，表示元素的size。 `Uint32Array 返回4。`</dd>

<dt>Uint32Array.length</dt>

<dd>长度属性，它的值是3。</dd>

<dt>[`Uint32Array.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "TypedArray.name 属性是描述类型数组构造名的字符串值。")</dt>

<dd>返回字符串类型的值，表示构造器的名字。`Uint32Array` 的返回值是: "Uint32Array"。</dd>

<dt>[`Uint32Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.")</dt>

<dd>返回 _TypedArray_ 对象的原型链。</dd>

</dl>

## Methods

<dl>

<dt>Uint32Array.from()</dt>

<dd>参考[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Editorial review completed.")。 未完成，请参考[bug 896608](https://bugzilla.mozilla.org/show_bug.cgi?id=896608 "FIXED: Implement ES6 %TypedArray%.{of, from}")。</dd>

<dt>Uint32Array.of()</dt>

<dd>参考[`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法会将它的任意类型的多个参数放在一个数组里并返回。")。未完成，请参考 [bug 896608](https://bugzilla.mozilla.org/show_bug.cgi?id=896608 "FIXED: Implement ES6 %TypedArray%.{of, from}").</dd>

</dl>

## `Uint32Array` prototype

`<font face="Open Sans, sans-serif">所有</font>Uint32Array` 对象继承自 [`%TypedArray%.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.").

### Properties

<dl>

<dt>`Uint32Array.prototype.constructor`</dt>

<dd>返回创建实例原型的函数。 默认返回 `Uint32Array` 的构造器。</dd>

<dt>[`Uint32Array.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>Returns the [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.") referenced by the `Uint32Array` Fixed at construction time and thus **read only**.</dd>

<dt>[`Uint32Array.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>Returns the length (in bytes) of the `Uint32Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作."). Fixed at construction time and thus **read only.**</dd>

<dt>[`Uint32Array.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>Returns the offset (in bytes) of the `Uint32Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作."). Fixed at construction time and thus **read only.**</dd>

<dt>[`Uint32Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>Returns the number of elements hold in the `Uint32Array`. Fixed at construction time and thus **read only.**</dd>

</dl>

### Methods

<dl>

<dt>[`Uint32Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>See [`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。").</dd>

<dt>[`Uint32Array.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>Former non-standard version of [`Uint32Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!").</dd>

<dt>[`Uint32Array.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Stores multiple values in the `Uint32Array`, reading input values from a specified array.</dd>

<dt>[`Uint32Array.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Uint32Array` from the given start and end element index.</dd>

</dl>

## Examples

<pre class="brush: js">// From a length
var uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Uint32Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint32Array([21, 31]);
var y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = Uint32Array(buffer, 0, 4);
</pre>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/#7)</td>

<td>Obsolete</td>

<td><span><span>Superseded by ECMAScript 6.</span></span></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](http://www.ecma-international.org/ecma-262/6.0/#table-45)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard.</td>

</tr>

</tbody>

</table>

## Browser compatibility

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

<td>Basic support</td>

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

## See also

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")