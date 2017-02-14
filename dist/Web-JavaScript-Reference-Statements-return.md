**`return `语句**终止函数的执行，并返回一个指定的值给函数调用者。

## 语法

<pre class="syntaxbox">return [[expression]]; </pre>

<dl>

<dt>`expression`</dt>

<dd>被返回的表达式。如果忽略，则返回 `undefined`。</dd>

</dl>

## 描述

当在一个函数里面执行 `return` 语句时，该函数将会停止执行。一个指定的值将会被返回给函数调用者。如果未指定返回表达式，则返回 `undefined`。下面的 return 语句都会终止函数的执行：

<pre class="brush: js">return;
return true;
return false;
return x;
return x + y / 3;
</pre>

### 自动插入分号

[自动分号插入点[automatic semicolon insertion (ASI)]](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) 规则会影响 `return` 语句。在 `return` 关键字和被返回的表达式之间没有行结束符(line terminator)。

<pre class="brush: js">return
a + b;</pre>

根据 ASI，被转换为：

<pre class="brush: js">return;
a + b;</pre>

控制台会警告“unreachable code after return statement”。

<div class="note">

从 Gecko 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37)开始，，如果在一个 return 语句后发现无法访问的代码，控制台将会显示一个警告。

</div>

## 示例

### `return`

下面的函数返回其参数 `x` 的平方，其中 `x` 是一个数值。

<pre class="brush: js">function square(x) {
   return x * x;
}
</pre>

### 示例：中断一个函数的执行

函数将会在 return 语句执行后立即中止。

<pre class="brush: js">function counter() {
  for (var count = 1; ; count++) {  // 无限循环
    console.log(count + "A"); // 执行5次
      if (count === 5) {          
        return;
      }
      console.log(count + "B");  // 执行4次
    }
  console.log(count + "C");  // 永远不会执行
}

counter();

// Output:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
</pre>

### 返回一个函数

要了解关于闭包的内容，可阅读[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)。

<pre class="brush: js">function magic(x) {
  return function calc(x) { return x * 42};
}

var answer = magic();
answer(1337); // 56154
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

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Return statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.9)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Return statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-return-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2016 Draft (7th Edition, ECMA-262)  
<small lang="zh-CN">Return statement</small>](https://tc39.github.io/ecma262/#sec-return-statement)</td>

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

## 相关链接

*   [函数和函数作用域](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope "En/Core_JavaScript_1.5_Reference/Functions")
*   [闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)