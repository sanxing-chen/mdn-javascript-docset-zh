
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>Set[@@species]</strong></code> accessor property returns the <code>Set</code> constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Set[Symbol.species]
</pre>

<h2 id="Description">Description</h2>

<p>The species accessor property returns the default constructor for <code>Set</code> objects. Subclass constructors may over-ride it to change the constructor assignment.</p>

<h2 id="Examples">Examples</h2>

<p>The species property returns the default constructor function, which is the <code>Set</code> constructor for <code>Set</code> objects:</p>

<pre class="brush: js">Set[Symbol.species]; // function Set()</pre>

<p>In a derived collection object (e.g. your custom set <code>MySet</code>), the <code>MySet</code> species is the <code>MySet</code> constructor. However, you might want to overwrite this, in order to return parent <code>Set</code> objects in your derived class methods:</p>

<pre class="brush: js">class MySet extends Set {
  // Overwrite MySet species to the parent Set constructor
  static get [Symbol.species]() { return Set; }
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-set-@@species" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;get Set [ @@species ]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-get-set-@@species" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;get Set [ @@species ]&apos; in that specification.</small></a></td>
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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><a title="Released on 2015-09-22." href="/en-US/Firefox/Releases/41">41</a> (41)</td>
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
   <td>41.0 (41)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The Set object lets you store unique values of any type, whether primitive values or object references." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a></li>
 <li><a title="The Symbol.species well-known symbol specifies a function valued property that is the constructor function that is used to create derived objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species"><code>Symbol.species</code></a></li>
</ul>
                
              