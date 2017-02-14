`**valueOf()**` 方法返回指定对象的原始值。

## 语法

    object.valueOf()

## 描述

JavaScript 调用 `valueOf() 方法用来把对象转换成`原始类型的值（数值、字符串和布尔值）`。` 你很少需要自己调用此函数; JavaScript 会自动调用此函数当需要转换成一个原始值时。

默认情况下, `valueOf() 会被每个对象`[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")`继承。`每一个内置对象都会覆盖这个方法为了返回一个合理的值，如果对象没有原始值，`valueOf() 就会返回对象自身。`

你可以在自己的代码中使用 `valueOf` 方法用来把内置对象的值转换成原始值。 当你创建了自定义对象时，你可以覆盖 `Object.prototype.valueOf()` 并调用来取代 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 方法。

### 覆盖自定义对象的 `valueOf` 方法

你可以创建一个取代 `valueOf` 方法的函数，你的方法必须不能传入参数。

假设你有个对象叫 `myNumberType` 而你想为它创建一个 `valueOf `方法。 下面的代码为`valueOf方法赋予了一个用户自定义函数：`

    myNumberType.prototype.valueOf = function() { return customPrimitiveValue; };

有了这样的一个方法，下一次每当 `myNumberType` 要被转换为原始类型值时, JavaScript 在此之前会自动调用自定义的 valueOf 方法。

`valueOf` 方法一般都会被 JavaScript 自动调用，但你也可以像下面代码显示的那样自己去调用:

    myNumber.valueOf()

<div class="note">

**注意:** Objects 是字符串时，转换是调用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个表示该对象的字符串。") 方法, 这个和 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String "String 全局对象是用来构造字符串对象或字符序列的构造函数。") 对象转换为原始类型的字符串所用的 `valueOf是不一样的`. 每个对象都自己的字符串转换方法, if only "`[object _type_]`". 但是很多对象不转换成 number, boolean, 或 function.

</div>

## 示例

### 使用 `valueOf`

<pre>function myNumberType(n) {
    this.number = n;
}

myNumberType.prototype.valueOf = function() {
    return this.number;
};

myObj = new myNumberType(4);
myObj + 3; // 7</pre>

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

<td>Initial definition. Implemented in JavaScript 1.1.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object.prototype.valueOf</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.4)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object.prototype.valueOf</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.valueof)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.valueOf</small>](https://tc39.github.io/ecma262/#sec-object.prototype.valueof)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

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

## 更多参考

*   [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个表示该对象的字符串。")
*   [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt "概述")