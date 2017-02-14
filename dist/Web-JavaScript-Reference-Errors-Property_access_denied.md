## 消息

<pre class="syntaxbox">Error: Permission denied to access property "x"
</pre>

## 错误类型

[`错误`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。").

## 什么地方出错了?

尝试访问无权访问的对象。这很可能出现在使用[`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe "HTML中的<iframe>标签（又称内联框架元素）表示了一个嵌套的浏览上下文(browsing context)，实际上是用来在当前页面中内嵌另一个HTML页面。在HTML4.0.1中，文档(document)可以包含一个head和一个body组合或者包含一个head和一个框架集(frame-set)组合,但不能同时包含body和frame-set。然而<iframe>标签可以插入到一个正常的文档体中(document body)。每个浏览上下文(browsing context)都有自己的会话历史和活动文档。包含其它嵌入内容的浏览上下文(browsing context)称作父级浏览上下文(parent browsing context)。顶层的(top-level)浏览上下文(不再拥有父窗体的)一般就是浏览器的window对象。")元素时加载了一个不同域名下的页面，这在访问子页面时会违背[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

## 示例

<pre class="brush: html"><!DOCTYPE html>
<html>
  <head>
    <iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      console.log(document.getElementById('myframe').contentWindow.document);
      // Error: Permission denied to access property "document"
    </script>
  </head>
  <body></body>
</html>
</pre>

可以参考

*   [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe "HTML中的<iframe>标签（又称内联框架元素）表示了一个嵌套的浏览上下文(browsing context)，实际上是用来在当前页面中内嵌另一个HTML页面。在HTML4.0.1中，文档(document)可以包含一个head和一个body组合或者包含一个head和一个框架集(frame-set)组合,但不能同时包含body和frame-set。然而<iframe>标签可以插入到一个正常的文档体中(document body)。每个浏览上下文(browsing context)都有自己的会话历史和活动文档。包含其它嵌入内容的浏览上下文(browsing context)称作父级浏览上下文(parent browsing context)。顶层的(top-level)浏览上下文(不再拥有父窗体的)一般就是浏览器的window对象。")
*   [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)