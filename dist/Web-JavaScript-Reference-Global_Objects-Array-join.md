`**join()**` 方法将数组（或一个[类数组对象](/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接到一个字符串中。

<div class="note">

PS: `**join()**` 方法，不会改变数组！

</div>

<pre class="brush: js">let a = ['Wind', 'Rain', 'Fire'];

a.join(); 
// 默认为 ","
// 'Wind,Rain,Fire'

a.join(""); 
// 分隔符 === 空字符串 ""
// "WindRainFire"

a.join("-"); 
// 分隔符 "-"
// 'Wind-Rain-Fire'

console.log(a);
// ['Wind', 'Rain', 'Fire']
</pre>

## 语法

    str = arr.join()
    // 

### 参数

<dl>

<dt>`separator`</dt>

<dd>指定一个字符串来分隔数组的每个元素。</dd>

<dd>如果需要(separator)，将分隔符转换为字符串。</dd>

<dd>如果省略()，数组元素用逗号分隔。默认为 ","。</dd>

<dd>如果separator是空字符串("")，则所有元素之间都没有任何字符。</dd>

<dd>

### 返回值

一个所有数组元素连接的字符串。如果 **arr.length** 为0，则返回空字符串

</dd>

</dl>

## 描述

所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。如果元素是undefined 或者null， 则会转化成空字符串。

## 例子

### 例子: 使用四种不同的分隔符连接数组元素

下例首先创建了一个数组 `a`，包含有三个元素，然后用四种不同的分隔符连接所有数组元素。首先是默认的分隔符逗号，然后是一个逗号加空格，接下来是一个加号前后加空格，最后是一个空字符串。

<pre class="brush: js">var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
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

<td>[ECMAScript 1st Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf "ECMAScript 1st Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.1.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.join</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.join</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.join)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.join</small>](https://tc39.github.io/ecma262/#sec-array.prototype.join)</td>

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

<td>1.0</td>

<td>1.0 (1.7 or earlier)</td>

<td>5.5</td>

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

*   [`String.prototype.split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split "split（）方法通过将字符串分成子字符串，从而将一个String对象拆分为一个字符串数组。")
*   [`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "toString() 返回一个字符串，表示指定的数组及其元素。")
*   [`TypedArray.prototype.join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join "join()方法将数组中所有元素连接为一个字符串。这个方法的算法和Array.prototype.join()相同。 TypedArray 是这里的 类型化数组 之一。")