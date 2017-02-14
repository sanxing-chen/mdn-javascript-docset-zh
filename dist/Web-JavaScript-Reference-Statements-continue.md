## 概述

**continue 语句**结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。

## 语法

<pre class="syntaxbox">continue [ label ];</pre>

<dl>

<dt>`label`</dt>

<dd>标识标号关联的语句</dd>

</dl>

## 描述

与 [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。") 语句的区别在于， continue 并不会终止循环的迭代，而是：

*   在 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。") 循环中，控制流跳转回条件判断；

*   在 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "此页面仍未被本地化, 期待您的翻译!") 循环中，控制流跳转到更新语句。

`continue` 语句可以包含一个可选的标号以控制程序跳转到指定循环的下一次迭代，而非当前循环。此时要求 `continue` 语句在对应的循环内部。

## 示例

### 例子：在 `while` 语句中使用 `continue`

下述例子展示了 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。") 循环中 `continue` 语句的使用。当循环到 `i` 的值为 3 时，执行 continue 。 n 的值在几次迭代后分别为 1, 3, 7 和 12 ．

    i = 0;
    n = 0;
    while (i < 5) {
       i++;
       if (i === 3) {
          continue;
       }
       n += i;
    }

### 例子：使用带标号的 `continue`

在下面的例子中，被标记为 `checkiandj` 的语句包含一个被标记为 `checkj` 的语句。当遇到`continue` 语句时，程序回到 `checkj` 语句的开始继续执行。每次遇到 `continue` 时，再次执行 `checkj` ，直到条件判断返回 false 。之后完成 `checkiandj` 语句剩下的部分。

但如果 `continue` 的标号被改为 `checkiandj` ，那程序将会从 `checkiandj` 语句的开始继续运行。

参考 [`label`](/zh-CN/docs/Web/JavaScript/Reference/Statements/label "标记语句（labeled statement）可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。") 。

    var i = 0, 
        j = 8;

    checkiandj: while (i < 4) {
       console.log("i: " + i);
       i += 1;

       checkj: while (j > 4) {
          console.log("j: "+ j);
          j -= 1;
          if ((j % 2) == 0)
             continue checkj;
          console.log(j + " is odd.");
       }
       console.log("i = " + i);
       console.log("j = " + j);
    }

输出：

    "i: 0"

    // start checkj
    "j: 8"
    "7 is odd."
    "j: 7"
    "j: 6"
    "5 is odd."
    "j: 5"
    // end checkj

    "i = 1" 
    "j = 4" 

    "i: 1"
    "i = 2" 
    "j = 4"

    "i: 2"
    "i = 3"
    "j = 4"

    "i: 3"
    "i = 4"
    "j = 4"

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition</td>

<td>Standard</td>

<td>Initial definition. Unlabeled version.</td>

</tr>

<tr>

<td>ECMAScript 3rd Edition</td>

<td>Standard</td>

<td>Labeled version added.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Continue statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Continue statement</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-continue-statement)</td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")
*   [`label`](/zh-CN/docs/Web/JavaScript/Reference/Statements/label "标记语句（labeled statement）可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。")