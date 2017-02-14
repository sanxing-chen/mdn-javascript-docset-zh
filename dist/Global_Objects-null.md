
                
                  
                    <div>
 <section class="Quick_links" id="Quick_Links"><!-- --></section></div>
<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>
<p>&#x503C;&#xA0;<code>null</code>&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript <a title="&#x539F;&#x59CB;&#x503C;: Editorial review completed." href="/en-US/docs/Glossary/Primitive" class="glossaryLink">&#x539F;&#x59CB;&#x503C;</a> &#x4E4B;&#x4E00;&#x3002;</p>
<h2 style="margin-bottom: 20px; line-height: 30px;" name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>
<pre style="margin-bottom: 0px; padding: 1em; border-left-width: 6px; border-left-style: solid; font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; font-size: 14px; direction: ltr; white-space: normal; text-shadow: none; background-color: rgba(212, 221, 228, 0.498039);" class="syntaxbox  language-html"><code style="font-family: Consolas, Monaco, &apos;Andale Mono&apos;, monospace; direction: ltr; color: inherit; text-shadow: none;" class="language-html">null</code></pre>
<h2 style="margin-bottom: 20px; line-height: 30px;" name="Description" id="Description">&#x63CF;&#x8FF0;</h2>
<p><code>null</code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x9762;&#x91CF;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;<a title="/en-US/docs/JavaScript/Reference/Global_Objects/undefined" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#xA0;&#x662F;&#xFF09;&#x3002;&#x5728; APIs &#x4E2D;&#xFF0C;<code>null</code>&#xA0;&#x5E38;&#x88AB;&#x653E;&#x5728;&#x671F;&#x671B;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x4F46;&#x662F;&#x4E0D;&#x5F15;&#x7528;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x7684;&#x53C2;&#x6570;&#x4F4D;&#x7F6E;&#x3002;&#x5F53;&#x68C0;&#x6D4B; null &#x6216; undefined &#x65F6;&#xFF0C;&#x6CE8;&#x610F;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">&#x76F8;&#x7B49;&#xFF08;==&#xFF09;&#x4E0E;&#x5168;&#x7B49;&#xFF08;===&#xFF09;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x533A;&#x522B;</a>&#xA0;&#xFF08;&#x524D;&#x8005;&#x4F1A;&#x6267;&#x884C;&#x7C7B;&#x578B;&#x8F6C;&#x6362;&#xFF09;&#x3002;</p>
<pre class="brush: js">// foo does not exist, it is not defined and has never been initialized:
&gt; foo
&quot;ReferenceError: foo is not defined&quot;

// foo is known to exist now but it has no type or value:
&gt; var foo = null; foo
&quot;null&quot;</pre>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 114px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<h3 style="line-height: 24px;" id="null_&#x4E0E;_undefined_&#x7684;&#x4E0D;&#x540C;&#x70B9;&#xFF1A;"><code>null</code>&#xA0;&#x4E0E;&#xA0;<code>undefined</code> &#x7684;&#x4E0D;&#x540C;&#x70B9;&#xFF1A;</h3>
<pre class="brush: js">typeof null&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // object (bug in ECMAScript, should be null)
typeof undefined&#xA0;&#xA0; // undefined
null === undefined // false
null&#xA0; == undefined // true</pre>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;" class="line-number">
 &#xA0;</div>
<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.11" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">null value</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-null-value" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">null value</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>
<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>
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
<h2 style="margin-bottom: 20px; line-height: 30px;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>
<ul>
 <li><a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a></li>
 <li><a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a></li>
</ul>
                  
                
              