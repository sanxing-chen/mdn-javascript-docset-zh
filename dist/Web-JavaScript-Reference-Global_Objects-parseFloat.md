## 概述

**parseFloat()**方法将参数中指定的字符串解析成为一个浮点数字并返回.

## 语法

<pre class="syntaxbox">parseFloat(_string_)</pre>

### 参数

<dl>

<dt>`string`</dt>

<dd>需要被解析成为浮点数的字符串.</dd>

</dl>

## 描述

`parseFloat是个全局函数,不属于任何`对象.

`parseFloat`将它的字符串参数解析成为浮点数并返回.如果在解析过程中遇到了正负号(+或-),数字(0-9),小数点,或者科学记数法中的指数(e或E)以外的字符,则它会忽略该字符以及之后的所有字符,返回当前已经解析到的浮点数.同时参数字符串首位的空白符会被忽略.

如果参数字符串的第一个字符不能被解析成为数字,`则parseFloat`返回`NaN`.

你可以通过调用<span style="line-height: 19.0909080505371px;">[`isNaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。")</span>函数来判断`parseFloat的返回结果是否是``NaN`.如果`让NaN`作为了任意数学运算的操作数,则运算结果必定也是`NaN`.

`parseFloat`<span> 也可转换和返回</span>`Infinity值`<span>. 可以使用[`isFinite`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite "该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。") 函数来判断结果是否是一个有限的数值 (非</span>`Infinity`<span>, </span>`-Infinity`<span>, 或 </span>`NaN`<span>).</span>

## 例子

### 例子: `parseFloat`返回正常数字

下面的例子都返回**3.14**

<pre class="brush:js">parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14more non-digit characters");
</pre>

### 例子: `parseFloat`返回NaN

下面的例子将返回`NaN`

<pre class="brush: js">parseFloat("FF2");
</pre>

### 更严格的转换函数

该函数通过正则表达式的方式,在需要更严格地转换float值时可能会有用:

<pre class="brush: js">var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN

</pre>

注意上面的代码只是示例; 该方法不接受如 1\. 和 .5 这种合法的数值.

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
<small lang="zh-CN">parseFloat</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">parseFloat</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-parsefloat-string)</td>

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

<table class="compat-table" style="border-color: transparent;">

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

*   [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt "概述")
*   [`Number.parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat "Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。")
*   [`Number.parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt "Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。")
*   [`isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。")