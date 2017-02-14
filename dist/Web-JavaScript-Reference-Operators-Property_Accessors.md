属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点符号和括号。

## 语法

<pre class="syntaxbox">object.property
object["property"]
</pre>

## 描述

我们可以将对象看做是一个关联数组，或映射，字典，哈希表，查找表。这个数组中的键就是这个对象中属性的名称。通常，当我们提及一个对象的属性时，会对属性与方法之间做个对比。然而，属性与方法之间的区别并不大。一个方法就是一个可以被调用的属性而已，例如一个指向[Function](/en-US/docs/Web/JavaScript/Reference/Functions)实例的引用可以作为对象属性的值。

访问对象属性有两种方式：点符号表示法和括号表示法.

### 点符号表示法

<pre class="brush: js">get = object.property;
object.property = set;
</pre>

以上代码中，`属性名必须是一个有效的JavaScript标识符，例如，一串字母数字字符，也包括下划线及美元符号，但不能以数字作为开头。比如<font face="Open Sans, Arial, sans-serif">，</font>``object.$1是合法的，而` `object.1是无效不合法的。`

<pre class="brush: js">document.createElement('pre');
</pre>

在上述代码块中，对象document中存在一个名为"createElement"的方法并且被调用了。

### 括号表示法

<pre class="brush: js">get = object[property_name];
object[property_name] = set;
</pre>

`property_name` 是一个字符串。该字符串不一定是一个合法的标识符；它可以是任意值，例如，"1foo"，"!bar!"， 甚至是一个空格。

<pre class="brush: js">document['createElement']('pre');
</pre>

这里的代码的功能跟上一个列子的作用是相同的。

### 属性名

属性名必须是字符串。这意味着非字符串对象不能用来作为一个对象属性的键。任何非字符串对象，包括number，可通过[toString](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法，类型转换成一个字符串。

<pre class="brush: js">var object = {};
object['1'] = 'value';
console.log(object[1]);
</pre>

上述代码的输出为"value"，因为1被类型转换为'1'。

<pre class="brush: js">var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value';
console.log(object[bar]);
</pre>

上述的代码的输出也是"value"，由于对象foo和bar 都会被转成相同的字符串。在[SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey) JavaScript 引擎中，这个字符串将会是"['object Object']"。

### 方法绑定

一个方法没有绑定到对象上，那就意味着这个方法是不起作用的。特别要注意的是，在一个方法中`this对象并不是固定的，例如，``this不需要指向包含当前方法的对象。` this可通过函数调用被传递过去的值所替换。详见[method binding](/en-US/docs/Web/JavaScript/Reference/Operators/this#Method_binding)。

### 注意事项

JavaScript新手在使用[eval](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)时会犯错，在那些可通过括号表示法替换的场景下。例如，下面的语法经常在很多代码中找到。

<pre class="brush: js">x = eval('document.forms.form_name.elements.' + strFormControl + '.value');
</pre>

`eval的性能较差，在任何时候都应该避免使用。而且，此时``strFormControl`必须是一个合法的标识符， 这在一些names、IDs表单控件中并不是必要的。所以，最好是使用括号来代替：

<pre class="brush: js">x = document.forms["form_name"].elements[strFormControl].value;
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

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition. Implemented in JavaScript 1.0</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Property Accessors</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.2.1)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Property Accessors</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-property-accessors)</td>

<td><span class="spec-Standard">Standard</span></td>

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

*   [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")