
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>call()</strong></code> &#x65B9;&#x6CD5;&#x5728;&#x4F7F;&#x7528;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684;<code>this</code>&#x503C;&#x548C;&#x82E5;&#x5E72;&#x4E2A;&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x503C;&#x7684;&#x524D;&#x63D0;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x6216;&#x65B9;&#x6CD5;.</p>

<div class="note"><strong>&#x6CE8;&#x610F;&#xFF1A;</strong>&#x8BE5;&#x65B9;&#x6CD5;&#x7684;&#x4F5C;&#x7528;&#x548C;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>apply()</code></a>&#xA0;&#x65B9;&#x6CD5;&#x7C7B;&#x4F3C;&#xFF0C;&#x53EA;&#x6709;&#x4E00;&#x4E2A;&#x533A;&#x522B;&#xFF0C;&#x5C31;&#x662F;<code>call()</code>&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x7684;&#x662F;<strong>&#x82E5;&#x5E72;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x5217;&#x8868;</strong>&#xFF0C;&#x800C;<code>apply()</code>&#x65B9;&#x6CD5;&#x63A5;&#x53D7;&#x7684;&#x662F;<strong>&#x4E00;&#x4E2A;&#x5305;&#x542B;&#x591A;&#x4E2A;&#x53C2;&#x6570;&#x7684;&#x6570;&#x7EC4;</strong>&#x3002;</div>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>fun</em>.call(<em>thisArg</em>[, <em>arg1</em>[, <em>arg2</em>[, ...]]])</code></pre>

<h3 id="&#x53C2;&#x6570;">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>&#x5728;<em><code>fun</code></em>&#x51FD;&#x6570;&#x8FD0;&#x884C;&#x65F6;&#x6307;&#x5B9A;&#x7684;<code>this</code>&#x503C;<em><code>&#x3002;</code></em>&#x9700;&#x8981;&#x6CE8;&#x610F;&#x7684;&#x662F;&#xFF0C;&#x6307;&#x5B9A;&#x7684;<code>this</code>&#x503C;&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x662F;&#x8BE5;&#x51FD;&#x6570;&#x6267;&#x884C;&#x65F6;&#x771F;&#x6B63;&#x7684;<code>this</code>&#x503C;&#xFF0C;&#x5982;&#x679C;&#x8FD9;&#x4E2A;&#x51FD;&#x6570;&#x5904;&#x4E8E;<a href="/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" class="new" title="JavaScript/Strict mode">&#x975E;&#x4E25;&#x683C;&#x6A21;&#x5F0F;&#x4E0B;</a>&#xFF0C;&#x5219;&#x6307;&#x5B9A;&#x4E3A;<code>null</code>&#x548C;<code>undefined</code>&#x7684;<code>this&#x503C;&#x4F1A;&#x81EA;&#x52A8;&#x6307;&#x5411;</code>&#x5168;&#x5C40;&#x5BF9;&#x8C61;(&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x5C31;&#x662F;window&#x5BF9;&#x8C61;)&#xFF0C;&#x540C;&#x65F6;&#x503C;&#x4E3A;&#x539F;&#x59CB;&#x503C;(&#x6570;&#x5B57;&#xFF0C;&#x5B57;&#x7B26;&#x4E32;&#xFF0C;&#x5E03;&#x5C14;&#x503C;)&#x7684;<code>this</code>&#x4F1A;&#x6307;&#x5411;&#x8BE5;&#x539F;&#x59CB;&#x503C;&#x7684;&#x81EA;&#x52A8;&#x5305;&#x88C5;&#x5BF9;&#x8C61;&#x3002;</dd>
 <dt><code>arg1, arg2, ...</code></dt>
 <dd>&#x6307;&#x5B9A;&#x7684;&#x53C2;&#x6570;&#x5217;&#x8868;&#x3002;</dd>
</dl>

<h2 id="&#x8FD4;&#x56DE;&#x503C;">&#x8FD4;&#x56DE;&#x503C;</h2>

