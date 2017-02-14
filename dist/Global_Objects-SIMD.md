
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
  <p><strong>This is an experimental technology, part of the ECMAScript 2016 (ES7) proposal.</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.</p> 
</div></div>

<p><a href="/en-US/docs/Glossary/SIMD" class="glossaryLink" title="SIMD: SIMD (pronounced &quot;seem-dee&quot;) is short for Single Instruction/Multiple Data which is one classification of computer architectures . SIMD allows one same operation to be performed on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.">SIMD</a> (pronounced &quot;sim-dee&quot;) is short for <strong>Single Instruction/Multiple Data</strong> which is one <a href="http://en.wikipedia.org/wiki/Flynn&apos;s_taxonomy" class="external">classification of computer architectures</a>. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains.</p>

<p>This page and sub pages are the SIMD API reference documentation. See also <a href="/en-US/docs/Web/JavaScript/SIMD_types">SIMD types</a> for an article that describes SIMD in JavaScript more generally.</p>

<h2 id="Description">Description</h2>

<p>The JavaScript SIMD API consists of several new types and operations. Browsers provide highly optimized implementations of this API depending on the underlying hardware of the user. Currently, SIMD is especially modeled for <a href="http://en.wikipedia.org/wiki/ARM_architecture#Advanced_SIMD_(NEON)" class="external">ARMv7 platforms with NEON</a> and <a href="http://en.wikipedia.org/wiki/Streaming_SIMD_Extensions" class="external">x86 platforms with SSE</a>.</p>

