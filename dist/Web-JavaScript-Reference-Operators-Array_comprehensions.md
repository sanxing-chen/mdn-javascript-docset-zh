<div class="warning">

**非标准的。不要使用！**  
数组推导是非标准的，并且它不可能添加到ECMAScript。考虑到以后，应该使用 [`Array.prototype.map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。"), [`Array.prototype.filter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。"), 和 [arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions "箭头函数就是个简写形式的函数表达式，并且它拥有词法作用域的this值（即不会新产生自己作用域下的this, arguments, super 和 new.target 等对象）。此外，箭头函数总是匿名的。").

</div>

## 概述

<span class="seoSummary">**数组推导式**是一种新的 JavaScript 表达式语法，使用它，你可以在一个原有数组的基础上快速的构造出（推导出）一个新的数组。</span>

<span>很多语言中都有推导式语法，现在 JavaScript 中也有了。</span>

## 语法

<pre class="syntaxbox">[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]
</pre>

## 描述

在数组推导式内部，可以使用下面两种子语句：

*   [for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
*   [if](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)

每个 `for-of` 语句都放在与其配对的 `if` 语句（可以有多个，也可以完全省略）的左边，每个数组推导式中可以包含多组这样的配对，但最终选取的表达式值只能有一个，且这个值（也可以是个数组推导式，也就是说可以嵌套）只能放在推导式的最右边，紧靠着右中括号。

## 示例

### 基本的数组推导式写法

<pre class="brush:js">[for (i of [ 1, 2, 3 ]) i*i ]; 
// [ 1, 4, 9 ]

var abc = [ "A", "B", "C" ];
[for (letters of abc) letters.toLowerCase()];
// [ "a", "b", "c" ]</pre>

### 带有 if 语句的数组推导式

<pre class="brush: js">var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];

[for (year of years) if (year > 2000) year];
// [ 2006, 2010, 2014 ]

[for (year of years) if (year > 2000) if(year < 2010) year];
// [ 2006], 和下面的写法等效：

[for (year of years) if (year > 2000 && year < 2010) year];
// [ 2006] 
</pre>

### 用数组推导式比用数组的 `map`、`filter` 方法更简洁

对比数组的 [`map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。") 和 [`filter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。") 方法：

<pre class="brush: js">var numbers = [ 1, 2, 3 ];

numbers.map(function (i) { return i * i });
[for (i of numbers) i*i ];
// 返回值都是 [ 1, 4, 9 ]

numbers.filter(function (i) { return i < 3 });
[for (i of numbers) if (i < 3) i];
// 返回值都是 [ 1, 2 ]
</pre>

### 带有两个数组的数组推导式

用两个 `for-of` 语句迭代两个不同的数组：

<pre class="brush: js">var numbers = [ 1, 2, 3 ];
var letters = [ "a", "b", "c" ];

var cross = [for (i of numbers) for (j of letters) i+j];
// [ "1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c" ]

var grid = [for (i of numbers) [for (j of letters) i+j]];
// [
//  ["1a", "1b", "1c"],
//  ["2a", "2b", "2c"],
//  ["3a", "3b", "3c"]
// ]

[for (i of numbers) if (i > 1) for (j of letters) if(j > "a") i+j]
// ["2b", "2c", "3b", "3c"]，和下面的写法**等效**：

[for (i of numbers) for (j of letters) if (i > 1) if(j > "a") i+j]
// ["2b", "2c", "3b", "3c"]

[for (i of numbers) if (i > 1) [for (j of letters) if(j > "a") i+j]]
// [["2b", "2c"], ["3b", "3c"]]，和下面的写法**不等效**：

[for (i of numbers) [for (j of letters) if (i > 1) if(j > "a") i+j]]
// [[], ["2b", "2c"], ["3b", "3c"]]
</pre>

## 规范

最初起草在ECMAScript 6草案中，但在第27版（2014年8月）中被移除。 请参阅ES 6的旧修订版的规范语义。

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

<td><span style="color: #f00;">未实现</span></td>

<td>[30](/en-US/Firefox/Releases/30 "Released on 2014-06-10.") (30)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>30.0 (30)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

### SpiderMonkey 目前实现的推导式特性存在的问题

*   还不能在推导式中使用解构 ([bug 980828](https://bugzilla.mozilla.org/show_bug.cgi?id=980828 "Generator and array comprehensions should support destructuring binding")).

### SpiderMonkey 目前实现的 ES6 推导式和之前实现的 ES4 推导式（JS1.7/JS1.8）的区别

*   ES6 推导式中的 `for-of` 语句会为每次迭代分配一个新的作用域：
    *   旧写法：`[()=>x for (x of [0, 1, 2])][1]() // 2`
    *   新写法：`[for (x of [0, 1, 2]) ()=>x][1]() // 1, 每个闭包都引用了一个不同的上层变量 x`
*   ES6 推导式要求最终选取的表达式值放在最右边，而不是最左边，这样更符合英语的阅读习惯：
    *   旧写法：`[i * 2 for (i of numbers)]`
    *   新写法：`[for (i of numbers) `i * 2`]`
*   ES6 推导式中可以包含多个 `for` 语句和 `if` 语句，以前都只能写一个。
*   ES6 推导式中只能使用 `[for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)` 语句，以前还可以使用 `[for...in](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)`。

## 相关链接

*   [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
*   [生成器推导式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions "Generator推导式是一个让你通过基于现存可迭代的项目快速组合一个新的Gennerator功能的Javascript表达式。推导式存在于很多编程语言当中，并且在即将到来的ECMAScript7标准中，为Javascript定义了数组概念。")