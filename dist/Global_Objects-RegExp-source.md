
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong><code>source</code></strong> &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4F1A;&#x5305;&#x542B;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E24;&#x8FB9;&#x7684;&#x659C;&#x6760;&#x4EE5;&#x53CA;&#x4EFB;&#x4F55;&#x7684;&#x6807;&#x5FD7;&#x5B57;&#x7B26;&#x3002;</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">var regex = /fooBar/ig;

console.log(regex.source); // &quot;fooBar&quot;&#xFF0C;&#x4E0D;&#x5305;&#x542B; /.../ &#x548C; &quot;ig&quot;&#x3002;
</pre>

<h2 id="Specifications" name="Specifications">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition.</td>
   <td>Standard</td>
   <td><code>source</code>&#xA0;&#x662F;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x81EA;&#x8EAB;&#x7684;&#x6570;&#x636E;&#x5C5E;&#x6027;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.7.1" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.source</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.source" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.source</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td><code>source</code>&#xA0;&#x6210;&#x4E3A;&#x4E86;&#x6B63;&#x5219;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x4E0A;&#x7684;&#x4E00;&#x4E2A;&#x8BBF;&#x95EE;&#x5668;&#x5C5E;&#x6027;</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
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
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.prototype.flags</code></a></li>
</ul>
                  
                
              