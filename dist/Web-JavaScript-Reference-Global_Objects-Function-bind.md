**<span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind()</span>**方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的 <span style="font-family: courier new,andale mono,monospace;">this</span>, 之后的一序列参数将会在传递的实参前传入作为它的参数。

## 语法

    fun.bind(thisArg[, arg1[, arg2[, ...]]])

### 参数

<dl>

<dt>`thisArg`</dt>

<dd>当绑定函数被调用时，该参数会作为原函数运行时的 <span style="font-family: courier new,andale mono,monospace;">this </span>指向。当使用[`new` 操作符](/zh-cn/JavaScript/Reference/Operators/new "zh-cn/JavaScript/Reference/Operators/Special Operators/new Operator")调用绑定函数时，该参数无效。</dd>

<dt>`arg1, arg2, ...`</dt>

<dd>当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。</dd>

</dl>

### 返回值

      返回由指定的this值和初始化参数改造的原函数拷贝

## 描述

<div><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind()</span> 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的[`call`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")属性）。当**目标函数**被调用时 <span style="font-family: courier new,andale mono,monospace;">this</span> 值绑定到 <span style="font-family: courier new,andale mono,monospace;">bind()</span> 的第一个参数，该参数不能被重写。绑定函数被调用时，<span style="font-family: courier new,andale mono,monospace;">bind()</span> 也接受预设的参数提供给原函数。一个绑定函数也能使用[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。")操作符创建对象：这种行为就像把原函数当成构造器。提供的 <span style="font-family: courier new,andale mono,monospace;">this</span> 值被忽略，同时调用时的参数被提供给模拟函数。</div>

## 示例

### 创建绑定函数

`bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的` `this` 值。JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，希望方法中的 `this` 是原来的对象。（比如在回调中传入这个方法。）如果不做特殊处理的话，一般会丢失原来的对象。从原来的函数和原来的对象创建一个绑定函数，则能很漂亮地解决这个问题：

<pre class="brush: js">this.x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 返回 81

var retrieveX = module.getX;
retrieveX(); // 返回 9, 在这种情况下，"this"指向全局作用域

// 创建一个新函数，将"this"绑定到module对象
// 新手可能会被全局的x变量和module里的属性x所迷惑
var boundGetX = retrieveX.bind(module);
boundGetX(); // 返回 81
</pre>

### 偏函数（Partial Functions）

`bind()`的另一个最简单的用法是使一个函数拥有预设的初始参数。这些参数（如果有的话）作为`bind()`的第二个参数跟在`this`（或其他对象）后面，之后它们会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们的后面。

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
</pre>

### 配合 setTimeout

在默认情况下，使用 [`window.setTimeout()`](/zh-CN/docs/Web/API/Window/setTimeout "设置一个定时器,在定时器到期后执行一次函数或指定代码段.") 时，`this `关键字会指向 [`window`](/zh-CN/docs/Web/API/Window "The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window.") （或全局）对象。当使用类的方法时，需要 `this` 引用类的实例，你可能需要显式地把 `this` 绑定到回调函数以便继续使用实例。

    function LateBloomer() {
      this.petalCount = Math.ceil(Math.random() * 12) + 1;
    }

    // Declare bloom after a delay of 1 second
    LateBloomer.prototype.bloom = function() {
      window.setTimeout(this.declare.bind(this), 1000);
    };

    LateBloomer.prototype.declare = function() {
      console.log('I am a beautiful flower with ' +
        this.petalCount + ' petals!');
    };

    var flower = new LateBloomer();
    flower.bloom();  // 一秒钟后, 调用'declare'方法

### 作为构造函数使用的绑定函数

<div class="warning">

**警告** :这部分演示了 JavaScript 的能力并且记录了 `bind()` 的超前用法。以下展示的方法并不是最佳的解决方案且可能不应该用在任何生产环境中。

</div>

自然而然地，绑定函数适用于用new操作符 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 去构造一个由目标函数创建的新的实例。当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。然而, 原先提供的那些参数仍然会被前置到构造函数调用的前面。

