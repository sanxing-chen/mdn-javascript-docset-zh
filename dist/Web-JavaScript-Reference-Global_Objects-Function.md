**`Function` 构造器会**创建一个新的 `Function` 对象。 在 JavaScript 中每个函数都是一个`Function对象。`

## 构造器

    new Function ([arg1[, arg2[, ...argN]],] functionBody)

### 参数

<dl>

<dt>arg1, arg2, ... arg_N_</dt>

<dd>被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表;例如“×”，“theValue”，或“A，B”。</dd>

<dt>functionBody</dt>

<dd>一个含有包括函数定义的JavaScript语句的字符串。</dd>

</dl>

## 描述

`使用Function<font face="Open Sans, sans-serif">构造器生成的</font>``Function对象是在函数创建时解析的。这比你使用[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)或者[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)(function)并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的`。

所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。

<div class="note">

**注意:** 使用Function构造器生成的函数，并不会在创建它们的上下文中创建闭包；它们一般在全局作用域中被创建。当运行这些函数的时候，它们只能访问自己的本地变量和全局变量，不能访问Function构造器被调用生成的上下文的作用域。这和使用带有函数表达式代码的 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/eval "此页面仍未被本地化, 期待您的翻译!") 不同。[<span style="display: none;"> </span>](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

</div>

以调用函数的方式调用Function的构造函数 (不是用new关键字) 跟以构造函数来调用是一样的.

## 属性和方法

全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从[`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。")上继承部分属性和方法。

## <font face="Consolas, Monaco, Andale Mono, monospace">原型对象</font>

### 属性

<div>

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

</div>

### 方法

<div>

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

</div>

## <font face="Consolas, Monaco, Andale Mono, monospace">实例</font>

`Function` 实例从 [`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。") 继承了一些属性和方法。 同其他构造函数一样， 你可以改变构造函数的原型从而使得所有的Function实例的属性和方法发生改变。

## 示例

### 传入参数调用Function构造函数

下面的代码会创建一个需要两个参数的Function对象

<pre class="brush: js">// 可以直接运行在 JavaScript 控制的代码例子

// 创建了一个能返回两个参数和的函数
var adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
//  8</pre>

参数"a"和"b"是参数的名字，在函数体中被使用，"`return a + b`"。

### 大量修改DOM元素的递归快捷方式

使用 Function 构造器创建函数是从一个函数中动态地创建一些不确定数量的有可执行代码的在全局范围里可用的新对象的方式之一。在下面的例子中，如果你不想使用闭包，那么每创建一个新的查询函数都不可避免地要调用 Function 构造器。

<pre class="brush: html"><!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example - a recursive shortcut to massively modify the DOM</title>
<script type="text/javascript">
var domQuery = (function() {
  var aDOMFunc = [
        Element.prototype.removeAttribute,
        Element.prototype.setAttribute,
        CSSStyleDeclaration.prototype.removeProperty,
        CSSStyleDeclaration.prototype.setProperty
      ];

  function setSomething (bStyle, sProp, sVal) {
    var  bSet = Boolean(sVal), fAction = aDOMFunc[bSet | bStyle << 1],
         aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
         aNodeList = bStyle ? this.cssNodes : this.nodes;

    if (bSet && bStyle) { aArgs.push(""); }
    for (
      var nItem = 0, nLen = this.nodes.length;
      nItem < nLen;
      fAction.apply(aNodeList[nItem++], aArgs)
    );
    this.follow = setSomething.caller;
    return this;
  }

  function setStyles (sProp, sVal) { return setSomething.call(this, true, sProp, sVal); }
  function setAttribs (sProp, sVal) { return setSomething.call(this, false, sProp, sVal); }
  function getSelectors () { return this.selectors; };
  function getNodes () { return this.nodes; };

  return (function (sSelectors) {
    var oQuery = new Function('return arguments.callee.follow.apply(arguments.callee, arguments);');
    oQuery.selectors = sSelectors;
    oQuery.nodes = document.querySelectorAll(sSelectors);
    oQuery.cssNodes = Array.prototype.map.call(oQuery.nodes, function (oInlineCSS) { return oInlineCSS.style; });
    oQuery.attributes = setAttribs;
    oQuery.inlineStyle = setStyles;
    oQuery.follow = getNodes;
    oQuery.toString = getSelectors;
    oQuery.valueOf = getNodes;
    return oQuery;
  });
})();
</script>
</head>

<body>

<div class="testClass">Lorem ipsum</div>
<p>Some text</p>
<div class="testClass">dolor sit amet</div>

<script type="text/javascript">
  domQuery('.testClass')
​    .attributes('lang', 'en')('title', 'Risus abundat in ore stultorum')
    .inlineStyle('background-color', 'black')('color', 'white')('width', '100px')('height', '50px');
</script>
</body>

</html>
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.0.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器支持

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

*   [`Functions and function scope`](/zh-CN/docs/Web/JavaScript/Reference/Functions "通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`function statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")
*   [`function expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")
*   [`function* statement`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")
*   [`function* expression`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")