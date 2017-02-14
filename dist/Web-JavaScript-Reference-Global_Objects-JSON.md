**`JSON `**对象包含用于解析 [JavaScript Object Notation](http://json.org/)  ([JSON](/en-US/docs/Glossary/JSON "JSON: The JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps, including websites and browser extensions.")) 的方法，并将值转换为JSON。这个对象本身不能被调用或者作为构造函数，除了它的两个方法属性，它没有本身没有什么有用的功能。

## 描述

### JavaScript对象注释

JSON 是一种用来序列化对象、数组、数值、字符串、布尔值和 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null "值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。") 的语法。它基于 JavaScript 语法，但是又有区别：一些 JavaScript 值不是 JSON，而某些 JSON 不是 JavaScript 值。<span style="line-height: 1.5;">参考 </span>[JSON: The JavaScript subset that isn't](http://timelessrepo.com/json-isnt-a-javascript-subset)。

<table><caption>JavaScript 与 JSON 的区别</caption>

<thead>

<tr>

<th scope="col">JavaScript类型</th>

<th scope="col">JSON与之区别</th>

</tr>

</thead>

<tbody>

<tr>

<td>对象和数组</td>

<td>属性名称必须用双引号包裹；最后一个属性后面不能有逗号。</td>

</tr>

<tr>

<td>数值</td>

<td>前导0不能使用（在 JSON.stringify 中将会被忽略，在 JSON.parse 会抛出错误）；小数点后面至少有一个数字。</td>

</tr>

<tr>

<td>字符串</td>

<td>

只有有限的字符能够被转义；不允许某些控制字符；但允许使用Unicode 行分隔符 ([U+2028](http://unicode-table.com/cn/2028/)) 和段落分隔符 ([U+2029](http://unicode-table.com/cn/2029/)) ; 字符串必须用双引号括起来。 在 Javascript 中,下面的示例中 [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。可以提供可选的reviver函数以在返回之前对所得到的对象执行变换。") 能够正常解析，但把它当作JavaScript解析时会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。") 错误:

<pre class="brush: js">var code = '"\u2028\u2029"';
JSON.parse(code); // works fine
eval(code); // fails
</pre>

</td>

</tr>

</tbody>

</table>

完整的JSON语法如下：

<pre><var>JSON</var> = **null**
    _or_ **true** _or_ **false**
    _or_ <var>JSONNumber</var>
    _or_ <var>JSONString</var>
    _or_ <var>JSONObject</var>
    _or_ <var>JSONArray</var>

<var>JSONNumber</var> = **-** <var>PositiveNumber</var>
          _or_ <var>PositiveNumber</var>
<var>PositiveNumber</var> = DecimalNumber
              or <var>DecimalNumber</var> **.** <var>Digits</var>
              or <var>DecimalNumber</var> **.** <var>Digits</var> <var>ExponentPart</var>
              or <var>DecimalNumber</var> <var>ExponentPart</var>
<var>DecimalNumber</var> = **0**
             _or_ <var>OneToNine</var> <var>Digits</var>
<var>ExponentPart</var> = **e** <var>Exponent</var>
            _or_ **E** <var>Exponent</var>
<var>Exponent</var> = <var>Digits</var>
        _or_ **+** <var>Digits</var>
        _or_ **-** <var>Digits</var>
<var>Digits</var> = <var>Digit</var>
      _or_ <var>Digits</var> <var>Digit</var>
<var>Digit</var> = **0** through **9**
<var>OneToNine</var> = **1** through **9**

<var>JSONString</var> = **""**
          _or_ **"** <var>StringCharacters</var> **"**
<var>StringCharacters</var> = <var>StringCharacter</var>
                _or_ <var>StringCharacters</var> <var>StringCharacter</var>
<var>StringCharacter</var> = any character
                  _except_ **"** _or_ **\** _or_ U+0000 through U+001F
               _or_ <var>EscapeSequence</var>
<var>EscapeSequence</var> = **\"** _or_ **\/** _or_ **\\** _or_ **\b** _or_ **\f** _or_ **\n** _or_ **\r** _or_ **\t**
              _or_ **\u** <var>HexDigit</var> <var>HexDigit</var> <var>HexDigit</var> <var>HexDigit</var>
<var>HexDigit</var> = **0** through **9**
        _or_ **A** through **F**
        _or_ **a** through **f**

<var>JSONObject</var> = **{** **}**
          _or_ **{** <var>Members</var> **}**
<var>Members</var> = <var>JSONString</var> **:** <var>JSON</var>
       _or_ <var>Members</var> **,** <var>JSONString</var> **:** <var>JSON</var>

<var>JSONArray</var> = **[** **]**
         _or_ **[** <var>ArrayElements</var> **]**
<var>ArrayElements</var> = <var>JSON</var>
             _or_ <var>ArrayElements</var> **,** <var>JSON</var>
</pre>

空白字符可以出现在任意位置，但是数值类型的数字中间不能有空白字符，字符串中间不能随意添加空白字符，因为添加的空白字符会被解释为相应的字符值，从而引起错误(译者注:因此在解析JSONString字符串常见的一个错误就是当要解析的JSONString中出现字符\f\n\r\t\v是会报错的,在解析出现上述字符的JSONString的时候请首先将其转化为其他编码格式如HTML-code编码格式(例如&#32; 不完全支持),或者干脆直接将上述字符去掉)。有效空白字符只包括制表符 (U+0009)、回车符 (U+000D)、换行符 (U+000A) 和空格 (U+0020) 。

## 方法

<dl>

<dt>[`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse "JSON.parse() 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。可以提供可选的reviver函数以在返回之前对所得到的对象执行变换。")</dt>

<dd>解析JSON字符串, 可以选择改变前面解析后的值及其属性，然后返回解析的值。</dd>

<dt>[`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 符合JSON语法的 字符串。若转换的函数被指定，则被序列化的值的每个属性都会经过该函数的转换和处理；若转换的数组被指定，只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。")</dt>

<dd>返回指定值的 JSON 字符串，可以自定义只包含某些特定的属性或替换属性值。</dd>

</dl>

## Polyfill

`JSON` 对象不被旧版本浏览器支持。你可以把下面代码放到脚本的开始位置，这样就可以在那些没有原生支持 JSON 对象的浏览器（比如IE6）中使用 JSON 对象。

下面的算法用来模拟原生 JSON 对象：

<pre class="brush: js">if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}
</pre>

关于 `JSON` 对象更复杂且有名的 [polyfills](http://remysharp.com/2010/10/08/what-is-a-polyfill/ "http://remysharp.com/2010/10/08/what-is-a-polyfill/") 是 [JSON2](https://github.com/douglascrockford/JSON-js "https://github.com/douglascrockford/JSON-js") 和 [JSON3](http://bestiejs.github.com/json3 "http://bestiejs.github.com/json3")。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">说明</th>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">JSON</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.12)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">JSON</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-json-object)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">JSON</small>](https://tc39.github.io/ecma262/#sec-json-object)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

*   [`Date.prototype.toJSON()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON "toJSON() 方法返回 Date 对象的字符串形式。")