
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>get</code></strong> syntax binds an object property to a function that will be called when that property is looked up.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">{get <em>prop</em>() { ... } }
{get <em>[expression]</em>() { ... } }</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>The name of the property to bind to the given function.</dd>
 <dt>expression</dt>
 <dd>Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a <em>getter</em>. It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.</p>

<p>Note the following when working with the <code>get</code> syntax:</p>

<div>
<ul>
 <li>It can have an identifier which is either a number or a string;</li>
 <li>It must have exactly zero parameters (see <a href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow" class="external">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments</a> for more information);</li>
 <li>It must not appear in an object literal with another <code>get</code> or with a data entry for the same property (<code>{ get x() { }, get x() { } }</code> and <code>{ x: ..., get x() { } }</code> are forbidden).</li>
</ul>
</div>

<p>A getter can be removed using the <code><a title="en/Core_JavaScript_1.5_Reference/Operators/Special_Operators/delete_Operator" href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> operator.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_a_getter_on_new_objects_in_object_initializers">Defining a getter on new objects in object initializers</h3>

<p>This will create a pseudo-property <code>latest</code> for object <code>obj</code>, which will return the last array item in <code>log</code>.</p>

<pre class="brush: js">var obj = {
&#xA0; log: [&apos;test&apos;],
&#xA0; get latest() {
&#xA0; &#xA0; if (this.log.length == 0) return undefined;
&#xA0; &#xA0; return this.log[this.log.length - 1];
&#xA0; }
}
console.log(obj.latest); // Will return &quot;test&quot;.
</pre>

<p>Note that attempting to assign a value to <code>latest</code> will not change it.</p>

<h3 id="Deleting_a_getter_using_the_delete_operator">Deleting a getter using the <code>delete</code> operator</h3>

<p>If you want to remove the getter, you can just <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> it:</p>

<pre class="brush: js">delete obj.latest;
</pre>

<h3 id="Defining_a_getter_on_existing_objects_using_defineProperty">Defining a getter on existing objects using <code>defineProperty</code></h3>

<p>To append a getter to an existing object later at any time, use <a title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a>.</p>

<pre class="brush: js">var o = {a: 0};

Object.defineProperty(o, &apos;b&apos;, { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)</pre>

<h3 id="Using_a_computed_property_name">Using a computed property name</h3>

<pre class="brush: js">var expr = &apos;foo&apos;;

var obj = {
  get [expr]() { return &apos;bar&apos;; }
};

console.log(obj.foo); // &quot;bar&quot;</pre>

<h3 id="Smart_self-overwriting_lazy_getters">Smart / self-overwriting / lazy getters</h3>

<p>Getters give you a way to define a property of an object, but they do not calculate the property&apos;s value until it is accessed. A getter defers the cost of calculating the value until the value is needed, and if it is never needed, you never pay the cost.</p>

<p>An additional optimization technique to lazify or delay the calculation of a property value and cache it for later access are<strong> smart or <a href="https://en.wikipedia.org/wiki/Memoization" class="external">memoized</a> getters</strong>. The value is calculated the first time the getter is called, and is then cached so subsequent accesses return the cached value without recalculating it. This&#xA0;is useful in the following situations:</p>

<ul>
 <li>If the calculation of a property value is expensive (takes much RAM or CPU time, spawns worker thread, retrieves remote file, etc).</li>
 <li>If the value isn&apos;t needed just now. It will be used later, or in some case it&apos;s not used at all.</li>
 <li>If it&apos;s used, it will be accessed several times, and there is no need to re-calculate that value will never be changed, or shouldn&apos;t be re-calculated.</li>
</ul>

<p>This means that you shouldn&apos;t use a lazy getter for a property whose value you expect to change, because the getter will not recalculate the value.</p>

<p>In the following example, the object has a getter as its own property. On getting the property, the property removed from the object and re-added, but implicitly as a data property this time. Finally the value gets returned.</p>

<pre class="brush: js">get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById(&apos;bookmarked-notification-anchor&apos;);
},</pre>

<p>For Firefox code, see also the XPCOMUtils.jsm code module, which defines the <code><a href="/en-US/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()">defineLazyGetter()</a></code> function.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="en-US">The definition of &apos;Object Initializer&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-method-definitions" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Method definitions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Added computed property names.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-method-definitions" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Method definitions&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p></p><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div><p></p>

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
   <td>1</td>
   <td><a title="Released on 2006-10-24." href="/en-US/Firefox/Releases/2">2.0</a> (1.8.1)</td>
   <td>9</td>
   <td>9.5</td>
   <td>3</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td>46</td>
   <td><a title="Released on 2014-12-01." href="/en-US/Firefox/Releases/34">34</a> (34)</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>1.0 (1.8.1)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td>47</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>34.0 (34.0)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a></li>
 <li><a title="The delete operator removes a property from an object." href="/en-US/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code></a></li>
 <li><a title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a></li>
 <li><a title="The documentation about this has not yet been written; please consider contributing!" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter"><code>__defineGetter__</code></a></li>
 <li><a title="The documentation about this has not yet been written; please consider contributing!" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter"><code>__defineSetter__</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining Getters and Setters</a> in JavaScript Guide</li>
</ul>
                  
                
              