
                
                  <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="notice experimental"> 
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p> 
</div></div>

<p>The static <code><strong>Atomics</strong></code><strong><code>.wake()</code></strong> method wakes up some agents that are sleeping in the wait queue.</p>

<div class="note">
<p><strong>Note:</strong> This operation works with a shared <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array" title="The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int32Array</code></a> only.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Atomics.wake(typedArray, index, count)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>A shared <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array" title="The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int32Array</code></a>.</dd>
 <dt><code>index</code></dt>
 <dd>The position in the <code>typedArray</code> to wake up on.</dd>
 <dt><code>count</code></dt>
 <dd>The number of sleeping agents to wake. Defaults to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity" title="The global Infinity property is a numeric value representing infinity."><code>+Infinity</code></a>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A number of woken up agents.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a>, if <code>typedArray</code> is not a shared <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array" title="The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object&apos;s methods, or using standard array index syntax (that is, using bracket notation)."><code>Int32Array</code></a>.</li>
 <li>Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError" title="The RangeError object indicates an error when a value is not in the set or range of allowed values."><code>RangeError</code></a>, if <code>index</code> is out of bounds in the <code>typedArray</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>Given a shared <code>Int32Array</code>:</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
</pre>

<p>A reading thread is sleeping and waiting on location 0 which is expected to be 0. As long as that is true, it will not go on. However, once the writing thread has stored a new value, it will be woken up by the writing thread and return the new value (123).</p>

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

<p>A writing thread stores a new value and wakes up the waiting thread once it has written:</p>

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123); 
Atomics.wake(int32, 0, 1);</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://tc39.github.io/ecmascript_sharedmem/shmem.html#Atomics.wake" class="external" lang="en" hreflang="en">ECMAScript Shared Memory and Atomics<br><small lang="en-US">The definition of &apos;Atomics.wake&apos; in that specification.</small></a></td>
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
   <td><a href="/en-US/Firefox/Releases/46" title="Released on 2016-04-19.">46</a> (46) [1] [3]</td>
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

<p><code>[3]</code> In versions 46 and 47, this method was named <code>Atomics.futexWake()</code> and the <code>count</code> parameter defaulted to <code>0</code>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics" title="The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects."><code>Atomics</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait" title="The static Atomics.wait() method verifies that a given position in an Int32Array still contains a given value and sleeps awaiting or times out. It returns a string which is either &quot;ok&quot;, &quot;not-equal&quot;, or &quot;timed-out&quot;."><code>Atomics.wait()</code></a></li>
</ul>
                
              