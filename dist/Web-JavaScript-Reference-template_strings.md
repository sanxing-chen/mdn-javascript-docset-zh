模板字面量(Template literals)是允许嵌入表达式的字符串字面量。并且支持多行字符串和字符串插补特性。在 ES2015 / ES6 规范中，其被称之为模板字符串(template strings)。

## 语法

<pre style="font-size: 14px;" class="syntaxbox">`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
</pre>

## 描述

模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法(`${expression}`)的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以在通过该函数对模板字符串来进行操作处理。

    `\`` === "`" // --> true

### 多行字符串

在新行中插入的任何字符都是模板字符串中的一部分，使用普通字符串，你可以通过以下的方式获得多行字符串：

<pre style="font-size: 14px;" class="brush: js">console.log("string text line 1\n\
string text line 2");
// "string text line 1
// string text line 2"</pre>

要获得同样效果的多行字符串，只需使用如下代码：

<pre style="font-size: 14px;" class="brush: js">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

### 表达式插补

在普通字符串中嵌入表达式，必须使用如下语法：

<pre style="font-size: 14px;" class="brush: js">var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."</pre>

现在通过模板字符串，我们可以使用一种更优雅的方式来表示：

<pre style="font-size: 14px;" class="brush: js">var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."</pre>

### 带标签的模板字符串

模板字符串的一种更高级的形式称为带标签的模板字符串。它允许您通过标签函数修改模板字符串的输出。标签函数的第一个参数是一个包含了字符串字面值的数组（在本例中分别为“Hello”,“world”和""）；第二个参数，在第一个参数后的每一个参数，都是已经被处理好的替换表达式（在这里分别为“15”和“50”）。 最后，标签函数返回处理好的字符串。在下面的例子中，命名这个标签并没有什么特殊的地方，这个函数的名字可以是任何你想要的。

<pre style="font-size: 14px;" class="brush: js">var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"
</pre>

正如下面例子所展示的，标签函数并不一定需要返回一个字符串。

<pre class="brush: js">function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!" 
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"</pre>

### 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性`raw` ，我们可以通过它来访问模板字符串的原始字符串。

<pre style="font-size: 14px;" class="brush: js">function tag(strings, ...values) {
  console.log(strings.raw[0]); 
  // "string text line 1 \\n string text line 2"
}

tag`string text line 1 \n string text line 2`;
</pre>

另外，使用[`String.raw()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw "String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @，是用来获取一个模板字符串的原始字面量值的。") 方法创建原始字符串和使用默认模板函数和字符串连接创建是一样的。

<pre style="font-size: 14px;" class="brush: js">String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Template Literals</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Defined in several section of the specification: [Template Literals](http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals), [Tagged Templates](http://www.ecma-international.org/ecma-262/6.0/#sec-tagged-templates)</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Template Literals</small>](https://tc39.github.io/ecma262/#sec-template-literals)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Defined in several section of the specification: [Template Literals](https://tc39.github.io/ecma262/#sec-template-literals), [Tagged Templates](https://tc39.github.io/ecma262/#sec-tagged-templates)</td>

</tr>

</tbody>

</table>

## 浏览器兼容

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td>41</td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td>12/Edge ([modern.ie](https://status.modern.ie/templatestringses6))</td>

<td>28</td>

<td>9</td>

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

<td><span style="color: #f00;">未实现</span></td>

<td>41.0</td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>28</td>

<td>9</td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")
*   [`String.raw()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw "String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @，是用来获取一个模板字符串的原始字面量值的。")
*   [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
*   [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
*   ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)