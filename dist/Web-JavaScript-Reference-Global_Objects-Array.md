JavaScript 数组对象是一个用于构造数组的全局对象; 它们是高级的，列表式的对象。

**创建一个数组**

<pre class="brush: js">var fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2</pre>

**通过索引访问数组元素**

<pre class="brush: js">var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana</pre>

**遍历一个数组**

<pre class="brush: js">fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1</pre>

**添加元素到数组的末尾**

<pre class="brush: js">var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]</pre>

**删除数组末尾的元素**

<pre class="brush: js">var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];</pre>

**删除数组最前面（头部）的元素**

<pre class="brush: js">var first = fruits.shift(); // remove Apple from the front
// ["Banana"];</pre>

**添加到数组的前面（头部）**

<pre class="brush: js">var newLength = fruits.unshift("Strawberry") // add to the front
// ["Strawberry", "Banana"];</pre>

**添加到数组的后边 (尾部)**

<pre>fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]</pre>

**找到某个元素在数组中的索引**

<pre class="brush: js">var pos = fruits.indexOf("Banana");
// 1</pre>

**通过索引删除某个元素**

<pre class="brush: js">var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]</pre>

**复制一个数组**

<pre class="brush: js">var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]</pre>

## 语法

<pre class="syntaxbox">[<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>]
new Array(<var>element0</var>, <var>element1</var>[, ...[, <var>elementN</var>]])
new Array(<var>arrayLength</var>)
</pre>

<dl>

<dt>元素列 —— `element_N_`</dt>

<dd>`Array` 构造器将会根据给出的元素创建一个 JavaScript 数组，但是当参数仅有一个参数且其为数字时除外，参考下面的 `arrayLength`。值得注意的是，这种情况仅在使用 `Array` 构造器时出现，使用带方括号的数组字面量则不会。</dd>

<dt>数组长度 —— arrayLength</dt>

<dd>向 `Array` 构造函数传入一个在 0 到 2<sup>32</sup>-1 之间的整数，将返回一个以此为长度的数组对象。通过 length 属性可以访问这个值。如果传入的参数不是有效的数值，则抛出 [`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。") 异常。</dd>

</dl>

## 描述

数组是类似列表的对象，在原型中提供了遍历以及改变其中元素的很多方法。 数组的长度及其中元素的类型都是不固定的。因为数组的长度可读可写，有时数组中的元素也不是在连续的位置，所以JavaScript 数组不一定是密集的。通常情况下，这是一些方便的特性；如果这些特性不适用于你的特定使用场景，你可以考虑使用固定类型数组。

有些人认为 [you shouldn't use an array as an associative array](http://www.andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/)。在任何情况下, 你可以使用一般的对象来代替，不过这样做会出现需要注意的地方。请看例子： [Lightweight JavaScript dictionaries with arbitrary keys](http://www.less-broken.com/blog/2010/12/lightweight-javascript-dictionaries.html) .

### 访问数组里的元素

JavaScript 数组的索引值（index）从0开始，即数组第一个元素的索引值为0。最后一个元素的索引值等于该数组的长度减1（Array.length -1）。

<pre class="brush: js  language-js">var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the second element'
</pre>

数组中的元素像一个对象以索引为属性名,元素为属性值，或者arr=['a','b']有点像arrObj={0:'a',1:'b'},一个对象的属性是可以通过"."来访问,但是使用下面这样使用会抛出语法错误，因为属性名称是非法的：

<pre class="brush: js  language-js">console.log(arr.0); // a syntax error
</pre>

这是由非法属性造成的，不是 Array 特有的。JavaScript 中数字开头的属性不能跟在点号后面；必须在方括号中使用。比如说，如果你有一个名为 ‘3d’ 的属性，它只能通过方括号的形式进行访问。 换言之访问合法的属性名可以用"."或者"[ ]",但是访问非法的属性只能用"[ ]",如下所示：

<pre class="brush: js  language-js">var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly
</pre>

<pre class="brush: js  language-js">renderer.3d.setTexture(model, 'character.png');     // a syntax error
renderer['3d'].setTexture(model, 'character.png');  // works properly
</pre>

在3d的例子中，'3d'的引号是必须的。该方法也可以用在 JavaScript 数组中（如：years['2'] 可以代替 years[2]），不过这不是必需的。在 years[2] 中，2会被Javascript 引擎自动调用 toString 转换成一个 string 类型的变量。正因为如此，'2' 和 '02' 在years 对象中将会指向不同的位置，下面这个例子将会打印 true：

<pre class="brush: js  language-js">console.log(years['2'] != years['02']);
</pre>

类似的，想要使用保留字作为对象的属性名称的，只能通过以单引号包裹其字符串的形式访问：

<pre class="brush: js  language-js">var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['array']);
</pre>

### 长度和数值下标属性性质之间的关系

JavaScript array 的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性和其数字下标是有关系的。几个内置数组的方法 (例如, [`join`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join "join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。"), [`slice`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。"), [`indexOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。"), 等) 被调用的时候会使用 到[`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性。 有些别的方法 (例如, [`push`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）。"), [`splice`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。"), 等) 会改变array的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。") 属性。

