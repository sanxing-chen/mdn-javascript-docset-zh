## 概览

<span style="line-height: 19.0909080505371px;">当指定条件为 true 时，</span>**if 语句** 会执行一条语句。如果该条件为 false，则执行另一条语句。

## 语法

<pre class="syntaxbox">if (_condition_)
   _statement1_
[else
   _statement2_]
</pre>

<dl>

<dt>`condition`</dt>

<dd>值为 true 或 false 的表达式</dd>

</dl>

<dl>

<dt>`statement1`</dt>

<dd>如果条件值为 true 时执行的语句。可为任意语句，包括更深层的内部 if 语句。要执行多条语句，使用语句块 ({ ... }) 将这些语句分组；若不想执行语句，则使用空语句。</dd>

</dl>

<dl>

<dt>`statement2`</dt>

<dd>如果条件值为 false 且 else 从句存在时执行的语句。<span style="line-height: 19.0909080505371px;">可为任意语句，包括语句块和</span>更深层的内部 if 语句<span style="line-height: 19.0909080505371px;">。</span></dd>

</dl>

## 说明

多层 `if...else` 语句可使用 else if 从句。注意：在 Javascript 中没有 `elseif` (一个单词)关键字。

<pre class="eval">if (_condition1_)
   _statement1_
else if (_condition2_)
   _statement2_
else if (_condition3_)
   _statement3_
...
else
   _statementN_
</pre>

下面是合理排版的嵌套 if 语句：

<pre class="eval">if (_condition1_)
   _statement1_
else
   if (_condition2_)
      _statement2_
   else
      if (_condition3_)
...
</pre>

要在一个从句中执行多条语句，可使用语句块 (`{ ... }`) 。通常情况下，一直使用语句块是个好习惯，特别是有内部 if 语句的嵌套的情况：

<pre class="eval">if (_condition_) {
   _statements1_
} else {
   _statements2_
}
</pre>

不要被原生boolean值的value和false 与 [Boolean](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "en/JavaScript/Reference/Global_Objects/Boolean")对象的true和false值迷惑.。所有不是 `undefined<font face="Open Sans, Arial, sans-serif">、</font>``null、` `0<font face="Open Sans, Arial, sans-serif">、</font>``NaN、`空字符串 (`""`)， 以及任意对象，包括值为false的Boolean对象， 在条件语句中都为true。例如:

<pre class="brush: js">var b = new Boolean(false);
if (b) //表达式的值为true
</pre>

## 示例

### 例子: 使用 `if...else`

<pre class="brush: js">if (cipher_char === from_char) {
   result = result + to_char;
   x++;
} else {
   result = result + clear_char;
}
</pre>

### 例子: 使用 `else if`

注意：Javascript中没有 elseif 语句。 但可以使用 else 和 if 中间有空格的语句：

<pre class="brush: js">if (x > 5) {

} else if (x > 50) {

} else {

}</pre>

### 例子: 条件表达式中的赋值语句

建议不要在条件表达式中单纯的使用赋值语句，因为粗看下赋值语句的代码很容易让人误认为是等性语句。比如，不要使用下面示例的代码：

<pre class="brush: js">if (x = y) {
   /* do the right thing */
}
</pre>

如果你需要在条件表达式中使用赋值语句，用圆括号包裹赋值语句。比如：

<pre class="brush: js">if ((x = y)) {
   /* do the right thing */
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

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">if statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">if statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-if-statement)</td>

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

*   [`block`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")
*   [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")