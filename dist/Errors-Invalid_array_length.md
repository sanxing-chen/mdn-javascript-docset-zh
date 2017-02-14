
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x9519;&#x8BEF;&#x4FE1;&#x606F;">&#x9519;&#x8BEF;&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x65E0;&#x6548;&#x7684;&#x6570;&#x7EC4;&#x9519;&#x8BEF;&#x957F;&#x5EA6;&#x901A;&#x5E38;&#x4F1A;&#x5728;&#x4EE5;&#x4E0B;&#x60C5;&#x5F62;&#x4E2D;&#x51FA;&#x73B0;&#xFF1A;</p>

<ul>
 <li>&#x5F53;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x957F;&#x5EA6;&#x4E3A;&#x8D1F;&#x6570;&#x6216;&#x8005;&#x957F;&#x5EA6;&#x5927;&#x4E8E;&#x7B49;&#x4E8E;2<sup>32 </sup>&#x7684;<sup>&#xA0;</sup><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a> &#x6216;&#x8005;&#xA0;<a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a> &#x65F6;&#x3002;</li>
 <li>&#x5F53;&#x8BBE;&#x7F6E;&#xA0;<a title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length"><code>Array.length</code></a> &#x5C5E;&#x6027;&#x4E3A;&#x8D1F;&#x6570;&#x6216;&#x8005;&#x957F;&#x5EA6;&#x5927;&#x4E8E;&#x7B49;&#x4E8E;2<sup>32 </sup>&#x65F6;&#x3002;</li>
</ul>

<p>&#x4E3A;&#x4EC0;&#x4E48; Array&#xFF08;&#x6570;&#x7EC4;&#xFF09; &#x548C; ArrayBuffer&#xFF08;&#x6570;&#x7EC4;&#x7F13;&#x51B2;&#x533A;&#xFF09; &#x7684;&#x957F;&#x5EA6;&#x4F1A;&#x53D7;&#x5230;&#x9650;&#x5236;&#xFF1F;&#x56E0;&#x4E3A; Array &#x548C; ArrayBuffer &#x7684; length&#xFF08;&#x957F;&#x5EA6;&#xFF09; &#x5C5E;&#x6027;&#x88AB;&#x5B9A;&#x4E49;&#x4E3A;&#x4E00;&#x4E2A;32&#x4F4D;&#x65E0;&#x7B26;&#x53F7;&#x6574;&#x5F62;&#xFF08;unsigned 32-bit integer&#xFF09;&#x7684;&#x503C;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x53EA;&#x80FD;&#x5B58;&#x50A8; 0 -&#xA0;2<sup>32</sup>-1 &#x4E4B;&#x95F4;&#x7684;&#x6570;&#x3002;</p>

<p>&#x5F53;&#x4F60;&#x4F7F;&#x7528;&#x6784;&#x9020;&#x51FD;&#x6570;&#x6765;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x4F60;&#x53EF;&#x80FD;&#x60F3;&#x4F7F;&#x7528;&#x5B57;&#x9762;&#x503C;&#x7684;&#x5F62;&#x5F0F;&#xFF0C;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x4F1A;&#x88AB;&#x89E3;&#x91CA;&#x4E3A;&#x6570;&#x7EC4;&#x7684;&#x957F;&#x5EA6;&#x3002;</p>

<p>&#x6216;&#x8005;&#x8BF4;&#xFF0C;&#x4F60;&#x60F3;&#x8981;&#x5728;&#x8BBE;&#x7F6E;&#x6570;&#x7EC4;&#x4E4B;&#x524D;&#x786E;&#x5B9A;&#x5B83;&#x7684;&#x957F;&#x5EA6;&#xFF0C;&#x6216;&#x628A;&#x5B83;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x9519;&#x8BEF;&#x7684;&#x793A;&#x4F8B;">&#x9519;&#x8BEF;&#x7684;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-bad">new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // &#x5C06; length &#x5C5E;&#x6027;&#x7684;&#x503C;&#x8BBE;&#x7F6E;&#x4E3A; -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // &#x5C06; length &#x5C5E;&#x6027;&#x7684;&#x503C;&#x8BBE;&#x7F6E;&#x4E3A; 2^32
</pre>

<h3 id="&#x6B63;&#x786E;&#x7684;&#x793A;&#x4F8B;">&#x6B63;&#x786E;&#x7684;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-good">[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);   

// 0xffffffff &#x662F; 2^32 - 1 &#x7684; &#x5341;&#x516D;&#x8FDB;&#x5236; &#x8868;&#x793A;&#x65B9;&#x5F0F;
// &#x5B83;&#x4E5F;&#x53EF;&#x4EE5;&#x88AB;&#x5199;&#x4F5C; (-1 &gt;&gt;&gt; 0)
</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a></li>
 <li><a title="length &#x5C5E;&#x6027;&#x8868;&#x793A;&#x4E00;&#x4E2A;&#x65E0;&#x7B26;&#x53F7; 32-bit &#x6574;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x5143;&#x7D20;&#x4E2A;&#x6570;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length"><code>Array.length</code></a></li>
 <li><a title="ArrayBuffer&#xA0;&#xFF08;&#x7F13;&#x51B2;&#x6570;&#x7EC4;&#xFF09;&#x662F;&#x4E00;&#x79CD;&#x7528;&#x4E8E;&#x5448;&#x73B0;&#x901A;&#x7528;&#x3001;&#x56FA;&#x5B9A;&#x957F;&#x5EA6;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7684;&#x7C7B;&#x578B;&#x3002;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x6784;&#x9020;&#x5E76;&#x586B;&#x5145;&#xA0;ArrayBuffer &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x800C;&#x5E94;&#x8BE5;&#x5148;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#xA0;ArrayBufferView&#xA0;&#x5BF9;&#x8C61;&#xFF0C;&#x8BE5;&#x5BF9;&#x8C61;&#x7528;&#x5177;&#x4F53;&#x7684;&#x683C;&#x5F0F;&#x6765;&#x5448;&#x73B0;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x6B64;&#x5BF9;&#x8C61;&#x6765;&#x8BFB;&#x5199;&#xA0;ArrayBuffer&#xA0;&#x7684;&#x5185;&#x5BB9;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a></li>
</ul>
                  
                
              