## 概述

`**encodeURIComponent()**`是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。

## 语法

<pre class="syntaxbox">encodeURIComponent(str);</pre>

### 参数

<dl>

<dt>`str`</dt>

<dd>String. URI 的组成部分。</dd>

</dl>

## 描述

`encodeURIComponent` 转义除了字母、数字、`(`、`)`、`.`、`!`、`~`、`*`、`'`、`-`和`_`之外的所有字符。

注意，如果试图编码一个非高-低位完整的代理字符，将会抛出一个 [`URIError`](/zh-CN/docs/Web/JavaScript/Reference/URIError "此页面仍未被本地化, 期待您的翻译!") 错误，例如：

<pre class="brush: js">// 高低位完整
alert(encodeURIComponent('\uD800\uDFFF'));

// 只有高位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uD800'));

// 只有低位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uDFFF')); 
</pre>

为了避免服务器收到不可预知的请求，对任何用户输入的作为URI部分的内容你都需要用encodeURIComponent进行转义。比如，一个用户可能会输入"`Thyme &time=again`"作为`comment`变量的一部分。如果不使用encodeURIComponent对此内容进行转义，服务器得到的将是`comment=Thyme%20&time=again`。请注意，"&"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是`comment=Thyme`，另一个则是`time=again`），而不是一个键值对。

对于 [`application/x-www-form-urlencoded`](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm) (POST) 这种数据方式，空格需要被替换成 '+'，所以通常使用 `encodeURIComponent` 的时候还会把 "%20" 替换为 "+"。

为了更严格的遵循 [RFC 3986](http://tools.ietf.org/html/rfc3986)（它保留 !, ', (, ), 和 *），即使这些字符并没有正式划定 URI 的用途，下面这种方式是比较安全的：

<pre class="brush: js">function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}
</pre>

## 示例

下面这个例子提供了 UTF-8 下 `Content-Disposition` 和 `Link` 的服务器响应头信息的参数（例如 UTF-8 文件名)：

<pre class="brush: js">var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''" 
             + encodeRFC5987ValueChars(fileName);

console.log(header); 
// 输出 "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // 注意，仅管 RFC3986 保留 "!"，但 RFC5987 并没有
        // 所以我们并不需要过滤它
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // 下面的并不是 RFC5987 中 URI 编码必须的
            // 所以对于 |`^ 这3个字符我们可以稍稍提高一点可读性
            replace(/%(?:7C|60|5E)/g, unescape);
}
</pre>

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
<small lang="zh-CN">encodeURIComponent</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">encodeURIComponent</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-encodeuricomponent-uricomponent)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">encodeURIComponent</small>](https://tc39.github.io/ecma262/#sec-encodeuricomponent-uricomponent)</td>

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
*   [`encodeURI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "encodeURI() 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符区组成的字符才用四个转义字符编码）。")
*   [`decodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。")