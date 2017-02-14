
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>The <code><strong>fill()</strong></code> method fills all the elements of a typed array from a start index to an end index with a static value. This method has the same algorithm as <a title="The fill() method fills all the elements of an array from a start index to an end index with a static value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><code>Array.prototype.fill()</code></a><em>.</em> <em>TypedArray</em> is one of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array types</a> here.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>typedarray</var>.<code>fill(<var>value</var>[, <var>start<var> = 0[, <var>end</var> = this.length]])</var></var></code></code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>Value to fill the typed array with.</dd>
 <dt><code>start</code></dt>
 <dd>Optional. Start index. Defaults to 0.</dd>
 <dt><code>end</code></dt>
 <dd>Optional. End index (not included). Defaults to this.length.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The modified array.</p>

<h2 id="Description">Description</h2>

<p>The elements interval to fill is [<code>start</code>, <code>end</code>).</p>

<p>The <strong><code>fill</code></strong> method takes up to three arguments <code>value</code>, <code>start</code> and <code>end</code>. The <code>start</code> and <code>end</code> arguments are optional with default values of <code>0</code> and the <code>length</code> of the <code>this</code> object.</p>

<p>If <code>start</code> is negative, it is treated as <code>length+start</code> where <code>length</code> is the length of the array. If <code>end</code> is negative, it is treated as <code>length+end</code>.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">new Uint8Array([1, 2, 3]).fill(4);         // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1);      // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2);   // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1);   // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Since there is no global object with the name <em>TypedArray</em>, polyfilling must be done on an &quot;as needed&quot; basis. Use the following &quot;polyfill&quot; along with the <a title="The fill() method fills all the elements of an array from a start index to an end index with a static value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><code>Array.prototype.fill()</code></a> polyfill.</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
if (!Uint8Array.prototype.fill) {
  Uint8Array.prototype.fill = Array.prototype.fill;
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%.prototype.fill" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.fill&apos; in that specification.</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="en-US">The definition of &apos;TypedArray.prototype.fill&apos; in that specification.</small></a></td>
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
   <td>45</td>
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>32</td>
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
   <td><a title="Released on 2015-04-07." href="/en-US/Firefox/Releases/37">37</a> (37)</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="The fill() method fills all the elements of an array from a start index to an end index with a static value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><code>Array.prototype.fill()</code></a></li>
</ul>
                
              