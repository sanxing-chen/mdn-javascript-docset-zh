条件（三元）运算符是 JavaScript 仅有的使用三个操作数的运算符。本运算符经常作为 `[if](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 语句的简短形式来使用。`

## 语法

<pre class="syntaxbox">_condition_ ? _expr1_ : _expr2_ </pre>

### 参数

<dl>

<dt>`condition`</dt>

<dd>计算结果为true或false的表达式。</dd>

</dl>

<dl>

<dt>`expr1`, `expr2`</dt>

<dd>值可以是任何类型的表达式。</dd>

</dl>

## 描述

如果条件值为真值（true），运算符就会返回<font face="Consolas, Liberation Mono, Courier, monospace"> expr1 的值；否则，</font> 就会返回 `expr2 的值。例如，` 根据 isMember 变量的值显示不同的信息，可以使用下面的表达式：

<pre class="brush: js">"The fee is " + (isMember ? "$2.00" : "$10.00")
</pre>

同样也可以把三元运算符的值赋值给一个变量:

<pre class="brush: js">var elvisLives = Math.PI > 4 ? "Yep" : "Nope";</pre>

多个三元操作符也是可能的（注：条件运算符是右结合）：

<pre class="brush: js">var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log( access ); // logs "Access granted"</pre>

还可以把三元操作符用在等式的左边：

<pre>var stop = false, age = 16;

age > 18 ? location.assign("continue.html") : stop = true;
stop; // true</pre>

你也可以在 expr1、expr2 里使用一个或多个的操作（用逗号分隔）:

<pre class="brush: js">var stop = false, age = 23;

age > 18 ? (
    alert("OK, you can go."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Sorry, you are much too young!")
);
</pre>

同样也可以在赋值过程中做多个操作。 如下所示，**括号里的最后一个逗号分隔值**是将被赋值的。

<pre class="brush: js">var age = 16;

var url = age > 18 ? (
    alert("OK, you can go."), 
    // alert 返回的值是 "undefined"， 但它会被忽略，因为
    // 不是括号的最后一个逗号分隔值
    "continue.html" // 如果 age > 18，则这个值赋值给 url
) : (
    alert("You are much too young!"),
    alert("Sorry :-("),
    // 等等
    "stop.html" // 如果 !(age > 18) 为真，则这个值赋值给 url
);

location.assign(url); // "stop.html"</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。JavaScript 1.0 实现。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The conditional operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Conditional Operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-conditional-operator)</td>

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

*   [if 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)