<pre class="brush: js">function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() { 
  return this.x + ',' + this.y; 
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
// 以下这行代码在 polyfill 不支持,
// 在原生的bind方法运行没问题:
//(译注：polyfill的bind方法如果加上把bind的第一个参数，即新绑定的this执行Object()来包装为对象，Object(null)则是{}，那么也可以支持)
var YAxisPoint = Point.bind(null, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true</pre>

你知道不需要做特别的处理就可以用new操作符 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 创建一个绑定函数。必然地，你需要知道不需要做特别处理就可以创建一个可以被直接调用的绑定函数，即使你更希望绑定函数是用new操作符 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 来调用。

<pre class="brush: js">// 这个例子可以直接在你的 javascript 控制台运行
// ...接着上面的代码继续(译注：

// 仍然能作为一个普通函数来调用
// (即使通常来说这个不是被期望发生的)
YAxisPoint(13);

emptyObj.x + ',' + emptyObj.y;   //  '0,13'
</pre>

如果你希望一个绑定函数只支持使用new操作符 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。")，或者只能直接调用它，那么模板函数必须强制执行那限制。

### 快捷调用

`在你想要为一个需要特定的 this 值的函数创建一个捷径（shortcut）的时候，bind()` 方法也很好用。

你可以用 [`Array.prototype.slice`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。") 来将一个类似于数组的对象（array-like object）转换成一个真正的数组，就拿它来举例子吧。你可以创建这样一个捷径：

<pre class="brush: js">var slice = Array.prototype.slice;

// ...

slice.apply(arguments);</pre>

用 `bind() `可以使这个过程变得简单。在下面这段代码里面，`slice` 是 [`Function.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype "Function.prototype 属性存储了 Function 的原型对象。") 的 [`call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.") 方法的绑定函数，并且将 [`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype "所有的数组实例都继承于 Array.prototype。") 的 [`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。") 方法作为 `this` 的值。这意味着我们压根儿用不着上面那个 `apply()` 调用了。

<pre class="brush: js">// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);</pre>

## Polyfill（兼容旧浏览器）

`<span style="font-family: courier new,andale mono,monospace; line-height: 1.5;">bind</span> `函数在 ECMA-262 第五版才被加入；它可能无法在所有浏览器上运行。你可以部份地在脚本开头加入以下代码，就能使它运作，让不支持的浏览器也能使用 `bind()` 功能。

<pre class="brush: js">if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP
                                 ? this
                                 : oThis || this,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
</pre>

上述算法和实际的实现算法还有许多其他的不同 （尽管可能还有其他不同之处，却没有那个必要去穷尽）：

*   这部分实现依赖于[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice "slice() 方法将数组的一部分的浅拷贝, 返回到从开始到结束（结束不包括）选择的新数组对象。原始数组不会被修改。")， [`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。")， [`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")这些原生方法。
*   这部分实现创建的函数的实现并没有[`caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "返回调用指定函数的函数.") 以及会在 get，set或者deletion上抛出[`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")错误的 arguments 属性这两个不可改变的“毒药” 。（假如环境支持{jsxref("Object.defineProperty")}}， 或者实现支持[`__defineGetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter "此页面仍未被本地化, 期待您的翻译!") and [`__defineSetter__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter "此页面仍未被本地化, 期待您的翻译!") 扩展）
*   这部分实现创建的函数有 `prototype` 属性。（正确的绑定函数没有的）
*   这部分实现创建的绑定函数所有的 length 属性并不是同ECMA-262标准一致的：它的 length 是0，而在实际的实现中根据目标函数的 length 和预先指定的参数个数可能会返回非零的 length。

如果你选择使用这部分实现，**你不能依赖于ECMA-262，但是ECMA-5是可以的。**在某些情况下（也可以作另一番修改以适应特定的需要），这部分实现也许可以作为一个过渡，在`bind()`函数被广泛支持之前。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Function.prototype.bind</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.5)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition. Implemented in JavaScript 1.8.5.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Function.prototype.bind</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.bind)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>   
 </td>

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

<td>7</td>

<td>[4.0](/en-US/Firefox/Releases/4 "Released on 2011-03-22.") (2)</td>

<td>9</td>

<td>11.60</td>

<td>5.1</td>

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

<td>4.0</td>

<td>1</td>

<td>4.0 (2)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>11.5</td>

<td>6.0</td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [`Function.prototype.apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "apply() 方法在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。")
*   [`Function.prototype.call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call "call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.")
*   [Functions](/zh-CN/docs/Web/JavaScript/Reference/Functions "通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。")