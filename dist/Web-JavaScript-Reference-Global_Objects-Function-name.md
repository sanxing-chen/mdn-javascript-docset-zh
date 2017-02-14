<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

## 概述

**`name`** 属性返回所属函数的函数名称.

## 描述

`name `属性返回一个函数的名称, 如果是匿名函数, 则返回空字符串:

<pre class="brush:js">function doSomething() { }

alert(doSomething.name); // 弹出 "doSomething" </pre>

<span style="line-height: 1.5; color: rgb(77, 78, 83);">下面的例子创建了两个匿名函数, 它们的 </span>`name `<span style="line-height: 1.5; color: rgb(77, 78, 83);">属性都返回空字符串.</span>:

<pre class="brush:js">var f = function() { };
var object = {
  someMethod: function() {}
};

alert(f.name == ""); // true
alert(object.someMethod.name == ""); // true
</pre>

使用语法`new [Function](https://developer.mozilla.org/zh-cn/JavaScript/Reference/Global_Objects/Function "Function")(...)`或者直接 `[Function](https://developer.mozilla.org/zh-cn/JavaScript/Reference/Global_Objects/Function "Function")``(...)` 可以创建一个匿名函数, 在Firefox 和 Safari上, 该函数的 `name `属性赋值为 `"anonymous"`, 在 Chrome 和 Opera 上,该函数的 `name `属性为一个空字符串, IE不支持 `name `属性.

在 [`函数表达式`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "此页面仍未被本地化, 期待您的翻译!") 中, 你可以指定函数的名称:

<pre class="brush:js">var object = {
  someMethod: function object_someMethod() {}
};
alert(object.someMethod.name); // 弹出 "object_someMethod"

try { object_someMethod } catch(e) { alert(e); }
// ReferenceError: object_someMethod is not defined
</pre>

你不能改变一个函数的 `name` 属性的值, 因为该属性是只读的:

<pre class="brush:js">var object = {
  // someMethod 属性指向一个匿名函数
  someMethod: function() { }
};

object.someMethod.name = "someMethod";
alert(object.someMethod.name); // 弹出空字符串, name属性是只读的.
</pre>

## 示例

<span style="line-height: 1.5;">你可以使用 `obj.constructor.name` 来查看一个对象所属的"类"的名称:</span>

<pre class="brush:js">function A() { }

var b = new A();

alert(b.constructor.name); //Alerts "A"
</pre>

## 规范

不在任何规范中.

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

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>