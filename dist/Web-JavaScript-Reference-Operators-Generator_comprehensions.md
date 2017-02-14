<div class="warning">**非标准的。不要使用！**  
generator推导式目前是非标准的，它并没有被添加到ECMAScript。考虑到将来，请使用 [generator](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")。</div>

Generator推导式是一个让你通过基于现存可迭代的项目快速组合一个新的Gennerator功能的Javascript表达式。推导式存在于很多编程语言当中，并且在即将到来的ECMAScript7标准中，为Javascript定义了数组概念。

看下面，原来Generator推导式语法在SpiderMonkey的不同之处，它是基于对ECMAScript4的提议。

## 语法

<pre class="syntaxbox">(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
</pre>

## 描述

在Generator推导式中，这两种构成方式都是允许的：

*   [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 
*   [`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else "当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。")

for-of迭代器是构成的第一个部分。当由多重部分构成时，后面for-of和if构成方式都是被允许的。

## 示例

### 单个构成部分的 generator推导式：

<pre class="brush:js">(for (i of [ 1, 2, 3 ]) i*i );
// generator function which yields 1, 4, and 9

[...(for (i of [ 1, 2, 3 ]) i*i )];
// [1, 4, 9]

var abc = [ "A", "B", "C" ];
(for (letters of abc) letters.toLowerCase());
// generator function which yields "a", "b", and "c"

</pre>

### 有if伴随的多重构成的gennerator推导式：

<pre class="brush: js">var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];

(for (year of years) if (year > 2000) year);
// generator function which yields 2006, 2010, and 2014

(for (year of years) if (year > 2000) if(year < 2010) year);
// generator function which yields 2006, the same as below:

(for (year of years) if (year > 2000 && year < 2010) year);
// generator function which yields 2006
</pre>

### Generator推导式与Generator函数对比

用一种简单的方式来理解generator推导式的语法并与generator函数来做个比较。

Example 1: 仅是 generator.

<pre class="brush: js">var numbers = [ 1, 2, 3 ];

// Generator 函数
(function*() {
  for (let i of numbers) {
    yield i * i;
  }
})()

// Generator 推导式
(for (i of numbers) i*i );

// 结果: 两者都得到 yields [ 1, 4, 9 ]
</pre>

Example 2: 在 generator 中用if.

<pre class="brush: js">var numbers = [ 1, 2, 3 ];

// Generator 函数
(function*() {
  for (let i of numbers) {
    if (i < 3) {
      yield i * 1;
    }
  }
})()

// Generator 推导式
(for (i of numbers) if (i < 3) i);

// 结果: 两者都得到 yields [ 1, 2 ]</pre>

## 规范

Generator推导式是最初在ECMAScript 6中进行拟稿,但是在14年8月27号修订中被移除了。 请参阅较旧版本的ES6规范语义.

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

### SpiderMonkey的具体实现笔记

*   [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let "let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，var声明的变量只能是全局或者整个函数块的。") 作为标识符，因为let当前仅可用于JS版本1.7和XUL脚本标记.
*   目前还不支持解构 ([bug 980828](https://bugzilla.mozilla.org/show_bug.cgi?id=980828 "Generator and array comprehensions should support destructuring binding")).

### 与旧的JS1.7 / JS1.8理解的区别

*   ES7 的解析为每个“for”节点创建一个范围，而不是作为一个整体的理解。
    *   Old: `[...(()=>x for (x of [0, 1, 2]))][1]() // 2`
    *   New: `[...(for (x of [0, 1, 2]) ()=>x)][1]() // 1, 每个迭代都会创建一个新的x的绑定事件。`
*   ES7的解析以“for”而不是赋值表达式开头。
    *   Old: `(i * 2 for (i of numbers))`
    *   New: `(for (i of numbers) `i * 2`)`
*   ES7 解析可以有多个if和for组件。
*   ES7 解析仅这种方式工作`[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")` 而不是`[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。")` 的方式迭代。

## 相关链接

*   [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")
*   [`Array comprehensions`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions "数组推导式是一种新的 JavaScript 表达式语法，使用它，你可以在一个原有数组的基础上快速的构造出（推导出）一个新的数组。")