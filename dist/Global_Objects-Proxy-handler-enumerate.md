
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> Obsolete</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<p>The <strong><code>handler.enumerate()</code></strong> method used to be a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in" title="The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."><code>for...in</code></a> statements, but has been removed from the ECMAScript standard in ES2016 and is deprecated in browsers.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  enumerate(target) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>enumerate</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An <a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">iterator</a> object.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.enumerate</strong></code> method is a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in" title="The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."><code>for...in</code></a> statements.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li>Property enumeration / for...in: <code>for (var name in proxy) {...}</code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate" title="The static Reflect.enumerate() method used to return an iterator with the enumerable own and inherited properties of the target object, but has been removed in ECMAScript 2016 and is deprecated in browsers."><code>Reflect.enumerate()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>:</p>

<ul>
 <li>The <code>enumerate</code> method must return an object.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in" title="The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."><code>for...in</code></a> statements.</p>

<pre class="brush: js">var p = new Proxy({}, {
  enumerate(target) {
    console.log(&apos;called&apos;);
    return [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;][Symbol.iterator]();
  }
});

for (var x in p) { // &quot;called&quot;
  console.log(x);  // &quot;a&quot;
}                  // &quot;b&quot;
                   // &quot;c&quot;
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js">var p = new Proxy({}, {
  enumerate(target) {
    return 1;
  }
});

for (var x in p) {} // TypeError is thrown
</pre>

<p>Note: Both examples make use of the shorthand syntax for <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definitions</a>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-enumerate" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[Enumerate]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Removed in ECMAScript 2016.</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span> [1]</td>
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
   <td>37.0 (37) [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] This feature was supported from version 37 to version 46, but has been removed to comply with the latest ECMAScript standard, see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1246318" class="external" title="FIXED: Remove [[Enumerate]] and associated reflective capabilities">bug&#xA0;1246318</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>Proxy</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="The proxy&apos;s handler object is a placeholder object which contains traps for proxies."><code>handler</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in" title="The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed."><code>for...in</code></a> statements</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate" title="The static Reflect.enumerate() method used to return an iterator with the enumerable own and inherited properties of the target object, but has been removed in ECMAScript 2016 and is deprecated in browsers."><code>Reflect.enumerate()</code></a></li>
</ul>
                
              