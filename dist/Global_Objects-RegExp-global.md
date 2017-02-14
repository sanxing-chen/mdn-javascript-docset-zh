
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>global</strong></code> &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;<code>g</code>&quot; &#x6807;&#x5FD7;&#x3002;<code>global</code> &#x662F;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;</p>
<div>
 <table class="standard-table"> 
  <thead> 
    <tr> 
      <th class="header" colspan="2"><code>RegExp.prototype.global</code> &#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x7279;&#x6027;&#xFF1A;</th> 
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>writable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>enumerable</td> 
      <td>false</td> 
    </tr> 
    <tr> 
      <td>configurable</td> 
      <td>false</td> 
    </tr> 
  </tbody> 
</table></div>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><code>global</code>&#xA0;&#x7684;&#x503C;&#x662F;&#x5E03;&#x5C14;&#x5BF9;&#x8C61;&#xFF0C;&#x5982;&#x679C;&#x4F7F;&#x7528;&#x4E86; &quot;<code>g</code>&quot; &#x6807;&#x5FD7;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <code>true</code>&#xFF1B;&#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002; &quot;<code>g</code>&quot; &#x6807;&#x5FD7;&#x610F;&#x5473;&#x7740;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5E94;&#x8BE5;&#x6D4B;&#x8BD5;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6240;&#x6709;&#x53EF;&#x80FD;&#x7684;&#x5339;&#x914D;&#x3002;</p>
<p>&#x4F60;&#x65E0;&#x6CD5;&#x76F4;&#x63A5;&#x66F4;&#x6539;&#x6B64;&#x5C5E;&#x6027;&#x3002;</p>
<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>
<h3 id="Example:_Using_MIN_VALUE" name="Example:_Using_MIN_VALUE">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>global</code></h3>
<pre class="brush:js">var regex = new RegExp(&quot;foo&quot;, &quot;g&quot;)

console.log(regex.global) // true
</pre>
<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 3rd Edition. Implemented in JavaScript 1.2.</td>
   <td>Standard</td>
   <td>Initial definition.<br>
    JavaScript 1.5: <code>global</code> is a property of a <code>RegExp</code> instance, not the <code>RegExp</code> object.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.7.2" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.global</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.global" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">RegExp.prototype.global</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td><code>global</code> is now a prototype accessor property rather than an instance&apos;s own data property.</td>
  </tr>
 </tbody>
</table>
<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
<p></p><div class="htab"> 
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a> 
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
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase" title="ignoreCase &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;i&quot; &#x6807;&#x5FD7;&#x3002;ignoreCase&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.ignoreCase</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex" title="lastIndex&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x4E00;&#x4E2A;&#x53EF;&#x8BFB;&#x53EF;&#x5199;&#x7684;&#x6574;&#x578B;&#x5C5E;&#x6027;&#xFF0C;&#x7528;&#x6765;&#x6307;&#x5B9A;&#x4E0B;&#x4E00;&#x6B21;&#x5339;&#x914D;&#x7684;&#x8D77;&#x59CB;&#x7D22;&#x5F15;&#x3002;"><code>RegExp.prototype.lastIndex</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline" title="multiline &#x5C5E;&#x6027;&#x8868;&#x660E;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x4F7F;&#x7528;&#x4E86; &quot;m&quot; &#x6807;&#x5FD7;&#x3002;multiline&#xA0;&#x662F;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B9E;&#x4F8B;&#x7684;&#x4E00;&#x4E2A;&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#x3002;"><code>RegExp.prototype.multiline</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" title="source &#x5C5E;&#x6027;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x503C;&#x4E3A;&#x5F53;&#x524D;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5BF9;&#x8C61;&#x7684;&#x6A21;&#x5F0F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x4F1A;&#x5305;&#x542B;&#x6B63;&#x5219;&#x5B57;&#x9762;&#x91CF;&#x4E24;&#x8FB9;&#x7684;&#x659C;&#x6760;&#x4EE5;&#x53CA;&#x4EFB;&#x4F55;&#x7684;&#x6807;&#x5FD7;&#x5B57;&#x7B26;&#x3002;"><code>RegExp.prototype.source</code></a></li>
 <li><a class="new" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>RegExp.prototype.sticky</code></a></li>
</ul>
                  
                
              