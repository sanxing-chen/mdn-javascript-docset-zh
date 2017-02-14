
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>indexOf()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x7684;&#x7B2C;&#x4E00;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x8C03;&#x7528; &#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a>&#xA0;&#x5BF9;&#x8C61;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5F00;&#x59CB;&#x5728;fromIndex&#x8FDB;&#x884C;&#x641C;&#x7D22;&#x3002;&#x5982;&#x679C;&#x672A;&#x627E;&#x5230;&#x8BE5;&#x503C;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.indexOf(<em>searchValue</em>[, <em>fromIndex</em>]</code>)</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>searchValue</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x88AB;&#x67E5;&#x627E;&#x7684;&#x503C;&#x3002;</dd>
 <dt><code>fromIndex&#xA0;</code><span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x8868;&#x793A;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x6574;&#x6570;&#x3002;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A; 0&#x3002;&#x5982;&#x679C;&#xA0;<code>fromIndex&#xA0;&lt;&#xA0;0</code>&#xA0;&#x5219;&#x67E5;&#x627E;&#x6574;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x5982;&#x540C;&#x4F20;&#x8FDB;&#x4E86; 0&#xFF09;&#x3002;&#x5982;&#x679C;&#xA0;<code>fromIndex&#xA0;&gt;= str.length</code>&#xFF0C;&#x5219;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE; -1&#xFF0C;&#x9664;&#x975E;&#x88AB;&#x67E5;&#x627E;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6B64;&#x65F6;&#x8FD4;&#x56DE; str.length&#x3002;</dd>
 <dt>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

 <p>&#x6307;&#x5B9A;&#x503C;&#x7684;&#x7B2C;&#x4E00;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x7D22;&#x5F15;; &#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230; -1&#x3002;</p>
 </dt>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x88AB;&#x4ECE;&#x5DE6;&#x5411;&#x53F3;&#x7D22;&#x5F15;&#x3002;&#x9996;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#xFF08;index&#xFF09;&#x4E3A; 0&#xFF0C;&#x5B57;&#x7B26;&#x4E32; <code>stringName</code> &#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#x662F;&#xA0;<code>stringName.length - 1</code>&#x3002;</p>

<pre class="brush: js">&quot;Blue Whale&quot;.indexOf(&quot;Blue&quot;);     // returns  0
&quot;Blue Whale&quot;.indexOf(&quot;Blute&quot;);    // returns -1
&quot;Blue Whale&quot;.indexOf(&quot;Whale&quot;, 0); // returns  5
&quot;Blue Whale&quot;.indexOf(&quot;Whale&quot;, 5); // returns  5
&quot;Blue Whale&quot;.indexOf(&quot;&quot;, 9);      // returns  9
&quot;Blue Whale&quot;.indexOf(&quot;&quot;, 10);     // returns 10
&quot;Blue Whale&quot;.indexOf(&quot;&quot;, 11);     // returns 10</pre>

<h3 name="Example:_indexOf_and_case-sensitivity" id="Example:_indexOf_and_case-sensitivity">&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;</h3>

<p><code>indexOf</code> &#x65B9;&#x6CD5;&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x8FD4;&#x56DE; -1&#xFF1A;</p>

<pre class="brush: js">&quot;Blue Whale&quot;.indexOf(&quot;blue&quot;) // returns -1
</pre>

<h3 id="&#x68C0;&#x6D4B;&#x662F;&#x5426;&#x5B58;&#x5728;&#x67D0;&#x5B57;&#x7B26;&#x4E32;">&#x68C0;&#x6D4B;&#x662F;&#x5426;&#x5B58;&#x5728;&#x67D0;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x5F53;&#x68C0;&#x6D4B;&#x67D0;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x53E6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x65F6;&#xFF0C;&#x53EF;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684;&#x65B9;&#x6CD5;&#xFF1A;</p>

<pre class="brush: js">&quot;Blue Whale&quot;.indexOf(&quot;Blue&quot;) !== -1; // true
&quot;Blue Whale&quot;.indexOf(&quot;Bloe&quot;) !== -1; // false</pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_indexOf_and_lastIndexOf" id="Example:_Using_indexOf_and_lastIndexOf">&#x4F7F;&#x7528;<code>indexOf()</code>&#xA0;&#x548C; <code>lastIndexOf()</code></h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>indexOf()</code> &#x548C; <code>lastIndexOf()</code>&#xA0;&#x65B9;&#x6CD5;&#x5B9A;&#x4F4D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D; &quot;<code>Brave new world</code>&quot; &#x7684;&#x503C;&#x3002;</p>

<pre class="brush: js">var anyString = &quot;Brave new world&quot;;

