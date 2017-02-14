## 概述

**`Date.prototype`** 属性表示 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 构造函数的原型。

<div>

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`Date.prototype` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>false</td>

</tr>

<tr>

<td>enumerable</td>

<td>false</td>

</tr>

<tr>

<td>configurable</td>

<td>true</td>

</tr>

</tbody>

</table>

</div>

## 描述

[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") 实例继承自[`Date.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype "Date.prototype 属性表示 Date 构造函数的原型。")。 可以通过修改构造函数的原型对象来影响 Date 实例继承的属性和方法。

为了兼容千禧年计算（也即考虑到 2000 年），应该总是指定完整的年份，例如，使用 1998，而不是 98。为了方便以完整的格式指定年份， JavaScript 包含了相应的方法[`getFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear "根据本地时间，返回一个指定日期对象的年份。")，[`setFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear "setFullYear() 方法根据本地时间为一个日期对象设置年份。")， [`getUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear "getUTCFullYear() 以世界时为标准，返回一个指定的日期对象的年份。") 和[`setUTCFullYear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear "setUTCFullYear() 方法根据世界标准时间为一个具体日期设置年份。")。

## 属性

<dl>

<dt>Date.prototype.constructor</dt>

<dd>返回创建该实例的函数。默认情况下，是 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date "创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。") `Date` 构造函数。</dd>

</dl>

<div>

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Properties inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__parent__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent), [`__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto)</div>

</div>

</div>

## 方法

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

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Methods inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__defineGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter), [`__defineSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter), [`hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty), [`isPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf), [`__lookupGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter), [`__lookupSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter), [`__noSuchMethod__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod), [`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable), [`unwatch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch), [`watch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch)</div>

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

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Date.prototype</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Date.prototype</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object)</td>

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