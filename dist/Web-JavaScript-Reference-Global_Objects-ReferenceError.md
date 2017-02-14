## 概述

`**ReferenceError（引用错误）**` 对象表明一个不存在的变量被引用。

## 语法

    new ReferenceError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>`message`</dt>

<dd>可选。描述可读的错误信息</dd>

<dt>`fileName`<span title="This API has not been standardized."></span></dt>

<dd>可选。包含引起异常代码的文件名</dd>

<dt>`lineNumber`<span title="This API has not been standardized."></span></dt>

<dd>可选。引起异常的代码行号</dd>

</dl>

## 描述

当你尝试引用一个未被定义的变量时，将会抛出一个 `ReferenceError` 。

## 属性

<dl>

<dt>[`ReferenceError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Allows the addition of properties to an `ReferenceError` object.</dd>

</dl>

## 方法

全局的 `ReferenceError` 本身并不包含有方法，但是他可以从原型链上继承一些方法

## `ReferenceError` 实例

### 属性

<div>

<dl>

<dt>`ReferenceError.prototype.constructor`</dt>

<dd>Specifies the function that created an instance's prototype.</dd>

<dt>[`ReferenceError.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.")</dt>

<dd>Error message. Although ECMA-262 specifies that [`ReferenceError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced.") should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.").</dd>

<dt>[`ReferenceError.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error".")</dt>

<dd>Error name. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`ReferenceError.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")</dt>

<dd>Path to file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`ReferenceError.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")</dt>

<dd>Line number in file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`ReferenceError.prototype.columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error.")</dt>

<dd>Column number in line that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`ReferenceError.prototype.stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.")</dt>

<dd>Stack trace. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.").</dd>

</dl>

</div>

### 方法

<div>

Although the [`ReferenceError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced.") prototype object does not contain any methods of its own, [`ReferenceError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "The ReferenceError object represents an error when a non-existent variable is referenced.") instances do inherit some methods through the prototype chain.

</div>

## 例子

### 例: 捕获一个 `ReferenceError`

<pre class="brush: js">try {
  var a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "undefinedVariable is not defined"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "Scratchpad/1"
  console.log(e.lineNumber);                // 2
  console.log(e.columnNumber);              // 6
  console.log(e.stack);                     // "@Scratchpad/2:2:7\n"
}
</pre>

### 例: 创建一个 `ReferenceError`

<pre class="brush: js">try {
  throw new ReferenceError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "someFile.js"
  console.log(e.lineNumber);                // 10
  console.log(e.columnNumber);              // 0
  console.log(e.stack);                     // "@Scratchpad/2:2:9\n"
}
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>ECMAScript 3rd Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">ReferenceError</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ReferenceError</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-referenceerror)</td>

<td><span class="spec-Standard">Standard</span></td>

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

*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.")
*   [`ReferenceError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype "此页面仍未被本地化, 期待您的翻译!")