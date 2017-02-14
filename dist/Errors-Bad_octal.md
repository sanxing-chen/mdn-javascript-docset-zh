
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p>&#x4EC5;&#x5728; <a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> &#x4E0B;&#x51FA;&#x73B0; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a> &#x8B66;&#x544A;&#x3002;</p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x5341;&#x8FDB;&#x5236;&#x5B57;&#x9762;&#x91CF;&#x53EF;&#x4EE5;&#x4EE5;&#x96F6;&#x4F5C;&#x4E3A;&#x5F00;&#x59CB;(<code>0</code>)&#xFF0C;&#x540E;&#x9762;&#x8DDF;&#x7740;&#x5176;&#x4ED6;&#x5341;&#x8FDB;&#x5236;&#x6570;&#xFF0C;&#x4F46;&#x662F;&#x5047;&#x5982;&#x524D;&#x5BFC; 0 &#x4E4B;&#x540E;&#x7684;&#x6240;&#x6709;&#x6570;&#x5B57;&#x90FD;&#x5C0F;&#x4E8E; 8&#xFF0C;&#x90A3;&#x4E48;&#x8FD9;&#x4E2A;&#x6570;&#x5C31;&#x4F1A;&#x88AB;&#x89E3;&#x6790;&#x4E3A;&#x4E00;&#x4E2A;&#x516B;&#x8FDB;&#x5236;&#x7684;&#x6570;&#x3002;&#x56E0;&#x4E3A; 08 &#x548C; 09 &#x4E0D;&#x662F;&#x8FD9;&#x6837;&#x7684;&#xFF0C;&#x6240;&#x4EE5; JavaScript &#x4F1A;&#x53D1;&#x51FA;&#x8B66;&#x544A;&#x3002;</p>

<p>&#x8BF7;&#x6CE8;&#x610F;&#xFF0C;&#x4E0D;&#x63A8;&#x8350;&#x4F7F;&#x7528;&#x516B;&#x8FDB;&#x5236;&#x5B57;&#x9762;&#x503C;&#x548C;&#x516B;&#x8FDB;&#x5236;&#x8F6C;&#x4E49;&#x5E8F;&#x5217;&#xFF0C;&#x70B3;&#x8F89;&#x4EA7;&#x751F;&#x53E6;&#x5916;&#x7684;&#x5F03;&#x7528;&#x8B66;&#x544A;&#x3002; &#x5728; ECMAScript 6 &#x548C;&#x66F4;&#x9AD8;&#x7248;&#x672C;&#x91CC;&#xFF0C;&#x8BED;&#x6CD5;&#x4F7F;&#x7528;&#x524D;&#x5BFC;&#x96F6;&#x540E;&#x8DDF;&#x5C0F;&#x5199;&#x6216;&#x5927;&#x5199;&#x62C9;&#x4E01;&#x5B57;&#x6BCD;&#x201C;O&#x201D;&#xFF08;0o&#x6216;0O&#xFF09;&#x3002;&#x66F4;&#x591A;&#x4FE1;&#x606F;&#x8BF7;&#x67E5;&#x770B;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Octal">lexical grammar</a>&#x3002;</p>

<div class="note">
<p>&#x6CE8;&#x610F;&#xFF1A;&#x73B0;&#x5728;&#x4EC5; <strong>firefox</strong> &#x4F1A;&#x4EA7;&#x751F;&#x6B64;&#x9519;&#x8BEF;&#x3002;</p>
</div>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x6570;">&#x65E0;&#x6548;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x6570;</h3>

<pre class="brush: js example-bad">&quot;use strict&quot;;
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated</pre>

<h3 id="&#x6709;&#x6548;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x6570;">&#x6709;&#x6548;&#x7684;&#x516B;&#x8FDB;&#x5236;&#x6570;</h3>

<p>Use a leading zero followed by the letter &quot;o&quot;;</p>

<pre class="brush: js example-good">0O755;
0o644;
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Octal">Lexical grammar</a></li>
</ul>
                  
                
              