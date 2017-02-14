<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

`**uneval()**` 函数创建一个代表对象的源代码的字符串。

## 语法

<pre class="syntaxbox">uneval(<var>object</var>)</pre>

### 参数

<dl>

<dt>`object`</dt>

<dd>JavaScript 表达式或者语句</dd>

</dl>

### 返回值

<dl>

<dd>表示给定对象的源代码的字符串</dd>

</dl>

<div class="note">**注意:** 无法通过此方法获取对象的 JSON 形式</div>

## 描述

`uneval()` 是一个顶级函数并且不与任何对象关联

## 实例

<pre class="brush:js">var a = 1;
uneval(a); // returns a String containing 1

var b = "1";
uneval(b) // returns a String containing "1"

uneval(function foo(){}); // returns "(function foo(){})"

var a = uneval(function foo(){return 'hi'});
var foo = eval(a);
foo(); // returns "hi"
</pre>

## 规范

没有被标准化.

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

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。")
*   [`JSON.stringify`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串。")
*   [`JSON.parse`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法可以将一个 JSON 字符串解析成为一个 JavaScript 值。在解析过程中，还可以选择性的修改某些属性的原始解析值。")
*   [`Object.toSource`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.")