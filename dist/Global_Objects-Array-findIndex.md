
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code><strong>findIndex()</strong></code>&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x6EE1;&#x8DB3;&#x63D0;&#x4F9B;&#x7684;&#x6D4B;&#x8BD5;&#x51FD;&#x6570;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;</p>

<pre><code>function isBigEnough(element) {
  return element &gt;= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3</code></pre>

<p>&#x53E6;&#x8BF7;&#x53C2;&#x89C1; &#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x6761;&#x4EF6;&#xFF0C;find()&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;undefined&#x3002;"><code>find()</code></a> &#x65B9;&#x6CD5;&#xFF0C;&#x5B83;&#x8FD4;&#x56DE;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x800C;&#x4E0D;&#x662F;&#x5176;&#x7D22;&#x5F15;&#x3002;</p>

<h2 name="Syntax" id="Syntax">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox"><code><em>arr</em>.findIndex(<em>callback</em>[, <em>thisArg</em>])</code></pre>

<h3 name="Parameters" id="Parameters">&#x53C2;&#x6570;</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>&#x9488;&#x5BF9;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;&#x5143;&#x7D20;, &#x90FD;&#x4F1A;&#x6267;&#x884C;&#x8BE5;&#x56DE;&#x8C03;&#x51FD;&#x6570;, &#x6267;&#x884C;&#x65F6;&#x4F1A;&#x81EA;&#x52A8;&#x4F20;&#x5165;&#x4E0B;&#x9762;&#x4E09;&#x4E2A;&#x53C2;&#x6570;:
 <dl>
  <dt><code>element</code></dt>
  <dd>&#x5F53;&#x524D;&#x5143;&#x7D20;.</dd>
  <dt><code>index</code></dt>
  <dd>&#x5F53;&#x524D;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;.</dd>
  <dt><code>array</code></dt>
  <dd>&#x8C03;&#x7528;<code>findIndex</code>&#x7684;&#x6570;&#x7EC4;.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>&#x53EF;&#x9009;&#x7684;&#x3002;&#x6267;&#x884C;&#xA0;<strong><code><span style="font-family: courier new,andale mono,monospace; line-height: inherit;">callback</span></code></strong> &#x65F6;&#x4F5C;&#x4E3A;&#xA0;<code style="font-size: 14px; line-height: inherit;">this&#x5BF9;&#x8C61;&#xA0;</code><span style="line-height: inherit;">&#x7684;&#x503C;.</span></dd>
</dl>

<h2 name="Description" id="Description">&#x63CF;&#x8FF0;</h2>

<p><code><strong>findIndex()</strong> </code>&#x65B9;&#x6CD5;&#x5BF9;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x6BCF;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x6267;&#x884C;&#x4E00;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x76F4;&#x81F3;&#x6709;&#x4E00;&#x4E2A;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x771F;&#x503C;<strong>&#xA0;&#x3002;</strong>&#x5982;&#x679C;&#x627E;&#x5230;&#x4E86;&#x4E00;&#x4E2A;&#x8FD9;&#x6837;&#x7684;&#x5143;&#x7D20;&#xFF0C; &#x5219;&#xA0;<code>findIndex</code> &#x5C06;&#x4F1A;&#x7ACB;&#x523B;&#x8FD4;&#x56DE;&#x8FD9;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x3002;&#x5426;&#x5219;&#xA0;<code>findIndex&#xA0;</code>&#x5C06;&#x4F1A;&#x8FD4;&#x56DE; -1&#x3002;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x53EA;&#x6709;&#x5728;&#x6570;&#x7EC4;&#x7684;&#x7D22;&#x5F15;&#x88AB;&#x5206;&#x914D;&#x503C;&#x7684;&#x65F6;&#x5019;&#x624D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#xFF0C;&#x82E5;&#x662F;&#x7D22;&#x5F15;&#x88AB;&#x5220;&#x9664;&#x6216;&#x8005;&#x6CA1;&#x6709;&#x88AB;&#x8D4B;&#x503C;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;&#x8C03;&#x7528;&#x3002;</p>

<p>&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x8C03;&#x7528;&#x65F6;&#x6709;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x5143;&#x7D20;&#x7684;&#x503C;&#xFF0C;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#xFF0C;&#x4EE5;&#x53CA;&#x88AB;&#x904D;&#x5386;&#x7684;&#x6570;&#x7EC4;&#x3002;</p>

<p>&#x5982;&#x679C;&#x4E00;&#x4E2A; <code>thisArg</code> &#x53C2;&#x6570;&#x88AB;&#x63D0;&#x4F9B;&#x7ED9; <code>findIndex</code>, &#x5B83;&#x5C06;&#x4F1A;&#x88AB;&#x5F53;&#x4F5C; <code>this&#xA0;</code>&#x4F7F;&#x7528;&#x5728;&#x6BCF;&#x6B21;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x88AB;&#x8C03;&#x7528;&#x7684;&#x65F6;&#x5019;&#x3002;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x88AB;&#x63D0;&#x4F9B;&#xFF0C;&#x5C06;&#x4F1A;&#x4F7F;&#x7528;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="undefined&#x6709;&#x591A;&#x91CD;&#x89D2;&#x8272;,&#x901A;&#x5E38;&#x60C5;&#x51B5;&#x4E0B;,&#x6211;&#x4EEC;&#x6240;&#x8BF4;&#x7684;undefined&#x90FD;&#x6307;&#x7684;&#x662F;&#x5168;&#x5C40;&#x5BF9;&#x8C61;&#x7684;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&quot;undefined&quot;."><code>undefined</code></a>&#x3002;</p>

<p><code>findIndex &#x4E0D;&#x4F1A;&#x4FEE;&#x6539;&#x6240;&#x8C03;&#x7528;&#x7684;&#x6570;&#x7EC4;&#x3002;</code></p>

<p>&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x8C03;&#x7528;<code>callback</code>&#x51FD;&#x6570;&#x65F6;&#x4F1A;&#x786E;&#x5B9A;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;&#x8303;&#x56F4;&#xFF0C;&#x56E0;&#x6B64;&#x5728;<code>findIndex</code>&#x65B9;&#x6CD5;&#x5F00;&#x59CB;&#x6267;&#x884C;&#x4E4B;&#x540E;&#x6DFB;&#x52A0;&#x5230;&#x6570;&#x7EC4;&#x7684;&#x65B0;&#x5143;&#x7D20;&#x5C06;&#x4E0D;&#x4F1A;&#x88AB;<code>callback</code>&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x3002;&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x4E00;&#x4E2A;&#x5C1A;&#x672A;&#x88AB;<code>callback</code>&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x7684;&#x5143;&#x7D20;&#x7684;&#x503C;&#x88AB;<code>callback</code>&#x51FD;&#x6570;&#x6240;&#x6539;&#x53D8;&#xFF0C;&#x90A3;&#x4E48;&#x5F53;<code>callback</code>&#x51FD;&#x6570;&#x8BBF;&#x95EE;&#x5230;&#x5B83;&#x65F6;&#xFF0C;&#x5B83;&#x7684;&#x503C;&#x662F;&#x5C06;&#x662F;&#x6839;&#x636E;&#x5B83;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x7684;&#x7D22;&#x5F15;&#x6240;&#x8BBF;&#x95EE;&#x5230;&#x7684;&#x5F53;&#x524D;&#x503C;&#x3002;&#x88AB;&#x5220;&#x9664;&#x7684;&#x5143;&#x7D20;&#x4E0D;&#x4F1A;&#x88AB;&#x8BBF;&#x95EE;&#x5230;&#x3002;</p>

<h2 name="Examples" id="Examples">&#x793A;&#x4F8B;</h2>

<h3 name="Example:_Testing_size_of_all_array_elements" id="Example:_Testing_size_of_all_array_elements">&#x793A;&#x4F8B;1: &#x67E5;&#x627E;&#x6570;&#x7EC4;&#x4E2D;&#x9996;&#x4E2A;&#x8D28;&#x6570;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;</h3>

<p><span style="line-height: inherit;">&#x4E0B;&#x9762;&#x7684;&#x793A;&#x4F8B;&#x6F14;&#x793A;&#x4E86;&#x5982;&#x4F55;&#x67E5;&#x627E;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;&#x4E2D;&#x9996;&#x4E2A;&#x8D28;&#x6570;&#x5143;&#x7D20;&#x7684;&#x7D22;&#x5F15;, &#x627E;&#x4E0D;&#x5230;&#x5219;&#x8FD4;&#x56DE; -1</span>.</p>

<pre class="brush: js"><code><span class="kwd">function</span><span class="pln"> isPrime</span><span class="pun">(element, index, array</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> start </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">start </span><span class="pun">&lt;=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">sqrt</span><span class="pun">(element</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(element</span><span class="pln"> </span><span class="pun">%</span><span class="pln"> start</span><span class="pun">++</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> (element </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code>

console.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, &#x6CA1;&#x627E;&#x5230;&#x8D28;&#x6570;&#x5143;&#x7D20;
console.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>&#x672C;&#x65B9;&#x6CD5;&#x5728;ECMAScript 6&#x89C4;&#x8303;&#x4E2D;&#x88AB;&#x52A0;&#x5165;&#xFF0C;&#x53EF;&#x80FD;&#x4E0D;&#x5B58;&#x5728;&#x4E8E;&#x67D0;&#x4E9B;&#x5B9E;&#x73B0;&#x4E2D;&#x3002;&#x4F60;&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6765;&#x8865;&#x5145; <code>Array.prototype.findIndex</code>&#x3002;</p>

<pre class="brush: js">if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError(&apos;Array.prototype.findIndex called on null or undefined&apos;);
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
        return i;
      }
    }
    return -1;
  };
}
</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findIndex" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Array.prototype.findIndex</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
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
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>45.0</td>
   <td><a href="/en-US/Firefox/Releases/25" title="Released on 2013-10-29.">25.0</a> (25.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
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
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>25.0 (25.0)</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 name="See_also" id="See_also">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" title="&#x5982;&#x679C;&#x6570;&#x7EC4;&#x4E2D;&#x67D0;&#x4E2A;&#x5143;&#x7D20;&#x6EE1;&#x8DB3;&#x6D4B;&#x8BD5;&#x6761;&#x4EF6;&#xFF0C;find()&#xA0;&#x65B9;&#x6CD5;&#x5C31;&#x4F1A;&#x8FD4;&#x56DE;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x6EE1;&#x8DB3;&#x6761;&#x4EF6;&#x7684;&#x5143;&#x7D20;&#xFF0C;&#x5219;&#x8FD4;&#x56DE;&#xA0;undefined&#x3002;"><code>Array.prototype.find()</code></a> <span title="&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x5B9E;&#x9A8C;&#x6027;&#x7684; API&#xFF0C;&#x8BF7;&#x5C3D;&#x91CF;&#x4E0D;&#x8981;&#x5728;&#x751F;&#x4EA7;&#x73AF;&#x5883;&#x4E2D;&#x4F7F;&#x7528;&#x5B83;&#x3002;"><i class="icon-beaker"> </i></span></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()&#x65B9;&#x6CD5;&#x8FD4;&#x56DE;&#x7ED9;&#x5B9A;&#x5143;&#x7D20;&#x80FD;&#x627E;&#x5728;&#x6570;&#x7EC4;&#x4E2D;&#x627E;&#x5230;&#x7684;&#x7B2C;&#x4E00;&#x4E2A;&#x7D22;&#x5F15;&#x503C;&#xFF0C;&#x5426;&#x5219;&#x8FD4;&#x56DE;-1&#x3002;"><code>Array.prototype.indexOf()</code></a></li>
</ul>
                  
                
              