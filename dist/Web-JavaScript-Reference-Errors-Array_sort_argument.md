## 信息

<pre class="syntaxbox">TypeError: invalid Array.prototype.sort argument (Firefox)
</pre>

## 错误类型

[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")

## 哪里出错了?

[`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 排序可能是不稳定的。默认按照字符串的Unicode码位点（code point）排序。") 的参数预期为 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".") 或者是一个比较操作数的函数。

## 示例

### 无效的

<pre class="brush: js example-bad">[1, 3, 2].sort(5);  // TypeError

var cmp = { asc: (x, y) => x >= y, dsc : (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || 'asc');  // TypeError
</pre>

### 有效的

<pre class="brush: js example-good">[1, 3, 2].sort();   // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc : (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || 'asc']); // [1, 2, 3]</pre>

## 相关

*   [`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "sort() 方法对数组的元素做原地的排序，并返回这个数组。 sort 排序可能是不稳定的。默认按照字符串的Unicode码位点（code point）排序。")