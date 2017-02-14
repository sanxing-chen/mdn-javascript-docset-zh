
                
                  
                    <div><section class="Quick_links" id="Quick_Links"><!-- --></section> <div style="background: #9CF49C;" class="overheadIndicator">
    <p><strong>&#x8BE5;&#x65B0;&#x7279;&#x6027;&#x5C5E;&#x4E8E; ECMAScript 2015&#xFF08;ES6&#xFF09;&#x89C4;&#x8303;&#xFF0C;&#x5728;&#x4F7F;&#x7528;&#x65F6;&#x8BF7;&#x6CE8;&#x610F;&#x6D4F;&#x89C8;&#x5668;&#x517C;&#x5BB9;&#x6027;&#x3002;</strong></p>
</div></div>

<p><strong>static</strong>&#x5173;&#x952E;&#x5B57;&#x4E3A;&#x4E00;&#x4E2A;&#x7C7B;&#x5B9A;&#x4E49;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x3002;</p>

<h2 id="&#x8BED;&#x6CD5;">&#x8BED;&#x6CD5;</h2>

<pre class="syntaxbox">static methodName() { ... }</pre>

<h2 id="&#x63CF;&#x8FF0;">&#x63CF;&#x8FF0;</h2>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x5728;&#x7C7B;&#x4E0A;&#x8C03;&#x7528;&#xFF0C;&#x5E76;&#x4E14;&#x4E0D;&#x80FD;&#x5728;&#x7C7B;&#x7684;&#x5B9E;&#x4F8B;&#x4E0A;&#x8C03;&#x7528;&#x3002;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x7ECF;&#x5E38;&#x88AB;&#x7528;&#x6765;&#x521B;&#x5EFA;&#x5DE5;&#x5177;&#x51FD;&#x6570;&#x3002;</p>

<h2 id="&#x8C03;&#x7528;&#x9759;&#x6001;&#x65B9;&#x6CD5;">&#x8C03;&#x7528;&#x9759;&#x6001;&#x65B9;&#x6CD5;</h2>

<h3 id="&#x4ECE;&#x53E6;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;">&#x4ECE;&#x53E6;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;</h3>

<p>&#x4E3A;&#x4E86;&#x5728;&#x540C;&#x4E00;&#x4E2A;&#x7C7B;&#x7684;&#x53E6;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x4E2D;&#x8C03;&#x7528;&#x4E00;&#x4E2A;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x4F60;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;&#xA0; <code><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this">this</a></code> &#x5173;&#x952E;&#x5B57;&#x3002;</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">class</span> <span class="class-name token">StaticMethodCall</span> <span class="punctuation token">{</span>
  <span class="keyword token">static</span> <span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">return</span> <span class="string token">&apos;Static method has been called&apos;</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
  <span class="keyword token">static</span> <span class="function token">anotherStaticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">return</span> <span class="keyword token">this</span><span class="punctuation token">.</span><span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="operator token">+</span> <span class="string token">&apos; from another static method&apos;</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>
StaticMethodCall<span class="punctuation token">.</span><span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span> 
<span class="comment token">// &apos;Static method has been called&apos;</span>

StaticMethodCall<span class="punctuation token">.</span><span class="function token">anotherStaticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span> 
<span class="comment token">// &apos;Static method has been called from another static method&apos;</span></code></pre>

<h3 id="&#x4ECE;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x65B9;&#x6CD5;">&#x4ECE;&#x7C7B;&#x7684;&#x6784;&#x9020;&#x51FD;&#x6570;&#x548C;&#x5176;&#x4ED6;&#x65B9;&#x6CD5;</h3>

