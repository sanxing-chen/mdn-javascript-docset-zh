**`Math`** 是一个内置对象， 为数学常量和数学函数提供了属性和方法，而不是一个函数对象。

## 描述

与其它全局对象不同的是, `Math` 不是一个构造器.  `Math` 的所有属性和方法都是静态的. 你用到的常数pi可以用 `Math.PI` 表示,用 `x` 作参数 <span style="font-family: courier,andale mono,monospace;">Math.sin(x)</span><font face="Consolas, Monaco, Andale Mono, monospace">调用sin函数</font>. JavaScript中的常数, 是以全精度的实数定义的.

## 属性

<dl>

<dt>[`Math.E`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/E "Math.E 属性表示自然对数的底数（或称为基数），e，约等于 2.718。")</dt>

<dd>欧拉常数，也是自然对数的底数, 约等于 2.718.</dd>

<dt>[`Math.LN2`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2 "Math.LN2 属性表示 2 的自然对数，约为 0.693：")</dt>

<dd>2的自然对数, 约等于0.693.</dd>

<dt>[`Math.LN10`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LN10 "Math.LN10 属性表示 10 的自然对数，约为 2.302：")</dt>

<dd>10的自然对数, 约等于 2.303.</dd>

<dt>[`Math.LOG2E`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E "Math.LOG2E 属性表示以 2 为底数，e 的对数，约为 1.442：")</dt>

<dd>以2为底E的对数, 约等于 1.443.</dd>

<dt>[`Math.LOG10E`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E "Math.LOG10E 属性表示以 10 为底数，e 的对数，约为 0.434：")</dt>

<dd>以10为底E的对数, 约等于 0.434.</dd>

