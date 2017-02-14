## 信息

<pre class="syntaxbox">TypeError: "x" is not a function
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")

## 哪里出错了?

问题出在你试图去调用一个像函数一样的值，但是该值实际上不是函数，有时候你的代码需要调用一些函数，但是那种值并不能当作函数来被调用。

也许函数名称上有错别字？ 也许你正在调用Object对象没有这个方法？ 例如，在JavaScript中单纯的对象(Object)没有**map**函数，但是JavaScript数组(Array)对象却有这个函数。

在比如，在JavaScript中很多原生对象的内置方法需要你提供一个（回调）函数。 所以你必须提供一个函数，以使这些方法正常工作：

*   当你在使用 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 或 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray "TypedArray 对象描述表示底层的二进制数据缓存区的类数组(array-like)视图. 没有名为 TypedArray 的全局属性，也不存在直接可见的 TypedArray 构造器。而是，有若干不同的全局属性的值是类型数组的特殊构造器（typed array constructors for specific element types），用于特定的元素类型，这些在下文有列出。下文中你会看到用于包含任意类型元素的任意类型化数组的通用属性和通用方法。") 对象时:
    *   [`Array.prototype.every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every "every() 方法测试数组的所有元素是否都通过了指定函数的测试。"), [`Array.prototype.some()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some "some() 方法测试数组中的某些元素是否通过了指定函数的测试。"), [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。"), [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。"), [`Array.prototype.filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。"),  [`Array.prototype.reduce()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。"), [`Array.prototype.reduceRight()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight "reduceRight() 方法接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。（与 reduce() 的执行方向相反）"), [`Array.prototype.find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find "如果数组中某个元素满足测试条件，find() 方法就会返回满足条件的第一个元素，如果没有满足条件的元素，则返回 undefined。")
*   当你在使用 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!") 和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。") 对象时:
    *   [`Map.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach "forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。") and [`Set.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach "forEach 方法根据集合中元素的顺序，对每个元素都执行提供的 callback 函数一次。")

## 例子

### 函数的名称错误

函数的名称拼写错误，这种情况是经常发生的：

<pre class="brush: js example-bad">var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
</pre>

正确的方法名应该是 `getElementByI**d：**`

<pre class="brush: js example-good">var x = document.getElementById("foo");
</pre>

### 调用Object类型中不存在的方法

对于某些特殊的方法，它只属于某些特定的原生对象中，你必须提供一个回调函数才能正常运行。例如：这里调用了一个 [`Array.prototype.map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。") 方法，但是这方法只能被 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 对象所调用。 

<pre class="brush: js example-bad">var obj = { a: 13, b: 37, c: 42 };

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function</pre>

正确的做法，使用一个数组来代替:

<pre class="brush: js example-good">var numbers = [1, 4, 9];

numbers.map(function(num) { 
  return num * 2; 
}); 

// Array [ 2, 8, 18 ]
</pre>

## 相关

*   [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)