<p>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x4E0D;&#x80FD;&#x76F4;&#x63A5;&#x5728;&#x975E;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x4E2D;&#x4F7F;&#x7528; <code><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this">this</a></code> &#x5173;&#x952E;&#x5B57;&#x6765;&#x8BBF;&#x95EE;&#x3002;&#x4F60;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x7C7B;&#x540D;&#x6765;&#x8C03;&#x7528;&#x5B83;&#x4EEC;&#xFF1A;<code>CLASSNAME.STATIC_METHOD_NAME()</code> &#x6216;&#x8005;&#x5C06;&#x5176;&#x4F5C;&#x4E3A;&#x6784;&#x9020;&#x51FD;&#x6570;&#x7684;&#x5C5E;&#x6027;&#x6765;&#x8C03;&#x7528;&#x8BE5;&#x65B9;&#x6CD5;&#xFF1A; <code>this.constructor.STATIC_METHOD_NAME()</code>.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">class</span> <span class="class-name token">StaticMethodCall</span> <span class="punctuation token">{</span>
  <span class="function token">constructor</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>StaticMethodCall<span class="punctuation token">.</span><span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span><span class="punctuation token">;</span> 
    <span class="comment token">// &apos;static method has been called.&apos; </span>

    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span><span class="keyword token">this</span><span class="punctuation token">.</span>constructor<span class="punctuation token">.</span><span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span><span class="punctuation token">;</span> 
    <span class="comment token">// &apos;static method has been called.&apos; </span>
  <span class="punctuation token">}</span>

  <span class="keyword token">static</span> <span class="function token">staticMethod</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">return</span> <span class="string token">&apos;static method has been called.&apos;</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span></code></pre>

<h2 id="&#x793A;&#x4F8B;">&#x793A;&#x4F8B;</h2>

<p>&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x8BF4;&#x660E;&#x4E86;&#x8FD9;&#x51E0;&#x70B9;&#xFF1A;</p>

<ol>
 <li>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x662F;&#x600E;&#x4E48;&#x5728;&#x4E00;&#x4E2A;&#x7C7B;&#x4E2D;&#x88AB;&#x5B9E;&#x73B0;&#x7684;&#x3002;</li>
 <li>&#x62E5;&#x6709;&#x9759;&#x6001;&#x6210;&#x5458;&#x7684;&#x7C7B;&#x662F;&#x53EF;&#x4EE5;&#x88AB;&#x5B50;&#x7C7B;&#x5316;&#x7684; &#x3002;</li>
 <li>&#x9759;&#x6001;&#x65B9;&#x6CD5;&#x53EF;&#x4EE5;&#x600E;&#x6837;&#x88AB;&#x8C03;&#x7528;&#x4EE5;&#x53CA;&#x600E;&#x6837;&#x4E0D;&#x53EF;&#x4EE5;&#x3002;</li>
</ol>

<pre class="brush: js">class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());          // 3
console.log(Tripple.tripple(6));         // 18
console.log(BiggerTripple.tripple(3));   // 81
var tp = new Tripple();
console.log(BiggerTripple.tripple(3));   // 81&#xFF08;&#x4E0D;&#x4F1A;&#x53D7;&#x7236;&#x7C7B;&#x88AB;&#x5B9E;&#x4F8B;&#x5316;&#x7684;&#x5F71;&#x54CD;&#xFF09;
console.log(tp.tripple());               // &apos;tp.tripple is not a function&apos;.</pre>

<h2 id="&#x89C4;&#x8303;">&#x89C4;&#x8303;</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">&#x89C4;&#x8303;</th>
   <th scope="col">&#x72B6;&#x6001;</th>
   <th scope="col">&#x8BF4;&#x660E;</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Standard">Standard</span></td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td><a hreflang="en" class="external" lang="en" href="https://tc39.github.io/ecma262/#sec-class-definitions">ECMAScript 2017 Draft (ECMA-262)<br><small lang="zh-CN">Class definitions</small></a></td>
   <td><span class="spec-Draft">Draft</span></td>
   <td>&#xA0;</td>
  </tr>
 </tbody>
</table>

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
   <td>42.0</td>
   <td><a title="Released on 2016-03-08." href="/en-US/Firefox/Releases/45">45</a> (45)</td>
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
   <th>Feature</th>
   <th>Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
   <th>Chrome for Android</th>
  </tr>
  <tr>
   <td>Basic support</td>
   <td><span style="color: #f00;">&#x672A;&#x5B9E;&#x73B0;</span></td>
   <td>45.0 (45)</td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td><span title="Compatibility unknown; please update this." style="color: rgb(255, 153, 0);">?</span></td>
   <td>42.0</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="sect1">&#xA0;</h2>

<h2 id="&#x76F8;&#x5173;&#x94FE;&#x63A5;">&#x76F8;&#x5173;&#x94FE;&#x63A5;</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/class"><code>class&#x8868;&#x8FBE;&#x5F0F;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/class"><code>class&#x58F0;&#x660E;</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
                  
                
              