<div>

<div style="background: #9CF49C;" class="overheadIndicator">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

几个新增加的到ECMAScript 2015 (ES6)，它不并是新的内置插件或语法，而是一种协议<span style="line-height: 1.5;">。这种协议能被任何遵循某些约定的对象实现。</span>

有两个协议：可迭代协议和迭代器协议。

## 可迭代协议

**可迭代**协议允许 JavaScript 对象去定义或定制它们的迭代行为, 例如（定义）在一个 [`for..of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 结构中什么值可以被循环（得到）。一些内置类型都是内置的可遍历对象并且有默认的迭代行为, 比如 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") or [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!"), 另一些类型则不是 (比如[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")) 。

为了变成可遍历对象， 一个对象必须实现 **@@iterator** 方法, 意思是这个对象（或者它原型链[prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)上的某个对象）必须有一个名字是 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "符号是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。符号对象是一个符号 原始数据类型的隐式对象包装器。")`.iterator` 的属性:

<table class="standard-table">

<thead>

<tr>

<th scope="col">属性</th>

<th scope="col">值</th>

</tr>

</thead>

<tbody>

<tr>

<td>`[Symbol.iterator]`</td>

<td>返回一个对象的无参函数，被返回对象符合迭代器协议。</td>

</tr>

</tbody>

</table>

<font><font>当一个对象需要被遍历的时候（比如开始用于一个</font></font>`<font><font>for..of循环中</font></font>`<font><font>），它的</font></font>**@@iterator**<font><font>方法被调用并且无参数，</font></font>然后返回一个用于在遍历中获得值的迭代器<font><font>。</font></font>

## **<span style="line-height: 1.5;">迭代器协议</span>**

<font><font>该</font></font>**<span style="line-height: 1.5;">迭代器</span>**<font><font>协议定义了一种标准的方式来产生</font></font>一个<font><font>有限或无限序列</font></font><font><font>的值。</font></font>

当一个对象被认为是一个迭代器时，它<font><font>实现了一个</font></font> `**<font>next() </font>**`<font><font>的方法并且拥有以下含义：</font></font>

<table class="standard-table">

<tbody>

<tr>

<th scope="col">属性</th>

<th scope="col">值</th>

</tr>

<tr>

<td>`next`</td>

<td>

返回一个对象的无参函数，被返回对象拥有两个属性：

*   `done` (boolean)
    *   如果迭代器已经经过了被迭代序列时为 true。这时 value 可能描述了该迭代器的返回值。返回值在[这里](http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads)有更多解释。
    *   如果迭代器可以产生序列中的下一个值，则为 false。这等效于连同 done 属性也不指定。
*   `value` - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

</td>

</tr>

</tbody>

</table>

一些迭代器是转换自可迭代对象:

<pre class="brush: js">var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();           // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator]();    // true
</pre>

## 使用迭代协议的例子

[`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!") 是一个内置的可迭代对象:

<pre class="brush: js">var someString = "hi";
typeof someString[Symbol.iterator];          // "function"
</pre>

`String` 的默认迭代器会一个接一个返回该字符串的字符：

<pre class="brush: js">var iterator = someString[Symbol.iterator]();
iterator + "";                               // "[object String Iterator]"

iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }</pre>

一些内置的语法结构，比如 [spread operator](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)，内部也使用了同样的迭代协议：

<pre class="brush: js">[...someString]                              // ["h", "i"]</pre>

我们可以通过自己的 `@@iterator 方法重新定义迭代行为：`

<pre class="brush: js">var someString = new String("hi");          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
</pre>

注意重新定义 `@@iterator` 方法是如何影响内置语法结构的行为的，它使用数据对象相同的迭代协议:

<pre class="brush: js">[...someString];                              // ["bye"]
someString + "";                              // "hi"
</pre>

## 可迭代对象示例

### 内置可迭代对象

