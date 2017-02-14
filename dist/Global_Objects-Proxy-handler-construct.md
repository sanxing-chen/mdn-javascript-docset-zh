
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>handler.construct()</strong></code> method is a trap for the <a title="The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function." href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> operator.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>construct</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
 <dt><code>argumentsList</code></dt>
 <dd>The list of arguments for the constructor.</dd>
 <dt><code>newTarget</code></dt>
 <dd>The constructor that was originally called.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>construct</code> method must return an object.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.construct()</strong></code> method is a trap for the <a title="The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function." href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> operator.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><code>new proxy(...args)</code></li>
 <li><a title="The static Reflect.construct() method acts like the new operator as a function. It is equivalent to calling new target(...args)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct"><code>Reflect.construct()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>:</p>

<ul>
 <li>The result must be an <code>Object</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps the <a title="The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function." href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> operator.</p>

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log(&apos;called: &apos; + argumentsList.join(&apos;, &apos;));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // &quot;called: 1&quot;
                             // 10
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[Construct]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[Construct]]&apos; in that specification.</small></a></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2013-01-08." href="/en-US/Firefox/Releases/18">18</a> (18)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>18.0 (18)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a></li>
 <li><a title="The proxy&apos;s handler object is a placeholder object which contains traps for proxies." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler"><code>handler</code></a></li>
 <li><a title="The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function." href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> operator.</li>
 <li><a title="The static Reflect.construct() method acts like the new operator as a function. It is equivalent to calling new target(...args)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct"><code>Reflect.construct()</code></a></li>
</ul>
                
              