console.log(&quot;The index of the first w from the beginning is &quot; + anyString.indexOf(&quot;w&quot;));
// logs 8
console.log(&quot;The index of the first w from the end is &quot; + anyString.lastIndexOf(&quot;w&quot;)); 
// logs 10

console.log(&quot;The index of &apos;new&apos; from the beginning is &quot; + anyString.indexOf(&quot;new&quot;));   
// logs 6
console.log(&quot;The index of &apos;new&apos; from the end is &quot; + anyString.lastIndexOf(&quot;new&quot;));
// logs 6
</pre>

<h3 name="Example:_indexOf_and_case-sensitivity" id="Example:_indexOf_and_case-sensitivity"><code>indexOf</code> &#x548C;&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;</h3>

<p>&#x4E0B;&#x4F8B;&#x5B9A;&#x4E49;&#x4E86;&#x4E24;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x53D8;&#x91CF;&#x3002;&#x4E24;&#x4E2A;&#x53D8;&#x91CF;&#x5305;&#x542B;&#x76F8;&#x540C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x9664;&#x4E86;&#x7B2C;&#x4E8C;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x67D0;&#x4E9B;&#x5B57;&#x7B26;&#x4E3A;&#x5927;&#x5199;&#x3002;&#x7B2C;&#x4E00;&#x4E2A;&#xA0;<code>log</code> &#x65B9;&#x6CD5;&#x8F93;&#x51FA; 19&#x3002;&#x4F46;&#x662F;&#x7531;&#x4E8E;&#xA0;<code>indexOf</code> &#x65B9;&#x6CD5;&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;&#xFF0C;&#x56E0;&#x6B64;&#x4E0D;&#x4F1A;&#x5728;&#xA0;<code>myCapString</code>&#xA0;&#x4E2D;&#x53D1;&#x73B0;&#x5B57;&#x7B26;&#x4E32;<code>&#xA0;&#x201C;cheddar&quot;</code>&#xFF0C;&#x7ED3;&#x679C;&#x7B2C;&#x4E8C;&#x4E2A; <code>log</code> &#x65B9;&#x6CD5;&#x8F93;&#x51FA; -1&#x3002;</p>

<pre class="brush: js">var myString    = &quot;brie, pepper jack, cheddar&quot;;
var myCapString = &quot;Brie, Pepper Jack, Cheddar&quot;;

console.log(&apos;myString.indexOf(&quot;cheddar&quot;) is &apos; + myString.indexOf(&quot;cheddar&quot;));    
// logs 19
console.log(&apos;myCapString.indexOf(&quot;cheddar&quot;) is &apos; + myCapString.indexOf(&quot;cheddar&quot;)); 
// logs -1</pre>

<h3 name="Example:_Using_indexOf_to_count_occurrences_of_a_letter_in_a_string" id="Example:_Using_indexOf_to_count_occurrences_of_a_letter_in_a_string">&#x4F7F;&#x7528;&#xA0;<code>indexOf</code>&#xA0;&#x7EDF;&#x8BA1;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E2A;&#x5B57;&#x6BCD;&#x51FA;&#x73B0;&#x7684;&#x6B21;&#x6570;</h3>

<p>&#x5728;&#x4E0B;&#x4F8B;&#x4E2D;&#xFF0C;&#x8BBE;&#x7F6E;&#x4E86; <code>count</code> &#x6765;&#x8BB0;&#x5F55;&#x5B57;&#x6BCD; <font face="Consolas, Liberation Mono, Courier, monospace">e</font>&#xA0;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#xA0;<code>str</code>&#xA0;&#x4E2D;&#x51FA;&#x73B0;&#x7684;&#x6B21;&#x6570;&#xFF1A;</p>

<pre class="brush: js">var str = &apos;To be, or not to be, that is the question.&apos;;
var count = 0;
var pos = str.indexOf(&apos;e&apos;);

while (pos !== -1) {
  count++;
  pos = str.indexOf(&apos;e&apos;, pos + 1);
}

console.log(count); // displays 4
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.7" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.indexOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.indexof" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.indexOf</small></a></td>
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
 <li><a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></li>
 <li><a title="lastIndexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6700;&#x540E;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;&#xA0;-1&#x3002;&#x4ECE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"><code>String.prototype.lastIndexOf()</code></a></li>
 <li><a title="split&#xFF08;&#xFF09;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4ECE;&#x800C;&#x5C06;&#x4E00;&#x4E2A;String&#x5BF9;&#x8C61;&#x62C6;&#x5206;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split"><code>String.prototype.split()</code></a></li>
 <li><a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>Array.prototype.indexOf()</code></a></li>
</ul>
                  
                
              