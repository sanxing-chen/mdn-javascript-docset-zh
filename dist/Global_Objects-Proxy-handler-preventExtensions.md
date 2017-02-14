
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>handler.preventExtensions()</code></strong> method is a trap for <a title="The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  preventExtensions: function(target) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>preventExtensions</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>preventExtensions</code> method must return a boolean value.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.preventExtensions()</strong></code> method is a trap for <a title="The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions()</code></a>.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><a title="The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions()</code></a></li>
 <li><a title="The static Reflect.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It is similar to Object.preventExtensions(), but with some differences." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions"><code>Reflect.preventExtensions()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>:</p>

<ul>
 <li><code>Object.preventExtensions(proxy)</code> only returns <code>true</code> if <code>Object.isExtensible(proxy)</code> is <code>false</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps <a title="The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions()</code></a>.</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log(&apos;called&apos;);
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // &quot;called&quot;
                                          // false
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError is thrown
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-preventextensions" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[PreventExtensions]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-preventextensions" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[PreventExtensions]]&apos; in that specification.</small></a></td>
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
   <td><a title="Released on 2013-06-25." href="/en-US/Firefox/Releases/22">22</a> (22)</td>
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
   <td>22.0 (22)</td>
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
 <li><a title="The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"><code>Object.preventExtensions()</code></a></li>
 <li><a title="The static Reflect.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It is similar to Object.preventExtensions(), but with some differences." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions"><code>Reflect.preventExtensions()</code></a></li>
</ul>
                
              