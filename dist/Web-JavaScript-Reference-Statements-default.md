关键词 **default **可以在JavaScript中的这两种情况下使用：在 [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。") 中的时候，或者在 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。") 中使用时。

## Syntax （语法）

在[`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。") 语句中使用:

<pre class="syntaxbox">switch (expression) {
  case value1:
    //当表达式的值和value1匹配执行这里的语句
    [break;]
  default:
    //当表达式的值没有匹配，执行这里的语句
    [break;]
}</pre>

在[`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。") 中使用：

<pre class="syntaxbox">export default _nameN_ </pre>

## Description （描述）

更多细节，请看

*   [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。") 语句和
*   [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。") 语句页面.

## 例子

### 在switch语句中使用default

In the following example, if `expr` evaluates to "Bananas" or "Apples", the program matches the values with either the case "Bananas" or "Apples" and executes the corresponding statement. The `default` keyword will help in any other case and executes the associated statement.

在下边的例子中，如果expr的取值（参数的值）是"Oranges"或者"Apples"的时候（注：原英文文档中的"Bananas"是错误的，与下方示例代码不匹配），程序会根据相应的值，去匹配"Oranges"或者"Apples"两者中的某一个值，并执行相应的语句。而关键词 default 会在expr为其他值的时候执行其中的语句。

<pre class="brush: js">switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}</pre>

### Using `default` with `export`

If you want to export a single value or need a fallback value for a module, a default export can be used:

如果你想要export（导出）一个值或者需要模型的一个返回值，就可以使用 export default。 

<pre class="brush: js">// module "my-module.js"
let cube = function cube(x) {
  return x * x * x;
}
export default cube;</pre>

Then, in another script, it will be straightforward to import the default export:

然后，在另一段script程序中，default export 导出的值会被直接导入使用。

<pre class="brush: js">// module "my-module.js"
import myFunction from 'my-module';
console.log(myFunction(3)); // 9
</pre>

## Specifications 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">switch statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Exports</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-exports)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">switch statement</small>](https://tc39.github.io/ecma262/#sec-switch-statement)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Exports</small>](https://tc39.github.io/ecma262/#sec-exports)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility 浏览器兼容性

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

<td>Switch default</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Export default</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td>Switch default</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Export default</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。")
*   [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")