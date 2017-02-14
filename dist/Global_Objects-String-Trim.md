
                
                  
                    <div>
<div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>
</div>

<p><strong><code>trim() </code></strong>&#x65B9;&#x6CD5;&#x4F1A;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x7AEF;&#x7684;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#x3002;&#x5728;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x91CC;&#x7684;&#x7A7A;&#x683C;&#x5305;&#x62EC;&#x6240;&#x6709;&#x7684;&#x7A7A;&#x683C;&#x5B57;&#x7B26;&#xA0;(space, tab, no-break space &#x7B49;)&#x4EE5;&#x53CA;&#x6240;&#x6709;&#x7684;&#x884C;&#x7ED3;&#x675F;&#x7B26;&#xFF08;&#x5982; LF&#xFF0C;CR&#xFF09;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>str</em>.trim()</code></pre>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>trim()&#xA0;&#x65B9;&#x6CD5;</code>&#x5E76;&#x4E0D;&#x5F71;&#x54CD;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x672C;&#x8EAB;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x7684;&#x662F;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_toLowerCase" id="Example:_Using_toLowerCase">&#x4F7F;&#x7528;&#xA0;<code>trim()</code></h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#x5C06;&#x663E;&#x793A;&#x5C0F;&#x5199;&#x7684;&#x5B57;&#x7B26;&#x4E32; &apos;foo&apos;:</p>

<pre class="brush: js">var orig = &apos;   foo  &apos;;
console.log(orig.trim()); // &apos;foo&apos;

// &#x53E6;&#x4E00;&#x4E2A;.trim()&#x4F8B;&#x5B50;&#xFF0C;&#x53EA;&#x4ECE;&#x4E00;&#x8FB9;&#x5220;&#x9664;

var orig = &apos;foo    &apos;;
console.log(orig.trim()); // &apos;foo&apos;
</pre>

<h2 id="&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;">&#x517C;&#x5BB9;&#x65E7;&#x73AF;&#x5883;</h2>

<p><code>&#x5982;&#x679C; trim()</code> &#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x6240;&#x6709;&#x4EE3;&#x7801;&#x524D;&#x6267;&#x884C;&#x4E0B;&#x9762;&#x4EE3;&#x7801;</p>

<pre class="brush: js">if (!String.prototype.trim) {
&#xA0; String.prototype.trim = function () {
&#xA0;   return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, &apos;&apos;);
  };
}
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
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.4.20" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String.prototype.trim</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.8.1.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.trim" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String.prototype.trim</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-string.prototype.trim" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">String.prototype.trim</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 name="Browser_compatibility" id="Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th>Firefox (Gecko)</th>
   <th>Chrome</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><a title="Released on 2009-06-30." href="/en-US/Firefox/Releases/3.5">3.5</a> (1.9.1)</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td>9</td>
   <td>10.5</td>
   <td>5</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>Android</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x79FB;&#x9664;&#x5B57;&#x7B26;&#x4E32;&#x5DE6;&#x7AEF;&#x7684;&#x8FDE;&#x7EED;&#x7A7A;&#x767D;&#x7B26;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft"><code>String.prototype.trimLeft()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
 <li><a title="&#x79FB;&#x9664;&#x5B57;&#x7B26;&#x4E32;&#x53F3;&#x7AEF;&#x7684;&#x8FDE;&#x7EED;&#x7A7A;&#x767D;&#x7B26;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight"><code>String.prototype.trimRight()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></li>
</ul>
                  
                
              