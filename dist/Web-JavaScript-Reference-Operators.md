  
该章节说明了Javascript语言所有的运算符,表达式和关键字。

## 表达式和运算符分类

左侧工具栏是按字母表排序的列表。

### 主要表达式

JavaScript中基本关键字和常用表达式。

<dl>

<dt>[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this "在JavaScript中，函数的this关键字的行为与其他语言相比有很多不同。在JavaScript的严格模式和非严格模式下也略有区别。")</dt>

<dd>`this` 关键字指向函数的执行上下文。</dd>

<dt>[`function`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function "function 关键字可用来在一个表达式中定义一个函数。")</dt>

<dd>`function` 关键字定义了函数表达式。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`class`](/zh-CN/docs/Web/JavaScript/Reference/Operators/class "类表达式是用来定义类的一种语法。和函数表达式相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。")</dt>

<dd>`class` 关键字定义了类表达式。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`function*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function* "function*关键字可以在表达式内部定义一个生成器函数。")</dt>

<dd>`function*` 关键字定义了一个 generator 函数表达式。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).")</dt>

<dd>暂停和恢复 generator 函数。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield* "在生成器中，yield* 可以把需要 yield 的值委托给另外一个生成器或者其他任意的可迭代对象。")</dt>

<dd>委派给另外一个generator函数或可迭代的对象。</dd>

<dt>[`[]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array "在 JavaScript 中 Array 是一个用来构造数组的全局对象，它是一个高阶的类似有序列表的对象。")</dt>

<dd>数组初始化/字面量语法。</dd>

<dt>[`{}`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer "对象可以通过 new Object(), Object.create() 方法， 或者使用字面 标记 (初始化 标记)初始化。 对象初始化，由花括号{}包含的一个由0个或者多个对象属性名和关联值组成的列表构成。")</dt>

<dd>对象初始化/字面量语法。</dd>

<dt>[`/ab+c/i`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp 的构造函数创建了一个正则表达式对象，用模式来匹配文本。")</dt>

<dd>正则表达式字面量语法。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`[for (x of y) x]`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions "数组推导式是一种新的 JavaScript 表达式语法，使用它，你可以在一个原有数组的基础上快速的构造出（推导出）一个新的数组。")</dt>

<dd>数组推导式。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`(for (x of y) y)`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions "The generator comprehension syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript.")</dt>

<dd>Generator comprehensions。</dd>

<dt>[`( )`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping "圆括号运算符( ) 用来控制表达式中的运算优先级.")</dt>

<dd>圆括号操作符。</dd>

</dl>

<dl>

<dt>

### Left-hand-side expressions

Left values are the destination of an assignment.

</dt>

<dt>[Property accessors](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors "属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点符号和括号。")</dt>

<dd>成员访问可以访问对象的属性或方法  
(`object.property` and `object["property"]`).</dd>

<dt>[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。")</dt>

<dd>`new` 运算符创建了构造函数实例.</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super "super 关键字用于访问父对象上的函数。")</dt>

<dd>`super` 关键字调用父类的构造器.</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`...obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator "扩展语法允许在需要多个参数（用于函数调用）或多个元素（用于数组文本）或多个变量（用于解构分配）的位置扩展表达式。")</dt>

<dd>展开运算符可以将一个可迭代的对象在函数调用的位置展开成为多个参数,或者在数组字面量中展开成多个数组元素。</dd>

<dt>

### 自增运算和自减运算

前置/后置自增运算符和前置/后置自减运算符.

</dt>

<dt>[`A++`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>后置自增运算符.</dd>

<dt>[`A--`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>后置自减运算符.</dd>

<dt>[`++A`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>前置自增运算符.</dd>

<dt>[`--A`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>前置自减运算符.</dd>

<dt>

### 一元运算符

一元运算符只有一个操作数.

</dt>

<dt>[`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete "delete 操作符用来删除一个对象的属性。")</dt>

