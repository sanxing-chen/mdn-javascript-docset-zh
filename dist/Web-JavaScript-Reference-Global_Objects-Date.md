## 摘要

创建 `Date` 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

    var today = new Date();
    var today = new Date(1453094034000); // by timestamp(accurate to the millimeter)
    var birthday = new Date('December 17, 1995 03:24:00');
    var birthday = new Date('1995-12-17T03:24:00');
    var birthday = new Date(1995, 11, 17);
    var birthday = new Date(1995, 11, 17, 3, 24, 0);

    var unixTimestamp = Date.now(); // in milliseconds

## 构造函数

<pre class="brush: js">new Date();
new Date(_value_);
new Date(_dateString_);
new Date(<var>year</var>, <var>month</var>[, <var>day</var>[, <var>hour</var>[, <var>minutes</var>[, <var>seconds</var>[, <var>milliseconds</var>]]]]]);</pre>

<div class="note">**Note:** 需要注意的是只能通过调用 Date 构造函数来实例化日期对象：以常规函数调用它（即不加 [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) 操作符）将会返回一个字符串，而不是一个日期对象。另外，不像其他JavaScript 类型，`Date 对象没有字面量格式。`</div>

### 参数

<div class="note">**Note:** 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为13或者分钟数为70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70)等于new Date(2013, 2, 1, 1, 10)，都表示时间2013-03-01T01:10:00。</div>

<div class="note">**Note:** 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要世界协调时，使用 new Date({{jsxref("Date.UTC()", "Date.UTC(...)")}}) 和相同参数</div>

<dl>

<dt>`value`</dt>

<dd>代表自1970年1月1日00:00:00 (世界标准时间) 起经过的毫秒数。</dd>

</dl>

<dl>

<dt>`dateString`</dt>

<dd>表示日期的字符串值。该字符串应该能被 [`Date.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse "Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。") 方法识别（符合 [IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14 "http://tools.ietf.org/html/rfc2822#page-14") 或 [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)）。</dd>

</dl>

<dl>

<dt>`year`</dt>

<dd>代表年份的整数值。为了避免2000年问题最好指定4位数的年份; 使用 `1998`, 而不要用 `98`.</dd>

</dl>

<dl>

<dt>`month`</dt>

<dd>代表月份的整数值从0（1月）到11（12月）。</dd>

<dt>day</dt>

<dd>代表一个月中的第几天的整数值，从1开始。</dd>

<dt>`hour`</dt>

<dd>代表一天中的小时数的整数值 (24小时制)。</dd>

</dl>

<dl>

<dt>`minute`</dt>

<dd>分钟数。</dd>

<dt>`second`</dt>

<dd>秒数。</dd>

<dt>`millisecond`</dt>

<dd>表示时间的毫秒部分的整数值。</dd>

</dl>

## 描述

*   如果没有输入任何参数，则Date的构造器会依据系统设置的当前时间来创建一个Date对象。
*   如果提供了至少两个参数，其余的参数均会默认设置为1（如果没有提供day参数）或者0。
*   JavaScript的时间是由世界标准时间（UTC）1970年1月1日开始，用毫秒计时，一天由86,400,000毫秒组成。Date对象的范围是-100,000,000天至100,000,000天（等效的毫秒值）。
*   JavaScript的Date对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间。
*   JavaScript 的Date对象提供了数个UTC时间的方法，也相应提供了当地时间的方法。UTC，也就是我们所说的格林威治时间，指的是time中的世界时间标准。而当地时间则是指执行JavaScript的客户端电脑所设置的时间。
*   以一个函数的形式来调用JavaScript的Date对象（i.e., 不使用 [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) 操作符）会返回一个代表当前日期和时间的字符串。

## 属性

<dl>

<dt>[`Date.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype "Date.prototype 属性表示 Date 构造函数的原型。")</dt>

<dd>允许为 `Date` 实例对象添加属性。</dd>

<dt>Date.length</dt>

<dd>`Date.length` 的值是 7。这是该构造函数可接受的参数个数。</dd>

</dl>

## 方法

<dl>

