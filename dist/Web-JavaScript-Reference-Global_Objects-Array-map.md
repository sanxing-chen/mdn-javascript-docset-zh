`**map()**` 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。

## 语法

`_array_.map(_callback_[, _thisArg_])`

## 参数

<dl>

<dt>`callback`</dt>

<dd>原数组中的元素经过该方法后返回一个新的元素。

<dl>

<dt>`currentValue`</dt>

<dd>`callback` 的第一个参数，数组中当前被传递的元素。</dd>

<dt>`index`</dt>

<dd>`callback` 的第二个参数，数组中当前被传递的元素的索引。</dd>

<dt>`array`</dt>

<dd>`callback` 的第三个参数，调用 `map` 方法的数组。</dd>

</dl>

</dd>

<dt>`thisArg`</dt>

<dd>执行 `callback` 函数时 `this` 指向的对象。</dd>

<dt>

### 返回值

由回调函数的返回值组成的新数组。

</dt>

</dl>

## 描述

`map` 方法会给原数组中的每个元素都按顺序调用一次 `callback` 函数。`callback` 每次执行后的返回值（包括 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")）组合起来形成一个新数组。 `callback` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。

`callback` 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 `thisArg` 参数有值，则每次 `callback` 函数被调用的时候，`this` 都会指向 `thisArg` 参数上的这个对象。如果省略了 `thisArg ``参数,``或者赋值为 null` 或 `undefined`，则 this 指向全局对象 。

`map `不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）。

使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。

## 示例

### 求数组中每个元素的平方根

下面的代码创建了一个新数组，值为原数组中对应数字的平方根。

<pre class="brush: js">var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */</pre>

### 使用 map 重新格式化数组中的对象

以下代码将一个包含对象的数组用以创建一个包含新重新格式化对象的新数组。

    var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
    var reformattedArray = kvArray.map(function(obj){ 
       var rObj = {};
       rObj[obj.key] = obj.value;
       return rObj;
    });
    // reformattedArray is now [{1:10}, {2:20}, {3:30}], 
    // kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]

### 将数组中的单词转换成对应的复数形式.

下面的代码将一个数组中的所有单词转换成对应的复数形式.

<pre class="brush: js">function fuzzyPlural(single) {
  var result = single.replace(/o/g, 'e');  
  if( single === 'kangaroo'){
    result += 'se';
  }
  return result; 
}

var words = ["foot", "goose", "moose", "kangaroo"];
console.log(words.map(fuzzyPlural));

// ["feet", "geese", "meese", "kangareese"]
</pre>

### `一般的 map` 方法

下面的例子演示如何在一个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")  上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：

<pre class="brush: js">var map = Array.prototype.map
var a = map.call("Hello World", function(x) { 
  return x.charCodeAt(0); 
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
</pre>

### `querySelectorAll 应用`

下面代码展示了如何去遍历用 `querySelectorAll 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：`

    var elems = document.querySelectorAll('select option:checked');
    var values = Array.prototype.map.call(elems, function(obj) {
      return obj.value;
    });

### 反转字符串

    var str = '12345';
    Array.prototype.map.call(str, function(x) {
      return x;
    }).reverse().join(''); 

    // Output: '54321'
    // Bonus: use '===' to test if original string was a palindrome

### 使用技巧案例

[(原文地址)](http://www.wirfs-brock.com/allzh-cn/posts/166)

通常情况下，`map` 方法中的 `callback` 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 `map` 只给 `callback` 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。

<pre class="brush: js">// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

/*
//应该使用如下的用户函数returnInt

function returnInt(element){
  return parseInt(element,10);
}

["1", "2", "3"].map(returnInt);
// 返回[1,2,3]
*/

</pre>

## 兼容旧环境（Polyfill）

`map` 是在最近的 ECMA-262 标准中新添加的方法；所以一些旧版本的浏览器可能没有实现该方法。在那些没有原生支持 `map` 方法的浏览器中，你可以使用下面的 Javascript 代码来`实现它。`所使用的算法正是 ECMA-262，第 5 版规定的。假定`Object`, `TypeError`, 和 `Array` 有他们的原始值。而且 `callback.call` 的原始值也是 `[Function.prototype.call](/zh-cn/JavaScript/Reference/Global_Objects/Function/call)`

<pre class="brush: js" style="font-size: 14px;">// 实现 ECMA-262, Edition 5, 15.4.4.19
// 参考: [http://es5.github.com/#x15.4.4.19](http://es5.github.com/#x15.4.4.19)
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    // 1\. 将O赋值为调用map方法的数组.
    var O = Object(this);

    // 2.将len赋值为数组O的长度.
    var len = O.length >>> 0;

    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 4\. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 5\. 创建新数组A,长度为原数组O长度len
    A = new Array(len);

    // 6\. 将k赋值为0
    k = 0;

    // 7\. 当 k < len 时,执行循环.
    while(k < len) {

      var kValue, mappedValue;

      //遍历O,k为原数组索引
      if (k in O) {

        //kValue为索引k对应的值.
        kValue = O[ k ];

        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mappedValue = callback.call(T, kValue, k, O);

        // 返回值添加到新数组A中.
        A[ k ] = mappedValue;
      }
      // k自增1
      k++;
    }

    // 8\. 返回新数组A
    return A;
  };      
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

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.map</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.6</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.map</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.map</small>](https://tc39.github.io/ecma262/#sec-array.prototype.map)</td>

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

<th>Firefox (Gecko)</th>

<th>Chrome</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>[1.5](/en-US/Firefox/Releases/1.5 "Released on 2005-11-25.") (1.8)</td>

<td>9</td>

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

<th>Firefox Mobile (Gecko)</th>

<th>Android</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td>1.0 (1.8)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。")
*   [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!") object
*   [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from "Editorial review completed.")