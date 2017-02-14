
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <strong><code>set</code></strong> syntax binds an object property to a function to be called when there is an attempt to set that property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">{set <em>prop</em>(<em>val</em>) { . . . }}
{set [expression](<em>val</em>) { . . . }}</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>The name of the property to bind to the given function.</dd>
</dl>

<dl>
 <dt><code>val</code></dt>
 <dd>An alias for the variable that holds the value attempted to be assigned to <code>prop.</code></dd>
 <dt>expression</dt>
 <dd>Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.</p>

<p>Note the following when working with the <code>set</code> syntax:</p>

<div>
<ul>
 <li>It can have an identifier which is either a number or a string;</li>
 <li>It must have exactly one parameter (see <a href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow" class="external">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments</a> for more information);</li>
 <li>It must not appear in an object literal with another <code>set</code> or with a data entry for the same property.<br>
  ( <code>{ set x(v) { }, set x(v) { } }</code> and <code>{ x: ..., set x(v) { } }</code> are forbidden )</li>
</ul>
</div>

<p>A setter can be removed using the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete" title="en-US/docs/JavaScript/Reference/Operators/Special/delete"><code>delete</code></a> operator.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_a_setter_on_new_objects_in_object_initializers">Defining a setter on new objects in object initializers</h3>

<p>This will define a pseudo-property <code>current</code> of object <code>o</code> that, when assigned a value, will update <code>log</code> with that value:</p>

<pre class="brush: js">var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = &apos;EN&apos;;
console.log(language.log); // [&apos;EN&apos;]

language.current = &apos;FA&apos;;
console.log(language.log); // [&apos;EN&apos;, &apos;FA&apos;]
</pre>

<p>Note that <code>current</code> is not defined and any attempts to access it will result in <code>undefined</code>.</p>

<h3 id="Removing_a_setter_with_the_delete_operator">Removing a setter with the <code>delete</code> operator</h3>

<p>If you want to remove the setter, you can just <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> it:</p>

<pre class="brush: js">delete o.current;
</pre>

<h3 id="Defining_a_setter_on_existing_objects_using_defineProperty">Defining a setter on existing objects using <code>defineProperty</code></h3>

<p>To append a setter to an existing object later at any time, use <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."><code>Object.defineProperty()</code></a>.</p>

<pre class="brush: js">var o = {a: 0};

Object.defineProperty(o, &apos;b&apos;, { set: function(x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the &apos;a&apos; property
console.log(o.a) // 5</pre>

<h3 id="Using_a_computed_property_name">Using a computed property name</h3>

<pre class="brush: js">var expr = &apos;foo&apos;;

var obj = {
  baz: &apos;bar&apos;,
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // &quot;bar&quot;
obj.foo = &apos;baz&apos;;      // run the setter
console.log(obj.baz); // &quot;baz&quot;
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
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="en-US">The definition of &apos;Object Initializer&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-method-definitions" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Method definitions&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Added computed property names.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-method-definitions" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Method definitions&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/2" title="Released on 2006-10-24.">2.0</a> (1.8.1)</td>
   <td>9</td>
   <td>9.5</td>
   <td>3</td>
  </tr>
  <tr>
   <td>Computed property names</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><a href="/en-US/Firefox/Releases/34" title="Released on 2014-12-01.">34</a> (34)</td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>34.0 (34.0)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="SpiderMonkey-specific_notes">SpiderMonkey-specific notes</h2>

<ul>
 <li>Starting with<a href="/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8.1"> JavaScript 1.8.1</a>, setters are no longer called when setting properties in object and array initializers.</li>
 <li>From SpiderMonkey 38 on, a setter with a <a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" title="The rest parameter syntax allows us to represent an indefinite number of arguments as an array.">rest parameter</a> is a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="The SyntaxError object represents an error when trying to interpret syntactically invalid code."><code>SyntaxError</code></a> as per the ES2015 specification.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete" title="The delete operator removes a property from an object."><code>delete</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" title="The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object."><code>Object.defineProperty()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineGetter" title="The documentation about this has not yet been written; please consider contributing!"><code>__defineGetter__</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineSetter" title="The documentation about this has not yet been written; please consider contributing!"><code>__defineSetter__</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining Getters and Setters</a> in JavaScript Guide</li>
</ul>
                  
                
              