
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>instanceof</strong></code> &#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x6D4B;&#x8BD5;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5728;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E2D;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;<code>prototype</code>&#xA0;&#x5C5E;&#x6027;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre><code><em>object</em> instanceof <em>constructor</em></code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>object</code></dt>
 <dd>&#x8981;&#x68C0;&#x6D4B;&#x7684;&#x5BF9;&#x8C61;.</dd>
</dl>

<dl>
 <dt><code>constructor</code></dt>
 <dd>&#x67D0;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>instanceof&#xA0;</code>&#x8FD0;&#x7B97;&#x7B26;&#x7528;&#x6765;&#x68C0;&#x6D4B;&#xA0;<code>constructor.prototype&#xA0;</code>&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53C2;&#x6570;&#xA0;<code>object&#xA0;</code>&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x3002;</p>

<pre class="brush: js">// &#x5B9A;&#x4E49;&#x6784;&#x9020;&#x51FD;&#x6570;
function C(){} 
function D(){} 

var o = new C();

// true&#xFF0C;&#x56E0;&#x4E3A; Object.getPrototypeOf(o) === C.prototype
o instanceof C; 

// false&#xFF0C;&#x56E0;&#x4E3A; D.prototype&#x4E0D;&#x5728;o&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;
o instanceof D; 

o instanceof Object; // true,&#x56E0;&#x4E3A;Object.prototype.isPrototypeOf(o)&#x8FD4;&#x56DE;true
C.prototype instanceof Object // true,&#x540C;&#x4E0A;

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype&#x6307;&#x5411;&#x4E86;&#x4E00;&#x4E2A;&#x7A7A;&#x5BF9;&#x8C61;,&#x8FD9;&#x4E2A;&#x7A7A;&#x5BF9;&#x8C61;&#x4E0D;&#x5728;o&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;.

D.prototype = new C(); // &#x7EE7;&#x627F;
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
</pre>

<p>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x5982;&#x679C;&#x8868;&#x8FBE;&#x5F0F;&#xA0;<code>obj instanceof Foo</code> <code>&#x8FD4;&#x56DE;true&#xFF0C;&#x5219;&#x5E76;&#x4E0D;&#x610F;&#x5473;&#x7740;&#x8BE5;&#x8868;&#x8FBE;&#x5F0F;&#x4F1A;&#x6C38;&#x8FDC;&#x8FD4;&#x56DE;true&#xFF0C;&#x56E0;&#x4E3A;Foo.prototype&#x5C5E;&#x6027;&#x7684;&#x503C;&#x6709;&#x53EF;&#x80FD;&#x4F1A;&#x6539;&#x53D8;</code>&#xFF0C;&#x6539;&#x53D8;&#x4E4B;&#x540E;&#x7684;&#x503C;&#x5F88;&#x6709;&#x53EF;&#x80FD;&#x4E0D;&#x5B58;&#x5728;&#x4E8E;<code>obj</code>&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#xFF0C;&#x8FD9;&#x65F6;&#x539F;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;&#x5C31;&#x4F1A;&#x6210;&#x4E3A;<code>false</code>&#x3002;&#x53E6;&#x5916;&#x4E00;&#x79CD;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x539F;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x503C;&#x4E5F;&#x4F1A;&#x6539;&#x53D8;&#xFF0C;&#x5C31;&#x662F;&#x6539;&#x53D8;&#x5BF9;&#x8C61;<code>obj</code>&#x7684;&#x539F;&#x578B;&#x94FE;&#x7684;&#x60C5;&#x51B5;&#xFF0C;&#x867D;&#x7136;&#x5728;&#x76EE;&#x524D;&#x7684;ES&#x89C4;&#x8303;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x53EA;&#x80FD;&#x8BFB;&#x53D6;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x800C;&#x4E0D;&#x80FD;&#x6539;&#x53D8;&#x5B83;&#xFF0C;&#x4F46;&#x501F;&#x52A9;&#x4E8E;&#x975E;&#x6807;&#x51C6;&#x7684;<code>__proto__&#x9B54;&#x6CD5;&#x5C5E;&#x6027;</code>&#xFF0C;<code>&#x662F;&#x53EF;&#x4EE5;&#x5B9E;&#x73B0;&#x7684;</code>&#x3002;&#x6BD4;&#x5982;<code>&#x6267;&#x884C;obj.__proto__ = {}&#x4E4B;&#x540E;</code>&#xFF0C;<code>obj instanceof Foo&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;false&#x4E86;&#x3002;</code></p>

<h3 id="instanceof&#x548C;&#x591A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;(&#x591A;&#x4E2A;frame&#x6216;&#x591A;&#x4E2A;window&#x4E4B;&#x95F4;&#x7684;&#x4EA4;&#x4E92;)"><code>instanceof&#x548C;&#x591A;&#x5168;&#x5C40;&#x5BF9;&#x8C61;</code>(&#x591A;&#x4E2A;frame&#x6216;&#x591A;&#x4E2A;window&#x4E4B;&#x95F4;&#x7684;&#x4EA4;&#x4E92;)</h3>

