
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader">
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> Deprecated</strong><br>This feature has been removed from the Web standards. Though some browsers may still support it, it is in the process of being dropped. Avoid using it and update existing code if possible; see the <a href="#Browser_compatibility">compatibility table</a> at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.</p>
        </div></div>

<div class="warning"><strong>Non-standard.</strong> The <code><strong>StopIteration</strong></code> object is a SpiderMonkey-specific feature. For future-facing usages, consider using <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for..of</a> loops and the <a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">iterator protocol</a>.</div>

<p>The <code><strong>StopIteration</strong></code> object is used to tell the end of the iteration in the legacy iterator protocol.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">StopIteration</pre>

<h2 id="Description">Description</h2>

<p><code>StopIteration</code> is a part of legacy iterator protocol, and it will be removed at the same time as legacy iterator and legacy generator.</p>

<h2 id="Examples">Examples</h2>

<p><code>StopIteration</code> is thrown by <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator"><code>Iterator</code></a>.</p>

<pre class="brush: js">var a = {
  x: 10,
  y: 20
};
var iter = Iterator(a);
console.log(iter.next()); // [&quot;x&quot;, 10]
console.log(iter.next()); // [&quot;y&quot;, 20]
console.log(iter.next()); // throws StopIteration
</pre>

<p>Throwing <code>StopIteration</code>.</p>

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

<h2 id="Specifications">Specifications</h2>

<p>Non-standard. Not part of any current standards document.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Iterators and Generators</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator">Iterator</a></li>
</ul>
                
              