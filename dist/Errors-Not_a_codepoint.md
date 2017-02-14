
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x9519;&#x8BEF;&#x4FE1;&#x606F;">&#x9519;&#x8BEF;&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;</h2>

<p>&#xA0;<a title="String.fromCodePoint()&#x662F;String&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;unicode&#x53C2;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;primitive&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4E0E;fromCharCode&#x529F;&#x80FD;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x662F;&#x652F;&#x6301;&#x7684;Unicode&#x5B57;&#x7B26;&#x66F4;&#x5168;&#xFF0C;&#x4F46;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#x60C5;&#x51B5;&#x4E0D;&#x662F;&#x592A;&#x597D;&#xFF0C;&#x76EE;&#x524D;ie&#x4EE5;&#x53CA;safari&#x8FD8;&#x4E0D;&#x652F;&#x6301;&#x3002;&#x53E6;&#x5916;&#xFF0C;&#x6027;&#x80FD;&#x5E76;&#x6CA1;&#x6709;fromCharCode&#x5FEB;&#x3002;&#x56E0;&#x4E3A;&#x662F;ES6&#x5F53;&#x4E2D;&#x7684;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x6240;&#x4EE5;&#x76EE;&#x524D;&#x8FD8;&#x4E0D;&#x9002;&#x5408;&#x653E;&#x5230;&#x6B63;&#x5F0F;&#x4EA7;&#x54C1;&#x73AF;&#x5883;&#x4E2D;&#x53BB;&#x4F7F;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a> &#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x53EA;&#x80FD;&#x63A5;&#x53D7;&#x6709;&#x6548;&#x7684;&#x7801;&#x4F4D;&#xFF08;code point&#xFF09; &#x3002;</p>

<p>&#x7801;&#x4F4D;&#xFF08;&#xA0;<a href="https://en.wikipedia.org/wiki/Code_point" class="external">code point</a>&#xFF09;&#x662F;&#x7EC4;&#x6210;&#x7801;&#x7A7A;&#x95F4;&#xFF08;&#x6216;&#x4EE3;&#x7801;&#x9875;&#xFF09;&#x7684;&#x6570;&#x503C;&#xFF0C;&#x8303;&#x56F4;&#x662F; 0 &#x5230; 0x10FFFF&#x3002;</p>

<p>&#xA0;<a title="&#x5168;&#x5C40;&#x5C5E;&#x6027; NaN &#x8868;&#x793A; Not-A-Number &#x7684;&#x503C;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>&#xFF0C;&#x8D1F;&#x6574;&#x6570;&#xFF08;-1&#xFF09;&#xFF0C;&#x975E;&#x6574;&#x6570;&#xFF08;3.14&#xFF09;&#xFF0C;&#x6216;&#x7F16;&#x53F7;&#x5927;&#x4E8E;0x10FFFF (1114111) &#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x65E0;&#x6CD5;&#x4F7F;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x8303;&#x4F8B;">&#x8303;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;&#x4F8B;&#x5B50;">&#x65E0;&#x6548;&#x7684;&#x4F8B;&#x5B50;</h3>

<pre class="brush: js example-bad">String.fromCodePoint(&apos;_&apos;);      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError</pre>

<h3 id="&#x6709;&#x6548;&#x7684;&#x4F8B;&#x5B50;">&#x6709;&#x6548;&#x7684;&#x4F8B;&#x5B50;</h3>

<pre class="brush: js example-good">String.fromCodePoint(42);       // &quot;*&quot;
String.fromCodePoint(65, 90);   // &quot;AZ&quot;
String.fromCodePoint(0x404);    // &quot;\u0404&quot;
String.fromCodePoint(0x2F804);  // &quot;\uD87E\uDC04&quot;
String.fromCodePoint(194564);   // &quot;\uD87E\uDC04&quot;
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // &quot;\uD834\uDF06a\uD834\uDF07&quot;
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="String.fromCodePoint()&#x662F;String&#x7684;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4F7F;&#x7528;&#x6307;&#x5B9A;&#x7684;unicode&#x53C2;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;primitive&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x3002;&#x4E0E;fromCharCode&#x529F;&#x80FD;&#x7C7B;&#x4F3C;&#xFF0C;&#x4F46;&#x662F;&#x652F;&#x6301;&#x7684;Unicode&#x5B57;&#x7B26;&#x66F4;&#x5168;&#xFF0C;&#x4F46;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;&#x60C5;&#x51B5;&#x4E0D;&#x662F;&#x592A;&#x597D;&#xFF0C;&#x76EE;&#x524D;ie&#x4EE5;&#x53CA;safari&#x8FD8;&#x4E0D;&#x652F;&#x6301;&#x3002;&#x53E6;&#x5916;&#xFF0C;&#x6027;&#x80FD;&#x5E76;&#x6CA1;&#x6709;fromCharCode&#x5FEB;&#x3002;&#x56E0;&#x4E3A;&#x662F;ES6&#x5F53;&#x4E2D;&#x7684;&#x65B0;&#x5B9A;&#x4E49;&#x7684;&#x7279;&#x6027;&#xFF0C;&#x6240;&#x4EE5;&#x76EE;&#x524D;&#x8FD8;&#x4E0D;&#x9002;&#x5408;&#x653E;&#x5230;&#x6B63;&#x5F0F;&#x4EA7;&#x54C1;&#x73AF;&#x5883;&#x4E2D;&#x53BB;&#x4F7F;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint()</code></a></li>
</ul>
                  
                
              