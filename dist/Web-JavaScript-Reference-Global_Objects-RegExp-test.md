## 概述

`**test()**` 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 `true` 或 `false`。

## 语法

<pre><var>regexObj</var>.test(str)</pre>

### 参数

<dl>

<dt>`str`</dt>

<dd>用来与正则表达式匹配的字符串</dd>

</dl>

### 返回值

布尔值 `true` 或 `false`。

## 描述

当你想要知道一个模式是否存在于一个字符串中时，就可以使用 `test()（类似于 [`String.search`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search "search() 方法执行一个查找，看该字符串对象与一个正则表达式是否匹配。")）`。若想知道更多信息，可使用（执行比较慢） [`exec`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。") 方法（类似于 [`String.match`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。") 方法）。 As with ``exec`` (or in combination with it), ``test`` called multiple times on the same global regular expression instance will advance past the previous match.

## 示例

### 例子：使用 `test`

下例打印一条信息，该信息内容取决于是否成功通过指定测试：

<pre class="brush: js">function testinput(re, str){
    var midstring;
    if (re.test(str)) {
        midstring = " contains ";
    } else {
        midstring = " does not contain ";
    }
    console.log(str + midstring + re.source);
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

<td>ECMAScript 3rd Edition. Implemented in JavaScript 1.2</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">RegExp.test</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.6.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">RegExp.test</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.test)</td>

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

### Gecko-specific notes

Prior to Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5), `test()` was implemented incorrectly; when it was called with no parameters, it would match against the value of the previous input (RegExp.input property) instead of against the string "undefined". This is fixed; now `/undefined/.test()` correctly results in `true`, instead of an error.

## 相关链接

*   [Regular Expressions](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions "JavaScript/Guide/Regular_Expressions") chapter in the [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide "JavaScript/Guide")
*   [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp 构造函数可创建一个正则表达式对象，用特定的模式匹配文本。")