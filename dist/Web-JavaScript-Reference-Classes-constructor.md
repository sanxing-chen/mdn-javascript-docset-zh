`constructor 是和 class 一起用来创建和初始化对象的特殊方法`。

## 语法

<pre class="syntaxbox">constructor([arguments]) { ... }</pre>

## 描述

一个 class 中只能有一个指定的 ”constructor“ （构造）方法。如果 class 定义的时候包含多个构造方法，程序将会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。") 错误。

在构造方法中可以使用 super 关键字来调用父类的构造方法。

如果没有显式指定构造方法，则会添加默认的constructor方法。

## 实例

### `使用`构造方法

以下代码来自 [类的实例](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([在线 demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // 在这里调用父类的"length",赋值给矩形的"width"和"height"。
    super(length, length);
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}</pre>

### `默认`构造方法

如果没有显式定义，会默认添加一个空的constructor方法。对于基类"Base classes"，默认构造方法如下:

    constructor() {}

对于派生类"Derived classes" ，默认构造方法如下:

    constructor(...args) {
      super(...args);
    }

## 规格

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规格</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Constructor Method</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-static-semantics-constructormethod)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>初始定义.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Constructor Method</small>](https://tc39.github.io/ecma262/#sec-static-semantics-constructormethod)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容

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

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td>42.0</td>

<td>[45](/en-US/Firefox/Releases/45 "Released on 2016-03-08.") (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>Default constructors</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>[45](/en-US/Firefox/Releases/45 "Released on 2016-03-08.") (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

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

<th>特性</th>

<th>Android</th>

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>42.0</td>

<td>45.0 (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

</tr>

<tr>

<td>Default constructors</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>45.0 (45)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 参阅

*   [super()](/en-US/docs/Web/JavaScript/Reference/Operators/super)
*   [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
*   [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class)
*   [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)