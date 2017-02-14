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

## 概述

`**__defineGetter__**` 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用。

## 语法

    obj.__defineGetter__(prop, func)

### 参数

<dl>

<dt>`prop`</dt>

<dd>一个字符串，表示指定的属性名。</dd>

<dt>`func`</dt>

<dd>一个函数，当 `prop` 属性的值被读取时自动被调用。</dd>

</dl>

## 描述

`__defineGetter__ 方法可以为一个已经存在的对象设置（新建或修改）访问器属性，`而 [对象字面量中的 get 语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/get "此页面仍未被本地化, 期待您的翻译!") 只能在新建一个对象时使用。

## <span class="def"><span>示例</span></span>

<pre class="brush: js">// 请注意，该方法是非标准的：

var o = {};
o.__defineGetter__('gimmeFive', function() { return 5; });
console.log(o.gimmeFive); // 5

// 请尽可能使用下面的两种推荐方式来代替：

// 1\. 在对象字面量中使用 get 语法
var o = { get gimmeFive() { return 5; } };
console.log(o.gimmeFive); // 5

// 2\. 使用 Object.defineProperty 方法
var o = {};
Object.defineProperty(o, 'gimmeFive', {
  get: function() {
    return 5;
  }
});
console.log(o.gimmeFive); // 5
</pre>

## 规范

不属于任何规范。

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

*   [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__ "__defineSetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。")
*   [`get`](/zh-CN/docs/Web/JavaScript/Reference/Operators/get "此页面仍未被本地化, 期待您的翻译!") operator
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`Object.prototype.__lookupGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__ "此页面仍未被本地化, 期待您的翻译!")
*   [JS 指南: 定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
*   [[个人博文] defineGetter__ 和 __defineSetter__已被废弃](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)