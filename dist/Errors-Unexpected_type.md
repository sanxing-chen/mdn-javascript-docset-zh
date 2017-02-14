
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">TypeError: &quot;x&quot; is (not) &quot;y&quot;

Examples:
TypeError: &quot;x&quot; is undefined
TypeError: &quot;x&quot; is null
TypeError: &quot;undefined&quot; is not an object
TypeError: &quot;x&quot; is not an object or null
TypeError: &quot;x&quot; is not a symbol
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p><a title="TypeError&#xFF08;&#x7C7B;&#x578B;&#x9519;&#x8BEF;&#xFF09;&#xA0;&#x5BF9;&#x8C61;&#x7528;&#x6765;&#x8868;&#x793A;&#x503C;&#x7684;&#x7C7B;&#x578B;&#x975E;&#x9884;&#x671F;&#x7C7B;&#x578B;&#x65F6;&#x53D1;&#x751F;&#x7684;&#x9519;&#x8BEF;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>.</p>

<h2 id="&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;">&#x4EC0;&#x4E48;&#x5730;&#x65B9;&#x51FA;&#x9519;&#x4E86;?</h2>

<p>&#x51FA;&#x73B0;&#x4E86;&#x4E0E;&#x671F;&#x671B;&#x4E0D;&#x7B26;&#x7684;&#x7C7B;&#x578B;&#x3002; &#x8FD9;&#x4E2A;&#x9519;&#x8BEF;&#x5E38;&#x5E38;&#x7531; <a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> &#x6216; <a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> &#x503C;&#x5F15;&#x8D77;&#x3002;</p>

<p>&#x6B64;&#x5916;&#xFF0C;&#x67D0;&#x4E9B;&#x65B9;&#x6CD5;&#xFF0C;&#x4F8B;&#x5982; <a title="Object.create() &#x65B9;&#x6CD5;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x62E5;&#x6709;&#x6307;&#x5B9A;&#x539F;&#x578B;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x5C5E;&#x6027;&#x7684;&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create()</code></a> &#x6216; <a title="Symbol.keyFor(sym) &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x83B7;&#x53D6; symbol &#x6CE8;&#x518C;&#x8868;&#x4E2D;&#x4E0E;&#x67D0;&#x4E2A; symbol &#x5173;&#x8054;&#x7684;&#x952E;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor"><code>Symbol.keyFor()</code></a>&#xFF0C; &#x8981;&#x6C42;&#x5FC5;&#x987B;&#x63D0;&#x4F9B;&#x7279;&#x5B9A;&#x7C7B;&#x578B;&#x7684;&#x53C2;&#x6570;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x9519;&#x8BEF;&#x60C5;&#x5F62;">&#x9519;&#x8BEF;&#x60C5;&#x5F62;</h3>

<pre class="brush: js example-bad">// undefined and null cases on which the substring method won&apos;t work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// Certain methods might require a specific type
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = &quot;bar&quot;
Object.create(foo); // TypeError: &quot;foo&quot; is not an object or null
</pre>

<h3 id="&#x89E3;&#x51B3;&#x65B9;&#x6CD5;">&#x89E3;&#x51B3;&#x65B9;&#x6CD5;</h3>

<p>&#x8981;&#x89E3;&#x51B3;&#x7A7A;&#x6307;&#x9488;&#x4EE5;&#x53CA; <code>undefined</code> &#x6216; <code>null</code> &#x503C;&#x7684;&#x95EE;&#x9898;&#xFF0C; &#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> &#x64CD;&#x4F5C;&#x7B26;&#xFF0C; &#x4F8B;&#x5982;&#xFF1A;</p>

<pre class="brush: js">if (typeof foo !== &apos;undefined&apos;) {
  // Now we know that foo is defined, we are good to go.
}</pre>

<h2 id="&#x76F8;&#x5173;&#x9875;&#x9762;">&#x76F8;&#x5173;&#x9875;&#x9762;</h2>

<ul>
 <li><a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a></li>
 <li><a title="&#x503C;&#xA0;null&#xA0;&#x662F;&#x4E00;&#x4E2A; JavaScript &#x5B57;&#x9762;&#x91CF;&#xFF0C;&#x8868;&#x793A;&#x7A7A;&#x503C;&#xFF08;null or an &quot;empty&quot; value&#xFF09;&#xFF0C;&#x5373;&#x6CA1;&#x6709;&#x5BF9;&#x8C61;&#x88AB;&#x5448;&#x73B0;&#xFF08;no object value is present&#xFF09;&#x3002;&#x5B83;&#x662F; JavaScript &#x539F;&#x59CB;&#x503C; &#x4E4B;&#x4E00;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a></li>
</ul>
                  
                
              