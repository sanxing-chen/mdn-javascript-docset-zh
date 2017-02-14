 扩展语法允许在需要多个参数（用于函数调用）或多个元素（用于数组文本）或多个变量（用于解构分配）的位置扩展表达式。

## 语法

用于函数调用:

<pre class="syntax">myFunction(...iterableObj);</pre>

用于数组字面量:

<pre class="syntax">[...iterableObj, 4, 5, 6]
</pre>

## 范例

### 更好的 apply 方法

在需要使用数组作为函数的参数的情况下,通常使用 [`Function.prototype.apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply  "此页面仍未被本地化, 期待您的翻译!") 方法:

<pre class="brush: js">function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);</pre>

如果使用了ES6的展开运算符,你可以这么写:

<pre class="brush: js">function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);</pre>

还可以同时展开多个数组:

<pre class="brush: js">function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);</pre>

### 更强大的数组字面量

**例子:**  如果已经有一个数组，此时还需要再新建一个数组，要求新数组包含已有数组的数组项的话，就要用到`push<font face="Open Sans, Arial, sans-serif">，</font>``splice<font face="Open Sans, Arial, sans-serif">，</font>``concat `等数组方法。有了扩展运算符会让代码更简洁:

<pre class="brush: js">var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]</pre>

和函数调用一样,数组字面量中也可以使用`...`多次.

### 配合new运算符

**例子:** 在ES5中,我们无法同时使用 `new `运算符和 `apply `方法(`apply`方法调用`[[Call]]`而不是`[[Construct]]`)。在ES6中，我们可以使用扩展运算符，和普通的函数调用一样。

<pre class="brush: js">var dataFields = readDateFields(database);
var d = new Date(...dateFields);</pre>

### 更好的 push 方法

**例子:** 在ES5中，我们通常使用 [`push`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）。") 方法将一个数组添加到另一个数组的末尾:

<pre class="brush: js">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// 将arr2中的所有元素添加到arr1中
Array.prototype.push.apply(arr1, arr2);</pre>

在ES6中，使用扩展运算符：

<pre class="brush: js">var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
</pre>

### 仅可遍历对象(iterables)可用

<pre class="brush: js">var obj = {"key1":"value1"};
function myFunction(x) {
    console.log(x); // undefined
}
myFunction(...obj);
var args = [...obj];
console.log(args, args.length) //[] 0</pre>

### 将类数组对象转换成数组

扩展运算符可以将一个类数组对象中索引范围在[`0`,`length)`之间的所有属性的值添加到一个数组中,这样就可以得到一个真正的`数组`:

<pre class="brush: js">var nodeList = document.querySelectorAll('div');
var array = [...nodeList];</pre>

## 剩余操作符

还有一种操作符叫做剩余操作符（[the rest operator](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)），它的样子看起来和展开操作符一样，但是它是用于解构数组和对象。在某种程度上，剩余元素和展开元素相反，展开元素会“展开”数组变成多个元素，剩余元素会收集多个元素和“压缩”成一个单一的元素。

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer "ECMAScript 2015 (6th Edition, ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>规范中定义的几个部分: [Array Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [Argument Lists](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists)</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)](https://tc39.github.io/ecma262/#sec-array-initializer "ECMAScript 2017 Draft (ECMA-262)")</td>

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

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>数组字面量中的展开操作</td>

<td>46</td>

<td>[16](/en-US/Firefox/Releases/16 "Released on 2012-10-09.") (16)</td>

<td>Edge</td>

<td><span style="color: #f00;">未实现</span></td>

<td>7.1</td>

</tr>

<tr>

<td>函数调用中的展开操作</td>

<td>46</td>

<td>[27](/en-US/Firefox/Releases/27 "Released on 2014-02-04.") (27)</td>

<td>Edge</td>

<td><span style="color: #f00;">未实现</span></td>

<td>7.1</td>

</tr>

<tr>

<td>解构赋值中的展开操作</td>

<td>49</td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>数组字面量中的展开操作</td>

<td><span style="color: #f00;">未实现</span></td>

<td>46</td>

<td>16.0 (16)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

<td>46</td>

</tr>

<tr>

<td>函数调用中的展开操作</td>

<td><span style="color: #f00;">未实现</span></td>

<td>46</td>

<td>27.0 (27)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

<td>46</td>

</tr>

<tr>

<td>解构赋值中的展开操作</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters "rest parameters")
*   [剩余操作符](http://exploringjs.com/es6/ch_destructuring.html#sec_rest-operator)