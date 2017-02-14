
                
                  
                    <div>
<div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>
</div>

<p><strong><code>for...of</code></strong>&#x8BED;&#x53E5;&#x5728;<a href="/zh-CN/docs/Web/JavaScript/Guide/iterable">&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</a>(&#x5305;&#x62EC; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>,&#xA0;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a>, <a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>, <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a>, <a title="TypedArray &#x5BF9;&#x8C61;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#x89C6;&#x56FE;. &#x6CA1;&#x6709;&#x540D;&#x4E3A; TypedArray &#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x4E0D;&#x5B58;&#x5728;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684; TypedArray &#x6784;&#x9020;&#x5668;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x82E5;&#x5E72;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x7279;&#x6B8A;&#x6784;&#x9020;&#x5668;&#xFF08;typed array constructors for specific element types&#xFF09;&#xFF0C;&#x7528;&#x4E8E;&#x7279;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E9B;&#x5728;&#x4E0B;&#x6587;&#x6709;&#x5217;&#x51FA;&#x3002;&#x63A5;&#x4E0B;&#x6765;&#xFF0C;&#x4F1A;&#x4ECB;&#x7ECD;&#x80FD;&#x548C;&#x4EFB;&#x4F55;&#x5305;&#x542B;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5143;&#x7D20;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x7684;&#x901A;&#x7528;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a>&#xFF0C;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments">arguments</a>&#xA0;&#x5BF9;&#x8C61;&#x7B49;&#x7B49;)&#x4E0A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x8FED;&#x4EE3;&#x5FAA;&#x73AF;&#xFF0C;&#x5BF9;&#x6BCF;&#x4E2A;&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x81EA;&#x5B9A;&#x4E49;&#x7684;&#x6709;&#x6267;&#x884C;&#x8BED;&#x53E5;&#x7684;&#x8FED;&#x4EE3;&#x6302;&#x94A9;.</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">for (<em>variable</em> of <em>object</em>) {
  <em>statement</em>
}
</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>&#x6BCF;&#x4E00;&#x6B21;&#x8FED;&#x4EE3;,&#x4E0D;&#x540C;&#x5C5E;&#x6027;&#x7684;&#x5C5E;&#x6027;&#x503C;&#x4F1A;&#x88AB;&#x8D4B;&#x503C;&#x7ED9;&#x8BE5;&#x53D8;&#x91CF;.</dd>
 <dt><code>object</code></dt>
 <dd><span lang="zh-CN" class="long_text short_text" id="result_box"><span>&#x4E00;&#x4E2A;&#x53EF;&#x8FED;&#x4EE3;&#x5BF9;&#x8C61;</span></span>.</dd>
</dl>

<h2 id="&#x4F8B;&#x5B50;">&#x4F8B;&#x5B50;</h2>

<h3 id="&#x904D;&#x5386;_Array">&#x904D;&#x5386; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Array"><code>Array</code></a>:</h3>

<pre class="brush: js"><code>let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30</code>
</pre>

<p>&#x5982;&#x679C;&#x4F60;&#x4E0D;&#x4FEE;&#x6539;&#x8BED;&#x53E5;&#x5757;&#x4E2D;&#x7684;&#x53D8;&#x91CF; , &#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a>&#xA0;&#x4EE3;&#x66FF;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a>&#xA0;.</p>

<pre class="brush: js"><code>let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30</code></pre>

<h3 id="&#x904D;&#x5386;_String">&#x904D;&#x5386; <a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/String"><code>String</code></a>:</h3>

<pre class="brush: js"><code>let iterable = &quot;boo&quot;;

for (let value of iterable) {
  console.log(value);
}
// &quot;b&quot;
// &quot;o&quot;
// &quot;o&quot;</code></pre>