<dt>[`Date.now()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now "Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。")</dt>

<dd>返回自 1970-1-1 00:00:00  UTC (时间标准时间)至今所经过的毫秒数。</dd>

<dt>[`Date.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse "Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。")</dt>

<dd>解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。</dd>

<dt>[`Date.UTC()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC "Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。")</dt>

<dd>接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。</dd>

</dl>

## `Date` 实例

所有的 `Date` 实例都继承自 [`Date.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype "Date.prototype 属性表示 Date 构造函数的原型。")。修改 `Date `构造函数的原型对象会影响到所有的 `Date` 实例。

### Date.prototype 方法

### Getter

<dl>

<dt>[`Date.prototype.getDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate "根据本地时间，返回一个指定的日期对象为一个月中的第几天。")</dt>

<dd>根据本地时间返回指定日期对象的月份中的第几天（1-31）。</dd>

<dt>[`Date.prototype.getDay()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay "getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。")</dt>

<dd>根据本地时间返回指定日期对象的星期中的第几天（0-6）。</dd>

<dt>[`Date.prototype.getFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "根据本地时间，返回一个指定日期对象的年份。")</dt>

<dd>根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。</dd>

<dt>[`Date.prototype.getHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours "getHours() 方法根据本地时间，返回一个指定的日期对象的小时。")</dt>

<dd>根据本地时间返回指定日期对象的小时（0-23）。</dd>

<dt>[`Date.prototype.getMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds "getMilliseconds() 方法，根据本地时间，返回一个指定的日期对象的毫秒数。")</dt>

<dd>根据本地时间返回指定日期对象的微秒（0-999）。</dd>

<dt>[`Date.prototype.getMinutes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes "getMinutes() 方法根据本地时间，返回一个指定的日期对象的分钟数。")</dt>

<dd>根据本地时间返回指定日期对象的分钟（0-59）。</dd>

<dt>[`Date.prototype.getMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth "根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。")</dt>

<dd>根据本地时间返回指定日期对象的月份（0-11）。</dd>

<dt>[`Date.prototype.getSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds "getSeconds() 方法根据本地时间，返回一个指定的日期对象的秒数。")</dt>

<dd>根据本地时间返回指定日期对象的秒数（0-59）。</dd>

<dt>[`Date.prototype.getTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime "getTime() 方法返回一个时间的格林威治时间数值。")</dt>

<dd>返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。</dd>

<dt>[`Date.prototype.getTimezoneOffset()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset "getTimezoneOffset() 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。")</dt>

<dd>返回当前时区的时区偏移。</dd>

<dt>[`Date.prototype.getUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate "getUTCDate() 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天")</dt>

<dd>Returns the day (date) of the month (1-31) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCDay()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay "getUTCDay() 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。")</dt>

<dd>Returns the day of the week (0-6) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。")</dt>

<dd>Returns the year (4 digits for 4-digit years) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours "getUTCHours() 方法以世界时为标准，返回一个指定的日期对象的小时数。")</dt>

<dd>Returns the hours (0-23) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds "getUTCMilliseconds() 方法以世界时为标准，返回一个指定的日期对象的毫秒数。")</dt>

<dd>Returns the milliseconds (0-999) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCMinutes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes "getUTCMinutes() 方法以世界时为标准，返回一个指定的日期对象的分钟数。")</dt>

<dd>Returns the minutes (0-59) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth "getUTCMonth() 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。")</dt>

<dd>Returns the month (0-11) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getUTCSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds "getUTCSeconds() 方法以世界时为标准，返回一个指定的日期对象的秒数。")</dt>

<dd>Returns the seconds (0-59) in the specified date according to universal time.</dd>

<dt>[`Date.prototype.getYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear "The getYear() method returns the year in the specified date according to local time. Because getYear does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear method.")<span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>Returns the year (usually 2-3 digits) in the specified date according to local time. Use [`getFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "根据本地时间，返回一个指定日期对象的年份。") instead.</dd>

</dl>

### Setter

<dl>

<dt>[`Date.prototype.setDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate "setDate() 方法根据本地时间来指定一个日期对象的天数。")</dt>

