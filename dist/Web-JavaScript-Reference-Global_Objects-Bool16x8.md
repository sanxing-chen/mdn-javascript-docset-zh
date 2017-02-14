<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The **`SIMD.Bool16x8`** data type is a 128-bit vector divided into 8 lanes storing boolean values.

## Syntax

<pre class="syntaxbox">SIMD.Bool16x8(s0, s1, s2, s3, s4, s5, s6, s7);</pre>

### Parameters

<dl>

<dt>`s[0-7]` <span class="inlineIndicator optional optionalInline">Optional</span></dt>

<dd>A boolean specifying the value of the lane. Defaults to `false`.</dd>

</dl>

## Constructor functions

In addition to the simple creator function, the SIMD API provides the following constructor functions.

<dl>

<dt>[`SIMD.Bool16x8.splat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat "The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value.")</dt>

<dd>Creates an Bool6x8 with all lanes set to a given value.</dd>

</dl>

<div class="note">

**Note:** SIMD types don't work with `new`, as SIMD values are no "boxed" objects (comparable to `String(s)` vs. `new String(s)`, which creates a String object).

<pre class="brush: js example-bad">var v = new SIMD.Bool16x8(true, true, true, true, false, false, false, false); 
// TypeError: SIMD.Bool16x8 is not a constructor
var w = new SIMD.Bool16x8.splat(true); 
// TypeError: SIMD.Bool16x8.splat is not a constructor
</pre>

Instead, you just write:

<pre class="brush: js example-good">var v = SIMD.Bool16x8(true, true, true, true, false, false, false, false);
var w = SIMD.Bool16x8.splat(true);
</pre>

</div>

## Operations

To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.

### Checking SIMD types

<dl>

<dt>[`SIMD.Bool16x8.check()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check "The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown.")</dt>

<dd>Returns a new Bool16x8 if the parameter is a valid Bool16x8 data type. Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") otherwise.</dd>

</dl>

### Accessing and mutating lanes

<dl>

<dt>[`SIMD.Bool16x8.extractLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane "The static SIMD.%type%.extractLane() method returns the value of a given lane.")</dt>

<dd>Returns the value of the given lane.</dd>

<dt>[`SIMD.Bool16x8.replaceLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane "The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced.")</dt>

<dd>Returns a new Bool16x8 with the given lane value replaced.</dd>

</dl>

<dl>

<dt>

### Boolean operations

</dt>

<dt>[`SIMD.Bool16x8.allTrue()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/allTrue "The static SIMD.%BooleanType%.allTrue() method returns a Boolean indicating whether or not all lanes hold a true value.")</dt>

<dd>Checks if all lanes hold a `true` value.</dd>

<dt>[`SIMD.Bool16x8.anyTrue()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/anyTrue "The static SIMD.%BooleanType%.anyTrue() method returns a Boolean indicating whether or not any of the lanes hold a true value.")</dt>

<dd>Checks if any of the lanes hold a `true` value.</dd>

</dl>

### Bitwise logical operations

<dl>

<dt>[`SIMD.Bool16x8.and()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and "The static SIMD.%type%.and() method returns a new instance with the logical AND of the lane values (a & b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Bool16x8 with the logical AND of the lane values (`a & b`).</dd>

<dt>[`SIMD.Bool16x8.or()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or "The static SIMD.%type%.or() method returns a new instance with the logical OR of the lane values (a | b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Bool16x8 with the logical OR of the lane values (`a | b`).</dd>

<dt>[`SIMD.Bool16x8.xor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor "The static SIMD.%type%.xor() method returns a new instance with the logical XOR of the lane values (a ^ b).")</dt>

<dd>Returns a new Bool16x8 with the logical XOR of the lane values (`a ^ b`).</dd>

<dt>[`SIMD.Bool16x8.not()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not "The static SIMD.%type%.not() method returns a new instance with the bitwise logical NOT of the lane values (~a). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Bool16x8 with lane with the logical NOT of the lane values (`~a`).</dd>

</dl>

## SIMD prototype

The following methods and properties are installed on the `SIMD.Bool16x8.prototype`.

<dl>

<dt>`SIMD.Bool16x8.prototype.constructor`</dt>

<dd>Specifies the function that creates a SIMD object's prototype.</dd>

<dt>[`SIMD.Bool16x8.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toLocaleString "The documentation about this has not yet been written; please consider contributing!")</dt>

<dd>Returns a localized string representing the SIMD type and its elements. Overrides the [`Object.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.") method.</dd>

<dt>[`SIMD.Bool16x8.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toString "The SIMD.%type%.toString() method returns a String representing a SIMD object.")</dt>

<dd>Returns a string representing the SIMD type and its elements. Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing the object.") method.</dd>

<dt>[`SIMD.Bool16x8.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/valueOf "The SIMD.%type%.valueOf() method performs a type check returns the this value.")</dt>

<dd>Returns the primitive value of a SIMD object.</dd>

<dt>[`SIMD.Bool16x8.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toSource "The non-standard SIMD.%type%.toSource() method returns a string representing the source code of the object.")<span title="This API has not been standardized."></span></dt>

<dd>Returns a string representing the source code of the object. Overrides the [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.") method.</dd>

</dl>

## Examples

### Constructing a Bool16x8

<pre class="brush: js">SIMD.Bool16x8(true, true, true, true, false, false, false, false); 
// Bool16x8[true, true, true, true, false, false, false, false]

SIMD.Bool16x8(true, false);
// Bool16x8[true, false, false, false, false, false, false, false]

SIMD.Bool16x8();
// Bool16x8[false, false, false false, false, false, false, false]
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

<td>[SIMD  
<small lang="en-US">The definition of 'Bool16x8' in that specification.</small>](https://tc39.github.io/ecmascript_simd/#bool16x8)</td>

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

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">No support</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

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

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

<td><span style="color: #f00;">No support</span></td>

</tr>

</tbody>

</table>

</div>

## See also

*   [`SIMD`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD "SIMD (pronounced "sim-dee") is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.")