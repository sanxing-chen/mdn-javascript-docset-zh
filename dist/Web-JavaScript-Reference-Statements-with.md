<div class="warning">`<font face="Open Sans, Arial, sans-serif">不推荐使用</font>with语句，因为可能造成bug或者性能损失。详见`"Description"的"Ambiguity Con"部分。</div>

## 概要

**with语句**的作用是扩展作用域链（scope chain）。

## 语法

<pre class="syntaxbox">with (expression) {
  _statement_
}
</pre>

<dl>

<dt>`expression`</dt>

<dd>将expression添加到作用域链，以便在statement运行时使用。expression 外面需加括号。</dd>

<dt>`statement`</dt>

<dd>任何语句都行。如果不止一句，则需用[block](/en-US/docs/Web/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block")符号({ ... })将其括起來。</dd>

</dl>

## 说明

JavaScript查找某个未使用命名空间的变量时，会通过作用域链来查找，作用域链是跟执行代码的context或者包含这个变量的函数有关。'with'语句將某个对象添加的作用域链的顶部，如果在statement中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出[`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。")异常。

<div class="note">不推荐使用with，在ECMAScript 5 [strict mode](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode "JavaScript/Strict mode")中该标签已被禁止。 推荐的替代方案是声明一个临时变量来承载你所需要的属性。</div>

### 性能方面的利与弊

**利：**`with語句可以在不造成性能損失的情況下，減少變量的長度。其造成的附加計算量很少。使用`'with'可以減少不必要的指針路徑解析運算。需要注意的是，很多情況下，也可以不使用with語句，而是使用一個臨時變量來保存指針，來達到同樣的效果。

**弊：**`with語句使得程序在查找變量值時，都是先在指定的對象中查找。所以那些本來不是這個對象的屬性的變量，查找起來將會很慢。如果是在對性能要求較高的場合，`'with'下面的statement語句中的變量，只應該包含這個指定對象的屬性。

### 语义不明的弊端

**弊端：**`with语句使得代码不易阅读，同时使得`JavaScript编译器不易在作用域链上查找某个变量，不易決定应该在哪个对象上來取值。请看下面的例子：

<pre class="brush: js">function f(x, o) {
  with (o) 
    print(x);
}</pre>

`f被调用时，``x有可能能取到值，也可能是undefined`，如果能取到, 有可能是在o上取的值，也可能是函數的第一個參數x的值（如果o中沒有這個屬性的話）。如果你忘記在作為第二個參數的對象o中定義`x這個屬性`，程序並不會報錯，只是取到另一個值而已。

**弊端：**`使用``with語句的代碼，無法向前兼容，特別是在使用一些原生數據類型的時候。看下面的例子：`

<div>

<pre class="brush:js">function f(foo, values) {
    with (foo) {
        console.log(values)
    }
}
</pre>

`<font face="Open Sans, Arial, sans-serif">如果是在</font>`ECMAScript 5環境`<font face="Open Sans, Arial, sans-serif">調用</font>f([1,2,3], obj)，<font face="Open Sans, Arial, sans-serif">則with語句中變量</font>``values將指向函數的第二個參數values。但是，`ECMAScript 6標準給`[Array.prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)添加了一個新屬性values，所有數組實例將繼承這個屬性。所以在`ECMAScript 6環境中，`<font face="Open Sans, Arial, sans-serif">with語句中變量</font>``values將指向``[1,2,3].values`。

</div>

## 示例

### Example: Using `with`

`<font face="Open Sans, Arial, sans-serif">下面的</font>with語句<font face="Open Sans, Arial, sans-serif">指定</font>``[Math](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math "JavaScript/Reference/Global_Objects/Math")对象作为默认对象`。`with语句里面的变量，分別指向Math对象的`[`PI`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI "JavaScript/Reference/Global_Objects/Math/PI") 、`[cos](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos "JavaScript/Reference/Global_Objects/Math/cos")<font face="Open Sans, Arial, sans-serif">和</font>``[sin](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin "JavaScript/Reference/Global_Objects/Math/sin")函數，不用在前面添加命名空间（Math.PI）`。

<pre class="brush:js">var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}</pre>

## 技术规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">with statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.10)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Now forbidden in strict mode.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">with statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-with-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

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

## 另见

*   [`block`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")
*   [Strict mode](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)