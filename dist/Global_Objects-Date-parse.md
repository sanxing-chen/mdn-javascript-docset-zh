
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 name="Summary" id="Summary">&#x6982;&#x8981;</h2>

<p><code><strong>Date.parse()</strong></code> &#x65B9;&#x6CD5;&#x89E3;&#x6790;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x67D0;&#x4E2A;&#x65E5;&#x671F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4ECE;1970-1-1 00:00:00 UTC &#x5230;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#xFF08;&#x8BE5;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#x7684;UTC&#x65F6;&#x95F4;&#xFF09;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#xFF0C;&#x5982;&#x679C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x65E0;&#x6CD5;&#x8BC6;&#x522B;&#xFF0C;&#x6216;&#x8005;&#x4E00;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x5305;&#x542B;&#x4E86;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x65E5;&#x671F;&#x6570;&#x503C;&#xFF08;&#x5982;&#xFF1A;2015-02-31&#xFF09;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#x503C;&#x4E3A;NaN&#x3002;</p>

<p>&#x4E0D;&#x63A8;&#x8350;&#x5728;ES5&#x4E4B;&#x524D;&#x4F7F;&#x7528;Date.parse&#x65B9;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x89E3;&#x6790;&#x5B8C;&#x5168;&#x53D6;&#x51B3;&#x4E8E;&#x5B9E;&#x73B0;&#x3002;&#x76F4;&#x5230;&#x81F3;&#x4ECA;&#xFF0C;&#x4E0D;&#x540C;&#x5BBF;&#x4E3B;&#x5728;&#x5982;&#x4F55;&#x89E3;&#x6790;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#x4E0A;&#x4ECD;&#x5B58;&#x5728;&#x8BB8;&#x591A;&#x5DEE;&#x5F02;&#xFF0C;&#x56E0;&#x6B64;&#x6700;&#x597D;&#x8FD8;&#x662F;&#x624B;&#x52A8;&#x89E3;&#x6790;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x5728;&#x9700;&#x8981;&#x9002;&#x5E94;&#x4E0D;&#x540C;&#x683C;&#x5F0F;&#x65F6;&#x5E93;&#x80FD;&#x8D77;&#x5230;&#x5F88;&#x5927;&#x5E2E;&#x52A9;&#xFF09;&#x3002; &#xA0; &#xA0;&#xA0;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p>&#x663E;&#x793A;&#x8C03;&#x7528;&#xFF1A;</p>

<pre class="syntaxbox"><code>Date.parse(dateString)</code></pre>

<p><code>&#x9690;&#x5F0F;&#x8C03;&#x7528;&#xFF1A;</code></p>

<pre class="syntaxbox"><code>new Date(<var>dateString</var>)</code>
</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>dateString</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x7B26;&#x5408;&#xA0;<a title="http://tools.ietf.org/html/rfc2822#page-14" href="http://tools.ietf.org/html/rfc2822#page-14" class="external">RFC2822</a>&#xA0;&#x6216; ISO 8601 &#x65E5;&#x671F;&#x683C;&#x5F0F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x5176;&#x4ED6;&#x683C;&#x5F0F;&#x4E5F;&#x8BB8;&#x4E5F;&#x652F;&#x6301;&#xFF0C;&#x4F46;&#x7ED3;&#x679C;&#x53EF;&#x80FD;&#x4E0E;&#x9884;&#x671F;&#x4E0D;&#x7B26;&#xFF09;&#x3002;</dd>
 <dt><code>&#x8FD4;&#x56DE;&#x503C;</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x4ECE;1970-1-1 00:00:00 UTC&#x5230;&#x7ED9;&#x5B9A;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#x6240;&#x8868;&#x793A;&#x65F6;&#x95F4;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x7684;&#x6570;&#x503C;&#x3002;&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E0D;&#x80FD;&#x89E3;&#x6790;&#x4E3A;&#x4E00;&#x4E2A;&#x6709;&#x6548;&#x7684;&#x65E5;&#x671F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code>parse</code> &#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#xFF08;&#x4F8B;&#x5982; &quot;<code>Dec 25, 1995</code>&quot;&#xFF09;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4ECE;1970-1-1 00:00:00 UTC&#x5230;&#x8BE5;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#x6240;&#x8868;&#x793A;&#x65E5;&#x671F;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x5728;&#x57FA;&#x4E8E;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8BBE;&#x7F6E;&#x65E5;&#x671F;&#x503C;&#x65F6;&#x5F88;&#x6709;&#x7528;&#xFF0C;&#x4F8B;&#x5982;&#x7ED3;&#x5408;&#x4F7F;&#x7528;<a title="setTime() &#x65B9;&#x6CD5;&#x4EE5;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x4ECE;1970-1-1 00:00:00 UTC&#x8BA1;&#x65F6;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x4E3A;&#x6765;&#x4E3A;&#xA0;Date &#x5BF9;&#x8C61;&#x8BBE;&#x7F6E;&#x65F6;&#x95F4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime"><code>setTime()</code></a> &#x65B9;&#x6CD5;&#x548C; <a title="&#x521B;&#x5EFA;&#xA0;Date &#x5B9E;&#x4F8B;&#x7528;&#x6765;&#x5904;&#x7406;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#x3002;Date &#x5BF9;&#x8C61;&#x57FA;&#x4E8E;1970&#x5E74;1&#x6708;1&#x65E5;&#xFF08;&#x4E16;&#x754C;&#x6807;&#x51C6;&#x65F6;&#x95F4;&#xFF09;&#x8D77;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date()</code></a> &#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</p>

