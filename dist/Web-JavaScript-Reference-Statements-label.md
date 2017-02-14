## 概述

**标记语句（labeled statement）**可以和 [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。") 或 [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。") 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。

## 语法

<pre class="syntaxbox">_label_ :
   _statement_
</pre>

<dl>

<dt>`label`</dt>

<dd>任何不是保留关键字的 JavaScript 标识符。</dd>

<dt>`statement`</dt>

<dd>语句。`break` 可用于任何**标记语句**（labeled statment），而 `continue` 可用于**循环标记语句**（looping labeled statements）。</dd>

</dl>

## 描述

可使用一个标签来唯一标记一个循环，然后使用 `break` 或 `continue` 语句来指示程序是否中断循环或继续执行。

需要注意的是 JavaScript 没有 `goto` 语句，标记（labels）只能和 `break` 或 `continue` 一起使用。

<div class="warning">

### 避免使用 labels

标记（Labels）在 JavaScript 中并不经常被使用，这是因为它们会使程序变得更难于阅读和理解。应该尽可能地避免使用，根据情况，选择[调用函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "function") 或 [抛出异常](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw")。

</div>

## 示例

### for 循环中使用 labeled `continue`

<pre class="brush: js">var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i == 1 && j == 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
</pre>

### 使用 labeled `continue` 语句

给定一组数据和一组测试，下面的例子统计通过测试的数据。

<pre class="brush: js">var itemsPassed = 0;
var i, j;

top:
for (i = 0; i < items.length; i++){
  for (j = 0; j < tests.length; j++){
    if (!tests[j].pass(items[i])){
      continue top;
    }
  }

  itemsPassed++;
}</pre>

### for 循环中使用 labeled `break`

<pre class="brush: js">var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i == 1 && j == 1) {
         break loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example</pre>

### 使用 labeled `break` 语句

给定一组数据和一组测试，下面的例子判断是否所有的数据均通过了测试。

<pre class="brush: js">var allPass = true;
var i, j;

top:
for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])){
      allPass = false;
      break top;
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

<td>ECMAScript 3rd Edition</td>

<td>Standard</td>

<td>Initial definition. Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Labelled statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Labelled statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-statements)</td>

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

*   [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")
*   [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。")