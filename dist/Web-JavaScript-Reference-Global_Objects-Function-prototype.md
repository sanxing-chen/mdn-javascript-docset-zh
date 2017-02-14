`**Function.prototype**` 属性存储了 [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!") 的原型对象。

## 描述

[`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")`对象继承自 Function.prototype 属性``。因此，Function.prototype` 不能被修改。

## 属性

<dl>

<dt>[`Function.arguments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments "function.arguments 属性代表传入函数的实参，它是一个类数组对象。")<span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>以数组形式获取传入函数的所有参数。此属性已被[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments "此页面仍未被本地化, 期待您的翻译!")替代。</dd>

<dt><s class="obsoleteElement">[`Function.arity`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arity "返回一个函数的形参数量.")<span title="This is an obsolete API and is no longer guaranteed to work."></span></s></dt>

<dd><s class="obsoleteElement">用于指定的函数的参数的个数，但已被删除。使用[`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length "此页面仍未被本地化, 期待您的翻译!")属性代替。</s></dd>

<dt>[`Function.caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "返回调用指定函数的函数.")<span title="This API has not been standardized."></span></dt>

<dd>获取调用函数的具体对象。</dd>

<dt>[`Function.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>获取函数的接收参数个数。</dd>

<dt>[`Function.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name "name 属性返回所属函数的函数名称.")<span title="This API has not been standardized."></span></dt>

<dd>获取函数的名称。</dd>

<dt>[`Function.displayName`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName "function.displayName属性获取函数的显示名字")<span title="This API has not been standardized."></span></dt>

<dd>获取函数的display name。</dd>

<dt>`Function.prototype.constructor`</dt>

<dd>声明函数的原型构造方法，详细请参考 [`Object.constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor "返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。对于原始值（如1，true 或 "test"），该属性为只读。") 。</dd>

</dl>

## 方法

<dl>

<dt>[`Function.prototype.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。")</dt>

<dd>在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。</dd>

<dt>[`Function.prototype.bind()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind "bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数, 它的参数是bind()的其他参数和其原本的参数.")</dt>

<dd><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind()</span>方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 <span style="font-family: courier new,andale mono,monospace;">bind()</span>方法的第一个参数作为 <span style="font-family: courier new,andale mono,monospace;">this</span>,传入 <span style="font-family: courier new,andale mono,monospace;">bind()</span>方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.</dd>

<dt>[`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")</dt>

<dd>在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。</dd>

<dt>[`Function.prototype.isGenerator()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator "判断一个函数是否是一个生成器.")<span title="This API has not been standardized."></span></dt>

<dd>`若函数对象为`[generator](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)，返回true，反之返回 `false`。</dd>

<dt>[`Function.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource "返回函数的源代码的字符串表示.")<span title="This API has not been standardized."></span></dt>

<dd>获取函数的实现源码的字符串。 覆盖了 [`Object.prototype.toSource`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") 方法。</dd>

<dt>[`Function.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString "该 toString() 方法返回一个表示当前函数源代码的字符串。")</dt>

<dd>获取函数的实现源码的字符串。覆盖了 [`Object.prototype.toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

</dl>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.Implemented in JavaScript 1.1</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function.prototype</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.5.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function.prototype</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-instances-prototype)</td>

<td><span class="spec-Standard">Standard</span></td>

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

## 参考

*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")