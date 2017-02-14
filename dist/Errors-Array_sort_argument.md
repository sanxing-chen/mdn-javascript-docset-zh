
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">TypeError: invalid Array.prototype.sort argument (Firefox)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p><a title="sort() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x505A;&#x539F;&#x5730;&#x7684;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x53EF;&#x80FD;&#x662F;&#x4E0D;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6309;&#x7167;&#x5B57;&#x7B26;&#x4E32;&#x7684;Unicode&#x7801;&#x4F4D;&#x70B9;&#xFF08;code point&#xFF09;&#x6392;&#x5E8F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"><code>Array.prototype.sort()</code></a> &#x7684;&#x53C2;&#x6570;&#x9884;&#x671F;&#x4E3A; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> &#x6216;&#x8005;&#x662F;&#x4E00;&#x4E2A;&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#x6570;&#x7684;&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<pre class="brush: js example-bad">[1, 3, 2].sort(5);  // TypeError

var cmp = { asc: (x, y) =&gt; x &gt;= y, dsc : (x, y) =&gt; x &lt;= y };
[1, 3, 2].sort(cmp[this.key] || &apos;asc&apos;);  // TypeError
</pre>

<h3 id="&#x6709;&#x6548;&#x7684;">&#x6709;&#x6548;&#x7684;</h3>

<pre class="brush: js example-good">[1, 3, 2].sort();   // [1, 2, 3]


var cmp = { asc: (x, y) =&gt; x &gt;= y, dsc : (x, y) =&gt; x &lt;= y };
[1, 3, 2].sort(cmp[this.key || &apos;asc&apos;]); // [1, 2, 3]</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a title="sort() &#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x505A;&#x539F;&#x5730;&#x7684;&#x6392;&#x5E8F;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x6570;&#x7EC4;&#x3002; sort &#x6392;&#x5E8F;&#x53EF;&#x80FD;&#x662F;&#x4E0D;&#x7A33;&#x5B9A;&#x7684;&#x3002;&#x9ED8;&#x8BA4;&#x6309;&#x7167;&#x5B57;&#x7B26;&#x4E32;&#x7684;Unicode&#x7801;&#x4F4D;&#x70B9;&#xFF08;code point&#xFF09;&#x6392;&#x5E8F;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"><code>Array.prototype.sort()</code></a></li>
</ul>
                  
                
              