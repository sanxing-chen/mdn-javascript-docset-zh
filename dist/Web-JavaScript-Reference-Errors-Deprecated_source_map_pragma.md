## 信息

<pre class="syntaxbox">Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。") 的警告。不会终止 JavaScript 的执行。

## 哪里错了?

在 JavaScript 源码中使用了已废弃的 source map 语法。

JavaScript 源代码经常被组合和压缩，以便能更高效地从服务器获取它们。使用了 [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)，调试器就可以将正在执行的代码映射到原始源文件。

因为 IE 浏览器只要页面在 `//@cc_on` 之后的都会被IE JScript引擎解释为打开条件编译后，所以 source map 的规范更改了语法。[条件编译注释](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) 是 IE 的一个小特色，但是它破坏了 [jQuery](https://bugs.jquery.com/ticket/13274) 和其他库的 source map。

## 示例

### 废弃的语法

使用 "@" 符号的语法已经被废弃了。

<pre class="brush: js example-bad">//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
</pre>

### 标准语法

使用 "#" 符号代替。

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

或者，您也可以为 JavaScript 文件设置 header，以避免添加注释：

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

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

<td>New syntax</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[24](/en-US/Firefox/Releases/24 "Released on 2013-09-17.") (24)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td>New syntax</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>24.0 (24)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关

*   [How to use a source map – Firefox Tools documentation](/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
*   [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)