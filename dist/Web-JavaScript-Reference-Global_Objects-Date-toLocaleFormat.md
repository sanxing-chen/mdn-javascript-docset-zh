<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

非标准方法 **`toLocaleFormat()`** 按特定的格式将一个日期转换成一个字符串。 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "DateTimeFormat实例集成以下原型的属性:") 是符合标准的格式化日期的替代方法。另见更新的(newer)版本的 [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")方法.

## 语法

    dateObj.toLocaleFormat(formatString)

### 参数

<dl>

<dt>`formatString`</dt>

<dd>与C语言中的 [`strftime()`](http://www.opengroup.org/onlinepubs/007908799/xsh/strftime.html) 方法的参数形式要求相同的格式字符串。</dd>

</dl>

## 描述

`toLocaleFormat()` 方法通过格式化生成的日期或时间提供了更好的软件层面的控制(provides greater software control over the formatting of the generated date and/or time)。用操作系统的地点来月份和星期几的名称本地化。然而，However, ordering of the day and month and other localization tasks are not handled automatically since you have control over the order in which they occur. You should take care that the format string is localized properly according to the user's system settings. Be aware that the locale used is not necessarily the same as the locale of the browser.

Extension and XULRunner developers should know that just loading the format string from a `.dtd` or `.properties` file using a `chrome://_somedomain_/locale/_somefile.ext_` URI should be **avoided**, as the `.dtd`/`.properties` file and the `toLocaleFormat()` method does not not necessarily use the same locale, which could result in odd looking or even ambiguous or unreadable dates.

Also note that the behavior of the used locale depends on the platform, and the user might customize the locale used, so using the system locale the choose the format string might in some cases not even be adequate. You might consider using some of the more general `toLocale*` methods of the [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") object or doing your own custom localization of the date to be displayed using some of the `get*` methods of the [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") object instead of using this method.

## 示例

### Using `toLocaleFormat()`

<pre class="brush: js">var today = new Date();
var date = today.toLocaleFormat('%A, %B %e, %Y'); // Bad example
</pre>

In this example, `toLocaleFormat()` returns a string such as "Wednesday, October 3, 2007". Note that the format string in this example is not properly localized, which will result in the problems described above.

## 腻子(Polyfill)

When using the [DateJS](https://github.com/abritinthebay/datejs/wiki/Format-Specifiers) library you can polyfill [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。") like this:

<pre class="brush: js">if (!Date.prototype.toLocaleFormat) {
    (function() {
        Date.prototype.toLocaleFormat = function(formatString) {
            return this.format(formatString);
        };
    }());
}</pre>

## 标准

不属于任何标准。在JavaScript 1.6中被实现。

## 兼容性

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 另见

*   [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "DateTimeFormat实例集成以下原型的属性:")
*   [`Date.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
*   [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
*   [`Date.prototype.toLocaleTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")