## 概述

<span class="seoSummary">**逗号操作符** 对它的每个操作对象求值（从左至右），然后返回最后一个操作对象的值。</span>

## 语法

<pre class="syntaxbox">_expr1_, _expr2, expr3..._</pre>

## 参数

<dl>

<dt>`expr1`, `expr2, expr3...`</dt>

<dd>任一表达式。</dd>

</dl>

## 描述

当你想要在期望一个表达式的位置包含多个表达式时，可以使用逗号操作符。这个操作符最常用的一种情况是：`for` 循环中提供多个参数。

## 示例

假设 `a` 是一个二维数组，每一维度包含10个元素，则下面的代码使用逗号操作符一次递增/递减两个变量。需要注意的是，`var` 语句中的逗号_**不是**_逗号操作符，因为它不是存在于一个表达式中。尽管从实际效果来看，那个逗号同逗号运算符的表现很相似。但确切地说，它是 `var` 语句中的一个特殊符号，用于把多个变量声明结合成一个。下面的代码打印一个二维数组中斜线方向的元素：

<pre class="brush:js;highlight:[1]">for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);</pre>

### 处理之后返回

另一个使用逗号操作符的例子是在返回值前处理一些操作。如同下面的代码，只有最后一个表达式被返回，其他的都只是被求值。

<pre>function myFunc () {
  var x = 0;

  return (x += 1, x); // the same of return ++x;
}</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Comma operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.14)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Comma operator</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-comma-operator)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td> </td>

</tr>

</tbody>

</table>

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

<td>Yes</td>

<td>Yes</td>

<td>3.0</td>

<td>Yes</td>

<td>Yes</td>

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

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [for loop](/en-US/docs/Web/JavaScript/Reference/Statements/for)