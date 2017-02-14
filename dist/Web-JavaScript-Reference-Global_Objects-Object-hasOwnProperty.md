`**hasOwnProperty()**` 方法会返回一个布尔值，其用来判断某个对象是否含有指定的属性。

## 语法

    obj.hasOwnProperty(prop)

### 参数

<dl>

<dt>`prop`</dt>

<dd>要检测的属性  [`字符串`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!") 名称或者 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。")。</dd>

</dl>

### 返回值

用来判断某个对象是否含有指定的属性的 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!") 。

## 描述

所有继承了 [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 的对象都会继承到 `hasOwnProperty` 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in "如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。") 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

## 示例

### 使用 `hasOwnProperty` 方法判断属性是否存在

下面的例子检测了对象 `o` 是否含有自身属性 `prop：`

<pre class="brush: js">o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // 返回 true
changeO();
o.hasOwnProperty('prop');   // 返回 false</pre>

### 自身属性与继承属性

下面的例子演示了 `hasOwnProperty` 方法对待自身属性和继承属性的区别：

<pre class="brush: js">o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // 返回 true
o.hasOwnProperty('toString');         // 返回 false
o.hasOwnProperty('hasOwnProperty');   // 返回 false</pre>

### 遍历一个对象的所有自身属性

下面的例子演示了如何在遍历一个对象的所有属性时忽略掉继承属性，注意这里 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。")  循环只会遍历可枚举属性，所以不应该基于这个循环中没有不可枚举的属性而得出 `hasOwnProperty 是严格限制于可枚举项目的（如同 `[`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。")）。

<pre class="brush: js">var buz = {
    fog: 'stack'
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert("this is fog (" + name + ") for sure. Value: " + buz[name]);
    }
    else {
        alert(name); // toString or something else
    }
}</pre>

### `使用 hasOwnProperty` 作为属性名

JavaScript 并没有保护 hasOwnProperty 属性名，因此某个对象是有可能存在使用这个属性名的属性，使用**外部**的 `hasOwnProperty 获得正确的结果是需要的：`

<pre class="brush: js">var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.5.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.hasownproperty)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.hasOwnProperty</small>](https://tc39.github.io/ecma262/#sec-object.prototype.hasownproperty)</td>

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

*   [属性的可枚举性和所有权](/zh-CN/docs/Enumerability_and_ownership_of_properties "/zh-CN/docs/Enumerability_and_ownership_of_properties")
*   [`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。")
*   [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。")
*   [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in "如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。")
*   [JavaScript 教程: 再谈继承](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_Revisited)