一个**TypedArray** 对象描述一个表示底层的[二进制数据缓存区](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)的类似数组(array-like)视图。没有名为TypedArray的全局属性，也没有直接可见的TypedArray构造函数。相反，有许多不同的全局属性，其值是下面列出的特定元素类型的类型化数组构造函数。在下面的页面中，你会找到可用于包含任何类型的元素的任何类型数组的常见属性和方法

## 语法

<pre class="syntaxbox">new_ TypedArray_(length); 
new _TypedArray_(typedArray); 
new _TypedArray_(object); 
new _TypedArray_(buffer [, byteOffset [, length]]); 

以下皆是 _TypedArray()_ : 

Int8Array(); 
Uint8Array(); 
Uint8ClampedArray();
Int16Array(); 
Uint16Array();
Int32Array(); 
Uint32Array(); 
Float32Array(); 
Float64Array();</pre>

### 参数

<dl>

<dt>length</dt>

<dd>当传入lengch参数时,一个内部数组缓冲区被创建,该缓存区的大小是传入的length乘以数组中每个元素的字节数,每个元素的值都为0.(译者注:每个元素的字节数是由具体的构造函数决定的,比如Int16Array的每个元素的字节数为2,Int32Array的每个元素的字节数为4)</dd>

<dt>typedArray</dt>

