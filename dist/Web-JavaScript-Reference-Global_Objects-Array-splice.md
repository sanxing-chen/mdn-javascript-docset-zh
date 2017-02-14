**`splice()`**<span style="line-height: 1.5;"></span>方法通过删除现有元素和/或添加新元素来更改数组的内容<span style="line-height: 1.5;">。</span>

<pre class="brush: js">var myFish = ["angel", "clown", "mandarin", "sturgeon"];

myFish.splice(2, 0, "drum"); 
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 

myFish.splice(2, 1); 
// myFish is ["angel", "clown", "mandarin", "sturgeon"] 

myFish.splice(2, 1, "splice", "parrot");
// myFish is ["angel", "clown", "splice", "parrot", "sturgeon"] 

</pre>

## ![splice()](https://mdn.mozillademos.org/files/14569/Array.prototype.splice().png)

## 语法

<pre class="syntaxbox"><var>array</var>.splice(<var>start</var>)
<var>array</var>.splice(<var>start</var>, <var>deleteCount</var>) 
<var>array</var>.splice(<var>start</var>, <var>deleteCount</var>, <var>item1</var>, <var>item2</var>, ...)</pre>

### 参数

<dl>

<dt>`start​`</dt>

<dd><span style="line-height: 1.5;">指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位。</span></dd>

</dl>

<dl>

<dt>`deleteCount` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd><span style="line-height: 1.5;">整数，表示要移除的数组元素的个数。如果</span> `deleteCount` <span style="line-height: 1.5;">是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果</span> `deleteCount `<span style="line-height: 1.5;">大于</span>`<var>start</var>` <span style="line-height: 1.5;">之后的元素的总数，则从</span> `<var>start</var>` <span style="line-height: 1.5;">后面的元素都将被删除（含第</span> `<var>start</var>` <span style="line-height: 1.5;">位）。</span></dd>

<dd>如果deleteCount被省略，则其相当于(arr.length - start)。</dd>

</dl>

<dl>

<dt>`item1, item2, _..._` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>要添加进数组的元素,从`<var>start</var>` <span style="line-height: 1.5;"></span> 位置开始。如果不指定，则 `splice() `将只删除数组元素。</dd>

</dl>

### 返回值

由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

## 描述

如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

## 提示和注释

注释：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

## 示例

### 使用 `splice()`

如下代码演示了 splice 的用法：

<pre class="brush: js">var myFish = ["angel", "clown", "mandarin", "surgeon"];

//从第 2 位开始删除 0 个元素，插入 "drum"
var removed = myFish.splice(2, 0, "drum");
//运算后的 myFish:["angel", "clown", "drum", "mandarin", "surgeon"]
//被删除元素数组：[]，没有元素被删除

//从第 3 位开始删除 1 个元素
removed = myFish.splice(3, 1);
//运算后的myFish：["angel", "clown", "drum", "surgeon"]
//被删除元素数组：["mandarin"]

//从第 2 位开始删除 1 个元素，然后插入 "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//运算后的myFish: ["angel", "clown", "trumpet", "surgeon"]
//被删除元素数组：["drum"]

//从第 0 位开始删除 2 个元素，然后插入 <span style="font-size: 1rem;">"parrot", "anemone" 和 "blue"</span>
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//运算后的myFish：["parrot", "anemone", "blue", "trumpet", "surgeon"]
//被删除元素的数组：["angel", "clown"]

//从第 3 位开始删除 2 个元素
removed = myFish.splice(3, Number.MAX_VALUE);
//运算后的myFish: ["parrot", "anemone", "blue"]
//被删除元素的数组：["trumpet", "surgeon"]
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">`Specification`</th>

<th scope="col">`Status`</th>

<th scope="col">`Comment`</th>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf "ECMAScript 3rd Edition (ECMA-262)")</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.Implemented in JavaScript 1.2</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Array.prototype.splice</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.splice</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.splice)</td>

<td><span class="spec-Standard">Standard</span></td>

<td></td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.splice</small>](https://tc39.github.io/ecma262/#sec-array.prototype.splice)</td>

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

## 向后兼容

<span style="line-height: 1.5;">在 JavaScript 1.2 中，如果只删除了一个元素（即 howmany 参数为 1），则 splice 方法返回这个被删除的元素；当删除多个元素时，返回由被删元素组成的数组。不过，在 Netscape Navigator 4 之后就没有浏览器使用 JavaScript 1.2 了，所以可以认为 splice 总是返回一个数组。</span>

## 相关链接

*   [`push`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push "push() 方法添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）。") / [`pop`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "pop() 方法删除一个数组中的最后的一个元素，并且返回这个元素。") - 在数组末尾增/删元素；
*   [`unshift`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift "unshift() 方法在数组的开头添加一个或者多个元素，并返回数组新的 length 值。") / [`shift`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift "shift() 方法从数组中删除第一个元素，并返回该元素。此方法更改数组的长度。") - 在数组首部增/删元素；
*   [`concat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。") - 把一个（或多个）数组和（或）值与原数组拼接，返回拼接后的数组。