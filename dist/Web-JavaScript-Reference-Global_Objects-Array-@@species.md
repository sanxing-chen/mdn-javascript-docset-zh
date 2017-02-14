The `**Array[@@species]**` accessor property returns the `Array` constructor.

## 语法

<pre class="syntaxbox">Array[Symbol.species]
</pre>

## 描述

The `species` accessor property returns the default constructor for `Array` objects. Subclass constructors may over-ride it to change the constructor assignment.

## 示例

The `species` property returns the default constructor function, which is the `Array` constructor for `Array` objects:

<pre class="brush: js">Array[Symbol.species]; // function Array()</pre>

In a derived collection object (e.g. your custom array `MyArray`), the `MyArray` species is the `MyArray` constructor. However, you might want to overwrite this, in order to return parent `Array` objects in your derived class methods:

<pre class="brush: js">class MyArray extends Array {
  // Overwrite MyArray species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}</pre>

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
<small lang="zh-CN">get Array [ @@species ]</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-get-array-@@species)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">get Array [ @@species ]</small>](https://tc39.github.io/ecma262/#sec-get-array-@@species)</td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[48](/en-US/Firefox/Releases/48 "Released on 2016-08-02.") (48)</td>

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

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>48.0 (48)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 参考

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Symbol.species`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species "Symbol.species 是指定一个构造函数创建派生对象的函数值属性。")