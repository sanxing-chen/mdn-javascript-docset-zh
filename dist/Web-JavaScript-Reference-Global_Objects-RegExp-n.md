<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

非标准**$1, $2, $3, $4, $5, $6, $7, $8, $9 是**正则表达式括号字符串中的静态只读匹配项。

## 语法

    RegExp.$1
    RegExp.$2

## 描述

$1, ..., $9 属性是静态的, 他不是独立的的正则表达式属性. 所以, 我们总是像这样子使用他们`RegExp.$1`, ..., `RegExp.$9`.

属性的值是只读的而且只有在正确匹配的情况下才会改变.

括号匹配项是无限的, 但是RegExp对象能捕获的只有九个. 你可以通过返回一个数组索引来取得所有的括号匹配项.

这些属性可以在[`String.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。") 方法中替换字符串. 在这种情况下, 不用再前面加上RegExp。下面的例子将详细说明. 当正则表达式中不包含括号, 脚本中的 `$n`'s 就是字面上的意思 (当n是正整数).

## 例子

### `$n` 在 `String.replace中的应用`

以下脚本用 [`replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。") 方法去匹配一个first last格式的 name[`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!") 实例 输出last first格式. 在替换文本里, 脚本用 `$1` 和 `$2` 表示正则表达式中的括号匹配项的结果.

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
</pre>

## 技术指标

非标准. 不属于当前的任何规范.

## 浏览器适配

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

## 参见

*   <span title="This API has not been standardized."></span>[`RegExp.input ($_)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input "此页面仍未被本地化, 期待您的翻译!")
*   <span title="This API has not been standardized."></span>[`RegExp.lastMatch ($&amp;)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch "此页面仍未被本地化, 期待您的翻译!")
*   <span title="This API has not been standardized."></span>[`RegExp.lastParen ($+)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen "此页面仍未被本地化, 期待您的翻译!")
*   <span title="This API has not been standardized."></span>[`RegExp.leftContext ($`)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext "此页面仍未被本地化, 期待您的翻译!")
*   <span title="This API has not been standardized."></span>[`RegExp.rightContext ($')`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext "此页面仍未被本地化, 期待您的翻译!")