<dt>[`Math.PI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI "Math.PI 表示一个圆的周长与直径的比例，约为 3.14159：")</dt>

<dd>圆周率，一个圆的周长和直径之比，约等于 3.14159.</dd>

<dt>[`Math.SQRT1_2`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2 "Math.SQRT1_2 属性表示 1/2 的平方根，约为 0.707：")</dt>

<dd>1/2的平方根, 约等于 0.707.</dd>

<dt>[`Math.SQRT2`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2 "Math.SQRT2 属性表示 2 的平方根，约为 1.414：")</dt>

<dd>2的平方根,约等于 1.414.</dd>

<dt>

<div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides">

<div><span style="font-weight: 700;">Properties inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Constructor), [`__parent__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent), [`__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto)</div>

</div>

</dt>

</dl>

## 方法

<div class="note">

需要注意的是三角函数（`sin()`, `cos()`, `tan()`,`asin()`, `acos()`, `atan()`, `atan2()）是以弧度返回值的。可以通过除法（`Math.PI / 180）把弧度转换为角度，也可以通过其他方法来转换。

</div>

<div class="note">

需要注意的是很多数学函数都有一个精度，并且精度在不同环境下也是不相同的。这就意味着不同的浏览器会给出不同的结果，甚至相同的 JS 引擎在不同的OS或者架构下也会给出不同的结果。

</div>

<dl>

<dt>[`Math.abs(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs "Math.abs(x) 函数返回指定数字 “x“ 的绝对值。如下：")</dt>

<dd>返回x的绝对值.</dd>

<dt>[`Math.acos(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos "Math.acos() 返回一个数的反余弦值（单位为弧度），即：")</dt>

<dd>返回x的反余弦值.</dd>

<dt>[`Math.acosh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh "此页面仍未被本地化, 期待您的翻译!")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的反双曲余弦值.</dd>

<dt>[`Math.asin(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin "Math.asin() 方法返回一个数值的反正弦（单位为弧度），即：")</dt>

<dd>返回x的反正弦值.</dd>

<dt>[`Math.asinh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh "Math.asinh() 函数返回给定数字的反双曲正弦值, 即：")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的反双曲正弦值.</dd>

<dt>[`Math.atan(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan "Math.atan() 函数返回一个数值的反正切（以弧度为单位），即：")</dt>

<dd><span style="font-size: 14.4444446563721px; line-height: 23.3333339691162px;">以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值.</span></dd>

<dt>[`Math.atanh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh "Math.atanh() 函数返回一个数值反双曲正切值, 即：")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回 x 的反双曲正切值<span style="font-size: 14.4444446563721px; line-height: 23.3333339691162px;">.</span></dd>

<dt>[`Math.atan2(x, y)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2 "Math.atan2() 返回其参数比值的反正切值。")</dt>

<dd>返回 y/x 的反正切值.</dd>

<dt>[`Math.cbrt(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt "Math.cbrt() 函数返回任意数字的立方根.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的立方根.</dd>

<dt>[`Math.ceil(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil "Math.ceil(x) 返回一个大于或等于数 "x" 的最小整数。")</dt>

<dd>返回x向上取整后的值.</dd>

<dt>[`Math.clz32(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32 "Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数, 比如 1000000 转换成 32 位无符号整形数字的二进制形式后是 00000000000011110100001001000000, 开头的 0 的个数是 12 个, 则 Math.clz32(1000000) 返回 12.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the number of leading zeroes of a 32-bit integer.</dd>

<dt>[`Math.cos(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos "Math.cos() 函数返回一个数值的余弦值。")</dt>

<dd>返回x的余弦值.</dd>

<dt>[`Math.cosh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh "Math.cosh() 函数返回数值的双曲余弦函数, 可用 constant e 表示:")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的<span style="">双曲余弦值</span>.</dd>

<dt>[`Math.exp(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp "Math.exp() 函数返回 ex，x 表示参数，e 是欧拉常数（Euler's constant），自然对数的底数。")</dt>

<dd>返回 E<span style="position: relative; top: -0.15em; vertical-align: top;">x</span>, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底.</dd>

<dt>[`Math.expm1(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1 "Math.expm1() 函数返回 Ex - 1, 其中 x 是该函数的参数, E 是自然对数的底数 2.718281828459045.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回 exp(x)-1 的值.</dd>

<dt>[`Math.floor(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor "Math.floor(x) 函数返回小于或等于数 "x" 的最大整数。")</dt>

<dd>返回小于x的最大整数。</dd>

<dt>[`Math.fround(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/fround "Math.fround() 可以将任意的数字转换为离它最近的单精度浮点数形式的数字。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the nearest [single precision](http://en.wikipedia.org/wiki/Single_precision "link to the wikipedia page on single precision") float representation of a number.</dd>

<dt>[`Math.hypot([x[,y[,…]]])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot "Math.hypot() 函数返回它的所有参数的平方和的平方根，即：")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the square root of the sum of squares of its arguments.</dd>

<dt>[`Math.imul(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/imul "该函数返回两个参数的类C的32位整数乘法运算的运算结果.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the result of a 32-bit integer multiplication.</dd>

<dt>[`Math.log(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log "Math.log() 函数返回一个数的自然对数，即：")</dt>

<dd>Returns the natural logarithm (log<sub>e</sub>, also ln) of a number.</dd>

<dt>[`Math.log1p(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p "Math.log1p() 函数返回一个数字加1后的自然对数 (底为 E), 既log(x+1).")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the natural logarithm of 1 + x (log<sub>e</sub>, also ln) of a number.</dd>

<dt>[`Math.log10(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log10 "Math.log10() 函数返回一个数字以 10 为底的对数.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the base 10 logarithm of x.</dd>

<dt>[`Math.log2(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log2 "Math.log2() 函数返回一个数字以 2 为底的对数.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>Returns the base 2 logarithm of x.</dd>

<dt>[`Math.max([x[,y[,…]]])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max "Math.max() 函数返回一组数中的最大值。")</dt>

<dd>返回0个到多个数值中最大值.</dd>

<dt>[`Math.min([x[,y[,…]]])`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min "Math.min() 返回零个或更多个数值的最小值。")</dt>

<dd>返回0个到多个数值中最小值.</dd>

<dt>[`Math.pow(x,y)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow "Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 baseexponent。")</dt>

<dd>返回x的y次幂.</dd>

<dt>[`Math.random()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random "Math.random() 函数返回 [0-1) 的浮点值伪随机数（大于等于0，小于1）。")</dt>

<dd>返回0到1之间的伪随机数.</dd>

<dt>[`Math.round(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round "Math.round() 函数返回一个数值四舍五入后最接近的整数值。")</dt>

<dd>返回四舍五入后的整数.</dd>

<dt>[`Math.sign(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign "Math.sign() 函数用来判断一个数字的符号, 是正数, 负数, 还是零.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的符号函数, 判定x是正数,负数还是0.</dd>

<dt>[`Math.sin(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin "Math.sin() 函数返回一个数值的正弦值。")</dt>

<dd>返回正弦值.</dd>

<dt>[`Math.sinh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh "Math.sinh() 函数返回一个数字(单位为角度)的双曲正弦值.")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的双曲正弦值.</dd>

<dt>[`Math.sqrt(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt "Math.sqrt() 函数返回一个数的平方根，即：")</dt>

<dd>返回x的平方根.</dd>

<dt>[`Math.tan(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan "Math.tan() 方法返回一个数值的正切值。")</dt>

<dd>返回x的正切值.</dd>

<dt>[`Math.tanh(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh "Math.tanh() 函数将会返回一个数的双曲正切函数值，计算如下:")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的双曲正切值.</dd>

<dt>`Math.toSource()` <span title="This API has not been standardized."></span></dt>

<dd>返回字符串 `"Math"`.</dd>

<dt>[`Math.trunc(x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc "Math.trunc() 方法会将数字的小数部分去掉，只留整数部分。")<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span></dt>

<dd>返回x的整数部分,去除小数.</dd>

<dt>

<div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides">

<div><span style="font-weight: 700;">Methods inherited from [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object):</span></div>

<div>[`__defineGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter), [`__defineSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter), [`hasOwnProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty), [`isPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf), [`__lookupGetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter), [`__lookupSetter__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter), [`__noSuchMethod__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod), [`propertyIsEnumerable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable), [`toSource`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToSource), [`toLocaleString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString), [`toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString), [`unwatch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch), [`valueOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ValueOf), [`watch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch)</div>

</div>

</dt>

</dl>

## 规范

<table style="background-color: rgb(255, 255, 255); border-collapse: collapse; border: 2px solid rgb(255, 255, 255); color: rgb(77, 78, 83); font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 21px; margin: 0px 0px 24px; padding: 0px;" class="standard-table">

<tbody>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);" scope="col">规范</th>

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);" scope="col">状态</th>

<th style="margin: 0px; padding: 2px 8px 4px; border-width: 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228); font-style: inherit; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; background: rgba(212, 221, 228, 0.498039);" scope="col">说明</th>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">ECMAScript 1st Edition.</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);"><span class="spec-Standard">Standard</span></td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">初始定义。在 JavaScript 1.1 中实现。</td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);">[ECMAScript 5.1 (ECMA-262)  
<small lang="zh-CN">Math</small>](http://www.ecma-international.org/ecma-262/5.1/#sec-15.8)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);"><span class="spec-Standard">Standard</span></td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.247059);"> </td>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Math</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-math-object)</td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);"><span class="spec-Standard">Standard</span></td>

<td style="margin: 0px; padding: 6px 8px; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(212, 221, 228, 0.498039) 0px -1px 0px 0px inset; background-color: rgba(212, 221, 228, 0.14902);">New methods [`log10()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log10 "Math.log10() 函数返回一个数字以 10 为底的对数."), [`log2()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log2 "Math.log2() 函数返回一个数字以 2 为底的对数."), [`log1p()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p "Math.log1p() 函数返回一个数字加1后的自然对数 (底为 E), 既log(x+1)."), [`expm1()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1 "Math.expm1() 函数返回 Ex - 1, 其中 x 是该函数的参数, E 是自然对数的底数 2.718281828459045."), [`cosh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh "Math.cosh() 函数返回数值的双曲余弦函数, 可用 constant e 表示:"), [`sinh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh "Math.sinh() 函数返回一个数字(单位为角度)的双曲正弦值."), [`tanh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh "Math.tanh() 函数将会返回一个数的双曲正切函数值，计算如下:"), [`acosh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh "此页面仍未被本地化, 期待您的翻译!"), [`asinh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh "Math.asinh() 函数返回给定数字的反双曲正弦值, 即："), [`atanh()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh "Math.atanh() 函数返回一个数值反双曲正切值, 即："), [`hypot()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot "Math.hypot() 函数返回它的所有参数的平方和的平方根，即："), [`trunc()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc "Math.trunc() 方法会将数字的小数部分去掉，只留整数部分。"), [`sign()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign "Math.sign() 函数用来判断一个数字的符号, 是正数, 负数, 还是零."), [`imul()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/imul "该函数返回两个参数的类C的32位整数乘法运算的运算结果."), [`fround()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/fround "Math.fround() 可以将任意的数字转换为离它最近的单精度浮点数形式的数字。"), [`cbrt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt "Math.cbrt() 函数返回任意数字的立方根.") and [`clz32()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32 "Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数, 比如 1000000 转换成 32 位无符号整形数字的二进制形式后是 00000000000011110100001001000000, 开头的 0 的个数是 12 个, 则 Math.clz32(1000000) 返回 12.") added.</td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div style="margin: 0px; padding: 0px; border: 0px; color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; line-height: 21px; background-color: rgb(255, 255, 255);">

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

<div style="margin: 0px; padding: 0px; border: 0px; color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; line-height: 21px; background-color: rgb(255, 255, 255);" id="compat-desktop">

<table style="border-collapse: collapse; border: 1px solid transparent; margin: 0px; padding: 0px;" class="compat-table">

<tbody>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Feature</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Chrome</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Firefox (Gecko)</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Internet Explorer</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Opera</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Safari</th>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;">Basic support</td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

<div style="margin: 0px; padding: 0px; border: 0px; color: rgb(77, 78, 83); font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; line-height: 21px; background-color: rgb(255, 255, 255);" id="compat-mobile">

<table style="border-collapse: collapse; border: 1px solid transparent; margin: 0px; padding: 0px;" class="compat-table">

<tbody>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Feature</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Android</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Chrome for Android</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Firefox Mobile (Gecko)</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">IE Mobile</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Opera Mobile</th>

<th style="margin: 0px; padding: 2px 4px 8px; border: 1px solid rgba(212, 221, 228, 0); font-style: inherit; font-weight: 200; font-family: 'Open Sans Light', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 16px; background: 0px 0px;">Safari Mobile</th>

</tr>

<tr style="margin: 0px; padding: 0px; border: 0px;">

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;">Basic support</td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td style="margin: 0px; padding: 5px; border: 1px solid rgba(212, 221, 228, 0.247059); font-size: 12px; vertical-align: top; word-wrap: break-word; background-clip: initial;"><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [`Number`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。")