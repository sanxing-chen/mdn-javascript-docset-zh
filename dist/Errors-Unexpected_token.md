
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: expected expression, got &quot;x&quot;
SyntaxError: expected property name, got &quot;x&quot; 
SyntaxError: expected target, got &quot;x&quot;
SyntaxError: expected rest argument name, got &quot;x&quot;
SyntaxError: expected closing parenthesis, got &quot;x&quot;
SyntaxError: expected &apos;=&gt;&apos; after argument list, got &quot;x&quot;
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;."><code>SyntaxError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x671F;&#x671B;&#x83B7;&#x5F97;&#x4E00;&#x4E2A;&#x7279;&#x5B9A;&#x7684;&#x8BED;&#x6CD5;&#x7ED3;&#x6784;&#xFF0C;&#x4F46;&#x5F97;&#x5230;&#x4E86;&#x5176;&#x4ED6;&#x7684;&#x3002; &#x53EF;&#x80FD;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x9519;&#x5B57;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x671F;&#x671B;&#x7684;&#x8868;&#x8FBE;&#x5F0F;">&#x671F;&#x671B;&#x7684;&#x8868;&#x8FBE;&#x5F0F;</h3>

<p>&#x4F8B;&#x5982;&#xFF0C;&#x5728;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x65F6;&#xFF0C;&#x4E0D;&#x5141;&#x8BB8;&#x4F7F;&#x7528;&#x5C3E;&#x968F;&#x9017;&#x53F7;&#x3002; &#x6709;&#x5C3E;&#x9017;&#x53F7;&#x7684;&#x65F6;&#x5019;&#xFF0C;JavaScript &#x4F1A;&#x671F;&#x671B;&#x6709;&#x53E6;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x53EF;&#x4EE5;&#x662F;&#x4EFB;&#x4F55;&#x8868;&#x8FBE;&#x5F0F;&#x3002;</p>

<pre class="brush: js example-bad">Math.max(2, 42,);
// SyntaxError: expected expression, got &apos;)&apos;
</pre>

<p>&#x6B63;&#x786E;&#x7684;&#x65B9;&#x6CD5;&#x662F;&#x7701;&#x7565;&#x6700;&#x540E;&#x4E00;&#x4E2A;&#x9017;&#x53F7;&#x6216;&#x6DFB;&#x52A0;&#x53E6;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;</p>

<pre class="brush: js example-good">Math.max(2, 42);
Math.max(2, 42, 13+37);
</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max" title="Math.max()&#xA0;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x4E00;&#x7EC4;&#x6570;&#x4E2D;&#x7684;&#x6700;&#x5927;&#x503C;&#x3002;"><code>Math.max()</code></a></li>
</ul>
                  
                
              