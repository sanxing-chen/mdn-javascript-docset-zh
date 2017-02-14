
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="Summary" name="Summary">&#x6982;&#x8FF0;</h2>

<p><strong>&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF08;Bitwise operators&#xFF09;</strong>&#xA0;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operands&#xFF09;&#x5F53;&#x4F5C;32&#x4F4D;&#x7684;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;&#x7531;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5341;&#x8FDB;&#x5236;&#x3001;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6216;&#x516B;&#x8FDB;&#x5236;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" title="/en-US/docs/JavaScript/Reference/Global_Objects/Number">&#x6570;&#x503C;</a>&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x5341;&#x8FDB;&#x5236;&#x6570;9&#xFF0C;&#x7528;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5219;&#x4E3A;1001&#x3002;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x64CD;&#x4F5C;&#x6570;&#x5B57;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF0C;&#x4F46;&#x662F;&#x8FD4;&#x56DE;&#x503C;&#x4F9D;&#x7136;&#x662F;&#x6807;&#x51C6;&#x7684;JavaScript&#x6570;&#x503C;&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x8868;&#x683C;&#x603B;&#x7ED3;&#x4E86;JavaScript&#x4E2D;&#x7684;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x8FD0;&#x7B97;&#x7B26;</th>
   <th>&#x7528;&#x6CD5;</th>
   <th>&#x63CF;&#x8FF0;</th>
  </tr>
  <tr>
   <td><a href="#Bitwise_AND">&#x6309;&#x4F4D;&#x4E0E;&#xFF08; AND&#xFF09;</a></td>
   <td style="white-space: nowrap;"><code>a &amp; b</code></td>
   <td>&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x53EA;&#x6709;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x76F8;&#x5E94;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x90FD;&#x662F;1&#x65F6;&#xFF0C;&#x7ED3;&#x679C;&#x624D;&#x4E3A;1&#xFF0C;&#x5426;&#x5219;&#x4E3A;0&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Bitwise_OR">&#x6309;&#x4F4D;&#x6216;&#xFF08;OR&#xFF09;</a></td>
   <td style="white-space: nowrap;"><code>a | b</code></td>
   <td>&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x5F53;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x76F8;&#x5E94;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;1&#x65F6;&#xFF0C;&#x7ED3;&#x679C;&#x4E3A;1&#xFF0C;&#x5426;&#x5219;&#x4E3A;0&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Bitwise_XOR">&#x6309;&#x4F4D;&#x5F02;&#x6216;&#xFF08;XOR&#xFF09;</a></td>
   <td style="white-space: nowrap;"><code>a ^ b</code></td>
   <td>&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x5F53;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x76F8;&#x5E94;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x6709;&#x4E14;&#x53EA;&#x6709;&#x4E00;&#x4E2A;1&#x65F6;&#xFF0C;&#x7ED3;&#x679C;&#x4E3A;1&#xFF0C;&#x5426;&#x5219;&#x4E3A;0&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Bitwise_NOT">&#x6309;&#x4F4D;&#x975E;&#xFF08;NOT&#xFF09;</a></td>
   <td style="white-space: nowrap;"><code>~ a</code></td>
   <td>&#x53CD;&#x8F6C;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x5373;0&#x53D8;&#x6210;1&#xFF0C;1&#x53D8;&#x6210;0&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Left_shift">&#x5DE6;&#x79FB;&#xFF08;L</a><a href="#Left_shift" style="line-height: 1.5;">eft shift&#xFF09;</a></td>
   <td style="white-space: nowrap;"><code>a &lt;&lt; b</code></td>
   <td>&#x5C06;&#xA0;<code>a</code>&#xA0;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#x5411;&#x5DE6;&#x79FB;&#xA0;<code>b</code> (&lt; 32) &#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x53F3;&#x8FB9;&#x7528;0&#x586B;&#x5145;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Right_shift">&#x6709;&#x7B26;&#x53F7;&#x53F3;&#x79FB;</a></td>
   <td style="white-space: nowrap;"><code>a &gt;&gt; b</code></td>
   <td>&#x5C06; a &#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5411;&#x53F3;&#x79FB;<code> b </code>(&lt; 32) &#x4F4D;&#xFF0C;&#x4E22;&#x5F03;&#x88AB;&#x79FB;&#x51FA;&#x7684;&#x4F4D;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="#Unsigned_right_shift">&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;</a></td>
   <td style="white-space: nowrap;"><code>a &gt;&gt;&gt; b</code></td>
   <td>&#x5C06; a &#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x8868;&#x793A;&#x5411;&#x53F3;&#x79FB;<code> b </code>(&lt; 32) &#x4F4D;&#xFF0C;&#x4E22;&#x5F03;&#x88AB;&#x79FB;&#x51FA;&#x7684;&#x4F4D;&#xFF0C;&#x5E76;&#x4F7F;&#x7528; 0 &#x5728;&#x5DE6;&#x4FA7;&#x586B;&#x5145;&#x3002;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.9C.89.E7.AC.A6.E5.8F.B732.E4.BD.8D.E6.95.B4.E6.95.B0">&#x6709;&#x7B26;&#x53F7;32&#x4F4D;&#x6574;&#x6570;</h2>

<p>&#x6240;&#x6709;&#x7684;&#x6309;&#x4F4D;&#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#x90FD;&#x4F1A;&#x88AB;&#x8F6C;&#x6210;&#x8865;&#x7801;&#xFF08;two&apos;s complement&#xFF09;&#x5F62;&#x5F0F;&#x7684;&#x6709;&#x7B26;&#x53F7;32&#x4F4D;&#x6574;&#x6570;&#x3002;&#x8865;&#x7801;&#x5F62;&#x5F0F;&#x662F;&#x6307;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x8D1F;&#x5BF9;&#x5E94;&#x503C;&#xFF08;negative counterpart&#xFF09;&#xFF08;&#x5982; 5&#x548C;-5&#xFF09;&#x4E3A;&#x6570;&#x503C;&#x7684;&#x6240;&#x6709;&#x6BD4;&#x7279;&#x4F4D;&#x53CD;&#x8F6C;&#x540E;&#xFF0C;&#x518D;&#x52A0;1&#x3002;&#x53CD;&#x8F6C;&#x6BD4;&#x7279;&#x4F4D;&#x5373;&#x8BE5;&#x6570;&#x503C;&#x8FDB;&#x884C;&#x2019;&#x975E;&#x2018;&#x4F4D;&#x8FD0;&#x7B97;&#xFF0C;&#x4E5F;&#x5373;&#x8BE5;&#x6570;&#x503C;&#x7684;&#x53CD;&#x7801;&#x3002;&#x4F8B;&#x5982;&#x4E0B;&#x9762;&#x4E3A;&#x6574;&#x6570;314&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x7F16;&#x7801;&#xFF1A;</p>

