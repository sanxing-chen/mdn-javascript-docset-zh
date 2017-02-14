<div>

`**Error.prototype**` 属性代表 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。") 的构造器。

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">`Error.prototype` 属性的属性特性：</th>

</tr>

</thead>

<tbody>

<tr>

<td>writable</td>

<td>false</td>

</tr>

<tr>

<td>enumerable</td>

<td>false</td>

</tr>

<tr>

<td>configurable</td>

<td>false</td>

</tr>

</tbody>

</table>

</div>

## 描述

所有 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。") 与 [非标准Error](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。") 的实例都继承自 `Error.prototype。同所有构造器函数一样，你可以在构造器的 `prototype 上添加属性或者方法，使其在所有该构造器的实例上生效。

## 属性

### 标准属性

<dl>

<dt>`Error.prototype.constructor`</dt>

<dd>实例原型的构造函数。</dd>

<dt>[`Error.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。")</dt>

<dd>错误信息。</dd>

<dt>[`Error.prototype.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name "name 属性表示error类型的名称.初始值为"Error".")</dt>

<dd>错误名。</dd>

</dl>

### 厂商特定扩展属性

<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

#### Microsoft

<dl>

<dt>[`Error.prototype.description`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/description "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>错误描述，与 [`message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。") 相似。</dd>

<dt>[`Error.prototype.number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/number "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>错误码。</dd>

</dl>

#### Mozilla

<dl>

<dt>[`Error.prototype.fileName`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>产生该错误的文件名。</dd>

<dt>[`Error.prototype.lineNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>产生该错误的行号。</dd>

<dt>[`Error.prototype.columnNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>产生该错误的列号。</dd>

<dt>[`Error.prototype.stack`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>错误堆栈。</dd>

</dl>

## 方法

<dl>

<dt>[`Error.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span></dt>

<dd>返回一个包含特定 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。") 对象的源代码字符串，你可以用该值新建一个新的对象，重写自 [`Object.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") 方法。</dd>

<dt>[`Error.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "toString() 方法返回一个指定的错误对象（Error object）的字符串表示。")</dt>

<dd>返回一个表示该对象的字符串，重写自 [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

</dl>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.1.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Error</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.3.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Error</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-error.prototype)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2016 Draft (7th Edition, ECMA-262)  
<small lang="zh-CN">Error</small>](https://tc39.github.io/ecma262/#sec-error.prototype)</td>

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

## 参见

*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。")