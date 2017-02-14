
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 id="Summary" name="Summary">&#x6982;&#x89C8;</h2>

<p><code>do...while</code> &#x8BED;&#x53E5;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;,&#x8BE5;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x76F4;&#x5230;condition &#x7684;&#x503C;&#x4E3A; false. condition &#x5728;&#x6267;&#x884C;statement&#x540E;&#x624D;&#x4F1A;&#x88AB;&#x8D4B;&#x503C;,statement&#x81F3;&#x5C11;&#x6267;&#x884C;&#x4E00;&#x6B21;.</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">do
   <em>statement</em>
while (<em>condition</em>);
</pre>

<dl>
 <dt><code>statement</code></dt>
 <dd>&#x81F3;&#x5C11;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x7684;<span style="line-height: 19.0909080505371px;">&#x8BED;&#x53E5;</span>,&#x4E14;&#x53EA;&#x8981;condition&#x503C;&#x4E3A;true&#x65F6;,&#x4F1A;&#x518D;&#x6B21;&#x6267;&#x884C;. &#x60F3;&#x6267;&#x884C;&#x591A;&#x884C;&#x8BED;&#x53E5;,&#x53EF;&#x4F7F;&#x7528;<span style="line-height: 19.0909080505371px;"><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/block" title="&#x8BED;&#x53E5;&#x5757; (&#x6216;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#xA0;&#x590D;&#x5408;&#x8BED;&#x53E5;) &#x7528;&#x6765;&#x7EC4;&#x7EC7;&#x96F6;&#x4E2A;&#x6216;&#x591A;&#x6761;&#x8BED;&#x53E5;. &#x7528;&#x4E00;&#x5BF9;&#x82B1;&#x62EC;&#x53F7;&#x754C;&#x5B9A;&#x8BED;&#x53E5;&#x5757;."><code>block</code></a></span>&#x8BED;&#x53E5;<span style="line-height: 19.0909080505371px;">(</span><code style="font-style: normal; line-height: 19.0909080505371px;">{ ... }</code><span style="line-height: 19.0909080505371px;">)&#xA0;</span>&#x5305;&#x88F9;&#x8FD9;&#x4E9B;&#x8BED;&#x53E5;&#xA0;.</dd>
</dl>

<dl>
 <dt><code>condition</code></dt>
 <dd>&#x5FAA;&#x73AF;&#x4E2D;&#x6BCF;&#x6B21;&#x90FD;&#x4F1A;&#x8BA1;&#x7B97;&#x7684;&#x8868;&#x8FBE;&#x5F0F;. &#x5982;&#x679C;&#x5176;&#x503C;&#x4E3A;true,statement&#x4F1A;&#x518D;&#x6B21;&#x6267;&#x884C;.&#x5F53;<span style="line-height: 19.0909080505371px;">&#x5176;&#x503C;&#x4E3A;</span>false,&#x5219;&#x8DF3;&#x5230;&#xA0;<code>do...while &#x4E4B;&#x540E;&#x7684;&#x8BED;&#x53E5;</code>.</dd>
</dl>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Using_do...while" name="Example:_Using_do...while">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528; <code>do...while</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;, <code>do...while</code>&#xA0;&#x5FAA;&#x73AF;&#x81F3;&#x5C11;&#x8FED;&#x4EE3;&#x4E00;&#x6B21;,&#x5E76;&#x4E14;&#x7EE7;&#x7EED;&#x8FED;&#x4EE3;&#x76F4;&#x5230; i &#x4E0D;&#x518D;&#x5C0F;&#x4E8E;5&#x65F6;&#x7ED3;&#x675F;.</p>

<pre class="brush: js">var i = 0;
do {
   i += 1;
   console.log(i);
} while (i &lt; 5);
</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

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
   <td>Initial definition.<br>
    Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.1" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">do-while statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-do-while-statement" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">do-while statement</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Trailing ; is now optional.</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td>IE6+</td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/while" title="while &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;"><code>while</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>for</code></a></li>
</ul>
                  
                
              