<div>

<div class="notice experimental">

<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>**这是一个实验中的功能**  
此功能某些浏览器尚在开发中，请参考[浏览器兼容性表格](#Browser_compatibility)以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。

</div>

</div>

 静态`**ArrayBuf**`**fer.transfer()** 方法返回一个新的ArrayBuffer， 其内容取自oldBuffer的数据，并且根据 newByteLength 的大小来对数据进行截取或者以0扩展。 如果 newByteLength 未定义，则使用 oldBuffer 的byteLength。这个操作使得 oldBuffer 处于被移除的状态。

## 语法

<pre class="syntaxbox">ArrayBuffer.transfer(oldBuffer [, newByteLength]);</pre>

### 参数

<dl>

<dt>`oldBuffer`</dt>

<dd> 要转移的[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer对象是用来表示一个通用的，固定长度的二进制数据缓冲区。你不能直接操纵ArrayBuffer的内容，而是,你应该创建一个表示特定格式的buffer的类型化数组对象(typed array objects)或数据视图对象DataView 来对buffer的内容进行读取和写入操作.")对象。</dd>

<dt>newByteLength</dt>

<dd>新 `ArrayBuffer` 对象的字节长度。</dd>

</dl>

### 返回值

一个新的ArrayBuffer对象。

## 描述

`ArrayBuffer.transfer()`方法允许你增长和移除 `ArrayBuffer` 对象。不需复制就能增长一个ArrayBuffer的功能，对于大的缓冲区来说，有速度优势 (类似realloc) 。当释放底层内存时，移除ArrayBuffer的功能给开发者提供了显式控制。这避免了必须丢弃所有引用和等待垃圾回收。

## 示例

<pre class="brush: js">var buf1 = new ArrayBuffer(40);
new Int32Array(buf1)[0] = 42;

var buf2 = ArrayBuffer.transfer(buf1, 80);
buf1.byteLength; // 0 but if you use the polyfill then the value is still 40
buf2.byteLength; // 80
new Int32Array(buf2)[0]; // 42

var buf3 = ArrayBuffer.transfer(buf2, 0);
buf2.byteLength; // 0 but if you use the polyfill then the value is still 80
buf3.byteLength; // 0
</pre>

## Polyfill

You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of transfer<font face="Consolas, Liberation Mono, Courier, monospace">()</font> in implementations that do not natively support it. This is not the exact equivalent of this API, but this function transfers data from one ArrayBuffer to another ArrayBuffer.

<pre>if(!ArrayBuffer.transfer) {
    ArrayBuffer.transfer = function (source, length) {
        source = Object(source);
        var dest = new ArrayBuffer(length);
        if(!(source instanceof ArrayBuffer) || !(dest instanceof ArrayBuffer)) {
            throw new TypeError("Source and destination must be ArrayBuffer instances");
        }
        if(dest.byteLength >= source.byteLength) {
            var nextOffset = 0;
            var leftBytes = source.byteLength;
            var wordSizes = [8, 4, 2, 1];
            wordSizes.forEach(function (_wordSize_) {
                if (leftBytes >= _wordSize_) {
                    var done = transferWith(_wordSize_, source, dest, nextOffset, leftBytes);
                    nextOffset = done.nextOffset;
                    leftBytes = done.leftBytes;
                }
            });
        }
        return dest;
        function transferWith(wordSize, source, dest, nextOffset, leftBytes) {
            var ViewClass = Uint8Array;
            switch (wordSize)  {
                case 8:
                    ViewClass = Float64Array;
                    break;
                case 4:
                    ViewClass = Float32Array;
                    break;
                case 2:
                    ViewClass = Uint16Array;
                    break;
                case 1:
                    ViewClass = Uint8Array;
                    break;
                default:
                    ViewClass = Uint8Array;
                    break;
            }
            var view_source = new ViewClass(source, nextOffset, Math.trunc(leftBytes / wordSize));
            var view_dest = new ViewClass(dest, nextOffset, Math.trunc(leftBytes / wordSize));
            for(var i=0; i<view_dest.length; i++) {
                view_dest[i] = view_source[i];
            }
            return {
                nextOffset : view_source.byteOffset + view_source.byteLength,
                leftBytes : source.byteLength - (view_source.byteOffset + view_source.byteLength)
            }
        }
    };
}</pre>

## 规范

Not part of any current specification draft document, but [has been](https://esdiscuss.org/topic/sept-23-2014-meeting-notes) [proposed](https://gist.github.com/lukewagner/2735af7eea411e18cf20) for a future ECMA-262 edition.

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

<td><span style="color: #f00;">未实现</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

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

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")