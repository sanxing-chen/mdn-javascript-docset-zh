
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: unterminated string literal
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a>&#xA0;</p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;&#xFF1F;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;&#xFF1F;</h2>

<p>&#x67D0;&#x5904; js &#x89E3;&#x6790;&#x5B57;&#x7B26;&#x4E32;&#x51FA;&#x9519;&#x3002;&#x5B57;&#x7B26;&#x4E32;&#x5FC5;&#x987B;&#x4F7F;&#x7528;&#x5355;&#x5F15;&#x53F7;&#x6216;&#x53CC;&#x5F15;&#x53F7;&#x6765;&#x6B63;&#x786E;&#x7684;&#x5173;&#x95ED;&#x3002;&#x5728; Javascript &#x4E2D;&#x4F7F;&#x7528;&#x5355;&#x5F15;&#x53F7;&#x7684;&#x5B57;&#x7B26;&#x548C;&#x53CC;&#x5F15;&#x53F7;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x6CA1;&#x6709;&#x533A;&#x522B;&#x7684;&#x3002;&#x5B57;&#x7B26;&#x4E32;&#x7528;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation">&#x8F6C;&#x4E49;&#x5B57;&#x7B26;</a>&#x4E0D;&#x662F;&#x5355;&#x5F15;&#x53F7;&#x5C31;&#x662F;&#x53CC;&#x5F15;&#x3002;&#x4E3A;&#x89E3;&#x51B3;&#x8FD9;&#x4E2A;&#x9519;&#x8BEF;&#xFF0C;&#x68C0;&#x67E5;&#x4E00;&#x4E0B;&#xFF1A;</p>

<ul>
 <li>&#x4F60;&#x5B57;&#x7B26;&#x4E32;&#x7684;&#x5F15;&#x53F7;&#x662F;&#x5426;&#x6210;&#x5BF9;&#x3002;</li>
 <li>&#x4F60;&#x662F;&#x5426;&#x6B63;&#x786E;&#x4F7F;&#x7528;&#x4E86;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;</li>
 <li>&#x4F60;&#x7684;&#x5B57;&#x7B26;&#x4E32;&#x662F;&#x5426;&#x5728;&#x591A;&#x884C;&#x4E2D;&#x89E3;&#x6790;&#x6B63;&#x5E38;&#x3002;</li>
</ul>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x591A;&#x884C;&#x5B57;&#x7B26;&#x4E32;">&#x591A;&#x884C;&#x5B57;&#x7B26;&#x4E32;</h3>

<p>&#x5728;javascript&#x4E2D;&#x4F60;&#x4E0D;&#x80FD;&#x591F;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x591A;&#x884C;&#x5B57;&#x7B26;&#x4E32;&#x8D4B;&#x503C;&#x7ED9;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x3002;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js example-bad">var longString = &quot;This is a very long string which needs 
                  to wrap across multiple lines because 
                  otherwise my code is unreadable.&quot;;
// SyntaxError: unterminated string literal</pre>

<p>&#x53EF;&#x4EE5;&#x4F7F;&#x7528;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition">&quot;+&quot;&#x8FD0;&#x7B97;&#x7B26;</a>&#xFF0C;&#x53CD;&#x659C;&#x6760;&#xFF0C;&#x6216;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;</a>&#x6765;&#x4EE3;&#x66FF;&#x591A;&#x884C;&#x3002;&#x201C;+&#x201D;&#x8FD0;&#x7B97;&#x7B26;&#x7684;&#x4F7F;&#x7528;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js example-good">var longString = &quot;This is a very long string which needs &quot; +
                 &quot;to wrap across multiple lines because &quot; +
                 &quot;otherwise my code is unreadable.&quot;;
</pre>

<p>&#x6216;&#x8005;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#x201C;\&#x201D;&#x5728;&#x6BCF;&#x4E00;&#x884C;&#x7684;&#x672B;&#x5C3E;&#xFF0C;&#x4EE5;&#x8868;&#x793A;&#x8BE5;&#x5B57;&#x7B26;&#x4E32;&#x5728;&#x4E0B;&#x4E00;&#x884C;&#x7EE7;&#x7EED;&#x3002;&#x8981;&#x786E;&#x4FDD;&#x201C;\&#x201C;&#x4E4B;&#x540E;&#x6CA1;&#x6709;&#x6CA1;&#x6709;&#x7A7A;&#x683C;&#x548C;&#x4EFB;&#x4F55;&#x5176;&#x4ED6;&#x7684;&#x5B57;&#x7B26;&#xFF0C;&#x53CA;&#x7F29;&#x8FDB;&#xFF0C;&#x5426;&#x5219;&#x8BE5;&#x201C;\&#x201D;&#x5C06;&#x4E0D;&#x4F1A;&#x8D77;&#x4F5C;&#x7528;&#x3002;&#x4F7F;&#x7528;&#x65B9;&#x6CD5;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js example-good">var longString = &quot;This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.&quot;;
</pre>

<p>&#x53E6;&#x4E00;&#x79CD;&#x65B9;&#x5F0F;&#x662F;&#x4F7F;&#x7528;&#xA0;ES 2015 &#x7684;&#x73AF;&#x5883;&#x6240;&#x652F;&#x6301;<a href="/zh-CN/docs/Web/JavaScript/Reference/Template_literals" class="new">&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;</a>&#xFF08;&#x53CD;&#x5F15;&#x53F7;` `&#xFF09;&#x3002;</p>

<pre class="brush: js example-good">var longString = `This is a very long string which needs 
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/String" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>String</code></a>&#xA0;</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">&#x6A21;&#x677F;&#x5B57;&#x7B26;&#x4E32;</a></li>
</ul>
                  
                
              