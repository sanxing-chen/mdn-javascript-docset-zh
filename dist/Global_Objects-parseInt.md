
                
                  
                    <div>
<div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>
</div>

<p><strong>&#x6982;&#x8FF0;</strong></p>

<p><strong>parseInt()</strong> &#x51FD;&#x6570;&#x5C06;&#x7ED9;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4EE5;&#x6307;&#x5B9A;&#x57FA;&#x6570;&#xFF08;radix/base&#xFF09;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x6574;&#x6570;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">parseInt(<em>string</em>, <em>radix</em>);</pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>&#x8981;&#x88AB;&#x89E3;&#x6790;&#x7684;&#x503C;&#x3002;&#x5982;&#x679C;&#x53C2;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5219;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x5B57;&#x7B26;&#x4E32;&#x5F00;&#x5934;&#x7684;&#x7A7A;&#x767D;&#x7B26;&#x5C06;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;</dd>
</dl>

<dl>
 <dt><code>radix</code></dt>
 <dd>&#x4E00;&#x4E2A;2&#x5230;36&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x6570;&#x503C;&#xFF0C;&#x7528;&#x4E8E;&#x6307;&#x5B9A;&#x8F6C;&#x6362;&#x4E2D;&#x91C7;&#x7528;&#x7684;&#x57FA;&#x6570;&#x3002;&#x6BD4;&#x5982;&#x53C2;&#x6570;&quot;10&quot;&#x8868;&#x793A;&#x4F7F;&#x7528;&#x6211;&#x4EEC;&#x901A;&#x5E38;&#x4F7F;&#x7528;&#x7684;&#x5341;&#x8FDB;&#x5236;&#x6570;&#x503C;&#x7CFB;&#x7EDF;&#x3002;<strong>&#x603B;&#x662F;&#x6307;&#x5B9A;&#x8BE5;&#x53C2;&#x6570;</strong>&#x53EF;&#x4EE5;&#x6D88;&#x9664;&#x9605;&#x8BFB;&#x8BE5;&#x4EE3;&#x7801;&#x65F6;&#x7684;&#x56F0;&#x60D1;&#x5E76;&#x4E14;&#x4FDD;&#x8BC1;&#x8F6C;&#x6362;&#x7ED3;&#x679C;&#x53EF;&#x9884;&#x6D4B;&#x3002;&#x5F53;&#x5FFD;&#x7565;&#x8BE5;&#x53C2;&#x6570;&#x65F6;&#xFF0C;&#x4E0D;&#x540C;&#x7684;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x53EF;&#x80FD;&#x4EA7;&#x751F;&#x4E0D;&#x540C;&#x7684;&#x7ED3;&#x679C;&#x3002;</dd>
</dl>

<h3 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h3>

<p>&#x8FD4;&#x56DE;&#x89E3;&#x6790;&#x540E;&#x7684;&#x6574;&#x6570;&#x503C;&#x3002; &#x5982;&#x679C;&#x88AB;&#x89E3;&#x6790;&#x53C2;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x65E0;&#x6CD5;&#x88AB;&#x8F6C;&#x5316;&#x6210;&#x6570;&#x503C;&#x7C7B;&#x578B;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; <a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p><code>parseInt</code> &#x9876;&#x7EA7;&#x51FD;&#x6570;&#xFF0C;&#x6CA1;&#x6709;&#x4E0E;&#x4EFB;&#x4F55;&#x5BF9;&#x8C61;&#x5173;&#x8054;&#x3002;</p>

