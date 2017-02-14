`**indexOf()**`方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。

<pre class="brush: js">var a = [2, 9, 9]; 
a.indexOf(2); // 0 
a.indexOf(7); // -1

if (a.indexOf(7) === -1) {
  // element doesn't exist in array
}</pre>

## 语法

    arr.indexOf(searchElement)
    arr.indexOf(searchElement[, fromIndex = 0])

### 参数

<dl>

<dt>`searchElement`</dt>

<dd>要查找的元素</dd>

<dt>`fromIndex`</dt>

<dd>开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，仍然从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.</dd>

</dl>

### 返回值

首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

## 描述

`indexOf` 使用[strict equality](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (无论是 ===, 还是 triple-equals操作符都基于同样的方法)进行判断 `searchElement与`数组中包含的元素之间的关系。

## 示例

### 使用indexOf

以下例子使用`indexOf方法确定多个值在数组中的位置。`

<pre class="brush: js">var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
</pre>

### 找出指定元素出现的所有位置

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
</pre>

### 判断一个元素是否在数组里，不在则更新数组

<pre class="brush: js">function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.
updateVegetablesCollection(veggies, 'spinach'); </pre>

## Polyfill

`indexOf` 在ECMA-262 标准 的第5版中被加入，但并非所有的浏览器都支持该方法。你可以在编写scripts时，在其开头使用以下代码，它能够允许你在没有本地支持的情况下使用indexOf方法。该算法符合ECMA-262第5版其中一项规定, 即假定 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")和 [`Math.abs`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs "Math.abs(x) 函数返回指定数字 “x“ 的绝对值。如下：") 呈现它们原有的价值。

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1\. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2\. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3\. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4\. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5\. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6\. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7\. If n >= 0, then Let k be n.
    // 8\. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9\. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
</pre>

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
<small lang="zh-CN">Array.prototype.indexOf</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.14)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.  
Implemented in JavaScript 1.6</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.indexOf</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.indexof)</td>

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

<td>1.0 (1.8)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf "lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。")
*   [`TypedArray.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf "indexOf() 方法返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。 方法具有与 Array.prototype.indexOf() 相同的算法。 TypedArray是这里的类型化数组类型之一。")