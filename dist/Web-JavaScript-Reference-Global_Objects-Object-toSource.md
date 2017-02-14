<div>

<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

</div>

## 概述

返回一个对象源代码的字符串表示.

<table class="standard-table">

<thead>

<tr>

<th class="header" colspan="2">Method of [`Object`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object "JavaScript/Reference/Global_Objects/Object")</th>

</tr>

</thead>

<tbody>

<tr>

<td>Implemented in</td>

<td>JavaScript 1.3</td>

</tr>

<tr>

<td>ECMAScript Edition</td>

<td>None</td>

</tr>

</tbody>

</table>

## 语法

    obj.toSource()

### 参数

无.

## 描述

`toSource`方法返回下面这样的值:

*   对于内置的`Object`对象, `toSource`返回了下面的字符串:

<pre class="eval">function Object() {
   [native code]
}</pre>

*   对于`Object`的实例,`toSource会返回该实例`源代码的字符串表示.

在调试时,你可以通过`toSource来查看一个对象的内容`.

还可以遮蔽内置的`toSource`方法.例如:

<pre class="brush:js">function Person(name) {
    this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
    return "new Person(" + uneval(this.name) + ")";
};

alert(new Person("Joe").toSource()); // ---> new Person("Joe")</pre>

### 内置`的toSource方法`

每个核心JavaScript类型都有它自己的`toSource`方法.这些对象有:

*   [Array.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Array/toSource "JavaScript/Reference/Global_Objects/Array/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Array对象方法.
*   [Boolean.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Boolean/toSource "JavaScript/Reference/Global_Objects/Boolean/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Boolean对象方法.
*   [Date.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Date/toSource "JavaScript/Reference/Global_Objects/Date/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Date对象方法.
*   [Function.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Function/toSource "JavaScript/Reference/Global_Objects/Function/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Function对象方法.
*   [Number.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Number/toSource "JavaScript/Reference/Global_Objects/Number/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Number对象方法.
*   [Object.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/Object/toSource "JavaScript/Reference/Global_Objects/Object/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - Object对象方法.
*   [RegExp.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/toSource "JavaScript/Reference/Global_Objects/RegExp/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - RegExp对象方法.
*   [String.toSource](../../../../../../zh-CN/docs/JavaScript/Reference/Global_Objects/String/toSource "JavaScript/Reference/Global_Objects/String/toSource") <span class="inlineIndicator nonStandard nonStandardInline">非标准</span> - String对象方法.

## 例子

### 例子: 使用`toSource`

下面的代码定义了一个`Dog`对象类型还创建了一个`Dog类型的对象实例``theDog`:

<pre class="brush:js">function Dog(name, breed, color, sex) {
   this.name = name;
   this.breed = breed;
   this.color = color;
   this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "girl");</pre>

在`theDog`上调用`toSource`方法会显示出能定义该对象的源码:

<pre class="brush:js">theDog.toSource();</pre>

返回

<pre class="brush:js">({name:"Gabby", breed:"Lab", color:"chocolate", sex:"girl"})</pre>

## 相关链接

*   [Object.toString](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/toString "JavaScript/Reference/Global_Objects/Object/toString")