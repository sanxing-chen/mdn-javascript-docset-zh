
                
                  
                    <div><div class="overheadIndicator obsolete obsoleteHeader"><p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03; Gecko 37 (Firefox 37 / Thunderbird 37 / SeaMonkey 2.34)</strong><br>This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.</p></div></div>

<div><section class="Quick_links" id="Quick_Links"><!-- --></section><div class="overheadIndicator nonStandard nonStandardHeader"> 
      <p><strong><span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> &#x975E;&#x6807;&#x51C6;</strong><br> 
      &#x8BE5;&#x7279;&#x6027;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#xFF01;</p> 
      </div></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p>&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x5305;&#x542B;&#x7684;&#x7279;&#x6B8A;&#x5B57;&#x7B26;&#x8FDB;&#x884C;&#x8F6C;&#x4E49;(&#x53CD;&#x659C;&#x6760;),&#x7136;&#x540E;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x8FB9;&#x5404;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x53CC;&#x5F15;&#x53F7;(<code>&quot;</code>)&#x5E76;&#x8FD4;&#x56DE;,&#x5E76;&#x4E0D;&#x4FEE;&#x6539;&#x539F;&#x5B57;&#x7B26;&#x4E32;.</p>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.quote()</code></pre>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<table class="fullwidth-table">
 <thead>
  <tr>
   <th class="header" scope="col"><code>str</code></th>
   <th class="header" scope="col"><code>str.quote()</code></th>
   <th class="header" scope="col"><code><a class="new" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/eval" title="JavaScript/Reference/Global_Objects/eval">eval</a>(str.quote())</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Hello world!</code></td>
   <td><code>&quot;Hello world!&quot;</code></td>
   <td><code>Hello world!</code></td>
  </tr>
  <tr>
   <td><code>Hello<br>
    &#xA0; &#xA0; &#xA0; &#xA0; world!</code></td>
   <td><code>&quot;Hello\n\tworld!&quot;</code></td>
   <td><code>Hello<br>
    &#xA0; &#xA0; &#xA0; &#xA0; world!</code></td>
  </tr>
  <tr>
   <td><code>&quot; \ &#x2014; &apos;</code></td>
   <td><code>&quot;\&quot; \\ \u2014 &apos;&quot;</code></td>
   <td><code>&quot; \ &#x2014; &apos;</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>

<p>&#x4E0D;&#x5728;&#x4EFB;&#x4F55;&#x89C4;&#x8303;&#x4E2D;&#x3002;&#x5B9E;&#x73B0;&#x4E8E; JavaScript 1.3.</p>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/JSON/stringify" title="JavaScript/Reference/Global_Objects/JSON/stringify">JSON.stringify</a></code></li>
</ul>
                  
                
              