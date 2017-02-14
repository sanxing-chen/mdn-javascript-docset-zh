
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The initial value of the <code><strong>@@iterator</strong></code> property is the same function object as the initial value of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries" title="The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order."><code>entries</code></a> property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><em>myMap</em>[Symbol.iterator]</code></pre>

<h3 id="Return_value">Return value</h3>

<p>The map <strong>iterator</strong> function, which is the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries" title="The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order."><code>entries()</code></a> function by default.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_iterator()">Using <code>[@@iterator]()</code></h3>

<pre class="brush:js">var myMap = new Map();
myMap.set(&apos;0&apos;, &apos;foo&apos;);
myMap.set(1, &apos;bar&apos;);
myMap.set({}, &apos;baz&apos;);

var mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // [&quot;0&quot;, &quot;foo&quot;]
console.log(mapIter.next().value); // [1, &quot;bar&quot;]
console.log(mapIter.next().value); // [Object, &quot;baz&quot;]
</pre>

<h3 id="Using_iterator()_with_for..of">Using <code>[@@iterator]()</code> with <code>for..of</code></h3>

<pre class="brush:js">var myMap = new Map();
myMap.set(&apos;0&apos;, &apos;foo&apos;);
myMap.set(1, &apos;bar&apos;);
myMap.set({}, &apos;baz&apos;);

for (var v of myMap) {
  console.log(v);
}
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-map.prototype-@@iterator" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;Map.prototype[@@iterator]()&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-map.prototype-@@iterator" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;Map.prototype[@@iterator]()&apos; in that specification.</small></a></td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a href="/en-US/Firefox/Releases/36" title="Released on 2015-02-24.">36</a> (36) [1]</td>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>36.0 (36) [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] From Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) to Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) the <code>iterator</code> property was used (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077" class="external">bug 907077</a>), and from Gecko 27 to Gecko 35 the <code>&quot;@@iterator&quot;</code> placeholder was used. In Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), the <code>@@iterator</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol</a> got implemented (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828" class="external">bug 918828</a>).</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries" title="The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order."><code>Map.prototype.entries()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys" title="The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order."><code>Map.prototype.keys()</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values" title="The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order."><code>Map.prototype.values()</code></a></li>
</ul>
                
              