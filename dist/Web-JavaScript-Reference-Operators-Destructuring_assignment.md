**解构赋值（destructuring assignment）语法**是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。

## 语法

<pre class="brush: js">var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES7 - not implemented in Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});</pre>

## 简述

对象字面量和数组字面量提供了一种简单的定义一个特定的数据组的方法。

<pre class="brush: js">var x = [1, 2, 3, 4, 5];</pre>

解构赋值使用了相同的语法，不同的是在表达式左边定义了要从原变量中取出什么变量。

<pre class="brush: js">var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
</pre>

解构赋值的作用类似于Perl和Python语言中的相似特性。

## 解构数组

### 基本变量赋值

<pre class="brush: js">var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"</pre>

### 声明赋值分离

通过解构分离变量的声明，可以为一个变量赋值。

<pre class="brush: js">var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2</pre>

### 默认值

为了防止从数组中取出一个值为`undefined的对象，可以为这个对象设置默认值。`

<pre class="brush: js">var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7</pre>

### 交换变量

在一个解构表达式中可以交换两个变量的值。

没有解构赋值的情况下，交换两个变量需要一个临时变量 (或者用低级语言中的[XOR-swap技巧](http://en.wikipedia.org/wiki/XOR_swap)）。

<pre class="brush: js">var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1</pre>

### 解析一个从函数返回的数组

从一个函数返回一个数组是十分常见的情况.。解构使得处理返回值为数组时更加方便。

在下面例子中，`[1, 2]` 作为函数的 `f()` 的输出值，可以使用解构用一句话完成解析。

<pre class="brush: js">function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2</pre>

感谢解构赋值，函数现在可以返回多个值了。尽管函数一直都可以返回一个数组，但现在这样做有更多的灵活性。

### 忽略某些返回值

你也可以忽略你不感兴趣的返回值：

<pre class="brush:js">function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3</pre>

你也可以忽略全部返回值。例如：

<pre class="brush:js">[,,] = f();
</pre>

### 将剩余数组赋值给一个变量

当解构一个数组时，可以使用剩余模式，将数组剩余部分赋值给一个变量。

<pre class="brush: js">var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]</pre>

### 用正则表达式匹配提取值

`<font face="Open Sans, Arial, sans-serif">用正则表达式方法</font>[exec()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)匹配字符串会返回一个数组，该数组第一个值是完全匹配正则表达式的字符串，然后的值是匹配正则表达式括号内内容部分。解构赋值允许你轻易地提取出需要的部分，忽略完全匹配的字符串——如果不需要的话`。

<pre class="brush: js">var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"</pre>

## 解构对象

### 简单示例

<pre class="brush: js">var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true 

// 用新变量名赋值
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true  </pre>

### 函数参数默认值

#### ES5版本

<pre class="brush: js">function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});</pre>

#### ES6版本

<pre class="brush: js">function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});</pre>

<div class="note">

Firefox中，**解构赋值默认值**还未被实施: var { x = 3 } = {}和var [foo = "bar"] = []。函数中的解构默认值请参考[bug 932080](https://bugzilla.mozilla.org/show_bug.cgi?id=932080 "FIXED: Support default values in destructuring")。

</div>

### 加载模块

解构赋值可以帮助加载一个模块的特定子集，像[Add-on SDK](/en-US/Add-ons/SDK)中:

<pre class="brush: js">const { Loader, main } = require('toolkit/loader');
</pre>

### 解构嵌套对象和数组

<pre class="brush:js">var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"</pre>

### For of 迭代和解构

<pre class="brush: js">var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"</pre>

### 从作为函数实参的对象中提取数据

<pre class="brush:js">function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"</pre>

这段代码从user对象中提取并输出`id<font face="Open Sans, Arial, sans-serif">、</font>``displayName`和`firstName`。

### 对象属性计算名和解构

计算属性名，如[object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)，可以被解构。

<pre class="brush: js">let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
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

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Destructuring assignment</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Destructuring assignment</small>](https://tc39.github.io/ecma262/#sec-destructuring-assignment)</td>

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

<td>49.0</td>

<td>[2.0](/en-US/Firefox/Releases/2 "Released on 2006-10-24.") (1.8.1)</td>

<td>14</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>7.1</td>

</tr>

<tr>

<td>Computed property names</td>

<td>49.0</td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td>14</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Spread operator</td>

<td>49.0</td>

<td>[34](/en-US/Firefox/Releases/34 "Released on 2014-12-01.") (34)</td>

<td>12<sup>[1]</sup></td>

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

<th>Feature</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

<th>Chrome for Android</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>49.0</td>

<td>1.0 (1.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>8</td>

<td>49.0</td>

</tr>

<tr>

<td>Computed property names</td>

<td><span style="color: #f00;">未实现</span></td>

<td>49.0</td>

<td>34.0 (34)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>49.0</td>

</tr>

<tr>

<td>Spread operator</td>

<td><span style="color: #f00;">未实现</span></td>

<td>49.0</td>

<td>34.0 (34)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>49.0</td>

</tr>

</tbody>

</table>

</div>

[1] 需要在`about:flags`下开启 "Enable experimental Javascript features" 

### Firefox特别注意事项

*   Firefox为[JS1.7](/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7)提供了解构的非标准的语言扩展。这个扩展在Gecko 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37)中被移除。参见[bug 1083498](https://bugzilla.mozilla.org/show_bug.cgi?id=1083498 "FIXED: Remove SpiderMonkey support for destructuring for-in (JS1.7-only language extension)")。
*   自 (Firefox 41 / Thunderbird 41 / SeaMonkey 2.38)版本开始，出于遵守ES6规范的考虑, 圆括号内的解构赋值,比如 `([a, b]) = [1, 2]` 或者 `({a, b}) = { a: 1, b: 2 }`,现在被视为 invalid 并且会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误."). 点击 [Jeff Walden's blog post](http://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) 和 [bug 1146136](https://bugzilla.mozilla.org/show_bug.cgi?id=1146136 "FIXED: Parenthesized AssignmentPatterns are not a valid LHS") 来获得更多信息。

## 相关链接

*   [赋值操作符](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
*   ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)