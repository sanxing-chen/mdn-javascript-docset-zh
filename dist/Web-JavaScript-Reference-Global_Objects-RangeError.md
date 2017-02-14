**RangeError**对象标明一个错误，当一个值不在其所允许的范围或者集合中。

## 语法

    new RangeError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>`message`</dt>

<dd>可选，可读的错误描述</dd>

<dt>`fileName`<span title="This API has not been standardized."></span></dt>

<dd>可选，包含造成异常代码的文件名</dd>

<dt>`lineNumber`<span title="This API has not been standardized."></span></dt>

<dd>可选，造成异常的代码所在的行数</dd>

</dl>

## 描述

试图传递一个number参数给一个范围内不包含该number的函数时则会引发**RangeError**。当传递一个不合法的length值作为[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 构造器的参数创建数组，或者传递错误值到数值计算方法（[`Number.toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "toExponential() 方法以指数表示法返回该数值字符串表示形式。")，[`Number.toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "toFixed() 方法使用定点表示法来格式化一个数。") ，[`Number.toPrecision()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。")），会出现**RangeError**。.

## 属性

<dl>

<dt>[`RangeError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>`允许在**RangeError**对象上附加属性。`</dd>

</dl>

## 方法

`RangeError`全局对象没有自带方法，但它通过可以原型链继承一些方法。

## `RangeError`实例

### 属性

<div>

<dl>

<dt>`RangeError.prototype.constructor`</dt>

<dd>Specifies the function that created an instance's prototype.</dd>

<dt>[`RangeError.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.")</dt>

<dd>Error message. Although ECMA-262 specifies that [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values.") should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.").</dd>

<dt>[`RangeError.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error".")</dt>

<dd>Error name. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`RangeError.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")</dt>

<dd>Path to file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`RangeError.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")</dt>

<dd>Line number in file that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`RangeError.prototype.columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error.")</dt>

<dd>Column number in line that raised this error. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

<dt>[`RangeError.prototype.stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.")</dt>

<dd>Stack trace. Inherited from [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.").</dd>

</dl>

</div>

### 方法

<div>

Although the [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values.") prototype object does not contain any methods of its own, [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values.") instances do inherit some methods through the prototype chain.

</div>

## 例子

### 使用`RangeError`

<pre class="brush: js">var check = function(num) {
  if (num < MIN || num > MAX) {
    throw new RangeError('Parameter must be between ' + MIN + ' and ' + MAX);
  }
};

try {
  check(500);
}
catch (e) {
  if (e instanceof RangeError) {
    // 处理越界错误
  }
}
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">RangeError</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">RangeError</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-rangeerror)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">RangeError</small>](https://tc39.github.io/ecma262/#sec-native-error-types-used-in-this-standard-rangeerror)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

## 相关连接

*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`RangeError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError/prototype "此页面仍未被本地化, 期待您的翻译!")
*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Number.toExponential()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential "toExponential() 方法以指数表示法返回该数值字符串表示形式。")
*   [`Number.toFixed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed "toFixed() 方法使用定点表示法来格式化一个数。")
*   [`Number.toPrecision()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision "toPrecision() 方法以指定的精度返回该数值对象的字符串表示。")