<p><code>parseInt</code> &#x51FD;&#x6570;&#x5C06;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF08;&#x5B57;&#x7B26;&#x4E32;&#xFF09;&#x89E3;&#x6790;&#x5E76;&#x8BD5;&#x56FE;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6574;&#x6570;&#x6216;&#x8005;<code>NaN</code>&#xFF08;Not a Number&#xFF09;&#x3002;&#x5982;&#x679C;&#x7ED3;&#x679C;&#x4E0D;&#x662F;<code>NaN</code>&#xFF0C;&#x90A3;&#x4E48;&#x8FD4;&#x56DE;&#x503C;&#x662F;&#x628A;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x770B;&#x4F5C;&#x662F;radix&#x53C2;&#x6570;&#x6307;&#x5B9A;&#x7684;&#x8FDB;&#x5236;&#x4E0B;&#x7684;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x628A;&#x5B83;&#x8F6C;&#x6362;&#x6210;&#x5341;&#x8FDB;&#x5236;&#x7684;&#x6574;&#x6570;&#x3002;&#x4F8B;&#x5982;&#xFF1A;<code>radix</code>&#x53C2;&#x6570;&#x4E3A;10 &#x5C06;&#x4F1A;&#x628A;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x770B;&#x4F5C;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x7684;&#x5341;&#x8FDB;&#x5236;&#x8868;&#x793A;&#xFF0C;8 &#x5BF9;&#x5E94;&#x516B;&#x8FDB;&#x5236;&#xFF0C;16 &#x5BF9;&#x5E94;&#x5341;&#x516D;&#x8FDB;&#x5236;&#xFF0C;&#x7B49;&#x7B49;&#x3002;&#x57FA;&#x6570;&#x5927;&#x4E8E; 10 &#x65F6;&#xFF0C;&#x7528;&#x5B57;&#x6BCD;&#x8868;&#x4E2D;&#x7684;&#x5B57;&#x6BCD;&#x6765;&#x8868;&#x793A;&#x5927;&#x4E8E; 9 &#x7684;&#x6570;&#x5B57;&#x3002;&#x4F8B;&#x5982;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528; A &#x5230; F&#x3002;</p>

<p>&#x5982;&#x679C; <code>parseInt</code> &#x9047;&#x5230;&#x4E86;&#x4E0D;&#x5C5E;&#x4E8E;<code>radix</code>&#x53C2;&#x6570;&#x6240;&#x6307;&#x5B9A;&#x7684;&#x57FA;&#x6570;&#x4E2D;&#x7684;&#x5B57;&#x7B26;&#x90A3;&#x4E48;&#x8BE5;&#x5B57;&#x7B26;&#x548C;&#x5176;&#x540E;&#x7684;&#x5B57;&#x7B26;&#x90FD;&#x5C06;&#x88AB;&#x5FFD;&#x7565;&#x3002;&#x63A5;&#x7740;&#x8FD4;&#x56DE;&#x5DF2;&#x7ECF;&#x89E3;&#x6790;&#x7684;&#x6574;&#x6570;&#x90E8;&#x5206;&#x3002;<code>parseInt</code>&#xA0;&#x5C06;&#x622A;&#x53D6;&#x6574;&#x6570;&#x90E8;&#x5206;&#x3002;&#x5F00;&#x5934;&#x548C;&#x7ED3;&#x5C3E;&#x7684;&#x7A7A;&#x767D;&#x7B26;&#x5141;&#x8BB8;&#x5B58;&#x5728;&#xFF0C;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<p>&#x5728;&#x6CA1;&#x6709;&#x6307;&#x5B9A;&#x57FA;&#x6570;&#xFF0C;&#x6216;&#x8005;&#x57FA;&#x6570;&#x4E3A; 0 &#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;JavaScript &#x4F5C;&#x5982;&#x4E0B;&#x5904;&#x7406;&#xFF1A;</p>

