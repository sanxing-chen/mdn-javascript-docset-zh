## 概述

`**propertyIsEnumerable()**` 方法返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性。

## 语法

    obj.propertyIsEnumerable(prop)

### 参数

<dl>

<dt>`prop`</dt>

<dd>需要测试的属性名。</dd>

<dt>

### 返回值

一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!") 用来表明指定的属性名是否可枚举

</dt>

</dl>

## 描述

每个对象都有 `propertyIsEnumerable `方法。该方法可以判断出指定对象里的属性是否可枚举，也就是说该属性是否可以通过 [`for...in`](/zh-CN/docs/JavaScript/Reference/Statements/for...in "JavaScript/Reference/Statements/for...in") 循环等遍历到，不过有些属性虽然可以通过 `for...in `循环遍历到，但因为它们不是自身属性，而是从原型链上继承的属性,所以该方法也会返回`false`。如果对象没有指定的属性，该方法返回 `false`。

## 例子

### `propertyIsEnumerable`方法的基本用法

下面的例子演示了`propertyIsEnumerable`方法在普通对象和数组上的基本用法:

    var o = {};
    var a = [];
    o.prop = 'is enumerable';
    a[0] = 'is enumerable';

    o.propertyIsEnumerable('prop');   //  返回 true
    a.propertyIsEnumerable(0);        // 返回 true

### 用户自定义对象和引擎内置对象

下面的例子演示了用户自定义对象和引擎内置对象上属性可枚举性的区别.

    var a = ['is enumerable'];

    a.propertyIsEnumerable(0);          // 返回 true
    a.propertyIsEnumerable('length');   // 返回 false

    Math.propertyIsEnumerable('random');   // 返回 false
    this.propertyIsEnumerable('Math');     // 返回 false

### 自身属性和继承属性

    var a = [];
    a.propertyIsEnumerable('constructor');         // 返回 false

    function firstConstructor() {
      this.property = 'is not enumerable';
    }

    firstConstructor.prototype.firstMethod = function() {};

    function secondConstructor() {
      this.method = function method() { return 'is enumerable'; };
    }

    secondConstructor.prototype = new firstConstructor;
    secondConstructor.prototype.constructor = secondConstructor;

    var o = new secondConstructor();
    o.arbitraryProperty = 'is enumerable';

    o.propertyIsEnumerable('arbitraryProperty');   // 返回 true
    o.propertyIsEnumerable('method');              // 返回 true
    o.propertyIsEnumerable('property');            // 返回 false

    o.property = 'is enumerable';

    o.propertyIsEnumerable('property');            // 返回 true

    // 这些返回fasle，是因为，在原型链上propertyIsEnumerable不被考虑
    // (尽管最后两个在for-in循环中可以被循环出来)。
    o.propertyIsEnumerable('prototype');   // 返回 false (根据 JS 1.8.1/FF3.6)
    o.propertyIsEnumerable('constructor'); // 返回 false
    o.propertyIsEnumerable('firstMethod'); // 返回 false

## 规范

<table>

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object.prototype.propertyIsEnumerable</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.7)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object.prototype.propertyIsEnumerable</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.propertyisenumerable)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object.prototype.propertyIsEnumerable</small>](https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## <span style="font-size: 2.142857142857143rem;">浏览器兼容性</span>

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

</tbody>

</table>

</div>

### Gecko-specific notes

*   从 JavaScript 1.8.1 (in Firefox 3.6) 开始，`propertyIsEnumerable("prototype")`返回 false，不再是 true；这与 ECMAScript 5 的结果一致。

## 相关链接

*   [Enumerability and ownership of properties](/zh-CN/docs/Enumerability_and_ownership_of_properties "/zh-CN/docs/Enumerability_and_ownership_of_properties")
*   [for...in](/zh-CN/docs/JavaScript/Reference/Statements/for...in "JavaScript/Reference/Statements/for...in")
*   [`Object.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "Object.keys() 方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组，数组中属性名的排列顺序和使用for-in循环遍历该对象时返回的顺序一致 (顺序一致不包括数字属性)（两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性）。")
*   [`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")