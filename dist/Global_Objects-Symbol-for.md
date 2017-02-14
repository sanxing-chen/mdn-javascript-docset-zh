
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator" style="background: #9CF49C;"> 
    <p><strong>&#x8BE5;&#x7279;&#x6027;&#x5904;&#x4E8E; ECMAScript 6 &#x89C4;&#x8303;&#x8349;&#x6848;&#x4E2D;&#xFF0C;&#x76EE;&#x524D;&#x7684;&#x5B9E;&#x73B0;&#x5728;&#x672A;&#x6765;&#x53EF;&#x80FD;&#x4F1A;&#x53D1;&#x751F;&#x5FAE;&#x8C03;&#xFF0C;&#x8BF7;&#x8C28;&#x614E;&#x4F7F;&#x7528;&#x3002;</strong></p> 
</div></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>Symbol.for(key)</strong></code> &#x65B9;&#x6CD5;&#x4F1A;&#x6839;&#x636E;&#x7ED9;&#x5B9A;&#x7684;&#x952E; <code>key</code>&#xFF0C;&#x6765;&#x4ECE; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x627E;&#x5230;&#x5BF9;&#x5E94;&#x7684; symbol&#xFF0C;&#x5982;&#x679C;&#x627E;&#x5230;&#x4E86;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x5B83;&#xFF0C;&#x5426;&#x5219;&#xFF0C;&#x65B0;&#x5EFA;&#x4E00;&#x4E2A;&#x4E0E;&#x8BE5;&#x952E;&#x5173;&#x8054;&#x7684; symbol&#xFF0C;&#x5E76;&#x653E;&#x5165; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox"><var>Symbol.for(key)</var>;</pre>
<h3 id=".E5.8F.82.E6.95.B0">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  key</dt>
 <dd>
  &#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F5C;&#x4E3A; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x4E0E;&#x67D0; symbol &#x5173;&#x8054;&#x7684;&#x952E;&#xFF08;&#x540C;&#x65F6;&#x4E5F;&#x4F1A;&#x4F5C;&#x4E3A;&#x8BE5; symbol &#x7684;&#x63CF;&#x8FF0;&#xFF09;&#x3002;</dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x548C; <code>Symbol()</code> &#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF0C;&#x7528; <code>Symbol.for()</code> &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x7684;&#x7684; symbol &#x4F1A;&#x88AB;&#x653E;&#x5165;&#x4E00;&#x4E2A;&#x53EB; <strong>symbol &#x6CE8;&#x518C;&#x8868;</strong>&#x7684;&#x8BB0;&#x5F55;&#x8868;&#x4E2D;&#xFF0C;&#x5F53;&#x7B2C;&#x4E8C;&#x6B21;&#x83B7;&#x53D6;&#x76F8;&#x540C;&#x952E;&#x7684; symbol &#x65F6;&#xFF0C;<code>Symbol.for()</code> &#x4F1A;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x4E0A;&#x6B21;&#x5B58;&#x50A8;&#x7684;&#x90A3;&#x4E2A;&#xFF0C;&#x4E0D;&#x4F1A;&#x518D;&#x65B0;&#x5EFA;&#x4E00;&#x4E2A;&#x3002;</p>
<h3 id="symbol_.E6.B3.A8.E5.86.8C.E8.A1.A8">symbol &#x6CE8;&#x518C;&#x8868;</h3>
<p>symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x7684;&#x8BB0;&#x5F55;&#x7ED3;&#x6784;&#xFF1A;</p>
<table class="standard-table">
 <caption>
  symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x7684;&#x4E00;&#x4E2A;&#x8BB0;&#x5F55;</caption>
 <tbody>
  <tr>
   <th>&#x5B57;&#x6BB5;&#x540D;</th>
   <th>&#x5B57;&#x6BB5;&#x503C;</th>
  </tr>
  <tr>
   <td>[[key]]</td>
   <td>&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x7528;&#x6765;&#x6807;&#x8BC6;&#x6BCF;&#x4E2A; symbol</td>
  </tr>
  <tr>
   <td>[[symbol]]</td>
   <td>&#x5B58;&#x50A8;&#x7684; symbol &#x503C;</td>
  </tr>
 </tbody>
</table>
<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>
<pre class="brush: js">Symbol.for(&quot;foo&quot;); // &#x521B;&#x5EFA;&#x4E00;&#x4E2A; symbol &#x5E76;&#x653E;&#x5165; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#xFF0C;&#x952E;&#x4E3A; &quot;foo&quot;
Symbol.for(&quot;foo&quot;); // &#x4ECE; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x8BFB;&#x53D6;&#x952E;&#x4E3A;&quot;foo&quot;&#x7684; symbol


Symbol.for(&quot;bar&quot;) === Symbol.for(&quot;bar&quot;); // true&#xFF0C;&#x8BC1;&#x660E;&#x4E86;&#x4E0A;&#x9762;&#x8BF4;&#x7684;
Symbol(&quot;bar&quot;) === Symbol(&quot;bar&quot;); // false&#xFF0C;Symbol() &#x51FD;&#x6570;&#x6BCF;&#x6B21;&#x90FD;&#x4F1A;&#x8FD4;&#x56DE;&#x65B0;&#x7684;&#x4E00;&#x4E2A; symbol


var sym = Symbol.for(&quot;mario&quot;);
sym.toString(); 
// &quot;Symbol(mario)&quot;&#xFF0C;mario &#x65E2;&#x662F;&#x8BE5; symbol &#x5728; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x7684;&#x952E;&#x540D;&#xFF0C;&#x53C8;&#x662F;&#x8BE5; symbol &#x81EA;&#x8EAB;&#x7684;&#x63CF;&#x8FF0;&#x5B57;&#x7B26;&#x4E32;
</pre>
<p>&#x4E3A;&#x4E86;&#x9632;&#x6B62;&#x51B2;&#x7A81;&#xFF0C;&#x6700;&#x597D;&#x7ED9;&#x4F60;&#x8981;&#x653E;&#x5165; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x7684; symbol &#x5E26;&#x4E0A;&#x952E;&#x524D;&#x7F00;&#x3002;</p>
<pre class="brush: js">Symbol.for(&quot;mdn.foo&quot;);
Symbol.for(&quot;mdn.bar&quot;);
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
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-symbol.for" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Symbol.for</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>Initial definition.</td>
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
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><a href="/en-US/Firefox/Releases/33" title="Released on 2014-10-14.">33.0</a> (33.0)</td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td>33.0 (33.0)</td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
    <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   </tr>
  </tbody>
 </table>
</div>
<h2 id="See_Also" name="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor" title="Symbol.keyFor(sym) &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x83B7;&#x53D6; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x4E0E;&#x67D0;&#x4E2A; symbol &#x5173;&#x8054;&#x7684;&#x952E;&#x3002;"><code>Symbol.prototype.keyFor()</code></a></li>
</ul>
                  
                
              