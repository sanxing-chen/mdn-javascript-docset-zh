
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
RangeError: toString() radix argument must be between 2 and 36 (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="RangeError&#x5BF9;&#x8C61;&#x6807;&#x660E;&#x4E00;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x5F53;&#x4E00;&#x4E2A;&#x503C;&#x4E0D;&#x5728;&#x5176;&#x6240;&#x5141;&#x8BB8;&#x7684;&#x8303;&#x56F4;&#x6216;&#x8005;&#x96C6;&#x5408;&#x4E2D;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError"><code>RangeError</code></a></p>

<h2 id="&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x9519;&#x8BEF;&#xFF1F;">&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;&#x9519;&#x8BEF;&#xFF1F;</h2>

<p>&#x5728;&#x4F7F;&#x7528;<a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A; Number&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString"><code>Number.prototype.toString()</code></a>&#x65B9;&#x6CD5;&#x65F6;&#x4F7F;&#x7528;&#x4E86;&#x53EF;&#x9009;&#x7684;&#x57FA;&#x6570;&#x53C2;&#x6570;&#xFF0C;&#x53C2;&#x6570;&#x5E94;&#x8BE5;&#x4E3A;&#x4E00;&#x4E2A;2&#x5230;36&#x4E4B;&#x95F4;&#x7684;&#x6574;&#x578B;(&#x6570;&#x5B57;)&#xFF0C;&#x8FD4;&#x56DE;&#x5BF9;&#x5E94;&#x6570;&#x5B57;&#x7684;&#x8F6C;&#x6362;&#x4E3A;&#x5B57;&#x7B26;&#x4E32;&#x65F6;&#x8868;&#x793A;&#x7684;&#x8BE5;&#x8FDB;&#x5236;&#x5BF9;&#x5E94;&#x7684;&#x6570;&#x5B57;&#x91CF;&#x3002;</p>

<p>&#x4E3A;&#x4EC0;&#x4E48;&#x5C0F;&#x4E8E;36&#x5462;&#xFF1F;&#x56E0;&#x4E3A;&#x4E00;&#x4E2A;&#x5927;&#x4E8E;(&#x5305;&#x542B;&#x7B49;&#x4E8E;)10&#x7684;&#x57FA;&#x6570;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x9700;&#x8981;&#x7528;&#x4E00;&#x4E2A;&#x5B57;&#x6BCD;&#x8868;&#x5B57;&#x7B26;&#x6765;&#x4EE3;&#x66FF;&#x3002;&#x4E0D;&#x80FD;&#x8D85;&#x8FC7;36&#x662F;&#x56E0;&#x4E3A;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x8868;&#x4E2D;&#x53EA;&#x6709;26&#x4E2A;&#x5B57;&#x7B26;&#x3002;</p>

<p>&#x4F60;&#x53EF;&#x80FD;&#x4F1A;&#x7528;&#x5230;&#x4EE5;&#x4E0B;&#x7684;&#x5E38;&#x89C1;&#x57FA;&#x6570;&#xFF1A;</p>

<ul>
 <li>2 for <a href="https://en.wikipedia.org/wiki/Binary_number" class="external">&#x4E8C;&#x8FDB;&#x5236;</a>,</li>
 <li>8 for <a href="https://en.wikipedia.org/wiki/Octal" class="external">&#x516B;&#x8FDB;&#x5236;</a>,</li>
 <li>10 for <a href="https://en.wikipedia.org/wiki/Decimal" class="external">&#x5341;&#x8FDB;&#x5236;</a>,</li>
 <li>16 for <a href="https://en.wikipedia.org/wiki/Hexadecimal" class="external">&#x5341;&#x516D;&#x8FDB;&#x5236;</a>.</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x9519;&#x8BEF;&#x793A;&#x4F8B;">&#x9519;&#x8BEF;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-bad">(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString(&quot;MM-dd-yyyy&quot;);
</pre>

<h3 id="&#x6B63;&#x786E;&#x793A;&#x4F8B;">&#x6B63;&#x786E;&#x793A;&#x4F8B;</h3>

<pre class="brush: js example-good">(42).toString(2);     // &quot;101010&quot; (binary)
(13).toString(8);     // &quot;15&quot;     (octal)
(0x42).toString(10);  // &quot;66&quot;     (decimal)
(100000).toString(16) // &quot;186a0&quot;  (hexadecimal)
</pre>

<h2 id="&#x53C2;&#x8003;">&#x53C2;&#x8003;</h2>

<ul>
 <li><a title="toString() &#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6307;&#x5B9A; Number&#xA0;&#x5BF9;&#x8C61;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x8868;&#x793A;&#x5F62;&#x5F0F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString"><code>Number.prototype.toString()</code></a></li>
</ul>
                  
                
              