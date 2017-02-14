## 信息

<pre class="syntaxbox">SyntaxError: missing ] after element list
</pre>

## 错误类型

[`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。").

## 哪里出错了?

数组初始化在某处出现了语法错误。比如缺少了右中括号("`]`") 或一个逗号 ("`,`")。

## 示例

### 不正确的数组初始化

<pre class="brush: js example-bad">var list = [1, 2,

var instruments = [
  "Ukulele",
  "Guitar",
  "Piano"
};

var data = [{foo: "bar"} {bar: "foo"}];
</pre>

正确的是：

<pre class="brush: js example-good">var list = [1, 2];

var instruments = [
 "Ukulele",
 "Guitar",
 "Piano"
]; 

var data = [{foo: "bar"}, {bar: "foo"}];</pre>

## 相关

*   [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Array "此页面仍未被本地化, 期待您的翻译!")