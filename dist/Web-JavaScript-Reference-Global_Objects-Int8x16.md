<div>

<div class="notice experimental">

<span title="This is an experimental API that should not be used in production code."></span>**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.

</div>

</div>

The **`SIMD.Int8x16`** data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values.

<div>![SIMD.Int8x16](https://mdn.mozillademos.org/files/11253/int8x16.png)

Figure 1: SIMD.Int8x16 in a 128-bit SIMD register.

</div>

## Syntax

<pre class="syntaxbox">SIMD.Int8x16(s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15);</pre>

### Parameters

<dl>

<dt>`s[0-15]` <span class="inlineIndicator optional optionalInline">Optional</span></dt>

<dd>An integer specifying the value of the lane. Defaults to 0.</dd>

</dl>

## Constructor functions

In addition to the simple creator functions, the SIMD API provides the following constructor functions:

<dl>

<dt>[`SIMD.Int8x16.splat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat "The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value.")</dt>

<dd>Creates an Int8x16 with all lanes set to a given value.</dd>

</dl>

Note that you can also [convert from another SIMD data type to Int8x16](#Data_conversions).

<div class="note">

**Note:** SIMD types don't work with `new`, as SIMD values are no "boxed" objects (comparable to `String(s)` vs. `new String(s)`, which creates a String object).

<pre class="brush: js example-bad">var v = new SIMD.Int8x16(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16); 
// TypeError: SIMD.Int8x16 is not a constructor
var w = new SIMD.Int8x16.splat(3); 
// TypeError: SIMD.Int8x16.splat is not a constructor
</pre>

Instead, you just write:

<pre class="brush: js example-good">var v = SIMD.Int8x16(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
var w = SIMD.Int8x16.splat(3); 
</pre>

</div>

## Operations

To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.

### Checking SIMD types

<dl>

<dt>[`SIMD.Int8x16.check()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check "The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown.")</dt>

<dd>Returns a new Int8x16 if the parameter is a valid Int8x16 data type. Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") otherwise.</dd>

</dl>

### Accessing and mutating lanes

<dl>

<dt>[`SIMD.Int8x16.extractLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane "The static SIMD.%type%.extractLane() method returns the value of a given lane.")</dt>

<dd>Returns the value of the given lane.</dd>

<dt>[`SIMD.Int8x16.replaceLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane "The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced.")</dt>

<dd>Returns a new Int8x16 with the given lane value replaced.</dd>

</dl>

### Loading from and storing into typed arrays

<dl>

<dt>[`SIMD.Int8x16.load()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load "The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array.")</dt>

<dd>Returns a new Int8x16 with the lane values loaded from a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

<dt>[`SIMD.Int8x16.store()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store "The static SIMD.%type%.store() methods store a SIMD data type into a typed array.")</dt>

<dd>Stores an Int8x16 into a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

</dl>

### Arithmetic operations

<dl>

<dt>[`SIMD.Int8x16.add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add "The static SIMD.%type%.add() method returns a new instance with the lane values added (a + b).")</dt>

<dd>Returns a new Int8x16 with the lane values added (`a + b`).</dd>

<dt>[`SIMD.Int8x16.addSaturate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/addSaturate "The static SIMD.%type%.addSaturate() method returns a new instance with the lane values added (a + b) and saturating behavior on overflow.")</dt>

<dd>Returns a new Int8x16 with the lane values added (`a + b`) and saturating behavior on overflow.</dd>

<dt>[`SIMD.Int8x16.mul()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul "The static SIMD.%type%.mul() method returns a new instance with the lane values multiplied (a * b).")</dt>

<dd>Returns a new Int8x16 with the lane values multiplied (`a * b`).</dd>

<dt>[`SIMD.Int8x16.neg()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg "The static SIMD.%type%.mul() method returns a new instance with the lane values negated.")</dt>

<dd>Returns a new Int8x16 with the negated lane values.</dd>

<dt>[`SIMD.Int8x16.sub()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub "The static SIMD.%type%.sub() method returns a new instance with the lane values subtracted (a - b).")</dt>

<dd>Returns a new Int8x16 with the lane values subtracted (`a - b`).</dd>

<dt>[`SIMD.Int8x16.subSaturate()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/subSaturate "The static SIMD.%type%.subSaturate() method returns a new instance with the lane values subtracted (a - b) and saturating behavior on overflow.")</dt>

<dd>Returns a Int8x16 instance with the lane values subtracted (`a - b`) and saturating behavior on overflow.</dd>

</dl>

### Shuffling and swizzling

<dl>

<dt>[`SIMD.Int8x16.shuffle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle "The static SIMD.%type%.shuffle() method creates a new SIMD data type instance with the lane values shuffled.")</dt>

<dd>Returns a new Int8x16 with the lane values shuffled.</dd>

<dt>[`SIMD.Int8x16.swizzle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle "The static SIMD.%type%.swizzle() method creates a new SIMD data type instance with the lane values swizzled (re-ordered).")</dt>

<dd>Returns a new Int8x16 with the lane values swizzled.</dd>

</dl>

### Selections

<dl>

<dt>[`SIMD.Int8x16.select()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select "The static SIMD.%type%.select() method creates a new integer SIMD data type with the lane values being a selection match from a selector mask.")</dt>

<dd>Returns a new Int8x16 with the lane values being a mix of the lanes depending on the selector mask.</dd>

</dl>

### Comparisons

<dl>

<dt>[`SIMD.Int8x16.equal()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal "The static SIMD.%type%.equal() method returns a selection mask with values depending on a strict equality comparison (a === b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a == b`.</dd>

<dt>[`SIMD.Int8x16.notEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual "The static SIMD.%type%.notEqual() method returns a selection mask with values depending on an inequality comparison (a != b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a != b`.</dd>

<dt>[`SIMD.Int8x16.lessThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan "The static SIMD.%type%.lessThan() method returns a selection mask with values depending on a less-than comparison (a < b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a < b`.</dd>

<dt>[`SIMD.Int8x16.lessThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual "The static SIMD.%type%.lessThanOrEqual() method returns a selection mask with values depending on a less-than-or-equal comparison (a <= b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a <= b`.</dd>

<dt>[`SIMD.Int8x16.greaterThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan "The static SIMD.%type%.greaterThan() method returns a selection mask with values depending on a greater-than comparison (a > b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a > b`.</dd>

<dt>[`SIMD.Int8x16.greaterThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual "The static SIMD.%type%.greaterThanOrEqual() method returns a selection mask with values depending on a greater-than-or-equal comparison (a >= b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a >= b`.</dd>

</dl>

### Bitwise logical operations

<dl>

<dt>[`SIMD.Int8x16.and()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and "The static SIMD.%type%.and() method returns a new instance with the logical AND of the lane values (a & b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Int8x16 with the logical AND of the lane values (`a & b`).</dd>

<dt>[`SIMD.Int8x16.or()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or "The static SIMD.%type%.or() method returns a new instance with the logical OR of the lane values (a | b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Int8x16 with the logical OR of the lane values (`a | b`).</dd>

<dt>[`SIMD.Int8x16.xor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor "The static SIMD.%type%.xor() method returns a new instance with the logical XOR of the lane values (a ^ b).")</dt>

<dd>Returns a new Int8x16 with the logical XOR of the lane values (`a ^ b`).</dd>

<dt>[`SIMD.Int8x16.not()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not "The static SIMD.%type%.not() method returns a new instance with the bitwise logical NOT of the lane values (~a). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new Int8x16 with lane with the logical NOT of the lane values (`~a`).</dd>

</dl>

### Bitwise shift operations

<dl>

<dt>[`SIMD.Int8x16.shiftLeftByScalar()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftLeftByScalar "The static SIMD.%type%.shiftLeftByScalar() method returns a new instance with the lane values shifted left by a given bit count (a << bits).")</dt>

<dd>Returns a new Int8x16 with the lane values shifted left by a given bit count (`a << bits`).</dd>

<dt>[`SIMD.Int8x16.shiftRightByScalar()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightByScalar "The static SIMD.%type%.shiftRightByScalar() method returns a new instance with the lane values shifted right. Depending on the type, these operations are used:")</dt>

<dd>Returns a new Int8x16 with the lane values shifted right.</dd>

</dl>

### Data conversions

<dl>

<dt>[`SIMD.Int8x16.fromFloat32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits "The static SIMD.%type%.fromFloat32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Float32x4.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from a Float32x4.</dd>

<dt>[`SIMD.Int8x16.fromFloat64x2Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat64x2Bits "The static SIMD.%type%.fromFloat64x2Bits() method creates a new SIMD data type with a bit-wise copy from a Float64x2.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from a Float64x2.</dd>

<dt>[`SIMD.Int8x16.fromInt32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4Bits "The static SIMD.%type%.fromInt32x4Bits() method creates a new SIMD data type with a bit-wise copy from an Int32x4.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from an Int32x4.</dd>

<dt>[`SIMD.Int8x16.fromInt16x8Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt16x8Bits "The static SIMD.%type%.fromInt16x8Bits() method creates a new SIMD data type with a bit-wise copy from an int16x8.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from an Int16x8.</dd>

<dt>[`SIMD.Int8x16.fromUint32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint32x4Bits "The static SIMD.%type%.fromUint32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Uint32x4.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from a Uint32x4.</dd>

<dt>[`SIMD.Int8x16.fromUint16x8Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint16x8Bits "The static SIMD.%type%.fromUint16x8Bits() method creates a new SIMD data type with a bit-wise copy from a Uint16x8.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from a Uint16x8.</dd>

<dt>[`SIMD.Int8x16.fromUint8x16Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint8x16Bits "The static SIMD.%type%.fromUint8x16Bits() method creates a new SIMD data type with a bit-wise copy from a Uint8x16.")</dt>

<dd>Creates a new Int8x16 data type with a bit-wise copy from an Uint8x16.</dd>

</dl>

## SIMD prototype

The following methods and properties are installed on the `SIMD.Int8x16.prototype`.

<dl>

<dt>`SIMD.Int8x16.prototype.constructor`</dt>

<dd>Specifies the function that creates a SIMD object's prototype.</dd>

<dt>[`SIMD.Int8x16.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toLocaleString "The documentation about this has not yet been written; please consider contributing!")</dt>

<dd>Returns a localized string representing the SIMD type and its elements. Overrides the [`Object.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.") method.</dd>

<dt>[`SIMD.Int8x16.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toString "The SIMD.%type%.toString() method returns a String representing a SIMD object.")</dt>

<dd>Returns a string representing the SIMD type and its elements. Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing the object.") method.</dd>

<dt>[`SIMD.Int8x16.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/valueOf "The SIMD.%type%.valueOf() method performs a type check returns the this value.")</dt>

<dd>Returns the primitive value of a SIMD object.</dd>

<dt>[`SIMD.Int8x16.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toSource "The non-standard SIMD.%type%.toSource() method returns a string representing the source code of the object.")<span title="This API has not been standardized."></span></dt>

<dd>Returns a string representing the source code of the object. Overrides the [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.") method.</dd>

</dl>

## Examples

### Constructing an Int8x16

<pre class="brush: js">SIMD.Int8x16(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
 // Int8x16[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
SIMD.Int8x16(1, 2);
 // Int8x16[1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
SIMD.Int8x16();
 // Int8x16[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
<small lang="en-US">The definition of 'Int8x16' in that specification.</small>](https://tc39.github.io/ecmascript_simd/#int8x16)</td>

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