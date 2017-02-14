
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><strong><code>String</code></strong>&#xA0;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x662F;&#x7528;&#x6765;&#x6784;&#x9020;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x6216;&#x5B57;&#x7B26;&#x5E8F;&#x5217;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<p>&#x901A;&#x5E38;&#xFF0C;&#x6211;&#x4EEC;&#x90FD;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#x6240;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5B57;&#x9762;&#x91CF;&#x5199;&#x6CD5;&#xFF1A;</p>

<pre class="syntaxbox">&apos;string text&apos;
&quot;string text&quot;
&quot;&#x4E2D;&#x6587; espa&#xF1;ol English &#x939;&#x93F;&#x928;&#x94D;&#x926;&#x940; &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629; portugu&#xEA;s &#x9AC;&#x9BE;&#x982;&#x9B2;&#x9BE; &#x440;&#x443;&#x441;&#x441;&#x43A;&#x438;&#x439; &#x65E5;&#x672C;&#x8A9E; &#xA2A;&#xA70;&#xA1C;&#xA3E;&#xA2C;&#xA40; &#xD55C;&#xAD6D;&#xC5B4;&quot;</pre>

<p>&#x4F60;&#x4E5F;&#x80FD;&#x4F7F;&#x7528;&#xA0;<code>String</code> &#x51FD;&#x6570;&#x5C06;&#x5176;&#x4ED6;&#x503C;&#x751F;&#x6210;&#x6216;&#x8F6C;&#x6362;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#xFF1A;</p>

<pre class="syntaxbox">String(thing)
new String(thing)</pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>thing</code></dt>
 <dd>&#x4EFB;&#x4F55;&#x53EF;&#x4EE5;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x503C;&#x3002;</dd>
</dl>

<h3 name="Parameters" id="Parameters">&#x6A21;&#x677F;&#x5B57;&#x9762;&#x91CF;</h3>

<p>&#x4ECE; ECMAScript 2015 &#x5F00;&#x59CB;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#x5B57;&#x9762;&#x91CF;&#x4E5F;&#x53EF;&#x4EE5;&#x79F0;&#x4E3A;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">&#x6A21;&#x677F;&#x5B57;&#x9762;&#x91CF;</a>&#xFF1A;</p>

<pre>`hello world` `hello! world!` `hello ${who}` escape `&lt;a&gt;${who}&lt;/a&gt;`</pre>

<h3 name="Parameters" id="Parameters">&#x8F6C;&#x4E49;&#x5B57;&#x7B26;</h3>

<dl>
</dl>

<p>&#x9664;&#x4E86;&#x666E;&#x901A;&#x7684;&#x53EF;&#x6253;&#x5370;&#x5B57;&#x7B26;&#x4EE5;&#x5916;&#xFF0C;&#x4E00;&#x4E9B;&#x7279;&#x6B8A;&#x6709;&#x7279;&#x6B8A;&#x529F;&#x80FD;&#x7684;&#x5B57;&#x7B26;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x7684;&#x5F62;&#x5F0F;&#x653E;&#x5165;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#xFF1A;</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Code</th>
   <th scope="col">Output</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>&#x7A7A;&#x5B57;&#x7B26;</td>
  </tr>
  <tr>
   <td><code>\&apos;</code></td>
   <td>&#x5355;&#x5F15;&#x53F7;</td>
  </tr>
  <tr>
   <td><code>\&quot;</code></td>
   <td><code>&#x53CC;&#x5F15;&#x53F7;</code></td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>&#x53CD;&#x659C;&#x6760;</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>&#x6362;&#x884C;</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td><code>&#x56DE;&#x8F66;</code></td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>&#x5782;&#x76F4;&#x5236;&#x8868;&#x7B26;</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>&#x6C34;&#x5E73;&#x5236;&#x8868;&#x7B26;</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>&#x9000;&#x683C;</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>&#x6362;&#x9875;</td>
  </tr>
  <tr>
   <td><code>\uXXXX</code></td>
   <td>unicode &#x7801;</td>
  </tr>
  <tr>
   <td><code>\u{X}</code> ... <code>\u{XXXXXX}</code></td>
   <td>unicode codepoint <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></td>
  </tr>
  <tr>
   <td><code>\xXX</code></td>
   <td>Latin-1 &#x5B57;&#x7B26;(x&#x5C0F;&#x5199;)</td>
  </tr>
 </tbody>
</table>

<div class="note">&#x548C;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E0D;&#x540C;&#xFF0C;javascript &#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x533A;&#x5206;&#x5355;&#x5F15;&#x53F7;&#x548C;&#x53CC;&#x5F15;&#x53F7;&#xFF0C;&#x6240;&#x4EE5;&#x4E0D;&#x8BBA;&#x662F;&#x5355;&#x5F15;&#x53F7;&#x8FD8;&#x662F;&#x53CC;&#x5F15;&#x53F7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4E0A;&#x9762;&#x7684;&#x8F6C;&#x4E49;&#x5B57;&#x7B26;&#x90FD;&#x80FD;&#x8FD0;&#x884C; &#x3002;</div>

<h3 id="&#x957F;&#x5B57;&#x7B26;&#x4E32;">&#x957F;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x6709;&#x65F6;&#xFF0C;&#x4F60;&#x7684;&#x4EE3;&#x7801;&#x53EF;&#x80FD;&#x542B;&#x6709;&#x5F88;&#x957F;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4F60;&#x53EF;&#x80FD;&#x60F3;&#x5C06;&#x8FD9;&#x6837;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5199;&#x6210;&#x591A;&#x884C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x8BA9;&#x8FD9;&#x4E00;&#x884C;&#x65E0;&#x9650;&#x5EF6;&#x957F;&#x6216;&#x7740;&#x88AB;&#x7F16;&#x8F91;&#x5668;&#x6298;&#x53E0;&#x3002;&#x6709;&#x4E24;&#x79CD;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x505A;&#x5230;&#x8FD9;&#x4E00;&#x70B9;&#x3002;</p>

<p>&#x5176;&#x4E00;&#xFF0C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; + &#x8FD0;&#x7B97;&#x7B26;&#x5C06;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x8D77;&#x6765;&#xFF0C;&#x5982;&#x4E0B;&#x6240;&#x793A;&#xFF1A;</p>

<pre><code>let longString = &quot;This is a very long string which needs &quot; +
                 &quot;to wrap across multiple lines because &quot; +
                 &quot;otherwise my code is unreadable.&quot;;</code></pre>

<p>&#x5176;&#x4E8C;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x6BCF;&#x884C;&#x672B;&#x5C3E;&#x4F7F;&#x7528;&#x53CD;&#x659C;&#x6760;&#x5B57;&#x7B26;&#xFF08;&#x201C;\&#x201D;&#xFF09;&#xFF0C;&#x4EE5;&#x6307;&#x793A;&#x5B57;&#x7B26;&#x4E32;&#x5C06;&#x5728;&#x4E0B;&#x4E00;&#x884C;&#x7EE7;&#x7EED;&#x3002;&#x786E;&#x4FDD;&#x53CD;&#x659C;&#x6760;&#x540E;&#x9762;&#x6CA1;&#x6709;&#x7A7A;&#x683C;&#x6216;&#x4EFB;&#x4F55;&#x9664;&#x6362;&#x884C;&#x7B26;&#x4E4B;&#x5916;&#x7684;&#x5B57;&#x7B26;&#x6216;&#x7F29;&#x8FDB;; &#x5426;&#x5219;&#x53CD;&#x659C;&#x6760;&#x5C06;&#x4E0D;&#x4F1A;&#x5DE5;&#x4F5C;&#x3002; &#x5982;&#x4E0B;&#x6240;&#x793A;&#xFF1A;</p>

