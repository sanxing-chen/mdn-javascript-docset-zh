## 概述

**break 语句** 中止当前循环，[`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。") 语句或 [`label`](/zh-CN/docs/Web/JavaScript/Reference/Statements/label "标记语句（labeled statement）可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。") 语句，并把程序控制流转到紧接着被中止语句后面的语句。

## 语法

    break [label];

<dl>

<dt>`label`</dt>

<dd>可选的。是相关联的 label 语句的标志符。如果 break 语句不在一个循环或 [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。") 语句中，则该项是必须的。</dd>

</dl>

## 描述

`break` 语句包含一个可选的标记（label），可允许程序摆脱一个被标记的语句（labeled statement）。`break` 语句需要内嵌在引用的 label 中。被标记的语句（labeled statement）可以是任何 [`块`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")语句；不一定是循环语句。

## 示例

下面的函数里有个 `break` 语句，当 `i` 为 3 时，会中止 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。") 循环，然后返回 3 * `x` 的值。

    function testBreak(x) {
      var i = 0;

      while (i < 6) {
        if (i == 3) {
          break;
        }
        i += 1;
      }

      return i * x;
    }

下面的代码中一起使用 `break` 语句和被标记的块语句（labeled blocks）。一个 `break` 语句必须内嵌在它引用的标记中。注意，`inner_block` 内嵌在 `outer_block` 中。

<pre class="brush:js;highlight:[1,3,5];">outer_block:{

  inner_block:{
    console.log ('1');
    break outer_block;      // breaks out of both inner_block and outer_block
    console.log (':-(');    // skipped
  }

  console.log ('2');        // skipped
}
</pre>

下面的代码同样使用了 `break` 语句和被标记的块语句（labeled blocks），但是产生了一个语法错误（Syntax Error），因为它的 `break` 语句在 `block_1` 中，但是引用了 `block_2`。`break` 语句必须内嵌在它引用的 label 中。

<pre class="brush:js;highlight:[1,3,6];">block_1:{
  console.log ('1');
  break block_2;            // SyntaxError: label not found
}

block_2:{
  console.log ('2');
}
</pre>

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

<td><span class="spec-Standard">Standard</span></td>

<td>初始版本，无label标记</td>

</tr>

<tr>

<td>ECMAScript 3rd Edition</td>

<td><span class="spec-Standard">Standard</span></td>

<td>增加了label标记</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Break statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.8)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Break statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-break-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Break statement</small>](https://tc39.github.io/ecma262/#sec-break-statement)</td>

<td><span class="spec-Draft">Draft</span></td>

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

*   [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。")
*   [`label`](/zh-CN/docs/Web/JavaScript/Reference/Statements/label "标记语句（labeled statement）可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。")
*   [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")