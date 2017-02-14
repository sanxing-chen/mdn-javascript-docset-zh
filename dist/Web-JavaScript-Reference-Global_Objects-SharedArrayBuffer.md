<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The **`SharedArrayBuffer`** object is used to represent a generic, fixed-length raw binary data buffer, similar to the [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.") object, but in a way that they can be used to create views on shared memory. Unlike an `ArrayBuffer`, a `SharedArrayBuffer` cannot become detached.

## Syntax

<pre class="syntaxbox">new SharedArrayBuffer(length)
</pre>

### Parameters

<dl>

<dt>`length`</dt>

<dd>The size, in bytes, of the array buffer to create.</dd>

</dl>

### Return value

A new `SharedArrayBuffer` object of the specified size. Its contents are initialized to 0.

## Description

### Allocating and sharing memory

To share memory using [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer "The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer, similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.") objects from one agent in the cluster to another (an agent is either the web page’s main program or one of its web workers), `[postMessage](/en-US/docs/Web/API/Worker/postMessage)` and [structured cloning](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.

The structured clone algorithm accepts `SharedArrayBuffers` and `TypedArrays` mapped onto `SharedArrayBuffers`. In both cases, the `SharedArrayBuffer` object is transmitted to the receiver resulting in a new, private SharedArrayBuffer object in the receiving agent (just as for [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.")). However, the shared data block referenced by the two `SharedArrayBuffer` objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

In earlier versions of the specification, `SharedArrayBuffer`s needed to be explicitly transferred during structured cloning. However, a `SharedArrayBuffer` is not a [`Transferable` object](/en-US/docs/Web/API/Transferable) in the sense of HTML. Thus if a `SharedArrayBuffer` object is present in the transfer list, then `postMessage` will throw a `DataCloneError` or at least a warning:

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab, [sab]); 
// SharedArrayBuffer must not be in the transfer list</pre>

### Updating and synchronizing shared memory with Atomic operations

Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, [atomic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects.") operations are needed.

### APIs accepting `SharedArrayBuffer` objects

*   [`WebGLRenderingContext.bufferData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferData "The WebGLRenderingContext.bufferData() method of the WebGL API initializes and creates the buffer object's data store.")
*   [`WebGLRenderingContext.bufferSubData()`](/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData "The WebGLRenderingContext.bufferSubData() method of the WebGL API updates a subset of a buffer object's data store.")
*   [`WebGL2RenderingContext.getBufferSubData()`](/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData "The WebGL2RenderingContext.getBufferSubData() method of the WebGL 2 API reads data from a buffer binding point and writes them to an ArrayBuffer or SharedArrayBuffer.")

### Constructing is required with `new` operator

`SharedArrayBuffer` constructors require to be constructed with a [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") operator. Calling a `SharedArrayBuffer` constructor as a function without `new`, will throw a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.").

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor 
// without new is forbidden</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

## Properties

<dl>

<dt>`SharedArrayBuffer.length`</dt>

<dd>The `SharedArrayBuffer` constructor's length property whose value is 1.</dd>

<dt>[`SharedArrayBuffer.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype "The SharedArrayBuffer.prototype property represents the prototype for the SharedArrayBuffer object.")</dt>

<dd>Allows the addition of properties to all `SharedArrayBuffer` objects.</dd>

</dl>

## `SharedArrayBuffer` prototype object

All `SharedArrayBuffer` instances inherit from [`SharedArrayBuffer.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/prototype "The SharedArrayBuffer.prototype property represents the prototype for the SharedArrayBuffer object.").

### Properties

<dl>

<dt>SharedArrayBuffer.prototype.constructor</dt>

<dd>Specifies the function that creates an object's prototype. The initial value is the standard built-in `SharedArrayBuffer` constructor.</dd>

<dt>[`SharedArrayBuffer.prototype.byteLength`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength "The byteLength accessor property represents the length of an SharedArrayBuffer in bytes.") <span title="This value may not be changed." class="inlineIndicator readOnly readOnlyInline">Read only</span></dt>

<dd>The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. **Read only.**</dd>

</dl>

### Methods

<dl>

<dt>[`SharedArrayBuffer.prototype.slice(begin, end)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice "The SharedArrayBuffer.prototype.slice() method returns a new SharedArrayBuffer whose contents are a copy of this SharedArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning. This method has the same algorithm as Array.prototype.slice().")</dt>

<dd>Returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.</dd>

</dl>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript Shared Memory and Atomics  
<small lang="en-US">The definition of 'SharedArrayBuffer' in that specification.</small>](http://tc39.github.io/ecmascript_sharedmem/shmem.html#StructuredData.SharedArrayBuffer)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Initial definition.</td>

</tr>

<tr>

<td>[ECMAScript 2017 Draft (ECMA-262)](https://tc39.github.io/ecma262/ "The 'ECMAScript 2017 Draft (ECMA-262)' specification")</td>

<td><span class="spec-Draft">Draft</span></td>

<td> </td>

</tr>

</tbody>

</table>

## Browser compatibility

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

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

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">No support</span> [2]</td>

<td><span style="color: #f00;">No support</span></td>

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-26.") (46) [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

<tr>

<td>`slice()`</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td>[52](/en-US/Firefox/Releases/52 "Released on 2017-03-07.") (52) [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

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

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td>46.0 (46) [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

<tr>

<td>`slice()`</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td>52.0 (52) [1]</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

</tbody>

</table>

</div>

[1] This feature is disabled by a preference setting. In about:config, set `javascript.options.shared_memory` to `true`. 

[2] The implementation is under development and needs these runtime flags: `--js-flags=--harmony-sharedarraybuffer --enable-blink-feature=SharedArrayBuffer`

## See also

*   [`Atomics`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects.")
*   [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.")
*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
*   [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
*   [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
*   [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
*   [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)