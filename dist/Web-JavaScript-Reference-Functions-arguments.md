**`arguments`** 是一个类似数组的对象, 对应于传递给函数的参数。

### 语法

<pre class="syntaxbox">arguments</pre>

## 描述

arguments对象是所有函数中可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始。例如，如果一个函数传递了三个参数，你可以参考它们如下：

<pre class="brush: js">arguments[0]
arguments[1]
arguments[2]
</pre>

参数也可以被设置:

<pre class="brush: js">arguments[1] = 'new value';</pre>

arguments对象不是一个 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 。它类似于数组，但除了 [长度](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length)之外没有任何数组属性。例如，它没有 [pop](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "JavaScript/Reference/Global_Objects/Array/pop") 方法。但是它可以被转换为一个真正的数组：：

<pre class="brush: js">var args = Array.prototype.slice.call(arguments); 

var args = [].slice.call(arguments);
</pre>

你还可以使用  [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Array.from() 方法从类似数组或可迭代对象创建一个新的数组实例。")方法或 [spread 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)将 arguments 转换为真正的数组：

    var args = Array.from(arguments);
    var args = [...arguments];

<div class="warning">

不应在 arguments 对象上使用 slice 方法，这会阻碍 JavaScript 引擎的优化 (比如 V8 引擎)。作为替代，应通过遍历 arguments 对象的方式来构建一个新的数组。[更多信息](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)。

</div>

如果 [Array generics](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods "https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Array#Array_generic_methods") 可用的话，下面的代码可以作为替代:

<pre class="brush: js">var args = Array.slice(arguments);</pre>

`arguments` 对象仅在函数内部有效，在函数外部调用 arguments 对象会出现一个错误。

如果你调用一个函数，当这个函数的参数数量比它显式声明的参数数量更多的时候，你就可以使用 `arguments` 对象。这个技术对于参数数量是一个可变量的函数来说比较有用。 你可以用 `[arguments.length](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length "JavaScript/Reference/Functions_and_function_scope/arguments/length")` 来得到参数的数量，然后可以用 `arguments` object 来对每个参数进行处理。 (想要得到函数签名的参数数量, 请使用 `[Function.length](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length "JavaScript/Reference/Global_Objects/Function/length")` 属性。)

## 属性

<dl>

<dt>`[arguments.callee](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee "JavaScript/Reference/Functions_and_function_scope/arguments/callee")`</dt>

<dd>指向当前执行的函数。</dd>

<dt>`[arguments.caller](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller "JavaScript/Reference/Functions_and_function_scope/arguments/caller")`<span title="This is an obsolete API and is no longer guaranteed to work."></span></dt>

<dd>指向调用当前函数的函数。</dd>

<dt>`[arguments.length](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/length "JavaScript/Reference/Functions_and_function_scope/arguments/length")`</dt>

<dd>指向传递给当前函数的参数数量。</dd>

</dl>

## 例子

### 例子: 定义一个连接几个字符串的函数

这个例子定义了一个函数来连接字符串。这个函数唯一正式声明了的参数是一个字符串，该参数指定一个字符作为衔接点来连接字符串。该函数定义如下：

<pre class="brush:js">function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}</pre>

你可以传递任意数量的参数到该函数，然后该函数会将每个参数作为一个条目来创建一个列表。

<pre class="brush:js">// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");</pre>

### 例子: 定义一个创建HTML列表的方法

这个例子定义了一个函数通过一个字符串来创建HTML列表。这个函数唯一正式声明了的参数是一个字符。当该参数为 "`u`" 时，创建一个无序列表 (项目列表)；当该参数为 "`o`" 时，则创建一个有序列表 (编号列表)。该函数定义如下：

    function list(type) {
      var result = "<" + type + "l><li>";
      var args = Array.prototype.slice.call(arguments, 1);
      result += args.join("</li><li>");
      result += "</li></" + type + "l>"; // end list

      return result;
    }

你可以传递任意数量的参数到该函数，然后该函数会将每个参数作为一个条目添加到第一个参数指定类型的列表当中。

    var listHTML = list("u", "One", "Two", "Three");

    /* listHTML is:

    "<ul><li>One</li><li>Two</li><li>Three</li></ul>"

    */

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">当前状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初次定义。 在JavaScript 1.1中实现</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Arguments Object</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-10.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Arguments Exotic Objects</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-exotic-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")