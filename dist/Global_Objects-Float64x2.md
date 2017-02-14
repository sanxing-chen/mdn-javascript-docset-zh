
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<div class="note">
<p>Note: The Float64x2 type is currently not part of the SIMD specification draft.</p>
</div>

<p>The <strong><code>SIMD.Float64x2</code></strong> data type is a 128-bit vector divided into 2 lanes storing double precision floating point values.</p>

<div><img src="https://mdn.mozillademos.org/files/11251/float64x2.png" alt="SIMD.Float64x2">
<p>Figure 1: SIMD.Float64x2 in a 128-bit SIMD register.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">SIMD.Float64x2(x, y);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>x</code> <span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>A double specifying the value of the first lane. Defaults to <a title="The global NaN property is a value representing Not-A-Number." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>.</dd>
 <dt><code>y</code> <span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>A double specifying the value of the second lane. Defaults to <a title="The global NaN property is a value representing Not-A-Number." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>.</dd>
</dl>

<h2 id="Constructor_functions">Constructor functions</h2>

<p>In addition to the simple creator functions, the SIMD API provides the following constructor functions:</p>

<dl>
 <dt><a title="The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat"><code>SIMD.Float64x2.splat()</code></a></dt>
 <dd>Creates a Float64x2 with all lanes set to a given value.</dd>
</dl>

<p>Note that you can also <a href="#Data_conversions">convert from another SIMD data type to Float64x2</a>.</p>

<div class="note">
<p><strong>Note:</strong> SIMD types don&apos;t work with <code>new</code>, as SIMD values are no &quot;boxed&quot; objects (comparable to <code>String(s)</code> vs. <code>new String(s)</code>, which creates a String object).</p>

<pre class="brush: js example-bad">var v = new SIMD.Float64x2(1, 2); 
// TypeError: SIMD.Float64x2 is not a constructor
var w = new SIMD.Float64x2.splat(3); 
// TypeError: SIMD.Float64x2.splat is not a constructor
</pre>

<p>Instead, you just write:</p>

<pre class="brush: js example-good">var v = SIMD.Float64x2(1, 2); 
var w = SIMD.Float64x2.splat(3); 
</pre>
</div>

<h2 id="Operations">Operations</h2>

<p>To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.</p>

<h3 id="Checking_SIMD_types">Checking SIMD types</h3>

<dl>
 <dt><a title="The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check"><code>SIMD.Float64x2.check()</code></a></dt>
 <dd>Returns a new Float64x2 if the parameter is a valid Float64x2 data type. Throws a <a title="The TypeError object represents an error when a value is not of the expected type." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> otherwise.</dd>
</dl>

<h3 id="Accessing_and_mutating_lanes">Accessing and mutating lanes</h3>

<dl>
 <dt><a title="The static SIMD.%type%.extractLane() method returns the value of a given lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane"><code>SIMD.Float64x2.extractLane()</code></a></dt>
 <dd>Returns the value of the given lane.</dd>
 <dt><a title="The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane"><code>SIMD.Float64x2.replaceLane()</code></a></dt>
 <dd>Returns a new Float64x2 with the given lane value replaced.</dd>
</dl>

<h3 id="Loading_from_and_storing_into_typed_arrays">Loading from and storing into typed arrays</h3>

<dl>
 <dt><a title="The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load"><code>SIMD.Float64x2.load()</code></a></dt>
 <dt><a title="The static SIMD.%type%.load() methods create a new SIMD data type with the lane values loaded from a typed array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/load"><code>SIMD.Float64x2.load1()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values loaded from a <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a>.</dd>
 <dt><a title="The static SIMD.%type%.store() methods store a SIMD data type into a typed array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store"><code>SIMD.Float64x2.store()</code></a><br>
 <a title="The static SIMD.%type%.store() methods store a SIMD data type into a typed array." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/store"><code>SIMD.Float64x2.store1()</code></a></dt>
 <dd>Stores a Float64x2 into a <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a>.</dd>
</dl>

<h3 id="Arithmetic_operations">Arithmetic operations</h3>

