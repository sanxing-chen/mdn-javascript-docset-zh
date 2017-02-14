<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

`**_function_.arguments**` 属性代表传入函数的实参，它是一个类数组对象。

## 描述

`_function_.arguments` 已经被废弃很多年了，我打赌你从来就不知道它的存在（那更好）。现在推荐的做法是使用函数内部可用的 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类数组对象。代表传给一个function的参数列表。") 对象来访问函数的实参。

在函数递归调用的时候（在某一刻同一个函数运行了多次，也就是有多套实参），那么 `arguments` 属性的值是最近一次该函数调用时传入的实参，下面的示例有演示。

如果函数不在执行期间，那么该函数的 `arguments` 属性的值是 `null`。

## 示例

<pre class="brush: js">function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('函数退出后的 arguments 属性值：' + g.arguments);

// 输出：

// before: 1
// before: 0
// after: 0
// after: 1
// 函数退出后的 arguments 属性值：null
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>arguments 属性首次实现于 JavaScript 1.0，首次添加进规范是在 ES1，在 ES3 中被删除。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">arguments object</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-10.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类数组对象。代表传给一个function的参数列表。")</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">arguments object</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-object)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类数组对象。代表传给一个function的参数列表。")</td>

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

*   [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类数组对象。代表传给一个function的参数列表。")
*   [函数和函数的作用域](/zh-CN/docs/Web/JavaScript/Reference/Functions "通常来说,一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序".和程序本身一样,一个函数的函数体是由一系列的语句组成的.函数可以接收传入参数,也可以返回一个返回值.")