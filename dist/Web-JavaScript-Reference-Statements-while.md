## 概述

**while** 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。

## 语法

<pre class="syntaxbox">while (_condition_) {
  _statement_
}</pre>

<dl>

<dt>`condition`</dt>

<dd>条件表达式，在每次循环前被求值。如果求值为真，statement 就会被执行。如果求值为假，则跳出 while 循环执行后面的语句。</dd>

<dt>`statement`</dt>

<dd>只要条件表达式求值为真，该语句就会一直被执行。要在循环中执行多条语句，可以使用块语句 { ... } 包住多条语句。</dd>

</dl>

## 示例

下面的 while 循环会一直循环若干次直到 `n` 等于 `3`。

<pre class="brush:js">var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}</pre>

在每次循环中，`n` 都会自增 `1`，然后再把 `n` 加到 `x` 上。因此，在每轮循环结束后，`x` 和 `n` 的值分别是：

*   第一轮后：`n` = 1，`x` = 1
*   第二轮后：`n` = 2，`x` = 3
*   第三轮后：`n` = 3，`x` = 6

当完成第三轮循环后，条件表达式 n < 3 不再为真，因此循环终止。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">while statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">while statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-while-statement)</td>

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

*   [`do...while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while)
*   [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.")