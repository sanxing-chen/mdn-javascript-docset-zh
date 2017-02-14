
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader">
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p>
        </div></div>

<p><strong><code>sup()</code></strong>&#x65B9;&#x6CD5;&#x521B;&#x5EFA;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/sup" class="new"><code>&lt;sup&gt;</code></a> HTML &#x5143;&#x7D20;&#xFF0C;&#x4F7F;&#x5B57;&#x7B26;&#x4E32;&#x5C55;&#x793A;&#x4E3A;&#x4E0A;&#x6807;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.sup()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5305;&#x542B;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/sup" class="new"><code>&lt;sup&gt;</code></a> HTML &#x5143;&#x7D20;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>sup()</code> &#x65B9;&#x6CD5;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5D4C;&#x5165; <code>&lt;sup&gt;</code> &#x6807;&#x7B7E;&#x4E2D;&#xFF1A;<code>&quot;&lt;sup&gt;str&lt;/sup&gt;&quot;</code>.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;sub()&#x548C;sup()&#x65B9;&#x6CD5;">&#x4F7F;&#x7528;<code>sub()</code>&#x548C;<code>sup()</code>&#x65B9;&#x6CD5;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x4F7F;&#x7528;&#x4E86;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub" class="new"><code>sub()</code></a>&#x548C;<code>sup()</code>&#x65B9;&#x6CD5;&#x6765;&#x683C;&#x5F0F;&#x5316;&#x5B57;&#x7B26;&#x4E32;&#xFF1A;</p>

<pre class="brush: js">var superText = &apos;superscript&apos;;
var subText = &apos;subscript&apos;;

console.log(&apos;This is what a &apos; + superText.sup() + &apos; looks like.&apos;);
// &quot;&#x8FD9;&#x5C31;&#x662F;&lt;sup&gt;superscript&lt;/sup&gt;&#x7684;&#x6837;&#x5B50;&#x3002;&quot;

console.log(&apos;This is what a &apos; + subText.sub() + &apos; looks like.&apos;);
// &quot;&#x8FD9;&#x5C31;&#x662F;&lt;sub&gt;subscript&lt;/sub&gt;&#x7684;&#x6837;&#x5B50;&#x3002;&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.sup" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.sup</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728; JavaScript 1.0 &#x4E2D;&#x5B9E;&#x73B0;&#x3002;&#x5728;&#xFF08;&#x89C4;&#x8303;&#x6027;&#xFF09;&#x9644;&#x4EF6; B &#x4E2D;&#x5B9A;&#x4E49;&#x4E3A;&#x7528;&#x4E8E; Web &#x6D4F;&#x89C8;&#x5668;&#x7684; ECMAScript &#x9644;&#x52A0;&#x7279;&#x6027;&#x3002;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-string.prototype.sup" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.sup</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#x5728;&#xFF08;&#x89C4;&#x8303;&#x6027;&#xFF09;&#x9644;&#x4EF6; B &#x4E2D;&#x5B9A;&#x4E49;&#x4E3A;&#x7528;&#x4E8E; Web &#x6D4F;&#x89C8;&#x5668;&#x7684; ECMAScript &#x9644;&#x52A0;&#x7279;&#x6027;&#x3002;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub" class="new"><code>String.prototype.sub()</code></a></li>
</ul>
                  
                
              