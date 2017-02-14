
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">ReferenceError: assignment to undeclared variable &quot;x&quot; (Firefox)
ReferenceError: &quot;x&quot; is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p>&#xA0; &#x4EC5;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E2D;&#x51FA;&#x73B0; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;"><code>ReferenceError</code></a> &#x8B66;&#x544A;&#x3002;</p>

<h2 id="&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;">&#x53D1;&#x751F;&#x4E86;&#x4EC0;&#x4E48;?</h2>

<p>&#x5728;&#x4EE3;&#x7801;&#x91CC;&#x8D4B;&#x503C;&#x4E86;&#x4E00;&#x4E2A;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x3002;&#x6362;&#x53E5;&#x8BDD;&#x8BF4;&#xFF0C;&#x6709;&#x5904;&#x6CA1;&#x6709;&#x5E26;&#x7740;<code><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/var"> var</a></code> &#x5173;&#x952E;&#x5B57;&#x7684;&#x8D4B;&#x503C;&#x3002;<span id="result_box" lang="zh-CN"><span>&#x4E8B;&#x5B9E;&#x4E0A;&#x5DF2;&#x58F0;&#x660E;&#x7684;&#x548C;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x4E4B;&#x95F4;&#x6709;&#x4E00;&#x4E9B;&#x5DEE;&#x5F02;&#xFF0C;&#x8FD9;&#x53EF;&#x80FD;&#x4F1A;&#x5BFC;&#x81F4;&#x610F;&#x60F3;&#x4E0D;&#x5230;&#x7684;&#x7ED3;&#x679C;&#xFF0C;&#x8FD9;&#x5C31;&#x662F;&#x4E3A;&#x4EC0;&#x4E48; JavaScript &#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x6253;&#x5370;&#x51FA;&#x8FD9;&#x79CD;&#x9519;&#x8BEF;&#x3002;</span></span></p>

<p><span class="short_text" id="result_box" lang="zh-CN"><span>&#x5173;&#x4E8E;&#x5DF2;&#x58F0;&#x660E;&#x548C;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x5176;&#x6709;&#x4E09;&#x4E2A;&#x6CE8;&#x610F;&#x4E8B;&#x9879;&#xFF1A;</span></span></p>

<ul>
 <li><span class="short_text" id="result_box" lang="zh-CN"><span>&#x5DF2;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x7EA6;&#x675F;&#x5728;&#x5176;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#x4E2D;</span></span><span class="short_text" lang="zh-CN"><span>&#x3002;</span><span>&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x603B;&#x662F;&#x5168;&#x5C40;&#x7684;&#x3002;</span></span></li>
 <li><span class="short_text" id="result_box" lang="zh-CN"><span>&#x5DF2;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x5728;&#x6267;&#x884C;&#x4EFB;&#x4F55;&#x4EE3;&#x7801;&#x4E4B;&#x524D;&#x5C31;&#x521B;&#x5EFA;&#x4E86;</span></span><span class="short_text" lang="zh-CN"><span>&#x3002;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x5219;&#x4E0D;&#x5B58;&#x5728;&#xFF0C;&#x76F4;&#x5230;&#x6267;&#x884C;&#x76F8;&#x5173;&#x7684;&#x4EE3;&#x7801;&#x3002;</span></span></li>
 <li><span class="short_text" id="result_box" lang="zh-CN"><span>&#x5DF2;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x662F;&#x5176;&#x6267;&#x884C;&#x4E0A;&#x4E0B;&#x6587;&#xFF08;&#x51FD;&#x6570;&#x6216;&#x5168;&#x5C40;&#xFF09;&#x7684;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x5C5E;&#x6027;&#x3002;</span><span>&#x800C;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x662F;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#xFF08;&#x4F8B;&#x5982;&#x53EF;&#x4EE5;&#x5220;&#x9664;&#xFF09;&#x3002;</span></span></li>
</ul>

<p>&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x53CA;&#x4F8B;&#x5B50;&#xFF0C;&#x8BF7;&#x53C2;&#x8003; <code><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/var">var</a></code> &#x9875;&#x9762;&#x3002;</p>

<p>&#x5173;&#x4E8E;&#x672A;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x7684;&#x8D4B;&#x503C;&#x7684;&#x9519;&#x8BEF;&#x4EC5;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x91CC;&#x51FA;&#x73B0;&#x3002;&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E9B;&#x5C06;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<p>&#x5728;&#x672C;&#x4F8B;&#x4E2D;&#xFF0C;&quot;bar&quot; &#x662F;&#x672A;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x3002;</p>

<pre class="brush: js example-bad">function foo() { 
  &quot;use strict&quot;; 
  bar = true; 
} 
foo(); // ReferenceError: assignment to undeclared variable bar
</pre>

<h3 id="&#x6709;&#x6548;&#x7684;">&#x6709;&#x6548;&#x7684;</h3>

<p>&#x4E3A;&#x4E86;&#x4F7F; &quot;bar&quot; &#x662F;&#x4E00;&#x4E2A;&#x5DF2;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#xFF0C;&#x4F60;&#x9700;&#x8981;&#x5728;&#x5176;&#x524D;&#x9762;&#x52A0;&#x4E00;&#x4E2A; var &#x5173;&#x952E;&#x5B57;&#x3002;</p>

<pre class="brush: js example-good">function foo() {
  &quot;use strict&quot;;
  var bar = true;
}
foo();</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
</ul>
                  
                
              