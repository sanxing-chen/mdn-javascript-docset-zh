## 概述

<span style="font-size: 14px; line-height: 1.5;">**switch语句**对一个表达式求值，将结果与 `case` 子语句比较，如果匹配，则从 case 处的语句向下执行。</span>

## 语法

<pre class="syntaxbox">switch (expression) {
  case value1:
    // 当 expression 的结果与 value1 匹配时，从此处开始执行
    statements1；
    [break;]
  case value2:
    // 当 expression 的结果与 value2 匹配时，从此处开始执行
    statements2;
    [break;]
  ...
  case valueN:
    // 当 expression 的结果与 valueN 匹配时，从此处开始执行
    statementsN;
    [break;]
  default:
    // 如果 expression 与上面的 value 值都不匹配时，执行此处的语句
    statements_def;
    [break;]
}</pre>

<dl>

<dt>`expression`</dt>

<dd>一个用来与 `case` 子语句匹配的表达式。</dd>

<dt>`case expressionN`</dt>

<dd>`case` 子语句，用来与 `expression` 匹配。</dd>

<dt>`statementsN`</dt>

<dd>如果 `expression` 匹配其对应的 `case` 子语句，则执行此处的语句。</dd>

<dt>`statements_def`</dt>

<dd>如果 expression 没有匹配到任何 case 子语句，则会执行此处的语句。</dd>

</dl>

## 描述

If a match is found, the program executes the associated statements. If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.

The program first looks for a `case` clause whose expression evaluates to the same value as the input expression (using [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), `===)` and then transfers control to that clause, executing the associated statements. If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it does not need to be so.

The optional `[break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break "JavaScript/Reference/Statements/break")` statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If `break` is omitted, the program continues execution at the next statement in the `switch` statement.

## 示例

### 示例1：使用 `switch`

In the following example, if `expr` evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When `break` is encountered, the program breaks out of `switch` and executes the statement following `switch`. If `break` were omitted, the statement for case "Cherries" would also be executed.

<pre class="brush: js">switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
</pre>

### 示例2：如果忘记中断(break)会怎么样？

If you forget a break then script will run from the case where criteria is met, and will run the case after that regardless if criteria was met. See example here:

<pre class="brush: js">var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo is 0 so criteria met here so this block will run
        console.log(0)
        // NOTE: the forgotten break would have been here
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // it encounters this break so will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}</pre>

### 示例：使用多条件 case 的方法

If you would like one case segment to meet multiple criteria there are two methods/tricks. Method one is the recommended way, method two is a "hacky" way. The two methods below aim to alert "yes" when variable `foo` is 0, 1, 2, or 3.

Sources for these techniques are here:

1.  [Multiple Criteria Single Case Switch Statement (Stack Overflow)](http://stackoverflow.com/questions/21808543/multple-cripteria-single-case-switch-statement)
2.  [Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### 方法一

This method takes advantage of the fact that if there is no break below a case statement it will continue to execute the next case statement regardless if the case meets the criteria. See the section title "What happens if I forgot a break?"

<pre class="brush: js">var foo = 1;
switch (foo) {
    case 0:
    case 1:
    case 2:
    case 3:
        alert('yes');
        break;
    default:
        alert('not');
}</pre>

#### 方法二

This is the "hacky" method; on line 2, where you would usually find `switch(foo)`, we instead put an invariant `true`, and place conditional logic (instead of constants) into the case statements:

<pre class="brush: js">var foo = 1;
switch (true) { // 非变量 TRUE 替代 foo
    case foo >= 0 && foo <= 3:
        alert('yes');
        break;
    default:
        alert('not');
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

<td>Initial definition.  
Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">switch statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.11)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">switch statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement)</td>

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

*   [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)