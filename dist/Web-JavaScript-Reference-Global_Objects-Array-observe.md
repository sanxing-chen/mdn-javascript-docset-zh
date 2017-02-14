<div>

<div class="overheadIndicator obsolete obsoleteHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃**  
This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.

</div>

</div>

**Array.observe()** 方法用于异步监视数组发生的变化，类似于针对对象的 [`Object.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "Object.observe() 方法用于异步地监视一个对象的修改。当对象属性被修改时，方法的回调函数会提供一个有序的修改流。然而，这个接口已经被废弃并从各浏览器中移除。你可以使用更通用的 Proxy 对象替代。") 。当数组的值发生变化时，它按发生顺序提供了一个变化流。与 `Object.observe()` 类似，它由如下可接受的变化类型列表`["add"、"update"、"delete"、"splice"]`触发。

## 语法

    Array.observe(arr, callback)

### 参数

<dl>

<dt>`arr`</dt>

<dd>用于被监视的数组</dd>

<dt>`callback`</dt>

<dd>每当数组发生变化时，使用如下参数调用该函数：

<dl>

<dt>`changes`</dt>

<dd>用于表示变化的对象数组。每个变化对象的属性如下：

*   **`name`**: 变化的属性名。
*   **`object`**: 变化后的数组。
*   **`type`**: 用于表示变化类型的字符串。`其取值为"add"、``"update"、``"delete"`或 `"splice"`之一。
*   **`oldValue`**: 仅用于`"update"`和`"delete"类型。变化`之前的取值。
*   **`index`**: `仅用于"splice"类型。`变化发生所在索引。
*   **`removed`**: 仅用于`"splice"类型。`被删除元素组成的数组。
*   **`addedCount`**: 仅用于`"splice"`类型。被添加的元素数量。

</dd>

</dl>

</dd>

</dl>

## 描述

每次 arr 发生任何变化时，回调函数将被调用，调用参数为所有变化按发生顺序组成的数组。

<div class="note">

通过Array方法如 [Array.prototype.pop( )](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 触发的变化将被报告成"_splice_"变化，长度不变但索引赋值发生变化的将被报告成"update"变化。

</div>

## 示例

### Example: Logging different change types

<pre class="brush: js">var arr = ['a', 'b', 'c'];

Array.observe(arr, function(changes) {
  console.log(changes);
});

arr[1] = 'B';
// [{type: 'update', object: <arr>, name: '1', oldValue: 'b'}]

arr[3] = 'd';
// [{type: 'splice', object: <arr>, index: 3, removed: [], addedCount: 1}]

arr.splice(1, 2, 'beta', 'gamma', 'delta');
// [{type: 'splice', object: <arr>, index: 1, removed: ['B', 'c'], addedCount: 3}]
</pre>

## 标准规范

[Strawman proposal specification](https://github.com/arv/ecmascript-object-observe).

## 浏览器支持

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

<td>36</td>

<td><span style="color: #f00;">未实现</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关内容

*   [`Array.unobserve()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve "Array.unobserve()方法用来移除Array.observe()设置的所有观察者。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`Object.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "Object.observe() 方法用于异步地监视一个对象的修改。当对象属性被修改时，方法的回调函数会提供一个有序的修改流。然而，这个接口已经被废弃并从各浏览器中移除。你可以使用更通用的 Proxy 对象替代。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [Under what condition would Array.observe's “add” event trigger?](https://stackoverflow.com/q/29269057/778272)