<dd>根据本地时间为指定的日期对象设置月份中的第几天。</dd>

<dt>[`Date.prototype.setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。")</dt>

<dd>根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。</dd>

<dt>[`Date.prototype.setHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours "setHours() 方法根据本地时间为一个日期对象设置小时数，返回从1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。")</dt>

<dd>根据本地时间为指定日期对象设置小时数。</dd>

<dt>[`Date.prototype.setMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds "setMilliseconds() 方法会根据本地时间设置一个日期对象的豪秒数。")</dt>

<dd>根据本地时间为指定日期对象设置毫秒数。</dd>

<dt>[`Date.prototype.setMinutes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes "setMinutes() 方法根据本地时间为一个日期对象设置分钟数。")</dt>

<dd>根据本地时间为指定日期对象设置分钟数。</dd>

<dt>[`Date.prototype.setMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth "setMonth() 方法根据本地时间为一个日期对象设置月份。")</dt>

<dd>根据本地时间为指定日期对象设置月份。</dd>

<dt>[`Date.prototype.setSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds "setSeconds() 方法根据本地时间设置一个日期对象的秒数。")</dt>

<dd>根据本地时间为指定日期对象设置秒数。</dd>

<dt>[`Date.prototype.setTime()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime "setTime() 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。")</dt>

<dd>通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。</dd>

<dt>[`Date.prototype.setUTCDate()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate "setUTCDate() 方法就是根据全球时间设置特定date对象的日期。")</dt>

<dd>根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。</dd>

