
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<h2 name="Summary" id="Summary">&#x6982;&#x8FF0;</h2>

<p><strong>&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;Arithmetic operators&#xFF09;</strong>&#x628A;&#x6570;&#x503C;&#xFF08;&#x539F;&#x59CB;&#x503C;&#x6216;&#x53D8;&#x91CF;&#xFF09;&#x4F5C;&#x4E3A;&#x5B83;&#x4EEC;&#x7684;&#x64CD;&#x4F5C;&#x6570;&#xFF08;operand&#xFF09;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5355;&#x6570;&#x503C;&#x3002;&#x6807;&#x51C6;&#x7684;&#x7B97;&#x672F;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x52A0;&#xA0;(+)&#xFF0C;&#x51CF; (-)&#xFF0C;&#x4E58;(*)&#xFF0C;&#x9664;(/)&#x3002;</p>

<h2 id="&#x52A0;&#x6CD5;_()"><a name="Addition">&#x52A0;&#x6CD5; (+)</a></h2>

<p>&#x52A0;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;addition operator&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x6570;&#x503C;&#x6C42;&#x548C;&#xFF0C;&#x6216;&#x8005;&#x5B57;&#x7B26;&#x4E32;&#x62FC;&#x63A5;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x + y
</pre>

<h3 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">// Number + Number -&gt; &#x6570;&#x5B57;&#x76F8;&#x52A0;
1 + 2 // 3

// Boolean + Number -&gt; &#x6570;&#x5B57;&#x76F8;&#x52A0;
true + 1 // 2

// Boolean + Boolean -&gt; &#x6570;&#x5B57;&#x76F8;&#x52A0;
false + false // 0

// Number + String -&gt; &#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;
5 + &quot;foo&quot; // &quot;5foo&quot;

// String + Boolean -&gt; &#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;
&quot;foo&quot; + false // &quot;foofalse&quot;

// String + String -&gt; &#x5B57;&#x7B26;&#x4E32;&#x8FDE;&#x63A5;
&quot;foo&quot; + &quot;bar&quot; // &quot;foobar&quot;
</pre>

<h2 id="&#x51CF;&#x6CD5;_(-)"><a name="Subtraction">&#x51CF;&#x6CD5; (-)</a></h2>

<p>&#x51CF;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;subtraction operator&#xFF09;&#x4F7F;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x76F8;&#x51CF;&#xFF0C;&#x7ED3;&#x679C;&#x662F;&#x5B83;&#x4EEC;&#x7684;&#x5DEE;&#x503C;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;_2">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x - y
</pre>

<h3 id="&#x793A;&#x4F8B;_2">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">5 - 3 // 2
3 - 5 // -2
&quot;foo&quot; - 3 // NaN</pre>

<h2 id="&#x9664;&#x6CD5;_()"><a name="Division">&#x9664;&#x6CD5; (/)</a></h2>

<p>&#x9664;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;division operator&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x5546; &#xFF0C;&#x5DE6;&#x64CD;&#x4F5C;&#x6570;&#x662F;&#x88AB;&#x9664;&#x6570;&#xFF08;dividend&#xFF09;&#xFF0C;&#x53F3;&#x64CD;&#x4F5C;&#x6570;&#x662F;&#x9664;&#x6570;&#xFF08;divisor&#xFF09;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;_3">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x / y
</pre>

<h3 id="&#x793A;&#x4F8B;_3">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">1 / 2      // &#x5728; JavaScript &#x4E2D;&#x8FD4;&#x56DE; 0.5
1 / 2      // &#x5728; Java &#x4E2D;&#x8FD4;&#x56DE; 0
// &#xFF08;&#x4E0D;&#x9700;&#x8981;&#x6570;&#x5B57;&#x662F;&#x660E;&#x786E;&#x7684;&#x6D6E;&#x70B9;&#x6570;&#xFF09;

1.0 / 2.0  // &#x5728; JavaScript &#x6216; Java &#x4E2D;&#x90FD;&#x8FD4;&#x56DE; 0.5

