
                
                  
                    <p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<h2 id="&#x6982;&#x8FF0;">&#x6982;&#x8FF0;</h2>

<p><code>typeof&#x64CD;&#x4F5C;&#x7B26;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;<strong>&#x5B57;&#x7B26;&#x4E32;</strong>,</code>&#x6307;&#x793A;&#x672A;<code>&#x7ECF;</code>&#x8BA1;&#x7B97;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x7C7B;&#x578B;<code>&#x3002;</code></p>

<h2 id="&#x8BED;&#x6CD5;"><code>&#x8BED;&#x6CD5;</code></h2>

<pre style="font-size: 14px; white-space: normal;" class="syntaxbox"><code>typeof&#xA0;<code><em>operand</em></code></code></pre>

<h3 style="line-height: 24px; font-size: 1.71428571428571rem;" id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<p><code><em>operand</em></code>&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x8868;&#x8FBE;&#x5F0F;&#xFF0C;&#x8868;&#x793A;&#x5BF9;&#x8C61;&#x6216;&#x539F;&#x59CB;&#x503C;&#xFF0C;&#x5176;&#x7C7B;&#x578B;&#x5C06;&#x88AB;&#x8FD4;&#x56DE;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x4E0B;&#x8868;&#x603B;&#x7ED3;&#x4E86;&#xA0;<code>typeof</code> &#x53EF;&#x80FD;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x3002;&#x6709;&#x5173;&#x7C7B;&#x578B;&#x548C;&#x539F;&#x8BED;&#x7684;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#xFF0C;&#x53EF;&#x67E5;&#x770B;&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures">JavaScript&#x6570;&#x636E;&#x7ED3;&#x6784;</a>&#xA0;&#x9875;&#x9762;&#x3002;</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x7C7B;&#x578B;</th>
   <th scope="col">&#x7ED3;&#x679C;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Undefined</td>
   <td><code>&quot;undefined&quot;</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td><code>&quot;object&quot;&#xA0;</code>(&#x89C1;&#x4E0B;&#x65B9;)</td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td><code>&quot;boolean&quot;</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td><code>&quot;number&quot;</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td><code>&quot;string&quot;</code></td>
  </tr>
  <tr>
   <td>Symbol (ECMAScript 6 &#x65B0;&#x589E;)</td>
   <td><code>&quot;symbol&quot;</code></td>
  </tr>
  <tr>
   <td>&#x5BBF;&#x4E3B;&#x5BF9;&#x8C61;(&#x7531;JS&#x73AF;&#x5883;&#x63D0;&#x4F9B;)</td>
   <td><em>Implementation-dependent</em></td>
  </tr>
  <tr>
   <td>&#x51FD;&#x6570;&#x5BF9;&#x8C61; (&#xA0;[[Call]] &#x5728;ECMA-262&#x6761;&#x6B3E;&#x4E2D;&#x5B9E;&#x73B0;&#x4E86;)</td>
   <td><code>&quot;function&quot;</code></td>
  </tr>
  <tr>
   <td>&#x4EFB;&#x4F55;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;</td>
   <td><code>&quot;object&quot;</code></td>
  </tr>
 </tbody>
</table>

<p><strong style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">&#x4F8B;&#x5B50;</strong></p>

<h3 id="&#x5E38;&#x89C4;&#x7528;&#x6CD5;">&#x5E38;&#x89C4;&#x7528;&#x6CD5;</h3>

<pre class="brush: js">// Numbers
typeof 37 === &apos;number&apos;;
typeof 3.14 === &apos;number&apos;;
typeof Math.LN2 === &apos;number&apos;;
typeof Infinity === &apos;number&apos;;
typeof NaN === &apos;number&apos;; // &#x5C3D;&#x7BA1;NaN&#x662F;&quot;Not-A-Number&quot;&#x7684;&#x7F29;&#x5199;
typeof Number(1) === &apos;number&apos;; // &#x4F46;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8FD9;&#x79CD;&#x5F62;&#x5F0F;!

// Strings
typeof &quot;&quot; === &apos;string&apos;;
typeof &quot;bla&quot; === &apos;string&apos;;
typeof (typeof 1) === &apos;string&apos;; // typeof&#x603B;&#x662F;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;
typeof String(&quot;abc&quot;) === &apos;string&apos;; // &#x4F46;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8FD9;&#x79CD;&#x5F62;&#x5F0F;!

// Booleans
typeof true === &apos;boolean&apos;;
typeof false === &apos;boolean&apos;;
typeof Boolean(true) === &apos;boolean&apos;; // &#x4F46;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x8FD9;&#x79CD;&#x5F62;&#x5F0F;!

// Symbols
typeof Symbol() === &apos;symbol&apos;;
typeof Symbol(&apos;foo&apos;) === &apos;symbol&apos;;
typeof Symbol.iterator === &apos;symbol&apos;;

// Undefined
typeof undefined === &apos;undefined&apos;;
<code>typeof declaredButUndefinedVariable === &apos;undefined&apos;;
typeof undeclaredVariable === &apos;undefined&apos;; </code>

// Objects
typeof {a:1} === &apos;object&apos;;

// &#x4F7F;&#x7528;Array.isArray &#x6216;&#x8005; Object.prototype.toString.call
// &#x533A;&#x5206;&#x6570;&#x7EC4;,&#x666E;&#x901A;&#x5BF9;&#x8C61;
typeof [1, 2, 4] === &apos;object&apos;;

typeof new Date() === &apos;object&apos;;

// &#x4E0B;&#x9762;&#x7684;&#x5BB9;&#x6613;&#x4EE4;&#x4EBA;&#x8FF7;&#x60D1;&#xFF0C;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#xFF01;
typeof new Boolean(true) === &apos;object&apos;;
typeof new Number(1) ==== &apos;object&apos;;
typeof new String(&quot;abc&quot;) === &apos;object&apos;;

// &#x51FD;&#x6570;
typeof function(){} === &apos;function&apos;;
typeof Math.sin === &apos;function&apos;;
</pre>

<h3 style="line-height: 24px; font-size: 1.71428571428571rem;" id="null"><code>null</code></h3>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);" class="brush:js  language-js">// &#x4ECE;&#x4E00;&#x5F00;&#x59CB;&#x51FA;&#x73B0;JavaScript&#x5C31;&#x662F;&#x8FD9;&#x6837;&#x7684;


