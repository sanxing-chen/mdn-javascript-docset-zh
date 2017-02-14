
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>toLocaleLowerCase()</code></strong>&#x65B9;&#x6CD5;&#x6839;&#x636E;&#x4EFB;&#x4F55;&#x7279;&#x5B9A;&#x4E8E;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x6848;&#x4F8B;&#x6620;&#x5C04;&#xFF0C;&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x5C0F;&#x5199;&#x7684;&#x503C;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><var>str</var>.toLocaleLowerCase()</code></pre>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x6839;&#x636E;&#x4EFB;&#x4F55;&#x7279;&#x5B9A;&#x4E8E;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x7684;&#x6848;&#x4F8B;&#x6620;&#x5C04;&#xFF0C;&#x5C06;&#x8868;&#x793A;&#x8C03;&#x7528;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x4E3A;&#x5C0F;&#x5199;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>toLocaleLowerCase()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x5C0F;&#x5199;&#x4E4B;&#x540E;&#x7684;&#x503C;&#xFF0C;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#x6839;&#x636E;&#x4EFB;&#x4F55;&#x672C;&#x5730;&#x5316;&#x7279;&#x5B9A;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;</code><strong><code>&#x3002;</code></strong><code>toLocaleLowerCase()&#x5E76;&#x4E0D;&#x4F1A;&#x5F71;&#x54CD;&#x5B57;&#x7B26;&#x4E32;&#x81EA;&#x8EAB;&#x7684;&#x503C;&#x3002;&#x5728;&#x5927;&#x591A;&#x6570;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4EA7;&#x751F;&#x7684;&#x7ED3;&#x679C;&#x548C;&#x8C03;&#x7528;</code><a title="toLowerCase()&#xA0;&#x4F1A;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x4E3A;&#x5C0F;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>toLowerCase()</code></a>&#x7684;&#x7ED3;&#x679C;&#x76F8;&#x540C;&#xFF0C;&#x4F46;&#x662F;&#x5728;&#x67D0;&#x4E9B;&#x672C;&#x5730;&#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x6BD4;&#x5982;&#x571F;&#x8033;&#x5176;&#x8BED;&#xFF0C;&#x5B83;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;&#x5E76;&#x4E0D;&#x9075;&#x5FAA;&#x5728;Unicode&#x4E2D;&#x7684;&#x9ED8;&#x8BA4;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;&#xFF0C;&#x56E0;&#x6B64;&#x4F1A;&#x6709;&#x4E00;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002;</p>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x4F7F;&#x7528;toLocaleLowerCase()"><code><font face="Open Sans, Arial, sans-serif">&#x4F7F;&#x7528;</font>toLocaleLowerCase()</code></h3>

<pre class="brush: js">console.log(&apos;ALPHABET&apos;.toLocaleLowerCase()); 
// &apos;alphabet&apos;

console.log(&apos;&#x4E2D;&#x6587;&#x7B80;&#x4F53; zh-CN || zh-Hans&apos;.toLocaleLowerCase());
// &apos;&#x4E2D;&#x6587;&#x7B80;&#x4F53; zh-cn || zh-hans&apos;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" class="external" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" title="ECMAScript 3rd Edition (ECMA-262)">ECMAScript 3rd Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>
    <p>&#xA0;</p>

    <p>&#x539F;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728;JavaScript1.2&#x4E2D;&#x5B9E;&#x73B0;&#x3002;</p>
   </td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.17" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.toLocaleLowerCase</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.tolocalelowercase" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.toLocaleLowerCase</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
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

<h2 id="&#x53C2;&#x9605;">&#x53C2;&#x9605;</h2>

<ul>
 <li><a title="toLocaleUpperCase()&#xA0;&#x4F7F;&#x7528;&#x672C;&#x5730;&#x5316;&#xFF08;locale-specific&#xFF09;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;&#x89C4;&#x5219;&#x5C06;&#x8F93;&#x5165;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x5316;&#x6210;&#x5927;&#x5199;&#x5F62;&#x5F0F;&#x5E76;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase"><code>String.prototype.toLocaleUpperCase()</code></a></li>
 <li><a title="toLowerCase()&#xA0;&#x4F1A;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x4E3A;&#x5C0F;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>String.prototype.toLowerCase()</code></a></li>
 <li><a title="toUpperCase()&#xA0;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x5927;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"><code>String.prototype.toUpperCase()</code></a></li>
</ul>
                  
                
              