<dt>[`Date.prototype.setUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear "setUTCFullYear() 方法根据世界标准时间为一个具体日期设置年份。")</dt>

<dd>根据世界时设置 Date 对象中的年份（四位数字）。</dd>

<dt>[`Date.prototype.setUTCHours()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>根据世界时设置 Date 对象中的小时 (0 ~ 23)。</dd>

<dt>[`Date.prototype.setUTCMilliseconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。</dd>

<dt>[`Date.prototype.setUTCMinutes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>根据世界时设置 Date 对象中的分钟 (0 ~ 59)。</dd>

<dt>[`Date.prototype.setUTCMonth()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>根据世界时设置 Date 对象中的月份 (0 ~ 11)。</dd>

<dt>[`Date.prototype.setUTCSeconds()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds "此 setUTCSeconds() 方法为一个依据国际通用时间的特定日期设置秒数。")</dt>

<dd>根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。</dd>

<dt>[`Date.prototype.setYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear "The setYear() method sets the year for a specified date according to local time. Because setYear does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the setFullYear method.")<span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>setYear() 方法用于设置年份。请使用 [`setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。") 方法代替。</dd>

</dl>

### Conversion getter

<dl>

<dt>[`Date.prototype.toDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString "toDateString() 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。")</dt>

<dd>以人类易读（human-readable）的形式返回该日期对象日期部分的字符串。</dd>

<dt>[`Date.prototype.toISOString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString "toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。")</dt>

<dd>把一个日期转换为符合 ISO 8601 扩展格式的字符串。</dd>

<dt>[`Date.prototype.toJSON()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON "toJSON() 方法返回 Date 对象的字符串形式。")</dt>

<dd>使用 [`toISOString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString "toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。") 返回一个表示该日期的字符串。为了在 [`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串。若转换的函数被指定，则被序列化的值的每个属性都会经过该函数的转换和处理；若转换的数组被指定，只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。") 方法中使用。</dd>

<dt>[`Date.prototype.toGMTString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString "The toGMTString() method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by toGMTString varies according to the platform and browser, in general it should represent a human readable date string.")<span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>返回一个基于 GMT (UT) 时区的字符串来表示该日期。请使用 [`toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。") 方法代替。</dd>

<dt>[`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")</dt>

<dd>返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。</dd>

<dt>[`Date.prototype.toLocaleFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat "非标准方法 toLocaleFormat() 按特定的格式将一个日期转换成一个字符串。 Intl.DateTimeFormat 是符合标准的格式化日期的替代方法。另见更新的(newer)版本的 Date.prototype.toLocaleDateString()方法.")<span title="This API has not been standardized."></span></dt>

<dd>使用格式字符串将日期转换为字符串。</dd>

<dt>[`Date.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")</dt>

<dd>返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联（locality sensitive）。覆盖了 [`Object.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。") 方法。</dd>

<dt>[`Date.prototype.toLocaleTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")</dt>

<dd>返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。</dd>

<dt>[`Date.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toSource "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span></dt>

<dd>返回一个与[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!")等价的原始字符串对象，你可以使用这个值去生成一个新的对象。重写了 [`Object.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") 这个方法。</dd>

<dt>[`Date.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString "toString() 方法返回一个字符串，表示该Date对象。")</dt>

<dd>返回一个表示该日期对象的字符串。覆盖了[`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

<dt>[`Date.prototype.toTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString "toTimeString() 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。")</dt>

<dd>以人类易读格式返回日期对象时间部分的字符串。</dd>

<dt>[`Date.prototype.toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString "toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。")</dt>

<dd>把一个日期对象转换为一个以UTC时区计时的字符串。</dd>

<dt>[`Date.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf "valueOf() 方法返回一个日期对象的原始值。")</dt>

<dd>返回一个日期对象的原始值。覆盖了 [`Object.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "valueOf() 方法返回指定原始值.") 方法。</dd>

</dl>

<div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides">

<div><span style="font-weight: 700;">Methods inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__defineGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter), [`__defineSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter), [`hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty), [`isPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf), [`__lookupGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter), [`__lookupSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter), [`__noSuchMethod__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod), [`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable), [`unwatch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch), [`watch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch)</div>

</div>

## 例子

### 例子：创建一个日期对象的几种方法

下例展示了用来创建一个日期对象的多种方法。

<pre class="brush: js">var today = new Date();
`var today = new Date(1453094034000);// by timestamp(accurate to the millimeter)`
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995,11,17);
var birthday = new Date(1995,11,17,3,24,0);</pre>

### 例子：两位数年份表示 1900 - 1999 年

为了能够创建和获取 0 到 99 之间的年份，应该使用 [`Date.prototype.setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。") 和 [`Date.prototype.getFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "根据本地时间，返回一个指定日期对象的年份。") 方法。

<pre class="brush: js">var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// 弃用的方法, 98在这里被映射为1998
date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)</pre>

### 例子：计算经过的时间

下例展示了如何计算两个日期对象的时间差：

<pre class="brush: js">// 使用 Date 对象
var start = Date.now();

// 这里进行耗时的方法调用: 
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 运行时间的毫秒值</pre>

<pre class="brush: js">// 使用内建的创建方法
var start = new Date();

// 这里进行耗时的方法调用: 
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值</pre>

<pre dir="ltr" class="brush: js">// to test a function and get back its return
function printElapsedTime (fTest) {
    var nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now();
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds"); 
    return vReturn;
}
yourFunctionReturn = printElapsedTime(yourFunction);
</pre>

<div class="note">

注意：在支持 [Web Performance API](https://developer.mozilla.org/en-US/docs/DOM/window.performance "/en-US/docs/DOM/window.performance") 的高精细度（high-resolution）时间功能的浏览器中，[window.performance.now ](https://developer.mozilla.org/en-US/docs/DOM/window.performance.now "/en-US/docs/DOM/window.performance.now")提供的所经过的时间比 `Date.now` 更可靠和精确。

</div>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-date-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.1.</td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [2]</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span> [1]</td>

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

[1] 时间解析在某些浏览器中会出现问题: [3/14/2012 blog from danvk Comparing FF/IE/Chrome on Parsing Date Strings](http://dygraphs.com/date-formats.html)

[2] 在IE8中不支持 [ISO8601 Date 解析](https://msdn.microsoft.com/en-us//library/ie/ff743760(v=vs.94).aspx) , 其他版本中可能出现问题 [issues when parsing dates](http://dygraphs.com/date-formats.html)