<p>The SIMD API types are installed on a <code>SIMD</code> module. Unlike the other global objects, <code>SIMD</code> is not a constructor. You can not use it with a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a> or invoke the <code>SIMD</code> object as a function. All properties and methods of <code>SIMD</code> are static (as is the case with the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object."><code>Math</code></a> object).</p>

<h3 id="Overview">Overview</h3>

<p>A SIMD value has multiple lanes. For a vector of length 4, the lanes are named <code>x</code>, <code>y</code>, <code>z</code>, and <code>w</code>. Now, instead of having to perform 4 separate operations on each of these lanes, SIMD allows you to perform the operation on all 4 lanes simultaneously. This requires fewer operations, which leads to performance improvements and better energy efficiency compared to scalar operations (<a href="/en-US/docs/Glossary/SISD" class="glossaryLink" title="SISD: SISD is short for Single Instruction/SIngle Data which is one classification of computer architectures. In SISD architecture, a single processor executes a single instruction and operates on a single data point in memory.">SISD</a>). Note that SIMD operations cannot be used to process multiple data in different ways. In the following figure, there is only a single instruction (addition) and thus it could be operated with SIMD:</p>

<div><img src="https://mdn.mozillademos.org/files/10509/SISD.png" style="width: 337px;" alt="SISD"> <img src="https://mdn.mozillademos.org/files/10507/SIMD.png" style="width: 337px;" alt="SIMD"></div>

<p>Figures 1 and 2: SISD and SIMD compared.</p>

<h3 id="Simple_addition_arithmetic">Simple addition arithmetic</h3>

<p>The JavaScript code for a simple SIMD operation like in figure 2 looks like this:</p>

<pre class="brush: js">var a = SIMD.Float32x4(1, 2, 3, 4);
var b = SIMD.Float32x4(5, 6, 7, 8);
var c = SIMD.Float32x4.add(a,b); // Float32x4[6,8,10,12]
</pre>

<h2 id="Data_types">Data types</h2>

<p>All SIMD data types are <em>immutable</em>. You can not alter them directly. Instead, you perform operations that create new immutable SIMD data types.</p>

<p>The following figure shows the different SIMD data types in a 128-bit SIMD register. The current SIMD JavaScript API has 5 different types with lane lengths of either 2, 4, 8 or 16.</p>

<div><img src="https://mdn.mozillademos.org/files/11259/simd_register_drawio%281%29.png" alt="Lanes per type in a 128-bit SIMD register"></div>

<p>Figure 3: Lanes per type in a 128-bit SIMD register.</p>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16" title="The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values."><code>SIMD.Int8x16</code></a></dt>
 <dd>128-bits divided into 16 lanes storing 8-bit integer values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8" title="The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values."><code>SIMD.Int16x8</code></a></dt>
 <dd>128-bits divided into 8 lanes storing 16-bit integer values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4" title="The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values."><code>SIMD.Int32x4</code></a></dt>
 <dd>128-bits divided into 4 lanes storing 32-bit integer values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4" title="The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values."><code>SIMD.Float32x4</code></a></dt>
 <dd>128-bits divided into 4 lanes storing single precision floating point values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2" title="The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values."><code>SIMD.Float64x2</code></a></dt>
 <dd>128-bits divided into 2 lanes storing double precision floating point values.</dd>
</dl>

<h2 id="Constructor_functions">Constructor functions</h2>

<p>In addition to the simple creator functions (e.g. <code>SIMD.Int32x4(1,2,3,4)</code>), the SIMD API provides the following constructor functions:</p>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat" title="The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value."><code>SIMD.%type%.splat()</code></a></dt>
 <dd>Creates SIMD data type with all lanes set to a given value.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/bool" title="The SIMD.%type%.bool() constructor is used to create a custom selection mask. Masking (or &quot;branching&quot;) the lanes is useful as you can&apos;t operate on a fraction of data in SIMD data types. However, with masks and the select function, you can branch and merge vectors to assemble the result vector you need."><code>SIMD.%type%.bool()</code></a></dt>
 <dd>Creates a SIMD data type with boolean parameters, allowing you to create an explicit selection mask.</dd>
</dl>

<p>You can also <a href="#Data_conversions">convert from one SIMD data type to another</a>.</p>

<div class="note">
<p><strong>Note:</strong> SIMD types don&apos;t work with <code>new</code>, as SIMD values are no &quot;boxed&quot; objects (comparable to <code>String(s)</code> vs. <code>new String(s)</code>, which creates a String object).</p>

<pre class="brush: js example-bad">var v = new SIMD.Float32x4(0,1,2,3);
// TypeError: SIMD.Float32x4 is not a constructor</pre>

<p>Instead, you just write:</p>

<pre class="brush: js example-good">var v = SIMD.Float32x4(0,1,2,3);</pre>
</div>

<h2 id="Operations">Operations</h2>

<p>To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.</p>

<div class="note">
<p><strong>Note:</strong> Not all SIMD operations are available on all SIMD types, see the individual reference pages for details and availability.</p>
</div>

<h3 id="Checking_SIMD_types">Checking SIMD types</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check" title="The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown."><code>SIMD.%type%.check()</code></a></dt>
 <dd>Returns a new instance if the parameter is a valid SIMD data type and the same as <code>%type%</code>. Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a> otherwise.</dd>
</dl>

<h3 id="Accessing_and_mutating_lanes">Accessing and mutating lanes</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane" title="The static SIMD.%type%.extractLane() method returns the value of a given lane."><code>SIMD.%type%.extractLane()</code></a></dt>
 <dd>Returns the value of the given lane.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane" title="The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced."><code>SIMD.%type%.replaceLane()</code></a></dt>
 <dd>Returns a new instance with the given lane value replaced.</dd>
</dl>

<h3 id="Loading_from_and_storing_into_typed_arrays">Loading from and storing into typed arrays</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load" title="The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array."><code>SIMD.%type%.load()</code></a></dt>
 <dd>Returns a new instance with the lane values loaded from a <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store" title="The static SIMD.%type%.store() methods store a SIMD data type into a typed array."><code>SIMD.%type%.store()</code></a></dt>
 <dd>Store a SIMD data type into a <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a>.</dd>
</dl>

<h3 id="Arithmetic_operations">Arithmetic operations</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs" title="The static SIMD.%type%.abs() method returns a new SIMD data type with absolute values. This operation exists only on floating point SIMD types."><code>SIMD.%type%.abs()</code></a></dt>
 <dd>Returns a new instance with the absolute lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add" title="The static SIMD.%type%.add() method returns a new instance with the lane values added (a + b)."><code>SIMD.%type%.add()</code></a></dt>
 <dd>Returns a new instance with the lane values added (<code>a + b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div" title="The static SIMD.%type%.div() method returns a new instance with the lane values divided (a / b). This function is defined only on floating point SIMD types."><code>SIMD.%type%.div()</code></a></dt>
 <dd>Returns a new instance with the lane values divided (<code>a / b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul" title="The static SIMD.%type%.mul() method returns a new instance with the lane values multiplied (a * b)."><code>SIMD.%type%.mul()</code></a></dt>
 <dd>Returns a new instance with the lane values multiplied (<code>a * b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg" title="The static SIMD.%type%.mul() method returns a new instance with the lane values negated."><code>SIMD.%type%.neg()</code></a></dt>
 <dd>Returns a new instance with the negated lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation" title="The static SIMD.%type%.reciprocalApproximation() method returns a new instance with an approximation of the reciprocal lane values (1 / x)."><code>SIMD.%type%.reciprocalApproximation()</code></a></dt>
 <dd>Returns a new instance with an approximation of the reciprocal lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation" title="The static SIMD.%type%.reciprocalSqrtApproximation() method returns a new instance with an approximation of the reciprocal value (1 / x) of the square root (Math.sqrt()) of the lane values."><code>SIMD.%type%.reciprocalSqrtApproximation()</code></a></dt>
 <dd>Returns a new instance with an approximation of the reciprocal square root lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub" title="The static SIMD.%type%.sub() method returns a new instance with the lane values subtracted (a - b)."><code>SIMD.%type%.sub()</code></a></dt>
 <dd>Returns a new instance with the lane values subtracted (<code>a - b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt" title="The static SIMD.%type%.sqrt() method returns a new instance with the square root of the lane values (see also Math.sqrt() for the same scalar function)."><code>SIMD.%type%.sqrt()</code></a></dt>
 <dd>Returns a new instance with the square root of the lane values.</dd>
</dl>

<h3 id="Shuffling_and_swizzling">Shuffling and swizzling</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle" title="The static SIMD.%type%.shuffle() method creates a new SIMD data type instance with the lane values shuffled."><code>SIMD.%type%.shuffle()</code></a></dt>
 <dd>Returns a new instance with the lane values shuffled.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle" title="The static SIMD.%type%.swizzle() method creates a new SIMD data type instance with the lane values swizzled (re-ordered)."><code>SIMD.%type%.swizzle()</code></a></dt>
 <dd>Returns a new instance with the lane values swizzled.</dd>
</dl>

<h3 id="Min_and_max_values">Min and max values</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max" title="The static SIMD.%type%.max() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b))."><code>SIMD.%type%.max()</code></a></dt>
 <dd>Returns a new instance with the maximum of the lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum" title="The static SIMD.%type%.maxNum() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)) preferring numbers over NaN."><code>SIMD.%type%.maxNum()</code></a></dt>
 <dd>Returns a new instance with the maximum of the lane values, preferring numbers over <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="The global NaN property is a value representing Not-A-Number."><code>NaN</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min" title="The static SIMD.%type%.min() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b))."><code>SIMD.%type%.min()</code></a></dt>
 <dd>Returns a new instance with the minimum of the lane values.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum" title="The static SIMD.%type%.minNum() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)) preferring numbers over NaN."><code>SIMD.%type%.minNum()</code></a></dt>
 <dd>Returns a new instance with the minimum of the lane values, preferring numbers over <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="The global NaN property is a value representing Not-A-Number."><code>NaN</code></a>.</dd>
