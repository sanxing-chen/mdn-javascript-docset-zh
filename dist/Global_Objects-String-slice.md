
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p>&#xA0;<strong><code>slice()</code></strong>&#xA0;&#x65B9;&#x6CD5;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre style="font-size: 14px; white-space: normal;" class="syntaxbox"><code><var>str</var>.slice(<var>beginSlice</var>[,&#xA0;<var>endSlice</var>])</code></pre>

<h3 style="font-size: 1.71428571428571rem;" name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>beginSlice</code></dt>
 <dd>&#x4ECE;&#x8BE5;&#x7D22;&#x5F15;&#xFF08;&#x4EE5; 0 &#x4E3A;&#x57FA;&#x6570;&#xFF09;&#x5904;&#x5F00;&#x59CB;&#x63D0;&#x53D6;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x3002;&#x5982;&#x679C;&#x503C;&#x4E3A;&#x8D1F;&#x6570;&#xFF0C;&#x4F1A;&#x88AB;&#x5F53;&#x505A;&#xA0;<code>sourceLength + beginSlice</code>&#xA0;&#x770B;&#x5F85;&#xFF0C;&#x8FD9;&#x91CC;&#x7684;<code>sourceLength &#x662F;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;</code>&#xA0;(&#x4F8B;&#x5982;&#xFF0C;&#xA0;&#x5982;&#x679C;<code>beginSlice</code>&#xA0;&#x662F;&#xA0;-3 &#x5219;&#x770B;&#x4F5C;&#x662F;:&#xA0;<code>sourceLength - 3</code>)</dd>
 <dt><code>endSlice</code></dt>
 <dd>&#x53EF;&#x9009;&#x3002;&#x5728;&#x8BE5;&#x7D22;&#x5F15;&#xFF08;&#x4EE5; 0 &#x4E3A;&#x57FA;&#x6570;&#xFF09;&#x5904;&#x7ED3;&#x675F;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C;&#x7701;&#x7565;&#x8BE5;&#x53C2;&#x6570;&#xFF0C;<code style="font-style: normal;">slice</code>&#x4F1A;&#x4E00;&#x76F4;&#x63D0;&#x53D6;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#x3002;<span style="line-height: 1.5;">&#x5982;&#x679C;&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#x8D1F;&#x6570;&#xFF0C;&#x5219;&#x88AB;&#x770B;&#x4F5C;&#x662F; sourceLength + endSlice&#xFF0C;&#x8FD9;&#x91CC;&#x7684; sourceLength &#x5C31;&#x662F;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;(&#x4F8B;&#x5982;&#xFF0C;&#x5982;&#x679C; endSlice &#x662F; -3&#xFF0C;&#x5219;&#x662F;, sourceLength - 3)&#x3002;</span></dd>
</dl>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>slice()</code>&#xA0;&#x4ECE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x5E76;&#x8FD4;&#x56DE;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5728;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6539;&#x53D8;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x53E6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;<code>slice</code>&#xA0;&#x4E0D;&#x4FEE;&#x6539;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x53EA;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x4E86;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x90E8;&#x5206;&#x5B57;&#x7B26;&#x7684;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<p><code><strong>&#x6CE8;&#x610F;</strong>&#xFF1A;slice()</code>&#xA0;&#x63D0;&#x53D6;&#x7684;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x62EC;<code>beginSlice</code>&#x4F46;<strong>&#x4E0D;&#x5305;&#x62EC;&#xA0;</strong><code><strong>endSlice</strong>&#x3002;</code></p>

<p><code>&#x4F8B;1&#xFF1A;str.slice(1, 4)</code>&#xA0;&#x63D0;&#x53D6;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x4ECE;&#x7B2C;&#x4E8C;&#x4E2A;&#x5B57;&#x7B26;&#x5230;&#x7B2C;&#x56DB;&#x4E2A;&#xA0;(&#x5B57;&#x7B26;&#x7D22;&#x5F15;&#x503C;&#x4E3A;&#xA0;1, 2, &#x548C;&#xA0;3)&#x3002;</p>

