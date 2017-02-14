## 概述

**`set`** 语法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。

## 语法

<pre class="syntaxbox">{set _prop_(_val_) { . . . }}
{set [expression](_val_) { . . . }}</pre>

### 参数

<dl>

<dt>`prop`</dt>

<dd>将被指定函数绑定的属性名。</dd>

</dl>

<dl>

<dt>`val`</dt>

<dd>存有将要赋给 prop 的值的变量的代称。</dd>

<dt>expression</dt>

<dd>从 ECMAScript 6 开始，将被指定函数绑定的属性名可以是一个表达式。</dd>

</dl>

## 描述

在 javascript 中，如果试着改变一个属性的值，那么对应的 setter 将被执行。setter 经常和 getter 连用以创建一个伪属性。一个拥有真实值的属性就不能再有 setter 了。

使用 set 语法时请注意：

<div>

*   它的标识符可以是 number 与 string 二者之一。
*   它必须有一个明确的参数 （详见 [Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)）
*   在同一个对象中，不能为一个已有真实值的变量使用 set ，也不能为一个属性设置多个 set。  
    ( `{ set x(v) { }, set x(v) { } }` 和 `{ x: ..., set x(v) { } }` 是不允许的 )

</div>

setter 可以用  [`<u><font color="#0066cc" face="Courier New">delete</font></u>`](/en-US/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete") 操作来移除。

## 示例

### 在对象初始化时定义 setter

下面会为对象 o 定义一个伪属性 current ，当对它赋值时，将会把值更新到 log：

<pre class="brush: js">var o = {
  set current (str) {
    return this.log[this.log.length] = str;
  },
  log: []
}
</pre>

请注意，`current 属性是未定义的，访问它时将会返回 undefined。`

### 用 `delete` 操作符移除一个 setter

我们可以使用 `[delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) 操作符移除 setter。`

<pre class="brush: js">delete o.current;
</pre>

### 使用 `defineProperty` 为已存在的对象定义 setter

我们可以随时使用 [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。") 给一个已经存在的对象添加一个 setter。

<pre class="brush: js">var o = { a:0 };

Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5</pre>

### 使用 computed 属性名

<div class="note">

**注意:** Computed 属性是个实验性技术，属于 ECMAScript 6 提案的内容，现在它尚未广泛得到浏览器厂商的支持。在尚未支持 computed 属性的浏览器中使用时将会抛出一个语法错误。

</div>

<pre class="brush: js">var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
</pre>

## <span class="def"><span>规范</span></span>

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

根据 [Robert Nyman's page](http://robertnyman.com/javascript/javascript-getters-setters.html#regular-getters-and-setters) 显示，在不支持 setter 的浏览器上（尤其是 IE6-8），将会抛出一个语法错误。

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

### SpiderMonkey 用户注意

*   从  [JavaScript 1.8.1](/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8.1) 开始 ，在设置对象属性和数组初始化时，setters 将不会被调用。

## 相关链接

*   [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get)
*   [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。")
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")
*   [`__defineGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter "此页面仍未被本地化, 期待您的翻译!")
*   [`__defineSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter "此页面仍未被本地化, 期待您的翻译!")
*   [Defining Getters and Setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) in JavaScript Guide