<p>&#x8FD4;&#x56DE;&#x7ED3;&#x679C;&#x5305;&#x62EC;&#x6307;&#x5B9A;&#x7684;<strong>this</strong>&#x503C;&#x548C;&#x53C2;&#x6570;&#x3002;</p>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x53EF;&#x4EE5;&#x8BA9;call()&#x4E2D;&#x7684;&#x5BF9;&#x8C61;&#x8C03;&#x7528;&#x5F53;&#x524D;&#x5BF9;&#x8C61;&#x6240;&#x62E5;&#x6709;&#x7684;function&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;call()&#x6765;&#x5B9E;&#x73B0;&#x7EE7;&#x627F;&#xFF1A;&#x5199;&#x4E00;&#x4E2A;&#x65B9;&#x6CD5;&#xFF0C;&#x7136;&#x540E;&#x8BA9;&#x53E6;&#x5916;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x5BF9;&#x8C61;&#x6765;&#x7EE7;&#x627F;&#x5B83;&#xFF08;&#x800C;&#x4E0D;&#x662F;&#x5728;&#x65B0;&#x5BF9;&#x8C61;&#x4E2D;&#x518D;&#x5199;&#x4E00;&#x6B21;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#xFF09;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;call&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7236;&#x6784;&#x9020;&#x51FD;&#x6570;">&#x4F7F;&#x7528;<code>call</code>&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x7236;&#x6784;&#x9020;&#x51FD;&#x6570;</h3>

<p>&#x5728;&#x4E00;&#x4E2A;&#x5B50;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E2D;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x8C03;&#x7528;&#x7236;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#xA0;<code>call </code>&#x65B9;&#x6CD5;&#x6765;&#x5B9E;&#x73B0;&#x7EE7;&#x627F;<code>&#xFF0C;</code>&#x7C7B;&#x4F3C;&#x4E8E;<code>Java</code>&#x4E2D;&#x7684;&#x5199;&#x6CD5;&#x3002;&#x4E0B;&#x4F8B;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528;&#xA0;<code>Food&#xA0;</code>&#x548C;&#xA0;<code>Toy&#xA0;</code>&#x6784;&#x9020;&#x51FD;&#x6570;&#x521B;&#x5EFA;&#x7684;&#x5BF9;&#x8C61;&#x5B9E;&#x4F8B;&#x90FD;&#x4F1A;&#x62E5;&#x6709;&#x5728;&#xA0;<code>Product&#xA0;</code>&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E2D;&#x6DFB;&#x52A0;&#x7684; name &#x5C5E;&#x6027;&#x548C; price &#x5C5E;&#x6027;,&#x4F46;&#xA0;<code>category&#xA0;</code>&#x5C5E;&#x6027;&#x662F;&#x5728;&#x5404;&#x81EA;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x4E2D;&#x5B9A;&#x4E49;&#x7684;&#x3002;</p>

<pre><code>function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price &lt; 0) {
    throw RangeError(&apos;Cannot create product &apos; +
                      this.name + &apos; with a negative price&apos;);
  }
}

function Food(name, price) {
  Product.call(this, name, price); 
  this.category = &apos;food&apos;;
}

