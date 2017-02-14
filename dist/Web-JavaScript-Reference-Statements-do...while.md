## 概览

`do...while` 语句创建了一个循环,该循环执行一个指定的语句直到condition 的值为 false. condition 在执行statement后才会被赋值,statement至少执行一次.

## 语法

<pre class="syntaxbox">do
   _statement_
while (_condition_);
</pre>

<dl>

<dt>`statement`</dt>

<dd>至少执行一次的<span style="line-height: 19.0909080505371px;">语句</span>,且只要condition值为true时,会再次执行. 想执行多行语句,可使用<span style="line-height: 19.0909080505371px;">[`block`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")</span>语句<span style="line-height: 19.0909080505371px;">(</span>`{ ... }`<span style="line-height: 19.0909080505371px;">) </span>包裹这些语句 .</dd>

</dl>

<dl>

<dt>`condition`</dt>

<dd>循环中每次都会计算的表达式. 如果其值为true,statement会再次执行.当<span style="line-height: 19.0909080505371px;">其值为</span>false,则跳到 `do...while 之后的语句`.</dd>

</dl>

## 示例

### 例子: 使用 `do...while`

下面的例子中, `do...while` 循环至少迭代一次,并且继续迭代直到 i 不再小于5时结束.

<pre class="brush: js">var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);
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

<td>ECMAScript 3rd Edition.</td>

<td>Standard</td>

<td>Initial definition.  
Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">do-while statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">do-while statement</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-do-while-statement)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td>Trailing ; is now optional.</td>

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

<td>IE6+</td>

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

## 相关链接

*   [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。")
*   [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "此页面仍未被本地化, 期待您的翻译!")