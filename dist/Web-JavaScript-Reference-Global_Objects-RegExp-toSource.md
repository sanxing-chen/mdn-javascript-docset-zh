<div class="overheadIndicator nonStandard nonStandardHeader">

**<span title="This API has not been standardized."></span>非标准**  
该特性是非标准的，请尽量不要在生产环境中使用它！

</div>

## 概述

返回一个字符串,代表当前对象的源代码

## 语法

    regexObj.toSource()

## 描述

`toSource`方法返回值如下:

*   对于内置的`RegExp`对象, `toSource` 如下字符串:

<pre class="brush: js">function RegExp() {
    [native code]
}
</pre>

*   对于一个`RegExp实例`, `toSource返回代表该正则的字符串.`

该方法通常由JavaScript内部隐含调用,而不会明确的出现在用户代码中.

## 相关链接

[Object.prototype.toSource](/zh-cn/JavaScript/Reference/Global_Objects/Object/toSource "zh-cn/JavaScript/Reference/Global_Objects/Object/toSource")