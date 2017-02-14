
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section><div class="notice experimental">
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p>
</div></div>

<p>The <strong><code>WebAssembly</code></strong> JavaScript object represents the <a href="/en-US/docs/WebAssembly">WebAssembly</a> environment in JavaScript, and acts as the namespace for all WebAssembly-related functionality.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">WebAssembly</pre>

<h2 id="Description">Description</h2>

<p>The primary uses for the <code>WebAssembly</code> object are:</p>

<ul>
 <li>Compiling/instantiating wasm modules that have been loaded into a JavaScript instance as <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>, using the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile" title="The compile() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance."><code>WebAssembly.compile()</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate" title="The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step &#x2014; it returns an Instance object instance."><code>WebAssembly.instantiate()</code></a> methods. You can also compile a new module using the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module" title="The Module() constructor of the WebAssembly global object creates a new Module object instance."><code>WebAssembly.Module()</code></a> constructor.</li>
 <li>Creating new memory and table instances via the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory" title="The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memorys."><code>WebAssembly.Memory()</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table" title="The Table() constructor of the WebAssembly global object creates a new Table object instance."><code>WebAssembly.Table()</code></a> constructors.</li>
 <li>Create new wasm instances from compiled modules via the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance" title="The Instance() constructor of the WebAssembly global object instantiates a Module instance to create a new Instance object instance."><code>WebAssembly.Instance()</code></a> constructor.</li>
 <li>Providing facilities to handle errors that occur in WebAssembly via the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError" title="The CompileError() constructor of the WebAssembly global object creates a new WebAssembly CompileError instance, which indicates an error during WebAssembly decoding or validation."><code>WebAssembly.CompileError()</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError" title="The LinkError() constructor of the WebAssembly global object creates a new WebAssembly LinkError instance, which indicates an error during module instantiation (besides traps from the start function)."><code>WebAssembly.LinkError()</code></a>/<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError" title="The RuntimeError() constructor of the WebAssembly global object creates a new WebAssembly RuntimeError instance &#x2014; the type that is thrown whenever WebAssembly specifies a trap."><code>WebAssembly.RuntimeError()</code></a> constructors.</li>
</ul>