<pre><code>let longString = &quot;This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.&quot;;</code></pre>

<p>&#x4F7F;&#x7528;&#x8FD9;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x4F1A;&#x521B;&#x5EFA;&#x76F8;&#x540C;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<dl>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x4E8E;&#x4FDD;&#x5B58;&#x53EF;&#x4EE5;&#x4EE5;&#x6587;&#x672C;&#x5F62;&#x5F0F;&#x8868;&#x793A;&#x7684;&#x6570;&#x636E;&#x975E;&#x5E38;&#x6709;&#x7528;&#x3002; &#x4E00;&#x4E9B;&#x5E38;&#x7528;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x64CD;&#x4F5C;&#x6709;&#xFF1A;&#x67E5;&#x8BE2;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length">&#x5B57;&#x7B26;&#x4E32;&#x957F;&#x5EA6;</a>&#xFF0C;&#x4F7F;&#x7528;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators"> + &#x548C; += </a>&#x8FD0;&#x7B97;&#x7B26;&#x6765;&#x6784;&#x5EFA;&#x548C;&#x8FDE;&#x63A5;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf">indexOf</a>&#xA0;&#x65B9;&#x6CD5;&#x68C0;&#x67E5;&#x67D0;&#x4E00;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x5728;&#x7236;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x53C8;&#x6216;&#x662F;&#x4F7F;&#x7528;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring">substring</a>&#xA0;&#x65B9;&#x6CD5;&#x63D0;&#x53D6;&#x4ECE;&#x7236;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x63D0;&#x53D6;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<h3 name="Character_access" id="Character_access">&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x83B7;&#x53D6;&#x5355;&#x4E2A;&#x5B57;&#x7B26;</h3>

<p>&#x83B7;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x67D0;&#x4E2A;&#x5B57;&#x7B26;&#x6709;&#x4E24;&#x79CD;&#x65B9;&#x6CD5;&#x3002; &#x7B2C;&#x4E00;&#x79CD;&#x662F;&#x4F7F;&#x7528; <a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>charAt</code></a> &#x65B9;&#x6CD5;&#xFF1A;</p>

<pre class="brush: js">return &apos;cat&apos;.charAt(1); // returns &quot;a&quot;
</pre>

<p>&#x53E6;&#x4E00;&#x79CD;&#xA0;(&#x5728;ECMAScript 5&#x4E2D;&#x6709;&#x6240;&#x4ECB;&#x7ECD;) &#x662F;&#x628A;&#x5B57;&#x7B26;&#x4E32;&#x5F53;&#x4F5C;&#x4E00;&#x4E2A;&#x7C7B;&#x4F3C;&#x6570;&#x7EC4;&#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5176;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5B57;&#x7B26;&#x5BF9;&#x5E94;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x7D22;&#x5F15;&#xFF1A;</p>

<pre class="brush: js">return &apos;cat&apos;[1]; // returns &quot;a&quot;
</pre>

<p>&#x4F7F;&#x7528;&#x62EC;&#x53F7;&#x8BBF;&#x95EE;&#x5B57;&#x7B26;&#x4E32;&#x4E0D;&#x53EF;&#x4EE5;&#x5BF9;&#x5176;&#x8FDB;&#x884C;&#x5220;&#x9664;&#x6216;&#x6DFB;&#x52A0;&#xFF0C;&#x56E0;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x5E94;&#x672A;&#x77E5;&#x7684;&#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x662F;&#x53EF;&#x8BFB;&#x6216;&#x914D;&#x7F6E;&#x7684;&#x3002;&#xA0;(&#x66F4;&#x591A;&#x7684;&#x4FE1;&#x606F;&#x8BF7;&#x53C2;&#x9605;&#xA0;<a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty</code></a>&#x3002;&#xA0;)</p>

<h3 name="Comparing_strings" id="Comparing_strings">&#x5B57;&#x7B26;&#x4E32;&#x6BD4;&#x8F83;</h3>

<p>&#x719F;&#x7EC3;&#x4F7F;&#x7528; C &#x8BED;&#x8A00;&#x7684;&#x5F00;&#x53D1;&#x8005;&#x7ECF;&#x5E38;&#x4F7F;&#x7528;&#xA0;<code>strcmp&#xA0;&#x51FD;&#x6570;&#x6765;&#x6BD4;&#x8F83;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4F46;&#x5728;&#xA0;</code>JavaScript &#x4E2D;&#xFF0C;&#x4F60;&#x53EA;&#x9700;&#x8981;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#x7B26;(&gt;/&lt;/&gt;=/&lt;=)</a>&#xFF1A;</p>

<pre class="brush: js">var a = &quot;a&quot;;
var b = &quot;b&quot;;
if (a &lt; b) // true
  print(a + &quot; is less than &quot; + b);
else if (a &gt; b)
  print(a + &quot; is greater than &quot; + b);
else
  print(a + &quot; and &quot; + b + &quot; are equal.&quot;);
</pre>

<p>&#x4F7F;&#x7528;&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x5B9E;&#x4F8B;&#x7EE7;&#x627F;&#x800C;&#x6765;&#x7684;&#xA0;<a title="localeCompare() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x6765;&#x8868;&#x660E;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;reference string&#xFF09;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x662F;&#x5426;&#x5728;&#x67D0;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x524D;&#x9762;&#x6216;&#x8005;&#x540E;&#x9762;&#xFF0C;&#x6216;&#x8005;&#x662F;&#x4E00;&#x6837;&#x7684;&#xFF08;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>localeCompare</code></a> &#x65B9;&#x6CD5;&#x4E5F;&#x80FD;&#x8FBE;&#x5230;&#x540C;&#x6837;&#x7684;&#x6548;&#x679C;&#x3002;&#xA0;</p>

<h3 id="&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x548C;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x7684;&#x533A;&#x522B;">&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x548C;<font face="Consolas, Liberation Mono, Courier, monospace">&#x5B57;&#x7B26;&#x4E32;</font>&#x5BF9;&#x8C61;&#x7684;&#x533A;&#x522B;</h3>

<p>&#x8BF7;&#x6CE8;&#x610F;&#x533A;&#x5206; JavaScript &#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x548C;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x503C; . ( &#x5BF9;&#x4E8E; <a title="Boolean&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a> &#x548C;<a title="JavaScript &#x7684; Number&#xA0;&#x5BF9;&#x8C61;&#x662F;&#x7ECF;&#x8FC7;&#x5C01;&#x88C5;&#x7684;&#x80FD;&#x8BA9;&#x4F60;&#x5904;&#x7406;&#x6570;&#x5B57;&#x503C;&#x7684;&#x5BF9;&#x8C61;&#x3002;Number &#x5BF9;&#x8C61;&#x7531;&#xA0;Number() &#x6784;&#x9020;&#x5668;&#x521B;&#x5EFA;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Numbers</code></a> &#x4E5F;&#x540C;&#x6837;&#x5982;&#x6B64;.)</p>

