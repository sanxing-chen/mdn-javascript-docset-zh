使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.

<div class="noinclude">

<div class="warning">

作为ECMA-357([E4X](/zh-CN/docs/E4X "/zh-CN/docs/E4X"))标准的一部分,for each...in语句已被废弃,E4X中的大部分特性已被删除,但考虑到向后兼容,for each...in只会被禁用而不会被删除,可以使用ES6中新的[for...of](/zh-CN/docs/JavaScript/Reference/Statements/for...of "/zh-CN/docs/JavaScript/Reference/Statements/for...of")语句来代替.([bug 791343](https://bugzilla.mozilla.org/show_bug.cgi?id=791343 "disable for-each statement on javascript.options.xml.{content|chrome} = false").)

</div>

<div class="note">`for each...in` 是 [ECMA-357 (E4X)](http://www.ecma-international.org/publications/standards/Ecma-357.htm "http://www.ecma-international.org/publications/standards/Ecma-357.htm") 标准的一部分, 大部分非Mozilla浏览器都没有实现该标准, E4X并不是 ECMAScript 标准的一部分.</div>

</div>

## 语法

    for each (variable in object) {
      statement
    }

## 参数

<dl>

<dt>`variable`</dt>

<dd>用来遍历属性值的变量,前面的`var`关键字是可选的.该变量是函数的局部变量而不是语句块的局部变量.</dd>

</dl>

<dl>

<dt>`object`</dt>

<dd>该对象的属性值会被遍历.</dd>

</dl>

<dl>

<dt>`statement`</dt>

<dd>遍历属性值时执行的语句. 如果想要执行多条语句, 请用(`{ ... }`) 将多条语句括住.</dd>

</dl>

## 描述

一些对象的内置属性是无法被遍历到的,包括所有的内置方法,例如String对象的`indexOf`方法.不过,大部分的用户自定义属性都是可遍历的.

## 示例

### 例子: 使用`for each...in`

**警告:**永远不要使用for each...in语句遍历数组,仅用来遍历常规对象,[这里讲解了为什么这么说](/zh-CN/docs/JavaScript/Reference/Statements/for...in#Description "JavaScript/Reference/Statements/for...in#Description").

下面的代码片段演示如何遍历一个对象的属性值, 并计算它们的和:

<pre class="brush:js">var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};

for each (var item in obj) {
  sum += item;
}

print(sum); // 输出"26",也就是5+13+8的值</pre>

## 相关链接

*   [for...in](/zh-CN/docs/JavaScript/Reference/Statements/for...in "JavaScript/Reference/Statements/for...in") - 一个相似的语法,用来遍历对象的属性名称而非属性值.
*   [for...of](/zh-CN/docs/JavaScript/Reference/Statements/for...of "/zh-CN/docs/JavaScript/Reference/Statements/for...of") - 一个相似的语法,用来遍历可迭代对象,有时候效果等同于`for each`...`in`语句.
*   [for](/zh-CN/docs/JavaScript/Reference/Statements/for "JavaScript/Reference/Statements/for")
*   [数组推导式](/zh-CN/docs/JavaScript/Guide/Predefined_Core_Objects#Array_Object) (该语句中可以使用for...in`,``for each`...`in,``for`...`of多种语法`)