**`String`** 全局对象是用来构造字符串对象或字符序列的构造函数。

## 语法

通常，我们都使用如下所示字符串的字面量写法：

<pre class="syntaxbox">'string text'
"string text"
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"</pre>

你也能使用 `String` 函数将其他值生成或转换成字符串：

<pre class="syntaxbox">String(thing)
new String(thing)</pre>

### 参数

<dl>

<dt>`thing`</dt>

<dd>任何可以被转换成字符串的值。</dd>

</dl>

### 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为[模板字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)：

<pre>`hello world` `hello! world!` `hello ${who}` escape `<a>${who}</a>`</pre>

### 转义字符

除了普通的可打印字符以外，一些特殊有特殊功能的字符可以通过转义字符的形式放入字符串中：

<table class="standard-table">

<thead>

<tr>

<th scope="col">Code</th>

<th scope="col">Output</th>

</tr>

</thead>

<tbody>

<tr>

<td>`\0`</td>

<td>空字符</td>

</tr>

<tr>

<td>`\'`</td>

<td>单引号</td>

</tr>

<tr>

<td>`\"`</td>

<td>`双引号`</td>

</tr>

<tr>

<td>`\\`</td>

<td>反斜杠</td>

</tr>

<tr>

<td>`\n`</td>

<td>换行</td>

</tr>

<tr>

<td>`\r`</td>

<td>`回车`</td>

</tr>

<tr>

<td>`\v`</td>

<td>垂直制表符</td>

</tr>

<tr>

<td>`\t`</td>

<td>水平制表符</td>

</tr>

<tr>

<td>`\b`</td>

<td>退格</td>

</tr>

<tr>

<td>`\f`</td>

<td>换页</td>

</tr>

<tr>

<td>`\uXXXX`</td>

<td>unicode 码</td>

</tr>

<tr>

<td>`\u{X}` ... `\u{XXXXXX}`</td>

<td>unicode codepoint<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></td>

</tr>

<tr>

<td>`\xXX`</td>

<td>Latin-1 字符(x小写)</td>

</tr>

</tbody>

</table>

<div class="note">和其他语言不同，javascript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行 。</div>

### 长字符串

有时，你的代码可能含有很长的字符串。你可能想将这样的字符串写成多行，而不是让这一行无限延长或着被编辑器折叠。有两种方法可以做到这一点。

其一，可以使用 + 运算符将多个字符串连接起来，如下所示：

    let longString = "This is a very long string which needs " +
                     "to wrap across multiple lines because " +
                     "otherwise my code is unreadable.";

其二，可以在每行末尾使用反斜杠字符（“\”），以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。 如下所示：

    let longString = "This is a very long string which needs \
    to wrap across multiple lines because \
    otherwise my code is unreadable.";

使用这两种方式会创建相同的字符串。

## 描述

