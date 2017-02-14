
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>for&#x8BED;&#x53E5;&#x7528;&#x4E8E;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5FAA;&#x73AF;,&#x5B83;&#x5305;&#x542B;&#x4E86;&#x4E09;&#x4E2A;&#x53EF;&#x9009;&#x7684;&#x8868;&#x8FBE;&#x5F0F;,&#x4E09;&#x4E2A;&#x53EF;&#x9009;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x5305;&#x56F4;&#x5728;&#x5706;&#x62EC;&#x53F7;&#x4E2D;&#x5E76;&#x7531;&#x5206;&#x53F7;&#x5206;&#x9694;,&#x540E;&#x9762;&#x8DDF;&#x968F;&#x4E00;&#x4E2A;&#x8BED;&#x53E5;&#x6216;&#x4E00;&#x7EC4;&#x8BED;&#x53E5;&#x5728;&#x5FAA;&#x73AF;&#x4E2D;&#x6267;&#x884C;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">for ([<em>initialization</em>]; [<em>condition</em>]; [<em>final-expression</em>])
   <em>statement</em>
</pre>

<dl>
 <dt><code>initialization</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F; (&#x5305;&#x542B;&#x8D4B;&#x503C;&#x8BED;&#x53E5;) &#x6216;&#x8005;&#x53D8;&#x91CF;&#x58F0;&#x660E;&#x3002;&#x5178;&#x578B;&#x5730;&#x88AB;&#x7528;&#x4E8E;&#x521D;&#x59CB;&#x5316;&#x4E00;&#x4E2A;&#x8BA1;&#x6570;&#x5668;&#x3002;&#x8BE5;&#x8868;&#x8FBE;&#x5F0F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;var&#x5173;&#x952E;&#x5B57;&#x58F0;&#x660E;&#x65B0;&#x7684;&#x53D8;&#x91CF;&#x3002;&#x521D;&#x59CB;&#x5316;&#x4E2D;&#x7684;&#x53D8;&#x91CF;&#x4E0D;&#x662F;&#x8BE5;&#x5FAA;&#x73AF;&#x7684;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#xFF0C;&#x800C;&#x662F;&#x4E0E;&#x8BE5;&#x5FAA;&#x73AF;&#x5904;&#x5728;&#x540C;&#x6837;&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4E2D;&#x3002;&#x8BE5;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x7ED3;&#x679C;&#x65E0;&#x610F;&#x4E49;&#x3002;</dd>
 <dt><code>condition</code></dt>
 <dd>&#x4E00;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x88AB;&#x7528;&#x4E8E;&#x786E;&#x5B9A;&#x6BCF;&#x4E00;&#x6B21;&#x5FAA;&#x73AF;&#x662F;&#x5426;&#x80FD;&#x88AB;&#x6267;&#x884C;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x8868;&#x8FBE;&#x5F0F;&#x7684;&#x7ED3;&#x679C;&#x4E3A;true&#xFF0C;&#xA0;<font face="Consolas, Liberation Mono, Courier, monospace">&#x5FAA;&#x73AF;&#x4F53;&#x5185;&#x7684;&#x8BED;&#x53E5;&#x5C06;&#x88AB;&#x6267;&#x884C;&#x3002;</font>&#xA0;&#x8FD9;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x53EF;&#x9009;&#x7684;&#x3002;&#x5982;&#x679C;&#x88AB;&#x5FFD;&#x7565;&#xFF0C;&#x90A3;&#x4E48;&#x5C31;&#x88AB;&#x8BA4;&#x4E3A;&#x6C38;&#x8FDC;&#x4E3A;true&#x3002;&#x5982;&#x679C;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x4E3A;false&#xFF0C;&#x90A3;&#x4E48;&#x6267;&#x884C;&#x6D41;&#x7A0B;&#x5C06;&#x88AB;&#x8DF3;&#x5230;for&#x8BED;&#x53E5;&#x7ED3;&#x6784;&#x540E;&#x9762;&#x7684;&#x7B2C;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;</dd>
 <dt><code>final-expression</code></dt>
 <dd>&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x7684;&#x6700;&#x540E;&#x90FD;&#x8981;&#x6267;&#x884C;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x6267;&#x884C;&#x65F6;&#x673A;&#x662F;&#x5728;&#x4E0B;&#x4E00;&#x6B21;<code>condition&#x7684;&#x8BA1;&#x7B97;&#x4E4B;&#x524D;&#x3002;&#x901A;&#x5E38;&#x88AB;&#x7528;&#x4E8E;&#x66F4;&#x65B0;&#x6216;&#x8005;&#x9012;&#x589E;&#x8BA1;&#x6570;&#x5668;&#x53D8;&#x91CF;&#x3002;</code></dd>
 <dt><code>statement</code></dt>
 <dd>&#x53EA;&#x8981;<code>condition&#x7684;&#x7ED3;&#x679C;&#x4E3A;true&#x5C31;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;</code>&#xA0;&#x8981;&#x5728;&#x5FAA;&#x73AF;&#x4F53;&#x5185;&#x6267;&#x884C;&#x591A;&#x6761;&#x8BED;&#x53E5;&#xFF0C;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#xA0;<a title="JavaScript/Reference/Statements/block" href="/en-US/docs/JavaScript/Reference/Statements/block">block</a>&#xA0;&#x7ED3;&#x6784;&#xA0;(<code>{ ... }</code>) &#x6765;&#x5305;&#x542B;&#x8981;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;&#x3002;&#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x8BED;&#x53E5;&#x8981;&#x6267;&#x884C;&#xFF0C;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Statements/Empty">empty</a>&#xA0;&#x8BED;&#x53E5;&#xA0;(<code>;</code>)&#x3002;</dd>
</dl>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x4E00;&#x822C;&#x4F7F;&#x7528;">&#x4E00;&#x822C;&#x4F7F;&#x7528;</h3>

<p>&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x58F0;&#x660E;&#x4E86;&#x53D8;&#x91CF;i&#x5E76;&#x88AB;&#x521D;&#x59CB;&#x8D4B;&#x503C;&#x4E3A;0&#xFF0C;for&#x8BED;&#x53E5;&#x68C0;&#x67E5;i&#x7684;&#x503C;&#x662F;&#x5426;&#x5C0F;&#x4E8E;9&#xFF0C;&#x5982;&#x679C;&#x5C0F;&#x4E8E;9&#xFF0C;&#x5219;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x5757;&#x5185;&#x7684;&#x8BED;&#x53E5;&#xFF0C;&#x5E76;&#x4E14;&#x6700;&#x540E;&#x5C06;i&#x7684;&#x503C;&#x9012;&#x589E;&#x3002;</p>

<pre class="brush: js">for (var i = 0; i &lt; 9; i++) {
   console.log(i);
   // more statements
}
</pre>

<h3 id="&#x5FFD;&#x7565;&#x8868;&#x8FBE;&#x5F0F;">&#x5FFD;&#x7565;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>for&#x8BED;&#x53E5;&#x7684;&#x6240;&#x6709;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x90FD;&#x662F;&#x53EF;&#x9009;&#x7684;</p>

<p>&#x4E3E;&#x4E2A;&#x4F8B;&#x5B50;&#xFF0C;&#x521D;&#x59CB;&#x5316;&#x8BED;&#x53E5;&#xFF08;<em>initialization</em>&#xFF09;&#x4E2D;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x6CA1;&#x6709;&#x88AB;&#x6307;&#x5B9A;&#xFF1A;</p>

<pre class="brush: js">var i = 0;
for (; i &lt; 9; i++) {
    console.log(i);
    // more statements
}
</pre>

<p>&#x5C31;&#x50CF;<em>initialization&#xFF0C;condition</em>&#x4E5F;&#x662F;&#x53EF;&#x9009;&#x7684;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5FFD;&#x7565;&#x4E86;&#xFF0C;&#x4E3A;&#x4E86;&#x4E0D;&#x8981;&#x521B;&#x5EFA;&#x4E86;&#x6B7B;&#x5FAA;&#x73AF;&#xFF08;&#x65E0;&#x9650;&#x5FAA;&#x73AF;&#xFF09;&#xFF0C;&#x4F60;&#x5FC5;&#x987B;&#x786E;&#x4FDD;&#x5FAA;&#x73AF;&#x4F53;&#x5185;&#x5B58;&#x5728;&#x53EF;&#x4EE5;&#x9000;&#x51FA;&#x5FAA;&#x73AF;&#x7684;&#x8BED;&#x53E5;&#xFF0C;&#x4F7F;&#x7528;break&#x3002;</p>

<pre class="brush: js">for (var i = 0;; i++) {
   console.log(i);
   if (i &gt; 3) break;
   // more statements
}</pre>

<p>&#x4F60;&#x5F53;&#x7136;&#x53EF;&#x4EE5;&#x5FFD;&#x7565;&#x6240;&#x6709;&#x7684;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x540C;&#x6837;&#x7684;&#xFF0C;&#x786E;&#x4FDD;&#x4F7F;&#x7528;&#x4E86;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/break">break</a></code>&#xA0;&#x8BED;&#x53E5;&#x6765;&#x9000;&#x51FA;&#x5FAA;&#x73AF;&#x5E76;&#x4E14;&#x4F60;&#x8FD8;&#x9700;&#x8981;&#x4FEE;&#x6539;&#xFF08;&#x9012;&#x589E;&#xFF09;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#xFF0C;&#x4EE5;&#x786E;&#x4FDD;&#x80FD;&#x591F;&#x6B63;&#x5E38;&#x6267;&#x884C;break&#x8BED;&#x53E5;&#x3002;</p>

<pre class="brush: js">var i = 0;

for (;;) {
  if (i &gt; 3) break;
  console.log(i);
  i++;
}
</pre>

<h3 id="&#x4F7F;&#x7528;&#x7A7A;&#x8BED;&#x53E5;&#x7684;&#x4F8B;&#x5B50;">&#x4F7F;&#x7528;&#x7A7A;&#x8BED;&#x53E5;&#x7684;&#x4F8B;&#x5B50;</h3>

<p>&#x4EE5;&#x4E0B;&#x4E3A;&#x5728;[final-expression]&#x90E8;&#x5206;&#x4E2D;&#x5FAA;&#x73AF;&#x8BA1;&#x7B97;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x7684;&#x504F;&#x79FB;&#x4F4D;&#x7F6E;,&#x5B83;&#x4E0D;&#x9700;&#x8981;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x8BED;&#x53E5;&#x6216;&#x8005;&#x4E00;&#x7EC4;&#x8BED;&#x53E5;,&#x56E0;&#x6B64;&#x4F7F;&#x7528;&#x4E86;&#x7A7A;&#x8BED;&#x53E5;&#x3002;.</p>

<pre class="brush: js">function showOffsetPos (sId) {
  var nLeft = 0, nTop = 0;

  for (var oItNode = document.getElementById(sId); // initialization
       oItNode; // condition
       nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // final-expression
       /* empty statement */ ;
  
  console.log(&quot;Offset position of \&quot;&quot; + sId + &quot;\&quot; element:\n left: &quot; + nLeft + &quot;px;\n top: &quot; + nTop + &quot;px;&quot;);
}

// Example call:

showOffsetPos(&quot;content&quot;);

// Output:
// &quot;Offset position of &quot;content&quot; element:
// left: 0px;
// top: 153px;&quot;</pre>

<div class="note"><strong>Note:</strong> In this case, when you do not use the <code>statement</code> section, <strong>a semicolon is put immediately after the declaration of the cycle</strong>.</div>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-for-statement" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">for statement</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">for statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.3" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">for statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-12.6.3" class="external">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">for statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-12.6.2" class="external">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">for statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition</td>
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

<h2 id="&#x53E6;&#x8BF7;&#x53C2;&#x9605;">&#x53E6;&#x8BF7;&#x53C2;&#x9605;</h2>

<ul>
 <li><a title="break &#x8BED;&#x53E5;&#xA0;&#x4E2D;&#x6B62;&#x5F53;&#x524D;&#x5FAA;&#x73AF;&#xFF0C;switch &#x8BED;&#x53E5;&#x6216; label &#x8BED;&#x53E5;&#xFF0C;&#x5E76;&#x628A;&#x7A0B;&#x5E8F;&#x63A7;&#x5236;&#x6D41;&#x8F6C;&#x5230;&#x7D27;&#x63A5;&#x7740;&#x88AB;&#x4E2D;&#x6B62;&#x8BED;&#x53E5;&#x540E;&#x9762;&#x7684;&#x8BED;&#x53E5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/break"><code>break</code></a></li>
 <li><a title="continue &#x8BED;&#x53E5;&#x7ED3;&#x675F;&#x5F53;&#x524D;&#xFF08;&#x6216;&#x6807;&#x7B7E;&#xFF09;&#x7684;&#x5FAA;&#x73AF;&#x8BED;&#x53E5;&#x7684;&#x672C;&#x6B21;&#x8FED;&#x4EE3;&#xFF0C;&#x5E76;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#x5FAA;&#x73AF;&#x7684;&#x4E0B;&#x4E00;&#x6B21;&#x8FED;&#x4EE3;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/continue"><code>continue</code></a></li>
 <li><a title="empty &#x8BED;&#x53E5;&#xA0;&#x7528;&#x6765;&#x8868;&#x660E;&#x6CA1;&#x6709;&#x8BED;&#x53E5;, &#x5C3D;&#x7BA1;JavaScript&#x8BED;&#x6CD5;&#x5E0C;&#x671B;&#x6709;&#x8BED;&#x53E5;&#x4F1A;&#x88AB;&#x6267;&#x884C;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/empty"><code>empty</code></a></li>
 <li><a title="while &#x8BED;&#x53E5;&#x53EF;&#x4EE5;&#x5728;&#x67D0;&#x4E2A;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E3A;&#x771F;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#xFF0C;&#x5FAA;&#x73AF;&#x6267;&#x884C;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#xFF0C;&#x76F4;&#x5230;&#x90A3;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#x4E0D;&#x4E3A;&#x771F;&#x65F6;&#x7ED3;&#x675F;&#x5FAA;&#x73AF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/while"><code>while</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/do...while"><code>do...while</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a></li>
</ul>
                  
                
              