
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;JavaScript &#x7684; <strong><code>Number</code></strong>&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;<code>Number</code> &#x5BF9;&#x8C61;&#x7531;&#xA0;<code>Number()</code> &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">new Number(value);</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>&#x88AB;&#x521B;&#x5EFA;&#x5BF9;&#x8C61;&#x7684;&#x6570;&#x5B57;&#x503C;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>Number</code> &#x5BF9;&#x8C61;&#x4E3B;&#x8981;&#x7528;&#x4E8E;&#xFF1A;</p>

<ul>
 <li>&#x5982;&#x679C;&#x53C2;&#x6570;&#x65E0;&#x6CD5;&#x88AB;&#x8F6C;&#x6362;&#x4E3A;&#x6570;&#x5B57;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;"><code>NaN</code></a>&#x3002;</li>
 <li>&#x5728;&#x975E;&#x6784;&#x9020;&#x5668;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D; (&#x5982;&#xFF1A;&#x6CA1;&#x6709; <a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x53EF;&#x4EE5;&#x662F;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E9B;&#x7CFB;&#x7EDF;&#x81EA;&#x5E26;&#x7684;&#x5E26;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5BF9;&#x8C61;&#x3002;"><code>new</code></a> &#x64CD;&#x4F5C;&#x7B26;)&#xFF0C;<code>Number</code> &#x80FD;&#x88AB;&#x7528;&#x6765;&#x6267;&#x884C;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#x3002;</li>
</ul>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON" title="Number.EPSILON&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A; 1 &#x548C;&#x5927;&#x4E8E; 1 &#x7684;&#x6700;&#x5C0F;&#x503C;&#xFF08;&#x53EF;&#x8868;&#x793A;&#x4E3A;&#xA0;Number&#xFF09;&#x7684;&#x5DEE;&#x503C;&#x3002;"><code>Number.EPSILON</code></a></dt>
 <dd>&#x4E24;&#x4E2A;&#x53EF;&#x8868;&#x793A;(representable)&#x6570;&#x4E4B;&#x95F4;&#x7684;&#x6700;&#x5C0F;&#x95F4;&#x9694;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER" title="Number.MAX_SAFE_INTEGER&#xA0;&#x5E38;&#x91CF;&#x8868;&#x793A;&#x5728;&#xA0;JavaScript &#x4E2D;&#x6700;&#x5927;&#x7684;&#x5B89;&#x5168;&#x6574;&#x6570;&#xFF08;maxinum safe integer)&#xFF08;253 - 1&#xFF09;&#x3002;"><code>Number.MAX_SAFE_INTEGER</code></a></dt>
 <dd>&#x5728; JavaScript &#x4E2D;&#x6700;&#x5927;&#x7684;&#x5B89;&#x5168;&#x6574;&#x6570; (<code>2<sup>53</sup>&#xA0;- 1</code>)&#x3002;</dd>
