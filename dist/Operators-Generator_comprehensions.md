
                
                  
                    <div class="warning"><strong>&#x975E;&#x6807;&#x51C6;&#x7684;&#x3002;&#x4E0D;&#x8981;&#x4F7F;&#x7528;&#xFF01;</strong><br>
generator&#x63A8;&#x5BFC;&#x5F0F;&#x76EE;&#x524D;&#x662F;&#x975E;&#x6807;&#x51C6;&#x7684;&#xFF0C;&#x5B83;&#x5E76;&#x6CA1;&#x6709;&#x88AB;&#x6DFB;&#x52A0;&#x5230;ECMAScript&#x3002;&#x8003;&#x8651;&#x5230;&#x5C06;&#x6765;&#xFF0C;&#x8BF7;&#x4F7F;&#x7528; <a title="function* &#x58F0;&#x660E;&#xFF08;function&#x5173;&#x952E;&#x5B57;&#x540E;&#x8DDF;&#x4E00;&#x4E2A;&#x661F;&#x53F7;&#xFF09;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;generator&#xFF08;&#x751F;&#x6210;&#x5668;&#xFF09;&#x51FD;&#x6570;&#xFF0C;&#x8FD4;&#x56DE;&#x4E00;&#x4E2A;Generator&#x5BF9;&#x8C61;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/function*">generator</a>&#x3002;
<p>&#xA0;</p>
</div>

<p></p><section class="Quick_links" id="Quick_Links"><!-- --></section><p></p>

<p>Generator&#x63A8;&#x5BFC;&#x5F0F;&#x662F;&#x4E00;&#x4E2A;&#x8BA9;&#x4F60;&#x901A;&#x8FC7;&#x57FA;&#x4E8E;&#x73B0;&#x5B58;&#x53EF;&#x8FED;&#x4EE3;&#x7684;&#x9879;&#x76EE;&#x5FEB;&#x901F;&#x7EC4;&#x5408;&#x4E00;&#x4E2A;&#x65B0;&#x7684;Gennerator&#x529F;&#x80FD;&#x7684;Javascript&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x63A8;&#x5BFC;&#x5F0F;&#x5B58;&#x5728;&#x4E8E;&#x5F88;&#x591A;&#x7F16;&#x7A0B;&#x8BED;&#x8A00;&#x5F53;&#x4E2D;&#xFF0C;&#x5E76;&#x4E14;&#x5728;&#x5373;&#x5C06;&#x5230;&#x6765;&#x7684;ECMAScript7&#x6807;&#x51C6;&#x4E2D;&#xFF0C;&#x4E3A;Javascript&#x5B9A;&#x4E49;&#x4E86;&#x6570;&#x7EC4;&#x6982;&#x5FF5;&#x3002;</p>

<p>&#x770B;&#x4E0B;&#x9762;&#xFF0C;&#x539F;&#x6765;Generator&#x63A8;&#x5BFC;&#x5F0F;&#x8BED;&#x6CD5;&#x5728;SpiderMonkey&#x7684;&#x4E0D;&#x540C;&#x4E4B;&#x5904;&#xFF0C;&#x5B83;&#x662F;&#x57FA;&#x4E8E;&#x5BF9;ECMAScript4&#x7684;&#x63D0;&#x8BAE;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x5728;Generator&#x63A8;&#x5BFC;&#x5F0F;&#x4E2D;&#xFF0C;&#x8FD9;&#x4E24;&#x79CD;&#x6784;&#x6210;&#x65B9;&#x5F0F;&#x90FD;&#x662F;&#x5141;&#x8BB8;&#x7684;&#xFF1A;</p>

<ul>
 <li><a title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a>&#xA0;</li>
 <li><a title="&#x5F53;&#x6307;&#x5B9A;&#x6761;&#x4EF6;&#x4E3A; true &#x65F6;&#xFF0C;if &#x8BED;&#x53E5;&#xA0;&#x4F1A;&#x6267;&#x884C;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;&#x5982;&#x679C;&#x8BE5;&#x6761;&#x4EF6;&#x4E3A; false&#xFF0C;&#x5219;&#x6267;&#x884C;&#x53E6;&#x4E00;&#x6761;&#x8BED;&#x53E5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else"><code>if</code></a></li>
</ul>

<p>for-of&#x8FED;&#x4EE3;&#x5668;&#x662F;&#x6784;&#x6210;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x90E8;&#x5206;&#x3002;&#x5F53;&#x7531;&#x591A;&#x91CD;&#x90E8;&#x5206;&#x6784;&#x6210;&#x65F6;&#xFF0C;&#x540E;&#x9762;for-of&#x548C;if&#x6784;&#x6210;&#x65B9;&#x5F0F;&#x90FD;&#x662F;&#x88AB;&#x5141;&#x8BB8;&#x7684;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x5355;&#x4E2A;&#x6784;&#x6210;&#x90E8;&#x5206;&#x7684;_generator&#x63A8;&#x5BFC;&#x5F0F;&#xFF1A;">&#x5355;&#x4E2A;&#x6784;&#x6210;&#x90E8;&#x5206;&#x7684;&#xA0;generator&#x63A8;&#x5BFC;&#x5F0F;&#xFF1A;</h3>

