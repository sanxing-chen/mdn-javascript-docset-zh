函数声明定义一个具有指定参数的函数。

<div class="noinclude">

你还可以使用  [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!") 构造函数和 一个[`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。") 定义函数。

你也可以通过使用 [Function](/en/JavaScript/Reference/Global_Objects/Function) 构造器或者 [函数表达式](/en/JavaScript/Reference/Operators/function) 定义一个函数。

</div>

## <span style="font-size: 2.14285714285714rem;">语法</span>

<pre class="eval">function _name_([_param_,[, _param_,[..., _param_]]]) {
   [_statements_]
}

</pre>

<dl>

<dt>`name`</dt>

<dd>函数名</dd>

</dl>

<dl>

<dt>`param`</dt>

<dd>要传递给函数的参数的名称。不同引擎中的最大参数数量不同。</dd>

<dd>

<s>一个函数最多有255个参数</s>

</dd>

</dl>

<dl>

<dt>`statements`</dt>

<dd>包含函数体的语句。</dd>

</dl>

## 描述

一个被函数声明创建的函数是一个 Function 对象，具有 Function 对象的所有属性、方法和行为。查看 [Function](/en/JavaScript/Reference/Global_Objects/Function) 以获取 function 的详细信息。

函数也可以被表达式创建（ [function expression](/en/JavaScript/Reference/Operators/function) ）

函数可以被有条件来声明，这意味着，在一个 if 语句里，函数声明是可以嵌套的。有的浏览器会将这种有条件的声明看成是无条件的声明，无论这里的条件是true还是false，浏览器都会创建函数。因此，它们不应该被使用。

默认情况下，函数是返回 undefined 的。想要返回一个其他的值，函数必须通过一个 [return](/en/JavaScript/Reference/Statements/return) 语句指定返回值。

### 有条件的创建函数

函数可以被有条件来声明，这意味着，在一个 if 语句里，函数声明是可以嵌套的。有的浏览器会将这种有条件的声明看成是无条件的声明，无论这里的条件是true还是false，浏览器都会创建函数,详见[这篇文章](http://kangax.github.io/nfe/#function-statements)。因此，它们不应该被使用。

### 函数声明提升

JavaScript 中的**函数声明**被提升到了**函数定义**。.你可以在函数声明之前使用该函数:

    hoisted(); 
    // "foo"

    function hoisted() {
         console.log("foo"); 
    }

    /* equal to*/
    var hoisted; 

    hoisted = function() {
      console.log("foo");
    }
    hoisted();
    // "foo" 

<div class="note">

注意 :

**函数表达式**[`function expressions`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。") 不会被提升:

</div>

    notHoisted(); 
    // TypeError: notHoisted is not a function

    var notHoisted = function() {
       console.log("bar");
    };

## 示例

### 示例: 使用函数

下面的代码声明了一个函数,该函数返回了销售的总金额, 参数是产品a,b,c分别的销售的数量.

    function calc_sales(units_a, units_b, units_c) {
       return units_a*79 + units_b * 129 + units_c * 699;
    }

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function definition</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions)</td>

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

<table style="border-color: transparent;" class="compat-table">

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

</tbody>

</table>

</div>

<div id="compat-mobile">

<table style="border-color: transparent;" class="compat-table">

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

</tbody>

</table>

</div>

## 相关链接

*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明 (function关键字后跟一个星号）定义了一个生成器函数 (generator function)，它返回一个  Generator  对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")