
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>Map[@@species]</strong></code> accessor property returns the <code>Map</code> constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Map[Symbol.species]
</pre>

<h2 id="Description">Description</h2>

<p>The species accessor property returns the default constructor for <code>Map</code> objects. Subclass constructors may over-ride it to change the constructor assignment.</p>

<h2 id="Examples">Examples</h2>

<p>The species property returns the default constructor function, which is the <code>Map</code> constructor for <code>Map</code> objects:</p>

<pre class="brush: js">Map[Symbol.species]; // function Map()</pre>

<p>In a derived collection object (e.g. your custom map <code>MyMap</code>), the <code>MyMap</code> species is the <code>MyMap</code> constructor. However, you might want to overwrite this, in order to return parent <code>Map</code> objects in your derived class methods:</p>

<pre class="brush: js">class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() { return Map; }
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-get-map-@@species" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;get Map [ @@species ]&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-get-map-@@species" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;get Map [ @@species ]&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/41" title="Released on 2015-09-22.">41</a> (41)</td>
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
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" title="The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."><code>Map</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species" title="The Symbol.species well-known symbol specifies a function valued property that is the constructor function that is used to create derived objects."><code>Symbol.species</code></a></li>
</ul>
                
              