</dl>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE" title="Number.MAX_VALUE &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5728; JavaScript &#x91CC;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5927;&#x6570;&#x503C;&#x3002;"><code>Number.MAX_VALUE</code></a></dt>
 <dd>&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5927;&#x6B63;&#x6570;&#x3002;&#x6700;&#x5927;&#x7684;&#x8D1F;&#x6570;&#x662F; <code>-MAX_VALUE</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE" title="Number.MIN_VALUE &#x5C5E;&#x6027;&#x8868;&#x793A;&#x5728; JavaScript &#x4E2D;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5C0F;&#x7684;&#x6B63;&#x503C;&#x3002;"><code>Number.MIN_VALUE</code></a></dt>
 <dd>&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5C0F;&#x6B63;&#x6570;&#x5373;&#x6700;&#x63A5;&#x8FD1; 0 &#x7684;&#x6B63;&#x6570; (&#x5B9E;&#x9645;&#x4E0A;&#x4E0D;&#x4F1A;&#x53D8;&#x6210; 0)&#x3002;&#x6700;&#x5C0F;&#x7684;&#x8D1F;&#x6570;&#x662F; <code>-MIN_VALUE</code>&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN" title="Number.NaN&#xA0;&#x8868;&#x793A;&#x201C;&#x975E;&#x6570;&#x5B57;&#x201D;&#xFF08;Not-A-Number&#xFF09;&#x3002;&#x548C; NaN &#x76F8;&#x540C;&#x3002;"><code>Number.NaN</code></a></dt>
 <dd>&#x7279;&#x6B8A;&#x7684;&#x201C;&#x975E;&#x6570;&#x5B57;&#x201D;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY" title="Number.NEGATIVE_INFINITY &#x5C5E;&#x6027;&#x8868;&#x793A;&#x8D1F;&#x65E0;&#x7A77;&#x5927;&#x3002;"><code>Number.NEGATIVE_INFINITY</code></a></dt>
 <dd>&#x7279;&#x6B8A;&#x7684;&#x8D1F;&#x65E0;&#x7A77;&#x5927;&#x503C;&#xFF0C;&#x5728;&#x6EA2;&#x51FA;&#x65F6;&#x8FD4;&#x56DE;&#x8BE5;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" title="Number.POSITIVE_INFINITY &#x5C5E;&#x6027;&#x8868;&#x793A;&#x6B63;&#x65E0;&#x7A77;&#x5927;&#x3002;"><code>Number.POSITIVE_INFINITY</code></a></dt>
 <dd>&#x7279;&#x6B8A;&#x7684;&#x6B63;&#x65E0;&#x7A77;&#x5927;&#x503C;&#xFF0C;&#x5728;&#x6EA2;&#x51FA;&#x65F6;&#x8FD4;&#x56DE;&#x6539;&#x503C;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype" title="Number.prototype &#x5C5E;&#x6027;&#x8868;&#x793A; Number &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;"><code>Number.prototype</code></a></dt>
 <dd>Number &#x5BF9;&#x8C61;&#x4E0A;&#x5141;&#x8BB8;&#x7684;&#x989D;&#x5916;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" title="Number.isNaN() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x6BD4;&#x4F20;&#x7EDF;&#x7684;&#x5168;&#x5C40;&#x51FD;&#x6570; isNaN() &#x66F4;&#x53EF;&#x9760;&#x3002;"><code>Number.isNaN()</code></a></dt>
 <dd>&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" title="Number.isFinite() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x6709;&#x7A77;&#x6570;&#xFF08;finite number&#xFF09;&#x3002;"><code>Number.isFinite()</code></a></dt>
 <dd>&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x7C7B;&#x578B;&#x53CA;&#x672C;&#x8EAB;&#x662F;&#x5426;&#x662F;&#x6709;&#x9650;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger" title="Number.isInteger() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x7ED9;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x662F;&#x5426;&#x4E3A;&#x6574;&#x6570;&#x3002;"><code>Number.isInteger()</code></a></dt>
 <dd>&#x786E;&#x5B9A;&#x4F20;&#x9012;&#x7684;&#x503C;&#x7C7B;&#x578B;&#x662F;&#x201C;number&#x201D;&#xFF0C;&#x4E14;&#x662F;&#x6574;&#x6570;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" title="Number.isSafeInteger() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x503C;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x201C;&#x5B89;&#x5168;&#x6574;&#x6570;&#x201D;&#xFF08;safe integer&#xFF09;&#x3002;&#x4E00;&#x4E2A;&#x5B89;&#x5168;&#x6574;&#x6570;&#x662F;&#x4E00;&#x4E2A;&#x7B26;&#x5408;&#x4E0B;&#x9762;&#x6761;&#x4EF6;&#x7684;&#x6574;&#x6570;&#xFF1A;"><code>Number.isSafeInteger()</code></a></dt>
 <dd>Determine whether the&#xA0;passed value is a safe integer (number between&#xA0;<code>-(2<sup>53</sup>&#xA0;- 1)</code>&#xA0;and<code>2<sup>53</sup>&#xA0;- 1</code>).</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger" title="Number.toInteger()&#xA0;&#x7528;&#x6765;&#x5C06;&#x53C2;&#x6570;&#x8F6C;&#x6362;&#x6210;&#x6574;&#x6570;,&#x4F46;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B9E;&#x73B0;&#x5DF2;&#x88AB;&#x79FB;&#x9664;."><code>Number.toInteger()</code></a> <span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></dt>
 <dd>&#x8BA1;&#x7B97;&#x4F20;&#x9012;&#x7684;&#x503C;&#x5E76;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x6574;&#x6570; (&#x6216;&#x65E0;&#x7A77;&#x5927;)&#x3002;</dd>
</dl>

<div>
<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat" title="Number.parseFloat() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6D6E;&#x70B9;&#x6570;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;&#x5168;&#x5C40;&#x7684; parseFloat() &#x51FD;&#x6570;&#x76F8;&#x540C;&#xFF0C;&#x5E76;&#x4E14;&#x5904;&#x4E8E;&#xA0;ECMAScript 6 &#x89C4;&#x8303;&#x4E2D;&#xFF08;&#x7528;&#x4E8E;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x7684;&#x6A21;&#x5757;&#x5316;&#xFF09;&#x3002;"><code>Number.parseFloat()</code></a></dt>
 <dd>&#x548C;&#x5168;&#x5C40;&#x5BF9;&#x8C61; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" title="parseFloat()&#x65B9;&#x6CD5;&#x5C06;&#x53C2;&#x6570;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x5E76;&#x8FD4;&#x56DE;."><code>parseFloat()</code></a> &#x4E00;&#x6837;&#x3002;</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" title="Number.parseInt() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x7ED9;&#x5B9A;&#x7684;&#x8FDB;&#x5236;&#x6570;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6574;&#x6570;&#x3002;"><code>Number.parseInt()</code></a></dt>
 <dd>&#x548C;&#x5168;&#x5C40;&#x5BF9;&#x8C61; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" title="&#x6982;&#x8FF0;"><code>parseInt()</code></a> &#x4E00;&#x6837;&#x3002;</dd>
