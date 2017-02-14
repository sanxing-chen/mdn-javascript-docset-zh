
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p><strong><code>repeat()</code></strong>&#xA0;&#x6784;&#x9020;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x88AB;&#x8FDE;&#x63A5;&#x5728;&#x4E00;&#x8D77;&#x7684;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x526F;&#x672C;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>/** 
 * str: String
 * count: Number
 */

let resultString = str</var>.repeat(<var>count</var>);</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>count</code></dt>
 <dd>&#x4ECB;&#x4E8E;0&#x548C;&#x6B63;&#x65E0;&#x7A77;&#x5927;&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570; : [0, +&#x221E;) &#x3002;&#x8868;&#x793A;&#x5728;&#x65B0;&#x6784;&#x9020;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x91CD;&#x590D;&#x4E86;&#x591A;&#x5C11;&#x904D;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#xA0;&#x5305;&#x542B;&#x6307;&#x5B9A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x526F;&#x672C;&#x7684;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Errors/Negative_repetition_count" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RangeError</code></a>: &#x91CD;&#x590D;&#x6B21;&#x6570;&#x4E0D;&#x80FD;&#x4E3A;&#x8D1F;&#x6570;&#x3002;</li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RangeError</code></a>:&#xA0;&#x91CD;&#x590D;&#x6B21;&#x6570;&#x5FC5;&#x987B;&#x5C0F;&#x4E8E;&#xA0;infinity&#xFF0C;&#x4E14;&#x957F;&#x5EA6;&#x4E0D;&#x4F1A;&#x5927;&#x4E8E;&#x6700;&#x957F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</li>
</ul>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush:js"><span class="difflineplus">&quot;abc&quot;.repeat(-1)     // </span>RangeError: repeat count must be positive and less than inifinity
<span class="difflineplus">&quot;abc&quot;.repeat(0)      // &quot;&quot;</span>
<span class="difflineplus">&quot;abc&quot;.repeat(1)      // &quot;abc&quot;</span>
<span class="difflineplus">&quot;abc&quot;.repeat(2)      // &quot;</span>abcabc<span class="difflineplus">&quot;
</span>&quot;abc&quot;.repeat(3.5)<span class="difflineplus">    // &quot;abcabcabc&quot; &#x53C2;&#x6570;count&#x5C06;&#x4F1A;&#x88AB;&#x81EA;&#x52A8;&#x8F6C;&#x6362;&#x6210;&#x6574;&#x6570;.
</span><span class="difflineplus">&quot;abc&quot;.repeat(1/0)    //</span> RangeError: repeat count must be positive and less than inifinity

<span class="difflineplus">({toString : () =&gt; &quot;abc&quot;, repeat : String.prototype.repeat}</span><span class="difflineplus">).repeat(2)   
</span><span class="difflineplus">//&quot;</span>abcabc<span class="difflineplus">&quot;,repeat&#x662F;&#x4E00;&#x4E2A;&#x901A;&#x7528;&#x65B9;&#x6CD5;</span>,&#x4E5F;&#x5C31;&#x662F;&#x5B83;&#x7684;&#x8C03;&#x7528;&#x8005;&#x53EF;&#x4EE5;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;.</pre>

<h2 id="&#x586B;&#x5145;">&#x586B;&#x5145;</h2>

