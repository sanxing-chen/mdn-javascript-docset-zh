
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="notice experimental"> 
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p> 
</div></div>

<p>The static <code><strong>Atomics</strong></code><strong><code>.add()</code></strong> method adds a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Atomics.add(typedArray, index, value)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>A shared integer typed array. One of <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array" title="The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int8Array</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" title="The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Uint8Array</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array" title="The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int16Array</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array" title="The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Uint16Array</code></a>, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array" title="The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int32Array</code></a>, or <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array" title="The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Uint32Array</code></a>.</dd>
 <dt><code>index</code></dt>
 <dd>The position in the <code>typedArray</code> to add a <code>value</code> to.</dd>
 <dt><code>value</code></dt>
 <dd>The number to add.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The old value at the given position (<code>typedArray[index]</code>).</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>, if <code>typedArray</code> is not one of the allowed integer types.</li>
 <li>Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>, if <code>typedArray</code> is not a shared typed array type.</li>
 <li>Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="The RangeError object indicates an error when a value is not in the set or range of allowed values."><code>RangeError</code></a>, if <code>index</code> is out of bounds in the <code>typedArray</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecmascript_sharedmem/shmem.html#Atomics.add" class="external" lang="en" hreflang="en">ECMAScript Shared Memory and Atomics<br><small lang="en-US">The definition of &apos;Atomics.add&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Initial definition.</td>
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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span> [2]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><a href="/en-US/Firefox/Releases/46" title="Released on 2016-04-19.">46</a> (46) [1]</td>
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
   <td>46.0 (46) [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] This feature is disabled by a preference setting. In about:config, set <code>javascript.options.shared_memory</code> to <code>true</code>.&#xA0;</p>

<p>[2] The implementation is under development and needs these runtime flags: <code>--js-flags=--harmony-sharedarraybuffer --enable-blink-feature=SharedArrayBuffer</code></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics" title="The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects."><code>Atomics</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub" title="The static Atomics.sub() method substracts a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back."><code>Atomics.sub()</code></a></li>
</ul>
                
              