`**encodeURI()**` 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符区组成的字符才用四个转义字符编码）。

## 语法

    encodeURI(URI)

### 参数

<dl>

<dt>`URI`</dt>

<dd>一个完整的URI.</dd>

</dl>

## 描述

假定一个URI是完整的URI，那么无需对那些保留的并且在URI中有特殊意思的字符进行编码。

`encodeURI` 会替换所有的字符，但不包括以下字符，即使它们具有适当的UTF-8转义序列：

<table class="standard-table">

<tbody>

<tr>

<td class="header">类型</td>

<td class="header">包含</td>

</tr>

<tr>

<td>保留字符</td>

<td>`;` `,` `/` `?` `:` `@` `&` `=` `+` `<td</td>

</tr>

<tr>

<td>非转义的字符</td>

<td>字母 数字 `-` `_` `.` `!` `~` `*` `'` `(` `)`</td>

</tr>

<tr>

<td>数字符号</td>

<td>`#`</td>

</tr>

</tbody>

</table>

请注意，`encodeURI` 自身_无法_产生能适用于HTTP GET 或 POST 请求的URI，例如对于 XMLHTTPRequests, 因为 "&", "+", 和 "=" 不会被编码，然而在 GET 和 POST 请求中它们是特殊字符。然而[`encodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。")这个方法会对这些字符编码。

另外，如果试图编码一个非高-低位完整的代理字符，将会抛出一个 [`URIError`](/zh-CN/docs/Web/JavaScript/Reference/URIError "此页面仍未被本地化, 期待您的翻译!") 错误，例如：

<pre class="brush: js">// 编码高-低位完整字符 ok
console.log(encodeURI('\uD800\uDFFF'));

// 编码单独的高位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uD800'));

// 编码单独的低位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uDFFF'));</pre>

并且需要注意，如果URL需要遵循较新的[RFC3986](http://tools.ietf.org/html/rfc3986)标准，那么方括号是被保留的(给IPv6)，因此对于那些没有被编码的URL部分(例如主机)，可以使用下面的代码：

<pre class="brush: js">function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">encodeURI</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">encodeURI</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-encodeuri-uri)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">encodeURI</small>](https://tc39.github.io/ecma262/#sec-encodeuri-uri)</td>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础功能</td>

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

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础功能</td>

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

*   [`decodeURI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "decodeURI() 方法用于解码由 encodeURI 方法或者其它类似方法编码的统一资源标识符（URI）")
*   [`encodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。")
*   [`decodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。")