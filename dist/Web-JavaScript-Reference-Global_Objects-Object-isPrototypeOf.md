**`isPrototypeOf()`** 方法用于测试一个对象是否存在于另一个对象的原型链上。

<div class="note">注_:_ `isPrototypeOf 和 [`instanceof operator`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。")` 是不一样的。在表达式 `object instanceof AFunction 中`，检测的是 `AFunction.prototype` 是否在`object` 的原型链中，而不是检测 `AFunction 自身。`</div>

## 语法

    prototypeObj.isPrototypeOf(object)

### 参数

<dl>

<dt>object</dt>

<dd>在该对象的原型链上搜寻</dd>

</dl>

### 返回值

[`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!")，表示调用对象是否在另一个对象的原型链上。

## 描述

`isPrototypeOf `方法允许你检查一个对象是否存在于另一个对象的原型链上。

例如，考虑下面的原型链：

<pre class="brush: js">function Fee() {
  // . . .
}

function Fi() {
  // . . .
}
Fi.prototype = new Fee();

function Fo() {
  // . . .
}
Fo.prototype = new Fi();

function Fum() {
  // . . .
}
Fum.prototype = new Fo();</pre>

下面创建一个 `Fum `实例，检测 `Fi.prototype `是否存在于该实例的原型链上。

<pre class="brush: js">var fum = new Fum();
. . .

if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}</pre>

<span lang="zh-CN" class="short_text" id="result_box"><span>当需要判断对象的后代是否在特定</span><span>原型链</span><span>上</span></span><span lang="zh-CN" class="short_text"><span>，</span><span>例如</span><span>，</span><span>以保证</span><span>一定的</span><span>方法或属性</span><span>将存在</span><span>该对象上</span><span>，这时候就需要用到</span></span> [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。")<span lang="zh-CN" class="short_text"><span>。</span></span>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范版本</th>

<th scope="col">规范状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.hasownproperty)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](https://tc39.github.io/ecma262/#sec-object.prototype.hasownproperty)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

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

<table class="compat-table">

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

*   [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。")
*   [`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")
*   <div>[`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型设置为另一个对象或者null(既对象的[[Prototype]]内部属性).")</div>

*   [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "此页面仍未被本地化, 期待您的翻译!")