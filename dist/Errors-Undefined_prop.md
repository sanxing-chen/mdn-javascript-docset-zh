
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">ReferenceError: reference to undefined property &quot;x&quot; (Firefox)
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p>&#x4EC5;&#x5728;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>&#xA0;&#x4E0B;&#x51FA;&#x73B0; <a title="ReferenceError&#xFF08;&#x5F15;&#x7528;&#x9519;&#x8BEF;&#xFF09; &#x5BF9;&#x8C61;&#x8868;&#x660E;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x53D8;&#x91CF;&#x88AB;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a> &#x8B66;&#x544A;&#x3002;</p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x811A;&#x672C;&#x5C1D;&#x8BD5;&#x53BB;&#x8BBF;&#x95EE;&#x4E00;&#x4E2A;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x3002;<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a>&#xA0;&#x9875;&#x9762;&#x63CF;&#x8FF0;&#x4E86;&#x4E24;&#x79CD;&#x8BBF;&#x95EE;&#x5C5E;&#x6027;&#x7684;&#x65B9;&#x6CD5;&#x3002;</p>

<p>&#x5F15;&#x7528;&#x672A;&#x5B9A;&#x4E49;&#x5C5E;&#x6027;&#x7684;&#x9519;&#x8BEF;&#x4EC5;&#x51FA;&#x73B0;&#x5728;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">strict mode </a>&#x4EE3;&#x7801;&#x4E2D;&#x3002;&#x5728;&#x975E;&#x4E25;&#x683C;&#x4EE3;&#x7801;&#x4E2D;&#xFF0C;&#x5BF9;&#x4E0D;&#x5B58;&#x5728;&#x7684;&#x5C5E;&#x6027;&#x7684;&#x8BBF;&#x95EE;&#x5C06;&#x88AB;&#x5FFD;&#x7565;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<p>&#x672C;&#x4F8B;&#x4E2D;&#xFF0C;<code>bar</code>&#xA0;&#x5C5E;&#x6027;&#x662F;&#x672A;&#x5B9A;&#x4E49;&#x7684;&#xFF0C;&#x9690;&#x85CF;&#xA0;<code>ReferenceError</code> &#x4F1A;&#x51FA;&#x73B0;&#x3002;</p>

<pre class="brush: js example-bad">&quot;use strict&quot;; 

var foo = {};
foo.bar; // ReferenceError: reference to undefined property &quot;bar&quot;
</pre>

<h3 id="&#x65E0;&#x6548;&#x7684;_2">&#x65E0;&#x6548;&#x7684;</h3>

<p>&#x4E3A;&#x4E86;&#x907F;&#x514D;&#x9519;&#x8BEF;&#xFF0C;&#x60A8;&#x9700;&#x8981;&#x5411;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0; <code>bar</code> &#x7684;&#x5B9A;&#x4E49;&#x6216;&#x5728;&#x5C1D;&#x8BD5;&#x8BBF;&#x95EE; <code>bar</code> &#x5C5E;&#x6027;&#x4E4B;&#x524D;&#x68C0;&#x67E5; <code>bar</code> &#x5C5E;&#x6027;&#x7684;&#x5B58;&#x5728;&#xFF1B;&#x4E00;&#x79CD;&#x68C0;&#x67E5;&#x7684;&#x65B9;&#x5F0F;&#x662F;&#x4F7F;&#x7528; <a title="hasOwnProperty() &#x65B9;&#x6CD5;&#x4F1A;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5E03;&#x5C14;&#x503C;&#xFF0C;&#x5176;&#x7528;&#x6765;&#x5224;&#x65AD;&#x67D0;&#x4E2A;&#x5BF9;&#x8C61;&#x662F;&#x5426;&#x542B;&#x6709;&#x6307;&#x5B9A;&#x7684;&#x5C5E;&#x6027;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>Object.prototype.hasOwnProperty()</code></a> &#x65B9;&#x6CD5;&#x3002;&#x5982;&#x4E0B;&#x6240;&#x793A;&#xFF1A;</p>

<pre class="brush: js example-good">&quot;use strict&quot;;

var foo = {};

// Define the bar property

foo.bar = &quot;moon&quot;;
console.log(foo.bar); // &quot;moon&quot;

// Test to be sure bar exists before accessing it

if (foo.hasOwnProperty(&quot;bar&quot;) {
  console.log(foo.bar);
}</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
</ul>
                  
                
              