<p><code>parse</code> &#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x65F6;&#x95F4;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8FD4;&#x56DE;&#x76F8;&#x5E94;&#x7684;&#x65F6;&#x95F4;&#x503C;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x63A5;&#x53D7;&#x7B26;&#x5408; RFC2822 / IETF &#x65E5;&#x671F;&#x8BED;&#x6CD5; (<a title="http://tools.ietf.org/html/rfc2822#page-14" href="http://tools.ietf.org/html/rfc2822#page-14" class="external">RFC2822 Section 3.3</a>) &#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5982; &quot;<code>Mon, 25 Dec 1995 13:30:00 GMT</code>&quot;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x80FD;&#x591F;&#x7406;&#x89E3;&#x7F8E;&#x56FD;&#x5927;&#x9646;&#x65F6;&#x533A;&#x7684;&#x7F29;&#x5199;&#xFF0C;&#x4F46;&#x662F;&#x4E3A;&#x4E86;&#x66F4;&#x901A;&#x7528;&#xFF0C;&#x5E94;&#x8BE5;&#x4F7F;&#x7528;&#x65F6;&#x533A;&#x504F;&#x79FB;&#xFF0C;&#x5982; &quot;<code>Mon, 25 Dec 1995 13:30:00 +0430</code>&quot; &#xFF08;&#x683C;&#x6797;&#x5A01;&#x6CBB;&#x7684;&#x5B50;&#x5348;&#x7EBF;&#x5411;&#x4E1C;&#x504F;&#x79FB;4&#x5C0F;&#x65F6;30&#x5206;&#x949F;&#xFF09;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x65F6;&#x533A;&#xFF0C;&#x9ED8;&#x8BA4;&#x4F7F;&#x7528;&#x672C;&#x5730;&#x65F6;&#x533A;&#x3002;</p>

<p>GMT &#x548C; UTC &#x88AB;&#x770B;&#x4F5C;&#x76F8;&#x7B49;&#x3002; &#x5982;&#x679C; <a title="http://tools.ietf.org/html/rfc2822#page-14" href="http://tools.ietf.org/html/rfc2822#page-14" class="external">RFC2822 Section 3.3</a> &#x683C;&#x5F0F;&#x4E2D;&#x4E0D;&#x5305;&#x542B;&#x65F6;&#x533A;&#x4FE1;&#x606F;&#x65F6;&#xFF0C;&#x4F1A;&#x4EE5;&#x672C;&#x5730;&#x65F6;&#x533A;&#x6765;&#x89E3;&#x6790;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<p>&#x7531;&#x4E8E;&#x5728;&#x89E3;&#x6790;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#x65F6;&#x5B58;&#x5728;&#x504F;&#x5DEE;&#x4F1A;&#x5BFC;&#x81F4;&#x7ED3;&#x679C;&#x4E0D;&#x4E00;&#x81F4;&#xFF0C;&#x56E0;&#x6B64;&#x63A8;&#x8350;&#x59CB;&#x7EC8;&#x624B;&#x52A8;&#x89E3;&#x6790;&#x65E5;&#x671F;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x7279;&#x522B;&#x662F;&#x4E0D;&#x540C;&#x7684;ECMAScript&#x5B9E;&#x73B0;&#x4F1A;&#x628A;&#x8BF8;&#x5982;&#x201C;2015-10-12 12:00:00&#x201D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x4E3A;NaN&#xFF0C;UTC&#x6216;&#x8005;&#x672C;&#x5730;&#x65F6;&#x95F4;&#x3002;</p>

<h3 id="ECMAScript_5_ISO-8601_&#x65E5;&#x671F;&#x683C;&#x5F0F;&#x652F;&#x6301;">ECMAScript 5 <span class="caps">ISO</span>-8601 &#x65E5;&#x671F;&#x683C;&#x5F0F;&#x652F;&#x6301;</h3>

<p>&#x53E6;&#x5916;&#xFF0C;&#x65E5;&#x671F;&#x65F6;&#x95F4;&#x5B57;&#x7B26;&#x4E32;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<a title="http://www.w3.org/TR/NOTE-datetime" href="http://www.w3.org/TR/NOTE-datetime" class="external">ISO 8601</a>&#xA0;&#x683C;&#x5F0F;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&quot;<code>2011-10-10</code>&quot; &#xFF08;&#x4EC5;&#x65E5;&#x671F;&#xFF09;&#x6216; &quot;<code>2011-10-10T14:48:00</code>&quot; &#xFF08;&#x65E5;&#x671F;&#x548C;&#x65F6;&#x95F4;&#xFF09;&#x80FD;&#x591F;&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x88AB;&#x4F20;&#x9012;&#x548C;&#x89E3;&#x6790;&#x3002;&#xA0;<span style="line-height: 1.5;">The local time zone is used to interpret arguments in&#xA0;</span><a title="http://tools.ietf.org/html/rfc2822#page-14" style="line-height: 1.5; white-space: pre-line;" href="http://tools.ietf.org/html/rfc2822#page-14" class="external-icon external">RFC2822 Section 3.3</a><span style="line-height: 1.5;">&#xA0;format that do not contain time zone information.</span></p>

