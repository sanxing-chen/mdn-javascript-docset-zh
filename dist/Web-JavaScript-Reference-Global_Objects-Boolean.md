Boolean 对象是一个布尔值的对象包装器。

## 语法

<pre class="brush: js">new Boolean(_[value]_)

// Boolean {[[PrimitiveValue]]: false}
// Boolean {[[PrimitiveValue]]: true}
// return a boolean object which value is (true/false).

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

</pre>

`![Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.](https://mdn.mozillademos.org/files/14571/new%20Boolean(value).png)`

`![Falsy values](https://mdn.mozillademos.org/files/14573/new%20Boolean(value)%202.png)`

## 参数

<dl>

<dt>`value`</dt>

<dd> 可选的. `Boolean` 对象的初始值.</dd>

</dl>

## 描述

如果Boolean构造函数的参数不是一个布尔值,则该参数会被转换成一个布尔值.如果参数是 `0`, `-0`,  [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。"), `false`, [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。"), [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined"."), 或者空字符串 (""),生成的Boolean对象的值为false. 其他任何值,包括任何对象或者字符串`"false"`, 都会创建一个值为true的Boolean对象.

不要将原始值true false,和值为true false的Boolean对象相混淆.

任何值不为 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")或者 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")的对象, 包括值为false的Boolean对象, 在条件语句中,其值都将作为true来判断.例如,下面的[`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else "当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。") 语句中,if就将对象x看作是true:

<pre class="brush: js">var x = new Boolean(false);
if (x) {
  // . . . 这里的代码仍会被执行
}
</pre>

Boolean原始值不会有这种表现.例如, 下面的条件结构中,if语句的内部代码不会被执行:

<pre class="brush: js">var x = false;
if (x) {
  // . . . 这里的代码不会被执行
}
</pre>

不要通过新建`Boolean`对象的方法来将一个非布尔值转化成布尔值. 直接使用Boolean函数才是正确的:

<pre class="brush: js">var x = Boolean(expression);     // 这样用
var x = new Boolean(expression); // 而不要这样!
</pre>

如过你用一个对象作为Boolean对象的初始化值,则即使该对象是个值为false的Boolean对象,生成的Boolean对象的值也是true.

<pre class="brush: js">var myFalse = new Boolean(false);   // 初始化值为false
var g = new Boolean(myFalse);       // 初始化值为true
var myString = new String("Hello"); // string 对象
var s = new Boolean(myString);      // 初始化值为true
</pre>

不要在该使用Boolean原始值的地方使用Boolean对象.

## 属性

<dl>

<dt>`Boolean.length`</dt>

<dd>长度属性,值为1.</dd>

<dt>[`Boolean.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype "Boolean.prototype 属性表示 Boolean 构造函数的原型。")</dt>

<dd>代表Boolean构造器的原型.</dd>

</dl>

## 方法

`Boolean构造函数自身没有任何方法`, 不过, 它从自己的原型链上继承了一些方法:

## `Boolean` 实例

所有`Boolean`实例都继承于  [`Boolean.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype "Boolean.prototype 属性表示 Boolean 构造函数的原型。"). 其他所有的构造函数也同样,构造函数的原型对象控制着自己的对象实例所继承的属性和方法.

### 属性

### 方法

## 例子

### 创建1个`Boolean函数`,初始化值为false

<pre class="brush: js">var bNoParam = Boolean();
var bZero = Boolean(0);
var bNull = Boolean(null);
var bEmptyString = Boolean("");
var bUndefined = Boolean(undefined);
var bfalse = Boolean(false);
</pre>

### 创建1个`Boolean函数`,初始化值为true

<pre class="brush: js">var btrue = Boolean(true);
var btrueString = Boolean("true");
var bfalseString = Boolean("false");
var bSuLin = Boolean("Su Lin");
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

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.0.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Boolean</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Boolean</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-boolean-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Boolean</small>](https://tc39.github.io/ecma262/#sec-boolean-objects)</td>

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

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>6.0</td>

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

*   [`Boolean.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype "Boolean.prototype 属性表示 Boolean 构造函数的原型。")
*   [Boolean](/en-US/docs/Glossary/Boolean "Boolean: In computer science, a boolean is a logical data type that can have only the values true or false. A boolean is how a programming language lets you represent true and false. Without the ability to represent the boolean values a number of things in a language would no longer work. For example, in JavaScript, an if statement's conditional has to resolve to a boolean value for it to execute at all.  In a JavaScript for loop without it's boolean conditional the loop would never know whether to run it's coding or not.")
*   [Boolean data type (Wikipedia)](http://en.wikipedia.org/wiki/Boolean_data_type)