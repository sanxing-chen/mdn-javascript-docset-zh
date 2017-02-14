`Map`对象就是简单的键/值映射。其中键和值可以是任意值(对象或者[原始值](/en-US/docs/Glossary/Primitive "原始值: Editorial review completed."))。

## 语法

<pre class="syntaxbox">new Map([iterable])</pre>

### 参数

<dl>

<dt>`iterable`</dt>

<dd>Iterable 可以是一个数组或者其他 iterable 对象，其元素或为键值对，或为两个元素的数组。 每个键值对都会添加到新的 Map。`null` 会被当做 `undefined。`</dd>

</dl>

## 描述

Map 对象会按元素插入的顺序遍历— [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 循环每次遍历都会返回一个 `[key, value]` 数组。

### 键的比较(Key equality)

键的比较是基于 "same-value" 算法：`NaN 是与` `NaN 相同的`（虽然 `NaN !== NaN），剩下`所有其它的值是根据 === 运算符的结果判断是否相等。在 ECMAScript 6 草稿的早期版本中视 `-0 <font face="Open Sans, Arial, sans-serif">和 </font>``+0` 为不相同的 (虽然 `-0 === +0`)，在近期版本里这个问题已经被更正，且在 Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) ([bug 952870](https://bugzilla.mozilla.org/show_bug.cgi?id=952870 "FIXED: Treat -0 and 0 as the same key in Maps and Sets")) 和[近期的 nightly Chrome](https://code.google.com/p/v8/issues/detail?id=3069) 版本这个已经更改了。

### Objects 和 maps 的比较

`[Object](../../../../JavaScript/Reference/Global_Objects/Object "en/JavaScript/Reference/Global_Objects/Object") `和 `Map类似`的一点是,它们都允许你按键存取一个值,都可以删除键,还可以检测一个键是否绑定了值.因此,一直以来,我们都把对象当成`Map`来使用,不过,现在有了`Map,``下面的区别解释了为什么`使用`Map更好`点.

*   一个`对象通常都有自己的原型`,所以一个对象总有一个"prototype"键。不过，从 ES5 开始可以使用`map = Object.create(null)`来创建一个没有原型的对象。
*   一个对象的键只能是[`字符串`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")或者 [`Symbols`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。")，但一个 `Map 的键可以是任意值。`
*   你可以通过size属性很容易地得到一个`Map的键值对个数，`而对象的键值对个数只能手动确认。

但是这并不意味着你可以随意使用 `Map，对象仍旧是最常用的<font face="Open Sans, Arial, sans-serif">。</font>``Map` 实例只适合用于集合(collections)，你应当考虑修改你原来的代码——先前使用对象来对付集合的地方。对象应该用其字段和方法来作为记录的。  
如果你不确定要使用哪个，请思考下面的问题：

*   在运行之前 key 是否是未知的，是否需要动态地查询 key 呢？
*   是否所有的值都是统一类型，这些值可以互换么？
*   是否需要不是字符串类型的 key ？
*   键值对经常增加或者删除么？
*   是否有任意个且非常容易改变的键值对?
*   这个集合可以遍历么(Is the collection iterated)?

假如以上全是“是”的话，那么你需要用 `Map 来保存这个集。` 相反，你有固定数目的键值对，独立操作它们，区分它们的用法，那么你需要的是对象。

## 属性

<dl>

<dt>`Map.length`</dt>

<dd>属性 length 的值为 0 。</dd>

<dt>[`get Map[@@species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>本构造函数用于创建派生对象。</dd>

<dt>[`Map.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype "Map.prototype 属性表示 Map构造函数的原型对象。")</dt>

<dd>表示 `Map` 构造器的原型。 允许添加属性从而应用于所有的 `Map` 对象。</dd>

</dl>

## `Map` 实例

`<font face="Open Sans, Arial, sans-serif">所有的 </font>Map` 对象实例都会继承 [`Map.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype "Map.prototype 属性表示 Map构造函数的原型对象。")。

### 属性

<dl>

<dt>`Map.prototype.constructor`</dt>

<dd>返回一个函数，它创建了实例的原型。默认是[`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!")函数。</dd>

<dt>[`Map.prototype.size`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size "size 可访问属性返回 Map 对象的元素数量.")</dt>

<dd>返回Map对象的键/值对的数量。</dd>

</dl>

### 方法

<dl>

<dt>[`Map.prototype.clear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/clear "clear()方法会移除Map对象中的所有元素。")</dt>

<dd>移除Map对象的所有键/值对 。</dd>

<dt>[`Map.prototype.delete(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/delete " delete() 方法移除 Map 对象中指定的元素。")</dt>

<dd>移除任何与键相关联的值，并且返回该值，该值在之前会被Map.prototype.has(key)返回为true。之后再调用Map.prototype.has(key)会返回false。</dd>

<dt>[`Map.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/entries "entries() 方法返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。")</dt>

<dd>返回一个新的 `Iterator` 对象，它按插入顺序包含了Map对象中每个元素的 **`[key, value]`** `**数组**`。</dd>

<dt>[`Map.prototype.forEach(callbackFn[, thisArg])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach "forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。")</dt>

<dd>按插入顺序，为 `Map`对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，它将在每次回调中作为this值。</dd>

<dt>[`Map.prototype.get(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/get "get() 方法用来获取一个 Map 对象中指定的元素。")</dt>

<dd>返回键对应的值，如果不存在，则返回undefined。</dd>

<dt>[`Map.prototype.has(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/has "方法has() 返回一个bool值，用来表明map 中是否存在指定元素.")</dt>

<dd>返回一个布尔值，表示Map实例是否包含键对应的值。</dd>

<dt>[`Map.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/keys "keys() 返回一个新的 Iterator 对象。它包含按照顺序插入Map对象中每个元素的key值。")</dt>

<dd>返回一个新的 `Iterator`对象， 它按插入顺序包含了Map对象中每个元素的**键** 。</dd>

<dt>[`Map.prototype.set(key, value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>设置Map对象中键的值。返回该Map对象。</dd>

<dt>[`Map.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/values "一个新的 Map iterator 对象.")</dt>

<dd>返回一个新的`Iterator`对象，它按插入顺序包含了Map对象中每个元素的**值** 。</dd>

<dt>[`Map.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个新的`Iterator`对象，它按插入顺序包含了Map对象中每个元素的 **`[key, value]`** `**数组**`。</dd>

</dl>

## 示例

### 使用映射对象

<pre class="brush: js">var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"

myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
myMap.get({});           // undefined, 因为keyObj !== {}
myMap.get(function() {}) // undefined, 因为keyFunc !== function () {}</pre>

### 将NaN作为映射的键

`NaN` 也可以作为Map对象的键. 虽然 `NaN` 和任何值甚至和自己都不相等(`NaN !== NaN` 返回true), 但下面的例子表明, `两个NaN`作为Map的键来说是没有<span><span>区别的</span></span>:

<pre class="brush: js">var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
</pre>

### `使用for..of方法迭代映射`

映射也可以使用`for..of循环来实现迭代：`

<pre class="brush: js">var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 将会显示两个log。一个是"0 = zero"另一个是"1 = one"

for (var key of myMap.keys()) {
  console.log(key);
}
// 将会显示两个log。 一个是 "0" 另一个是 "1"

for (var value of myMap.values()) {
  console.log(value);
}
// 将会显示两个log。 一个是 "zero" 另一个是 "one"

for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 将会显示两个log。 一个是 "0 = zero" 另一个是 "1 = one"</pre>

### `使用forEach()方法迭代映射`

映射也可以通过`forEach()方法迭代：`

<pre class="brush: js">myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
}, myMap)
// 将会显示两个logs。 一个是 "0 = zero" 另一个是 "1 = one"
</pre>

### 映射与数组对象的关系

    var kvArray = [["key1", "value1"], ["key2", "value2"]];

    // 使用映射对象常规的构造函数将一个二维键值对数组对象转换成一个映射关系
    var myMap = new Map(kvArray);

    myMap.get("key1"); // 返回值为 "value1"

    // 使用展开运算符将一个映射关系转换成一个二维键值对数组对象
    console.log(uneval([...myMap])); // 将会向您显示和kvArray相同的数组

    // 或者使用展开运算符作用在键或者值的迭代器上，进而得到只含有键或者值得数组
    console.log(uneval([...myMap.keys()])); // 输出 ["key1", "key2"]

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Map</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Map</small>](https://tc39.github.io/ecma262/#sec-map-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容情况

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>

38 [1]

</td>

<td>12</td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>Constructor argument: `new Map(iterable)`</td>

<td>38</td>

<td>12</td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>9</td>

</tr>

<tr>

<td>iterable</td>

<td>38</td>

<td>12</td>

<td>[17](/en-US/Firefox/Releases/17 "Released on 2012-11-20.") (17)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Map.clear()`</td>

<td>31  
38</td>

<td>12</td>

<td>[19](/en-US/Firefox/Releases/19 "Released on 2013-02-19.") (19)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Map.keys(), Map.values(), Map.entries()`</td>

<td>37  
38</td>

<td>12</td>

<td>[20](/en-US/Firefox/Releases/20 "Released on 2013-04-02.") (20)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Map.forEach()`</td>

<td>36  
38</td>

<td>12</td>

<td>[25](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>Key equality for -0 and 0</td>

<td>34  
38</td>

<td>12</td>

<td>[29](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>9</td>

</tr>

<tr>

<td>Constructor argument: `new Map(null)`</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>9</td>

</tr>

<tr>

<td>Monkey-patched `set()` in Constructor</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>9</td>

</tr>

<tr>

<td>`Map[@@species]`</td>

<td>51</td>

<td>13</td>

<td>[41](/en-US/Firefox/Releases/41 "Released on 2015-09-22.") (41)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td>10</td>

</tr>

<tr>

<td>`Map()` without `new` throws</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[42](/en-US/Firefox/Releases/42 "Released on 2015-11-03.") (42)</td>

<td>11</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>9</td>

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

<td>38 [1]</td>

<td>13.0 (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>Constructor argument: `new Map(iterable)`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td>13.0 (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>9</td>

</tr>

<tr>

<td>iterable</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>17.0 (17)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>`Map.clear()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>31  
38</td>

<td>19.0 (19)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>`Map.keys(), Map.values(), Map.entries()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>37  
38</td>

<td>20.0 (20)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>`Map.forEach()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>36  
38</td>

<td>25.0 (25)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>Key equality for -0 and 0</td>

<td><span style="color: #f00;">未实现</span></td>

<td>34  
38</td>

<td>29.0 (29)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Constructor argument: `new Map(null)`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>37.0 (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>9</td>

</tr>

<tr>

<td>Monkey-patched `set()` in Constructor</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>37.0 (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>9</td>

</tr>

<tr>

<td>`Map[@@species]`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>41.0 (41)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>10</td>

</tr>

<tr>

<td>`Map()` without `new` throws</td>

<td>5.1</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0 (42)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>9</td>

</tr>

</tbody>

</table>

</div>

[1] Starting with Chrome 31，the feature was available behind a preference. In `chrome://flags`, activate the entry “Enable Experimental JavaScript”.

## 相关链接

*   [Map and Set bug at Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=697479)
*   [ECMAScript Harmony proposal](http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets)
*   [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。")
*   [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!")
*   [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.")