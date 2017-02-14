## 概览

**语句块** (或其他语言中的 **复合语句**) 用来组织零个或多条语句. 用一对花括号界定语句块.

## 语法

<pre class="syntaxbox">{
  <var>statement_1</var>;
  <var>statement_2;</var>
  ...
  <var>statement_n;</var>
}
</pre>

<dl>

<dt>`statement_1`, `statement_2`, `statement_n`</dt>

<dd>语句都包裹在语句块中.</dd>

</dl>

## 说明

语句块通常在流程控制语句 (如 `if`, `for`, `while`)中使用.如:

<pre class="brush: js">while (x < 10) {
  x++;
}
</pre>

注意语句块不是以分号结尾.

其他语言中通常将语句块称为 **复合语句**. 语句块允许你在Javascript需要一行语句的时候使用多行语句. 在JavaScript中使用语句块是种很常见的做法. 与之相反的做法是使用 [empty语句](/en-US/docs/Web/JavaScript/Reference/Statements/Empty), empty语句 可以在需要语句的环境下不提供任何语句.

### 块级作用域

#### 使用 var

通过var声明的变量**没有**块级作用域. 在语句块(block)里声明的变量作用域是其所在的函数或者 script 标签内, 你可以在语句块外面访问到它. 换句话说, 语句块不会生成一个新的作用域. 尽管单独的语句块是合法的语句, 但在JavaScript中你不会想使用单独的语句块,因为它们不像你想象的C或Java中的语句块那样处理事物. 例如:

<pre class="brush: js">var x = 1;
{
  var x = 2;
}
console.log(x); // 输出 2
</pre>

该代码段会输出2,因为块中的 var x 语句与块前面的var x 语句作用域相同. 在 C 或 Java中, 这段代码会输出1.

#### 使用 let 和 const

与 var 不同, 使用 let 和 const 声明的变量是有块级作用域的.

    let x = 1;
    {
      let x = 2;
    }
    console.log(x); // 输出 1

x = 2 被限制在块级作用域中, 也就是它被声明时所在的块级作用于.

const 的结果也是一样的:

    const c = 1;
    {
      const c = 2;
    }
    console.log(c); // 输入1, 而且不会报错

注意块级作用域里的常量声明 const c = 2 并不会报 SyntaxError: Identifier 'c' has already been declared 这样的语法错误, 因为这是一个新的作用域.

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

<td>Initial definition. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Block statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Block statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-block)</td>

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

*   [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。")