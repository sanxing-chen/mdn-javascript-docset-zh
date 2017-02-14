<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

`已废弃的**compile**`**`()`** 方法被用于在脚本执行过程中（重新）编译正则表达式。与`RegExp`构造函数基本一样。

## 语法

    regexObj.compile(pattern, flags)

### 参数

<dl>

<dt>`pattern`</dt>

<dd>正则表达式的文本 。</dd>

<dt>`flags`</dt>

<dd>

如果指定，标志可以具有以下值的任意组合：

<dl>

<dt>`g`</dt>

<dd>全局匹配</dd>

<dt>`i`</dt>

<dd>忽略大小写</dd>

<dt>`m`</dt>

<dd>多行;让开始和结束字符（^ 和 $）工作在多行模式工作（例如，^ 和 $ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的最开始和最末尾处。</dd>

<dt>`y`</dt>

<dd>黏度; 在目标字符串中，只从正则表达式的lastIndex属性指定的显示位置开始匹配（并且不试图从任何之后的索引匹配）。</dd>

</dl>

</dd>

</dl>

## 描述

`不推荐compile方法。你可以使用` `RegExp` 构造函数来得到相同效果。

## 示例

### `使用compile()`

以下展示如何用新模式和新标志来重新编译正则表达式。

<pre class="brush: js">var regexObj = new RegExp("foo", "gi"); 
regexObj.compile("new foo", "g");
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
<small lang="zh-CN">RegExp.prototype.compile</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.compile)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">RegExp.prototype.compile</small>](https://tc39.github.io/ecma262/#sec-regexp.prototype.compile)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>

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

## 相关链接

*   [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!")