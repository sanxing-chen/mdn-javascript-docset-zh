集合（`Set`）对象允许你存储任意类型的唯一值（不能重复），无论它是[原始值](/en-US/docs/Glossary/Primitive "原始值: Editorial review completed.")或者是对象引用。

## 语法

<pre class="syntaxbox">new Set([iterable]);</pre>

### 参数

<dl>

<dt>iterable</dt>

<dd>一个[可迭代对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)，其中的所有元素都会被加入到 Set 中。`null`被视作 `undefined` 。</dd>

</dl>

## 简述

`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。

### 值的相等

因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。判断相等的算法与严格相等（===操作符）不同。具体来说，对于 Set ， +0 （+0 严格相等于-0）和-0是不同的值。尽管在最新的 ECMAScript 6规范中这点已被更改。从Gecko 29.0和 [recent nightly Chrome](https://code.google.com/p/v8/issues/detail?id=3069)开始，Set 视 +0 和 -0 为相同的值。另外，`NaN`和`undefined`都可以被存储在Set 中， `NaN`之间被视为相同的值（尽管 NaN !== NaN）。

## 属性

<dl>

<dt>`Set.length`</dt>

<dd>`length`属性的值为0。</dd>

<dt>[`get Set[@@species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>构造函数用来创建派生对象.</dd>

<dt>[`Set.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype "Set.prototype属性表示Set构造器的原型。")</dt>

<dd>表示Set构造器的原型，允许向所有Set对象添加新的属性。</dd>

</dl>

## `Set`实例

所有Set实例继承自 [`Set.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype "Set.prototype属性表示Set构造器的原型。")。

### 属性

<dl>

<dt>`Set.prototype.constructor`</dt>

<dd>返回实例的构造函数。默认情况下是[`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。")。</dd>

<dt>[`Set.prototype.size`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/size "Size属性将会返回Set对象中元素的个数。")</dt>

<dd>返回`Set`对象的值的个数。</dd>

</dl>

### 方法

<dl>

<dt>[`Set.prototype.add(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add "add() 方法用来向一个 Set 对象的末尾添加一个指定的值。")</dt>

<dd>在`Set对象尾部添加一个元素。返回<font face="Open Sans, Arial, sans-serif">该</font>``Set对象。`</dd>

<dt>[`Set.prototype.clear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear "clear() 方法用来清空一个 Set 对象中的所有元素。")</dt>

<dd>移除`Set`对象内的所有元素。</dd>

<dt>[`Set.prototype.delete(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete "delete() 方法可以从一个 Set 对象中删除指定的元素。")</dt>

<dd>`<font face="Open Sans, Arial, sans-serif">移除Set的中与这个值相等的元素，返回</font>Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。``Set.prototype.has(value)在此后会返回false。`</dd>

<dt>[`Set.prototype.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries "entries() 方法返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。")</dt>

<dd>`返回一个新的迭代器对象，该对象包含Set对象中的`<span style="font-family: Consolas,Monaco,'Andale Mono',monospace;">按插入顺序排列的</span>`所有元素的值的[value, value]数组。为了使这个方法`和`Map对象保持相似，` 每个值的键和值相等。</dd>

<dt>[`Set.prototype.forEach(callbackFn[, thisArg])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach "forEach 方法根据集合中元素的顺序，对每个元素都执行提供的 callback 函数一次。")</dt>

<dd>按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了`thisArg参数，回调中的this会是这个参数。`</dd>

<dt>[`Set.prototype.has(value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has "has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中")</dt>

<dd>返回一个布尔值，表示该值在`Set中存在与否。`</dd>

<dt>[`Set.prototype.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/keys "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>与**`values()`**`方法相同，返回一个新的迭代器对象，该对象包含Set对象中的`<span style="font-family: Consolas,Monaco,'Andale Mono',monospace;">按插入顺序排列的</span>`所有元素的值。`</dd>

<dt>[`Set.prototype.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values "values() 方法返回一个 Iterator  对象，这个对象以插入Set 对象的顺序包含了原 Set 对象里的每个元素。")</dt>

<dd>`返回一个新的迭代器对象，该对象包含Set对象中的`<span style="font-family: Consolas,Monaco,'Andale Mono',monospace;">按插入顺序排列的</span>`所有元素的值。`</dd>

<dt>[`Set.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator "The initial value of the @@iterator property is the same function object as the initial value of the values property.")</dt>

<dd>`返回一个新的迭代器对象，该对象包含Set对象中的`<span style="font-family: Consolas,Monaco,'Andale Mono',monospace;">按插入顺序排列的</span>`所有元素的值。`</dd>

</dl>

## 示例

### 使用`Set`对象

<pre class="brush: js">var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

mySet.has(1); // true
mySet.has(3); // false, 3还没有被添加到set中
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true

mySet.size; // 3

mySet.delete(5); // 从set中移除5
mySet.has(5);    // false, 5已经被移除

mySet.size; // 3, 我们刚刚移除了一个值
</pre>

### 迭代Set

<pre class="brush: js">// 迭代整个set
// 按顺序输出：1, "some text" 
for (let item of mySet) console.log(item);

// 按顺序输出：1, "some text" 
for (let item of mySet.keys()) console.log(item);

// 按顺序输出：1, "some text" 
for (let item of mySet.values()) console.log(item);

// 按顺序输出：1, "some text" 
//(键与值相等)
for (let [key, value] of mySet.entries()) console.log(key);

// 转换Set为Array (with [Array comprehensions](/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions))
var myArr = [v for (v of mySet)]; // [1, "some text"]
// 替代方案(with [Array.from](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from))
var myArr = Array.from(mySet); // [1, "some text"]

// 如果在HTML文档中工作，也可以：
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// Set和Array互换
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// 截取  
var intersection = new Set([x for (x of set1) if (set2.has(x))]);

// 用forEach迭代
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4</pre>

### 与 `Array 的联系`

<pre class="brush: js">var myArray = ["value1", "value2", "value3"];

// 用Set构造器将Array转换为Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySet]); // 与myArray完全一致</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Set</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Set</small>](https://tc39.github.io/ecma262/#sec-set-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

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

<td>

31 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38

</td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>Constructor argument: `new Set(iterable)`</td>

<td>38</td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>iterable</td>

<td>38</td>

<td>[17](/en-US/Firefox/Releases/17 "Released on 2012-11-20.") (17)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Set.clear()`</td>

<td>31 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>[19](/en-US/Firefox/Releases/19 "Released on 2013-02-19.") (19)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Set.keys(), Set.values(), Set.entries()`</td>

<td>37 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>[24](/en-US/Firefox/Releases/24 "Released on 2013-09-17.") (24)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>`Set.forEach()`</td>

<td>36 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>[25](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td>11</td>

<td>25</td>

<td>7.1</td>

</tr>

<tr>

<td>Value equality for -0 and 0</td>

<td>34 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>[29](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Constructor argument: `new Set(null)`</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Monkey-patched `add()` in Constructor</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>31 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>13.0 (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>iOS 8</td>

</tr>

<tr>

<td>Constructor argument: `new Set(iterable)`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td>13.0 (13)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>iterable</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>17.0 (17)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>iOS 8</td>

</tr>

<tr>

<td>`Set.clear()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>31 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>19.0 (19)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>iOS 8</td>

</tr>

<tr>

<td>`Set.keys(), Set.values(), Set.entries()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>37 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>24.0 (24)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>iOS 8</td>

</tr>

<tr>

<td>`Set.forEach()`</td>

<td><span style="color: #f00;">未实现</span></td>

<td>36 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>25.0 (25)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>iOS 8</td>

</tr>

<tr>

<td>Value equality for -0 and 0</td>

<td><span style="color: #f00;">未实现</span></td>

<td>34 [[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set$edit#chrome-specific-note-1)  
38</td>

<td>29.0 (29)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Constructor argument: `new Set(null)`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>37.0 (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Monkey-patched `add()` in Constructor</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>37.0 (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<a name="chrome-specific-note-1">[1]</a> Chrome 中该特性需要在 `chrome://flags` 中打开开关 “Enable Experimental JavaScript”.

## 参见

*   [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!")
*   [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!")
*   [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.")

<header> </header>