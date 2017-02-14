<div>**Intl** 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比，数字格式化，日期和时间格式化。[`Collator`](/zh-CN/docs/Web/JavaScript/Reference/Collator "此页面仍未被本地化, 期待您的翻译!")，[`NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/NumberFormat "此页面仍未被本地化, 期待您的翻译!") 和 [`DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/DateTimeFormat "此页面仍未被本地化, 期待您的翻译!") 对象的构造函数是 Intl 对象的属性。本页文档内容包括了这些属性，以及国际化使用的构造器和其他语言的方法等常见的功能。</div>

## 属性

<dl>

<dt>[`Intl.Collator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>语言敏感的字符串对比功能对象，collators 的构造函数</dd>

<dt>[`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>语言敏感的日期和时间格式化功能对象的构造函数</dd>

<dt>[`Intl.NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>语言敏感的数字格式化功能对象的构造函数</dd>

</dl>

## 语言区域识别和判定

国际化的构造函数和其他构造函数的几个语言敏感的方法（可见[See also](#下方)）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。

### locales 参数

locales 参数必须是一个 [BCP 47 语言标记](http://tools.ietf.org/html/rfc5646)的字符串，或者是一个包括多个语言标记的数组。如果 locales 参数未提供或者是 undefined，便会使用运行时默认的 locale。

一个 BCP 47 语言标记代表了一种语言或者区域（两者没有很大的区别）。在其最常见的格式中，它以这样的顺序囊括了这些内容：语言代码，脚本代码，和国家代码，全部由连字符分隔开。例如：

*   `"hi"：印地语`
*   `"de-AT"：在奥地利使用的德语`
*   "zh-Hans-CN"：在中国使用的中文简体

在 BCP 47 中表示语言，脚本，国家（区域）和变体（少用）的语言子标记含义可以在[ IANA 语言子标记注册](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)中找到。

BCP 47 也支持扩展，其中一个和 JavaScript 国际化方法相关的是："u"（Unicode）扩展。它可以用于请求一个自定义区域特定行为的 [`Collator`](/zh-CN/docs/Web/JavaScript/Reference/Collator "此页面仍未被本地化, 期待您的翻译!")，[`NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/NumberFormat "此页面仍未被本地化, 期待您的翻译!")，或者 [`DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/DateTimeFormat "此页面仍未被本地化, 期待您的翻译!") 对象。例如：

*   "de-DE-u-co-phonebk"：使用德语的电话簿排序变体，这会把元音变音扩展成字符对：ä → ae, ö → oe, ü → ue。
*   "th-TH-u-nu-thai"：在数字格式中使用泰语的数值表示（๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙）
*   `"ja-JP-u-ca-japanese"：在日期和时间格式化中使用日本的日历表示方式，所以 2013 会表示为平成 25。`

### 语言区域判定

locales 参数，在除去所有的 Unicode 扩展之后，会被转化成来自应用的优先请求。运行时拿它和可用的语言区域做对比然后选择出最合适的一个。有两种匹配算法：“查找” 匹配遵循 [BCP 47](http://tools.ietf.org/html/rfc5646) 中指定的查找算法；“最佳命中” 匹配器会让运行时至少提供一个语言区域，但合适请求的结果可能会比查找算法的要多。如果应用没有提供一个 locales 参数，或者运行时没有一个匹配请求的语言区域，那么会使用运行时默认的语言区域。匹配器可以使用 options 参数的一个属性来进行选择（见下方）。

如果选中的语言标记有一个 Unicode 扩展子字符串，这个扩展会用于自定义构造对象或者方法的行为。每一个构造函数或者方法仅支持 Unicode 扩展定义的 key 的一个子集，和依赖于语言标记的支持的值。例如，“co” 这个 key（collation）只在 [`Collator`](/zh-CN/docs/Web/JavaScript/Reference/Collator "此页面仍未被本地化, 期待您的翻译!") 中支持，它的值 “phonebk” 只在德语中支持。

### options 参数

options 参数必须是一个对象，其属性值在不同的构造函数和方法中会有所变化。如果 options 参数未提供或者为 undefined，所有的属性值则使用默认的。

所有语言敏感的构造函数和方法都支持的一个属性是：localeMatcher 属性，它的值必须是字符串 “lookup” 或者 “best fit”，用于选择上边描述的语言区域匹配算法。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript Internationalization API 1.0 (ECMA-402)  
<small lang="zh-CN">Intl</small>](http://www.ecma-international.org/ecma-402/1.0/#sec-8)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 2.0 (ECMA-402)  
<small lang="zh-CN">Intl</small>](http://www.ecma-international.org/ecma-402/2.0/#sec-8)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 3.0 (ECMA-402)  
<small lang="zh-CN">Intl</small>](http://tc39.github.io/ecma402/#intl-object)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容

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

<th>IE Phone</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

<td><span style="color: #f00;">未实现</span> [1]</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

[1] Starting with Gecko 44 (Firefox 44 / Thunderbird 44 / SeaMonkey 2.41), the Intl API is available on [b2gdroid](https://people.mozilla.org/~fdesre/b2gdroid/).

## 相关链接

*   介绍：[The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
*   构造函数
    *   [`Intl.Collator`](/zh-CN/docs/Web/JavaScript/Reference/Collator "此页面仍未被本地化, 期待您的翻译!")
    *   [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/DateTimeFormat "此页面仍未被本地化, 期待您的翻译!")
    *   [`Intl.NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/NumberFormat "此页面仍未被本地化, 期待您的翻译!")
*   方法
    *   [`String.prototype.localeCompare()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare "localeCompare() 方法返回一个数字来表明调用该函数的字符串（reference string）的排列顺序是否在某个给定的字符串的前面或者后面，或者是一样的（编码中的位置）。")
    *   [`Number.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString "The toLocaleString() method returns a string with a language sensitive representation of this number.")
    *   [`Date.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString "The toLocaleString() 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
    *   [`Date.prototype.toLocaleDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString "toLocaleDateString() 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")
    *   [`Date.prototype.toLocaleTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString "The toLocaleTimeString() 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 locales 和 options 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， locales 和 options 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。")