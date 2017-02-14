**`toJSON()`** 方法返回 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 对象的字符串形式。

## 语法

    dateObj.toJSON()

## 描述

[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 实例引用一个具体的时间点。 调用 `toJSON()` 返回一个 JSON 格式字符串(使用 [`toISOString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString "toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。"))，表示该日期对象的值。默认情况下，这个方法常用于 [JSON](/en-US/docs/Glossary/JSON "JSON: The JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.")序列化[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!")对象。

## 样例

### `toJSON()` 样例

<pre class="brush:js">var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log("Serialized date object: " + jsonDate);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.toJSON</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.44)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>首次定义，于 JavaScript 1.8.5 版本实现。</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.toJSON</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.tojson)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<td>8</td>

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

*   [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
*   [`Date.prototype.toTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString "toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。")
*   [`Date.prototype.toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。")