<pre class="brush:js">(for (i of [ 1, 2, 3 ]) i*i );
// generator function which yields 1, 4, and 9

[...(for (i of [ 1, 2, 3 ]) i*i )];
// [1, 4, 9]

var abc = [ &quot;A&quot;, &quot;B&quot;, &quot;C&quot; ];
(for (letters of abc) letters.toLowerCase());
// generator function which yields &quot;a&quot;, &quot;b&quot;, and &quot;c&quot;

</pre>

<h3 id="&#x6709;if&#x4F34;&#x968F;&#x7684;&#x591A;&#x91CD;&#x6784;&#x6210;&#x7684;gennerator&#x63A8;&#x5BFC;&#x5F0F;&#xFF1A;">&#x6709;if&#x4F34;&#x968F;&#x7684;&#x591A;&#x91CD;&#x6784;&#x6210;&#x7684;gennerator&#x63A8;&#x5BFC;&#x5F0F;&#xFF1A;</h3>

<pre class="brush: js">var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];

(for (year of years) if (year &gt; 2000) year);
// generator function which yields 2006, 2010, and 2014

(for (year of years) if (year &gt; 2000) if(year &lt; 2010) year);
// generator function which yields 2006, the same as below:

(for (year of years) if (year &gt; 2000 &amp;&amp; year &lt; 2010) year);
// generator function which yields 2006
</pre>

<h3 id="Generator&#x63A8;&#x5BFC;&#x5F0F;&#x4E0E;Generator&#x51FD;&#x6570;&#x5BF9;&#x6BD4;">Generator&#x63A8;&#x5BFC;&#x5F0F;&#x4E0E;Generator&#x51FD;&#x6570;&#x5BF9;&#x6BD4;</h3>

<p>&#x7528;&#x4E00;&#x79CD;&#x7B80;&#x5355;&#x7684;&#x65B9;&#x5F0F;&#x6765;&#x7406;&#x89E3;generator&#x63A8;&#x5BFC;&#x5F0F;&#x7684;&#x8BED;&#x6CD5;&#x5E76;&#x4E0E;generator&#x51FD;&#x6570;&#x6765;&#x505A;&#x4E2A;&#x6BD4;&#x8F83;&#x3002;</p>

<p>Example 1: &#x4EC5;&#x662F;&#xA0;generator.</p>

<pre class="brush: js">var numbers = [ 1, 2, 3 ];

// Generator &#x51FD;&#x6570;
(function*() {
  for (let i of numbers) {
    yield i * i;
  }
})()

// Generator &#x63A8;&#x5BFC;&#x5F0F;
(for (i of numbers) i*i );

// &#x7ED3;&#x679C;: &#x4E24;&#x8005;&#x90FD;&#x5F97;&#x5230; yields [ 1, 4, 9 ]
</pre>

<p>Example 2: &#x5728;&#xA0;generator &#x4E2D;&#x7528;if.</p>

<pre class="brush: js">var numbers = [ 1, 2, 3 ];

// Generator &#x51FD;&#x6570;
(function*() {
  for (let i of numbers) {
    if (i &lt; 3) {
      yield i * 1;
    }
  }
})()

// Generator &#x63A8;&#x5BFC;&#x5F0F;
(for (i of numbers) if (i &lt; 3) i);

// &#x7ED3;&#x679C;: &#x4E24;&#x8005;&#x90FD;&#x5F97;&#x5230; yields [ 1, 2 ]</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<p> Generator&#x63A8;&#x5BFC;&#x5F0F;&#x662F;&#x6700;&#x521D;&#x5728;ECMAScript&#xA0;6&#x4E2D;&#x8FDB;&#x884C;&#x62DF;&#x7A3F;,&#x4F46;&#x662F;&#x5728;14&#x5E74;8&#x6708;27&#x53F7;&#x4FEE;&#x8BA2;&#x4E2D;&#x88AB;&#x79FB;&#x9664;&#x4E86;&#x3002;&#xA0;&#x8BF7;&#x53C2;&#x9605;&#x8F83;&#x65E7;&#x7248;&#x672C;&#x7684;ES6&#x89C4;&#x8303;&#x8BED;&#x4E49;. </p>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab">
    <a id="AutoCompatibilityTable" name="AutoCompatibilityTable"></a>
    <ul>
        <li class="selected"><a>Desktop</a></li>
        <li><a>Mobile</a></li>
    </ul>
</div><p></p>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><a title="Released on 2014-06-10." href="/en-US/Firefox/Releases/30">30</a> (30)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Feature</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>30.0 (30)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h3 id="SpiderMonkey&#x7684;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x7B14;&#x8BB0;">SpiderMonkey&#x7684;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#x7B14;&#x8BB0;</h3>

