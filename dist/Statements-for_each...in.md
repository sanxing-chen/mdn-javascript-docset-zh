
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;.</p>

<div class="noinclude">
<div class="warning">
<p>&#x4F5C;&#x4E3A;ECMA-357(<a href="/zh-CN/docs/E4X" title="/zh-CN/docs/E4X">E4X</a>)&#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;,for each...in&#x8BED;&#x53E5;&#x5DF2;&#x88AB;&#x5E9F;&#x5F03;,E4X&#x4E2D;&#x7684;&#x5927;&#x90E8;&#x5206;&#x7279;&#x6027;&#x5DF2;&#x88AB;&#x5220;&#x9664;,&#x4F46;&#x8003;&#x8651;&#x5230;&#x5411;&#x540E;&#x517C;&#x5BB9;,for each...in&#x53EA;&#x4F1A;&#x88AB;&#x7981;&#x7528;&#x800C;&#x4E0D;&#x4F1A;&#x88AB;&#x5220;&#x9664;,&#x53EF;&#x4EE5;&#x4F7F;&#x7528;ES6&#x4E2D;&#x65B0;&#x7684;<a href="/zh-CN/docs/JavaScript/Reference/Statements/for...of" title="/zh-CN/docs/JavaScript/Reference/Statements/for...of">for...of</a>&#x8BED;&#x53E5;&#x6765;&#x4EE3;&#x66FF;.(<a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=791343" title="disable for-each statement on javascript.options.xml.{content|chrome} = false">bug&#xA0;791343</a>.)</p>
</div>

<div class="note"><code>for each...in</code> &#x662F; <a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-357.htm" title="http://www.ecma-international.org/publications/standards/Ecma-357.htm">ECMA-357 (E4X)</a> &#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;, &#x5927;&#x90E8;&#x5206;&#x975E;Mozilla&#x6D4F;&#x89C8;&#x5668;&#x90FD;&#x6CA1;&#x6709;&#x5B9E;&#x73B0;&#x8BE5;&#x6807;&#x51C6;, E4X&#x5E76;&#x4E0D;&#x662F; ECMAScript &#x6807;&#x51C6;&#x7684;&#x4E00;&#x90E8;&#x5206;.</div>
</div>

<h2 id="Syntax" name="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code>for each (<em>variable</em> in <em>object</em>) {
  <em>statement</em>
}</code></pre>

<h2 id="Parameters" name="Parameters">&#x53C2;&#x6570;</h2>

<dl>
 <dt><code>variable</code></dt>
 <dd>&#x7528;&#x6765;&#x904D;&#x5386;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x53D8;&#x91CF;,&#x524D;&#x9762;&#x7684;<code>var</code>&#x5173;&#x952E;&#x5B57;&#x662F;&#x53EF;&#x9009;&#x7684;.&#x8BE5;&#x53D8;&#x91CF;&#x662F;&#x51FD;&#x6570;&#x7684;&#x5C40;&#x90E8;&#x53D8;&#x91CF;&#x800C;&#x4E0D;&#x662F;&#x8BED;&#x53E5;&#x5757;&#x7684;&#x5C40;&#x90E8;&#x53D8;&#x91CF;.</dd>
</dl>

<dl>
 <dt><code>object</code></dt>
 <dd>&#x8BE5;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x503C;&#x4F1A;&#x88AB;&#x904D;&#x5386;.</dd>
</dl>

<dl>
 <dt><code>statement</code></dt>
 <dd>&#x904D;&#x5386;&#x5C5E;&#x6027;&#x503C;&#x65F6;&#x6267;&#x884C;&#x7684;&#x8BED;&#x53E5;. &#x5982;&#x679C;&#x60F3;&#x8981;&#x6267;&#x884C;&#x591A;&#x6761;&#x8BED;&#x53E5;, &#x8BF7;&#x7528;(<code>{ ... }</code>) &#x5C06;&#x591A;&#x6761;&#x8BED;&#x53E5;&#x62EC;&#x4F4F;.</dd>
</dl>

<h2 id="Description" name="Description">&#x63CF;&#x8FF0;</h2>

