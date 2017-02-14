**`void` 运算符**会对给定的表达式进行求值，然后直接返回 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。

## 语法

<pre class="syntaxbox">void _expression_</pre>

## 描述

这个运算符能向期望一个表达式的值是[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")的地方插入会产生副作用的表达式。

void 运算符通常只用于获取 `undefined 的`原始值，一般使用 `void(0)<font face="Open Sans, Arial, sans-serif">（等同于 </font>``void 0`）。在上述情况中，也可以使用全局变量[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 来代替（假定其仍是默认值）。

## 立即调用的函数表达式

在使用[立即执行的函数表达式](/zh-CN/docs/Glossary/IIFE)时，可以利用 `void` 运算符让 JavaScript 引擎把一个函数识别成函数表达式而不是函数声明（语句）。

<pre class="brush: js">void function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
     };
    var biz = function () {};

    foo();
    biz();
}();
</pre>

## JavaScript URIs

当用户点击一个以 `javascript:` URI 时，浏览器会对冒号后面的代码进行求值，然后把求值的结果显示在页面上，这时页面基本上是一大片空白，这通常不是我们想要的。只有当这段代码的求值结果是 `undefined` 的时候，浏览器才不会去做这件傻事，所以我们经常会用 `void` 运算符来实现这个需求。像下面这样：

<pre class="brush: html"><a href="javascript:void(0);">
  这个链接点击之后不会做任何事情，如果去掉 void()，
  点击之后整个页面会被替换成一个字符 0。
</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  点击这个链接会让页面背景变成绿色。
</a>
</pre>

注意，虽然这么做是可行的，但利用 `javascript:` 伪协议来执行 JavaScript 代码是不推荐的，推荐的做法是为链接元素绑定 `click` 事件。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2016 Draft (7th Edition, ECMA-262)  
<small lang="zh-CN">The void Operator</small>](https://tc39.github.io/ecma262/#sec-void-operator)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">The void Operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-void-operator)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The void Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">The void Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">The void Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.1</td>

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

*   `[undefined](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`