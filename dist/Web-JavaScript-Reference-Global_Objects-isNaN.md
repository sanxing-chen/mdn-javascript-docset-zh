`**isNaN()**` 函数用来判断一个值是否为 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")。注：`isNaN`函数包含一些非常有意思的强制转换[规则](#Description)；你也可以通过 ECMAScript 6 中定义的 [`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。") 或者 `[typeof](/en-US/docs/Web/JavaScript/Reference/Operators/typeof)` 来判断一个值是否为非数值。

## 语法

    isNaN(testValue)

### 参数

<dl>

<dt>`testValue`</dt>

<dd>要被检测的值。</dd>

</dl>

## 描述

### `isNaN` 函数的必要性

与 JavaScript 中其他的值不同，[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")不能通过相等操作符（== 和 ===）来判断 ，因为 `NaN == NaN` 和 `NaN === NaN` 都会返回 `false`。 因此，`isNaN` 就很有必要了。

### `NaN值`的产生

<font face="Courier New, Andale Mono, monospace">当算术运算返回一个未定义的或无法表示的值时，NaN就产生了。但是，`NaN`并不一定用于表示某些值超出表示范围的情况。</font><font face="Consolas, Monaco, 'Andale Mono', monospace">将某些不能强制转换为数值的非数值转换为数值的时候，也会得到`NaN`</font>。

例如，0 除以0会返回`NaN` —— 但是其他数除以0则不会返回`NaN`。

### 令人费解的怪异行为

从最早版本的`isNaN函数规范开始，` 其针对非数值参数所表现的行为就一直令人费解。 如果`isNaN函数`的参数不是[Number](http://es5.github.com/#x8.5 "http://es5.github.com/#x8.5")类型, `isNaN()`会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")进行判断。因此，对于能被强制转换为有效的非`NaN`数值来说（ 值得一提的是，空字符串和布尔值会被强制转换为数值0或1），返回false值也许会让人感觉莫名其妙。比如说，空字符串就明显”不是数值“（not a number）。这种怪异行为起源于：“不是数值”（not a number）在基于IEEE-794数值的浮点计算体制中代表了一种特定的含义。<span style="font-family: consolas,monaco,andale mono,monospace;">isNaN函数其实等同于回答了这样一个问题：这个值被强制转换成数值时会不会返回</span>IEEE-754​中所谓的”不是数值“（not a number）。

下一个版本的ECMAScript (ES6)包含[`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。")函数。通过`Number.isNaN(x)来检测变量x是否是一个非数值<font face="'Open Sans', sans-serif">将会是一种可靠的做法</font>。然而，`在缺少`Number.isNaN函数的情况下`, 通过表达式`(x != x)` 来检测变量`x是否是``NaN会更加可靠。`

`可以把isNaN看做：`

<pre class="brush: js">isNaN = function(value) {
    Number.isNaN(Number(value));
}</pre>

## 示例

<pre class="brush: js">isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: 可以被转换成数值37
isNaN("37.37");   // false: 可以被转换成数值37.37
isNaN("");        // false: 空字符串被转换成0
isNaN(" ");       // false: 包含空格的字符串被转换成0

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN("blabla")   // true: "blabla"不能转换成数值

</pre>

### 有用的特殊行为

有许多方式来看待isNaN()：如果isNaN(x)返回false，那么x在任何算数表达式中都不会使表达式等于NaN；如果返回true，x会使所有算数表达式返回NaN。这就意味着，在JavaScript中，isNaN(x)==true等价于x-0=NaN(在JavaScript中 x-0 == NaN 总是返回false，所以你不用去测试它)。实际上， `isNaN(x)`, `isNaN(x - 0)`,`isNaN(Number(x))`, `Number.isNaN(x - 0)`,和`Number.isNaN(Number(x))` 的返回值都是一样的 并且在JavaScript中isNaN(x)是这些表达式中最短的表达。

You can use this, for example, to test whether an argument to a function is arithmetically processable (usable "like" a number), or if it's not and you have to provide a default value or something else. This way you can have a function that makes use of the full versatility JavaScript provides by implicitly converting values depending on context.

## 例子

<pre class="brush: js">function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
};

// The same effect with Number.isNaN():
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
};

// In the following cases for the function's argument x,
// isNaN(x) is always false, although x is indeed not a
// number, but can be used as such in arithmetical
// expressions
increment("");            // 1: "" is converted to 0
increment(new String());  // 1: String object representing an empty string is converted to 0
increment([]);            // 1: [] is converted to 0
increment(new Array());   // 1: Array object representing an empty array is converted to 0
increment("0");           // 1: "0" is converted to 0
increment("1");           // 2: "1" is converted to 1
increment("0.1");         // 1.1: "0.1" is converted to 0.1
increment("Infinity");    // Infinity: "Infinity" is converted to Infinity
increment(null);          // 1: null is converted to 0
increment(false);         // 1: false is converted to 0
increment(true);          // 2: true is converted to 1
increment(new Date());    // returns current date/time in milliseconds plus 1

// In the following cases for the function's argument x,
// isNaN(x) is always false and x is indeed a number
increment(-1);            // 0
increment(-0.1);          // 0.9
increment(0);             // 1
increment(1);             // 2
increment(2);             // 3
// ... and so on ...
increment(Infinity);      // Infinity

// In the following cases for the function's argument x,
// isNaN(x) is always true and x is really not a number,
// thus the function replaces it by 0 and returns 1
increment(String);            // 1
increment(Array);             // 1
increment("blabla");          // 1
increment("-blabla");         // 1
increment(0/0);               // 1
increment("0/0");             // 1
increment(Infinity/Infinity); // 1
increment(NaN);               // 1
increment(undefined);         // 1
increment();                  // 1

// isNaN(x) is always the same as isNaN(Number(x)),
// but the presence of x is mandatory here!
isNaN(x) == isNaN(Number(x)) // true for every value of x, including x == undefined,
                             // because isNaN(undefined) == true and Number(undefined) returns NaN,
                             // but ...
isNaN() == isNaN(Number())   // false, because i</pre>

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
<small lang="zh-CN">isNaN</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">isNaN</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number)</td>

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

*   [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")
*   [`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。")