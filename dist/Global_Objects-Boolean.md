
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p>Boolean&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="brush: js">new Boolean(<em>[value]</em>)

// Boolean {[[PrimitiveValue]]: false}
// Boolean {[[PrimitiveValue]]: true}
// return a boolean object which value is (true/false).

// Falsy values in JavaScript are false, null, 0, &quot;&quot;, undefined, and NaN.


</pre>

<p><code><img src="https://mdn.mozillademos.org/files/14571/new%20Boolean(value).png" alt="Falsy values in JavaScript are false, null, 0, &quot;&quot;, undefined, and NaN."></code></p>

<p><code><img src="https://mdn.mozillademos.org/files/14573/new%20Boolean(value)%202.png" alt="Falsy values" style="height: 612px; width: 652px;"></code></p>

<h2 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>value</code></dt>
 <dd>&#xA0;&#x53EF;&#x9009;&#x7684;.&#xA0;<code>Boolean</code> &#x5BF9;&#x8C61;&#x7684;&#x521D;&#x59CB;&#x503C;.</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5982;&#x679C;Boolean&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;,&#x5219;&#x8BE5;&#x53C2;&#x6570;&#x4F1A;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;.&#x5982;&#x679C;&#x53C2;&#x6570;&#x662F; <code>0</code>, <code>-0</code>, &#xA0;<a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>,&#xA0;<code>false</code>, <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>, <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>, &#x6216;&#x8005;&#x7A7A;&#x5B57;&#x7B26;&#x4E32; (&quot;&quot;),&#x751F;&#x6210;&#x7684;Boolean&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x4E3A;false. &#x5176;&#x4ED6;&#x4EFB;&#x4F55;&#x503C;,&#x5305;&#x62EC;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x6216;&#x8005;&#x5B57;&#x7B26;&#x4E32;<code>&quot;false&quot;</code>, &#x90FD;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;true&#x7684;Boolean&#x5BF9;&#x8C61;.</p>

<p>&#x4E0D;&#x8981;&#x5C06;&#x539F;&#x59CB;&#x503C;true false,&#x548C;&#x503C;&#x4E3A;true false&#x7684;Boolean&#x5BF9;&#x8C61;&#x76F8;&#x6DF7;&#x6DC6;.</p>

<p>&#x4EFB;&#x4F55;&#x503C;&#x4E0D;&#x4E3A; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x6216;&#x8005; <a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>&#x7684;&#x5BF9;&#x8C61;, &#x5305;&#x62EC;&#x503C;&#x4E3A;false&#x7684;Boolean&#x5BF9;&#x8C61;, &#x5728;&#x6761;&#x4EF6;&#x8BED;&#x53E5;&#x4E2D;,&#x5176;&#x503C;&#x90FD;&#x5C06;&#x4F5C;&#x4E3A;true&#x6765;&#x5224;&#x65AD;.&#x4F8B;&#x5982;,&#x4E0B;&#x9762;&#x7684;<a title="&#x5F53;&#x6307;&#x5B9A;&#x6761;&#x4EF6;&#x4E3A; true &#x65F6;&#xFF0C;if &#x8BED;&#x53E5;&#xA0;&#x4F1A;&#x6267;&#x884C;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x6761;&#x4EF6;&#x4E3A; false&#xFF0C;&#x5219;&#x6267;&#x884C;&#x53E6;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else"><code>if</code></a>&#xA0;&#x8BED;&#x53E5;&#x4E2D;,if&#x5C31;&#x5C06;&#x5BF9;&#x8C61;x&#x770B;&#x4F5C;&#x662F;true:</p>

<pre class="brush: js">var x = new Boolean(false);
if (x) {
  // . . . &#x8FD9;&#x91CC;&#x7684;&#x4EE3;&#x7801;&#x4ECD;&#x4F1A;&#x88AB;&#x6267;&#x884C;
}
</pre>

<p>Boolean&#x539F;&#x59CB;&#x503C;&#x4E0D;&#x4F1A;&#x6709;&#x8FD9;&#x79CD;&#x8868;&#x73B0;.&#x4F8B;&#x5982;, &#x4E0B;&#x9762;&#x7684;&#x6761;&#x4EF6;&#x7ED3;&#x6784;&#x4E2D;,if&#x8BED;&#x53E5;&#x7684;&#x5185;&#x90E8;&#x4EE3;&#x7801;&#x4E0D;&#x4F1A;&#x88AB;&#x6267;&#x884C;:</p>

<pre class="brush: js">var x = false;
if (x) {
  // . . . &#x8FD9;&#x91CC;&#x7684;&#x4EE3;&#x7801;&#x4E0D;&#x4F1A;&#x88AB;&#x6267;&#x884C;
}
</pre>

<p>&#x4E0D;&#x8981;&#x901A;&#x8FC7;&#x65B0;&#x5EFA;<code>Boolean</code>&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x5C06;&#x4E00;&#x4E2A;&#x975E;&#x5E03;&#x5C14;&#x503C;&#x8F6C;&#x5316;&#x6210;&#x5E03;&#x5C14;&#x503C;. &#x76F4;&#x63A5;&#x4F7F;&#x7528;Boolean&#x51FD;&#x6570;&#x624D;&#x662F;&#x6B63;&#x786E;&#x7684;:</p>

<pre class="brush: js">var x = Boolean(expression);     // &#x8FD9;&#x6837;&#x7528;
var x = new Boolean(expression); // &#x800C;&#x4E0D;&#x8981;&#x8FD9;&#x6837;!
</pre>

