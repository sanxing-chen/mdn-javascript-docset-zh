
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>handler.getOwnPropertyDescriptor()</code></strong> method is a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object&apos;s prototype chain) of a given object."><code>Object.getOwnPropertyDescriptor()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>getOwnPropertyDescriptor</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
 <dt><code>prop</code></dt>
 <dd>The name of the property whose description should be retrieved.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>getOwnPropertyDescriptor</code> method must return an object or <code>undefined</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.getOwnPropertyDescriptor()</strong></code> method is a trap for <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object&apos;s prototype chain) of a given object."><code>Object.getOwnPropertyDescriptor()</code></a>.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object&apos;s prototype chain) of a given object."><code>Object.getOwnPropertyDescriptor()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor" title="The static Reflect.getOwnPropertyDescriptor() method is similar to Object.getOwnPropertyDescriptor(). It returns a property descriptor of the given property if it exists on the object, undefined otherwise."><code>Reflect.getOwnPropertyDescriptor()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>:</p>

<ul>
 <li><code>getOwnPropertyDescriptor</code> must return an object or <code>undefined</code>.</li>
 <li>A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object.</li>
 <li>A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.</li>
 <li>A property cannot be reported as existent, if it does not exists as an own property of the target object and the target object is not extensible.</li>
 <li>A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.</li>
 <li>The result of <code>Object.getOwnPropertyDescriptor(target)</code> can be applied to the target object using <code>Object.defineProperty</code> and will not throw an exception.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object&apos;s prototype chain) of a given object."><code>Object.getOwnPropertyDescriptor()</code></a>.</p>

<pre class="brush: js">var p = new Proxy({ a: 20}, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log(&apos;called: &apos; + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, &apos;a&apos;).value); // &quot;called: a&quot;
                                                            // 10
</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js">var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function(target, prop) {
    return undefined;
  }
});

Object.getOwnPropertyDescriptor(p, &apos;a&apos;); // TypeError is thrown
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[GetOwnProperty]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[GetOwnProperty]]&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/18" title="Released on 2013-01-08.">18</a> (18)</td>
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
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)."><code>Proxy</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler" title="The proxy&apos;s handler object is a placeholder object which contains traps for proxies."><code>handler</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" title="The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object&apos;s prototype chain) of a given object."><code>Object.getOwnPropertyDescriptor()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor" title="The static Reflect.getOwnPropertyDescriptor() method is similar to Object.getOwnPropertyDescriptor(). It returns a property descriptor of the given property if it exists on the object, undefined otherwise."><code>Reflect.getOwnPropertyDescriptor()</code></a></li>
</ul>
                
              