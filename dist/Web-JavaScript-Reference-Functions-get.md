## 概览

**`get`** 语句作为函数绑定在对象的属性上,当访问该属性时调用该函数.

## 语法

<pre class="syntaxbox">{get _prop_() { ... } }
{get _[expression]_() { ... } }</pre>

### 参数

<dl>

<dt>`prop`</dt>

<dd>待绑定函数的属性的名称.</dd>

<dt>expression</dt>

<dd>从ECMAScript 6开始, 可以使用表达式作为函数名称绑定在属性上.</dd>

</dl>

## 说明

有时候希望访问属性时能返回一个动态计算后的值, 或希望不通过使用明确的方法调用而显示内部变量的状态.在JavaScript中, 能通过使用 getter 实现. 尽管可能结合使用getter和setter创建一个伪属性,但不能既使用getter绑定到一个属性上,同时又用该属性真实的存储一个值.

使用get语法时应注意以下问题:

<div>

*   可以使用数值或字符串作为标识;
*   必须不带参数 (请参考[Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/));
*   在对象字面量中,同一个属性不能有两个get,也不能既有get又有属性键值对(不允许使用 `{ get x() { }, get x() { } }` 和 `{ x: ..., get x() { } }` ).

</div>

可通过 `[delete](/en-US/docs/Web/JavaScript/Reference/Operators/delete "en/Core_JavaScript_1.5_Reference/Operators/Special_Operators/delete_Operator")` 操作符删除getter.

## 实例

### 在新对象初始化时定义一个getter

这会为obj创建一个虚假的属性`latest`, 该属性会返回log数组的最后一个元素.

<pre class="brush: js">var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Will return "test".
</pre>

注意,试图赋给latest新值的话不会改变该值.

### 使用`delete操作符`删除getter

只需使用 `[delete](/en-US/docs/Web/JavaScript/Reference/Operators/delete)` ,就可删除getter:

<pre class="brush: js">delete obj.latest;
</pre>

### 使用`defineProperty在存在的对象上`定义 getter

在任意时间添加getter到一个存在的对象,使用 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。").

<pre class="brush: js">var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)</pre>

### 使用计算后的属性名

<div class="note">

**注意:** 计算后的属性为体验性的技术_,_ 作为 ECMAScript 6 提议的一部分, 暂时还没有被大部分的浏览器支持. 在不支持的环境中使用会引发一个语法错误.

</div>

<pre class="brush: js">var expr = "foo";

var obj = {
  get [expr]() { return "bar"; }
};

console.log(obj.foo); // "bar"</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object Initializer</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Method definitions</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-method-definitions)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td>Added computed property names.</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

基于 [Robert Nyman's page](http://robertnyman.com/javascript/javascript-getters-setters.html#regular-getters-and-setters). 不支持 (尤其是在 IE6-8) 表示该脚本会引发语法错误.

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

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

<td>1</td>

<td>[2.0](/en-US/Firefox/Releases/2 "Released on 2006-10-24.") (1.8.1)</td>

<td>9</td>

<td>9.5</td>

<td>3</td>

</tr>

<tr>

<td>Computed property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

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

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td>1.0 (1.8.1)</td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

<td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>

</tr>

<tr>

<td>Computed property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>34.0 (34.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set)
*   [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。")
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`__defineGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter "此页面仍未被本地化, 期待您的翻译!")
*   [`__defineSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter "此页面仍未被本地化, 期待您的翻译!")
*   在Javascript指南中 [定义Getters和Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)