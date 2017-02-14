<div>let语句声明一个块级作用域的本地变量，并且可选的赋予初始值。</div>

## 语法

<pre class="syntaxbox">let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];</pre>

### 参数

<dl>

<dt>`var1`, `var2`, …, `varN`</dt>

<dd>变量名。可以是任意合法的标识符。</dd>

<dt>`value1`, `value2`, …, `valueN`</dt>

<dd>变量的初始值。可以是任意合法的表达式。</dd>

</dl>

## 描述

let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与var关键字不同的是，var声明的变量只能是全局或者整个函数块的。

点[这里](https://stackoverflow.com/questions/37916940/js-why-let-have-this-name)可以明白我们为什么选取“let”这个名字。

### 作用域规则

let声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。

    function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // 同样的变量!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }

    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // 不同的变量
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }

### 简化内部函数代码

当用到内部函数的时候，let会让你的代码更加简单。

<pre class="brush:js">var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}
</pre>

上面这段代码的意图是创建5个li,点击不同的li能够打印出当前li的序号。如果不用let，而改用var的话，将总是打印出 Item 5 is Clicked，因为 j 是函数级变量，5个内部函数都指向了同一个 j ,而 j 最后一次赋值是5。用了let后，j 变成块级域（也就是花括号中的块，每进入一次花括号就生成了一个块级域）,所以 5 个内部函数指向了不同的 j 。

在程序或者函数的顶层，let并不会像var一样在全局对象上创造一个属性，比如

<pre class="brush:js">var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
</pre>

### 模仿私有接口

在处理[构造函数](https://developer.mozilla.org/en-US/docs/Glossary/Constructor)的时候，可以通过let声明而不是闭包来创建私有接口。

    var SomeConstructor;

    {
        let privateScope = {};

        SomeConstructor = function SomeConstructor () {
            this.someProperty = "foo";
            privateScope.hiddenProperty = "bar";
        }

        SomeConstructor.prototype.showPublic = function () {
            console.log(this.someProperty); // foo
        }

        SomeConstructor.prototype.showPrivate = function () {
            console.log(privateScope.hiddenProperty); // bar
        }

    }

    var myInstance = new SomeConstructor();

    myInstance.showPublic();
    myInstance.showPrivate();

    console.log(privateScope.hiddenProperty); // error

### let 的暂存死区与错误

在同一个函数或同一个作用域中用let重复定义一个变量将引起 `[TypeError](/zh-CN/docs/JavaScript/Reference/Global_Objects/TypeError "TypeError")`.

<pre class="brush: js">if (x) {
  let foo;
  let foo; // TypeError thrown.
}</pre>

在 ECMAScript  2015中,  `let` **将会提升**这个变量到语句块的顶部。然而，在这个语句块中，在变量声明之前引用这个变量会导致一个 `[ReferenceError](/zh-CN/docs/JavaScript/Reference/Global_Objects/ReferenceError "TypeError")的结果`, 因为let变量 在"暂存死区" (从块的开始到声明这段).

<pre class="brush: js">function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}</pre>

在 [`switch`](/zh-CN/docs/JavaScript/Reference/Statements/switch "switch") 声明中你可能会遇到这样的错误，因为一个switch只有一个作用块.

<pre class="brush: js">switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // TypeError for redeclaration.
    break;
}</pre>

let后跟一个函数传递的参数时将导致循环内部报错。

    function go(n){
      for (let n of n.a) { // TypeError: n is undefined
        console.log(n);
      }
    }

    go({a:[1,2,3]});

### <font face="Consolas, Liberation Mono, Courier, monospace">循环定义中的let作用域</font>

循环体中是可以引用在for声明时用let定义的变量，尽管let不是出现在大括号之间.

<pre class="brush:js">var i = 0;
for (let i = i; i < 10; i++) {
  console.log(i);
}
</pre>

<div class="note">

注：以上 let 声明的 i 将会变成 undefined；chrome 版本50.0.2661.102 (64-bit)；推荐以下写法：

</div>

<pre>var i = 0; 
for (let l = i; l < 10; l++) {  
　console.log(l); 
}</pre>

#### 域作用规则

<pre class="eval">for (let <var>expr1</var>; <var>expr2</var>; <var>expr3</var>) <var>statement</var>
</pre>

在这个例子中，<var>expr2</var>, <var>expr3</var>, 和 <var>statement</var> 都是包含在一个隐含域块中，其中也包含了 expr1.

