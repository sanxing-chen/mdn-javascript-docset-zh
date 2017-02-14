`**SyntaxError**` 对象代表尝试解析语法上不合法的代码的错误。

## 描述

当Javascript语言解析代码时,Javascript引擎发现了不符合语法规范的tokens或token顺序时抛出`SyntaxError`.

## 语法

    new SyntaxError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>`message`</dt>

<dd>可选的. 可阅读的错误描述信息</dd>

<dt>`fileName`<span title="This API has not been standardized."></span></dt>

<dd>可选的. 包含引发异常的代码的文件名</dd>

<dt>`lineNumber`<span title="This API has not been standardized."></span></dt>

<dd><span style="line-height: 19.0909080505371px;">可选的</span>. <span style="line-height: 19.0909080505371px;">包含引发异常的代码</span><span style="line-height: 19.0909080505371px;">的行号</span></dd>

</dl>

## 属性

<dl>

<dt>[`SyntaxError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype "SyntaxError.prototype 属性表示SyntaxError 构造器的原型.")</dt>

<dd>`<font face="Open Sans, sans-serif">允许</font>SyntaxError`对象添加属性.</dd>

</dl>

## 方法

全局 `SyntaxError` 自身不包含任何方法, 但从原型链中继承了一些方法.

## `SyntaxError` 实例

### 属性

<div>

<dl>

<dt>`SyntaxError.prototype.constructor`</dt>

<dd>创建实例的构造函数.</dd>

<dt>[`SyntaxError.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。")</dt>

<dd>错误信息. 尽管 ECMA-262 指出, [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.") 应该提供其子什么的信息属性,但在 [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey) 中, 仍是继承自[`Error.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。").</dd>

<dt>[`SyntaxError.prototype.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name "name 属性表示error类型的名称.初始值为"Error".")</dt>

<dd><span style="line-height: 19.0909080505371px;">错误的名称.继承自</span> [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`SyntaxError.prototype.fileName`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>抛出该异常的文件路径.继承自 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`SyntaxError.prototype.lineNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd><span style="line-height: 19.0909080505371px;">抛出该异常的文件的行号</span>. 继承自 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`SyntaxError.prototype.columnNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd><span style="line-height: 19.0909080505371px;">抛出该异常的文件的列数</span>. <span style="line-height: 19.0909080505371px;">继承自</span> [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`SyntaxError.prototype.stack`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>栈追踪信息. <span style="line-height: 19.0909080505371px;">继承自</span> [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

</dl>

</div>

### 方法

## 示例

### 捕获 `SyntaxError`

<pre class="brush: js">try {
  eval('hoo bar');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}
</pre>

### 创建 `SyntaxError`

<pre class="brush: js">try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "Hello"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "someFile.js"
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
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
<small lang="zh-CN">SyntaxError</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">SyntaxError</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-syntaxerror)</td>

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

*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`SyntaxError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype "SyntaxError.prototype 属性表示SyntaxError 构造器的原型.")