2.0 / 0    // &#x5728; JavaScript &#x4E2D;&#x8FD4;&#x56DE; Infinity
2.0 / 0.0  // &#x540C;&#x6837;&#x8FD4;&#x56DE; Infinity 
2.0 / -0.0 // &#x5728; JavaScript &#x4E2D;&#x8FD4;&#x56DE; -Infinity</pre>

<h2 id="&#x4E58;&#x6CD5;_(*)"><a name="Multiplication">&#x4E58;&#x6CD5; (*)</a></h2>

<p>&#x4E58;&#x6CD5;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;multiplication operator&#xFF09;&#x7684;&#x7ED3;&#x679C;&#x662F;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x4E58;&#x79EF;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;_4">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x * y
</pre>

<h3 id="&#x793A;&#x4F8B;_4">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
&quot;foo&quot; * 2 // NaN
</pre>

<h2 id="&#x6C42;&#x4F59;_()"><a name="Remainder">&#x6C42;&#x4F59; (%)</a></h2>

<p>&#x6C42;&#x4F59;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;remainder operator&#xFF09;&#x8FD4;&#x56DE;&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x5BF9;&#x7B2C;&#x4E8C;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x6A21;&#xFF0C;&#x5373;&#xA0;<code>var1</code>&#xA0;&#x5BF9;&#xA0;<code>var2</code>&#xA0;&#x53D6;&#x6A21;&#xFF0C;&#x5176;&#x4E2D;&#xA0;<code>var1</code>&#xA0;&#x548C;&#xA0;<code>var2</code>&#xA0;&#x662F;&#x53D8;&#x91CF;&#x3002;&#x53D6;&#x6A21;&#x529F;&#x80FD;&#x5C31;&#x662F; <code>var1</code> &#x9664;&#x4EE5; <code>var2</code> &#x7684;&#x6574;&#x578B;&#x4F59;&#x6570;&#x3002;&#xA0;<a title="http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator" href="http://wiki.ecmascript.org/doku.php?id=strawman:modulo_operator" class="external">&#x4EE5;&#x524D;&#x6709;&#x4E2A;&#x63D0;&#x8BAE;&#xFF0C;&#x5728;ECMAScript&#x672A;&#x6765;&#x7684;&#x7248;&#x672C;&#x4E2D;&#xFF0C;&#x53EF;&#x80FD;&#x4F1A;&#x6709;&#x4E00;&#x4E2A;&#x83B7;&#x53D6;&#x5B9E;&#x9645;&#x6A21;&#x7684;&#x8FD0;&#x7B97;&#x7B26;&#x3002;</a></p>

<h3 id="&#x8BED;&#x6CD5;_5">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> var1 % var2
</pre>

<h3 id="&#x793A;&#x4F8B;_5">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">12&#xA0;% 5 // 2
-1&#xA0;% 2 // -1
NaN % 2 // NaN
</pre>

<h2 id="&#x5E42;_(**)"><a name="Exponentiation">&#x5E42; (**)</a></h2>

<p>&#xA0;</p>

<p>&#x5E42;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;exponentiation operator&#xFF09;&#x8FD4;&#x56DE;&#x7B2C;&#x4E00;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x505A;&#x5E95;&#x6570;&#xFF0C;&#x7B2C;&#x4E8C;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x505A;&#x6307;&#x6570;&#x7684;&#x4E58;&#x65B9;&#x3002;&#x5373;&#xFF0C; <code>var1</code><sup><code>var2</code></sup> &#xFF0C;&#x5176;&#x4E2D; <code>var1</code> &#x548C; <code>var2</code> &#x662F;&#x5176;&#x4E24;&#x4E2A;&#x64CD;&#x4F5C;&#x6570;&#x3002;&#x5E42;&#x8FD0;&#x7B97;&#x7B26;&#x662F;&#x53F3;&#x7ED3;&#x5408;&#x7684;&#x3002;<code>a ** b ** c</code> &#x7B49;&#x540C;&#x4E8E; <code>a ** (b ** c)</code>&#xA0; &#xFF0E;</p>

<h3 id="&#x8BED;&#x6CD5;_6">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> var1 ** var2
</pre>

<h3 id="&#x6CE8;&#x89E3;">&#x6CE8;&#x89E3;</h3>