<ul>
 <li><a title="let&#x5141;&#x8BB8;&#x4F60;&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x4F5C;&#x7528;&#x57DF;&#x88AB;&#x9650;&#x5236;&#x5728;&#x5757;&#x7EA7;&#x4E2D;&#x7684;&#x53D8;&#x91CF;&#x3001;&#x8BED;&#x53E5;&#x6216;&#x8005;&#x8868;&#x8FBE;&#x5F0F;&#x3002;&#x4E0E;var&#x5173;&#x952E;&#x5B57;&#x4E0D;&#x540C;&#x7684;&#x662F;&#xFF0C;var&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x53EA;&#x80FD;&#x662F;&#x5168;&#x5C40;&#x6216;&#x8005;&#x6574;&#x4E2A;&#x51FD;&#x6570;&#x5757;&#x7684;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> &#x4F5C;&#x4E3A;&#x6807;&#x8BC6;&#x7B26;&#xFF0C;&#x56E0;&#x4E3A;let&#x5F53;&#x524D;&#x4EC5;&#x53EF;&#x7528;&#x4E8E;JS&#x7248;&#x672C;1.7&#x548C;XUL&#x811A;&#x672C;&#x6807;&#x8BB0;.</li>
 <li>&#x76EE;&#x524D;&#x8FD8;&#x4E0D;&#x652F;&#x6301;&#x89E3;&#x6784;&#xA0;(<a title="Generator and array comprehensions should support destructuring binding" class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=980828">bug&#xA0;980828</a>).</li>
</ul>

<h3 id="&#x4E0E;&#x65E7;&#x7684;JS1.7_JS1.8&#x7406;&#x89E3;&#x7684;&#x533A;&#x522B;">&#x4E0E;&#x65E7;&#x7684;JS1.7 / JS1.8&#x7406;&#x89E3;&#x7684;&#x533A;&#x522B;</h3>

<ul>
 <li>ES7 &#x7684;&#x89E3;&#x6790;&#x4E3A;&#x6BCF;&#x4E2A;&#x201C;for&#x201D;&#x8282;&#x70B9;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8303;&#x56F4;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x6574;&#x4F53;&#x7684;&#x7406;&#x89E3;&#x3002;
  <ul>
   <li>Old: <code>[...(()=&gt;x for (x of [0, 1, 2]))][1]() // 2</code></li>
   <li>New: <code>[...(for (x of [0, 1, 2]) ()=&gt;x)][1]() // 1, &#x6BCF;&#x4E2A;&#x8FED;&#x4EE3;&#x90FD;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x7684;x&#x7684;&#x7ED1;&#x5B9A;&#x4E8B;&#x4EF6;&#x3002;</code></li>
  </ul>
 </li>
 <li>&#xA0;ES7&#x7684;&#x89E3;&#x6790;&#x4EE5;&#x201C;for&#x201D;&#x800C;&#x4E0D;&#x662F;&#x8D4B;&#x503C;&#x8868;&#x8FBE;&#x5F0F;&#x5F00;&#x5934;&#x3002;
  <ul>
   <li>Old: <code>(i * 2 for (i of numbers))</code></li>
   <li>New: <code>(for (i of numbers) <code>i * 2</code>)</code></li>
  </ul>
 </li>
 <li>ES7 &#x89E3;&#x6790;&#x53EF;&#x4EE5;&#x6709;&#x591A;&#x4E2A;if&#x548C;for&#x7EC4;&#x4EF6;&#x3002;</li>
 <li>ES7 &#x89E3;&#x6790;&#x4EC5;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x5DE5;&#x4F5C;<code><a title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a></code>&#xA0;&#x800C;&#x4E0D;&#x662F;<code><a title="&#x4EE5;&#x4EFB;&#x610F;&#x5E8F;&#x8FED;&#x4EE3;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x7684;&#x5C5E;&#x6027;&#xFF0C;&#x8BED;&#x53E5;&#x90FD;&#x4F1A;&#x88AB;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a></code>&#xA0;&#x7684;&#x65B9;&#x5F0F;&#x8FED;&#x4EE3;&#x3002;</li>
</ul>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="for...of&#x8BED;&#x53E5;&#x5728;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;(&#x5305;&#x62EC; Array,&#xA0;Map, Set, String, TypedArray&#xFF0C;arguments&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;." href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a></li>
 <li><a title="&#x6570;&#x7EC4;&#x63A8;&#x5BFC;&#x5F0F;&#x662F;&#x4E00;&#x79CD;&#x65B0;&#x7684; JavaScript &#x8868;&#x8FBE;&#x5F0F;&#x8BED;&#x6CD5;&#xFF0C;&#x4F7F;&#x7528;&#x5B83;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x5728;&#x4E00;&#x4E2A;&#x539F;&#x6709;&#x6570;&#x7EC4;&#x7684;&#x57FA;&#x7840;&#x4E0A;&#x5FEB;&#x901F;&#x7684;&#x6784;&#x9020;&#x51FA;&#xFF08;&#x63A8;&#x5BFC;&#x51FA;&#xFF09;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x6570;&#x7EC4;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions"><code>Array comprehensions</code></a></li>
</ul>
                  
                
              