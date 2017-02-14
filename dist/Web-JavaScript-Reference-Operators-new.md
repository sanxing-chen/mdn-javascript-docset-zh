(**`new` operator**) 新运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一。

## 语法

    new constructor[([arguments])]

### 参数

<dl>

<dt>`构造函数(constructor)`</dt>

<dd><font face="Courier New, Andale Mono, monospace">一个</font>指定对象实例的类型的函数。<font face="Courier New, Andale Mono, monospace">。</font></dd>

</dl>

<dl>

<dt>`传参(arguments)`</dt>

<dd>一个用来被构造函数调用的参数列表。</dd>

</dl>

## 描述

创建一个用户自定义的对象需要两步：

1.  定义构造函数。
2.  通过new来创建对象实例。

创建一个对象类型需要创建一个指定了名称和属性的函数；其中这些属性可以指向它本身，也可以指向其他对象，看下面的例子：

当代码 `new _foo_(...)` 执行时：

1.  一个新对象被创建。它继承自`_foo_.prototype`.
2.  构造函数 `_foo_` 被执行。执行的时候，相应的传参会被传入，同时上下文(`this)会被指定为这个新实例。``new _foo_` 等同于 `new _foo_()`, 只能用在不传递任何参数的情况。
3.  如果构造函数返回了一个“对象”，那么这个对象会取代整个`new`出来的结果。如果构造函数没有返回对象，那么`new`出来的结果为步骤1创建的对象，ps：一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。

任何情况下都可以对任意一个对象添加新的属性，比如 `car1.color = "black"` 这句代码给<span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">car1</span><span style="line-height: 1.5;">添加了一个新的属性</span>`color` <span style="line-height: 1.5;"></span> <span style="line-height: 1.5;">, 然后给这个属性赋值 "</span>`black`<span style="line-height: 1.5;">"。然而，这个操作不会影响任何其他对象。如果想给所有同样类型的对象添加属性，你需要给`Car`这个对象类型来添加属性。</span>

你可以通过给 `[Function.prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)`<span style="line-height: 1.5;"> 添加属性的方式来给所有先前定义的实例来添加属性。这种定义属性的方式会影响到所有通过`new`构造函数创建的对象，因为它们共享了这个对象类型。下面的代码给实例car的对象类型添加了一个`color`属性`null`，然后又给实例`car1`覆盖了</span>`<span style="line-height: 1.5;">color</span>`<span style="line-height: 1.5;">属性'`black`'，详见</span><span style="line-height: 1.5;"> </span>[prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)<span style="line-height: 1.5;">.</span>

<pre class="brush: js"> function Car() {}
 car1 = new Car()

 alert(car1.color)           // undefined

 Car.prototype.color = null
 alert(car1.color)           // null

 car1.color = "black"
 alert(car1.color)           // black
</pre>

## 例子

### 例1：对象类型和对象实例

假设你要创建一个汽车的对象类型。你希望这个类型叫做car，这个类型具备make, model, year等属性，要做到这些，你需要这样来写个构造函数：

<pre class="brush: js">function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
</pre>

现在，你可以创建一个实例了：

<pre class="brush: js">var mycar = new car("Eagle", "Talon TSi", 1993);
</pre>

这段代码创建了一个`mycar`这个对象实例，还给它赋予了3个属性，现在`mycar.make`等于"`Eagle`"， `mycar.year` 等于1993，以此类推。

你已经可以通过`new`来创建任意个汽车对象实例了：

<pre class="brush: js">var kenscar = new car("Nissan", "300ZX", 1992);
</pre>

### <span style="font-size: 1.71428571428571rem;">例2: 对象属性为自身或其他对象</span>

假设你定义了一个对象叫做`person`：

<pre class="brush: js">function person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
}
</pre>

然后定义了两个实例：

<pre class="brush: js">var rand = new person("Rand McNally", 33, "M");
var ken = new person("Ken Jones", 39, "M");
</pre>

然后你重写了car的定义，添加了一个owner属性来指向一个person对象实例：

<pre class="brush: js">function car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}
</pre>

创建实例变成了这样：

<pre class="brush: js">var car1 = new car("Eagle", "Talon TSi", 1993, rand);
var car2 = new car("Nissan", "300ZX", 1992, ken);
</pre>

上面的代码没有传字符串或数字过去，而是传了一个对象 `rand` 和 `ken` ，这个时候可以这样来获取`car2`的拥有者的名称：

<pre class="brush: js">car2.owner.name
</pre>

## 规范

<table>

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">The new Operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-new-operator)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">The new Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.2.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">The new Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.2.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">The new Operator</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.2.2)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.0.</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<table>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

<table>

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

## 相关链接

*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`Reflect.construct()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct "Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args).")