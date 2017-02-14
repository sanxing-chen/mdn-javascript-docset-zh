<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该特性目前仍处于 ECMAScript 6 规范草案中**  
目前的实现在未来可能会发生改变，甚至被完全删除，请谨慎使用。

</div>

</div>

## 概述

`**Proxy.revocable()**` 方法可以用来创建一个可撤销的代理对象。

## 语法

<pre class="syntaxbox">Proxy.revocable(target, handler);
</pre>

<dl>

<dt>`target`</dt>

<dd>目标对象，可以是任意类型的对象，比如数组，函数，甚至是另外一个代理对象。</dd>

<dt>`handler`</dt>

<dd>处理器对象，包含了一组代理方法，分别控制所生成代理对象的各种行为。</dd>

</dl>

### 返回值

返回一个包含了所生成的代理对象本身以及该代理对象的撤销方法的对象。

## 描述

该方法的返回值是一个对象，其结构为： `{"proxy": proxy, "revoke": revoke}，其中：`

<dl>

<dt>`proxy`</dt>

<dd>表示新生成的代理对象本身，和用一般方式 `new Proxy(target, handler)` 创建的代理对象没什么不同，只是它可以被撤销掉。</dd>

<dt>`revoke`</dt>

<dd>撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。</dd>

</dl>

一旦某个代理对象被撤销，它将变的几乎完全不可用，在它身上执行任何的**可代理操作**都会抛出 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/TypeError "此页面仍未被本地化, 期待您的翻译!") 异常（注意，可代理操作一共有 [`14 种`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Methods_of_the_handler_object "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")，执行这 14 种操作以外的操作不会抛出异常）。一旦被撤销，这个代理对象永远不可能恢复到原来的状态，同时和它关联的**目标对象**以及**处理器对象**将有可能被垃圾回收掉。调用撤销方法多次将不会有任何效果，当然，也不会报错。

## 示例

<pre class="brush: js">var revocable = Proxy.revocable({}, {
  get(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
proxy.foo;              // "[[foo]]"

revocable.revoke();     // 执行撤销方法

proxy.foo;              // TypeError
proxy.foo = 1           // 同样 TypeError
delete proxy.foo;       // 还是 TypeError
typeof proxy            // "object"，因为 typeof 不属于可代理操作
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称</th>

<th scope="col">规范状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Proxy Revocation Functions</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-proxy.revocable)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).")