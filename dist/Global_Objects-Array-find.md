
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p>&#xA0;<code><strong>find()</strong></code>&#xA0;&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;&#xA0;<a title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;." href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a>&#x3002;</p>

<pre><code>function isBigEnough(element) {
  return element &gt;= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130</code></pre>

<p>&#x53E6;&#x8BF7;&#x53C2;&#x89C1; &#xA0;<a title="findIndex()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"><code>findIndex()</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5176;&#x503C;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4F60;&#x9700;&#x8981;&#x627E;&#x5230;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x4F4D;&#x7F6E;&#x6216;&#x8005;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x662F;&#x5426;&#x5B58;&#x5728;&#x4E8E;&#x6570;&#x7EC4;&#x4E2D;&#xFF0C;&#x4F7F;&#x7528;<a title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"><code>Array.prototype.indexOf()</code></a> &#x6216; <a title="includes() &#x65B9;&#x6CD5;&#x7528;&#x6765;&#x5224;&#x65AD;&#x5F53;&#x524D;&#x6570;&#x7EC4;&#x662F;&#x5426;&#x5305;&#x542B;&#x67D0;&#x6307;&#x5B9A;&#x7684;&#x503C;&#xFF0C;&#x5982;&#x679C;&#x662F;&#xFF0C;&#x5219;&#x8FD4;&#x56DE; true&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE; false&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"><code>Array.prototype.includes()</code></a>&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.find(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x5728;&#x6570;&#x7EC4;&#x6BCF;&#x4E00;&#x9879;&#x4E0A;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x63A5;&#x6536; 3 &#x4E2A;&#x53C2;&#x6570;&#xFF1A;
 <dl>
  <dt><code>element</code></dt>
  <dd>&#x5F53;&#x524D;&#x904D;&#x5386;&#x5230;&#x7684;&#x5143;&#x7D20;&#x3002;</dd>
  <dt><code>index</code></dt>
  <dd>&#x5F53;&#x524D;&#x904D;&#x5386;&#x5230;&#x7684;&#x7D22;&#x5F15;&#x3002;</dd>
  <dt><code>array</code></dt>
  <dd>&#x6570;&#x7EC4;&#x672C;&#x8EAB;&#x3002;</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#xFF0C;&#x6307;&#x5B9A;&#xA0;<code>callback &#x7684;&#xA0;this &#x53C2;&#x6570;&#x3002;</code></dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p>find&#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x9879;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;<code>callback</code> &#x51FD;&#x6570;&#xFF0C;&#x76F4;&#x81F3;&#x6709;&#x4E00;&#x4E2A;<code>callback&#x8FD4;&#x56DE;true&#x3002;&#x5F53;&#x627E;&#x5230;&#x4E86;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x540E;&#xFF0C;&#x8BE5;&#x65B9;&#x6CD5;&#x4F1A;&#x7ACB;&#x5373;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;undefined&#x3002;&#x6CE8;&#x610F;callback&#x51FD;&#x6570;&#x53EA;&#x4F1A;&#x5728;&#x5206;&#x914D;&#x4E86;&#x503C;&#x7684;&#x6570;&#x7EC4;&#x7D22;&#x5F15;&#x4E0A;&#x8C03;&#x7528;&#xFF0C;&#x800C;&#x4E0D;&#x4F1A;&#x5728;&#x5DF2;&#x5220;&#x9664;&#x6216;&#x672A;&#x5206;&#x914D;&#x503C;&#x7684;&#x7D22;&#x5F15;&#x4E0A;&#x8C03;&#x7528;&#x3002;</code></p>

<p>&#x8C03;&#x7528;callback&#x51FD;&#x6570;&#x5E26;&#x6709;3&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x7684;&#x503C;&#x3001;&#x5F53;&#x524D;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x4EE5;&#x53CA;&#x6570;&#x7EC4;&#x672C;&#x8EAB;&#x3002;</p>

<p>&#x5982;&#x679C;&#x63D0;&#x4F9B;&#x4E86;thisArg&#x53C2;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x5B83;&#x5C06;&#x4F5C;&#x4E3A;&#x6BCF;&#x6B21;callback&#x51FD;&#x6570;&#x6267;&#x884C;&#x65F6;&#x7684;&#x4E0A;&#x4E0B;&#x6587;&#x5BF9;&#x8C61;&#xFF0C;&#x5426;&#x5219;&#x4E0A;&#x4E0B;&#x6587;&#x5BF9;&#x8C61;&#x4E3A;undefined&#x3002;</p>

<p>find&#x65B9;&#x6CD5;&#x4E0D;&#x4F1A;&#x6539;&#x53D8;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528;callback&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x786E;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x8303;&#x56F4;&#xFF0C;&#x56E0;&#x6B64;&#x5728;find&#x65B9;&#x6CD5;&#x5F00;&#x59CB;&#x6267;&#x884C;&#x4E4B;&#x540E;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;callback&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x3002;&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x4E00;&#x4E2A;&#x5C1A;&#x672A;&#x88AB;callback&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x7684;&#x5143;&#x7D20;&#x7684;&#x503C;&#x88AB;callback&#x51FD;&#x6570;&#x6240;&#x6539;&#x53D8;&#xFF0C;&#x90A3;&#x4E48;&#x5F53;callback&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x5B83;&#x65F6;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x662F;&#x5C06;&#x662F;&#x6839;&#x636E;&#x5B83;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#x6240;&#x8BBF;&#x95EE;&#x5230;&#x7684;&#x5F53;&#x524D;&#x503C;&#x3002;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x5230;&#x3002;</p>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<h3 id="&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x91CC;&#x7684;&#x5BF9;&#x8C61;">&#x7528;&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x67E5;&#x627E;&#x6570;&#x7EC4;&#x91CC;&#x7684;&#x5BF9;&#x8C61;</h3>

<pre>var inventory = [
    {name: &apos;apples&apos;, quantity: 2},
    {name: &apos;bananas&apos;, quantity: 0},
    {name: &apos;cherries&apos;, quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === &apos;cherries&apos;;
}

console.log(inventory.find(findCherries)); // { name: &apos;cherries&apos;, quantity: 5 }</pre>

<h3 id="&#x5BFB;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x8D28;&#x6570;">&#x5BFB;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x8D28;&#x6570;</h3>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C55;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x4ECE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x5BFB;&#x627E;&#x8D28;&#x6570;&#xFF08;&#x5982;&#x679C;&#x627E;&#x4E0D;&#x5230;&#x8D28;&#x6570;&#x5219;&#x8FD4;&#x56DE;undefined&#xFF09;</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

<h2 name="Polyfill" id="Polyfill">Polyfill</h2>

<p>&#x672C;&#x65B9;&#x6CD5;&#x5728;ECMAScript 6&#x89C4;&#x8303;&#x4E2D;&#x88AB;&#x52A0;&#x5165;&#xFF0C;&#x53EF;&#x80FD;&#x4E0D;&#x5B58;&#x5728;&#x4E8E;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x4E2D;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6765;&#x8865;&#x5145; <code>Array.prototype</code>.find&#x3002;</p>

<pre class="brush: js">if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    &apos;use strict&apos;;
    if (this == null) {
      throw new TypeError(&apos;Array.prototype.find called on null or undefined&apos;);
    }
    if (typeof predicate !== &apos;function&apos;) {
      throw new TypeError(&apos;predicate must be a function&apos;);
    }
    var list = Object(this);
    var length = list.length &gt;&gt;&gt; 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i &lt; length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find" class="external">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.find</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a lang="en" hreflang="en" href="https://tc39.github.io/ecma262/#sec-array.prototype.find" class="external">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Array.prototype.find</small></a></td>
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
   <th>Feature</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Edge</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45.0</td>
   <td><a title="Released on 2013-10-29." href="/en-US/Firefox/Releases/25">25.0</a> (25.0)</td>
   <td>12</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>7.1</td>
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
   <th>Edge</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25.0 (25.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>12</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>8.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a title="findIndex()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"><code>Array.prototype.findIndex()</code></a></li>
 <li><a title="every() &#x65B9;&#x6CD5;&#x6D4B;&#x8BD5;&#x6570;&#x7EC4;&#x7684;&#x6240;&#x6709;&#x5143;&#x7D20;&#x662F;&#x5426;&#x90FD;&#x901A;&#x8FC7;&#x4E86;&#x6307;&#x5B9A;&#x51FD;&#x6570;&#x7684;&#x6D4B;&#x8BD5;&#x3002;" href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><code>Array.prototype.every()</code></a></li>
</ul>
                  
                
              