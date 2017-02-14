本对象代表了一个关于 [eval](/en/Core_JavaScript_1.5_Reference/Global_Functions/eval "en/Core_JavaScript_1.5_Reference/Global_Functions/eval") 函数的错误.

## 语法

    new EvalError([message[, fileName[, lineNumber]]])

### 参数

<dl>

<dt>message</dt>

<dd>人类可阅读的关于错误的描述.</dd>

</dl>

<dl>

<dt>fileName<span title="This API has not been standardized."></span></dt>

<dd>代码中导致异常的文件的文件名.</dd>

</dl>

<dl>

<dt>lineNumber<span title="This API has not been standardized."></span></dt>

<dd>代码中导致异常的代码的行号.</dd>

</dl>

### 描述

       当`[eval](/en/Core_JavaScript_1.5_Reference/Global_Functions/eval "en/Core_JavaScript_1.5_Reference/Global_Functions/eval")`使用不当时便会抛出EvalError.

## 属性

<dl>

<dt>[prototype](/en/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype "en/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype")</dt>

<dd>允许自定义属性向EvalError对象中添加.</dd>

</dl>

## 方法

全局的EvalError对象本身不包含任何方法, 然而它通过原型链继承了一些方法.

### 参见

*   [Error](/en/Core_JavaScript_1.5_Reference/Global_Objects/Error "en/Core_JavaScript_1.5_Reference/Global_Objects/Error")
*   [eval](/en/Core_JavaScript_1.5_Reference/Global_Functions/eval "en/Core_JavaScript_1.5_Reference/Global_Functions/eval")
*   [EvalError.prototype](/en/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype "en/Core_JavaScript_1.5_Reference/Global_Objects/EvalError/prototype")