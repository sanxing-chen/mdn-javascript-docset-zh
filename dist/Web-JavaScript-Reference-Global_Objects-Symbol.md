<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**该新特性属于 ECMAScript 2015（ES6）规范，在使用时请注意浏览器兼容性。**

</div>

</div>

**Symbol** 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol [primitive data type](/en-US/docs/Glossary/Primitive "primitive data type: A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).") 的隐式对象包装器。

## 语法

    Symbol([description])

### 参数

<dl>

<dt>`description` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd><span id="tran_0" class="copied" style="background-color: rgba(255, 255, 255, 0.8); color: #666666; font-family: tahoma,arial; font-size: 12px; line-height: 24px; outline: 0px; text-align: justify;">可选的，字符串。</span>可用于调试但不能访问符号本身的符号描述。</dd>

</dl>

## 描述

要创建一个新的基本 symbol，你可以使用一个可选的字符串作为其描述,写`Symbol()`.

<pre class="brush: js">var sym0 = Symbol();
var sym1 = Symbol("symbol1");
var sym2 = Symbol("symbol2");
var sym3 = Symbol("symbol2");
</pre>

上面的代码创建三个新的symbols。 注意，`Symbol("`symbol2`")` 不会强制字符串 “symbol2” 成为一个 symbol。它每次都会创建一个新的 symbol：

<pre class="brush: js">Symbol("symbol2") === Symbol("symbol2"); // false</pre>

下面使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new "new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是一些系统自带的带构造函数的对象。") 运算符的语法将会抛出一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 错误：

<pre class="brush: js">var sym = new Symbol(); // TypeError</pre>

这会阻止创建一个显式的 Symbol 包装器对象而不是一个 Symbol 值。围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。 然而，现有的原始包装器对象，如 `new Boolean、` `new String`以及<span style="font-family: consolas,monaco,andale mono,monospace;">new Number因为遗留原因仍可被创建。</span>

如果你真地想创建一个 Symbol 包装对象(`Symbol` wrapper object)，你可以使用 Object() 函数：

    var sym = Symbol("foo");
    typeof sym;     // "symbol" 
    var symObj = Object(sym);
    typeof symObj;  // "object"

### 全局共享的 Symbol

上面的语法使用`Symbol()` 函数 不会在你的整个代码库中创建一个可用的全局符号。 要创建跨文件可用的symbols，甚至跨域（每个都有它自己的全局作用域） , 使用这个方法[`Symbol.for()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for "Symbol.for(key) 方法会根据给定的键 key，来从 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入 symbol 注册表中。") 和 [`Symbol.keyFor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor "Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键。") 从全局symbol的注册处设置和取得symbols。

### 在对象中查找 Symbol 属性

方法[`Object.getOwnPropertySymbols()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "Object.getOwnPropertySymbols() 方法会返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键。") 让你在查找一个给定对象的符号属性时返回一个符号类型的数组。注意，每个初始化的对象都是没有自己的符号属性的，因此这个数组可能为空。除非你已经在对象上设置了符号属性。

## 属性

<dl>

<dt>`Symbol.length`</dt>

<dd>长度属性值为1。</dd>

<dt>Symbol.name<span title="This API has not been standardized."></span></dt>

<dd>仅Chrome/v8。返回符号描述。</dd>

<dt>[`Symbol.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/prototype "Technical review completed. Editorial review completed.")</dt>

<dd>描述符号构造函数的原型。</dd>

</dl>

### 众所周知的符号

除了你自己的符号，JavaScript还内建了一些在ECMAScript 5 之前没有暴露给开发者的符号，它们代表了内部语言行为。这些符号可以使用以下属性访问：

<dl>

<dt>

#### 迭代 symbols

</dt>