<h3 id="&#x904D;&#x5386;_TypedArray">&#x904D;&#x5386; <a title="TypedArray &#x5BF9;&#x8C61;&#x8868;&#x793A;&#x5E95;&#x5C42;&#x7684;&#x4E8C;&#x8FDB;&#x5236;&#x6570;&#x636E;&#x7F13;&#x5B58;&#x533A;&#x7684;&#x7C7B;&#x6570;&#x7EC4;&#x89C6;&#x56FE;. &#x6CA1;&#x6709;&#x540D;&#x4E3A; TypedArray &#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#xFF0C;&#x4E5F;&#x4E0D;&#x5B58;&#x5728;&#x76F4;&#x63A5;&#x53EF;&#x89C1;&#x7684; TypedArray &#x6784;&#x9020;&#x5668;&#x3002;&#x76F8;&#x53CD;&#xFF0C;&#x6709;&#x82E5;&#x5E72;&#x4E0D;&#x540C;&#x7684;&#x5168;&#x5C40;&#x5C5E;&#x6027;&#x7684;&#x503C;&#x662F;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x7684;&#x7279;&#x6B8A;&#x6784;&#x9020;&#x5668;&#xFF08;typed array constructors for specific element types&#xFF09;&#xFF0C;&#x7528;&#x4E8E;&#x7279;&#x5B9A;&#x7684;&#x5143;&#x7D20;&#x7C7B;&#x578B;&#xFF0C;&#x8FD9;&#x4E9B;&#x5728;&#x4E0B;&#x6587;&#x6709;&#x5217;&#x51FA;&#x3002;&#x63A5;&#x4E0B;&#x6765;&#xFF0C;&#x4F1A;&#x4ECB;&#x7ECD;&#x80FD;&#x548C;&#x4EFB;&#x4F55;&#x5305;&#x542B;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x5143;&#x7D20;&#x7684;&#x7C7B;&#x578B;&#x6570;&#x7EC4;&#x4E00;&#x8D77;&#x4F7F;&#x7528;&#x7684;&#x901A;&#x7528;&#x5C5E;&#x6027;&#x548C;&#x65B9;&#x6CD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"><code>TypedArray</code></a>:</h3>

<pre class="brush: js"><code>let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255</code>
</pre>

<h3 id="&#x904D;&#x5386;Map">&#x904D;&#x5386;<a title="&#x6B64;&#x9875;&#x9762;&#x4ECD;&#x672A;&#x88AB;&#x672C;&#x5730;&#x5316;, &#x671F;&#x5F85;&#x60A8;&#x7684;&#x7FFB;&#x8BD1;!" href="/zh-CN/docs/Web/JavaScript/Reference/Map"><code>Map</code></a>:</h3>

