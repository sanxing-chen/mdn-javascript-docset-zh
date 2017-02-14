for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.

## 语法

<pre class="syntaxbox">for ([_initialization_]; [_condition_]; [_final-expression_])
   _statement_
</pre>

<dl>

<dt>`initialization`</dt>

<dd>一个表达式 (包含赋值语句) 或者变量声明。典型地被用于初始化一个计数器。该表达式可以使用var关键字声明新的变量。初始化中的变量不是该循环的局部变量，而是与该循环处在同样的作用域中。该表达式的结果无意义。</dd>

<dt>`condition`</dt>

<dd>一个条件表达式被用于确定每一次循环是否能被执行。如果该表达式的结果为true， <font face="Consolas, Liberation Mono, Courier, monospace">循环体内的语句将被执行。</font> 这个表达式是可选的。如果被忽略，那么就被认为永远为true。如果计算结果为false，那么执行流程将被跳到for语句结构后面的第一条语句。</dd>

<dt>`final-expression`</dt>

<dd>每次循环的最后都要执行的表达式。执行时机是在下一次`condition的计算之前。通常被用于更新或者递增计数器变量。`</dd>

<dt>`statement`</dt>

<dd>只要`condition的结果为true就会被执行的语句。` 要在循环体内执行多条语句，使用一个 [block](/en-US/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block") 结构 (`{ ... }`) 来包含要执行的语句。没有任何语句要执行，使用一个 [empty](/en-US/docs/Web/JavaScript/Reference/Statements/Empty) 语句 (`;`)。</dd>

</dl>

## 实例

### 一般使用

以下例子声明了变量i并被初始赋值为0，for语句检查i的值是否小于9，如果小于9，则执行语句块内的语句，并且最后将i的值递增。

<pre class="brush: js">for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
</pre>

### 忽略表达式

for语句的所有的表达式都是可选的

举个例子，初始化语句（_initialization_）中的表达式没有被指定：

<pre class="brush: js">var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
</pre>

就像_initialization，condition_也是可选的。如果你忽略了，为了不要创建了死循环（无限循环），你必须确保循环体内存在可以退出循环的语句，使用break。

<pre class="brush: js">for (var i = 0;; i++) {
   console.log(i);
   if (i > 3) break;
   // more statements
}</pre>

你当然可以忽略所有的表达式。同样的，确保使用了 `[break](/en-US/docs/Web/JavaScript/Reference/Statements/break)` 语句来退出循环并且你还需要修改（递增）一个变量，以确保能够正常执行break语句。

<pre class="brush: js">var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
</pre>

### 使用空语句的例子

以下为在[final-expression]部分中循环计算一个节点的偏移位置,它不需要执行一个语句或者一组语句,因此使用了空语句。.

<pre class="brush: js">function showOffsetPos (sId) {
  var nLeft = 0, nTop = 0;

  for (var oItNode = document.getElementById(sId); // initialization
       oItNode; // condition
       nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // final-expression
       /* empty statement */ ;

  console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
}

// Example call:

showOffsetPos("content");

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"</pre>

<div class="note">**Note:** In this case, when you do not use the `statement` section, **a semicolon is put immediately after the declaration of the cycle**.</div>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">for statement</small>](https://tc39.github.io/ecma262/#sec-for-statement)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">for statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">for statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">for statement</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-12.6.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">for statement</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-12.6.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition</td>

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

## 另请参阅

*   [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")
*   [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。")
*   [`empty`](/zh-CN/docs/Web/JavaScript/Reference/Statements/empty "empty 语句 用来表明没有语句, 尽管JavaScript语法希望有语句会被执行.")
*   [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。")
*   [`do...while`](/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
*   [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
*   [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)