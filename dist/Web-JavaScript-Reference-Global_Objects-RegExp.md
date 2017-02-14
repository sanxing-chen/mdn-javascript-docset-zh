## 概述

**`RegExp`** 的构造函数创建了一个正则表达式对象，用模式来匹配文本。

有关正则表达式介绍，请阅读[JavaScript指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/)中的[正则表达式章节](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)。

## 语法

文字和构造符号是可能的：

    /pattern/flags new RegExp(pattern [, flags])

### 参数

<dl>

<dt>`pattern`</dt>

<dd>正则表达式的文本</dd>

<dt>`flags`</dt>

<dd>

如果指定，标志可以具有以下值的任意组合：

<dl>

<dt>`g`</dt>

<dd>全局匹配</dd>

<dt>`i`</dt>

<dd>忽略大小写</dd>

<dt>`m`</dt>

<dd>多行;让开始和结束字符（^ 和 $）工作在多行模式工作（例如，^ 和 $ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的最开始和最末尾处。</dd>

<dt>u</dt>

<dd>Unicode。把模式当作Unicode代码点(code points)的序列。</dd>

<dt>`y`</dt>

<dd>黏度; 在目标字符串中，只从正则表达式的lastIndex属性指定的显示位置开始匹配（并且不试图从任何之后的索引匹配）。</dd>

</dl>

</dd>

</dl>

## 描述

有两种方法可以创建一个正则对象：字面量和构造函数。要表示字符串，字面量形式不使用引号，而传递给构造函数的参数使用引号。下面表达式创建相同的正则表达式：

<pre class="brush: js" style="font-size: 14px;">/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');</pre>

当表达式被赋值时，字面量形式提供正则表达式的编译（compilation）状态，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式不会在每一次迭代中都被重新编译（recompiled）。

而正则表达式对象的构造函数，如 `new RegExp('ab+c')` 提供了正则表达式运行时编译（runtime compilation）。如果你知道正则表达式模式将会改变，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。

