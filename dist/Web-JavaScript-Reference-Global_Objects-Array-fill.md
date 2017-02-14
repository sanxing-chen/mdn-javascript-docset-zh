The `**fill()**` 方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引

    var numbers = [1, 2, 3]
    numbers.fill(1);

    // results in [1, 1, 1]

## 语法

<pre><var>arr</var>.fill(<var>value</var><var><var>)</var></var> 
<var>arr</var>.fill(<var>value</var>, <var>start<var>)</var> arr</var>.fill(<var>value</var>, <var>start<var>, <var>end</var>)</var></var>
</pre>

### 参数

<dl>

<dt>value</dt>

<dd>用来填充数组元素的值。</dd>

<dt>start</dt>

<dd>可选，开始索引。</dd>

<dt>end</dt>

<dd>可选，结束索引。</dd>

<dt>

### 返回值

修改后的数组。

</dt>

</dl>

## 描述

具体要填充的元素区间是 [`start`, `end`) , 一个半开半闭区间.

**`fill`** 方法接受三个参数 `value`, `start` 以及 `end`.<span> `start` 和 `end` 参数是可选的, 其默认值分别为 `0` 和 `this` 对象的 `length 属性值`.</span>

<span>如果 `start` 是个负数, 则开始索引会被自动计算成为 `length+start, 其中` `length` 是 </span>`this`<span> 对象的 </span>`length 属性值`<span>. 如果</span> `end`<span> 是个负数, 则结束索引会被自动计算成为 </span>`length+end`<span>.</span>

<span>**fill** 方法故意被设计成通用方法, 也就是说它不需要 `this` 值必须是个数组对象, 类数组对象也是可以调用该方法的 .</span>

**fill**<span style="line-height: 1.5;"> 方法是个可变方法, 它会改变调用它的 `this` 对象本身, 然后返回它, 而并不是返回一个副本.</span>

## 示例

<pre class="brush: js">[1, 2, 3].fill(4)            // [4, 4, 4]
[1, 2, 3].fill(4, 1)         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)    // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)  // [1, 2, 3]
Array(3).fill(4);            // [4, 4, 4]
[].fill.call({length: 3}, 4) // {0: 4, 1: 4, 2: 4, length: 3}</pre>

## Polyfill

<pre class="brush: js">if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0; // parseInt(O.length)

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : 
      end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while(k < final) {
        O[k] = value;
        k++;
    }

    // Step 13.
    return O;
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Array.prototype.fill</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.fill)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Array.prototype.fill</small>](https://tc39.github.io/ecma262/#sec-array.prototype.fill)</td>

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

<td>45 [1]</td>

<td>[31](/en-US/Firefox/Releases/31 "Released on 2014-07-22.") (31)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>31.0 (31)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8.0</td>

</tr>

</tbody>

</table>

[1] 从Chrome36开始，这是一个可设置的。 In chrome://flags, activate the entry “Enable Experimental JavaScript”.

</div>

## 相关

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`TypedArray.prototype.fill()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill "此页面仍未被本地化, 期待您的翻译!")