**`Intl.NumberFormat是对语言敏感的格式化数字类的构造器类`**

## 语法

    new Intl.NumberFormat([locales[, options]])
    Intl.NumberFormat.call(this[, locales[, options]])

### 参数

<dl>

<dt>`locales`</dt>

<dd>

可选.缩写语言代码(BCP 47 language tag,例如:cmn-Hans-CN)的字符串或者这些字符串组成的数组. 关于参数locales的一般形式和解释请参见[Intl page](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。"). 下面的这些Unicode扩展键也是被允许的:

译者注:下面扩展的使用方式是language[-scripts][-region]-u-nu-*,例如:zh-u-nu-hanidec(表示中文十进制数字) 

<dl>

<dt>`nu`</dt>

<dd>要使用的编号系统。可能的值有: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"(中文十进制数字)`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.</dd>

</dl>

</dd>

<dt>`options`</dt>

<dd>

可选. 包含一些或所有的下面属性的类:

<dl>

<dt>`localeMatcher`</dt>

<dd>使用的local的匹配算法. 可能的值有"lookup"和"best fit"; 默认值是 `"best fit"`. 有关此选项的信息, 请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。").</dd>

<dt>`style`</dt>

<dd>格式化时使用的样式.可能的值有“decimal”表示纯数字格式 , “currency”表示货币格式, 和`"percent"表示百分比格式`; 默认值是 `"decimal"`.</dd>

<dt>`currency`</dt>

<dd>在货币格式化中使用的货币符号. 可能的值是_ISO_的货币代码 (the ISO 4217 currency codes,) 例如`"USD"` 表示美元, `"EUR"` 表示欧元, or `"CNY"是人民币` — 更多请参考 [Current currency & funds code list](http://www.currency-iso.org/en/home/tables/table-a1.html). 没有默认值,如果样式是“currency”,必须提供货币属性.</dd>

<dt>`currencyDisplay`</dt>

<dd>如何在货币格式化中显示货币. 可能的值有`"symbol"表示`使用本地化的货币符号例如€, `"code"表示`使用国际标准组织货币代码, `"name"` 表示使用本地化的货币名称，如 `"dollar"`; 默认值是 `"symbol"`.</dd>

<dt>`useGrouping`</dt>

<dd>是否使用分组分隔符，如千位分隔符或千/万/亿分隔符.可能的值是true和false,默认值是true.</dd>

</dl>

下面的属性分为两组：minimumintegerdigits,minimumfractiondigits,maximumfractiondigits作为一组,minimumsignificantdigits和maximumsignificantdigits作为一组.如果定义了第二组中的任意一个属性,则忽略第一组的设置.

<dl>

<dt>`minimumIntegerDigits`</dt>

<dd>使用的整数数字的最小数目.可能的值是从1到21,默认值是1.</dd>

<dt>`minimumFractionDigits`</dt>

<dd>使用的小数位数的最小数目.可能的值是从0到20;默认为普通的数字和百分比格式为0;默认为货币格式是由国际标准化组织列表( [ISO 4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) )提供(如果列表中没有提供则值为2).</dd>

<dt>`maximumFractionDigits`</dt>

<dd>使用的小数位数的最大数目。可能的值是从0到20；纯数字格式的默认值是minimumfractiondigits和3中大的那一个；货币格式默认值是minimumfractiondigits和国际标准化组织列表(如果列表中没有提供则值为2)中大的那一个;百分比格式默认值是minimumfractiondigits和0中大的那一个。</dd>

<dt>`minimumSignificantDigits`</dt>

<dd>使用的有效数字的最小数目。可能的值是从1到21；默认值是1。</dd>

<dt>`maximumSignificantDigits`</dt>

<dd>使用的有效数字的最大数量。可能的值是从1到21；默认是minimumsignificantdigits.</dd>

</dl>

</dd>

</dl>

## 描述

### 属性

<dl>

<dt>[`Intl.NumberFormat.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>允许将属性添加到所有对象上。</dd>

</dl>

### 方法

<dl>

<dt>[`Intl.NumberFormat.supportedLocalesOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/supportedLocalesOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回一个数组包含的那些被提供的可以被支持的locales,运行时的默认的locale不会出现在该数组中.</dd>

</dl>

## `NumberFormat` 实例

### 属性

`NumberFormat` 实例继承一下原型的属性:

<div>

<dl>

<dt>`Intl.NumberFormat.prototype.constructor`</dt>

<dd>A reference to `Intl.NumberFormat`.</dd>

<dt>[`Intl.NumberFormat.prototype.format`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format "The Intl.NumberFormat.prototype.format property returns a getter function that formats a number according to the locale and formatting options of this NumberFormat object.")</dt>

<dd>Getter; returns a function that formats a number according to the locale and formatting options of this [`NumberFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "The Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting.") object.</dd>

</dl>

</div>

### 方法

`NumberFormat` 实例继承一下原型的方法:

<div>

<dl>

<dt>[`Intl.NumberFormat.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions "The Intl.NumberFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this NumberFormat object.")</dt>

<dd>Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.</dd>

</dl>

</div>

## 例子

### 基本用法

在不指定locale的基本用法中, 一个使用默认locale和默认options的字符串被返回.

<pre class="brush: js">var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// 如果在美国英语地区 → '3,500' 
</pre>

### 使用`locales`

这个例子显示了一些本地化的数字格式的一些变化。为了获得用于您的应用程序的用户界面的语言格式，请确保设定了语言（可能还有一些回退语言）参数：

<pre class="brush: js">var number = 123456.789;

// 德语使用逗号作为小数点,使用.作为千位分隔符
console.log(new Intl.NumberFormat('de-DE').format(number));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// 通过编号系统中的nu扩展键请求, 例如`中文十进制数字`
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

//当请求的语言不被支持,例如巴里,包含一个回滚语言印尼,这时候就会使用印尼语
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
</pre>

### 可用的选项

可用的选项参数,返回的值可以被设置成想要的形式：

<pre class="brush: js">var number = 123456.789;

// 请求一个货币格式
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

// 只显示三个有效数字
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000
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
<small lang="zh-CN">Intl.NumberFormat</small>](http://www.ecma-international.org/ecma-402/1.0/#sec-11.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 2.0 (ECMA-402)  
<small lang="zh-CN">Intl.NumberFormat</small>](http://www.ecma-international.org/ecma-402/2.0/#sec-11.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 4.0 (ECMA-402)  
<small lang="zh-CN">Intl.NumberFormat</small>](http://tc39.github.io/ecma402/#numberformat-objects)</td>

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

## 参见

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