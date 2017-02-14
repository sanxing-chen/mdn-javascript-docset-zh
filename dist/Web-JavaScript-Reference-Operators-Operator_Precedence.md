<span class="st">运算符的优先级决定了表达式中运算执行的先后顺序</span>，优先级高的运算符最先被执行。

下面是一个简单的例子：

<pre>3 + 4 * 5 // 计算结果为23	 
</pre>

乘法运算符 ("`*`")比起加法运算符("`+`")有着更高的优先级，所以它会被最先执行。

## 结合性

结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：

<pre>a OP b OP c
</pre>

左结合(从左到右计算)相当于把左边的子表达式加上小括号`(a OP b) OP c`，类似的，右关联(从右到左计算)相当于`a OP (b OP c)`。赋值运算符是右关联的,所以你可以这么写：

<pre>a = b = 5; 
</pre>

结果 `a` 和 `b` 的值都会成为5。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是：`b`被赋值为5，然后`a`也被赋值为 `b=5` 的返回值，也就是5。

## 汇总表

下面的表将所有运算符按照优先级的不同从高到低排列。

<table class="fullwidth-table">

<tbody>

<tr>

<th>优先级</th>

<th>运算类型</th>

<th>关联性</th>

<th>运算符</th>

</tr>

<tr>

<td>19</td>

<td>[`圆括号`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping "圆括号运算符( ) 用来控制表达式中的运算优先级.")</td>

<td>n/a</td>

<td>`( … )`</td>

</tr>

<tr>

<td rowspan="3">18</td>

