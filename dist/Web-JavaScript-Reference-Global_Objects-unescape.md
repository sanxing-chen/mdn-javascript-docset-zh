
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<p><code><font face="Open Sans, Arial, sans-serif">&#x5DF2;&#x5E9F;&#x5F03;&#x7684;&#xA0;</font><strong>unescape()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8BA1;&#x7B97;&#x751F;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5176;&#x4E2D;&#x7684;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x5C06;&#x88AB;&#x5176;&#x8868;&#x793A;&#x7684;&#x5B57;&#x7B26;&#x66FF;&#x6362;&#x3002;&#x4E0A;&#x8FF0;&#x7684;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x5C31;&#x50CF;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape" title="&#x5E9F;&#x5F03;&#x7684;&#xA0;escape() &#x65B9;&#x6CD5;&#x751F;&#x6210;&#x65B0;&#x7684;&#x7531;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x8F6C;&#x79FB;&#x5E8F;&#x5217;&#x66FF;&#x6362;&#x7684;&#x5B57;&#x7B26;&#x4E32;. &#x4F7F;&#x7528; encodeURI &#x6216; encodeURIComponent &#x4EE3;&#x66FF;."><code>escape</code></a>&#x91CC;&#x4ECB;&#x7ECD;&#x7684;&#x4E00;&#x6837;&#x3002;&#x56E0;&#x4E3A; <code>unescape</code>&#xA0;&#x5DF2;&#x7ECF;&#x5E9F;&#x5F03;&#xFF0C;&#x5EFA;&#x8BAE;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI" title="&#x5C06;&#x5148;&#x524D;&#x7ECF;&#x8FC7;encodeURI&#x51FD;&#x6570;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x8FC7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x89E3;&#x7801;."><code>decodeURI()</code></a>&#x6216;&#x8005;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent" title="decodeURIComponent()&#x65B9;&#x6CD5;&#x5BF9;&#x5148;&#x524D;&#x7ECF;&#x8FC7;encodeURIComponent&#x51FD;&#x6570;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x8FC7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x89E3;&#x7801;"><code>decodeURIComponent</code></a> &#x66FF;&#x4EE3;&#x672C;&#x65B9;&#x6CD5;&#x3002;</p>

<div class="note"><strong>Note:</strong> Do not use <code>unescape</code> to decode URIs, use <code>decodeURI</code> instead.</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code>unescape(str)</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>A string to be decoded.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>unescape</code> function is a property of the <em>global object</em>.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">unescape(&quot;abc123&quot;);     // &quot;abc123&quot;
unescape(&quot;%E4%F6%FC&quot;);  // &quot;&#xE4;&#xF6;&#xFC;&quot;
unescape(&quot;%u0107&quot;);     // &quot;&#x107;&quot;
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-unescape-string" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">unescape</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.2" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">unescape</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (informative) Compatibility Annex B</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-15.1.2.5" class="external" lang="en" hreflang="en">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">unescape</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

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

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI" title="&#x5C06;&#x5148;&#x524D;&#x7ECF;&#x8FC7;encodeURI&#x51FD;&#x6570;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x8FC7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x89E3;&#x7801;."><code>decodeURI</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent" title="decodeURIComponent()&#x65B9;&#x6CD5;&#x5BF9;&#x5148;&#x524D;&#x7ECF;&#x8FC7;encodeURIComponent&#x51FD;&#x6570;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x8FC7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x89E3;&#x7801;"><code>decodeURIComponent</code></a></li>
</ul>
                  
                
              