`**instanceof**` 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

## 语法

    object instanceof constructor

### 参数

<dl>

<dt>`object`</dt>

<dd>要检测的对象.</dd>

</dl>

<dl>

<dt>`constructor`</dt>

<dd>某个构造函数</dd>

</dl>

## 描述

`instanceof `运算符用来检测 `constructor.prototype `是否存在于参数 `object `的原型链上。

<pre class="brush: js">// 定义构造函数
function C(){} 
function D(){} 

var o = new C();

// true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof C; 

// false，因为 D.prototype不在o的原型链上
o instanceof D; 

o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
</pre>

需要注意的是，如果表达式 `obj instanceof Foo` `返回true，则并不意味着该表达式会永远返回true，因为Foo.prototype属性的值有可能会改变`，改变之后的值很有可能不存在于`obj`的原型链上，这时原表达式的值就会成为`false`。另外一种情况下，原表达式的值也会改变，就是改变对象`obj`的原型链的情况，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的`__proto__魔法属性`，`是可以实现的`。比如`执行obj.__proto__ = {}之后`，`obj instanceof Foo就会返回false了。`

### `instanceof和多全局对象`(多个frame或多个window之间的交互)

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如，表达式 `[] instanceof window.frames[0].Array` 会返回`false`，因为 `Array.prototype !== window.frames[0].Array.prototype`，因此你必须使用 `Array.isArray(myObj)` 或者 `Object.prototype.toString.call(myObj) === "[object Array]"`来判断myObj是否是数组。

<div class="note">**Mozilla开发者注意:**  
在代码中使用 XPCOM instanceof 有特殊影响: `obj instanceof` _`xpcomInterface`_ (e.g. `Components.interfaces.nsIFile`) calls `obj.QueryInterface(_xpcomInterface_)` and returns `true` if QueryInterface succeeded. A side effect of such call is that you can use _`xpcomInterface`_'s properties on `obj` after a successful `instanceof` test. Unlike standard JavaScript globals, the test `obj instanceof xpcomInterface` works as expected even if `obj` is from a different scope.</div>

## 例子

### 例子: 表明`String`对象和`Date对象都属于``Object类型`

下面的代码使用了`instanceof`来证明：`String和``Date对象`同时也属于`Object类型`。

    var simpleStr = "This is a simple string"; 
    var myString  = new String();
    var newStr    = new String("String created with constructor");
    var myDate    = new Date();
    var myObj     = {};

    simpleStr instanceof String; // returns false, 检查原型链会找到 undefined
    myString  instanceof String; // returns true
    newStr    instanceof String; // returns true
    myString  instanceof Object; // returns true

    myObj instanceof Object;    // returns true, despite an undefined prototype
    ({})  instanceof Object;    // returns true, 同上

    myString instanceof Date;   // returns false

    myDate instanceof Date;     // returns true
    myDate instanceof Object;   // returns true
    myDate instanceof String;   // returns false

### 演示`mycar属于Car类型的同时又`属于`Object类型`

下面的代码创建了一个类型`Car`，`以及该类型的对象实例``mycar`. `instanceof`运算符表明了这个`mycar对象既属于``Car类型`，`又属于``Object类型`。

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // 返回 true
var b = mycar instanceof Object; // 返回 true
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Relational Operators</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-relational-operators)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The instanceof operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">The instanceof operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.8.6)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义。在 JavaScript 1.4 中实现。</td>

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

<th style="line-height: 16px;">特征</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

</tr>

<tr>

<td>基 础支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">特征

<table style="border-color: transparent;" class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;"> </th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

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

*   [typeof](/zh-CN/docs/JavaScript/Reference/Operators/typeof "/zh-CN/docs/JavaScript/Reference/Operators/typeof")