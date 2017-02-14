
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section></div>

<p><code style="font-style: normal;">constructor &#x662F;&#x548C; class &#x4E00;&#x8D77;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x548C;&#x521D;&#x59CB;&#x5316;&#x5BF9;&#x8C61;&#x7684;&#x7279;&#x6B8A;&#x65B9;&#x6CD5;</code>&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">constructor([arguments]) { ... }</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x4E00;&#x4E2A; class &#x4E2D;&#x53EA;&#x80FD;&#x6709;&#x4E00;&#x4E2A;&#x6307;&#x5B9A;&#x7684; &#x201D;constructor&#x201C; &#xFF08;&#x6784;&#x9020;&#xFF09;&#x65B9;&#x6CD5;&#x3002;&#x5982;&#x679C; class &#x5B9A;&#x4E49;&#x7684;&#x65F6;&#x5019;&#x5305;&#x542B;&#x591A;&#x4E2A;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#xFF0C;&#x7A0B;&#x5E8F;&#x5C06;&#x4F1A;&#x629B;&#x51FA;&#xA0;<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" title="SyntaxError&#xA0;&#x5BF9;&#x8C61;&#x4EE3;&#x8868;&#x5C1D;&#x8BD5;&#x89E3;&#x6790;&#x8BED;&#x6CD5;&#x4E0A;&#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x4EE3;&#x7801;&#x7684;&#x9519;&#x8BEF;&#x3002;"><code>SyntaxError</code></a> &#x9519;&#x8BEF;&#x3002;</p>

<p>&#x5728;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x4E2D;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; super &#x5173;&#x952E;&#x5B57;&#x6765;&#x8C03;&#x7528;&#x7236;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x3002;</p>

<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x663E;&#x5F0F;&#x6307;&#x5B9A;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#xFF0C;&#x5219;&#x4F1A;&#x6DFB;&#x52A0;&#x9ED8;&#x8BA4;&#x7684;constructor&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x5B9E;&#x4F8B;">&#x5B9E;&#x4F8B;</h2>

<h3 id="&#x4F7F;&#x7528;&#x6784;&#x9020;&#x65B9;&#x6CD5;"><code>&#x4F7F;&#x7528;</code>&#x6784;&#x9020;&#x65B9;&#x6CD5;</h3>

<p>&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x6765;&#x81EA;&#xA0;<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html" class="external">&#x7C7B;&#x7684;&#x5B9E;&#x4F8B;</a>&#xA0;(<a href="https://googlechrome.github.io/samples/classes-es6/index.html" class="external">&#x5728;&#x7EBF;&#xA0;demo</a>).</p>

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // &#x5728;&#x8FD9;&#x91CC;&#x8C03;&#x7528;&#x7236;&#x7C7B;&#x7684;&quot;length&quot;,&#x8D4B;&#x503C;&#x7ED9;&#x77E9;&#x5F62;&#x7684;&quot;width&quot;&#x548C;&quot;height&quot;&#x3002;
    super(length, length);
    // &#x6CE8;&#x610F;:&#x5B50;&#x7C7B;&#x5FC5;&#x987B;&#x5728;constructor&#x65B9;&#x6CD5;&#x4E2D;&#x8C03;&#x7528;super&#x65B9;&#x6CD5;&#xFF0C;&#x5426;&#x5219;&#x65B0;&#x5EFA;&#x5B9E;&#x4F8B;&#x65F6;&#x4F1A;&#x62A5;&#x9519;&#x3002;
    this.name = &apos;Square&apos;;
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}</pre>

<h3 id="&#x9ED8;&#x8BA4;&#x6784;&#x9020;&#x65B9;&#x6CD5;"><code>&#x9ED8;&#x8BA4;</code>&#x6784;&#x9020;&#x65B9;&#x6CD5;</h3>

<p>&#x5982;&#x679C;&#x6CA1;&#x6709;&#x663E;&#x5F0F;&#x5B9A;&#x4E49;&#xFF0C;&#x4F1A;&#x9ED8;&#x8BA4;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x7A7A;&#x7684;constructor&#x65B9;&#x6CD5;&#x3002;&#x5BF9;&#x4E8E;&#x57FA;&#x7C7B;&quot;Base classes&quot;&#xFF0C;&#x9ED8;&#x8BA4;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x5982;&#x4E0B;:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="function token">constructor</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span><span class="punctuation token">}</span></code></pre>

<p>&#x5BF9;&#x4E8E;&#x6D3E;&#x751F;&#x7C7B;&quot;Derived classes&quot; &#xFF0C;&#x9ED8;&#x8BA4;&#x6784;&#x9020;&#x65B9;&#x6CD5;&#x5982;&#x4E0B;:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="function token">constructor</span><span class="punctuation token">(</span><span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>args<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">super</span><span class="punctuation token">(</span><span class="punctuation token">.</span><span class="punctuation token">.</span><span class="punctuation token">.</span>args<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h2 id="&#x89C4;&#x683C;">&#x89C4;&#x683C;</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">&#x89C4;&#x683C;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x6CE8;&#x91CA;</th>
  </tr>
  <tr>
   <td><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-static-semantics-constructormethod" class="external" lang="en" hreflang="en">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Constructor Method</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>&#x521D;&#x59CB;&#x5B9A;&#x4E49;.</td>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/ecma262/#sec-static-semantics-constructormethod" class="external" lang="en" hreflang="en">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Constructor Method</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

<h2 id="&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;">&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;</h2>

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
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td>42.0</td>
   <td><a href="/en-US/Firefox/Releases/45" title="Released on 2016-03-08.">45</a> (45)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
  <tr>
   <td>Default constructors</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><a href="/en-US/Firefox/Releases/45" title="Released on 2016-03-08.">45</a> (45)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>&#x7279;&#x6027;</th>
   <th>Android</th>
   <th>Android Webview</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>42.0</td>
   <td>45.0 (45)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0</td>
  </tr>
  <tr>
   <td>Default constructors</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>45.0 (45)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="sect1">&#xA0;</h2>

<h2 id="&#x53C2;&#x9605;">&#x53C2;&#x9605;</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/super">super()</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/class"><code>class</code> expression</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/class"><code>class</code> declaration</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
                  
                
              