
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section><div class="notice experimental"> 
    <p><span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span> <strong>&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x4E2D;&#x7684;&#x529F;&#x80FD;</strong><br>&#x6B64;&#x529F;&#x80FD;&#x67D0;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x5C1A;&#x5728;&#x5F00;&#x53D1;&#x4E2D;&#xFF0C;&#x8BF7;&#x53C2;&#x8003;<a href="#Browser_compatibility">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x8868;&#x683C;</a>&#x4EE5;&#x5F97;&#x5230;&#x5728;&#x4E0D;&#x540C;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x9002;&#x5408;&#x4F7F;&#x7528;&#x7684;&#x524D;&#x7F00;&#x3002;&#x7531;&#x4E8E;&#x8BE5;&#x529F;&#x80FD;&#x5BF9;&#x5E94;&#x7684;&#x6807;&#x51C6;&#x6587;&#x6863;&#x53EF;&#x80FD;&#x88AB;&#x91CD;&#x65B0;&#x4FEE;&#x8BA2;&#xFF0C;&#x6240;&#x4EE5;&#x5728;&#x672A;&#x6765;&#x7248;&#x672C;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x8BE5;&#x529F;&#x80FD;&#x7684;&#x8BED;&#x6CD5;&#x548C;&#x884C;&#x4E3A;&#x53EF;&#x80FD;&#x968F;&#x4E4B;&#x6539;&#x53D8;&#x3002;</p> 
</div></div>

<p><strong><code>padEnd()</code></strong> &#x65B9;&#x6CD5;&#x4F1A;&#x7528;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x586B;&#x5145;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5728;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5C3E;&#x90E8;&#x4E0D;&#x65AD;&#x586B;&#x5145;&#xFF0C;&#x76F4;&#x5230;&#x5B83;&#x8FBE;&#x5230;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x76EE;&#x6807;&#x957F;&#x5EA6;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><var>str</var>.padEnd(<var>targetLength</var> [, <var>padString</var>])</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>targetLength</code></dt>
 <dd>&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x9700;&#x8981;&#x586B;&#x5145;&#x5230;&#x7684;&#x76EE;&#x6807;&#x957F;&#x5EA6;&#x3002;&#x5982;&#x679C;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x539F;&#x672C;&#x5C31;&#x8FBE;&#x5230;&#x4E86;&#x8BE5;&#x957F;&#x5EA6;&#xFF0C;&#x90A3;&#x4E48;&#x8BE5;&#x65B9;&#x6CD5;&#x4EC0;&#x4E48;&#x90FD;&#x4E0D;&#x4F1A;&#x505A;&#xFF0C;&#x76F4;&#x63A5;&#x8FD4;&#x56DE;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><code>padString</code> <span class="inlineIndicator optional optionalInline">&#x53EF;&#x9009;</span></dt>
 <dd>&#x586B;&#x5145;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5982;&#x679C;&#x5728;&#x586B;&#x5145;&#x8FC7;&#x7A0B;&#x4E2D;&#x53D1;&#x73B0;&#x7528;&#x4E0D;&#x5B8C;&#x8FD9;&#x4E00;&#x6574;&#x4E2A;&#x586B;&#x5145;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5219;&#x4F18;&#x5148;&#x7528;&#x5DE6;&#x4FA7;&#x90E8;&#x5206;&#xFF0C;&#x80FD;&#x7528;&#x591A;&#x5C11;&#x7528;&#x591A;&#x5C11;&#x3002;&#x8BE5;&#x53C2;&#x6570;&#x4E3A;&#x53EF;&#x9009;&#x53C2;&#x6570;&#xFF0C;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A;&#x7A7A;&#x683C;&#xA0;&quot; &quot; (U+0020).</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x5C3E;&#x90E8;&#x586B;&#x5145;&#x6307;&#x5B9A;&#x7684;&#x586B;&#x5145;&#x5B57;&#x7B26;&#x4E32;&#x76F4;&#x5230;&#x76EE;&#x6807;&#x957F;&#x5EA6;&#x6240;&#x5F62;&#x6210;&#x7684;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">&apos;abc&apos;.padEnd(10);         // &quot;abc&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; &quot;
&apos;abc&apos;.padEnd(10, &quot;foo&quot;);  // &quot;abcfoofoof&quot;
&apos;abc&apos;.padEnd(6,&quot;123465&quot;); // &quot;abc123&quot;
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p> &#x8BE5;&#x65B9;&#x6CD5;&#x76EE;&#x524D;&#x4ECD;&#x662F; ECMAScript&#xA0;<a href="https://github.com/tc39/proposal-string-pad-start-end" class="external">&#x63D0;&#x6848;</a>&#xFF0C;&#x8FD8;&#x6CA1;&#x6709;&#x6700;&#x7EC8;&#x8FDB;&#x5165;&#xA0;ECMAScript &#x89C4;&#x8303;&#x3002;</p>

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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span>&#xA0;</td>
   <td><a title="Released on 2016-08-02." href="/en-US/Firefox/Releases/48">48</a> (48)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
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
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>48.0 (48)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>
                  
                
              