<ul>
 <li>&#x5982;&#x679C;&#x5B57;&#x7B26;&#x4E32; <code>string</code> &#x4EE5;&quot;0x&quot;&#x6216;&#x8005;&quot;0X&quot;&#x5F00;&#x5934;, &#x5219;&#x57FA;&#x6570;&#x662F;16 (16&#x8FDB;&#x5236;).</li>
 <li>&#x5982;&#x679C;&#x5B57;&#x7B26;&#x4E32; <code>string</code> &#x4EE5;&quot;0&quot;&#x5F00;&#x5934;, &#x57FA;&#x6570;&#x662F;8&#xFF08;&#x516B;&#x8FDB;&#x5236;&#xFF09;&#x6216;&#x8005;10&#xFF08;&#x5341;&#x8FDB;&#x5236;&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x5177;&#x4F53;&#x662F;&#x54EA;&#x4E2A;&#x57FA;&#x6570;&#x7531;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x51B3;&#x5B9A;&#x3002;<span style="background-color: #ffffff; color: #4d4e53; font-family: open sans,arial,sans-serif; font-size: 14px; line-height: 19.0909080505371px;">ECMAScript 5 &#x89C4;&#x5B9A;&#x4F7F;&#x7528;10&#xFF0C;&#x4F46;&#x662F;&#x5E76;&#x4E0D;&#x662F;&#x6240;&#x6709;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x9075;&#x5FAA;&#x8FD9;&#x4E2A;&#x89C4;&#x5B9A;&#x3002;&#x56E0;&#x6B64;&#xFF0C;<strong>&#x6C38;&#x8FDC;&#x90FD;&#x8981;&#x660E;&#x786E;&#x7ED9;&#x51FA;radix&#x53C2;&#x6570;&#x7684;&#x503C;</strong>&#x3002;</span></li>
 <li>&#x5982;&#x679C;&#x5B57;&#x7B26;&#x4E32; <code>string</code> &#x4EE5;&#x5176;&#x5B83;&#x4EFB;&#x4F55;&#x503C;&#x5F00;&#x5934;&#xFF0C;&#x5219;&#x57FA;&#x6570;&#x662F;10 (&#x5341;&#x8FDB;&#x5236;)&#x3002;</li>
</ul>

<p>&#x5982;&#x679C;&#x7B2C;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E0D;&#x80FD;&#x88AB;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x5B57;&#xFF0C;<code>parseInt</code>&#x8FD4;&#x56DE;<code>NaN</code>&#x3002;</p>

<p>&#x7B97;&#x672F;&#x4E0A;&#xFF0C;&#xA0;<code>NaN</code> &#x4E0D;&#x662F;&#x4EFB;&#x4F55;&#x4E00;&#x4E2A;&#x8FDB;&#x5236;&#x4E0B;&#x7684;&#x6570;&#x3002; &#x4F60;&#x53EF;&#x4EE5;&#x8C03;&#x7528;<a title="isNaN() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A; NaN&#x3002;&#x6CE8;&#xFF1A;isNaN&#x51FD;&#x6570;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x975E;&#x5E38;&#x6709;&#x610F;&#x601D;&#x7684;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;ECMAScript 6 &#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#xA0;Number.isNaN() &#x6216;&#x8005;&#xA0;typeof &#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x975E;&#x6570;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN"><code>isNaN</code></a>&#xA0;&#x6765;&#x5224;&#x65AD; <code>parseInt</code> &#x662F;&#x5426;&#x8FD4;&#x56DE; <code>NaN</code>&#x3002;<code>NaN</code> &#x53C2;&#x4E0E;&#x7684;&#x6570;&#x5B66;&#x8FD0;&#x7B97;&#x5176;&#x7ED3;&#x679C;&#x603B;&#x662F; <code>NaN</code>&#x3002;</p>

<p>&#x5C06;&#x6574;&#x578B;&#x6570;&#x503C;&#x4EE5;&#x7279;&#x5B9A;&#x57FA;&#x6570;&#x8F6C;&#x6362;&#x6210;&#x5B83;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>intValue.toString(radix)</code>.</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;_parseInt">&#x4F8B;&#x5B50;&#xFF1A;&#x4F7F;&#x7528;&#xA0;<code>parseInt</code></h3>

<p>&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x5747;&#x8FD4;&#x56DE;15:</p>

