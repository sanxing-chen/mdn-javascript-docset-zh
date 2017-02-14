
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<p>The <strong><code>italics()</code></strong> method creates an <a href="/zh-CN/docs/Web/HTML/Element/i" title="HTML&#x5143;&#x7D20; &lt;i&gt; &#x7528;&#x4E8E;&#x8868;&#x73B0;&#x56E0;&#x67D0;&#x4E9B;&#x539F;&#x56E0;&#x9700;&#x8981;&#x533A;&#x5206;&#x666E;&#x901A;&#x6587;&#x672C;&#x7684;&#x4E00;&#x7CFB;&#x5217;&#x6587;&#x672C;&#x3002;&#x4F8B;&#x5982;&#x6280;&#x672F;&#x672F;&#x8BED;&#x3001;&#x5916;&#x6587;&#x77ED;&#x8BED;&#x6216;&#x662F;&#x5C0F;&#x8BF4;&#x4E2D;&#x4EBA;&#x7269;&#x7684;&#x601D;&#x60F3;&#x6D3B;&#x52A8;&#x7B49;&#xFF0C;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x901A;&#x5E38;&#x4EE5;&#x659C;&#x4F53;&#x663E;&#x793A;&#x3002;"><code>&lt;i&gt;</code></a> HTML element that causes a string to be italic.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>str</var>.italics()</code></pre>

<h2 id="Description">Description</h2>

<p>The <code>italics()</code> method embeds a string in an <code>&lt;i&gt;</code> tag: <code>&quot;&lt;i&gt;str&lt;/i&gt;&quot;</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_italics()">Using <code>italics()</code></h3>

<p>The following example uses string methods to change the formatting of a string:</p>

<pre class="brush: js">var worldString = &apos;Hello, world&apos;; console.log(worldString.blink());  // Hello, world
console.log(worldString.bold());  // <strong>Hello, world</strong>
console.log(worldString.italics()); //<em>Hello, world</em>
console.log(worldString.strike());  // <s>Hello, world</s></pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.italics" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.italics</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.0. Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-string.prototype.italics" class="external" lang="en" hreflang="en">ECMAScript 2016 Draft (7th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.italics</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String.prototype.blink()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String.prototype.bold()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String.prototype.strike()</code></a></li>
</ul>
                  
                
              