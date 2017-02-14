
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x9519;&#x4E86;?</h2>

<p>&#x5728;&#x81F3;&#x5C11;&#x5E26;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code> &#x6784;&#x9020;&#x5668;&#x4E2D;&#x5B83;&#x7684;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x662F;&#x521B;&#x5EFA;&#x7684;&#x65B0;&#x51FD;&#x6570;&#x7684;&#x6E90;&#x4EE3;&#x7801;&#x3002;&#x5269;&#x4E0B;&#x7684;&#x90FD;&#x662F;&#x65B0;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<p>&#x6784;&#x9020;&#x5668;&#x7684;&#x53C2;&#x6570;&#x6709;&#x4E9B;&#x60C5;&#x51B5;&#x4E0B;&#x662F;&#x65E0;&#x6548;&#x7684;&#x3002; &#x4E5F;&#x8BB8;&#x662F;&#x4F60;&#x4E0D;&#x5C0F;&#x5FC3;&#x7528;&#x4E86;&#x4E00;&#x4E2A;&#x5173;&#x952E;&#x5B57; <code>if </code>&#x6216;&#xA0;<code>var&#xA0;</code>&#x4F5C;&#x4E3A;&#x53C2;&#x6570;&#x540D;&#x79F0;&#xFF0C;&#x6216;&#x8005;&#x5728;&#x53C2;&#x6570;&#x5217;&#x8868;&#x4E2D;&#x6709;&#x4E00;&#x4E9B;&#x6742;&#x4E71;&#x7684;&#x6807;&#x70B9;&#x7B26;&#x53F7;&#x3002; &#x6216;&#x8005;&#x4E5F;&#x8BB8;&#x4F60;&#x4E0D;&#x5C0F;&#x5FC3;&#x4F20;&#x9012;&#x4E86;&#x4E00;&#x4E2A;&#x65E0;&#x6548;&#x7684;&#x503C;&#xFF0C;&#x6BD4;&#x5982;&#x6570;&#x5B57;&#x6216;&#x5BF9;&#x8C61;&#x3002;</p>

<h2 id="&#x597D;&#x5427;&#xFF0C;&#x8FD9;&#x89E3;&#x51B3;&#x4E86;&#x6211;&#x7684;&#x95EE;&#x9898;&#x3002;&#x4F46;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x5F00;&#x59CB;&#x5C31;&#x8BF4;&#x660E;&#x767D;&#x5462;&#xFF1F;">&#x597D;&#x5427;&#xFF0C;&#x8FD9;&#x89E3;&#x51B3;&#x4E86;&#x6211;&#x7684;&#x95EE;&#x9898;&#x3002;&#x4F46;&#x662F;&#x4E3A;&#x4EC0;&#x4E48;&#x4E0D;&#x5F00;&#x59CB;&#x5C31;&#x8BF4;&#x660E;&#x767D;&#x5462;&#xFF1F;</h2>

<p>&#x8BDA;&#x7136;&#xFF0C;&#x9519;&#x8BEF;&#x4FE1;&#x606F;&#x4E2D;&#x7684;&#x63AA;&#x8F9E;&#x7A0D;&#x5FAE;&#x6709;&#x4E9B;&#x5947;&#x602A;&#x3002;&quot;Formal parameter&quot; &#x662F; &quot;function argument&quot; &#x7684;&#x53E6;&#x4E00;&#x79CD;&#x4F18;&#x7F8E;&#x7684;&#x540C;&#x4E49;&#x3002; &#x6211;&#x4EEC;&#x4F7F;&#x7528; &#x201C;malformed&#x201D;&#xFF08;&#x5373;&#x7578;&#x5F62;&#xFF09;&#x8FD9;&#x4E2A;&#x8BCD;&#xFF0C;&#x56E0;&#x4E3A;&#x6240;&#x6709;&#x7684;Firefox&#x5DE5;&#x7A0B;&#x5E08;&#x90FD;&#x662F;19&#x4E16;&#x7EAA;&#x54E5;&#x7279;&#x5F0F;&#x6050;&#x6016;&#x5C0F;&#x8BF4;&#x7684;&#x5DE8;&#x661F;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<pre class="brush: js example-bad">var f = Function(&quot;x y&quot;, &quot;return x + y;&quot;);  
// SyntaxError (missing a comma)

var f = Function(&quot;x,&quot;, &quot;return x;&quot;);  
// SyntaxError (extraneous comma)

var f = Function(37, &quot;alert(&apos;OK&apos;)&quot;);
// SyntaxError (numbers can&apos;t be argument names)
</pre>

<h3 id="&#x6709;&#x6548;&#x7684;">&#x6709;&#x6548;&#x7684;</h3>

<pre class="brush: js example-good">var f = Function(&quot;x, y&quot;, &quot;return x + y;&quot;);  // correctly punctuated

var f = Function(&quot;x&quot;, &quot;return x;&quot;);

// if you can, avoid using Function - this is much faster
var f = function (x) { return x; };
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">About functions</a></li>
 <li><a href="https://www.gutenberg.org/ebooks/84" class="external"><em>Frankenstein</em> by Mary Wollstonecraft Shelley, full e-text</a> (&quot;Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form.&quot;)</li>
</ul>
                  
                
              