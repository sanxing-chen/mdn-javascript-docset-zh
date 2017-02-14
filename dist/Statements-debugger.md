
                
                  
                    <p></p><section id="Quick_Links" class="Quick_links"><!-- --></section><p></p>

<h3 name="Summary" id="Summary">&#x6982;&#x8FF0;</h3>

<p>&#x8C03;&#x7528;&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x53EF;&#x7528;&#x7684;&#x8C03;&#x8BD5;&#x5668;,&#x5982;&#x679C;&#x6CA1;&#x6709;&#x8C03;&#x8BD5;&#x5668;&#x53EF;&#x7528;,&#x5219;&#x8BE5;&#x8BED;&#x53E5;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x6548;&#x679C;.</p>

<h3 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox" style="font-size: 14px; white-space: normal;"><code>debugger;</code></pre>

<h3 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;&#x4E00;&#x4E2A;&#x5305;&#x542B;debugger&#x8BED;&#x53E5;&#x7684;&#x51FD;&#x6570;,&#x5F53;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;,&#x4F1A;&#x5C1D;&#x8BD5;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x53EF;&#x7528;&#x7684;&#x8C03;&#x8BD5;&#x5668;&#x8FDB;&#x884C;&#x8C03;&#x8BD5;.</p>

<pre class="brush:js  language-js" style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);"><code class="language-js" style="direction: ltr; white-space: pre;"><span class="keyword token" style="color: rgb(0, 119, 170);">function</span> <span class="function token" style="color: rgb(221, 74, 104);">potentiallyBuggyCode<span class="punctuation token" style="color: rgb(153, 153, 153);">(</span></span><span class="punctuation token" style="color: rgb(153, 153, 153);">)</span> <span class="punctuation token" style="color: rgb(153, 153, 153);">{</span>
    <span class="keyword token" style="color: rgb(0, 119, 170);">debugger</span><span class="punctuation token" style="color: rgb(153, 153, 153);">;</span>
   <span class="comment token" style="color: rgb(112, 128, 144);"> // do potentially buggy stuff to examine, step through, etc.
</span><span class="punctuation token" style="color: rgb(153, 153, 153);">}</span></code></pre>

<p>&#x5F53;debugger&#x88AB;&#x8C03;&#x7528;&#x65F6;, &#x6267;&#x884C;&#x6682;&#x505C;&#x5728;&#xA0;debugger &#x8BED;&#x53E5;&#x7684;&#x4F4D;&#x7F6E;. &#x5C31;&#x50CF;&#x5728;&#x811A;&#x672C;&#x6E90;&#x4EE3;&#x7801;&#x4E2D;&#x7684;&#x65AD;&#x70B9;&#x4E00;&#x6837;.</p>

<p><a href="https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png" class="external"><img src="https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png" style="height: 371px; width: 700px;" alt="Paused at a debugger statement."></a></p>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-debugger-statement" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Debugger statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.15" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Debugger statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-7.5.3" class="external" lang="en" hreflang="en">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">Debugger statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-7.4.3" class="external" lang="en" hreflang="en">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">Debugger statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Only mentioned as reserved word.</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>

<div id="compat-desktop">
<table class="compat-table" style="border-color: transparent;">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
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
<table class="compat-table" style="border-color: transparent;">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
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

<h2 name="See_also" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Debugging_JavaScript">JavaScript&#x8C03;&#x8BD5;</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger">&#x5728;&#x706B;&#x72D0;&#x5F00;&#x53D1;&#x8005;&#x5DE5;&#x5177;&#x4E2D;&#x8C03;&#x8BD5;</a></li>
</ul>
                  
                
              