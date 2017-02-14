**import** 语句用于导入从外部模块，另一个脚本等导出的函数，对象或原语。

<div class="note">

注意：此功能目前无法在任何浏览器中实现。它在许多转换器中实现，例如 [Traceur Compiler](https://github.com/google/traceur-compiler) ， [Babel](http://babeljs.io/) ， [Rollup](https://github.com/rollup/rollup) 或 [Webpack](https://webpack.js.org/)。

</div>

## 语法

<pre>import _defaultMember_ from "_module-name_"; 
import * as _name_ from "_module-name_"; 
import { _member _} from "_module-name_"; 
import { _member_ as _alias _} from "_module-name_"; 
import { _member1 , member2_ } from "_module-name_"; 
import { _member1 , member2_ as _alias2_ , _[...]_ } from "_module-name_"; 
import _defaultMember_, { _member_ [ , _[...]_ ] } from "_module-name_"; 
import _defaultMember_, * as _name_ from "_module-name_"; 
import "_module-name_";</pre>

<dl>

<dt><font face="Courier New, Andale Mono, monospace">name</font></dt>

<dd>导入将会引用的对象的名称。。</dd>

</dl>

<dl>

<dt>`member, memberN`</dt>

<dd>将要导入的导出成员的名称。</dd>

<dt>`defaultMember`</dt>

<dd>将引用从模块默认导出的名称。</dd>

<dt>`alias, aliasN`</dt>

<dd>将引用命名导入的名称。</dd>

<dt>`module-name`</dt>

<dd>要导入的模块的名称。</dd>

</dl>

## 描述

name 参数是将引用导出成员的名称。`member参数指定独立成员，而name参数导入所有成员。如果模块导出单个默认参数，而不是一系列成员，`<font face="Courier New, Andale Mono, monospace">name也可以是函数。</font>  
下面提供一些示例说明语法。

导入整个模块的内容。以下代码将`myModule添加到当前作用域，其中包括所有导出绑定。`

<pre>import  * as myModule from "my-module";
</pre>

导入模块的单个成员。以下代码将`myMember添加到当前作用域。`

<pre>import {myMember} from "my-module";</pre>

导入模块的多个成员。以下代码会将`foo<font face="Open Sans, Arial, sans-serif">和</font>``bar都添加到当前作用域`。

<pre>import {foo, bar} from "my-module";</pre>

导入整个模块的内容，其中一些被显式命名。  
以下代码将`myModule`，`foo，``bar插入到当前作用域。<font face="Open Sans, Arial, sans-serif">注意，</font>``foo`和`myModule.foo`是完全相同的，`bar`和`myModule.bar也是如此。`

<pre>import MyModule, {foo, bar} from "my-module";</pre>

导入成员并指定一个方便的别名。以下代码将`shortName添加到当前作用域。`

<pre>import {reallyReallyLongModuleMemberName as shortName} from "my-module";</pre>

导入整个模块 使用模块副作用，不导入任何绑定。

<pre>import "my-module";</pre>

使用别名导入模块的多个成员。

    import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module";

### 导入默认值

可以导出默认选项，无论是一个对象，一个函数或一个 class。相对地， 也可以使用 `import 导入默认成员。`

`最简单版本，直接导入默认。`

    import myDefault from "my-module";

也可以使用上面提到的方式导入命名空间。

    import myDefault, * as myModule from "my-module";
    // myModule used as a namespace

<font face="Consolas, Liberation Mono, Courier, monospace">或者导入已有命名的默认项。这两种情况下，默认导入项必须最先声明。</font>

    import myDefault, {foo, bar} from "my-module";
    // specific, named imports

## 范例

导入一个辅助文件以协助处理 AJAX JSON 请求。

<pre>// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from "file";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});</pre>

## 规范

<table>

<tbody>

<tr>

<th scope="col">规范</th>

<th scope="col">状态</th>

<th scope="col">注解</th>

</tr>

<tr>

<td>[ECMAScript 2015 (6th Edition, ECMA-262)  
<small lang="zh-CN">Imports</small>](http://www.ecma-international.org/ecma-262/6.0/#sec-imports)</td>

<td><span class="spec-Standard">Standard</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)  
<small lang="zh-CN">Imports</small>](https://tc39.github.io/ecma262/#sec-imports)</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## 浏览器兼容性

<div class="htab"><a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<table>

<tbody>

<tr>

<th>特性</th>

<th>Chrome</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>基本支持</td>

<td><span style="color: #f00;">未实现</span>[2]</td>

<td><span style="color: #f00;">未实现</span>[1]</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

<table>

<tbody>

<tr>

<th>特性</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>基本支持</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

[1] 查看 [bug 568953](https://bugzilla.mozilla.org/show_bug.cgi?id=568953 "ES6 modules").

[2] 查看 [Chromium bug 1569](https://bugs.chromium.org/p/v8/issues/detail?id=1569)

[3]  "启用实验性JavaScript功能" 标记的背后

## 也可以看看

*   [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export "export 语句用于从给定的文件 (或模块) 中导出函数，对象或原语。")
*   [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
*   [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
*   [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)