<pre class="brush: js"><code>let iterable = new Map([[&quot;a&quot;, 1], [&quot;b&quot;, 2], [&quot;c&quot;, 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3</code>
</pre>

<h3 id="&#x904D;&#x5386;_Set">&#x904D;&#x5386; <a title="&#x96C6;&#x5408;&#xFF08;Set&#xFF09;&#x5BF9;&#x8C61;&#x5141;&#x8BB8;&#x4F60;&#x5B58;&#x50A8;&#x4EFB;&#x610F;&#x7C7B;&#x578B;&#x7684;&#x552F;&#x4E00;&#x503C;&#xFF08;&#x4E0D;&#x80FD;&#x91CD;&#x590D;&#xFF09;&#xFF0C;&#x65E0;&#x8BBA;&#x5B83;&#x662F;&#x539F;&#x59CB;&#x503C;&#x6216;&#x8005;&#x662F;&#x5BF9;&#x8C61;&#x5F15;&#x7528;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>:</h3>

<pre class="brush: js"><code>let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3</code></pre>

<h3 id="&#x904D;&#x5386;_DOM_&#x96C6;&#x5408;">&#x904D;&#x5386; DOM &#x96C6;&#x5408;</h3>

<p>&#x904D;&#x5386;Dom&#x5143;&#x7D20;&#x96C6;&#x5408;,&#x6BD4;&#x5982;&#x4E00;&#x4E2A;<a title="NodeList &#x5BF9;&#x8C61;&#x662F;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x7684;&#x96C6;&#x5408;&#xFF0C;&#x662F;&#x7531; Node.childNodes &#x548C; document.querySelectorAll &#x8FD4;&#x56DE;&#x7684;." href="/zh-CN/docs/Web/API/NodeList"><code>NodeList</code></a>&#x5BF9;&#x8C61;: &#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x7ED9;&#x6BCF;&#x4E00;&#x4E2A;article&#x6807;&#x7B7E;&#x7684;p&#x5B50;&#x6807;&#x7B7E;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A; &quot;<code>read</code>&quot; class.</p>

<pre class="brush:js">let articleParagraphs = document.querySelectorAll(&quot;article &gt; p&quot;);

for (let paragraph of articleParagraphs) {
  paragraph.classList.add(&quot;read&quot;);
}
</pre>

<h3 id="&#x904D;&#x5386;&#x751F;&#x6210;&#x5668;">&#x904D;&#x5386;&#x751F;&#x6210;&#x5668;</h3>

<p><span><span>&#x60A8;&#x8FD8;&#x53EF;&#x4EE5;</span><span>&#x904D;&#x5386;</span><span>&#x4E00;&#x4E2A;</span></span>&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*">&#x751F;&#x6210;&#x5668;</a>:<span><span>&#xFF1A;</span></span></p>

<pre class="brush:js">// &#x6CE8;&#x610F;: Firefox&#x76EE;&#x524D;&#x8FD8;&#x4E0D;&#x652F;&#x6301; &quot;function*&quot;.
// &#x5220;&#x9664;&#x8BE5;*&#x53F7;&#x53EF;&#x4EE5;&#x8BA9;&#x4E0B;&#x9762;&#x7684;&#x4EE3;&#x7801;&#x5728;Firefox 13&#x4E2D;&#x6B63;&#x5E38;&#x8FD0;&#x884C;.
&#xA0;
function* fibonacci() { // &#x4E00;&#x4E2A;&#x751F;&#x6210;&#x5668;&#x51FD;&#x6570;
&#xA0;&#xA0;&#xA0; let [prev, curr] = [0, 1];
&#xA0;&#xA0;&#xA0; for (;;) {
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; [prev, curr] = [curr, prev + curr];
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; yield curr;
&#xA0;&#xA0;&#xA0; }
}
&#xA0;
for (let n of fibonacci()) {
&#xA0;&#xA0;&#xA0; // &#x5F53;n&#x5927;&#x4E8E;1000&#x65F6;&#x8DF3;&#x51FA;&#x5FAA;&#x73AF;
&#xA0;&#xA0;&#xA0; if (n &gt; 1000)
&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; break;
&#xA0;&#xA0;&#xA0; console.log(n);
}</pre>

<h3 id="&#x904D;&#x5386;&#x53E6;&#x5916;&#x7684;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;">&#x904D;&#x5386;&#x53E6;&#x5916;&#x7684;&#x53EF;&#x904D;&#x5386;&#x5BF9;&#x8C61;</h3>

<p>&#x60A8;&#x4E5F;&#x53EF;&#x4EE5;&#x904D;&#x5386;&#x4E00;&#x4E2A;&#x5DF2;&#x7ECF;&#x660E;&#x786E;&#x7684;&#x53EF;&#x904D;&#x5386;&#xFF08;&#x53EF;&#x8FED;&#x4EE3;&#xFF09;&#x534F;&#x8BAE;&#x3002;&#x53C2;&#x89C1;&#xA0;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable">iterable</a>&#x3002;</p>

<pre class="brush: js"><code>var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2</code></pre>

<h3 id="for...of&#x4E0E;for...in&#x7684;&#x533A;&#x522B;"><code>for...of<font face="Open Sans, Arial, sans-serif">&#x4E0E;</font></code><code>for...in&#x7684;&#x533A;&#x522B;</code></h3>

<p><code>for...in&#x5FAA;&#x73AF;&#x4F1A;&#x904D;&#x5386;&#x4E00;&#x4E2A;object&#x6240;&#x6709;&#x7684;&#x53EF;&#x679A;&#x4E3E;&#x5C5E;&#x6027;&#x3002;</code></p>

<p><code>for...of&#x8BED;&#x6CD5;&#x662F;&#x4E3A;&#x5404;&#x79CD;collection&#x5BF9;&#x8C61;&#x4E13;&#x95E8;&#x5B9A;&#x5236;&#x7684;&#xFF0C;&#x5E76;&#x4E0D;&#x9002;&#x7528;&#x4E8E;&#x6240;&#x6709;&#x7684;object.&#x5B83;&#x4F1A;&#x4EE5;&#x8FD9;&#x79CD;&#x65B9;&#x5F0F;&#x8FED;&#x4EE3;&#x51FA;&#x4EFB;&#x4F55;&#x62E5;&#x6709;[Symbol.iterator]</code>&#xA0;&#x5C5E;&#x6027;&#x7684;collection&#x5BF9;&#x8C61;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;&#x3002;</p>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x6F14;&#x793A;&#x4E86;<code>for...of</code> &#x5FAA;&#x73AF;&#x548C; <code><a title="zh-cn/JavaScript/Reference/Statements/for...in" href="../../../../../JavaScript/Reference/Statements/for...in">for...in</a></code> &#x5FAA;&#x73AF;&#x7684;&#x533A;&#x522B;&#x3002;<code>for...in</code> &#x904D;&#x5386;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x540D;&#x79F0;,&#x800C; <code>for...of&#x904D;&#x5386;&#x6BCF;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#x503C;</code>:</p>

<pre class="brush: js"><code>Object.prototype.objCustom = function () {}; 
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = &quot;hello&quot;;

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, &quot;foo&quot;, &quot;arrCustom&quot;, &quot;objCustom&quot;
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}</code></pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">for...of statement</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">for...of statement</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

<p></p><div class="htab"> 
    <a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a> 
    <ul> 
        <li class="selected"><a>Desktop</a></li> 
        <li><a>Mobile</a></li> 
    </ul> 
</div><p></p>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Edge</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
   <td>38<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Chrome_note_1" class="new">[1]</a><br>
    51<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Chrome_note_3" class="new">[3]</a></td>
   <td><a title="Released on 2012-06-05." href="/en-US/Firefox/Releases/13">13</a> (13)<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of$edit#Gecko_note_2" class="new">[2]</a></td>
   <td>12</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>25</td>
   <td>7.1</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Chrome for Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>&#x57FA;&#x7840;&#x652F;&#x6301;</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>38 [1]</td>
   <td>13.0 (13) [2]</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>8</td>
  </tr>
 </tbody>
</table>
</div>

<p><a name="Chrome_note_1">[1]&#x4ECE;</a>&#xA0;Chrome 29 &#x5230; Chrome 37 &#x8FD9;&#x4E2A;&#x7279;&#x6027;&#x53EF;&#x4EE5;&#x5728;&#x914D;&#x7F6E;&#x4E4B;&#x540E;&#x4F7F;&#x7528;&#x3002;&#x914D;&#x7F6E;&#x65B9;&#x6CD5;:&#x5728; chrome://flags/#enable-javascript-harmony &#x4E2D;&#x6FC0;&#x6D3B;&#x9009;&#x9879;&#x201C;Enable Experimental JavaScript&#x201D;&#x3002;</p>

<p><a name="Gecko_note_2">[2]</a> &#x4ECE;Gecko 17 (Firefox 17 / Thunderbird 17 / SeaMonkey 2.14) &#x5230; Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) &#x904D;&#x5386;&#x5C5E;&#x6027;&#x53EF;&#x88AB;&#x4F7F;&#x7528;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=907077" class="external">bug 907077</a>), &#x4ECE;&#xA0;Gecko 27 &#x5230;&#xA0;Gecko 35&#xFF0C;&#xA0;<code>&quot;@@iterator&quot;</code>&#xA0;&#x7B26;&#x53F7;&#x53EF;&#x88AB;&#x4F7F;&#x7528;&#x3002;&#x5728;Gecko 36 (Firefox 36 / Thunderbird 36 / SeaMonkey 2.33), &#xA0;<code>@@iterator</code>&#xA0;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol</a>&#xA0;&#x751F;&#x6548;&#xA0;(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=918828" class="external">bug 918828</a>)&#x3002;</p>

<p><a name="Chrome_note_3">[3]</a>&#xA0;&#x5BF9;&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x7684;&#x652F;&#x6301;&#x4E8E;&#xA0;Chrome 51&#x88AB;&#x6DFB;&#x52A0;&#x3002;</p>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="en/JavaScript/Reference/Statements/for_each...in" href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/for_each...in">for each...in</a> - E4X&#x4E2D;&#x7684;&#x8BED;&#x6CD5;,&#x904D;&#x5386;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x503C;,&#x8FD8;&#x4E0D;&#x662F;&#x5C5E;&#x6027;&#x540D;.</li>
 <li><a title="zh-CN/docs/JavaScript/Reference/Global_Objects/Array/forEach" href="/zh-CN/docs/JavaScript/Reference/Global_Objects/Array/forEach"><code>Array.forEach()</code></a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach">Map.prototype.forEach()</a></li>
</ul>
                  
                
              