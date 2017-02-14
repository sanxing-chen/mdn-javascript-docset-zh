<div class="warning">

**警告 :** 请尽量避免使用 unwatch() 和  [`watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.") . 这两个方法仅在 Gecko 中实现 , 并且他们过去主要作调试用. 另外, 使用 watchpoints 对性能有一系列的副面影响 ，特别是当使用全局对象，如 `window`. 你应该使用  [setters and getters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) 或 proxies 来替代. 查阅 [Browser compatibility](#Browser_compatibility) 以获取更多信息.

</div>

`**unwatch()**` 删除一个 [`watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.") 设置的 watchpoint.

## 语法

    obj.unwatch(prop)

### 参数

<dl>

<dt>`prop`</dt>

<dd>想要停止监视的对象的属性名</dd>

</dl>

## 描述

JavaScript调试器具有类似的功能，以及其他调试选项。有关调试器的信息  [Venkman](/en-US/docs/Venkman).

默认地, 这个方法 被每一个 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 的子类继承 

<div class="note">

**Note:** The reason for `unwatch()` to take the property name _prop_ as its only parameter is due to the "single handler allowing" behavior of the [`watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.") method.

</div>

## 例子

See [`watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.").

## 说明

Not part of any specifications. Implemented in JavaScript 1.2.

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

<td>Basic support</td>

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

## Compatibility notes

*   从 Firefox 23 ([bug 903332](https://bugzilla.mozilla.org/show_bug.cgi?id=903332 "FIXED: document.watch() results in "TypeError: can't watch non-native objects of class Proxy"")) 开始, 在 [`Document`](/zh-CN/docs/Web/API/Document "此页面仍未被本地化, 期待您的翻译!") 对象上调用 `unwatch()` 抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") . This regression has been fixed with Firefox 27.

## 相关链接

*   [`Object.watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.")