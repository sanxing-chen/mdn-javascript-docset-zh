**`Int8Array`** 类型数组为8位二进制补码有符号整数的数组. 初始化内容为0\. 你可以使用构造对象来初始化一个Int8Array对象, 也可以使用标准的数组语法 (大括号语法初始化).

## 语法

<pre class="syntaxbox">new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);
new Int8Array(buffer [, byteOffset [, length]]);</pre>

获得构造器语法与参数的更多信息，请访问 _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

<dl>

<dt>[`Int8Array.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>返回数组中每个元素的大小. 在`Int8Array中这个值为1`.</dd>

<dt>Int8Array.length</dt>

<dd>此属性为固定值属性，值为3.查看 [`Int8Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!")获得获取数组内元素个数方法。</dd>

<dt>[`Int8Array.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回构造器方法名称.在Int8Array类型中此值为 "Int8Array"。</dd>

<dt>[`Int8Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>_TypedArray_ 对象的构造原型。</dd>

</dl>

## 方法

<dl>

<dt>[`Int8Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从类数组对象或迭代器生成int8Array数组对象. 参照[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法可以将一个类数组对象或可迭代对象转换成真正的数组。").</dd>

<dt>[`Int8Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>以多个参数构造Int8Array对象， 参照 [`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法会将它的任意类型的多个参数放在一个数组里并返回。").</dd>

</dl>

## `Int8Array` 原型方法

`Int8Array所有方法继承自` [`%TypedArray%.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!").

### 属性

<dl>

<dt>`Int8Array.prototype.constructor`</dt>

<dd>这个方法会返回对象的构造原型. 默认为`Int8Array构造函数`.</dd>

<dt>[`Int8Array.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。") referenced by the `Int8Array` Fixed at construction time and thus **read only**.</dd>

<dt>[`Int8Array.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the length (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

<dt>[`Int8Array.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the offset (in bytes) of the `Int8Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

<dt>[`Int8Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the number of elements hold in the `Int8Array`. Fixed at construction time and thus **read only.**</dd>

</dl>

### 方法

<dl>

<dt>[`Int8Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法用于在数组内的替换操作，即替换元素与被替换元素都是数组内的元素。").</dd>

<dt>[`Int8Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。").</dd>

<dt>[`Int8Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。").</dd>

<dt>[`Int8Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "使用 fill() 方法，可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。").</dd>

<dt>[`Int8Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。").</dd>

<dt>[`Int8Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足测试条件的一个元素，如果没有满足条件的元素，则返回 ").</dd>

<dt>[`Int8Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1.").</dd>

<dt>[`Int8Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Calls a function for each element in the array. See also [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法让数组的每一项都执行一次给定的函数。").</dd>

<dt>[`Int8Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。").</dd>

<dt>[`Int8Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。").</dd>

<dt>[`Int8Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Joins all elements of an array into a string. See also [`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。").</dd>

<dt>[`Int8Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。").</dd>

<dt>[`Int8Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。").</dd>

<dt>[`Int8Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个由回调函数的返回值组成的新数组。. See also [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。").</dd>

<dt>[`Int8Array.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>[`Int8Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!") 早期的不标准定义。</dd>

<dt>[`Int8Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。参照 [`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。").</dd>

<dt>[`Int8Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。参照 [`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）").</dd>

<dt>[`Int8Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。参照[`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。").</dd>

<dt>[`Int8Array.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>

<dt>[`Int8Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>抽取当前数组中的一段元素组合成一个新数组。参照[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组。").</dd>

<dt>[`Int8Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。参照 [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。").</dd>

<dt>[`Int8Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组元素进行排序，并返回当前数组. 参照[`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 可能不是稳定的。默认按照字符串的Unicode码位点（code point）排序。").</dd>

<dt>[`Int8Array.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个以给定的初始结束位置裁剪的Int8Array数组.</dd>

<dt>[`Int8Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。. 参照 [`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。").</dd>

<dt>[`Int8Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个由所有数组元素组合而成的本地化后的字符串. See also [`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。").</dd>

<dt>[`Int8Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个由所有数组元素组合而成的字符串.参照 [`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。").</dd>

<dt>[`Int8Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>此方法返回一个带有数组内所有元素的迭代器对象，同Int8Array.prototype.values 。</dd>

</dl>

## 示例

<pre class="brush: js">// 以长度参数构造对象
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 以数组构造对象
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// 从另一数组构造对象
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// 从ArrayBuffer构造对象
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">评论</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>已被 ECMAScript 6取代。</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](http://www.ecma-international.org/ecma-262/6.0/#table-49)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>ECMA 标准中构造对象时 new 关键字为必需。</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](https://tc39.github.io/ecma262/#table-49)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器支持

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>功能</th>

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

<td>`new` is required</td>

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

<td>`new` is required</td>

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

## 兼容性说明

自 ECMAScript 2015 (ES6)施行, `Int8Array` 需要使用[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 构造. 从当前版本开始，不加new而便调用`Int8Array` 构造器方法, 将报出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 错误.

<pre class="brush: js example-bad">var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor 
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Int8Array([1, 2, 3]);</pre>

## 相关链接

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")