<p>&#x5B57;&#x7B26;&#x4E32;&#x5B57;&#x9762;&#x91CF; (&#x901A;&#x8FC7;&#x5355;&#x5F15;&#x53F7;&#x6216;&#x53CC;&#x5F15;&#x53F7;&#x5B9A;&#x4E49;) &#x548C; &#x76F4;&#x63A5;&#x8C03;&#x7528; String &#x65B9;&#x6CD5;(&#x6CA1;&#x6709;&#x901A;&#x8FC7; new &#x751F;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;)&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x90FD;&#x662F;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x3002;JavaScript&#x4F1A;&#x81EA;&#x52A8;&#x5C06;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#xFF0C;&#x53EA;&#x6709;&#x5C06;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x53EF;&#x8F6C;&#x5316;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E4B;&#x540E;&#x624D;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x7684;&#x65B9;&#x6CD5;&#x3002;&#x5F53;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x9700;&#x8981;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x624D;&#x6709;&#x7684;&#x65B9;&#x6CD5;&#x6216;&#x8005;&#x67E5;&#x8BE2;&#x503C;&#x7684;&#x65F6;&#x5019;(&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x6CA1;&#x6709;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x7684;)&#xFF0C;JavaScript &#x4F1A;&#x81EA;&#x52A8;&#x5C06;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x5316;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x5E76;&#x4E14;&#x8C03;&#x7528;&#x76F8;&#x5E94;&#x7684;&#x65B9;&#x6CD5;&#x6216;&#x8005;&#x6267;&#x884C;&#x67E5;&#x8BE2;&#x3002;</p>

<pre class="brush: js">var s_prim = &quot;foo&quot;;
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs &quot;string&quot;
console.log(typeof s_obj);  // Logs &quot;object&quot;
</pre>

<p>&#x5F53;&#x4F7F;&#x7528;&#xA0;<a title="&#x5C06;&#x4E00;&#x4E2A;JavaScript&#x4EE3;&#x7801;&#x5B57;&#x7B26;&#x4E32;&#x6C42;&#x503C;&#x6210;&#x7279;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval"><code>eval</code></a>&#x65F6;&#xFF0C;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x548C;<font face="Consolas, Liberation Mono, Courier, monospace">&#x5B57;&#x7B26;&#x4E32;</font>&#x5BF9;&#x8C61;&#x4E5F;&#x4F1A;&#x4EA7;&#x751F;&#x4E0D;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002;<code>eval &#x4F1A;&#x5C06;</code>&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x4F5C;&#x4E3A;&#x6E90;&#x4EE3;&#x7801;&#x5904;&#x7406;; &#x800C;<font face="Consolas, Liberation Mono, Courier, monospace">&#x5B57;&#x7B26;&#x4E32;</font>&#x5BF9;&#x8C61;&#x5219;&#x88AB;&#x770B;&#x4F5C;&#x5BF9;&#x8C61;&#x5904;&#x7406;, &#x8FD4;&#x56DE;&#x5BF9;&#x8C61;&#x3002;&#xA0;&#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">s1 = &quot;2 + 2&quot;;               // creates a string primitive
s2 = new String(&quot;2 + 2&quot;);   // creates a String object
console.log(eval(s1));      // returns the number 4
console.log(eval(s2));      // returns the string &quot;2 + 2&quot;
</pre>

<p>&#x7531;&#x4E8E;&#x4E0A;&#x8FF0;&#x539F;&#x56E0;, &#x5F53;&#x4E00;&#x6BB5;&#x4EE3;&#x7801;&#x5728;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65F6;&#x5019;&#x5374;&#x4F7F;&#x7528;&#x4E86;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x5C31;&#x4F1A;&#x5BFC;&#x81F4;&#x6267;&#x884C;&#x5931;&#x8D25;(&#x867D;&#x7136;&#x4E00;&#x822C;&#x60C5;&#x51B5;&#x4E0B;&#x7A0B;&#x5E8F;&#x5458;&#x4EEC;&#x5E76;&#x4E0D;&#x9700;&#x8981;&#x8003;&#x8651;&#x8FD9;&#x6837;&#x7684;&#x95EE;&#x9898;)&#x3002;</p>

<p>&#x5229;&#x7528; <a title="valueOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;String&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF08;primitive value&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"><code>valueOf</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x672A;&#x5176;&#x5BF9;&#x5E94;&#x7684;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x3002;</p>

<pre class="brush: js">console.log(eval(s2.valueOf())); // returns the number 4
</pre>

<div class="note"><strong>&#x6CE8;&#x610F;:</strong>&#xA0;&#x5176;&#x4ED6;&#x7684;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x8F6C;&#x6362;&#x6210;&#x57FA;&#x672C;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x53CA;&#x53C2;&#x8003;&#xA0;<a title="/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView" href="/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView" class="new"><code>StringView</code> &#x2013; a C-like representation of strings based on typed arrays</a>.</div>

<h2 id="&#x5C5E;&#x6027;">&#x5C5E;&#x6027;</h2>

<dl>
 <dt><a title="String.prototype&#xA0;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E86; String &#x5176;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/prototype"><code>String.prototype</code></a></dt>
 <dd>&#x53EF;&#x4EE5;&#x4E3A; String &#x5BF9;&#x8C61;&#x589E;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#x3002;</dd>
</dl>

<h2 name="Methods" id="Methods">&#x65B9;&#x6CD5;</h2>

<dl>
 <dt><a title="&#x9759;&#x6001;&#xA0;String.fromCharCode()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;Unicode&#x503C;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"><code>String.fromCharCode()</code></a> &#xA0;</dt>
 <dd>&#xA0;<strong>&#x901A;&#x8FC7;&#x4E00;&#x4E32;&#xA0;Unicode &#x521B;&#x5EFA;&#x5B57;&#x7B26;&#x4E32;&#x3002;</strong></dd>
</dl>

<dl>
 <dt><a title="String.fromCodePoint()&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;&#x4EE3;&#x7801;&#x70B9;&#x5E8F;&#x5217;&#x521B;&#x5EFA;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x901A;&#x8FC7;&#x4E00;&#x4E32;&#xA0;&#x7801;&#x70B9; &#x521B;&#x5EFA;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
</dl>

<div>
<dl>
 <dt><a title="String.raw() &#x662F;&#x4E00;&#x4E2A;&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x6807;&#x7B7E;&#x51FD;&#x6570;&#xFF0C;&#x5B83;&#x7684;&#x4F5C;&#x7528;&#x7C7B;&#x4F3C;&#x4E8E; Python &#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x524D;&#x7F00; r &#x548C; C# &#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x524D;&#x7F00; @&#xFF0C;&#x662F;&#x7528;&#x6765;&#x83B7;&#x53D6;&#x4E00;&#x4E2A;&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x539F;&#x59CB;&#x5B57;&#x9762;&#x91CF;&#x503C;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw"><code>String.raw()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x901A;&#x8FC7;&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;&#x7A7F;&#x521B;&#x5EFA;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
</dl>
</div>

<h2 id="&#x5B57;&#x7B26;&#x4E32;&#x901A;&#x7528;&#x65B9;&#x6CD5;">&#x5B57;&#x7B26;&#x4E32;&#x901A;&#x7528;&#x65B9;&#x6CD5;</h2>

<p>&#x5E94;&#x8BE5;&#x907F;&#x514D;&#x5728; Javascript 1.6 &#xFF08;Firefox &#x6D4F;&#x89C8;&#x5668;&#x7684; JS &#x5F15;&#x64CE;&#xFF09;&#x4E2D;&#x4F7F;&#x7528;&#xFF08;&#x867D;&#x7136;&#x4E5F;&#x652F;&#x6301;&#xFF09;&#x5C06;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#x8F6C;&#x5316;&#x4E3A;&#x5B57;&#x7B26;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#x65B9;&#x6CD5;&#x5E76;&#x6CA1;&#x6709;&#x6210;&#x4E3A; ECMA &#x6807;&#x51C6;&#xFF1A;</p>