[`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!"), [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!"), [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray "TypedArray 对象表示底层的二进制数据缓存区的类数组视图. 没有名为 TypedArray 的全局属性，也不存在直接可见的 TypedArray 构造器。相反，有若干不同的全局属性的值是类型数组的特殊构造器（typed array constructors for specific element types），用于特定的元素类型，这些在下文有列出。接下来，会介绍能和任何包含任意类型元素的类型数组一起使用的通用属性和方法。"), [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!") and [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。") 是所有内置可迭代对象， 因为它们的原型对象都有一个 `@@``iterator` 方法.

### 自定义可迭代对象

我们可以实现一个自己的可迭代对象，就像这样:

<pre class="brush: js">var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
</pre>

### 接受可迭代对象的内置 APIs

许多 APIs 接受可迭代对象（作为参数，译注）, 例如：[`Map([iterable])`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!"), [`WeakMap([iterable])`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!"), [`Set([iterable])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。") and [`WeakSet([iterable])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用."):

<pre class="brush: js">var myObj = {};
new Map([[1,"a"],[2,"b"],[3,"c"]]).get(2);               // "b"
new WeakMap([[{},"a"],[myObj,"b"],[{},"c"]]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set("123").has("2");                                 // true
new WeakSet(function*() {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true
</pre>

另外还有 [`Promise.all(iterable)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all "Promise.all(iterable) 方法返回一个promise，该promise会等iterable参数内的所有promise都被resolve后被resolve，或以第一个promise被reject的原因而reject 。"), [`Promise.race(iterable)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race "Promise.race(iterable)方法返回一个promise，这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。") 以及 [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法可以将一个类数组对象或可遍历对象转换成真正的数组。").

### 用于可迭代对象的语法

一些语句和表达式是预料会用于可迭代对象，比如 `[for-of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)` 循环，[spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator), `[yield*](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) 和` [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

<pre class="brush: js">for(let value of ["a", "b", "c"]){
    console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a // "a"

</pre>

### Non-well-formed (非-良好-格式化的)可迭代对象

如果一个可迭代对象的 `@@iterator 方法不是返回一个迭代器对象，那么它就是一个` non-well-formed 可迭代对象 。使用它可能会发生如下的运行时异常或者 buggy 行为:

<pre class="brush: js">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
</pre>

## 迭代器示例

### 简单迭代器

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
</pre>

### 无穷迭代器

<pre class="brush: js">function idMaker(){
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

### 生成器式的迭代器

<pre class="brush: js">function* makeSimpleGenerator(array){
    var nextIndex = 0;

    while(nextIndex < array.length){
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
</pre>

## 生成器对象到底是一个迭代器还是一个可迭代对象?

[生成器对象](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) 既是迭代器也是可迭代对象:

<pre class="brush: js">var aGeneratorObject = function*(){
    yield 1;
    yield 2;
    yield 3;
}();
typeof aGeneratorObject.next;
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator];
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method return its self (an iterator), so it's an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]
</pre>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>基本支持</td>

<td>39.0</td>

<td>[27.0](/en-US/Firefox/Releases/27 "Released on 2014-02-04.") (27.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>`IteratorResult` object instead of throwing</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[29.0](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>基本支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>27.0 (27.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>39.0</td>

</tr>

<tr>

<td>`IteratorResult` object instead of throwing</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>29.0 (29.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## Firefox-specific notes

### `IteratorResult` object returned instead of throwing

Starting with Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26), the completed generator function no longer throws a [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") "generator has already finished". Instead, it returns an `IteratorResult` object like `{ value: undefined, done: true }` ([bug 958951](https://bugzilla.mozilla.org/show_bug.cgi?id=958951 "FIXED: Return IteratorResult object for completed generators instead of throwing")).

### `Iterator` property and `@@iterator` symbol

From Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) the `iterator` property was used ([bug 907077](https://bugzilla.mozilla.org/show_bug.cgi?id=907077)), and from Gecko 27 to Gecko 35 the `"@@iterator"` placeholder was used. In Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), the `@@iterator` [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) got implemented ([bug 918828](https://bugzilla.mozilla.org/show_bug.cgi?id=918828)).

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
<small lang="zh-CN">Iteration</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-iteration)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>

Initial definition.

</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Iteration</small>](https://tc39.github.io/ecma262/#sec-iteration)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> ES7(ES2016/ES2017)</td>

</tr>

</tbody>

</table>

## 参考

*   更多有关 ES6 生成器的信息，请参考 [the function*() documentation](/en-US/docs/Web/JavaScript/Reference/Statements/function*).