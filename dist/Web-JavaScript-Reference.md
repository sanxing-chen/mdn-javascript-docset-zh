<div>该部分是 Javascript 的资料库。浏览[本参考](/zh-CN/docs/Web/JavaScript/Reference/About)了解更多。</div>

## 全局对象

<div><span lang="zh-CN" class="short_text" id="result_box"><span>本章介绍</span><span>所有的 </span></span>[JavaScript 标准的内置对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)<span lang="zh-CN" class="short_text"><span>，</span><span>以及它们的</span><span>方法和属性</span><span>。</span></span></div>

## 语句

<div><span lang="zh-CN" class="short_text" id="result_box"><span>本章介绍</span><span>所有的 </span></span>[JavaScript 语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)。</div>

<div>

对于字母顺序列表，请参阅左边的侧边栏。

### <span lang="zh-CN" class="short_text" id="result_box"><span>控制流程</span></span>

<dl>

<dt>[`Block`](/zh-CN/docs/Web/JavaScript/Reference/Statements/block "语句块 (或其他语言中的 复合语句) 用来组织零个或多条语句. 用一对花括号界定语句块.")</dt>

<dd>一个块语句可以用来管理零个或多个语句。该区块是由一对大括号分隔。</dd>

<dt>[`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break "break 语句 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。")</dt>

<dd>终止当前的循环，switch，label 语句，使程序跳到下一个语句执行。</dd>

<dt>[`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue "continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。")</dt>

<dd>终止执行当前或标签循环的语句，直接执行下一个迭代循环。</dd>

<dt>[`Empty`](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty "empty 语句 用来表明没有语句, 尽管JavaScript语法希望有语句会被执行.")</dt>

<dd>空语句用来表示没有语句的情况，尽管 JavaScript 语法期望有语句提供。</dd>

<dt>[`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else "当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。")</dt>

<dd>如果指定的条件是 true ，则执行相匹配的一个语句，若为 false，则执行另一个语句。</dd>

<dt>[`switch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch "switch语句对一个表达式求值，将结果与 case 子语句比较，如果匹配，则从 case 处的语句向下执行。")</dt>

<dd>计算表达式，将子句于表达式的值做匹配，执行与该值相关联的语句。</dd>

<dt>[`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")</dt>

<dd>抛出一个用户自定义的异常。</dd>

<dt>[`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch "try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。")</dt>

<dd>标记一个语句块，并指定一个应该抛出异常的反馈。（Marks a block of statements to try, and specifies a response, should an exception be thrown.）</dd>

</dl>

### 声明

<dl>

<dt>[`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var "var声明了一个变量，并且可以同时初始化该变量。")</dt>

<dd>声明一个变量，可同时初始化。</dd>

<dt>[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let "let声明了一个块级域的本地变量，并且可以同时初始化该变量。")</dt>

<dd>声明一个块级本地变量，可以同时初始化。</dd>

<dt>[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const "const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。(译者注：JavaScript中的常量和Java，C++中的常量一个意思。注意区分常量的值和常量指向的值的不同)")</dt>

<dd>声明一个只读的命名常量</dd>

</dl>

### 函数和类

<dl>

<dt>[`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function "函数声明用指定的参数声明一个函数。")</dt>

<dd>声明一个指定参数的函数。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function* "function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。")</dt>

<dd>生成器函数使 [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol) 更容易使用。</dd>

<dt>[`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return "return 语句终止函数的执行，并返回一个指定的值给函数调用者。")</dt>

<dd>指定函数的返回值。</dd>

<dt>[`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class "关键字创建一个基于原型继承的新类(译者注：ES6新加入的class关键字是语法糖，本质还是函数)")</dt>

<dd>声明一个类。</dd>

</dl>

### 迭代器

<dl>

<dt>[`do...while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while "do...while 语句创建了一个循环,该循环执行一个指定的语句直到condition 的值为 false. condition 在执行statement后才会被赋值,statement至少执行一次.")</dt>

<dd>创建一个循环来执行语句，直到该语句条件表达式的值为false。先执行语句，再执行条件表达式，该语句至少会执行一次。</dd>

<dt>[`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for "for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.")</dt>

<dd>创建一个由3个可选的表达式组成的循环，该循环用括号包裹，分号分割，并在循环体中执行语句。</dd>

<dt><span title="This deprecated API should no longer be used, but will probably still work."></span><span title="This API has not been standardized."></span>[`for each...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in "使用一个变量迭代一个对象的所有属性值,对于每一个属性值,有一个指定的语句块被执行.")</dt>

<dd>通过指定的变量迭代对象所有属性的值。针对每个唯一的属性，会执行指定的语句块。</dd>

<dt>[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in "以任意序迭代一个对象的可枚举属性。每个不同的属性，语句都会被执行一次。")</dt>

<dd>无序遍历对象的可枚举属性。语句针对每个唯一的属性。</dd>

<dt>[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of "for...of语句在可迭代对象(包括 Array, Map, Set, 参数 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.")</dt>

<dd>遍历可迭代的对象 (包括[arrays](https://developer.mozilla.org/en-US/docs/Core_JavaScript_1.5_Reference/Global_Objects/Array "Array"), 类数组对象, [iterators and generators](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Iterators_and_Generators "Iterators and generators"))，对每个不同属性的属性，调用一个自定义的有执行语句的迭代钩子。</dd>

<dt>[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while "while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。")</dt>

<dd>创建一个循环语句，循环会一直持续到该语句条件表达式的值为false。先执行条件表达式，然后执行语句。</dd>

</dl>

### 其他

<dl>

<dt>[`debugger`](/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger "调用任何一个可用的调试器,如果没有调试器可用,则该语句没有任何效果.")</dt>

<dd>调用可用的调试功能。如果没有调试功能可用，该语句不生效。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export语句用于从给定文件（或模块）导出函数和对象。")</dt>

<dd>用来导出函数，以便这些函数能够被导入到外部模块或其他script中。</dd>

<dt><span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>[`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import "name参数用于接收导出成员的对象名称。member参数指定独立成员，而name参数导入所有成员。如果模块导出单个默认参数，而不是一系列成员，name也可以是函数。
 下面提供一些示例说明语法。")</dt>

<dd>用来引入外部的模块或另一个script中导出的函数。</dd>

<dt>[`label`](/zh-CN/docs/Web/JavaScript/Reference/Statements/label "标记语句（labeled statement）可以和 break 或 continue 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。")</dt>

<dd>带标识的语句，与`break`或`continue语句一起使用。`</dd>

</dl>

<dl>

<dt><span title="This deprecated API should no longer be used, but will probably still work."></span>[`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with "with語句的作用是擴展作用域鏈（scope chain）。")</dt>

<dd>拓展一个语句的作用域。</dd>

</dl>

</div>

## 表达式和操作符

<div><span lang="zh-CN" class="short_text" id="result_box"><span>本章介绍</span><span>所有的 </span></span>[JavaScript 表达式和操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators)。</div>

<div>

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

</div>

## 函数

<span lang="zh-CN" class="short_text" id="result_box"><span>本章介绍</span></span>如何使用 [JavaScript函数](/zh-CN/docs/Web/JavaScript/Reference/Functions) 来开发应用程序。

*   [`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
*   [箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [默认参数值](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
*   [剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## 附加参考

*   [语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
*   [数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
*   [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
*   [过时的功能](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)