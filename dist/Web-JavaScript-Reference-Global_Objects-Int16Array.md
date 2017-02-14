The **`Int16Array`** typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。") instead. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## 语法

<pre class="syntaxbox">new Int16Array(length);
new Int16Array(typedArray);
new Int16Array(object);
new Int16Array(buffer [, byteOffset [, length]]);</pre>

For more information about the constructor syntax and the parameters, see _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

<dl>

<dt>[`Int16Array.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>Returns a number value of the element size. `2` in the case of an `Int16Array`.</dd>

<dt>Int16Array.length</dt>

<dd>Static length property whose value is 3\. For the actual length (number of elements), see [`Int16Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!").</dd>

<dt>[`Int16Array.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the string value of the constructor name. In the case of the `Int16Array` type: "Int16Array".</dd>

<dt>[`Int16Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Prototype for the _TypedArray_ objects.</dd>

</dl>

## 方法

<dl>

<dt>[`Int16Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Creates a new `Int16Array` from an array-like or iterable object. See also [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法可以将一个类数组对象或可迭代对象转换成真正的数组。").</dd>

<dt>[`Int16Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Creates a new `Int16Array` with a variable number of arguments. See also [`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法会将它的任意类型的多个参数放在一个数组里并返回。").</dd>

</dl>

## `Int16Array` prototype

All `Int16Array` objects inherit from [`%TypedArray%.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "此页面仍未被本地化, 期待您的翻译!").

### Properties

<dl>

<dt>`Int16Array.prototype.constructor`</dt>

<dd>Returns the function that created an instance's prototype. This is the `Int16Array` constructor by default.</dd>

<dt>[`Int16Array.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。") referenced by the `Int16Array` Fixed at construction time and thus **read only**.</dd>

<dt>[`Int16Array.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the length (in bytes) of the `Int16Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

<dt>[`Int16Array.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the offset (in bytes) of the `Int16Array` from the start of its [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). Fixed at construction time and thus **read only.**</dd>

<dt>[`Int16Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>Returns the number of elements hold in the `Int16Array`. Fixed at construction time and thus **read only.**</dd>

</dl>

### Methods

<dl>

<dt>[`Int16Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Copies a sequence of array elements within the array. See also [`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法用于在数组内的替换操作，即替换元素与被替换元素都是数组内的元素。").</dd>

<dt>[`Int16Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also [`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。").</dd>

<dt>[`Int16Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Tests whether all elements in the array pass the test provided by a function. See also [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。").</dd>

<dt>[`Int16Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Fills all the elements of an array from a start index to an end index with a static value. See also [`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "使用 fill() 方法，可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。").</dd>

<dt>[`Int16Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also [`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。").</dd>

<dt>[`Int16Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足测试条件的一个元素，如果没有满足条件的元素，则返回 ").</dd>

<dt>[`Int16Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1.").</dd>

<dt>[`Int16Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Calls a function for each element in the array. See also [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法让数组的每一项都执行一次给定的函数。").</dd>

<dt>[`Int16Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also [`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。").</dd>

<dt>[`Int16Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。").</dd>

<dt>[`Int16Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Joins all elements of an array into a string. See also [`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。").</dd>

<dt>[`Int16Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` that contains the keys for each index in the array. See also [`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。").</dd>

<dt>[`Int16Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also [`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。").</dd>

<dt>[`Int16Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Creates a new array with the results of calling a provided function on every element in this array. See also [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。").</dd>

<dt>[`Int16Array.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>Former non-standard version of [`Int16Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!").</dd>

<dt>[`Int16Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also [`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。").</dd>

<dt>[`Int16Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also [`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）").</dd>

<dt>[`Int16Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also [`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。").</dd>

<dt>[`Int16Array.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>

<dt>[`Int16Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Extracts a section of an array and returns a new array. See also [`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组。").</dd>

<dt>[`Int16Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns true if at least one element in this array satisfies the provided testing function. See also [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。").</dd>

<dt>[`Int16Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Sorts the elements of an array in place and returns the array. See also [`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 可能不是稳定的。默认按照字符串的Unicode码位点（code point）排序。").</dd>

<dt>[`Int16Array.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Int16Array` from the given start and end element index.</dd>

<dt>[`Int16Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` object that contains the values for each index in the array. See also [`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。").</dd>

<dt>[`Int16Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a localized string representing the array and its elements. See also [`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。").</dd>

<dt>[`Int16Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a string representing the array and its elements. See also [`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。").</dd>

<dt>[`Int16Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns a new `Array Iterator` object that contains the values for each index in the array.</dd>

</dl>

## Examples

<pre class="brush: js">// From a length
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Int16Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);
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

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>Superseded by ECMAScript 6.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](http://www.ecma-international.org/ecma-262/6.0/#table-49)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard. Specified that `new` is required.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](https://tc39.github.io/ecma262/#table-49)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

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

## Compatibility notes

Starting with ECMAScript 2015 (ES6), `Int16Array` constructors require to be constructed with a [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") operator. Calling a `Int16Array` constructor as a function without `new`, will throw a [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") from now on.

<pre class="brush: js example-bad">var dv = Int16Array([1, 2, 3]);
// TypeError: calling a builtin Int16Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Int16Array([1, 2, 3]);</pre>

## See also

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView 视图提供了一种用于向 ArrayBuffer 读写数据的底层接口。")