**`apply()`** 方法在指定 `this` 值和参数（参数以数组或[类数组对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects)的形式存在）的情况下调用某个函数。

<div class="note">**注意：**该函数的语法与 <span style="line-height: 1.5;">[`call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") </span><span style="line-height: 1.5;">方法的语法几乎完全相同，唯一的区别在于，</span>`call()方法接受的是一个参数列表，而 ``apply()`<span style="line-height: 1.5;">方法接受的是一个包含多个参数的数组（或类数组对象）。</span></div>

## 语法

    fun.apply(thisArg[, argsArray])

### 参数

<dl>

<dt>`thisArg`</dt>

<dd>在 _`fun`_ 函数运行时指定的 `this` `值。`需要注意的是，指定的 `this` 值并不一定是该函数执行时真正的 `this` 值，如果这个函数处于[非严格模式下](../../../../../../zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode "JavaScript/Strict mode")，则指定为 `null` 或 `undefined` 时`会自动指向`全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 `this` 会指向该原始值的自动包装对象。</dd>

<dt>`argsArray`</dt>

<dd>一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 `fun` 函数。如果该参数的值`为null` 或 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。</dd>

</dl>

## 描述

<span style="line-height: 1.5;">在调用一个存在的函数时，你可以为其指定一个 `this` 对象。 `this`</span> <span style="line-height: 1.5;">指当前对象，也就是正在调用这个函数的对象。 使用 `apply`， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。</span>

`apply` 与 `[`call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")` 非常相似，不同之处在于提供参数的方式。`apply` 使用参数数组而不是一组参数列表（原文：a named set of parameters）。`apply `<span style="line-height: 1.5;">可以使用数组字面量（</span>array literal）<span style="line-height: 1.5;">，如 </span>`_fun_.apply(this, ['eat', 'bananas'])`<span style="line-height: 1.5;">，或数组对象，</span><span style="line-height: 1.5;"> 如  </span>`_fun_.apply(this, new Array('eat', 'bananas'))`<span style="line-height: 1.5;">。</span>

你也可以使用 [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments "此页面仍未被本地化, 期待您的翻译!")  对象作为 `argsArray` 参数。 `arguments` 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。

从 ECMAScript 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 `length` 属性和`[0...length)` 范围的整数属性。例如现在可以使用 [`NodeList`](/zh-CN/docs/Web/API/NodeList "NodeList 对象是一个节点的集合，是由 Node.childNodes 和 document.querySelectorAll 返回的.") 或一个自己定义的类似 `{'length': 2, '0': 'eat', '1': 'bananas'}` 形式的对象。

需要注意：Chrome 14 以及 Internet Explorer 9 仍然不接受类数组对象。如果传入类数组对象，它们会抛出异常。

## 示例

### 使用apply来链接构造器

你可以使用apply来给一个对象链接[构造器](/zh-CN/docs/JavaScript/Reference/Operators/new "JavaScript/Reference/Operators/new")，类似于Java. 在接下来的例子中我们会创建一个叫做construct的全局的[`Function`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function "JavaScript/Reference/Global_Objects/Function")函数,来使你能够在构造器中使用一个类数组对象而非参数列表。

<pre class="brush: js">Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<div class="note">

**注意:** 上面使用的`Object.create()`方法相对来说比较新。另一种可选的方法是使用闭包，请考虑如下替代方法：

<pre style="font-style: normal;" class="brush: js">Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() { 
    fConstructor.apply(this, aArgs); 
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};</pre>

</div>

使用案例：

<pre class="brush: js">function MyConstructor () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs "Hello world!"
console.log(myInstance instanceof MyConstructor); // logs "true"
console.log(myInstance.constructor);              // logs "MyConstructor"</pre>

<div class="note">**注意：** 这个非native的`Function.construct`方法无法和一些native构造器（例如[`Date`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Date "JavaScript/Reference/Global_Objects/Date")）一起使用。 在这种情况下你必须使用[`Function.bind`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors "JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors")方法（例如，想象有如下一个数组要用在Date构造器中： `[2012, 11, 4]`；这时你需要这样写： `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` – -无论如何这不是最好的实现方式并且也许不该用在任何生产环境中).</div>

### `使用apply`和内置函数

聪明的apply用法允许你在某些本来需要写成遍历数组变量的任务中使用内建的函数。在接下里的例子中我们会使用Math.max/Math.min来找出一个数组中的最大/最小值。

<pre class="brush: js">/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* vs. simple loop based algorithm */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min) 
    min = numbers[i];
}</pre>

但是当心：如果用上面的方式调用 ``apply`, 你很可能会遇到方法参数个数越界的问题.` 当你对一个方法传入非常多的参数 (比如超过1W多个参数) 时, 就非常有可能会导致越界问题, 这个临界值是根据不同的 JavaScript 引擎而定的 (JavaScript 核心中已经做了硬编码 [ 参数个数限制在65536](https://bugs.webkit.org/show_bug.cgi?id=80797))，因为这个限制(实际上也是任何用到超大栈空间的行为的自然表现)是未指定的. 有些引擎会抛出异常.  更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失. (举个例子: 如果某个引擎限制了方法参数最多为4个 [实际真正的参数个数限制当然要高得多了, 这里只是打个比方], 上面的代码中, 真正通过 `apply` 传到目标方法中的参数为 5, 6, 2, 3, 而不是完整的 numbers 数组.) 如果你的参数数组可能非常大, 那么推荐使用下面这种策略来处理: 将参数数组切块后循环传入目标方法:

<pre class="brush: js">function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);</pre>

### 在"monkey-patching"中使用apply

Apply可以作为monkey-patch一个Firefox或JS库内建函数的最好方式。对于someobject.foo 函数，你可以用一种旁门左道的方式来修改这个函数，像这样：

    var originalfoo = someobject.foo;
    someobject.foo = function() {
      //在调用函数前干些什么
      console.log(arguments);
      //像正常调用这个函数一样来进行调用：
      originalfoo.apply(this,arguments);
      //在这里做一些调用之后的事情。
    }

这种方法在你想要debug事件，或者与一些没有API的东西配合，例如多种 .on([event]... events, 比如那些在[Devtools Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector#Developer_API)中可用的).

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。在 JavaScript 1.3中实现</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function.prototype.apply</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function.prototype.apply</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.apply)</td>

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

<tr>

<td>ES 5.1 generic array-like object as [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类似数组的对象, 对应于传递给函数的参数。")</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<tr>

<td>ES 5.1 generic array-like object as [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments "arguments 是一个类似数组的对象, 对应于传递给函数的参数。")</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>4.0 (2.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments "此页面仍未被本地化, 期待您的翻译!") object
*   [`Function.prototype.bind()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind "bind()方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的 this, 之后的一序列参数将会在传递的实参前传入作为它的参数。")
*   [`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")
*   [Functions and function scope](/zh-CN/docs/Web/JavaScript/Reference/Functions "通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。")
*   [`Reflect.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply "静态方法 Reflect.apply() 通过指定的参数列表发起对目标(target)函数的调用。")