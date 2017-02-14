WeakMap 对象是键/值对的集合，且其中的键是弱引用的。其键只能是对象，而值则可以是任意的。

## 语法

<pre>new WeakMap([iterable])</pre>

### 参数

<dl>

<dt>`iterable`</dt>

<dd>Iterable 是一个数组（2元数组）或者可遍历的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。</dd>

</dl>

## 描述

WeakMap 的 key 只能是对象类型。 [原始数据类型](/en-US/docs/Glossary/Primitive "原始数据类型: Editorial review completed.") 是不能作为 key 的（比如 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。")）。

### Why _WeakMap_?

经验丰富的 JavaScript 程序员会注意到，WeakMap 完全可以通过两个数组(一个存放键,一个存放值)来实现。但这样的实现会有两个很大的缺点，首先是O(n)的时间复杂度(n是键值对的个数)。另外一个则可能会导致内存泄漏:在这种自己实现的 WeakMap 中,存放键的数组中的每个索引将会保持对所引用对象的引用,阻止他们被当作垃圾回收.而在原生的WeakMap中,每个键对自己所引用对象的引用是 "弱引用", 这意味着,如果没有其他引用和该键引用同一个对象,这个对象将会被当作垃圾回收.

正由于这样的弱引用，`WeakMap` 的 key 是非枚举的 (没有方法能给出所有的 key)。如果key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果. 因此,如果你想要这种类型对象的 key 值的列表，你应该使用 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!")。

## 属性

<dl>

<dt>`WeakMap.length`</dt>

<dd>`length 属性的值为` 0。</dd>

<dt>[`WeakMap.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype "WeakMap.prototype属性表现为 WeakMap的构造器。")</dt>

<dd>`WeakMap 构造器的原型。` 允许添加属性到所有的 WeakMap 对象。</dd>

</dl>

## `WeakMap` 实例

所有 `WeakMap` 实例继承自 [`WeakMap.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype "WeakMap.prototype属性表现为 WeakMap的构造器。").

### 属性

<dl>

<dt>`WeakMap.prototype.constructor`</dt>

<dd>返回创建WeakMap实例的原型函数。 [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!")函数是默认的。</dd>

</dl>

### 方法

<dl>

<dt>[`WeakMap.prototype.delete(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete "delete() 方法可以从一个 WeakMap 对象中删除指定的元素。")</dt>

<dd>移除key的关联对象。执行后 `WeakMap.prototype.has(key)返回``false。`</dd>

<dt>[`WeakMap.prototype.get(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get "get() 返回  WeakMap 指定的元素。")</dt>

<dd>返回`key关联对象`, 或者 `undefined`(没有key关联对象时)。</dd>

<dt>[`WeakMap.prototype.has(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>根据是否有key关联对象返回一个Boolean值。</dd>

<dt>[`WeakMap.prototype.set(key, value)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>在WeakMap中设置一组key关联对象，返回这个 `WeakMap`对象。</dd>

<dt><s class="obsoleteElement">[`WeakMap.prototype.clear()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear "此页面仍未被本地化, 期待您的翻译!")<span title="This is an obsolete API and is no longer guaranteed to work."></span></s></dt>

<dd><s class="obsoleteElement">从`WeakMap中移除所有的` key/value 。 注意， 这是一个WeakMap类型对象需要的方法，难道不是吗？ (参看 [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!"))</s></dd>

</dl>

## <span style="font-size: 2.143rem;">例子</span>

#### 使用 `WeakMap`

<pre class="brush: js">var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value可以是任意值,包括一个对象
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象
wm1.get(o2); // "azerty"
wm2.get(o2); // undefined,wm2中没有o2这个键
wm2.get(o3); // undefined,值就是undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37
wm3.clear();
wm3.get(o1); // undefined,wm3已被清空
wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
</pre>

### 用 .clear() 方法实现伪 `WeakMap`

为了更好的说明，下面使用了 ECMAScript6 新增的 `class` 构造函数，其目前没有广泛实现。

<pre class="brush: js">class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}</pre>

## 规范

<table class="standard-table">

<thead>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

</thead>

<tbody>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">WeakMap</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">WeakMap</small>](https://tc39.github.io/ecma262/#sec-weakmap-objects)</td>

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

<th>Chrome</th>

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>36</td>

<td>12</td>

<td>[6.0](/en-US/Firefox/Releases/6 "Released on 2011-08-16.") (6.0)</td>

<td>11</td>

<td>23</td>

<td>7.1</td>

</tr>

<tr>

<td>`new WeakMap(iterable)`</td>

<td>38</td>

<td>12</td>

<td>[36](/en-US/Firefox/Releases/36 "Released on 2015-02-24.") (36)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Obsolete clear() method removed</td>

<td>43</td>

<td>12</td>

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-26.") (46)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>30</td>

<td>9</td>

</tr>

<tr>

<td>Constructor argument: `new WeakMap(null)`</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

<td>11</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Monkey-patched `set()` in constructor</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[37](/en-US/Firefox/Releases/37 "Released on 2015-04-07.") (37)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`WeakMap()` without `new` throws</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>12</td>

<td>[42](/en-US/Firefox/Releases/42 "Released on 2015-11-03.") (42)</td>

<td>11</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td>35</td>

<td>6.0 (6.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

</tr>

<tr>

<td>`new WeakMap(iterable)`</td>

<td>38</td>

<td>36.0 (36)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Obsolete clear() method removed</td>

<td>43</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>30</td>

<td>9</td>

</tr>

<tr>

<td>Constructor argument: `new WeakMap(null)`</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>37.0 (37)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Monkey-patched `set()` in constructor</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>37.0 (37)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>`WeakMap()` without `new` throws</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0 (42)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [WeakMap bug at Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=547941)
*   [Hiding Implementation Details with ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
*   [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!")
*   [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。")
*   [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.")