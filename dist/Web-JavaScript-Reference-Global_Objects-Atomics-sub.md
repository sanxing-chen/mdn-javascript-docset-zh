<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The static `**Atomics**`**`.sub()`** method substracts a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Syntax

<pre class="syntaxbox">Atomics.sub(typedArray, index, value)
</pre>

### Parameters

<dl>

<dt>`typedArray`</dt>

<dd>A shared integer typed array. One of [`Int8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."), [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."), [`Int16Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."), [`Uint16Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."), [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation)."), or [`Uint32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).").</dd>

<dt>`index`</dt>

<dd>The position in the `typedArray` to subtract a `value` from.</dd>

<dt>`value`</dt>

<dd>The number to subtract.</dd>

</dl>

### Return value

The old value at the given position (`typedArray[index]`).

### Exceptions

*   Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."), if `typedArray` is not one of the allowed integer types.
*   Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."), if `typedArray` is not a shared typed array type.
*   Throws a [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."), if `index` is out of bounds in the `typedArray`.

## Examples

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
</pre>

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
<small lang="en-US">The definition of 'Atomics.sub' in that specification.</small>](http://tc39.github.io/ecmascript_sharedmem/shmem.html#Atomics.sub)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Initial definition.</td>

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

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-19.") (46) [1]</td>

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

</tbody>

</table>

</div>

[1] This feature is disabled by a preference setting. In about:config, set `javascript.options.shared_memory` to `true`. 

[2] The implementation is under development and needs these runtime flags: `--js-flags=--harmony-sharedarraybuffer --enable-blink-feature=SharedArrayBuffer`

## See also

*   [`Atomics`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects.")
*   [`Atomics.add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add "The static Atomics.add() method adds a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.")