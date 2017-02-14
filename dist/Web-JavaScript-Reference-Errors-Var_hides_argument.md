
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">TypeError: variable &quot;x&quot; redeclares argument (Firefox)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError" title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>TypeError</code></a> &#x8B66;&#x544A;&#x4EC5;&#x4EC5;&#x5728; <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;</a> &#x51FA;&#x73B0;&#x3002;</p>

<h2 id="&#x54EA;&#x91CC;&#x6709;&#x95EE;&#x9898;&#xFF1F;">&#x54EA;&#x91CC;&#x6709;&#x95EE;&#x9898;&#xFF1F;</h2>

<p>&#x51FD;&#x6570;&#x53C2;&#x6570;&#x4E2D;&#x51FA;&#x73B0;&#x4E86;&#x540D;&#x79F0;&#x76F8;&#x540C;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x4E4B;&#x540E;&#x5728;&#x51FD;&#x6570;&#x4F53;&#x4E2D;&#x4F7F;&#x7528; <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> &#x8D4B;&#x503C;&#x8BED;&#x53E5;&#x91CD;&#x65B0;&#x58F0;&#x660E;&#x3002; &#x8FD9;&#x53EF;&#x80FD;&#x662F;&#x4E00;&#x4E2A;&#x547D;&#x540D;&#x51B2;&#x7A81;&#xFF0C;&#x6240;&#x4EE5; JavaScript &#x8B66;&#x544A;&#x4E86;&#x5B83;&#x3002;</p>

<p>&#x8FD9;&#x4E2A;&#x9519;&#x8BEF;&#x53EA;&#x5728; <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x4EE3;&#x7801;</a> &#x4E2D;&#x4F5C;&#x4E3A;&#x8B66;&#x544A;&#x51FA;&#x73B0;&#x3002;&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x7684;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x91CD;&#x65B0;&#x58F0;&#x660E;&#x4F1A;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x60C5;&#x51B5;">&#x65E0;&#x6548;&#x60C5;&#x51B5;</h3>

<p>&#x8FD9;&#x4E2A;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x53D8;&#x91CF; <code>arg</code> &#x91CD;&#x65B0;&#x58F0;&#x660E;&#x4E86;&#x53C2;&#x6570;&#x3002;</p>

<pre class="brush: js example-bad">&quot;use strict&quot;;

function f(arg) { 
  var arg = &quot;foo&quot;; 
}
</pre>

<h3 id="&#x65E0;&#x6548;&#x60C5;&#x51B5;_2">&#x65E0;&#x6548;&#x60C5;&#x51B5;</h3>

<p>&#x4E3A;&#x4E86;&#x4FEE;&#x590D;&#x8B66;&#x544A;&#xFF0C;<code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> &#x8BED;&#x53E5;&#x5E94;&#x8BE5;&#x88AB;&#x79FB;&#x9664;&#xFF0C;&#x56E0;&#x4E3A;&#x53D8;&#x91CF;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x3002;&#x6216;&#x8005;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x91CD;&#x547D;&#x540D;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x6216;&#x8005;&#x53D8;&#x91CF;&#x540D;&#x79F0;&#x3002;</p>

<pre class="brush: js example-good">&quot;use strict&quot;;

function f(arg) {
  arg = &quot;foo&quot;;
}
</pre>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a></li>
</ul>
                  
                
              