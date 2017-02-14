<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

**`InternalError` 对象**表示出现在JavaScript引擎内部的错误。 例如： **"InternalError**: too much recursion"（内部错误：递归过深）。

## 语法

    new InternalError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>`message`</dt>

<dd>可选。 人类可读的错误描述信息。</dd>

<dt>`fileName`<span title="This API has not been standardized."></span></dt>

<dd>可选。触发该错误的代码所在文件的文件名。</dd>

<dt>`lineNumber`<span title="This API has not been standardized."></span></dt>

<dd>可选。触发该错误的代码所在的代码行号。</dd>

</dl>

## 描述

当JavaScript引擎出现内部错误时将会抛出`InternalError。`

示例场景通常为某些成分过大，例如：

*   "too many switch cases"（过多`case`子句）；
*   "too many parentheses in regular expression"（正则表达式中括号过多）；
*   "array initializer too large"（数组初始化器过大）；
*   "too much recursion"（递归过深）。

## 属性

<dl>

<dt>[`InternalError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>允许向`InternalError`对象添加属性。</dd>

</dl>

## 方法

全局 `InternalError` 对象自身不包含任何方法,但从原型链中继承了一些方法.

## `InternalError` 实例

### 属性

### 方法

## 规范

尚未成为任何规范的一部分。

## 浏览器兼容性

##  <span style="font-size: 14px; font-weight: normal; line-height: 1.5;"><div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div></span> 

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

<td>基本支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基本支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`错误`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`InternalError.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype "此页面仍未被本地化, 期待您的翻译!")