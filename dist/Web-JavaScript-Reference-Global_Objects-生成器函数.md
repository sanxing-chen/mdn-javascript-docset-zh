## Summary 概要

**`GeneratorFunction构造器生成新的`**[`generator function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") 对象。在JavaScript中，生成器函数实际上都是`GeneratorFunction的实例对象`

注意到，`GeneratorFunction并不是一个全局对象。可以通过下面的代码获取。`

<pre class="brush: js">Object.getPrototypeOf(function*(){}).constructor
</pre>

## Syntax 语法

    new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)

### 参数

<dl>

<dt>`arg1, arg2, ... arg_N_`</dt>

<dd>Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".</dd>

<dt><font face="Consolas, Liberation Mono, Courier, monospace">函数体</font></dt>

<dd>一个包含多条表示JavaScript函数体语句的字符串。</dd>

</dl>

## Description 描述

[`generator function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") objects created with the `GeneratorFunction` constructor are parsed when the function is created. This is less efficient than declaring a generator function with a [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

<div class="note">

**Note:** [`generator function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") created with the `GeneratorFunction` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `GeneratorFunction` constructor was called. This is different from using [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。") with code for a generator function expression.

</div>

Invoking the `GeneratorFunction` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Properties 属性

<dl>

<dt>`**GeneratorFunction.length**`</dt>

<dd>The `GeneratorFunction` constructor's length property whose value is 1.</dd>

<dt>[`GeneratorFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Allows the addition of properties to all generator function objects.</dd>

</dl>

## `GeneratorFunction` prototype object

### Properties

<div>

<dl>

<dt>`**GeneratorFunction.constructor**`</dt>

<dd>The initial value is [`GeneratorFunction`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction "The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object.").</dd>

<dt>`**GeneratorFunction.prototype.prototype**`</dt>

<dd>The value is `%GeneratorPrototype%`.</dd>

</dl>

</div>

## `GeneratorFunction` 实例

`GeneratorFunction` instances inherit methods and properties from [`GeneratorFunction.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype "此页面仍未被本地化, 期待您的翻译!"). As with all constructors, you can change the constructor's prototype object to make changes to all `GeneratorFunction` instances.

## Examples 例子

### Creating a generator function from a `GeneratorFunction` constructor

<pre class="brush: js">var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
</pre>

## Specifications 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">GeneratorFunction</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-generatorfunction-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

</tbody>

</table>

## Browser compatibility 浏览器兼容性

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

<td>[26](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26)</td>

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

<td>[26](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## See also 另见

*   [`function* function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function "Function 构造器会创建一个新的 Function 对象。 在 JavaScript 中每个函数都是一个Function对象。")
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [Functions and function scope](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")