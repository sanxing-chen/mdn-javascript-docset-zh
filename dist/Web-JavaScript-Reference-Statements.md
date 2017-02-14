JavaScript 应用程序是由许多语法正确的语句组成的。单个语句可以跨多行。如果每个语句用分号隔开，那么多个语句可以在一行中出现。本页的内容并不是一个关键字，而是一组关键字。

## 语句和声明（按类别）

对于字母顺序列表，请参阅左边的侧边栏。

### <span class="short_text" id="result_box" lang="zh-CN"><span>控制流程</span></span>

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

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 1st Edition (ECMA-262)  
<small lang="zh-CN">Statements</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition</td>

</tr>

<tr>

<td>[ECMAScript 3rd Edition (ECMA-262)  
<small lang="zh-CN">Statements</small>](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Statements</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">ECMAScript Language: Statements and Declarations</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-statements-and-declarations)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>New: function*, let, for...of, yield, class</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">ECMAScript Language: Statements and Declarations</small>](https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 相关链接

*   [Operators](/zh-CN/docs/Web/JavaScript/Reference/Operators)