<h2 id="Constructors">Constructors</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module" title="The Module() constructor of the WebAssembly global object creates a new Module object instance."><code>WebAssembly.Module()</code></a></dt>
 <dd>Creates a new WebAssembly <code><a href="/en-US/docs/WebAssembly/API/Module">Module</a></code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance" title="The Instance() constructor of the WebAssembly global object instantiates a Module instance to create a new Instance object instance."><code>WebAssembly.Instance()</code></a></dt>
 <dd>Creates a new WebAssembly <code><a href="/en-US/docs/WebAssembly/API/Instance">Instance</a></code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory" title="The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memorys."><code>WebAssembly.Memory()</code></a></dt>
 <dd>Creates a new WebAssembly <code><a href="/en-US/docs/WebAssembly/API/Memory">Memory</a></code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table" title="The Table() constructor of the WebAssembly global object creates a new Table object instance."><code>WebAssembly.Table()</code></a></dt>
 <dd>Creates a new WebAssembly <code><a href="/en-US/docs/WebAssembly/API/Table">Table</a></code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError" title="The CompileError() constructor of the WebAssembly global object creates a new WebAssembly CompileError instance, which indicates an error during WebAssembly decoding or validation."><code>WebAssembly.CompileError()</code></a></dt>
 <dd>Creates a new WebAssembly <code>CompileError</code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError" title="The LinkError() constructor of the WebAssembly global object creates a new WebAssembly LinkError instance, which indicates an error during module instantiation (besides traps from the start function)."><code>WebAssembly.LinkError()</code></a></dt>
 <dd>Creates a new WebAssembly <code>LinkError</code> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError" title="The RuntimeError() constructor of the WebAssembly global object creates a new WebAssembly RuntimeError instance &#x2014; the type that is thrown whenever WebAssembly specifies a trap."><code>WebAssembly.RuntimeError()</code></a></dt>
 <dd>Creates a new WebAssembly <code>RuntimeError</code> object instance.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile" title="The compile() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance."><code>WebAssembly.compile()</code></a></dt>
 <dd>Compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using <a href="/en-US/docs/Web/API/Fetch" title="The fetch() method of the GlobalFetch interface starts the process of fetching a resource. This returns a promise that resolves to the Response object representing the response to your request."><code>Fetch</code></a>/<a href="/en-US/docs/Web/API/Body/arrayBuffer" title="The arrayBuffer() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with an&#xA0;ArrayBuffer."><code>arrayBuffer</code></a> into a <a href="/en-US/docs/WebAssembly/API/Module">Module</a> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate" title="The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step &#x2014; it returns an Instance object instance."><code>WebAssembly.instantiate()</code></a></dt>
 <dd>Compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using <a href="/en-US/docs/Web/API/Fetch" title="The fetch() method of the GlobalFetch interface starts the process of fetching a resource. This returns a promise that resolves to the Response object representing the response to your request."><code>Fetch</code></a>/<a href="/en-US/docs/Web/API/Body/arrayBuffer" title="The arrayBuffer() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with an&#xA0;ArrayBuffer."><code>arrayBuffer</code></a> into a Module object instance and then instantiates that module, all in one step &#x2014; it returns an <a href="/en-US/docs/WebAssembly/API/Instance">Instance</a> object instance.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate" title="The validate() method of the WebAssembly object validates a given typed array source, returning a Boolean that specifies whether the source is valid wasm code (true) or not (false)."><code>WebAssembly.validate()</code></a></dt>
 <dd>Validates a given array buffer source, returning a <a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> that specifies whether the source is valid wasm code (<code>true</code>) or not (<code>false</code>).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example compiles and instantiates the loaded simple.wasm byte code using the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate" title="The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step &#x2014; it returns an Instance object instance."><code>WebAssembly.instantiate()</code></a> method, importing a JavaScript function into the WebAssembly Module in the process &#x2014; this promise resolves to an object (<code>obj</code>) containing the compiled <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module">Module</a></code> instance, and it&apos;s instantiated <code>Instance</code> instance. We then export a function from the module via <code>Instance.exports.exported_func()</code>.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch(&apos;simple.wasm&apos;).then(function(response) {
  response.arrayBuffer().then(function(bytes) {
    WebAssembly.instantiate(bytes, importObject).then(function(obj) {
      obj.instance.exports.exported_func();
    })
  })
});</pre>

<div class="note">
<p><strong>Note</strong>: See <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html" class="external">index.html</a> on GitHub (<a href="https://mdn.github.io/webassembly-examples/js-api-examples/" class="external">view it live also</a>) for an example that makes use of <code>Instance</code>.</p>
</div>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://github.com/WebAssembly/design/blob/master/JS.md#the-webassembly-object" class="external" lang="en" hreflang="en">Web Assembly JavaScript API<br><small lang="en-US">The definition of &apos;WebAssembly&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Initial draft definition.</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">Browser compatibility</h2>

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
   <th>Edge</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari (WebKit)</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[1]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[2]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[1]</sup></td>
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
   <th>Android Webview</th>
   <th>Edge</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Phone</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[1]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[2]</sup></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span><sup>[1]</sup></td>
  </tr>
 </tbody>
</table>
</div>

<p>[1] Experimental support can be enabled in Chrome 51+ and Opera 38+ by going to <code>chrome://flags</code> and enabling the <em>Experimental WebAssembly</em> flag.</p>

<p>[2] Experimental support can be enabled in Firefox 47+ by enabling the <em>javascript.options.wasm</em> flag in <code>about:config</code>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> landing page.</li>
 <li>WebAssembly concepts</li>
 <li>Using the WebAssembly JavaScript API</li>
</ul>
                
              