## 例子

### `let`  对比 `var`

let的作用域是块，而var的作用域是函数

<pre class="brush: js">var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1</pre>

### `let` 在循环中

可以用 let 来代替 var ，在 for 定义块中使用块级变量.

<pre class="brush: js">for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i is not defined</pre>

## 非标准的 let 扩展

### `let块**（**`**`let` block）**

<div class="warning">

let blocks 在 Gecko 44 中已经废除（ [bug 1167029](https://bugzilla.mozilla.org/show_bug.cgi?id=1167029 "FIXED: Remove SpiderMonkey support for let blocks")） 。

</div>

**`let块`**提供了一种在块的范围内获取变量的值，而不会影响块外面名字相同的变量的值的方法。

#### 语法

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) block;</pre>

#### 描述

let 语句块为变量提供了局部作用域。它的作用是在单一代码块的词法范围内绑定零个或多个变量； 此外与普通语句块没有任何区别。需要特别注意的是， 在 `let `语句块内使用 var 声明的变量，它的作用域与在 let 语句块之外声明没有区别；这样的变量仍然具有函数作用域。在使用 `let` 语句块时，必须使用花括号，否则会导致语法错误。

#### 例子

<pre class="brush:js">var x = 5;
var y = 0;

let (x = x + 10, y = 12) {
  console.log(x + y); // 27
}

console.log(x + y); // 5
</pre>

let 代码块的规则与 JavaScript 中其他类型的代码块相同。允许在块内通过 let 关键字声明局部变量。

#### 作用域规则

使用 `let` 语句块绑定的变量，其作用域是 `let` 语句块本身，与任何其内部语句块的作用域一样，除非在这些内部语句块内又定义了同名的变量。

### `let `**表达式（** let expression）

<div class="warning">

`let` expression 在 Gecko 41 已经废除（[bug 1023609](https://bugzilla.mozilla.org/show_bug.cgi?id=1023609 "FIXED: Remove SpiderMonkey support for let expressions")）。

</div>

**`let`表达式** 可以将变量的作用域仅作用于一条语句。

#### 语法

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;</pre>

#### 例子

你可以在一条语句的范围中使用 `let` 关键字来设立变量：

<pre class="brush: js">var a = 5;
let(a = 6) console.log(a); // 6
console.log(a); // 5</pre>

#### 作用域规则

给定一个 `let` 表达式：

<pre class="eval">let (<var>decls</var>) <var>expr</var>
</pre>

这里隐式创建了一个包围 <var>expr</var> 的语句块。

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

<td>Initial definition. Does not specify let expressions or let blocks.</td>

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

<td>41.0</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[44](/en-US/Firefox/Releases/44 "Released on 2016-01-26.") (44)</td>

<td>11</td>

<td>17</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Temporal dead zone</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[35](/en-US/Firefox/Releases/35 "Released on 2015-01-13.") (35)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`let` expression<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>`let` block<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td>41.0</td>

<td>44.0 (44)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Temporal dead zone</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>35.0 (35)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`let` expression<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>`let` block<span title="This API has not been standardized."></span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## Firefox-specific notes

*   [1]: 只允许用在被`<script type="application/javascript;version=1.7">` 包裹的代码块中 （或者更高的 版本version）。当心，无论如何， 作为一个非标准特性， 很有可能会打破其他浏览器的支持。 [XUL](/zh-CN/docs/XUL "zh-CN/docs/XUL") 脚本标签实现这些特性不需要特殊的块。 请看 [bug 932517](https://bugzilla.mozilla.org/show_bug.cgi?id=932517 "FIXED: Enable let without version=1.7+ in non-strict mode")和[bug 932517](https://bugzilla.mozilla.org/show_bug.cgi?id=932517 "FIXED: Enable let without version=1.7+ in non-strict mode")。
*   ES6 compliance for `let` in SpIderMonkey is tracked in [bug 950547](https://bugzilla.mozilla.org/show_bug.cgi?id=950547 "FIXED: Make let and const ES6-compatible") and non-standard extensions are going to be removed in the future [bug 1023609](https://bugzilla.mozilla.org/show_bug.cgi?id=1023609 "FIXED: Remove SpiderMonkey support for let expressions").

## 相关链接

*   [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
*   [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)
*   [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
*   [Breaking changes in `let` and `const` in Firefox 44.](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
*   [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md)