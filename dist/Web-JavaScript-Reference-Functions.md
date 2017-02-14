通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。

在JavaScript中，函数是第一等对象，不仅因为它既可以像普通对象一样拥有属性和方法，而且重要的是它可以被调用。简单来说它们是`[Function](/zh-cn/JavaScript/Reference/Global_Objects/Function "zh-cn/Core_JavaScript_1.5_Reference/Global_Objects/Function")`对象。

更多的例子和说明，参见 [JavaScript的指南的函数部分](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。

## 描述

在JavaScript中，每个函数其实都是一个`Function`对象。查看[`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")页面`了解其`属性和方法。

函数不同于过程。函数总是会返回一个值，但是一个过程有可能返回一个值，也有可能不返回。

如果一个函数中没有使用return语句，则它默认返回`undefined`。要想返回一个特定的值，则函数必须使用 `[return](/zh-cn/JavaScript/Reference/Statements/return "zh-cn/Core_JavaScript_1.5_Reference/Statements/return")` 语句来指定一个所要返回的值。(使用[new](/zh-cn/JavaScript/Reference/Operators/new "new")关键字调用一个[构造函数](/zh-cn/JavaScript/Reference/Global_Objects/Object/constructor "constructor")除外)。

调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。如果实参是一个包含原始值(数字，字符串，布尔值)的变量，则就算函数在内部改变了对应形参的值，返回后，该实参变量的值也不会改变。如果实参是一个对象引用，则对应形参会和该实参指向同一个对象。假如函数在内部改变了对应形参的值，返回后，实参指向的对象的值也会改变：

<pre class="brush: js line-numbers  language-js"> /* 定义函数 myFunc */
 function myFunc(theObject)
 {
   //实参 mycar 和形参 theObject 指向同一个对象.
   theObject.brand = "Toyota";
 }

 /*
  * 定义变量 mycar;
  * 创建并初始化一个对象;
  * 将对象的引用赋值给变量 mycar
  */
 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 /* 弹出 'Honda' */
 window.alert(mycar.brand);

 /* 将对象引用传给函数 */
 myFunc(mycar);

 /*
  * 弹出 'Toyota',对象的属性已被修改.
  */
 console.log(mycar.brand);
</pre>

在函数执行时，[`this` 关键字](/zh-cn/JavaScript/Reference/Operators/this "this")并不会指向正在运行的函数本身，而是指向调用该函数的对象。所以，如果你想在函数内部获取函数自身的引用，只能使用函数名或者使用[arguments.callee](/zh-cn/JavaScript/Reference/Functions_and_function_scope/arguments/callee "zh-cn/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/callee")属性(<u>[严格模式](/zh-cn/JavaScript/Strict_mode "https://developer.mozilla.org/zh-cn/JavaScript/Strict_mode")</u>下不可用)，如果该函数是一个匿名函数,则你只能使用后者。

## 函数定义

定义函数有多种方法:

### 函数声明 (<font face="Consolas, Liberation Mono, Courier, monospace">函数</font>语句)

有一个特殊的语法来声明函数(查看[函数语句](/zh-cn/JavaScript/Reference/Statements/function "zh-cn/Core_JavaScript_1.5_Reference/Statements/function")了解详情)：

<pre class="syntaxbox">function _name_([_param_[, _param_[, ... _param_]]]) { _statements_ }
</pre>

<dl>

<dt>`name`</dt>

<dd>函数名.</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>传递给函数的参数的名称，一个函数最多可以有255个参数。</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>组成函数体的声明语句。</dd>

</dl>

### 函数表达式 (`function` expression)

函数表达式和函数声明非常相似，它们甚至有相同的语法 (查看[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)了解详情 )：

<pre class="syntaxbox">function [_name_]([_param_] [, _param_] [..., _param_]) { _statements_ }
</pre>

<dl>

<dt>`name`</dt>

<dd>函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数。</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>传递给函数的参数的名称，一个函数最多可以有255个参数.</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>组成函数体的声明语句。</dd>

</dl>

### 函数生成器声明 (`function*` 语句)

<div class="note">

**注意：**函数生成器是ECMAScript 6新定义的，大部分浏览器尚不支持。

</div>

函数声明有一种特殊的语法 (详情请查阅[`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") )：

<pre class="syntaxbox">function* _name_([_param_[, _param_[, ..._param_]]]) { _statements_ }</pre>

<dl>

<dt>`name`</dt>

<dd>函数名称.</dd>

<dt>`param`</dt>

<dd>传递给函数的参数的名称，一个函数最多可以有255个参数。</dd>

<dt>`statements`</dt>

<dd>组成函数体的声明语句。</dd>

</dl>

### 函数生成器表达式 (`function* `表达式)

<div class="note">

**注意**: 函数生成器是ECMAScript 6新定义的，大部分浏览器尚不支持。

</div>

构造函数表达式和函数声明类似，并且有着相同的语法 (详情请查阅  [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。") ):

<pre class="syntaxbox">function* [_name_]([_param_] [, _param_] [..., _param_]) { _statements_ }</pre>

<dl>

<dt>`name`</dt>

<dd>函数名称。函数名可以被省略，在这种情况下该函数将变成匿名函数。</dd>

<dt>`param`</dt>

<dd>传递给函数的参数的名称。一个函数可以有多达255个参数</dd>

<dt>`statements`</dt>

<dd>组成函数体的声明语句。</dd>

</dl>

### 箭头函数表达式 (=>)

<div class="note">

Note: 箭头函数表达式是ECMAScript 6新定义的，大部分浏览器尚不支持。

</div>

箭头函数表达式有着更短的语法，并在词汇方面结合这个值  (详情请查阅 [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ):

<pre class="syntaxbox">([param] [, param]) => { statements } param => expression</pre>

<dl>

<dt>`param`</dt>

<dd>参数名称. 零参数需要用()表示.  只有一个参数时不需要括号. (例如 `foo => 1`)</dd>

<dt>`statements or expression`</dt>

<dd>多个声明statements需要用大括号括起来，而单个表达式时则不需要。表达式expression也是该函数的隐式返回值。</dd>

</dl>

###  `Function`构造函数

<div class="note">

**注意:** 不推荐使用 `Function` 构造函数创建函数,因为它需要的函数体作为字符串可能会阻止一些JS引擎优化,也会引起其他问题。

</div>

所有其他对象, [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!") 对象可以用new操作符创建:

<pre class="syntaxbox">new Function (_arg1_, _arg2_, ... _argN_, _functionBody_)</pre>

<dl>

<dt>`arg1, arg2, ... arg_N_`</dt>

<dd>函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的JavaScript标识符规则的字符串或用逗号分隔的字符串列表,例如“x”,“theValue”或“a,b”。</dd>

</dl>

<dl>

<dt>`functionBody`</dt>

<dd>一个构成的函数定义的，包含JavaScript声明语句的字符串。</dd>

</dl>

把Function的构造函数当作函数一样调用(不使用new操作符)的效果与作为Function的构造函数调用一样。

### 生成器函数的构造函数

<div class="note">

**注意:** `GeneratorFunction` 不是一个全局对象，但可以从构造函数实例取得。(详情请查阅[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/生成器函数)).

</div>

<div class="note">

**注意:** 不推荐使用构造器函数的构造函数 (`GeneratorFunction` constructor)创建函数，因为它需要的函数体作为字符串可能会阻止一些JS引擎优化，也会引起其他问题。

</div>

所有其他对象, [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!") 对象可以用 new 操作符创建：

<pre class="syntaxbox">new GeneratorFunction (_arg1_, _arg2_, ... _argN_, _functionBody_)</pre>

<dl>

<dt>`arg1, arg2, ... arg_N_`</dt>

<dd>函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的JavaScript标识符规则的字符串或用逗号分隔的字符串列表,例如“x”,“theValue”或“a,b”。</dd>

</dl>

<dl>

<dt>`functionBody`</dt>

<dd>一个构成的函数定义的，包含JavaScript声明语句的字符串。</dd>

</dl>

把Function的构造函数当作函数一样调用(不使用new操作符)的效果与作为Function的构造函数调用一样。

## Function 参数

<div class="note">

**注意:** 默认(Default)的和其它(Rest)的参数是ECMAScript 6新定义的，浏览器尚未普遍支持。

</div>

### 默认(Default)参数

如果没有值或传入了未定义的值，默认函数参数允许形式参数使用默认值初始化。 详情请查阅：[default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### 其它(Rest)参数

其它(rest)参数语法允许将数量不限的参数(arguments)描述成一个数组。 详情请查阅： [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## 参数(arguments)对象

你可以参阅在函数里使用arguments对象的函数参数。查阅： [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

*   `[arguments](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments)`: 一个包含了传递给当前执行函数参数的类似于数组的对象。
*   `[arguments.callee](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee)` <span title="This deprecated API should no longer be used, but will probably still work."></span>: 当前正在执行的函数。
*   `[arguments.caller](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller)` <span title="This is an obsolete API and is no longer guaranteed to work."></span>: 调用当前执行函数的函数。
*   `[arguments.length](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length)`: 传给函数的参数的数目。

## 方法函数定义

### Getter 和 setter 函数

你可以在支持添加新属性的任何标准的内置对象或用户定义的对象内定义getter(访问方法)和setter(设置方法)。使用对象字面量语法定义getters和setters方法。

<dl>

<dt>[get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)</dt>

<dd>

当查找某个对象属性时，该对象属性将会与被调用函数绑定。

</dd>

<dt>[set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)</dt>

<dd>当试图设置该属性时，对象属性与被调用函数绑定。</dd>

</dl>

### 方法定义语法

<div class="note">

**注意:** **方法定义**是ECMAScript 6新定义的，浏览器尚未普遍支持。

</div>

从ECMAScript 6开始, 你可以用更短的语法定义自己的方法，类似于getters和setters。详情请查阅 [method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) .

<pre class="brush: js line-numbers  language-js"> var obj = {
   foo() {},
   bar() {}
 };
</pre>

## <font face="Consolas, Liberation Mono, Courier, monospace">Function构造函数 </font>vs 函数声明 vs 函数表达式

对比下面的例子：

一个用Function构造函数定义的函数,被赋值给变量_**multiply**_:

<pre class="brush: js line-numbers  language-js">  function multiply(x, y) {
    return x * y;
}
</pre>

`<font face="Open Sans, Arial, sans-serif">一个匿名函数的函数表达式，被赋值给变量_**multiply**_</font>:`

<pre class="brush: js line-numbers  language-js"> var multiply = function(x, y) {
   return x * y;
 };
</pre>

`<font face="Open Sans, Arial, sans-serif">一个命名为func_named的函数的函数表达式，被赋值给变量_**multiply**_</font>:`

<pre class="brush: js">var multiply = function func_name(x, y) {
   return x * y;
};</pre>

### 差别

虽然有一些细微的差别，但所起的作用都差不多：

函数名和函数的变量存在着差别。函数名不能被改变，但函数的变量却能够被再分配。函数名只能在函数体内使用。倘若在函数体外使用函数名将会导致错误（如果函数之前是通过一个var语句声明的则是undefined）。例如：

<pre class="brush: js line-numbers  language-js">var y = function x() {};
alert(x); // throws an error
</pre>

当函数是通过 [`Function`'s toString method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)被序列化时，函数名同样也会出现。

另一方面，被函数赋值的变量仅仅受限于它的作用域，该作用域确保包含着该函数被声明时的作用域。

正如第四个例子所展示的那样，函数名与被函数赋值的变量是不相同的. 彼此之间没有关系。函数声明同时也创建了一个和函数名相同的变量。因此，与函数表达式定义不同，以函数声明定义的函数能够在它们被定义的作用域内通过函数名而被访问到：

使用用 '`new Function'定义的函数没有函数名。` 然而，在 [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) JavaScript引擎中，其函数的序列化形式表现的好像它拥有一个名叫"anonymous"的名称一样。比如，使用 `alert(new Function())` 输出：

<pre class="brush: js line-numbers  language-js">function anonymous() {
}</pre>

而实际上其函数并没有名称，`anonymous` 不是一个可以在函数内被访问到的变量。例如，下面的例子将会导致错误：

<pre class="brush: js line-numbers  language-js">var foo = new Function("alert(anonymous);"); 
foo(); // undefined 
</pre>

和通过函数表达式定义或者通过Function构造函数定义的函数不同，函数声明定义的函数可以在它被声明之前使用。举个例子：

<pre class="brush: js">foo(); // alerts FOO!
function foo() {
   alert('FOO!');
}</pre>

函数表达式定义的函数继承了当前的作用域。换言之，函数构成了闭包。另一方面，Function构造函数定义的函数不继承任何全局作用域以外的作用域(那些所有函数都继承的)。

通过函数表达式定义的函数和通过函数声明定义的函数只会被解析一次，而Function构造函数定义的函数却不同。也就是说，每次构造函数被调用，传递给Function构造函数的函数体字符串都要被解析一次 。虽然函数表达式每次都创建了一个闭包，但函数体不会被重复解析，因此函数表达式仍然要快于"`new Function(...)`"。 所以Function构造函数应尽可能地避免使用。

有一点应该要注意的，在通过解析Function构造函数字符串产生的函数里，内嵌的函数表达式和函数声明不会被重复解析。例如：

<pre class="brush: js">var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // 函数体字符串"function() {\n\talert(bar);\n}"的这一部分不会被重复解析。</pre>

函数声明非常容易（经常是意外地）转换为函数表达式。当它不再是一个函数声明：

*   成为表达式的一部分
*   不再是函数或者script自身的“源元素” （source element）。在script或者函数体内“源元素”并非是内嵌的语句（statement）。

<pre class="brush: js">var x = 0;               // source element
if (x == 0) {            // source element
   x = 10;               // 非source element
   function boo() {}     // 非 source element
}
function foo() {         // source element
   var y = 20;           // source element
   function bar() {}     // source element
   while (y == 10) {     // source element
      function blah() {} // 非 source element
      y++;               //非source element
   }
}
</pre>

### 例子

<pre class="brush: js line-numbers  language-js">// 函数声明
function foo() {}

// 函数表达式
(function bar() {})

// 函数表达式
x = function hello() {}

if (x) {
   // 函数表达式
   function world() {}
}

// 函数声明
function a() {
   // 函数声明
   function b() {}
   if (0) {
      //函数表达式
      function c() {}
   }
}
</pre>

## 有条件地定义一个函数

可以有条件地使用函数表达式( [ECMA-262 Edition 3](http://www.ecma-international.org/publications/standards/Ecma-262.htm) 标准允许的一个扩展) 或者Function构造函数来定义函数。请注意[ES5已经不允许在严格模式下使用函数表达式](https://bugzilla.mozilla.org/show_bug.cgi?id=609832) 。此外，该特性在跨浏览器间不能一致地工作，因此你不应该依赖它。

在下面的script中，**`zero`**函数永远不会被定义和调用，因为'if (0)'的运算结果是false:

<pre class="brush: js">if (0) {
   function zero() {
      document.writeln("This is zero.");
   };
   zero();
}</pre>

如果script的条件改为'`if (1)`'，那么zero函数就能够被定义。

注意：虽然这类函数看起来像是函数声明，但它实际上是表达式（或者语句），因为它是内嵌于另外一个语句当中的。来看看函数声明和函数表达式之间的不同。

注意：一些JavaScript引擎， [SpiderMonkey](https://developer.mozilla.org/en-US/docs/SpiderMonkey)除外，不能正确地处理任何带有名称的函数表达式的函数定义，这将导致即使条件结果永远为false，而zero函数都会被定义。有条件地定义一个函数的一个更安全的方法是定义一个匿名函数并将它赋值给一个变量：

<pre class="brush: js">if (0) {
   var zero = function() {
      document.writeln("This is zero.");
   };
   zero();
}</pre>

## 示例

### 返回格式化数字

下面的函数返回一个字符串，其中包含了一个格式化的、以一个由0开头并填充的数字。

<pre class="brush: js">// 这个函数返回一个由0开头并填充的字符串
function padZeros(num, totalLen) {
   var numStr = num.toString();             // 用字符串返回值进行初始化
   var numZeros = totalLen - numStr.length; // 计算zeros顺序
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}</pre>

下面的语句调用了padZeros函数：

<pre class="brush: js">var result;
result = padZeros(42,4); // returns "0042"
result = padZeros(42,2); // returns "42"
result = padZeros(5,4);  // returns "0005"</pre>

### 检测函数是否存在

你可以通过 **typeof** 操作符检测一个函数是否存在。在下面的例子中，用一个测试来演示检测window对象是否拥有一个noFunc函数的属性。如果存在，那就使用它；否则就采取其它的一些操作。

<pre class="brush: js">if ('function' == typeof window.noFunc) {
   // use noFunc()
 } else {
   // do something else
 }</pre>

注意在 if语句中，使用了noFunc的引用--在函数名的后面没有括号“（）”，所以实际函数并没有被调用。

## 规范

<table class=" standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function Definition</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>新定义的： Arrow functions, Generator functions, default parameters, rest parameters</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Function definitions</small>](https://tc39.github.io/ecma262/#sec-function-definitions)</td>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基本支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Generator function</td>

<td>39</td>

<td>[26.0](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>26</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>箭头函数</td>

<td>45</td>

<td>[22.0](/en-US/Firefox/Releases/22 "Released on 2013-06-25.") (22.0)</td>

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

<td>基本支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Generator function</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>39</td>

<td>26.0 (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>26</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>箭头函数</td>

<td><span style="color: #f00;">未实现</span></td>

<td>45</td>

<td>22.0 (22.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 参阅

*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")
*   [`Arrow functions`](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions "箭头函数就是个简写形式的函数表达式，并且它拥有词法作用域的this值（即不会新产生自己作用域下的this, arguments, super 和 new.target 等对象）。此外，箭头函数总是匿名的。")
*   [`Default parameters`](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters "如果一个形参没有被传入对应的实参或者传入了undefined,则该形参会被赋一个默认值.")
*   [`Rest parameters`](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters "剩余参数（rest parameter）允许长度不确定的实参表示为一个数组。")
*   [`Arguments object`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类数组对象。代表传给一个function的参数列表。")
*   [`getter`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get "get 语句作为函数绑定在对象的属性上,当访问该属性时调用该函数.")
*   [`setter`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set "set 语法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。")
*   [`Method definitions`](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions "ECMAScript从ECMAScript6开始，引入了一种更简短的在对象初始器中定义方法的语法，这是一种把方法名直接赋给函数的简写方式。")
*   [Functions and function scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope "JavaScript/Reference/Functions_and_function_scope")