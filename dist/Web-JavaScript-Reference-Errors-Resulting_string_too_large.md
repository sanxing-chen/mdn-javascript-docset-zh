## 信息

<pre class="syntaxbox">RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)

RangeError: Invalid count value (Chrome)
</pre>

## 错误类型

[`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")

## 发生了什么?

代码中使用了 [`String.prototype.repeat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat "repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。")方法。<span lang="zh-CN" class="short_text" id="result_box"><span>它有一个计数参数，表示重复该字符串的次数</span></span>。该参数必须在 0 及正 [`Infinity`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity "全局属性 Infinity 是一个数值，表示无穷大。") 之间，且不能为负数。该值的合法范围可以这样表示： [0, +∞)。

<span lang="zh-CN" class="short_text" id="result_box"><span>其结果字符串也不能长于最大字符串，不同 JavaScript 引擎中可能有所不同。</span></span> 在 Firefox (SpiderMonkey) 里最大字符串大小为 2<sup>28</sup> -1 (`0xFFFFFFF`)。

## 示例

### 无效的

<pre class="brush: js example-bad">'abc'.repeat(Infinity); // RangeError
'a'.repeat(2**28);      // RangeError
</pre>

### 有效的

<pre class="brush: js example-good">'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
</pre>

## See also

*   [`String.prototype.repeat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat "repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。")