**`extends`**关键词被用在[类声明](/en-US/docs/Web/JavaScript/Reference/Statements/class)或者[类表达式](/en-US/docs/Web/JavaScript/Reference/Operators/class)上，以创建一个类的子类。

## 语法

<pre class="syntaxbox">class ChildClass extends ParentClass { ... }</pre>

## 描述

`extends`关键词用来集成一个普通类以及内建对象。

`<font face="Open Sans, Arial, sans-serif">扩展的</font>.prototype必须是一个`[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。") 或者 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")。

## 示例

### 使用 `extends`

第一个例子是根据名为 `Polygon 类`创建一个名为`Square的类。` 你可以从[实战演示](https://googlechrome.github.io/samples/classes-es6/index.html)看到这个例子。

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // 这里把length传参给父类的构造方法
    // 作为父类Polygon的宽和高
    super(length, length);
    // 备注：在衍生类中使用this前必须先调用super()方法
    // 忽视这一点将会导致一个引用错误
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}</pre>

### 使用 `extends 扩展内建对象`

这个示例继承了[`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!") 对象。 你可以从[实战演示](https://googlechrome.github.io/samples/classes-es6/index.html)看到这个例子。

<pre class="brush: js">class myDate extends Date {
  constructor() {|
    super();
  }

  getFormattedDate() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
  }
}</pre>

### `<font face="Open Sans, Arial, sans-serif">扩展 </font>null`

可以像扩展普通类一样扩展[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。")，但是新对象的原型将不会继承 [`Object.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "Object.prototype 属性表示对象 Object 的原型对象。").

    class nullExtends extends null {
      constructor() {}
    }

    Object.getPrototypeOf(nullExtends); // Function.prototype
    Object.getPrototypeOf(nullExtends.prototype) // null

## 详述

<table class="standard-table">

<tbody>

<tr>

<th scope="col">详述</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">extends</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>最初的定义</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">extends</small>](https://tc39.github.io/ecma262/#sec-class-definitions)</td>

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

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基本支持</td>

<td>42.0</td>

<td>仅在夜间频道（<span style="font-size: 12px; line-height: 18px;">Nightly channel</span>）可用<span style="font-size: 12px; line-height: 18px;">（</span>自2015年3月<span style="font-size: 12px; line-height: 18px;">）</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>数组的子类</td>

<td>43.0</td>

<td><span style="color: #f00;">未实现</span></td>

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

<th><span style="font-family: open sans light,helvetica,arial,sans-serif; font-size: 16px; line-height: 16px;">特性</span></th>

<th>Android</th>

<th>Android Webview</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td><span style="font-size: 12px; line-height: 18px;">基本支持</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>42.0</td>

<td><span style="font-size: 12px; line-height: 18px;">仅在夜间频道（</span><span style="font-size: 12px; line-height: 18px;">Nightly channel</span><span style="font-size: 12px; line-height: 18px;">）可用</span><span style="font-size: 12px; line-height: 18px;">（</span><span style="font-size: 12px; line-height: 18px;">自2015年3月</span><span style="font-size: 12px; line-height: 18px;">）</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>42.0</td>

</tr>

<tr>

<td><span style="font-size: 12px; line-height: 18px;">数组的子类</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>43.0</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>43.0</td>

</tr>

</tbody>

</table>

</div>

## 扩展阅读

*   [类](/en-US/docs/Web/JavaScript/Reference/Classes)
*   [super](/en-US/docs/Web/JavaScript/Reference/Operators/super)