<p>Note that while time zone specifiers are used during date string parsing to properly interpret the argument, they do not affect the value returned, which is always the number of milliseconds between January 1, 1970 00:00:00 UTC and the point in time represented by the argument.</p>

<p>Because <code>parse</code> is a static method of <code>Date</code>, you always use it as <code>Date.parse()</code>, rather than as a method of a <code>Date</code> object you created.</p>

<h3 name="Differences in assumed time-zone" id="Differences in assumed time-zone">Differences in assumed time-zone</h3>

<p>The dateString of &quot;<code>March 7, 2014</code>&quot; returns a different date than &quot;<code>2014-03-07</code>&quot; unless the local time-zone is UTC. When converting a dateString of &quot;<code>March 7, 2014</code>&quot; the local time-zone is assumed. When converting a dateString of &quot;<code>2014-03-07</code>&quot; the UTC time-zone is assumed. This results in two different Date values depending on the format of the string that is being converted.</p>

<h2 name="Examples" id="Examples">&#x4F8B;&#x5B50;</h2>

<h3 name="Example:_Using_parse" id="Example:_Using_parse">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>Date.parse()</code></h3>

<p>&#x5982;&#x679C; <code>IPOdate</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x65E5;&#x671F;&#x5BF9;&#x8C61;&#xFF0C;&#x5219;&#x53EF;&#x4EE5;&#x628A;&#x5176;&#x8BBE;&#x7F6E;&#x4E3A;&#x672C;&#x5730;&#x65F6;&#x95F4; 1995&#x5E74;8&#x6708;9&#x65E5;&#x3002;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js">IPOdate.setTime(Date.parse(&quot;Aug 9, 1995&quot;));
</pre>

<p>&#x5176;&#x4ED6;&#x4F8B;&#x5B50;&#xFF1A;</p>

<pre class="brush: js">// Returns 807937200000 in time zone GMT-0300, and other values in other
// timezones, since the argument does not specify a time zone.
Date.parse(&quot;Aug 9, 1995&quot;);
</pre>

<pre class="brush: js">// Returns 807926400000 no matter the local time zone.
Date.parse(&quot;Wed, 09 Aug 1995 00:00:00 GMT&quot;);
</pre>

<pre class="brush: js">// Returns 807937200000 in timezone GMT-0300, and other values in other
// timezones, since there is no time zone specifier in the argument.
Date.parse(&quot;Wed, 09 Aug 1995 00:00:00&quot;);
</pre>

<pre class="brush: js">// Returns 0 no matter the local time zone.
Date.parse(&quot;Thu, 01 Jan 1970 00:00:00 GMT&quot;);
</pre>

<pre class="brush: js">// Returns 14400000 in timezone GMT-0400, and other values in other 
// timezones, since there is no time zone specifier in the argument.
Date.parse(&quot;Thu, 01 Jan 1970 00:00:00&quot;);
</pre>

<pre class="brush: js">// Returns 14400000 no matter the local time zone.
Date.parse(&quot;Thu, 01 Jan 1970 00:00:00 GMT-0400&quot;);
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition. Implemented in JavaScript 1.0</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.4.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Date.parse</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>ISO 8601 format added</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-date.parse" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Date.parse</small></a></td>
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
  <tr>
   <td>ISO 8601 format</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><a title="Released on 2011-03-22." href="/en-US/Firefox/Releases/4">4.0</a> (2.0)</td>
   <td>9</td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>ISO 8601 format</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<div class="warning">
<p>Safari&#x6D4F;&#x89C8;&#x5668;&#x4E0D;&#x517C;&#x5BB9; &quot;2016-01-01&quot;&#x7684;&#x5199;&#x6CD5;,&#x8BF7;&#x4F7F;&#x7528; &quot;2016/01/01&quot;</p>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="Date.UTC() &#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x7684;&#x53C2;&#x6570;&#x540C;&#x65E5;&#x671F;&#x6784;&#x9020;&#x51FD;&#x6570;&#x63A5;&#x53D7;&#x6700;&#x591A;&#x53C2;&#x6570;&#x65F6;&#x4E00;&#x6837;&#xFF0C;&#x8FD4;&#x56DE;&#x4ECE;1970-1-1 00:00:00 UTC&#x5230;&#x6307;&#x5B9A;&#x65E5;&#x671F;&#x7684;&#x7684;&#x6BEB;&#x79D2;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC"><code>Date.UTC()</code></a></li>
</ul>
                  
                
              