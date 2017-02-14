<span style="line-height: inherit;">通过**Error**的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。</span>

## 语法

<pre class="syntaxbox">new Error([_message_[, _fileName_[,_lineNumber_]]])</pre>

### 参数

<dl>

<dt>`message`</dt>

<dd>可选。人类可阅读的错误描述信息。</dd>

</dl>

<dl>

<dt>`fileName `<span title="This API has not been standardized."></span></dt>

<dd>可选。被创建的<span style="font-family: monospace; line-height: inherit;">Error对象的fileName属性值。</span><span style="line-height: inherit;">默认是调用Error构造器代码所在的文件 的名字。</span></dd>

</dl>

<dl>

<dt>`lineNumber `<span title="This API has not been standardized."></span></dt>

<dd>可选。被创建的<span style="font-family: monospace; line-height: inherit;">Error对象的lineNumber属性值。默认是</span><span style="line-height: inherit;">调用Error构造器代码所在的文件的行号</span><span style="font-family: monospace; line-height: inherit;">。</span></dd>

</dl>

## 描述

当代码运行时的发生错误，会创建新的<span style="font-family: monospace; line-height: 21px;">Error对象，并将其抛出。</span>

<span style="line-height: inherit;">该页面描述了Error对象自身的使用,以及其构造函数的使用</span><span style="line-height: inherit;">. 关于Error实例的内部属性和方法,请看</span> [`Error.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype "The Error.prototype property represents the prototype for the Error constructor.").

### Error 类型

除了通用的<span style="font-family: courier new,andale mono,monospace; line-height: inherit;">Error构造函数外，</span>JavaScript<span style="font-family: courier new,andale mono,monospace; line-height: inherit;">还有6个其他类型的错误构造函数。更多客户端异常,详见</span><span style="line-height: inherit;"> </span>[Exception Handling Statements](/en/JavaScript/Guide/Statements#Exception_Handling_Statements "en/JavaScript/Guide/Statements#Exception Handling Statements")。

<dl>

<dt>**[`EvalError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError "Represents an error regarding the eval function.")**</dt>

<dd>创建一个error实例，表示错误的原因：与 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。") 有关。</dd>