<dl>
 <dt><a title="The static SIMD.%type%.abs() method returns a new SIMD data type with absolute values. This operation exists only on floating point SIMD types." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/abs"><code>SIMD.Float64x2.abs()</code></a></dt>
 <dd>Returns a new Float64x2 with the absolute lane values.</dd>
 <dt><a title="The static SIMD.%type%.add() method returns a new instance with the lane values added (a + b)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/add"><code>SIMD.Float64x2.add()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values added (<code>a + b</code>).</dd>
 <dt><a title="The static SIMD.%type%.div() method returns a new instance with the lane values divided (a / b). This function is defined only on floating point SIMD types." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/div"><code>SIMD.Float64x2.div()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values divided (<code>a / b</code>).</dd>
 <dt><a title="The static SIMD.%type%.mul() method returns a new instance with the lane values multiplied (a * b)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/mul"><code>SIMD.Float64x2.mul()</code></a></dt>
 <dd>Returns a new loat64x2 with the lane values multiplied (<code>a * b</code>).</dd>
 <dt><a title="The static SIMD.%type%.mul() method returns a new instance with the lane values negated." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/neg"><code>SIMD.Float64x2.neg()</code></a></dt>
 <dd>Returns a new Float64x2 with the negated lane values.</dd>
 <dt><a title="The static SIMD.%type%.reciprocalApproximation() method returns a new instance with an approximation of the reciprocal lane values (1 / x)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalApproximation"><code>SIMD.Float64x2.reciprocalApproximation()</code></a></dt>
 <dd>Returns a new Float64x2 with an approximation of the reciprocal lane values.</dd>
 <dt><a title="The static SIMD.%type%.reciprocalSqrtApproximation() method returns a new instance with an approximation of the reciprocal value (1 / x) of the square root (Math.sqrt()) of the lane values." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/reciprocalSqrtApproximation"><code>SIMD.Float64x2.reciprocalSqrtApproximation()</code></a></dt>
 <dd>Returns a new Float64x2 with an approximation of the reciprocal square root lane values.</dd>
 <dt><a title="The static SIMD.%type%.sub() method returns a new instance with the lane values subtracted (a - b)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sub"><code>SIMD.Float64x2.sub()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values subtracted (<code>a - b</code>).</dd>
 <dt><a title="The static SIMD.%type%.sqrt() method returns a new instance with the square root of the lane values (see also Math.sqrt() for the same scalar function)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/sqrt"><code>SIMD.Float64x2.sqrt()</code></a></dt>
 <dd>Returns a new Float64x2 with the square root of the lane values.</dd>
</dl>

<h3 id="Shuffling_and_swizzling">Shuffling and swizzling</h3>

<dl>
 <dt><a title="The static SIMD.%type%.shuffle() method creates a new SIMD data type instance with the lane values shuffled." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/shuffle"><code>SIMD.Float64x2.shuffle()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values shuffled.</dd>
 <dt><a title="The static SIMD.%type%.swizzle() method creates a new SIMD data type instance with the lane values swizzled (re-ordered)." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/swizzle"><code>SIMD.Float64x2.swizzle()</code></a></dt>
 <dd>Returns a new Float64x2 with the lane values swizzled.</dd>
</dl>

<h3 id="Min_and_max_values">Min and max values</h3>

<dl>
 <dt><a title="The static SIMD.%type%.max() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b))." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/max"><code>SIMD.Float64x2.max()</code></a></dt>
 <dd>Returns a new Float64x2 with the maximum of the lane values.</dd>
 <dt><a title="The static SIMD.%type%.maxNum() method returns a new instance with the maximum lane values of two SIMD types (Math.max(a, b)) preferring numbers over NaN." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/maxNum"><code>SIMD.Float64x2.maxNum()</code></a></dt>
 <dd>Returns a new Float64x2 with the maximum of the lane values, preferring numbers over <a title="The global NaN property is a value representing Not-A-Number." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>.</dd>
 <dt><a title="The static SIMD.%type%.min() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b))." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/min"><code>SIMD.Float64x2.min()</code></a></dt>
 <dd>Returns a new Float64x2 with the minimum of the lane values.</dd>
 <dt><a title="The static SIMD.%type%.minNum() method returns a new instance with the minimum lane values of two SIMD types (Math.min(a, b)) preferring numbers over NaN." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/minNum"><code>SIMD.Float64x2.minNum()</code></a></dt>
 <dd>Returns a new Float64x2 with the minimum of the lane values, preferring numbers over <a title="The global NaN property is a value representing Not-A-Number." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>.</dd>
</dl>

<h3 id="Selections">Selections</h3>

<dl>
 <dt><a title="The static SIMD.%type%.select() method creates a new integer SIMD data type with the lane values being a selection match from a selector mask." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/select"><code>SIMD.Float64x2.select()</code></a></dt>
 <dd>Returns a new loat64x2 with the lane values being a mix of the lanes depending on the selector mask.</dd>
</dl>

<h3 id="Comparisons">Comparisons</h3>

<dl>
 <dt><a title="The static SIMD.%type%.equal() method returns a selection mask with values depending on a strict equality comparison (a === b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/equal"><code>SIMD.Float64x2.equal()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a == b</code>.</dd>
 <dt><a title="The static SIMD.%type%.notEqual() method returns a selection mask with values depending on an inequality comparison (a != b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/notEqual"><code>SIMD.Float64x2.notEqual()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a != b</code>.</dd>
 <dt><a title="The static SIMD.%type%.lessThan() method returns a selection mask with values depending on a less-than comparison (a &lt; b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThan"><code>SIMD.Float64x2.lessThan()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &lt; b</code>.</dd>
 <dt><a title="The static SIMD.%type%.lessThanOrEqual() method returns a selection mask with values depending on a less-than-or-equal comparison (a &lt;= b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/lessThanOrEqual"><code>SIMD.Float64x2.lessThanOrEqual()</code></a></dt>
 <dd>Returns a&#xA0;selection mask depending on <code>a &lt;= b</code>.</dd>
 <dt><a title="The static SIMD.%type%.greaterThan() method returns a selection mask with values depending on a greater-than comparison (a &gt; b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThan"><code>SIMD.Float64x2.greaterThan()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &gt; b</code>.</dd>
 <dt><a title="The static SIMD.%type%.greaterThanOrEqual() method returns a selection mask with values depending on a greater-than-or-equal comparison (a &gt;= b) in each lane." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/greaterThanOrEqual"><code>SIMD.Float64x2.greaterThanOrEqual()</code></a></dt>
 <dd>Returns a selection mask depending on <code>a &gt;= b</code>.</dd>
