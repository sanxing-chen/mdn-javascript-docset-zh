
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>
<h2 name="Summary" id="Summary">Summary</h2>
<p>The <code><strong>toGMTString()</strong></code> method converts a date to a string, using Internet GMT conventions. The exact format of the value returned by <code>toGMTString</code> varies according to the platform and browser, in general it should represent a human readable date string.</p>
<p><strong>Note</strong>: <code>toGMTString</code> is deprecated and should no longer be used, it&apos;s only there for backwards compatibility, use <a title="toUTCString()&#xA0;&#x65B9;&#x6CD5;&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;UTC&#x65F6;&#x533A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString"><code>toUTCString()</code></a> instead.</p>
<h2 name="Syntax" id="Syntax">Syntax</h2>
<pre class="syntaxbox"><var>dateObj</var>.toGMTString()</pre>
<h2 name="Examples" id="Examples">Examples</h2>
<h3 name="Example:_Using_toGMTString" id="Example:_Using_toGMTString">Example: Using <code>toGMTString</code></h3>
<p>In this example, the <code>toGMTString</code> method converts the date to GMT (UTC) using the operating system&apos;s time-zone offset and returns a string value that is similar to the following form. The exact format depends on the platform.</p>
<pre class="brush: js">var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
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
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition, but already declared as deprecated.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.6" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.toGMTString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (informative) compatibility annex.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.togmtstring" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.toGMTString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in the (normative) annex for additional features for web browsers.</td>
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
<h2 name="See_Also" id="See_Also">See also</h2>
<ul>
 <li><a title="toLocaleDateString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65E5;&#x671F;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x56E0;&#x4E0D;&#x540C;&#x8BED;&#x8A00;&#x800C;&#x4E0D;&#x540C;&#x3002;&#x65B0;&#x589E;&#x7684;&#x53C2;&#x6570;&#xA0;locales&#xA0;&#x548C;&#xA0;options &#x4F7F;&#x7A0B;&#x5E8F;&#x80FD;&#x591F;&#x6307;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#x5316;&#x89C4;&#x5219;&#xFF0C;&#x5141;&#x8BB8;&#x5B9A;&#x5236;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x8868;&#x73B0;&#xFF08;behavior&#xFF09;&#x3002;&#x5728;&#x65E7;&#x7248;&#x672C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#xA0;locales &#x548C; options &#x53C2;&#x6570;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x4F7F;&#x7528;&#x7684;&#x8BED;&#x8A00;&#x73AF;&#x5883;&#x548C;&#x8FD4;&#x56DE;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x683C;&#x5F0F;&#x662F;&#x5404;&#x81EA;&#x72EC;&#x7ACB;&#x5B9E;&#x73B0;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><code>Date.prototype.toLocaleDateString()</code></a></li>
 <li><a title="toTimeString()&#xA0;&#x65B9;&#x6CD5;&#x4EE5;&#x4EBA;&#x7C7B;&#x6613;&#x8BFB;&#x5F62;&#x5F0F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x65F6;&#x95F4;&#x90E8;&#x5206;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4EE5;&#x7F8E;&#x5F0F;&#x82F1;&#x8BED;&#x683C;&#x5F0F;&#x5316;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString"><code>Date.prototype.toTimeString()</code></a></li>
 <li><a title="toUTCString()&#xA0;&#x65B9;&#x6CD5;&#x628A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x8F6C;&#x6362;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;UTC&#x65F6;&#x533A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString"><code>Date.prototype.toUTCString()</code></a></li>
</ul>
                  
                
              