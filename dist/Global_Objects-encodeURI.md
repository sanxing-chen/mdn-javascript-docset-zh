
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<p><code><strong>encodeURI()</strong></code> &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>encodeURI(<em>URI</em>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>URI</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;URI.</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5047;&#x5B9A;&#x4E00;&#x4E2A;URI&#x662F;&#x5B8C;&#x6574;&#x7684;URI&#xFF0C;&#x90A3;&#x4E48;&#x65E0;&#x9700;&#x5BF9;&#x90A3;&#x4E9B;&#x4FDD;&#x7559;&#x7684;&#x5E76;&#x4E14;&#x5728;URI&#x4E2D;&#x6709;&#x7279;&#x6B8A;&#x610F;&#x601D;&#x7684;&#x5B57;&#x7B26;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x3002;</p>

<p><code>encodeURI</code> &#x4F1A;&#x66FF;&#x6362;&#x6240;&#x6709;&#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x4F46;&#x4E0D;&#x5305;&#x62EC;&#x4EE5;&#x4E0B;&#x5B57;&#x7B26;&#xFF0C;&#x5373;&#x4F7F;&#x5B83;&#x4EEC;&#x5177;&#x6709;&#x9002;&#x5F53;&#x7684;UTF-8&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">&#x7C7B;&#x578B;</td>
   <td class="header">&#x5305;&#x542B;</td>
  </tr>
  <tr>
   <td>&#x4FDD;&#x7559;&#x5B57;&#x7B26;</td>
   <td><code>;</code> <code>,</code> <code>/</code> <code>?</code> <code>:</code> <code>@</code> <code>&amp;</code> <code>=</code> <code>+</code> <code>$</code></td>
  </tr>
  <tr>
   <td>&#x975E;&#x8F6C;&#x4E49;&#x7684;&#x5B57;&#x7B26;</td>
   <td>&#x5B57;&#x6BCD; &#x6570;&#x5B57;&#xA0;<code>-</code> <code>_</code> <code>.</code> <code>!</code> <code>~</code> <code>*</code> <code>&apos;</code> <code>(</code> <code>)</code></td>
  </tr>
  <tr>
   <td>&#x6570;&#x5B57;&#x7B26;&#x53F7;</td>
   <td><code>#</code></td>
  </tr>
 </tbody>
</table>

<p>&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;<code>encodeURI</code> &#x81EA;&#x8EAB;<em>&#x65E0;&#x6CD5;</em>&#x4EA7;&#x751F;&#x80FD;&#x9002;&#x7528;&#x4E8E;HTTP GET &#x6216; POST &#x8BF7;&#x6C42;&#x7684;URI&#xFF0C;&#x4F8B;&#x5982;&#x5BF9;&#x4E8E; XMLHTTPRequests, &#x56E0;&#x4E3A; &quot;&amp;&quot;, &quot;+&quot;, &#x548C; &quot;=&quot; &#x4E0D;&#x4F1A;&#x88AB;&#x7F16;&#x7801;&#xFF0C;&#x7136;&#x800C;&#x5728; GET &#x548C; POST &#x8BF7;&#x6C42;&#x4E2D;&#x5B83;&#x4EEC;&#x662F;&#x7279;&#x6B8A;&#x5B57;&#x7B26;&#x3002;&#x7136;&#x800C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" title="encodeURIComponent()&#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x7684;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E00;&#x5230;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;Unicode&#x4EE3;&#x7406;&#x533A;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;"><code>encodeURIComponent</code></a>&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x4F1A;&#x5BF9;&#x8FD9;&#x4E9B;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#x3002;</p>

<p>&#x53E6;&#x5916;&#xFF0C;&#x5982;&#x679C;&#x8BD5;&#x56FE;&#x7F16;&#x7801;&#x4E00;&#x4E2A;&#x975E;&#x9AD8;-&#x4F4E;&#x4F4D;&#x5B8C;&#x6574;&#x7684;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#xFF0C;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A; <a href="/zh-CN/docs/Web/JavaScript/Reference/URIError" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>URIError</code></a> &#x9519;&#x8BEF;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">// &#x7F16;&#x7801;&#x9AD8;-&#x4F4E;&#x4F4D;&#x5B8C;&#x6574;&#x5B57;&#x7B26; ok
console.log(encodeURI(&apos;\uD800\uDFFF&apos;));

// &#x7F16;&#x7801;&#x5355;&#x72EC;&#x7684;&#x9AD8;&#x4F4D;&#x5B57;&#x7B26;&#x629B;&#x51FA; &quot;Uncaught URIError: URI malformed&quot;
console.log(encodeURI(&apos;\uD800&apos;));

// &#x7F16;&#x7801;&#x5355;&#x72EC;&#x7684;&#x4F4E;&#x4F4D;&#x5B57;&#x7B26;&#x629B;&#x51FA; &quot;Uncaught URIError: URI malformed&quot;
console.log(encodeURI(&apos;\uDFFF&apos;));</pre>

<p>&#x5E76;&#x4E14;&#x9700;&#x8981;&#x6CE8;&#x610F;&#xFF0C;&#x5982;&#x679C;URL&#x9700;&#x8981;&#x9075;&#x5FAA;&#x8F83;&#x65B0;&#x7684;<a href="http://tools.ietf.org/html/rfc3986" class="external">RFC3986</a>&#x6807;&#x51C6;&#xFF0C;&#x90A3;&#x4E48;&#x65B9;&#x62EC;&#x53F7;&#x662F;&#x88AB;&#x4FDD;&#x7559;&#x7684;(&#x7ED9;IPv6)&#xFF0C;&#x56E0;&#x6B64;&#x5BF9;&#x4E8E;&#x90A3;&#x4E9B;&#x6CA1;&#x6709;&#x88AB;&#x7F16;&#x7801;&#x7684;URL&#x90E8;&#x5206;(&#x4F8B;&#x5982;&#x4E3B;&#x673A;)&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#xFF1A;</p>

<pre class="brush: js">function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, &apos;[&apos;).replace(/%5D/g, &apos;]&apos;);
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="external" lang="en" title="ECMAScript 3rd Edition (ECMA-262)" hreflang="en">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3.3" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">encodeURI</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-encodeuri-uri" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">encodeURI</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-encodeuri-uri" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">encodeURI</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x529F;&#x80FD;</td>
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
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x529F;&#x80FD;</td>
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI" title="decodeURI() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x89E3;&#x7801;&#x7531; encodeURI &#x65B9;&#x6CD5;&#x6216;&#x8005;&#x5176;&#x5B83;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x7684;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;"><code>decodeURI</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" title="encodeURIComponent()&#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x7684;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E00;&#x5230;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;Unicode&#x4EE3;&#x7406;&#x533A;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;"><code>encodeURIComponent</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent" title="decodeURIComponent() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x89E3;&#x7801;&#x7531; encodeURIComponent &#x65B9;&#x6CD5;&#x6216;&#x8005;&#x5176;&#x5B83;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x7684;&#x90E8;&#x5206;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x3002;"><code>decodeURIComponent</code></a></li>
</ul>

                  
                
              