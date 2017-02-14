
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">SyntaxError: missing ] after element list
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a>.</p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x6570;&#x7EC4;&#x521D;&#x59CB;&#x5316;&#x5728;&#x67D0;&#x5904;&#x51FA;&#x73B0;&#x4E86;&#x8BED;&#x6CD5;&#x9519;&#x8BEF;&#x3002;&#x6BD4;&#x5982;&#x7F3A;&#x5C11;&#x4E86;&#x53F3;&#x4E2D;&#x62EC;&#x53F7;(&quot;<code>]</code>&quot;) &#x6216;&#x4E00;&#x4E2A;&#x9017;&#x53F7; (&quot;<code>,</code>&quot;)&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4E0D;&#x6B63;&#x786E;&#x7684;&#x6570;&#x7EC4;&#x521D;&#x59CB;&#x5316;">&#x4E0D;&#x6B63;&#x786E;&#x7684;&#x6570;&#x7EC4;&#x521D;&#x59CB;&#x5316;</h3>

<pre class="brush: js example-bad">var list = [1, 2,

var instruments = [
  &quot;Ukulele&quot;,
  &quot;Guitar&quot;,
  &quot;Piano&quot;
};

var data = [{foo: &quot;bar&quot;} {bar: &quot;foo&quot;}];
</pre>

<p>&#x6B63;&#x786E;&#x7684;&#x662F;&#xFF1A;</p>

<pre class="brush: js example-good">var list = [1, 2];

var instruments = [
 &quot;Ukulele&quot;,
 &quot;Guitar&quot;,
 &quot;Piano&quot;
]; 

var data = [{foo: &quot;bar&quot;}, {bar: &quot;foo&quot;}];</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a></li>
</ul>
                  
                
              