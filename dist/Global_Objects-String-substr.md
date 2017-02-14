
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>substr()</strong></code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5230;&#x6307;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.substr(<em>start</em>[, <em>length</em>])</code></pre>

<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>&#x5F00;&#x59CB;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x5982;&#x679C;&#x4E3A;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#x88AB;&#x770B;&#x4F5C;&#xA0;<code style="font-style: normal; line-height: 1.5;">strLength +&#xA0;</code><code style="font-style: normal; line-height: 1.5;">start&#xFF0C;&#x5176;&#x4E2D;</code><span style="line-height: 1.5;">&#xA0;</span><code style="font-style: normal; line-height: 1.5;">strLength</code><span style="line-height: 1.5;">&#xA0;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C;&#xA0;<code>start</code> &#x4E3A; <code>-3&#xFF0C;&#x5219;&#x88AB;&#x770B;&#x4F5C;</code>&#xA0;<code>strLength-3&#xFF09;&#x3002;</code></span></dd>
</dl>

<dl>
 <dt><code>length</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x63D0;&#x53D6;&#x7684;&#x5B57;&#x7B26;&#x6570;&#x3002;</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p><code>start</code> &#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x9996;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#x4E3A; 0&#xFF0C;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x7684;&#x7D22;&#x5F15;&#x4E3A; &#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#x51CF;&#x53BB;1&#x3002;<code>substr</code> &#x4ECE; <code>start</code>&#xA0;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#xFF0C;&#x63D0;&#x53D6; <code>length</code> &#x4E2A;&#x5B57;&#x7B26;&#xFF08;&#x6216;&#x76F4;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x672B;&#x5C3E;&#xFF09;&#x3002;</p>

<p>&#x5982;&#x679C; <code>start</code> &#x4E3A;&#x6B63;&#x503C;&#xFF0C;&#x4E14;&#x5927;&#x4E8E;&#x6216;&#x7B49;&#x4E8E;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#xA0;<code>substr</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<p>&#x5982;&#x679C;&#xA0;<code>start</code> &#x4E3A;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#xA0;<code>substr</code> &#x628A;&#x5B83;&#x4F5C;&#x4E3A;&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#x5F00;&#x59CB;&#x7684;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x7D22;&#x5F15;&#x3002;&#x5982;&#x679C;&#xA0;<code>start</code> &#x4E3A;&#x8D1F;&#x503C;&#x4E14;&#xA0;<code>abs(start)</code> &#x5927;&#x4E8E;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x5219;&#xA0;<code>substr</code> &#x4F7F;&#x7528; 0 &#x4F5C;&#x4E3A;&#x5F00;&#x59CB;&#x63D0;&#x53D6;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x6CE8;&#x610F;&#x8D1F;&#x7684;&#xA0;<code>start</code>&#xA0;&#x53C2;&#x6570;&#x4E0D;&#x88AB; Microsoft JScript &#x6240;&#x652F;&#x6301;&#x3002;</p>

<p>&#x5982;&#x679C;&#xA0;<code>length</code> &#x4E3A; 0 &#x6216;&#x8D1F;&#x503C;&#xFF0C;&#x5219;&#xA0;<code>substr</code> &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x7A7A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C;&#x5FFD;&#x7565; <code>length</code>&#xFF0C;&#x5219; <code>substr</code> &#x63D0;&#x53D6;&#x5B57;&#x7B26;&#xFF0C;&#x76F4;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Using_substr" name="Example:_Using_substr">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>substr</code></h3>

<pre class="brush: js">var str = &quot;abcdefghij&quot;;

console.log(&quot;(1,2): &quot;    + str.substr(1,2));   // (1,2): bc
console.log(&quot;(-3,2): &quot;   + str.substr(-3,2));  // (-3,2): hi
console.log(&quot;(-3): &quot;     + str.substr(-3));    // (-3): hij
console.log(&quot;(1): &quot;      + str.substr(1));     // (1): bcdefghij
console.log(&quot;(-20, 2): &quot; + str.substr(-20,2)); // (-20, 2): ab
console.log(&quot;(20, 2): &quot;  + str.substr(20,2));  // (20, 2):
</pre>

<h2 id="Description" name="Description">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;&#xFF08;Polyfill&#xFF09;</h2>

<p>Microsoft&apos;s JScript &#x4E0D;&#x652F;&#x6301;&#x8D1F;&#x7684; start &#x7D22;&#x5F15;&#x3002;&#x5982;&#x679C;&#x4F60;&#x60F3;&#x5145;&#x5206;&#x5229;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x529F;&#x80FD;&#xFF0C;&#x5219;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684;&#x517C;&#x5BB9;&#x6027;&#x4EE3;&#x7801;&#x4FEE;&#x590D;&#x6B64; bug&#xFF1A;</p>

<pre class="brush: js">// only run when the substr function is broken
if (&apos;ab&apos;.substr(-1) != &apos;b&apos;)
{
&#xA0;&#xA0;/**
&#xA0;&#xA0; *&#xA0;&#xA0;Get the substring of a string
&#xA0;&#xA0; *&#xA0;&#xA0;@param&#xA0;&#xA0;{integer}&#xA0;&#xA0;start&#xA0;&#xA0; where to start the substring
&#xA0;&#xA0; *&#xA0;&#xA0;@param&#xA0;&#xA0;{integer}&#xA0;&#xA0;length&#xA0; how many characters to return
&#xA0;&#xA0; *&#xA0;&#xA0;@return&#xA0;{string}
&#xA0;&#xA0; */
&#xA0;&#xA0;String.prototype.substr = function(substr) {
&#xA0;&#xA0;&#xA0;&#xA0;return function(start, length) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;// did we get a negative start, calculate how much it is
      // from the beginning of the string
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;if (start &lt; 0) start = this.length + start;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;// call the original function
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;return substr.call(this, start, length);
&#xA0;&#xA0;&#xA0;&#xA0;}
&#xA0;&#xA0;}(String.prototype.substr);
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition.</td>
   <td>Standard</td>
   <td>Defined in the (informative) Compatibility Annex B.<br>
    Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.3">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.substr</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (informative) Compatibility Annex B</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.substr">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.substr</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
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

<p><strong>Note</strong>: Up to version 3.6, Firefox had a bug which caused <code>substr</code> to return empty result when an explicit <code>undefined</code> value was passed in as the <code>length</code>.</p>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="slice()&#xA0;&#x65B9;&#x6CD5;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice"><code>String.prototype.slice()</code></a></li>
 <li><a title="substring() &#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x4E2A;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#xFF08;&#x6216;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#xFF09;&#x7684;&#x5B50;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>String.prototype.substring()</code></a></li>
</ul>
                  
                
              