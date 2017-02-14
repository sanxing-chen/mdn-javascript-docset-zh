对_正则表达式_匹配_字符串_时，**`[@@match]()`**方法用于获取匹配结果。

## 语法

<pre class="syntaxbox"><var>regexp</var>[Symbol.match](str)</pre>

### 参数

<dl>

<dt>`str`</dt>

<dd>match 的目标参数是[`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")</dd>

</dl>

### 返回值

match 方法会返回一个数组，它包括整个匹配结果，和通过捕获组匹配到的结果，如果没有匹配到则返回null

## 描述

这个方法在 [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。") 的内部调用。例如，下面的两个方法返回相同结果。

<pre class="brush: js">'abc'.match(/a/);

/a/[Symbol.match]('abc');</pre>

这个方法为自定义 `RegExp` 子类中的匹配行为而存在。

## 示例

### 直接调用

这个方法的使用方式和 [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。") 相同，不同之处是 `this` 和参数顺序。

<pre class="brush: js">var re = /[0-9]+/g;
var str = '2016-01-02';
var result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

### 在子类中使用`@@match`

[`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!") 的子类可以覆写 `[@@match]()`方法来修改默认行为。

<pre class="brush: js">class MyRegExp extends RegExp {
  [Symbol.match](str) {
    var result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      }
    };
  }
}

var re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
var str = '2016-01-02';
var result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">RegExp.prototype[@@match]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype-@@match)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">RegExp.prototype[@@match]</small>](https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

<td>[49](/en-US/Firefox/Releases/49 "Released on 2016-09-13.") (49)</td>

<td><span style="color: #f00;">未实现</span></td>

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

<td>49.0 (49)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 另见

*   [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。")
*   [`RegExp.prototype[@@replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace "此页面仍未被本地化, 期待您的翻译!")
*   [`RegExp.prototype[@@search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search "此页面仍未被本地化, 期待您的翻译!")
*   [`RegExp.prototype[@@split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split "此页面仍未被本地化, 期待您的翻译!")
*   [`RegExp.prototype.exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。")
*   [`RegExp.prototype.test()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。")