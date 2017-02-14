本附录列出了那些已经被废弃的(仍然可用,但未来会被删除)或者已经过时的(已经被删除,不能再用了)JavaScript特性.

## 废弃特性

这些废弃的特性仍然可以使用,但你要保持谨慎,因为它们很可能会在未来的某个时候被删除.

### RegExp全局对象的属性

下面的这些属性已经被废弃.注意,这和[替换字符串](/en-US/docs/JavaScript/Reference/Global_Objects/String/replace "/en-US/docs/JavaScript/Reference/Global_Objects/String/replace")中使用的同名标记没有直接关系.

<table class="standard-table">

<tbody>

<tr>

<th>属性</th>

<th>描述</th>

</tr>

<tr>

<td>`$1, ..., $9`</td>

<td>

上次任意正则表达式的匹配操作中对应捕获分组的匹配结果.

</td>

</tr>

<tr>

<td>`$_`</td>

<td>`input属性别名`.</td>

</tr>

<tr>

<td>`$*`</td>

<td>`multiline``属性别名`.</td>

</tr>

<tr>

<td>`><`</td>

<td>`lastMatch``属性别名`.</td>

</tr>

<tr>

<td>`$+`</td>

<td>`lastParen``属性别名`.</td>

</tr>

<tr>

<td>`<td`</td>

<td>`leftContext``属性别名`.</td>

</tr>

<tr>

<td>`/td>`</td>

<td>`rightContext``属性别名`.</td>

</tr>

<tr>

<td>`input`</td>

<td>上次任意正则表达式匹配的目标字符串.</td>

</tr>

<tr>

<td>`lastMatch`</td>

<td>上次任意正则表达式成功匹配的子字符串.</td>

</tr>

<tr>

<td>`lastParen`</td>

<td>上次任意正则表达式的匹配操作中最后一个捕获分组的匹配结果.</td>

</tr>

<tr>

<td>`leftContext`</td>

<td>上次任意正则表达式成功匹配的子字符串左边的字符串</td>

</tr>

<tr>

<td>`rightContext`</td>

<td>

<table class="standard-table">

<tbody>

<tr>

<td>上次任意正则表达式成功匹配的子字符串右边的字符串</td>

</tr>

</tbody>

</table>

</td>

</tr>

</tbody>

</table>

应该使用下面这些正则实例上的同名属性来代替:

<table class="standard-table">

<tbody>

<tr>

<th>属性</th>

<th>描述</th>

</tr>

<tr>

<td>`global`</td>

<td>该正则是否开启了全局匹配模式.</td>

</tr>

<tr>

<td>`ignoreCase`</td>

<td>该正则是否开启了忽略大小写模式.</td>

</tr>

<tr>

<td>`lastIndex`</td>

<td>上次成功匹配后的索引位置,会成为下次匹配的开始索引位置,只在全局匹配或粘滞匹配模式下可用.</td>

</tr>

<tr>

<td>`multiline`</td>

<td>该正则是否开启了多行模式.</td>

</tr>

<tr>

<td>`source`</td>

<td>正则的源码</td>

</tr>

</tbody>

</table>

### RegExp全局对象的方法

`compile`方法已经被废弃.

`valueOf`方法已经被废弃.使用`Object.valueOf来替代`.

### 函数对象的属性

`caller`和`arguments属性已经废弃`,因为它们会泄漏函数调用者.你应该在函数内部使用`arguments`对象来代替`函数的arguments`属性.

### Date方法

`getYear`和`setYear方法`因为会受千年虫问题的影响,所以已经被`getFullYear和``setFullYear`方法替代.同时你还应该用`toISOString`方法来代替已经废弃的`toGMTString方法`.

### 转义序列

八进制转义序列(反斜杠\后跟一位,两位,或三位的八进制数字)出现在字符串字面量和正则字面量中的的用法已经废弃.

`escape函数`和`unescape函数已经废弃`,请使用`encodeURI`,`encodeURIComponent`,`decodeURI`或者`decodeURIComponent`来进行给定字符串的编码和解码工作.

## 过时特性

这些过时的特性已经完全被删除,不能在当前版本或者未来版本的JavaScript中使用了.

### 对象

<table class="standard-table">

<tbody>

<tr>

<th>属性</th>

<th>描述</th>

</tr>

<tr>

<td>`__count__`</td>

<td>返回用户自定义对象上的可枚举自身属性的个数.</td>

</tr>

<tr>

<td>`__parent__`</td>

<td>指向一个对象的上下文.</td>

</tr>

</tbody>

</table>

<table class="standard-table">

<tbody>

<tr>

<th>方法</th>

<th>描述</th>

</tr>

<tr>

<td>`eval`</td>

<td>在指定对象的上下文上,将一个包含JavaScript代码的字符串求值.</td>

</tr>

</tbody>

</table>

### 函数

<table class="standard-table">

<tbody>

<tr>

<th>属性</th>

<th>描述</th>

</tr>

<tr>

<td>`arity`</td>

<td>形参的数量</td>

</tr>

</tbody>

</table>