</dl>

<h3 id="Selections">Selections</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select" title="The static SIMD.%type%.select() method creates a new integer SIMD data type with the lane values being a selection match from a selector mask."><code>SIMD.%type%.select()</code></a></dt>
 <dd>Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/selectBits" title="The static SIMD.%type%.selectBits() method creates a new integer SIMD data type with the lane values being a selection match of bits depending on the selector mask."><code>SIMD.%type%.selectBits()</code></a></dt>
 <dd>Returns a new instance with the lane values being a mix of bits depending on the selector mask.</dd>
</dl>

<h3 id="Comparisons">Comparisons</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal" title="The static SIMD.%type%.equal() method returns a selection mask with values depending on a strict equality comparison (a === b) in each lane."><code>SIMD.%type%.equal()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a == b</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual" title="The static SIMD.%type%.notEqual() method returns a selection mask with values depending on an inequality comparison (a != b) in each lane."><code>SIMD.%type%.notEqual()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a != b</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan" title="The static SIMD.%type%.lessThan() method returns a selection mask with values depending on a less-than comparison (a &lt; b) in each lane."><code>SIMD.%type%.lessThan()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &lt; b</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual" title="The static SIMD.%type%.lessThanOrEqual() method returns a selection mask with values depending on a less-than-or-equal comparison (a &lt;= b) in each lane."><code>SIMD.%type%.lessThanOrEqual()</code></a></dt>
 <dd>Returns selection mask depending on <code>a &lt;= b</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan" title="The static SIMD.%type%.greaterThan() method returns a selection mask with values depending on a greater-than comparison (a &gt; b) in each lane."><code>SIMD.%type%.greaterThan()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &gt; b</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual" title="The static SIMD.%type%.greaterThanOrEqual() method returns a selection mask with values depending on a greater-than-or-equal comparison (a &gt;= b) in each lane."><code>SIMD.%type%.greaterThanOrEqual()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &gt;= b</code>.</dd>