<p>&#x4E00;&#x4E9B;&#x5BF9;&#x8C61;&#x7684;&#x5185;&#x7F6E;&#x5C5E;&#x6027;&#x662F;&#x65E0;&#x6CD5;&#x88AB;&#x904D;&#x5386;&#x5230;&#x7684;,&#x5305;&#x62EC;&#x6240;&#x6709;&#x7684;&#x5185;&#x7F6E;&#x65B9;&#x6CD5;,&#x4F8B;&#x5982;String&#x5BF9;&#x8C61;&#x7684;<code>indexOf</code>&#x65B9;&#x6CD5;.&#x4E0D;&#x8FC7;,&#x5927;&#x90E8;&#x5206;&#x7684;&#x7528;&#x6237;&#x81EA;&#x5B9A;&#x4E49;&#x5C5E;&#x6027;&#x90FD;&#x662F;&#x53EF;&#x904D;&#x5386;&#x7684;.</p>

<h2 id="Examples" name="Examples">&#x793A;&#x4F8B;</h2>

<h3 id="Example:_Using_for_each...in" name="Example:_Using_for_each...in">&#x4F8B;&#x5B50;: &#x4F7F;&#x7528;<code>for each...in</code></h3>

<p><strong>&#x8B66;&#x544A;:</strong>&#x6C38;&#x8FDC;&#x4E0D;&#x8981;&#x4F7F;&#x7528;for each...in&#x8BED;&#x53E5;&#x904D;&#x5386;&#x6570;&#x7EC4;,&#x4EC5;&#x7528;&#x6765;&#x904D;&#x5386;&#x5E38;&#x89C4;&#x5BF9;&#x8C61;,<a href="/zh-CN/docs/JavaScript/Reference/Statements/for...in#Description" title="JavaScript/Reference/Statements/for...in#Description">&#x8FD9;&#x91CC;&#x8BB2;&#x89E3;&#x4E86;&#x4E3A;&#x4EC0;&#x4E48;&#x8FD9;&#x4E48;&#x8BF4;</a>.</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x7247;&#x6BB5;&#x6F14;&#x793A;&#x5982;&#x4F55;&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x503C;, &#x5E76;&#x8BA1;&#x7B97;&#x5B83;&#x4EEC;&#x7684;&#x548C;:</p>

<pre class="brush:js">var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};

for each (var item in obj) {
  sum += item;
}

print(sum); // &#x8F93;&#x51FA;&quot;26&quot;,&#x4E5F;&#x5C31;&#x662F;5+13+8&#x7684;&#x503C;</pre>

<h2 id="See_also" name="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/JavaScript/Reference/Statements/for...in" title="JavaScript/Reference/Statements/for...in">for...in</a> - &#x4E00;&#x4E2A;&#x76F8;&#x4F3C;&#x7684;&#x8BED;&#x6CD5;,&#x7528;&#x6765;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x79F0;&#x800C;&#x975E;&#x5C5E;&#x6027;&#x503C;.</li>
 <li><a href="/zh-CN/docs/JavaScript/Reference/Statements/for...of" title="/zh-CN/docs/JavaScript/Reference/Statements/for...of">for...of</a> - &#x4E00;&#x4E2A;&#x76F8;&#x4F3C;&#x7684;&#x8BED;&#x6CD5;,&#x7528;&#x6765;&#x904D;&#x5386;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;,&#x6709;&#x65F6;&#x5019;&#x6548;&#x679C;&#x7B49;&#x540C;&#x4E8E;<code>for each</code>...<code>in</code>&#x8BED;&#x53E5;.</li>
 <li><a class="new" href="/zh-CN/docs/JavaScript/Reference/Statements/for" title="JavaScript/Reference/Statements/for">for</a></li>
 <li><a href="/zh-CN/docs/JavaScript/Guide/Predefined_Core_Objects#Array_Object">&#x6570;&#x7EC4;&#x63A8;&#x5BFC;&#x5F0F;</a> (&#x8BE5;&#x8BED;&#x53E5;&#x4E2D;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;for...in<code>,</code><code>for each</code>...<code>in,</code><code>for</code>...<code>of&#x591A;&#x79CD;&#x8BED;&#x6CD5;</code>)</li>
</ul>
                  
                
              