**`Intl.Collator`**`是用于语言敏感字符串比较的 collators构造函数。`

## 语法

    new Intl.Collator([locales[, options]])
    Intl.Collator.call(this[, locales[, options]])

### 参数

<dl>

<dt>`locales`</dt>

<dd>

可选. 缩写语言代码 (BCP 47 language tag, 例如: cmn-Hans-CN) 的字符串或者这些字符串组成的数组. 关于参数 locales 的一般形式和解释请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。"). 下面的这些 Unicode 扩展键也是被允许的:

<dl>

<dt>`co`</dt>

<dd>某些区域设置的变体归类。 可能的值包括：“big5han”，“dict”，“direct”，“ducet”，“gb2312”，“phonebk”，“phonetic”，“pinyin”，“reformed”，“searchjl”，“stroke” “，”unihan“。值“`standard`” 和 “`search`” 被忽略; 它们被 options 属性用法替换（详见下文）。</dd>

<dt>`kn`</dt>

<dd>是否应使用数字对照，使得 “1”<“2”<“10”。 可能的值为 “true” 和 “false”。 此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。</dd>

<dt>`kf`</dt>

<dd>`首先排序大写或者小写。可能的值为 “upper”，“lower” 或 “false”（使用区域设置的默认值）。` 此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。</dd>

</dl>

</dd>

<dt>`options`</dt>

<dd>

可选. 包含一些或所有的下面属性的对象:

<dl>

<dt>`localeMatcher`</dt>

<dd>使用的 local 的匹配算法. 可能的值有 "lookup" 和 "best fit"; 默认值是 `"best fit"`. 有关此选项的信息, 请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。").</dd>

<dt>`usage`</dt>

<dd>比较是用于排序还是用于搜索匹配的字符串。 可能的值为 “sort” 和 “search”; 默认为 “sort”。</dd>

<dt>`sensitivity`</dt>

<dd>

字符串中的哪些差异应导致结果值为非零(non-zero)。 可能的值有：

*   `"base"`: 只有字母不同的字母比较不相等。例子: `a ≠ b`, `a = á`, `a = A。`
*   `"accent"`: 只有不同的基本字母或重音符号和其他变音符号的字符串比较为不相等。 例如: `a ≠ b`, `a ≠ á`, `a = A。`
*   `"case"`: 只有不同的基本字母或大小写的字符串比较不相等。 Examples: `a ≠ b`, `a = á`, `a ≠ A。`
*   `"variant"`: 字符串的字母，口音和其他变音符号、或不同大小写比较不相等。 也可以考虑其他差异。例如： `a ≠ b`, `a ≠ á`, `a ≠ A`.

`"variant" 的默认值使用``"sort"`; 它的 locale 依赖于使用 `"search"`.

</dd>

<dt>`ignore­Punctua­tion`</dt>

<dd>是否应忽略标点。 可能的值为 true 和 false; 默认值为 false。</dd>

<dt>`numeric`</dt>

<dd>是否应使用数字对照，使得 “1”<“2”<“10”。 可能的值为 “true” 和 “false”。默认值为 “false” 。 此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。实现不需要支持此属性。</dd>

<dt>`caseFirst`</dt>

<dd>`首先排序大写或者小写。可能的值为 “upper”，“lower” 或 “false”（使用区域设置的默认值）。` 此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。实现不需要支持此属性。</dd>

</dl>

</dd>

</dl>

## 描述

`Intl.Collator` 类有一下属性和方法

### 属性

<dl>

<dt>[`Intl.Collator.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>允许向所有对象添加属性。</dd>

</dl>

### 方法

<dl>

<dt>[`Intl.Collator.supportedLocalesOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回包含所支持的所提供语言环境的数组的数组，而不必回退到运行时的默认语言环境。</dd>

</dl>

## `Collator 实例`

### 属性

`Collator 实例从其原型继承以下属性：`

<div>

<dl>

<dt>[`Intl.Collator.prototype.compare`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare "The Intl.Collator.prototype.compare property returns a getter function that compares two strings according to the sort order of this Collator object.")</dt>

<dd>Getter; returns a function that compares two strings according to the sort order of this [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator "The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison.") object.</dd>

<dt>`Intl.Collator.prototype.constructor`</dt>

<dd>A reference to [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator "The Intl.Collator object is a constructor for collators, objects that enable language sensitive string comparison.").</dd>

</dl>

</div>

### 方法

### Collator 实例从其原型继承以下方法：

<div>

<dl>

<dt>[`Intl.Collator.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions "The Intl.Collator.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and collation options computed during initialization of this Collator object.")</dt>

<dd>Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.</dd>

</dl>

</div>

## 例子

### 基本用法

以下示例演示在另一个之前，之后或同级别发生的字符串的不同潜在结果：

<pre class="brush: js">console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
console.log(new Intl.Collator().compare('a', 'a')); // → 0
</pre>

请注意，上述代码中显示的结果可能会因浏览器和浏览器版本而异。 这是因为值是实现特定的。 也就是说，规范仅需要前后值为负和正。

### 使用 `locales`

[`Collator.prototype.compare()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare "此页面仍未被本地化, 期待您的翻译!") 提供的结果在不同语言之间有所不同。为了获得用于您的应用程序的用户界面的语言格式，请确保设定了语言（可能还有一些回退语言）参数：

<pre class="brush: js">// 德语中, ä 使用 a 的排序
console.log(new Intl.Collator('de').compare('ä', 'z'));
// → 一个负值

// 瑞典语中, ä 在 z 的后面
console.log(new Intl.Collator('sv').compare('ä', 'z'));
// → 一个正值
</pre>

### 使用 `options`

[`Collator.prototype.compare()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare "此页面仍未被本地化, 期待您的翻译!") 提供的结果可以使用 options 参数自定义：

<pre class="brush: js">// 德语中, ä 使用 a 作为基本字母
console.log(new Intl.Collator('de', { sensitivity: 'base' }).compare('ä', 'a'));
// → 0

// 瑞典语中, ä 和 a 是单独的基本字母
console.log(new Intl.Collator('sv', { sensitivity: 'base' }).compare('ä', 'a'));
// → 一个正值
</pre>

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
<small lang="zh-CN">Intl.Collator</small>](http://www.ecma-international.org/ecma-402/1.0/#sec-10.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 2.0 (ECMA-402)  
<small lang="zh-CN">Intl.Collator</small>](http://www.ecma-international.org/ecma-402/2.0/#sec-10.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript Internationalization API 4.0 (ECMA-402)  
<small lang="zh-CN">Intl.Collator</small>](http://tc39.github.io/ecma402/#collator-objects)</td>

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>24</td>

<td>12</td>

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

<td>54.0 (54)</td>

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