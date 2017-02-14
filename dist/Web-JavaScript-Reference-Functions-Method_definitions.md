<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该特性处于 ECMAScript 6 规范草案中，目前的实现在未来可能会发生微调，请谨慎使用。**

</div>

</div>

ECMAScript从ECMAScript6开始，引入了一种更简短的在对象初始器中定义方法的语法，这是一种把方法名直接赋给函数的简写方式。

## 语法

<pre class="brush: js">var obj = {
  <var>property</var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  * <var>generator</var>() {}
};
</pre>

## 简述

该简写语法与ECMAScript 5的[getter](/en-US/docs/Web/JavaScript/Reference/Functions/get)和[setter](/en-US/docs/Web/JavaScript/Reference/Functions/set)语法类似。

如下代码，

<pre class="brush: js">var obj = {
  foo: function() {},
  bar: function() {}
};</pre>

现可被简写为：

<pre class="brush: js">var obj = {
  foo() {},
  bar() {}
};</pre>

### 生成器方法的简写语法

[生成器方法](/en-US/docs/Web/JavaScript/Reference/Statements/function*)也可以用这种简写语法定义。注意简写语法中的星号（*）必须出现在生成器名前，也就是说`* g(){}`可以正常工作，而`g *(){}不行。`

<pre class="brush: js;highlight[12]">// 用有属性名的语法定义方法（ES6之前）：
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// 同一个方法，简写语法：
var obj2 = { 
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1</pre>

## 示例

### 简单示例

<pre class="brush: js;highlight[3]">var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
</pre>

### 计算属性名

该简写方法也支持计算属性名（下例中的foo2方法）：

<pre class="brush: js;highlight[4]">var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  ["foo" + 2](){return 2;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>[ECMAScript 6 (ECMA-262)  
<small lang="zh-CN">Method definitions</small>](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-method-definitions)</td>

<td><span class="spec-RC">Release Candidate</span></td>

<td>初始定义</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

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

<td>Method definition shorthand</td>

<td>39</td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>26</td>

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

<td>Method definition shorthand</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

### SpiderMonkey特定备注

*   在SpiderMonkey 38 (Firefox 38 / Thunderbird 38 / SeaMonkey 2.35)之前，"`get`"和"`set`"是无效的生成器方法名。这在[bug 1073809](https://bugzilla.mozilla.org/show_bug.cgi?id=1073809 "FIXED: Allow "get" and "set" as names for generator methods")中被修复了。

## 参见

*   `[get](/en-US/docs/Web/JavaScript/Reference/Functions/get)`
*   `[set](/en-US/docs/Web/JavaScript/Reference/Functions/set)`
*   [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)