<pre class="brush: js  language-js">var fruits = [];
fruits.push('banana', 'apple', 'peach');

console.log(fruits.length); // 3
</pre>

当你在 array 上使用一个合法的数组下标，而且该下标超出了当前数组的大小的时候，引擎会根据其值自动更新 array 的[`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")属性：

<pre class="brush: js  language-js">fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6
</pre>

增大 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")。

<pre class="brush: js  language-js">fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
</pre>

减小 array 的[`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")属性会删掉超出的元素。

<pre class="brush: js  language-js">fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
</pre>

### 使用正则匹配的结果来创建数组

正则表达式与字符串之间的匹配结果可以创建一个数组。这个数组包含了正则匹配的属性与匹配结果。[`RegExp.exec`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。")，[`String.match`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。")， 与[`String.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。")的返回值就是这样的数组。下面的例子可以帮助理解这些属性和元素。

<pre class="brush: js">// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// 忽略大小写

myRe = /d(b+)(d)/i;
myArray = myRe.exec("cdbBdbsbz");
</pre>

该正则匹配返回的属性/元素列表：

<table class="fullwidth-table">

<tbody>

<tr>

<td class="header">Property/Element</td>

<td class="header">说明</td>

<td class="header">例子</td>

</tr>

<tr>

<td>`input`</td>

<td>原始的输入字符串，只读属性。</td>

<td>cdbBdbsbz</td>

</tr>

<tr>

<td>`index`</td>

<td>匹配的子字符串的第一个字符在原始字符串中的位置（从0开始的索引，只读）。</td>

<td>1</td>

</tr>

<tr>

<td>[0]</td>

<td>最后一次匹配的元素,只读。</td>

<td>dbBd</td>

</tr>

<tr>

<td>`[1], ...[n]`</td>

<td>出现在正则匹配中的子匹配（如果有）。</td>

<td>[1]: bB  
[2]: d</td>

</tr>

</tbody>

</table>

## 属性

<div><small>_For properties available on `Array` instances, see [Properties of Array instances](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Properties)._</small></div>

<dl>

<dt>`Array.length`</dt>

<dd>`Array` 构造函数的 length 属性，其值为1。</dd>

<dt>[`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype "所有的数组实例都继承于 Array.prototype。")</dt>

<dd>允许为所有数组对象附加属性。</dd>

</dl>

## 方法

<small>_For methods available on `Array` instances, see [Methods of Array instances](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)._</small>

<dl>

<dt>[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>从类数组或者迭代对象（iterable object）中创建一个新的数组实例。</dd>

<dt>[`Array.isArray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "Array.isArray() 该方法适用于确定传递的值是否为Array。")</dt>

<dd>假如一个变量是数组则返回`true`，否则返回`false`。</dd>

<dt>[`Array.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe "Array.observe() 方法用于异步监视数组发生的变化，类似于针对对象的 Object.observe() 。当数组的值发生变化时，它按发生顺序提供了一个变化流。与 Object.observe() 类似，它由如下可接受的变化类型列表["add"、"update"、"delete"、"splice"]触发。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>异步监视数组的修改情况，与对象的[`Object.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "Object.observe() 方法用于异步地监视一个对象的修改。当对象属性被修改时，方法的回调函数会提供一个有序的修改流。然而，这个接口已经被废弃并从各浏览器中移除。你可以使用更通用的 Proxy 对象替代。")方法类似。该方法会根据修改事件发生顺序提供一个修改流。</dd>

<dt>[`Array.of()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>创建一个有可变数量的参数的新的数组实例，无论参数有多少数量，而且可以是任意类型。</dd>

</dl>

## <font face="Consolas, Liberation Mono, Courier, monospace">数组实例</font>

所有数组实例继承自 [`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype "所有的数组实例都继承于 Array.prototype。")。Array 构造函数的原型对象是可修改的，其会影响所有的数组实例。

### 属性

<div>

<dl>

<dt>`Array.prototype.constructor`</dt>

<dd>所有的数组实例都继承了这个属性，它的值就是 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")，表明了所有的数组都是由 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 构造出来的。</dd>

<dt>[`Array.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length "length 属性表示一个无符号 32-bit 整数，返回一个数组中的元素个数。")</dt>

<dd>上面说了，因为 `Array.prototype` 也是个数组，所有它也有 `length` 属性，这个值为 `0`，因为它是个空数组。</dd>

</dl>

</div>

### 方法

#### Mutator 方法

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

#### Accessor 方法

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

#### Iteration 方法

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

## 数组通用方法

<div class="warning">

**generics方法是非标准的，已弃用的，未来将会被移除的数组方法。** 需注意的是此方法同时有跨浏览器问题. 但是 [Github上有可用的shim](https://github.com/plusdude/array-generics)。

</div>

有时你想对字符串或其他类似数组的对象使用数组的方法（如函数[arguments](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类似数组的对象, 对应于传递给函数的参数。")）。通过这样做，你可以把一个字符串作为（或以其他方式把非数组作为数组）数组里的字符来使用。例如，为了检查变量`str`每一个字符是否是字母，你会这样写：

<pre class="brush: js">function isLetter(character) {
  return character >= 'a' && character <= 'z';
}

if (Array.prototype.every.call(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}</pre>

这种方法是相当费时的，在JavaScript1.6中其引入了一个通用的简写：

<pre class="brush: js">if (Array.every(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}</pre>

[Generics](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods "String 全局对象是用来构造字符串对象或字符序列的构造函数。")在[`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "String 全局对象是用来构造字符串对象或字符序列的构造函数。")也可用。

这并不是 ECMAScript 标准的一部分（虽然 ES6 标准中的[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。") 可以用来实现这个）。 下面是一个shim，其可以在所有的浏览器中运行：

<pre class="brush: js">// Assumes Array extras already present (one may use polyfills for these as well)
(function() {
  'use strict';

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
    // Object.getOwnPropertyNames(Array).filter(function(methodName) {
    //   return typeof Array[methodName] === 'function'
    // });
    methods = [
      'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
      'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
      'forEach', 'map', 'reduce', 'reduceRight', 'filter',
      'some', 'every', 'find', 'findIndex', 'entries', 'keys',
      'values', 'copyWithin', 'includes'
    ],
    methodCount = methods.length,
    assignArrayGeneric = function(methodName) {
      if (!Array[methodName]) {
        var method = Array.prototype[methodName];
        if (typeof method === 'function') {
          Array[methodName] = function() {
            return method.call.apply(method, arguments);
          };
        }
      }
    };

  for (i = 0; i < methodCount; i++) {
    assignArrayGeneric(methods[i]);
  }
}());
</pre>

## 示例

### 创建一个数组

在下面这个例子里，首先创建了一个长度为0的空数组 `msgArray`，接着给 `msgArray[0]`赋值，然后给 `msgArray[99] `赋值，接着数组长度就变成了100。

<pre class="brush: js">var msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('数组长度为100。');
}</pre>

### 创建一个二维数组

这个例子创建了一个二维数组`myVar`，然后赋值。

<pre class="brush: js">var board = [ 
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
</pre>

下面是输出：

<pre class="brush: js">R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , ,p, , , 
 , , , , , , , 
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
</pre>

## 规范

<table class=" standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>新增方法: [`Array.isArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "Array.isArray() 该方法适用于确定传递的值是否为Array。"), [`indexOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf "indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。"), [`lastIndexOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。"), [`every`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。"), [`some`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。"), [`forEach`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。"), [`map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。"), [`filter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。"), [`reduce`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值。"), [`reduceRight`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）")</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>

新增方法：[`Array.from`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。"), [`Array.of`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of "Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。"), [`find`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。"), [`findIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。"), [`fill`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill "The fill() 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引"), [`copyWithin`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin "copyWithin() 方法会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。")

</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array</small>](https://tc39.github.io/ecma262/#sec-array-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>

新增方法：[`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。")

</td>

</tr>

</tbody>

</table>

## 浏览器支持

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

*   [JavaScript Guide: “Indexing object properties”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Indexing_object_properties)
*   [JavaScript Guide: “Predefined Core Objects: `Array` Object”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_Object)
*   [Array comprehensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)
*   [Polyfill for JavaScript 1.8.5 Array Generics and ECMAScript 5 Array Extras](https://github.com/plusdude/array-generics)
*   [Typed Arrays](https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays)