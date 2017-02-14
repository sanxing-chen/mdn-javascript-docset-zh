## 概述

`yield` 关键字用来暂停和继续一个生成器函数 ([`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。") or [legacy generator](/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators#Generators.3A_a_better_way_to_build_Iterators "/zh-CN/docs/JavaScript/Guide/Iterators_and_Generators")).

## 语法

<pre class="syntaxbox language-html"> yield [[expression]];</pre>

<dl>

<dt>`expression`</dt>

<dd>用作返回值.  如果忽略, 将返回 `undefined` .</dd>

</dl>

## 描述

`yield` 关键字使生成器函数暂停执行，并返回跟在它后面的表达式的当前值. 可以把它想成是<span style="line-height: 1.5;"> </span>`return`<span style="line-height: 1.5;"> 关键字的</span><span style="line-height: 1.5;">一个基于生成器的版本</span><span style="line-height: 1.5;">.</span>

`yield` 关键字实际返回一个对象，包含两个属性, `value` 和 `done`.  `value` 属性为 `yield` expression 的值,  `done` 是一个布尔值用来指示生成器函数是否已经全部完成.

一旦在 `yield` expression 处暂停,  除非外部调用生成器的 `next()` 方法，否则生成器的代码将不能继续执行. 这使得可以对生成器的执行以及渐进式的返回值进行直接控制.

## 示例

以下代码是一个生成器函数的声明, along with a helper function.

<pre class="brush: js">function* foo(){
  var index = 0;
  while (index <= 2) // when index reaches 3, 
                     // yield's done will be true 
                     // and its value will be undefined;
    yield index++;
}</pre>

一旦生成器函数已定义，可以通过构造一个迭代器来使用它.

<pre class="brush: js">var iterator = foo();
console.log(iterator.next()); // { value:0, done:false }
console.log(iterator.next()); // { value:1, done:false }
console.log(iterator.next()); // { value:2, done:false }
console.log(iterator.next()); // { value:undefined, done:true }
</pre>

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Yield</small>](http://www.ecma-international.org/ecma-262/6.0/#)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

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

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>39</td>

<td>[26.0](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26.0)</td>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td>yes (when?)</td>

<td>26.0 (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Iterators](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
*   [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield* "在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。")