
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x4FE1;&#x606F;">&#x4FE1;&#x606F;</h2>

<pre class="syntaxbox">TypeError: &quot;x&quot; is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a></p>

<h2 id="&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;">&#x54EA;&#x91CC;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x662F;&#x56E0;&#x4E3A;&#x5C1D;&#x8BD5;&#x5C06;&#x4E0D;&#x662F;&#x6784;&#x9020;&#x5668;&#x7684;&#x5BF9;&#x8C61;&#x6216;&#x8005;&#x53D8;&#x91CF;&#x6765;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x5668;&#x4F7F;&#x7528;&#x3002;&#x53C2;&#x8003; <a title="constructor: A constructor belongs to a particular class object that is instantiated. The constructor initializes this&#xA0;object and can provide access to its private information. The concept of a constructor can be applied to most object-oriented programming languages. Essentially, a constructor in JavaScript is usually declared at the instance of a class." class="glossaryLink" href="/en-US/docs/Glossary/constructor">constructor</a> &#x6216;&#x8005;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a>&#xA0;&#x6765;&#x4E86;&#x89E3;&#x4EC0;&#x4E48;&#x662F;&#x6784;&#x9020;&#x5668;&#x3002;</p>

<p>&#x6709;&#x5F88;&#x591A;&#x7684;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x6BD4;&#x5982;&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a>&#x3001;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a> &#x7B49;&#x7B49;&#x90FD;&#x662F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <code>new</code>&#xA0;&#x64CD;&#x4F5C;&#x7B26;&#x7684;&#x6784;&#x9020;&#x5668;&#x3002;&#x4F46;&#x662F;&#x6709;&#x4E00;&#x4E9B;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x5E76;&#x4E0D;&#x662F;&#xFF0C;&#x4E14;&#x5176;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x90FD;&#x662F;<a class="external" href="https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods">&#x9759;&#x6001;</a>&#x7684;&#x3002;&#x4E0B;&#x9762;&#x7684;&#xA0;JavaScript &#x6807;&#x51C6;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#x90FD;&#x4E0D;&#x662F;&#x6784;&#x9020;&#x5668;&#xFF1A;<a title="Math&#xA0;&#x662F;&#x4E00;&#x4E2A;&#x5185;&#x7F6E;&#x5BF9;&#x8C61;&#xFF0C; &#x4E3A;&#x6570;&#x5B66;&#x5E38;&#x91CF;&#x548C;&#x6570;&#x5B66;&#x51FD;&#x6570;&#x63D0;&#x4F9B;&#x4E86;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math"><code>Math</code></a>&#xFF0C;<a title="JSON&#xA0;&#x5BF9;&#x8C61;&#x5305;&#x542B;&#x4E86;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#xFF0C;&#x4E00;&#x662F;&#x89E3;&#x6790;&#xA0;JavaScript Object Notation (JSON)&#xFF0C;&#x4E8C;&#x662F;&#x5C06;&#x503C;&#x8F6C;&#x6362;&#x4E3A; JSON&#x3002;&#x8FD9;&#x4E2A;&#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x4E0D;&#x80FD;&#x88AB;&#x8C03;&#x7528;&#x6216;&#x8005;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#xFF0C;&#x9664;&#x4E86;&#x5B83;&#x7684;&#x8FD9;&#x4E24;&#x4E2A;&#x65B9;&#x6CD5;&#x5C5E;&#x6027;&#x5916; JSON &#x5BF9;&#x8C61;&#x672C;&#x8EAB;&#x5E76;&#x6CA1;&#x6709;&#x4EC0;&#x4E48;&#x6709;&#x7528;&#x7684;&#x529F;&#x80FD;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON"><code>JSON</code></a>&#xFF0C;<a title="Symbol &#x662F;&#x4E00;&#x79CD;&#x7279;&#x6B8A;&#x7684;&#x3001;&#x4E0D;&#x53EF;&#x53D8;&#x7684;&#x6570;&#x636E;&#x7C7B;&#x578B;&#xFF0C;&#x53EF;&#x4EE5;&#x4F5C;&#x4E3A;&#x5BF9;&#x8C61;&#x5C5E;&#x6027;&#x7684;&#x6807;&#x8BC6;&#x7B26;&#x4F7F;&#x7528;&#x3002;Symbol &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A; symbol primitive data type &#x7684;&#x9690;&#x5F0F;&#x5BF9;&#x8C61;&#x5305;&#x88C5;&#x5668;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>&#xFF0C;<a title="Reflect &#x5BF9;&#x8C61;&#x63D0;&#x4F9B;&#x4E86;&#x82E5;&#x5E72;&#x4E2A;&#x80FD;&#x5BF9;&#x4EFB;&#x610F;&#x5BF9;&#x8C61;&#x8FDB;&#x884C;&#x67D0;&#x79CD;&#x7279;&#x5B9A;&#x7684;&#x53EF;&#x62E6;&#x622A;&#x64CD;&#x4F5C;&#xFF08;interceptable operation&#xFF09;&#x7684;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"><code>Reflect</code></a>&#xFF0C;<a title="&#x56FD;&#x9645;&#x5316;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x51E0;&#x4E2A;&#x8BED;&#x8A00;&#x654F;&#x611F;&#x7684;&#x65B9;&#x6CD5;&#xFF08;&#x53EF;&#x89C1;See also&#xFF09;&#x4E00;&#x6837;&#xFF0C;&#x4F7F;&#x7528;&#x540C;&#x6837;&#x7684;&#x6A21;&#x5F0F;&#x6765;&#x8BC6;&#x522B;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x548C;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x79CD;&#x8BED;&#x8A00;&#x683C;&#x5F0F;&#xFF1A;&#x4ED6;&#x4EEC;&#x90FD;&#x63A5;&#x6536; locales &#x548C; options &#x53C2;&#x6570;&#xFF0C;&#x4F7F;&#x7528; options.localeMatcher &#x5C5E;&#x6027;&#x6307;&#x5B9A;&#x7684;&#x4E00;&#x4E2A;&#x7B97;&#x6CD5;&#x6765;&#x5BF9;&#x6BD4;&#x5E94;&#x7528;&#x8BF7;&#x6C42;&#x7684;&#x548C;&#x652F;&#x6301;&#x7684;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#xFF0C;&#x6765;&#x786E;&#x5B9A;&#x4F7F;&#x7528;&#x54EA;&#x4E00;&#x4E2A;&#x8BED;&#x8A00;&#x533A;&#x57DF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl"><code>Intl</code></a>&#xFF0C;<a title="SIMD (pronounced &quot;sim-dee&quot;) is short for Single Instruction/Multiple Data which is one classification of computer architectures. SIMD operations perform the same computation on multiple data points resulting in data level parallelism and thus performance gains, for example for 3D graphics and video processing, physics simulations or cryptography, and other domains." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SIMD"><code>SIMD</code></a>&#xFF0C;<a title="Atomics &#x5BF9;&#x8C61;&#x4EE5;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x7684;&#x5F62;&#x5F0F;&#x63D0;&#x4F9B;&#x539F;&#x5B50;&#x64CD;&#x4F5C;&#x3002;&#x8FD9;&#x4E9B;&#x64CD;&#x4F5C;&#x4F7F;&#x7528;&#x201C;&#xA0;SharedArrayBuffer&#x201D;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics"><code>Atomics</code></a>&#x3002;</p>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*">Generator functions</a> &#x4E5F;&#x4E0D;&#x80FD;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x5668;&#x6765;&#x4F7F;&#x7528;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x65E0;&#x6548;&#x7684;">&#x65E0;&#x6548;&#x7684;</h3>

