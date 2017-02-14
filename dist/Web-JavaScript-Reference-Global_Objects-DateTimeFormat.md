<div>**`Intl.DateTimeFormat是根据语言来格式化日期和时间的类的构造器类`**</div>

## 语法

    new Intl.DateTimeFormat([locales[, options]])
    Intl.DateTimeFormat.call(this[, locales[, options]])

### 参数

<dl>

<dt>`locales`</dt>

<dd>

可选.缩写语言代码(BCP 47 language tag,例如:cmn-Hans-CN)的字符串或者这些字符串组成的数组. 关于参数locales的一般形式和解释请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。"). 下面的这些Unicode扩展键也是被允许的:

译者注:下面这两种扩展的使用方式是language[-scripts][-region]-u-nu-* 和 language[-scripts][-region]-u-ca-* ,例如:zh-u-nu-hanidec(表示中文十进制数字) 和 zh-u-ca-chinese(表示中国日历,比如壬辰年冬月8日) ,也可以 nu 和 ca 组合使用 比如 使用 zh-u-ca-chinese-nu-hanidec 格式化Date.now()的返回值类似于"丙申年冬月九日"

`nu`

<dl>

<dd>编号系统. 可能的值包括: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.</dd>

<dt>`ca`</dt>

<dd>日历. 可能的值包括: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.</dd>

</dl>

</dd>

<dt>`options`</dt>

<dd>

可选. 包含一些或所有的下面属性的类:

<dl>

<dt>`localeMatcher`</dt>

<dd>使用的local的匹配算法. 可能的值有"lookup"和"best fit"; 默认值是 `"best fit"`. 有关此选项的信息, 请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。").</dd>

<dt>`timeZone`</dt>

