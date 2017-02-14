<div>

<div>

<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

</div>

</div>

## 概述

返回函数的源代码的字符串表示.

## 语法

    function.toSource();
    Function.toSource();

### 参数

无

## 描述

`toSource方法返回下面的值`:

*   对于内置的`Function`对象,`toSource`返回下面的字符串:

    function Function() {
        [native code]
    }

*   对于自定义函数来说, `toSource返回能定义该函数`的Javascript源码.

该方法通常在引擎内部调用.你可以在调试的时候用该方法开查看一个函数的源代码.

## 相关链接

*   [toString](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/toString "JavaScript/Reference/Global_Objects/Function/toString")
*   [Object.prototype.valueOf](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/valueOf "JavaScript/Reference/Global_Objects/Object/valueOf")