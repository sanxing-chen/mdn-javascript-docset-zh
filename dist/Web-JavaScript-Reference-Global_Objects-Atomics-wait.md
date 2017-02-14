<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The static `**Atomics**`**`.wait()`** method verifies that a given position in an [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).") still contains a given value and sleeps awaiting or times out. It returns a string which is either `"ok"`, `"not-equal"`, or `"timed-out"`.

<div class="note">

**Note:** This operation only works with a shared [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).") and is not allowed on the main thread.

</div>

## Syntax

<pre class="syntaxbox">Atomics.wait(typedArray, index, value[, timeout])
</pre>

### Parameters

<dl>

<dt>`typedArray`</dt>

<dd>A shared [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).").</dd>

<dt>`index`</dt>

<dd>The position in the `typedArray` to wait on.</dd>

<dt>`value`</dt>

<dd>The expected value to test .</dd>

<dt>`timeout` <span class="inlineIndicator optional optionalInline">Optional</span></dt>

<dd>Time to wait in milliseconds. [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity "The global Infinity property is a numeric value representing infinity."), if no time is provided.</dd>

</dl>

### Return value

A [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "The String global object is a constructor for strings, or a sequence of characters.") which is either "`ok`", "`not-equal`", or "`timed-out`".

### Exceptions

*   Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type."), if `typedArray` is not a shared [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0\. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).").
*   Throws a [`RangeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError "The RangeError object indicates an error when a value is not in the set or range of allowed values."), if `index` is out of bounds in the `typedArray`.

## Examples

Given a shared `Int32Array`:

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
</pre>

A reading thread is sleeping and waiting on location 0 which is expected to be 0\. As long as that is true, it will not go on. However, once the writing thread has stored a new value, it will be woken up by the writing thread and return the new value (123).

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

A writing thread stores a new value and wakes up the waiting thread once it has written:

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123); 
Atomics.wake(int32, 0, 1);</pre>

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
<small lang="en-US">The definition of 'Atomics.wait' in that specification.</small>](http://tc39.github.io/ecmascript_sharedmem/shmem.html#Atomics.wait)</td>

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

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-19.") (46) [1] [3]</td>

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

[3] In versions 46 and 47, this method was named `Atomics.futexWait()` and the properties `Atomics.OK`, `Atomics.TIMEDOUT`, `Atomics.NOTEQUAL` were returned instead of the strings.

## See also

*   [`Atomics`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects.")
*   [`Atomics.wake()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wake "The static Atomics.wake() method wakes up some agents that are sleeping in the wait queue.")