<p>&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#x6211;&#x4EEC;&#x7684;&#x811A;&#x672C;&#x53EF;&#x80FD;&#x9700;&#x8981;&#x5728;&#x591A;&#x4E2A;&#x7A97;&#x53E3;&#x4E4B;&#x95F4;&#x8FDB;&#x884C;&#x4EA4;&#x4E92;&#x3002;&#x591A;&#x4E2A;&#x7A97;&#x53E3;&#x610F;&#x5473;&#x7740;&#x591A;&#x4E2A;&#x5168;&#x5C40;&#x73AF;&#x5883;&#xFF0C;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x73AF;&#x5883;&#x62E5;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#xFF0C;&#x4ECE;&#x800C;&#x62E5;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x5185;&#x7F6E;&#x7C7B;&#x578B;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;&#x8FD9;&#x53EF;&#x80FD;&#x4F1A;&#x5F15;&#x53D1;&#x4E00;&#x4E9B;&#x95EE;&#x9898;&#x3002;&#x6BD4;&#x5982;&#xFF0C;&#x8868;&#x8FBE;&#x5F0F;&#xA0;<code>[] instanceof window.frames[0].Array</code>&#xA0;&#x4F1A;&#x8FD4;&#x56DE;<code>false</code>&#xFF0C;&#x56E0;&#x4E3A; <code>Array.prototype !== window.frames[0].Array.prototype</code>&#xFF0C;&#x56E0;&#x6B64;&#x4F60;&#x5FC5;&#x987B;&#x4F7F;&#x7528; <code>Array.isArray(myObj)</code> &#x6216;&#x8005; <code>Object.prototype.toString.call(myObj) === &quot;[object Array]&quot;</code>&#x6765;&#x5224;&#x65AD;myObj&#x662F;&#x5426;&#x662F;&#x6570;&#x7EC4;&#x3002;</p>

<div class="note"><strong>Mozilla&#x5F00;&#x53D1;&#x8005;&#x6CE8;&#x610F;:</strong><br>
&#x5728;&#x4EE3;&#x7801;&#x4E2D;&#x4F7F;&#x7528; XPCOM instanceof &#x6709;&#x7279;&#x6B8A;&#x5F71;&#x54CD;: <code>obj instanceof </code><em><code>xpcomInterface</code></em> (e.g. <code>Components.interfaces.nsIFile</code>) calls <code>obj.QueryInterface(<em>xpcomInterface</em>)</code> and returns <code>true</code> if QueryInterface succeeded. A side effect of such call is that you can use <em><code>xpcomInterface</code></em>&apos;s properties on <code>obj</code> after a successful <code>instanceof</code> test. Unlike standard JavaScript globals, the test <code>obj instanceof xpcomInterface </code>works as expected even if <code>obj</code> is from a different scope.</div>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Demonstrating_that_String_and_Date_are_of_type_Object" id="Example:_Demonstrating_that_String_and_Date_are_of_type_Object">&#x4F8B;&#x5B50;: &#x8868;&#x660E;<code>String</code>&#x5BF9;&#x8C61;&#x548C;<code>Date&#x5BF9;&#x8C61;&#x90FD;&#x5C5E;&#x4E8E;</code><code>Object&#x7C7B;&#x578B;</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x4F7F;&#x7528;&#x4E86;<code>instanceof</code>&#x6765;&#x8BC1;&#x660E;&#xFF1A;<code>String&#x548C;</code><code>Date&#x5BF9;&#x8C61;</code>&#x540C;&#x65F6;&#x4E5F;&#x5C5E;&#x4E8E;<code>Object&#x7C7B;&#x578B;</code>&#x3002;</p>

<pre class="brush: js"><code>var simpleStr = &quot;This is a simple string&quot;; 
var myString  = new String();
var newStr    = new String(&quot;String created with constructor&quot;);
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, &#x68C0;&#x67E5;&#x539F;&#x578B;&#x94FE;&#x4F1A;&#x627E;&#x5230; undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, &#x540C;&#x4E0A;

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false</code></pre>

<h3 name="Example:_Demonstrating_that_mycar_is_of_type_Car_and_type_Object" id="Example:_Demonstrating_that_mycar_is_of_type_Car_and_type_Object">&#x6F14;&#x793A;<code>mycar&#x5C5E;&#x4E8E;Car&#x7C7B;&#x578B;&#x7684;&#x540C;&#x65F6;&#x53C8;</code>&#x5C5E;&#x4E8E;<code>Object&#x7C7B;&#x578B;</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x7C7B;&#x578B;<code>Car</code>&#xFF0C;<code>&#x4EE5;&#x53CA;&#x8BE5;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;</code><code>mycar</code>. <code>instanceof</code>&#x8FD0;&#x7B97;&#x7B26;&#x8868;&#x660E;&#x4E86;&#x8FD9;&#x4E2A;<code>mycar&#x5BF9;&#x8C61;&#x65E2;&#x5C5E;&#x4E8E;</code><code>Car&#x7C7B;&#x578B;</code>&#xFF0C;<code>&#x53C8;&#x5C5E;&#x4E8E;</code><code>Object&#x7C7B;&#x578B;</code>&#x3002;</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car(&quot;Honda&quot;, &quot;Accord&quot;, 1998);
var a = mycar instanceof Car;    // &#x8FD4;&#x56DE; true
var b = mycar instanceof Object; // &#x8FD4;&#x56DE; true
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-relational-operators" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Relational Operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The instanceof operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.8.6" class="external">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The instanceof operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728; JavaScript 1.4 &#x4E2D;&#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div><p></p>

<div id="compat-desktop">
<table style="border-color: transparent;" class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">&#x7279;&#x5F81;</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>&#x57FA; &#x7840;&#x652F;&#x6301;</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">&#x7279;&#x5F81;
<table style="border-color: transparent;" class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">&#xA0;</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
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

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="/zh-CN/docs/JavaScript/Reference/Operators/typeof" href="/zh-CN/docs/JavaScript/Reference/Operators/typeof">typeof</a></li>
</ul>
                  
                
              