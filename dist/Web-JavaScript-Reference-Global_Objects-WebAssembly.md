<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The **`WebAssembly`** JavaScript object represents the [WebAssembly](/en-US/docs/WebAssembly) environment in JavaScript, and acts as the namespace for all WebAssembly-related functionality.

## Syntax

<pre class="syntaxbox">WebAssembly</pre>

## Description

The primary uses for the `WebAssembly` object are:

*   Compiling/instantiating wasm modules that have been loaded into a JavaScript instance as [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays), using the [`WebAssembly.compile()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile "The compile() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance.")/[`WebAssembly.instantiate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate "The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step — it returns an Instance object instance.") methods. You can also compile a new module using the [`WebAssembly.Module()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module "The Module() constructor of the WebAssembly global object creates a new Module object instance.") constructor.
*   Creating new memory and table instances via the [`WebAssembly.Memory()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory "The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memorys.")/[`WebAssembly.Table()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table "The Table() constructor of the WebAssembly global object creates a new Table object instance.") constructors.
*   Create new wasm instances from compiled modules via the [`WebAssembly.Instance()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance "The Instance() constructor of the WebAssembly global object instantiates a Module instance to create a new Instance object instance.") constructor.
*   Providing facilities to handle errors that occur in WebAssembly via the [`WebAssembly.CompileError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError "The CompileError() constructor of the WebAssembly global object creates a new WebAssembly CompileError instance, which indicates an error during WebAssembly decoding or validation.")/[`WebAssembly.LinkError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError "The LinkError() constructor of the WebAssembly global object creates a new WebAssembly LinkError instance, which indicates an error during module instantiation (besides traps from the start function).")/[`WebAssembly.RuntimeError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError "The RuntimeError() constructor of the WebAssembly global object creates a new WebAssembly RuntimeError instance — the type that is thrown whenever WebAssembly specifies a trap.") constructors.

## Constructors

<dl>

<dt>[`WebAssembly.Module()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module "The Module() constructor of the WebAssembly global object creates a new Module object instance.")</dt>

<dd>Creates a new WebAssembly `[Module](/en-US/docs/WebAssembly/API/Module)` object instance.</dd>

<dt>[`WebAssembly.Instance()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance "The Instance() constructor of the WebAssembly global object instantiates a Module instance to create a new Instance object instance.")</dt>

<dd>Creates a new WebAssembly `[Instance](/en-US/docs/WebAssembly/API/Instance)` object instance.</dd>

<dt>[`WebAssembly.Memory()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory "The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memorys.")</dt>

<dd>Creates a new WebAssembly `[Memory](/en-US/docs/WebAssembly/API/Memory)` object instance.</dd>

<dt>[`WebAssembly.Table()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table "The Table() constructor of the WebAssembly global object creates a new Table object instance.")</dt>

<dd>Creates a new WebAssembly `[Table](/en-US/docs/WebAssembly/API/Table)` object instance.</dd>

<dt>[`WebAssembly.CompileError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError "The CompileError() constructor of the WebAssembly global object creates a new WebAssembly CompileError instance, which indicates an error during WebAssembly decoding or validation.")</dt>

<dd>Creates a new WebAssembly `CompileError` object instance.</dd>

<dt>[`WebAssembly.LinkError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError "The LinkError() constructor of the WebAssembly global object creates a new WebAssembly LinkError instance, which indicates an error during module instantiation (besides traps from the start function).")</dt>

<dd>Creates a new WebAssembly `LinkError` object instance.</dd>

<dt>[`WebAssembly.RuntimeError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError "The RuntimeError() constructor of the WebAssembly global object creates a new WebAssembly RuntimeError instance — the type that is thrown whenever WebAssembly specifies a trap.")</dt>

<dd>Creates a new WebAssembly `RuntimeError` object instance.</dd>

</dl>

## Methods

<dl>

<dt>[`WebAssembly.compile()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile "The compile() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance.")</dt>

<dd>Compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using [`Fetch`](/en-US/docs/Web/API/Fetch "The fetch() method of the GlobalFetch interface starts the process of fetching a resource. This returns a promise that resolves to the Response object representing the response to your request.")/[`arrayBuffer`](/en-US/docs/Web/API/Body/arrayBuffer "The arrayBuffer() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with an ArrayBuffer.") into a [Module](/en-US/docs/WebAssembly/API/Module) object instance.</dd>

<dt>[`WebAssembly.instantiate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate "The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step — it returns an Instance object instance.")</dt>

<dd>Compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using [`Fetch`](/en-US/docs/Web/API/Fetch "The fetch() method of the GlobalFetch interface starts the process of fetching a resource. This returns a promise that resolves to the Response object representing the response to your request.")/[`arrayBuffer`](/en-US/docs/Web/API/Body/arrayBuffer "The arrayBuffer() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with an ArrayBuffer.") into a Module object instance and then instantiates that module, all in one step — it returns an [Instance](/en-US/docs/WebAssembly/API/Instance) object instance.</dd>

<dt>[`WebAssembly.validate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate "The validate() method of the WebAssembly object validates a given typed array source, returning a Boolean that specifies whether the source is valid wasm code (true) or not (false).")</dt>

<dd>Validates a given array buffer source, returning a [`Boolean`](/en-US/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.") that specifies whether the source is valid wasm code (`true`) or not (`false`).</dd>

</dl>

## Examples

The following example compiles and instantiates the loaded simple.wasm byte code using the [`WebAssembly.instantiate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate "The instantiate() method of the WebAssembly object compiles a .wasm file loaded into the JavaScript context as a typed array (e.g. using Fetch/arrayBuffer into a Module object instance and then instantiates that module, all in one step — it returns an Instance object instance.") method, importing a JavaScript function into the WebAssembly Module in the process — this promise resolves to an object (`obj`) containing the compiled `[Module](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)` instance, and it's instantiated `Instance` instance. We then export a function from the module via `Instance.exports.exported_func()`.

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(function(response) {
  response.arrayBuffer().then(function(bytes) {
    WebAssembly.instantiate(bytes, importObject).then(function(obj) {
      obj.instance.exports.exported_func();
    })
  })
});</pre>

<div class="note">

**Note**: See [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)) for an example that makes use of `Instance`.

</div>

## Specifications

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

<td>[Web Assembly JavaScript API  
<small lang="en-US">The definition of 'WebAssembly' in that specification.</small>](https://github.com/WebAssembly/design/blob/master/JS.md#the-webassembly-object)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Initial draft definition.</td>

</tr>

</tbody>

</table>

## Browser compatibility

<div>

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

</div>

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

<td><span style="color: #f00;">No support</span><sup>[1]</sup></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span><sup>[2]</sup></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span><sup>[1]</sup></td>

<td><span style="color: #f00;">No support</span></td>

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

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span><sup>[1]</sup></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span><sup>[2]</sup></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span><sup>[1]</sup></td>

</tr>

</tbody>

</table>

</div>

[1] Experimental support can be enabled in Chrome 51+ and Opera 38+ by going to `chrome://flags` and enabling the _Experimental WebAssembly_ flag.

[2] Experimental support can be enabled in Firefox 47+ by enabling the _javascript.options.wasm_ flag in `about:config`.

## See also

*   [WebAssembly](/en-US/docs/WebAssembly) landing page.
*   WebAssembly concepts
*   Using the WebAssembly JavaScript API