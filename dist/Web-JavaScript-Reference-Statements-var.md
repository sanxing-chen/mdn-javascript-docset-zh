var声明了一个变量，并且可以同时初始化该变量。

## 语法

<pre class="syntaxbox">var _varname1 [_= _value1 [_, _varname2 [_, _varname3 ... [_, _varnameN]]]]_;</pre>

<dl>

<dt>`varnameN`</dt>

<dd>变量名。变量名可以定义为任何合法标识符。</dd>

</dl>

<dl>

<dt>`valueN`</dt>

<dd>变量的初始化值。该值可以为任何合法表达式。</dd>

</dl>

## 描述

变量声明无论出现在代码的任何位置，都会在任何代码执行之前处理。使用var语句声明的变量的作用域是当前执行位置的上下文：一个函数的内部（声明在函数内）或者全局（声明在函数外）。

给一个非声明变量赋值会隐式创建一个全局变量（全局object的一个属性）。声明变量（Declared Variable）和非声明变量（Undeclared Variable）的区别是：

1\. 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的。

<pre class="brush: js">function x() {
  y = 1;   // 在严格模式（strict mode）下会抛出ReferenceError异常。
  var z = 2;
}

x();

console.log(y); // 打印"1" 。
console.log(z); // 抛出ReferenceError: z未在x外部声明。
</pre>

2\. 声明变量在任何代码执行前创建，而非声明变量只有在执行赋值操作的时候才会被创建。

<pre class="brush: js">console.log(a);                // 抛出ReferenceError。
console.log('still going...'); // 永不执行。</pre>

<pre class="brush: js">var a;
console.log(a);                // 打印"undefined"或""（不同浏览器实现不同）。
console.log('still going...'); // 打印"still going..."。</pre>

3\. 声明变量是它所在上下文环境的不可配置属性（non-configurable property），非声明变量是可配置的（例如非声明变量可以被删除）。

<pre class="brush: js">var a = 1;
b = 2;

delete this.a; // 在严格模式（strict mode）下抛出TypeError，其他情况下执行失败并无任何提示。
delete this.b;

console.log(a, b); // 抛出ReferenceError。
// 'b'属性已经被删除。</pre>

由于以上三个区别，声明变量的错误会导致不可预测的结果。于是，**无论是否在函数中，我们总是推荐使用声明变量**。在ECMAScript 5的严格模式（[strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)）下，给一个未声明的变量赋值会抛出错误。

### 变量声明提升（var hoisting）

由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用，这个行为叫做“hoisting”。“hoisting”就像是把所有的变量声明移动到函数或者全局代码的开头位置。

<pre class="brush: js">bla = 2
var bla;
// ...

// 可以理解为：

var bla;
bla = 2;
</pre>

由于这个原因，我们建议总是在作用域的最开始（函数或者全局代码的开头）声明变量。这样可以使变量的作用域变得清晰。

## 例子

### 声明并初始化两个变量：

<pre class="brush: js">var a = 0, b = 0;
</pre>

### 给两个变量赋值成字符串值：

<pre class="brush: js">var a = "A";
var b = a;

// 等效于：

var a, b = a = "A";
</pre>

留意其中的顺序：

<pre class="brush: js">var x = y, y = 'A';
console.log(x + y); // undefinedA
</pre>

在这里，x和y在代码执行前就已经创建了，而赋值操作发生在创建之后。当"`x = y`"执行时，y已经存在，所以不抛出`ReferenceError，并且它的值是`'`undefined`'。所以x被赋予undefined值。然后，`y被赋予`'A'。于是在执行完第一行之后，`x === undefined && y === 'A'才形成了`<span style="background-color: #f6f6f2; font-family: courier new,andale mono,monospace; font-size: 1rem; line-height: 19px;">undefinedA</span><span style="font-family: courier new,andale mono,monospace; font-style: inherit; font-weight: inherit; line-height: 1.5;">这样的结果。</span>

### 多个变量的初始化

<pre class="brush: js">var x = 0;

function f(){
  var x = y = 1; // x在函数内部声明，y不是！
}
f();

console.log(x, y); // 0, 1
// x是全局变量。
// y是隐式声明的全局变量。 </pre>

### 隐式全局变量和外部函数作用域

看起来像是隐式全局作用域的变量也有可能是其外部函数变量的引用。

<pre class="brush: js">var x = 0;  // x是全局变量，并且赋值为0。

console.log(typeof z); // undefined，因为z还不存在。

function a() { // 当a被调用时，
  var y = 2;   // y被声明成函数a作用域的变量，然后赋值成2。

  console.log(x, y);   // 0 2 

  function b() {       // 当b被调用时，
    x = 3;  // 全局变量x被赋值为3，不生成全局变量。
    y = 4;  // 已存在的外部函数的y变量被赋值为4，不生成新的全局变量。
    z = 5;  // 创建新的全局变量z，并且给z赋值为5。 
  }         // (在严格模式下（strict mode）抛出ReferenceError)

  b();     // 调用b时创建了全局变量z。
  console.log(x, y, z);  // 3 4 5
}

a();                   // 调用a时同时调用了b。
console.log(x, z);     // 3 5
console.log(typeof y); // undefined，因为y是a函数的本地（local）变量。</pre>

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

<td>Initial definition. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">var statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">variable statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">variable statement</small>](https://tc39.github.io/ecma262/#sec-variable-statement)</td>

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

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

*   [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
*   [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)