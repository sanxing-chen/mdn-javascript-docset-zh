`slice() `方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。

<pre class="brush: js">var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // [ 'zero', 'one', 'two', 'three' ]
console.log(sliced); // [ 'one', 'two' ]</pre>

## 语法

<pre class="brush: js"><var>arr</var>.slice()
<var>arr</var>.slice(<var>begin</var>)
<var>arr</var>.slice(<var>begin</var>, <var>end</var>)</pre>

## 参数

<dl>

<dt>`begin` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>从该索引处开始提取原数组中的元素（从0开始）。</dd>

<dd>如果该参数为负数，`则表示从原数组中的倒数第几个元素开始提取，``slice(-2)`表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。</dd>

<dd>如果省略 `begin`，则 `slice` 从索引 0 开始。</dd>

</dl>

<dl>

<dt>`end`<span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>在该索引处结束提取原数组元素（从0开始）。`slice`会提取原数组中索引从 `begin` 到 `end `的所有元素（包含begin，但不包含end）。</dd>

<dd>`slice(1,4)` 提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。</dd>

<dd>如果该参数为负数， `则它表示在原数组中的倒数第几个元素结束抽取`。 `slice(-2,-1)`表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。</dd>

<dd>如果 `end` 被省略，`则slice` 会一直提取到原数组末尾。</dd>

<dd>如果 `end 大于数组长度，slice 也会一直提取到原数组末尾。`</dd>

</dl>

### 返回值

一个含有提取元素的新数组

## 描述

`slice` 不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

*   如果该元素是个对象引用 （不是实际的对象），`slice` 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。

*   对于字符串、数字及布尔值来说（不是 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "String 全局对象是用来构造字符串对象或字符序列的构造函数。")、[`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。") 或者 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!") 对象），`slice` 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

如果向两个数组任一中添加了新元素，则另一个不会受到影响。

## 示例

### 返回现有数组的一部分

<pre class="brush: js">var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
</pre>

### 使用 `slice`

在下例中, `slice从``myCar中创建了一个新数组``newCar`.两个数组都包含了一个`myHonda`对象的引用. 当`myHonda`的color属性改变为purple, 则两个数组中的对应元素都会随之改变.

<pre class="brush: js">// 使用slice方法从myCar中创建一个newCar.
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

// 输出myCar, newCar,以及各自的myHonda对象引用的color属性.
print('myCar = ' + myCar.toSource());
print('newCar = ' + newCar.toSource());
print('myCar[0].color = ' + myCar[0].color);
print('newCar[0].color = ' + newCar[0].color);

// 改变myHonda对象的color属性.
myHonda.color = 'purple';
print('The new color of my Honda is ' + myHonda.color);

//输出myCar, newCar中各自的myHonda对象引用的color属性.
print('myCar[0].color = ' + myCar[0].color);
print('newCar[0].color = ' + newCar[0].color);
</pre>

上述代码输出:

<pre class="brush: js">myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2, 'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red 
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
</pre>

## 类似数组（Array-like）对象

`slice` 方法可以用来将一个类数组（Array-like）对象/集合转换成一个数组。你只需将该方法绑定到这个对象上。下述代码中 list 函数中的 `arguments` 就是一个类数组对象。

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
</pre>

除了使用 `Array.prototype.slice.call(``arguments``)`，你也可以简单的使用 `[].slice.call(arguments)` 来代替。另外，你可以使用 `bind` 来简化该过程。

<pre class="brush: js">var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
</pre>

## 精简跨浏览器行为

根据规范，使用 <font face="Courier, Andale Mono, monospace">Array.prototype.slice</font> 转换宿主对象（如 DOM 对象）时不必遵循 Mozilla 的默认行为，即可以转化任何符合条件的伪数组宿主对象为数组，IE < 9 没有遵循，而 IE9 + 遵循这个行为，但是稍加改造可以使其在跨浏览器使用时更可靠。只要其他现代浏览器继续支持该行为，目前 IE  9+、FireFox、Chrome、Safari 以及 Opera 都支持，开发者在使用下面代码时遍历 DOM 时就不会被该方法的字面意义误导，即 IE < 9 不能转化 DOM Collections。开发者可以安全地根据语义知道该方法的实际上的标准行为。（下面的代码还修正了 IE 中 `slice()` 方法第二个参数不允许为显式的 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")/[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 值的问题，其他现代浏览器，包括IE9+都允许）。

<pre class="brush: js">/**
* Shim for "fixing" IE's lack of support (IE < 9) for applying slice
* on host objects like NamedNodeMap, NodeList, and HTMLCollection
* (technically, since host objects have been implementation-dependent,
* at least before ES6, IE hasn't needed to work this way).
* Also works on strings, fixes IE < 9 to allow an explicit undefined
* for the 2nd argument (as in Firefox), and prevents errors when
* called on other DOM objects.
*/
(function () {
    'use strict';
    var _slice = Array.prototype.slice;

    try {
        // Can't be used with DOM elements in IE < 9
        _slice.call(document.documentElement);
    } catch (e) { // Fails in IE < 9
        // This will work for genuine arrays, array-like objects,
        // NamedNodeMap (attributes, entities, notations),
        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
        Array.prototype.slice = function (begin, end) {
            // IE < 9 gets unhappy with an undefined end argument
            end = (typeof end !== 'undefined') ? end : this.length;

            // For native Array objects, we use the native slice function
            if (Object.prototype.toString.call(this) === '[object Array]'){
                return _slice.call(this, begin, end);
            }

            // For array like object we handle it ourselves.
            var i, cloned = [],
                size, len = this.length;

            // Handle negative value for "begin"
            var start = begin || 0;
            start = (start >= 0) ? start: len + start;

            // Handle negative value for "end"
            var upTo = (end) ? end : len;
            if (end < 0) {
                upTo = len + end;
            }

            // Actual expected size of the slice
            size = upTo - start;

            if (size > 0) {
                cloned = new Array(size);
                if (this.charAt) {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this.charAt(start + i);
                    }
                } else {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this[start + i];
                    }
                }
            }

            return cloned;
        };
    }
}());</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.slice</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.10)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.slice</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.slice)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.slice</small>](https://tc39.github.io/ecma262/#sec-array.prototype.slice)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>1.0</td>

<td>1.0 (1.7 or earlier)</td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

*   [`Array.prototype.splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。")
*   [`Function.prototype.call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")
*   [`Function.prototype.bind`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind "bind()方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的 this, 之后的一序列参数将会在传递的实参前传入作为它的参数。")