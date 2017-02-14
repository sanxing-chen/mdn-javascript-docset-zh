
                
                  
                    <div><section id="Quick_Links" class="Quick_links"><!-- --></section></div>

<h2 id="&#x6D88;&#x606F;">&#x6D88;&#x606F;</h2>

<pre class="syntaxbox">&#x8B66;&#x544A;: JavaScript 1.6&apos;s &#x7248;&#x672C;&#x7684;for-each-in&#x904D;&#x5386;&#x4E0D;&#x518D;&#x8D5E;&#x6210;&#x4F7F;&#x7528;; &#x5EFA;&#x8BAE;&#x7528; ES6&#x7684; for-of &#x66FF;&#x6362;
</pre>

<h2 id="&#x9519;&#x8BEF;&#x7C7B;&#x578B;">&#x9519;&#x8BEF;&#x7C7B;&#x578B;</h2>

<p>&#x8B66;&#x544A;</p>

<h2 id="&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;">&#x51FA;&#x4E86;&#x4EC0;&#x4E48;&#x95EE;&#x9898;?</h2>

<p>JavaScript 1.6&apos;s <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each (variable in obj)</code></a>&#x8BED;&#x6CD5;&#x4E0D;&#x8D5E;&#x6210;&#x4F7F;&#x7528;, &#x5C06;&#x5728;&#x672A;&#x6765;&#x7248;&#x672C;&#x79FB;&#x9664;&#x5B83;&#x3002;</p>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x904D;&#x5386;&#x5BF9;&#x8C61;">&#x904D;&#x5386;&#x5BF9;&#x8C61;</h3>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each...in</code></a> &#x7528;&#x6765;&#x904D;&#x5386;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;.</p>

<h4 id="&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;">&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;</h4>

<div class="warning">
<p class="brush: js example-bad">var object = { a: 10, b: 20 };</p>

<p class="brush: js example-bad">for each (var x in object) {<br>
 &#xA0; console.log(x);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 10<br>
 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 20<br>
 }</p>
</div>

<h4 id="&#x66FF;&#x6362;&#x8BED;&#x6CD5;">&#x66FF;&#x6362;&#x8BED;&#x6CD5;</h4>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;"><code>for...in</code></a> &#x904D;&#x5386;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;, &#x83B7;&#x53D6;&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x7684;&#x503C;:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
</pre>

<p>&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;{jsxref(&quot;Statements/for...of&quot;, &quot;for...of&quot;)}} (ES2015) &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values" title="Object.values()&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x6240;&#x6709;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x503C;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for...in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x6837;(&#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF1A;for-in&#x5FAA;&#x73AF;&#x540C;&#x65F6;&#x8FD4;&#x56DE;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x800C;Object.values()&#x4E0D;&#x5305;&#x62EC;)&#x3002;"><code>Object.values</code></a> (ES2017), &#x4F60;&#x53EF;&#x4EE5;&#x83B7;&#x53D6;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x5F97;&#x6570;&#x7EC4;&#x7136;&#x540E;&#x50CF;&#x8FD9;&#x6837;&#x904D;&#x5386;&#x5B83;:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h3 id="&#x6570;&#x7EC4;&#x904D;&#x5386;">&#x6570;&#x7EC4;&#x904D;&#x5386;</h3>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each...in</code></a> &#x88AB;&#x7528;&#x4E8E;&#x904D;&#x5386;&#x5236;&#x5B9A;&#x6570;&#x7EC4;.</p>

<h4 id="&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;_2">&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;</h4>

<div class="warning">
<p class="brush: js example-bad">var array = [10, 20, 30];</p>

<p class="brush: js example-bad">for each (var x in array) {<br>
 &#xA0; console.log(x);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 10<br>
 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 20<br>
 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 30<br>
 }</p>
</div>

<h4 id="&#x66FF;&#x6362;&#x8BED;&#x6CD5;_2">&#x66FF;&#x6362;&#x8BED;&#x6CD5;</h4>

<p>&#x73B0;&#x5728;&#x6700;&#x597D;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;."><code>for...of</code></a> (ES2015) &#x66FF;&#x6362;</p>

<pre class="brush: js example-good">var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h3 id="&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;">&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x7A7A;&#x6570;&#x7EC4;</h3>

<p><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each...in</code></a> &#x5982;&#x679C;&#x6307;&#x5B9A;&#x503C;&#x662F;&#xA0;<code>null</code> o&#x6216;&#xA0;<code>undefined&#x4EC0;&#x4E48;&#x90FD;&#x904D;&#x5386;&#x4E0D;&#x51FA;&#x6765;&#x3002;</code>&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;."><code>for...of</code></a> &#x5728;&#x8FD9;&#x79CD;&#x60C5;&#x51B5;&#x4F1A;&#x629B;&#x51FA;&#x5F02;&#x5E38;.</p>

<h4 id="&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;_3">&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;</h4>

<div class="warning">
<p class="brush: js example-bad">function func(array) {<br>
 &#xA0; for each (var x in array) {<br>
 &#xA0;&#xA0;&#xA0; console.log(x);<br>
 &#xA0; }<br>
 }<br>
 func([10, 20]);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 10<br>
 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // 20<br>
 func(null);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // prints nothing<br>
 func(undefined);&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // prints nothing</p>
</div>

<h4 id="&#x66FF;&#x6362;&#x8BED;&#x6CD5;_3">&#x66FF;&#x6362;&#x8BED;&#x6CD5;</h4>

