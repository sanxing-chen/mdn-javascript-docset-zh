## 摘要

<span style="line-height: 1.5;">逻辑运算符通常用于[布尔](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)型（逻辑）值；这种情况，它们返回一个布尔型值。然而，&&和||运算符实际上返回一个指定操作数的值，因此这些运算符也用于非布尔型，它们返回一个非布尔型值。</span>

## 描述

下面是逻辑运算符的说明:

<table class="fullwidth-table">

<tbody>

<tr>

<th>运算符</th>

<th>示例</th>

<th>说明</th>

</tr>

<tr>

<td>逻辑与 (`&&`)</td>

<td>`_expr1_ && _expr2_`</td>

<td>如果_expr1_<span style="font-family: Consolas, Monaco, 'Andale Mono', monospace;"> </span>能转换成false则返回expr1,否则返回expr2\. 因此, 在Boolean环境中使用时, 两个操作结果都为true时返回true,否则返回false.</td>

</tr>

<tr>

<td>逻辑或 (`||`)</td>

<td>`_expr1_ || _expr2_`</td>

<td>如果expr1能转换成true则返回expr1,否则返回expr2. 因此,在boolean环境(在if的条件判断中)中使用时, 二者操作结果中只要有一个为true,返回true;二者操作结果都为false时返回false.</td>

</tr>

<tr>

<td>逻辑非(`!`)</td>

<td>`!_expr_`</td>

<td>如果单个表达式能转换为true的话返回false,否则返回true.</td>

</tr>

</tbody>

</table>

能够转换为false的表达式有:null,0,""和undefined.

尽管 `&&` 和 `||` 运算符能够在非Boolean环境中使用, 但如果他们的返回值能够转换成Boolean值的话,也可以认为是Boolean运算.

### 短路计算

由于逻辑表达式的运算的顺序是从左到右,也可以用以下规则进行"短路"计算:

*   `false && (_anything)_`  短路计算的结果为false.
*   `true || _(anything) _` 短路计算的结果为 true.

该规则确保这些计算的准确性. 注意如果上述表达式中的 anything 部分不能被计算的话,  两边都不会生效.还需要注意的是,上述表达式中的 anything 部分是任意的单个逻辑表达式(小括号中).

下面示例代码中的两个函数是相等的.

<pre>function shortCircuitEvaluation() {
  doSomething() || doSomethingElse()
}

function equivalentEvaluation() {
  var flag = doSomething();
  if (!flag) {
    doSomethingElse();
  }
}
</pre>

但,由于[运算符优先级](/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)的存在,下面的表达式的结果却不相同.右侧被小括号括起来的操作变成了独立的表达式.

    false && true  || true      // 结果为 true
    false && (true || true)     // 结果为 false

### 逻辑与 (&&)

下面的代码是 <font face="Consolas, Monaco, Andale Mono, monospace">&&</font> (逻辑与) 运算符的示例.

<pre style="font-size: 14px;">a1=true && true       // t && t 结果为 true
a2=true && false      // t && f 结果为 <span style="font-size: 1rem;">false</span>
a3=false && true      // f && t 结果为 <span style="font-size: 1rem;">false</span>
a4=false && (3 == 4)  // f && f 结果为 <span style="font-size: 1rem;">false</span>
a5="Cat" && "Dog"     // t && t 结果为 <span style="font-size: 1rem;">Dog</span>
a6=false && "Cat"     // f && t 结果为 <span style="font-size: 1rem;">false</span>
a7="Cat" && false     // t && f 结果为 <span style="font-size: 1rem;">false</span>
</pre>

### 逻辑或 (||)

下面的代码是 <font face="Consolas, Monaco, Andale Mono, monospace">||</font> (逻辑或) 运算符的示例.

<pre style="font-size: 14px;">o1=true || true       // t || t 结果为 <span style="font-size: 1rem;">true</span>
o2=false || true      // f || t 结果为 <span style="font-size: 1rem;">true</span>
o3=true || false      // t || f 结果为 <span style="font-size: 1rem;">true</span>
o4=false || (3 == 4)  // f || f 结果为 <span style="font-size: 1rem;">false</span>
o5="Cat" || "Dog"     // t || t 结果为 <span style="font-size: 1rem;">Cat</span>
o6=false || "Cat"     // f || t 结果为 <span style="font-size: 1rem;">Cat</span>
o7="Cat" || false     // t || f 结果为 <span style="font-size: 1rem;">Cat</span>
</pre>

### 逻辑非 (!)