从ECMAScript 6开始，当第一个参数为正则表达式而第二个标志参数存在时，new RegExp(/ab+c/, 'i')不再抛出[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") （“当从其他正则表达式进行构造时不支持标志”）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。比如，以下是等价的：

<pre class="brush: js">var re = new RegExp("\\w+");
var re = /\w+/;</pre>

## 正则表达式中的特殊字符

*   [字符类别（Character Classes）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes)
*   [字符集合（Character Sets）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-sets)
*   [边界（Boundaries）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#boundaries)
*   [分组（grouping）与反向引用（back references）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references)
*   [数量词（Quantifiers）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers)

<table class="fullwidth-table" style="width: 662px;">

<tbody>

<tr id="character-classes">

<th colspan="2">字符类别（Character Classes）</th>

</tr>

<tr>

<th>字符</th>

<th>含义</th>

</tr>

<tr>

<td>`.`</td>

<td>

（点号，小数点）匹配任意单个字符，但是换行符除外，包括：`\n` `\r` `\u2028` 或 `\u2029`。

需要注意的是，`m` 多行（multiline）标志不会改变点号的表现。因此为了匹配多行中的字符集，可使用`[^]` （当然你不是打算用在旧版本 IE 中），它将会匹配任意字符，包括换行符。

例如，`/.y/` 匹配 "yes make my day" 中的 "my" 和 "ay"，但是不匹配 "yes"。

</td>

</tr>

<tr>

<td>`\d`</td>

<td>

匹配基本拉丁字母表（basic Latin alphabet）中的一个数字字符。等价于`[0-9]`。

例如，`/\d/` 或 `/[0-9]/` 匹配 "B2 is the suite number." 中的 '2'。 

</td>

</tr>

<tr>

<td>`\D`</td>

<td>

匹配任意一个不是基本拉丁字母表中数字的字符。等价于`[^0-9]`。

例如，`/\D/` 或 `/[^0-9]/` 匹配 "B2 is the suite number." 中的 'B'。

</td>

</tr>

<tr>

<td>`\w`</td>

<td>

匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 `[A-Za-z0-9_]`。

例如，`/\w/` 匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。

</td>

</tr>

<tr>

<td>`\W`</td>

<td>

匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。等价于 `[^A-Za-z0-9_]`。

例如，`/\W/` 或 `/[^A-Za-z0-9_]/` 匹配 "50%" 中的 '%'。

</td>

</tr>

<tr>

<td>`\s`</td>

<td>

匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。

等价于 `[ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​ \u3000]。`

例如 `/\s\w*/` 匹配 "foo bar" 中的 ' bar'。

</td>

</tr>

<tr>

<td>`\S`</td>

<td>

匹配一个非空白符。等价于 ``[^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]``。

例如，`/\S\w*/` 匹配 "foo bar" 中的 'foo'。

</td>

</tr>

<tr>

<td>`\t`</td>

<td>匹配一个水平制表符（tab）</td>

</tr>

<tr>

<td>`\r`</td>

<td>匹配一个回车符（carriage return）</td>

</tr>

<tr>

<td>`\n`</td>

<td>匹配一个换行符（linefeed）</td>

</tr>

<tr>

<td>`\v`</td>

<td>匹配一个垂直制表符（vertical tab）</td>

</tr>

<tr>

<td>`\f`</td>

<td>匹配一个换页符（form-feed）</td>

</tr>

<tr>

<td>`[\b]`</td>

<td>匹配一个退格符（backspace）（不要与 `\b` 混淆）</td>

</tr>

<tr>

<td>`\0`</td>

<td>匹配一个 NUL 字符。不要在此后面跟小数点。</td>

</tr>

<tr>

<td>`\c_X_`</td>

<td>

`_X_` 是 A - Z 的一个字母。匹配字符串中的一个控制字符。

例如，`/\cM/` 匹配字符串中的 control-M。

</td>

</tr>

<tr>

<td>`\x_hh_`</td>

<td>匹配编码为 `_hh_` （两个十六进制数字）的字符。</td>

</tr>

<tr>

<td>`\u_hhhh_`</td>

<td>匹配 Unicode 值为 `_hhhh_` （四个十六进制数字）的字符。</td>

</tr>

<tr>

<td>`\`</td>

<td>

对于那些通常被认为字面意义的字符来说，表示下一个字符具有特殊用处，并且不会被按照字面意义解释。

例如 `/b/` 匹配字符 'b'。在 b 前面加上一个反斜杠，即使用 `/\b/`，则该字符变得特殊，以为这匹配一个单词边界。

_或_

对于那些通常特殊对待的字符，表示下一个字符不具有特殊用途，会被按照字面意义解释。

例如，* 是一个特殊字符，表示匹配某个字符 0 或多次，如 `/a*/` 意味着 0 或多个 "a"。 为了匹配字面意义上的 `*` ，在它前面加上一个反斜杠，例如，`/a\*/`匹配 'a*'。

</td>

</tr>

</tbody>

<tbody>

<tr id="character-sets">

<th colspan="2">

字符集合（Character Sets）

</th>

</tr>

<tr>

<th>字符</th>

<th>含义</th>

</tr>

<tr>

<td>`[xyz]`</td>

<td>

一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符'-'指定一个范围。

例如，[abcd] 等价于 [a-d]，匹配"brisket"中的'b'和"chop"中的'c'。

</td>

</tr>

<tr>

<td>`[^xyz]`</td>

<td>

一个反义或补充字符集，也叫反义字符组。也就是说，它匹配任意不在括号内的字符。你也可以通过使用连字符 '-' 指定一个范围内的字符。

例如，`[^abc]` 等价于 `[^a-c]。` 第一个匹配的是 "bacon" 中的'o' 和 "chop" 中的 'h'。

</td>

</tr>

</tbody>

<tbody>

<tr id="boundaries">

<th colspan="2">边界（Boundaries）</th>

</tr>

<tr>

<th>字符</th>

<th>含义</th>

</tr>

<tr>

<td>`^`</td>

<td>

匹配输入/字符串的开始。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。

例如，`/^A/` 不匹配 "an A" 中的 "A"，但匹配 "An A" 中的 "A"。

</td>

</tr>

<tr>

<td>`<td</td>

<td>

匹配输入/字符串的结尾。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。

例如，`/t$/` 不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。

</td>

</tr>

<tr>

<td>`\b`</td>

<td>

匹配一个零宽单词边界（zero-width word boundary），如一个字母与一个空格之间。 （不要和 `[\b]` 混淆）

例如，`/\bno/` 匹配 "at noon" 中的 "no"，`/ly\b/` 匹配 "possibly yesterday." 中的 "ly"。

</td>

</tr>

<tr>

<td>`\B`</td>

<td>

匹配一个零宽非单词边界（zero-width non-word boundary），如两个字母之间或两个空格之间。

例如，`/\Bon/` 匹配 "at noon" 中的 "on"，`/ye\B/` 匹配 "possibly yesterday." 中的 "ye"。

</td>

</tr>

</tbody>

<tbody>

<tr id="grouping-back-references">

<th colspan="2">分组（Grouping）与反向引用（back references）</th>

</tr>

<tr>

<th>字符</th>

<th>含义</th>

</tr>

<tr>

<td>`(_x_)`</td>

<td>

匹配 `_x_` 并且捕获匹配项。 这被称为捕获括号（capturing parentheses）。

例如，`/(foo)/` 匹配且捕获 "foo bar." 中的 "foo"。被匹配的子字符串可以在结果数组的元素 `[1], ..., [n]` 中找到，或在被定义的 `RegExp` 对象的属性 `$1, ..., $9` 中找到。

捕获组（Capturing groups）有性能惩罚。如果再次访问被匹配的子字符串，最好使用非捕获括号（non-capturing parentheses），见下面。

</td>

</tr>

<tr>

<td>`\_n_`</td>

<td>

`_n_` 是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。

例如，`/apple(,)\sorange\1/` 匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"。一个更全面的例子在该表格下面。

</td>

</tr>

<tr>

<td>`(?:_x_)`</td>

<td>匹配 `_x_` 不会捕获匹配项。这被称为非捕获括号（non-capturing parentheses）。匹配项不能够从结果数组的元素 `[1], ..., [n]` 或已被定义的 `RegExp` 对象的属性 `$1, ..., $9` 再次访问到。</td>

</tr>

</tbody>

<tbody>

<tr id="quantifiers">

<th colspan="2">数量词（Quantifiers）</th>

</tr>

<tr>

<th>字符</th>

<th>含义</th>

</tr>

<tr>

<td>`_x_*`</td>

<td>

匹配前面的模式 _x_ 0 或多次。

例如，`/bo*/` 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。

</td>

</tr>

<tr>

<td>`_x_+`</td>

<td>

匹配前面的模式 _x_ 1 或多次。等价于 `{1,}`。

例如，`/a+/` 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。

</td>

</tr>

<tr>

<td>`_x_*?`  
`_x_+?`</td>

<td>

像上面的 * 和 + 一样匹配前面的模式 _x_，然而匹配是最小可能匹配。

例如，`/".*?"/` 匹配 '"foo" "bar"' 中的 '"foo"'，而 * 后面没有 ? 时匹配 '"foo" "bar"'。

</td>

</tr>

<tr>

<td>`_x_?`</td>

<td>

匹配前面的模式 _x_ 0 或 1 次。

例如，`/e?le?/` 匹配 "angel" 中的 "el"，"angle" 中的 "le"。

如果在数量词 `*`、`+`、`?` 或 `{}`, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪（ non-greedy） ，即匹配次数最小化。反之，默认情况下，是贪婪的（greedy），即匹配次数最大化。

在使用于向前断言（lookahead assertions）时，见该表格中 `(?=)、``(?!)` 和 `(?:)` 的说明。

</td>

</tr>

<tr>

<td>`_x_(?=_y_)`</td>

<td>只有当 `_x_` 后面紧跟着 `_y_` 时，才匹配 _`x`_。 例如，`/Jack(?=Sprat)/` 只有在 'Jack' 后面紧跟着 'Sprat' 时，才会匹配它。`/Jack(?=Sprat|Frost)/` 只有在 'Jack' 后面紧跟着 'Sprat' 或 'Frost' 时，才会匹配它。然而，'Sprat' 或 'Frost' 都不是匹配结果的一部分。</td>

</tr>

<tr>

<td>`_x_(?!_y_)`</td>

<td>

只有当 `_x_` 后面不是紧跟着 `_y_` 时，才匹配 `_x_`。例如，`/\d+(?!\.)/` 只有当一个数字后面没有紧跟着一个小数点时，才会匹配该数字。

`/\d+(?!\.)/.exec("3.141")` 匹配 141 而不是 3.141。

</td>

</tr>

<tr>

<td>`_x_|_y_`</td>

<td>

匹配 `_x_` 或 `_y_`

例如，`/green|red/` 匹配 "green apple" 中的 ‘green'，"red apple." 中的 'red'。

</td>

</tr>

<tr>

<td>`_x_{_n_}`</td>

<td>

`_n_` 是一个正整数。前面的模式 _x_ 连续出现 n 次时匹配。

例如，`/a{2}/` 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。

</td>

</tr>

<tr>

<td>`_x_{_n_,}`</td>

<td>

`_n_` 是一个正整数。前面的模式 _x_ 连续出现至少 n 次时匹配。

例如，`/a{2,}/` 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。

</td>

</tr>

<tr>

<td>`_x_{_n_,_m_}`</td>

<td>

`_n_` 和 `_m_` 为正整数。前面的模式 x 连续出现至少 n 次，至多 m 次时匹配。

例如，`/a{1,3}/` 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。

</td>

</tr>

</tbody>

</table>

1.  <span id="endnote_equivalent_s">**[^](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#ref_equivalent_s)**</span>等价于:

    `[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]`

### 属性

<div><small>_For properties available on `RegExp` instances, see [Properties of RegExp instances](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Properties)._</small></div>

<dl>

<dt>[`RegExp.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype "RegExp.prototype 属性表示 RegExp 构造函数的原型对象。")</dt>

<dd>允许为所有正则对象添加属性。</dd>

<dt>RegExp.length</dt>

<dd>`RegExp.length` 值为 2。</dd>

</dl>

<div>

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Properties inherited from [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function):</span></div>

<div>[`arity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Arity), [`caller`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Caller), [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Constructor), [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Length), [`name`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Name)</div>

</div>

</div>

### 方法

<div><small>_For methods available on `RegExp` instances, see [Methods of RegExp instances](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype#Methods)._</small></div>

<div>全局对象<span style="line-height: 1.5;"> </span>`RegExp`<span style="line-height: 1.5;"> 自身没有方法, 不过它会继承一些方法通过原型链</span></div>

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Methods inherited from [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function):</span></div>

<div>[`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply), [`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Call), [`toSource`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/ToSource), [`toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString)</div>

</div>

## RegExp 实例

### 属性

<div>

查看[已废弃的RegExp属性](/zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Properties "zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Properties")

注意，`RegExp` 对象的几个属性既有完整的长属性名，也有对应的类 Perl 的短属性名。两个属性都有着同样的值。JavaScript 的正则语法就是基于 Perl 的。

<dl>

<dt>`RegExp.prototype.``constructor`</dt>

<dd>创建该正则对象的构造函数。</dd>

<dt>[`RegExp.prototype.global`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global "global 属性表明正则表达式是否使用了 "g" 标志。global 是一个正则表达式实例的只读属性。")</dt>

<dd>是否开启全局匹配，也就是匹配目标字符串中所有可能的匹配项，而不是只进行第一次匹配。</dd>

<dt>[`RegExp.prototype.ignoreCase`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase "ignoreCase 属性表明正则表达式是否使用了 "i" 标志。ignoreCase 是正则表达式实例的只读属性。")</dt>

<dd>在匹配字符串时是否要忽略字符的大小写。</dd>

<dt>[`RegExp.prototype.lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。")</dt>

<dd>下次匹配开始的字符串索引位置。</dd>

<dt>[`RegExp.prototype.multiline`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline "multiline 属性表明正则表达式是否使用了 "m" 标志。multiline 是正则表达式实例的一个只读属性。")</dt>

<dd>是否开启多行模式匹配（影响 ^ 和 $ 的行为）。</dd>

<dt>[`RegExp.prototype.source`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source "source 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。")</dt>

<dd>正则对象的源模式文本。</dd>

<dt>[`RegExp.prototype.sticky`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>是否开启粘滞匹配。</dd>

</dl>

<div>

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Properties inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__parent__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent), [`__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto)</div>

</div>

</div>

</div>

### 方法

<div>

查看[已废弃的RegExp方法](/zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Methods "zh-CN/docs/JavaScript/Reference/Deprecated_Features#RegExp_Methods")

<dl>

<dt>[`RegExp.prototype.exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。")</dt>

<dd>在目标字符串中执行一次正则匹配操作。</dd>

<dt>[`RegExp.prototype.test()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。")</dt>

<dd>测试当前正则是否能匹配目标字符串。</dd>

<dt>[`RegExp.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource "返回一个字符串,代表当前对象的源代码")<span title="This API has not been standardized."></span></dt>

<dd>返回一个字符串，其值为该正则对象的字面量形式。覆盖了`Object.prototype.toSource` 方法.</dd>

<dt>[`RegExp.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString "toString() 返回一个表示该正则表达式的字符串。")</dt>

<dd>返回一个字符串，其值为该正则对象的字面量形式。覆盖了[`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

</dl>

<div>

<div class="inheritsbox template-jsOverrides" style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;">

<div><span style="font-weight: 700;">Methods inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__defineGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter), [`__defineSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter), [`hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty), [`isPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf), [`__lookupGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter), [`__lookupSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter), [`__noSuchMethod__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod), [`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable), [`toLocaleString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString), [`unwatch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch), [`valueOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ValueOf), [`watch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch)</div>

</div>

</div>

</div>

## 例子

### 例子：使用正则改变数据结构

下例使用 [`replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。") 方法 （继承自 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "String 全局对象是用来构造字符串对象或字符序列的构造函数。")）去匹配姓名 _first last_ 输出新的格式 _last_, _first_。脚本中使用 `$1 和` `$2` 指明括号里先前的匹配.

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
print(newstr);</pre>

显示 "Smith, John".

### 例子：在多行中使用正则表达式

<pre class="brush: js">var s = "Please yes\nmake my day!";
s.match(/yes.*day/);
// Returns null
s.match(/yes[^]*day/);
// Returns 'yes\nmake my day'</pre>

### 例子: 使用带有 ”sticky“ 标志的正则表达式

该例展示了，如何在正则表达式上使用 sticky 标志，用来匹配多行输入的单独行。

<pre class="brush: js">var text = "First line\nsecond line";
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
print(match[1]);  // prints "First"
print(regex.lastIndex); // prints 11

var match2 = regex.exec(text);
print(match2[1]); // prints "Second"
print(regex.lastIndex); // prints "22"

var match3 = regex.exec(text);
print(match3 === null); // prints "true"</pre>

可以使用 `try { … } catch { … }` 来测试运行时（run-time）是否支持 `sticky` 标志。这种情况下，必须使用 `eval(…)` 表达式或 `RegExp(<var>regex-string</var>, <var>flags-string</var>)` 语法（这是由于 `/<var>regex</var>/<var>flags</var>` 表示法将会在编译时刻被处理，因此在 `catch` 语句块处理异常前就会抛出一个异常。例如：

<pre class="brush: js">var supports_sticky;
try { RegExp('','y'); supports_sticky = true; }
catch(e) { supports_sticky = false; }
alert(supports_sticky); // alerts "false" in Firefox 2, "true" in Firefox 3+</pre>

### 例子：使用正则表达式和 Unicode 字符

正如上面表格提到的，`\w` 或 `\W` 只会匹配基本的 ASCII 字符；如 'a' 到 'z'、 'A' 到 'Z'、 0 到 9 及 '_'。为了匹配其他语言中的字符，如西里尔（Cyrillic）或 希伯来语（Hebrew），要使用 `\uhhhh`，"hhhh" 表示以十六进制表示的字符的 Unicode 值。下例展示了怎样从一个单词中分离出 Unicode 字符。

<pre class="brush: js">var text = "Образец text на русском языке";
var regex = /[\u0400-\u04FF]+/g;

var match = regex.exec(text);
print(match[1]);  // prints "Образец"
print(regex.lastIndex);  // prints "7"

var match2 = regex.exec(text);
print(match2[1]);  // prints "на" [did not print "text"]
print(regex.lastIndex);  // prints "15"

// and so on</pre>

这里有一个外部资源，用来获取 Unicode 中的不同区块范围：[Regexp-unicode-block](http://kourge.net/projects/regexp-unicode-block "http://kourge.net/projects/regexp-unicode-block")

### 例子：从 URL 中提取子域名

<pre class="brush: js">var url = "http://xxx.domain.com";
print(/[^.]+/.exec(url)[0].substr(7)); // prints "xxx"</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition. Implemented in JavaScript 1.1</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">RegExp</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">RegExp</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-regexp-regular-expression-objects)</td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

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

<td>Sticky flag ("y")</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[3.0](/en-US/Firefox/Releases/3 "Released on 2008-06-17.") (1.9)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

<td>Sticky flag ("y")</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>1.0 (1.9)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions "JavaScript/Guide/Regular_Expressions") chapter in the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide "JavaScript/Guide")
*   [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
*   [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)