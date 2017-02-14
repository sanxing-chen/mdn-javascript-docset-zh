<div class="onlyinclude">

本章列出了所有 JavaScript 内置对象，包括它们的方法和属性。

这里的”全局对象（global objects）（或者标准内置对象）“指的是_在全局范围（global scope）中的对象_（仅当未使用 ECMAScript 5 严格模式时！否则只会得到[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")）。_全局对象_本身可通过 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this "与其他语言相比，函数的 this 关键字在JavaScript中的行为略有不同。它在严格模式和非严格模式之间也有一些区别。") 操作符在全局范围中获得。实际上，全局范围就是由全局对象的各个属性组成的（包括继承来的属性）。

在全局范围中的其他对象，要么是[用户自己创建的](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects)，要么是宿主应用提供的。宿主应用提供的全局对象，将在 [API 参考](/zh-CN/docs/Web/API)中列出。要想了解更多关于 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 和 [JavaScript](/zh-CN/docs/Web/JavaScript) 之间的区别，请参考 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)。

## 按类别标准对象

### 值属性

表示一个简单的值的全局属性。

*   [`Infinity`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity "全局属性 Infinity 是一个数值，表示无穷大。")
*   [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN "全局属性 NaN 表示 Not-A-Number 的值。")
*   [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined "undefined有多重角色,通常情况下,我们所说的undefined都指的是全局对象的一个属性"undefined".")
*   [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") literal

### 函数属性

执行特定功能并返回结果的全局方法。

*   [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval "将一个JavaScript代码字符串求值成特定的对象。")
*   [`uneval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/uneval "uneval() 函数创建一个代表对象的源代码的字符串。")<span title="This API has not been standardized."></span>
*   [`isFinite()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite "该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。")
*   [`isNaN()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN "isNaN() 函数用来判断一个值是否为 NaN。注：isNaN函数包含一些非常有意思的强制转换规则；你也可以通过 ECMAScript 6 中定义的 Number.isNaN() 或者 typeof 来判断一个值是否为非数值。")
*   [`parseFloat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat "parseFloat()方法将参数中指定的字符串解析成为一个浮点数字并返回.")
*   [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt "概述")
*   [`decodeURI()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI "decodeURI() 方法用于解码由 encodeURI 方法或者其它类似方法编码的统一资源标识符（URI）")
*   [`decodeURIComponent()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent "decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。")
*   [`encodeURI()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI "encodeURI() 是对统一资源标识符（URI）进行编码的方法。它使用1到4个转义序列来表示每个字符的UTF-8编码（只有由两个代理字符区组成的字符才用四个转义字符编码）。")
*   [`encodeURIComponent()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码（只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。")
*   [`escape()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape "废弃的 escape() 方法生成新的由十六进制转义序列替换的字符串. 使用 encodeURI 或 encodeURIComponent 代替.")<span title="This deprecated API should no longer be used, but will probably still work."></span>
*   [`unescape()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape "已废弃的 unescape() 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像escape里介绍的一样。因为 unescape 已经废弃，建议使用 decodeURI()或者decodeURIComponent 替代本方法。")<span title="This deprecated API should no longer be used, but will probably still work."></span>

### 基本对象

基础的语言对象、方法对象和错误对象。

*   [`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object "Object 构造函数创建一个对象包装（object wrapper）。")
*   [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Function "此页面仍未被本地化, 期待您的翻译!")
*   [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!")
*   [`Symbol`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol "Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。")
*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`EvalError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError "本对象代表了一个关于 eval 函数的错误.")
*   [`InternalError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/InternalError "InternalError 对象表示出现在JavaScript引擎内部的错误。 例如： "InternalError: too much recursion"（内部错误：递归过深）。")
*   [`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。")
*   [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。")
*   [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。")
*   [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")
*   [`URIError`](/zh-CN/docs/Web/JavaScript/Reference/URIError "此页面仍未被本地化, 期待您的翻译!")

### 数字和日期

用于处理数字、日期和数学运算的对象。

*   [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。")
*   [`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math "Math 是一个内置对象， 为数学常量和数学函数提供了属性和方法，而不是一个函数对象。")
*   [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Date "此页面仍未被本地化, 期待您的翻译!")

### 文本处理

用于处理文本的对象。

*   [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!")
*   [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/RegExp "此页面仍未被本地化, 期待您的翻译!")

### 索引集合

根据索引来排列的集合，类似于数组的对象。

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Int8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "Int8Array 类型数组为8位二进制补码有符号整数的数组. 初始化内容为0\. 你可以使用构造对象来初始化一个Int8Array对象, 也可以使用标准的数组语法 (大括号语法初始化).")
*   [`Uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "Uint8Array 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。")
*   [`Uint8ClampedArray`](/zh-CN/docs/Web/JavaScript/Reference/Uint8ClampedArray "此页面仍未被本地化, 期待您的翻译!")
*   [`Int16Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
*   [`Uint16Array`](/zh-CN/docs/Web/JavaScript/Reference/Uint16Array "此页面仍未被本地化, 期待您的翻译!")
*   [`Int32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
*   [`Uint32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "Uint32Array表示一个由基于平台字节序的32位无符号字节组成的数组.如果需要对字节顺序进行控制(译者注:即 littleEndian 或 bigEndian),请使用DataView代替.数组中每个元素的初始值都是0.一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。")
*   [`Float32Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array "Float32Array 类型数组代表的是平台字节顺序为32位的浮点数型数组(对应于 C 浮点数据类型) 。 如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。")
*   [`Float64Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array "Float64Array 类型数组代表的是平台字节顺序为64位的浮点数型数组(对应于 C 浮点数据类型) 。 如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。")

### 键控集合

根据键来保存对象的集合，遍历时会根据放入的顺序。

*   [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map "此页面仍未被本地化, 期待您的翻译!")
*   [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set "集合（Set）对象允许你存储任意类型的唯一值（不能重复），无论它是原始值或者是对象引用。")
*   [`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/WeakMap "此页面仍未被本地化, 期待您的翻译!")
*   [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet "一个 WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用.")

### 矢量集合

[SIMD](/en-US/docs/Glossary/SIMD "SIMD: SIMD (pronounced "seem-dee") is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD allows one same operation to be performed on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.") 矢量数据类型可以把数据整合到一个序列中。

*   [`SIMD`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SIMD "SIMD (pronounced "sim-dee") is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Float32x4`](/zh-CN/docs/Web/JavaScript/Reference/Float32x4 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Float64x2`](/zh-CN/docs/Web/JavaScript/Reference/Float64x2 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Int8x16`](/zh-CN/docs/Web/JavaScript/Reference/Int8x16 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Int16x8`](/zh-CN/docs/Web/JavaScript/Reference/Int16x8 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Int32x4`](/zh-CN/docs/Web/JavaScript/Reference/Int32x4 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Uint8x16`](/zh-CN/docs/Web/JavaScript/Reference/Uint8x16 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Uint16x8`](/zh-CN/docs/Web/JavaScript/Reference/Uint16x8 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Uint32x4`](/zh-CN/docs/Web/JavaScript/Reference/Uint32x4 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Bool8x16`](/zh-CN/docs/Web/JavaScript/Reference/Bool8x16 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Bool16x8`](/zh-CN/docs/Web/JavaScript/Reference/Bool16x8 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Bool32x4`](/zh-CN/docs/Web/JavaScript/Reference/Bool32x4 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`SIMD.Bool64x2`](/zh-CN/docs/Web/JavaScript/Reference/Bool64x2 "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>

### 结构化数据

这种数据类型可以用来表示结构化数据缓存（structured data buffers）或者JSON数据，并允许与其进行交互。

*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "一个新的拥有指定大小的ArrayBuffer对象。它的内容都被初始化为0。")
*   [`SharedArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/SharedArrayBuffer "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`Atomics`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics "Atomics 对象以静态方法的形式提供原子操作。这些操作使用“ SharedArrayBuffer”对象。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>
*   [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView "DataView视图提供了一个与平台中字节在内存中的排列顺序(字节序)无关的从ArrayBuffer读写多数字类型的底层接口.")
*   [`JSON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON "JSON 对象包含了两个方法，一是解析 JavaScript Object Notation (JSON)，二是将值转换为 JSON。这个对象本身不能被调用或者作为构造函数，除了它的这两个方法属性外 JSON 对象本身并没有什么有用的功能。")

### 控制抽象对象

*   [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise 对象用于异步计算. 一个Promise对象代表一个值, 该值可以在当前或未来可用, 或永远不可用.")
*   [`Generator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator "这个生成器对象是由一个生成器函数 generator function 返回的。并且它是同时遵守 The iterable protocol 可遍历协议和The iterator protocol 迭代器模式协议 .")
*   [`GeneratorFunction`](/zh-CN/docs/Web/JavaScript/Reference/GeneratorFunction "此页面仍未被本地化, 期待您的翻译!")
*   [`AsyncFunction`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction "AsyncFunction 构造函数 实例化一个 async function 对象. 在 JavaScript 中每个异步函数实例上都是 AsyncFunction对象.") <span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>

### 反射

*   [`Reflect`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect "Reflect 对象提供了若干个能对任意对象进行某种特定的可拦截操作（interceptable operation）的方法。")
*   [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy "此页面仍未被本地化, 期待您的翻译!")

### 国际化

ECMA脚本的多语言附加组件。

*   [`Intl`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。")
*   [`Intl.Collator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator "此页面仍未被本地化, 期待您的翻译!")
*   [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat "DateTimeFormat实例集成以下原型的属性:")
*   [`Intl.NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat "Intl.NumberFormat是对语言敏感的格式化数字类的构造器类")

### 非标准对象

*   [`Iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iterator "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span>
*   [`ParallelArray`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ParallelArray "ParallelArray的目标是在web应用程序中让数据并行.")<span title="This API has not been standardized."></span>
*   [`StopIteration`](/zh-CN/docs/Web/JavaScript/Reference/StopIteration "此页面仍未被本地化, 期待您的翻译!")<span title="This API has not been standardized."></span>

### 其他

*   `[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)`

</div>