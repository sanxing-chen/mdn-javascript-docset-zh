<div>

<div>

<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

</div>

</div>

## 概览

废弃的 `**escape()**` 方法生成新的由十六进制转义序列替换的字符串. 使用 [`encodeURI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "encodeURI() 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符区组成的字符才用四个转义字符编码）。") 或 [`encodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。") 代替.

## 语法

    escape(str)

### 参数

<dl>

<dt>`str`</dt>

<dd>待编码的字符串.</dd>

</dl>

## 描述

`escape` 函数是全局对象的属性. 特色字符如: @*_+-./ 被排除在外.

字符的16进制格式值,当该值小于等于0xFF时,用一个2位转移序列: %xx 表示. 大于的话则使用4位序列:%**u**xxxx 表示.

## 示例

<pre class="brush: js">escape("abc123");     // "abc123"
escape("äöü");        // "%E4%F6%FC"
escape("ć");          // "%u0107"

// special characters
escape("@*_+-./");    // "@*_+-./"</pre>

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
<small lang="zh-CN">escape</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (informative) Compatibility Annex B</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">escape</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-escape-string)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>

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

## 其他链接

*   [`encodeURI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "encodeURI() 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符区组成的字符才用四个转义字符编码）。")
*   [`encodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。")