<pre class="brush: js">var num = 15;
console.log(String.replace(num, /5/, &apos;2&apos;));
</pre>

<p class="brush: js"><span style="background-color: #ffffff; color: #4d4e53; font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 21px;"><a title="JavaScript &#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x6784;&#x9020;&#x6570;&#x7EC4;&#x7684;&#x5168;&#x5C40;&#x5BF9;&#x8C61;; &#x5B83;&#x4EEC;&#x662F;&#x9AD8;&#x7EA7;&#x7684;&#xFF0C;&#x5217;&#x8868;&#x5F0F;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods">Generics</a> &#x5728; Javascript 1.6 &#x4E2D;&#x540C;&#x6837;&#x652F;&#x6301;<a title="JavaScript &#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x7528;&#x4E8E;&#x6784;&#x9020;&#x6570;&#x7EC4;&#x7684;&#x5168;&#x5C40;&#x5BF9;&#x8C61;; &#x5B83;&#x4EEC;&#x662F;&#x9AD8;&#x7EA7;&#x7684;&#xFF0C;&#x5217;&#x8868;&#x5F0F;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>&#x3002;</span></p>

<p class="brush: js">&#x4E0B;&#x9762;&#x4F7F;&#x4E00;&#x4E9B;&#x9488;&#x5BF9;&#x4E0D;&#x652F;&#x6301;&#x8FD9;&#x4E9B;&#x65B9;&#x6CD5;&#x7684;&#x8865;&#x6551;&#x63AA;&#x65BD;&#xFF1A;</p>

<pre class="brush: js">/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function () {
    &apos;use strict&apos;;

    var i,
        // We could also build the array of methods with the following, but the
        //   getOwnPropertyNames() method is non-shimable:
        // Object.getOwnPropertyNames(String).filter(function (methodName)
        //  {return typeof String[methodName] === &apos;function&apos;});
        methods = [
            &apos;quote&apos;, &apos;substring&apos;, &apos;toLowerCase&apos;, &apos;toUpperCase&apos;, &apos;charAt&apos;,
            &apos;charCodeAt&apos;, &apos;indexOf&apos;, &apos;lastIndexOf&apos;, &apos;startsWith&apos;, &apos;endsWith&apos;,
            &apos;trim&apos;, &apos;trimLeft&apos;, &apos;trimRight&apos;, &apos;toLocaleLowerCase&apos;,
            &apos;toLocaleUpperCase&apos;, &apos;localeCompare&apos;, &apos;match&apos;, &apos;search&apos;,
            &apos;replace&apos;, &apos;split&apos;, &apos;substr&apos;, &apos;concat&apos;, &apos;slice&apos;
        ],
        methodCount = methods.length,
        assignStringGeneric = function (methodName) {
            var method = String.prototype[methodName];
            String[methodName] = function (arg1) {
                return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
            };
        };

    for (i = 0; i &lt; methodCount; i++) {
        assignStringGeneric(methods[i]);
    }
}());</pre>

<h2 name="String_instances" id="String_instances"><code>String</code>&#xA0;&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x5C5E;&#x6027;_2">&#x5C5E;&#x6027;</h3>

<p></p><dl><dt><code>String.prototype.constructor</code></dt>
 <dd>&#x7528;&#x4E8E;&#x521B;&#x9020;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x5BF9;&#x8C61;&#x7684;&#x7279;&#x5B9A;&#x7684;&#x51FD;&#x6570;&#x3002;</dd>
 <dt><a title="length&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length"><code>String.prototype.length</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x4E86;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#x3002;</dd>
 <dt><em>N</em></dt>
 <dd>Used to access the character in the&#xA0;<em>N</em>th position where&#xA0;<em>N</em>&#xA0;is a positive integer between 0 and one less than the value of <a title="length&#xA0;&#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x957F;&#x5EA6;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length"><code>length</code></a>. &#x8FD9;&#x4E9B;&#x5C5E;&#x6027;&#x90FD;&#x662F;&#x201C;&#x53EA;&#x8BFB;&#x201D;&#x6027;&#x8D28;&#xFF0C;&#x4E0D;&#x80FD;&#x7F16;&#x8F91;&#x3002;</dd>
</dl><div><div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides"> 
<div><span style="font-weight: 700;">Properties inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent" class="internal"><code>__parent__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Proto" class="internal"><code>__proto__</code></a></div>
</div></div><p></p>

<p><span style="line-height: 1.5;"></span></p><h3 name="Methods_unrelated_to_HTML" id="Methods_unrelated_to_HTML">&#x8DDF;HTML&#x65E0;&#x5173;&#x7684;&#x65B9;&#x6CD5;</h3>

