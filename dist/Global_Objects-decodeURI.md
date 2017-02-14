
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code><strong>decodeURI()</strong></code> &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x89E3;&#x7801;&#x7531; <a title="encodeURI() &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"><code>encodeURI</code></a> &#x65B9;&#x6CD5;&#x6216;&#x8005;&#x5176;&#x5B83;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x7684;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>decodeURI(<em>encodedURI</em>)</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>encodedURI</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x5B8C;&#x6574;&#x7684;&#x7F16;&#x7801;&#x8FC7;&#x7684; URI</dd>
</dl>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5C06;&#x5DF2;&#x7F16;&#x7801; URI &#x4E2D;&#x6240;&#x6709;&#x80FD;&#x8BC6;&#x522B;&#x7684;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x8F6C;&#x6362;&#x6210;&#x539F;&#x5B57;&#x7B26;&#xFF0C;&#x4F46;&#x4E0D;&#x80FD;&#x89E3;&#x7801;&#x90A3;&#x4E9B;&#x4E0D;&#x4F1A;&#x88AB; <a title="encodeURI() &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"><code>encodeURI</code></a> &#x7F16;&#x7801;&#x7684;&#x5185;&#x5BB9;&#xFF08;&#x4F8B;&#x5982; &quot;<code>#</code>&quot;&#xFF09;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x89E3;&#x7801;&#x4E00;&#x4E2A;&#x897F;&#x91CC;&#x5C14;&#x5B57;&#x6BCD;&#xFF08;Cyrillic&#xFF09;URL">&#x89E3;&#x7801;&#x4E00;&#x4E2A;&#x897F;&#x91CC;&#x5C14;&#x5B57;&#x6BCD;&#xFF08;Cyrillic&#xFF09;URL</h3>

<pre class="brush: js">decodeURI(&quot;https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B&quot;);
// &quot;https://developer.mozilla.org/ru/docs/JavaScript_&#x448;&#x435;&#x43B;&#x43B;&#x44B;&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3.1" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">decodeURI</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-decodeuri-encodeduri" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">decodeURI</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-decodeuri-encodeduri" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">decodeURI</small></a></td>
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
 <li><a title="decodeURIComponent() &#x65B9;&#x6CD5;&#x7528;&#x4E8E;&#x89E3;&#x7801;&#x7531; encodeURIComponent &#x65B9;&#x6CD5;&#x6216;&#x8005;&#x5176;&#x5B83;&#x7C7B;&#x4F3C;&#x65B9;&#x6CD5;&#x7F16;&#x7801;&#x7684;&#x90E8;&#x5206;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent"><code>decodeURIComponent</code></a></li>
 <li><a title="encodeURI() &#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;1&#x5230;4&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;&#x4EE3;&#x7406;&#x5B57;&#x7B26;&#x533A;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"><code>encodeURI</code></a></li>
 <li><a title="encodeURIComponent()&#x662F;&#x5BF9;&#x7EDF;&#x4E00;&#x8D44;&#x6E90;&#x6807;&#x8BC6;&#x7B26;&#xFF08;URI&#xFF09;&#x7684;&#x7EC4;&#x6210;&#x90E8;&#x5206;&#x8FDB;&#x884C;&#x7F16;&#x7801;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5B83;&#x4F7F;&#x7528;&#x4E00;&#x5230;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#x6765;&#x8868;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x7684;UTF-8&#x7F16;&#x7801;&#xFF08;&#x53EA;&#x6709;&#x7531;&#x4E24;&#x4E2A;Unicode&#x4EE3;&#x7406;&#x533A;&#x5B57;&#x7B26;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x624D;&#x7528;&#x56DB;&#x4E2A;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7F16;&#x7801;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"><code>encodeURIComponent</code></a></li>
</ul>
                  
                
              