<p>&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;."><code>for...of</code></a> &#x91CD;&#x5199;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each...in</code></a> &#x540E;&#x503C;&#x53EF;&#x4EE5;&#x4E3A;&#xA0;<code>null</code>&#xA0;&#x548C;&#xA0;<code>undefined</code>&#xA0; &#xFF0C;&#x540C;&#x65F6;&#x4F60;&#x9700;&#x8981;&#x8B66;&#x60D5;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;."><code>for...of</code></a>&#x629B;&#x51FA;&#x7684;&#x5F02;&#x5E38;.</p>

<pre class="brush: js example-good">function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

<h3 id="&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x952E;&#x503C;&#x5BF9;">&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x952E;&#x503C;&#x5BF9;</h3>

<h4 id="&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;_4">&#x4E0D;&#x8D5E;&#x6210;&#x8FD9;&#x4E48;&#x4F7F;&#x7528;</h4>

<p>&#xA0;&#x4E0D;&#x8D5E;&#x6210;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for_each...in" title="&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x6240;&#x6709;&#x5C5E;&#x6027;&#x503C;,&#x5BF9;&#x4E8E;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;,&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x8BED;&#x53E5;&#x5757;&#x88AB;&#x6267;&#x884C;."><code>for each...in</code></a>&#x548C;<a href="/zh-CN/docs/Web/JavaScript/Reference/Iterator" class="new" title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!"><code>Iterator</code></a> &#x5BF9;&#x8C61;&#x6765;&#x904D;&#x5386;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x952E;&#x503C;&#x5BF9;.</p>

<div class="warning">
<p class="brush: js example-bad">var object = { a: 10, b: 20 };</p>

<p class="brush: js example-bad">for each (var [key, value] in Iterator(object)) {<br>
 &#xA0; console.log(key, value);&#xA0; // &quot;a&quot;, 10<br>
 &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; // &quot;b&quot;, 20<br>
 }</p>
</div>

<h4 id="&#x66FF;&#x6362;&#x8BED;&#x6CD5;_4">&#x66FF;&#x6362;&#x8BED;&#x6CD5;</h4>

<p>&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;"><code>for...in</code></a> &#x904D;&#x5386;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;,&#x83B7;&#x53D6;&#x6BCF;&#x6B21;&#x5FAA;&#x73AF;&#x7684;&#x503C;:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // &quot;a&quot;, 10
                            // &quot;b&quot;, 20
}
</pre>

<p>&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;{jsxref(&quot;Statements/for...of&quot;, &quot;for...of&quot;)}} (ES2015) &#x548C; <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values" title="Object.values()&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x6240;&#x6709;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x503C;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for...in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x6837;(&#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF1A;for-in&#x5FAA;&#x73AF;&#x540C;&#x65F6;&#x8FD4;&#x56DE;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x800C;Object.values()&#x4E0D;&#x5305;&#x62EC;)&#x3002;"><code>Object.values</code></a> (ES2017), &#x4F60;&#x53EF;&#x4EE5;&#x83B7;&#x53D6;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x7684;&#x503C;&#x5F97;&#x6570;&#x7EC4;&#x7136;&#x540E;&#x50CF;&#x8FD9;&#x6837;&#x904D;&#x5386;&#x5B83;:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // &quot;a&quot;, 10
                            // &quot;b&quot;, 20
}
</pre>

<h2 id="&#x53C2;&#x89C1;">&#x53C2;&#x89C1;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;."><code>for...of</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values" title="Object.values()&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x6307;&#x5B9A;&#x5BF9;&#x8C61;&#x6240;&#x6709;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x503C;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for...in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x6837;(&#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF1A;for-in&#x5FAA;&#x73AF;&#x540C;&#x65F6;&#x8FD4;&#x56DE;&#x4E86;&#x8BE5;&#x5BF9;&#x8C61;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x503C;&#xFF0C;&#x800C;Object.values()&#x4E0D;&#x5305;&#x62EC;)&#x3002;"><code>Object.values</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" title="Object.entries&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x7531;&#x7ED9;&#x5B9A;&#x5BF9;&#x8C61;&#x6240;&#x6709;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x540D;&#x548C;&#x5C5E;&#x6027;&#x503C;&#x7EC4;&#x6210;&#x7684; [&#x5C5E;&#x6027;&#x540D;&#xFF0C;&#x5C5E;&#x6027;&#x503C;] &#x952E;&#x503C;&#x5BF9;&#x7684;&#x6570;&#x7EC4;&#xFF0C;&#x6570;&#x7EC4;&#x4E2D;&#x952E;&#x503C;&#x5BF9;&#x7684;&#x6392;&#x5217;&#x987A;&#x5E8F;&#x548C;&#x4F7F;&#x7528;for...in&#x5FAA;&#x73AF;&#x904D;&#x5386;&#x8BE5;&#x5BF9;&#x8C61;&#x65F6;&#x8FD4;&#x56DE;&#x7684;&#x987A;&#x5E8F;&#x4E00;&#x81F4;&#xFF08;&#x4E24;&#x8005;&#x7684;&#x4E3B;&#x8981;&#x533A;&#x522B;&#x662F; for-in &#x8FD8;&#x4F1A;&#x904D;&#x5386;&#x51FA;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x4ECE;&#x5176;&#x539F;&#x578B;&#x94FE;&#x4E0A;&#x7EE7;&#x627F;&#x5230;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#xFF09;&#x3002;"><code>Object.entries</code></a></li>
</ul>
                  
                
              