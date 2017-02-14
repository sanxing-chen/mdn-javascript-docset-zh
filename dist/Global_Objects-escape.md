
                
                  
                    <div>
<div>
<div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>
</div>
</div>

<h2 name="Summary" id="Summary">&#x6982;&#x89C8;</h2>

<p>&#x5E9F;&#x5F03;&#x7684;&#xA0;<code><strong>escape()</strong></code> &#x65B9;&#x6CD5;&#x751F;&#x6210;&#x65B0;&#x7684;&#x7531;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x66FF;&#x6362;&#x7684;&#x5B57;&#x7B26;&#x4E32;. &#x4F7F;&#x7528; <a title="encodeURI() &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"><code>encodeURI</code></a> &#x6216; <a title="encodeURIComponent()&#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x7684;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E00;&#x5230;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;Unicode&#x4EE3;&#x7406;&#x533A;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"><code>encodeURIComponent</code></a> &#x4EE3;&#x66FF;.</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>escape(str)</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>&#x5F85;&#x7F16;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;.</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>escape</code>&#xA0;&#x51FD;&#x6570;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;. &#x7279;&#x8272;&#x5B57;&#x7B26;&#x5982;: @*_+-./&#xA0;&#x88AB;&#x6392;&#x9664;&#x5728;&#x5916;.</p>

<p>&#x5B57;&#x7B26;&#x7684;16&#x8FDB;&#x5236;&#x683C;&#x5F0F;&#x503C;,&#x5F53;&#x8BE5;&#x503C;&#x5C0F;&#x4E8E;&#x7B49;&#x4E8E;0xFF&#x65F6;,&#x7528;&#x4E00;&#x4E2A;2&#x4F4D;&#x8F6C;&#x79FB;&#x5E8F;&#x5217;: %xx &#x8868;&#x793A;. &#x5927;&#x4E8E;&#x7684;&#x8BDD;&#x5219;&#x4F7F;&#x7528;4&#x4F4D;&#x5E8F;&#x5217;:%<strong>u</strong>xxxx &#x8868;&#x793A;.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">escape(&quot;abc123&quot;);     // &quot;abc123&quot;
escape(&quot;&#xE4;&#xF6;&#xFC;&quot;);        // &quot;%E4%F6%FC&quot;
escape(&quot;&#x107;&quot;);          // &quot;%u0107&quot;

// special characters
escape(&quot;@*_+-./&quot;);    // &quot;@*_+-./&quot;</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.1">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">escape</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (informative) Compatibility Annex B</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-escape-string">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">escape</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers</td>
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

<h2 name="See_Also" id="See_Also">&#x5176;&#x4ED6;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="encodeURI() &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"><code>encodeURI</code></a></li>
 <li><a title="encodeURIComponent()&#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x7684;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E00;&#x5230;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;Unicode&#x4EE3;&#x7406;&#x533A;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"><code>encodeURIComponent</code></a></li>
</ul>
                  
                
              