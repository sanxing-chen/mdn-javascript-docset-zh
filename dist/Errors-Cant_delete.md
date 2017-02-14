
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">TypeError: property &quot;x&quot; is non-configurable and can&apos;t be deleted. (Firefox)
TypeError: Cannot delete property &apos;x&apos; of #&lt;Object&gt; (Chrome)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> &#x53EA;&#x51FA;&#x73B0;&#x5728;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#x3002;</p>

<h2 id="&#x54EA;&#x91CC;&#x6709;&#x95EE;&#x9898;&#xFF1F;">&#x54EA;&#x91CC;&#x6709;&#x95EE;&#x9898;&#xFF1F;</h2>

<p>&#x5C1D;&#x8BD5;&#x5220;&#x9664;&#x67D0;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x4F46;&#x662F;&#x8FD9;&#x4E2A;&#x5C5E;&#x6027;&#x662F; <a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;</a>&#x3002;<code>configurable</code>&#x5C5E;&#x6027;&#x63A7;&#x5236;&#x662F;&#x5426;&#x8BE5;&#x5C5E;&#x6027;&#x80FD;&#x4ECE;&#x5BF9;&#x8C61;&#x4E0A;&#x5220;&#x9664;&#xFF0C;&#x4EE5;&#x53CA;&#x5B83;&#x7684;&#x5C5E;&#x6027;&#xFF08;&#x9664;&#x4E86;<code>writable</code>&#xFF09;&#x80FD;&#x5426;&#x88AB;&#x4FEE;&#x6539;&#x3002;</p>

<p>&#x8FD9;&#x4E2A;&#x9519;&#x8BEF;&#x4EC5;&#x4EC5;&#x5728;<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">&#x4E25;&#x683C;&#x6A21;&#x5F0F;</a>&#x4E0B;&#x51FA;&#x73B0;&#x3002;&#x5728;&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x8FD9;&#x4E2A;&#x64CD;&#x4F5C;&#x8FD4;&#x56DE;&#xA0;<code>false</code>&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x7684;&#x5C5E;&#x6027;&#x5E76;&#x4E0D;&#x7279;&#x522B;&#x5E38;&#x89C1;&#xFF0C;&#x4F46;&#x662F;&#x5B83;&#x4EEC;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a> &#x6216; <a title="Object.freeze() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x51BB;&#x7ED3;&#x6307;&#x7684;&#x662F;&#x4E0D;&#x80FD;&#x5411;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5176;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x8BE5;&#x5BF9;&#x8C61;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"><code>Object.freeze()</code></a> &#x521B;&#x5EFA;&#x3002;</p>

<pre class="brush: js example-bad">&apos;use strict&apos;;
var obj = Object.freeze({name: &apos;Elsa&apos;, score: 157});
delete obj.score;  // TypeError

&apos;use strict&apos;;
var obj = {};
Object.defineProperty(obj, &apos;foo&apos;, {value: 2, configurable: false});
delete obj.foo;  // TypeError

&apos;use strict&apos;;
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
</pre>

<p>&#x4E5F;&#x6709;&#x4E00;&#x4E9B;&#x5185;&#x5EFA;&#x4E8E; JavaScript &#x7684;&#x4E0D;&#x53EF;&#x914D;&#x7F6E;&#x5C5E;&#x6027;&#x3002;&#x4F60;&#x53EF;&#x80FD;&#x4F1A;&#x5C1D;&#x8BD5;&#x5220;&#x9664;&#x4E00;&#x4E2A;&#x6570;&#x5B66;&#x5E38;&#x91CF;&#x3002;</p>

<pre class="brush: js example-bad">&apos;use strict&apos;;
delete Math.PI;  // TypeError</pre>

<h2 id="&#x53E6;&#x89C1;">&#x53E6;&#x89C1;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a></li>
 <li><a title="Object.defineProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x76F4;&#x63A5;&#x5728;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4E0A;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x65B0;&#x5C5E;&#x6027;&#xFF0C;&#x6216;&#x8005;&#x4FEE;&#x6539;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#xFF0C; &#x5E76;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a></li>
 <li><a title="Object.freeze() &#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x51BB;&#x7ED3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x51BB;&#x7ED3;&#x6307;&#x7684;&#x662F;&#x4E0D;&#x80FD;&#x5411;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x65B0;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x5176;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x503C;&#xFF0C;&#x4E0D;&#x80FD;&#x5220;&#x9664;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#xFF0C;&#x4EE5;&#x53CA;&#x4E0D;&#x80FD;&#x4FEE;&#x6539;&#x8BE5;&#x5BF9;&#x8C61;&#x5DF2;&#x6709;&#x5C5E;&#x6027;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x6027;&#x3001;&#x53EF;&#x914D;&#x7F6E;&#x6027;&#x3001;&#x53EF;&#x5199;&#x6027;&#x3002;&#x4E5F;&#x5C31;&#x662F;&#x8BF4;&#xFF0C;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x6C38;&#x8FDC;&#x662F;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x3002;&#x8BE5;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x88AB;&#x51BB;&#x7ED3;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"><code>Object.freeze()</code></a></li>
</ul>
                  
                
              