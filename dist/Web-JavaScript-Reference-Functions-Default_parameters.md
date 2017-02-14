如果一个形参没有被传入对应的实参或者传入了`undefined`,则该形参会被赋一个默认值.

## 语法

<pre class="syntaxbox">function [_name_]([_param1_[ = defaultValue1 ][, ..., _paramN_[ = defaultValueN ]]]) { _statements_ }
</pre>

## 描述

在JavaScript里，函数参数默认是[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")。 然而，在某些情况下设置一个不同的默认值可能是有需要的。默认参数可以帮助解决这个问题。

过去，一般的设置默认参数的方法是在函数体测试参数是否为undefined，如果是的话就设置为默认的值。下面的例子中，如果在调用multiply时，参数b的值没有提供，那么b在函数体的值就为undefined。如果直接执行a*b，函数会返回 `NaN。`但是第二行代码解决了这个问题，它把b的值赋为1。

    function multiply(a, b) {
      b = typeof b !== 'undefined' ?  b : 1;

      return a*b;
    }

    multiply(5); // 5

有了默认参数，我们不需要再在函数体内做不必要的检查。现在你可以在函数头将b的默认值置为1：

    function multiply(a, b = 1) {
      return a*b;
    }

    multiply(5); // 5

## 示例

### 传入 `undefined`

第二次函数调用中，即使显式地传入了`undefined，``color参数的值也会取默认值。`

<pre class="brush: js">function setBackgroundColor(element, color = 'rosybrown') {
  element.style.backgroundColor = color;
}

setBackgroundColor(someDiv);            // color的值为'rosybrown'
setBackgroundColor(someDiv, undefined); // color的值为'rosybrown'
setBackgroundColor(someDiv, 'blue');    // color的值为'blue' 
</pre>

### 调用时解析

在函数被调用时，参数默认值会被解析，所以不像Python中的例子，每次函数调用时都会创建一个新的参数对象。

    function append(value, array = []) {
      array.push(value);
      return array;
    }

    append(1); //[1]
    append(2); //[2], not [1, 2]

这个规则对于函数和变量也是适用的。

    function callSomething(thing = something()) { return thing }

    function something(){
      return "sth";
    }

    callSomething();  //sth

### 前置参数对于后面的默认参数是可见的

已经被声明的参数对于后面的默认参数是可见的。

    function singularAutoPlural(singular, plural = singular+"s", 
                                rallyingCry = plural + " ATTACK!!!") {
      return [singular, plural, rallyingCry ]; 
    }

    //["Gecko","Geckos", "Geckos ATTACK!!!"]
    singularAutoPlural("Gecko");

    //["Fox","Foxes", "Foxes ATTACK!!!"]
    singularAutoPlural("Fox","Foxes");

    //["Deer", "Deer", "Deer ... change."]
    singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully
       petition the government for positive change.")

以下这个例子近似模拟了一些比较简明的情况，并说明了特殊情况是怎么被处理的。

    function go() {
      return ":P"
    }

    function withDefaults(a, b = 5, c = b, d = go(), e = this, 
                          f = arguments, g = this.value) {
      return [a,b,c,d,e,f,g];
    }
    function withoutDefaults(a, b, c, d, e, f, g){
      switch(arguments.length){
        case 0:
          a
        case 1:
          b = 5
        case 2:
          c = b
        case 3:
          d = go();
        case 4:
          e = this
        case 5:
          f = arguments
        case 6:
          g = this.value;
        default:
      }
      return [a,b,c,d,e,f,g];
    }

    withDefaults.call({value:"=^_^="});
    // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

    withoutDefaults.call({value:"=^_^="});
    // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

### 函数嵌套定义

在 Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) 中引入。在函数体内的函数声明不能引用内部的默认参数，并且会在 SpiderMonkey 抛出一个[`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。") 错误(现在是一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 错误，请查看 [bug 1022967](https://bugzilla.mozilla.org/show_bug.cgi?id=1022967 "FIXED: Separate environment for default parameter and function body if default parameter contains expression"))。默认参数总是会被首先执行，而在函数体内部的函数声明会在之后生效。

函数内定义的闭包对于默认参数是不能引用的，如果引用会报错（"ReferenceError"）。默认参数总是被最先解析，函数内部的声明会在这之后被解析。

    // Doesn't work! Throws ReferenceError.
    function f(a = go()) {
      function go(){return ":P"}
    }

### 位于默认参数之后非默认参数

在Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2)之前, 以下代码会造成[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误.")错误. 这一现象已被之后的版本修复。

    function f(x=1, y) { 
      return [x, y]; 
    }

    f(); // [1, undefined]

### 有默认值的解构参数

你可以通过[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)为参数赋值:

    function f([x, y] = [1, 2], {z: z} = {z: 3}) { 
      return x + y + z; 
    }

    f(); // 6

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
<small lang="zh-CN">Function Definitions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Function Definitions</small>](https://tc39.github.io/ecma262/#sec-function-definitions)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

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

<td>基本支持</td>

<td>49</td>

<td>[15.0](/en-US/Firefox/Releases/15 "Released on 2012-08-28.") (15.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>在默认参数之后有不带有默认值的参数</td>

<td>49</td>

<td>[26.0](/en-US/Firefox/Releases/26 "Released on 2013-12-10.") (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>带有默认值赋值的析构参数</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[41.0](/en-US/Firefox/Releases/41 "Released on 2015-09-22.") (41.0)</td>

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

</tr>

<tr>

<td>基本支持</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td>15.0 (15.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>在默认参数之后有不带有默认值的参数</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>26.0 (26.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

<tr>

<td>带有默认值赋值的析构参数</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td>41.0 (41.0)</td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

<td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values "http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values")