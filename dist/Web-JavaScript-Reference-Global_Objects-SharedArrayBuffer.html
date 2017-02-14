
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="notice experimental">
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p>
</div></div>

<p>The <strong><code>SharedArrayBuffer</code></strong> object is used to represent a generic, fixed-length raw binary data buffer, similar to the <a title="The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a> object, but in a way that they can be used to create views on shared memory. Unlike an <code>ArrayBuffer</code>, a <code>SharedArrayBuffer</code> cannot become detached.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">new SharedArrayBuffer(length)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>length</code></dt>
 <dd>The size, in bytes, of the array buffer to create.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new <code>SharedArrayBuffer</code> object of the specified size. Its contents are initialized to 0.</p>

<h2 id="Description">Description</h2>

<h3 id="Allocating_and_sharing_memory">Allocating and sharing memory</h3>

<p>To share memory using <a title="The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer, similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer"><code>SharedArrayBuffer</code></a> objects from one agent in the cluster to another (an agent is either the web page&#x2019;s main program or one of its web workers), <code><a href="/en-US/docs/Web/API/Worker/postMessage">postMessage</a></code> and <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured cloning</a> is used.</p>

<p>The structured clone algorithm accepts <code>SharedArrayBuffers</code> and <code>TypedArrays</code> mapped onto <code>SharedArrayBuffers</code>. In both cases, the <code>SharedArrayBuffer</code> object is transmitted to the receiver resulting in a new, private SharedArrayBuffer object in the receiving agent (just as for <a title="The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>). However, the shared data block referenced by the two <code>SharedArrayBuffer</code> objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

<p>In earlier versions of the specification, <code>SharedArrayBuffer</code>s needed to be explicitly transferred during structured cloning. However, a <code>SharedArrayBuffer</code> is not a <a href="/en-US/docs/Web/API/Transferable"><code>Transferable</code> object</a> in the sense of HTML. Thus if a <code>SharedArrayBuffer</code> object is present in the transfer list, then <code>postMessage</code> will throw a <code>DataCloneError</code> or at least a warning:</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab, [sab]); 
// SharedArrayBuffer must not be in the transfer list</pre>

<h3 id="Updating_and_synchronizing_shared_memory_with_Atomic_operations">Updating and synchronizing shared memory with Atomic operations</h3>

<p>Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, <a title="The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics">atomic</a> operations are needed.</p>

<h3 id="APIs_accepting_SharedArrayBuffer_objects">APIs accepting <code>SharedArrayBuffer</code> objects</h3>

<ul>
 <li><a title="The WebGLRenderingContext.bufferData() method of the WebGL API initializes and creates the buffer object&apos;s data store." href="/en-US/docs/Web/API/WebGLRenderingContext/bufferData"><code>WebGLRenderingContext.bufferData()</code></a></li>
 <li><a title="The WebGLRenderingContext.bufferSubData() method of the WebGL API updates a subset of a buffer object&apos;s data store." href="/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData"><code>WebGLRenderingContext.bufferSubData()</code></a></li>
 <li><a title="The WebGL2RenderingContext.getBufferSubData() method of the WebGL 2 API reads data from a buffer binding point and writes them to an ArrayBuffer or SharedArrayBuffer." href="/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData"><code>WebGL2RenderingContext.getBufferSubData()</code></a></li>
</ul>

<h3 id="Constructing_is_required_with_new_operator">Constructing is required with <code>new</code> operator</h3>

<p><code>SharedArrayBuffer</code> constructors require to be constructed with a <a title="The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function." href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> operator. Calling a <code>SharedArrayBuffer</code> constructor as a function without <code>new</code>, will throw a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>.</p>

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor 
// without new is forbidden</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

<h2 id="Properties">Properties</h2>

<dl>
 <dt><code>SharedArrayBuffer.length</code></dt>
 <dd>The <code>SharedArrayBuffer</code> constructor&apos;s length property whose value is 1.</dd>
 <dt><a title="The SharedArrayBuffer.prototype property represents the prototype for the SharedArrayBuffer object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype"><code>SharedArrayBuffer.prototype</code></a></dt>
 <dd>Allows the addition of properties to all <code>SharedArrayBuffer</code> objects.</dd>
</dl>

<h2 id="SharedArrayBuffer_prototype_object"><code>SharedArrayBuffer</code> prototype object</h2>

<p>All <code>SharedArrayBuffer</code> instances inherit from <a title="The SharedArrayBuffer.prototype property represents the prototype for the SharedArrayBuffer object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype"><code>SharedArrayBuffer.prototype</code></a>.</p>

<h3 id="Properties_2">Properties</h3>

<p></p><dl><dt>SharedArrayBuffer.prototype.constructor</dt>
 <dd>Specifies the function that creates an object&apos;s prototype. The initial value is the standard built-in <code>SharedArrayBuffer</code> constructor.</dd>
 <dt><a title="The byteLength accessor property represents the length of an SharedArrayBuffer in bytes." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength"><code>SharedArrayBuffer.prototype.byteLength</code></a> <span title="This value may not be changed." class="inlineIndicator readOnly readOnlyInline">Read only </span></dt>
 <dd>The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. <strong>Read only.</strong></dd>
</dl><p></p>

<h3 id="Methods">Methods</h3>

<p></p><dl><dt><a title="The SharedArrayBuffer.prototype.slice() method returns a new SharedArrayBuffer whose contents are a copy of this SharedArrayBuffer&apos;s bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning. This method has the same algorithm as Array.prototype.slice()." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice"><code>SharedArrayBuffer.prototype.slice(begin, end)</code></a></dt>
 <dd>Returns a new <code>SharedArrayBuffer</code> whose contents are a copy of this <code>SharedArrayBuffer</code>&apos;s bytes from <code>begin</code>, inclusive, up to <code>end</code>, exclusive. If either <code>begin</code> or <code>end</code> is negative, it refers to an index from the end of the array, as opposed to from the beginning.</dd>
</dl><p></p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://tc39.github.io/ecmascript_sharedmem/shmem.html#StructuredData.SharedArrayBuffer" class="external">ECMAScript Shared Memory and Atomics<br><small lang="en-US">The definition of &apos;SharedArrayBuffer&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="https://tc39.github.io/ecma262/" title="The &apos;ECMAScript 2017 Draft (ECMA-262)&apos; specification">ECMAScript 2017 Draft (ECMA-262)</a></td>
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
   <td><a title="Released on 2016-04-26." href="/en-US/Firefox/Releases/46">46</a> (46) [1]</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
  <tr>
   <td><code>slice()</code></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><a title="Released on 2017-03-07." href="/en-US/Firefox/Releases/52">52</a> (52) [1]</td>
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
  <tr>
   <td><code>slice()</code></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td>52.0 (52) [1]</td>
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
 <li><a title="The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics"><code>Atomics</code></a></li>
 <li><a title="The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple" class="external">parlib-simple </a>&#x2013; a simple library providing synchronization and work distribution abstractions.</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md" class="external">Shared Memory &#x2013; a brief tutorial</a></li>
 <li>
  <p><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/" class="external">A Taste of JavaScript&#x2019;s New Parallel Primitives &#x2013; Mozilla Hacks</a></p>
 </li>
</ul>
                
              