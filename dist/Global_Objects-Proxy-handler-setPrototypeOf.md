
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>handler.setPrototypeOf()</code></strong> method is a trap for <a title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var p = new Proxy(target, {
  setPrototypeOf: function(target, prototype) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>setPrototypeOf</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>The target object.</dd>
 <dt><code>prototype</code></dt>
 <dd>The object&apos;s new prototype or <code>null</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>setPrototypeOf</code> method returns <code>true</code> if the <code>[[Prototype]]</code> was successfully changed, otherwise <code>false</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.setPrototypeOf</strong></code> method is a trap for <a title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a>.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><a title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a></li>
 <li><a title="The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"><code>Reflect.setPrototypeOf()</code></a></li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>:</p>

<ul>
 <li>If <code>target</code> is not extensible, the <code>prototype</code> parameter must be the same value as <code>Object.getPrototypeOf(target)</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>If you want to disallow setting a new prototype for your object, your&#xA0;handler&apos;s <code>setPrototypeOf</code> method can either return <code>false</code>, or it can throw an exception.</p>

<p>The former approach means that any operation that performs such mutation, that throws an exception on failure to mutate, will have to create the exception itself.&#xA0; For example, <a title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a> will create and throw a <code>TypeError</code> itself.&#xA0; If the mutation is performed by an operation that <em>doesn&apos;t</em> ordinarily throw in case of failure, such as <a title="The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"><code>Reflect.setPrototypeOf()</code></a>, no exception will be thrown.</p>

<pre class="brush: js">var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {}, target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
</pre>

<p>The latter approach will cause <em>any</em> operation that attempts to mutate, to throw.&#xA0; This approach is required if you want even non-throwing operations to throw on failure, or you want to throw a custom exception value.</p>

<pre class="brush: js">var handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error(&apos;custom error&apos;);
    }
}; 

var newProto = {}, target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error(&quot;custom error&quot;)
Reflect.setPrototypeOf(p2, newProto); // throws new Error(&quot;custom error&quot;)</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;[[SetPrototypeOf]]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;[[SetPrototypeOf]]&apos; in that specification.</small></a></td>
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
   <td><a title="Released on 2016-09-13." href="/en-US/Firefox/Releases/49">49</a> (49)</td>
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
   <td>49.0 (49)</td>
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
 <li><a title="The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a></li>
 <li><a title="The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"><code>Reflect.setPrototypeOf()</code></a></li>
</ul>
                
              