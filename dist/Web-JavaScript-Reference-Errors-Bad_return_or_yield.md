
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x9519;&#x8BEF;&#x4FE1;&#x606F;">&#x9519;&#x8BEF;&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: return not in function
SyntaxError: yield not in function
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a>.</p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;&#xFF1F;</h2>

<p><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code>&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x6216;&#x8005;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code>&#xA0;&#x8BED;&#x53E5;&#x5728;&#x51FD;&#x6570;&#xA0;<a href="/en-US/docs/Web/JavaScript/Guide/Functions">function</a>&#xA0;&#x5916;&#x88AB;&#x8C03;&#x7528;. &#x6216;&#x8BB8;&#x662F;&#x5C11;&#x4E86;&#x4E00;&#x4E2A;&#x82B1;&#x62EC;&#x53F7;&#xFF0C; <code>return</code>&#xA0;&#x8FD4;&#x56DE;&#x7684;&#x548C;&#xA0;<code>yield</code>&#xA0;&#x8BED;&#x53E5;&#x5FC5;&#x987B;&#x662F;&#x5728;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x91CC;&#xFF0C;&#x56E0;&#x4E3A;&#x5B83;&#x4EEC;&#x4F1A;&#x505C;&#x6B62;&#xFF08;&#x6682;&#x505C;&#x6216;&#x6062;&#x590D;&#xFF09;&#x51FD;&#x6570;&#x7684;&#x7EE7;&#x7EED;&#x6267;&#x884C;&#xFF0C;&#x7136;&#x540E;&#x8FD4;&#x56DE;&#x3002;</p>

<h2 id="&#x8303;&#x4F8B;">&#x8303;&#x4F8B;</h2>

<pre class="brush: js example-bad">var cheer = function(score) {
  if (score === 147)
    return &quot;Maximum!&quot;;
  };
  if (score &gt; 100) {
    return &quot;Century!&quot;;
  }
}

// SyntaxError: return not in function
// &#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#xFF1A;&#x4E0D;&#x662F;&#x5728;&#x51FD;&#x6570;&#x91CC;&#x8FD4;&#x56DE;</pre>

<p>&#x521D;&#x6B21;&#x770B;&#x597D;&#x50CF;&#x6CA1;&#x4EC0;&#x4E48;&#x9519;&#x8BEF;&#xFF0C;&#x4F46;&#x662F;&#x4E0A;&#x9762;&#x8FD9;&#x6BB5;&#x4EE3;&#x7801;&#x5728;&#x7B2C;&#x4E00;&#x4E2A; if &#x540E;&#x9762;&#x5C11;&#x4E86;&#x4E00;&#x4E2A; &#x201C; } &#x201D;&#x3002;&#x6B63;&#x786E;&#x7684;&#x5E94;&#x8BE5;&#x5982;&#x4E0B;&#xFF1A;</p>

<pre class="brush: js example-good">var cheer = function(score) {
  if (score === 147) {
    return &quot;Maximum!&quot;;
  }
  if (score &gt; 100) {
    return &quot;Century!&quot;;
  }
};</pre>

<h2 id="&#x76F8;&#x5173;&#x4FE1;&#x606F;">&#x76F8;&#x5173;&#x4FE1;&#x606F;</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code></li>
</ul>
                  
                
              