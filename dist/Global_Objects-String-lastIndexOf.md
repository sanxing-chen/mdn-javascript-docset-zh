
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>lastIndexOf()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6700;&#x540E;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;&#xA0;-1&#x3002;&#x4ECE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; <code>fromIndex</code> &#x5904;&#x5F00;&#x59CB;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.lastIndexOf(<em>searchValue</em>[, <em>fromIndex</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>searchValue</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x88AB;&#x67E5;&#x627E;&#x7684;&#x503C;&#x3002;</dd>
 <dt><code>fromIndex</code></dt>
 <dd>&#x4ECE;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6B64;&#x4F4D;&#x7F6E;&#x5904;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#x3002;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x610F;&#x6574;&#x6570;&#x3002;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;&#xA0;<code>str.length</code>&#x3002;&#x5982;&#x679C;&#x4E3A;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#x88AB;&#x770B;&#x4F5C; 0&#x3002;&#x5982;&#x679C;&#xA0;<code>fromIndex &gt; str.length</code>&#xFF0C;&#x5219;&#xA0;<code>fromIndex</code>&#xA0;&#x88AB;&#x770B;&#x4F5C; <code>str.length</code>&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x88AB;&#x4ECE;&#x5DE6;&#x5411;&#x53F3;&#x7D22;&#x5F15;&#x3002;&#x9996;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#xFF08;index&#xFF09;&#x662F; 0&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#x662F;&#xA0;<code>stringName.length - 1</code>&#x3002;</p>

<pre class="brush: js">&quot;canal&quot;.lastIndexOf(&quot;a&quot;)   // returns 3
&quot;canal&quot;.lastIndexOf(&quot;a&quot;,2) // returns 1
&quot;canal&quot;.lastIndexOf(&quot;a&quot;,0) // returns -1
&quot;canal&quot;.lastIndexOf(&quot;x&quot;)   // returns -1
</pre>

<h3 name="Example:_indexOf_and_case-sensitivity" id="Example:_indexOf_and_case-sensitivity">&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;</h3>

<p><code>lastIndexOf</code> &#x65B9;&#x6CD5;&#x533A;&#x5206;&#x5927;&#x5C0F;&#x5199;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x8FD4;&#x56DE; -1&#xFF1A;</p>

<pre class="brush:js">&quot;Blue Whale, Killer Whale&quot;.lastIndexOf(&quot;blue&quot;); // returns -1</pre>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_indexOf_and_lastIndexOf" id="Example:_Using_indexOf_and_lastIndexOf">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>indexOf</code> &#x548C; <code>lastIndexOf</code></h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>indexOf</code>&#xA0;&#x548C;&#xA0;<code>lastIndexOf</code>&#xA0;&#x65B9;&#x6CD5;&#x6765;&#x5B9A;&#x4F4D;&#x5B57;&#x7B26;&#x4E32; &quot;<code>Brave new world</code>&quot; &#x4E2D;&#x7684;&#x503C;&#x3002;</p>

<pre class="brush:js">var anyString = &quot;Brave new world&quot;;

console.log(&quot;The index of the first w from the beginning is &quot; + anyString.indexOf(&quot;w&quot;));
// Displays 8
console.log(&quot;The index of the first w from the end is &quot; + anyString.lastIndexOf(&quot;w&quot;)); 
// Displays 10

console.log(&quot;The index of &apos;new&apos; from the beginning is &quot; + anyString.indexOf(&quot;new&quot;));   
// Displays 6
console.log(&quot;The index of &apos;new&apos; from the end is &quot; + anyString.lastIndexOf(&quot;new&quot;));
// Displays 6
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
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" title="ECMAScript 1st Edition (ECMA-262)" hreflang="en">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.8" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.lastIndexOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.lastindexof" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.lastIndexOf</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;"><code>String.prototype.charAt()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" title="indexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x9996;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x4ECE;&#xA0;fromIndex&#xA0;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;"><code>String.prototype.indexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" title="split()&#xA0;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x628A;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x5272;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x628A;&#x4E00;&#x4E2A;&#xA0;String &#x5BF9;&#x8C61;&#x5206;&#x5272;&#x6210;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;"><code>String.prototype.split()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.indexOf()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#xFF08;&#x4E5F;&#x5373;&#x6709;&#x6548;&#x7684; JavaScript &#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;&#x4ECE;&#x6570;&#x7EC4;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;"><code>Array.prototype.lastIndexOf()</code></a></li>
</ul>
                  
                
              