## 消息

<pre class="syntaxbox">警告: JavaScript 1.6's 版本的for-each-in遍历不再赞成使用; 建议用 ES6的 for-of 替换
</pre>

## 错误类型

警告

## 出了什么问题?

JavaScript 1.6's [`for each (variable in obj)`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.")语法不赞成使用, 将在未来版本移除它。

## 实例

### 遍历对象

[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.") 用来遍历指定对象.

#### 不赞成这么使用

<div class="warning">

var object = { a: 10, b: 20 };

for each (var x in object) {  
  console.log(x);        // 10  
                         // 20  
}

</div>

#### 替换语法

你可以使用 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。") 遍历指定对象, 获取每次循环的值:

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
</pre>

也可以使用{jsxref("Statements/for...of", "for...of")}} (ES2015) 和 [`Object.values`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values "Object.values()返回一个包含指定对象所有的可枚举属性值的数组，数组中的值顺序和使用for...in循环遍历的顺序一样(不同的是：for-in循环同时返回了该对象原型链上的可枚举属性值，而Object.values()不包括)。") (ES2017), 你可以获取指定对象的值得数组然后像这样遍历它:

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
</pre>

### 数组遍历

[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.") 被用于遍历制定数组.

#### 不赞成这么使用

<div class="warning">

var array = [10, 20, 30];

for each (var x in array) {  
  console.log(x);        // 10  
                         // 20  
                         // 30  
}

</div>

#### 替换语法

现在最好用[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") (ES2015) 替换

<pre class="brush: js example-good">var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

### 遍历一个空数组

[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.") 如果指定值是 `null` o或 `undefined什么都遍历不出来。` [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 在这种情况会抛出异常.

#### 不赞成这么使用

<div class="warning">

function func(array) {  
  for each (var x in array) {  
    console.log(x);  
  }  
}  
func([10, 20]);        // 10  
                       // 20  
func(null);            // prints nothing  
func(undefined);       // prints nothing

</div>

#### 替换语法

用[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.") 重写[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.") 后值可以为 `null` 和 `undefined`  ，同时你需要警惕[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")抛出的异常.

<pre class="brush: js example-good">function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

### 遍历对象键值对

#### 不赞成这么使用

 不赞成使用[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.")和[`Iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iterator "此页面仍未被本地化, 期待您的翻译!") 对象来遍历指定对象的键值对.

<div class="warning">

var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {  
  console.log(key, value);  // "a", 10  
                            // "b", 20  
}

</div>

#### 替换语法

你可以使用 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。") 遍历指定对象,获取每次循环的值:

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

也可以使用{jsxref("Statements/for...of", "for...of")}} (ES2015) 和 [`Object.values`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values "Object.values()返回一个包含指定对象所有的可枚举属性值的数组，数组中的值顺序和使用for...in循环遍历的顺序一样(不同的是：for-in循环同时返回了该对象原型链上的可枚举属性值，而Object.values()不包括)。") (ES2017), 你可以获取指定对象的值得数组然后像这样遍历它:

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

## 参见

*   [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")
*   [`Object.values`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values "Object.values()返回一个包含指定对象所有的可枚举属性值的数组，数组中的值顺序和使用for...in循环遍历的顺序一样(不同的是：for-in循环同时返回了该对象原型链上的可枚举属性值，而Object.values()不包括)。")
*   [`Object.entries`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries "Object.entries方法返回一个包含由给定对象所有可枚举属性的属性名和属性值组成的 [属性名，属性值] 键值对的数组，数组中键值对的排列顺序和使用for...in循环遍历该对象时返回的顺序一致（两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性）。")