<td>[`成员访问`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#点符号表示法 "属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点符号和括号。")</td>

<td>从左到右</td>

<td>`… . …`</td>

</tr>

<tr>

<td>[`需计算的成员访问`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#括号表示法 "属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点符号和括号。")</td>

<td>从左到右</td>

<td>`… [ … ]`</td>

</tr>

<tr>

<td>[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") (带参数列表)</td>

<td>n/a</td>

<td>`new … ( … )`</td>

</tr>

<tr>

<td rowspan="2">17</td>

<td>[函数调用](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions "JavaScript/Reference/Operators/Special_Operators/function_call")</td>

<td>从左到右</td>

<td>`… ( <var>… </var>)`</td>

</tr>

<tr>

<td>[new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new "JavaScript/Reference/Operators/Special_Operators/new_Operator") (无参数列表)</td>

<td>从右到左</td>

<td>`new …`</td>

</tr>

<tr>

<td rowspan="2">16</td>

<td>[后置递增](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment "JavaScript/Reference/Operators/Arithmetic_Operators")(运算符在后)</td>

<td>n/a</td>

<td>`… ++`</td>

</tr>

<tr>

<td>[后置递减](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement "JavaScript/Reference/Operators/Arithmetic_Operators")(运算符在后)</td>

<td>n/a</td>

<td>`… --`</td>

</tr>

<tr>

<td rowspan="9">15</td>

<td>[逻辑非](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT)</td>

<td>从右到左</td>

<td>`! …`</td>

</tr>

<tr>

<td>[按位非](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从右到左</td>

<td>`~ …`</td>

</tr>

<tr>

<td>[一元加法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从右到左</td>

<td>`+ …`</td>

</tr>

<tr>

<td>[一元减法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从右到左</td>

<td>`- …`</td>

</tr>

<tr>

<td>[前置递增](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从右到左</td>

<td>`++ …`</td>

</tr>

<tr>

<td>[前置递减](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从右到左</td>

<td>`-- …`</td>

</tr>

<tr>

<td>[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof "JavaScript/Reference/Operators/Special_Operators/typeof_Operator")</td>

<td>从右到左</td>

<td>`typeof …`</td>

</tr>

<tr>

<td>[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void "JavaScript/Reference/Operators/Special_Operators/void_Operator")</td>

<td>从右到左</td>

<td>`void …`</td>

</tr>

<tr>

<td>[delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete "JavaScript/Reference/Operators/Special_Operators/delete_Operator")</td>

<td>从右到左</td>

<td>`delete …`</td>

</tr>

<tr>

<td rowspan="3">14</td>

<td>[乘法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从左到右</td>

<td>`… * …`</td>

</tr>

<tr>

<td>[除法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从左到右</td>

<td>`… / …`</td>

</tr>

<tr>

<td>[取模](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从左到右</td>

<td>`… % …`</td>

</tr>

<tr>

<td rowspan="2">13</td>

<td>[加法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从左到右</td>

<td>`… + …`</td>

</tr>

<tr>

<td>[减法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction "JavaScript/Reference/Operators/Arithmetic_Operators")</td>

<td>从左到右</td>

<td>`… - …`</td>

</tr>

<tr>

<td rowspan="3">12</td>

<td>[按位左移](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… << …`</td>

</tr>

<tr>

<td>[按位右移](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… >> …`</td>

</tr>

<tr>

<td>[无符号右移](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… >>> …`</td>

</tr>

<tr>

<td rowspan="6">11</td>

<td>[小于](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… < …`</td>

</tr>

<tr>

<td>[小于等于](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… <= …`</td>

</tr>

<tr>

<td>[大于](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… > …`</td>

</tr>

<tr>

<td>[大于等于](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… >= …`</td>

</tr>

<tr>

<td>[in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in "JavaScript/Reference/Operators/Special_Operators/in_Operator")</td>

<td>从左到右</td>

<td>`… in …`</td>

</tr>

<tr>

<td>[instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof "JavaScript/Reference/Operators/Special_Operators/instanceof_Operator")</td>

<td>从左到右</td>

<td>`… instanceof …`</td>

</tr>

<tr>

<td rowspan="4">10</td>

<td>[等号](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… == …`</td>

</tr>

<tr>

<td>[非等号](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… != …`</td>

</tr>

<tr>

<td>[全等号](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… === …`</td>

</tr>

<tr>

<td>[非全等号](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity "JavaScript/Reference/Operators/Comparison_Operators")</td>

<td>从左到右</td>

<td>`… !== …`</td>

</tr>

<tr>

<td>9</td>

<td>[按位与](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… & …`</td>

</tr>

<tr>

<td>8</td>

<td>[按位异或](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… ^ …`</td>

</tr>

<tr>

<td>7</td>

<td>[按位或](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR "JavaScript/Reference/Operators/Bitwise_Operators")</td>

<td>从左到右</td>

<td>`… | …`</td>

</tr>

<tr>

<td>6</td>

<td>[逻辑与](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND "JavaScript/Reference/Operators/Logical_Operators")</td>

<td>从左到右</td>

<td>`… && …`</td>

</tr>

<tr>

<td>5</td>

<td>[逻辑或](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR "JavaScript/Reference/Operators/Logical_Operators")</td>

<td>从左到右</td>

<td>`… || …`</td>

</tr>

<tr>

<td>4</td>

<td>[条件运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator "JavaScript/Reference/Operators/Special_Operators/Conditional_Operator")</td>

<td>从右到左</td>

<td>`… ? … : …`</td>

</tr>

<tr>

<td rowspan="12">3</td>

<td rowspan="12">[赋值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators "JavaScript/Reference/Operators/Assignment_Operators")</td>

<td rowspan="12">从右到左</td>

<td>`… = …`</td>

</tr>

<tr>

<td>`… += …`</td>

</tr>

<tr>

<td>`… -= …`</td>

</tr>

<tr>

<td>`… *= …`</td>

</tr>

<tr>

<td>`… /= …`</td>

</tr>

<tr>

<td>`… %= …`</td>

</tr>

<tr>

<td>`… <<= …`</td>

</tr>

<tr>

<td>`… >>= …`</td>

</tr>

<tr>

<td>`… >>>= …`</td>

</tr>

<tr>

<td>`… &= …`</td>

</tr>

<tr>

<td>`… ^= …`</td>

</tr>

<tr>

<td>`… |= …`</td>

</tr>

<tr>

<td rowspan="2" colspan="1">2</td>

<td>[yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield "JavaScript/Reference/Operators/yield")</td>

<td>从右到左</td>

<td>`yield …`</td>

</tr>

<tr>

<td>[yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield* "JavaScript/Reference/Operators/yield")</td>

<td>从右到左</td>

<td>yield* …</td>

</tr>

<tr>

<td>1</td>

<td>[展开运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator "JavaScript/Reference/Operators/Spread_operator")</td>

<td>n/a</td>

<td>`...` …</td>

</tr>

<tr>

<td>0</td>

<td>[逗号](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator "JavaScript/Reference/Operators/Comma_Operator")</td>

<td>从左到右</td>

<td>`… , …`</td>

</tr>

</tbody>

</table>