<dd>当传入一个包含任意类型元素的任意类型化数组对象(`typedArray)` (比如 **Int32Array)**作为参数时,typeArray被复制到一个新的类型数组。typeArray中的每个值会在复制到新的数组之前根据构造器进行转化.新的生成的类型化数组对象将会有跟传入的数组相同的length(译者注:比如原来的typeArray.length==2,那么新生成的数组的length也是2,只是数组中的每一项进行了转化)</dd>

<dt>object</dt>

<dd>当传入一个 <font face="Consolas, Liberation Mono, Courier, monospace">object 作为参数时，如同通过</font> `_TypedArray_.from()` 方法一样创建一个新的类型数组。</dd>

<dt>buffer, byteOffset, length</dt>

<dd>当传入arrayBuffer和可选参数byteOffset,可选参数length时,一个新的类型化数组视图将会被创建,该类型化数组视图用于呈现传入的`[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.")实例。byteOffset和length指定类型化数组视图暴露的内存范围,如果两者都未传入,那么整个buffer都会被呈现,如果仅仅忽略length,那么buffer中偏移(byteOffset)后剩下的buffer将会被呈现`.</dd>

<dt>

## 描述

</dt>

</dl>

ECMAScript 6定义TypeArray构造器作为所有的类型化数组构造器(Int8Array,Int16Array等)的原型.该构造器不会直接暴露:没有全局的%TypedArray%和TypeArray属性.只能通过使用类似Object.getPrototypeOf(`Int8Array.prototype`)的方式进行访问.所有的类型化数组构造器(Int8Array,Int16Array等)都会继承TypeArray构造器的通用属性和方法.此外,所有的类型化数组原型(Int8Array.prototype,Int16Array.prototype等)的原型都以TypeArray.prototype作为原型.

TypedArray构造器自身不是特别有用.调用或在一个表达式中使用它都会抛出一个TypeError异常,除非在支持通过继承创建对象的JS引擎下运行.但直到现在还没有这样的JS引擎出现,因此TypeArray仅仅是对所有的类型化类构造器(Int8Array,Int16Array等)的方法和属性进行polyfill的时候比较有用.

### 属性访问

你可以参考使用标准数组索引数组中的元素的方法(其实就是方括号里面写下标).然而,原型链上面定义的索引属性(译者注:即用数字作为属性,例如Int16Array.prototype[0]=12;),在实例化的对象上面是获取不到该属性的(int16Array[0]==undefined).通过查询 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。") 是找不到索引属性的.但您仍然可以使用命名属性(译者注:就是键不是数字的),就像所有对象一样。

<pre class="brush: js">// 设置和使用标准数组语法
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = "foo";
(new Int8Array(32))[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
(new Int8Array(8))[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
(new Int8Array(8))[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
(new Int8Array(32)).foo; // "bar"</pre>

## TypedArray 对象

<table class="standard-table">

<tbody>

<tr>

<td class="header">类型</td>

<td class="header">大小（字节单位）</td>

<td class="header">描述</td>

<td class="header">Web IDL type</td>

<td class="header">C语言中的等效类型</td>

</tr>

<tr>

<td>[`Int8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "Int8Array 类型数组为8位二进制补码有符号整数的数组. 初始化内容为0\. 你可以使用构造对象来初始化一个Int8Array对象, 也可以使用标准的数组语法 (大括号语法初始化).")</td>

<td>1</td>

<td>8位二进制带符号整数 -2^7~(2^7) - 1</td>

<td>byte</td>

<td>int8_t</td>

</tr>

<tr>

<td>[`Uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "Uint8Array 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。")</td>

<td>1</td>

<td>8位无符号整数 0~(2^8) - 1</td>

<td>octet</td>

<td>uint8_t</td>

</tr>

<tr>

<td>[`Int16Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")</td>

<td>2</td>

<td>16位二进制带符号整数 -2^15~(2^15)-1</td>

<td>`short`</td>

<td>int16_t</td>

</tr>

<tr>

<td>[`Uint16Array`](/zh-CN/docs/Web/JavaScript/Reference/Uint16Array "此页面仍未被本地化, 期待您的翻译!")</td>

<td>2</td>

<td>16位无符号整数 0~(2^16) - 1</td>

<td>`unsigned short`</td>

<td>uint16_t</td>

</tr>

<tr>

<td>[`Int32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")</td>

<td>4</td>

<td>32位二进制带符号整数 -2^31~(2^31)-1</td>

<td><font face="Consolas, Liberation Mono, Courier, monospace">long</font></td>

<td>int32_t</td>

</tr>

<tr>

<td>[`Uint32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "Uint32Array表示一个由基于平台字节序的32位无符号字节组成的数组.如果需要对字节顺序进行控制(译者注:即 littleEndian 或 bigEndian),请使用DataView代替.数组中每个元素的初始值都是0.一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。")</td>

<td>4</td>

<td>32位无符号整数 0~(2^32) - 1</td>

<td>`unsigned int`</td>

<td>uint32_t</td>

</tr>

<tr>

<td>[`Float32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array "Float32Array 类型数组代表的是平台字节顺序为32位的浮点数型数组(对应于 C 浮点数据类型) 。 如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。")</td>

<td>4</td>

<td>32位IEEE浮点数</td>

<td>unrestricted float</td>

<td>float</td>

</tr>

<tr>

<td>[`Float64Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array "Float64Array 类型数组代表的是平台字节顺序为64位的浮点数型数组(对应于 C 浮点数据类型) 。 如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。")</td>

<td>8</td>

<td>64位IEEE浮点数</td>

<td>unrestricted double</td>

<td>double</td>

</tr>

</tbody>

</table>

## 属性

<dl>

<dt>[`TypedArray.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>返回不同类型的数组对象的元素大小的数字值。</dd>

<dt>_TypedArray_.length</dt>

<dd>Length property whose value is 3.(译者注:应该是数组的长度吧???)</dd>

<dt>[`TypedArray.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "TypedArray.name 属性是描述类型数组构造名的字符串值。")</dt>

<dd>返回构造器的名称,例如"Int8Array".</dd>

<dt>[`get TypedArray[@@species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@species "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>用于创建派生对象的构造函数函数.</dd>

<dt>[`TypedArray.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.")</dt>

<dd>TypedArray的原型.</dd>

<dt>

## 方法

</dt>

<dt>[`TypedArray.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>使用类数组(array-like)或迭代对象创建一个新的类型化数组.参见 [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。").</dd>

<dt>[`TypedArray.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>通过可变数量的参数创建新的类型化数组.参见 [`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。").</dd>

<dt>

## TypedArray 原型

所有的类型化数组都是继承自[`TypedArray.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.").

### 属性

<dl>

<dt>`TypedArray.prototype.constructor`</dt>

<dd>返回创建实例原型的构造函数.这是相应的[typed array type](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)的默认的构造函数.</dd>

<dt>[`TypedArray.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>返回被格式化数组引用的[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。"). 创建时已被固化,因此是只读的.</dd>

<dt>[`TypedArray.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>返回从[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")读取的字节长度. 创建时已被固化,因此是只读的.</dd>

<dt>[`TypedArray.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>返回从[`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")读取时的字节偏移量**.**创建时已被固化,因此是只读的.</dd>

<dt>[`TypedArray.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span title="该属性的值无法更改" class="inlineIndicator readOnly readOnlyInline">只读</span></dt>

<dd>返回在类型化数组中的元素的数量**.**创建时已被固化,因此是只读的.</dd>

</dl>

### 方法

<dl>

<dt>[`TypedArray.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组. 参见 [`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。").</dd>

<dt>[`TypedArray.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个 `**Array Iterator**` 对象，该对象包含数组中每一个索引的键值对.参见 [`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。").</dd>

<dt>[`TypedArray.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>测试数组的所有元素是否都通过了指定函数的测试. 参见[`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。").</dd>

<dt>[`TypedArray.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值. 参见 [`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "使用 fill() 方法，可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。").</dd>

<dt>[`TypedArray.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组. 参见 [`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。").</dd>

<dt>[`TypedArray.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个满足提供的函数的测试的元素,若是没有满足的元素则返回`undefined` . 参见 [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "如果数组中某个元素满足测试条件，find() 方法就会返回那个元素的第一个值，如果没有满足条件的元素，则返回 undefined。").</dd>

<dt>[`TypedArray.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1\. 参见 [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1.").</dd>

<dt>[`TypedArray.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组的每个元素执行一次提供的函数(回调函数). 参见 [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。").</dd>

<dt>[`TypedArray.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>确定一个类型化数组是否包括了某个元素,包含就返回true,不包含就返回false.参见 [`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。").</dd>

<dt>[`TypedArray.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组中第一个等于指定值得元素的索引,如果找不到则返回-1\. 参见 [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。").</dd>

<dt>[`TypedArray.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将数组中的所有元素连接成一个字符串. 参见 [`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。").</dd>

<dt>[`TypedArray.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个新的包含数组索引的数组迭代器. 参见 [`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。").</dd>

<dt>[`TypedArray.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组中最后一个等于指定值得元素的索引,如果找不到则返回-1.参见 [`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。").</dd>

<dt>[`TypedArray.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>创建一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组.参见 [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。").</dd>

<dt>[`TypedArray.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>以前的不标准版本的 [`TypedArray.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!").</dd>

<dt>[`TypedArray.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "reduce() 方法接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值. 这个方法和Array.prototype.reduce()使用了同样的算法. TypedArray 是一个 类型数组.")</dt>

<dd>接收一个函数作为累加器（accumulator),数组中的每个值（从左到右）开始合并，最终为一个值. 参见[`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。").</dd>

<dt>[`TypedArray.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>接受一个函数作为累加器（accumulator）,让每个值（从右到左，亦即从尾到头）缩减为一个值.（与 `reduce()` 的执行方向相反）. 参见[`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）").</dd>

<dt>[`TypedArray.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个. 参见 [`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。").</dd>

<dt>[`TypedArray.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>读取一个指定数组中的元素保存到格式化数组中.</dd>

<dt>[`TypedArray.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>浅复制（shallow copy）数组的一部分到一个新的数组，并返回这个新数组. 参见 [`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法会浅复制（shallow copy）数组的一部分到一个新的数组，并返回这个新数组。").</dd>

<dt>[`TypedArray.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>数组中只要有一个元素满足提供的测试函数的测试就返回true,否则返回false. 参见 [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。").</dd>

<dt>[`TypedArray.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组进行排序,并返回原数组(是改变原数组). 参见 [`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 排序可能是不稳定的。默认按照字符串的Unicode码位点（code point）排序。").</dd>

<dt>[`TypedArray.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回给定的起始和结束索引之间的元素组成的新的类型化数组.</dd>

<dt>[`TypedArray.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回有数组中的元素组成的新的数组迭代对象. 参见 [`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。").</dd>

<dt>[`TypedArray.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个将数组中的每个元素本地化后组成的字符串. 参见 [`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。").</dd>

<dt>[`TypedArray.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个由数组中的每个元素字符串化后组成的字符串. 参见 [`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。").</dd>

<dt>[`TypedArray.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个包含数组中每个元素的新的数组迭代对象.</dd>

</dl>

</dt>

</dl>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/ "Typed Array Specification")</td>

<td><span class="spec-Obsolete">Obsolete</span></td>

<td>Defined as `TypedArray` and `ArrayBufferView` interface with typed array view types. Superseded by ECMAScript 6.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray Objects</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition in an ECMA standard. Specified behaviour for indexed and named properties. Specified that `new` is required.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">TypedArray Objects</small>](https://tc39.github.io/ecma262/#sec-typedarray-objects)</td>

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

<td>Indexed properties not consulting prototype</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

<td>[25](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Named properties</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[30](/en-US/Firefox/Releases/30 "Released on 2014-06-10.") (30)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td>4.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>4.0 (2)</td>

<td>10</td>

<td>11.6</td>

<td>4.2</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Indexed properties not consulting prototype</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

<td>25.0 (25)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

</tr>

<tr>

<td>Named properties</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>30.0 (30)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`new` is required</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>44.0 (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

[1] `-1` and similar are not considered as indexed properties and therefore return the value of the prototype property.

## 兼容性注意事项

从ECMAScript 2015 (ES6)开始,TypedArray 构造函数使用的时候必须要使用new.从现在开始不使用new调用TypedArray构造函数将会抛出异常[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")

<pre class="brush: js example-bad">var dv = Int8Array([1, 2, 3]);
// TypeError: 不使用new调用内置的Int8Array构造函数是被禁止的
</pre>

<pre class="brush: js example-good">var dv = new Int8Array([1, 2, 3]);</pre>

## 相关链接

*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")