//&#x7B49;&#x540C;&#x4E8E;
function Food(name, price) { 
&#xA0;   this.name = name;
    this.price = price;
    if (price &lt; 0) {
&#xA0;       throw RangeError(&apos;Cannot create product &apos; +
&#xA0;               this.name + &apos; with a negative price&apos;);
&#xA0;   }

&#xA0;   this.category = &apos;food&apos;; 
}

//function Toy &#x540C;&#x4E0A;
function Toy(name, price) {
  Product.call(this, name, price);
  this.category = &apos;toy&apos;;
}

var cheese = new Food(&apos;feta&apos;, 5);
var fun = new Toy(&apos;robot&apos;, 40);</code></pre>

<h3 id="&#x4F7F;&#x7528;call&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;">&#x4F7F;&#x7528;<code>call</code>&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;</h3>

<p>&#x5728;&#x4E0B;&#x4F8B;&#x4E2D;&#x7684;<code>for</code>&#x5FAA;&#x73AF;&#x4F53;&#x5185;&#xFF0C;&#x6211;&#x4EEC;&#x521B;&#x5EFA;&#x4E86;&#x4E00;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;&#xFF0C;&#x7136;&#x540E;&#x901A;&#x8FC7;&#x8C03;&#x7528;&#x8BE5;&#x51FD;&#x6570;&#x7684;<code>call&#x65B9;&#x6CD5;&#xFF0C;</code>&#x5C06;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x4F5C;&#x4E3A;&#x6307;&#x5B9A;&#x7684;<code>this&#x503C;</code>&#x6267;&#x884C;&#x4E86;&#x90A3;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;&#x3002;&#x8FD9;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;&#x7684;&#x4E3B;&#x8981;&#x76EE;&#x7684;&#x662F;&#x7ED9;&#x6BCF;&#x4E2A;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x5BF9;&#x8C61;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;<code>print</code>&#x65B9;&#x6CD5;&#xFF0C;&#x8FD9;&#x4E2A;<code>print</code>&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x6253;&#x5370;&#x51FA;&#x5404;&#x5143;&#x7D20;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6B63;&#x786E;&#x7D22;&#x5F15;&#x53F7;&#x3002;&#x5F53;&#x7136;&#xFF0C;&#x8FD9;&#x91CC;&#x4E0D;&#x662F;&#x5FC5;&#x987B;&#x5F97;&#x8BA9;&#x6570;&#x7EC4;&#x5143;&#x7D20;&#x4F5C;&#x4E3A;<code>this</code>&#x503C;&#x4F20;&#x5165;&#x90A3;&#x4E2A;&#x533F;&#x540D;&#x51FD;&#x6570;&#xFF08;&#x666E;&#x901A;&#x53C2;&#x6570;&#x5C31;&#x53EF;&#x4EE5;&#xFF09;&#xFF0C;&#x76EE;&#x7684;&#x662F;&#x4E3A;&#x4E86;&#x6F14;&#x793A;<code>call</code>&#x7684;&#x7528;&#x6CD5;&#x3002;</p>

<pre class="brush: js">var animals = [
  {species: &apos;Lion&apos;, name: &apos;King&apos;},
  {species: &apos;Whale&apos;, name: &apos;Fail&apos;}
];

for (var i = 0; i &lt; animals.length; i++) {
  (function (i) { 
    this.print = function () { 
      console.log(&apos;#&apos; + i  + &apos; &apos; + this.species + &apos;: &apos; + this.name); 
    } 
    this.print();
  }).call(animals[i], i);
}
</pre>

<h3 id="&#x4F7F;&#x7528;call&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x5E76;&#x4E14;&#x6307;&#x5B9A;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&apos;this&apos;">&#x4F7F;&#x7528;<code>call</code>&#x65B9;&#x6CD5;&#x8C03;&#x7528;&#x51FD;&#x6570;&#x5E76;&#x4E14;&#x6307;&#x5B9A;&#x4E0A;&#x4E0B;&#x6587;&#x7684;&apos;this&apos;</h3>

<p>&#x5728;&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x4E2D;&#xFF0C;&#x5F53;&#x8C03;&#x7528; <code>greet </code>&#x65B9;&#x6CD5;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x7684; <code>this </code>&#x503C;&#x4F1A;&#x7ED1;&#x5B9A;&#x5230; <code>i </code>&#x5BF9;&#x8C61;&#x3002;<br>
 &#xA0;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">greet</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> reply <span class="operator token">=</span> <span class="punctuation token">[</span><span class="keyword token">this</span><span class="punctuation token">.</span>person<span class="punctuation token">,</span> <span class="string token">&apos;Is An Awesome&apos;</span><span class="punctuation token">,</span> <span class="keyword token">this</span><span class="punctuation token">.</span>role<span class="punctuation token">]</span><span class="punctuation token">.</span><span class="function token">join</span><span class="punctuation token">(</span><span class="string token">&apos; &apos;</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>reply<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> i <span class="operator token">=</span> <span class="punctuation token">{</span>
  person<span class="punctuation token">:</span> <span class="string token">&apos;Douglas Crockford&apos;</span><span class="punctuation token">,</span> role<span class="punctuation token">:</span> <span class="string token">&apos;Javascript Developer&apos;</span>
<span class="punctuation token">}</span><span class="punctuation token">;</span>

greet<span class="punctuation token">.</span><span class="function token">call</span><span class="punctuation token">(</span>i<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// Douglas Crockford Is An Awesome Javascript Developer</span></code></pre>

<h2 id="&#x89C4;&#x8303;" style="margin-bottom: 20px; line-height: 30px;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x8303;&#x7248;&#x672C;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" class="external" lang="en" hreflang="en" title="ECMAScript 1st Edition (ECMA-262)">ECMAScript 1st Edition (ECMA-262)</a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;&#x3002;&#x5728; JavaScript 1.3 &#x4E2D;&#x5B9E;&#x73B0;&#x3002;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.4" class="external" lang="en" hreflang="en">ECMAScript 5.1 (ECMA-262)<br><small lang="zh-CN">Function.prototype.call</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype.call" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Function.prototype.call</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;" style="margin-bottom: 20px; line-height: 30px;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;</h2>

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
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Chrome</th>
   <th style="line-height: 16px;">Firefox (Gecko)</th>
   <th style="line-height: 16px;">Internet Explorer</th>
   <th style="line-height: 16px;">Opera</th>
   <th style="line-height: 16px;">Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th style="line-height: 16px;">Feature</th>
   <th style="line-height: 16px;">Android</th>
   <th style="line-height: 16px;">Chrome for Android</th>
   <th style="line-height: 16px;">Firefox Mobile (Gecko)</th>
   <th style="line-height: 16px;">IE Mobile</th>
   <th style="line-height: 16px;">Opera Mobile</th>
   <th style="line-height: 16px;">Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
   <td><span title="Please update this with the earliest version of support." style="color: #888;">(Yes)</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" style="margin-bottom: 20px; line-height: 30px;" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" title="bind()&#x65B9;&#x6CD5;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x3002;&#x5F53;&#x8FD9;&#x4E2A;&#x65B0;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;bind()&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#x5C06;&#x4F5C;&#x4E3A;&#x5B83;&#x8FD0;&#x884C;&#x65F6;&#x7684; this, &#x4E4B;&#x540E;&#x7684;&#x4E00;&#x5E8F;&#x5217;&#x53C2;&#x6570;&#x5C06;&#x4F1A;&#x5728;&#x4F20;&#x9012;&#x7684;&#x5B9E;&#x53C2;&#x524D;&#x4F20;&#x5165;&#x4F5C;&#x4E3A;&#x5B83;&#x7684;&#x53C2;&#x6570;&#x3002;"><code>Function.prototype.bind()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" title="apply() &#x65B9;&#x6CD5;&#x5728;&#x6307;&#x5B9A;&#xA0;this&#xA0;&#x503C;&#x548C;&#x53C2;&#x6570;&#xFF08;&#x53C2;&#x6570;&#x4EE5;&#x6570;&#x7EC4;&#x6216;&#x7C7B;&#x6570;&#x7EC4;&#x5BF9;&#x8C61;&#x7684;&#x5F62;&#x5F0F;&#x5B58;&#x5728;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#x8C03;&#x7528;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x3002;"><code>Function.prototype.apply()</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x7684;JavaScript&#x4ECB;&#x7ECD;</a></li>
</ul>
                  
                
              