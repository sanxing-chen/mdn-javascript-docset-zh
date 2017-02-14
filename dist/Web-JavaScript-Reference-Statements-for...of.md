**`for...of`**语句在[可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/iterable)(包括 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!"), [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!"), [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。"), [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!"), [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray "TypedArray 对象表示底层的二进制数据缓存区的类数组视图. 没有名为 TypedArray 的全局属性，也不存在直接可见的 TypedArray 构造器。相反，有若干不同的全局属性的值是类型数组的特殊构造器（typed array constructors for specific element types），用于特定的元素类型，这些在下文有列出。接下来，会介绍能和任何包含任意类型元素的类型数组一起使用的通用属性和方法。")，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.

## 语法

<pre class="syntaxbox">for (_variable_ of _object_) {
  _statement_
}
</pre>

<dl>

<dt>`variable`</dt>

<dd>每一次迭代,不同属性的属性值会被赋值给该变量.</dd>

<dt>`object`</dt>

<dd><span lang="zh-CN" class="long_text short_text" id="result_box"><span>一个可迭代对象</span></span>.</dd>

</dl>

## 例子

### 遍历 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!"):

    let iterable = [10, 20, 30];

    for (let value of iterable) {
      console.log(value);
    }
    // 10
    // 20
    // 30

如果你不修改语句块中的变量 , 也可以使用 [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 代替 [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) .

    let iterable = [10, 20, 30];

    for (const value of iterable) {
      console.log(value);
    }
    // 10
    // 20
    // 30

### 遍历 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!"):

    let iterable = "boo";

    for (let value of iterable) {
      console.log(value);
    }
    // "b"
    // "o"
    // "o"

### 遍历 [`TypedArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray "TypedArray 对象表示底层的二进制数据缓存区的类数组视图. 没有名为 TypedArray 的全局属性，也不存在直接可见的 TypedArray 构造器。相反，有若干不同的全局属性的值是类型数组的特殊构造器（typed array constructors for specific element types），用于特定的元素类型，这些在下文有列出。接下来，会介绍能和任何包含任意类型元素的类型数组一起使用的通用属性和方法。"):

    let iterable = new Uint8Array([0x00, 0xff]);

    for (let value of iterable) {
      console.log(value);
    }
    // 0
    // 255

### 遍历[`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!"):

    let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

    for (let entry of iterable) {
      console.log(entry);
    }
    // [a, 1]
    // [b, 2]
    // [c, 3]

    for (let [key, value] of iterable) {
      console.log(value);
    }
    // 1
    // 2
    // 3

### 遍历 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。"):

    let iterable = new Set([1, 1, 2, 2, 3, 3]);

    for (let value of iterable) {
      console.log(value);
    }
    // 1
    // 2
    // 3

### 遍历 DOM 集合

遍历Dom元素集合,比如一个[`NodeList`](/zh-CN/docs/Web/API/NodeList "NodeList 对象是一个节点的集合，是由 Node.childNodes 和 document.querySelectorAll 返回的.")对象: 下面的例子演示给每一个article标签的p子标签添加一个 "`read`" class.

<pre class="brush:js">let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
</pre>

### 遍历生成器

<span><span>您还可以</span><span>遍历</span><span>一个</span></span> [生成器](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*):<span><span>：</span></span>

<pre class="brush:js">// 注意: Firefox目前还不支持 "function*".
// 删除该*号可以让下面的代码在Firefox 13中正常运行.

function* fibonacci() { // 一个生成器函数
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    // 当n大于1000时跳出循环
    if (n > 1000)
        break;
    console.log(n);
}</pre>

### 遍历另外的可遍历对象

您也可以遍历一个已经明确的可遍历（可迭代）协议。参见 [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)。

    var iterable = {
      [Symbol.iterator]() {
        return {
          i: 0,
          next() {
            if (this.i < 3) {
              return { value: this.i++, done: false };
            }
            return { value: undefined, done: true };
          }
        };
      }
    };

    for (var value of iterable) {
      console.log(value);
    }
    // 0
    // 1
    // 2

### `for...of<font face="Open Sans, Arial, sans-serif">与</font>``for...in的区别`

`for...in循环会遍历一个object所有的可枚举属性。`

`for...of语法是为各种collection对象专门定制的，并不适用于所有的object.它会以这种方式迭代出任何拥有[Symbol.iterator]` 属性的collection对象的每个元素。

下面的例子演示了`for...of` 循环和 `[for...in](../../../../../JavaScript/Reference/Statements/for...in "zh-cn/JavaScript/Reference/Statements/for...in")` 循环的区别。`for...in` 遍历每一个属性名称,而 `for...of遍历每一个属性值`:

    Object.prototype.objCustom = function () {}; 
    Array.prototype.arrCustom = function () {};

    let iterable = [3, 5, 7];
    iterable.foo = "hello";

    for (let i in iterable) {
      console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
    }

    for (let i of iterable) {
      console.log(i); // logs 3, 5, 7
    }

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">for...of statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">for...of statement</small>](https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements)</td>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Edge</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持</td>

<td>38[[1]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Chrome_note_1)  
51[[3]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Chrome_note_3)</td>

<td>[13](/en-US/Firefox/Releases/13 "Released on 2012-06-05.") (13)[[2]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Gecko_note_2)</td>

<td>12</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>25</td>

<td>7.1</td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>38 [1]</td>

<td>13.0 (13) [2]</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>8</td>

</tr>

</tbody>

</table>

</div>

<a name="Chrome_note_1">[1]从</a> Chrome 29 到 Chrome 37 这个特性可以在配置之后使用。配置方法:在 chrome://flags/#enable-javascript-harmony 中激活选项“Enable Experimental JavaScript”。

<a name="Gecko_note_2">[2]</a> 从Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) 到 Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) 遍历属性可被使用([bug 907077](https://bugzilla.mozilla.org/show_bug.cgi?id=907077)), 从 Gecko 27 到 Gecko 35， `"@@iterator"` 符号可被使用。在Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33),  `@@iterator` [symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 生效 ([bug 918828](https://bugzilla.mozilla.org/show_bug.cgi?id=918828))。

<a name="Chrome_note_3">[3]</a> 对遍历对象的支持于 Chrome 51被添加。

## 相关链接

*   [for each...in](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for_each...in "en/JavaScript/Reference/Statements/for_each...in") - E4X中的语法,遍历对象的属性值,还不是属性名.
*   [`Array.forEach()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Array/forEach "zh-CN/docs/JavaScript/Reference/Global_Objects/Array/forEach")
*   [Map.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)