<pre>00000000000000000000000100111010
</pre>

<p>&#x4E0B;&#x9762;&#x7F16;&#x7801;&#xA0;<code>~314</code>&#xFF0C;&#x5373;&#xA0;<code>314</code>&#xA0;&#x7684;&#x53CD;&#x7801;&#xFF1A;</p>

<pre>11111111111111111111111011000101
</pre>

<p>&#x6700;&#x540E;&#xFF0C;&#x4E0B;&#x9762;&#x7F16;&#x7801;&#xA0;<code>-314</code>&#xFF0C;&#x5373;&#xA0;<code>314</code>&#xA0;&#x7684;&#x8865;&#x7801;&#xFF1A;</p>

<pre>11111111111111111111111011000110
</pre>

<p>&#x8865;&#x7801;&#x4FDD;&#x8BC1;&#x4E86;&#x5F53;&#x4E00;&#x4E2A;&#x6570;&#x662F;&#x6B63;&#x6570;&#x65F6;&#xFF0C;&#x5176;&#x6700;&#x5DE6;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x662F;0&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x6570;&#x662F;&#x8D1F;&#x6570;&#x65F6;&#xFF0C;&#x5176;&#x6700;&#x5DE6;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x662F;1&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x6700;&#x5DE6;&#x8FB9;&#x7684;&#x6BD4;&#x7279;&#x4F4D;&#x88AB;&#x79F0;&#x4E3A;&#x7B26;&#x53F7;&#x4F4D;&#xFF08;<em>sign bit</em>&#xFF09;&#x3002;</p>

<p><code>0</code>&#xA0;&#x662F;&#x6240;&#x6709;&#x6BD4;&#x7279;&#x6570;&#x5B57;0&#x7EC4;&#x6210;&#x7684;&#x6574;&#x6570;&#x3002;</p>

<pre>0 (base 10) = 00000000000000000000000000000000 (base 2)
</pre>

<p><code>-1</code> &#x662F;&#x6240;&#x6709;&#x6BD4;&#x7279;&#x6570;&#x5B57;1&#x7EC4;&#x6210;&#x7684;&#x6574;&#x6570;&#x3002;</p>

<pre>-1 (base 10) = 11111111111111111111111111111111 (base 2)
</pre>

<p><code>-2147483648</code>&#xFF08;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF1A;<code>-0x80000000</code>&#xFF09;&#x662F;&#x9664;&#x4E86;&#x6700;&#x5DE6;&#x8FB9;&#x4E3A;1&#x5916;&#xFF0C;&#x5176;&#x4ED6;&#x6BD4;&#x7279;&#x4F4D;&#x90FD;&#x4E3A;0&#x7684;&#x6574;&#x6570;&#x3002;</p>

<pre>-2147483648 (base 10) = 10000000000000000000000000000000 (base 2)
</pre>

<p><code>2147483647</code>&#xFF08;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x5F62;&#x5F0F;&#xFF1A;<code>0x7fffffff</code>&#xFF09;&#x662F;&#x9664;&#x4E86;&#x6700;&#x5DE6;&#x8FB9;&#x4E3A;0&#x5916;&#xFF0C;&#x5176;&#x4ED6;&#x6BD4;&#x7279;&#x4F4D;&#x90FD;&#x4E3A;1&#x7684;&#x6574;&#x6570;&#x3002;</p>

<pre>2147483647 (base 10) = 01111111111111111111111111111111 (base 2)
</pre>

<p>&#x6570;&#x5B57;<code>-2147483648</code> &#x548C; <code>2147483647</code>&#xA0;&#x662F;32&#x4F4D;&#x6709;&#x7B26;&#x53F7;&#x6570;&#x5B57;&#x6240;&#x80FD;&#x8868;&#x793A;&#x7684;&#x6700;&#x5C0F;&#x548C;&#x6700;&#x5927;&#x6574;&#x6570;&#x3002;</p>

<h2 id=".E6.8C.89.E4.BD.8D.E9.80.BB.E8.BE.91.E6.93.8D.E4.BD.9C.E7.AC.A6">&#x6309;&#x4F4D;&#x903B;&#x8F91;&#x64CD;&#x4F5C;&#x7B26;</h2>

<p>&#x4ECE;&#x6982;&#x5FF5;&#x4E0A;&#x8BB2;&#xFF0C;&#x6309;&#x4F4D;&#x903B;&#x8F91;&#x64CD;&#x4F5C;&#x7B26;&#x6309;&#x9075;&#x5B88;&#x4E0B;&#x9762;&#x89C4;&#x5219;&#xFF1A;</p>

<ul>
 <li>&#x64CD;&#x4F5C;&#x6570;&#x88AB;&#x8F6C;&#x6362;&#x6210;32&#x4F4D;&#x6574;&#x6570;&#xFF0C;&#x7528;&#x6BD4;&#x7279;&#x5E8F;&#x5217;&#xFF08;0&#x548C;1&#x7EC4;&#x6210;&#xFF09;&#x8868;&#x793A;&#x3002;</li>
 <li>&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x6BCF;&#x4E2A;&#x6BD4;&#x7279;&#x4F4D;&#x4E0E;&#x7B2C;&#x4E8C;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x76F8;&#x5E94;&#x6BD4;&#x7279;&#x4F4D;&#x5339;&#x914D;&#xFF1A;&#x7B2C;&#x4E00;&#x4F4D;&#x5BF9;&#x5E94;&#x7B2C;&#x4E00;&#x4F4D;&#xFF0C;&#x7B2C;&#x4E8C;&#x4F4D;&#x5BF9;&#x5E94;&#x7B2C;&#x4E8C;&#x4F4D;&#xFF0C;&#x4EE5;&#x6B64;&#x7C7B;&#x63A8;&#x3002;</li>
 <li>&#x4F4D;&#x8FD0;&#x7B97;&#x7B26;&#x5E94;&#x7528;&#x5230;&#x6BCF;&#x5BF9;&#x6BD4;&#x7279;&#x4F4D;&#xFF0C;&#x7ED3;&#x679C;&#x662F;&#x65B0;&#x7684;&#x6BD4;&#x7279;&#x503C;&#x3002;</li>
