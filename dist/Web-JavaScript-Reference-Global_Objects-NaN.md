全局属性 **`NaN`** 表示 Not-A-Number 的值。

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`NaN` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>false</td>

</tr>

<tr>

<td>enumerable</td>

<td>false</td>

</tr>

<tr>

<td>configurable</td>

<td>false</td>

</tr>

</tbody>

</table>

## 语法

    NaN

## 描述

`NaN` 是一个全局对象的属性。

<font face="monospace">NaN </font>属性的初始值就是 NaN，和 `Number.NaN` 的值一样。在现代浏览器中（ES5中）， `NaN` 属性是一个不可配置（non-configurable），不可写（non-writable）的属性。但在ES3中，这个属性的值是可以被更改的，但是也应该避免覆盖。

在编码很少直接使用`到 NaN`。通常都是在计算失败时，作为 Math 的某个方法的返回值出现的（例如：`Math.sqrt(-1)`）或者尝试将一个字符串解析成数字但失败了的时候（例如：`parseInt("blabla")`）。

### `判断一个值是否是NaN`

等号运算符（`==` 和 `===）` 不能被用来判断一个值是否是 `NaN`。必须使用 [`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。") 或 [`isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。") 函数。

<pre class="brush: js">NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.3</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">NaN</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.1.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">NaN</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-value-properties-of-the-global-object-nan)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">NaN</small>](https://tc39.github.io/ecma262/#sec-value-properties-of-the-global-object-nan)</td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

*   [`Number.NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN "Number.NaN 表示“非数字”（Not-A-Number）。和 NaN 相同。")
*   [`Number.isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN "Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。")
*   [`isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。")