
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<div class="warning">
<p>This feature is deprecated in favor of defining getters using the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer syntax</a> or the <a title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a> API. While this feature is widely implemented, it is only described in the <a href="https://tc39.github.io/ecma262/#sec-additional-ecmascript-features-for-web-browsers" class="external">ECMAScript specification</a> because of legacy usage. This method should not be used since better alternatives exist.</p>
</div>

<p>The <code><strong>__defineGetter__</strong></code> method binds an object&apos;s property to a function to be called when that property is looked up.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>obj</var>.__defineGetter__(<var>prop</var>, <var>func</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>A string containing the name of the property to bind to the given function.</dd>
 <dt><code>func</code></dt>
 <dd>A function to be bound to a lookup of the specified property.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><a title="The global undefined property represents the primitive value undefined. It is one of JavaScript&apos;s primitive types." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>.</p>

<h2 id="Description">Description</h2>

<p>The <code>__defineGetter__</code> allows a <a title="The documentation about this has not yet been written; please consider contributing!" href="/en-US/docs/Web/JavaScript/Reference/Operators/get">getter</a> to be defined on a pre-existing object.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Non-standard and deprecated way

var o = {};
o.__defineGetter__(&apos;gimmeFive&apos;, function() { return 5; });
console.log(o.gimmeFive); // 5


// Standard-compliant ways

// Using the get operator
var o = { get gimmeFive() { return 5; } };
console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, &apos;gimmeFive&apos;, {
  get: function() {
    return 5;
  }
});
console.log(o.gimmeFive); // 5
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Object.prototype.__defineGetter__()&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Included in the (normative) annex for additional ECMAScript legacy features for Web browsers (note that the specification codifies what is already in implementations).</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>11</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Compatibility_notes">Compatibility notes</h2>

<ul>
 <li>Starting with Firefox 48 (Firefox 48 / Thunderbird 48 / SeaMonkey 2.45), this method can no longer be called at the global scope without any object. A <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> will be thrown otherwise. Previously, the global object was used in these cases automatically, but this is no longer the case (<a title="FIXED: Remove legacy __defineGetter__/__defineSetter__ this behavior" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1253016" class="external">bug&#xA0;1253016</a>).</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The __defineSetter__ method binds an object&apos;s property to a function to be called when an attempt is made to set that property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__"><code>Object.prototype.__defineSetter__()</code></a></li>
 <li><a title="The documentation about this has not yet been written; please consider contributing!" href="/en-US/docs/Web/JavaScript/Reference/Operators/get"><code>get</code></a> operator</li>
 <li><a title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a></li>
 <li><a title="The __lookupGetter__ method returns the function bound as a getter to the specified property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__"><code>Object.prototype.__lookupGetter__()</code></a></li>
 <li><a title="The __lookupSetter__ method returns the function bound as a setter to the specified property." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__"><code>Object.prototype.__lookupSetter__()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">JS Guide: Defining Getters and Setters</a></li>
 <li><a href="https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/" class="external">[Blog Post] Deprecation of __defineGetter__ and __defineSetter__</a></li>
 <li><a title="Remove __defineGetter__ and __defineSetter__ support" href="https://bugzilla.mozilla.org/show_bug.cgi?id=647423" class="external">bug&#xA0;647423</a></li>
</ul>
                  
                
              