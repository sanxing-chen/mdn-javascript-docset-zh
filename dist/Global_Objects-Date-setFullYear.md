
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>
<p><code><strong>setFullYear()</strong></code> &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;</p>
<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox  language-html"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr;" class="language-html">dateObj.setFullYear(yearValue[, monthValue[, dayValue]])</code></pre>
<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  <code>yearValue</code></dt>
 <dd>
  &#x6307;&#x5B9A;&#x5E74;&#x4EFD;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x4F8B;&#x5982;1995&#x3002;</dd>
 <dt>
  <code>monthValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A;0&#x5230;11&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x4ECE;&#x4E00;&#x6708;&#x5230;&#x5341;&#x4E8C;&#x6708;&#x3002;</dd>
 <dt>
  <code>dayValue</code></dt>
 <dd>
  &#x4E00;&#x4E2A;1&#x5230;31&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x6708;&#x4EFD;&#x4E2D;&#x7684;&#x7B2C;&#x51E0;&#x5929;&#x3002;&#x5982;&#x679C;&#x4F60;&#x6307;&#x5B9A;&#x4E86;&#xA0;<code>dayValue</code> &#x53C2;&#x6570;&#xFF0C;&#x5C31;&#x5FC5;&#x987B;&#x540C;&#x65F6;&#x6307;&#x5B9A;&#xA0;<code>monthValue</code>&#x3002;</dd>
</dl>
<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#xA0;<code>monthValue</code> &#x548C;<code>dayValue</code> &#x53C2;&#x6570;&#xFF0C;&#x5C06;&#x4F1A;&#x4F7F;&#x7528;&#xA0;<code>getMonth</code> &#x548C;<code>getDate</code> &#x65B9;&#x6CD5;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;</p>
<p>&#x5982;&#x679C;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x8D85;&#x51FA;&#x4E86;&#x5408;&#x7406;&#x7684;&#x8303;&#x56F4;&#xFF0C;<code>setFullYear</code>&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x66F4;&#x65B0;&#x5176;&#x4ED6;&#x53C2;&#x6570;&#x503C;&#xFF0C;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x65E5;&#x671F;&#x503C;&#x4E5F;&#x4F1A;&#x88AB;&#x76F8;&#x5E94;&#x66F4;&#x65B0;&#x3002;&#xA0;&#x4F8B;&#x5982;&#xFF0C;&#x4E3A;&#xA0;<code>monthValue </code>&#x6307;&#x5B9A; 15&#xFF0C;&#xA0;&#x5219;&#x5E74;&#x4EFD;&#x4F1A;&#x52A0;1&#xFF0C;&#x6708;&#x4EFD;&#x503C;&#x4F1A;&#x4E3A;3&#x3002;</p>
<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>
<h3 name="Example:_Using_setFullYear" id="Example:_Using_setFullYear">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;<code>setFullYear</code>&#x65B9;&#x6CD5;</h3>
<pre style="padding: 1em 0px 1em 30px; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; text-shadow: none; direction: ltr; white-space: normal; background-color: rgba(234, 239, 242, 0.247059);" class="brush:js  language-js"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; color: inherit; text-shadow: none; direction: ltr; white-space: pre;" class="language-js"><span style="color: rgb(0, 119, 170);" class="token keyword">var</span> theBigDay <span style="color: rgb(166, 127, 89); background: rgba(255, 255, 255, 0.498039);" class="token operator">=</span> <span style="color: rgb(0, 119, 170);" class="token keyword">new</span> <span class="token class-name">Date</span><span style="color: rgb(153, 153, 153);" class="token punctuation">(</span><span style="color: rgb(153, 153, 153);" class="token punctuation">)</span><span style="color: rgb(153, 153, 153);" class="token punctuation">;</span>
theBigDay<span style="color: rgb(153, 153, 153);" class="token punctuation">.</span><span class="token function">setFullYear<span style="color: rgb(153, 153, 153);" class="token punctuation">(</span></span><span style="color: rgb(153, 0, 85);" class="token number">1997</span><span style="color: rgb(153, 153, 153);" class="token punctuation">)</span><span style="color: rgb(153, 153, 153);" class="token punctuation">;</span></code></pre>
<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.3</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.5.40" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.prototype.setFullYear</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.setfullyear" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.prototype.setFullYear</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
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
<h2 name="See_Also" id="See_Also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a title="getUTCFullYear() &#x4EE5;&#x4E16;&#x754C;&#x65F6;&#x4E3A;&#x6807;&#x51C6;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;&#x5E74;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear"><code>Date.prototype.getUTCFullYear()</code></a></li>
 <li><a title="setUTCFullYear() &#x65B9;&#x6CD5;&#x6839;&#x636E;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#x4E3A;&#x4E00;&#x4E2A;&#x5177;&#x4F53;&#x65E5;&#x671F;&#x8BBE;&#x7F6E;&#x5E74;&#x4EFD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear"><code>Date.prototype.setUTCFullYear()</code></a></li>
 <li><a title="The setYear() method sets the year for a specified date according to local time. Because setYear does not set full years (&quot;year 2000 problem&quot;), it is no longer used and has been replaced by the setFullYear method." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear"><code>Date.prototype.setYear()</code></a></li>
</ul>
                  
                
              