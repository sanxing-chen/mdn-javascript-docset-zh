`replace()` 方法使用一个替换值（`replacement`）替换掉一个匹配模式（`pattern`）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!")，替换值可以是一个字符串或者一个函数。

## 语法

    str.replace(regexp|substr, newSubStr|function)

### 参数

<dl>

<dt>`regexp `(pattern)</dt>

<dd>一个 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!") 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。</dd>

</dl>

<dl>

<dt>`substr `(pattern)</dt>

<dd>一个要被 `newSubStr` `替换的`[`字符串`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")`。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。`</dd>

</dl>

<dl>

<dt>`newSubStr` (replacement)</dt>

<dd> 用于替换掉第一个参数在原字符串中的匹配部分的 [`字符串`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")。该字符串中可以内插一些特殊的变量名。参考下面的[使用字符串作为参数](#使用字符串作为参数)。</dd>

</dl>

<dl>

<dt>`function` (replacement)</dt>

<dd>一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的[指定一个函数作为参数](#指定一个函数作为参数)。</dd>

</dl>

### 返回值

一个部分或全部匹配由替代模式所取代的新的字符串。

## 描述

该方法并不改变调用它的字符串本身，而只是返回一个新的替换后的字符串。

在进行全局的搜索替换时，正则表达式需包含 `g` 标志。

### 使用字符串作为参数

替换字符串可以插入下面的特殊变量名：

<table class="fullwidth-table">

<tbody>

<tr>

<td class="header">变量名</td>

<td class="header">代表的值</td>

</tr>

<tr>

<td>`<tr</td>

<td>插入一个 "$"。</td>

</tr>

<tr>

<td>`><`</td>

<td>插入匹配的子串。</td>

</tr>

<tr>

<td>`<td`</td>

<td>插入当前匹配的子串左边的内容。</td>

</tr>

<tr>

<td>`/td>`</td>

<td>插入当前匹配的子串右边的内容。</td>

</tr>

<tr>

<td style="white-space: nowrap;">`$_n_`</td>

<td>

假如第一个参数是 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!")对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。

</td>

</tr>

</tbody>

</table>

### 指定一个函数作为参数

你可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后， 该函数就会执行。 函数的返回值作为替换字符串。 (注意:  上面提到的特殊替换参数在这里不能被使用。) 另外要注意的是， 如果第一个参数是正则表达式， 并且其为全局匹配模式， 那么这个方法将被多次调用， 每次匹配都会被调用。

下面是该函数的参数：

<table class="fullwidth-table">

<tbody>

<tr>

<td class="header">变量名</td>

<td class="header">代表的值</td>

</tr>

<tr>

<td><span style="font-family: courier,andale mono,monospace;">match</span></td>

<td>匹配的子串。（对应于上述的><。）</td>

</tr>

<tr>

<td>`p1,p2, ...`</td>

<td>

假如<span style="font-family: courier,andale mono,monospace;">replace()方法的</span>第一个参数是一个[`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!") 对象，则代表<span style="line-height: 1.5;">第n个括号匹配的字符串。（对应于上述的$1，$2等。）</span>

</td>

</tr>

<tr>

<td>`offset`</td>

<td>

匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是“abcd”，匹配到的子字符串时“bc”，那么这个参数将是1）

</td>

</tr>

<tr>

<td style="white-space: nowrap;"><span style="font-family: courier,andale mono,monospace;">string</span></td>

<td>被匹配的原字符串。</td>

</tr>

</tbody>

</table>

(精确的参数个数依赖于replace()的第一个参数是否是一个正则表达式对象， 以及这个正则表达式中指定了多少个括号子串。)

下面的例子将会使 `newString` 变成<span style="font-family: courier,andale mono,monospace;">'abc - 12345 - #$*%'：</span>

    function replacer(match, p1, p2, p3, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return [p1, p2, p3].join(' - ');
    }
    var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

## 示例

### 在 `replace() 中使用正则表达式`

在下面的例子中，`replace()` 中使用了正则表达式及忽略大小写标示。

<pre class="brush: js">var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
</pre>

### 在 `replace()`中使用 `global` 和 `ignore` 选项

下面的例子中,正则表达式包含有全局替换(g)和忽略大小写(i)的选项,这使得replace方法用'oranges'替换掉了所有出现的"apples".

<pre class="brush: js">var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");

`// oranges are round, and oranges are juicy.`
console.log(newstr);
</pre>

### 交换字符串中的两个单词

下面的例子演示了如何交换一个字符串中两个单词的位置，这个脚本使用$1 和 $2 代替替换文本。

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
`// Smith, John`
console.log(newstr);
</pre>

### 使用行内函数来修改匹配到的字符。

在这个例子中，所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。重要的是，在返回一个替换了的字符串前需要在匹配元素前需要进行添加操作。

在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。

<pre class="brush: js">function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
</pre>

此代码 `styleHyphenFormat('borderTop') 将`返回 'border-top'。

因为我们想在最终的替换中进一步转变匹配结果，所以我们必须使用一个函数。这迫使我们在使用[`toLowerCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。")方法前进行评估。如果我们尝试不用一个函数进行匹配，那么使用[`toLowerCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。") 方法将不会有效。

<pre class="brush: js">var newString = propertyName.replace(/[A-Z]/g, '-' + '><'.toLowerCase());  // won't work
</pre>

这是因为 `'$&'.toLowerCase()` 会先被解析成字符串字面量（这会导致相同的'$&')而不是当作一个模式。

### 将华氏温度转换为对等的摄氏温度

下面的例子演示如何将华氏温度转换为对等的摄氏温度。华氏温度用一个数字加一个"F"来表示，这个函数将返回一个数字加"C"来表示的摄氏温度。例如，如果输入是212F，这个函数将返回100C。如果输入数字时0F，这个方法将返回"-17.77777777777778C"。

正则表达式test检查任何数字是否以 F 结尾。华氏温度通过第二个参数p1进入函数。这个函数基于华氏温度作为字符串传递给f2c函数设置成摄氏温度。然后<span style="line-height: 1.5;">f2c()</span><span style="line-height: 1.5;">返回摄氏温度。</span><span style="line-height: 1.5;">这个函数与Perl的 s///e 标志相似。</span>

<pre class="brush: js">function f2c(x)
{
  function convert(str, p1, offset, s)
  {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
</pre>

### 使用行内函数和正则来避免循环

下例把某种模式的字符串转换为一个对象数组（其元素为对象）。

**输入：**  
一个由 x，- 和 _ 组成的字符串。

<pre class="language-html" style="padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(234, 239, 242, 0.247059);">x-x_

---x---x---x---

-xxx-xx-x-

_x_x___x___x___</pre>

<div>**输出：**</div>

<div><span style="line-height: 1.5;">一个数组对象。'x' 产生一个 'on' 状态，'-'（连接符）产生一个 'off' 状态，而 '_' （下划线）表示 'on' 状态的长度。</span></div>

    [

<div>**代码片段：**</div>

<div>

    var str = 'x-x_';
    var retArr = [];
    str.replace(/(x_*)|(-)/g, function(match, p1, p2){
      if(p1) retArr.push({ on: true, length: p1.length });
      if(p2) retArr.push({ on: false, length: 1 });
    });

    console.log(retArr);

</div>

<div>该代码片段生成了一个数组，包含三个期望格式的对象，避免了使用 for 循环语句。</div>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">描述</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>最早在JavaScript 1.2 中定义并实现。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">String.prototype.replace</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.11)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">String.prototype.replace</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.replace)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">String.prototype.replace</small>](https://tc39.github.io/ecma262/#sec-string.prototype.replace)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

<div id="compat-desktop">

<table class="compat-table" style="border-color: transparent;">

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

<table class="compat-table" style="border-color: transparent;">

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

### Firefox中需要注意的特性

*   从Gecko 27  (Firefox 27 / Thunderbird 27 / SeaMonkey 2.24) 开始，这个方法就被整合到了ECMAScript规范中。当 <span style="font-family: courier,andale mono,monospace;">replace() </span>使用全局g标志的正则表达式被调用， [`RegExp.lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。") 属性将被重置为0（[bug 501739](https://bugzilla.mozilla.org/show_bug.cgi?id=501739 "FIXED: String match and replace methods do not update global regexp lastIndex per ES3&5")）。
*   从 Gecko 39 (Firefox 39 / Thunderbird 39 / SeaMonkey 2.36)开始，`flags` 参数就被弃用并抛出一个控制台警告（[bug 1142351](https://bugzilla.mozilla.org/show_bug.cgi?id=1142351 "FIXED: Add console warnings for non-standard flag argument of String.prototype.{search,match,replace}.")）。
*   从 Gecko 47 (Firefox 47 / Thunderbird 47 / SeaMonkey 2.44) 开始，在非发行版本中已不再支持非标准的 `flags` 参数，并且不久后会完全移除该参数（[bug 1245801](https://bugzilla.mozilla.org/show_bug.cgi?id=1245801 "FIXED: Disable non-standard flag argument of String.prototype.{search,match,replace} in non-release build.")）。
*   从 Gecko 49 (Firefox 49 / Thunderbird 49 / SeaMonkey 2.46) 开始，不再支持非标准的 `flags` 参数（[bug 1108382](https://bugzilla.mozilla.org/show_bug.cgi?id=1108382 "FIXED: Remove non-standard flag argument from String.prototype.{search,match,replace}")）。

## 相关链接

*   [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。")
*   [`RegExp.prototype.exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。")
*   [`RegExp.prototype.test()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。")