</dl>
</div>

<h2 name="Number_instances" id="Number_instances"><code>Number</code> &#x5B9E;&#x4F8B;</h2>

<p>&#x6240;&#x6709; <code>Number</code> &#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x81EA; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype" title="Number.prototype &#x5C5E;&#x6027;&#x8868;&#x793A; Number &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;"><code>Number.prototype</code></a>&#x3002;<code>&#x88AB;&#x4FEE;&#x6539;&#x7684; Number</code> &#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x5BF9;&#x5168;&#x90E8; <code>Number</code> &#x5B9E;&#x4F8B;&#x90FD;&#x751F;&#x6548;&#x3002;</p>

<h3 name="Methods_of_number_instance" id="Methods_of_number_instance">&#x65B9;&#x6CD5;</h3>

<div><dl><dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential" title="The toExponential() method returns a string representing the Number object in exponential notation."><code>Number.prototype.toExponential()</code></a></dt>
 <dd>Returns a string representing the number in exponential notation.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" title="The toFixed() method formats a number using fixed-point notation."><code>Number.prototype.toFixed()</code></a></dt>
 <dd>Returns a string representing the number in fixed-point notation.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString" title="The toLocaleString() method returns a string with a language sensitive representation of this number."><code>Number.prototype.toLocaleString()</code></a></dt>
 <dd>Returns a string with a language sensitive representation of this number. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes."><code>Object.prototype.toLocaleString()</code></a> method.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision" title="The toPrecision() method returns a string representing the Number object to the specified precision."><code>Number.prototype.toPrecision()</code></a></dt>
 <dd>Returns a string representing the number to a specified precision in fixed-point or exponential notation.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Number.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>Returns an object literal representing the specified <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" title="The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor."><code>Number</code></a> object; you can use this value to create a new object. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="The toSource() method returns a string representing the source code of the object."><code>Object.prototype.toSource()</code></a> method.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString" title="The toString() method returns a string representing the specified Number object."><code>Number.prototype.toString()</code></a></dt>
 <dd>Returns a string representing the specified object in the specified radix (base). Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="The toString() method returns a string representing object."><code>Object.prototype.toString()</code></a> method.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf" title="The valueOf() method returns the wrapped primitive value of a Number object."><code>Number.prototype.valueOf()</code></a></dt>
 <dd>Returns the primitive value of the specified object. Overrides the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" title="Technical review completed."><code>Object.prototype.valueOf()</code></a> method.</dd>
</dl></div>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_the_Number_object_to_assign_values_to_numeric_variables" id="Example:_Using_the_Number_object_to_assign_values_to_numeric_variables">&#x4F7F;&#x7528; Number &#x5BF9;&#x8C61;&#x7ED9;&#x6570;&#x5B57;&#x53D8;&#x91CF;&#x8D4B;&#x503C;</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528; <code>Number</code> &#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x7ED9;&#x51E0;&#x4E2A;&#x6570;&#x5B57;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#xFF1A;</p>

<pre class="brush: js">var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
</pre>

<h3 id="&#x6574;&#x6570;&#x7C7B;&#x578B;&#x7684;&#x8303;&#x56F4;">&#x6574;&#x6570;&#x7C7B;&#x578B;&#x7684;&#x8303;&#x56F4;</h3>

<p>&#x4E0B;&#x4F8B;&#x5C55;&#x793A;&#x4E86;<code>Number</code>&#x5BF9;&#x8C61;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5927;&#x548C;&#x6700;&#x5C0F;&#x6574;&#x6570;&#xA0;(&#x8BE6;&#x60C5;&#x8BF7;&#x53C2;&#x9605; ECMAScript standard, chapter&#xA0;<em>8.5 The Number Type</em>):</p>

<pre><code>var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;</code></pre>

