
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>Math.round()</strong></code> &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x56DB;&#x820D;&#x4E94;&#x5165;&#x540E;&#x6700;&#x63A5;&#x8FD1;&#x7684;&#x6574;&#x6570;&#x503C;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>Math.round(<em>x</em>) </code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;&#xA0;<code>number</code>&#xA0;&#x7684;&#x5C0F;&#x6570;&#x90E8;&#x5206;&#x662F; .5 &#x6216;&#x8005;&#x66F4;&#x5927;&#xFF0C;&#x8F93;&#x5165;&#x7684;&#x53C2;&#x6570;&#x88AB;&#x56DB;&#x820D;&#x4E94;&#x5165;&#x5230;&#x4E0B;&#x4E00;&#x4E2A;&#x7684;&#x66F4;&#x5927;&#x7684;&#x6574;&#x6570;&#x3002; &#x5982;&#x679C; <code>number</code>&#xA0;&#x7684;&#x5C0F;&#x6570;&#x90E8;&#x5206;&#x5C0F;&#x4E8E; .5&#xFF0C;&#x8F93;&#x5165;&#x53C2;&#x6570;&#x88AB;&#x56DB;&#x820D;&#x4E94;&#x5165;&#x5230;&#x4E0B;&#x4E00;&#x4E2A;&#x66F4;&#x5C0F;&#x7684;&#x6574;&#x6570;&#x3002;</p>

<p>&#x56E0;&#x4E3A;&#xA0;<code>round</code> &#x662F; <code>Math &#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;</code>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x7528;&#x4F5C;&#xA0;<code>Math.round()</code>&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x4F60;&#x81EA;&#x5DF1;&#x521B;&#x5EFA;&#x7684;&#xA0;<code>Math</code> &#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_Math.round" id="Example:_Using_Math.round">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>Math.round</code></h3>

<pre class="brush:js">// &#x8FD4;&#x56DE; 20
x = Math.round(20.49);

// &#x8FD4;&#x56DE; 21
x = Math.round(20.5);

// &#x8FD4;&#x56DE; -20
x = Math.round(-20.5);

// &#x8FD4;&#x56DE; -21
x = Math.round(-20.51)

// Returns the value 1 (!)
// Note the rounding error because of inaccurate floating point arithmetics
// Compare this with Math.round10(1.005, -2) from the example below
x = Math.round(1.005*100)/100;
</pre>

<h3 name="Example:_Decimal_rounding" id="Example:_Decimal_rounding" style="line-height: 24px;">&#x4F8B;&#x5B50;&#xFF1A;&#x5341;&#x8FDB;&#x5236;&#x8C03;&#x6574;</h3>

<pre class="brush: js">// Closure
(function(){

&#xA0; /**
&#xA0;&#xA0; * Decimal adjustment of a number.
&#xA0;&#xA0; *
&#xA0;&#xA0; * @param {String}&#xA0; type&#xA0; The type of adjustment.
&#xA0;&#xA0; * @param {Number}&#xA0; value The number.
&#xA0;&#xA0; * @param {Integer} exp&#xA0;&#xA0; The exponent (the 10 logarithm of the adjustment base).
&#xA0;&#xA0; * @returns {Number}&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; The adjusted value.
&#xA0;&#xA0; */
&#xA0; function decimalAdjust(type, value, exp) {
&#xA0;&#xA0;&#xA0; // If the exp is undefined or zero...
&#xA0;&#xA0;&#xA0; if (typeof exp === &apos;undefined&apos; || +exp === 0) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return Math[type](value);
&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; value = +value;
&#xA0;&#xA0;&#xA0; exp = +exp;
&#xA0;&#xA0;&#xA0; // If the value is not a number or the exp is not an integer...
&#xA0;&#xA0;&#xA0; if (isNaN(value) || !(typeof exp === &apos;number&apos; &amp;&amp; exp % 1 === 0)) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return NaN;
&#xA0;&#xA0;&#xA0; }
&#xA0;&#xA0;&#xA0; // Shift
&#xA0;&#xA0;&#xA0; value = value.toString().split(&apos;e&apos;);
&#xA0;&#xA0;&#xA0; value = Math[type](+(value[0] + &apos;e&apos; + (value[1] ? (+value[1] - exp) : -exp)));
&#xA0;&#xA0;&#xA0; // Shift back
&#xA0;&#xA0;&#xA0; value = value.toString().split(&apos;e&apos;);
&#xA0;&#xA0;&#xA0; return +(value[0] + &apos;e&apos; + (value[1] ? (+value[1] + exp) : exp));
&#xA0; }

&#xA0; // Decimal round
&#xA0; if (!Math.round10) {
&#xA0;&#xA0;&#xA0; Math.round10 = function(value, exp) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return decimalAdjust(&apos;round&apos;, value, exp);
&#xA0;&#xA0;&#xA0; };
&#xA0; }
&#xA0; // Decimal floor
&#xA0; if (!Math.floor10) {
&#xA0;&#xA0;&#xA0; Math.floor10 = function(value, exp) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return decimalAdjust(&apos;floor&apos;, value, exp);
&#xA0;&#xA0;&#xA0; };
&#xA0; }
&#xA0; // Decimal ceil
&#xA0; if (!Math.ceil10) {
&#xA0;&#xA0;&#xA0; Math.ceil10 = function(value, exp) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; return decimalAdjust(&apos;ceil&apos;, value, exp);
&#xA0;&#xA0;&#xA0; };
&#xA0; }

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
Math.round10(1.005, -2); // 1.01 -- compare this with Math.round(1.005*100)/100 above
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

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 114px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 133px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 152px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 171px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 190px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 209px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 228px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 247px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 266px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 285px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 304px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 323px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 342px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 361px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 380px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 399px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 418px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 437px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 456px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 475px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 494px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 513px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 532px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 551px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 570px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 589px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 608px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 627px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 646px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 665px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 684px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 703px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 722px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 741px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 760px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 779px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 798px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 817px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 836px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 855px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 874px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 893px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 912px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 931px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 950px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 969px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 988px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1007px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1026px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1045px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1064px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1083px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1102px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1121px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1140px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1159px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1178px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1197px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1216px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1235px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1254px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1273px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1292px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1311px; background: 0px 0px;">&#xA0;</div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 1330px; background: 0px 0px;">&#xA0;</div>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.8.2.15" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Math.round</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-math.round" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Math.round</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari (WebKit)</th>
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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Phone</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
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

<h2 name="See_also" id="See_also" style="margin-bottom: 20px; line-height: 30px;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<p></p>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs" title="Math.abs(x)&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x6570;&#x5B57; &#x201C;x&#x201C; &#x7684;&#x7EDD;&#x5BF9;&#x503C;&#x3002;"><code>Math.abs()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" title="Math.ceil(x) &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5927;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570; &quot;x&quot; &#x7684;&#x6700;&#x5C0F;&#x6574;&#x6570;&#x3002;"><code>Math.ceil()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" title="Math.floor(x) &#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x5C0F;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x6570; &quot;x&quot; &#x7684;&#x6700;&#x5927;&#x6574;&#x6570;&#x3002;"><code>Math.floor()</code></a></li>
</ul>
                  
                
              