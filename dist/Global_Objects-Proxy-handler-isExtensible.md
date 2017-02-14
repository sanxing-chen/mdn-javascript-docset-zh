
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>handler.isExtensible()</code></strong> method is a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  isExtensible: function(target) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>isExtensible</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>isExtensible</code> method must return a boolean value.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.isExtensible()</strong></code> method is a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a>.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible" title="The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). It is similar to Object.isExtensible(), but with some differences."><code>Reflect.isExtensible()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>:</p>

<ul>
 <li><code>Object.isExtensible(proxy)</code> must return the same value as <code>Object.isExtensible(target)</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a>.</p>

<pre class="brush: js">var p = new Proxy({}, {
  isExtensible: function(target) {
    console.log(&apos;called&apos;);
    return true;
  }
});

console.log(Object.isExtensible(p)); // &quot;called&quot;
                                     // true
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js">var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p); // TypeError is thrown
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-isextensible" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[IsExtensible]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-isextensible" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[IsExtensible]]&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/31" title="Released on 2014-07-22.">31</a> (31)</td>
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
   <td>31.0 (31)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>Proxy</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="The proxy&apos;s handler object is a placeholder object which contains traps for proxies."><code>handler</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" title="The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."><code>Object.isExtensible()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible" title="The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). It is similar to Object.isExtensible(), but with some differences."><code>Reflect.isExtensible()</code></a></li>
</ul>
                
              