</dl>

<h3 id="Data_conversions">Data conversions</h3>

<dl>
 <dt><a title="The static SIMD.%type%.fromFloat32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Float32x4." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromFloat32x4Bits"><code>SIMD.Float64x2.fromFloat32x4Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from a Float32x4.</dd>
 <dt><a title="The static SIMD.%type%.fromInt32x4Bits() method creates a new SIMD data type with a bit-wise copy from an Int32x4." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt32x4Bits"><code>SIMD.Float64x2.fromInt32x4Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from an Int32x4.</dd>
 <dt><a title="The static SIMD.%type%.fromInt16x8Bits() method creates a new SIMD data type with a bit-wise copy from an int16x8." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt16x8Bits"><code>SIMD.Float64x2.fromInt16x8Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from an Int16x8.</dd>
 <dt><a title="The static SIMD.%type%.fromInt8x16Bits() method creates a new SIMD data type with a bit-wise copy from an Int8x16." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromInt8x16Bits"><code>SIMD.Float64x2.fromInt8x16Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from an Int8x16.</dd>
 <dt><a title="The static SIMD.%type%.fromUint32x4Bits() method creates a new SIMD data type with a bit-wise copy from a Uint32x4." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint32x4Bits"><code>SIMD.Float64x2.fromUint32x4Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint32x4.</dd>
 <dt><a title="The static SIMD.%type%.fromUint16x8Bits() method creates a new SIMD data type with a bit-wise copy from a Uint16x8." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint16x8Bits"><code>SIMD.Float64x2.fromUint16x8Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint16x8.</dd>
 <dt><a title="The static SIMD.%type%.fromUint8x16Bits() method creates a new SIMD data type with a bit-wise copy from a Uint8x16." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/fromUint8x16Bits"><code>SIMD.Float64x2.fromUint8x16Bits()</code></a></dt>
 <dd>Creates a new Float64x2 data type with a bit-wise copy from a Uint8x16.</dd>
</dl>

<h2 id="SIMD_prototype">SIMD prototype</h2>

<p>The following methods and properties are installed on the <code>SIMD.Float64x2.prototype</code>.</p>

<dl>
 <dt><code>SIMD.Float64x2.prototype.constructor</code></dt>
 <dd>Specifies the function that creates a SIMD object&apos;s prototype.</dd>
 <dt><a title="The documentation about this has not yet been written; please consider contributing!" href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toLocaleString" class="new"><code>SIMD.Float64x2.prototype.toLocaleString()</code></a></dt>
 <dd>Returns a localized string representing the SIMD type and its elements. Overrides the <a title="The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString"><code>Object.prototype.toLocaleString()</code></a> method.</dd>
 <dt><a title="The SIMD.%type%.toString() method returns a String representing a SIMD object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toString"><code>SIMD.Float64x2.prototype.toString()</code></a></dt>
 <dd>Returns a string representing the SIMD type and its elements. Overrides the <a title="The toString() method returns a string representing the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString()</code></a> method.</dd>
 <dt><a title="The SIMD.%type%.valueOf() method performs a type check returns the this value." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/valueOf"><code>SIMD.Float64x2.prototype.valueOf()</code></a></dt>
 <dd>Returns the primitive value of a SIMD object.</dd>
 <dt><a title="The non-standard SIMD.%type%.toSource() method returns a string representing the source code of the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toSource"><code>SIMD.Float64x2.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>Returns a string representing the source code of the object. Overrides the <a title="The toSource() method returns a string representing the source code of the object." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource"><code>Object.prototype.toSource()</code></a> method.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Constructing_a_Float64x2">Constructing a Float64x2</h3>

<pre class="brush: js">SIMD.Float64x2(1, 2); // Float64x2[1, 2]
SIMD.Float64x2(1);    // Float64x2[1, NaN]
SIMD.Float64x2();     // Float64x2[NaN, NaN]
</pre>

<h2 id="Specifications">Specifications</h2>

<p> The Float64x2 type is currently not part of the SIMD specification draft. </p>

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
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
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
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><em><a href="http://nightly.mozilla.org/" class="external">Nightly build</a></em></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
   <td><span style="color: #f00;">No&#xA0;support</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><a title="SIMD (pronounced &quot;sim-dee&quot;) is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains." href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD"><code>SIMD</code></a></li>
</ul>
                
              