<p>&#x5305;&#x62EC; PHP &#x6216; Python &#x7B49;&#x7684;&#x5927;&#x591A;&#x6570;&#x8BED;&#x8A00;&#x4E2D;&#xFF0C;&#x90FD;&#x5305;&#x542B;&#x5E42;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;&#x4E00;&#x822C;&#x6765;&#x8BF4;&#x7B26;&#x53F7;&#x662F; ^ &#x6216;&#x8005; **&#xFF09;&#x3002;&#x8FD9;&#x4E9B;&#x8BED;&#x8A00;&#x4E2D;&#x7684;&#x5E42;&#x8FD0;&#x7B97;&#x7B26;&#x6709;&#x7740;&#x6BD4;&#x5176;&#x4ED6;&#x7684;&#x5355;&#x76EE;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;&#x5982;&#x4E00;&#x5143; + &#x6216;&#x4E00;&#x5143; - &#xFF09;&#x66F4;&#x9AD8;&#x7684;&#x4F18;&#x5148;&#x7EA7;&#x3002;&#x4F46;&#x662F;&#x4F5C;&#x4E3A;&#x4F8B;&#x5916;&#xFF0C;&#x5728; Bash &#x6216;&#x5F53;&#x524D;&#x7684; ES7 &#x5E42;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x8349;&#x6848;&#x4E2D;&#xFF0C;**&#xA0; &#x8FD0;&#x7B97;&#x7B26;&#x88AB;&#x8BBE;&#x8BA1;&#x4E3A;&#x6BD4;&#x5355;&#x76EE;&#x8FD0;&#x7B97;&#x7B26;&#x4F18;&#x5148;&#x7EA7;&#x66F4;&#x4F4E;&#x3002;</p>

<pre class="brush: js  language-js"><code class="language-js"><span class="operator token">-</span><span class="number token">2</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="comment token"> // &#x5728; ES7 &#x548C; Bash &#x4E2D;&#x7B49;&#x4E8E; 4 &#xFF0C;&#x800C;&#x5728;&#x5176;&#x4ED6;&#x8BED;&#x8A00;&#x4E2D;&#x4E00;&#x822C;&#x7B49;&#x4E8E; -4

</span></code><code>-(2 ** 2); // -4 in JavaScript and the author&apos;s intention is unambiguous.</code>
</pre>

<div style="top: 0px;" class="line-number">&#xA0;</div>

<h3 id="&#x793A;&#x4F8B;_6">&#x793A;&#x4F8B;</h3>

