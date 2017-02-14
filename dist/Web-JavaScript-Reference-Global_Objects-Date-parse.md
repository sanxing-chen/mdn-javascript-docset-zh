## 概要

`**Date.parse()**` 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。

不推荐在ES5之前使用Date.parse方法，因为字符串的解析完全取决于实现。直到至今，不同宿主在如何解析日期字符串上仍存在许多差异，因此最好还是手动解析日期字符串（在需要适应不同格式时库能起到很大帮助）。     

## 语法

显示调用：

    Date.parse(dateString)

`隐式调用：`

    new Date(dateString)

### 参数

<dl>

<dt>`dateString`</dt>

<dd>一个符合 [RFC2822](http://tools.ietf.org/html/rfc2822#page-14 "http://tools.ietf.org/html/rfc2822#page-14") 或 ISO 8601 日期格式的字符串（其他格式也许也支持，但结果可能与预期不符）。</dd>

<dt>`返回值`</dt>

<dd>一个表示从1970-1-1 00:00:00 UTC到给定日期字符串所表示时间的毫秒数的数值。如果参数不能解析为一个有效的日期，则返回[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")。</dd>

</dl>

## 描述

`parse` 方法接受一个日期字符串（例如 "`Dec 25, 1995`"），并返回从1970-1-1 00:00:00 UTC到该日期字符串所表示日期的毫秒数。该方法在基于字符串值设置日期值时很有用，例如结合使用[`setTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime "setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。") 方法和 [`Date()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 构造函数。

`parse` 方法接受一个表示时间的字符串，返回相应的时间值。该方法可以接受符合 RFC2822 / IETF 日期语法 ([RFC2822 Section 3.3](http://tools.ietf.org/html/rfc2822#page-14 "http://tools.ietf.org/html/rfc2822#page-14")) 的字符串，如 "`Mon, 25 Dec 1995 13:30:00 GMT`"。该方法能够理解美国大陆时区的缩写，但是为了更通用，应该使用时区偏移，如 "`Mon, 25 Dec 1995 13:30:00 +0430`" （格林威治的子午线向东偏移4小时30分钟）。如果没有指定时区，默认使用本地时区。

GMT 和 UTC 被看作相等。 如果 [RFC2822 Section 3.3](http://tools.ietf.org/html/rfc2822#page-14 "http://tools.ietf.org/html/rfc2822#page-14") 格式中不包含时区信息时，会以本地时区来解析日期字符串。

由于在解析日期字符串时存在偏差会导致结果不一致，因此推荐始终手动解析日期字符串，特别是不同的ECMAScript实现会把诸如“2015-10-12 12:00:00”的字符串解析为NaN，UTC或者本地时间。

### ECMAScript 5 <span class="caps">ISO</span>-8601 日期格式支持

另外，日期时间字符串也可以使用 [ISO 8601](http://www.w3.org/TR/NOTE-datetime "http://www.w3.org/TR/NOTE-datetime") 格式。例如，"`2011-10-10`" （仅日期）或 "`2011-10-10T14:48:00`" （日期和时间）能够作为参数被传递和解析。 <span style="line-height: 1.5;">The local time zone is used to interpret arguments in </span>[RFC2822 Section 3.3](http://tools.ietf.org/html/rfc2822#page-14 "http://tools.ietf.org/html/rfc2822#page-14")<span style="line-height: 1.5;"> format that do not contain time zone information.</span>

Note that while time zone specifiers are used during date string parsing to properly interpret the argument, they do not affect the value returned, which is always the number of milliseconds between January 1, 1970 00:00:00 UTC and the point in time represented by the argument.

Because `parse` is a static method of `Date`, you always use it as `Date.parse()`, rather than as a method of a `Date` object you created.

### Differences in assumed time-zone

The dateString of "`March 7, 2014`" returns a different date than "`2014-03-07`" unless the local time-zone is UTC. When converting a dateString of "`March 7, 2014`" the local time-zone is assumed. When converting a dateString of "`2014-03-07`" the UTC time-zone is assumed. This results in two different Date values depending on the format of the string that is being converted.

## 例子

### 例子：使用 `Date.parse()`

如果 `IPOdate` 是一个日期对象，则可以把其设置为本地时间 1995年8月9日。如下：

<pre class="brush: js">IPOdate.setTime(Date.parse("Aug 9, 1995"));
</pre>

其他例子：

<pre class="brush: js">// Returns 807937200000 in time zone GMT-0300, and other values in other
// timezones, since the argument does not specify a time zone.
Date.parse("Aug 9, 1995");
</pre>

<pre class="brush: js">// Returns 807926400000 no matter the local time zone.
Date.parse("Wed, 09 Aug 1995 00:00:00 GMT");
</pre>

<pre class="brush: js">// Returns 807937200000 in timezone GMT-0300, and other values in other
// timezones, since there is no time zone specifier in the argument.
Date.parse("Wed, 09 Aug 1995 00:00:00");
</pre>

<pre class="brush: js">// Returns 0 no matter the local time zone.
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
</pre>

<pre class="brush: js">// Returns 14400000 in timezone GMT-0400, and other values in other 
// timezones, since there is no time zone specifier in the argument.
Date.parse("Thu, 01 Jan 1970 00:00:00");
</pre>

<pre class="brush: js">// Returns 14400000 no matter the local time zone.
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.parse</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>ISO 8601 format added</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.parse</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date.parse)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<td>ISO 8601 format</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2.0)</td>

<td>9</td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>ISO 8601 format</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<div class="warning">

Safari浏览器不兼容 "2016-01-01"的写法,请使用 "2016/01/01"

</div>

## 相关链接

*   [`Date.UTC()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC "Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。")