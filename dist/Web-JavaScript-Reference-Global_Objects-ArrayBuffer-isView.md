The `**ArrayBuffer.isView()**` method returns `true` if `arg` is a view one of the `ArrayBuffer` views, such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向ArrayBuffer读写数据的底层接口。"); `false` otherwise.

判断是否为`**ArrayBuffer**的`试图类实例，包括 [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)（类型化数组对象） 和 a [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向ArrayBuffer读写数据的底层接口。")

## Syntax（语法）

    ArrayBuffer.isView(arg)

### Parameters（参数）

<dl>

<dt>`arg`</dt>

<dd>The argument to be checked.（待检参数）</dd>

</dl>

## Examples（示例）

<pre class="brush: js">ArrayBuffer.isView();                    // false              
ArrayBuffer.isView([]);                  // false
ArrayBuffer.isView({});                  // false
ArrayBuffer.isView(null);                // false
ArrayBuffer.isView(undefined);           // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array());    // true
ArrayBuffer.isView(new Float32Array());  // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
</pre>

## Specifications（说明文档）

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification（说明书）</th>

<th scope="col">Status（状态）</th>

<th scope="col">Comment（备注）</th>

</tr>

<tr>

<td>[Typed Array Specification](http://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>Superseded by ECMAScript 6.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ArrayBuffer.isView</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer.isview)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard.</td>

</tr>

</tbody>

</table>

## Browser compatibility（浏览器兼容性）

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

<td>[29](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td>29.0 (29)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## See also（另见参考文档）

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")