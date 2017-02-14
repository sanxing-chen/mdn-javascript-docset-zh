## 概述

该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。

## 语法

<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox language-html">isFinite(_testValue_)</pre>

### 参数

<dl>

<dt>`testValue`</dt>

<dd>用于检测有限性（finiteness）的值。</dd>

</dl>

### 描述

<dl>

<dd>isFinite 是全局的方法，不与任何对象有关系。</dd>

</dl>

你可以用这个方法来判定一个数字是否是有限数字。`isFinite` 方法检测它参数的数值。如果参数是 `NaN`，正无穷大或者负无穷大，会返回`false`，其他返回 `true`。

## 示例

    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(0);         // true
    isFinite(2e64);      // true

    isFinite("0");       // true, would've been false with the more robust Number.isFinite("0")

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 2nd Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">isFinite</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">isFinite</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number)</td>

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

*   [`Number.isFinite()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite "Number.isFinite() 方法用来检测传入的参数是否是一个有穷数。")
*   [`Number.NaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN "Number.NaN 表示“非数字”（Not-A-Number）。和 NaN 相同。")
*   [`Number.POSITIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY "Number.POSITIVE_INFINITY 属性表示正无穷大。")
*   [`Number.NEGATIVE_INFINITY`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY "Number.NEGATIVE_INFINITY 属性表示负无穷大。")