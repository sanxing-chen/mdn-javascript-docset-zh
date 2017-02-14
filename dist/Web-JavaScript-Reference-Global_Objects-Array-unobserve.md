<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

Array**.unobserve()方法用来移除**[`Array.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe "Array.observe() 方法用于异步监视数组发生的变化，类似于针对对象的 Object.observe() 。当数组的值发生变化时，它按发生顺序提供了一个变化流。与 Object.observe() 类似，它由如下可接受的变化类型列表["add"、"update"、"delete"、"splice"]触发。")设置的所有观察者。

## 语法

    Array.unobserve(arr, callback)

### 参数

<dl>

<dt>`arr`</dt>

<dd>停止观察的数组。</dd>

<dt>`callback回调`</dt>

<dd>需要停止的array **arr**每次改变都会调用的函数引用。</dd>

</dl>

## 描述

`Array.unobserve()` 方法因为要移除观察者，所以应该在[`Array.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe "Array.observe() 方法用于异步监视数组发生的变化，类似于针对对象的 Object.observe() 。当数组的值发生变化时，它按发生顺序提供了一个变化流。与 Object.observe() 类似，它由如下可接受的变化类型列表["add"、"update"、"delete"、"splice"]触发。")调用后调用。

回调函数应该是一个函数的引用并且不能是匿名函数， 因为这个函数需要用来移除前面的观察者， 如果用匿名函数是没有用的，将不能移除任何观察者。

## 例子

### 停止观察一个数组

<pre class="brush: js">var arr = [1, 2, 3];

var observer = function(changes) {
  console.log(changes);
}

Array.observe(arr, observer);
​
arr.push(4);
// [{type: "splice", object: <arr>, index: 3, removed:[], addedCount: 1}]

Array.unobserve(arr, observer);

arr.pop();
// The callback wasn't called</pre>

### 使用匿名函数

<pre class="brush: js">var persons = ['Khalid', 'Ahmed', 'Mohammed'];

Array.observe(persons, function (changes) {
  console.log(changes);
});

persons.shift(); 
// [{type: "splice", object: <arr>, index: 0, removed: [ "Khalid" ], addedCount: 0 }]

Array.unobserve(persons, function (changes) {
  console.log(changes);
});

persons.push('Abdullah');
// [{type: "splice", object: <arr>, index: 2, removed: [], addedCount: 1 }]
// The callback will always be called
</pre>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基础支持</td>

<td>36</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>23</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基础支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td>36</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>23</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 相关内容

*   [`Array.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/observe "Array.observe() 方法用于异步监视数组发生的变化，类似于针对对象的 Object.observe() 。当数组的值发生变化时，它按发生顺序提供了一个变化流。与 Object.observe() 类似，它由如下可接受的变化类型列表["add"、"update"、"delete"、"splice"]触发。")<span title="This API has not been standardized."></span>
*   [`Object.observe()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/observe "Object.observe() 方法用于异步的监视一个对象的修改。当对象属性被修改时，方法的回调函数会提供一个有序的修改流。")<span title="This API has not been standardized."></span>
*   [`Object.unobserve()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unobserve "Object.unobserve() 是用来移除通过 Object.observe()设置的观察者的方法。")<span title="This API has not been standardized."></span>