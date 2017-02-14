const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。(译者注：JavaScript中的常量和Java，C++中的常量一个意思。注意区分常量的值和常量指向的值的不同)

## 语法

<pre class="syntaxbox">const _name1 = _value1 [_, _name2_ = _value2_ _[_, ... [_, _nameN_ = _valueN]]]_;</pre>

<dl>

<dt>`nameN`</dt>

<dd>常量名称，可以是任意合法的[identifier](/en-US/docs/Glossary/identifier "identifier: A sequence of characters in the code that identifies a variable, function, or property.")（标识符）。</dd>

<dt>`valueN`</dt>

<dd>常量值，可以是任意合法的[表达式](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)。</dd>

</dl>

## 描述

这个声明创建了一个常量，可以在全局作用域或者函数内声明常量，常量需要被初始化。这就是说，在定义常量的同时必须初始化(这是有意义的，鉴于变量的值在初始化后就不能改变)。

常量拥有块作用域，和使用`[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)` 定义的变量十分相似。常量的值不能通过再赋值改变，也不能再次声明。

一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。

## 例子

下面的例子演示了常量的特性。在浏览器的控制台试一下这个例子。

    // 注意: 常量在声明的时候可以使用大小写，但通常情况下会使用全部大写英文。 

    // 定义常量MY_FAV并赋值7
    const MY_FAV = 7;

    // 在 Firefox 和 Chrome 这会失败但不会报错(在 Safari这个赋值会成功)
    MY_FAV = 20;

    // 输出 7
    console.log("my favorite number is: " + MY_FAV);

    // 尝试重新声明会报错 
    const MY_FAV = 20;

    //  MY_FAV 保留给上面的常量，这个操作会失败
    var MY_FAV = 20; 

    // MY_FAV 依旧为7
    console.log("my favorite number is " + MY_FAV);

    // 下面是一个语法错误
    const A = 1; A = 2;

    // 常量要求一个初始值
    const FOO; // SyntaxError: missing = in const declaration

    // 常量可以定义成对象
    const MY_OBJECT = {"key": "value"};

    // 重写对象和上面一样会失败
    MY_OBJECT = {"OTHER_KEY": "value"};

    // 对象属性并不在保护的范围内，下面这个声明会成功执行
    MY_OBJECT.key = "otherValue";

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Let and Const Declarations</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Let and Const Declarations</small>](https://tc39.github.io/ecma262/#sec-let-and-const-declarations)</td>

<td><span class="spec-Draft">Draft</span></td>

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>21</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[36](/en-US/Firefox/Releases/36 "Released on 2015-02-24.") (36)</td>

<td>11</td>

<td>12</td>

<td>5.1</td>

</tr>

<tr>

<td>Reassignment fails</td>

<td>20</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)</td>

<td>11</td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Reassignment fails</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 兼容性说明

在Firefox和Chrome更早期的版本，Safari 5.1.7和Opera 12.00，如果使用const定义一个变量，这个变量的值仍然可以修改。IE6-10 不支持 const，但是IE11支持。

### Firefox-specific notes

在常量被列出ECMAScript 2015 (ES6)标准很久之前，火狐就已经支持常量。  `const` ES6 请参照 [bug 950547](https://bugzilla.mozilla.org/show_bug.cgi?id=950547 "FIXED: Make let and const ES6-compatible") and [bug 611388](https://bugzilla.mozilla.org/show_bug.cgi?id=611388 "FIXED: const should be block-scoped and an initializer should be required").

*   从 Gecko 36开始 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33):
    *   `{const a=1};a` 出现 [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced.") 且由于作用域不在返回1 .
    *   `const a;` 现在会出现  [`SyntaxError语法错误`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code.") ("missing = in const declaration`"`): 必须有一个初始值.
    *   `const a = 1; a = 2;` 现在会出现 [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "The SyntaxError object represents an error when trying to interpret syntactically invalid code.")语法错误 ("invalid assignment to const a").

## 相关链接

*   [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var "JavaScript/Reference/Statements/var")
*   [`let`](/zh-CN/docs/JavaScript/Reference/Statements/let "JavaScript/Reference/Statements/let")
*   [Constants in JavaScript Guide](/zh-CN/docs/JavaScript/Guide/Values,_variables,_and_literals#Constants "JavaScript/Guide/Values, Variables, and Literals#Constants")