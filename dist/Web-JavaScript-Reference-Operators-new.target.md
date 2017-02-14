<div>**`new.target`**`属性允许你检测函数或构造方法是否通过是通过`[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被调用的。在通过[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被初始化的函数或构造方法中，`new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target` 的值是[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。</div>

## 语法

<pre class="syntaxbox">new.target</pre>

## 描述

`new.target语法由一个关键字`"`new`"`，一个点，和一个属性名`"<font face="Consolas, Liberation Mono, Courier, monospace">target</font>"`组成。通常`"`new.`"`的作用是提供属性访问的上下文，但这里`"`new.`"`其实不是一个真正的对象。不过在构造方法调用中，new.target指向被new调用的构造函数，所以`"`new.`"成为了一个虚拟上下文。

`new.target属性是一个可以被所有函数访问的元属性。在`[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`new.target指向外围函数的` `new.target。`

## 实例

### 函数调用中的new.target

在普通的函数调用中（和作为构造函数来调用相对），`new.target的值是`[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。这使得你可以检测一个函数是否是作为构造函数通过[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)被调用的。

<pre class="brush: js">function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
</pre>

### 构造方法中的new.target

在类的构造方法中，`new.target指向直接被new执行的构造函数。并且当一个父类构造方法在子类构造方法中被调用时，情况与之相同。`

<pre class="brush: js">class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A { constructor() { super(); } }

var a = new A(); // logs "A"
var b = new B(); // logs "B"
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Built-in Function Objects</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2016 Draft (7th Edition, ECMA-262)  
<small lang="zh-CN">Built-in Function Objects</small>](https://tc39.github.io/ecma262/#sec-built-in-function-objects)</td>

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

<th>Feature</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>46.0</td>

<td>[41](/en-US/Firefox/Releases/41 "Released on 2015-09-22.") (41)</td>

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

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>46.0</td>

<td>41.0 (41)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>46.0</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Functions](/zh-CN/docs/Web/JavaScript/Reference/Functions)
*   [Classes](/zh-CN/docs/Web/JavaScript/Reference/Classes)
*   `[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)`
*   `[this](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)`