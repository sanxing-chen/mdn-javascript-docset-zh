## 概述

**`Uint8Array`** 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。

## 语法格式

<pre class="syntaxbox">Uint8Array(length);//创建初始化为0的，包含length个元素的无符号整型数组
Uint8Array(typedArray);
Uint8Array(object);
Uint8Array(buffer [, byteOffset [, length]]);</pre>

构造语法和参数的更多信息请参见 _[TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

<dl>

<dt>[`Uint8Array.BYTES_PER_ELEMENT`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT "TypedArray.BYTES_PER_ELEMENT 属性代表了强类型数组中每个元素所占用的字节数。")</dt>

<dd>返回数组中元素的字节数，Uint8Array中返回1字节。</dd>

<dt>Uint8Array.length</dt>

<dd>数组的长度</dd>

<dt>[`Uint8Array.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name "TypedArray.name 属性是描述类型数组构造名的字符串值。")</dt>

<dd>返回构造名的字符串，对Uint8Array类型而言返回 “Uint8Array”</dd>

<dt>[`Uint8Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.")</dt>

<dd>_TypedArray_ 对象的原型.</dd>

</dl>

## 方法

<dl>

<dt>[`Uint8Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>从一个数组或可迭代的对象创建一个新的Uint8Array数组，可参见[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。").</dd>

<dt>[`Uint8Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of "TypedArray.of() 方法创建一个具有可变数量参数的新类型数组 。此方法几乎与Array.of() 相同。")</dt>

<dd>通过一个可变数目的参数创建一个新的`Uint8Array`数组，可参见[`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。").</dd>

</dl>

## `Uint8Array` 原型声明

所有的`Uint8Array对象继承自` [`%TypedArray%.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype "TypedArray.prototype属性表示TypedArray构造器的原型.").

### 属性

<dl>

<dt>`Uint8Array.prototype.constructor`</dt>

<dd>返回创建实例属性的函数，默认为 `Uint8Array` 构造器。</dd>

<dt>[`Uint8Array.prototype.buffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回由 `Uint8Array`引用的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。") ，在构造时期固定，所以是**只读**的。</dd>

<dt>[`Uint8Array.prototype.byteLength`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回`Uint8Array`长度（字节数）。在构造时期固定，所以是 **只读的**。</dd>

<dt>[`Uint8Array.prototype.byteOffset`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回`Uint8Array` 距离其 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。") 起始位置的偏移（字节数）。在构造时期固定，所以是 **只读的**。</dd>

<dt>[`Uint8Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length "此页面仍未被本地化, 期待您的翻译!") <span class="inlineIndicator readOnly readOnlyInline" title="该属性的值无法更改">只读</span></dt>

<dd>返回保存在 `Uint8Array`中的元素数量。 在构造时期固定，所以是 **只读的**。</dd>

</dl>

### 方法

<dl>

<dt>[`Uint8Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>复制数组中的元素序列，请参见 [`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。")。</dd>

<dt>[`Uint8Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回新的`Array Iterator` 对象，含有数组中每个下标处的键值对。请参见[`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。").</dd>

<dt>[`Uint8Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>测试数组中所有元素是否都能通过由函数提供的测试。请参见 [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")。</dd>

<dt>[`Uint8Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>使用静态值填充从起始下标到终止下标的数组元素。请参见 [`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "The fill() 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引")。</dd>

<dt>[`Uint8Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>创建新的数组，含有数组中给定过滤器返回 true 的所有元素。请参见[`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。").</dd>

<dt>[`Uint8Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>如果数组中的元素满足提供的测试函数，返回找到的值，如果没有找到则返回 `undefined`。请参见 [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。")。</dd>

<dt>[`Uint8Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>如果数组中的元素满足提供的测试函数，返回找到的下标，如果没有找到则返回 -1。请参见 [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。").</dd>

<dt>[`Uint8Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组的每个元素调用字符串 [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。")。</dd>

<dt>[`Uint8Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断类型化数组是否包含特定值，如果包含返回 `true`，否则返回`false`。另见[`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。")。</dd>

<dt>[`Uint8Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "indexOf() 方法返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.indexOf() 相同的算法。 TypedArray是这里的类型化数组类型之一。")</dt>

<dd>返回数组中等于特定值的第一个元素（下标最小），如果没有找到则返回 -1，请参见 [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。").</dd>

<dt>[`Uint8Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将数组中所有元素连接为字符串。请参见 [`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。")。</dd>

<dt>[`Uint8Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回新的`Array Iterator` ，含有数组中每个下标的键，请参见 [`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。")。</dd>

<dt>[`Uint8Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组中等于特定值的最后一个元素（下标最大），如果没有找到则返回 -1，请参见 [`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。")。</dd>

<dt>[`Uint8Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>使用在该数组的每个元素上调用函数的结果创建新数组，请参见[`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。")。</dd>

<dt>[`Uint8Array.prototype.move()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move "此页面仍未被本地化, 期待您的翻译!") <span title="This API has not been standardized."></span><span class="inlineIndicator unimplemented unimplementedInline">未实现</span></dt>

<dd>[`Uint8Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin "此页面仍未被本地化, 期待您的翻译!")的之前的非标准版本。</dd>

<dt>[`Uint8Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce "reduce() 方法接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值. 这个方法和Array.prototype.reduce()使用了同样的算法. TypedArray 是一个 类型数组.")</dt>

<dd>对累加器和数组的每个值应用函数（从左到右），使其归约为单一的值， 另见 [`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值。")。</dd>

<dt>[`Uint8Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对累加器和数组的每个值应用函数（从右到左），使其归约为单一的值， 另见 [`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）")。</dd>

<dt>[`Uint8Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>翻转数组中的元素顺序 — 第一个变为最后，最后变为第一个。另见 [`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。")。</dd>

<dt>[`Uint8Array.prototype.set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在类型化数组中储存多个值，从特定数组中读取输入。</dd>

<dt>[`Uint8Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>提取数组的某个部分并返回新的数组，请参见 [`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。")。</dd>

<dt>[`Uint8Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>如果数组中至少一个元素满足给定的测试函数，则返回`true`。请参见[`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")。</dd>

<dt>[`Uint8Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>原地排序数组中的元素，并返回该数组，请参见 [`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。")。</dd>

<dt>[`Uint8Array.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`从给定的元素起始和终止下标返回新的 Uint8Array` 。</dd>

<dt>[`Uint8Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回新的 `Array Iterator` 对象，含有数组每个下标处的值，请参见 [`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。")。</dd>

<dt>[`Uint8Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回表示数组及其元素的本地化字符串，请参见 [`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。")。</dd>

<dt>[`Uint8Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString "toString()方法返回一个表示指定数组及其元素的字符串。这个方法的算法和Array.prototype.toString()一样。TypedArray 在这是typed array types 之一。")</dt>

<dd>返回表示数组及其元素的字符串。请参见 [`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。")。</dd>

<dt>[`Uint8Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`返回新的 Array Iterator` 对象，包含数组中每个下标处的值。</dd>

</dl>

## 例子

<pre class="brush: js">// 来自长度
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 来自数组
var arr = new Uint8Array([21,31]);
console.log(arr[1]); // 31

// 来自另一个 TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// 来自 ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[类型化数组规范](https://www.khronos.org/registry/typedarray/specs/latest/#7)</td>

<td>Obsolete</td>

<td><span><span>由 ECMAScript 6 取代。</span></span></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypedArray constructors</small>](http://www.ecma-international.org/ecma-262/6.0/#table-45)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>ECMA 标准中的初始定义。</td>

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

## 相关内容

*   [JavaScript 类型化数组](/en-US/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")
*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。")
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")