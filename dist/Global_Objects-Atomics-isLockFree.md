
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="notice experimental"> 
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p> 
</div></div>

<p>The static <code><strong>Atomics</strong></code><strong><code>.isLockFree()</code></strong> method is used to determine whether to use locks or atomic operations. It returns <code>true</code>, if the given size is one of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT">BYTES_PER_ELEMENT</a> property of integer TypedArray types.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Atomics.isLockFree(size)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>size</code></dt>
 <dd>The size in byte to check.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> indicating whether the operation is lock free.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // false</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecmascript_sharedmem/shmem.html#Atomics.isLockFree" class="external" lang="en" hreflang="en">ECMAScript Shared Memory and Atomics<br><small lang="en-US">The definition of &apos;Atomics.isLockFree&apos; in that specification.</small></a></td>
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
</ul>
                
              