
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: redeclaration of formal parameter &quot;x&quot; (Firefox)
SyntaxError: Identifier &quot;x&quot; has already been declared (Chrome)
SyntaxError: Cannot declare a let variable twice: &apos;x&apos; (WebKit)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x67D0;&#x4E2A;&#x53D8;&#x91CF;&#x540D;&#x79F0;&#x5DF2;&#x7ECF;&#x4F5C;&#x4E3A;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x51FA;&#x73B0;&#x4E86;&#xFF0C;&#x4F46;&#x662F;&#x53C8;&#x4F7F;&#x7528;&#x4E86;&#xA0;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> &#x5728;&#x51FD;&#x6570;&#x4F53;&#x91CC;&#x91CD;&#x58F0;&#x660E;&#x4E86;&#x3002;&#x5728;JavaScript &#x4E2D;&#x4E0D;&#x5141;&#x8BB8;&#x4F7F;&#x7528;let&#x5728;&#x76F8;&#x540C;&#x7684;&#x51FD;&#x6570;&#x6216;&#x5757;&#x8303;&#x56F4;&#x5185;&#x91CD;&#x65B0;&#x58F0;&#x660E;&#x76F8;&#x540C;&#x7684;&#x53D8;&#x91CF;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x5728;&#x672C;&#x4F8B;&#x4E2D;&#xFF0C;&#x53C2;&#x6570; &quot;arg&quot; &#x53C8;&#x91CD;&#x65B0;&#x58F0;&#x660E;&#x4E86;&#xFF1A;</p>

<pre class="brush: js example-bad">function f(arg) { 
  let arg = &quot;foo&quot;; 
}

// SyntaxError: redeclaration of formal parameter &quot;arg&quot;
</pre>

<p>&#x5982;&#x679C;&#x8981;&#x66F4;&#x6539;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x7684;&#x201C;arg&#x201D;&#x7684;&#x503C;&#xFF0C;&#x53EF;&#x4EE5;&#x50CF;&#x4E0B;&#x9762;&#x4E00;&#x6837;&#xFF0C;&#x4F46;&#x4E0D;&#x9700;&#x8981;&#x518D;&#x6B21;&#x58F0;&#x660E;&#x540C;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x3002; &#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF1A;&#x4F60;&#x53EF;&#x4EE5;&#x7701;&#x7565; let &#x5173;&#x952E;&#x5B57;&#x3002; &#x5982;&#x679C;&#x8981;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x53D8;&#x91CF;&#xFF0C;&#x5219;&#x9700;&#x8981;&#x5C06;&#x5176;&#x91CD;&#x547D;&#x540D;&#xFF0C;&#x56E0;&#x4E3A;&#x5176;&#x4E0E;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x6709;&#x51B2;&#x7A81;&#x3002;</p>

<pre class="brush: js example-good">function f(arg) {
  arg = &quot;foo&quot;;
}

function f(arg) { 
  let bar = &quot;foo&quot;; 
}
</pre>

<h2 id="&#x517C;&#x5BB9;&#x6027;&#x63D0;&#x9192;">&#x517C;&#x5BB9;&#x6027;&#x63D0;&#x9192;</h2>

<ul>
 <li>&#x5728; Firefox 49 (Firefox 49 / Thunderbird 49 / SeaMonkey 2.46) &#x4E4B;&#x524D;&#xFF0C;&#x4F1A;&#x629B;&#x51FA;&#x7684;&#x662F; <a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> (<a title="FIXED: Redeclaration of formal parameter with lexical binding should be SyntaxError" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1275240" class="external">bug&#xA0;1275240</a>)&#x3002;</li>
</ul>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations">Declaring variables</a> in the <a href="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a></li>
</ul>
                  
                
              