<dd>使用的时区. 这唯一的值实现必须被标准世界时间(UTC)所识别。默认值是运行时的默认时区. [IANA time zone database](https://www.iana.org/time-zones)中的时区名称可能会被识别, 例如`"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.</dd>

<dt>`hour12`</dt>

<dd>是否使用12小时时间制(而不是24小时的时间). 可能的值是`true` 或 `false`; 默认值是根据locale来自动决定的(译者注:中国地区的默认值为true).</dd>

<dt>`formatMatcher`</dt>

<dd>`format的匹配算法.可能的值有"basic"和"best fit";默认值是"best fit".有关此属性使用的信息，参见以下段落。`</dd>

<dt>`日期时间插件被格式化输出时可以使用的属性集合描述。实现需要支持是以下子集中的其中一个(译者注:当weekday,year等这些属性一个也不使用的时候,在cmn-Hans-CN中相当于使用集合``year`, `month`, `day`, `hour`, `minute`, `second并且它们的值都是numeric)：`</dt>

</dl>

*   `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
*   `weekday`, `year`, `month`, `day`
*   `year`, `month`, `day`
*   `year`, `month`
*   `month`, `day`
*   `hour`, `minute`, `second`
*   `hour`, `minute`

实现可能支持其他的子集，并通过对所有可用的子集对比找到最匹配的子集。通过 formatMatcher属性可以设置两种算法用于对比和选择子集:  [完全匹配`"basic"算法`](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher)  和 一种依赖于“best fit”算法的实现.

<dl>

<dt>`weekday`</dt>

<dd>工作日的展现方式.可能的值有 `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`era`</dt>

<dd>纪元的展现方式. 可能的值有 `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`year`</dt>

<dd>年的展现方式.  可能的值有 `"numeric"`, `"2-digit"`.</dd>

<dt>`month`</dt>

<dd>月的展现方式. 可能的值有 `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"`.</dd>

<dt>`day`</dt>

<dd>日的展现方式.可能的值有 `"numeric"`, `"2-digit"`.</dd>

<dt>`hour`</dt>

<dd>时的展现方式.可能的值有 `"numeric"`, `"2-digit"`.</dd>

<dt>`minute`</dt>

<dd>分钟的展现方式.可能的值有 `"numeric"`, `"2-digit"`.</dd>

<dt>`second`</dt>

<dd>秒的展现方式. 可能的值有`"numeric"`, `"2-digit"`.</dd>

<dt>`timeZoneName`</dt>

<dd>时区名称的展现方式.可能的值有 `"short"`, `"long"`.</dd>

</dl>

每个日期时间组件属性的默认值都是[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined"."),但是若所有的组件属性都是[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined"."),那么`year`, `month`, and `day` 的值就都被认为是"`numeric`".

</dd>

</dl>

## 描述

### 属性

<dl>

<dt>[`Intl.DateTimeFormat.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>允许将属性添加到所有对象上。</dd>

</dl>

### 方法

<dl>

<dt>[`Intl.DateTimeFormat.supportedLocalesOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/supportedLocalesOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.</dd>

</dl>

## `DateTimeFormat` 实例

### 属性

`DateTimeFormat实例集成以下原型的属性`:

<div>

<dl>

<dt>`Intl.DateTimeFormat.prototype.constructor`</dt>

<dd>A reference to [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting.").</dd>

<dt>[`Intl.DateTimeFormat.prototype.format`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format "The Intl.DateTimeFormat.prototype.format property returns a getter function that formats a date according to the locale and formatting options of this Intl.DateTimeFormat object.")</dt>

<dd>Getter; returns a function that formats a date according to the locale and formatting options of this [`DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting.") object.</dd>

</dl>

</div>

### 方法

`DateTimeFormat实例集成以下原型的方法`:

<div>

<dl>

<dt>[`Intl.DateTimeFormat.prototype.formatToParts()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts "The Intl.DateTimeFormat.prototype.formatToParts() method allows locale-aware formatting of strings produced by DateTimeFormat formatters.")</dt>

<dd>Returns an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.") of objects representing the date string in parts that can be used for custom locale-aware formatting.</dd>

<dt>[`Intl.DateTimeFormat.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions "The Intl.DateTimeFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.")</dt>

<dd>Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.</dd>

</dl>

</div>

## 实例

### 使用 `DateTimeFormat`

不指定locale时,DateTimeFormat使用默认的locale 和 默认的 options

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//参数未填时使用默认的locale和默认的时区
console.log(new Intl.DateTimeFormat().format(date));
//如果是在洛杉矶那么值为 → "12/19/2012"
</pre>

### 使用`locales`

这个例子显示了本地化日期和时间格式的一些变化。为了获得用于您的应用程序的用户界面的语言格式，请确保使用locales参数确保指定语言（可能还有一些回退语言）：

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 下面是假定的所在时区
// 洛杉矶(America/Los_Angeles for the US)

// 美式英语(US English) 使用  month-day-year 格式
console.log(new Intl.DateTimeFormat('en-US').format(date));
// → "12/19/2012"

// 英式英语(British English) 使用 day-month-year 格式
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// → "20/12/2012"

// 韩国使用 year-month-day 格式
console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// → "2012\. 12\. 20."

//大部分阿拉伯国家使用阿拉伯字母(real Arabic digits)
console.log(new Intl.DateTimeFormat('ar-EG').format(date));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢</span>"

`//在日本，应用可能想要使用日本日历,
//2012 是平成24年（平成是是日本天皇明仁的年号,由1989年1月8日起开始计算直至现在）`
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
// → "平成24/12/20"

`//当请求一个语言可能不支持，如巴厘(ban)，若有备用的语言印尼语(id)，
//那么将使用印尼语(id)`
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// → "20/12/2012"
</pre>

### 使用`options`

可以使用 `options `参数来自定义 <font face="Consolas, Liberation Mono, Courier, monospace">日期时间格式化</font>方法返回的字符串。

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

`//请求参数(options)中包含参数星期(weekday)，并且该参数的值为长类型(long)`
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
// → "Donnerstag, 20\. Dezember 2012"

// `一个应用使用 世界标准时间(UTC),并且UTC使用短名字(short)展示`
options.timeZone = 'UTC';
options.timeZoneName = 'short';`//若不写这一行那么仍然显示的是世界标准时间；但是GMT三个字母不会显示`
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "Thursday, December 20, 2012, GMT"

// 有时你想变得更精确
options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZoneName: 'short'
};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00 pm AEDT"

// 使用24小时制
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false
};
console.log(date.toLocaleString('en-US', options));
// → "12/19/2012, 19:00:00"
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

<td>[ECMAScript Internationalization API 1.0 (ECMA-402)  
<small lang="zh-CN">Intl.DateTimeFormat</small>](http://www.ecma-international.org/ecma-402/1.0/#sec-12.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 2.0 (ECMA-402)  
<small lang="zh-CN">Intl.DateTimeFormat</small>](http://www.ecma-international.org/ecma-402/2.0/#sec-12.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 4.0 (ECMA-402)  
<small lang="zh-CN">Intl.DateTimeFormat</small>](http://tc39.github.io/ecma402/#datetimeformat-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

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

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>24</td>

<td>[29](/en-US/Firefox/Releases/29 "Released on 2014-04-29.") (29)</td>

<td>11</td>

<td>15</td>

<td>10</td>

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

<th>IE Phone</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>10</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

<div>

*   Introduction: [The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
*   Constructors
    *   [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator "The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison.")
    *   [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "The Intl.DateTimeFormat object is a constructor for objects that enable language sensitive date and time formatting.")
    *   [`Intl.NumberFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting.")
*   Methods
    *   [`String.prototype.localeCompare()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare "The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.")
    *   [`Number.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this number.")
    *   [`Date.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.")
    *   [`Date.prototype.toLocaleDateString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.")
    *   [`Date.prototype.toLocaleTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.")

</div>