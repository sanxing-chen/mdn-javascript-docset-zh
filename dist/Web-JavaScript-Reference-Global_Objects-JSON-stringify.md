`**JSON.stringify()**` 方法将JavaScript值转换为JSON字符串，如果指定了replacer函数，则可以替换值，或者如果指定了replacer数组，则可选地仅包括指定的属性。

## 语法

    JSON.stringify(value[, replacer [, space]])

### 参数

<dl>

<dt>`value`</dt>

<dd>将要序列化成 JSON 字符串的值。</dd>

<dt>`replacer` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；</dd>

<dd>如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；</dd>

<dd>如果该参数为null或者未提供，则对象所有的属性都会被序列化；</dd>

<dd>关于该参数更详细的解释和示例，请参考[使用原生的 JSON 对象](/zh-CN/docs/Web/JavaScript/Guide/Using_native_JSON#The_replacer_parameter)一文。</dd>

<dt>`space` <span class="inlineIndicator optional optionalInline">可选</span></dt>

<dd>指定缩进用的空白字符串，用于美化输出（pretty-print）；</dd>

<dd>如果参数是个数字，它代表有多少的空格；上限为10。改值若小于1，则意味着没有空格；</dd>

<dd>如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；</dd>

<dd>如果该参数没有提供（或者为null）将没有空格。</dd>

<dt>

### 返回值 

一个表示给定值的JSON字符串。

</dt>

</dl>

## 描述

关于序列化，有下面五点注意事项：

*   非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
*   布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
*   `undefined、`任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。
*   所有以 symbol 为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
*   不可枚举的属性会被忽略

<pre class="brush: js">JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

JSON.stringify({[Symbol("foo")]: "foo"});                 
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
    {[Symbol.for("foo")]: "foo"}, 
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);

// undefined 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);

// "{"y":"y"}"
</pre>

### `replacer参数`

replacer参数可以是一个函数或者一个数组。作为函数，它有两个参数，键(key)值(value)都会被序列化。

*   如果返回一个 [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。"), 转换成相应的字符串被添加入JSON字符串。
*   如果返回一个 [`String`](/zh-CN/docs/Web/JavaScript/Reference/String "此页面仍未被本地化, 期待您的翻译!"), 该字符串作为属性值被添加入JSON。
*   如果返回一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean "此页面仍未被本地化, 期待您的翻译!"), "true" 或者 "false"被作为属性值被添加入JSON字符串。
*   如果返回任何其他对象，该对象递归地序列化成JSON字符串，对每个属性调用replaceer方法。除非该对象是一个函数，这种情况将不会被序列化成JSON字符串。
*   如果返回undefined，该属性值不会在JSON字符串中输出。

**注意:** 不能用replacer方法，从数组中移除值(values)，如若返回undefined或者一个函数，将会被null取代。

#### 例子(function)

    function replacer(key, value) {
      if (typeof value === "string") {
        return undefined;
      }
      return value;
    }

    var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
    var jsonString = JSON.stringify(foo, replacer);

JSON序列化结果为 `{"week":45,"month":7}`.

#### 例子(array)

`如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。`

    JSON.stringify(foo, ['week', 'month']);  
    // '{"week":45,"month":7}', 只保留“week”和“month”属性值。

### `space` 参数

space 参数用来控制结果字符串里面的间距。如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；如果是一个字符串，则每一级别会比上一级别多缩进用该字符串（或该字符串的前十个字符）。

<pre class="brush: js">JSON.stringify({ a: 2 }, null, " ");   // '{\n "a": 2\n}'</pre>

使用制表符（\t）来缩进：

<pre class="brush: js">JSON.stringify({ uno: 1, dos : 2 }, null, '\t')
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }' 
</pre>

### toJSON 方法

如果一个被序列化的对象拥有 `toJSON` 方法，那么该 `toJSON` 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 `toJSON` 方法后的返回值会被序列化，例如：

<pre class="brush: js">var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }
};
JSON.stringify(obj);      // `'"bar"'`
JSON.stringify({x: obj}); // `'{"x":"bar"}'`
</pre>

### `JSON.stringify`用作 JavaScript

注意JSON不是javascript严格意义上的子集，在JSON中不需要省略两条终线(Line separator和Paragraph separator)但在JavaScript中需要被省略。因此，如果JSON被用作JSONP时，下面方法可以使用：

    function jsFriendlyJSONStringify (s) {
        return JSON.stringify(s).
            replace(/\u2028/g, '\\u2028').
            replace(/\u2029/g, '\\u2029');
    }

    var s = {
        a: String.fromCharCode(0x2028),
        b: String.fromCharCode(0x2029)
    };
    try {
        eval('(' + JSON.stringify(s) + ')');
    } catch (e) {
        console.log(e); // "SyntaxError: unterminated string literal"
    }

    // No need for a catch
    eval('(' + jsFriendlyJSONStringify(s) + ')');

    // console.log in Firefox unescapes the Unicode if
    //   logged to console, so we use alert
    alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}

### 使用 JSON.stringify 结合 localStorage 的例子

一些时候，你想存储用户创建的一个对象，并且，即使在浏览器被关闭后仍能恢复该对象。下面的例子是 `JSON.stringify` 适用于这种情形的一个样板：

<pre class="brush: js">// 创建一个示例数据
var session = {
    'screens' : [],
    'state' : true
};
session.screens.push({"name":"screenA", "width":450, "height":250});
session.screens.push({"name":"screenB", "width":650, "height":350});
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// 使用 JSON.stringify 转换为 JSON 字符串
// 然后使用 localStorage 保存在 session 名称里
localStorage.setItem('session', JSON.stringify(session));

// 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
var restoredSession = JSON.parse(localStorage.getItem('session'));

// 现在 restoredSession 包含了保存在 localStorage 里的对象
console.log(restoredSession);
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范名称及链接</th>

<th scope="col">规范状态</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">JSON.stringify</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.12.3)</td>

<td><span class="spec-Standard">Standard</span></td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">JSON.stringify</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-json.stringify)</td>

<td><span class="spec-Standard">Standard</span></td>

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

<td>[3.5](/en-US/Firefox/Releases/3.5 "Released on 2009-06-30.") (1.9.1)</td>

<td>8.0</td>

<td>10.5</td>

<td>4.0</td>

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

<td>1.0 (1.0)</td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 相关链接

*   [使用原生的 JSON 对象](/zh-CN/docs/Web/JavaScript/Guide/Using_native_JSON)