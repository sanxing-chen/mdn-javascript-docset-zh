The `**TypeError.prototype**` property represents the prototype for the [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") constructor.

## 描述

All [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") instances inherit from `TypeError.prototype`. You can use the prototype to add properties or methods to all instances.

## 属性

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

## 方法

Although the [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") prototype object does not contain any methods of its own, [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") instances do inherit some methods through the prototype chain.

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">NativeError.prototype</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-nativeerror.prototype)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined as `_NativeError_.prototype`.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">NativeError.prototype</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11.7.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Defined as `_NativeError_.prototype`.</td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">NativeError.prototype</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-15.11.7.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition</td>

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

*   [`Error.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype "The Error.prototype property represents the prototype for the Error constructor.")
*   [`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。")