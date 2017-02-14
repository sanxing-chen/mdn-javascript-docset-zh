以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。

## 语法

<pre class="syntaxbox">for (<var>variable</var> in <var>object</var>) {_..._}</pre>

## 参数

<dl>

<dt>`variable`</dt>

<dd>每次迭代，一个不同的属性名将会赋予 _variable _</dd>

</dl>

<dl>

<dt>`object`</dt>

<dd>可枚举属性被迭代的对象</dd>

</dl>

## 描述

`for...in` 循环只遍历可枚举属性。像 Array 和 Object 使用内置构造函数所创建的对象都会继承自 Object.prototype 和 String.prototype 的不可枚举属性，例如 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")` 的` [`indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf "indexOf() 方法返回指定值在字符串对象中首次出现的位置。从 fromIndex 位置开始查找，如果不存在，则返回 -1。")  方法或者 `[Object](/zh-cn/JavaScript/Reference/Global_Objects/Object "zh-cn/JavaScript/Reference/Global_Objects/Object") 的` `[toString](/zh-cn/JavaScript/Reference/Global_Objects/Object/toString "zh-cn/JavaScript/Reference/Global_Objects/Object/toString")` 方法。循环将迭代对象的所有可枚举属性和从它的构造函数的 prototype 继承而来的（包括被覆盖的内建属性）。

#### 删除，添加或者修改属性

`for...in` 循环以任意序迭代一个对象的属性（浏览 [delete operator](/zh-cn/JavaScript/Reference/Operators/delete#Cross-browser_issues "zh-cn/JavaScript/Reference/Operators/Special_Operators/delete_Operator#Cross-browser_issues") 了解更多关于为什么开发者不能依赖于“看上去”的迭代顺序，至少是在跨浏览器情况下）。 如果一个属性在一次迭代中被修改，在稍后被访问，其在循环中的值是其在稍后时间的值。一个在被访问之前已经被删除的属性将不会在之后被访问。在迭代进行时被添加到对象的属性，可能在之后的迭代被访问，也可能被忽略。通常，在迭代过程中最好不要在对象上进行添加、修改或者删除属性的操作，除非是对当前正在被访问的属性。这里并不保证是否一个被添加的属性在迭代过程中会被访问到，不保证一个修改后的属性（除非是正在被访问的）会在修改前或者修改后被访问，不保证一个被删除的属性将会在它被删除之前被访问。

### Array 迭代和 `for...in`

<div class="note">

**Note:** `for..in` 不应该被用来迭代一个下标顺序很重要的 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") .

</div>

数组索引仅是可枚举的整数名，其他方面和别的普通对象属性没有什么区别。for...in 并不能够保证返回的是按一定顺序的索引，但是它会返回所有可枚举属性，包括非整数名称的和继承的。

因为迭代的顺序是依赖于执行环境的，所以数组遍历不一定按次序访问元素。 因此当迭代那些访问次序重要的 arrays 时用整数索引去进行 [`for`](/zh-CN/docs/Web/JavaScript/Reference/for "此页面仍未被本地化, 期待您的翻译!") 循环 (或者使用 [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。") 或 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 循环) 。

### 仅迭代自身的属性

如果你只要考虑对象本身的属性，而不是它的原型，那么使用 [`getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。") 或执行  [`hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "hasOwnProperty() 方法用来判断某个对象是否含有指定的自身属性。") 来确定某属性是否是对象本身的属性 (也能使用[`propertyIsEnumerable`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable "propertyIsEnumerable() 方法返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性。"))。另外，如果你知道外部不存在任何的干扰代码，你可以扩展内置原型与检查方法。

## 例子

下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。

<pre class="brush: js">var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"</pre>

下面的函数阐述了 [`hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "hasOwnProperty() 方法用来判断某个对象是否含有指定的自身属性。") 的用法: 隐藏的继承属性将不会被显示。

    var triangle = {a:1, b:2, c:3};

    function ColoredTriangle() {
      this.color = "red";
    }

    ColoredTriangle.prototype = triangle;

    var obj = new ColoredTriangle();

    for (var prop in obj) {
      if( obj.hasOwnProperty( prop ) ) {
        console.log("o." + prop + " = " + obj[prop]);
      } 
    }

    // Output:
    // "o.color = red"

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">批注</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">for...in statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">for...in statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">for...in statement</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-12.6.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">for...in statement</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-12.6.3)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Inital definition.</td>

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

</tbody>

</table>

</div>

<div id="compat-mobile">

<table style="border-color: transparent;" class="compat-table">

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

</tbody>

</table>

</div>

## 兼容性：初始化函数表达式

在 SpiderMonkey 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37) 版本之前, 有可能在使用一个初始化表达式 (`i=0`) 在一个 `for...in` 循环中：

    var obj = {a:1, b:2, c:3}; 
    for(var i=0 in obj) {
      console.log(obj[i]); 
    } 
    // 1 
    // 2 
    // 3

<span style="line-height: 1.5;">这种非标准的方式已经在40的版本之后被移除了. 现在开始它会在控制台里抛出一个 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.") ("for-in loop head declarations may not have initializers") 警告。</span>(<span style="line-height: 1.5;">[bug 748550](https://bugzilla.mozilla.org/show_bug.cgi?id=748550 "FIXED: Remove InitialiserNoIn[opt] from ... in  for(var ... in obj) to help simplify ES6") 以及</span> [bug 1164741](https://bugzilla.mozilla.org/show_bug.cgi?id=1164741 "FIXED: Add back partial support for |for (var i = 0 in obj);| syntax, ignoring the initializer rather than failing on it")<span style="line-height: 1.5;">)。</span>

<span style="line-height: 1.5;">像其他引擎 V8(Chrome)，</span>Chakra (IE/Edge)， JSC (WebKit/Safari) 正在研究去除这种不标准的行为。

## 相关

*   [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")  一个类似的迭代属性值的语句
*   [`for each in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.") 一个类似的但是迭代的是对象的属性的值而不是其属性名字的语句 (过时的)
*   [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.")
*   迭代器和构造器 (uses the `for...in` syntax)
*   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docsWeb/JavaScript/Enumerability_and_ownership_of_properties)
*   [`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。")
*   [`Object.prototype.hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "hasOwnProperty() 方法用来判断某个对象是否含有指定的自身属性。")
*   [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。")