<dd>`delete` 运算符用来删除对象的属性.</dd>

<dt>[`void`](/zh-CN/docs/Web/JavaScript/Reference/Operators/void "void 运算符会对给定的表达式进行求值，然后直接返回 undefined。")</dt>

<dd>`void` 运算符表示表达式放弃返回值.</dd>

<dt>[`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof "typeof操作符返回一个字符串,指示未经计算的操作数的类型。")</dt>

<dd>`typeof` 运算符用来判断给定对象的类型.</dd>

<dt>[`+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>一元加运算符将操作转换为Number类型.</dd>

<dt>[`-`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>一元减运算符将操作转换为Number类型并取反.</dd>

<dt>[`~`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>按位非运算符.</dd>

<dt>[`!`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT "逻辑运算符通常用于布尔型（逻辑）值；这种情况，它们返回一个布尔型值。然而，&&和||运算符实际上返回一个指定操作数的值，因此这些运算符也用于非布尔型，它们返回一个非布尔型值。")</dt>

<dd>逻辑非运算符.</dd>

<dt>

### Arithmetic operators

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

</dt>

<dt>[`+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>加法运算符.</dd>

<dt>[`-`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>减法运算符.</dd>

<dt>[`/`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>除法运算符.</dd>

<dt>[`*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>乘法运算符.</dd>

<dt>[`%`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder "算术运算符（Arithmetic operators）把数值（原始值或变量）作为它们的操作数（operand），然后返回一个单数值。标准的算术运算符有加 (+)，减 (-)，乘(*)，除(/)。")</dt>

<dd>取模运算符.</dd>

<dt>

### 关系运算符

A comparison operator compares its operands and returns a `Boolean` value based on whether the comparison is true.

</dt>

<dt>[`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in "如果指定的属性存在于指定的对象中，则 in 运算符会返回 true。")</dt>

<dd>`in运算符用来判断对象是否拥有给定属性`.</dd>

<dt>[`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。")</dt>

<dd>`instanceof` 运算符判断一个对象是否是另一个对象的实例.</dd>

<dt>[`<`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>小于运算符</dd>

<dt>[`>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>大于运算符.</dd>

<dt>[`<=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>小于等于运算符.</dd>

<dt>[`>=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>大于等于运算符.</dd>

<dt>

### 相等操作符

The result of evaluating an equality operator is always of type `Boolean` based on whether the comparison is true.

</dt>

<dt>[`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>相等 运算符.</dd>

<dt>[`!=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>不等 运算符.</dd>

<dt>[`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>全等 运算符.</dd>

<dt>[`!==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity "JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")</dt>

<dd>非全等 运算符.</dd>

<dt>

### 位移运算符

Operations to shift all bits of the operand.

</dt>

<dt>[`<<`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise left shift operator.</dd>

<dt>[`>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise right shift operator.</dd>

<dt>[`>>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise unsigned right shift operator.</dd>

<dt>

### 二元按位运算符

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

</dt>

<dt>[`&`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise AND.</dd>

<dt>[`|`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise OR.</dd>

<dt>[`^`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR "按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。")</dt>

<dd>Bitwise XOR.</dd>

<dt>

### 二元逻辑运算符

逻辑运算符是典型的使用boolean(逻辑)值, and when they are, they return a boolean value.

</dt>

<dt>[`&&`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND "逻辑运算符通常用于布尔型（逻辑）值；这种情况，它们返回一个布尔型值。然而，&&和||运算符实际上返回一个指定操作数的值，因此这些运算符也用于非布尔型，它们返回一个非布尔型值。")</dt>

<dd>逻辑与.</dd>

<dt>[`||`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR "逻辑运算符通常用于布尔型（逻辑）值；这种情况，它们返回一个布尔型值。然而，&&和||运算符实际上返回一个指定操作数的值，因此这些运算符也用于非布尔型，它们返回一个非布尔型值。")</dt>

<dd>逻辑或.</dd>

<dt>

### 条件判断 (三元) 运算符

</dt>

<dt>[`(condition ? ifTrue : ifFalse)`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator "条件（三元）运算符是 JavaScript 仅有的使用三个操作数的运算符。本运算符经常作为 if 语句的简短形式来使用。")</dt>

<dd>

条件元素运算符把两个结果中其中一个符合运算逻辑的值返回。

</dd>

<dt>

### 赋值运算符

赋值元素符会将右边的操作数的值分配给左边的操作数，并将其值修改为右边操作数相等的值。

</dt>

<dt>[`=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值运算符。</dd>

<dt>[`*=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值乘积。</dd>

<dt>[`/=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值商。</dd>

<dt>[`%=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值求余。</dd>

<dt>[`+=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值求和。</dd>

<dt>[`-=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值求差。</dd>

<dt>[`<<=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>左位移。</dd>

<dt>[`>>=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>右位移。</dd>

<dt>[`>>>=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>无符号右位移。</dd>

<dt>[`&=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值与。</dd>

<dt>[`^=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值按位异或。</dd>

<dt>[`|=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment "赋值运算符（assignment operator）基于右值（right operand）的值，给左值（left operand）赋值。")</dt>

<dd>赋值或。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`[a, b] = [1, 2]`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "解构赋值（destructuring assignment）语法是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。")  
<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`{a, b} = {a:1, b:2}`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "解构赋值（destructuring assignment）语法是一个Javascript表达式，它使得从数组或者对象中提取数据赋值给不同的变量成为可能。")</dt>

<dd>

解构赋值允许你分配数组或者对象变量的属性通过使用规定的语法，其看起来和数组和对象字面量很相似。

</dd>

<dt>

### 逗号操作符

</dt>

<dt>[`,`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator "逗号操作符 对它的每个操作对象求值（从左至右），然后返回最后一个操作对象的值。")</dt>

<dd>逗号操作符允许在一个判断状态中有多个表达式去进行运算并且最后返回最后一个表达式的值。</dd>

<dt>

### 非标准化特性

</dt>

<dt><span title="This API has not been standardized."></span>[Legacy generator function](/zh-CN/docs/Web/JavaScript/Reference/Operators/Legacy_generator_function "function 关键字可以用于在表达式中定义旧式的生成器函数。为使定义的函数为一个旧式的生成器函数，该函数的函数体中需要至少包含一个 yield 表达式。")</dt>

<dd>function关键字能用来定义表达式内部未执行完的function的余下功能。 为了能执行function内部余下的代码, 这个function的内部至少包含一个[`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield "yield 关键字用来暂停和继续一个生成器函数 (function* or legacy generator).") 表达式。</dd>

<dt><span title="This API has not been standardized."></span>[Expression closures](/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_closures "表达式闭包是定义简单函数的一种便捷方式。")</dt>

<dd>闭包表达式语法是一个缩写简单的函数。</dd>

<dt><span title="This API has not been standardized."></span>[`[for (x of y) x]`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions "数组推导式是一种新的 JavaScript 表达式语法，使用它，你可以在一个原有数组的基础上快速的构造出（推导出）一个新的数组。")</dt>

<dd>数组解析</dd>

<dt><span title="This API has not been standardized."></span>[`(for (x of y) y)`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions "The generator comprehension syntax is a JavaScript expression which allows you to quickly assemble a new generator function based on an existing iterable object. Comprehensions exist in many programming languages and the upcoming ECMAScript 7 standard defines array comprehensions for JavaScript.")</dt>

<dd>生成器解析</dd>

<dt>

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

<td>初始化定义</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Expressions</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-11)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ECMAScript Language: Expressions</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-expressions)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>New: Spread operator, destructuring assignment, `super` keyword, Array comprehensions, Generator comprehensions</td>

</tr>

</tbody>

</table>

## 相关链接

[运算符优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)</dt>

</dl>