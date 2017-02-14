<div>

<div class="overheadIndicator" style="background: #9CF49C;">

**This is an experimental technology, part of the ECMAScript 2016 (ES7) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table](#Browser_compatibility) for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

</div>

</div>

[SIMD](/en-US/docs/Glossary/SIMD "SIMD: SIMD (pronounced "seem-dee") is short for Single Instruction/Multiple Data which is one classification of computer architectures . SIMD allows one same operation to be performed on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.") (pronounced "sim-dee") is short for **Single Instruction/Multiple Data** which is one [classification of computer architectures](http://en.wikipedia.org/wiki/Flynn's_taxonomy). SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.

This page and sub pages are the SIMD API reference documentation. See also [SIMD types](/en-US/docs/Web/JavaScript/SIMD_types) for an article that describes SIMD in JavaScript more generally.

## Description

The JavaScript SIMD API consists of several new types and operations. Browsers provide highly optimized implementations of this API depending on the underlying hardware of the user. Currently, SIMD is especially modeled for [ARMv7 platforms with NEON](http://en.wikipedia.org/wiki/ARM_architecture#Advanced_SIMD_(NEON)) and [x86 platforms with SSE](http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions).

The SIMD API types are installed on a `SIMD` module. Unlike the other global objects, `SIMD` is not a constructor. You can not use it with a [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `SIMD` object as a function. All properties and methods of `SIMD` are static (as is the case with the [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math "Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.") object).

### Overview

A SIMD value has multiple lanes. For a vector of length 4, the lanes are named `x`, `y`, `z`, and `w`. Now, instead of having to perform 4 separate operations on each of these lanes, SIMD allows you to perform the operation on all 4 lanes simultaneously. This requires fewer operations, which leads to performance improvements and better energy efficiency compared to scalar operations ([SISD](/en-US/docs/Glossary/SISD "SISD: SISD is short for Single Instruction/SIngle Data which is one classification of computer architectures. In SISD architecture, a single processor executes a single instruction and operates on a single data point in memory.")). Note that SIMD operations cannot be used to process multiple data in different ways. In the following figure, there is only a single instruction (addition) and thus it could be operated with SIMD:

<div>![SISD](https://mdn.mozillademos.org/files/10509/SISD.png) ![SIMD](https://mdn.mozillademos.org/files/10507/SIMD.png)</div>

Figures 1 and 2: SISD and SIMD compared.

### Simple addition arithmetic

The JavaScript code for a simple SIMD operation like in figure 2 looks like this:

<pre class="brush: js">var a = SIMD.Float32x4(1, 2, 3, 4);
var b = SIMD.Float32x4(5, 6, 7, 8);
var c = SIMD.Float32x4.add(a,b); // Float32x4[6,8,10,12]
</pre>

## Data types

All SIMD data types are _immutable_. You can not alter them directly. Instead, you perform operations that create new immutable SIMD data types.

The following figure shows the different SIMD data types in a 128-bit SIMD register. The current SIMD JavaScript API has 5 different types with lane lengths of either 2, 4, 8 or 16.

<div>![Lanes per type in a 128-bit SIMD register](https://mdn.mozillademos.org/files/11259/simd_register_drawio%281%29.png)</div>

Figure 3: Lanes per type in a 128-bit SIMD register.

<dl>

<dt>[`SIMD.Int8x16`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16 "The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values.")</dt>

<dd>128-bits divided into 16 lanes storing 8-bit integer values.</dd>

<dt>[`SIMD.Int16x8`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8 "The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values.")</dt>

<dd>128-bits divided into 8 lanes storing 16-bit integer values.</dd>

<dt>[`SIMD.Int32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4 "The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values.")</dt>

<dd>128-bits divided into 4 lanes storing 32-bit integer values.</dd>

<dt>[`SIMD.Float32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4 "The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values.")</dt>

<dd>128-bits divided into 4 lanes storing single precision floating point values.</dd>

<dt>[`SIMD.Float64x2`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2 "The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values.")</dt>

<dd>128-bits divided into 2 lanes storing double precision floating point values.</dd>

</dl>

## Constructor functions

In addition to the simple creator functions (e.g. `SIMD.Int32x4(1,2,3,4)`), the SIMD API provides the following constructor functions:

<dl>

<dt>[`SIMD.%type%.splat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat "The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value.")</dt>

<dd>Creates SIMD data type with all lanes set to a given value.</dd>

<dt>[`SIMD.%type%.bool()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/bool "The SIMD.%type%.bool() constructor is used to create a custom selection mask. Masking (or "branching") the lanes is useful as you can't operate on a fraction of data in SIMD data types. However, with masks and the select function, you can branch and merge vectors to assemble the result vector you need.")</dt>

<dd>Creates a SIMD data type with boolean parameters, allowing you to create an explicit selection mask.</dd>

</dl>

You can also [convert from one SIMD data type to another](#Data_conversions).

<div class="note">

**Note:** SIMD types don't work with `new`, as SIMD values are no "boxed" objects (comparable to `String(s)` vs. `new String(s)`, which creates a String object).

<pre class="brush: js example-bad">var v = new SIMD.Float32x4(0,1,2,3);
// TypeError: SIMD.Float32x4 is not a constructor</pre>

Instead, you just write:

<pre class="brush: js example-good">var v = SIMD.Float32x4(0,1,2,3);</pre>

</div>

## Operations

To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.

<div class="note">

**Note:** Not all SIMD operations are available on all SIMD types, see the individual reference pages for details and availability.

</div>

### Checking SIMD types

<dl>

<dt>[`SIMD.%type%.check()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check "The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown.")</dt>

<dd>Returns a new instance if the parameter is a valid SIMD data type and the same as `%type%`. Throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") otherwise.</dd>

</dl>

### Accessing and mutating lanes

<dl>

<dt>[`SIMD.%type%.extractLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane "The static SIMD.%type%.extractLane() method returns the value of a given lane.")</dt>

<dd>Returns the value of the given lane.</dd>

<dt>[`SIMD.%type%.replaceLane()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane "The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced.")</dt>

<dd>Returns a new instance with the given lane value replaced.</dd>

</dl>

### Loading from and storing into typed arrays

<dl>

<dt>[`SIMD.%type%.load()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load "The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array.")</dt>

<dd>Returns a new instance with the lane values loaded from a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

<dt>[`SIMD.%type%.store()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store "The static SIMD.%type%.store() methods store a SIMD data type into a typed array.")</dt>

<dd>Store a SIMD data type into a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays).</dd>

</dl>

### Arithmetic operations

<dl>

<dt>[`SIMD.%type%.abs()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs "The static SIMD.%type%.abs() method returns a new SIMD data type with absolute values. This operation exists only on floating point SIMD types.")</dt>

<dd>Returns a new instance with the absolute lane values.</dd>

<dt>[`SIMD.%type%.add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add "The static SIMD.%type%.add() method returns a new instance with the lane values added (a + b).")</dt>

<dd>Returns a new instance with the lane values added (`a + b`).</dd>

<dt>[`SIMD.%type%.div()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div "The static SIMD.%type%.div() method returns a new instance with the lane values divided (a / b). This function is defined only on floating point SIMD types.")</dt>

<dd>Returns a new instance with the lane values divided (`a / b`).</dd>

<dt>[`SIMD.%type%.mul()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul "The static SIMD.%type%.mul() method returns a new instance with the lane values multiplied (a * b).")</dt>

<dd>Returns a new instance with the lane values multiplied (`a * b`).</dd>

<dt>[`SIMD.%type%.neg()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg "The static SIMD.%type%.mul() method returns a new instance with the lane values negated.")</dt>

<dd>Returns a new instance with the negated lane values.</dd>

<dt>[`SIMD.%type%.reciprocalApproximation()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation "The static SIMD.%type%.reciprocalApproximation() method returns a new instance with an approximation of the reciprocal lane values (1 / x).")</dt>

<dd>Returns a new instance with an approximation of the reciprocal lane values.</dd>

<dt>[`SIMD.%type%.reciprocalSqrtApproximation()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation "The static SIMD.%type%.reciprocalSqrtApproximation() method returns a new instance with an approximation of the reciprocal value (1 / x) of the square root (Math.sqrt()) of the lane values.")</dt>

<dd>Returns a new instance with an approximation of the reciprocal square root lane values.</dd>

<dt>[`SIMD.%type%.sub()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub "The static SIMD.%type%.sub() method returns a new instance with the lane values subtracted (a - b).")</dt>

<dd>Returns a new instance with the lane values subtracted (`a - b`).</dd>

<dt>[`SIMD.%type%.sqrt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt "The static SIMD.%type%.sqrt() method returns a new instance with the square root of the lane values (see also Math.sqrt() for the same scalar function).")</dt>

<dd>Returns a new instance with the square root of the lane values.</dd>

</dl>

### Shuffling and swizzling

<dl>

<dt>[`SIMD.%type%.shuffle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle "The static SIMD.%type%.shuffle() method creates a new SIMD data type instance with the lane values shuffled.")</dt>

<dd>Returns a new instance with the lane values shuffled.</dd>

<dt>[`SIMD.%type%.swizzle()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle "The static SIMD.%type%.swizzle() method creates a new SIMD data type instance with the lane values swizzled (re-ordered).")</dt>

<dd>Returns a new instance with the lane values swizzled.</dd>

</dl>

### Min and max values

<dl>

<dt>[`SIMD.%type%.max()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max "The static SIMD.%type%.max() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)).")</dt>

<dd>Returns a new instance with the maximum of the lane values.</dd>

<dt>[`SIMD.%type%.maxNum()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum "The static SIMD.%type%.maxNum() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)) preferring numbers over NaN.")</dt>

<dd>Returns a new instance with the maximum of the lane values, preferring numbers over [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

<dt>[`SIMD.%type%.min()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min "The static SIMD.%type%.min() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)).")</dt>

<dd>Returns a new instance with the minimum of the lane values.</dd>

<dt>[`SIMD.%type%.minNum()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum "The static SIMD.%type%.minNum() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)) preferring numbers over NaN.")</dt>

<dd>Returns a new instance with the minimum of the lane values, preferring numbers over [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN "The global NaN property is a value representing Not-A-Number.").</dd>

</dl>

### Selections

<dl>

<dt>[`SIMD.%type%.select()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select "The static SIMD.%type%.select() method creates a new integer SIMD data type with the lane values being a selection match from a selector mask.")</dt>

<dd>Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.</dd>

<dt>[`SIMD.%type%.selectBits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/selectBits "The static SIMD.%type%.selectBits() method creates a new integer SIMD data type with the lane values being a selection match of bits depending on the selector mask.")</dt>

<dd>Returns a new instance with the lane values being a mix of bits depending on the selector mask.</dd>

</dl>

### Comparisons

<dl>

<dt>[`SIMD.%type%.equal()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal "The static SIMD.%type%.equal() method returns a selection mask with values depending on a strict equality comparison (a === b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a == b`.</dd>

<dt>[`SIMD.%type%.notEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual "The static SIMD.%type%.notEqual() method returns a selection mask with values depending on an inequality comparison (a != b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a != b`.</dd>

<dt>[`SIMD.%type%.lessThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan "The static SIMD.%type%.lessThan() method returns a selection mask with values depending on a less-than comparison (a < b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a < b`.</dd>

<dt>[`SIMD.%type%.lessThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual "The static SIMD.%type%.lessThanOrEqual() method returns a selection mask with values depending on a less-than-or-equal comparison (a <= b) in each lane.")</dt>

<dd>Returns selection mask depending on `a <= b`.</dd>

<dt>[`SIMD.%type%.greaterThan()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan "The static SIMD.%type%.greaterThan() method returns a selection mask with values depending on a greater-than comparison (a > b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a > b`.</dd>

<dt>[`SIMD.%type%.greaterThanOrEqual()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual "The static SIMD.%type%.greaterThanOrEqual() method returns a selection mask with values depending on a greater-than-or-equal comparison (a >= b) in each lane.")</dt>

<dd>Returns a selection mask depending on `a >= b`.</dd>

</dl>

### Bitwise logical operations

<dl>

<dt>[`SIMD.%type%.and()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and "The static SIMD.%type%.and() method returns a new instance with the logical AND of the lane values (a & b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new instance with the logical AND of the lane values (`a & b`).</dd>

<dt>[`SIMD.%type%.or()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or "The static SIMD.%type%.or() method returns a new instance with the logical OR of the lane values (a | b). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new instance with the logical OR of the lane values (`a | b`).</dd>

<dt>[`SIMD.%type%.xor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor "The static SIMD.%type%.xor() method returns a new instance with the logical XOR of the lane values (a ^ b).")</dt>

<dd>Returns a new instance with the logical XOR of the lane values (`a ^ b`).</dd>

<dt>[`SIMD.%type%.not()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not "The static SIMD.%type%.not() method returns a new instance with the bitwise logical NOT of the lane values (~a). This operation exists only on integer and boolean SIMD types.")</dt>

<dd>Returns a new instance with the logical NOT of the lane values (`~a`).</dd>

</dl>

### Bitwise shift operations

<dl>

<dt>[`SIMD.%type%.shiftLeftByScalar()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftLeftByScalar "The static SIMD.%type%.shiftLeftByScalar() method returns a new instance with the lane values shifted left by a given bit count (a << bits).")</dt>

<dd>Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).</dd>

<dt>[`SIMD.%type%.shiftRightArithmeticByScalar()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightArithmeticByScalar "The static SIMD.%type%.shiftRightArithmeticByScalar() method returns a new instance with the lane values shifted right (arithmetic) by a given bit count (a >> bits).")</dt>

<dd>Returns a new instance with the lane values shifted right (arithmetic) by a given bit count (`a >> bits`).</dd>

<dt>[`SIMD.%type%.shiftRightLogicalByScalar()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightLogicalByScalar "The static SIMD.%type%.shiftRightLogicalByScalar() method returns a new instance with the lane values shifted right (logical) by a given bit count (a >>> bits).")</dt>

<dd>Returns a new instance with the lane values shifted right (logical) by a given bit count (`a >>> bits`).</dd>

</dl>

### Data conversions

<dl>

<dt>[`SIMD.%type%.fromFloat32x4()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4 "The static SIMD.%type%.fromFloat32x4() method creates a new SIMD data type with a float conversion from a Float32x4.")</dt>

<dd>Creates a new SIMD data type with a float conversion from a Float32x4.</dd>

<dt>[`SIMD.%type%.fromFloat32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits "The static SIMD.%type%.fromFloat32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Float32x4.")</dt>

<dd>Creates a new SIMD data type with a bit-wise copy from a Float32x4.</dd>

<dt>[`SIMD.%type%.fromFloat64x2()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat64x2 "The static SIMD.%type%.fromFloat64x2() method creates a new SIMD data type with a float conversion from a Float64x2.")</dt>

<dd>Creates a new SIMD data type with a float conversion from a Float64x2.</dd>

<dt>[`SIMD.%type%.fromFloat64x2Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat64x2Bits "The static SIMD.%type%.fromFloat64x2Bits() method creates a new SIMD data type with a bit-wise copy from a Float64x2.")</dt>

<dd>Creates a new SIMD data type with a bit-wise copy from a Float64x2.</dd>

<dt>[`SIMD.%type%.fromInt32x4()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4 "The static SIMD.%type%.fromInt32x4() method creates a new SIMD data type with a float conversion from an Int32x4.")</dt>

<dd>Creates a new SIMD data type with an integer conversion from a in32x4.</dd>

<dt>[`SIMD.%type%.fromInt32x4Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4Bits "The static SIMD.%type%.fromInt32x4Bits() method creates a new SIMD data type with a bit-wise copy from an Int32x4.")</dt>

<dd>Creates a new SIMD data type with a bit-wise copy from an Int32x4.</dd>

<dt>[`SIMD.%type%.fromInt16x8Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt16x8Bits "The static SIMD.%type%.fromInt16x8Bits() method creates a new SIMD data type with a bit-wise copy from an int16x8.")</dt>

<dd>Creates a new SIMD data type with a bit-wise copy from an Int16x8.</dd>

<dt>[`SIMD.%type%.fromInt8x16Bits()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt8x16Bits "The static SIMD.%type%.fromInt8x16Bits() method creates a new SIMD data type with a bit-wise copy from an Int8x16.")</dt>

<dd>Creates a new SIMD data type with a bit-wise copy from an Int8x16.</dd>

</dl>

## Polyfill

A Polyfill implementation based on [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays), is available at the [ecmascript_simd](https://github.com/tc39/ecmascript_simd) GitHub repository.

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
<small lang="en-US">The definition of 'SIMD' in that specification.</small>](http://littledan.github.io/simd.html#simd)</td>

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

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Float32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4 "The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Float64x2`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2 "The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int8x16`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16 "The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int16x8`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8 "The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4 "The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

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

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Float32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4 "The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Float64x2`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2 "The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int8x16`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16 "The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int16x8`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8 "The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

<tr>

<td>[`SIMD.Int32x4`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4 "The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values.")</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td>_[Nightly build](http://nightly.mozilla.org/)_</td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

<td><span style="color: #f00;">Not supported</span></td>

</tr>

</tbody>

</table>

</div>

## Status notes

*   ["In development" in Microsoft Edge](https://status.modern.ie/simdes7)
*   ["Intent to implement" in Blink/Chromium](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/2PIOEJG_aYY)

## See also

*   [Glossary: SIMD](/en-US/docs/Glossary/SIMD)
*   [SIMD types](/en-US/docs/Web/JavaScript/SIMD_types)
*   [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
*   [SIMD Programming in JavaScript](https://www.youtube.com/watch?v=CbMXkbqQBcQ), talk by Peter Jensen, Intel.
*   [Mandelbrot animation using SIMD,](http://peterjensen.github.io/mandelbrot/js/mandelbrot-ww-asm.html) demo by Peter Jensen, Intel.
*   [The state of SIMD.js performance in Firefox](https://blog.mozilla.org/javascript/2015/03/10/state-of-simd-js-performance-in-firefox/), blog post by Benjamin Bouvier, Mozilla.