<dl><dt><a title="charAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x7279;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x5B57;&#x7B26;&#x3002;</dd>
 <dt><a title="charCodeAt()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A; 0 &#x5230; 65535 &#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#xFF0C;&#x4EE3;&#x8868;&#x7D22;&#x5F15;&#x5904;&#x5B57;&#x7B26;&#x7684; UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#xFF08;&#x5728; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x5355;&#x4E00;&#x7684; UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;UTF-16 &#x7F16;&#x7801;&#x5355;&#x5143;&#x5339;&#x914D; Unicode &#x7F16;&#x7801;&#x5355;&#x5143;&#x3002;&#x4F46;&#x5728;&#x2014;&#x2014;&#x4F8B;&#x5982; Unicode &#x7F16;&#x7801;&#x5355;&#x5143; &gt; 0x10000 &#x7684;&#x8FD9;&#x79CD;&#x2014;&#x2014;&#x4E0D;&#x80FD;&#x88AB;&#x4E00;&#x4E2A;&#xA0;UTF-16&#xA0;&#x7F16;&#x7801;&#x5355;&#x5143;&#x5355;&#x72EC;&#x8868;&#x793A;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x53EA;&#x80FD;&#x5339;&#x914D; Unicode &#x4EE3;&#x7406;&#x5BF9;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7F16;&#x7801;&#x5355;&#x5143;&#xFF09;&#x3002;&#x5982;&#x679C;&#x4F60;&#x5E0C;&#x671B;&#x5F97;&#x5230;&#x6574;&#x70B9;&#x7F16;&#x7801;&#x503C;&#xFF0C;&#x4F7F;&#x7528;&#xA0;codePointAt() &#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"><code>String.prototype.charCodeAt()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x8868;&#x793A;&#x7ED9;&#x5B9A;&#x7D22;&#x5F15;&#x7684;&#x5B57;&#x7B26;&#x7684;Unicode&#x7684;&#x503C;&#x3002;</dd>
 <dt><a title="codePointAt() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#xA0;&#x4E00;&#x4E2A;&#xA0;Unicode &#x7F16;&#x7801;&#x70B9;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"><code>String.prototype.codePointAt()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x4F7F;&#x7528;UTF-16&#x7F16;&#x7801;&#x7684;&#x7ED9;&#x5B9A;&#x4F4D;&#x7F6E;&#x7684;&#x503C;&#x7684;&#x975E;&#x8D1F;&#x6574;&#x6570;&#x3002;</dd>
 <dt><a title="concat() &#x65B9;&#x6CD5;&#x5C06;&#x4E00;&#x4E2A;&#x6216;&#x591A;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E0E;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;&#x5408;&#x5E76;&#xFF0C;&#x5F62;&#x6210;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat"><code>String.prototype.concat()</code></a></dt>
 <dd>&#x8FDE;&#x63A5;&#x4E24;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6587;&#x672C;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/contains"><code>String.prototype.contains()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x91CC;&#x662F;&#x5426;&#x5305;&#x542B;&#x5176;&#x4ED6;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a title="endsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x7ED3;&#x5C3E;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"><code>String.prototype.endsWith()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x7ED3;&#x5C3E;&#x662F;&#x5426;&#x5305;&#x542B;&#x5176;&#x4ED6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x3002;</dd>
 <dt><a title="indexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x9996;&#x6B21;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#x3002;&#x4ECE;&#xA0;fromIndex&#xA0;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x67E5;&#x627E;&#xFF0C;&#x5982;&#x679C;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; -1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"><code>String.prototype.indexOf()</code></a></dt>
 <dd>&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x8FD4;&#x56DE;&#x9996;&#x4E2A;&#x88AB;&#x53D1;&#x73B0;&#x7684;&#x7ED9;&#x5B9A;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;</dd>
 <dt><a title="lastIndexOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x503C;&#x5728;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6700;&#x540E;&#x51FA;&#x73B0;&#x7684;&#x4F4D;&#x7F6E;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;&#xA0;-1&#x3002;&#x4ECE;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x540E;&#x9762;&#x5411;&#x524D;&#x67E5;&#x627E;&#xFF0C;&#x4ECE; fromIndex &#x5904;&#x5F00;&#x59CB;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"><code>String.prototype.lastIndexOf()</code></a></dt>
 <dd>&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E2D;&#x8FD4;&#x56DE;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x88AB;&#x53D1;&#x73B0;&#x7684;&#x7ED9;&#x5B9A;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x627E;&#x5230;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;</dd>
 <dt><a title="localeCompare() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x5B57;&#x6765;&#x8868;&#x660E;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF08;reference string&#xFF09;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x662F;&#x5426;&#x5728;&#x67D0;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x524D;&#x9762;&#x6216;&#x8005;&#x540E;&#x9762;&#xFF0C;&#x6216;&#x8005;&#x662F;&#x4E00;&#x6837;&#x7684;&#xFF08;&#x7F16;&#x7801;&#x4E2D;&#x7684;&#x4F4D;&#x7F6E;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>String.prototype.localeCompare()</code></a></dt>
 <dd>Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.</dd>
 <dt><a title="&#x5F53;&#x5B57;&#x7B26;&#x4E32;&#x5339;&#x914D;&#x5230;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF08;regular expression&#xFF09;&#x65F6;&#xFF0C;match() &#x65B9;&#x6CD5;&#x4F1A;&#x63D0;&#x53D6;&#x5339;&#x914D;&#x9879;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match"><code>String.prototype.match()</code></a></dt>
 <dd>&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x4E0E;&#x5B57;&#x7B26;&#x4E32;&#x76F8;&#x6BD4;&#x8F83;&#x3002;</dd>
 <dt><a title="normalize()&#xA0;&#x65B9;&#x6CD5;&#x4F1A;&#x6309;&#x7167;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x79CD; Unicode &#x6B63;&#x89C4;&#x5F62;&#x5F0F;&#x5C06;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x6B63;&#x89C4;&#x5316;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"><code>String.prototype.normalize()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x7684;Unicode&#x6807;&#x51C6;&#x5316;&#x5F62;&#x5F0F;&#x3002;</dd>
 <dt><a title="&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x5305;&#x542B;&#x7684;&#x7279;&#x6B8A;&#x5B57;&#x7B26;&#x8FDB;&#x884C;&#x8F6C;&#x4E49;(&#x53CD;&#x659C;&#x6760;),&#x7136;&#x540E;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x8FB9;&#x5404;&#x52A0;&#x4E0A;&#x4E00;&#x4E2A;&#x53CC;&#x5F15;&#x53F7;(&quot;)&#x5E76;&#x8FD4;&#x56DE;,&#x5E76;&#x4E0D;&#x4FEE;&#x6539;&#x539F;&#x5B57;&#x7B26;&#x4E32;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/quote"><code>String.prototype.quote()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>Wraps the string in double quotes (&quot;<code>&quot;</code>&quot;).</dd>
 <dt><a title="repeat()&#xA0;&#x6784;&#x9020;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x542B;&#x88AB;&#x8FDE;&#x63A5;&#x5728;&#x4E00;&#x8D77;&#x7684;&#x6307;&#x5B9A;&#x6570;&#x91CF;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x526F;&#x672C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"><code>String.prototype.repeat()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x91CD;&#x590D;&#x6B21;&#x6570;&#x7684;&#x7531;&#x5143;&#x7D20;&#x7EC4;&#x6210;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><a title="replace() &#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x66FF;&#x6362;&#x503C;&#xFF08;replacement&#xFF09;&#x66FF;&#x6362;&#x6389;&#x4E00;&#x4E2A;&#x5339;&#x914D;&#x6A21;&#x5F0F;&#xFF08;pattern&#xFF09;&#x5728;&#x539F;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x67D0;&#x4E9B;&#x6216;&#x6240;&#x6709;&#x7684;&#x5339;&#x914D;&#x9879;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x66FF;&#x6362;&#x540E;&#x7684;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x8FD9;&#x4E2A;&#x66FF;&#x6362;&#x6A21;&#x5F0F;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#xA0;RegExp&#xFF0C;&#x66FF;&#x6362;&#x503C;&#x53EF;&#x4EE5;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace"><code>String.prototype.replace()</code></a></dt>
 <dd>&#x88AB;&#x7528;&#x6765;&#x5728;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x548C;&#x5B57;&#x7B26;&#x4E32;&#x76F4;&#x63A5;&#x6BD4;&#x8F83;&#xFF0C;&#x7136;&#x540E;&#x7528;&#x65B0;&#x7684;&#x5B50;&#x4E32;&#x6765;&#x66FF;&#x6362;&#x88AB;&#x5339;&#x914D;&#x7684;&#x5B50;&#x4E32;&#x3002;</dd>
 <dt><a title="search()&#xA0;&#x65B9;&#x6CD5;&#x6267;&#x884C;&#x4E00;&#x4E2A;&#x67E5;&#x627E;&#xFF0C;&#x770B;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x4E0E;&#x4E00;&#x4E2A;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x662F;&#x5426;&#x5339;&#x914D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search"><code>String.prototype.search()</code></a></dt>
 <dd>&#x5BF9;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#x548C;&#x6307;&#x5B9A;&#x5B57;&#x7B26;&#x4E32;&#x8FDB;&#x884C;&#x5339;&#x914D;&#x641C;&#x7D22;&#xFF0C;&#x8FD4;&#x56DE;&#x7B2C;&#x4E00;&#x4E2A;&#x51FA;&#x73B0;&#x7684;&#x5339;&#x914D;&#x9879;&#x7684;&#x4E0B;&#x6807;&#x3002;</dd>
 <dt><a title="slice()&#xA0;&#x65B9;&#x6CD5;&#x63D0;&#x53D6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x4E00;&#x90E8;&#x5206;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice"><code>String.prototype.slice()</code></a></dt>
 <dd>&#x6458;&#x53D6;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x533A;&#x57DF;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;</dd>
 <dt><a title="split&#xFF08;&#xFF09;&#x65B9;&#x6CD5;&#x901A;&#x8FC7;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5206;&#x6210;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x4ECE;&#x800C;&#x5C06;&#x4E00;&#x4E2A;String&#x5BF9;&#x8C61;&#x62C6;&#x5206;&#x4E3A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split"><code>String.prototype.split()</code></a></dt>
 <dd>&#x901A;&#x8FC7;&#x5206;&#x79BB;&#x5B57;&#x7B26;&#x4E32;&#x6210;&#x5B57;&#x4E32;&#xFF0C;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5BF9;&#x8C61;&#x5206;&#x5272;&#x6210;&#x5B57;&#x7B26;&#x4E32;&#x6570;&#x7EC4;&#x3002;</dd>
 <dt><a title="startsWith()&#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x662F;&#x4EE5;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x7ED9;&#x5B9A;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x201C;&#x5F00;&#x5934;&#x201D;&#x7684;&#xFF0C;&#x6839;&#x636E;&#x5224;&#x65AD;&#x7ED3;&#x679C;&#x8FD4;&#x56DE; true &#x6216; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"><code>String.prototype.startsWith()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></dt>
 <dd>&#x5224;&#x65AD;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;&#x662F;&#x5426;&#x5339;&#x914D;&#x5176;&#x4ED6;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x3002;</dd>
 <dt><a title="substr() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x5F00;&#x59CB;&#x5230;&#x6307;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x5B50;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr"><code>String.prototype.substr()</code></a></dt>
 <dd>Returns the characters in a string beginning at the specified location through the specified number of characters.</dd>
 <dt><a title="substring() &#x8FD4;&#x56DE;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x4E2A;&#x7D22;&#x5F15;&#x4E4B;&#x95F4;&#xFF08;&#x6216;&#x5230;&#x5B57;&#x7B26;&#x4E32;&#x672B;&#x5C3E;&#xFF09;&#x7684;&#x5B50;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>String.prototype.substring()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x6307;&#x5B9A;&#x53E6;&#x4E2A;&#x4E0B;&#x6807;&#x4E4B;&#x95F4;&#x7684;&#x5B57;&#x7B26;&#x3002;</dd>
 <dt><a title="toLocaleLowerCase()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x5C0F;&#x5199;&#x4E4B;&#x540E;&#x7684;&#x503C;&#xFF0C;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#x6839;&#x636E;&#x4EFB;&#x4F55;&#x672C;&#x5730;&#x5316;&#x7279;&#x5B9A;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase"><code>String.prototype.toLocaleLowerCase()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x5F53;&#x524D;&#x533A;&#x57DF;&#x8BBE;&#x7F6E;&#xFF0C;&#x5C06;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x8F6C;&#x6362;&#x6210;&#x5C0F;&#x5199;&#x3002;&#x5BF9;&#x4E8E;&#x5927;&#x591A;&#x6570;&#x8BED;&#x8A00;&#x6765;&#x8BF4;&#xFF0C;<a title="toLowerCase()&#xA0;&#x4F1A;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x4E3A;&#x5C0F;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>toLowerCase</code></a>&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x81F4;&#x7684;&#x3002;</dd>
 <dt><a title="toLocaleUpperCase()&#xA0;&#x4F7F;&#x7528;&#x672C;&#x5730;&#x5316;&#xFF08;locale-specific&#xFF09;&#x7684;&#x5927;&#x5C0F;&#x5199;&#x6620;&#x5C04;&#x89C4;&#x5219;&#x5C06;&#x8F93;&#x5165;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x5316;&#x6210;&#x5927;&#x5199;&#x5F62;&#x5F0F;&#x5E76;&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase"><code>String.prototype.toLocaleUpperCase()</code></a></dt>
 <dd>&#x6839;&#x636E;&#x5F53;&#x524D;&#x533A;&#x57DF;&#x8BBE;&#x7F6E;&#xFF0C;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x8F6C;&#x6362;&#x6210;&#x5927;&#x5199;&#xFF0C;&#x5BF9;&#x4E8E;&#x5927;&#x591A;&#x6570;&#x8BED;&#x8A00;&#x6765;&#x8BF4;&#xFF0C;<a title="toUpperCase()&#xA0;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x5927;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"><code>toUpperCase</code></a>&#x7684;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x4E00;&#x81F4;&#x7684;&#x3002;</dd>
 <dt><a title="toLowerCase()&#xA0;&#x4F1A;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x4E3A;&#x5C0F;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>String.prototype.toLowerCase()</code></a></dt>
 <dd>&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x6210;&#x5C0F;&#x5199;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</dd>
 <dt><a title="toSource()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x4EE3;&#x8868;&#x5BF9;&#x8C61;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toSource"><code>String.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the <a title="&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6E90;&#x4EE3;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource"><code>Object.prototype.toSource</code></a> method.</dd>
 <dt><a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString"><code>String.prototype.toString()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x7528;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x7684;&#x7279;&#x5B9A;&#x5BF9;&#x8C61;&#x3002;&#x91CD;&#x5199; <a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x8868;&#x793A;&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
 <dt><a title="toUpperCase()&#xA0;&#x5C06;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x8F6C;&#x6362;&#x4E3A;&#x5927;&#x5199;&#x5F62;&#x5F0F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"><code>String.prototype.toUpperCase()</code></a></dt>
 <dd>&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x6210;&#x5927;&#x5199;&#x5E76;&#x8FD4;&#x56DE;&#x3002;</dd>
 <dt><a title="trim() &#x65B9;&#x6CD5;&#x4F1A;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x4E24;&#x7AEF;&#x7684;&#x7A7A;&#x767D;&#x5B57;&#x7B26;&#x3002;&#x5728;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x91CC;&#x7684;&#x7A7A;&#x683C;&#x5305;&#x62EC;&#x6240;&#x6709;&#x7684;&#x7A7A;&#x683C;&#x5B57;&#x7B26;&#xA0;(space, tab, no-break space &#x7B49;)&#x4EE5;&#x53CA;&#x6240;&#x6709;&#x7684;&#x884C;&#x7ED3;&#x675F;&#x7B26;&#xFF08;&#x5982; LF&#xFF0C;CR&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim"><code>String.prototype.trim()</code></a></dt>
 <dd>&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F00;&#x59CB;&#x548C;&#x7ED3;&#x5C3E;&#x53BB;&#x9664;&#x7A7A;&#x683C;&#x3002;&#x53C2;&#x7167;&#x90E8;&#x5206; ECMAScript 5 &#x6807;&#x51C6;&#x3002;</dd>
 <dt><a title="&#x79FB;&#x9664;&#x5B57;&#x7B26;&#x4E32;&#x5DE6;&#x7AEF;&#x7684;&#x8FDE;&#x7EED;&#x7A7A;&#x767D;&#x7B26;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft"><code>String.prototype.trimLeft()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5DE6;&#x4FA7;&#x53BB;&#x9664;&#x7A7A;&#x683C;&#x3002;</dd>
 <dt><a title="&#x79FB;&#x9664;&#x5B57;&#x7B26;&#x4E32;&#x53F3;&#x7AEF;&#x7684;&#x8FDE;&#x7EED;&#x7A7A;&#x767D;&#x7B26;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight"><code>String.prototype.trimRight()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>&#x4ECE;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x53F3;&#x4FA7;&#x53BB;&#x9664;&#x7A7A;&#x683C;&#x3002;</dd>
 <dt><a title="valueOf() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;String&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#xFF08;primitive value&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"><code>String.prototype.valueOf()</code></a></dt>
 <dd>&#x8FD4;&#x56DE;&#x7279;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;&#x91CD;&#x5199; <a title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>Object.prototype.valueOf</code></a> &#x65B9;&#x6CD5;&#x3002;</dd>
