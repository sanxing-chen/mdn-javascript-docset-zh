<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

`<font face="Open Sans, Arial, sans-serif">已废弃的 </font>**unescape()**` 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像[`escape`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape "废弃的 escape() 方法生成新的由十六进制转移序列替换的字符串. 使用 encodeURI 或 encodeURIComponent 代替.")里介绍的一样。因为 `unescape` 已经废弃，建议使用 [`decodeURI()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "将先前经过encodeURI函数或者其他类似方法编码过的字符串进行解码.")或者[`decodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "decodeURIComponent()方法对先前经过encodeURIComponent函数或者其他类似方法编码过的字符串进行解码") 替代本方法。

<div class="note">**Note:** Do not use `unescape` to decode URIs, use `decodeURI` instead.</div>

## Syntax

    unescape(str)

### Parameters

<dl>

<dt>`str`</dt>

<dd>A string to be decoded.</dd>

</dl>

## Description

The `unescape` function is a property of the _global object_.

## Examples

<pre class="brush: js">unescape("abc123");     // "abc123"
unescape("%E4%F6%FC");  // "äöü"
unescape("%u0107");     // "ć"
</pre>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">unescape</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-unescape-string)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">unescape</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined in the (informative) Compatibility Annex B</td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">unescape</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-15.1.2.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

</tbody>

</table>

## Browser compatibility

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

## See also

*   [`decodeURI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "将先前经过encodeURI函数或者其他类似方法编码过的字符串进行解码.")
*   [`decodeURIComponent`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "decodeURIComponent()方法对先前经过encodeURIComponent函数或者其他类似方法编码过的字符串进行解码")