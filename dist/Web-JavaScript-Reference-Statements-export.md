export 语句用于从给定的文件 (或模块) 中导出函数，对象或原语。

<div class="note">

注意**:** 此功能目前无法在任何浏览器中实现。它在许多转换器中实现，例如  [Traceur Compiler](https://github.com/google/traceur-compiler), [Babel](http://babeljs.io/) or [Rollup](https://github.com/rollup/rollup).

</div>

## 语法

<pre class="syntaxbox">export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> };
export { <var>variable1</var> as <var>name1</var>, <var>variable2</var> as <var>name2</var>, …, <var>nameN</var> };
export let <var>name1</var>, <var>name2</var>, …, <var>nameN</var>; // also var
export let <var>name1</var> = …, <var>name2</var> = …, …, <var>nameN</var>; // also var, const

export default _expression_;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { <var>name1</var> as default, … };

export * from …;
export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> } from …;
export { <var>import1</var> as <var>name1</var>, <var>import2</var> as <var>name2</var>, …, <var>nameN</var> } from …;</pre>

<dl>

<dt>`nameN`</dt>

<dd>导出的标识符（用来被其他脚本的 `[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)` 导入）</dd>

</dl>

## 描述

有两种不同的导出方式，每种方式对应于上述的一种语法：

*   命名导出：

    <pre class="brush: js">export { myFunction }; // 导出一个函数声明
    export const foo = Math.sqrt(2); // 导出一个常量</pre>

*   默认导出 (每个脚本只能有一个)：

    <pre class="brush: js">export default myFunctionOrClass // 或者 'export default class {}'
    // 这里没有分号</pre>

对于只导出一部分值来说，命名导出的方式很有用。在导入时候，可以使用相同的名称来引用对应导出的值。

关于默认导出方式，每个模块只有一个默认导出。一个默认导出可以是一个函数，一个类，一个对象等。当最简单导入的时候，这个值是将被认为是”入口”导出值。

## 示例

### 命名导出

在这个模块里，我们可以这么导出：

<pre class="brush: js">// module "my-module.js"
export function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { foo };
</pre>

这样的话，在其它脚本 (cf. `[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)`)，我们可以这样使用：

<pre class="brush: js">import { cube, foo } from 'my-module.js';
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888</pre>

### 默认导出

如果我们只想导出一个简单的值或者想在模块中保留一个候选值，就可以使用默认导出：

<pre class="brush: js">// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}</pre>

然后，在另一个脚本中，默认的导出值就可以被简单直接的导入：

<pre class="brush: js line-numbers  language-js">// module "my-module.js"
import cube from 'my-module';
console.log(cube(3)); // 27​​​​​</pre>

## 规范

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Exports</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-exports)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Exports</small>](https://tc39.github.io/ecma262/#sec-exports)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器支持

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span>  
(Netscape 4 until [Firefox 3.5](/en-US/Firefox/Releases/3.5))</td>

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

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

## 参见

*   [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import "name参数用于接收导出成员的对象名称。member参数指定独立成员，而name参数导入所有成员。如果模块导出单个默认参数，而不是一系列成员，name也可以是函数。
     下面提供一些示例说明语法。")
*   [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
*   [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)