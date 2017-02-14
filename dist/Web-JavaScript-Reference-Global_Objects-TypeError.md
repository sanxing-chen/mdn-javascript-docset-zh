`**TypeError（类型错误）**` 对象用来表示值的类型非预期类型时发生的错误。

## 语法

    new TypeError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>`message 消息`</dt>

<dd>可选. 描述此错误</dd>

<dt>`fileName 文件名`<span title="This API has not been standardized."></span></dt>

<dd>可选. 引起该异常的代码所在的文件的名字。</dd>

<dt>`lineNumber 行号`<span title="This API has not been standardized."></span></dt>

<dd>可选. 引起该异常的代码的行号。</dd>

</dl>

## 描述

当传入函数的**操作数**或**参数**的类型并非操作符或函数所预期的类型时，将抛出一个 TypeError 类型错误。

## 属性

<dl>

<dt>[`TypeError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype "The TypeError.prototype property represents the prototype for the TypeError constructor.")</dt>

<dd>允许为一个 TypeError 类型错误附加属性。</dd>

</dl>

## 方法

全局 TypeError 不包含任何方法，不过，它将从原型链中继承一些方法。

## `TypeError` 类型错误实例

### 属性

<div>

<dl>

<dt>`TypeError.prototype.constructor`</dt>

<dd>Specifies the function that created an instance's prototype.</dd>

<dt>[`TypeError.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。")</dt>

<dd>Error message. Although ECMA-262 specifies that [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") should provide its own `message` property, in [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/message "message 属性是有关错误信息，人类易读的（human-readable）描述。").</dd>

<dt>[`TypeError.prototype.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name "name 属性表示error类型的名称.初始值为"Error".")</dt>

<dd>Error name. Inherited from [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`TypeError.prototype.fileName`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Path to file that raised this error. Inherited from [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`TypeError.prototype.lineNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Line number in file that raised this error. Inherited from [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`TypeError.prototype.columnNumber`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Column number in line that raised this error. Inherited from [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

<dt>[`TypeError.prototype.stack`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/stack "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>Stack trace. Inherited from [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "创建一个error对象。当发生运行时异常时,其实例会被抛出.Error对象可作为用户自定义异常的基对象.下面是关于标准内置error类型的说明.").</dd>

</dl>

</div>

### 方法

<div>

Although the [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") prototype object does not contain any methods of its own, [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") instances do inherit some methods through the prototype chain.

</div>

## 示例

### 示例: 捕获类型错误

<pre class="brush: js">try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null has no properties"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
</pre>

### 示例: 创建一个类型错误

<pre class="brush: js">try {
  throw new TypeError('Hello', "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
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

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">TypeError</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-15.11.6.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">TypeError</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.6.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">TypeError</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-native-error-types-used-in-this-standard-typeerror)</td>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持</td>

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

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

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
*   [`TypeError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype "The TypeError.prototype property represents the prototype for the TypeError constructor.")