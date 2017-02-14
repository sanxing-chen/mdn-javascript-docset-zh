这部分描述了JavaScript的词法。ECMAScript源码文本会被从左到右扫描，并被转换为一系列的输入元素，包括tokens、控制符、行终止符、注释和空白符。ECMAScript定义了一些关键字、字面量以及行尾分号补全的规则。

## Unicode 格式控制符

Unicode 格式控制符用于控制对源码文本的解释，但是并不会显示出来。

<table class="standard-table"><caption>Unicode编码表示的格式控制符</caption>

<tbody>

<tr>

<th>代码点</th>

<th>名称</th>

<th>缩写</th>

<th>说明</th>

</tr>

<tr>

<td>`U+200C`</td>

<td>零宽度非结合子</td>

<td><ZWNJ></td>

<td>放置在一些经常会被当成连字的字符之间，用于将它们分别以独立形式显示（[Wikipedia](http://en.wikipedia.org/wiki/Zero-width_non-joiner)）</td>

</tr>

<tr>

<td>`U+200D`</td>

<td>零宽度结合子</td>

<td><ZWJ></td>

<td>放置在一些通常不会被标记为连字的字符之间，用于将这些字符以连字形式显示（[Wikipedia](http://en.wikipedia.org/wiki/Zero-width_joiner)）</td>

</tr>

<tr>

<td>`U+FEFF`</td>

<td>字节流方向标识</td>

<td><BOM></td>

<td>在脚本开头使用，除了将脚本标记为Unicode格式以外，还用来标记文本的字节流方向（[Wikipedia](http://en.wikipedia.org/wiki/Byte_order_mark)）</td>

</tr>

</tbody>

</table>

## 空白符

空白符提升了源码的可读性，并将标记 (tokens) 区分开。这些符号通常不影响源码的功能。通常可以用[压缩器](http://en.wikipedia.org/wiki/Minification_%28programming%29)来移除源码中的空白，减少数据传输量。

<table class="standard-table"><caption>空白符</caption>

<tbody>

<tr>

<th>代码点</th>

<th>名称</th>

<th>缩写</th>

<th>说明</th>

<th>转义序列</th>

</tr>

<tr>

<td>U+0009</td>

<td>制表符</td>

<td><HT></td>

<td>水平制表符</td>

<td>\t</td>

</tr>

<tr>

<td>U+000B</td>

<td>垂直制表符</td>

<td><VT></td>

<td>垂直制表符</td>

<td>\v</td>

</tr>

<tr>

<td>U+000C</td>

<td>分页符</td>

<td><FF></td>

<td>分页符（[Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)）</td>

<td>\f</td>

</tr>

<tr>

<td>U+0020</td>

<td>空格</td>

<td><SP></td>

<td>空格</td>

<td> </td>

</tr>

<tr>

<td>U+00A0</td>

<td>无间断空格</td>

<td><NBSP></td>

<td>在该空格处不会换行</td>

<td> </td>

</tr>

<tr>

<td>Others</td>

<td>其他Unicode空白</td>

<td><USP></td>

<td>[Wikipedia上对Unicode空白的介绍](http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode)</td>

<td> </td>

</tr>

</tbody>

</table>

## 行终止符

除了空白符之外，行终止符也可以提高源码的可读性。不同的是，行终止符可以影响JavaScript代码的执行。行终止符也会影响[自动分号补全](#Automatic_semicolon_insertion)的执行。在[正则表达式](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)中，行终止符会被**\s**匹配。

在ECMAScript中，只有下列Unicode字符会被当成行终止符，其他的行终止符（比如Next Line、NEL、U+0085等）都会被当成空白。

<table class="standard-table"><caption>行终止符</caption>

<tbody>

<tr>

<th>编码</th>

<th>名称</th>

<th>缩写</th>

<th>说明</th>

<th>转义序列</th>

</tr>

<tr>

<td>U+000A</td>

<td>换行符</td>

<td><LF></td>

<td>在UNIX系统中起新行</td>

<td>\n</td>

</tr>

<tr>

<td>U+000D</td>

<td>回车符</td>

<td><CR></td>

<td>在Commodore和早期的Mac系统中起新行</td>

<td>\r</td>

</tr>

<tr>

<td>U+2028</td>

<td>行分隔符</td>

<td><LS></td>

<td>[Wikipedia](http://en.wikipedia.org/wiki/Newline)</td>

<td> </td>

</tr>

<tr>

<td>U+2029</td>

<td>段分隔符</td>

<td><PS></td>

<td>[Wikipedia](http://en.wikipedia.org/wiki/Newline)</td>

<td> </td>

</tr>

</tbody>

</table>

## 注释

注释用来在源码中增加提示、笔记、建议、警告等信息，可以帮助阅读和理解源码。在调试时，可以用来将一段代码屏蔽掉，防止其运行。

JavaScript中有两种生成注释的方法。

第一种是**单行注释** (single-line comment)，使用`//`，会将该行中符号以后的文本都视为注释：

<pre class="brush: js">function comment() {
  // 这是行注释
  console.log("Hello world!");
}
comment();
</pre>

第二种是**多行注释** (multiple-line comment)，使用`/* */` ，这种方式更加灵活：

比如，可以使用多行注释来实现单行注释：

<pre class="brush: js">function comment() {
  /* 单行注释 */
  console.log("Hello world!");
}
comment();</pre>

也可以用来实现多行注释：

<pre class="brush: js">function comment() {
  /* 多行注释，
     直到终止符号才结束 */
  console.log("Hello world!");
}
comment();</pre>

多行注释也可以用于单行间注释，这样会造成代码可读性变差，所以要谨慎使用：

<pre class="brush: js">function comment(x) {
  console.log("Hello " + x /* 引入x的值 */ + " !");
}
comment("world");</pre>

另外，块注释也可以用来屏蔽一段代码，只要将这段代码用块注释包裹起来就可以了：

<pre class="brush: js">function comment() {
  /* console.log("Hello world!"); */
}
comment();</pre>

注释中的`console.log()`的调用始终无效。这种方式可以屏蔽任意多行的代码。

## 关键字

### ECMAScript 6中的保留关键字

<div class="threecolumns">

*   [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")
*   [`case`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")
*   [`catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。")
*   [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class "关键字创建一个基于原型继承的新类(译者注：ES6新加入的class关键字是语法糖，本质还是函数)")
*   [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const "const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。(译者注：JavaScript中的常量和Java，C++中的常量一个意思。注意区分常量的值和常量指向的值的不同)")
*   [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。")
*   [`debugger`](/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger "调用任何一个可用的调试器,如果没有调试器可用,则该语句没有任何效果.")
*   [`default`](/zh-CN/docs/Web/JavaScript/Reference/Statements/default "关键词 default 可以在JavaScript中的这两种情况下使用：在 switch 中的时候，或者在 export 中使用时。")
*   [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。")
*   [`do`](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while "do...while 语句创建了一个循环,该循环执行一个指定的语句直到condition 的值为 false. condition 在执行statement后才会被赋值,statement至少执行一次.")
*   [`else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else "当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。")
*   [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。")
*   [`extends`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class "关键字创建一个基于原型继承的新类(译者注：ES6新加入的class关键字是语法糖，本质还是函数)")
*   [`finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。")
*   [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.")
*   [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else "当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。")
*   [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import "name参数用于接收导出成员的对象名称。member参数指定独立成员，而name参数导入所有成员。如果模块导出单个默认参数，而不是一系列成员，name也可以是函数。
     下面提供一些示例说明语法。")
*   [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in "如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。")
*   [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。")
*   [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。")
*   [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return "return 语句终止函数的执行，并返回一个指定的值给函数调用者。")
*   [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super "super 关键字用于访问父对象上的函数。")
*   [`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")
*   [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this "在JavaScript中，函数的this关键字的行为与其他语言相比有很多不同。在JavaScript的严格模式和非严格模式下也略有区别。")
*   [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")
*   [`try`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。")
*   [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof "typeof操作符返回一个字符串,指示未经计算的操作数的类型。")
*   [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var "var声明了一个变量，并且可以同时初始化该变量。")
*   [`void`](/zh-CN/docs/Web/JavaScript/Reference/Operators/void "void 运算符会对给定的表达式进行求值，然后直接返回 undefined。")
*   [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。")
*   [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with "with語句的作用是擴展作用域鏈（scope chain）。")
*   [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")

</div>

### 未来保留关键字

在ECMAScript规格中，这些关键字被当成关键字保留。目前它们没有特殊功能，但是在未来某个时间可能会加上。所以这些关键字不能当成标识符使用。这些关键字在严格模式和非严格模式中均不能使用。

*   `enum`

以下关键字只在严格模式中被当成保留关键字：

<div class="threecolumns">

*   `implements`
*   `interface`
*   [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let "let 声明了一个块级域的局部变量，并且可以给它一个初始化值。")
*   `package`
*   `private`
*   `protected`
*   `public`
*   `static`

</div>

The following are only reserved when they are found in module code:

*   `await`

#### 之前标准中的保留关键字

这里是之前版本中的ECMAScript（1到3）中的保留关键字：

<div class="threecolumns">

*   `abstract`
*   `boolean`
*   `byte`
*   `char`
*   `double`
*   `final`
*   `float`
*   `goto`
*   `int`
*   `long`
*   `native`
*   `short`
*   `synchronized`
*   `transient`
*   `volatile`

</div>

另外，直接量`null`、`true`和`false`同样不能被当成标识使用。

### 保留字的使用

Reserved words actually only apply to Identifiers (vs. `IdentifierNames`) . As described in [es5.github.com/#A.1](http://es5.github.com/#A.1), these are all `IdentifierNames` which do not exclude `ReservedWords`.

<pre class="brush: js">a.import
a["import"]
a = { import: "test" }.
</pre>

另一方面，如下用法是不允许的。因为On the other hand the following is illegal because it's an Identifier, which is an `IdentifierName` without the reserved words. Identifiers are used for `FunctionDeclaration` and `FunctionExpression`.

<pre class="brush: js">function import() {} // Illegal.</pre>

## 直接量

### 空直接量

`更多信息可以参考[null](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)`

<pre class="brush: js">null</pre>

### 布尔直接量

更多信息可以参考[`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<pre class="brush: js">true
false</pre>

### 数值直接量

#### 十进制

<pre class="brush: js">1234567890
42

// 谨慎使用0开头的数值

0888 // 转换为十进制888
0777 // 转换为八进制777，十进制511
</pre>

请注意，十进制数值直接量可以以0开头，但是如果0以后的最高位比8小，数值将会被认为是八进制而不会报错。更多信息可以参考[bug 957513](https://bugzilla.mozilla.org/show_bug.cgi?id=957513 "`DecimalIntegerLiteral` can never be `0` directly followed by `8` or `9`")和[`parseInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Octal_interpretations_with_no_radix)。

#### 二进制

二进制表示为开头是0后接大写或小写的B（`0b`或者`0B`）。这是ECMAScript 6中的新语法，可以参考下面的浏览器兼容性表格。如果`0b`之后有除了0或1以外的数字，将会抛出`[SyntaxError](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)`：“Missing binary digits after 0b”。

<pre class="brush: js">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

#### 八进制

八进制表示为开头是0后接大写或小写的O（`0o`或`0O`）。这是ECMAScript 6中的新语法，可以参考下面的浏览器兼容性表格。如果有不在（01234567）中的数字，将会抛出`[SyntaxError](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)`：“Missing octal digits after 0o”。

<pre class="brush: js">var n = 0O755; // 493
var m = 0o644; // 420

// 用0开头也可以实现（请查看上方十进制有关部分）
0755
0644
</pre>

#### 十六进制

十六进制表示为开头是0后接大写或小写的X（`0x`或`0X`）。如果有不在（0123456789ABCDEF）中的数字，将会抛出`[SyntaxError](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)`：“Identifier starts immediately after numeric literal”。

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

### 对象直接量

更多信息可以参考[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")和[对象初始化器](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

<pre class="brush: js">var o = { a: "foo", b: "bar", c: 42 };

// ES6中的简略表示方法
var a = "foo", b = "bar", c = 42;
var o = {a, b, c};
// 不需要这样
var o = { a: a, b: b, c: c };
</pre>

### 数组直接量

更多信息可以参考[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")。

<pre class="brush: js">[1954, 1974, 1990, 2014]</pre>

### 字符串直接量

<pre class="brush: js">'foo'
"bar"</pre>

#### 十六进制转义序列

<pre class="brush: js">'\xA9' // "©"
</pre>

#### Unicode转义序列

Unicode转义序列要求在`\u`之后至少有四个字符。

<pre class="brush: js">'\u00A9' // "©"</pre>

#### Unicode编码转义

ECMAScript 6新增特性。使用Unicode编码转义，任何字符都可以被转义为十六进制编码。最高可以用到`0x10FFFF`。使用单纯的Unicode转义通常需要写成分开的两半以达到相同的效果。

可以参考[`String.fromCodePoint()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint "String.fromCodePoint()是String的静态方法，该方法使用指定的unicode参数返回一个primitive的字符串。与fromCharCode功能类似，但是支持的Unicode字符更全，但是浏览器支持情况不是太好，目前ie以及safari还不支持。另外，性能并没有fromCharCode快。因为是ES6当中的新定义的特性，所以目前还不适合放到正式产品环境中去使用。")和[`String.prototype.codePointAt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt "codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。")。

<pre class="brush: js">'\u{2F804}'

// 使用单纯Unicode转义
'\uD87E\uDC04'</pre>

### 正则表达式直接量

更多信息可以参考[`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。

<pre class="brush: js">/ab+c/g

// 一个空的正则表达式直接量
// 必须有一个空的非捕获分组
// 以避免被当成是行注释符号
/(?:)/</pre>

### 模板直接量

更多信息可以参考[template strings](/en-US/docs/Web/JavaScript/Reference/template_strings)。

<pre class="brush: js">`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`</pre>

## 自动分号补全

一些[JavaScript语句](/en-US/docs/Web/JavaScript/Reference/Statements)必须用分号结束，所以会被自动分号补全 (ASI)影响：

*   空语句
*   `let`、`const`、变量声明
*   `import`、`export`、模块定义
*   表达式语句
*   `debugger`
*   `continue`、`break`、t`hrow`
*   `return`

ECMAScript规格提到[自动分号补全的三个规则](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-rules-of-automatic-semicolon-insertion)。

1\. 当出现一个不允许的[行终止符](#Line_terminators)或“}”时，会在其之前插入一个分号。

<pre class="brush: js">{ 1 2 } 3 

// 将会被ASI转换为 

{ 1 2 ;} 3;</pre>

2\. 当捕获到标识符输入流的结尾，并且无法将单个输入流转换为一个完整的程序时，将在结尾插入一个分号。

在下面这段中，由于在`b`和`++`之间出现了一个行终止符，所以`++`未被当成变量`b`的[后置运算符](/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment)。

<pre class="brush: js">a = b
++c

// 将被ASI转换为

a = b;
++c;
</pre>

3\. 当语句中包含语法中的限制产品后跟一个行终止符的时候，将会在结尾插入一个分号。带“这里没有行终止符”规则的语句有：

*   后置运算符（`++`和`--）`
*   `continue`
*   `break`
*   `return`
*   `yield`, `yield*`
*   `module`

<pre class="brush: js">return
a + b

// 将被ASI转换为

return;
a + b;
</pre>

## 规格

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规格</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Lexical Conventions</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Lexical Grammar</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-lexical-grammar)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>增加：二进制和八进制数值直接量，Unicode编码转义直接量、模板直接量</td>

</tr>

</tbody>

</table>

## 浏览器兼容

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>二进制和八进制数值</td>

<td>41</td>

<td>[25](/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>28</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Unicode编码转义  
(`\u{}`)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[40](/en-US/Firefox/Releases/40 "Released on 2015-08-11.") (40)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>对象直接量的简易表示</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[33](/en-US/Firefox/Releases/33 "Released on 2014-10-14.") (33)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>模板直接量</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>二进制和八进制数值</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>41</td>

<td>33.0 (33)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Unicode编码转义  
(`\u{}`)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>40.0 (40)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>对象直接量的简易表示</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>33.0 (33)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>模板直接量</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## Firefox特殊提示

*   在Firefox 5（JavaScript 1.8.6）之前的版本上，储备关键字可以在非严格模式中被使用。这个问题在Firefox 5中被修复。

## See also

*   [Jeff Walden: Binary and octal numbers](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
*   [Mathias Bynens: JavaScript character escape sequences](http://mathiasbynens.be/notes/javascript-escapes)
*   [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!")
*   [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。")
*   [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!")
*   [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")