<p>&#x5982;&#x8FC7;&#x4F60;&#x7528;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4F5C;&#x4E3A;Boolean&#x5BF9;&#x8C61;&#x7684;&#x521D;&#x59CB;&#x5316;&#x503C;,&#x5219;&#x5373;&#x4F7F;&#x8BE5;&#x5BF9;&#x8C61;&#x662F;&#x4E2A;&#x503C;&#x4E3A;false&#x7684;Boolean&#x5BF9;&#x8C61;,&#x751F;&#x6210;&#x7684;Boolean&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x4E5F;&#x662F;true.</p>

<pre class="brush: js">var myFalse = new Boolean(false);   // &#x521D;&#x59CB;&#x5316;&#x503C;&#x4E3A;false
var g = new Boolean(myFalse);       // &#x521D;&#x59CB;&#x5316;&#x503C;&#x4E3A;true
var myString = new String(&quot;Hello&quot;); // string &#x5BF9;&#x8C61;
var s = new Boolean(myString);      // &#x521D;&#x59CB;&#x5316;&#x503C;&#x4E3A;true
</pre>

<p>&#x4E0D;&#x8981;&#x5728;&#x8BE5;&#x4F7F;&#x7528;Boolean&#x539F;&#x59CB;&#x503C;&#x7684;&#x5730;&#x65B9;&#x4F7F;&#x7528;Boolean&#x5BF9;&#x8C61;.</p>

<h2 name="Properties" id="Properties">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><code>Boolean.length</code></dt>
 <dd>&#x957F;&#x5EA6;&#x5C5E;&#x6027;,&#x503C;&#x4E3A;1.</dd>
 <dt><a title="Boolean.prototype&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A; Boolean &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype"><code>Boolean.prototype</code></a></dt>
 <dd>&#x4EE3;&#x8868;Boolean&#x6784;&#x9020;&#x5668;&#x7684;&#x539F;&#x578B;.</dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<p><code>Boolean&#x6784;&#x9020;&#x51FD;&#x6570;&#x81EA;&#x8EAB;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x65B9;&#x6CD5;</code>, &#x4E0D;&#x8FC7;, &#x5B83;&#x4ECE;&#x81EA;&#x5DF1;&#x7684;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x4E86;&#x4E00;&#x4E9B;&#x65B9;&#x6CD5;:</p>

<h2 name="Boolean_instances" id="Boolean_instances"><code>Boolean</code> &#x5B9E;&#x4F8B;</h2>

<p>&#x6240;&#x6709;<code>Boolean</code>&#x5B9E;&#x4F8B;&#x90FD;&#x7EE7;&#x627F;&#x4E8E; &#xA0;<a title="Boolean.prototype&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A; Boolean &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype"><code>Boolean.prototype</code></a>. &#x5176;&#x4ED6;&#x6240;&#x6709;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E5F;&#x540C;&#x6837;,&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x63A7;&#x5236;&#x7740;&#x81EA;&#x5DF1;&#x7684;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x6240;&#x7EE7;&#x627F;&#x7684;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;.</p>

<h3 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h3>

<p></p>

<h3 id="&#x65B9;&#x6CD5;">&#x65B9;&#x6CD5;</h3>

<p></p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Creating_Boolean_objects_with_an_initial_value_of_false" id="Creating_Boolean_objects_with_an_initial_value_of_false">&#x521B;&#x5EFA;1&#x4E2A;<code>Boolean&#x51FD;&#x6570;</code>,&#x521D;&#x59CB;&#x5316;&#x503C;&#x4E3A;false</h3>

<pre class="brush: js">var bNoParam = Boolean();
var bZero = Boolean(0);
var bNull = Boolean(null);
var bEmptyString = Boolean(&quot;&quot;);
var bUndefined = Boolean(undefined);
var bfalse = Boolean(false);
</pre>

<p>&#xA0;</p>

<h3 name="Creating_Boolean_objects_with_an_initial_value_of_false" id="Creating_Boolean_objects_with_an_initial_value_of_false">&#x521B;&#x5EFA;1&#x4E2A;<code>Boolean&#x51FD;&#x6570;</code>,&#x521D;&#x59CB;&#x5316;&#x503C;&#x4E3A;true</h3>

<pre class="brush: js">var btrue = Boolean(true);
var btrueString = Boolean(&quot;true&quot;);
var bfalseString = Boolean(&quot;false&quot;);
var bSuLin = Boolean(&quot;Su Lin&quot;);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Boolean</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-boolean-objects" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Boolean</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-boolean-objects" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Boolean</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>6.0</td>
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

<p>&#xA0;</p>

<ul>
 <li><a title="Boolean.prototype&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A; Boolean &#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x539F;&#x578B;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype"><code>Boolean.prototype</code></a></li>
 <li><a title="Boolean: In computer science, a boolean is a logical data type that can have only the values true or false.&#xA0;A boolean is how a programming language lets you represent true and false. Without the ability to represent the boolean values&#xA0;a number of things in a language would no longer work. For example, in JavaScript, an if statement&apos;s&#xA0;conditional has to resolve to a boolean value for it to execute at all. &#xA0;In a JavaScript for loop&#xA0;without it&apos;s boolean conditional the loop would never know whether to run it&apos;s coding or not." href="/en-US/docs/Glossary/Boolean" class="glossaryLink">Boolean</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Boolean_data_type" class="external">Boolean data type (Wikipedia)</a></li>
</ul>

<p>&#xA0;</p>

<p>&#xA0;</p>
                  
                
              