箭头函数表达式的语法比[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)短，并且不绑定自己的 [this](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，[arguments](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)，[super](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)或 [new.target](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。此外，箭头函数总是[匿名的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name)。这些函数表达式最适合非方法函数，它们不能用作构造函数。

## 语法

### 基础语法

<pre class="syntaxbox">**(**_param1_, _param2_, …, _paramN_**) => {** _statements_ **}**
**(**_param1_, _param2_, …, _paramN_**) =>** _expression_
         // equivalent to:  => { return expression; }

// 如果只有一个参数，圆括号是可选的:
_(singleParam)_ **=> {** _statements_ **}**
_singleParam_ **=>** { _statements }_

// 无参数的函数需要使用圆括号:
**() => {** _statements_ **}**
</pre>

### 高级语法

<pre class="syntaxbox">// 返回对象字面量时应当用圆括号将其包起来:
_params_ => ({_foo: bar_})

// 支持 [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) 和 [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters):
(_param1_, _param2_, **...rest**) => { _statements_ }
(_param1_ **= defaultValue1**, _param2_, …, paramN **= defaultValueN**) => { _statements_ }

// [Destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
</pre>

详细的语法例子可以参考 [这里](http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax "http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax")。

## 描述

另见 ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).

箭头函数的引入有两个方面的影响：一是更简短的函数书写，二是对 `this` 的词法解析`。`

### 更短的函数

在一些函数式编程模式里，更短的函数书写方式很受欢迎。试比较：

<pre class="brush: js">var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );</pre>

### `不绑定 this`

在箭头函数出现之前，每个新定义的函数都有其自己的  `[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)` 值（例如，构造函数的 this 指向了一个新的对象；[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)下的函数的 `this` 值为 `undefined`；如果函数是作为对象的方法被调用的，则其 this 指向了那个调用它的对象）。在面向对象风格的编程中，这被证明是非常恼人的事情。

<pre class="brush: js">function Person() {
  // 构造函数 Person() 定义的 ``this` 就是新实例对象自己`
  this.age = 0;
  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数定义了其内部的 `this`
    // 为全局对象, 不同于构造函数Person()的定义的 `this`
    this.age++; 
  }, 1000);
}

var p = new Person();</pre>

在 ECMAScript 3/5 中，这个问题可以通过新增一个变量来指向期望的 `this` 对象，然后将该变量放到闭包中来解决。

<pre class="brush: js">function Person() {
  var self = this; // 也有人选择使用 `that` 而非 `self`. 
                   // 只要保证一致就好.
  self.age = 0;

  setInterval(function growUp() {
    // 回调里面的 `self` 变量就指向了期望的那个对象了
    self.age++;
  }, 1000);
}</pre>

除此之外，还可以使用 [bind 函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)，把期望的 `this` 值传递给 `growUp()` 函数。

箭头函数则会捕获其所在上下文的  `this` 值，作为自己的 `this` 值，因此下面的代码将如期运行。

<pre class="brush: js">function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向了 person 对象
  }, 1000);
}

var p = new Person();</pre>

#### 与 strict mode 的关系

