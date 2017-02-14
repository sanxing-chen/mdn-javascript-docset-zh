
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>.</p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x8C03;&#x7528;&#x51FD;&#x6570;&#x7684;&#x65F6;&#x5019;&#x51FA;&#x73B0;&#x4E86;&#x9519;&#x8BEF;&#x3002;&#x9700;&#x8981;&#x63D0;&#x4F9B;&#x66F4;&#x591A;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p><a title="Object.create() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x539F;&#x578B;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create()</code></a> &#x65B9;&#x6CD5;&#x8981;&#x6C42;&#x81F3;&#x5C11;&#x6709;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF0C;&#x800C; <a title="&#x5C06;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x5BF9;&#x8C61;&#x7684;&#x539F;&#x578B;&#x8BBE;&#x7F6E;&#x4E3A;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x6216;&#x8005;null(&#x65E2;&#x5BF9;&#x8C61;&#x7684;[[Prototype]]&#x5185;&#x90E8;&#x5C5E;&#x6027;)." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a> &#x65B9;&#x6CD5;&#x8981;&#x6C42;&#x81F3;&#x5C11;&#x6709;&#x4E24;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;</p>

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
</pre>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x5C06; <a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> &#x8BBE;&#x7F6E;&#x4E3A;&#x539F;&#x578B;&#xFF1A;</p>

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

<h2 id="&#x76F8;&#x5173;">&#x76F8;&#x5173;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
                  
                
              