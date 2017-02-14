所有的[`数组`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")实例都继承于 **`Array.prototype`**。

<div>

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`Array.prototype` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>false</td>

</tr>

<tr>

<td>enumerable</td>

<td>false</td>

</tr>

<tr>

<td>configurable</td>

<td>false</td>

</tr>

</tbody>

</table>

</div>

## 描述

所有的数组方法都定义在 `Array.prototype` 身上，和其他的构造函数一样，你可以通过扩展 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 的 `prototype` 属性上的方法来给所有数组实例增加方法。

还一个鲜为人知的事实：`Array.prototype` 本身也是个数组。

<pre class="brush: js">Array.isArray(Array.prototype); // true
</pre>

## 属性

<dl>

<dt>`Array.prototype.constructor`</dt>

<dd>所有的数组实例都继承了这个属性，它的值就是 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")，表明了所有的数组都是由 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 构造出来的。</dd>

<dt>[`Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")</dt>

<dd>上面说了，因为 `Array.prototype` 也是个数组，所有它也有 `length` 属性，这个值为 `0`，因为它是个空数组。</dd>

</dl>

## 方法

### 会改变自身的方法

下面的这些方法会改变调用它们的对象自身的值：

<dl>

<dt>[`Array.prototype.copyWithin()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法用于在数组内的替换操作，即替换元素与被替换元素都是数组内的元素。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。</dd>

<dt>[`Array.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "使用 fill() 方法，可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>将数组中指定区间的所有元素的值，都替换成某个固定的值。</dd>

<dt>[`Array.prototype.pop()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "pop() 方法删除一个数组中的最后的一个元素，并且返回这个元素。")</dt>

<dd>删除数组的最后一个元素，并返回这个元素。</dd>

<dt>[`Array.prototype.push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）。")</dt>

<dd>在数组的末尾增加一个或多个元素，并返回数组的新长度。</dd>

<dt>[`Array.prototype.reverse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。")</dt>

<dd>颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。</dd>

<dt>[`Array.prototype.shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法删除数组的 第一个 元素，并返回这个元素。该方法会改变数组的长度。")</dt>

<dd>删除数组的第一个元素，并返回这个元素。</dd>

<dt>[`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 可能不是稳定的。默认按照字符串的Unicode码位点（code point）排序。")</dt>

<dd>对数组元素进行排序，并返回当前数组。</dd>

<dt>[`Array.prototype.splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "splice() 方法用新元素替换旧元素，以此修改数组的内容。")</dt>

<dd>在任意的位置给数组添加或删除任意个元素。</dd>

<dt>[`Array.prototype.unshift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "unshift() 方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值。")</dt>

<dd>在数组的开头增加一个或多个元素，并返回数组的新长度。</dd>

</dl>

### 不会改变自身的方法

下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

<dl>

<dt>[`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "将传入的数组或非数组值与原数组合并,组成一个新的数组并返回.")</dt>

<dd>返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。</dd>

<dt>[`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断当前数组是否包含某指定的值，如果是返回 `true`，否则返回 `false`。</dd>

<dt>[`Array.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。")</dt>

<dd>连接所有数组元素组成一个字符串。</dd>

<dt>[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组。")</dt>

<dd>抽取当前数组中的一段元素组合成一个新数组。</dd>

<dt>[`Array.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource "返回一个字符串,代表该数组的源代码.")<span title="This API has not been standardized."></span></dt>

<dd>返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 [`Object.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") 方法。</dd>

<dt>[`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。")</dt>

<dd>返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

<dt>[`Array.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString "toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。")</dt>

<dd>返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 [`Object.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。") 方法。</dd>

<dt>[`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回给定元素能找在数组中找到的第一个索引值，否则返回-1。")</dt>

<dd>返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。</dd>

<dt>[`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。")</dt>

<dd>返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。</dd>

</dl>

### 遍历方法

在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。在回调函数执行之前，数组的长度会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

<dl>

<dt>[`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法让数组的每一项都执行一次给定的函数。")</dt>

<dd>为数组中的每个元素执行一次回调函数。</dd>

<dt>[`Array.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries "entries() 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。</dd>

<dt>[`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")</dt>

<dd>如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 `false。`</dd>

<dt>[`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")</dt>

<dd>如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。</dd>

<dt>[`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。")</dt>

<dd>将所有在过滤函数中返回 `true` 的数组元素放进一个新数组中并返回。</dd>

<dt>[`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足测试条件的一个元素，如果没有满足条件的元素，则返回 ")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 `undefined`。</dd>

<dt>[`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 `-1`。</dd>

<dt>[`Array.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys "数组的 keys() 方法返回一个数组索引的迭代器。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。</dd>

<dt>[`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。")</dt>

<dd>返回一个由回调函数的返回值组成的新数组。</dd>

<dt>[`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。")</dt>

<dd>从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。</dd>

<dt>[`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）")</dt>

<dd>从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。</dd>

<dt>[`Array.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values "values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。</dd>

<dt>[`Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>和上面的 `values() 方法是同一个函数。`</dd>

</dl>

### 通用方法

在 JavaScript 中，很多的数组方法被故意设计成是通用的。也就是说，那些看起来像是数组的对象（类数组对象），即拥有一个 `length` 属性，以及对应的索引属性（也就是数字类型的属性，比如 `obj[5]`）的非数组对象也是可以调用那些数组方法的。其中一些数组方法，比如说 [`join`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组中的所有元素连接成一个字符串。") 方法，它们只会单纯的读取当前对象的 `length` 属性和索性属性的值，并不会尝试去改变这些属性的值。而另外一些数组方法，比如说 [`reverse`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。") 方法，它们会尝试修改那些属性的值，因此，如果当前对象是个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!") 对象，那么这些方法在执行时就会报错，因为字符串对象的 `length` 属性和索引属性都是只读的。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。")