<p>&#x5728;&#x89E3;&#x6790;&#x5E8F;&#x5217;&#x5316;&#x7684;JSON&#x65F6;&#xFF0C;&#x5982;&#x679C;JSON&#x89E3;&#x6790;&#x5668;&#x5C06;&#x5B83;&#x4EEC;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x4E3A;Number&#x7C7B;&#x578B;&#xFF0C;&#x90A3;&#x4E48;&#x8D85;&#x51FA;&#x6B64;&#x8303;&#x56F4;&#x7684;&#x6574;&#x6570;&#x503C;&#x53EF;&#x80FD;&#x4F1A;&#x88AB;&#x7834;&#x574F;&#x3002;&#x5728;&#x5DE5;&#x4F5C;&#x4E2D;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a> &#x7C7B;&#x578B;&#x4EE3;&#x66FF;&#xFF0C;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x884C;&#x7684;&#x89E3;&#x51B3;&#x65B9;&#x6848;&#x3002;</p>

<h3 name="Example:_Using_Number_to_convert_a_Date_object" id="Example:_Using_Number_to_convert_a_Date_object">&#x4F7F;&#x7528; <code>Number</code> &#x8F6C;&#x6362; <code>Date</code> &#x5BF9;&#x8C61;</h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528; Number &#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x6765;&#x8F6C;&#x6362; <code>Date</code> &#x5BF9;&#x8C61;&#x4E3A;&#x6570;&#x5B57;&#x503C;&#xFF1A;</p>

<pre class="brush: js">var d = new Date(&quot;December 17, 1995 03:24:00&quot;);
print(Number(d));
</pre>

<p>&#x8FD9;&#x5C06;&#x8F93;&#x51FA; &quot;819199440000&quot;&#x3002;</p>

<h3 id="&#x8F6C;&#x6362;&#x6570;&#x5B57;&#x5B57;&#x7B26;&#x4E32;&#x4E3A;&#x6570;&#x5B57;">&#x8F6C;&#x6362;&#x6570;&#x5B57;&#x5B57;&#x7B26;&#x4E32;&#x4E3A;&#x6570;&#x5B57;</h3>

<pre><code>Number(&quot;123&quot;)     // 123
Number(&quot;&quot;)        // 0
Number(&quot;0x11&quot;)    // 17
Number(&quot;0b11&quot;)    // 3
Number(&quot;0o11&quot;)    // 9
Number(&quot;foo&quot;)     // NaN
Number(&quot;100a&quot;)    // NaN</code></pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002; &#x5B9E;&#x73B0;&#x4E8E; JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.7" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Number</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-number-objects" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Number</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x65B0;&#x589E;&#x4E86;&#x65B9;&#x6CD5;&#x548C;&#x5C5E;&#x6027;: <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON" title="Number.EPSILON&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A; 1 &#x548C;&#x5927;&#x4E8E; 1 &#x7684;&#x6700;&#x5C0F;&#x503C;&#xFF08;&#x53EF;&#x8868;&#x793A;&#x4E3A;&#xA0;Number&#xFF09;&#x7684;&#x5DEE;&#x503C;&#x3002;"><code>EPSILON</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" title="Number.isFinite() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x53C2;&#x6570;&#x662F;&#x5426;&#x662F;&#x4E00;&#x4E2A;&#x6709;&#x7A77;&#x6570;&#xFF08;finite number&#xFF09;&#x3002;"><code>isFinite</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger" title="Number.isInteger() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x7ED9;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x662F;&#x5426;&#x4E3A;&#x6574;&#x6570;&#x3002;"><code>isInteger</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" title="Number.isNaN() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#x4F20;&#x5165;&#x7684;&#x503C;&#x662F;&#x5426;&#x662F; NaN&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x6BD4;&#x4F20;&#x7EDF;&#x7684;&#x5168;&#x5C40;&#x51FD;&#x6570; isNaN() &#x66F4;&#x53EF;&#x9760;&#x3002;"><code>isNaN</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat" title="Number.parseFloat() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6D6E;&#x70B9;&#x6570;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;&#x5168;&#x5C40;&#x7684; parseFloat() &#x51FD;&#x6570;&#x76F8;&#x540C;&#xFF0C;&#x5E76;&#x4E14;&#x5904;&#x4E8E;&#xA0;ECMAScript 6 &#x89C4;&#x8303;&#x4E2D;&#xFF08;&#x7528;&#x4E8E;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x7684;&#x6A21;&#x5757;&#x5316;&#xFF09;&#x3002;"><code>parseFloat</code></a>, <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" title="Number.parseInt() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x7ED9;&#x5B9A;&#x7684;&#x8FDB;&#x5236;&#x6570;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6574;&#x6570;&#x3002;"><code>parseInt</code></a></td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-number-objects" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Number</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Safari (WebKit)</th>
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
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Phone</th>
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
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x53C2;&#x9605;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;"><code>NaN</code></a></li>
 <li>&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" title="Math&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#xFF0C; &#x4E3A;&#x6570;&#x5B66;&#x5E38;&#x91CF;&#x548C;&#x6570;&#x5B66;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x3002;"><code>Math</code></a>&#xA0;</li>
</ul>
                  
                
              