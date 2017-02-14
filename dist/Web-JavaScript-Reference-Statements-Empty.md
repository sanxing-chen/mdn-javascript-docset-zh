## 概览

**empty 语句** 用来表明没有语句, 尽管JavaScript语法希望有语句会被执行.

## 语法

<pre class="syntaxbox">;
</pre>

## 说明

empty语句 用分号表示 (;) ,用来指明没有语句会被执行, 尽管此时JavaScript语法需要执行语句. 相对的是,当你需要多行语句,但JavaScript只允许一个时,可以使用[ 语句块](/en-US/docs/Web/JavaScript/Reference/Statements/block); 语句块可以将多条语句合并为一个.

## 示例

empty语句 有时用作循环语句中. 如:

<pre class="brush: js">var arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr)
// [0, 0, 0]
</pre>

**注意:** 在使用 empty语句的情况下专门写上注释是个不错的主意, 因为不是很容易区分empty语句 和普通的分号. 下面的示例可能不是故意加上分号的:

<pre class="brush: js">if (condition);       // Caution, this "if" does nothing!
   killTheUniverse()  // So this gets always executed!!!
</pre>

另一个例子:  [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 语句不带花括号 (`{}`). 如果three为true, 不会发生任何事, `four` 不会执行, 同时else从句中的`launchRocket()函数也不会执行`.

<pre class="brush: js">if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();</pre>

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
<small lang="zh-CN">Empty statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Empty statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-empty-statement)</td>

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

*   [`Block statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")