**throw** 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 [`catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。

## 语法

<pre class="syntaxbox">throw _expression_; </pre>

<dl>

<dt>`expression`</dt>

<dd>要抛出的表达式。</dd>

</dl>

## 描述

使用throw语句来抛出一个异常。当你抛出异常时，expression 指定了异常的内容。下面的每行都抛出了一个异常：

<pre class="brush: js">throw "Error2"; // 抛出了一个值为字符串的异常
throw 42;       // 抛出了一个值为整数42的异常
throw true;     // 抛出了一个值为true的异常</pre>

注意throw语句同样受到 [自动分号插入 (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) 机制的控制，在关键字和值之间不允许有行终止符。

## 示例

### 抛出一个对象

你可以在抛出异常时指定一个对象。在catch语句中，你可以查阅对象的属性并检查状态。下面的示例创建了一个类型为 UserException 的异常对象 myUserException，并在 throw 语句中使用。

<pre class="brush: js">function UserException(message) {
   this.message = message;
   this.name = "UserException";
}
function getMonthName(mo) {
   mo = mo-1; // 调整月份数字到数组索引 (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("InvalidMonthNo");
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 超出边界并引发异常
   var monthName = getMonthName(myMonth);
} catch (e) {
   var monthName = "unknown";
   console.log(e.message, e.name); // 传递异常对象到错误处理
}
</pre>

### 另一个抛出异常对象的示例

下面的示例中测试一个字符串是否是美国邮政编码。如果邮政编码是无效的，那么 throw 语句将会抛出一个类型为 ZipCodeFormatException 的异常对象实例。

<pre class="brush: js">/*
 * 创建 ZipCode 示例.
 *
 * 可被接受的邮政编码格式:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * 如果构造函数参数传入的格式不符合以上任何一个格式，将会抛出异常。
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipCodeFormatException(zip);
   }
}

function ZipCodeFormatException(value) {
   this.value = value;
   this.message = "不是正确的邮政编码";
   this.toString = function() {
      return this.value + this.message
   };
}

/*
 * 这可能是一个验证美国地区中的脚本
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipCodeFormatException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = verifyZipCode(95060);         // 返回 95060
b = verifyZipCode(9560);          // 返回 -1
c = verifyZipCode("a");           // 返回 -1
d = verifyZipCode("95060");       // 返回 95060
e = verifyZipCode("95060 1234");  // 返回 95060 1234
</pre>

### 重新抛出异常

你可以在捕捉异常后重新抛出异常。下面的例子捕捉了一个异常值为数字的异常，并在其值大于50后重新抛出异常。重新抛出的异常将会向上冒泡到闭包的函数调用直到最顶层被用户看到。

<pre class="brush: js">try {
   throw n; // 抛出一个数值异常
} catch (e) {
   if (e <= 50) {
      // 异常在 1-50 之间时，直接处理
   } else {
      // 异常无法处理，重新抛出
      throw e;
   }
}
</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">备注</th>

</tr>

<tr>

<td>ECMAScript 3rd Edition</td>

<td>标准</td>

<td>最初定义.  
在 JavaScript 1.4 中实现</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">throw statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.13)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">throw statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-throw-statement)</td>

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

<th>功能</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基本支持</td>

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

<th>功能</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基本支持</td>

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

## 参见

*   [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)