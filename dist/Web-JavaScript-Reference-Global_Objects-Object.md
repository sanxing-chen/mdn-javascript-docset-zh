`**Object**` 构造函数创建一个对象包装（object wrapper）。

## 语法

    // 对象初始化器（Object initialiser）或对象字面量（literal）
    { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] } 
    // 以构造函数形式来调用
    new Object([value])

### 参数

<dl>

<dt>`nameValuePair1, nameValuePair2, ... nameValuePair_N_`</dt>

<dd>成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。</dd>

<dt>`value`</dt>

<dd>任何值。</dd>

</dl>

## 描述

对象构造函数为给定值创建一个对象包装器。。如果给定值是  [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") or [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。

当以非构造函数形式被调用时，`Object` 等同于 `new Object()`。

可查看 [对象初始化/字面量语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

## 属性

<dl>

<dt>`Object.length`</dt>

<dd>值为1。</dd>

</dl>

<dl>

<dt>[`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。")</dt>

<dd>可以为所有 Object 类型的对象添加属性。</dd>

</dl>

## 方法

<dl>

<dt>[`Object.assign()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign "Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。")</dt>

<dd>通过复制一个或多个对象来创建一个新的对象。</dd>

<dt>[`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create "Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。")</dt>

<dd>指定原型对象和属性来创建一个新的对象。</dd>

<dt>[`Object.defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty "Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。")</dt>

<dd>给对象添加一个属性并指定该属性的配置。</dd>

<dt>[`Object.defineProperties()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties "Object.defineProperties() 方法在一个对象上添加或修改一个或者多个自有属性，并返回该对象。")</dt>

<dd>给对象添加多个属性并分别指定它们的配置。</dd>

<dt>[`Object.entries()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries "Object.entries方法返回一个包含由给定对象所有可枚举属性的属性名和属性值组成的 [属性名，属性值] 键值对的数组，数组中键值对的排列顺序和使用for...in循环遍历该对象时返回的顺序一致（两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性）。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回一个数组，其是给定对象自身的 enumerable 属性键值`对（[key, value]）。`</dd>

<dt>[`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze "Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。")</dt>

<dd>冻结对象：使对象不可删除或修改它的属性。</dd>

<dt>[`Object.getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor "Object.getOwnPropertyDescriptor() 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）")</dt>

<dd>返回对象指定的属性配置。</dd>

<dt>[`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。")</dt>

<dd>返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。</dd>

<dt>[`Object.getOwnPropertySymbols()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "Object.getOwnPropertySymbols() 方法会返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键。")</dt>

<dd>返回一个数组，它包含了指定对象自身所有的符号属性。</dd>

<dt>[`Object.getPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf "Object.getPrototypeOf() 方法返回指定对象的原型（也就是该对象内部属性[[Prototype]]的值）。")</dt>

<dd>返回指定对象的原型对象。</dd>

<dt>[`Object.is()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is "Object.is() 方法用来判断两个值是否是同一个值。")</dt>

<dd>判断两个值是否严格相等。（类似===运算符，但+0不等于-0，NaN等于自己）。</dd>

<dt>[`Object.isExtensible()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible "Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。")</dt>

<dd>判断对象是否可扩展。</dd>

<dt>[`Object.isFrozen()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen "Object.isFrozen() 方法判断一个对象是否被冻结（frozen）。")</dt>

<dd>判断对象是否已经冻结。</dd>

<dt>[`Object.isSealed()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed "Object.isSealed() 方法判断一个对象是否是密封的（sealed）。")</dt>

<dd>判断对象是否已经密封。</dd>

<dt>[`Object.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "Object.keys() 方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组，数组中属性名的排列顺序和使用for-in循环遍历该对象时返回的顺序一致 (顺序一致不包括数字属性)（两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性）。")</dt>

<dd>返回一个数组，包含指定对象的所有自有可遍历属性的名称。</dd>

<dt>[`Object.preventExtensions()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions "Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。")</dt>

<dd>阻止对象扩展。</dd>

<dt>[`Object.seal()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal "Object.seal() 方法可以让一个对象密封，并返回被密封后的对象。密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但可能可以修改已有属性的值的对象。")</dt>

<dd>密封对象以防删除。</dd>

<dt>[`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型(即对象的[[Prototype]]内部属性)设置为另一个对象或者null。")</dt>

<dd>设置对象的原型。</dd>

<dt>[`Object.values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values "Object.values() 方法返回一个包含给定对象所有的可枚举属性值的数组，数组中的值顺序和使用for...in循环遍历的顺序一样（不同的是：for-in 循环同时返回了该对象原型链上的可枚举属性值，而 Object.values() 则不包括）。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回一个数组，其是给定对象自身的 enumerable 属性值。</dd>

</dl>

<div>**对象实例和对象原型对象**</div>

JavaScript语言的所有对象都是由`Object`衍生的对象；所有对象都继承了`[Object.prototype](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/prototype "JavaScript/Reference/Global_Objects/Object/prototype")`的方法和属性，尽管它们可能被覆盖。例如，其它的构造器原型覆盖了`constructor`属性并提供了其自己的`toString`方法。原型对象的更改会传播给所有的对象，除非这些属性和方法在原型链中被再次覆盖。

### 属性

<div>

<dl>

<dt>[`Object.prototype.constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor "返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。对于原始值（如1，true 或 "test"），该属性为只读。")</dt>

<dd>特定的函数，用于创建一个对象的原型。</dd>

<dt>[`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__ "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span></dt>

<dd>指向当对象被实例化的时候，用作原型的对象。</dd>

<dt>[`Object.prototype.__noSuchMethod__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__noSuchMethod__ "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span></dt>

<dd>当未定义的对象成员被调用作方法的时候，允许定义并执行的函数。</dd>

<dt><s class="obsoleteElement">[`Object.prototype.__count__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__count__ "此页面仍未被本地化, 期待您的翻译!")<span title="This is an obsolete API and is no longer guaranteed to work."></span></s></dt>

<dd><s class="obsoleteElement">用于直接返回用户定义的对象中可数的属性的数量。已被废除。</s></dd>

<dt><s class="obsoleteElement">[`Object.prototype.__parent__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__parent__ "此页面仍未被本地化, 期待您的翻译!")<span title="This is an obsolete API and is no longer guaranteed to work."></span></s></dt>

<dd><s class="obsoleteElement">用于指向对象的内容。已被废除。</s></dd>

</dl>

</div>

### 方法

<div>

<dl>

<dt>[`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__ "__defineGetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用。")<span title="This API has not been standardized."></span><span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>关联一个函数到一个属性。访问该函数时，执行该函数并返回其返回值。</dd>

<dt>[`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__ "__defineSetter__ 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性被赋值时，你所绑定的函数就会被调用。")<span title="This API has not been standardized."></span><span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>关联一个函数到一个属性。设置该函数时，执行该修改属性的函数。</dd>

<dt>[`Object.prototype.__lookupGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__ "__lookupGetter__ 方法会返回当前对象上指定属性的属性读取访问器函数（getter）。")<span title="This API has not been standardized."></span><span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>返回使用 [`__defineGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter "此页面仍未被本地化, 期待您的翻译!") 定义的方法函数 。</dd>

<dt>[`Object.prototype.__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__ "一个绑定了setter的特殊属性的函数引用。")<span title="This API has not been standardized."></span><span title="This deprecated API should no longer be used, but will probably still work."></span></dt>

<dd>返回使用 [`__defineSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter "此页面仍未被本地化, 期待您的翻译!") 定义的方法函数。</dd>

<dt>[`Object.prototype.hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "hasOwnProperty() 方法用来判断某个对象是否含有指定的自身属性。")</dt>

<dd>返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。</dd>

<dt>[`Object.prototype.isPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf "isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。")</dt>

<dd>返回一个布尔值，表示指定的对象是否在本对象的原型链中。</dd>

<dt>[`Object.prototype.propertyIsEnumerable()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable "propertyIsEnumerable() 方法返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性。")</dt>

<dd>判断指定属性是否可枚举，内部属性设置参见 [ECMAScript DontEnum attribute](/zh-CN/docs/ECMAScript_DontEnum_attribute "ECMAScript_DontEnum_attribute") 。</dd>

<dt>[`Object.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.")<span title="This API has not been standardized."></span></dt>

<dd>返回字符串表示此对象的源代码形式，可以使用此字符串生成一个新的相同的对象。</dd>

<dt>[`Object.prototype.toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。")</dt>

<dd>直接调用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个表示该对象的字符串。")方法。</dd>

<dt>[`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个表示该对象的字符串。")</dt>

<dd>返回对象的字符串表示。</dd>

<dt>[`Object.prototype.unwatch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch "unwatch() 删除一个 watch() 设置的 watchpoint.")<span title="This API has not been standardized."></span></dt>

<dd>移除对象某个属性的监听。</dd>

<dt>[`Object.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "valueOf() 方法返回指定对象的原始值。")</dt>

<dd>返回指定对象的原始值。</dd>

<dt>[`Object.prototype.watch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/watch "监视一个对象的某个属性是否发生变化,在该属性变化时立即触发指定的回调函数.")<span title="This API has not been standardized."></span></dt>

<dd>给对象的某个属性增加监听。</dd>

<dt><s class="obsoleteElement">[`Object.prototype.eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/eval "Object.eval() 方法用于在对象的上下文中对 JavaScript 代码字符串求值，但该方法已被移除。")<span title="This is an obsolete API and is no longer guaranteed to work."></span></s></dt>

<dd><s class="obsoleteElement">在指定对象为上下文情况下执行javascript字符串代码，已经废弃。</s></dd>

</dl>

</div>

## 示例

### 给定 `undefined` 和 `null` 类型使用 `Object`

下面的例子将一个空的 `Object` 对象存到 `o` 中：

<pre class="brush: js">var o = new Object();
</pre>

<pre class="brush: js">var o = new Object(undefined);
</pre>

<pre class="brush: js">var o = new Object(null);
</pre>

### 使用 `Object` 生成布尔对象

下面的例子将[`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean "Boolean 对象是一个布尔值的对象包装器。") 对象存到 `o` 中：

<pre class="brush: js">// 等价于 o = new Boolean(true);
var o = new Object(true);
</pre>

<pre class="brush: js">// 等价于 o = new Boolean(false);
var o = new Object(Boolean());
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

<td>最初在JavaScript 1.0中实现的定义。</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Object</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Object</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-object-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Added Object.assign, Object.getOwnPropertySymbols, Object.setPrototypeOf, Object.is</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Object</small>](https://tc39.github.io/ecma262/#sec-object-objects)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Added Object.entries and Object.values.</td>

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

<table style="border-color: transparent;" class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table style="border-color: transparent;" class="compat-table">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

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

## 相关连接

*   [初始化对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)