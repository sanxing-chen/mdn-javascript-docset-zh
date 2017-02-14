
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>join()</strong></code> &#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#xFF08;&#x6216;&#x4E00;&#x4E2A;<a href="/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects" class="new">&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;</a>&#xFF09;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x5230;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x3002;</p>

<div class="note">
<p>PS: <code><strong>join()</strong></code> &#x65B9;&#x6CD5;&#xFF0C;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#xFF01;</p>
</div>

<pre class="brush: js">let a = [&apos;Wind&apos;, &apos;Rain&apos;, &apos;Fire&apos;];

a.join(); 
// &#x9ED8;&#x8BA4;&#x4E3A; &quot;,&quot;
// &apos;Wind,Rain,Fire&apos;

a.join(&quot;&quot;);&#xA0;
// &#x5206;&#x9694;&#x7B26; === &#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xA0;&quot;&quot;
// &quot;WindRainFire&quot;

a.join(&quot;-&quot;); 
// &#x5206;&#x9694;&#x7B26; &quot;-&quot;
// &apos;Wind-Rain-Fire&apos;

console.log(a);
// [&apos;Wind&apos;, &apos;Rain&apos;, &apos;Fire&apos;]
</pre>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var> = <var>arr</var>.join()
// </code>&#x9ED8;&#x8BA4;&#x4E3A; &quot;,&quot;

<code><var>str</var> = <var>arr</var>.join(&quot;&quot;)
// </code>&#x5206;&#x9694;&#x7B26; === &#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#xA0;&quot;&quot;

<code><var>str</var> = <var>arr</var>.join(<var>separator</var>)</code>
// &#x5206;&#x9694;&#x7B26;

</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>separator</code></dt>
 <dd>&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6765;&#x5206;&#x9694;&#x6570;&#x7EC4;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;</dd>
 <dd>&#x5982;&#x679C;&#x9700;&#x8981;(separator)&#xFF0C;&#x5C06;&#x5206;&#x9694;&#x7B26;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dd>&#x5982;&#x679C;&#x7701;&#x7565;()&#xFF0C;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x7528;&#x9017;&#x53F7;&#x5206;&#x9694;&#x3002;&#x9ED8;&#x8BA4;&#x4E3A; &quot;,&quot;&#x3002;</dd>
 <dd>&#x5982;&#x679C;separator&#x662F;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;(&quot;&quot;)&#xFF0C;&#x5219;&#x6240;&#x6709;&#x5143;&#x7D20;&#x4E4B;&#x95F4;&#x90FD;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x5B57;&#x7B26;&#x3002;</dd>
 <dd>
 <h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

 <p>&#x4E00;&#x4E2A;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C; <strong>arr.length </strong>&#x4E3A;0&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;</p>
 </dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x6240;&#x6709;&#x7684;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x518D;&#x7528;&#x4E00;&#x4E2A;&#x5206;&#x9694;&#x7B26;&#x5C06;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x8D77;&#x6765;&#x3002;&#x5982;&#x679C;&#x5143;&#x7D20;&#x662F;undefined &#x6216;&#x8005;null&#xFF0C; &#x5219;&#x4F1A;&#x8F6C;&#x5316;&#x6210;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Joining_an_array_three_different_ways" id="Example:_Joining_an_array_three_different_ways">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528;&#x56DB;&#x79CD;&#x4E0D;&#x540C;&#x7684;&#x5206;&#x9694;&#x7B26;&#x8FDE;&#x63A5;&#x6570;&#x7EC4;&#x5143;&#x7D20;</h3>

<p>&#x4E0B;&#x4F8B;&#x9996;&#x5148;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x6570;&#x7EC4; <code>a</code>&#xFF0C;&#x5305;&#x542B;&#x6709;&#x4E09;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x56DB;&#x79CD;&#x4E0D;&#x540C;&#x7684;&#x5206;&#x9694;&#x7B26;&#x8FDE;&#x63A5;&#x6240;&#x6709;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x3002;&#x9996;&#x5148;&#x662F;&#x9ED8;&#x8BA4;&#x7684;&#x5206;&#x9694;&#x7B26;&#x9017;&#x53F7;&#xFF0C;&#x7136;&#x540E;&#x662F;&#x4E00;&#x4E2A;&#x9017;&#x53F7;&#x52A0;&#x7A7A;&#x683C;&#xFF0C;&#x63A5;&#x4E0B;&#x6765;&#x662F;&#x4E00;&#x4E2A;&#x52A0;&#x53F7;&#x524D;&#x540E;&#x52A0;&#x7A7A;&#x683C;&#xFF0C;&#x6700;&#x540E;&#x662F;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">var a = [&apos;Wind&apos;, &apos;Rain&apos;, &apos;Fire&apos;];
var myVar1 = a.join();      // myVar1&#x7684;&#x503C;&#x53D8;&#x4E3A;&quot;Wind,Rain,Fire&quot;
var myVar2 = a.join(&apos;, &apos;);  // myVar2&#x7684;&#x503C;&#x53D8;&#x4E3A;&quot;Wind, Rain, Fire&quot;
var myVar3 = a.join(&apos; + &apos;); // myVar3&#x7684;&#x503C;&#x53D8;&#x4E3A;&quot;Wind + Rain + Fire&quot;
var myVar4 = a.join(&apos;&apos;);    // myVar4&#x7684;&#x503C;&#x53D8;&#x4E3A;&quot;WindRainFire&quot;
</pre>

<h2 name="Specifications" id="Specifications">&#x89C4;&#x8303;</h2>

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
   <td>Initial definition. Implemented in JavaScript 1.1.</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.5" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Array.prototype.join</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.join" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.join</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-array.prototype.join" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.join</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td>1.0</td>
   <td>1.0 (1.7 or earlier)</td>
   <td>5.5</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" title="split&#xFF08;&#xFF09;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4ECE;&#x800C;&#x5C06;&#x4E00;&#x4E2A;String&#x5BF9;&#x8C61;&#x62C6;&#x5206;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;"><code>String.prototype.split()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="toString() &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8868;&#x793A;&#x6307;&#x5B9A;&#x7684;&#x6570;&#x7EC4;&#x53CA;&#x5176;&#x5143;&#x7D20;&#x3002;"><code>Array.prototype.toString()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join" title="join()&#x65B9;&#x6CD5;&#x5C06;&#x6570;&#x7EC4;&#x4E2D;&#x6240;&#x6709;&#x5143;&#x7D20;&#x8FDE;&#x63A5;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x7B97;&#x6CD5;&#x548C;Array.prototype.join()&#x76F8;&#x540C;&#x3002; TypedArray &#x662F;&#x8FD9;&#x91CC;&#x7684; &#x7C7B;&#x578B;&#x5316;&#x6570;&#x7EC4; &#x4E4B;&#x4E00;&#x3002;"><code>TypedArray.prototype.join()</code></a></li>
</ul>
                  
                
              