<div>

<div class="overheadIndicator deprecated deprecatedHeader">

**<span title="This is an obsolete API and is no longer guaranteed to work."></span>Deprecated**  
This feature has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Avoid using it and update existing code if possible; see the [compatibility table](#Browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

</div>

</div>

<div class="warning">**Non-standard.** The `**StopIteration**` object is a SpiderMonkey-specific feature. For future-facing usages, consider using [for..of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops and the [iterator protocol](/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol).</div>

The `**StopIteration**` object is used to tell the end of the iteration in the legacy iterator protocol.

## Syntax

<pre class="syntaxbox">StopIteration</pre>

## Description

`StopIteration` is a part of legacy iterator protocol, and it will be removed at the same time as legacy iterator and legacy generator.

## Examples

`StopIteration` is thrown by [`Iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

<pre class="brush: js">var a = {
  x: 10,
  y: 20
};
var iter = Iterator(a);
console.log(iter.next()); // ["x", 10]
console.log(iter.next()); // ["y", 20]
console.log(iter.next()); // throws StopIteration
</pre>

Throwing `StopIteration`.

<pre class="brush: js">function f() {
  yield 1;
  yield 2;
  throw StopIteration;
  yield 3; // this is not executed.
}

for (var n in f()) {
  console.log(n);   // 1
                    // 2
}
</pre>

## Specifications

Non-standard. Not part of any current standards document.

## Browser compatibility

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

<td><span style="color: #f00;">No support</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

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

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [Iterators and Generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
*   [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)