字符串对于保存可以以文本形式表示的数据非常有用。 一些常用的字符串操作有：查询[字符串长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)，使用 [+ 和 +=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators) 运算符来构建和连接字符串，使用 [indexOf](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 方法检查某一子字符串在父字符串中的位置，又或是使用 [substring](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 方法提取从父字符串中提取子字符串。

### 从字符串中获取单个字符

获取字符串的某个字符有两种方法。 第一种是使用 [`charAt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt "charAt() 方法返回字符串中指定位置的字符。") 方法：

<pre class="brush: js">return 'cat'.charAt(1); // returns "a"
</pre>

另一种 (在ECMAScript 5中有所介绍) 是把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引：

<pre class="brush: js">return 'cat'[1]; // returns "a"
</pre>

使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。 (更多的信息请参阅 [`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")。 )

### 字符串比较

熟练使用 C 语言的开发者经常使用 `strcmp 函数来比较字符串，但在 `JavaScript 中，你只需要使用[比较操作符(>/</>=/<=)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)：

<pre class="brush: js">var a = "a";
var b = "b";
if (a < b) // true
  print(a + " is less than " + b);
else if (a > b)
  print(a + " is greater than " + b);
else
  print(a + " and " + b + " are equal.");
</pre>

使用从字符串实例继承而来的 [`localeCompare`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare "localeCompare() 方法返回一个数字来表明调用该函数的字符串（reference string）的排列顺序是否在某个给定的字符串的前面或者后面，或者是一样的（编码中的位置）。") 方法也能达到同样的效果。 

### 基本字符串和<font face="Consolas, Liberation Mono, Courier, monospace">字符串</font>对象的区别

请注意区分 JavaScript 字符串对象和基本字符串值 . ( 对于 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean "Boolean 对象是一个布尔值的对象包装器。") 和[`Numbers`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。") 也同样如此.)

字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串。JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串可转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

<pre class="brush: js">var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
</pre>

当使用 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。")时，基本字符串和<font face="Consolas, Liberation Mono, Courier, monospace">字符串</font>对象也会产生不同的结果。`eval 会将`基本字符串作为源代码处理; 而<font face="Consolas, Liberation Mono, Courier, monospace">字符串</font>对象则被看作对象处理, 返回对象。 例如：

<pre class="brush: js">s1 = "2 + 2";               // creates a string primitive
s2 = new String("2 + 2");   // creates a String object
console.log(eval(s1));      // returns the number 4
console.log(eval(s2));      // returns the string "2 + 2"
</pre>

由于上述原因, 当一段代码在需要使用基本字符串的时候却使用了字符串对象就会导致执行失败(虽然一般情况下程序员们并不需要考虑这样的问题)。

利用 [`valueOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf "valueOf() 方法返回一个String对象的原始值（primitive value）。") 方法，我们可以将字符串对象转换未其对应的基本字符串。

<pre class="brush: js">console.log(eval(s2.valueOf())); // returns the number 4
</pre>

<div class="note">**注意:** 其他的将字符串对象转换成基本字符串的方法可以及参考 [`StringView` – a C-like representation of strings based on typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView "/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView").</div>

## 属性

<dl>

<dt>[`String.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/prototype "String.prototype 这个属性表示了 String 其原型对象。")</dt>

<dd>可以为 String 对象增加新的属性。</dd>

</dl>

## 方法

<dl>

<dt>[`String.fromCharCode()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode "静态 String.fromCharCode() 方法返回使用指定的Unicode值序列创建的字符串。")  </dt>

<dd> **通过一串 Unicode 创建字符串。**</dd>

</dl>

<dl>

<dt>[`String.fromCodePoint()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>通过一串 码点 创建字符串。</dd>

</dl>

<div>

<dl>

<dt>[`String.raw()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw "String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @，是用来获取一个模板字符串的原始字面量值的。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>通过模板字符串穿创建字符串。</dd>

</dl>

</div>

## 字符串通用方法

应该避免在 Javascript 1.6 （Firefox 浏览器的 JS 引擎）中使用（虽然也支持）将其他对象转化为字符的方法，因为方法并没有成为 ECMA 标准：

<pre class="brush: js">var num = 15;
console.log(String.replace(num, /5/, '2'));
</pre>

<span style="background-color: #ffffff; color: #4d4e53; font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 21px;">[Generics](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods "JavaScript 数组对象是一个用于构造数组的全局对象; 它们是高级的，列表式的对象。") 在 Javascript 1.6 中同样支持[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array "JavaScript 数组对象是一个用于构造数组的全局对象; 它们是高级的，列表式的对象。")。</span>

下面使一些针对不支持这些方法的补救措施：

<pre class="brush: js">/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function () {
    'use strict';

    var i,
        // We could also build the array of methods with the following, but the
        //   getOwnPropertyNames() method is non-shimable:
        // Object.getOwnPropertyNames(String).filter(function (methodName)
        //  {return typeof String[methodName] === 'function'});
        methods = [
            'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
            'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
            'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
            'toLocaleUpperCase', 'localeCompare', 'match', 'search',
            'replace', 'split', 'substr', 'concat', 'slice'
        ],
        methodCount = methods.length,
        assignStringGeneric = function (methodName) {
            var method = String.prototype[methodName];
            String[methodName] = function (arg1) {
                return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
            };
        };

    for (i = 0; i < methodCount; i++) {
        assignStringGeneric(methods[i]);
    }
}());</pre>

## `String` 实例

### 属性

<dl>

<dt>`String.prototype.constructor`</dt>

<dd>用于创造对象的原型对象的特定的函数。</dd>

<dt>[`String.prototype.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length "length 属性表示一个字符串的长度。")</dt>

<dd>返回了字符串的长度。</dd>

<dt>_N_</dt>

<dd>Used to access the character in the _N_th position where _N_ is a positive integer between 0 and one less than the value of [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length "length 属性表示一个字符串的长度。"). 这些属性都是“只读”性质，不能编辑。</dd>

</dl>

<div>

<div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides">

<div><span style="font-weight: 700;">Properties inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__parent__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent), [`__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto)</div>

</div>

</div>

<span style="line-height: 1.5;"></span>

### 跟HTML无关的方法

<dl>

<dt>[`String.prototype.charAt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt "charAt() 方法返回字符串中指定位置的字符。")</dt>

<dd>返回特定位置的字符。</dd>

<dt>[`String.prototype.charCodeAt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt "charCodeAt() 方法返回一个 0 到 65535 之间的整数，代表索引处字符的 UTF-16 编码单元（在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元）。如果你希望得到整点编码值，使用 codePointAt() 。")</dt>

<dd>返回表示给定索引的字符的Unicode的值。</dd>

<dt>[`String.prototype.codePointAt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt "codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回使用UTF-16编码的给定位置的值的非负整数。</dd>

<dt>[`String.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat "concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。")</dt>

<dd>连接两个字符串文本，并返回一个新的字符串。</dd>

<dt>[`String.prototype.contains()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/contains "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断一个字符串里是否包含其他字符串。</dd>

<dt>[`String.prototype.endsWith()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith "endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断一个字符串的结尾是否包含其他字符串中的字符。</dd>

<dt>[`String.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf "indexOf() 方法返回指定值在字符串对象中首次出现的位置。从 fromIndex 位置开始查找，如果不存在，则返回 -1。")</dt>

<dd>从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。</dd>

<dt>[`String.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf "lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。")</dt>

<dd>从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。</dd>

<dt>[`String.prototype.localeCompare()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare "localeCompare() 方法返回一个数字来表明调用该函数的字符串（reference string）的排列顺序是否在某个给定的字符串的前面或者后面，或者是一样的（编码中的位置）。")</dt>

<dd>Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.</dd>

<dt>[`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。")</dt>

<dd>使用正则表达式与字符串相比较。</dd>

<dt>[`String.prototype.normalize()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize "normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回调用字符串值的Unicode标准化形式。</dd>

<dt>[`String.prototype.quote()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/quote "将字符串中包含的特殊字符进行转义(反斜杠),然后在字符串两边各加上一个双引号(")并返回,并不修改原字符串.")<span title="This API has not been standardized."></span></dt>

<dd>Wraps the string in double quotes ("`"`").</dd>

<dt>[`String.prototype.repeat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat "repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回指定重复次数的由元素组成的字符串对象。</dd>

<dt>[`String.prototype.replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。")</dt>

<dd>被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。</dd>

<dt>[`String.prototype.search()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search "search() 方法执行一个查找，看该字符串对象与一个正则表达式是否匹配。")</dt>

<dd>对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。</dd>

<dt>[`String.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice "slice() 方法提取字符串中的一部分，并返回这个新的字符串。")</dt>

<dd>摘取一个字符串区域，返回一个新的字符串。</dd>

<dt>[`String.prototype.split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split "split（）方法通过将字符串分成子字符串，从而将一个String对象拆分为一个字符串数组。")</dt>

<dd>通过分离字符串成字串，将字符串对象分割成字符串数组。</dd>

<dt>[`String.prototype.startsWith()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith "startsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>判断字符串的起始位置是否匹配其他字符串中的字符。</dd>

<dt>[`String.prototype.substr()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr "substr() 方法返回字符串中从指定位置开始到指定长度的子字符串。")</dt>

<dd>Returns the characters in a string beginning at the specified location through the specified number of characters.</dd>

<dt>[`String.prototype.substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring "substring() 返回字符串两个索引之间（或到字符串末尾）的子串。")</dt>

<dd>返回在字符串中指定另个下标之间的字符。</dd>

<dt>[`String.prototype.toLocaleLowerCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase "toLocaleLowerCase()方法返回调用该方法的字符串被转换成小写之后的值，转换规则根据任何本地化特定的大小写映射。")</dt>

<dd>根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，[`toLowerCase`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。")的返回值是一致的。</dd>

<dt>[`String.prototype.toLocaleUpperCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase "toLocaleUpperCase() 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。")</dt>

<dd>根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，[`toUpperCase`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase "toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。")的返回值是一致的。</dd>

<dt>[`String.prototype.toLowerCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。")</dt>

<dd>将字符串转换成小写并返回。</dd>

<dt>[`String.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toSource "toSource() 方法返回一个代表对象的源代码。")<span title="This API has not been standardized."></span></dt>

<dd>Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") method.</dd>

<dt>[`String.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString "toString() 方法返回指定对象的字符串形式。")</dt>

<dd>返回用字符串表示的特定对象。重写 [`Object.prototype.toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个表示该对象的字符串。") 方法。</dd>

<dt>[`String.prototype.toUpperCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase "toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。")</dt>

<dd>将字符串转换成大写并返回。</dd>

<dt>[`String.prototype.trim()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim "trim() 方法会删除一个字符串两端的空白字符。在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。")</dt>

<dd>从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。</dd>

<dt>[`String.prototype.trimLeft()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft "移除字符串左端的连续空白符.")<span title="This API has not been standardized."></span></dt>

<dd>从字符串的左侧去除空格。</dd>

<dt>[`String.prototype.trimRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight "移除字符串右端的连续空白符.")<span title="This API has not been standardized."></span></dt>

<dd>从字符串的右侧去除空格。</dd>

<dt>[`String.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf "valueOf() 方法返回一个String对象的原始值（primitive value）。")</dt>

<dd>返回特定对象的原始值。重写 [`Object.prototype.valueOf`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "valueOf() 方法返回指定对象的原始值。") 方法。</dd>

</dl>

### HTML wrapper methods

下面的方法被限制使用，因为只对可用的HTML表情和属性提供部分支持。

<dl>

<dt>[`String.prototype.anchor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor "anchor() 方法创建一个 <a> HTML 锚元素，被用作超文本靶标（hypertext target）。")</dt>

<dd>`[<a name="name">](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-name)` (hypertext target)</dd>

<dt>[`String.prototype.big()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big "big()方法的作用是创建一个使字符串显示大号字体的<big>标签。")</dt>

<dd>[`<big>`](/zh-CN/docs/Web/HTML/Element/big "The HTML Big Element (<big>) 会使字体加大一号（例如从小号(small)到中号(medium)，从大号(large)到加大(x-large)），最大不超过浏览器的最大字体。")</dd>

<dt>[`String.prototype.blink()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink "The blink() method creates a <blink> HTML element that causes a string to blink.")</dt>

<dd>[`<blink>`](/zh-CN/docs/Web/HTML/Element/blink "HTML Blink Element (<blink>)不是标准元素，它会使包含其中的文本闪烁。")</dd>

<dt>[`String.prototype.bold()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold "bold() 方法会创建 HTML 元素 “b”，并将字符串加粗展示。")</dt>

<dd>[`<b>`](/zh-CN/docs/Web/HTML/Element/b "HTML <b> 元素表示相对于普通文本字体上的区别，但不表示任何特殊的强调或者关联。它通常用在摘要中的关键字、审查中的产品名称或者其他需要显示为加粗的文字区域。它的另一个使用例子是用来标记一篇文章中每一段的引言。")</dd>

<dt>[`String.prototype.fixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fixed "fixed()方法创建了一个标签元素将字符串包裹起来，从而让这个字符串里面的内容具有固定间距。")</dt>

<dd>[`<tt>`](/zh-CN/docs/Web/HTML/Element/tt "The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element.")</dd>

<dt>[`String.prototype.fontcolor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor "该fontcolor()方法创建一个{{ HTMLElement的（“字体”） }}的HTML导致在指定的字体颜色要显示的字符串的元素。")</dt>

<dd>[`<font color="_color_">`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/font#attr-color)</dd>

<dt>[`String.prototype.fontsize()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize "The fontsize() method creates a <font> HTML element that causes a string to be displayed in the specified font size.")</dt>

<dd>[`<font size="_size_">`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/font#attr-size)</dd>

<dt>[`String.prototype.italics()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/italics "The italics() method creates an <i> HTML element that causes a string to be italic.")</dt>

<dd>[`<i>`](/zh-CN/docs/Web/HTML/Element/i "HTML元素 <i> 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。")</dd>

<dt>[`String.prototype.link()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/link "link() 方法创建一个 <a> HTML 元素，用该字符串作为超链接的显示文本，参数作为指向另一个 URL 的超链接。")</dt>

<dd>[`<a href="_url_">`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) (link to URL)</dd>

<dt>[`String.prototype.small()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small "small() 方法的作用是创建一个使字符串显示小号字体的 <small> 标签。")</dt>

<dd>[`<small>`](/zh-CN/docs/Web/HTML/Element/small "HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。")</dd>

<dt>[`String.prototype.strike()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>[`<strike>`](/zh-CN/docs/Web/HTML/Element/strike "此页面仍未被本地化, 期待您的翻译!")</dd>

<dt>[`String.prototype.sub()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>[`<sub>`](/zh-CN/docs/Web/HTML/Element/sub "此页面仍未被本地化, 期待您的翻译!")</dd>

<dt>[`String.prototype.sup()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>[`<sup>`](/zh-CN/docs/Web/HTML/Element/sup "此页面仍未被本地化, 期待您的翻译!")</dd>

</dl>

<div>

<div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides">

<div><span style="font-weight: 700;">Methods inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__defineGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter), [`__defineSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter), [`hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty), [`isPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf), [`__lookupGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter), [`__lookupSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter), [`__noSuchMethod__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod), [`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable), [`toLocaleString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString), [`unwatch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch), [`watch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch)</div>

</div>

</div>

## 示例 

### 将其他值转换成字符串

使用 String() 方法将其它对象转化为字符串可以被认为是一种更加安全的做法，虽然该方法底层使用的也是 toString() 方法，但是针对 null/undefined/symbols，String() 方法会有特殊的处理：

<pre class="brush: js">var outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
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

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">String</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">String</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-string-objects)</td>

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

<td>0.2</td>

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

## 相关链接

*   [`DOMString`](/zh-CN/docs/Web/API/DOMString "一个UTF-16字符串，JavaScript 正是使用了这种编码的字符串，所以 DOMString 直接被映射为（is mapped directly to）String。")
*   [`StringView` – a C-like representation of strings based on typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView "/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView")
*   [Binary strings](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString/Binary)