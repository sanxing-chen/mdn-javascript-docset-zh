<div>

<div class="overheadIndicator obsolete obsoleteHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>已废弃 Gecko 2 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1)**  
This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.

</div>

</div>

 **`__count__`** 属性曾经用来存放对象的可枚举的属性的个数，但是已经被废除。

## 语法

    obj.__count__

## 示例

<pre class="brush: js">{ 1: 1 }.__count__              // 1
[].__count__                    // 0
[1].__count__                   // 1
[1, /* hole */, 2, 3].__count__ // 3
</pre>

## 详细说明

无需详细说明

## 浏览器兼容性

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

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

<td><span style="color: #f00;">未实现</span></td>

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

## 更多请参看

*   [[Blog post] More changes coming to SpiderMonkey: the magical __count__ property is being removed](http://whereswalden.com/2010/04/06/more-changes-coming-to-spidermonkey-the-magical-__count__-property-of-objects-is-being-removed/)