<pre class="brush: js">parseInt(&quot;F&quot;, 16);
parseInt(&quot;17&quot;, 8);
parseInt(&quot;15&quot;, 10);
parseInt(15.99, 10);
parseInt(&quot;FXX123&quot;, 16);
parseInt(&quot;1111&quot;, 2);
parseInt(&quot;15*3&quot;, 10);
parseInt(&quot;12&quot;, 13);
</pre>

<p>&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x5747;&#x8FD4;&#x56DE; <code>NaN</code>:</p>

<pre class="brush: js">parseInt(&quot;Hello&quot;, 8); // Not a number at all
parseInt(&quot;546&quot;, 2);   // Digits are not valid for binary representations
</pre>

<p>&#x4EE5;&#x4E0B;&#x4F8B;&#x5B50;&#x5747;&#x8FD4;&#x56DE; -15&#xFF1A;</p>

<pre class="brush: js">parseInt(&quot;-F&quot;, 16);
parseInt(&quot;-0F&quot;, 16);
parseInt(&quot;-0XF&quot;, 16);
parseInt(-15.1, 10);
parseInt(&quot; -17&quot;, 8);
parseInt(&quot; -15&quot;, 10);
parseInt(&quot;-1111&quot;, 2);
parseInt(&quot;-15e1&quot;, 10);
parseInt(&quot;-12&quot;, 13);</pre>

<p>&#x4E0B;&#x4F8B;&#x4E2D;&#x4E5F;&#x5168;&#x90E8;&#x8FD4;&#x56DE; 17&#xFF0C;&#x56E0;&#x4E3A;&#x8F93;&#x5165;&#x7684;&#xA0;<code>string</code> &#x53C2;&#x6570;&#x4EE5; &quot;<code>0x</code>&quot; &#x5F00;&#x5934;&#x65F6;&#x4F5C;&#x4E3A;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x6570;&#x5B57;&#x89E3;&#x91CA;&#xFF0C;&#x800C;&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#x5047;&#x5982;&#x7ECF;&#x8FC7; Number &#x51FD;&#x6570;&#x8F6C;&#x6362;&#x540E;&#x4E3A; 0 &#x6216; <code>NaN</code>&#xFF0C;&#x5219;&#x5C06;&#x4F1A;&#x5FFD;&#x7565;&#x3002;</p>

<pre class="brush: js">parseInt(&quot;0x11&quot;, 16);
parseInt(&quot;0x11&quot;, 0);
parseInt(&quot;0x11&quot;);
</pre>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x8FD4;&#x56DE;&#xA0;<code>224</code></p>

<pre class="brush: js">parseInt(&quot;0e0&quot;,16);</pre>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x6CA1;&#x6709;&#x6307;&#x5B9A;_radix_&#x53C2;&#x6570;&#x65F6;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x89E3;&#x6790;">&#x6CA1;&#x6709;&#x6307;&#x5B9A; <code>radix</code> &#x53C2;&#x6570;&#x65F6;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x89E3;&#x6790;</h2>

<p>&#x5C3D;&#x7BA1; ECMAScript 3 &#x5DF2;&#x7ECF;&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x79CD;&#x505A;&#x6CD5;&#xFF0C;&#x4E14; ECMAScript 5&#xA0;&#x5DF2;&#x7ECF;&#x7981;&#x6B62;&#x4E86;&#x8FD9;&#x79CD;&#x505A;&#x6CD5;&#xFF0C;&#x4F46;&#x662F;&#x4ECD;&#x7136;&#x6709;&#x5F88;&#x591A;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x4ECD;&#x7136;&#x628A;&#x4EE5; 0 &#x5F00;&#x5934;&#x7684;&#x6570;&#x503C;&#x5B57;&#x7B26;&#x4E32;&#xFF08;numeric string&#xFF09;&#x89E3;&#x91CA;&#x4E3A;&#x4E00;&#x4E2A;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x3002;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x53EF;&#x80FD;&#x8FD4;&#x56DE;&#x516B;&#x8FDB;&#x5236;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x4E5F;&#x53EF;&#x80FD;&#x8FD4;&#x56DE;&#x5341;&#x8FDB;&#x5236;&#x7684;&#x7ED3;&#x679C;&#x3002;<strong>&#x603B;&#x662F;&#x6307;&#x5B9A;&#x4E00;&#x4E2A;&#x57FA;&#x6570;&#xFF08;radix&#xFF09;&#x53EF;&#x4EE5;&#x907F;&#x514D;&#x8FD9;&#x79CD;&#x4E0D;&#x53EF;&#x9760;&#x7684;&#x884C;&#x4E3A;&#x3002;</strong></p>

