
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<p><code>&#x5DF2;&#x5E9F;&#x5F03;&#x7684;<strong>compile</strong></code><strong><code>()</code></strong> &#x65B9;&#x6CD5;&#x88AB;&#x7528;&#x4E8E;&#x5728;&#x811A;&#x672C;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF08;&#x91CD;&#x65B0;&#xFF09;&#x7F16;&#x8BD1;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x4E0E;<code>RegExp</code>&#x6784;&#x9020;&#x51FD;&#x6570;&#x57FA;&#x672C;&#x4E00;&#x6837;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>regexObj</var>.compile(<var>pattern, flags</var>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>pattern</code></dt>
 <dd>&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x6587;&#x672C; &#x3002;</dd>
 <dt><code>flags</code></dt>
 <dd>
 <p>&#x5982;&#x679C;&#x6307;&#x5B9A;&#xFF0C;&#x6807;&#x5FD7;&#x53EF;&#x4EE5;&#x5177;&#x6709;&#x4EE5;&#x4E0B;&#x503C;&#x7684;&#x4EFB;&#x610F;&#x7EC4;&#x5408;&#xFF1A;</p>

 <dl>
  <dt><code>g</code></dt>
  <dd>&#x5168;&#x5C40;&#x5339;&#x914D;</dd>
  <dt><code>i</code></dt>
  <dd>&#x5FFD;&#x7565;&#x5927;&#x5C0F;&#x5199;</dd>
  <dt><code>m</code></dt>
  <dd>&#x591A;&#x884C;;&#x8BA9;&#x5F00;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#x5B57;&#x7B26;&#xFF08;^ &#x548C; $&#xFF09;&#x5DE5;&#x4F5C;&#x5728;&#x591A;&#x884C;&#x6A21;&#x5F0F;&#x5DE5;&#x4F5C;&#xFF08;&#x4F8B;&#x5982;&#xFF0C;^ &#x548C; $ &#x53EF;&#x4EE5;&#x5339;&#x914D;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x5F00;&#x59CB;&#x548C;&#x7ED3;&#x675F;&#xFF08;&#x884C;&#x662F;&#x7531; \n &#x6216; \r &#x5206;&#x5272;&#x7684;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x53EA;&#x662F;&#x6574;&#x4E2A;&#x8F93;&#x5165;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6700;&#x5F00;&#x59CB;&#x548C;&#x6700;&#x672B;&#x5C3E;&#x5904;&#x3002;</dd>
  <dt><code>y</code></dt>
  <dd>&#x9ECF;&#x5EA6;;&#xA0;&#x5728;&#x76EE;&#x6807;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF0C;&#x53EA;&#x4ECE;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;lastIndex&#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x663E;&#x793A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5339;&#x914D;&#xFF08;&#x5E76;&#x4E14;&#x4E0D;&#x8BD5;&#x56FE;&#x4ECE;&#x4EFB;&#x4F55;&#x4E4B;&#x540E;&#x7684;&#x7D22;&#x5F15;&#x5339;&#x914D;&#xFF09;&#x3002;</dd>
 </dl>
 </dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>&#x4E0D;&#x63A8;&#x8350;compile&#x65B9;&#x6CD5;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;</code> <code>RegExp</code> &#x6784;&#x9020;&#x51FD;&#x6570;&#x6765;&#x5F97;&#x5230;&#x76F8;&#x540C;&#x6548;&#x679C;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;compile()"><code>&#x4F7F;&#x7528;compile()</code></h3>

<p>&#x4EE5;&#x4E0B;&#x5C55;&#x793A;&#x5982;&#x4F55;&#x7528;&#x65B0;&#x6A21;&#x5F0F;&#x548C;&#x65B0;&#x6807;&#x5FD7;&#x6765;&#x91CD;&#x65B0;&#x7F16;&#x8BD1;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<pre class="brush: js">var regexObj = new RegExp(&quot;foo&quot;, &quot;gi&quot;); 
regexObj.compile(&quot;new foo&quot;, &quot;g&quot;);
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
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.compile" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">RegExp.prototype.compile</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-regexp.prototype.compile" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.compile</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.</td>
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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/RegExp" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp</code></a></li>
</ul>
                  
                
              