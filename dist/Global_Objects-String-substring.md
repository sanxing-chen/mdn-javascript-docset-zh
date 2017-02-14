
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>substring()</strong></code> &#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x4E2A;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#xFF08;&#x6216;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#xFF09;&#x7684;&#x5B50;&#x4E32;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.substring(<var>indexStart</var>[, <var>indexEnd</var>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>indexStart</code></dt>
 <dd>&#x4E00;&#x4E2A; 0 &#x5230;&#x5B57;&#x7B26;&#x4E32;&#x957F;&#x5EA6;&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x3002;</dd>
 <dt><code>indexEnd</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x4E00;&#x4E2A; 0 &#x5230;&#x5B57;&#x7B26;&#x4E32;&#x957F;&#x5EA6;&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>substring</code> &#x63D0;&#x53D6;&#x4ECE;&#xA0;<code>indexStart</code>&#xA0;&#x5230; <code>indexEnd</code>&#xFF08;&#x4E0D;&#x5305;&#x62EC;&#xFF09;&#x4E4B;&#x95F4;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x7279;&#x522B;&#x5730;&#xFF1A;</p>

<ul>
 <li>&#x5982;&#x679C; <code>indexStart</code>&#xA0;&#x7B49;&#x4E8E; <code>indexEnd</code>&#xFF0C;<code>substring</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x7701;&#x7565;&#xA0;<code>indexEnd</code>&#xFF0C;<code>substring</code> &#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E00;&#x76F4;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x4EFB;&#x4E00;&#x53C2;&#x6570;&#x5C0F;&#x4E8E; 0 &#x6216;&#x4E3A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;"><code>NaN</code></a>&#xFF0C;&#x5219;&#x88AB;&#x5F53;&#x4F5C; 0&#x3002;</li>
 <li>&#x5982;&#x679C;&#x4EFB;&#x4E00;&#x53C2;&#x6570;&#x5927;&#x4E8E;&#xA0;<code>stringName.length</code>&#xFF0C;&#x5219;&#x88AB;&#x5F53;&#x4F5C;&#xA0;<code>stringName.length</code>&#x3002;</li>
</ul>

<p>&#x5982;&#x679C; <code>indexStart</code>&#xA0;&#x5927;&#x4E8E; <code>indexEnd</code>&#xFF0C;&#x5219; <code>substring</code> &#x7684;&#x6267;&#x884C;&#x6548;&#x679C;&#x5C31;&#x50CF;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x8C03;&#x6362;&#x4E86;&#x4E00;&#x6837;&#x3002;&#x4F8B;&#x5982;&#xFF0C;<code><em>str</em>.substring(1, 0) == <em>str</em>.substring(0, 1)</code>&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_substring" id="Example:_Using_substring">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>substring</code></h3>

<p>&#x4E0B;&#x4F8B;&#x4F7F;&#x7528;&#xA0;<code>substring</code>&#xA0;&#x8F93;&#x51FA;&#x5B57;&#x7B26;&#x4E32; &quot;<code>Mozilla</code>&quot; &#x4E2D;&#x7684;&#x5B57;&#x7B26;&#xFF1A;</p>

<pre class="brush:js">var anyString = &quot;Mozilla&quot;;

// &#x8F93;&#x51FA; &quot;Moz&quot;
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// &#x8F93;&#x51FA; &quot;lla&quot;
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// &#x8F93;&#x51FA; &quot;&quot;
console.log(anyString.substring(4,4));

// &#x8F93;&#x51FA; &quot;Mozill&quot;
console.log(anyString.substring(0,6));

// &#x8F93;&#x51FA; &quot;Mozilla&quot;
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
</pre>

<p>console.log(anyString.substring(-2,7));<br>
 console.log(anyString.substring(NaN,7));<br>
 console.log(anyString.substring(0,10));</p>

<p>&#xA0;</p>

<h3 name="Example:_Replacing_a_substring_within_a_string" id="Example:_Replacing_a_substring_within_a_string">&#x4F8B;&#x5B50;&#xFF1A;&#x66FF;&#x6362;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x4E0B;&#x4F8B;&#x66FF;&#x6362;&#x4E86;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x53EF;&#x4EE5;&#x66FF;&#x6362;&#x5355;&#x4E2A;&#x5B57;&#x7B26;&#x548C;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8BE5;&#x4F8B;&#x7ED3;&#x5C3E;&#x8C03;&#x7528;&#x7684;&#x51FD;&#x6570;&#x5C06; &quot;<code>Brave New World</code>&quot; &#x53D8;&#x6210;&#x4E86; &quot;<code>Brave New Web</code>&quot;&#x3002;</p>

<pre class="brush:js">function replaceString(oldS, newS, fullS) {
// Replaces oldS with newS in the string fullS
  for (var i = 0; i &lt; fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
     fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString(&quot;World&quot;, &quot;Web&quot;, &quot;Brave New World&quot;);</pre>

<p>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x5982;&#x679C;&#xA0;<code>oldS</code> &#x662F; <code>newS</code>&#xA0;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x4F1A;&#x5BFC;&#x81F4;&#x6B7B;&#x5FAA;&#x73AF;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5C1D;&#x8BD5;&#x628A; &quot;World&quot; &#x66FF;&#x6362;&#x6210; &quot;OtherWorld&quot;&#x3002;&#x4E00;&#x4E2A;&#x66F4;&#x597D;&#x7684;&#x65B9;&#x6CD5;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush:js">function replaceString(oldS, newS,fullS){
  return fullS.split(oldS).join(newS);
}</pre>

<p><span style="line-height: 1.5;">&#x4E0A;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x53EA;&#x662F;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x64CD;&#x4F5C;&#x7684;&#x4E00;&#x4E2A;&#x4F8B;&#x5B50;&#x3002;&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x66FF;&#x6362;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x66F4;&#x591A;&#x65F6;&#x5019;&#x4F1A;&#x7528;&#x5230;&#xA0;</span><span style="line-height: 1.5em;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>String.prototype.replace()</code></a>&#x3002;</span></p>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.15" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.substring</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.substring" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.substring</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr" title="substr() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5230;&#x6307;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>String.prototype.substr()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice" title="slice()&#xA0;&#x65B9;&#x6CD5;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>String.prototype.slice()</code></a></li>
</ul>
                  
                
              