<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

</div>

</div>

## <span class="def"><span>概述</span></span>

`**__defineSetter__** 方法可以将一个函数绑定在当前对象的指定属性`上，当那个属性被赋值时，你所绑定的函数就会被调用。

## 语法

    obj.__defineSetter__(prop, fun)

### 参数

<dl>

<dt>`prop`</dt>

<dd>一个字符串，表示指定的属性名。</dd>

<dt>`fun`</dt>

<dd>一个函数，当试图去为 `sprop` 属性赋值时被调用。通常你要给这个函数指定一个参数：  

<pre>function(<var>val</var>) { . . . }</pre>

<dl>

<dt>`val`</dt>

<dd>任意的参数名，在 fun 被调用时，该参数的值就是尝试给 `sprop` 属性所赋的值。</dd>

</dl>

</dd>

</dl>

## 描述

`__defineSetter__` 方法可以为一个已经存在的对象设置（新建或修改）访问器属性，而 [对象字面量中的 set 语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/set "此页面仍未被本地化, 期待您的翻译!") 只能在新建一个对象时使用。

## 规范

不属于任何规范。

## <span class="def"><span>浏览器兼容性</span></span>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td>11</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: rgb(255, 153, 0);" title="Compatibility unknown; please update this.">?</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__ "__defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用。")
*   [`set`](/zh-CN/docs/Web/JavaScript/Reference/Operators/set "此页面仍未被本地化, 期待您的翻译!") operator
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Object.prototype.__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__ "此页面仍未被本地化, 期待您的翻译!")
*   [JS 指南: 定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
*   [[个人博客] defineGetter__ 和 __defineSetter__](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)已被废弃