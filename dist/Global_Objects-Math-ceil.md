
                
                  
                    <div>
 <section id="Quick_Links" class="Quick_links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8981;</h2>
<p><code><strong>Math.ceil(x)</strong></code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5927;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570; &quot;x&quot; &#x7684;&#x6700;&#x5C0F;&#x6574;&#x6570;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">Math.ceil(<em>x</em>) </pre>
<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>x</code></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x6570;&#x503C;</dd>
</dl>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x7531;&#x4E8E; <code>ceil</code> &#x662F; <code>Math</code>&#xA0;&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x6240;&#x4EE5;&#x5E94;&#x8BE5;&#x50CF;&#x8FD9;&#x6837;&#x4F7F;&#x7528;&#xFF1A;<code>Math.ceil()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4F60;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5B9E;&#x4F8B;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>
<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>
<h3 name="Example:_Using_Math.ceil" id="Example:_Using_Math.ceil">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>Math.ceil</code></h3>
<p>&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;&#xA0;<code>Math.ceil()</code>&#xA0;&#x7684;&#x4F7F;&#x7528;&#xFF1A;</p>
<pre class="brush:js;">Math.ceil(.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004) // 8</pre>
<h3 name="Example:_Decimal_adjustment" id="Example:_Decimal_adjustment">&#x4F8B;&#x5B50;&#xFF1A;&#x5341;&#x8FDB;&#x5236;&#x8C03;&#x6574;</h3>
<pre class="brush:js">// Closure
(function(){

	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === &apos;undefined&apos; || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === &apos;number&apos; &amp;&amp; exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split(&apos;e&apos;);
		value = Math[type](+(value[0] + &apos;e&apos; + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split(&apos;e&apos;);
		return +(value[0] + &apos;e&apos; + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust(&apos;round&apos;, value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust(&apos;floor&apos;, value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust(&apos;ceil&apos;, value, exp);
		};
	}

})();

// Round
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
// Floor
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Ceil
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
</pre>
<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.6">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.ceil</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.ceil">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.ceil</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>
<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
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
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
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
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
    <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li>The <a title="Math&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#xFF0C; &#x4E3A;&#x6570;&#x5B66;&#x5E38;&#x91CF;&#x548C;&#x6570;&#x5B66;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math"><code>Math</code></a> object it belongs to.</li>
 <li><a title="Math.abs(x)&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x6570;&#x5B57; &#x201C;x&#x201C; &#x7684;&#x7EDD;&#x5BF9;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs"><code>Math.abs()</code></a></li>
 <li><a title="Math.floor(x) &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x5C0F;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570; &quot;x&quot; &#x7684;&#x6700;&#x5927;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"><code>Math.floor()</code></a></li>
 <li><a title="Math.round() &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x56DB;&#x820D;&#x4E94;&#x5165;&#x540E;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x6574;&#x6570;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round"><code>Math.round()</code></a></li>
</ul>
                  
                
              