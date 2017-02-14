## 概览

`<font face="Open Sans, sans-serif">圆括号运算符</font>( )` 用来控制表达式中的运算优先级.

## 语法

<pre class="syntaxbox"> ( )</pre>

## 说明

圆括号运算符由一对圆括号组成,包裹表达式和子表达式用来覆盖常规的 [运算符优先级](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) ,达到低优先级的表达式比高优先级的表达式更早运算.

## 示例

下面的代码展示了加法运算先于乘法运算的情况.

<pre class="brush:js">var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence 
// addition before multiplication   
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
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

<td>Initial definition. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The Grouping Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">The Grouping Operator</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-grouping-operator)</td>

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

## 相关链接

*   [运算符优先级](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
*   [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。")
*   [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof "typeof操作符返回一个字符串,表示未经求值的操作数(unevaluated operand)的类型。")