<p>&#x4F8B;2&#xFF1A;<code>str.slice(2, -1)</code>&#xA0;&#x63D0;&#x53D6;&#x7B2C;&#x4E09;&#x4E2A;&#x5B57;&#x7B26;&#x5230;&#x5012;&#x6570;&#x7B2C;&#x4E8C;&#x4E2A;&#x5B57;&#x7B26;&#x3002;</p>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 style="font-size: 1.71428571428571rem;" name="Example:_Using_slice_to_create_a_new_string" id="Example:_Using_slice_to_create_a_new_string">&#x4F7F;&#x7528;&#xA0;<code>slice()</code>&#xA0;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x4E0B;&#x9762;&#x4F8B;&#x5B50;&#x4F7F;&#x7528;&#xA0;<code>slice()</code>&#xA0;&#x6765;&#x521B;&#x5EFA;&#x65B0;&#x5B57;&#x7B26;&#x4E32;:</p>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;" class="brush: js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; white-space: pre;" class="language-js"><span style="color: #0077aa;" class="keyword token">var</span> str1 <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> <span style="color: #669900;" class="string token">&apos;The morning is upon us.&apos;</span><span style="color: #999999;" class="punctuation token">;</span>
<span style="color: #0077aa;" class="keyword token">var</span> str2 <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> str1<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">slice<span style="color: #999999;" class="punctuation token">(</span></span><span style="color: #990055;" class="number token">4</span><span style="color: #999999;" class="punctuation token">,</span> <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">-</span><span style="color: #990055;" class="number token">2</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span>

console<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">log<span style="color: #999999;" class="punctuation token">(</span></span>str2<span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span><span style="color: #708090;" class="comment token"> // OUTPUT: morning is upon u</span></code></pre>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">&#xA0;</div>

<h3 style="font-size: 1.71428571428571rem;" name="Example:_Using_slice_with_negative_indexes" id="Example:_Using_slice_with_negative_indexes">&#x7ED9;&#xA0;<code>slice()</code>&#xA0;<code>&#x4F20;&#x5165;&#x8D1F;&#x503C;&#x7D22;&#x5F15;</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5728;&#xA0;<code>slice()</code>&#xA0;&#x4F7F;&#x7528;&#x4E86;&#x8D1F;&#x503C;&#x7D22;&#x5F15;:</p>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;" class="brush: js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; white-space: pre;" class="language-js"><span style="color: #0077aa;" class="keyword token">var</span> str <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">=</span> <span style="color: #669900;" class="string token">&apos;The morning is upon us.&apos;</span><span style="color: #999999;" class="punctuation token">;</span>
str<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">slice<span style="color: #999999;" class="punctuation token">(</span></span><span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">-</span><span style="color: #990055;" class="number token">3</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span>    <span style="color: #708090;" class="comment token"> // returns &apos;us.&apos;
</span>str<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">slice<span style="color: #999999;" class="punctuation token">(</span></span><span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">-</span><span style="color: #990055;" class="number token">3</span><span style="color: #999999;" class="punctuation token">,</span> <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">-</span><span style="color: #990055;" class="number token">1</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span><span style="color: #708090;" class="comment token"> // returns &apos;us&apos;
</span>str<span style="color: #999999;" class="punctuation token">.</span><span style="color: #dd4a68;" class="function token">slice<span style="color: #999999;" class="punctuation token">(</span></span><span style="color: #990055;" class="number token">0</span><span style="color: #999999;" class="punctuation token">,</span> <span style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;" class="operator token">-</span><span style="color: #990055;" class="number token">1</span><span style="color: #999999;" class="punctuation token">)</span><span style="color: #999999;" class="punctuation token">;</span> <span style="color: #708090;" class="comment token"> // returns &apos;The morning is upon us&apos;</span></code></pre>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">&#xA0;</div>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">&#xA0;</div>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

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
   <td>Initial definition. Implemented in JavaScript 1.2.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.13" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.slice</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.slice" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.slice</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#xA0;</h2>

<div><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div></div>

<div id="compat-desktop">
<table style="border-color: transparent;" class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
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
<table style="border-color: transparent;" class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 style="margin-bottom: 20px; font-size: 2.14285714285714rem;" name="See_also" id="See_also">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a title="substr() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5230;&#x6307;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr"><code>String.prototype.substr()</code></a></li>
 <li><a title="substring() &#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x4E2A;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#xFF08;&#x6216;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#xFF09;&#x7684;&#x5B50;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>String.prototype.substring()</code></a></li>
 <li><a title="slice() &#x65B9;&#x6CD5;&#x4F1A;&#x6D45;&#x590D;&#x5236;&#xFF08;shallow copy&#xFF09;&#x6570;&#x7EC4;&#x7684;&#x4E00;&#x90E8;&#x5206;&#x5230;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"><code>Array.prototype.slice()</code></a></li>
</ul>

<p>&#xA0;</p>
&lt;link href=&quot;chrome-extension://bicdefpoleoohkhgcbbhambpghigfeid/build/index.css&quot; rel=&quot;stylesheet&quot;&gt;
                  
                
              