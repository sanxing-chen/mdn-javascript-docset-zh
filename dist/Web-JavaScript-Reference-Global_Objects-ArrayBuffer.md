<div>

ArrayBuffer对象被用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容`；`相反，你应该创建一个表示特定格式的buffer的类型化数组对象([typed array objects](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray))或数据视图对象[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.") 来对buffer的内容进行读取和写入操作。

</div>

## 语法

<pre class="syntaxbox">new ArrayBuffer(length)
</pre>

### 参数

<dl>

<dt>`length`</dt>

<dd>要创建的数组缓冲区的大小，以字节为单位。</dd>

</dl>

### 返回值

一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。

## 描述

`ArrayBuffer` 构造函数创建一个指定了字节长度的新`ArrayBuffer`对象。

### 从现有数据中获取数组缓冲区

*   [从一个Base64字符串](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
*   [从一个本地文件](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader#readAsArrayBuffer())

## 属性

<dl>

<dt>`ArrayBuffer.length`</dt>

<dd>ArrayBuffer构造函数的length属性，它的值是1</dd>

<dt>[`get ArrayBuffer[@@species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>用于创建派生对象的构造函数</dd>

<dt>[`ArrayBuffer.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype "ArrayBuffer.prototype属性表示ArrayBuffer对象的原型。")</dt>

<dd>允许给所有ArrayBuffer对象添加属性</dd>

</dl>

## 方法

<dl>

<dt>[`ArrayBuffer.isView(arg)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView "The ArrayBuffer.isView() method returns true if arg is a view one of the ArrayBuffer views, such as typed array objects or a DataView; false otherwise.")</dt>

<dd>如果参数是ArrayBuffer的视图实例就返回true,例如 [typed array objects](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 或 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")。否则返回false。</dd>

<dt>[`ArrayBuffer.transfer(oldBuffer [, newByteLength])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer "静态ArrayBuffer.transfer() 方法返回一个新的ArrayBuffer， 其内容取自oldBuffer的数据，并且根据 newByteLength 的大小来对数据进行截取或者以0扩展。 如果 newByteLength 未定义，则使用 oldBuffer 的byteLength。这个操作使得 oldBuffer 处于被移除的状态。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>

返回一个新的ArrayBuffer，其内容取自oldBuffer的数据，并且根据 `newByteLength` 的大小来对数据进行截取或者以0扩展。

</dd>

</dl>

## `ArrayBuffer` 实例

所有 `ArrayBuffer` 实例 继承自 [`ArrayBuffer.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype "ArrayBuffer.prototype属性表示ArrayBuffer对象的原型。")。

### 属性

<dl>

<dt>ArrayBuffer.prototype.constructor</dt>

<dd>指定函数，它创建一个对象的原型。其初始值是标准ArrayBuffer内置构造函数。</dd>

<dt>[`ArrayBuffer.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength "The byteLength accessor property represents the length of an ArrayBuffer in bytes.") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>数组的字节大小。在数组创建时确定，并且不可变更。**只读**。</dd>

</dl>

### 方法

<dl>

<dt>[`ArrayBuffer.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个新的 `ArrayBuffer` ，它的内容是这个 `ArrayBuffer` 的字节副本，从begin（包括），到end（不包括）。如果begin或end是负数，则指的是从数组末尾开始的索引，而不是从头开始。</dd>

</dl>

<dl>

<dt>[`ArrayBuffer.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span></dt>

<dd>和 [`ArrayBuffer.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice "此页面仍未被本地化, 期待您的翻译!")功能一样。</dd>

</dl>

## 例子

下面的例子中,我们创建了一个8字节的缓冲区，并使用一个[`Int32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).") 进行呈现：

    var buffer = new ArrayBuffer(8);
    var view   = new Int32Array(buffer);

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

<td>Superseded by ECMAScript 6.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ArrayBuffer</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer-constructor)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard. Specified that `new` is required.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">ArrayBuffer</small>](https://tc39.github.io/ecma262/#sec-arraybuffer-constructor)</td>

<td><span class="spec-Draft">Draft</span></td>

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

<td>7.0</td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2)</td>

<td>10</td>

<td>11.6</td>

<td>5.1</td>

</tr>

<tr>

<td>`ArrayBuffer()` without `new` throws</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[44](/en-US/Firefox/Releases/44 "Released on 2016-01-26.") (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`ArrayBuffer.slice()`<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span>  
<span style="color: #f00;">未实现</span> [53](/en-US/Firefox/Releases/53 "Released on 2017-04-18.") (53)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<tr>

<td>`ArrayBuffer()` without `new` throws</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>44.0 (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`ArrayBuffer.slice()`<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span>  
<span style="color: #f00;">未实现</span> 53.0 (53)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 兼容性提醒

从ECMAScript 2015开始，`ArrayBuffer` 需要用[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 运算符创建。如果没有`new`运算符，会抛出一个[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 。

<pre class="brush: js example-bad">var dv = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor 
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new ArrayBuffer(10);</pre>

## 相关链接

*   [Typed Array Specification](http://www.khronos.org/registry/typedarray/specs/latest/ "https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/TypedArray-spec.html")
*   [JavaScript typed arrays](zh-CN/docs/Web/JavaScript/Typed_arrays "zh-CN/JavaScript typed arrays")