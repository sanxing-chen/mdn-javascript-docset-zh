对象可以通过 [`new Object()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object), `[Object.create()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 方法`， 或者使用_字面 _标记 (_初始化_ 标记)初始化。 对象初始化，由花括号{}包含的一个由0个或者多个对象属性名和关联值组成的列表构成。

## 语法

<pre class="brush: js">var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo", b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  <var>property: function</var> ([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};
</pre>

### ECMAScript 6新标记

请参考兼容性表格获取这些标记的支持信息。在不被支持的环境中，这些标记将造成语法错误。

<pre class="brush: js">// Shorthand property names (ES6)
var a = "foo", b = 42, c = {};
var o = { a, b, c };

// Shorthand method names (ES6)
var o = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};

// Computed property names (ES6)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};</pre>

## 描述

对象初始化是一个描述[`对象`](/zh-CN/docs/Web/JavaScript/Reference/对象 "此页面仍未被本地化, 期待您的翻译!")初始化过程的表达式。对象初始化是由一组描述对象的属性组成。属性的值可以是[固有](/zh-CN/docs/Glossary/固有 "The definition of that term (固有) has not been written yet; please consider contributing it!")类型，也可以是其他对象。

### 创建对象

没有属性的空对象可以用以下方式创建：

<pre class="brush: js">var object = {};</pre>

不过，_字面 _和_初始化 _标记的优势在于，可以用内含属性的花括号快速创建对象。简单地编写一个逗号分隔的键:值对的类别。如下代码创建了一个含三个属性的对象，键分别为 "foo", "age" 和 "baz"。这些键对应的值，分别是字符串“bar”，数字42和另一个对象。

<pre class="brush: js">var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
}</pre>

### 属性访问

创建对象后，可以读取或者修改它。对象属性可以用下标小圆点标记或者方括号标记访问。参考[属性访问](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 获取更多信息。

<pre class="brush: js">object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
</pre>

### 属性定义

上面学习了如何用初始化标记对象属性。经常能遇到希望将代码中的变量放到对象中的情况。可能遇到如下代码：

<pre class="brush: js">var a = "foo", 
    b = 42,
    c = {};

var o = { 
  a: a,
  b: b,
  c: c
};</pre>

在 ECMAScript 2015中，有更简短的标记可以实现同样的效果：

<pre class="brush: js">var a = "foo", 
    b = 42, 
    c = {};

// Shorthand property names (ES6)
var o = { a, b, c };</pre>

#### 重复属性名

属性使用了同样的名称时，后面的属性会覆盖前面的属性。

<pre class="brush: js">var a = {x: 1, x: 2};
console.log(a); // { x: 2}
</pre>

在 ECMAScript 5 strict 模式的代码中， 重复的属性名会被当做[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.")。引入计算的属性名以后，属性名会在运行时出现重复。ECMAScript 2015 移除了这个限制。

<pre class="brush: js">function haveES6DuplicatePropertySemantics(){
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}</pre>

### 方法定义

对象属性也可以是一个[函数](/en-US/docs/Web/JavaScript/Reference/Functions)、[getter](/en-US/docs/Web/JavaScript/Reference/Functions/get)、[setter](/en-US/docs/Web/JavaScript/Reference/Functions/set)方法。

<pre class="brush: js">var o = {
  <var>property: function</var> ([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};</pre>

ECMAScript 2015引入了一中简短写法， "function" 关键字也可以丢掉。

<pre class="brush: js">// Shorthand method names (ES6)
var o = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};</pre>

ECMAScript 2015 提供了一种简明地定义以生成器函数作为值的属性的方法。

<pre class="brush: js">var o = {
  * <var>generator</var>() {
    ...........
  }
};</pre>

ECMAScript 5 中可以这样书写 (需要注意的时 ES5 没有生成器)：

<pre class="brush: js">var o = {
  generator<var>Method: function *</var>() {
    ...........
  }
};</pre>

获取更多信息和范例，请参考 [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

### 计算的属性名

从ECMAScript 2015开始，对象初始化语法开始支持计算的属性名。其允许在[]中放入表达式，计算结果可以当做属性名。这种用法和用方括号访问[属性](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)非常类似，也许你已经用来读取和设置属性了。现在同样的语法也可以用于对象字面值了：

<pre class="brush: js">// Computed property names (ES6)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }</pre>

### 变更原型

定义属性为`__proto__: 值` 或 `"__proto__": 值` 时，不会创建名为`__proto__属性。如果给出的值是对象或者`[`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)`，那么对象的[[Prototype]]会被设置为给出的值。（如果给出的值不是对象也不是null，那么对象的原型不会改变。）`

<pre class="brush: js">var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
</pre>

在对象字面值中，仅有一次变更原型的机会；多次变更原型，会被视为语法错误。

不使用冒号标记的属性定义，不会变更对象的原型；而是和其他具有不同名字的属性一样是普通属性定义。

<pre class="brush: js">var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = { __proto__() { return "hello"; } };
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
</pre>

## 对象字面值记法和JSON

对象字面值记法和和 **J**ava**S**cript **O**bject **N**otation ([JSON](/en-US/docs/Glossary/JSON))是不同的。虽然他们看起来相似，不同点有：

*   JSON 只允许`"property": value` syntax形式的属性定义。属性名必须用双引号括起来。且属性定义不允许使用简便写法。
*   JSON中，属性的值仅允许字符串，数字，数组，true，false，或者其他JSON对象。 
*   JSON中，不允许将值设置为函数。
*   [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 等对象，经[`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法将一个符合JSON语法的字符串解析成一个对应类型的值或对象。在解析过程中，还可以选择性的修改某些属性的原始解析值。")处理后，会变成字符串。
*   [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法将一个符合JSON语法的字符串解析成一个对应类型的值或对象。在解析过程中，还可以选择性的修改某些属性的原始解析值。") 不会处理计算的属性名，会当做错误抛出。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object Initializer</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>增加[Getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) 和 [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object Initializer</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>增加method/property 简写方法和计算的属性名</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>

1.0

</td>

<td>1.0 (1.7 or earlier)</td>

<td>1</td>

<td>1</td>

<td>1</td>

</tr>

<tr>

<td>Computed property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>7.1.3</td>

</tr>

<tr>

<td>Shorthand property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[33](/en-US/Firefox/Releases/33 "Released on 2014-10-14.") (33)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Shorthand method names</td>

<td>

42.0

</td>

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

<th>特性</th>

<th>Android</th>

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td>

<span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span>

</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>1.0 (1.0)</td>

<td>1</td>

<td>1</td>

<td>1</td>

<td>1.0</td>

</tr>

<tr>

<td>Computed property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Shorthand property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>33.0 (33)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Shorthand method names</td>

<td>

<span style="color: #f00;">未实现</span>

</td>

<td>42.0</td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>42.0</td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
*   `[get](/en-US/docs/Web/JavaScript/Reference/Functions/get)` / `[set](/en-US/docs/Web/JavaScript/Reference/Functions/set)`
*   [Method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
*   [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)