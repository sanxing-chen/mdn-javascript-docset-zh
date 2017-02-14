**`DataView`**视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")读写多数字类型的底层接口.

## 语法

<pre class="syntaxbox">new DataView(buffer [, byteOffset [, byteLength]])</pre>

### 参数

<dl>

<dt>`buffer`</dt>

<dd>一个现有的[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")，用 作`DataView` 实例的存储空间.</dd>

<dt>`byteOffset` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>视图实例引用的buffer的字节偏移量.如果没有指定,buffer视图会以首字节作为开始。</dd>

<dt>`byteLength` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>字节数组中元素的个数。如果未指定，视图的长度将会以buffer的长度匹配。</dd>

</dl>

### 返回值

一个表示指定data buffer的`DataView实例` 。

### 抛出错误

<dl>

<dt>`[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")`</dt>

<dd>如果 `byteOffset` 和 `byteLength` 导致指定视图对应的 buffer 访问越界，则会抛出此错误.</dd>

</dl>

## 描述

### 字节顺序

多字节数字在内存中的解释会根据系统架构表现出不同的格式，进一步解释参照[Endianness](/en-US/docs/Glossary/Endianness "Endianness: "Endian" and "endianness" (or "byte-order") describe how computers organize the bytes that make up numbers.")。DataView的访问函数提供一个不需要考虑平台架构字节顺序的简单访问控制。

    var littleEndian = (function() {
      var buffer = new ArrayBuffer(2);
      new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
      // Int16Array 使用系统自带的字节顺序
      return new Int16Array(buffer)[0] === 256;
    })();
    console.log(littleEndian); // true or false

## 属性

## <span style="font-size: 14px; font-weight: normal; line-height: 1.5;">所有DataView实例继承自 [`DataView.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype "DataView.prototype 是DataView 对象的原型"),并允许向DataView 对象添加属性</span><span style="font-size: 14px; font-weight: normal; line-height: 1.5;">。</span>

<dl>

<dt>[`DataView.prototype.constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/constructor "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Specifies the function that creates an object's prototype. The initial value is the standard built-in `DataView` constructor.</dd>

<dt>[`DataView.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>The [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。") referenced by this view. Fixed at construction time and thus **read only.**</dd>

<dt>[`DataView.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>The length (in bytes) of this view from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

<dt>[`DataView.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>The offset (in bytes) of this view from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

</dl>

## 方法

### 读

<dl>

<dt>[`DataView.prototype.getInt8()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8 "getInt8()方法从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个有符号的8-bit整数(一个字节).")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(一个字节).</dd>

<dt>[`DataView.prototype.getUint8()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8 "getUint8()方法从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个无符号的8-bit整数(一个字节).")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(无符号字节).</dd>

<dt>[`DataView.prototype.getInt16()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(短整型).</dd>

<dt>[`DataView.prototype.getUint16()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(无符号短整型).</dd>

<dt>[`DataView.prototype.getInt32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(长整型).</dd>

<dt>[`DataView.prototype.getUint32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(无符号长整型).</dd>

<dt>[`DataView.prototype.getFloat32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(浮点型).</dd>

<dt>[`DataView.prototype.getFloat64()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处获取一个64-bit数(双精度浮点型).</dd>

</dl>

### 写

<dl>

<dt>[`DataView.prototype.setInt8()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8 "setInt8()将一个8-bit的整数 (一个字节)以一定的距头位置偏移量（offset）储存在DataView当中.")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(一个字节).</dd>

<dt>[`DataView.prototype.setUint8()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(无符号字节).</dd>

<dt>[`DataView.prototype.setInt16()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(短整型).</dd>

<dt>[`DataView.prototype.setUint16()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(无符号短整型).</dd>

<dt>[`DataView.prototype.setInt32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(长整型).</dd>

<dt>[`DataView.prototype.setUint32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(无符号长整型).</dd>

<dt>[`DataView.prototype.setFloat32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(浮点型).</dd>

<dt>[`DataView.prototype.setFloat64()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64 "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从`[`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")起始位置以byte为计数的指定偏移量(byteOffset)处储存一个64-bit数(双精度浮点型).</dd>

</dl>

## 示例

<pre class="brush: js">var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td><span><span>被 ECMAScript 6 取代</span></span></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">DataView</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-dataview-constructor)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">DataView</small>](https://tc39.github.io/ecma262/#sec-dataview-constructor)</td>

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

<td>基本支持</td>

<td>9.0</td>

<td>[15.0](/en-US/Firefox/Releases/15 "Released on 2012-08-28.") (15.0)</td>

<td>10</td>

<td>12.1</td>

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

<td>15.0 (15)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>12.0</td>

<td>4.2</td>

</tr>

</tbody>

</table>

</div>

## Firefox-specific notes

从 Gecko / SpiderMonkey 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37) 开始， `DataView` 要求使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 操作符构造。 仅调用 `DataView()` <font face="Consolas, Liberation Mono, Courier, monospace">而不使用 new 操作符</font>将会抛出一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")。

<pre class="brush: js example-bad">var dv = DataView(buffer, 0); 
// TypeError: calling a builtin DataView constructor without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new DataView(buffer, 0);</pre>

## 相关链接

*   [jDataView](https://github.com/jDataView/jDataView): 用于扩展 `DataView` API 并能适配所有浏览器和 Node.js.