</dl><h3 name="HTML_wrapper_methods" id="HTML_wrapper_methods">HTML wrapper methods</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x65B9;&#x6CD5;&#x88AB;&#x9650;&#x5236;&#x4F7F;&#x7528;&#xFF0C;&#x56E0;&#x4E3A;&#x53EA;&#x5BF9;&#x53EF;&#x7528;&#x7684;HTML&#x8868;&#x60C5;&#x548C;&#x5C5E;&#x6027;&#x63D0;&#x4F9B;&#x90E8;&#x5206;&#x652F;&#x6301;&#x3002;</p>

<dl><dt><a title="anchor() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; &lt;a&gt; HTML &#x951A;&#x5143;&#x7D20;&#xFF0C;&#x88AB;&#x7528;&#x4F5C;&#x8D85;&#x6587;&#x672C;&#x9776;&#x6807;&#xFF08;hypertext target&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor"><code>String.prototype.anchor()</code></a></dt>
 <dd><code><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-name">&lt;a name=&quot;name&quot;&gt;</a></code> (hypertext target)</dd>
 <dt><a title="big()&#x65B9;&#x6CD5;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4F7F;&#x5B57;&#x7B26;&#x4E32;&#x663E;&#x793A;&#x5927;&#x53F7;&#x5B57;&#x4F53;&#x7684;&lt;big&gt;&#x6807;&#x7B7E;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big"><code>String.prototype.big()</code></a></dt>
 <dd><a title="The HTML Big Element (&lt;big&gt;) &#x4F1A;&#x4F7F;&#x5B57;&#x4F53;&#x52A0;&#x5927;&#x4E00;&#x53F7;&#xFF08;&#x4F8B;&#x5982;&#x4ECE;&#x5C0F;&#x53F7;(small)&#x5230;&#x4E2D;&#x53F7;(medium)&#xFF0C;&#x4ECE;&#x5927;&#x53F7;(large)&#x5230;&#x52A0;&#x5927;(x-large)&#xFF09;&#xFF0C;&#x6700;&#x5927;&#x4E0D;&#x8D85;&#x8FC7;&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x6700;&#x5927;&#x5B57;&#x4F53;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/big"><code>&lt;big&gt;</code></a></dd>
 <dt><a title="The blink() method creates a &lt;blink&gt; HTML element that causes a string to blink." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink"><code>String.prototype.blink()</code></a></dt>
 <dd><a title="HTML Blink Element (&lt;blink&gt;)&#x4E0D;&#x662F;&#x6807;&#x51C6;&#x5143;&#x7D20;&#xFF0C;&#x5B83;&#x4F1A;&#x4F7F;&#x5305;&#x542B;&#x5176;&#x4E2D;&#x7684;&#x6587;&#x672C;&#x95EA;&#x70C1;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/blink"><code>&lt;blink&gt;</code></a></dd>
 <dt><a title="bold() &#x65B9;&#x6CD5;&#x4F1A;&#x521B;&#x5EFA;&#xA0;HTML &#x5143;&#x7D20; &#x201C;b&#x201D;&#xFF0C;&#x5E76;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x52A0;&#x7C97;&#x5C55;&#x793A;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold"><code>String.prototype.bold()</code></a></dt>
 <dd><a title="HTML &lt;b&gt; &#x5143;&#x7D20;&#x8868;&#x793A;&#x76F8;&#x5BF9;&#x4E8E;&#x666E;&#x901A;&#x6587;&#x672C;&#x5B57;&#x4F53;&#x4E0A;&#x7684;&#x533A;&#x522B;&#xFF0C;&#x4F46;&#x4E0D;&#x8868;&#x793A;&#x4EFB;&#x4F55;&#x7279;&#x6B8A;&#x7684;&#x5F3A;&#x8C03;&#x6216;&#x8005;&#x5173;&#x8054;&#x3002;&#x5B83;&#x901A;&#x5E38;&#x7528;&#x5728;&#x6458;&#x8981;&#x4E2D;&#x7684;&#x5173;&#x952E;&#x5B57;&#x3001;&#x5BA1;&#x67E5;&#x4E2D;&#x7684;&#x4EA7;&#x54C1;&#x540D;&#x79F0;&#x6216;&#x8005;&#x5176;&#x4ED6;&#x9700;&#x8981;&#x663E;&#x793A;&#x4E3A;&#x52A0;&#x7C97;&#x7684;&#x6587;&#x5B57;&#x533A;&#x57DF;&#x3002;&#x5B83;&#x7684;&#x53E6;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;&#x4F8B;&#x5B50;&#x662F;&#x7528;&#x6765;&#x6807;&#x8BB0;&#x4E00;&#x7BC7;&#x6587;&#x7AE0;&#x4E2D;&#x6BCF;&#x4E00;&#x6BB5;&#x7684;&#x5F15;&#x8A00;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/b"><code>&lt;b&gt;</code></a></dd>
 <dt><a title="fixed()&#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x6807;&#x7B7E;&#x5143;&#x7D20;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x5305;&#x88F9;&#x8D77;&#x6765;&#xFF0C;&#x4ECE;&#x800C;&#x8BA9;&#x8FD9;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x91CC;&#x9762;&#x7684;&#x5185;&#x5BB9;&#x5177;&#x6709;&#x56FA;&#x5B9A;&#x95F4;&#x8DDD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fixed"><code>String.prototype.fixed()</code></a></dt>
 <dd><a title="The HTML Teletype Text Element (&lt;tt&gt;) produces an inline element displayed in the browser&apos;s default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the &lt;code&gt; element." href="/zh-CN/docs/Web/HTML/Element/tt"><code>&lt;tt&gt;</code></a></dd>
 <dt><a title="&#x8BE5;fontcolor()&#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;{{ HTMLElement&#x7684;&#xFF08;&#x201C;&#x5B57;&#x4F53;&#x201D;&#xFF09; }}&#x7684;HTML&#x5BFC;&#x81F4;&#x5728;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x4F53;&#x989C;&#x8272;&#x8981;&#x663E;&#x793A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5143;&#x7D20;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor"><code>String.prototype.fontcolor()</code></a></dt>
 <dd><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/font#attr-color" class="new"><code>&lt;font color=&quot;<em>color</em>&quot;&gt;</code></a></dd>
 <dt><a title="The fontsize() method creates a &lt;font&gt; HTML element that causes a string to be displayed in the specified font size." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize"><code>String.prototype.fontsize()</code></a></dt>
 <dd><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/font#attr-size" class="new"><code>&lt;font size=&quot;<em>size</em>&quot;&gt;</code></a></dd>
 <dt><a title="The italics() method creates an &lt;i&gt; HTML element that causes a string to be italic." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/italics"><code>String.prototype.italics()</code></a></dt>
 <dd><a title="HTML&#x5143;&#x7D20; &lt;i&gt; &#x7528;&#x4E8E;&#x8868;&#x73B0;&#x56E0;&#x67D0;&#x4E9B;&#x539F;&#x56E0;&#x9700;&#x8981;&#x533A;&#x5206;&#x666E;&#x901A;&#x6587;&#x672C;&#x7684;&#x4E00;&#x7CFB;&#x5217;&#x6587;&#x672C;&#x3002;&#x4F8B;&#x5982;&#x6280;&#x672F;&#x672F;&#x8BED;&#x3001;&#x5916;&#x6587;&#x77ED;&#x8BED;&#x6216;&#x662F;&#x5C0F;&#x8BF4;&#x4E2D;&#x4EBA;&#x7269;&#x7684;&#x601D;&#x60F3;&#x6D3B;&#x52A8;&#x7B49;&#xFF0C;&#x5B83;&#x7684;&#x5185;&#x5BB9;&#x901A;&#x5E38;&#x4EE5;&#x659C;&#x4F53;&#x663E;&#x793A;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a></dd>
 <dt><a title="link() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A; &lt;a&gt; HTML &#x5143;&#x7D20;&#xFF0C;&#x7528;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x4F5C;&#x4E3A;&#x8D85;&#x94FE;&#x63A5;&#x7684;&#x663E;&#x793A;&#x6587;&#x672C;&#xFF0C;&#x53C2;&#x6570;&#x4F5C;&#x4E3A;&#x6307;&#x5411;&#x53E6;&#x4E00;&#x4E2A; URL &#x7684;&#x8D85;&#x94FE;&#x63A5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/link"><code>String.prototype.link()</code></a></dt>
 <dd><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href" class="external"><code>&lt;a href=&quot;<em>url</em>&quot;&gt;</code></a> (link to URL)</dd>
 <dt><a title="small()&#xA0;&#x65B9;&#x6CD5;&#x7684;&#x4F5C;&#x7528;&#x662F;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x4F7F;&#x5B57;&#x7B26;&#x4E32;&#x663E;&#x793A;&#x5C0F;&#x53F7;&#x5B57;&#x4F53;&#x7684;&#xA0;&lt;small&gt; &#x6807;&#x7B7E;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small"><code>String.prototype.small()</code></a></dt>
 <dd><a title="HTML &#x4E2D;&#x7684;&#x5143;&#x7D20;&#x5C07;&#x4F7F;&#x6587;&#x672C;&#x7684;&#x5B57;&#x4F53;&#x53D8;&#x5C0F;&#x4E00;&#x53F7;&#x3002;(&#x4F8B;&#x5982;&#x4ECE;&#x5927;&#x53D8;&#x6210;&#x4E2D;&#x7B49;&#xFF0C;&#x4ECE;&#x4E2D;&#x7B49;&#x53D8;&#x6210;&#x5C0F;&#xFF0C;&#x4ECE;&#x5C0F;&#x53D8;&#x6210;&#x8D85;&#x5C0F;)&#x3002;&#x5728;HTML5&#x4E2D;&#xFF0C;&#x9664;&#x4E86;&#x5B83;&#x7684;&#x6837;&#x5F0F;&#x542B;&#x4E49;&#xFF0C;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x88AB;&#x91CD;&#x65B0;&#x5B9A;&#x4E49;&#x4E3A;&#x8868;&#x793A;&#x8FB9;&#x6CE8;&#x91CA;&#x548C;&#x9644;&#x5C5E;&#x7EC6;&#x5219;&#xFF0C;&#x5305;&#x62EC;&#x7248;&#x6743;&#x548C;&#x6CD5;&#x5F8B;&#x6587;&#x672C;&#x3002;" href="/zh-CN/docs/Web/HTML/Element/small"><code>&lt;small&gt;</code></a></dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike" class="new"><code>String.prototype.strike()</code></a></dt>
 <dd><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/strike" class="new"><code>&lt;strike&gt;</code></a></dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub" class="new"><code>String.prototype.sub()</code></a></dt>
 <dd><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/sub" class="new"><code>&lt;sub&gt;</code></a></dd>
 <dt><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup" class="new"><code>String.prototype.sup()</code></a></dt>
 <dd><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/HTML/Element/sup" class="new"><code>&lt;sup&gt;</code></a></dd>