<p>&#x6B64;&#x65B9;&#x6CD5;&#x5DF2;&#x6DFB;&#x52A0;&#x5230;ECMAScript 2015&#x89C4;&#x8303;&#x4E2D;&#xFF0C;&#x5E76;&#x4E14;&#x53EF;&#x80FD;&#x5C1A;&#x672A;&#x5728;&#x6240;&#x6709;JavaScript&#x5B9E;&#x73B0;&#x4E2D;&#x53EF;&#x7528;&#x3002;&#x7136;&#x800C;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6BB5;&#x5BF9; String.prototype.repeat() &#x8FDB;&#x884C;&#x586B;&#x5145;&#xFF1A;</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="keyword token">if</span> <span class="punctuation token">(</span><span class="operator token">!</span>String<span class="punctuation token">.</span>prototype<span class="punctuation token">.</span>repeat<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  String<span class="punctuation token">.</span>prototype<span class="punctuation token">.</span>repeat <span class="operator token">=</span> <span class="keyword token">function</span><span class="punctuation token">(</span>count<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="string token">&apos;use strict&apos;</span><span class="punctuation token">;</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="keyword token">this</span> <span class="operator token">==</span> <span class="keyword token">null</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">TypeError</span><span class="punctuation token">(</span><span class="string token">&apos;can\&apos;t convert &apos;</span> <span class="operator token">+</span> <span class="keyword token">this</span> <span class="operator token">+</span> <span class="string token">&apos; to object&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">var</span> str <span class="operator token">=</span> <span class="string token">&apos;&apos;</span> <span class="operator token">+</span> <span class="keyword token">this</span><span class="punctuation token">;</span>
    count <span class="operator token">=</span> <span class="operator token">+</span>count<span class="punctuation token">;</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>count <span class="operator token">!</span><span class="operator token">=</span> count<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      count <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>count <span class="operator token">&lt;</span> <span class="number token">0</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">RangeError</span><span class="punctuation token">(</span><span class="string token">&apos;repeat count must be non-negative&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>count <span class="operator token">==</span> <span class="number token">Infinity</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">RangeError</span><span class="punctuation token">(</span><span class="string token">&apos;repeat count must be less than infinity&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    count <span class="operator token">=</span> Math<span class="punctuation token">.</span><span class="function token">floor<span class="punctuation token">(</span></span>count<span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="keyword token">if</span> <span class="punctuation token">(</span>str<span class="punctuation token">.</span>length <span class="operator token">==</span> <span class="number token">0</span> <span class="operator token">||</span> count <span class="operator token">==</span> <span class="number token">0</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">return</span> <span class="string token">&apos;&apos;</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
   <span class="comment token"> // &#x786E;&#x4FDD; count &#x662F;&#x4E00;&#x4E2A; 31 &#x4F4D;&#x7684;&#x6574;&#x6570;&#x3002;&#x8FD9;&#x6837;&#x6211;&#x4EEC;&#x5C31;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#x4F18;&#x5316;&#x7684;&#x7B97;&#x6CD5;&#x3002;
    // &#x5F53;&#x524D;&#xFF08;2014&#x5E74;8&#x6708;&#xFF09;&#xFF0C;&#x7EDD;&#x5927;&#x591A;&#x6570;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x4E0D;&#x80FD;&#x652F;&#x6301; 1 &lt;&lt; 28 &#x957F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6240;&#x4EE5;&#xFF1A;</span><span class="comment token">
</span>    <span class="keyword token">if</span> <span class="punctuation token">(</span>str<span class="punctuation token">.</span>length <span class="operator token">*</span> count <span class="operator token">&gt;=</span> <span class="number token">1</span> <span class="operator token">&lt;</span><span class="operator token">&lt;</span> <span class="number token">28</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">throw</span> <span class="keyword token">new</span> <span class="class-name token">RangeError</span><span class="punctuation token">(</span><span class="string token">&apos;repeat count must not overflow maximum string size&apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">var</span> rpt <span class="operator token">=</span> <span class="string token">&apos;&apos;</span><span class="punctuation token">;</span>
    <span class="keyword token">for</span> <span class="punctuation token">(</span><span class="punctuation token">;</span><span class="punctuation token">;</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="keyword token">if</span> <span class="punctuation token">(</span><span class="punctuation token">(</span>count <span class="operator token">&amp;</span> <span class="number token">1</span><span class="punctuation token">)</span> <span class="operator token">==</span> <span class="number token">1</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
        rpt <span class="operator token">+</span><span class="operator token">=</span> str<span class="punctuation token">;</span>
      <span class="punctuation token">}</span>
      count <span class="operator token">&gt;</span><span class="operator token">&gt;</span><span class="operator token">&gt;=</span> <span class="number token">1</span><span class="punctuation token">;</span>
      <span class="keyword token">if</span> <span class="punctuation token">(</span>count <span class="operator token">==</span> <span class="number token">0</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
        <span class="keyword token">break</span><span class="punctuation token">;</span>
      <span class="punctuation token">}</span>
      str <span class="operator token">+</span><span class="operator token">=</span> str<span class="punctuation token">;</span>
    <span class="punctuation token">}</span>
    <span class="keyword token">return</span> rpt<span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span></code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.repeat</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-string.prototype.repeat" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.repeat</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#xA0;</h2>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab">
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div></div>

<div>
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
   <td>41&#xA0;</td>
   <td><a href="/en-US/Firefox/Releases/24" title="Released on 2013-09-17.">24</a> (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>9</td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>36 (behind a flag)</td>
   <td>24.0 (24)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<p>&#xA0;</p>
</div>
                  
                
              