## 信息

<pre class="syntaxbox">Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)
</pre>

## 错误类型

仅在严格模式下出现的 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError（引用错误） 对象表明一个不存在的变量被引用。") 警告。<span lang="zh-CN" class="short_text" id="result_box"><span>JavaScript 的执行将不会停止。</span></span>

## 发生了什么?

在 [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 中，[`Function.caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "返回调用指定函数的函数.") 和 [`Function.arguments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments "function.arguments 属性代表传入函数的实参，它是一个类数组对象。") 属性是不该使用的。它们都是已经被废弃的了，因为这两者泄露了函数的调用者，是不标准的，难于优化和有这潜在的性能问题。

## 实力

### 废弃的 `function.caller` or `arguments.callee.caller`

[`Function.caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "返回调用指定函数的函数.") 和 `[arguments.callee.caller](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)` 都是已废弃的 (详见参考文章)。

<pre class="brush: js example-bad">"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"</pre>

### `Function.arguments`

[`Function.arguments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments "function.arguments 属性代表传入函数的实参，它是一个类数组对象。") 已被废弃。 (详见参考文章)。

<pre class="brush: js example-bad">"use strict";

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
</pre>

## 相关

*   [Deprecated and obsolete features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
*   [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
*   [`Function.arguments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments "function.arguments 属性代表传入函数的实参，它是一个类数组对象。")
*   [`Function.caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller "返回调用指定函数的函数.") and `[arguments.callee.caller](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)`