</dl><div><div style="border: 5px solid #D1D1FF; background: #f5f5ff; padding: 2px 10px; margin: 25px 0; overflow: hidden;" class="inheritsbox template-jsOverrides"> 
<div><span style="font-weight: 700;">Methods inherited from <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>:</span></div>
<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineGetter" class="new internal"><code>__defineGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/DefineSetter" class="new internal"><code>__defineSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty" class="internal"><code>hasOwnProperty</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf" class="internal"><code>isPrototypeOf</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupGetter" class="internal"><code>__lookupGetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/LookupSetter" class="new internal"><code>__lookupSetter__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/NoSuchMethod" class="internal"><code>__noSuchMethod__</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/PropertyIsEnumerable" class="internal"><code>propertyIsEnumerable</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/ToLocaleString" class="internal"><code>toLocaleString</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Unwatch" class="internal"><code>unwatch</code></a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Watch" class="internal"><code>watch</code></a></div>
</div></div><p></p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;&#xA0;</h2>

<h3 id="&#x5C06;&#x5176;&#x4ED6;&#x503C;&#x8F6C;&#x6362;&#x6210;&#x5B57;&#x7B26;&#x4E32;">&#x5C06;&#x5176;&#x4ED6;&#x503C;&#x8F6C;&#x6362;&#x6210;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x4F7F;&#x7528; String() &#x65B9;&#x6CD5;&#x5C06;&#x5176;&#x5B83;&#x5BF9;&#x8C61;&#x8F6C;&#x5316;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x53EF;&#x4EE5;&#x88AB;&#x8BA4;&#x4E3A;&#x662F;&#x4E00;&#x79CD;&#x66F4;&#x52A0;&#x5B89;&#x5168;&#x7684;&#x505A;&#x6CD5;&#xFF0C;&#x867D;&#x7136;&#x8BE5;&#x65B9;&#x6CD5;&#x5E95;&#x5C42;&#x4F7F;&#x7528;&#x7684;&#x4E5F;&#x662F; toString() &#x65B9;&#x6CD5;&#xFF0C;&#x4F46;&#x662F;&#x9488;&#x5BF9; null/undefined/symbols&#xFF0C;String() &#x65B9;&#x6CD5;&#x4F1A;&#x6709;&#x7279;&#x6B8A;&#x7684;&#x5904;&#x7406;&#xFF1A;</p>

<pre class="brush: js">var outputStrings = [];
for (let i = 0, n = inputValues.length; i &lt; n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.5" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">String</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-string-objects" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">String</small></a></td>
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
   <td>0.2</td>
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

<h2 id="sect1">&#xA0;</h2>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="&#x4E00;&#x4E2A;UTF-16&#x5B57;&#x7B26;&#x4E32;&#xFF0C;JavaScript &#x6B63;&#x662F;&#x4F7F;&#x7528;&#x4E86;&#x8FD9;&#x79CD;&#x7F16;&#x7801;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x6240;&#x4EE5;&#xA0;DOMString&#xA0;&#x76F4;&#x63A5;&#x88AB;&#x6620;&#x5C04;&#x4E3A;&#xFF08;is mapped directly to&#xFF09;String&#x3002;" href="/zh-CN/docs/Web/API/DOMString"><code>DOMString</code></a></li>
 <li><a title="/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView" href="/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView" class="new"><code>StringView</code> &#x2013; a C-like representation of strings based on typed arrays</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString/Binary">Binary strings</a></li>
</ul>
                  
                
              