考虑到 `this` 是词法层面上的，[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中与 `this` 相关的规则都将被忽略。

<pre class="brush: js">var f = () => {'use strict'; return this};
f() === window; // 或全局对象</pre>

严格模式的其他规则依然不变.

#### 使用 call 或 apply 调用

由于 `this`已经在词法层面完成了绑定，通过 `call()`_ 或_ `apply()` 方法调用一个函数时，只是传入了参数而已，对 `this` 并没有什么影响：

<pre class="brush: js">var adder = {
  base : 1,

  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3 ——译者注）</pre>

### `不绑定 arguments`

箭头函数不会在其内部暴露出  [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 对象： `arguments.length`, `arguments[0]`, `arguments[1]` 等等，都不会指向箭头函数的 arguments，而是指向了箭头函数所在作用域的一个名为 arguments 的值（如果有的话，否则，就是 undefined。——译者注）。

<pre class="brush: js">var arguments = 42;
var arr = () => arguments;

arr(); // 42

function foo() {
  var f = () => arguments[0]; // foo's implicit arguments binding
  return f(2);
}

foo(1); // 1</pre>

箭头函数没有自己的 `arguments` 对象，不过在大多数情形下，[rest参数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)可以给出一个解决方案：

<pre class="brush: js">function foo() { 
  var f = (...args) => args[0]; 
  return f(2); 
}

foo(1); // 2</pre>

### 像方法一样使用箭头函数

如上所述, 箭头函数表达式对没有方法名的函数是最合适的.让我们看看当我们试着把它们作为方法时发生了什么.

<pre class="brush: js">'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}
</pre>

箭头函数没有定义this绑定。 另一个涉及[`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。"):的示例：

<pre class="brush: js">'use strict';
var obj = {
  a: 10
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a+10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }
});</pre>

### 使用 `new` 操作符

箭头函数不能用作构造器，和 new 一起用就会抛出错误。

### 使用 `yield` 关键字

 `[yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)` 关键字通常不能在箭头函数中使用（except when permitted within functions further nested within it）。因此，箭头函数不能用作Generator函数。

## 返回对象字面量

请牢记，用 `params => {object:literal} `这种简单的语法返回一个对象字面量是行不通的：

<pre class="brush: js">var func = () => {  foo: 1  };
// Calling func() returns undefined!

var func = () => {  foo: function() {}  };
// SyntaxError: function statement requires a name</pre>

这是因为花括号（即 `{}` ）里面的代码被解析为声明序列了（例如， `foo` 被认为是一个 label, 而非对象字面量里的键）。

所以，记得用圆括号把对象字面量包起来：

    var func = () => ({ foo: 1 });

## `换行`

箭头函数在参数和箭头之间不能换行哦

    var func = ()
               => 1; 

## 解析顺序

在箭头函数中的箭头不是操作符(或者运算符,就像'+ -'那些), 但是 箭头函数有特殊的解析规则就是:相比普通的函数, 随着操作符优先级不同交互也不同(建议看英文版)

    let callback;

    callback = callback || function() {}; // ok
    callback = callback || () => {};      // SyntaxError: invalid arrow-function arguments
    callback = callback || (() => {});    // ok

## 示例

<pre class="brush: js"><span class="co1">// 一个空箭头函数,返回 undefined</span>
let empty = () => {};

(() => "foobar")() // 返回 "foobar" 

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

`// 更多简明的promise链
promise.then(a => {
  // ...
}).then(b => {
   // ...
});`</pre>

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
<small lang="zh-CN">Arrow Function Definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Arrow Function Definitions</small>](https://tc39.github.io/ecma262/#sec-arrow-function-definitions)</td>

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

<th>Edge</th>

<th>IE</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>45.0</td>

<td>[22.0](/en-US/Firefox/Releases/22 "Released on 2013-06-25.") (22.0)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>

<span style="color: #f00;">未实现</span>

</td>

<td>32</td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>45.0</td>

<td>22.0 (22.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>45.0</td>

</tr>

</tbody>

</table>

</div>

## 火狐规范注意事项

*   The initial implementation of arrow functions in Firefox made them automatically strict. This has been changed as of [Firefox 24](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/24 "/en-US/docs/Mozilla/Firefox/Releases/24"). The use of `"use strict";` is now required.
*   Arrow functions are semantically different from the non-standard [expression closures](/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_Closures "表达式闭包是定义简单函数的一种便捷方式。") added in [Firefox 3](https://developer.mozilla.org/en-US/Firefox/Releases/3) (details: [JavaScript 1.8](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8)), for [expression closures](/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_Closures "表达式闭包是定义简单函数的一种便捷方式。") do not bind`this` lexically.
*   Prior to [Firefox 39](https://developer.mozilla.org/en-US/Firefox/Releases/39), a line terminator (`\n`) was incorrectly allowed after arrow function arguments. This has been fixed to conform to the ES6 specification and code like `() \n => {}` will now throw a [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。") in this and later versions.

## 相关链接

*   ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)