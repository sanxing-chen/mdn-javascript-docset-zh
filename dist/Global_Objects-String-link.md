
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><code><strong>link()</strong></code> &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; <a title="HTML &#x4E2D;&#x7684; &lt;a&gt;&#x5143;&#x7D20; (&#x6216;HTML&#x951A;&#x5143;&#x7D20;, Anchor Element)&#xA0;&#x7528;&#x4E8E;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x8D85;&#x94FE;&#x63A5;&#x5230;&#x540C;&#x4E00;&#x9875;&#x4E0A;&#x7684;&#x67D0;&#x4E2A;&#x4F4D;&#x7F6E;&#xFF0C;&#x6216;&#x8005;&#x5728;&#x7F51;&#x7EDC;&#x4E0A;&#x7684;&#x4EFB;&#x4F55;&#x5176;&#x5B83;&#x9875;&#x9762;&#x3002;&#x5B83;&#x4E5F;&#x53EF;&#x4EE5;&#x7528;&#x4E8E;&#xFF08;&#x4E00;&#x4E2A;&#x8FC7;&#x65F6;&#x7684;&#x65B9;&#x5F0F;&#xFF09;&#xFF0C;&#x4EE5;&#x521B;&#x5EFA;&#x7528;&#x4E8E;&#x4E00;&#x4E2A;&#x951A;&#x70B9;&#x2014;&#x2014;&#x5373;&#x8D85;&#x94FE;&#x63A5;&#x5B9A;&#x4F4D;&#x5230;&#x9875;&#x9762;&#x4E2D;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x56E0;&#x6B64;&#x94FE;&#x63A5;&#x4E0D;&#x53EA;&#x662F;&#x8FDE;&#x63A5;&#x5230;&#x4E00;&#x4E2A;&#x9875;&#x9762;&#x7684;&#x9876;&#x90E8;&#xFF08;&#x4E5F;&#x53EF;&#x4EE5;&#x662F;&#x9875;&#x9762;&#x7684;&#x4E2D;&#x90E8;&#x6216;&#x8005;&#x5E95;&#x90E8;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a> HTML &#x5143;&#x7D20;&#xFF0C;&#x7528;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4F5C;&#x4E3A;&#x8D85;&#x94FE;&#x63A5;&#x7684;&#x663E;&#x793A;&#x6587;&#x672C;&#xFF0C;&#x53C2;&#x6570;&#x4F5C;&#x4E3A;&#x6307;&#x5411;&#x53E6;&#x4E00;&#x4E2A; URL &#x7684;&#x8D85;&#x94FE;&#x63A5;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.link(url) </code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>&#x4EFB;&#x4F55;&#x80FD;&#x591F;&#x6307;&#x5B9A; <code>a</code> &#x6807;&#x7B7E;&#x7684;&#xA0;<code>href</code>&#xA0;&#x5C5E;&#x6027;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF1B;&#x5B83;&#x5E94;&#x5F53;&#x662F;&#x6709;&#x6548;&#x7684; URL&#xFF08;&#x76F8;&#x5BF9;&#x6216;&#x7EDD;&#x5BF9;&#xFF09;&#xFF0C;&#x4EFB;&#x4F55;&#xA0;<code>&amp;</code>&#xA0;&#x5B57;&#x7B26;&#x5C06;&#x4F1A;&#x88AB;&#x8F6C;&#x4E49;&#x4E3A;&#xA0;<code>&amp;amp;</code>&#xFF0C;&#x4EFB;&#x4F55; <code>&quot;</code> &#x5B57;&#x7B26;&#x5C06;&#x4F1A;&#x88AB;&#x8F6C;&#x4E49;&#x4E3A;&#xA0;<code>&amp;quot;</code>&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x4F7F;&#x7528;&#xA0;<code>link</code> &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8D85;&#x94FE;&#x63A5; HTML &#x7247;&#x6BB5;&#x3002;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; <a title="&#x5411;&#x4E00;&#x4E2A;&#x88AB;&#xA0;document.open()&#xA0;&#x6253;&#x5F00;&#x7684;&#x6587;&#x6863;&#x6D41;&#x4E2D;&#x5199;&#x5165;&#x4E00;&#x4E32;&#x6587;&#x672C;&#x3002;" href="/zh-CN/docs/Web/API/Document/write"><code>document.write</code></a> &#x6216; <a title="innerHTML &#x5C5E;&#x6027;&#x53EF;&#x4EE5;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x3001;&#x4FEE;&#x6539;&#x6307;&#x5B9A;&#x5143;&#x7D20;&#x5185;&#x7684;&#x6240;&#x6709;&#x6807;&#x7B7E;&#x548C;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/API/Element/innerHTML"><code>element.innerHTML</code></a> &#x65B9;&#x6CD5;&#x6DFB;&#x52A0;&#x5230;&#x6587;&#x6863;&#x4E2D;&#x3002;</p>

<p>&#x4F7F;&#x7528; <code>link</code> &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x7684;&#x94FE;&#x63A5;&#x5C06;&#x4F1A;&#x6210;&#x4E3A; document.links &#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x3002;&#x67E5;&#x770B;&#xA0;<a title="links&#xA0;&#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6587;&#x6863;&#x4E2D;&#x6240;&#x6709;&#x5177;&#x6709; href &#x5C5E;&#x6027;&#x503C;&#x7684;&#xA0;&lt;area&gt; &#x5143;&#x7D20; &lt;a&gt; &#x5143;&#x7D20;&#x7684;&#x96C6;&#x5408;&#x3002;" href="/zh-CN/docs/Web/API/Document/links"><code>document.links</code></a>&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Using_link" id="Example:_Using_link">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>link</code></h3>

<p>&#x4E0B;&#x4F8B;&#x663E;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x8BCD; &quot;MDN&quot; &#x4F5C;&#x4E3A;&#x8D85;&#x94FE;&#x63A5;&#xFF0C;&#x6307;&#x5411; Mozilla Developer Network&#x3002;</p>

<pre class="brush:js">var hotText = &quot;MDN&quot;;
var URL = &quot;https://developer.mozilla.org/&quot;;

document.write(&quot;Click to return to &quot; + hotText.link(URL));</pre>

<p>&#x8BE5;&#x4F8B;&#x8F93;&#x51FA;&#x4E0B;&#x9762;&#x7684; HTML</p>

<pre class="brush: html">Click to return to &lt;a href=&quot;https://developer.mozilla.org/&quot;&gt;MDN&lt;/a&gt;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.link" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.link</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0.<br>
    Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
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
   <td>1.0 (1.7 or earlier)</td>
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
   <td>1.0 (1.0)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_Also" id="See_Also">Gecko-specific notes</h2>

<ul>
 <li>Starting Gecko 17.0 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) the <strong>&quot;</strong> (quotation mark) is now automatically replaced by its HTML reference character <code>&amp;quot;</code> in the <code>url</code> parameter.</li>
</ul>

<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="anchor() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; &lt;a&gt; HTML &#x951A;&#x5143;&#x7D20;&#xFF0C;&#x88AB;&#x7528;&#x4F5C;&#x8D85;&#x6587;&#x672C;&#x9776;&#x6807;&#xFF08;hypertext target&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor"><code>String.prototype.anchor()</code></a></li>
</ul>
                  
                
              