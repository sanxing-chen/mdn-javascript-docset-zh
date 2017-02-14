**`Float64Array`** 类型数组代表的是平台字节顺序为64位的浮点数型数组(对应于 C 浮点数据类型) 。 如果需要控制字节顺序， 使用 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。") 替代。其内容初始化为`0`。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

## 语法 

<pre class="syntaxbox">new Float64Array(length);
new Float64Array(typedArray);
new Float64Array(object);
new Float64Array(buffer [, byteOffset [, length]]);</pre>

更多的语法信息和参数，参见 _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

<dl>

<dt>[`Float64Array.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>返回元素字节数。 `在` `Float64Array的情况下返回8。`</dd>

<dt>Float64Array.length</dt>

<dd>长度属性的值为 3。关于其实际长度(元素数量)参见 [`Float64Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!")。</dd>

<dt>[`Float64Array.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回构造函数名字的字符串值。在 `Float64Array` 类型的情况下为："Float64Array"。</dd>

<dt>[`Float64Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>_TypedArray_对象的原型。</dd>

</dl>

## 方法

<dl>

<dt>[`Float64Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从一个类数组对象或可遍历对象创建一个新的Float64Array。参见 [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法可以将一个类数组对象或可遍历对象转换成真正的数组。")。</dd>

<dt>[`Float64Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>用可变数量的参数创建一个新的Float64Array。 参见 [`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法会将它的任意类型的多个参数放在一个数组里并返回。")。</dd>

</dl>

## `Float64Array` 属性

所有的`Float64Array对象都`继承自 [`%TypedArray%.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!")。

### 特性

<dl>

<dt>`Float64Array.prototype.constructor`</dt>

<dd>返回创建这个实例原型的函数。 这是`Float64Array` 默认的构造函数。</dd>

<dt>[`Float64Array.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回这个`Float64Array引用的` [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")。构造时已固定，所以是**只读**的。</dd>

<dt>[`Float64Array.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回从`Float64Array的`[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")开头开始`的`长度 (以字节为单位) 。构造时已固定，所以是**只读**的。</dd>

<dt>[`Float64Array.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回从`Float64Array的`[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")开头开始`的偏移量` (以字节为单位) 。构造时已固定，所以是**只读**的。</dd>

<dt>[`Float64Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回`Float64Array中的元素个数`。构造时已固定，所以是**只读**的。</dd>

</dl>

### 方法

<dl>

<dt>[`Float64Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从数组复制元素。参见[`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回改数组。")。</dd>

<dt>[`Float64Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`返回一个包含数组中每个元素键值对的数组遍历器对象`。参见[`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。")。</dd>

<dt>[`Float64Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>检测是否所有元素都能通过给定函数的测试。参见[`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")。</dd>

<dt>[`Float64Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>用一个静态值填充给定的起始位置。 参见[`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "使用 fill() 方法，可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。")。</dd>

<dt>[`Float64Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>创建一个新数组，数据为原数组中所有能让给入函数返回true的元素。参见[`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。")。</dd>

<dt>[`Float64Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回满足测试函数的值，如果没有找到，返回undefined。 参见[`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足测试条件的一个元素，如果没有满足条件的元素，则返回 ")。</dd>

<dt>[`Float64Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回满足测试函数的值的位置，如果没有找到，返回-1。参见[`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1.")。</dd>

<dt>[`Float64Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>以每个元素为参数各调用一次函数。参见[`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法让数组的每一项都执行一次给定的函数。")。</dd>

<dt>[`Float64Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断是否包含某个元素，`返回true` 或 `false`。参见[`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。")。</dd>

<dt>[`Float64Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组中等于给定值的元素的第一个（最小）位置， 没有找到则返回-1。参见[`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。")。</dd>

<dt>[`Float64Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>合并所有数组元素到一个字符串中。 参见[`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。")。</dd>

<dt>[`Float64Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`返回一个包含数组中所有索引的数组遍历器`。 参见[`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。")。</dd>

<dt>[`Float64Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组中等于给定值的元素的最后（最大）位置， 没有找到则返回-1。参见[`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。")。</dd>

<dt>[`Float64Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>创建一个新的数组，数据由原数组每个元素依次传入给定函数后返回的值组成。参见[`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。")。</dd>

<dt>[`Float64Array.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>[`Float64Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")以前的一个非标准版本。</dd>

<dt>[`Float64Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>传入一个函数作为累加器，从左到右遍历，最终得到一个值。 参见[`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。")。</dd>

<dt>[`Float64Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>传入一个函数作为累加器，从右到左遍历，最终得到一个值。参见[`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）")。</dd>

<dt>[`Float64Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>反转数组元素的顺序 — 第一个变为最后一个， 最后一个变为第一个。参见[`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。")。</dd>

<dt>[`Float64Array.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从给定的数组存入多个数值。</dd>

<dt>[`Float64Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>提取数组的一部分并且返回一个新数组。参见[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法浅复制（shallow copy）数组的一部分到一个新的数组，并返回这个新数组。")。</dd>

<dt>[`Float64Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>如果数组中至少有一个元素满足测试函数的要求则返回true。参见[`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")。</dd>

<dt>[`Float64Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组元素进行排序并返回数组。参见[`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 可能不是稳定的。默认按照字符串的Unicode码位点（code point）排序。")。</dd>

<dt>[`Float64Array.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从给定的起始位置返回一个新的`Float64Array` 。</dd>

<dt>[`Float64Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个包含所有数组元素的数组遍历器对象。 参见[`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。")。</dd>

<dt>[`Float64Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个代表数组和其元素的本地化格式字符串。参见[`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。")。</dd>

<dt>[`Float64Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个代表数组和它的元素的字符串。参见[`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。")。</dd>

<dt>[`Float64Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个新的包含数组元素的数组迭代器对象。</dd>

</dl>

## 例子

<pre class="brush: js">// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>被ECMAScript 6取代。</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](http://www.ecma-international.org/ecma-262/6.0/#table-49)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>在ECMA中初始定义，另外规定需要使用new。</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](https://tc39.github.io/ecma262/#table-49)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持</td>

<td>7.0</td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2)</td>

<td>10</td>

<td>11.6</td>

<td>5.1</td>

</tr>

<tr>

<td>`需要用new`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[44](/en-US/Firefox/Releases/44 "Released on 2016-01-26.") (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

<td>4.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>4.0 (2)</td>

<td>10</td>

<td>11.6</td>

<td>4.2</td>

</tr>

<tr>

<td>`需要用new`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>44.0 (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 一致性提示

从ECMAScript 2015 (ES6)开始， `Float32Array`构造函数需要用一个[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。")操作符来构造。现在直接把`Float32Array构造函数当函数调用而不使用new，会抛出一个`[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")。

<pre class="brush: js example-bad">var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// 不允许不使用new</pre>

<pre class="brush: js example-good">var dv = new Float64Array([1, 2, 3]);</pre>

## 参见

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")