<dt>[`Symbol.iterator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator "Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环结构使用。")</dt>

<dd>一个返回一个对象默认迭代器的方法。使用 [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).</dd>

<dt>

#### 正则表达式 symbols

</dt>

<dt>[`Symbol.match`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match "Symbol.match 指定了匹配的是正则表达式而不是字符串。String.prototype.match() 方法会调用此函数。")</dt>

<dd>一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。使用 [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match "当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项。").</dd>

<dt>[`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>一个替换匹配字符串的子串的方法. 使用 [`String.prototype.replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace "replace() 方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的新的字符串。这个替换模式可以是一个字符串或者一个 RegExp，替换值可以是一个字符串或者一个函数。").</dd>

<dt>[`Symbol.search`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>一个返回一个字符串中与正则表达式相匹配的索引的方法。使用[`String.prototype.search()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search "search() 方法执行一个查找，看该字符串对象与一个正则表达式是否匹配。").</dd>

<dt>[`Symbol.split`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split "Symbol.split 指向  一个正则分割字符串的方法。 这个方法通过 String.prototype.split() 调用。")</dt>

<dd>一个在匹配正则表达式的索引处拆分一个字符串的方法.。使用 [`String.prototype.split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split "split() 方法通过把字符串分割成子字符串来把一个 String 对象分割成一个字符串数组。").</dd>

<dt>

#### 其他 symbols

</dt>

<dt>[`Symbol.hasInstance`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance "Symbol.hasInstance用于判断某对象是否某构造器的实例。 因此你可以用它自定义instanceof 操作符在某个类上的行为。")</dt>

<dd>一个确定一个构造器对象识别的对象是否为它的实例的方法。使用 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof "instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。").</dd>

<dt>[`Symbol.isConcatSpreadable`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable "内置的Symbol.isConcatSpreadable符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。")</dt>

<dd>一个布尔值，表明一个对象是否应该flattened为它的数组元素。使用[`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat "concat() 方法将传入的数组或非数组值与原数组合并,组成一个新的数组并返回.").</dd>

<dt>[`Symbol.unscopables`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。</dd>

<dt>[`Symbol.species`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>一个用于创建派生对象的构造器函数。.</dd>

<dt>[`Symbol.toPrimitive`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>一个将对象转化为基本数据类型的方法。</dd>

<dt>[`Symbol.toStringTag`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>用于对象的默认描述的字符串值。使用[`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。").</dd>

</dl>

## 方法

<dl>

<dt>[`Symbol.for(key)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for "Symbol.for(key) 方法会根据给定的键 key，来从 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入 symbol 注册表中。")</dt>

<dd>使用给定的key搜索现有符号，如果找到则返回符号。否则将得到一个新的使用给定的key在全局符号注册表中创建的符号。</dd>

<dt>[`Symbol.keyFor(sym)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor "Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键。")</dt>

<dd>为给定符号从全局符号注册表中检索一个共享符号键。</dd>

</dl>

## <font face="Consolas, Monaco, Andale Mono, monospace">Symbol 原型</font>

所有 Symbol 继承自 [`Symbol.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/prototype "Technical review completed. Editorial review completed.").

### 属性

<dl>

<dt>`Symbol.prototype.constructor`</dt>

<dd>返回创建实例原型的函数. 默认为 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "符号是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。符号对象是一个符号 原始数据类型的隐式对象包装器。") 函数。</dd>

</dl>

### 方法

<dl>

<dt>[`Symbol.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource "toSource() 方法返回代表该对象源码的字符串。")<span title="This API has not been standardized."></span></dt>

<dd>返回包含[`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "符号是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。符号对象是一个符号 原始数据类型的隐式对象包装器。") 对象源码的字符串。覆盖[`Object.prototype.toSource()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "返回一个对象源代码的字符串表示.") 方法。</dd>

<dt>[`Symbol.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString "toString() 方法返回当前 symbol 对象的字符串表示。")</dt>

<dd>返回包含Symbol描述符的字符串。 覆盖[`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString() 方法返回一个代表该对象的字符串。") 方法。</dd>

<dt>[`Symbol.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf "valueOf() 方法返回当前 symbol 对象所包含的 symbol 原始值。")</dt>

<dd>返回 [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "符号是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。符号对象是一个符号 原始数据类型的隐式对象包装器。") 对象的初始值.。覆盖 [`Object.prototype.valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf "The valueOf() method returns the primitive value of the specified object.") 方法。</dd>

<dt>[`Symbol.prototype[@@toPrimitive]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd> 返回[`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "符号是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。符号对象是一个符号 原始数据类型的隐式对象包装器。")对象的初始值。</dd>

</dl>

## 示例

### 对 symbol 使用 typeof 运算符

 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof "typeof操作符返回一个字符串,指示未经计算的操作数的类型。")运算符能帮助你识别（标识）symbol

    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'

### Symbol 类型转换

当使用 symbol 值进行类型转换时需要注意一些事情：

*   尝试将一个 symbol 值转换为一个 number 值时，会抛出一个 [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") 错误  (e.g. `+sym` or `sym | 0`).
*   使用宽松相等时， `Object(sym) == sym` returns `true.`
*   这会阻止你从一个 symbol 值隐式地创建一个新的 string 类型的属性名。例如，`Symbol("foo") + "bar" 将抛出一个` [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。") (can't convert symbol to string).
*   ["safer" `String(sym)` conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion) works like a call to [`Symbol.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString "toString() 方法返回当前 symbol 对象的字符串表示。") with symbols，但是注意 `new String(sym)` 将抛出异常。

### Symbols 与 for...in 迭代

Symbols 在 [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 迭代中不可枚举。另外，[`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames "Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。") 不会返回 symbol 对象的属性，但是你能使用 [`Object.getOwnPropertySymbols()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols "Object.getOwnPropertySymbols() 方法会返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键。") 得到它们。

    var obj = {};

    obj[Symbol("a")] = "a";
    obj[Symbol.for("b")] = "b";
    obj["c"] = "c";
    obj.d = "d";

    for (var i in obj) {
       console.log(i); // logs "c" and "d"
    }

### Symbols 与 JSON.stringify()

当使用 JSON.strIngify() 时以 symbol 值作为键的属性会被完全忽略：

    JSON.stringify({[Symbol("foo")]: "foo"});                 
    // '{}'

更多细节，请看 [`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串。若转换的函数被指定，则被序列化的值的每个属性都会经过该函数的转换和处理；若转换的数组被指定，只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。")。

### Symbol 包装器对象作为属性的键

当一个 Symbol 包装器对象作为一个属性的键时，这个对象将被强制转换为它的包装过的 symbol 值：

    var sym = Symbol("foo");
    var obj = {[sym]: 1};
    obj[sym];            // 1
    obj[Object(sym)];    // still 1

## 技术标准

<table class="standard-table" style="height: 143px; width: 640px;">

<tbody>

<tr>

<th scope="col">标准</th>

<th scope="col">状态</th>

<th scope="col">注释</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Symbol</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-objects)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>原始定义</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Symbol</small>](https://tc39.github.io/ecma262/#sec-symbol-objects)</td>

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

<td>38</td>

<td>[36.0](/en-US/Firefox/Releases/36 "Released on 2015-02-24.") (36.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.iterator (@@iterator)</td>

<td>38</td>

<td>[36.0](/en-US/Firefox/Releases/36 "Released on 2015-02-24.") (36.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.unscopables (@@unscopables)</td>

<td>38</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.match (@@match)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[40.0](/en-US/Firefox/Releases/40 "Released on 2015-08-11.") (40.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.species (@@species)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[41.0](/en-US/Firefox/Releases/41 "Released on 2015-09-22.") (41.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.toPrimitive (@@toPrimitive)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[44.0](/en-US/Firefox/Releases/44 "Released on 2016-01-26.") (44.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Other well-known symbols</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

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

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td>36.0 (36.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.iterator (@@iterator)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td>36.0 (36.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.unscopables (@@unscopables)</td>

<td><span style="color: #f00;">未实现</span></td>

<td>38</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>25</td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.match (@@match)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>40.0 (40.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.species (@@species)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>41.0 (41.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Symbol.toPrimitive (@@toPrimitive)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>44.0 (44.0)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

<tr>

<td>Other well-known symbols</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 参考文档

*   [Glossary: Symbol data type](/en-US/docs/Glossary/Symbol)
*   [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof "typeof操作符返回一个字符串,指示未经计算的操作数的类型。")
*   [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
*   ["ES6 In Depth: Symbols"（深入ES6 Symbols ） on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)