下面的代码是 `!` (逻辑非) 运算符的示例.

<pre style="font-size: 14px;">n1=!true              // !t 结果为 <span style="font-size: 1rem;">false</span>
n2=!false             // !f 结果为 <span style="font-size: 1rem;">true</span>
n3=!"Cat"             // !t 结果为 <span style="font-size: 1rem;">false</span></pre>

### 转换规则

#### 将 <span style="font-size: 1.28571428571429rem;">AND </span><span style="font-size: 1.28571428571429rem;"> 转换为 OR</span>

下面涉及到Boolean运算的混合的操作:

<pre class="brush: js">bCondition1 && bCondition2</pre>

与下面的相等:

<pre class="brush: js">!(!bCondition1 || !bCondition2)</pre>

#### 将 OR 转换为 AND

下面涉及到Boolean运算的混合的操作:

<pre class="brush: js">bCondition1 || bCondition2</pre>

与下面的相等:

<pre class="brush: js">!(!bCondition1 && !bCondition2)</pre>

### 删除嵌套的小括号

由于逻辑表达式是从左往右计算的,所以通常可以按照下面的规则删除小括号.

#### 删除嵌套的 AND

下面涉及到Boolean运算的混合的操作:

<pre class="brush: js">bCondition1 || (bCondition2 && bCondition3)</pre>

与下面的相等:

<pre class="brush: js">bCondition1 || bCondition2 && bCondition3</pre>

#### 删除嵌套的 OR

下面涉及到Boolean运算的混合的操作:

<pre class="brush: js">bCondition1 && (bCondition2 || bCondition3)</pre>

与下面的相等:

<pre><span class="brush: js" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span class="token punctuation" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(153, 153, 153);">(</span><span class="token operator" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition1</span> <span class="token operator" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">||</span> <span style="color: inherit; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);"></span> <span class="token operator" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition2</span> <span class="token operator" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">&&</span> <span style="color: inherit; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);"></span> <span class="token operator" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);">!</span><span style="color: inherit; font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; background-color: rgb(250, 251, 252);">bCondition3</span><span class="token punctuation" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; font-style: inherit; font-weight: inherit; white-space: pre; line-height: 1.5; color: rgb(153, 153, 153);">)</span></pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>ECMAScript 1st Edition.</td>

<td>Standard</td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Logical NOT Operator</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.9)  
[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Binary Logical Operators</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11.11)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Logical NOT operator</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-logical-not-operator)  
[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Binary Logical Operators</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-binary-logical-operators)</td>

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

<table class="compat-table" style="border-color: transparent;">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Chrome</th>

<th style="line-height: 16px;">Firefox (Gecko)</th>

<th style="line-height: 16px;">Internet Explorer</th>

<th style="line-height: 16px;">Opera</th>

<th style="line-height: 16px;">Safari</th>

</tr>

<tr>

<td>[逻辑与 (`&&`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_AND)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>[逻辑或 (`||`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_OR)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>[逻辑非 (`!`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_NOT)</td>

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

<table class="compat-table" style="border-color: transparent;">

<tbody>

<tr>

<th style="line-height: 16px;">Feature</th>

<th style="line-height: 16px;">Android</th>

<th style="line-height: 16px;">Chrome for Android</th>

<th style="line-height: 16px;">Firefox Mobile (Gecko)</th>

<th style="line-height: 16px;">IE Mobile</th>

<th style="line-height: 16px;">Opera Mobile</th>

<th style="line-height: 16px;">Safari Mobile</th>

</tr>

<tr>

<td>[逻辑与 (`&&`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_AND)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>[逻辑或 (`||`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_OR)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>[逻辑非 (`!`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators$edit#Logical_NOT)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

### 向后兼容: 在 JavaScript 1.0 和 1.1 中的表现

<span style="line-height: 1.5;">&& 和|| 表达式的行为如下</span>:

<table class="fullwidth-table">

<tbody>

<tr>

<th>运算符</th>

<th>示例</th>

<th>说明</th>

</tr>

<tr>

<td>`&&`</td>

<td>`_expr1_ && _expr2_`</td>

<td>如果第一个表达式(expr1) 能转换成false, 那么&& 运算会返回false,而不是_expr1_的值.</td>

</tr>

<tr>

<td>`||`</td>

<td>`_expr1_ || _expr2_`</td>

<td>如果第一个表达式(expr1) 能转换成true, 那么|| 运算会返回true,而不是expr1的值.</td>

</tr>

</tbody>

</table>

## 参考资料

*   [位运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)