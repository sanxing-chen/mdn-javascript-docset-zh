
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a> &#x53EA;&#x5728;<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E0B;&#x4F1A;&#x51FA;&#x73B0;&#x7684;&#x8B66;&#x544A;&#x3002;</p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x5728;&#x901A;&#x5E38;&#x671F;&#x671B;&#x8FDB;&#x884C;&#x76F8;&#x7B49;&#x5224;&#x5B9A;&#xFF08;<code>==</code>&#xFF09;&#x7684;&#x5730;&#x65B9;&#x51FA;&#x73B0;&#x4E86;&#x8D4B;&#x503C;<code>&#xFF08;=</code>&#xFF09;&#x3002; &#x4E3A;&#x4E86;&#x5E2E;&#x52A9;&#x8C03;&#x8BD5;&#xFF0C;JavaScript&#xFF08;&#x5728;&#x5F00;&#x542F;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF09;&#x4F1A;&#x5BF9;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x8FDB;&#x884C;&#x8B66;&#x544A;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x7684;&#x8D4B;&#x503C;">&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x5185;&#x7684;&#x8D4B;&#x503C;</h3>

<p>&#x4E0D;&#x5EFA;&#x8BAE;&#x5728;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D; &#xFF08;&#x4F8B;&#x5982; <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code>&#xFF09; &#x4F7F;&#x7528;&#x7B80;&#x5355;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#xFF0C;&#x56E0;&#x4E3A;&#x5728;&#x626B;&#x89C6;&#x4EE3;&#x7801;&#x7684;&#x65F6;&#x5019;&#x8D4B;&#x503C;&#x64CD;&#x4F5C;&#x4E0E;&#x76F8;&#x7B49;&#x5224;&#x5B9A;&#x5BB9;&#x6613;&#x4EA7;&#x751F;&#x6DF7;&#x6DC6;&#x3002;&#x4F8B;&#x5982;&#xFF0C;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#x4EE5;&#x4E0B;&#x5199;&#x6CD5;&#xFF1A;</p>

<pre class="brush: js example-bad">if (x = y) {
  // do the right thing
}
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x5728;&#x6761;&#x4EF6;&#x8868;&#x8FBE;&#x5F0F;&#x4E2D;&#x4F7F;&#x7528;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#xFF0C; &#x901A;&#x5E38;&#x7684;&#x505A;&#x6CD5;&#x662F;&#x7528;&#x4E00;&#x5BF9;&#x62EC;&#x53F7;&#x628A;&#x8D4B;&#x503C;&#x8BED;&#x53E5;&#x5305;&#x8D77;&#x6765;&#x3002; &#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">if ((x = y)) {
  // do the right thing
}</pre>

<p>&#x5426;&#x5219;&#xFF0C; &#x4F60;&#x7684;&#x672C;&#x610F;&#x53EF;&#x80FD;&#x662F;&#x60F3;&#x7528;&#x6BD4;&#x8F83;&#x64CD;&#x4F5C;&#x7B26; &#xFF08;&#x5982; <code>==</code> &#x6216; <code>===</code>&#xFF09;&#xFF1A;</p>

<pre class="brush: js">if (x == y) {
  // do the right thing
}</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Comparison operators</a></li>
</ul>
                  
                
              