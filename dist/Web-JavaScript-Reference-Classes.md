ECMAScript 2015 中引入的 JavaScript 类 是 JavaScript 的现有基于原型的继承的语法糖。 类并不是 JavaScript 里加入的新的面向对象的继承模型。JavaScript 中的类只是能让我们用更简洁明了的语法创建对象及处理相关的继承。

## 定义类

类实际上是个“特殊的[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)”，而且正如函数的定义方式有[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)和[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)两种一样，类的定义方式也有两种，分别是：[类声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)和[类表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)。

### 类声明

类声明是定义类的一种方式，就像下面这样，使用 `class` 关键字后跟一个类名（这里是 Polygon），就可以定义一个类。

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}</pre>

#### 变量提升

类声明和函数声明不同的一点是，函数声明存在[变量提升](/en-US/docs/Glossary/Hoisting "变量提升: Hoisting is a term you will not find in the JavaScript docs. Hoisting was thought up as a general way of thinking about how execution context (specifically the creation and execution phases) work in JavaScript. But, hoisting can lead to misunderstandings. For example, hoisting teaches that variable and function declarations are physically moved to the top your coding, but this is not what happens at all. What does happen is the variable and function declarations are put into memory during the compile phase, but stays exactly where you typed it in your coding.")现象，而类声明不会。也就是说，你必须先声明类，然后才能使用它，否则代码会抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。") 异常，像下面这样：

<pre class="brush: js example-bad">var p = new Polygon(); // ReferenceError

class Polygon {}
</pre>

### 类表达式

类表达式是定义类的另外一种方式。在类表达式中，类名是可有可无的。如果定义了类名，则该类名只有在类体内部才能访问到。

<pre class="brush: js">// 匿名的
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// 命名的
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
</pre>

**注意:** 类表达式和类声明一样也不会有提升的现象。

## 类体和方法定义

类的成员需要定义在一对花括号 `{}` 里，花括号里的代码和花括号本身组成了类体。类成员包括类构造器和类方法（包括静态方法和实例方法）。

### 严格模式

类体中的代码都强制在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中执行。

### 构造器

[构造器](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)方法是一个特殊的类方法，其用于创建和初始化对象（用该类生成的）。一个类只能拥有一个名为 `constructor` 的方法，否则会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。") 异常。

在子类的构造器中可以使用 `super` 关键字调用父类的构造器。

### 原型方法

参见[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width;
  }
}
const square = new Polygon(10, 10);

// 100
console.log(square.area);</pre>

### 静态方法

`[static](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)` 关键字用来定义类的静态方法。静态方法是指那些不需要对类进行[实例化](/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance))，使用类名就可以直接访问的方法，需要注意的是静态方法不能被实例化的对象调用。静态方法经常用来作为工具函数。

<pre class="brush: js">class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
</pre>

## 使用 `extends` 创建子类

`[extends](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)` 关键字可以用在类声明或者类表达式中来创建一个继承了某个类的子类。

<pre class="brush: js">class Animal { 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
d.speak();
</pre>

`同样也可以用于原有的原型继承的“类”：`

<pre class="brush: js">function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();</pre>

需要注意的是类不能继承一般（非构造的）对象。如果你想要创建的类继承某个一般对象的话，你要使用 [`Object.setPrototypeOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf "将一个指定的对象的原型(即对象的[[Prototype]]内部属性)设置为另一个对象或者null。")：

<pre class="brush: js">var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Mitzie');
d.speak();</pre>

## Species

你可能想要数组类 `MyArray` 返回的是 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!") 对象。这个 species 模式能让你重写默认的构造器。

例如，当使用像 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map "map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。") 这样的方法来返回默认的构造器时，你想要这个方法返回父级的 `Array` 对象，而不是 `MyArray 对象。`[`Symbol.species`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species "Symbol.species 是指定一个构造函数创建派生对象的函数值属性。") 能实现：

<pre class="brush: js">class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

## 使用 `super` 引用父类

`[super](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)` 关键字可以用来调用其父类的构造器或者类方法

<pre class="brush: js">class Cat { 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}
</pre>

## Mix-ins

<span style="font-size: 14px; font-weight: normal;">抽象子类或者</span><span style="font-size: 14px; font-weight: normal;"> </span>_mix-ins_<span style="font-size: 14px; font-weight: normal;"> 是类的模板。 一个 ECMAScript 类只能仅有一个父类，所以想要</span><span style="font-size: 14px; font-weight: normal;">从工具类来多重继承的行为是不可能的。子类继承的只能是</span><span style="font-size: 14px; font-weight: normal;">父类提供的功能性</span><span style="font-size: 14px; font-weight: normal;">。</span>

在 ECMAScript 里一个将父类作为输入且将其子类作为输出的函数可以用来实现 mix-ins：

<pre class="brush: js">var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};</pre>

使用 mix-ins 的类可以像下面这样写：

<pre class="brush: js">class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }</pre>

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
<small lang="zh-CN">Class definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Class definitions</small>](https://tc39.github.io/ecma262/#sec-class-definitions)</td>

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

<th>Firefox (Gecko)</th>

<th>Edge</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>42.0<sup>[1]</sup>  
49.0</td>

<td>45</td>

<td>13</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>9.0</td>

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

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>45</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>9</td>

<td>42.0<sup>[1]</sup>  
49.0</td>

</tr>

</tbody>

</table>

</div>

[1] 要求使用严格模式。非严格模式需要勾选启用实验性的 JavaScript（Enable Experimental JavaScript），其默认不勾选。

## 相关链接

*   [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
*   [`类声明`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class "关键字创建一个基于原型继承的新类(译者注：ES6新加入的class关键字是语法糖，本质还是函数)")
*   [`类表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/class "类表达式是用来定义类的一种语法。和函数表达式相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。")
*   [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super "super 关键字用于访问父对象上的函数。")
*   [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)