
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section> <div class="overheadIndicator deprecated deprecatedHeader"> 
            <p><strong><span title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span> &#x5DF2;&#x5E9F;&#x5F03;</strong><br>&#x8BE5;&#x7279;&#x6027;&#x5DF2;&#x7ECF;&#x4ECE; Web &#x6807;&#x51C6;&#x4E2D;&#x5220;&#x9664;&#xFF0C;&#x867D;&#x7136;&#x4E00;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x76EE;&#x524D;&#x4ECD;&#x7136;&#x652F;&#x6301;&#x5B83;&#xFF0C;&#x4F46;&#x4E5F;&#x8BB8;&#x4F1A;&#x5728;&#x672A;&#x6765;&#x7684;&#x67D0;&#x4E2A;&#x65F6;&#x95F4;&#x505C;&#x6B62;&#x652F;&#x6301;&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8BE5;&#x7279;&#x6027;&#x3002;</p> 
        </div></div>

<p><code><strong><em>function</em>.arguments</strong></code> &#x5C5E;&#x6027;&#x4EE3;&#x8868;&#x4F20;&#x5165;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x5B83;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code><em>function</em>.arguments</code> &#x5DF2;&#x7ECF;&#x88AB;&#x5E9F;&#x5F03;&#x5F88;&#x591A;&#x5E74;&#x4E86;&#xFF0C;&#x6211;&#x6253;&#x8D4C;&#x4F60;&#x4ECE;&#x6765;&#x5C31;&#x4E0D;&#x77E5;&#x9053;&#x5B83;&#x7684;&#x5B58;&#x5728;&#xFF08;&#x90A3;&#x66F4;&#x597D;&#xFF09;&#x3002;&#x73B0;&#x5728;&#x63A8;&#x8350;&#x7684;&#x505A;&#x6CD5;&#x662F;&#x4F7F;&#x7528;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x53EF;&#x7528;&#x7684; <a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x4EE3;&#x8868;&#x4F20;&#x7ED9;&#x4E00;&#x4E2A;function&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;"><code>arguments</code></a> &#x5BF9;&#x8C61;&#x6765;&#x8BBF;&#x95EE;&#x51FD;&#x6570;&#x7684;&#x5B9E;&#x53C2;&#x3002;</p>

<p>&#x5728;&#x51FD;&#x6570;&#x9012;&#x5F52;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#xFF08;&#x5728;&#x67D0;&#x4E00;&#x523B;&#x540C;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x8FD0;&#x884C;&#x4E86;&#x591A;&#x6B21;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;&#x6709;&#x591A;&#x5957;&#x5B9E;&#x53C2;&#xFF09;&#xFF0C;&#x90A3;&#x4E48; <code>arguments</code> &#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x6700;&#x8FD1;&#x4E00;&#x6B21;&#x8BE5;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x4F20;&#x5165;&#x7684;&#x5B9E;&#x53C2;&#xFF0C;&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x6709;&#x6F14;&#x793A;&#x3002;</p>

<p>&#x5982;&#x679C;&#x51FD;&#x6570;&#x4E0D;&#x5728;&#x6267;&#x884C;&#x671F;&#x95F4;&#xFF0C;&#x90A3;&#x4E48;&#x8BE5;&#x51FD;&#x6570;&#x7684; <code>arguments</code> &#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F; <code>null</code>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<pre class="brush: js">function f(n) { g(n - 1); }

function g(n) {
  console.log(&apos;before: &apos; + g.arguments[0]);
  if (n &gt; 0) { f(n); }
  console.log(&apos;after: &apos; + g.arguments[0]);
}

f(2);

console.log(&apos;&#x51FD;&#x6570;&#x9000;&#x51FA;&#x540E;&#x7684; arguments &#x5C5E;&#x6027;&#x503C;&#xFF1A;&apos; + g.arguments);

// &#x8F93;&#x51FA;&#xFF1A;

// before: 1
// before: 0
// after: 0
// after: 1
// &#x51FD;&#x6570;&#x9000;&#x51FA;&#x540E;&#x7684; arguments &#x5C5E;&#x6027;&#x503C;&#xFF1A;null
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x540D;&#x79F0;</th>
   <th scope="col">&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th scope="col">&#x5907;&#x6CE8;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" title="ECMAScript 1st Edition (ECMA-262)" hreflang="en">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>arguments &#x5C5E;&#x6027;&#x9996;&#x6B21;&#x5B9E;&#x73B0;&#x4E8E; JavaScript 1.0&#xFF0C;&#x9996;&#x6B21;&#x6DFB;&#x52A0;&#x8FDB;&#x89C4;&#x8303;&#x662F;&#x5728; ES1&#xFF0C;&#x5728; ES3 &#x4E2D;&#x88AB;&#x5220;&#x9664;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-10.6" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">arguments object</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x4EE3;&#x8868;&#x4F20;&#x7ED9;&#x4E00;&#x4E2A;function&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;"><code>arguments</code></a></td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-object" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">arguments object</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x4EE3;&#x8868;&#x4F20;&#x7ED9;&#x4E00;&#x4E2A;function&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;"><code>arguments</code></a></td>
  </tr>
 </tbody>
</table>

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

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x3002;&#x4EE3;&#x8868;&#x4F20;&#x7ED9;&#x4E00;&#x4E2A;function&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;"><code>arguments</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions" title="&#x901A;&#x5E38;&#x6765;&#x8BF4;,&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x53EF;&#x4EE5;&#x88AB;&#x5916;&#x90E8;&#x4EE3;&#x7801;&#x8C03;&#x7528;(&#x6216;&#x8005;&#x51FD;&#x6570;&#x672C;&#x8EAB;&#x9012;&#x5F52;&#x8C03;&#x7528;)&#x7684;&quot;&#x5B50;&#x7A0B;&#x5E8F;&quot;.&#x548C;&#x7A0B;&#x5E8F;&#x672C;&#x8EAB;&#x4E00;&#x6837;,&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x51FD;&#x6570;&#x4F53;&#x662F;&#x7531;&#x4E00;&#x7CFB;&#x5217;&#x7684;&#x8BED;&#x53E5;&#x7EC4;&#x6210;&#x7684;.&#x51FD;&#x6570;&#x53EF;&#x4EE5;&#x63A5;&#x6536;&#x4F20;&#x5165;&#x53C2;&#x6570;,&#x4E5F;&#x53EF;&#x4EE5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8FD4;&#x56DE;&#x503C;.">&#x51FD;&#x6570;&#x548C;&#x51FD;&#x6570;&#x7684;&#x4F5C;&#x7528;&#x57DF;</a></li>
</ul>
                  
                
              