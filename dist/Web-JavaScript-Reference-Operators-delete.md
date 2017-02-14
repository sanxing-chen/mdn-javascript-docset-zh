 **`delete` 操作符**用来删除一个对象的属性。

## 语法

<pre class="syntaxbox">delete _expression_
</pre>

 _expression_ 应该是一个对象的属性引用，例如：

<pre class="syntaxbox">delete _object.property_ 

delete _object_['_property_']
</pre>

如果 _expression_ 的计算结果不是一个对象的属性引用，那么`，delete不会起任何作用。`

### 参数

<dl>

<dt>`objectName`</dt>

<dd>对象名.</dd>

</dl>

<dl>

<dt>`property`</dt>

<dd>需要删除的属性.</dd>

</dl>

### 返回值

在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)中，如果属性是一个不可配置（non-configurable）属性，删除时会抛出异常，非严格模式下返回 `false`。其他情况都返回 `true`。

## 描述

delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。可查看[内存管理](https://developer.mozilla.org/zh-CNdocs/Web/JavaScript/Memory_Management)页面。

你可以使用 `delete` 操作符来删除一个隐式声明的全局变量,也就是没有使用 `var` 定义的全局变量.全局变量其实是global对象(window)的属性.

如果 `delete` 操作符删除成功，则被删除的属性将从所属的对象上彻底消失。然后，如果该对象的原型链上有一个同名属性，则该对象会从原型链上继承该同名属性。

### Temporal dead zone

在ECMAScript 6中，通过 [const](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 或 [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 声明指定的 "[temporal dead zone"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let) (TDZ) 对 delete 操作符也会起作用。因此，下面的代码将会抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。")。

<pre class="brush: js  language-js">function foo(){ 
  delete x;
  let x;
}

function bar() { 
  delete y; 
  const y; 
}</pre>

一些对象的属性不能被delete.  ECMA 262 规范中把这些属性标记为 _DontDelete_.

<pre class="brush: js">x = 42;        // 隐式声明的全局变量
var y = 43;    // 显式声明的全局变量
myobj = {
  h: 4,    
  k: 5
}    

// 隐式声明的全局变量可以被删除
delete x;       // 返回 true 

// 显式声明的全局变量不能被删除,该属性不可配置（not configurable）
delete y;       // 返回 false 

//内置对象的内置属性不能被删除
delete Math.PI; // 返回 false

//用户定义的属性可以被删除
delete myobj.h; // 返回 true 

// myobj 是全局对象的属性，而不是变量
//因此可以被删除
delete myobj;   // 返回 true

function f() {
  var z = 44;

  // delete doesn't affect local variable names
  delete z;     // returns false
}
</pre>

你不能删除一个对象从原型继承而来的属性(不过你可以从原型上直接删掉它).

<pre class="brush: js"> function Foo(){}
 Foo.prototype.bar = 42;
 var foo = new Foo();

 // 无效的操作
 delete foo.bar;       

 // logs 42，继承的属性
 console.log(foo.bar);       

 // 直接删除原型上的属性
 delete Foo.prototype.bar;

 // logs "undefined"，已经没有继承的属性
 console.log(foo.bar);           
</pre>

### 删除数组元素

当你删除一个数组元素时，数组的 length 属性并不会变小。例如，如果你删除了a[3], a[4]仍然是a[4], a[3]成为undefined. 即便你删除了最后一个元素也是如此 (`delete a[a.length-1]`).

当用 `delete` 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。下面的例子中， trees[3] 被使用`delete彻底删除`。

<pre class="brush: js">var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
   // 这里不会被执行
}
</pre>

如果你想让一个数组元素的值变为 `undefined` 而不是删除它，可以使用 `undefined` `给其`赋值而不是使用 `delete` 操作符。下面的例子中，trees[3] 被赋值为`undefined`，但该元素仍然存在。

<pre class="brush: js">var trees = ["redwood","bay","cedar","oak","maple"];
trees[3]=undefined;
if (3 in trees) {
   // 这里会被执行
}
</pre>

## 规范

<table class=" standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">The delete Operator</small>](https://tc39.github.io/ecma262/#sec-delete-operator)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">The delete Operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-delete-operator)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The delete Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">The delete Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.2.</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table style="border-color: transparent;" class="compat-table">

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

<tr>

<td>Temporal dead zone</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[36](/en-US/Firefox/Releases/36 "Released on 2015-02-24.") (36)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table style="border-color: transparent;" class="compat-table">

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

<tr>

<td>Temporal dead zone</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>36.0 (36)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 跨浏览器问题

虽然 ECMAScript 规定了对象的遍历顺序是**由对象定义时属性的书写顺序决定的。（**译者注:ES5已经对遍历机制做了调整，重新规定:**属性遍历的顺序是没有被规定的），** 大部分浏览器都依照这个规定，先添加的属性先被遍历（除了从原型上继承的属性）（译者注:Chrome和Opera已经遵循了ES5的新规定,具体[请看](http://w3help.org/zh-cn/causes/SJ9011 "http://w3help.org/zh-cn/causes/SJ9011"))。但是，在 Internet Explorer 中，使用 `delete` 删除一个属性后，奇怪的事情发生了，如果被删除的属性重新被添加，那么遍历时，该属性的顺序会是上次删除前的那个位置所应该有的顺序,而不是出现在遍历的最后一个。

所以，如果你想让对象的遍历顺序兼容所有的浏览器，那么你可以使用两个数组来模拟 (一个做为keys，一个做为 values)， 或者建立<span lang="zh-CN" class="short_text" id="result_box"><span>一个</span><span>由单一</span><span>属性</span><span>的</span><span>对象组成的</span><span>数组</span></span>，等。

## 相关链接

*   [深入分析 delete](http://perfectionkills.com/understanding-delete/)
*   [`Reflect.deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty "此页面仍未被本地化, 期待您的翻译!")