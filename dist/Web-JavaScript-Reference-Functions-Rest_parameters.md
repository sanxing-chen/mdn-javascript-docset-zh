**剩余参数（rest parameter）**允许长度不确定的实参表示为一个数组。

## 语法

<pre class="brush: js">function(a, b, ...theArgs) {
  // ...
}
</pre>

## 描述

如果一个函数的最后一个形参是以 `... 为前缀的，`则在函数被调用时,该形参会成为一个数组,数组中的元素都是传递给该函数的多出来的实参的值。

在上例中，`theArgs 会包含传递给函数的从第三个实参``开始到最后所有的实参 `(第一个实参映射到 `a`, 第二个实参映射到 `b`)。

### 剩余参数和 `arguments `对象的区别

剩余参数和 `[arguments](../../../../zh-cn/JavaScript/Reference/Functions_and_function_scope/arguments "arguments") `对象之间的区别主要有三个：

*   剩余参数只包含那些没有对应形参的实参，而 `arguments` 对象包含了传给函数的所有实参。
*   `arguments` 对象不是一个真实的数组,而剩余参数是真实的 `[Array实例](../../../../zh-cn/JavaScript/Reference/Global_Objects/Array "Array")，`也就是说你能够在它上面直接使用所有的数组方法，比如 `[sort](../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/sort "Array sort method")<font face="Open Sans, Arial, sans-serif">，</font>``[map](../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/map "Array map method")<font face="Open Sans, Arial, sans-serif">，</font>``[forEach](../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/forEach "Array forEach method")<font face="Open Sans, Arial, sans-serif">，</font>``[pop](../../../../zh-cn/JavaScript/Reference/Global_Objects/Array/pop "Array pop method")。`
*   `arguments 对象对象还有一些附加的属性` (比如`callee属性`)。

### arguments对象转换为剩余参数

使用剩余参数可以避免将`arguments`转为数组的麻烦

<pre class="brush: js">// 下面的代码模拟了剩余数组
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);
  // ...
}

// 现在代码可以简化为这样了
function(a, b, ...args) {

}</pre>

## 示例

因为`theArgs`是个数组,所以你可以使用`length属性`得到剩余参数的个数:

<pre class="brush: js">function fun1(...theArgs) {
  alert(theArgs.length);
}

fun1();  // 弹出 "0", 因为theArgs没有元素
fun1(5); // 弹出 "1", 因为theArgs只有一个元素
fun1(5, 6, 7); // 弹出 "3", 因为theArgs有三个元素</pre>

下例中, 剩余参数包含了从第二个到最后的所有实参. 然后用第一个实参依次乘以它们:

<pre class="brush: js">function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
// [2, 4, 6]
console.log(arr); 
</pre>

下例演示了你可以在剩余参数上使用任意的数组方法,而`arguments对象不可以`:

<pre class="brush: js">function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

alert(sortRestArgs(5,3,7,1)); // 弹出 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // 不会执行到这里
}

alert(sortArguments(5,3,7,1)); // 抛出TypeError异常:arguments.sort is not a function</pre>

如果想在`arguments`对象上使用数组方法,你首先得将它转换为真实的数组,比如使用 `[].slice.call(arguments)`

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
<small lang="zh-CN">Function Definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Function Definitions</small>](https://tc39.github.io/ecma262/#sec-function-definitions)</td>

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

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari (WebKit)</th>

</tr>

<tr>

<td>Basic support</td>

<td>47</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[15](/en-US/Firefox/Releases/15 "Released on 2012-08-28.") (15)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>34</td>

<td><span style="color: #f00;">未实现</span></td>

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

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>47</td>

<td>15.0 (15.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>47</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   the [arguments](/zh-CN/JavaScript/Reference/Functions_and_function_scope/arguments "arguments") object
*   [Array](/zh-CN/JavaScript/Reference/Global_Objects/Array "Array")
*   [Functions and function scope](/zh-CN/JavaScript/Reference/Functions_and_function_scope "Functions and function scope")
*   [original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
*   [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)