<pre class="brush: js">parseInt(&quot;0e0&quot;); // 0
parseInt(&quot;08&quot;); // 0, &apos;8&apos; is not an octal digit.
</pre>

<h3 style="line-height: 24px;" id="ECMAScript_5_&#x79FB;&#x9664;&#x4E86;&#x516B;&#x8FDB;&#x5236;&#x89E3;&#x6790;">ECMAScript 5 &#x79FB;&#x9664;&#x4E86;&#x516B;&#x8FDB;&#x5236;&#x89E3;&#x6790;</h3>

<p>ECMAScript 5 &#x89C4;&#x8303;&#x4E0D;&#x518D;&#x5141;&#x8BB8;<code>parseInt</code>&#x51FD;&#x6570;&#x7684;<span style="line-height: 19.0909080505371px;">&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x628A;&#x4EE5;<code>0</code>&#x5B57;&#x7B26;&#x5F00;&#x59CB;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x4F5C;&#x4E3A;&#x516B;&#x8FDB;&#x5236;&#x6570;&#x503C;</span>&#x3002;ECMAScript 5 &#x9648;&#x8FF0;&#x5982;&#x4E0B;&#xFF1A;</p>

<p>The&#xA0;<code>parseInt</code>&#xA0;function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or&#xA0;<code>0</code>, it is assumed to be&#xA0;<code>10</code>&#xA0;except when the number begins with the character pairs&#xA0;<code>0x</code>&#xA0;or&#xA0;<code>0X</code>, in which case a radix of 16 is assumed. If radix is&#xA0;<code>16</code>, number may also optionally begin with the character pairs&#xA0;<code>0x</code>&#xA0;or&#xA0;<code>0X</code>.</p>

<p>&#x8FD9;&#x4E0E;<span style="line-height: 19.0909080505371px;">ECMAScript 3&#x6709;&#x6240;&#x4E0D;&#x540C;&#xFF0C;ECMAScript 3&#x4EC5;&#x4EC5;&#x662F;&#x4E0D;&#x63D0;&#x5021;&#x8FD9;&#x79CD;&#x505A;&#x6CD5;&#x4F46;&#x5E76;&#x6CA1;&#x6709;&#x7981;&#x6B62;&#x8FD9;&#x79CD;&#x505A;&#x6CD5;&#x3002;</span></p>

<p>&#x76F4;&#x81F3;2013&#x5E74;&#xFF0C;&#x5F88;&#x591A;&#x5B9E;&#x73B0;&#x73AF;&#x5883;&#x5E76;&#x6CA1;&#x6709;&#x91C7;&#x53D6;&#x65B0;&#x7684;&#x89C4;&#x8303;&#x6240;&#x89C4;&#x5B9A;&#x7684;&#x505A;&#x6CD5;, &#x800C;&#x4E14;&#x7531;&#x4E8E;&#x5FC5;&#x987B;&#x517C;&#x5BB9;&#x65E7;&#x7248;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#xFF0C;&#x6240;&#x4EE5;<strong>&#x6C38;&#x8FDC;&#x90FD;&#x8981;&#x660E;&#x786E;&#x7ED9;&#x51FA;radix&#x53C2;&#x6570;&#x7684;&#x503C;.</strong></p>

<h2 style="margin-bottom: 20px; line-height: 30px;" id="&#x4E00;&#x4E2A;&#x66F4;&#x4E25;&#x683C;&#x7684;&#x89E3;&#x6790;&#x51FD;&#x6570;">&#x4E00;&#x4E2A;&#x66F4;&#x4E25;&#x683C;&#x7684;&#x89E3;&#x6790;&#x51FD;&#x6570;</h2>