<dt>**[`InternalError`](/zh-CN/docs/Web/JavaScript/Reference/InternalError "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span>**</dt>

<dd>创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多".</dd>

</dl>

<dl>

<dt>**[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/RangeError "此页面仍未被本地化, 期待您的翻译!")**</dt>

<dd>创建一个error实例，表示错误的原因：<span style="line-height: inherit;">数值变量或参数超出其有效范围</span><span style="line-height: inherit;">。</span></dd>

</dl>

<dl>

<dt>**[`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。")**</dt>

<dd>创建一个error实例，表示错误的原因：无效引用。</dd>

</dl>

<dl>

<dt>**[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.")**</dt>

<dd>创建一个error实例，表示错误的原因：[`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。")在解析代码的过程中发生的语法错误<span style="line-height: inherit;">。</span></dd>

</dl>

<dl>

<dt>**[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")**</dt>

<dd>创建一个error实例，表示错误的原因：变量或参数不属于有效类型。</dd>

</dl>

<dl>

<dt>**[`URIError`](/zh-CN/docs/Web/JavaScript/Reference/URIError "此页面仍未被本地化, 期待您的翻译!")**</dt>

<dd>创建一个error实例，表示错误的原因：给 [`encodeURI()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "此页面仍未被本地化, 期待您的翻译!")<span style="line-height: inherit;">或 </span> [`decodeURl()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "将先前经过encodeURI函数或者其他类似方法编码过的字符串进行解码.")<span style="line-height: inherit;">传递的参数无效。</span></dd>

</dl>

## 属性

<dl>

<dt>[`Error.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype "The Error.prototype property represents the prototype for the Error constructor.")</dt>

<dd>允许添加属性到Error实例.</dd>

</dl>

## 方法

全局Error对象自身不包含任何方法,但从原型链中继承了一些方法.

## `Error` 实例

<div>

All [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.") instances and instances of [non-generic errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.") inherit from `Error.prototype`. As with all constructor functions, you can use the prototype of the constructor to add properties or methods to all instances created with that constructor.

### 属性

### Standard properties

<dl>

<dt>`Error.prototype.constructor`</dt>

<dd>Specifies the function that created an instance's prototype.</dd>

<dt>[`Error.prototype.message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.")</dt>

<dd>Error message.</dd>

<dt>[`Error.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name "The name property represents a name for the type of error. The initial value is "Error".")</dt>

<dd>Error name.</dd>

</dl>

### Vendor-specific extensions

<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>Non-standard**  
This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

</div>

</div>

#### Microsoft

<dl>

<dt>[`Error.prototype.description`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/description "The documentation about this has not yet been written; please consider contributing!")</dt>

<dd>Error description. Similar to [`message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message "The message property is a human-readable description of the error.").</dd>

<dt>[`Error.prototype.number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/number "The documentation about this has not yet been written; please consider contributing!")</dt>

<dd>Error number.</dd>

</dl>

#### Mozilla

<dl>

<dt>[`Error.prototype.fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "The fileName property contains the path to the file that raised this error.")</dt>

<dd>Path to file that raised this error.</dd>

<dt>[`Error.prototype.lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "The lineNumber property contains the line number in the file that raised this error.")</dt>

<dd>Line number in file that raised this error.</dd>

<dt>[`Error.prototype.columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "The columnNumber property contains the column number in the line of the file that raised this error.")</dt>

<dd>Column number in line that raised this error.</dd>

<dt>[`Error.prototype.stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "The non-standard stack property of Error objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.")</dt>

<dd>Stack trace.</dd>

</dl>

### 方法

<dl>

<dt>[`Error.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource "The toSource() method returns code that could eval to the same error.")<span title="This API has not been standardized."></span></dt>

<dd>Returns a string containing the source of the specified [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error "The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.") object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.") method.</dd>

<dt>[`Error.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "The toString() method returns a string representing the specified Error object.")</dt>

<dd>Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing object.") method.</dd>

</dl>

</div>

## 例子

### 例1: 抛出一个基本错误

通常你会使用[`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")关键字来抛出你创建的Error对象。可以使用 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。") 结构来处理异常:

<pre class="brush: js">try {
    throw new Error("Whoops!");
} catch (e) {
    alert(e.name + ": " + e.message);
}
</pre>

### 例2: 处理一个特定错误

你可以通过判断异常的类型来特定处理某一类的异常,即判断 [`constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor "返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。对于原始值（如1，true 或 "test"），该属性为只读。") 属性，当使用现代Javascript引擎时,可使用[`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof运算符可以用来判断某个构造函数的prototype属性所指向的對象是否存在于另外一个要检测对象的原型链上。（譯者注：構造函數的prototype所指向的對象，是否跟另外一個對象的原型鏈上的某個對象是同一個對象，滿足A===B。）") 关键字：

<pre class="brush: js">try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        alert(e.name + ": " + e.message);
    } else if (e instanceof RangeError) {
        alert(e.name + ": " + e.message);
    }
    // ... etc
}
</pre>

### 示例: 自定义异常类型

你可能希望自定义基于Error的异常类型，使得你能够 throw new MyError() 并可以使用 `instanceof MyError` 来检查某个异常的类型. 这种需求的通用解决方法如下.

<div class="warning" style="font-size: 14px;">

注意，在FireFox中抛出自定义类型的异常会显示不正确的行号和文件名。

</div>

参考 ["What's a good way to extend Error in JavaScript?" discussion on Stackoverflow](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

    // Create a new object, that prototypally inherits from the Error constructor.
    function MyError(message) {
      this.name = 'MyError';
      this.message = message || 'Default Message';

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

<td>Initial definition. Implemented in JavaScript 1.1.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Error</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Error</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-error-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2016 Draft (7th Edition, ECMA-262)  
<small lang="zh-CN">Error</small>](https://tc39.github.io/ecma262/#sec-error-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

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

<table class="compat-table" style="border-color: transparent;">

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

<table class="compat-table" style="border-color: transparent;">

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

*   [`Error.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype "The Error.prototype property represents the prototype for the Error constructor.")
*   [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")
*   [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。")