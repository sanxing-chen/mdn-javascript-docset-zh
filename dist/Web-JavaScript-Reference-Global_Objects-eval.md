## 摘要

将一个JavaScript代码字符串求值成特定的对象。

## 语法

    eval(string)

### 参数

<dl>

<dt>`string`</dt>

<dd>一个字符串表示了一个JavaScript表达式，声明， 或声明的序列。表达式可以包括变量和已存在对象的属性。</dd>

<dt>`object`</dt>

<dd><span title="This API has not been standardized."></span></dd>

<dd>An optional argument; if specified, the evaluation is restricted to the context of the specified object.</dd>

</dl>

## 描述

`eval()`是一个顶级函数并且跟任何对象无关。

`eval()`的参数是一个字符串。如果字符串表示了一个表达式，<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>会对表达式求值。如果参数表示了一个或多个JavaScript声明， 那么<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>会执行声明。不要调用<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>来为算数表达式求值； JavaScript 会自动为算数表达式求值。

如果要将算数表达式构造成为一个字符串，你可以用<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>在随后对其求值。比如，你有一个变量 x ，你可以通过一个字符串表达式来对涉及x的表达式延迟求值，将 "`3 * x + 2`"，当作变量，通过在脚本中调用<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>，随后求值。

`<font face="Open Sans, Arial, sans-serif">如果参数不是字符串，</font>`<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>`将会将参数原封不动的返回。`在下面的例子中，字符串构造器是指定的，<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>返回了字符串对象而不是对字符串求值。

<pre class="brush: js">eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象
eval("2 + 2");             // returns 4
</pre>

你可以使用变通的方法来应对这个限制，如使用`toString()`

<pre class="brush: js">var expression = new String("2 + 2");
eval(expression.toString());
</pre>

你可以间接的使用 <span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>, 如使用变量来引用 `eval()`，然后调用它。 如果你这么做了，那么这个时候目标字符串中的 javascript 代码将被直接视为在全局作用域下执行, 这是因为 ES 规范里明确规定了对 eval 的 直接调用和间接调用会被区别对待。因此, 下面的例子中便出现了 x 未定义 的状况:

<pre class="brush: js">function test() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // 直接调用，使用本地作用域，结果是 6
  var geval = eval;
  console.log(geval("x + y")); // 间接调用，使用全局作用域，throws ReferenceError 因为`x`未定义
}</pre>

## 避免在不必要的情况下使用eval

`eval()` 是一个危险的函数， 它可以像拥有调用者的权力一样调用代码。如果你使用了字符串来运行<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>，那么你的代码可能被恶意方（不怀好意的人）影响, 通过在使用方的机器上使用恶意代码，可能让你失去在网页或者扩展程序上的权限。

常规用例的安全会被<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>改变。

### 解析 JSON

[在扩展中下载JSON和JavaScript](/zh-CN/docs/Downloading_JSON_and_JavaScript_in_extensions)

#### 转化成员属性

你不应该在属性里通过eval来转化属性。考虑下面的例子： `getFieldName(n)` 函数将指定的表单元素按字符串返回， 将表单的第三个元素赋值给了一个变量声明 field ，第二句声明使用<span style="font-family: consolas,monaco,andale mono,monospace;">eval()</span>来展示表单元素的值。

<pre class="brush: js">var field = getFieldName(3);
document.write("The field named ", field, " has value of ",
   eval(field + ".value"));
</pre>

也许，这里的<span style="font-family: consolas,monaco,andale mono,monospace;">eval()不是必要的，</span>事实上，这里使用<span style="font-family: consolas,monaco,andale mono,monospace;">eval()是不鼓励的。</span> 取而代之的是使用 [member operators](cn/Core_JavaScript_1.5_Reference/Operators/Member_Operators), 那会快很多:

<pre class="brush: js">var field = getFieldName(3);
document.write("The field named ", field, " has value of ",
   field[value]);
</pre>

### Cross-implementation compatibility

应该被注意的是，eval的第二个参数是非标准的，在JavaScript实现中不被支持的；在写这篇文章的时候，[Rhino](cn/Rhino)没有提供支持，也不是 Safari's 的核心JavaScript代码。

为了维持兼容性，采用交叉实现，它被推荐第二个参数不被使用，为了达到相同的效果，不如使用 with 声明 。

<pre class="brush: js">eval(_string_,_object_);
</pre>

使用

<pre class="brush: js">with (_object_) {
  eval(_string_);
}
</pre>

## 例子

下面的例子展示了使用 `document.write来输出。`在服务器端的 JavaScript，你可以使用write 函数来达到document.write的效果。

#### 举例: 使用 `eval`

在下面的代码中，两种声明都返回了42。第一种是对字符串 "`x + y + 1`"求值；第二种是对字符串 "`42`"求值。

<pre class="brush: js">var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z);           // returns 42 
</pre>

#### 举例: 使用 `eval` 对JavaScript声明求值

下面的例子使用`eval()` 对str字符串求值。这个字符串包含了JavaScript声明，如果x等于5，就打开一个Alert 对话框，然后对 z 赋值。 否则就对z赋值0。 当第二个声明被执行， `eval 将会将str表达式执行，然后会对声明集合求值，并将返回值赋值给z。`

<pre class="brush: js">var str = "if (x == 5) {alert('z is 42'); z = 42;} else z = 0; ";
document.write("<P>z is ", eval(str));
</pre>

### 返回值

`eval` 将会返回对最后一个表达式的求值结果。

<pre class="brush: js">var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str);  // returns 2 
alert("b is : " + b);
a = false;
b = eval(str);  // returns 3
alert("b is : " + b);
</pre>

## See also

*   [member operators](cn/Core_JavaScript_1.5_Reference/Operators/Member_Operators)