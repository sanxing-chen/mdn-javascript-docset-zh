`**forEach()**` 方法对数组的每个元素执行一次提供的函数。

<pre class="brush:js">let a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
</pre>

## 语法

    array.forEach(callback(currentValue, index, array){
        //do something
    }, this)

    array.forEach(callback[, thisArg])

### 参数

<dl>

<dt>`callback`</dt>

<dd>为数组中每个元素执行的函数，该函数接收三个参数：</dd>

<dd>

<dl>

<dt>currentValue(当前值)</dt>

<dd>数组中正在处理的当前元素。</dd>

<dt>index(索引)</dt>

<dd>数组中正在处理的当前元素的索引。</dd>

<dt>array</dt>

<dd>forEach()方法正在操作的数组。</dd>

</dl>

<span id="cke_bm_93C" style="display: none;"> </span></dd>

<dt>`thisArg`<span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>可选参数。当执行回调 函数时`用作``this的`值(参考对象)。</dd>

<dt>

### 返回值

[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".").

</dt>

</dl>

## 描述

`forEach` 方法按升序为数组中含有效值的每一项执行一次`callback` 函数，那些已删除（使用`delete`方法等情况）或者未初始化的项将被跳过（但不包括那些值为 `undefined 的项）（例如在稀疏数组上）。`

`callback` 函数会被依次传入三个参数：

*   **数组当前项的值**
*   **数组当前项的索引**
*   **数组对象本身**

如果`给forEach传递了thisArg`参数，当调用时，它将被传给`callback` 函数，作为它的this值。否则，将会传入 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 作为它的this值。callback函数最终可观察到this值，这取决于 [函数观察到`this`的常用规则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

`forEach` 遍历的范围在第一次调用 `callback` 前就会确定。调用`forEach` 后添加到数组中的项不会被 `callback` 访问到。如果已经存在的值被改变，则传递给 `callback` 的值是 `forEach` 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了(例如使用 [`shift()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。")) ，之后的元素将被跳过 - 参见下面的示例。

`forEach()` 为每个数组元素执行callback函数；不像[`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。") 或者[`reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法对累加器和数组的每个值应用一个函数 (从左到右)，以将其减少为单个值。") ，它总是返回 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")值，并且不可链式调用。典型用例是在一个链的最后执行副作用。

<div>

<div class="note">**注意：** 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 [`Array.every`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。") 或 [`Array.some`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")。如果可用，新方法 [`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。") 或者[`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。") 也可被用于真值测试的提早终止。</div>

</div>

## 示例

### 打印出数组的内容

下面的代码会为每一个数组元素输出一行记录：

<pre class="brush:js">function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[3] = 9

[2, 5,"" ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = 
// a[3] = 9

[2, 5, undefined ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9

let xxx;
// undefined

[2, 5, xxx ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9

</pre>

### `使用thisArg`

举个勉强的例子，从每个数组中的元素值中更新一个对象的属性：

<pre class="brush:js">function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    //console.log(this);
};

var obj = new Counter();
obj.add([1, 3, 5, 7]);

obj.count; 
// 4 === (1+1+1+1)
obj.sum;
// 16 === (1+3+5+7)

</pre>

`因为``thisArg`参数 (`this`) 传给了`forEach()，每次调用时，它都被传给``callback函数，作为它的t``his值。`

<div>

<div class="note">**注意：**如果使用[箭头函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)传入函数参数，`thisArg` 参数会被忽略，因为箭头函数在词法上绑定了[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this "与其他语言相比，函数的 this 关键字在JavaScript中的行为略有不同。它在严格模式和非严格模式之间也有一些区别。")值。</div>

</div>

### 对象复制函数

下面的代码会创建一个给定对象的副本。 创建对象的副本有不同的方法，以下是只是一种方法，并解释了Array.prototype.forEach() 是如何使用ECMAScript 5 `Object.*` 元属性（meta property ）函数工作的。

<pre class="brush: js">function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // obj2 looks like obj1 now
</pre>

### 如果数组在迭代时被修改了，则其他元素会被跳过。

下面的例子输出"one", "two", "four"。当到达包含值"two"的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。因为元素 "four"现在在数组更前的位置，"three"会被跳过。 `forEach()`不会在迭代之前创建数组的副本。

    var words = ["one", "two", "three", "four"];
    words.forEach(function(word) {
      console.log(word);
      if (word === "two") {
        words.shift();
      }
    });
    // one
    // two
    // four

## 兼容旧环境（Polyfill）

`forEach` 是在第五版本里被添加到 ECMA-262 标准的；这样它可能在标准的其他实现中不存在，你可以在你调用 `forEach` 之前 插入下面的代码，在本地不支持的情况下使用 `forEach()`。<span style="line-height: 1.5;">该算法是 ECMA-262 第5版中指定的算法。算法假定</span>[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")<span style="line-height: 1.5;">和</span>[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")拥有它们的初始值。`callback.call`<span style="font-family: courier new,andale mono,monospace; font-style: inherit; font-weight: inherit; line-height: 1.5;"> 等价于</span>[`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")<span style="line-height: 1.5;">。</span>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1\. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2\. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3\. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4\. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5\. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6\. Let k be 0
    k = 0;

    // 7\. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8\. return undefined
  };
}
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.forEach</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。在JavaScript 1.6中实现。</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.forEach</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<td>基本支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[1.5](/en-US/Firefox/Releases/1.5 "Released on 2005-11-25.") (1.8)</td>

<td>9</td>

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

<td>基本支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>1.0 (1.8)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。")
*   [`Array.prototype.findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。")
*   [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。")
*   [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。")
*   [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。")
*   [`Map.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach "forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。")
*   [`Set.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach "forEach 方法根据集合中元素的顺序，对每个元素都执行提供的 callback 函数一次。")
*   [http://www.webhek.com/javascript-loop-foreach-for-in-for-of](http://www.webhek.com/javascript-loop-foreach-for-in-for-of)