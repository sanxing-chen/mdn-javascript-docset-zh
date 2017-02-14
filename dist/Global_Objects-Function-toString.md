
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>
<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>
<p>&#x8BE5;&#xA0;<code>toString()</code> &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x5F53;&#x524D;&#x51FD;&#x6570;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>
<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>
<pre class="syntaxbox">function.toString(indentation)</pre>
<h3 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h3>
<dl>
 <dt>
  indentation <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span> <span class="inlineIndicator obsolete obsoleteInline" title="(Firefox 17 / Thunderbird 17 / SeaMonkey 2.14)">&#x5DF2;&#x5E9F;&#x5F03; Gecko 17</span></dt>
 <dd>
  &#x4E00;&#x4E2A;&#x6574;&#x6570;&#xFF0C;&#x8868;&#x793A;&#x53CD;&#x7F16;&#x8BD1;&#x540E;&#x7684;&#x51FD;&#x6570;&#x6E90;&#x4EE3;&#x7801;&#x5E94;&#x8BE5;&#x589E;&#x52A0;&#x51E0;&#x4E2A;&#x7A7A;&#x683C;&#x4F5C;&#x4E3A;&#x989D;&#x5916;&#x7684;&#x7F29;&#x8FDB;&#x3002;0&#x4E3A;&#x9ED8;&#x8BA4;&#x503C;&#xFF0C;&#x8868;&#x793A;&#x4E0D;&#x589E;&#x52A0;&#x4EFB;&#x4F55;&#x989D;&#x5916;&#x7F29;&#x8FDB;&#xFF0C;<code>-1&#x6216;&#x8005;&#x5176;&#x4ED6;&#x8D1F;&#x6574;&#x6570;&#x4F1A;&#x8BA9;&#x6574;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x65E0;&#x4EFB;&#x4F55;&#x7F29;&#x8FDB;&#x3002;</code></dd>
</dl>
<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>
<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" title="Function&#xA0;&#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Function&#xA0;&#x5BF9;&#x8C61;. &#x5728;JavaScript&#x4E2D;&#x6BCF;&#x4E2A;&#x51FD;&#x6570;(function)&#x5B9E;&#x9645;&#x662F;&#x4E00;&#x4E2A;Function&#x5BF9;&#x8C61;."><code>Function</code></a> &#x5BF9;&#x8C61;&#x8986;&#x76D6;&#x4E86;&#x4ECE; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" title="Object &#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#xFF08;object wrapper&#xFF09;&#x3002;"><code>Object</code></a>&#xA0;&#x7EE7;&#x627F;&#x6765;&#x7684;&#xA0;<code>Object.prototype.toString &#x65B9;&#x6CD5;&#x3002;</code>&#x51FD;&#x6570;&#x7684;&#xA0;<code>toString &#x65B9;&#x6CD5;</code>&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x51FD;&#x6570;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5177;&#x4F53;&#x6765;&#x8BF4;&#xFF0C;&#x5305;&#x62EC;&#xA0;<code>function</code>&#x5173;&#x952E;&#x5B57;&#xFF0C;&#x5F62;&#x53C2;&#x5217;&#x8868;&#xFF0C;&#x5927;&#x62EC;&#x53F7;&#xFF0C;&#x4EE5;&#x53CA;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x7684;&#x5185;&#x5BB9;&#x3002;</p>
<p>&#x5728;&#x51FD;&#x6570;&#x9700;&#x8981;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x65F6;&#xFF0C;&#x901A;&#x5E38;&#x4F1A;&#x81EA;&#x52A8;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x7684;&#xA0;<code>toString </code>&#x65B9;&#x6CD5;&#x3002;</p>
<h2 id=".E8.A7.84.E8.8C.83" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.1.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.2" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function.prototype.toString</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function.prototype.tostring" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Function.prototype.toString</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>
<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
<p><span style="line-height: 1.5;"></span></p><div class="htab"> 
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
    <th style="line-height: 16px;">Feature</th>
    <th style="line-height: 16px;">Chrome</th>
    <th style="line-height: 16px;">Firefox (Gecko)</th>
    <th style="line-height: 16px;">Internet Explorer</th>
    <th style="line-height: 16px;">Opera</th>
    <th style="line-height: 16px;">Safari</th>
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
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
    <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span><br>
     &#xA0;</td>
   </tr>
  </tbody>
 </table>
</div>
<p><span style="font-size: 1.714285714285714rem; letter-spacing: -0.5px; line-height: 24px;">&#x9644;&#x6CE8;</span></p>
<p>&#x4ECE;Firefox 17&#x5F00;&#x59CB;&#xFF0C;<code>Function.prototype.toString()</code><span id="summary_alias_container"><span id="short_desc_nonedit_display">&#x901A;&#x8FC7;&#x4FDD;&#x5B58;&#x51FD;&#x6570;&#x6E90;&#x7801;</span></span><span id="summary_alias_container"><span id="short_desc_nonedit_display">&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x5B9E;&#x73B0;&#xFF0C;</span></span>&#x800C;&#x4E4B;&#x524D;&#x662F;&#x901A;&#x8FC7;&#x53CD;&#x7F16;&#x8BD1;&#x5668;&#x53CD;&#x7F16;&#x8BD1;&#x51FD;&#x6570;&#x5B57;&#x8282;&#x7801;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x5B9E;&#x73B0;&#x3002;&#x53CD;&#x7F16;&#x8BD1;&#x5668;&#x5DF2;&#x7ECF;&#x88AB;&#x5220;&#x9664;&#x4E86;&#xFF0C;&#x56E0;&#x6B64;&#x8BE5;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x7684;&#x6E90;&#x7801;&#x5C06;&#x4F1A;&#x548C;&#x5B9A;&#x4E49;&#x65F6;&#x7684;&#x6E90;&#x7801;&#x5B8C;&#x5168;&#x76F8;&#x540C;(&#x5305;&#x62EC;&#x4EFB;&#x4F55;&#x7A7A;&#x767D;&#x7B26;)&#xFF0C;&#x6240;&#x4EE5;&#x6211;&#x4EEC;&#x4E0D;&#x518D;&#x9700;&#x8981;<code>indentation&#x53C2;&#x6570;&#x6765;&#x63A7;&#x5236;&#x7F29;&#x8FDB;&#x4E86;&#x3002;</code>&#x67E5;&#x770B;<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=761723" title="https://bugzilla.mozilla.org/show_bug.cgi?id=761723">https://bugzilla.mozilla.org/show_bug.cgi?id=761723</a></p>
<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;"><code>Object.prototype.toString()</code></a></li>
</ul>
<p>&#xA0;</p>
                  
                
              