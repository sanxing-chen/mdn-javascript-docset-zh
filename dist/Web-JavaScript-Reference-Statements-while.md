
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p><strong>while</strong> &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">while (<em>condition</em>) {
  <em>statement</em>
}</pre>
<dl>
 <dt>
  <code>condition</code></dt>
 <dd>
  &#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x5728;&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x524D;&#x88AB;&#x6C42;&#x503C;&#x3002;&#x5982;&#x679C;&#x6C42;&#x503C;&#x4E3A;&#x771F;&#xFF0C;statement &#x5C31;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x3002;&#x5982;&#x679C;&#x6C42;&#x503C;&#x4E3A;&#x5047;&#xFF0C;&#x5219;&#x8DF3;&#x51FA; while &#x5FAA;&#x73AF;&#x6267;&#x884C;&#x540E;&#x9762;&#x7684;&#x8BED;&#x53E5;&#x3002;</dd>
 <dt>
  <code>statement</code></dt>
 <dd>
  &#x53EA;&#x8981;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x6C42;&#x503C;&#x4E3A;&#x771F;&#xFF0C;&#x8BE5;&#x8BED;&#x53E5;&#x5C31;&#x4F1A;&#x4E00;&#x76F4;&#x88AB;&#x6267;&#x884C;&#x3002;&#x8981;&#x5728;&#x5FAA;&#x73AF;&#x4E2D;&#x6267;&#x884C;&#x591A;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5757;&#x8BED;&#x53E5; { ... } &#x5305;&#x4F4F;&#x591A;&#x6761;&#x8BED;&#x53E5;&#x3002;</dd>
</dl>
<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>
<p>&#x4E0B;&#x9762;&#x7684; while &#x5FAA;&#x73AF;&#x4F1A;&#x4E00;&#x76F4;&#x5FAA;&#x73AF;&#x82E5;&#x5E72;&#x6B21;&#x76F4;&#x5230; <code>n</code> &#x7B49;&#x4E8E; <code>3</code>&#x3002;</p>
<pre class="brush:js">var n = 0;
var x = 0;

while (n &lt; 3) {
  n++;
  x += n;
}</pre>
<p>&#x5728;&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x4E2D;&#xFF0C;<code>n</code> &#x90FD;&#x4F1A;&#x81EA;&#x589E; <code>1</code>&#xFF0C;&#x7136;&#x540E;&#x518D;&#x628A; <code>n</code> &#x52A0;&#x5230; <code>x</code> &#x4E0A;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5728;&#x6BCF;&#x8F6E;&#x5FAA;&#x73AF;&#x7ED3;&#x675F;&#x540E;&#xFF0C;<code>x</code> &#x548C; <code>n</code> &#x7684;&#x503C;&#x5206;&#x522B;&#x662F;&#xFF1A;</p>
<ul>
 <li>&#x7B2C;&#x4E00;&#x8F6E;&#x540E;&#xFF1A;<code>n</code> = 1&#xFF0C;<code>x</code> = 1</li>
 <li>&#x7B2C;&#x4E8C;&#x8F6E;&#x540E;&#xFF1A;<code>n</code> = 2&#xFF0C;<code>x</code> = 3</li>
 <li>&#x7B2C;&#x4E09;&#x8F6E;&#x540E;&#xFF1A;<code>n</code> = 3&#xFF0C;<code>x</code> = 6</li>
</ul>
<p>&#x5F53;&#x5B8C;&#x6210;&#x7B2C;&#x4E09;&#x8F6E;&#x5FAA;&#x73AF;&#x540E;&#xFF0C;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F; n &lt; 3 &#x4E0D;&#x518D;&#x4E3A;&#x771F;&#xFF0C;&#x56E0;&#x6B64;&#x5FAA;&#x73AF;&#x7EC8;&#x6B62;&#x3002;</p>
<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">while statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-while-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">while statement</small></a></td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while"><code>do...while</code></a></li>
 <li><a title="for&#x8BED;&#x53E5;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;,&#x5B83;&#x5305;&#x542B;&#x4E86;&#x4E09;&#x4E2A;&#x53EF;&#x9009;&#x7684;&#x8868;&#x8FBE;&#x5F0F;,&#x4E09;&#x4E2A;&#x53EF;&#x9009;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x5305;&#x56F4;&#x5728;&#x5706;&#x62EC;&#x53F7;&#x4E2D;&#x5E76;&#x7531;&#x5206;&#x53F7;&#x5206;&#x9694;,&#x540E;&#x9762;&#x8DDF;&#x968F;&#x4E00;&#x4E2A;&#x8BED;&#x53E5;&#x6216;&#x4E00;&#x7EC4;&#x8BED;&#x53E5;&#x5728;&#x5FAA;&#x73AF;&#x4E2D;&#x6267;&#x884C;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for"><code>for</code></a></li>
</ul>
                  
                
              