</dl>

<h3 id="Bitwise_logical_operations">Bitwise logical operations</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and" title="The static SIMD.%type%.and() method returns a new instance with the logical AND of the lane values (a &amp; b). This operation exists only on integer and boolean SIMD types."><code>SIMD.%type%.and()</code></a></dt>
 <dd>Returns a new instance with the logical AND of the lane values (<code>a &amp; b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or" title="The static SIMD.%type%.or() method returns a new instance with the logical OR of the lane values (a | b). This operation exists only on integer and boolean SIMD types."><code>SIMD.%type%.or()</code></a></dt>
 <dd>Returns a new instance with the logical OR of the lane values (<code>a | b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor" title="The static SIMD.%type%.xor() method returns a new instance with the logical XOR of the lane values (a ^ b)."><code>SIMD.%type%.xor()</code></a></dt>
 <dd>Returns a new instance with the logical XOR of the lane values (<code>a ^ b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not" title="The static SIMD.%type%.not() method returns a new instance with the bitwise logical NOT of the lane values (~a). This operation exists only on integer and boolean SIMD types."><code>SIMD.%type%.not()</code></a></dt>
 <dd>Returns a new instance with the logical NOT of the lane values (<code>~a</code>).</dd>
</dl>

<h3 id="Bitwise_shift_operations">Bitwise shift operations</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftLeftByScalar" title="The static SIMD.%type%.shiftLeftByScalar() method returns a new instance with the lane values shifted left by a given bit count (a &lt;&lt; bits)."><code>SIMD.%type%.shiftLeftByScalar()</code></a></dt>
 <dd>Returns a new instance with the lane values shifted left by a given bit count (<code>a &lt;&lt; bits</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightArithmeticByScalar" title="The static SIMD.%type%.shiftRightArithmeticByScalar() method returns a new instance with the lane values shifted right (arithmetic) by a given bit count (a &gt;&gt; bits)."><code>SIMD.%type%.shiftRightArithmeticByScalar()</code></a></dt>
 <dd>Returns a new instance with the lane values shifted right (arithmetic) by a given bit count (<code>a &gt;&gt; bits</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shiftRightLogicalByScalar" title="The static SIMD.%type%.shiftRightLogicalByScalar() method returns a new instance with the lane values shifted right (logical) by a given bit count (a &gt;&gt;&gt; bits)."><code>SIMD.%type%.shiftRightLogicalByScalar()</code></a></dt>
 <dd>Returns a new instance with the lane values shifted right (logical) by a given bit count (<code>a &gt;&gt;&gt; bits</code>).</dd>
</dl>

<h3 id="Data_conversions">Data conversions</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4" title="The static SIMD.%type%.fromFloat32x4() method creates a new SIMD data type with a float conversion from a Float32x4."><code>SIMD.%type%.fromFloat32x4()</code></a></dt>
 <dd>Creates a new SIMD data type with a float conversion from a Float32x4.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits" title="The static SIMD.%type%.fromFloat32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Float32x4."><code>SIMD.%type%.fromFloat32x4Bits()</code></a></dt>
 <dd>Creates a new SIMD data type with a bit-wise copy from a Float32x4.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat64x2" title="The static SIMD.%type%.fromFloat64x2() method creates a new SIMD data type with a float conversion from a Float64x2."><code>SIMD.%type%.fromFloat64x2()</code></a></dt>
 <dd>Creates a new SIMD data type with a float conversion from a Float64x2.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat64x2Bits" title="The static SIMD.%type%.fromFloat64x2Bits() method creates a new SIMD data type with a bit-wise copy from a Float64x2."><code>SIMD.%type%.fromFloat64x2Bits()</code></a></dt>
 <dd>Creates a new SIMD data type with a bit-wise copy from a Float64x2.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4" title="The static SIMD.%type%.fromInt32x4() method creates a new SIMD data type with a float conversion from an Int32x4."><code>SIMD.%type%.fromInt32x4()</code></a></dt>
 <dd>Creates a new SIMD data type with an integer conversion from a in32x4.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4Bits" title="The static SIMD.%type%.fromInt32x4Bits() method creates a new SIMD data type with a bit-wise copy from an Int32x4."><code>SIMD.%type%.fromInt32x4Bits()</code></a></dt>
 <dd>Creates a new SIMD data type with a bit-wise copy from an Int32x4.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt16x8Bits" title="The static SIMD.%type%.fromInt16x8Bits() method creates a new SIMD data type with a bit-wise copy from an int16x8."><code>SIMD.%type%.fromInt16x8Bits()</code></a></dt>
 <dd>Creates a new SIMD data type with a bit-wise copy from an Int16x8.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt8x16Bits" title="The static SIMD.%type%.fromInt8x16Bits() method creates a new SIMD data type with a bit-wise copy from an Int8x16."><code>SIMD.%type%.fromInt8x16Bits()</code></a></dt>
 <dd>Creates a new SIMD data type with a bit-wise copy from an Int8x16.</dd>
</dl>

<h2 id="Polyfill">Polyfill</h2>

<p>A Polyfill implementation based on <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>, is available at the <a href="https://github.com/tc39/ecmascript_simd" class="external">ecmascript_simd</a> GitHub repository.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://littledan.github.io/simd.html#simd" class="external" lang="en" hreflang="en">SIMD<br><small lang="en-US">The definition of &apos;SIMD&apos; in that specification.</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Initial definition.</td>
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
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4" title="The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values."><code>SIMD.Float32x4</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2" title="The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values."><code>SIMD.Float64x2</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16" title="The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values."><code>SIMD.Int8x16</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8" title="The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values."><code>SIMD.Int16x8</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4" title="The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values."><code>SIMD.Int32x4</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
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
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32x4" title="The SIMD.Float32x4 data type is a 128-bit vector divided into 4 lanes storing single precision floating point values."><code>SIMD.Float32x4</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64x2" title="The SIMD.Float64x2 data type is a 128-bit vector divided into 2 lanes storing double precision floating point values."><code>SIMD.Float64x2</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8x16" title="The SIMD.Int8x16 data type is a 128-bit vector divided into 16 lanes storing 8-bit signed integer values."><code>SIMD.Int8x16</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16x8" title="The SIMD.Int16x8 data type is a 128-bit vector divided into 8 lanes storing 16-bit signed integer values."><code>SIMD.Int16x8</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32x4" title="The SIMD.Int32x4 data type is a 128-bit vector divided into 4 lanes storing 32-bit signed integer values."><code>SIMD.Int32x4</code></a></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
   <td><span style="color: #f00;">Not&#xA0;supported</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Status_notes">Status notes</h2>

<ul>
 <li><a href="https://status.modern.ie/simdes7" class="external">&quot;In development&quot; in Microsoft Edge</a></li>
 <li><a href="https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/2PIOEJG_aYY" class="external">&quot;Intent to implement&quot; in Blink/Chromium</a></li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Glossary/SIMD">Glossary: SIMD</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/SIMD_types">SIMD types</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures">Data types and data structures</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a href="https://www.youtube.com/watch?v=CbMXkbqQBcQ" class="external">SIMD Programming in JavaScript</a>, talk by Peter Jensen, Intel.</li>
 <li><a href="http://peterjensen.github.io/mandelbrot/js/mandelbrot-ww-asm.html" class="external">Mandelbrot animation using SIMD,</a> demo by Peter Jensen, Intel.</li>
 <li><a href="https://blog.mozilla.org/javascript/2015/03/10/state-of-simd-js-performance-in-firefox/" class="external">The state of SIMD.js performance in Firefox</a>, blog post by Benjamin Bouvier, Mozilla.</li>
</ul>
                  
                
              