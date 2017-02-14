
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>some()</strong></code> method tests whether some element in the typed array passes the test implemented by the provided function. This method has the same algorithm as <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="The some() method tests whether some element in the array passes the test implemented by the provided function."><code>Array.prototype.some()</code></a><em>.</em> <em>TypedArray</em> is one of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array types</a> here.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.<code>some(<var>callback</var>[, <var>thisArg</var>])</code></code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Function to test for each element, taking three arguments:
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>The current element being processed in the typed array.</dd>
  <dt><code>index</code></dt>
  <dd>The index of the current element being processed in the typed array.</dd>
  <dt><code>array</code></dt>
  <dd>The typed array <code>every</code> was called upon.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Optional. Value to use as <code>this</code> when executing <code>callback</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code><strong>true</strong></code> if the callback function returns a <a href="/en-US/docs/Glossary/truthy" class="glossaryLink" title="truthy: In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, &quot;&quot;, null, undefined, and NaN).">truthy</a> value for any array element; otherwise, <code><strong>false</strong></code>.</p>

<h2 id="Description">Description</h2>

<p>The <code>some</code> method executes the <code>callback</code> function once for each element present in the typed array until it finds one where <code>callback</code> returns a true value. If such an element is found, <code>some</code> immediately returns <code>true</code>. Otherwise, <code>some</code> returns <code>false</code>.</p>

<p><code>callback</code> is invoked with three arguments: the value of the element, the index of the element, and the array object being traversed.</p>

<p>If a <code>thisArg</code> parameter is provided to <code>some</code>, it will be passed to <code>callback</code> when invoked, for use as its <code>this</code> value. Otherwise, the value <code>undefined</code> will be passed for use as its <code>this</code> value.&#xA0; The <code>this</code> value ultimately observable by <code>callback</code> is determined according to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for determining the <code>this</code> seen by a function</a>.</p>

<p><code>some</code> does not mutate the typed array on which it is called.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Testing_size_of_all_typed_array_elements">Testing size of all typed array elements</h3>

<p>The following example tests whether any element in the typed array is bigger than 10.</p>

<pre class="brush: js  language-js">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
</pre>

<h3 id="Testing_typed_array_elements_using_arrow_functions">Testing typed array elements using arrow functions</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow functions</a> provide a shorter syntax for the same test.</p>

<pre class="brush: js">new Uint8Array([2, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // true</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Since there is no global object with the name <em>TypedArray</em>, polyfilling must be done on an &quot;as needed&quot; basis.</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, &apos;some&apos;, {
    value: Array.prototype.some
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don&apos;t support <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>, it&apos;s best not to polyfill <code>Array.prototype</code> methods at all, as you can&apos;t make them non-enumerable.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.some" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.some&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.some&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

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
   <td>45</td>
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>32</td>
   <td>10</td>
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
   <td><a href="/en-US/Firefox/Releases/37" title="Released on 2015-04-07.">37</a> (37)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>10</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every" title="The every() method tests whether all elements in the typed array pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.every(). TypedArray is one of the typed array types here."><code>TypedArray.prototype.every()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" title="The some() method tests whether some element in the array passes the test implemented by the provided function."><code>Array.prototype.some()</code></a></li>
</ul>
                
              