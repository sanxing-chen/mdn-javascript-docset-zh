<div class="note">

Note: The Float64x2 type is currently not part of the SIMD specification draft.

</div>

The **`SIMD.Float64x2`** data type is a 128-bit vector divided into 2 lanes storing double precision floating point values.

<div>![SIMD.Float64x2](https://mdn.mozillademos.org/files/11251/float64x2.png)

Figure 1: SIMD.Float64x2 in a 128-bit SIMD register.

</div>

## Syntax

<pre class="syntaxbox">SIMD.Float64x2(x, y);</pre>

### Parameters

<dl>

<dt>`x` <span class="inlineIndicator optional optionalInline">Optional</span></dt>

<dd>A double specifying the value of the first lane. Defaults to [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

<dt>`y` <span class="inlineIndicator optional optionalInline">Optional</span></dt>

<dd>A double specifying the value of the second lane. Defaults to [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

</dl>

## Constructor functions

In addition to the simple creator functions, the SIMD API provides the following constructor functions:

<dl>

<dt>[`SIMD.Float64x2.splat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat "The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value.")</dt>

<dd>Creates a Float64x2 with all lanes set to a given value.</dd>

</dl>

Note that you can also [convert from another SIMD data type to Float64x2](#Data_conversions).

<div class="note">

**Note:** SIMD types don't work with `new`, as SIMD values are no "boxed" objects (comparable to `String(s)` vs. `new String(s)`, which creates a String object).

<pre class="brush: js example-bad">var v = new SIMD.Float64x2(1, 2); 
// TypeError: SIMD.Float64x2 is not a constructor
var w = new SIMD.Float64x2.splat(3); 
// TypeError: SIMD.Float64x2.splat is not a constructor
</pre>

Instead, you just write:

<pre class="brush: js example-good">var v = SIMD.Float64x2(1, 2); 
var w = SIMD.Float64x2.splat(3); 
</pre>

</div>

## Operations

To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.

### Checking SIMD types

<dl>

<dt>[`SIMD.Float64x2.check()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check "The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown.")</dt>

<dd>Returns a new Float64x2 if the parameter is a valid Float64x2 data type. Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") otherwise.</dd>

</dl>

### Accessing and mutating lanes

<dl>

<dt>[`SIMD.Float64x2.extractLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane "The static SIMD.%type%.extractLane() method returns the value of a given lane.")</dt>

<dd>Returns the value of the given lane.</dd>

<dt>[`SIMD.Float64x2.replaceLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane "The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced.")</dt>

<dd>Returns a new Float64x2 with the given lane value replaced.</dd>

</dl>

### Loading from and storing into typed arrays

<dl>

<dt>[`SIMD.Float64x2.load()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load "The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array.")</dt>

<dt>[`SIMD.Float64x2.load1()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load "The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array.")</dt>

<dd>Returns a new Float64x2 with the lane values loaded from a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

<dt>[`SIMD.Float64x2.store()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store "The static SIMD.%type%.store() methods store a SIMD data type into a typed array.")  
[`SIMD.Float64x2.store1()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store "The static SIMD.%type%.store() methods store a SIMD data type into a typed array.")</dt>

<dd>Stores a Float64x2 into a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

</dl>

### Arithmetic operations

<dl>

<dt>[`SIMD.Float64x2.abs()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs "The static SIMD.%type%.abs() method returns a new SIMD data type with absolute values. This operation exists only on floating point SIMD types.")</dt>

<dd>Returns a new Float64x2 with the absolute lane values.</dd>

<dt>[`SIMD.Float64x2.add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add "The static SIMD.%type%.add() method returns a new instance with the lane values added (a + b).")</dt>

<dd>Returns a new Float64x2 with the lane values added (`a + b`).</dd>

<dt>[`SIMD.Float64x2.div()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div "The static SIMD.%type%.div() method returns a new instance with the lane values divided (a / b). This function is defined only on floating point SIMD types.")</dt>

<dd>Returns a new Float64x2 with the lane values divided (`a / b`).</dd>

<dt>[`SIMD.Float64x2.mul()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul "The static SIMD.%type%.mul() method returns a new instance with the lane values multiplied (a * b).")</dt>

<dd>Returns a new loat64x2 with the lane values multiplied (`a * b`).</dd>

<dt>[`SIMD.Float64x2.neg()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg "The static SIMD.%type%.mul() method returns a new instance with the lane values negated.")</dt>

<dd>Returns a new Float64x2 with the negated lane values.</dd>

<dt>[`SIMD.Float64x2.reciprocalApproximation()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation "The static SIMD.%type%.reciprocalApproximation() method returns a new instance with an approximation of the reciprocal lane values (1 / x).")</dt>

<dd>Returns a new Float64x2 with an approximation of the reciprocal lane values.</dd>

<dt>[`SIMD.Float64x2.reciprocalSqrtApproximation()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation "The static SIMD.%type%.reciprocalSqrtApproximation() method returns a new instance with an approximation of the reciprocal value (1 / x) of the square root (Math.sqrt()) of the lane values.")</dt>

<dd>Returns a new Float64x2 with an approximation of the reciprocal square root lane values.</dd>

<dt>[`SIMD.Float64x2.sub()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub "The static SIMD.%type%.sub() method returns a new instance with the lane values subtracted (a - b).")</dt>

<dd>Returns a new Float64x2 with the lane values subtracted (`a - b`).</dd>

<dt>[`SIMD.Float64x2.sqrt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt "The static SIMD.%type%.sqrt() method returns a new instance with the square root of the lane values (see also Math.sqrt() for the same scalar function).")</dt>

<dd>Returns a new Float64x2 with the square root of the lane values.</dd>

</dl>

### Shuffling and swizzling

<dl>

<dt>[`SIMD.Float64x2.shuffle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle "The static SIMD.%type%.shuffle() method creates a new SIMD data type instance with the lane values shuffled.")</dt>

<dd>Returns a new Float64x2 with the lane values shuffled.</dd>

<dt>[`SIMD.Float64x2.swizzle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle "The static SIMD.%type%.swizzle() method creates a new SIMD data type instance with the lane values swizzled (re-ordered).")</dt>

<dd>Returns a new Float64x2 with the lane values swizzled.</dd>

</dl>

### Min and max values

<dl>

<dt>[`SIMD.Float64x2.max()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max "The static SIMD.%type%.max() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)).")</dt>

<dd>Returns a new Float64x2 with the maximum of the lane values.</dd>

<dt>[`SIMD.Float64x2.maxNum()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum "The static SIMD.%type%.maxNum() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)) preferring numbers over NaN.")</dt>

<dd>Returns a new Float64x2 with the maximum of the lane values, preferring numbers over [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

<dt>[`SIMD.Float64x2.min()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min "The static SIMD.%type%.min() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)).")</dt>

<dd>Returns a new Float64x2 with the minimum of the lane values.</dd>

<dt>[`SIMD.Float64x2.minNum()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum "The static SIMD.%type%.minNum() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)) preferring numbers over NaN.")</dt>

<dd>Returns a new Float64x2 with the minimum of the lane values, preferring numbers over [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

</dl>

### Selections

<dl>

<dt>[`SIMD.Float64x2.select()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select "The static SIMD.%type%.select() method creates a new integer SIMD data type with the lane values being a selection match from a selector mask.")</dt>

<dd>Returns a new loat64x2 with the lane values being a mix of the lanes depending on the selector mask.</dd>

</dl>

### Comparisons

<dl>

<dt>[`SIMD.Float64x2.equal()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal "The static SIMD.%type%.equal() method returns a selection mask with values depending on a strict equality comparison (a === b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a == b`.</dd>

<dt>[`SIMD.Float64x2.notEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual "The static SIMD.%type%.notEqual() method returns a selection mask with values depending on an inequality comparison (a != b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a != b`.</dd>

<dt>[`SIMD.Float64x2.lessThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan "The static SIMD.%type%.lessThan() method returns a selection mask with values depending on a less-than comparison (a < b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a < b`.</dd>

<dt>[`SIMD.Float64x2.lessThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual "The static SIMD.%type%.lessThanOrEqual() method returns a selection mask with values depending on a less-than-or-equal comparison (a <= b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a <= b`.</dd>

<dt>[`SIMD.Float64x2.greaterThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan "The static SIMD.%type%.greaterThan() method returns a selection mask with values depending on a greater-than comparison (a > b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a > b`.</dd>

<dt>[`SIMD.Float64x2.greaterThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual "The static SIMD.%type%.greaterThanOrEqual() method returns a selection mask with values depending on a greater-than-or-equal comparison (a >= b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a >= b`.</dd>

</dl>

### Data conversions

<dl>

<dt>[`SIMD.Float64x2.fromFloat32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits "The static SIMD.%type%.fromFloat32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Float32x4.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from a Float32x4.</dd>

<dt>[`SIMD.Float64x2.fromInt32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4Bits "The static SIMD.%type%.fromInt32x4Bits() method creates a new SIMD data type with a bit-wise copy from an Int32x4.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from an Int32x4.</dd>

<dt>[`SIMD.Float64x2.fromInt16x8Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt16x8Bits "The static SIMD.%type%.fromInt16x8Bits() method creates a new SIMD data type with a bit-wise copy from an int16x8.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from an Int16x8.</dd>

<dt>[`SIMD.Float64x2.fromInt8x16Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt8x16Bits "The static SIMD.%type%.fromInt8x16Bits() method creates a new SIMD data type with a bit-wise copy from an Int8x16.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from an Int8x16.</dd>

<dt>[`SIMD.Float64x2.fromUint32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint32x4Bits "The static SIMD.%type%.fromUint32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Uint32x4.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint32x4.</dd>

<dt>[`SIMD.Float64x2.fromUint16x8Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint16x8Bits "The static SIMD.%type%.fromUint16x8Bits() method creates a new SIMD data type with a bit-wise copy from a Uint16x8.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint16x8.</dd>

<dt>[`SIMD.Float64x2.fromUint8x16Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint8x16Bits "The static SIMD.%type%.fromUint8x16Bits() method creates a new SIMD data type with a bit-wise copy from a Uint8x16.")</dt>

<dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint8x16.</dd>

</dl>

## SIMD prototype

The following methods and properties are installed on the `SIMD.Float64x2.prototype`.

<dl>

<dt>`SIMD.Float64x2.prototype.constructor`</dt>

<dd>Specifies the function that creates a SIMD object's prototype.</dd>

<dt>[`SIMD.Float64x2.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toLocaleString "The documentation about this has not yet been written; please consider contributing!")</dt>

<dd>Returns a localized string representing the SIMD type and its elements. Overrides the [`Object.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString "The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.") method.</dd>

<dt>[`SIMD.Float64x2.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toString "The SIMD.%type%.toString() method returns a String representing a SIMD object.")</dt>

<dd>Returns a string representing the SIMD type and its elements. Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "The toString() method returns a string representing the object.") method.</dd>

<dt>[`SIMD.Float64x2.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/valueOf "The SIMD.%type%.valueOf() method performs a type check returns the this value.")</dt>

<dd>Returns the primitive value of a SIMD object.</dd>

<dt>[`SIMD.Float64x2.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toSource "The non-standard SIMD.%type%.toSource() method returns a string representing the source code of the object.")<span title="This API has not been standardized."></span></dt>

<dd>Returns a string representing the source code of the object. Overrides the [`Object.prototype.toSource()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource "The toSource() method returns a string representing the source code of the object.") method.</dd>

</dl>

## Examples

### Constructing a Float64x2

<pre class="brush: js">SIMD.Float64x2(1, 2); // Float64x2[1, 2]
SIMD.Float64x2(1);    // Float64x2[1, NaN]
SIMD.Float64x2();     // Float64x2[NaN, NaN]
</pre>

## Specifications

The Float64x2 type is currently not part of the SIMD specification draft.

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