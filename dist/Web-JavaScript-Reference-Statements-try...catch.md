 **`try...catch语句`**`将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。`

## 语法

<pre class="syntaxbox">try {
   _try_statements_
}
[catch (_exception_var_1_ if _condition_1_) { // non-standard
   _catch_statements_1_
}]
...
[catch (_exception_var_2_) {
   _catch_statements_2_
}]
[finally {
   _finally_statements_
}]
</pre>

<dl>

<dt>`try_statements`</dt>

<dd>需要被执行的语句。</dd>

</dl>

<dl>

<dt>`catch_statements_1`, `catch_statements_2`</dt>

<dd>如果在try块里有异常被抛出时执行的语句。</dd>

</dl>

<dl>

<dt>`exception_var_1`, `exception_var_2`</dt>

<dd>一个用来保存抛出对象的变量根据相关catch子句。</dd>

</dl>

<dl>

<dt>`condition_1`</dt>

<dd>一个条件表达式。</dd>

</dl>

<dl>

<dt>`finally_statements`</dt>

<dd>在try语句块之后执行的语句块.无论是否有异常抛出或捕获这些语句都将执行.</dd>

</dl>

## 描述

try语句包含了由一个或者多个语句组成的try块, 和至少一个catch子句或者一个finally子句的其中一个，或者两个兼有， 下面是三种形式的try声明:

1.  `try...catch`
2.  `try...finally`
3.  `try...catch...finally`

catch语句中包含要执行的语句，当try语句中抛出错误时。也就是，你想让try语句中的内容成功， 如果没成功，你想控制接下来发生的事情，这时你可以在catch语句中实现。 如果有在try块中有任何一个语句（或者从try块中调用的函数）抛出异常, 控制立即转向catch子句。 如果在try块中没有异常抛出，这catch子句将会跳过。

finally子句在try块和catch块之后执行但是在下一个try声明之前执行. 无论是否有异常抛出或着是否被捕获它总是执行。

你可以嵌套一个或者更多的try语句。 如果内部的try语句没有catch子句，那么将会进入包围它的try语句的catch子句。

你也可以用try语句去处理javascript异常. 参考 [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide "en/JavaScript/Guide") 了解更多关于Javascript异常的信息。

### 无条件的catch子句

当单个的无条件的catch 子句被使用时, 当有异常抛出时则将会进入catch块执行语句. 例如, 当下面的代码发生异常时，控制将会转向catch子句。

<pre class="brush: js">try {
   throw "myException"; // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   logMyErrors(e); // pass exception object to error handler
}
</pre>

### 条件catch子句

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

你也可以用一个或者更多条件catch子句来处理特定的异常。在这种情况下，当异常抛出时将会进入合适的catch子句中。 在下面的代码中，try块的代码可能会抛出三种异常： [`TypeError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。")， [`RangeError`](/zh-CN/docs/Web/JavaScript/Reference/RangeError "此页面仍未被本地化, 期待您的翻译!")， 和[`EvalError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError "本对象代表了一个关于 eval 函数的错误.")。当一个异常抛出时，控制将会进入与其对应的catch语句。如果这个异常不是特定的，那么控制将转移到非条件catch子句。

当用一个非条件catch子句和一个或多个条件语句时，非条件catch子句必须放在最后。否则当到达条件语句之前所有的异常将会被非条件语句拦截。

提醒：这个功能不符合ECMAscript规范。

<pre class="brush: js">try {
    myroutine(); // may throw three types of exceptions
} catch (e if e instanceof TypeError) {
    // statements to handle TypeError exceptions
} catch (e if e instanceof RangeError) {
    // statements to handle RangeError exceptions
} catch (e if e instanceof EvalError) {
    // statements to handle EvalError exceptions
} catch (e) {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
}
</pre>

下面用符合ECMAscript规范的简单的JavaScript来编写相同的“条件catch子句”（显然更加<span class="s1">冗长的</span>，但是可以在任何地方运行）：

<pre class="brush: js">try {
    myroutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
       // statements to handle any unspecified exceptions
       logMyErrors(e); // pass exception object to error handler
    }
}
</pre>

### 异常标识符

当try块中的抛出一个异常时， _`exception_var`_ (e.g. the `e` in `catch (e)`) 用来保存被抛出声明指定的值。 你可以用这个标识符来获取关于被抛出异常的信息。

这个标识符是catch子语句内部的。 换言之, 当进入catch子语句时标识符创建，catch子语句执行完毕后，这个表示符将不再可用。

### finally从句

finally子句在try块和catch块之后执行但是在一个try声明之前执行. 无论是否有异常抛出它总是执行。 如果有异常抛出finally子句将会被执行，这个声明即使没有catch子句处理异常。

你可以用finally子句使你的脚本结束地更加优雅。 例如,  你可能需要释放你的脚本已经用过的资源。下面的示例打开一个文件然后执行使用文件的语句（服务器端的javaScript允许你访问文件）。如果当文件打开时有一个异常抛出, finally子句关闭文件在脚本结束之前。

<pre class="brush: js">openMyFile()
try {
   // tie up a resource
   writeMyFile(theData);
}
finally {
   closeMyFile(); // always close the resource
}
</pre>

## 例子

### 嵌套 try-blocks

首先让我们看看这里发生什么：

<pre class="brush: js">try {
  try {
    throw new Error("oops");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"
</pre>

现在，如果我们已经捕获异常通过增加一个catch语句块

<pre class="brush: js">try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
</pre>

现在，让我们再次抛出错误。

<pre class="brush: js">try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
</pre>

任何给定的异常只会被离它最近的封闭catch块捕获一次。当然，在“内部”块抛出的任何新异常 （因为catch块里的代码也可以抛出异常），将会被“外部”块所捕获。

### 从finally语句块返回

如果从finally块中返回一个值，那么这个值将会成为整个<span style="font-family: consolas,monaco,andale mono,monospace;">try-catch-finally的返回值，无论是否有return语句在try和catch中。这包括在catch块里抛出的异常。</span>

<pre class="brush: js">try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
</pre>

因为finally块里的return语句，外部的“oops”异常没有抛出。从catch块返回的值同样适用。

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>ECMAScript 3rd Edition</td>

<td>Standard</td>

<td>Initial definition.  
Implemented in JavaScript 1.4</td>

</tr>

<tr>

<td>[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">try statement</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-12.14)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">try statement</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-try-statement)</td>

<td><span class="spec-Standard">Standard</span></td>

<td> </td>

</tr>

</tbody>

</table>

Not part of an ECMA-262 standard: Multiple catch clauses and conditional clauses (SpiderMonkey extension, JavaScript 1.5).

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Conditional clauses  
(non-standard)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

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

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

<tr>

<td>Conditional clauses  
(non-standard)</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。")
*   [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw "throw 语句用来抛出用户自定义异常。当前函数的执行将会被中止（throw之后的语句将会得不到执行），接着执行流程会转移到第一个 catch 语句块。如果在调用方函数中没有任何catch语句块，那么程序将会被中止。")