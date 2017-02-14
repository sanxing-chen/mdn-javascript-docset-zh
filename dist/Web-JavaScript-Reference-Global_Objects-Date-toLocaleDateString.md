## 概述

`**toLocaleDateString()**` 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， `locales` 和 `options` 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。

## 语法

<pre class="syntaxbox"><var>dateObj</var>.toLocaleDateString([locales [, options]])</pre>

### 参数

 查看[浏览器兼容性](#Browser_Compatibility "#Browser_Compatibility")小节，看下哪些浏览器支持 `locales` 和 `options` 参数，还可以参看[例子： 检测 `locales` 和 `options` 参数支持情况](#Example:_Checking_for_support_for_locales_and_options_arguments)。

<dl>

<dt>`locales`</dt>

<dd>

Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions."). The following Unicode extension keys are allowed:

<dl>

<dt>`nu`</dt>

<dd>Numbering system. Possible values include: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.</dd>

<dt>`ca`</dt>

<dd>Calendar. Possible values include: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.</dd>

</dl>

</dd>

<dt>`options`</dt>

<dd>

Optional. An object with some or all of the following properties:

<dl>

<dt>`localeMatcher`</dt>

<dd>The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see the [Intl page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object. This page documents these properties as well as functionality common to the internationalization constructors and other language sensitive functions.").</dd>

<dt>`timeZone`</dt>

<dd>The time zone to use. The only value implementations must recognize is `"UTC"`; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the [IANA time zone database](https://www.iana.org/time-zones), such as `"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.</dd>

<dt>`hour12`</dt>

<dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible values are `true` and `false`; the default is locale dependent.</dd>

<dt>`formatMatcher`</dt>

<dd>The format matching algorithm to use. Possible values are `"basic"` and `"best fit"`; the default is `"best fit"`. See the following paragraphs for information about the use of this property.</dd>

</dl>

The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:

*   `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
*   `weekday`, `year`, `month`, `day`
*   `year`, `month`, `day`
*   `year`, `month`
*   `month`, `day`
*   `hour`, `minute`, `second`
*   `hour`, `minute`

Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the `formatMatcher` property: A [fully specified `"basic"` algorithm](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) and an implementation dependent `"best fit"` algorithm.

<dl>

<dt>`weekday`</dt>

<dd>The representation of the weekday. Possible values are `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`era`</dt>

<dd>The representation of the era. Possible values are `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`year`</dt>

<dd>The representation of the year. Possible values are `"numeric"`, `"2-digit"`.</dd>

<dt>`month`</dt>

<dd>The representation of the month. Possible values are `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`day`</dt>

<dd>The representation of the day. Possible values are `"numeric"`, `"2-digit"`.</dd>

<dt>`hour`</dt>

<dd>The representation of the hour. Possible values are `"numeric"`, `"2-digit"`.</dd>

<dt>`minute`</dt>

<dd>The representation of the minute. Possible values are `"numeric"`, `"2-digit"`.</dd>

<dt>`second`</dt>

<dd>The representation of the second. Possible values are `"numeric"`, `"2-digit"`.</dd>

<dt>`timeZoneName`</dt>

<dd>The representation of the time zone name. Possible values are `"short"`, `"long"`.</dd>

</dl>

</dd>

</dl>

The default value for each date-time component property is `undefined`, but if the `weekday`, `year`, `month`, `day` properties are all `undefined`, then `year`, `month`, and `day` are assumed to be "numeric".

## 例子

### 例子：使用`toLocaleDateString`

没有指定语言环境（locale）时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString without arguments depends on the implementation,
// the default locale, and the default time zone
date.toLocaleDateString();
// → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles</pre>

### 例子：检测 `locales` 和 `options` 参数支持情况

`locales` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（implementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出一个 `RangeError` 异常，反之会忽略参数。

<pre class="brush: js">function toLocaleDateStringSupportsLocales() {
    try {
        new Date().toLocaleDateString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
</pre>

### 例子：使用`locales`

下例展示了本地化日期格式的一些变化。为了在应用的用户界面得到某种语言的日期格式，必须确保使用 `locales` 参数指定了该语言（可能还需要设置某些回退语言）。

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
alert(date.toLocaleDateString("en-US"));
// → "12/19/2012"

// British English uses day-month-year order
alert(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// Korean uses year-month-day order
alert(date.toLocaleDateString("ko-KR"));
// → "2012\. 12\. 20."

// Arabic in most Arabic speaking countries uses real Arabic digits
alert(date.toLocaleDateString("ar-EG"));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢</span>"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
alert(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
alert(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
</pre>

### 例子：使用`options`

可以使用 `options` 参数来自定义 `toLocaleDateString` 方法返回的字符串。

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
alert(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20\. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
alert(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"
</pre>

## 性能

当格式化大量日期时，最好创建一个 [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat") 对象，然后使用该对象 [`format`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format "/en-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat/format") 属性提供的方法。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 3rd Edition. Implemented in JavaScript 1.0</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype.toLocaleDateString</small>](http://www.ecma-international.org/ecma-262/5.1/sec-15.9.5.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype.toLocaleDateString</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.tolocaledatestring)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript Internationalization API Specification, 1<sup>st</sup> Edition](http://www.ecma-international.org/ecma-402/1.0/#sec-13.3.2)</td>

<td>Standard</td>

<td>Defines `locales` and `options` arguments.</td>

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

<tr>

<td>`locales` and `options` arguments</td>

<td>24</td>

<td>[29](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29)</td>

<td>11</td>

<td>15</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>`locales` and `options` arguments</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span>

[bug 864843](https://bugzilla.mozilla.org/show_bug.cgi?id=864843 "FIXED: Enable ECMAScript Internationalization API for b2gdroid")

</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "DateTimeFormat实例集成以下原型的属性:")
*   [`Date.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
*   [`Date.prototype.toLocaleTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")