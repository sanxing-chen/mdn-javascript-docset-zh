
                
                  <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="notice experimental">
    <p><span title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span> <strong>This is an experimental technology</strong><br>Because this technology&apos;s specification has not stabilized, check the <a href="#Browser_compatibility">compatibility table</a> for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the specification changes.</p>
</div></div>

<p>The <strong><code>SIMD.Bool8x16</code></strong> data type is a 128-bit vector divided into 16 lanes storing boolean values.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">SIMD.Bool8x16(s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>s[0-15]</code> <span class="inlineIndicator optional optionalInline">Optional</span></dt>
 <dd>A boolean specifying the value of the lane. Defaults to <code>false</code>.</dd>
</dl>

<h2 id="Constructor_functions">Constructor functions</h2>

<p>In addition to the simple creator function, the SIMD API provides the following constructor functions:</p>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/splat" title="The static SIMD.%type%.splat() method creates a new SIMD data type with all lanes set to a given value."><code>SIMD.Bool8x16.splat()</code></a></dt>
 <dd>Creates an Bool8x16 with all lanes set to a given value.</dd>
</dl>

<div class="note">
<p><strong>Note:</strong> SIMD types don&apos;t work with <code>new</code>, as SIMD values are no &quot;boxed&quot; objects (comparable to <code>String(s)</code> vs. <code>new String(s)</code>, which creates a String object).</p>

<pre class="brush: js example-bad">var v = new SIMD.Bool8x16(true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false); 
// TypeError: SIMD.Bool8x16 is not a constructor
var w = new SIMD.Bool8x16.splat(true); 
// TypeError: SIMD.Bool8x16.splat is not a constructor
</pre>

<p>Instead, you just write:</p>

<pre class="brush: js example-good">var v = SIMD.Bool8x16(true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false);
var w = SIMD.Bool8x16.splat(true); 
</pre>
</div>

<h2 id="Operations">Operations</h2>

<p>To actually do something with SIMD types, SIMD operations are needed that work on SIMD data types.</p>

<h3 id="Checking_SIMD_types">Checking SIMD types</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/check" title="The static SIMD.%type%.check() method returns a SIMD data type if the parameter is a valid SIMD data type and the same as %type%. Otherwise, a TypeError is thrown."><code>SIMD.Bool8x16.check()</code></a></dt>
 <dd>Returns a new Bool8x16 if the parameter is a valid Bool8x16 data type. Throws a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="The TypeError object represents an error when a value is not of the expected type."><code>TypeError</code></a> otherwise.</dd>
</dl>

<h3 id="Accessing_and_mutating_lanes">Accessing and mutating lanes</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/extractLane" title="The static SIMD.%type%.extractLane() method returns the value of a given lane."><code>SIMD.Bool8x16.extractLane()</code></a></dt>
 <dd>Returns the value of the given lane.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/replaceLane" title="The static SIMD.%type%.replaceLane() method returns a new SIMD data type with the given lane value replaced."><code>SIMD.Bool8x16.replaceLane()</code></a></dt>
 <dd>Returns a new Bool8x16 with the given lane value replaced.</dd>
 <dt>
 <h3 id="Boolean_operations">Boolean operations</h3>
 </dt>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/allTrue" title="The static SIMD.%BooleanType%.allTrue() method returns a Boolean indicating whether or not all lanes hold a true value."><code>SIMD.Bool8x16.allTrue()</code></a></dt>
 <dd>Checks if all lanes hold a <code>true</code> value.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/anyTrue" title="The static SIMD.%BooleanType%.anyTrue() method returns a Boolean indicating whether or not any of the lanes hold a true value."><code>SIMD.Bool8x16.anyTrue()</code></a></dt>
 <dd>Checks if any of the lanes hold a <code>true</code> value.</dd>
</dl>

<h3 id="Bitwise_logical_operations">Bitwise logical operations</h3>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/and" title="The static SIMD.%type%.and() method returns a new instance with the logical AND of the lane values (a &amp; b). This operation exists only on integer and boolean SIMD types."><code>SIMD.Bool8x16.and()</code></a></dt>
 <dd>Returns a new Bool8x16 with the logical AND of the lane values (<code>a &amp; b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/or" title="The static SIMD.%type%.or() method returns a new instance with the logical OR of the lane values (a | b). This operation exists only on integer and boolean SIMD types."><code>SIMD.Bool8x16.or()</code></a></dt>
 <dd>Returns a new Bool8x16 with the logical OR of the lane values (<code>a | b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/xor" title="The static SIMD.%type%.xor() method returns a new instance with the logical XOR of the lane values (a ^ b)."><code>SIMD.Bool8x16.xor()</code></a></dt>
 <dd>Returns a new Bool8x16 with the logical XOR of the lane values (<code>a ^ b</code>).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/not" title="The static SIMD.%type%.not() method returns a new instance with the bitwise logical NOT of the lane values (~a). This operation exists only on integer and boolean SIMD types."><code>SIMD.Bool8x16.not()</code></a></dt>
 <dd>Returns a new Bool8x16 with lane with the logical NOT of the lane values (<code>~a</code>).</dd>
</dl>

<h2 id="SIMD_prototype">SIMD prototype</h2>

<p>The following methods and properties are installed on the <code>SIMD.Bool8x16.prototype</code>.</p>

<dl>
 <dt><code>SIMD.Bool8x16.prototype.constructor</code></dt>
 <dd>Specifies the function that creates a SIMD object&apos;s prototype.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toLocaleString" class="new" title="The documentation about this has not yet been written; please consider contributing!"><code>SIMD.Bool8x16.prototype.toLocaleString()</code></a></dt>
 <dd>Returns a localized string representing the SIMD type and its elements. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes."><code>Object.prototype.toLocaleString()</code></a> method.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toString" title="The SIMD.%type%.toString() method returns a String representing a SIMD object."><code>SIMD.Bool8x16.prototype.toString()</code></a></dt>
 <dd>Returns a string representing the SIMD type and its elements. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="The toString() method returns a string representing the object."><code>Object.prototype.toString()</code></a> method.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/valueOf" title="The SIMD.%type%.valueOf() method performs a type check returns the this value."><code>SIMD.Bool8x16.prototype.valueOf()</code></a></dt>
 <dd>Returns the primitive value of a SIMD object.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD/toSource" title="The non-standard SIMD.%type%.toSource() method returns a string representing the source code of the object."><code>SIMD.Bool8x16.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>Returns a string representing the source code of the object. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Object.prototype.toSource()</code></a> method.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Constructing_a_Bool8x16">Constructing a Bool8x16</h3>

<pre class="brush: js">SIMD.Bool8x16(true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false);
// Bool8x16[true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false]

SIMD.Bool8x16(true, false);
// Bool8x16[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

SIMD.Bool8x16();
// Bool8x16[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecmascript_simd/#bool8x16" class="external" lang="en" hreflang="en">SIMD<br><small lang="en-US">The definition of &apos;Bool8x16&apos; in that specification.</small></a></td>
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
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD" title="SIMD (pronounced &quot;sim-dee&quot;) is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains."><code>SIMD</code></a></li>
</ul>
                
              