typeof null === &apos;object&apos;;</pre>

<p style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);" class="brush:js  language-js">&#xA0;</p>

<p>&#x5728; JavaScript &#x6700;&#x521D;&#x7684;&#x5B9E;&#x73B0;&#x4E2D;&#xFF0C;JavaScript &#x4E2D;&#x7684;&#x503C;&#x662F;&#x7531;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x7C7B;&#x578B;&#x7684;&#x6807;&#x7B7E;&#x548C;&#x5B9E;&#x9645;&#x6570;&#x636E;&#x503C;&#x8868;&#x793A;&#x7684;&#x3002;&#x5BF9;&#x8C61;&#x7684;&#x7C7B;&#x578B;&#x6807;&#x7B7E;&#x662F;0&#x3002;&#x7531;&#x4E8E;&#xA0;<code>null</code>&#xA0;&#x4EE3;&#x8868;&#x7684;&#x662F;&#x7A7A;&#x6307;&#x9488;(&#x5927;&#x591A;&#x6570;&#x5E73;&#x53F0;&#x4E0B;&#x503C;&#x4E3A;0x00)&#xFF0C;&#x56E0;&#x6B64;&#xFF0C;<code>null</code>&#x7684;&#x7C7B;&#x578B;&#x6807;&#x7B7E;&#x4E5F;&#x6210;&#x4E3A;&#x4E86;0&#xFF0C;<code>typeof null</code>&#x5C31;&#x9519;&#x8BEF;&#x7684;&#x8FD4;&#x56DE;&#x4E86;&quot;<code>object&quot;.(</code><a href="http://www.2ality.com/2013/10/typeof-null.html" class="external">referenc</a><code>)</code></p>

<p>&#x8BE5;&#x73B0;&#x8C61;&#x6709;&#x5F85;&#x4E8E;&#x5728;<a href="http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null" class="external">ECMAScript 6&#x4E2D;&#x88AB;&#x4FEE;&#x590D;</a> (&#x8BE5;&#x63D0;&#x8BAE;&#x5DF2;&#x88AB;<span lang="zh-CN" class="short_text" id="result_box"><span class="alt-edited">&#x5426;&#x51B3;</span></span>). &#x6B63;&#x786E;&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x5C06;&#x6210;&#x4E3A; <code>typeof null === &apos;null&apos;</code>.</p>

<h3 id="&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;">&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x5BF9;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x5B57;&#x9762;&#x91CF;&#x7684;&#x7C7B;&#x578B;&#x5224;&#x65AD;&#x5728;&#x67D0;&#x4E9B;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x4E0D;&#x7B26;&#x5408;&#x6807;&#x51C6;&#xFF1A;</p>

<pre class="brush: js">typeof /s/ === &apos;function&apos;; // Chrome 1-12 , &#x4E0D;&#x7B26;&#x5408; ECMAScript 5.1
typeof /s/ === &apos;object&apos;; // Firefox 5+ , &#x7B26;&#x5408; ECMAScript 5.1
</pre>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-typeof-operator" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">The typeof Operator</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">The typeof Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">The typeof Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf#sec-11.4.3" class="external">ECMAScript 3rd Edition (ECMA-262)<br><small lang="zh-CN">The typeof Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.3" class="external">ECMAScript 1st Edition (ECMA-262)<br><small lang="zh-CN">The typeof Operator</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition. Implemented in JavaScript 1.1.</td>
  </tr>
 </tbody>
</table>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;"><br>
 &#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<div id="compat-desktop">
<table style="border-color: transparent;" class="compat-table">
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
<table style="border-color: transparent;" class="compat-table">
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

<h3 style="line-height: 24px; font-size: 1.71428571428571rem;" id="sect1">&#xA0;</h3>

<h3 style="line-height: 24px; font-size: 1.71428571428571rem;" id="IE_&#x5BBF;&#x4E3B;&#x5BF9;&#x8C61;&#x662F;&#x5BF9;&#x8C61;&#x800C;&#x4E0D;&#x662F;&#x51FD;&#x6570;">IE &#x5BBF;&#x4E3B;&#x5BF9;&#x8C61;&#x662F;&#x5BF9;&#x8C61;&#x800C;&#x4E0D;&#x662F;&#x51FD;&#x6570;</h3>

<p>&#x5728; IE 6, 7 &#x548C; 8 &#x4E2D;&#xFF0C;&#x5927;&#x591A;&#x6570;&#x7684;&#x5BBF;&#x4E3B;&#x5BF9;&#x8C61;&#x662F;&#x5BF9;&#x8C61;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x51FD;&#x6570;&#xFF0C;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal; color: rgb(77, 78, 83);" class="brush: js  language-js">typeof alert === &apos;object&apos;
</pre>

<div style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;" class="brush:js language-js line-number">&#xA0;</div>

<h2 style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;" name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><code><a title="/en-US/docs/JavaScript/Reference/Operators/instanceof" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof">instanceof</a></code></li>
</ul>
                  
                
              