
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>values()</strong></code> method returns a new <code><strong>Iterator</strong></code> object that contains the values for each element in the <code>Set</code> object in insertion order.</p>

<p>The <strong><code>keys()</code></strong> method is an alias for this method (for similarity with <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" title="The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value."><code>Map</code></a> objects); it behaves exactly the same and returns <strong>values</strong> of <code>Set</code> elements.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><em>mySet</em>.values();
</code></pre>

<h3 id="Return_value">Return value</h3>

<p>A new <code><strong>Iterator</strong></code> object containing the values for each element in the given <code>Set</code>, in insertion order.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_values()">Using <code>values()</code></h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(&apos;foo&apos;);
mySet.add(&apos;bar&apos;);
mySet.add(&apos;baz&apos;);

var setIter = mySet.values();

console.log(setIter.next().value); // &quot;foo&quot;
console.log(setIter.next().value); // &quot;bar&quot;
console.log(setIter.next().value); // &quot;baz&quot;</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.values" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Set.prototype.values&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-set.prototype.values" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Set.prototype.values&apos; in that specification.</small></a></td>
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
   <td>38</td>
   <td><a href="/en-US/Firefox/Releases/24" title="Released on 2013-09-17.">24</a> (24)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>25</td>
   <td>7.1</td>
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
   <td>38</td>
   <td>24.0 (24)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries" title="The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned."><code>Set.prototype.entries()</code></a></li>
</ul>
                  
                
              