<pre class="brush: js example-bad">var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

<h3 id="&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x5668;">&#x4E00;&#x4E2A;&#x6784;&#x9020;&#x5668;</h3>

<p>&#x5047;&#x8BBE;&#x4F60;&#x60F3;&#x4E3A;&#x6C7D;&#x8F66;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7C7B;&#x578B;&#x3002; &#x4F60;&#x5E0C;&#x671B;&#x6B64;&#x7C7B;&#x578B;&#x7684;&#x5BF9;&#x8C61;&#x88AB;&#x79F0;&#x4E3A; <code>car</code>&#xFF0C;&#x5E76;&#x4E14;&#x60A8;&#x5E0C;&#x671B;&#x5B83;&#x5177;&#x6709;make&#xFF0C;model &#x548C; year &#x5C5E;&#x6027;&#x3002; &#x4E3A;&#x6B64;&#xFF0C;&#x4F60;&#x7F16;&#x5199;&#x4EE5;&#x4E0B;&#x51FD;&#x6570;&#xFF1A;</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>&#x73B0;&#x5728;&#x4F60;&#x53EF;&#x4EE5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x540D;&#x4E3A; <code>mycar</code> &#x7684;&#x5BF9;&#x8C61;&#xFF0C;&#x5982;&#x4E0B;&#x6240;&#x793A;:</p>

<pre class="brush: js">var mycar = new Car(&quot;Eagle&quot;, &quot;Talon TSi&quot;, 1993);</pre>

<h3 id="&#x5173;&#x4E8E;_Promises">&#x5173;&#x4E8E; Promises&#xA0;</h3>

<p>&#x5F53;&#x8FD4;&#x56DE;&#x4E86;&#x4E00;&#x4E2A; immediately-resolved &#x6216;&#x8005; immediately-rejected Promise &#x7684;&#x65F6;&#x5019;&#xFF0C;&#x4F60;&#x6839;&#x672C;&#x4E0D;&#x9700;&#x8981;&#x53BB;&#x521B;&#x5EFA;&#x3001;&#x64CD;&#x4F5C;&#x4E00;&#x4E2A;&#x65B0;&#x7684; Promise &#x5BF9;&#x8C61;&#x3002;</p>

<p>&#x8FD9;&#x662F;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#xFF08;<a href="/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor">Promise constructor</a>&#xA0;&#x88AB;&#x9519;&#x8BEF;&#x7684;&#x8C03;&#x7528;&#x4E86;&#xFF09;&#x4E14;&#x4F1A;&#x629B;&#x51FA;&#x4E00;&#x4E2A; &#x9519;&#x8BEF;&#xA0;<code>TypeError: this is not a constructor</code> exception:</p>

<pre class="brush: js example-bad">return new Promise.resolve(true);
</pre>

<p>&#x4F7F;&#x7528;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">&#xA0;Promise.resolve()</a>&#xA0;&#x6216;&#x8005;&#xA0;<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">Promise.reject()</a>&#xA0;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x6765;&#x4EE3;&#x66FF;&#xFF1A;</p>

<pre class="brush: js">// &#x8FD9;&#x662F;&#x5408;&#x6CD5;&#x7684;&#xFF0C;&#x4F46;&#x662F;&#x6CA1;&#x5FC5;&#x8981;&#x8FD9;&#x4E48;&#x957F;&#xFF1A;
return new Promise((resolve, reject) =&gt; { resolve(true); })

// &#x7528;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x6765;&#x4EE3;&#x66FF;:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="constructor: A constructor belongs to a particular class object that is instantiated. The constructor initializes this&#xA0;object and can provide access to its private information. The concept of a constructor can be applied to most object-oriented programming languages. Essentially, a constructor in JavaScript is usually declared at the instance of a class." class="glossaryLink" href="/en-US/docs/Glossary/constructor">constructor</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a></li>
</ul>
                  
                
              