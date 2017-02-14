
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>handler.ownKeys()</code></strong> method is a trap for <a title="The static Reflect.ownKeys() method returns an array of the target object&apos;s own property keys." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"><code>Reflect.ownKeys()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  ownKeys: function(target) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>ownKeys</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>ownKeys</code> method must return an enumerable object.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.ownKeys()</strong></code> method is a trap for <a title="The static Reflect.ownKeys() method returns an array of the target object&apos;s own property keys." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"><code>Reflect.ownKeys()</code></a>.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><a title="The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames()</code></a></li>
 <li><a title="The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"><code>Object.getOwnPropertySymbols()</code></a></li>
 <li><a title="The Object.keys() method returns an array of a given object&apos;s own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys()</code></a></li>
 <li><a title="The static Reflect.ownKeys() method returns an array of the target object&apos;s own property keys." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"><code>Reflect.ownKeys()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>:</p>

<ul>
 <li>The result of <code>ownKeys</code> must be an array.</li>
 <li>The type of each array element is either a <a title="The String global object is a constructor for strings, or a sequence of characters." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a> or a <a title="The Symbol() function returns a value of type symbol, has static properties that expose several members of built in objects, has static methods that expose the global symbol registry, and resembles a built in object class&#xA0;but is incomplete as a contructor because it does not support the syntax &quot;new Symbol()&quot;." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>.</li>
 <li>The result List must contain the keys of all non-configurable own properties of the target object.</li>
 <li>If the target object is not extensible, then the result List must contain all the keys of the own properties of the target object and no other values.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The following code traps <a title="The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames()</code></a>.</p>

<pre class="brush: js">var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log(&apos;called&apos;);
    return [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;];
  }
});

console.log(Object.getOwnPropertyNames(p)); // &quot;called&quot;
                                            // [ &apos;a&apos;, &apos;b&apos;, &apos;c&apos; ]</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js example-bad">var obj = {};
Object.defineProperty(obj, &apos;a&apos;, { 
  configurable: false, 
  enumerable: true, 
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p)); 

// TypeError: proxy [[OwnPropertyKeys]] must return an array 
// with only string and symbol elements
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[OwnPropertyKeys]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[OwnPropertyKeys]]&apos; in that specification.</small></a></td>
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

<h2 id="Compatibility_notes">Compatibility notes</h2>

<h3 id="Firefox">Firefox</h3>

<ul>
 <li>In Gecko 42 (Firefox 42 / Thunderbird 42 / SeaMonkey 2.39), the <code>ownKey</code> implementation got updated to reflect the final ES2015 specification (see <a title="FIXED: Update ES6 scripted proxies &quot;ownKeys&quot; to ES6 final" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1049662" class="external">bug&#xA0;1049662</a>):

  <ul>
   <li>The result is now checked if it is an array and if the array elements are either of type string or of type symbol.</li>
   <li>Enumerating duplicate own property names is not a failure anymore.</li>
  </ul>
 </li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"><code>Proxy</code></a></li>
 <li><a title="The proxy&apos;s handler object is a placeholder object which contains traps for proxies." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler"><code>handler</code></a></li>
 <li><a title="The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames()</code></a></li>
 <li><a title="The static Reflect.ownKeys() method returns an array of the target object&apos;s own property keys." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"><code>Reflect.ownKeys()</code></a></li>
</ul>
                
              