</ul>

<h3 id=".26_(.E6.8C.89.E4.BD.8D.E4.B8.8E)"><a name="Bitwise_AND">&amp; (&#x6309;&#x4F4D;&#x4E0E;)</a></h3>

<p>&#x5BF9;&#x6BCF;&#x5BF9;&#x6BD4;&#x7279;&#x4F4D;&#x6267;&#x884C;<strong>&#x4E0E;&#xFF08;AND&#xFF09;&#x64CD;&#x4F5C;</strong>&#x3002;&#x53EA;&#x6709; a &#x548C; b &#x90FD;&#x662F; 1 &#x65F6;&#xFF0C;a AND b &#x624D;&#x662F; 1&#x3002;<strong>&#x4E0E;&#x64CD;&#x4F5C;</strong>&#x7684;&#x771F;&#x503C;&#x8868;&#x5982;&#x4E0B;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">a</td>
   <td class="header">b</td>
   <td class="header">a AND b</td>
  </tr>
  <tr>
   <td>0</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
   <td>0</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>1</td>
  </tr>
 </tbody>
</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 &amp; 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
</pre>

<p>&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; 0 &#x6267;&#x884C;&#x6309;&#x4F4D;&#x4E0E;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x90FD;&#x4E3A; 0&#x3002;&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; -1 &#x6267;&#x884C;&#x6309;&#x4F4D;&#x4E0E;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x90FD;&#x4E3A; x&#x3002;</p>

<h3 id=".7C_(.E6.8C.89.E4.BD.8D.E6.88.96)"><a name="Bitwise_OR">| (&#x6309;&#x4F4D;&#x6216;)</a></h3>

<p>&#x5BF9;&#x6BCF;&#x4E00;&#x5BF9;&#x6BD4;&#x7279;&#x4F4D;&#x6267;&#x884C;<strong>&#x6216;&#xFF08;OR&#xFF09;&#x64CD;&#x4F5C;</strong>&#x3002;&#x5982;&#x679C; a &#x6216; b &#x4E3A; 1&#xFF0C;&#x5219;&#xA0;<code>a</code> OR <code>b</code> &#x7ED3;&#x679C;&#x4E3A; 1&#x3002;<strong>&#x6216;&#x64CD;&#x4F5C;</strong>&#x7684;&#x771F;&#x503C;&#x8868;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">a</td>
   <td class="header">b</td>
   <td class="header">a OR b</td>
  </tr>
  <tr>
   <td>0</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>1</td>
  </tr>
 </tbody>
</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
</pre>

<p>&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; 0 &#x8FDB;&#x884C;&#x6309;&#x4F4D;&#x6216;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x90FD;&#x662F; x&#x3002;&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; -1 &#x8FDB;&#x884C;&#x6309;&#x4F4D;&#x6216;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x90FD;&#x4E3A; -1&#x3002;</p>

<h3 id=".5E_(.E6.8C.89.E4.BD.8D.E5.BC.82.E6.88.96)"><a name="Bitwise_XOR">^ (&#x6309;&#x4F4D;&#x5F02;&#x6216;)</a></h3>

<p>&#x5BF9;&#x6BCF;&#x4E00;&#x5BF9;&#x6BD4;&#x7279;&#x4F4D;&#x6267;&#x884C;<strong>&#x5F02;&#x6216;&#xFF08;XOR&#xFF09;&#x64CD;&#x4F5C;</strong>&#x3002;&#x5F53; a &#x548C; b &#x4E0D;&#x76F8;&#x540C;&#x65F6;&#xFF0C;<code>a</code> XOR <code>b</code> &#x7684;&#x7ED3;&#x679C;&#x4E3A; 1&#x3002;<strong>&#x5F02;&#x6216;&#x64CD;&#x4F5C;</strong>&#x771F;&#x503C;&#x8868;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">a</td>
   <td class="header">b</td>
   <td class="header">a XOR b</td>
  </tr>
  <tr>
   <td>0</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>0</td>
  </tr>
 </tbody>
</table>

<pre>     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
</pre>

<p>&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; 0 &#x8FDB;&#x884C;&#x5F02;&#x6216;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x4E3A; x&#x3002;&#x5C06;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x4E0E; -1 &#x8FDB;&#x884C;&#x5F02;&#x6216;&#x64CD;&#x4F5C;&#xFF0C;&#x5176;&#x7ED3;&#x679C;&#x4E3A; ~x&#x3002;</p>

<h3 id=".7E_(.E6.8C.89.E4.BD.8D.E9.9D.9E)"><a name="Bitwise_NOT">~ (&#x6309;&#x4F4D;&#x975E;)</a></h3>

<p>&#x5BF9;&#x6BCF;&#x4E00;&#x4E2A;&#x6BD4;&#x7279;&#x4F4D;&#x6267;&#x884C;<strong>&#x975E;&#xFF08;NOT&#xFF09;&#x64CD;&#x4F5C;</strong>&#x3002;NOT <code>a</code> &#x7ED3;&#x679C;&#x4E3A; a &#x7684;&#x53CD;&#x8F6C;&#xFF08;&#x5373;&#x53CD;&#x7801;&#xFF09;&#x3002;<strong>&#x975E;&#x64CD;&#x4F5C;</strong>&#x7684;&#x771F;&#x503C;&#x8868;&#xFF1A;</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">a</td>
   <td class="header">NOT a</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
  </tr>
 </tbody>
</table>

<pre> 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
</pre>

<p>&#x5BF9;&#x4EFB;&#x4E00;&#x6570;&#x503C; x &#x8FDB;&#x884C;&#x6309;&#x4F4D;&#x975E;&#x64CD;&#x4F5C;&#x7684;&#x7ED3;&#x679C;&#x4E3A; -(x + 1)&#x3002;&#x4F8B;&#x5982;&#xFF0C;~5 &#x7ED3;&#x679C;&#x4E3A; -6&#x3002;</p>

<p>&#x4E0E; indexOf &#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x793A;&#x4F8B;&#xFF1A;</p>

<pre class="brush: js">var str = &apos;rawr&apos;;
var searchFor = &apos;a&apos;;

// &#x8FD9;&#x662F; if (-1*str.indexOf(&apos;a&apos;) &lt;= -1) &#x6761;&#x4EF6;&#x5224;&#x65AD;&#x7684;&#x53E6;&#x4E00;&#x79CD;&#x65B9;&#x6CD5;
if (~str.indexOf(searchFor)) {
  // searchFor &#x5305;&#x542B;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;
} else {
  // searchFor &#x4E0D;&#x5305;&#x542B;&#x5728;&#x5B57;&#x7B26;&#x4E32;&#x4E2D;
}

// (~str.indexOf(searchFor))&#x7684;&#x8FD4;&#x56DE;&#x503C;
// r == -1
// a == -2
// w == -3
</pre>

<h2 id=".E6.8C.89.E4.BD.8D.E7.A7.BB.E5.8A.A8.E6.93.8D.E4.BD.9C.E7.AC.A6">&#x6309;&#x4F4D;&#x79FB;&#x52A8;&#x64CD;&#x4F5C;&#x7B26;</h2>

<p>&#x6309;&#x4F4D;&#x79FB;&#x52A8;&#x64CD;&#x4F5C;&#x7B26;&#x6709;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#xFF1A;&#x7B2C;&#x4E00;&#x4E2A;&#x662F;&#x8981;&#x88AB;&#x79FB;&#x52A8;&#x7684;&#x6570;&#x5B57;&#xFF0C;&#x800C;&#x7B2C;&#x4E8C;&#x4E2A;&#x662F;&#x8981;&#x79FB;&#x52A8;&#x7684;&#x957F;&#x5EA6;&#x3002;&#x79FB;&#x52A8;&#x7684;&#x65B9;&#x5411;&#x6839;&#x636E;&#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x4E0D;&#x540C;&#x800C;&#x4E0D;&#x540C;&#x3002;</p>

<p>&#x6309;&#x4F4D;&#x79FB;&#x52A8;&#x4F1A;&#x5148;&#x5C06;&#x64CD;&#x4F5C;&#x6570;&#x8F6C;&#x6362;&#x4E3A;&#x5927;&#x7AEF; (big-endian) &#x8868;&#x793A;&#x7684; 32&#x4F4D;&#x6574;&#x6570;&#xFF1B; and return a result of the same type as the left operand (?)&#x3002;&#x53F3;&#x64CD;&#x4F5C;&#x6570;&#x5E94;&#x5F53;&#x5C0F;&#x4E8E; 32&#xFF0C;&#x5426;&#x5219;&#x53EA;&#x6709;&#x6700;&#x4F4E; 5 &#x4E2A;&#x5B57;&#x8282;&#x4F1A;&#x88AB;&#x4F7F;&#x7528;&#x3002;</p>

<h3 id="&lt;&lt;_(.E5.B7.A6.E7.A7.BB)"><a name="Left_shift">&lt;&lt; (&#x5DE6;&#x79FB;)</a></h3>

<p>&#x8BE5;&#x64CD;&#x4F5C;&#x7B26;&#x4F1A;&#x5C06;&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x5411;&#x5DE6;&#x79FB;&#x52A8;&#x6307;&#x5B9A;&#x7684;&#x4F4D;&#x6570;&#x3002;&#x5411;&#x5DE6;&#x88AB;&#x79FB;&#x51FA;&#x7684;&#x4F4D;&#x88AB;&#x4E22;&#x5F03;&#xFF0C;&#x53F3;&#x4FA7;&#x7528; 0 &#x8865;&#x5145;&#x3002;</p>

<p>For example, <code>9 &lt;&lt; 2</code> yields 36:</p>

<pre>     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 &lt;&lt; 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
</pre>

<p>&#x5728;&#x6570;&#x5B57; <strong>x</strong> &#x4E0A;&#x5DE6;&#x79FB; <strong>y</strong> &#x6BD4;&#x7279;&#x5F97;&#x5230; <strong>x * 2<sup>y</sup></strong>.</p>

<h3 id="&gt;&gt;_(.E6.9C.89.E7.AC.A6.E5.8F.B7.E5.8F.B3.E7.A7.BB)"><a name="Right_shift">&gt;&gt; (&#x6709;&#x7B26;&#x53F7;&#x53F3;&#x79FB;)</a></h3>

<p>&#x8BE5;&#x64CD;&#x4F5C;&#x7B26;&#x4F1A;&#x5C06;&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x5411;&#x53F3;&#x79FB;&#x52A8;&#x6307;&#x5B9A;&#x7684;&#x4F4D;&#x6570;&#x3002;&#x5411;&#x53F3;&#x88AB;&#x79FB;&#x51FA;&#x7684;&#x4F4D;&#x88AB;&#x4E22;&#x5F03;&#xFF0C;&#x62F7;&#x8D1D;&#x6700;&#x5DE6;&#x4FA7;&#x7684;&#x4F4D;&#x4EE5;&#x586B;&#x5145;&#x5DE6;&#x4FA7;&#x3002;&#x7531;&#x4E8E;&#x65B0;&#x7684;&#x6700;&#x5DE6;&#x4FA7;&#x7684;&#x4F4D;&#x603B;&#x662F;&#x548C;&#x4EE5;&#x524D;&#x76F8;&#x540C;&#xFF0C;&#x7B26;&#x53F7;&#x4F4D;&#x6CA1;&#x6709;&#x88AB;&#x6539;&#x53D8;&#x3002;&#x6240;&#x4EE5;&#x88AB;&#x79F0;&#x4F5C;&#x201C;&#x7B26;&#x53F7;&#x4F20;&#x64AD;&#x201D;&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C; <code>9 &gt;&gt; 2</code> &#x5F97;&#x5230; 2:</p>

<pre>     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 &gt;&gt; 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
</pre>

<p>&#x76F8;&#x6BD4;&#x4E4B;&#x4E0B;&#xFF0C; <code>-9 &gt;&gt; 2</code> &#x5F97;&#x5230; -3&#xFF0C;&#x56E0;&#x4E3A;&#x7B26;&#x53F7;&#x88AB;&#x4FDD;&#x7559;&#x4E86;&#x3002;</p>

<pre>     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 &gt;&gt; 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
</pre>

<h3 id="&gt;&gt;&gt;_(.E6.97.A0.E7.AC.A6.E5.8F.B7.E5.8F.B3.E7.A7.BB)"><a name="Unsigned_right_shift">&gt;&gt;&gt; (&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;)</a></h3>

<p>&#x8BE5;&#x64CD;&#x4F5C;&#x7B26;&#x4F1A;&#x5C06;&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x5411;&#x53F3;&#x79FB;&#x52A8;&#x6307;&#x5B9A;&#x7684;&#x4F4D;&#x6570;&#x3002;&#x5411;&#x53F3;&#x88AB;&#x79FB;&#x51FA;&#x7684;&#x4F4D;&#x88AB;&#x4E22;&#x5F03;&#xFF0C;&#x5DE6;&#x4FA7;&#x7528;0&#x586B;&#x5145;&#x3002;&#x56E0;&#x4E3A;&#x7B26;&#x53F7;&#x4F4D;&#x53D8;&#x6210;&#x4E86; 0&#xFF0C;&#x6240;&#x4EE5;&#x7ED3;&#x679C;&#x603B;&#x662F;&#x975E;&#x8D1F;&#x7684;&#x3002;&#xFF08;&#x8BD1;&#x6CE8;&#xFF1A;&#x5373;&#x4FBF;&#x53F3;&#x79FB; 0 &#x4E2A;&#x6BD4;&#x7279;&#xFF0C;&#x7ED3;&#x679C;&#x4E5F;&#x662F;&#x975E;&#x8D1F;&#x7684;&#x3002;&#xFF09;</p>

<p>&#x5BF9;&#x4E8E;&#x975E;&#x8D1F;&#x6570;&#xFF0C;&#x6709;&#x7B26;&#x53F7;&#x53F3;&#x79FB;&#x548C;&#x65E0;&#x7B26;&#x53F7;&#x53F3;&#x79FB;&#x603B;&#x662F;&#x8FD4;&#x56DE;&#x76F8;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002;&#x4F8B;&#x5982;&#xFF0C; <code>9 &gt;&gt;&gt; 2</code> &#x5F97;&#x5230; 2 &#x548C; <code>9 &gt;&gt; 2</code> &#x76F8;&#x540C;&#xFF1A;</p>

<pre>      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 &gt;&gt;&gt; 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
</pre>

<p>&#x4F46;&#x662F;&#x5BF9;&#x4E8E;&#x8D1F;&#x6570;&#x5374;&#x4E0D;&#x5C3D;&#x76F8;&#x540C;&#x3002; <code>-9 &gt;&gt;&gt; 2</code> &#x4EA7;&#x751F; 1073741821 &#x8FD9;&#x548C; <code>-9 &gt;&gt; 2</code> &#x4E0D;&#x540C;&#xFF1A;</p>

<pre>      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 &gt;&gt;&gt; 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
</pre>

<h2 id=".E7.A4.BA.E4.BE.8B">&#x793A;&#x4F8B;</h2>

<h3 id=".E4.BE.8B.E5.AD.90.EF.BC.9A.E6.A0.87.E5.BF.97.E4.BD.8D.E4.B8.8E.E6.8E.A9.E7.A0.81">&#x4F8B;&#x5B50;&#xFF1A;&#x6807;&#x5FD7;&#x4F4D;&#x4E0E;&#x63A9;&#x7801;</h3>

<p>&#x4F4D;&#x8FD0;&#x7B97;&#x7ECF;&#x5E38;&#x88AB;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x3001;&#x5904;&#x7406;&#x4EE5;&#x53CA;&#x8BFB;&#x53D6;&#x6807;&#x5FD7;&#x4F4D;&#x5E8F;&#x5217;&#x2014;&#x2014;&#x4E00;&#x79CD;&#x7C7B;&#x4F3C;&#x4E8C;&#x8FDB;&#x5236;&#x7684;&#x53D8;&#x91CF;&#x3002;&#x867D;&#x7136;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x53D8;&#x91CF;&#x4EE3;&#x66FF;&#x6807;&#x5FD7;&#x4F4D;&#x5E8F;&#x5217;&#xFF0C;&#x4F46;&#x662F;&#x8FD9;&#x6837;&#x53EF;&#x4EE5;&#x8282;&#x7701;&#x5185;&#x5B58;&#xFF08;1/32&#xFF09;&#x3002;</p>

<p>&#x4F8B;&#x5982;&#xFF0C;&#x6709; 4 &#x4E2A;&#x6807;&#x5FD7;&#x4F4D;&#xFF1A;</p>

<ul>
 <li>&#x6807;&#x5FD7;&#x4F4D; A&#xFF1A;&#x6211;&#x4EEC;&#x6709; ant</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; B&#xFF1A;&#x6211;&#x4EEC;&#x6709; bat</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; C&#xFF1A;&#x6211;&#x4EEC;&#x6709; cat</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; D&#xFF1A;&#x6211;&#x4EEC;&#x6709; duck</li>
</ul>

<p>&#x6807;&#x5FD7;&#x4F4D;&#x901A;&#x8FC7;&#x4F4D;&#x5E8F;&#x5217; DCBA &#x6765;&#x8868;&#x793A;&#x3002;&#x5F53;&#x4E00;&#x4E2A;&#x4F4D;&#x88AB;&#x7F6E;&#x4F4D; (set) &#x65F6;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x4E3A; 1 &#x3002;&#x5F53;&#x88AB;&#x6E05;&#x9664; (clear) &#x65F6;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x4E3A; 0 &#x3002;&#x4F8B;&#x5982;&#x4E00;&#x4E2A;&#x53D8;&#x91CF; <code>flags</code> &#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x503C;&#x4E3A; 0101&#xFF1A;</p>

<pre class="brush: js">var flags = 5;   // &#x4E8C;&#x8FDB;&#x5236; 0101
</pre>

<p>&#x8FD9;&#x4E2A;&#x503C;&#x8868;&#x793A;&#xFF1A;</p>

<ul>
 <li>&#x6807;&#x5FD7;&#x4F4D; A &#x662F; true &#xFF08;&#x6211;&#x4EEC;&#x6709; ant&#xFF09;&#xFF1B;</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; B &#x662F; false &#xFF08;&#x6211;&#x4EEC;&#x6CA1;&#x6709; bat&#xFF09;&#xFF1B;</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; C &#x662F; true &#xFF08;&#x6211;&#x4EEC;&#x6709; cat&#xFF09;&#xFF1B;</li>
 <li>&#x6807;&#x5FD7;&#x4F4D; D &#x662F; false &#xFF08;&#x6211;&#x4EEC;&#x6CA1;&#x6709; duck&#xFF09;&#xFF1B;</li>
</ul>

<p>&#x56E0;&#x4E3A;&#x4F4D;&#x8FD0;&#x7B97;&#x662F; 32 &#x4F4D;&#x7684;&#xFF0C; 0101 &#x5B9E;&#x9645;&#x4E0A;&#x662F; 00000000000000000000000000000101&#x3002;&#x56E0;&#x4E3A;&#x524D;&#x9762;&#x591A;&#x4F59;&#x7684; 0 &#x6CA1;&#x6709;&#x4EFB;&#x4F55;&#x610F;&#x4E49;&#xFF0C;&#x6240;&#x4EE5;&#x4ED6;&#x4EEC;&#x53EF;&#x4EE5;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<p>&#x63A9;&#x7801; (bitmask) &#x662F;&#x4E00;&#x4E2A;&#x901A;&#x8FC7;&#x4E0E;/&#x6216;&#x6765;&#x8BFB;&#x53D6;&#x6807;&#x5FD7;&#x4F4D;&#x7684;&#x4F4D;&#x5E8F;&#x5217;&#x3002;&#x5178;&#x578B;&#x7684;&#x5B9A;&#x4E49;&#x6BCF;&#x4E2A;&#x6807;&#x5FD7;&#x4F4D;&#x7684;&#x539F;&#x8BED;&#x63A9;&#x7801;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js">var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
</pre>

<p>&#x65B0;&#x7684;&#x63A9;&#x7801;&#x53EF;&#x4EE5;&#x5728;&#x4EE5;&#x4E0A;&#x63A9;&#x7801;&#x4E0A;&#x4F7F;&#x7528;&#x903B;&#x8F91;&#x8FD0;&#x7B97;&#x521B;&#x5EFA;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x63A9;&#x7801; 1011 &#x53EF;&#x4EE5;&#x901A;&#x8FC7; FLAG_A&#x3001;FLAG_B &#x548C; FLAG_D &#x903B;&#x8F91;&#x6216;&#x5F97;&#x5230;&#xFF1A;</p>

<pre class="brush: js">var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 =&gt; 1011
</pre>

<p>&#x67D0;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x4F4D;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E0E;&#x63A9;&#x7801;&#x505A;&#x903B;&#x8F91;&#x4E0E;&#x8FD0;&#x7B97;&#x5F97;&#x5230;&#xFF0C;&#x901A;&#x8FC7;&#x4E0E;&#x63A9;&#x7801;&#x7684;&#x4E0E;&#x8FD0;&#x7B97;&#x53EF;&#x4EE5;&#x53BB;&#x6389;&#x65E0;&#x5173;&#x7684;&#x4F4D;&#xFF0C;&#x5F97;&#x5230;&#x7279;&#x5B9A;&#x7684;&#x4F4D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x63A9;&#x7801; 0100 &#x53EF;&#x4EE5;&#x7528;&#x6765;&#x68C0;&#x67E5;&#x6807;&#x5FD7;&#x4F4D; C &#x662F;&#x5426;&#x88AB;&#x7F6E;&#x4F4D;&#xFF1A;</p>

<pre class="brush: js">// &#x5982;&#x679C;&#x6211;&#x4EEC;&#x6709; cat
if (flags &amp; FLAG_C) { // 0101 &amp; 0100 =&gt; 0100 =&gt; true
   // do stuff
}
</pre>

<p>&#x4E00;&#x4E2A;&#x6709;&#x591A;&#x4E2A;&#x4F4D;&#x88AB;&#x7F6E;&#x4F4D;&#x7684;&#x63A9;&#x7801;&#x8868;&#x8FBE;&#x4EFB;&#x4E00;/&#x6216;&#x8005;&#x7684;&#x542B;&#x4E49;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4EE5;&#x4E0B;&#x4E24;&#x4E2A;&#x8868;&#x8FBE;&#x662F;&#x7B49;&#x4EF7;&#x7684;&#xFF1A;</p>

<pre class="brush: js">// &#x5982;&#x679C;&#x6211;&#x4EEC;&#x6709; bat &#x6216;&#x8005; cat &#x81F3;&#x5C11;&#x4E00;&#x4E2A;
// (0101 &amp; 0010) || (0101 &amp; 0100) =&gt; 0000 || 0100 =&gt; true
if ((flags &amp; FLAG_B) || (flags &amp; FLAG_C)) {
   // do stuff
}
</pre>

<pre class="brush: js">// &#x5982;&#x679C;&#x6211;&#x4EEC;&#x6709; bat &#x6216;&#x8005; cat &#x81F3;&#x5C11;&#x4E00;&#x4E2A;
var mask = FLAG_B | FLAG_C; // 0010 | 0100 =&gt; 0110
if (flags &amp; mask) { // 0101 &amp; 0110 =&gt; 0100 =&gt; true
   // do stuff
}
</pre>

<p>&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E0E;&#x63A9;&#x7801;&#x505A;&#x6216;&#x8FD0;&#x7B97;&#x8BBE;&#x7F6E;&#x6807;&#x5FD7;&#x4F4D;&#xFF0C;&#x63A9;&#x7801;&#x4E2D;&#x4E3A; 1 &#x7684;&#x4F4D;&#x53EF;&#x4EE5;&#x8BBE;&#x7F6E;&#x5BF9;&#x5E94;&#x7684;&#x4F4D;&#x3002;&#x4F8B;&#x5982;&#x63A9;&#x7801; 1100 &#x53EF;&#x7528;&#x6765;&#x8BBE;&#x7F6E;&#x4F4D; C &#x548C; D&#xFF1A;</p>

<pre class="brush: js">// &#x6211;&#x4EEC;&#x6709; cat &#x548C; duck
var mask = FLAG_C | FLAG_D; // 0100 | 1000 =&gt; 1100
flags |= mask;   // 0101 | 1100 =&gt; 1101
</pre>

<p>&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4E0E;&#x63A9;&#x7801;&#x505A;&#x4E0E;&#x8FD0;&#x7B97;&#x6E05;&#x9664;&#x6807;&#x5FD7;&#x4F4D;&#xFF0C;&#x63A9;&#x7801;&#x4E2D;&#x4E3A; 0 &#x7684;&#x4F4D;&#x53EF;&#x4EE5;&#x8BBE;&#x7F6E;&#x5BF9;&#x5E94;&#x7684;&#x4F4D;&#x3002;&#x63A9;&#x7801;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x5BF9;&#x539F;&#x8BED;&#x63A9;&#x7801;&#x505A;&#x975E;&#x8FD0;&#x7B97;&#x5F97;&#x5230;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x63A9;&#x7801; 1010 &#x53EF;&#x4EE5;&#x7528;&#x6765;&#x6E05;&#x9664;&#x6807;&#x5FD7;&#x4F4D; A &#x548C; C &#xFF1A;</p>

<pre class="brush: js">// &#x6211;&#x4EEC;&#x6CA1;&#x6709; ant &#x4E5F;&#x6CA1;&#x6709; cat
var mask = ~(FLAG_A | FLAG_C); // ~0101 =&gt; 1010
flags &amp;= mask;   // 1101 &amp; 1010 =&gt; 1000
</pre>

<p>&#x5982;&#x4E0A;&#x7684;&#x63A9;&#x7801;&#x540C;&#x6837;&#x53EF;&#x4EE5;&#x901A;&#x8FC7; <code>~FLAG_A &amp; ~FLAG_C</code> &#x5F97;&#x5230;&#xFF08;&#x5FB7;&#x6469;&#x6839;&#x5B9A;&#x5F8B;&#xFF09;&#xFF1A;</p>

<pre class="brush: js">// &#x6211;&#x4EEC;&#x6CA1;&#x6709; ant &#x4E5F;&#x6CA1;&#x6709; cat
var mask = ~FLAG_A &amp; ~FLAG_C;
flags &amp;= mask;   // 1101 &amp; 1010 =&gt; 1000
</pre>

<p>&#x6807;&#x5FD7;&#x4F4D;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x5F02;&#x6216;&#x8FD0;&#x7B97;&#x5207;&#x6362;&#x3002;&#x6240;&#x6709;&#x503C;&#x4E3A; 1 &#x7684;&#x4E3A;&#x53EF;&#x4EE5;&#x5207;&#x6362;&#x5BF9;&#x5E94;&#x7684;&#x4F4D;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x63A9;&#x7801; 0110 &#x53EF;&#x4EE5;&#x7528;&#x6765;&#x5207;&#x6362;&#x6807;&#x5FD7;&#x4F4D; B &#x548C; C&#xFF1A;</p>

<pre class="brush: js">// &#x5982;&#x679C;&#x6211;&#x4EEC;&#x4EE5;&#x524D;&#x6CA1;&#x6709; bat &#xFF0C;&#x90A3;&#x4E48;&#x6211;&#x4EEC;&#x73B0;&#x5728;&#x6709; bat
// &#x4F46;&#x662F;&#x5982;&#x679C;&#x6211;&#x4EEC;&#x5DF2;&#x7ECF;&#x6709;&#x4E86;&#x4E00;&#x4E2A;&#xFF0C;&#x90A3;&#x4E48;&#x73B0;&#x5728;&#x6CA1;&#x6709;&#x4E86;
// &#x5BF9; cat &#x4E5F;&#x662F;&#x76F8;&#x540C;&#x7684;&#x60C5;&#x51B5;
var mask = FLAG_B | FLAG_C;
flags = flags ^ mask;   // 1100 ^ 0110 =&gt; 1010
</pre>

<p>&#x6700;&#x540E;&#xFF0C;&#x6240;&#x6709;&#x6807;&#x5FD7;&#x4F4D;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x975E;&#x8FD0;&#x7B97;&#x7FFB;&#x8F6C;&#xFF1A;</p>

<pre class="brush: js">// entering parallel universe...
flags = ~flags;    // ~1010 =&gt; 0101
</pre>

<h3 id=".E8.BD.AC.E6.8D.A2.E7.89.87.E6.AE.B5">&#x8F6C;&#x6362;&#x7247;&#x6BB5;</h3>

<p>&#x5C06;&#x4E00;&#x4E2A;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x7684; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" title="/en-US/docs/JavaScript/Reference/Global_Objects/String">String</a></code> &#x8F6C;&#x6362;&#x4E3A;&#x5341;&#x8FDB;&#x5236;&#x7684; <code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Number" title="/en-US/docs/JavaScript/Reference/Global_Objects/Number">Number</a></code>:</p>

<pre class="brush: js">var sBinString = &quot;1011&quot;;
var nMyNumber = parseInt(sBinString, 2);
alert(nMyNumber); // &#x6253;&#x5370; 11
</pre>

<p>&#x5C06;&#x4E00;&#x4E2A;&#x5341;&#x8FDB;&#x5236;&#x7684; <code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Number" title="/en-US/docs/JavaScript/Reference/Global_Objects/Number">Number</a></code> &#x8F6C;&#x6362;&#x4E3A;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x7684; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" title="/en-US/docs/JavaScript/Reference/Global_Objects/String">String</a></code>:</p>

<pre class="brush: js">var nMyNumber = 11;
var sBinString = nMyNumber.toString(2);
alert(sBinString); // &#x6253;&#x5370; 1011
</pre>

<h3 id=".E8.87.AA.E5.8A.A8.E5.8C.96.E6.8E.A9.E7.A0.81.E5.88.9B.E5.BB.BA">&#x81EA;&#x52A8;&#x5316;&#x63A9;&#x7801;&#x521B;&#x5EFA;</h3>

<p>&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x4ECE;&#x4E00;&#x7CFB;&#x5217;&#x7684; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="/en-US/docs/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></code> &#x503C;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x63A9;&#x7801;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#xFF1A;</p>

<pre class="brush: js">function createMask () {
  var nMask = 0, nFlag = 0, nLen = arguments.length &gt; 32 ? 32 : arguments.length;
  for (nFlag; nFlag &lt; nLen; nMask |= arguments[nFlag] &lt;&lt; nFlag++);
  return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true); // 4, i.e.: 0100
var mask3 = createMask(true); // 1, i.e.: 0001
// etc.

alert(mask1); // &#x6253;&#x5370; 11
</pre>

<h3 id=".E9.80.86.E7.AE.97.E6.B3.95.EF.BC.9A.E4.BB.8E.E6.8E.A9.E7.A0.81.E5.BE.97.E5.88.B0.E5.B8.83.E5.B0.94.E6.95.B0.E7.BB.84">&#x9006;&#x7B97;&#x6CD5;&#xFF1A;&#x4ECE;&#x63A9;&#x7801;&#x5F97;&#x5230;&#x5E03;&#x5C14;&#x6570;&#x7EC4;</h3>

<p>&#x5982;&#x679C;&#x4F60;&#x5E0C;&#x671B;&#x4ECE;&#x63A9;&#x7801;&#x5F97;&#x5230;&#x5F97;&#x5230; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="/en-US/docs/JavaScript/Reference/Global_Objects/Boolean">Boolean</a></code> <code><a href="/zh-CN/docs/Mozilla/Tech/XPCOM/Array" title="/en-US/docs/JavaScript/Reference/Global_Objects/Array">Array</a></code> &#xFF1A;</p>

<pre class="brush: js">function arrayFromMask (nMask) {
  // nMask &#x5FC5;&#x987B;&#x4ECB;&#x4E8E; -2147483648 &#x548C; 2147483647 &#x4E4B;&#x95F4;
  if (nMask &gt; 0x7fffffff || nMask &lt; -0x80000000) { 
    throw new TypeError(&quot;arrayFromMask - out of range&quot;); 
  }
  for (var nShifted = nMask, aFromMask = []; nShifted; 
       aFromMask.push(Boolean(nShifted &amp; 1)), nShifted &gt;&gt;&gt;= 1);
  return aFromMask;
}

var array1 = arrayFromMask(11);
var array2 = arrayFromMask(4);
var array3 = arrayFromMask(1);

alert(&quot;[&quot; + array1.join(&quot;, &quot;) + &quot;]&quot;);
// &#x6253;&#x5370; &quot;[true, true, false, true]&quot;, i.e.: 11, i.e.: 1011
</pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x6D4B;&#x8BD5;&#x4EE5;&#x4E0A;&#x4E24;&#x4E2A;&#x7B97;&#x6CD5;&#x2026;&#x2026;</p>

<pre class="brush: js">var nTest = 19; // our custom mask
var nResult = createMask.apply(this, arrayFromMask(nTest));

alert(nResult); // 19
</pre>

<p>&#x4EC5;&#x4EC5;&#x7531;&#x4E8E;&#x6559;&#x5B66;&#x76EE;&#x7684; &#xFF08;&#x56E0;&#x4E3A;&#x6709; <code><a href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Number" title="/en-US/docs/JavaScript/Reference/Global_Objects/Number/toString">Number.toString(2)</a></code> &#x65B9;&#x6CD5;&#xFF09;&#xFF0C;&#x6211;&#x4EEC;&#x5C55;&#x793A;&#x5982;&#x4F55;&#x4FEE;&#x6539; arrayFromMask &#x7B97;&#x6CD5;&#x901A;&#x8FC7; Number &#x8FD4;&#x56DE;&#x4E8C;&#x8FDB;&#x5236;&#x7684; String&#xFF0C;&#x800C;&#x975E; Boolean Array&#xFF1A;</p>

<pre class="brush: js">function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = &quot;&quot;; nFlag &lt; 32;
       nFlag++, sMask += String(nShifted &gt;&gt;&gt; 31), nShifted &lt;&lt;= 1);
  return sMask;
}

var string1 = createBinaryString(11);
var string2 = createBinaryString(4);
var string3 = createBinaryString(1);

alert(string1);
// &#x6253;&#x5370; 00000000000000000000000000001011, i.e. 11
</pre>

<h2 id=".E8.A7.84.E8.8C.83">&#x89C4;&#x8303;</h2>

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
   <td><a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.8" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Bitwise NOT operator</small></a><br>
    <a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.7" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Bitwise shift operators</small></a><br>
    <a class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.10" hreflang="en" lang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Binary bitwise operators</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-bitwise-not-operator" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Bitwise NOT operator</small></a><br>
    <a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-bitwise-shift-operators" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Bitwise shift operators</small></a><br>
    <a class="external" href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-binary-bitwise-operators" hreflang="en" lang="en">ECMAScript 6 (ECMA-262)<br><small lang="zh-CN">Binary bitwise operators</small></a></td>
   <td><span class="spec-RC">Release Candidate</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id=".E6.B5.8F.E8.A7.88.E5.99.A8.E5.85.BC.E5.AE.B9.E6.80.A7">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
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
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td><a href="#Bitwise_NOT">Bitwise NOT (<code>~</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_AND">Bitwise AND (<code>&amp;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_OR">Bitwise OR (<code>|</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_XOR">Bitwise XOR (<code>^</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Left_shift">Left shift (<code>&lt;&lt;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Right_shift">Right shift (<code>&gt;&gt;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Unsigned_right_shift">Unsigned right shift (<code>&gt;&gt;&gt;</code>)</a></td>
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
   <th>Feature</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td><a href="#Bitwise_NOT">Bitwise NOT (<code>~</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_AND">Bitwise AND (<code>&amp;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_OR">Bitwise OR (<code>|</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Bitwise_XOR">Bitwise XOR (<code>^</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Left_shift">Left shift (<code>&lt;&lt;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Right_shift">Right shift (<code>&gt;&gt;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
  <tr>
   <td><a href="#Unsigned_right_shift">Unsigned right shift (<code>&gt;&gt;&gt;</code>)</a></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
   <td><span style="color: #888;" title="Please update this with the earliest version of support.">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators">Logical operators</a></li>
</ul>
                  
                
              