<p>&#x6709;&#x65F6;&#x91C7;&#x7528;&#x4E00;&#x4E2A;&#x66F4;&#x4E25;&#x683C;&#x7684;&#x65B9;&#x6CD5;&#x6765;&#x89E3;&#x6790;&#x6574;&#x578B;&#x503C;&#x5F88;&#x6709;&#x7528;&#x3002;&#x6B64;&#x65F6;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B63;&#x5219;&#x8868;&#x8FBE;&#x5F0F;&#xFF1A;</p>

<pre class="brush: js">filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt(&apos;421&apos;));               // 421
console.log(filterInt(&apos;-421&apos;));              // -421
console.log(filterInt(&apos;+421&apos;));              // 421
console.log(filterInt(&apos;Infinity&apos;));          // Infinity
console.log(filterInt(&apos;421e+0&apos;));            // NaN
console.log(filterInt(&apos;421hop&apos;));            // NaN
console.log(filterInt(&apos;hop1.61803398875&apos;));  // NaN
console.log(filterInt(&apos;1.61803398875&apos;));     // NaN
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th>&#x89C4;&#x8303;&#x72B6;&#x6001;</th>
   <th>&#x6CE8;&#x89E3;</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.2" class="external">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">parseInt</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-parseint-string-radix" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">parseInt</small></a></td>
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
 <li><a title="parseFloat()&#x65B9;&#x6CD5;&#x5C06;&#x53C2;&#x6570;&#x4E2D;&#x6307;&#x5B9A;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x4E3A;&#x4E00;&#x4E2A;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x5E76;&#x8FD4;&#x56DE;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat"><code>parseFloat()</code></a></li>
 <li><a title="Number.parseFloat() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6D6E;&#x70B9;&#x6570;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x4E0E;&#x5168;&#x5C40;&#x7684; parseFloat() &#x51FD;&#x6570;&#x76F8;&#x540C;&#xFF0C;&#x5E76;&#x4E14;&#x5904;&#x4E8E;&#xA0;ECMAScript 6 &#x89C4;&#x8303;&#x4E2D;&#xFF08;&#x7528;&#x4E8E;&#x5168;&#x5C40;&#x53D8;&#x91CF;&#x7684;&#x6A21;&#x5757;&#x5316;&#xFF09;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat"><code>Number.parseFloat()</code></a></li>
 <li><a title="Number.parseInt() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6839;&#x636E;&#x7ED9;&#x5B9A;&#x7684;&#x8FDB;&#x5236;&#x6570;&#x628A;&#x4E00;&#x4E2A;&#x5B57;&#x7B26;&#x4E32;&#x89E3;&#x6790;&#x6210;&#x6574;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt"><code>Number.parseInt()</code></a></li>
 <li><a title="isNaN() &#x51FD;&#x6570;&#x7528;&#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A; NaN&#x3002;&#x6CE8;&#xFF1A;isNaN&#x51FD;&#x6570;&#x5305;&#x542B;&#x4E00;&#x4E9B;&#x975E;&#x5E38;&#x6709;&#x610F;&#x601D;&#x7684;&#x5F3A;&#x5236;&#x8F6C;&#x6362;&#x89C4;&#x5219;&#xFF1B;&#x4F60;&#x4E5F;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#xA0;ECMAScript 6 &#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#xA0;Number.isNaN() &#x6216;&#x8005;&#xA0;typeof &#x6765;&#x5224;&#x65AD;&#x4E00;&#x4E2A;&#x503C;&#x662F;&#x5426;&#x4E3A;&#x975E;&#x6570;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN"><code>isNaN()</code></a></li>
 <li><a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A; Number&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString"><code>Number.toString()</code></a></li>
 <li><a title="valueOf()&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x59CB;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>Object.valueOf</code></a></li>
</ul>
                  
                
              