<pre class="brush: js  language-js"><code class="language-js"><span class="number token">2</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">3</span><span class="comment token"> // 8
</span><span class="number token">3</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="comment token"> // 9
</span><span class="number token">3</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2.5</span><span class="comment token"> // 15.588457268119896
</span><span class="number token">10</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="operator token">-</span><span class="number token">1</span><span class="comment token"> // 0.1
</span><span class="number token">NaN</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="comment token"> // NaN
</span>
<span class="number token">2</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">3</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="comment token"> // 512
</span><span class="number token">2</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="punctuation token">(</span><span class="number token">3</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="punctuation token">)</span><span class="comment token"> // 512
</span><span class="punctuation token">(</span><span class="number token">2</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">3</span><span class="punctuation token">)</span> <span class="operator token">*</span><span class="operator token">*</span> <span class="number token">2</span><span class="comment token"> // 64</span></code></pre>

<h2 id="&#x9012;&#x589E;_()"><a name="Increment">&#x9012;&#x589E; (++)</a></h2>

<p>&#x9012;&#x589E;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;increment operator)&#x4E3A;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#x589E;&#x52A0;1&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002;</p>

<ul>
 <li>&#x5982;&#x679C;&#x540E;&#x7F6E;&#xFF08;postfix&#xFF09;&#x4F7F;&#x7528;&#xFF0C;&#x5373;&#x8FD0;&#x7B97;&#x7B26;&#x4F4D;&#x4E8E;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x540E;&#x9762;&#xFF08;&#x5982; x++&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x5C06;&#x4F1A;&#x5728;&#x9012;&#x589E;&#x524D;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x524D;&#x7F6E;&#xFF08;prefix&#xFF09;&#x4F7F;&#x7528;&#xFF0C;&#x5373;&#x8FD0;&#x7B97;&#x7B26;&#x4F4D;&#x4E8E;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x524D;&#x9762;&#xFF08;&#x5982; ++x&#xFF09;&#xFF0C;&#x90A3;&#x4E48;&#x5C06;&#x4F1A;&#x5728;&#x9012;&#x589E;&#x540E;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x3002;</li>
</ul>

<h3 id="&#x8BED;&#x6CD5;_7">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x++ &#x6216;&#x8005; ++x
</pre>

<h3 id="&#x793A;&#x4F8B;_7">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">// &#x540E;&#x7F6E; 
var x = 3;
y = x++; // y = 3, x = 4

// &#x524D;&#x7F6E;
var a = 2;
b = ++a; // a = 3, b = 3
</pre>

<h2 id="&#x9012;&#x51CF;_(--)"><a name="Decrement">&#x9012;&#x51CF; (--)</a></h2>

<p>&#x9012;&#x51CF;&#x8FD0;&#x7B97;&#x7B26;&#x5C06;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#x51CF;&#x53BB;1&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002;</p>

<ul>
 <li>&#x5982;&#x679C;&#x540E;&#x7F6E;&#x4F7F;&#x7528;&#xFF08;&#x5982; x--&#xFF09;&#xFF0C;&#x5219;&#x5728;&#x9012;&#x51CF;&#x524D;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x3002;</li>
 <li>&#x5982;&#x679C;&#x524D;&#x7F6E;&#x4F7F;&#x7528;&#xFF08;&#x5982; --x&#xFF09;&#xFF0C;&#x5219;&#x5728;&#x9012;&#x51CF;&#x540E;&#x8FD4;&#x56DE;&#x6570;&#x503C;&#x3002;</li>
</ul>

<h3 id="&#x8BED;&#x6CD5;_8">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> x-- or --x
</pre>

<h3 id="&#x793A;&#x4F8B;_8">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">// &#x540E;&#x7F6E; 
var x = 3;
y = x--; // y = 3, x = 2

// &#x524D;&#x7F6E;
var a = 2;
b = --a; // a = 1, b = 1
</pre>

<h2 id="&#x4E00;&#x5143;&#x8D1F;&#x53F7;_(-)"><a name="Unary_negation">&#x4E00;&#x5143;&#x8D1F;&#x53F7; (-)</a></h2>

<p>&#x4E00;&#x5143;&#x8D1F;&#x53F7;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;unary negation operator&#xFF09;&#x4F4D;&#x4E8E;&#x64CD;&#x4F5C;&#x6570;&#x524D;&#x9762;&#xFF0C;&#x5E76;&#x8F6C;&#x6362;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x7B26;&#x53F7;&#x3002;</p>

<h3 id="&#x8BED;&#x6CD5;_9">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> -x
</pre>

<h3 id="&#x793A;&#x4F8B;_9">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">var x = 3;
y = -x; // y = -3, x = 3
</pre>

<h2 id="&#x4E00;&#x5143;&#x6B63;&#x53F7;_()"><a name="Unary_plus">&#x4E00;&#x5143;&#x6B63;&#x53F7;</a>&#xA0;(+)</h2>

<p>&#x4E00;&#x5143;&#x6B63;&#x53F7;&#x8FD0;&#x7B97;&#x7B26;&#xFF08;unary plus operator&#xFF09;&#x4F4D;&#x4E8E;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#x524D;&#x9762;&#xFF0C;&#x8BA1;&#x7B97;&#x5176;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x6570;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x64CD;&#x4F5C;&#x6570;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#xFF0C;&#x4F1A;&#x5C1D;&#x8BD5;&#x5C06;&#x5176;&#x8F6C;&#x6362;&#x6210;&#x4E00;&#x4E2A;&#x6570;&#x503C;&#x3002; &#x5C3D;&#x7BA1;&#x4E00;&#x5143;&#x8D1F;&#x53F7;&#x4E5F;&#x80FD;&#x8F6C;&#x6362;&#x975E;&#x6570;&#x503C;&#x7C7B;&#x578B;&#xFF0C;&#x4F46;&#x662F;&#x4E00;&#x5143;&#x6B63;&#x53F7;&#x662F;&#x8F6C;&#x6362;&#x5176;&#x4ED6;&#x5BF9;&#x8C61;&#x5230;&#x6570;&#x503C;&#x7684;&#x6700;&#x5FEB;&#x65B9;&#x6CD5;&#xFF0C;&#x4E5F;&#x662F;&#x6700;&#x63A8;&#x8350;&#x7684;&#x505A;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4E0D;&#x4F1A;&#x5BF9;&#x6570;&#x503C;&#x6267;&#x884C;&#x4EFB;&#x4F55;&#x591A;&#x4F59;&#x64CD;&#x4F5C;&#x3002;&#x5B83;&#x53EF;&#x4EE5;&#x5C06;&#x5B57;&#x7B26;&#x4E32;&#x8F6C;&#x6362;&#x6210;&#x6574;&#x6570;&#x548C;&#x6D6E;&#x70B9;&#x6570;&#x5F62;&#x5F0F;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x8F6C;&#x6362;&#x975E;&#x5B57;&#x7B26;&#x4E32;&#x503C;&#xA0;<code>true</code>&#xFF0C;<code>false</code> <code>&#x548C;</code>&#xA0;<code>null</code>&#x3002;&#x5C0F;&#x6570;&#x548C;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x683C;&#x5F0F;&#x5B57;&#x7B26;&#x4E32;&#x4E5F;&#x53EF;&#x4EE5;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;&#x3002;&#x8D1F;&#x6570;&#x5F62;&#x5F0F;&#x5B57;&#x7B26;&#x4E32;&#x4E5F;&#x53EF;&#x4EE5;&#x8F6C;&#x6362;&#x6210;&#x6570;&#x503C;&#xFF08;&#x5BF9;&#x4E8E;&#x5341;&#x516D;&#x8FDB;&#x5236;&#x4E0D;&#x9002;&#x7528;&#xFF09;&#x3002;&#x5982;&#x679C;&#x5B83;&#x4E0D;&#x80FD;&#x89E3;&#x6790;&#x4E00;&#x4E2A;&#x503C;&#xFF0C;&#x5219;&#x8BA1;&#x7B97;&#x7ED3;&#x679C;&#x4E3A;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN</a>.</p>

<h3 id="&#x8BED;&#x6CD5;_10">&#x8BED;&#x6CD5;</h3>

<pre class="syntaxbox"><strong>&#x8FD0;&#x7B97;&#x7B26;:</strong> +x
</pre>

<h3 id="&#x793A;&#x4F8B;_10">&#x793A;&#x4F8B;</h3>

<pre class="brush: js">+3     // 3
+&quot;3&quot;   // 3
+true  // 1
+false // 0
+null  // 0
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
   <td><a lang="en" title="ECMAScript 5.1 (ECMA-262)" class="external" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.3" hreflang="en">ECMAScript 5.1 (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in several sections of the specification: <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.6" class="external">Additive operators</a>, <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.5" class="external">Multiplicative operators</a>, <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.3" class="external">Postfix expressions</a>, <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.4" class="external">Unary operators</a>.</td>
  </tr>
  <tr>
   <td><a lang="en" title="ECMAScript 2015 (6th Edition, ECMA-262)" class="external" href="http://www.ecma-international.org/ecma-262/6.0/#sec-postfix-expressions" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Defined in several sections of the specification: <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-additive-operators" class="external">Additive operators</a>, <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-multiplicative-operators" class="external">Multiplicative operators</a>, <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-postfix-expressions" class="external">Postfix expressions</a>, <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-unary-operators" class="external">Unary operators</a>.</td>
  </tr>
  <tr>
   <td>ECMAScript 7</td>
   <td>Draft</td>
   <td><a href="https://github.com/rwaldron/exponentiation-operator" class="external">Exponentiation operator</a>.</td>
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
  <tr>
   <td>Exponentiation operator</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a title="Released on 2015-11-03." href="/en-US/Firefox/Releases/42">42</a> (42)</td>
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
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
  <tr>
   <td>Exponentiation operator</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0 (42)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Assignment operators</a></li>
</ul>
                  
                
              